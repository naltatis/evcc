import FormField from "./FormField.vue";

export default {
  title: "Configuration/FormField",
  component: FormField,
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
        options: [
          "string",
          "int",
          "password",
          "struct",
          "duration",
          "bool",
          "plugin",
          "int",
          "uint8",
          "int64",
        ],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormField },
  template: '<FormField v-bind="$props"></FormField>',
});

export const String = Template.bind({});
String.args = {
  name: "User",
  type: "string",
  required: true,
  label: "Username",
  default: "max@example.org",
};

export const Password = Template.bind({});
Password.args = {
  name: "Password",
  type: "password",
  label: "Passwort",
};

export const Int = Template.bind({});
Int.args = {
  name: "ID",
  type: "int",
  label: "Ladepunkt",
  default: 1,
};

export const Boolean = Template.bind({});
Boolean.args = {
  name: "Currents",
  type: "bool",
  label: "Strom (A)",
  unit: "A",
};

export const Duration = Template.bind({});
Duration.args = {
  name: "Cache",
  type: "duration",
  label: "Aktualisierungsintervall",
  default: 90,
};

const children = [
  {
    name: "User",
    type: "string",
    required: true,
    label: "Username",
    default: "max@example.org",
  },
  {
    name: "Password",
    type: "password",
    label: "Passwort",
  },
  {
    name: "Power",
    type: "bool",
    label: "Leistung (W)",
    unit: "W",
  },
  {
    name: "Energy",
    type: "bool",
    label: "Zählerstand (kWh)",
    unit: "kWh",
  },
  {
    name: "Currents",
    type: "bool",
    label: "Strom (A)",
    unit: "A",
  },
];

export const Subform = Template.bind({});
Subform.args = {
  name: "Meter",
  type: "struct",
  label: "Integrierten Zähler verwenden",
  required: true,
  children,
};

export const OptionalSubform = Template.bind({});
OptionalSubform.args = {
  name: "Meter",
  type: "struct",
  label: "Integrierten Zähler verwenden",
  children,
};

export const Plugin = Template.bind({});
Plugin.args = {
  name: "MaxCurrent",
  type: "plugin",
  required: true,
  label: "Ladestrom (A)",
};
