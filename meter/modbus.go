package meter

import (
	"errors"
	"fmt"

	"github.com/andig/evcc/api"
	"github.com/andig/evcc/util"
	"github.com/andig/evcc/util/modbus"
	"github.com/volkszaehler/mbmd/meters"
	"github.com/volkszaehler/mbmd/meters/rs485"
	"github.com/volkszaehler/mbmd/meters/sunspec"
)

// Modbus is an api.Meter implementation with configurable getters and setters.
type Modbus struct {
	log      *util.Logger
	conn     *modbus.Connection
	device   meters.Device
	opPower  modbus.Operation
	opEnergy modbus.Operation
	opSoC    modbus.Operation
}

type modbusConfig = struct {
	Model           string `ui:"de=Zählertyp"`
	modbus.Settings `mapstructure:",squash"`
	Power           string `validate:"required" ui:"de=Meßwert Leistung"`
	Energy          string `ui:"de=Meßwert Zählerstand (nur Ladezähler)"`
	SoC             string `ui:"de=Meßwert Ladezustand (nur Batterien)"`
}

func modbusDefaults() modbusConfig {
	return modbusConfig{
		Power: "Power",
	}
}

// TODO clarify sunspec model id
func init() {
	registry.Add("modbus", "ModBus", NewModbusFromConfig, nil)

	// TCP
	registry.Add("modbus-tcp", "ModBus (TCP)", NewModbusFromConfig, struct {
		Model  string `validate:"oneof=SMA Kostal Fronius SolarEdge Sunspec" ui:"de=Zählertyp"`
		URI    string `validate:"required"`
		ID     uint8  `ui:"de=ModBus Slave ID"`
		RTU    *bool  `ui:"de=ModBus RTU Gerät"`
		Power  string `validate:"required" ui:"de=Meßwert Leistung"`
		Energy string `ui:"de=Meßwert Zählerstand (nur Ladezähler)"`
		SoC    string `ui:"de=Meßwert Ladezustand (nur Batterien)"`
	}{
		Power: "Power",
		ID:    1,
	})

	// Serial
	isTrue := true
	registry.Add("modbus-serial", "ModBus (Seriell)", NewModbusFromConfig, struct {
		Model    string `validate:"oneof=ABB DZG IEM3000 INEPRO JANITZA MPM ORNO1P ORNO1P504 ORNO3P SBC SDM SDM220 SDM230 SDM72" ui:"de=Zählertyp"`
		Device   string `validate:"required" ui:"de=Serielle Schnittstelle"`
		Comset   string `validate:"required,oneof=8E1 8N1" ui:"de=Kommunikationseinstellungen"`
		Baudrate int    `validate:"required,oneof=2400 9600 19200" ui:"de=Baudrate"`
		ID       uint8  `ui:"de=ModBus Slave ID"`
		RTU      *bool  `ui:",hide"`
		Power    string `validate:"required" ui:"de=Meßwert Leistung"`
		Energy   string `ui:"de=Meßwert Zählerstand (nur Ladezähler)"`
		SoC      string `ui:"de=Meßwert Ladezustand (nur Batterien)"`
	}{
		Device:   "/dev/usb0",
		Comset:   "8E1",
		Baudrate: 9600,
		Power:    "Power",
		ID:       1,
		RTU:      &isTrue,
	})
}

//go:generate go run ../cmd/tools/decorate.go -p meter -f decorateModbus -b api.Meter -o modbus_decorators -t "api.MeterEnergy,TotalEnergy,func() (float64, error)" -t "api.Battery,SoC,func() (float64, error)"

// NewModbusFromConfig creates api.Meter from config
func NewModbusFromConfig(other map[string]interface{}) (api.Meter, error) {
	cc := modbusDefaults()

	if err := util.DecodeOther(other, &cc); err != nil {
		return nil, err
	}

	// assume RTU if not set and this is a known RS485 meter model
	if cc.RTU == nil {
		b := modbus.IsRS485(cc.Model)
		cc.RTU = &b
	}

	log := util.NewLogger("modbus")

	conn, err := modbus.NewConnection(cc.URI, cc.Device, cc.Comset, cc.Baudrate, *cc.RTU, cc.ID)
	if err != nil {
		return nil, err
	}

	// set non-default timeout
	if cc.Timeout > 0 {
		conn.Timeout(cc.Timeout)
	}

	conn.Logger(log.TRACE)

	// prepare device
	device, err := modbus.NewDevice(cc.Model, cc.SubDevice, *cc.RTU)

	if err == nil {
		err = device.Initialize(conn)

		// silence Kostal implementation errors
		if errors.Is(err, meters.ErrPartiallyOpened) {
			err = nil
		}
	}

	if err != nil {
		return nil, err
	}

	m := &Modbus{
		log:    log,
		conn:   conn,
		device: device,
	}

	cc.Power = modbus.ReadingName(cc.Power)
	if err := modbus.ParseOperation(device, cc.Power, &m.opPower); err != nil {
		return nil, fmt.Errorf("invalid measurement for power: %s", cc.Power)
	}

	// decorate energy reading
	var totalEnergy func() (float64, error)
	if cc.Energy != "" {
		cc.Energy = modbus.ReadingName(cc.Energy)
		if err := modbus.ParseOperation(device, cc.Energy, &m.opEnergy); err != nil {
			return nil, fmt.Errorf("invalid measurement for energy: %s", cc.Energy)
		}

		totalEnergy = m.totalEnergy
	}

	// decorate energy reading
	var soc func() (float64, error)
	if cc.SoC != "" {
		cc.SoC = modbus.ReadingName(cc.SoC)
		if err := modbus.ParseOperation(device, cc.SoC, &m.opSoC); err != nil {
			return nil, fmt.Errorf("invalid measurement for soc: %s", cc.SoC)
		}

		soc = m.soc
	}

	return decorateModbus(m, totalEnergy, soc), nil
}

// floatGetter executes configured modbus read operation and implements func() (float64, error)
func (m *Modbus) floatGetter(op modbus.Operation) (float64, error) {
	var res meters.MeasurementResult
	var err error

	if dev, ok := m.device.(*rs485.RS485); ok {
		res, err = dev.QueryOp(m.conn, op.MBMD)
	}

	if dev, ok := m.device.(*sunspec.SunSpec); ok {
		if op.MBMD.IEC61850 != 0 {
			res, err = dev.QueryOp(m.conn, op.MBMD.IEC61850)
		} else {
			res, err = dev.QueryPoint(
				m.conn,
				op.SunSpec.Model,
				op.SunSpec.Block,
				op.SunSpec.Point,
			)
		}
	}

	// silence NaN reading errors by assuming zero
	if err != nil && errors.Is(err, meters.ErrNaN) {
		res.Value = 0
		err = nil
	}

	if err == nil {
		m.log.TRACE.Printf("%+v", res)
	}

	return res.Value, err
}

// CurrentPower implements the Meter.CurrentPower interface
func (m *Modbus) CurrentPower() (float64, error) {
	return m.floatGetter(m.opPower)
}

// totalEnergy implements the Meter.TotalEnergy interface
func (m *Modbus) totalEnergy() (float64, error) {
	return m.floatGetter(m.opEnergy)
}

// soc implements the Battery.SoC interface
func (m *Modbus) soc() (float64, error) {
	return m.floatGetter(m.opSoC)
}
