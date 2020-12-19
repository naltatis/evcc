package cmd

import (
	"errors"
	"fmt"
	"math/rand"
	"strconv"
	"time"

	"github.com/andig/evcc/core"
	"github.com/andig/evcc/hems"
	"github.com/andig/evcc/provider/mqtt"
	"github.com/andig/evcc/push"
	"github.com/andig/evcc/server"
	"github.com/andig/evcc/util"
	"github.com/andig/evcc/util/pipe"
	"github.com/spf13/viper"
)

func init() {
	rand.Seed(time.Now().UnixNano())
}

var cp = &ConfigProvider{}

// setup influx databases
func configureDatabase(conf server.InfluxConfig, loadPoints []core.LoadPointAPI, in <-chan util.Param) {
	influx := server.NewInfluxClient(
		conf.URL,
		conf.Token,
		conf.Org,
		conf.User,
		conf.Password,
		conf.Database,
	)

	// eliminate duplicate values
	dedupe := pipe.NewDeduplicator(30*time.Minute, "socCharge")
	in = dedupe.Pipe(in)

	// reduce number of values written to influx
	limiter := pipe.NewLimiter(5 * time.Second)
	in = limiter.Pipe(in)

	go influx.Run(loadPoints, in)
}

// setup mqtt
func configureMQTT(conf mqttConfig) {
	log := util.NewLogger("mqtt")
	clientID := mqtt.ClientID()

	var err error
	mqtt.Instance, err = mqtt.RegisteredClient(log, conf.Broker, conf.User, conf.Password, clientID, 1)
	if err != nil {
		log.FATAL.Fatalf("failed configuring mqtt: %v", err)
	}
}

// setup HEMS
func configureHEMS(conf typedConfig, site *core.Site, cache *util.Cache, httpd *server.HTTPd) hems.HEMS {
	hems, err := hems.NewFromConfig(conf.Type, conf.Other, site, cache, httpd)
	if err != nil {
		log.FATAL.Fatalf("failed configuring hems: %v", err)
	}
	return hems
}

// setup messaging
func configureMessengers(conf messagingConfig, cache *util.Cache) chan push.Event {
	notificationChan := make(chan push.Event, 1)
	notificationHub := push.NewHub(conf.Events, cache)

	for _, service := range conf.Services {
		impl, err := push.NewMessengerFromConfig(service.Type, service.Other)
		if err != nil {
			log.FATAL.Fatal(err)
			log.FATAL.Fatalf("failed configuring messenger %s: %v", service.Type, err)
		}
		notificationHub.Add(impl)
	}

	go notificationHub.Run(notificationChan)

	return notificationChan
}

func loadConfig(conf config) (site *core.Site, err error) {
	if err = cp.configure(conf); err == nil {
		var loadPoints []*core.LoadPoint
		loadPoints, err = configureLoadPoints(conf, cp)

		if err == nil {
			site, err = configureSite(conf.Site, cp, loadPoints)
		}
	}

	return site, err
}

func configureSite(conf map[string]interface{}, cp *ConfigProvider, loadPoints []*core.LoadPoint) (*core.Site, error) {
	site, err := core.NewSiteFromConfig(log, cp, conf, loadPoints)
	if err != nil {
		return nil, fmt.Errorf("failed configuring site: %w", err)
	}

	return site, nil
}

func configureLoadPoints(conf config, cp *ConfigProvider) (loadPoints []*core.LoadPoint, err error) {
	lpInterfaces, ok := viper.AllSettings()["loadpoints"].([]interface{})
	if !ok || len(lpInterfaces) == 0 {
		return nil, errors.New("missing loadpoints")
	}

	for id, lpcI := range lpInterfaces {
		var lpc map[string]interface{}
		if err := util.DecodeOther(lpcI, &lpc); err != nil {
			return nil, fmt.Errorf("failed decoding loadpoint configuration: %w", err)
		}

		log := util.NewLogger("lp-" + strconv.Itoa(id+1))
		lp, err := core.NewLoadPointFromConfig(log, cp, lpc)
		if err != nil {
			return nil, fmt.Errorf("failed configuring loadpoint: %w", err)
		}

		loadPoints = append(loadPoints, lp)
	}

	return loadPoints, nil
}

func loadConfigFile(cfgFile string) (conf config) {
	if cfgFile != "" {
		log.INFO.Println("using config file", cfgFile)
		if err := viper.UnmarshalExact(&conf); err != nil {
			log.FATAL.Fatalf("failed parsing config file %s: %v", cfgFile, err)
		}
	} else {
		log.FATAL.Fatal("missing evcc config")
	}

	return conf
}
