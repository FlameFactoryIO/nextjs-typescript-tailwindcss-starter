import CompanyCard from './CompanyCard';

// noinspection JSUnusedGlobalSymbols
export default {
  title: "CompanyCards"
}

const Template = arguments_ => <CompanyCard {...arguments_} /> //creating a template

export const Primary = Template.bind({})
Primary.args ={
  
}

// export const Secondary = Template.bind({})
// Secondary.args ={
//   children: "Secondary Button",
//   variant: "secondary",
// }

// export const Disabled = Template.bind({})
// Disabled.args ={
//   children: "Disabled Primary Button",
//   disabled: true,
// }
