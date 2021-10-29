import Input from "./Input";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Inputs",
};

const Template = (arguments_) => <Input {...arguments_} />;

export const Primary = Template.bind({});

Primary.args = {
  value: "Value-test",
};

export const Black = Template.bind({});
Black.args = {
  placeholder: "placeholder input",
  variant: "black",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "value",

  disabled: true,
};
