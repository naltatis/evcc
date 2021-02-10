<template>
	<div>
		<input
			type="hidden"
			v-if="inputType === 'hidden'"
			:name="name"
			:value="`${this.default}`"
		/>
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
					:value="this.default"
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
				<div class="input-group" v-if="inputType === 'number'" style="width: 50%">
					<input
						type="number"
						class="form-control"
						:name="name"
						:id="name"
						:value="this.default"
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
						:value="this.default"
					/>
					<div class="input-group-append">
						<span class="input-group-text">s</span>
					</div>
				</div>
				<div
					class="btn-group btn-group-toggle"
					data-toggle="buttons"
					style="display: block"
					v-if="inputType === 'yes_no'"
				>
					<label
						class="btn btn-outline-secondary"
						:class="{ active: this.default === 'true' }"
					>
						<input
							type="radio"
							:name="name"
							:id="name"
							value="true"
							:checked="this.default === 'true'"
						/>
						ja
					</label>
					<label
						class="btn btn-outline-secondary"
						:class="{ active: this.default !== 'true' }"
					>
						<input
							type="radio"
							value="false"
							:name="name"
							:checked="this.default !== 'true'"
						/>
						nein
					</label>
				</div>
				<div v-if="inputType === 'plugin'">
					<button type="button" class="btn btn-outline-secondary">
						Plugin konfigurieren
					</button>
				</div>
				<select v-if="inputType === 'select'" class="custom-select" :name="name" :id="name">
					<option v-if="!required" value="">- bitte wählen -</option>
					<option :key="value" :value="value" v-for="value in this.enum">
						{{ value }}
					</option>
				</select>
			</div>
		</div>
		<div
			class="px-4 py-2 mb-2 subform"
			v-if="inputType === 'subform'"
			v-show="subformEnabled || required"
		>
			<FormField
				v-for="formField in this.children"
				:key="formField.name"
				v-bind="formField"
				:name="`${name}.${formField.name}`"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "FormField",
	props: {
		name: String,
		type: String,
		required: Boolean,
		hidden: Boolean,
		masked: Boolean,
		label: String,
		unit: String,
		enum: Array,
		children: Array,
		default: [String, Number],
	},
	data: function () {
		return { subformEnabled: false };
	},
	computed: {
		inputType: function () {
			if (this.hidden) return "hidden";
			if (this.enum) return "select";
			if (this.type === "password") return "password";
			if (this.type === "struct") return "subform";
			if (this.type === "duration") return "duration";
			if (this.type === "bool") return "yes_no";
			if (this.type === "plugin") return "plugin";
			if (this.type === "int" || this.type === "uint8" || this.type === "int64")
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
