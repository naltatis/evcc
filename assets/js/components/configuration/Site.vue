<template>
	<div>
		<h2 class="mb-4">Hausinstallation</h2>

		<div v-for="section in sections" :key="section.key" class="border-top pt-4 my-4">
			<div class="d-flex justify-content-start align-items-baseline mb-4">
				<h5 class="mb-0">{{ section.name }}</h5>
				<a
					class="text px-3"
					href="#"
					@click.prevent="open(section.key)"
					v-if="editMode !== section.key"
				>
					konfigurieren
				</a>
			</div>
			<Form
				v-if="editMode === section.key"
				name="Messgerät"
				:meters="meters[section.key]"
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
	},
	mounted: async function () {
		try {
			this.meters.grid = (await axios.get("/config/types/meter/grid")).data;
			this.meters.pv = (await axios.get("/config/types/meter/pv")).data;
			this.meters.battery = (await axios.get("/config/types/meter/battery")).data;
		} catch (e) {
			window.toasts.error(e);
		}
	},
};
</script>
