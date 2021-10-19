import TopNav from "./TopNav";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Top Nav",
  component: TopNav,
  parameters: { actions: { argTypesRegex: '^on.*' } },
}

export const Default = arguments_ => (
  <div style={{ backgroundColor: "yellowgreen", width: "100%", paddingBottom: 200 }}>
    <TopNav {...arguments_} />
    <div style={{ backgroundColor: "red", color: "white" }} className={"pt-48px d:pt-77px"}>
      Storybook adds some padding to the top and left, making this component look bad on the right.<br/>
      The green background represents the page and the red one is a section.<br/>
      Note the bottom rounded borders in tablet and mobile view.<br/>
      For each top section in each page, we need to add a padding-top top of 48px to tablet and mobile, and 77px for desktop.
    </div>
  </div>
)
