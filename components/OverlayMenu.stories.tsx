import OverlayMenu from "./OverlayMenu";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Overlay Menu",
  component: OverlayMenu,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = arguments_ => <OverlayMenu {...arguments_} />

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
}
