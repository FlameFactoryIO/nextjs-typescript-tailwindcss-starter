import { Block, EmptyBlock } from "./Block";
import { ContactInfoIcon } from "./Icons";
import React, { useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import Modal from "../Modal";
import Button from "../Button";

const ContactsBlock = ({nonprofit, ownsNonprofit}: {nonprofit: Nonprofit, ownsNonprofit: boolean}) => {
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

  if (!nonprofit?.contacts?.length) {
    if (!ownsNonprofit) {
      return null;
    }

    return (
      <EmptyBlock
        icon={<ContactInfoIcon />}
        text={
          <>
            <span className="font-bold">Add contact info</span>
            <br />
            and make it easy to find out more about your cause.
          </>
        }
        actionText="Add contacts"
        onClick={() => setEditorOpen(true)}
      />
    );
  }

  return (
    <Block>
      CONTACTS

      {isEditorOpen && (
        <Modal
          header="Update your testimonials"
          onClose={() => setEditorOpen(false)}
          footer={<Button onClick={handleSave}>Save</Button>}
        >
          <div className="flex flex-col p-20px">
            TESTIMONIALS EDITOR
          </div>
        </Modal>
      )}
    </Block>
  );
};

export default ContactsBlock;
