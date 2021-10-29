import Button from './Button';

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Buttons"
}

const Template = arguments_ => <Button {...arguments_} /> //creating a template

export const Primary = Template.bind({})
Primary.args = {
  children: "Primary Button",
}

export const Black = Template.bind({})
Black.args = {
  children: "Black Button",
  variant: "black",
}

export const White = Template.bind({})
White.args = {
  children: "White Button",
  variant: "white",
}
