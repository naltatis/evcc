import Form from "./Form.vue";

export default {
  title: "Configuration/Form",
  component: Form,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form },
  template: '<Form v-bind="$props"></Form>',
});

export const Base = Template.bind({});
Base.args = {
  name: "Ladeverhalten",
  fields: [
    {
      name: "Title",
      type: "string",
      label: "Titel",
      default: "Carport vorne",
    },
    {
      name: "Mode",
      type: "string",
      label: "Lademodus",
      enum: ["off", "now", "minpv", "pv"],
      default: "pv",
    },
    {
      name: "Phases",
      type: "int64",
      label: "Phasen",
      enum: ["1", "2", "3"],
      default: 3,
    },
    {
      name: "MinCurrent",
      type: "int64",
      label: "Minimaler Ladestrom",
      unit: "A",
      default: 6,
    },
    {
      name: "MaxCurrent",
      type: "int64",
      label: "Maximaler Ladestrom",
      unit: "A",
      default: 16,
    },
    {
      name: "SoC",
      type: "struct",
      label: "Ladezustand",
      unit: "%",
      children: [
        {
          name: "Poll",
          type: "struct",
          label: "Fahrzeugaktualisierung",
          children: [
            {
              name: "Mode",
              type: "string",
              label: "Modus",
              enum: ["charging", "connected", "always"],
              default: "connected",
            },
            {
              name: "Interval",
              type: "duration",
              label: "Interval",
              default: 3600,
            },
          ],
        },
        {
          name: "Estimate",
          type: "bool",
          label: "Battiereschätzung",
        },
        {
          name: "Min",
          type: "int",
          label: "Minimale Batterieladung",
        },
        {
          name: "Target",
          type: "int",
          label: "Maximale Batterieladung",
          default: 100,
        },
      ],
    },
    {
      name: "OnDisconnect",
      type: "struct",
      label: "OnDisconnect",
      children: [
        {
          name: "Mode",
          type: "string",
          label: "Lademodus",
        },
        {
          name: "TargetSoC",
          type: "int",
          label: "Ladestatus",
          unit: "%",
        },
      ],
    },
    {
      name: "Enable",
      type: "struct",
      label: "Enable",
      children: [
        {
          name: "Delay",
          type: "duration",
          label: "Verzögerung",
          default: 60,
        },
        {
          name: "Threshold",
          type: "float64",
          label: "Schwellwert",
          unit: "W",
        },
      ],
    },
    {
      name: "Disable",
      type: "struct",
      label: "Disable",
      children: [
        {
          name: "Delay",
          type: "duration",
          label: "Verzögerung",
          default: 300,
        },
        {
          name: "Threshold",
          type: "float64",
          label: "Schwellwert",
          unit: "W",
          default: 200,
        },
      ],
    },
    {
      name: "GuardDuration",
      type: "duration",
      label: "GuardDuration",
      default: 600,
    },
  ],
};
