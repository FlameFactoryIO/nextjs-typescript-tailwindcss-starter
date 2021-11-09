import Input from "./Input";
import Button from "./Button";
import { FaAnkh, FaEnvelope, FaVirusSlash, FaXRay } from "react-icons/fa";

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
      prefix={<FaEnvelope className="ml-14px" />}
      suffix={<FaAnkh className="mr-14px" />}
    />

    <Input
      value="234567isjdfokljaslkdjfh"
      prefix={<FaXRay className="ml-14px" />}
    />

    <Input
      value="234567isjdfokljaslkdjfh"
      suffix={<FaVirusSlash className="mr-14px" />}
    />

    <Input
      value="234567isjdfokljaslkdjfh"
      prefix={
        <Button className="rounded-r-none">
          Click
        </Button>
      }
      suffix={
        <Button className="rounded-l-none">
          Click
        </Button>
      }
    />

    <Input
      value="234567isjdfokljaslkdjfh"
      prefix={
        <Button className="h-60px rounded-r-none">
          Tall button
        </Button>
      }
      suffix={
        <Button className="h-60px rounded-l-none">
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
