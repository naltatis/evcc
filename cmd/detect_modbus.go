package cmd

import (
	"errors"
	"fmt"
	"net"
	"time"

	"github.com/andig/evcc/util"
	"github.com/andig/gosunspec/models/model1"
	"github.com/volkszaehler/mbmd/meters"
	"github.com/volkszaehler/mbmd/meters/sunspec"
)

func init() {
	registry.Add("modbus", ModbusHandlerFactory)
}

func ModbusHandlerFactory(conf map[string]interface{}) (TaskHandler, error) {
	handler := ModbusHandler{
		Port:    502,
		IDs:     []uint8{1},
		Timeout: timeout,
	}

	err := util.DecodeOther(conf, &handler)

	if err == nil && len(handler.IDs) == 0 {
		err = errors.New("missing slave IDs")
	}

	return &handler, err
}

type ModbusHandler struct {
	Port    int
	IDs     []uint8
	Timeout time.Duration
}

func (h *ModbusHandler) Test(ip net.IP) bool {
	addr := fmt.Sprintf("%s:%d", ip.String(), h.Port)
	conn := meters.NewTCP(addr)
	dev := sunspec.NewDevice("sunspec")

	conn.Timeout(timeout)

	for idx, slaveID := range h.IDs {
		// grace period for id switch
		if idx > 0 {
			time.Sleep(100 * time.Millisecond)
		}

		conn.Slave(slaveID)
		err := dev.Initialize(conn.ModbusClient())

		if errors.Is(err, meters.ErrPartiallyOpened) {
			err = nil
		}
		if err != nil {
			continue
		}

		_, point, err := dev.QueryPointAny(
			conn.ModbusClient(),
			model1.ModelID,
			0,
			model1.Md,
		)
		// fmt.Println(point)

		if err != nil {
			fmt.Println("modbus:", err)
			continue
		}

		return true
	}

	return false
}
