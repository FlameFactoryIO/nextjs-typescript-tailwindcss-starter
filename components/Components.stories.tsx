import Input from './Input';
import Button from './Button';

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Components"
}

const Template = () =>
  <div className="flex">
    <Input placeholder="Write me" className="mr-2" />
    <Button className="whitespace-nowrap">
      Click me!
    </Button>
  </div>

// noinspection JSUnusedGlobalSymbols
export const InputAndButton = Template.bind({})
