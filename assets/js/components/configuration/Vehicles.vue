<template>
	<div>
		<div class="d-flex justify-content-start align-items-baseline mb-4">
			<h2>Fahrzeuge</h2>
			<a class="text px-3" href="#" @click.prevent="addVehicle">hinzufügen</a>
		</div>
		<CardEntry
			v-for="(vehicle, index) in vehicles"
			:key="index"
			:name="vehicle.name"
			:edit-mode="editMode === `vehicle_${index}`"
			@open="open(`vehicle_${index}`)"
			@close="close"
		>
			<template #status>
				<h5 class="mb-0">{{ vehicle.data.charge }} %</h5>
				<small class="text-muted">{{ vehicle.data.state }}</small>
			</template>
			<template #summary>
				<span>VW API</span>
			</template>
			<template #form>
				<Form
					name="Hersteller"
					:meters="vehicleTypes"
					:save-endpoint="`/config/vehicles/${index}`"
					test-endpoint="/config/test/vehicle"
				/>
			</template>
		</CardEntry>
	</div>
</template>

<script>
import CardEntry from "./CardEntry";
import Form from "./Form";

export default {
	name: "Vehicles",
	components: { CardEntry, Form },
	props: {
		vehicleTypes: Array,
	},
	data: function () {
		return {
			editMode: undefined,
			vehicles: [
				{ name: "VW ID.3", data: { charge: 76, state: "lädt" } },
				{ name: "Tesla Model 3", data: { charge: 23, state: "sleeping" } },
			],
		};
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
