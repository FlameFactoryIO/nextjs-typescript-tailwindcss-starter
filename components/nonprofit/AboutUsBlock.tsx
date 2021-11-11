import { Block } from "./Block";
import { EditPenIcon } from "./Icons";
import React from "react";

const AboutUsBlock = ({nonprofit, ownsNonprofit, onEditClick}) => (
  <Block>
    <div className="flex">
      <div className="font-bold text-16px leading-30px t:text-20px ">
        About us
      </div>
      {ownsNonprofit && (
        <div onClick={onEditClick}>
          <EditPenIcon />
        </div>
      )}
    </div>
    <div className="font-light text-13px leading-19-5px t:text-14px t:leading-21px">
      {nonprofit.description}
    </div>
  </Block>
);

export default AboutUsBlock;
