import { type } from "os";
import Input from "./Input";
import Button from "./Button";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Inputs",
};


export const Inputs = () => (
  <div className="flex flex-col items-start gap-20px">
    <Input
      value="A nice input"
    />

    <Input
      placeholder="placeholder input"
    />

    <Input
      value="Disabled input"
      disabled
    />

    <Input
      value="234567isjdfokljaslkdjfh"
      prefix={
        "ICON"
      }
      suffix="SUFFIX"
    />

    <Input
      value="234567isjdfokljaslkdjfh"
      prefix={
        "ICON"
      }
    />

    <Input
      value="234567isjdfokljaslkdjfh"
      suffix="SUFFIX"
    />

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

    <Input
      multiline
      value="value"
    />

    <Input
      multiline
      value={`1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11`}
      rows={10}
    />

    <Input
      multiline
      value={`1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11`}
      rows={10}
      className="h-150px"
    />
  </div>
)
