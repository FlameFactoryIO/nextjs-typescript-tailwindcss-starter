import Input from "./Input";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Inputs"
}

const Template = arguments_ => <Input {...arguments_} /> //creating a template

export const Primary = Template.bind({})
Primary.args = {
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
