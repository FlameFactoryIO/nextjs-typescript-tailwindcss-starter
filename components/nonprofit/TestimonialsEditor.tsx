import { FC, useState } from "react";
import Nonprofit from '../../dtos/Nonprofit';
import Testimonial from "../../dtos/Testimonial";
import Button from "../Button";
import Input from "../Input";
import Modal from '../Modal';

const TestimonialsEditor: FC<{
  nonprofit: Nonprofit;
  onSave: (
    testimonials: Testimonial[],
  ) => void;
  onCancel: () => void;
}> = ({ nonprofit, onSave = () => {}, onCancel = () => {} }) => {

  const [testimonials, setTestimonials] = useState(nonprofit.testimonials);

  return (
    <Modal
      header="Update Testimonials"
      onClose={onCancel}
      footer={
        <Button onClick={() => onSave(testimonials)}>
          Save
        </Button>
      }
    >
      <div>
      <div className="flex flex-col gap-10px ">
        {nonprofit.testimonials ? (
            nonprofit.testimonials.map((testimonial, index) => (
              <div key={`${location}_${index}`} className="rounded-10px border-1px p-10px">
                
                <div className="flex flex-row items-center gap-10px text-13px leading-17px t:text-14px t:leading-20px pb-10px">
                  <span className="font-bold">
                    Name: 
                  </span>
                  <Input value={testimonial.name}/>
                </div>
                <div className="flex flex-row items-center gap-10px text-13px leading-17px t:text-14px t:leading-20px pb-10px">
                  <span className="font-bold">
                    Comments: 
                  </span>
                  <Input value={testimonial.comments} />
                </div>
                <div className="flex flex-row gap-10px items-center text-13px leading-17px t:text-14px t:leading-20px pb-10px">
                  <span className="font-bold">
                    Company: 
                  </span>
                  <Input value={testimonial.company}/>
                </div>
                
              </div>
            ))
          ) : ''
          }
    </div>
      </div>

    </Modal>

    )

};

export default TestimonialsEditor;