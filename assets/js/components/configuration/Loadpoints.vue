<template>
	<div>
		<div class="my-4">
			<h2 style="display: inline-block" class="pr-3">Ladepunkte</h2>
			<a href="#" @click.prevent="addLoadpoint">hinzufügen</a>
		</div>

		<div class="row row-cols-1 row-cols-md-2 mt-4 mb-5">
			<div class="col mb-4" v-for="(loadpoint, index) in loadpoints" :key="index">
				<div class="card">
					<div class="card-header card-header-with-link">
						<h4 class="mb-0">{{ loadpoint.name }}</h4>
						<a class="text" href="#">umbenennen</a>
					</div>
					<div class="card-body">
						<CardEntry
							name="Wallbox"
							:is-configured="!!loadpoint.charger"
							:edit-mode="editMode === `charger_${index}`"
							@open="open(`charger_${index}`)"
							@close="close"
						>
							<template #status>
								<h5 class="mb-0">3,7 kW</h5>
								<small class="text-muted">lädt</small>
							</template>
							<template #summary>
								<span v-if="loadpoint.charger"> {{ loadpoint.charger.name }} </span>
							</template>
							<template #form>
								<Form
									name="Hersteller"
									:meters="chargerTypes"
									:save-endpoint="`/config/loadpoints/${index}/charger`"
									test-endpoint="/config/test/charger"
								/>
							</template>
						</CardEntry>
						<CardEntry
							name="Fahrzeuge"
							:edit-mode="editMode === `vehicles_${index}`"
							@open="open(`vehicles_${index}`)"
							@close="close"
						>
							<template #summary> VW ID.3 </template>
							<template #form>
								<form>
									<div class="form-check">
										<input
											type="checkbox"
											class="form-check-input"
											id="vehicle_0_0"
											checked
										/>
										<label class="form-check-label" for="vehicle_0_0">
											VW ID.3
										</label>
									</div>
									<div class="form-check">
										<input
											type="checkbox"
											class="form-check-input"
											id="vehicle_0_1"
										/>
										<label class="form-check-label" for="vehicle_0_1">
											Tesla Model 3
										</label>
									</div>
									<p class="mt-2">
										<button
											type="button"
											class="btn btn-outline-secondary btn-sm"
											@click.prevent="close"
										>
											abbrechen
										</button>
										&nbsp;
										<button
											type="submit"
											name="btn-save"
											@click.prevent="close"
											class="btn btn-sm btn-primary"
										>
											speichern
										</button>
									</p>
								</form>
							</template>
						</CardEntry>
						<div class="card-title">
							<h5 class="mb-0" style="display: inline-block">Ladeverhalten</h5>
							&nbsp;
							<a href="#">ändern</a>
						</div>
						<p class="card-text">
							Modus: PV-only<br />
							Ladeziel: 90% (sofort 20%)<br />
							Ladeleistung: 6A bis 16A, 3-phasig<br />
						</p>
					</div>
					<div class="card-footer text-right" v-if="loadpoints.length > 1">
						<a class="text-danger" href="#" @click.prevent="removeLoadpoint(index)">
							entfernen
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CardEntry from "./CardEntry";
import Form from "./Form";

export default {
	name: "Loadpoints",
	components: { CardEntry, Form },
	props: {
		chargerTypes: Array,
	},
	data: function () {
		return {
			editMode: undefined,
			loadpoints: [
				{ name: "Carport", charger: { name: "NRGKick Connect" } },
				{ name: "Garage", charger: { name: "KEBA X30" } },
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
