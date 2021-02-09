<template>
	<div>
		<div class="d-flex justify-content-start align-items-baseline mb-4">
			<h2>Fahrzeuge</h2>
			<a class="text px-3" href="#" @click.prevent="addVehicle">hinzufügen</a>
		</div>

		<div v-for="(vehicle, index) in vehicles" :key="index" class="border-top pt-4 my-4">
			<div class="d-flex justify-content-start align-items-baseline mb-4">
				<h5 class="mb-0">{{ vehicle.name }}</h5>
				<a
					class="text px-3"
					href="#"
					@click.prevent="open(`vehicle_${index}`)"
					v-if="editMode !== `vehicle_${index}`"
				>
					ändern
				</a>
			</div>
			<div v-if="editMode === `vehicle_${index}`">
				<Form
					name="Hersteller"
					:meters="vehicleTypes"
					:save-endpoint="`/config/vehicles/${index}`"
					test-endpoint="/config/test/vehicle"
					@close="close"
				/>
				<a class="text text-danger" href="#" @click.prevent="removeVehicle(index)">
					Fahrzeug entfernen
				</a>
			</div>
			<div class="mb-3 mt-1" v-else>
				<span>
					Ladestand: {{ vehicle.data.charge }}%<br />
					Status: {{ vehicle.data.state }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import Form from "./Form";
import axios from "axios";

export default {
	name: "Vehicles",
	components: { Form },
	data: function () {
		return {
			editMode: undefined,
			vehicles: [
				{ name: "VW ID.3", data: { charge: 76, state: "lädt" } },
				{ name: "Tesla Model 3", data: { charge: 23, state: "sleeping" } },
			],
		};
	},
	mounted: async function () {
		try {
			this.vehicleTypes = (await axios.get("/config/types/vehicle")).data;
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
		addVehicle: function () {
			const newVehicle = { name: "VW ID.3", data: { charge: 76, state: "lädt" } };
			// TODO Make an API Request
			this.vehicles = [...this.vehicles, newVehicle];
		},
		removeVehicle: function (index) {
			// TODO Make an API Request
			this.close();
			this.vehicles = this.vehicles.filter((vehicle, i) => i !== index);
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
