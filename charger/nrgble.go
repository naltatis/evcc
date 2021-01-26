// +build !linux

package charger

import (
	"errors"

	"github.com/andig/evcc/api"
)

func init() {
	registry.Add("nrgkick-bluetooth", "NRGkick (Bluetooth)", NewNRGKickBLEFromConfig, nil)
}

// NewNRGKickBLEFromConfig creates a NRGKickBLE charger from generic config
func NewNRGKickBLEFromConfig(other map[string]interface{}) (api.Charger, error) {
	return nil, errors.New("NRGKick bluetooth is only supported on linux")
}
