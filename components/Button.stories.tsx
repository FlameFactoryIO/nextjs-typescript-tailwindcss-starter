import Button from './Button';

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Buttons"
}

const Template = arguments_ => <Button {...arguments_} /> //creating a template

export const Primary = Template.bind({})
Primary.args ={
  size: "h-10 w-56",
  children: "Primary Button",
}

export const Secondary = Template.bind({})
Secondary.args ={
  children: "Secondary Button",
  variant: "secondary",
}

export const Disabled = Template.bind({})
Disabled.args ={
  children: "Disabled Primary Button",
  disabled: true,
}
