const text = "The quick brown fox jumps over the lazy dog.";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Typography",
}

export const Default = () => (
  <div>
    <div className="font-hand">{text}</div>
    <div className="font-thin">{text}</div>
    <div className="font-extralight">{text}</div>
    <div className="font-light">{text}</div>
    <div className="font-normal">{text}</div>
    <div className="font-medium">{text}</div>
    <div className="font-semibold">{text}</div>
    <div className="font-bold">{text}</div>
    <div className="font-extrabold">{text}</div>
    <div className="font-black">{text}</div>
  </div>
);
