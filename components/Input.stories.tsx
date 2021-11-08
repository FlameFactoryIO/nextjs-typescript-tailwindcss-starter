import { type } from "os";
import Input from "./Input";
import Button from "./Button";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Inputs",
};

const Template = (arguments_) => <Input {...arguments_} />;

export const Primary = Template.bind({});

Primary.args = {
  value: "Value-test",
};

export const Black = Template.bind({});
Black.args = {
  placeholder: "placeholder input",
  variant: "black",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "value",
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  placeholder: "placeholder input",
  icon: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  value: "value",
  multiline: true,
};

export const Multiline10Lines = Template.bind({});
Multiline10Lines.args = {
  value: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n",
  multiline: true,
  rows: 10,
};

export const MultilineFixedHeight = Template.bind({});
MultilineFixedHeight.args = {
  value: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n",
  multiline: true,
  className: "h-150px",
};

export const PrefixAndSuffix = () => (
  <div>
    <Input
      value="234567isjdfokljaslkdjfh"
      prefix={
        "ICON"
      }
      suffix="SUFFIX"
    />
    <br/>
    <Input
      value="234567isjdfokljaslkdjfh"
      prefix={
        "ICON"
      }
    />
    <br/>
    <Input
      value="234567isjdfokljaslkdjfh"
      suffix="SUFFIX"
    />
    <br/>
    <Input
      value="234567isjdfokljaslkdjfh"
      prefix={
        <Button>
          Click
        </Button>
      }
      suffix={
        <Button>
          Click
        </Button>
      }
    />
    <br/>
    <Input
      value="234567isjdfokljaslkdjfh"
      prefix={
        <Button className="h-60px">
          Click
        </Button>
      }
      suffix={
        <Button className="h-60px">
          Tall button
        </Button>
      }
    />
  </div>
)
