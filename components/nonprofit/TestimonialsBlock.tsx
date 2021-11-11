import React, { useState } from "react";
import Nonprofit from "../../dtos/Nonprofit";
import Modal from "../Modal";
import Button from "../Button";
import { Block, EmptyBlock } from "./Block";
import { EditPenIcon, TestimonialsIcon } from "./Icons";

const TestimonialsBlock = ({nonprofit, ownsNonprofit}: {nonprofit: Nonprofit, ownsNonprofit: boolean}) => {
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

  if (!nonprofit?.testimonials?.length) {
    if (!ownsNonprofit) {
      return null;
    }

    return (
      <EmptyBlock
        icon={<TestimonialsIcon />}
        text={
          <>
            <span className="font-bold">Add testimonials info</span>
            <br />
            and make it easy to find out more about your cause.
          </>
        }
        actionText="Add testimonials"
        onClick={() => setEditorOpen(true)}
      />
    );
  }

  return (
    <Block>
      <div className="flex">
        <div className="font-bold text-16px leading-30px t:text-20px">
          Testimonials
        </div>
        <div onClick={() => setEditorOpen(true)} className="cursor-pointer ml-5px">
          <EditPenIcon />
        </div>
      </div>

      <div className="flex flex-col t:flex-wrap gap-y-3px gap-x-50px">
        {nonprofit.testimonials ? (
          nonprofit.testimonials.map((testimonial, index) => (
            <div key={`${location}_${index}`} className="t:max-w-320px">
              <span className="font-bold text-13px leading-17px t:text-14px t:leading-20px">{testimonial.name}</span><br />
              <div className="pt-7px text-12px leading-18px t:text-16px">
                {`${testimonial.comments} - `}
                <span className="font-bold">{testimonial.company}</span>
              </div>

            </div>
          ))
        ) : ''
        }
      </div>

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

export default TestimonialsBlock;
