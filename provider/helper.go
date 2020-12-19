package provider

import (
	"fmt"

	"github.com/andig/evcc/util"
)

// setFormattedValue formats a message template of returns the value formatted as %v is template is empty
func setFormattedValue(message, param string, v interface{}) (string, error) {
	if message == "" {
		return fmt.Sprintf("%v", v), nil
	}

	return util.ReplaceFormatted(message, map[string]interface{}{
		param: v,
	})
}
