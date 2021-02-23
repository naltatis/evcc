<template>
	<div>
		<input type="hidden" v-if="inputType === 'hidden'" :name="name" :value="`${value}`" />
		<div class="form-group row" v-else>
			<label :for="name" class="col-sm-3 col-form-label">
				{{ label }}<small v-if="required">*</small>
			</label>
			<div class="col-sm-9">
				<div
					class="my-2 custom-control custom-switch"
					v-if="inputType === 'subform' && !required"
				>
					<input
						type="checkbox"
						class="custom-control-input"
						v-model="subformEnabled"
						:id="name"
					/>
					<label class="custom-control-label" :for="name">
						<span v-if="subformEnabled">aktiv</span>
						<span v-else>inaktiv</span>
					</label>
				</div>

				<input
					type="text"
					v-if="inputType === 'text'"
					class="form-control"
					:value="value"
					:name="name"
					:id="name"
				/>
				<input
					type="password"
					v-if="inputType === 'password'"
					class="form-control"
					:name="name"
					:id="name"
				/>
				<div class="py-2" v-if="inputType === 'plugin'">freie Konfiguration</div>
				<div class="input-group" v-if="inputType === 'number'" style="width: 50%">
					<input
						type="number"
						class="form-control"
						:name="name"
						:id="name"
						:value="value"
					/>
					<div class="input-group-append" v-if="unit">
						<span class="input-group-text">{{ unit }}</span>
					</div>
				</div>

				<div class="input-group" v-if="inputType === 'duration'" style="width: 50%">
					<input
						type="number"
						class="form-control"
						:name="name"
						:id="name"
						:value="value"
					/>
					<div class="input-group-append">
						<span class="input-group-text">s</span>
					</div>
				</div>
				<div class="my-2 custom-control custom-switch" v-if="inputType === 'yes_no'">
					<input
						type="checkbox"
						class="custom-control-input"
						:id="name"
						:checked="value !== 'true'"
					/>
					<label class="custom-control-label" :for="name">
						<span v-if="value !== 'true'">aktiv</span>
						<span v-else>inaktiv</span>
					</label>
				</div>
				<select v-if="inputType === 'select'" class="custom-select" :name="name" :id="name">
					<option v-if="!required" value="">- bitte wählen -</option>
					<option :key="value" :value="value" v-for="value in enumValues">
						{{ value }}
					</option>
				</select>
				<div v-if="inputType === 'inline_radio'" class="py-2">
					<div
						class="custom-control custom-radio custom-control-inline"
						:key="value"
						:value="value"
						v-for="value in enumValues"
					>
						<input
							type="radio"
							:id="`${name}_${value}`"
							:name="name"
							class="custom-control-input"
							:value="value"
							:checked="value === value"
						/>
						<label class="custom-control-label" :for="`${name}_${value}`">
							{{ value }}
						</label>
					</div>
				</div>
			</div>
		</div>
		<div class="px-4 pt-4 pb-2 mb-4 border" v-if="inputType === 'plugin'">
			<Form
				name="Protokoll"
				:meters="pluginTypes"
				:plugin-types="pluginTypes"
				:value="value"
				test-endpoint="/config/test/plugin"
			/>
		</div>
		<div
			class="px-4 pt-4 pb-2 mb-4 subform"
			v-if="inputType === 'subform'"
			v-show="subformEnabled || required"
		>
			<FormField
				v-for="formField in this.children"
				:key="formField.name"
				:plugin-value="value.Type"
				v-bind="formField"
				:name="`${name}.${formField.name}`"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "FormField",
	components: { Form: () => import("./Form") },
	props: {
		name: String,
		type: String,
		required: Boolean,
		hidden: Boolean,
		masked: Boolean,
		label: String,
		unit: String,
		pluginTypes: Array,
		enum: Array,
		children: Array,
		value: [String, Object, Number, Boolean],
	},
	data: function () {
		return { subformEnabled: false };
	},
	computed: {
		enumValues: function () {
			return this.enum;
		},
		inputType: function () {
			if (this.hidden) return "hidden";
			if (this.enum) {
				if (this.enum.length < 5 && this.enum.join("").length < 20) {
					return "inline_radio";
				}
				return "select";
			}
			if (this.type === "password") return "password";
			if (this.type === "struct") return "subform";
			if (this.type === "duration") return "duration";
			if (this.type === "bool") return "yes_no";
			if (this.type === "plugin") return "plugin";
			if (
				this.type === "int" ||
				this.type === "uint8" ||
				this.type === "int64" ||
				this.type === "float64"
			)
				return "number";
			return "text";
		},
	},
};
</script>

<style scoped>
.col-form-label {
	overflow: hidden;
	text-overflow: ellipsis;
}
.subform {
	background-color: rgba(150, 150, 150, 0.1);
}
</style>
