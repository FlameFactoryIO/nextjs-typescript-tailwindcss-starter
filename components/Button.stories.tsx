import Button from './Button';
import { useState } from "react";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Buttons"
}

export const Buttons = () => (
  <div className="flex flex-col items-start gap-20px">
    <Button>Normal Primary</Button>
    <Button size="small">Small Primary</Button>
    <Button variant="black">Normal Black</Button>
    <Button variant="black" size="small">Small Black</Button>
    <Button disabled>Normal Inactive</Button>
    <Button disabled size="small">Small Inactive</Button>
    <Button className={`
      bg-white
      bg-green-500
    `}>Green Outline</Button>
  </div>
);

export const ButtonGroup = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="flex flex-row gap-20px">
      {[1,2,3].map(n => (
        <Button key={n}
          variant="white"
          className={`
            border
            border-green-500
            ring-green-500
            focus-green-500
            ${selected === n ?
              "bg-green-500 text-white" :
              "bg-white text-green-500"}
          `}
          onClick={() => setSelected(n)}
        >
          Button {n}
        </Button>
      ))}
    </div>
  );
};
