import { Block, EmptyBlock } from "./Block";
import { MegaphoneIcon } from "./Icons";
import React, { useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import Modal from "../Modal";
import Button from "../Button";

const CampaignBlock = ({nonprofit, ownsNonprofit}: {nonprofit: Nonprofit, ownsNonprofit: boolean}) => {
  const [isEditorOpen, setEditorOpen] = useState(false);

  const handleSave = (
  ) => {
    try {
      // todo save to db
    } catch (e) {
    } finally {
      setEditorOpen(false);
    }
  };

  if (!nonprofit?.campaigns?.length) {
    if (!ownsNonprofit) {
      return null;
    }

    return (
      <EmptyBlock
        icon={<MegaphoneIcon />}
        text={
          <>
             <span className="font-bold">
               The organization will make campaign
             </span>
            <br />
            and add some text if you want.
          </>
        }
        actionText="Add campaign"
        onClick={() => setEditorOpen(true)}
      />
    );
  }

  return (
    <Block>
      CURRENT CAMPAIGN

      {isEditorOpen && (
        <Modal
          header="Update your testimonials"
          onClose={() => setEditorOpen(false)}
          footer={<Button onClick={handleSave}>Save</Button>}
        >
          <div className="flex flex-col p-20px">
            CAMPAIGN EDITOR
          </div>
        </Modal>
      )}
    </Block>
  );
};

export default CampaignBlock;
