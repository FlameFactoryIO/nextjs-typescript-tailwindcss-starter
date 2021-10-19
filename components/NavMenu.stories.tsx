import NavMenu from "./NavMenu";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Nav Menu",
  component: NavMenu,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = arguments_ => <NavMenu {...arguments_} />

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
}
