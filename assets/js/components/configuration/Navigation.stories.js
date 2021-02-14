import Navigation from "./Navigation.vue";

export default {
  title: "Configuration/Navigation",
  component: Navigation,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Navigation },
  template: '<Navigation v-bind="$props"></Navigation>',
});

export const Base = Template.bind({});
Base.args = {};
