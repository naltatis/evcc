package cmd

import (
	"encoding/binary"
	"errors"
	"fmt"
	"net"
	"time"

	"github.com/andig/evcc/util"
	"github.com/andig/evcc/util/modbus"
	gridx "github.com/grid-x/modbus"
	"github.com/volkszaehler/mbmd/meters"
	"github.com/volkszaehler/mbmd/meters/rs485"
	"github.com/volkszaehler/mbmd/meters/sunspec"
)

func init() {
	registry.Add("modbus", ModbusHandlerFactory)
}

func ModbusHandlerFactory(conf map[string]interface{}) (TaskHandler, error) {
	handler := ModbusHandler{
		Port:    502,
		IDs:     []uint8{1},
		Models:  []int{1},
		Point:   "Md", // Model
		Timeout: 5 * timeout,
	}

	err := util.DecodeOther(conf, &handler)

	if err == nil && len(handler.IDs) == 0 {
		err = errors.New("missing slave IDs")
	}

	if handler.Register.Address > 0 {
		handler.op, err = modbus.RegisterOperation(handler.Register)
	}

	return &handler, err
}

type ModbusHandler struct {
	Port     int
	IDs      []uint8
	Models   []int
	Point    string
	Register modbus.Register `mapstructure:",squash"`
	Values   []int
	op       rs485.Operation
	Timeout  time.Duration
}

func (h *ModbusHandler) testRegister(conn gridx.Client) bool {
	var bytes []byte
	var err error

	switch h.op.FuncCode {
	case rs485.ReadHoldingReg:
		bytes, err = conn.ReadHoldingRegisters(h.op.OpCode, h.op.ReadLen)
	case rs485.ReadInputReg:
		bytes, err = conn.ReadInputRegisters(h.op.OpCode, h.op.ReadLen)
	}

	if err != nil {
		return false
	}

	if len(h.Values) == 0 {
		return true
	}

	var u uint64
	switch h.op.ReadLen {
	case 1:
		u = uint64(binary.BigEndian.Uint16(bytes))
	case 2:
		u = uint64(binary.BigEndian.Uint32(bytes))
	case 4:
		u = binary.BigEndian.Uint64(bytes)
	}

	for _, val := range h.Values {
		if u == uint64(val) {
			return true
		}
	}

	return false
}

func (h *ModbusHandler) testSunSpec(conn meters.Connection, dev *sunspec.SunSpec) bool {
	err := dev.Initialize(conn.ModbusClient())
	if errors.Is(err, meters.ErrPartiallyOpened) {
		err = nil
	}
	if err != nil {
		return false
	}

	if len(h.Models) == 0 {
		return true
	}

	for _, model := range h.Models {
		_, res, err := dev.QueryPointAny(
			conn.ModbusClient(),
			model,
			0,
			h.Point,
		)

		if err == nil {
			fmt.Printf("modbus: %d.%s/%v %+v\n", model, h.Point, res.Value(), res)
			return true
		}
	}

	return false
}

func (h *ModbusHandler) Test(ip net.IP) bool {
	addr := fmt.Sprintf("%s:%d", ip.String(), h.Port)
	conn := meters.NewTCP(addr)
	dev := sunspec.NewDevice("sunspec")

	conn.Timeout(h.Timeout)

	for idx, slaveID := range h.IDs {
		// grace period for id switch
		conn.Slave(slaveID)
		if idx > 0 {
			time.Sleep(100 * time.Millisecond)
		}

		var ok bool
		if h.op.OpCode > 0 {
			ok = h.testRegister(conn.ModbusClient())
		} else {
			ok = h.testSunSpec(conn, dev)
		}

		if ok {
			return true
		}
	}

	return false
}
