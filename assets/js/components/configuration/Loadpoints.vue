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

			<div class="d-flex justify-content-start align-items-baseline mt-4 mb-2">
				<h5 class="my-0">Wallbox</h5>
				<a
					class="text px-2"
					href="#"
					@click.prevent="open(`charger_${index}`)"
					v-if="editMode !== `charger_${index}`"
				>
					ändern
				</a>
			</div>
			<Form
				v-if="editMode === `charger_${index}`"
				name="Hersteller"
				:meters="chargerTypes"
				:plugin-types="pluginTypes"
				:save-endpoint="`/config/loadpoints/${index}/charger`"
				test-endpoint="/config/test/charger"
				@close="close"
			/>
			<div class="mb-3 mt-1" v-else>
				<span v-if="loadpoint.charger"> {{ loadpoint.charger.name }} </span>
			</div>

			<div class="d-flex justify-content-start align-items-baseline mt-4 mb-2">
				<h5 class="my-0">Messgerät</h5>
				<a
					class="text px-2"
					href="#"
					@click.prevent="open(`meter_${index}`)"
					v-if="editMode !== `meter_${index}`"
				>
					ändern
				</a>
			</div>
			<Form
				v-if="editMode === `meter_${index}`"
				name="Hersteller"
				:meters="meterTypes"
				:plugin-types="pluginTypes"
				:save-endpoint="`/config/loadpoints/${index}/meter/charge`"
				test-endpoint="/config/test/meter/charge"
				@close="close"
			/>
			<div class="mb-3 mt-1" v-else>
				<span v-if="loadpoint.meter"> {{ loadpoint.meter.name }} </span>
			</div>

			<div class="d-flex justify-content-start align-items-baseline mt-4 mb-2">
				<h5 class="my-0">Ladeverhalten</h5>
				<a
					class="text px-2"
					href="#"
					@click.prevent="open(`behaviour_${index}`)"
					v-if="editMode !== `behaviour_${index}`"
				>
					ändern
				</a>
			</div>
			<Form
				v-if="editMode === `behaviour_${index}`"
				:fields="behaviourFields"
				:plugin-types="pluginTypes"
				:save-endpoint="`/config/loadpoints/${index}`"
				@close="close"
			/>
			<p v-else>
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
			meterTypes: [],
			chargerTypes: [],
			loadpointConfig: [[]],
			pluginTyes: [],
			loadpoints: [
				{ name: "Carport", charger: { name: "NRGKick Connect" }, meter: {} },
				{ name: "Garage", charger: { name: "KEBA X30" }, meter: {} },
			],
		};
	},
	mounted: async function () {
		try {
			this.meterTypes = (await axios.get("/config/types/meter/charge")).data;
			this.chargerTypes = (await axios.get("/config/types/charger")).data;
			this.loadpointConfig = (await axios.get("/config/loadpoints")).data;
			this.pluginTypes = (await axios.get("/config/types/plugin")).data;
		} catch (e) {
			window.toasts.error(e);
		}
	},
	computed: {
		behaviourFields: function () {
			return this.loadpointConfig[0].filter((x) => x.name !== "Title");
		},
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
