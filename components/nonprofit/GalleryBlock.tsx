import { Block, EmptyBlock } from "./Block";
import { GalleryIcon } from "./Icons";
import React, { useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import Modal from "../Modal";
import Button from "../Button";

const GalleryBlock = ({nonprofit, ownsNonprofit}: {nonprofit: Nonprofit, ownsNonprofit: boolean}) => {
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

  if (!nonprofit?.impact) {
    if (!ownsNonprofit) {
      return null;
    }

    return (
      <EmptyBlock
        icon={<GalleryIcon />}
        text={
          <>
            <span className="font-bold">
              Upload and make an awesome gallery
            </span>
            <br />
            and include text if you want.
          </>
        }
        actionText="Add gallery"
        onClick={() => setEditorOpen(true)}
      />
    );
  }

  console.debug({impact: nonprofit.impact})

  return (
    <Block>
      GALLERY

      {isEditorOpen && (
        <Modal
          header="Update your gallery"
          onClose={() => setEditorOpen(false)}
          footer={<Button onClick={handleSave}>Save</Button>}
        >
          <div className="flex flex-col p-20px">
            GALLERY EDITOR
          </div>
        </Modal>
      )}
    </Block>
  );
};

export default GalleryBlock;
