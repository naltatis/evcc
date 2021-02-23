<template>
	<div>
		<h2 class="mb-4">Hausinstallation</h2>

		<div v-for="section in sections" :key="section.key" class="border-top pt-4 my-4">
			<div class="d-flex justify-content-between align-items-baseline mb-4">
				<h5 class="mb-0">
					{{ section.name }}
				</h5>
				<button
					class="btn btn-link"
					@click.prevent="open(section.key)"
					v-if="editMode !== section.key"
				>
					konfigurieren
				</button>
				<div class="btn-group" v-if="editMode === section.key">
					<button
						type="button"
						class="btn btn-link"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Beispielkonfiguration laden
					</button>
					<div class="dropdown-menu dropdown-menu-right">
						<button
							class="dropdown-item"
							type="button"
							:key="template.label"
							@click="selectTemplate(section.key, template)"
							v-for="template in templates[section.key]"
						>
							{{ template.label }}
						</button>
					</div>
				</div>
			</div>
			<Form
				v-if="editMode === section.key"
				name="Messgerät"
				:meters="meters[section.key]"
				v-model="value[section.key]"
				:plugin-types="plugin"
				:save-endpoint="`/config/meters/${section.key}`"
				:test-endpoint="`/config/test/meter/${section.key}`"
				@close="close"
			/>
		</div>
	</div>
</template>

<script>
import Form from "./Form";
import axios from "axios";

export default {
	name: "Site",
	components: { Form },
	data: function () {
		return {
			editMode: null,
			meters: { grid: [], pv: [], battery: [] },
			templates: { grid: [], pv: [], battery: [] },
			value: { grid: {}, pv: {}, battery: {} },
			plugin: [],
			sections: [
				{ name: "Netzanschluss", key: "grid" },
				{ name: "Erzeuger / Wechselrichter", key: "pv" },
				{ name: "Batterie", key: "battery" },
			],
		};
	},
	methods: {
		open: function (name) {
			this.editMode = name;
		},
		close: function () {
			this.editMode = null;
		},
		extractValues: function (fields) {
			return fields.reduce((res, field) => {
				const value = field.fields ? this.extractValues(field.fields) : field.default;
				res[field.name] = value;
				return res;
			}, {});
		},
		selectTemplate: function (section, template) {
			this.value[section] = this.extractValues(template.fields);
		},
	},
	mounted: async function () {
		try {
			this.meters.grid = (await axios.get("/config/types/meter/grid")).data;
			this.meters.pv = (await axios.get("/config/types/meter/pv")).data;
			this.meters.battery = (await axios.get("/config/types/meter/battery")).data;
			this.templates.grid = (await axios.get("/config/templates/meter/grid")).data;
			this.templates.pv = (await axios.get("/config/templates/meter/pv")).data;
			this.templates.battery = (await axios.get("/config/templates/meter/battery")).data;
			this.plugin = (await axios.get("/config/types/plugin")).data;
		} catch (e) {
			window.toasts.error(e);
		}
	},
};
</script>

<style scoped>
.dropdown-menu {
	max-height: 285px;
	overflow-x: hidden;
	overflow-y: auto;
}
</style>
