import Input from './Input';

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Inputs"
}

const Template = arguments_ => <Input {...arguments_} /> //creating a template

export const Primary = Template.bind({})
Primary.args ={
  value:"Value-test",
}

export const Secondary = Template.bind({})
Secondary.args ={

  placeholder:"placeholder input"
}

export const Disabled = Template.bind({})
Disabled.args ={
  value:"value",
  disabled: true,
}
