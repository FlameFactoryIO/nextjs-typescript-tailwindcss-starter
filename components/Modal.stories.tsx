import Button from './Button';
import { useState } from "react";
import Modal from "./Modal";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Modals"
}

export const Modals = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex flex-col items-start gap-20px">

      <Button onClick={() => setSelected("basic")}>Basic</Button>

      {selected === "basic" && (
        <Modal onClose={() => {setSelected("")}}
          header="Nice little text"
        >
          Basic<br/>
          Basic<br/>
          Basic<br/>
          Basic<br/>
          Basic<br/>
          Basic<br/>
        </Modal>
      )}
    </div>
  );
};
