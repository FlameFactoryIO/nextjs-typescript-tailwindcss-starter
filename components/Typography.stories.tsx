const text = "The quick brown fox jumps over the lazy dog.";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Typography",
}

export const Default = () => (
  <div>
    <div>{text}</div>
    <div className="font-hand">{text}</div>
    <div className="font-bold">{text}</div>
    <div className="font-black">{text}</div>
  </div>
);
