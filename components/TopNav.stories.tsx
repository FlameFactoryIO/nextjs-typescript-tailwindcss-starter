import TopNav from "./TopNav";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Top Nav",
  component: TopNav,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = arguments_ => (
  <div style={{ minWidth: 1380 }}>
    <TopNav {...arguments_} />
  </div>
);

export const Default = Template.bind({})
Default.args = {
}
