<template>
	<form @submit.prevent="submit">
		<div class="form-group row">
			<label for="wechselrichter" class="col-sm-4 col-form-label text-right">
				{{ name }}
			</label>
			<div class="col-sm-8">
				<select class="custom-select" id="wechselrichter" v-model="selectedMeter">
					<option :value="meter.type" :key="meter.type" v-for="meter in meters">
						{{ meter.label }}
					</option>
				</select>
			</div>
		</div>
		<FormField
			v-bind="formField"
			:key="formField.name"
			v-for="formField in requiredFormFields"
		/>
		<p v-if="optionalFormFields.length > 0">
			<a href="#" @click.prevent="extended = !extended">
				erweiterte Einstellungen
				<span v-if="!extended">anzeigen</span>
				<span v-else>ausblenden</span>
			</a>
		</p>
		<div v-show="extended">
			<FormField
				v-bind="formField"
				:key="formField.name"
				v-for="formField in optionalFormFields"
			/>
		</div>
		<div class="row">
			<p class="offset-sm-4 col-sm-8">
				<button
					type="button"
					class="btn btn-outline-secondary btn-sm"
					@click="$emit('close')"
				>
					abbrechen
				</button>
				&nbsp;
				<button type="submit" name="btn-test" class="btn btn-outline-primary btn-sm">
					testen
					<span
						class="spinner-border spinner-border-sm"
						role="status"
						aria-hidden="true"
						v-if="testPending"
					></span>
				</button>
				&nbsp;
				<button
					type="submit"
					name="btn-save"
					class="btn btn-sm"
					:disabled="!testSuccess"
					:class="{
						'btn-outline-primary': !testSuccess,
						'btn-success': testSuccess,
					}"
				>
					speichern
				</button>
			</p>
		</div>
		<p class="text-success" v-if="testMessage && testSuccess">✔ {{ testMessage }}</p>
		<p class="text-danger" v-if="testMessage && !testSuccess">⚠️ {{ testMessage }}</p>
	</form>
</template>

<script>
import FormField from "./FormField";
import axios from "axios";
import { unflatten } from "../../utils";

export default {
	name: "Form",
	components: { FormField },
	data: function () {
		return {
			edit: "",
			extended: false,
			selectedMeter: "sma",
			testMessage: null,
			testSuccess: false,
			testPending: false,
			savePending: false,
			testRequestCancelToken: null,
		};
	},
	props: {
		name: {
			type: String,
		},
		testEndpoint: {
			type: String,
		},
		saveEndpoint: {
			type: String,
		},
		meters: {
			type: Array,
			default: [],
		},
	},
	computed: {
		formFields: function () {
			const meter = this.meters.find((m) => m.type === this.selectedMeter);
			return meter ? meter.fields : [];
		},
		requiredFormFields: function () {
			return this.formFields; //.filter((f) => f.required || f.hidden);
		},
		optionalFormFields: function () {
			return []; //this.formFields.filter((field) => !this.requiredFormFields.includes(field));
		},
	},
	methods: {
		formToJson: function (form) {
			const formData = new FormData(form);
			var result = {};
			formData.forEach((value, key) => (result[key] = value));
			console.log(result, unflatten(result));
			return unflatten(result);
		},
		submit: function (e) {
			const { submitter: button, target: form } = e;
			const data = this.formToJson(form);
			if (button.name === "btn-test") {
				this.test(data);
			} else {
				this.save(data);
			}
		},
		test: async function (data) {
			if (this.testRequestCancelToken) {
				this.testRequestCancelToken.cancel();
				return;
			}

			this.testMessage = null;
			this.testPending = true;
			this.testRequestCancelToken = axios.CancelToken.source();
			try {
				const response = await axios.post(this.testEndpoint, data, {
					validateStatus: undefined,
					cancelToken: this.testRequestCancelToken.token,
				});
				this.testMessage = response.data;
				this.testSuccess = response.status < 400;
			} catch (e) {
				console.log("test call canceled");
				this.testMessage = null;
				this.testSuccess = false;
			}
			this.testPending = false;
			this.testRequestCancelToken = null;
		},
		save: async function (data) {
			try {
				await axios.post(this.saveEndpoint, data);
				this.tested = false;
			} catch (e) {
				console.error(e);
				this.tested = false;
			}
		},
	},
};
</script>
