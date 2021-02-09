<template>
	<div>
		<div class="d-flex justify-content-start align-items-baseline mb-4">
			<h2>Ladepunkte</h2>
			<a class="text px-3" href="#" @click.prevent="addLoadpoint">hinzufügen</a>
		</div>
		<div v-for="(loadpoint, index) in loadpoints" :key="index" class="border-top pt-4 my-4">
			<div class="d-flex justify-content-start align-items-baseline mb-4">
				<h3 class="mb-0">{{ loadpoint.name }}</h3>
				<a class="text px-3" href="#" @click.prevent="renameLoadpoint(index)">umbenennen</a>
			</div>
			<Form
				v-if="editMode === `charger_${index}`"
				name="Hersteller"
				:meters="chargerTypes"
				:save-endpoint="`/config/loadpoints/${index}/charger`"
				test-endpoint="/config/test/charger"
				@close="close"
			/>
			<div class="mb-3 mt-1" v-else>
				<span v-if="loadpoint.charger"> {{ loadpoint.charger.name }} </span>
				<a href="#" @click.prevent="open(`charger_${index}`)">ändern</a>
			</div>
			<!--
			<h5 class="mt-4 mb-3">Fahrzeuge</h5>
			<form>
				<div class="form-check form-check-inline">
					<input type="checkbox" class="form-check-input" id="vehicle_0_0" checked />
					<label class="form-check-label" for="vehicle_0_0"> VW ID.3 </label>
				</div>
				<div class="form-check">
					<input type="checkbox" class="form-check-input" id="vehicle_0_1" />
					<label class="form-check-label" for="vehicle_0_1"> Tesla Model 3 </label>
				</div>
			</form>
			-->
			<h5 class="mt-4 mb-3">Ladeverhalten</h5>
			<p>
				Modus: PV-only<br />
				Ladeziel: 90% (sofort 20%)<br />
				Ladeleistung: 6A bis 16A, 3-phasig<br />
			</p>
			<div v-if="loadpoints.length > 1">
				<a class="text-danger" href="#" @click.prevent="removeLoadpoint(index)">
					Ladedpunkt entfernen
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import Form from "./Form";
import axios from "axios";

export default {
	name: "Loadpoints",
	components: { Form },
	data: function () {
		return {
			editMode: undefined,
			chargerTypes: [],
			loadpoints: [
				{ name: "Carport", charger: { name: "NRGKick Connect" } },
				{ name: "Garage", charger: { name: "KEBA X30" } },
			],
		};
	},
	mounted: async function () {
		try {
			this.chargerTypes = (await axios.get("/config/types/charger")).data;
		} catch (e) {
			window.toasts.error(e);
		}
	},
	methods: {
		open: function (index) {
			this.editMode = index;
		},
		close: function () {
			this.editMode = undefined;
		},
		addLoadpoint: function () {
			const newLoadpoint = { name: "Ladepunkt", charger: undefined };
			// TODO Make an API Request
			this.loadpoints = [...this.loadpoints, newLoadpoint];
		},
		removeLoadpoint: function (index) {
			// TODO Make an API Request
			this.loadpoints = this.loadpoints.filter((loadpoint, i) => i !== index);
		},
	},
};
</script>
<style scoped>
.card-header-with-link {
	display: flex;
	justify-content: space-between;
	align-items: baseline;
}
</style>
