<template>
	<div class="container">
		<div class="row mt-4">
			<div class="col-12"></div>
		</div>
		<div class="row mt-4">
			<div class="col-4">
				<div class="list-group sticky-top py-3" id="side-navigation">
					<a href="#/setup/site" class="list-group-item list-group-item-action">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-2">Hausinstallation</h5>
							<strong class="text-success">✓</strong>
						</div>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>Netzzähler</span>
							<small>2,2 kW Bezug</small>
						</p>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>PV Anlage</span>
							<small>1,2 kW Produktion</small>
						</p>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>Hausakku</span>
							<small>43 % / -0.5 kW</small>
						</p>
					</a>
					<a href="#/setup/vehicles" class="list-group-item list-group-item-action">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-2">Fahrzeuge</h5>
							<strong class="text-success">✓</strong>
						</div>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>VW ID.3</span>
							<small class="text-muted">lädt / 47%</small>
						</p>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>Tesla Model 3</span>
							<small class="text-muted">schläft / 90%</small>
						</p>
					</a>
					<a href="#/setup/loadpoints" class="list-group-item list-group-item-action">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-2">Ladepunkte</h5>
							<strong class="text-success">✓</strong>
						</div>
						<p class="mb-1">
							<strong>Carport</strong>
							<span class="d-flex w-100 justify-content-between">
								<span>NRGKick Connect</span>
								<small class="text-muted">nicht verbunden</small>
							</span>
						</p>
						<p class="mb-1">
							<strong>Garage</strong>
							<span class="d-flex w-100 justify-content-between">
								<span>KEBA X30</span>
								<small class="text-muted">lädt / 11 kW</small>
							</span>
						</p>
					</a>
					<a href="#/setup/interfaces" class="list-group-item list-group-item-action">
						<h5 class="mb-2">Schnittstellen</h5>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>MQTT</span>
							<small class="text-success">konfiguriert</small>
						</p>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>InfluxDB</span>
							<small class="text-muted">nicht konfiguriert</small>
						</p>
					</a>
					<a href="#/setup/notifications" class="list-group-item list-group-item-action">
						<h5 class="mb-2">Benachrichtigungen</h5>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>Pushover</span>
							<small class="text-success">konfiguriert</small>
						</p>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>Telegram</span>
							<small class="text-muted">nicht konfiguriert</small>
						</p>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>E-Mail</span>
							<small class="text-muted">nicht konfiguriert</small>
						</p>
					</a>
				</div>
			</div>
			<div
				class="col-8"
				data-bs-spy="scroll"
				data-bs-target="#list-example"
				data-bs-offset="0"
				tabindex="0"
			>
				<h1 class="mb-4 pt-2">Konfiguration</h1>

				<h2 id="/setup/site">Hausinstallation</h2>
				<Site :meters="meters" />
				<h2 id="/setup/vehicles">Fahrzeuge</h2>
				<Vehicles :vehicle-types="vehicleTypes" />
				<h2 id="/setup/loadpoints">Ladepunkte</h2>
				<Loadpoints :charger-types="chargerTypes" />
				<h2 id="/setup/interfaces">Schnittstellen</h2>
				<Interfaces />
				<h2 id="/setup/notifications">Benachrichtigungen</h2>
				<Notifications />
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

import Site from "../components/configuration/Site";
import Vehicles from "../components/configuration/Vehicles";
import Loadpoints from "../components/configuration/Loadpoints";
import Interfaces from "../components/configuration/Interfaces";
import Notifications from "../components/configuration/Notifications";

export default {
	name: "Setup",
	components: { Site, Vehicles, Loadpoints, Interfaces, Notifications },
	data: function () {
		return {
			meters: [],
			vehicleTypes: [],
			chargerTypes: [],
		};
	},
	mounted: async function () {
		try {
			this.meters = (await axios.get("/config/types/meter")).data;
			this.vehicleTypes = (await axios.get("/config/types/vehicle")).data;
			this.chargerTypes = (await axios.get("/config/types/charger")).data;
		} catch (e) {
			window.toasts.error(e);
		}
	},
};
</script>
