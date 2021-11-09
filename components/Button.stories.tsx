import Button from './Button';

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
  </div>
);
