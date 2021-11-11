import { Block } from "./Block";
import React, { useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";

const ClosedCampaignsBlock = ({
  nonprofit,
  ownsNonprofit,
}: {
  nonprofit: Nonprofit,
  ownsNonprofit: boolean,
}) => {
  if (!nonprofit?.campaigns?.length) {
    return null;
  }

  return (
    <Block className="flex flex-col gap-20px">
      {nonprofit?.campaigns.map(c => (
        <div key={c.id} className="bg-gradient-to-b from-red-100 to-red-300">
          <div key={c.id}>{c.description}</div>
        </div>
      ))}
    </Block>
  );
};

export default ClosedCampaignsBlock;
