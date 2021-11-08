import CheckBox from "./CheckBox";
import { useState } from "react";

// noinspection JSUnusedGlobalSymbols
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "CheckBox",
};

export const All = () => {
  const [a, setA]=useState(true);
  const [b, setB]=useState(false);
  const [c, setC]=useState(false);
  const [d, setD]=useState(true);
  return (
    <>
      <CheckBox value={a} onChange={(checked) => setA(checked)}>
        Checked
      </CheckBox>
      <br/>
      <CheckBox value={b} onChange={(checked) => setB(checked)}>
        Unchecked
      </CheckBox>
      <br/>
      <CheckBox disabled value={c} onChange={(checked) => setC(checked)}>
        Disabled
      </CheckBox>
      <br/>
      <CheckBox disabled value={d} onChange={(checked) => setD(checked)}>
        Checked Disabled
      </CheckBox>
      <br/>
      <CheckBox value={a} onChange={(checked) => setA(checked)} variant="black">
        Black
      </CheckBox>
      <br/>
      <CheckBox value={a} onChange={(checked) => setA(checked)} variant="green">
        Green
      </CheckBox>
    </>
  )
};
