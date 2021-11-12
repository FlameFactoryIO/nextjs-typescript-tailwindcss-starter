import { Block, EmptyBlock } from "./Block";
import { ContactInfoIcon, EditPenIcon } from "./Icons";
import React, { useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import Modal from "../Modal";
import Button from "../Button";
import { FaMailBulk, FaPhone } from "react-icons/fa";
const ContactsBlock = ({
  nonprofit,
  ownsNonprofit,
}: {
  nonprofit: Nonprofit;
  ownsNonprofit: boolean;
}) => {
  const [isEditorOpen, setEditorOpen] = useState(false);

  const handleSave = () => {
    try {
      // todo save to db
    } catch (e) {
    } finally {
      setEditorOpen(false);
    }
  };

  if (ownsNonprofit) {
    return (
      <div className="flex flex-col">
        {nonprofit?.contacts?.length &&
          nonprofit.contacts.map((contact) => {
            <Block>
              <div className="flex">
                <div className="font-bold text-16px leading-30px t:text-20px">
                  {contact.branch}
                </div>
                <div
                  onClick={() => setEditorOpen(true)}
                  className="cursor-pointer ml-5px"
                >
                  <EditPenIcon />
                </div>
              </div>
              <div className="flex flex-col font-light text-13px leading-19-5px t:text-14px t:leading-21px">
                <FaMailBulk />
                <span className="underline">{contact.primaryEmailAddress}</span>
              </div>{" "}
              <div className="flex flex-col font-light text-13px leading-19-5px t:text-14px t:leading-21px">
                <FaPhone />
                <span>{contact.primaryPhoneNumber}</span>
              </div>{" "}
              <div className="flex flex-col font-light text-13px leading-19-5px t:text-14px t:leading-21px">
                <span>{contact.website}</span>
              </div>
            </Block>;
          })}
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
      </div>
    );
  } else {
    if (nonprofit?.contacts?.length) {
      {
        nonprofit.contacts.map((contact) => {
          <Block>
            <div className="flex">
              <div className="font-bold text-16px leading-30px t:text-20px">
                {contact.branch}
              </div>
            </div>
            <div className="flex flex-col font-light text-13px leading-19-5px t:text-14px t:leading-21px">
              <FaMailBulk />
              <span className="underline">{contact.primaryEmailAddress}</span>
            </div>{" "}
            <div className="flex flex-col font-light text-13px leading-19-5px t:text-14px t:leading-21px">
              <FaPhone />
              <span>{contact.primaryPhoneNumber}</span>
            </div>{" "}
            <div className="flex flex-col font-light text-13px leading-19-5px t:text-14px t:leading-21px">
              <span>{contact.website}</span>
            </div>
          </Block>;
        });
      }
    } else {
      return null;
    }
  }
};

export default ContactsBlock;
