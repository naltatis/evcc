<template>
	<div class="container">
		<div class="row mt-4 border-bottom">
			<div class="col-12"><h1>Konfiguration</h1></div>
		</div>
		<div class="row mt-4">
			<div class="col-md-5 col-lg-4">
				<div class="list-group sticky-top py-3">
					<router-link to="/setup/site" class="list-group-item list-group-item-action">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-2">Hausinstallation</h5>
							<strong class="text-success">✓</strong>
						</div>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>Netzzähler</span>
							<small class="text-muted">2,2 kW Bezug</small>
						</p>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>PV Anlage</span>
							<small class="text-muted">1,2 kW Produktion</small>
						</p>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>Hausakku</span>
							<small class="text-muted">43 % / -0.5 kW</small>
						</p>
					</router-link>
					<router-link
						to="/setup/vehicles"
						class="list-group-item list-group-item-action"
					>
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
					</router-link>
					<router-link
						to="/setup/loadpoints"
						class="list-group-item list-group-item-action"
					>
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
					</router-link>
					<router-link
						to="/setup/interfaces"
						class="list-group-item list-group-item-action"
					>
						<h5 class="mb-2">Schnittstellen</h5>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>MQTT</span>
							<small class="text-success">konfiguriert</small>
						</p>
						<p class="mb-1 d-flex w-100 justify-content-between">
							<span>InfluxDB</span>
							<small class="text-muted">nicht konfiguriert</small>
						</p>
					</router-link>
					<router-link
						to="/setup/notifications"
						class="list-group-item list-group-item-action"
					>
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
					</router-link>
				</div>
			</div>
			<div class="col-md-7 offset-lg-1 col-lg-7 py-3">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Setup",
};
</script>

<style scoped>
.list-group-item-action.router-link-active {
	color: inherit;
	border: 1px solid rgba(0, 0, 0, 0.125);
	background-color: inherit;
	border-right-color: var(--primary);
}
.list-group-item-action:after {
	content: "";
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	width: 4px;
	opacity: 0;
	background-color: var(--primary);
	transition: opacity 100ms ease-in;
}
.list-group-item-action.router-link-active:after {
	opacity: 1;
}
</style>
