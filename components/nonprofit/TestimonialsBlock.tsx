import { Block } from './Block';
import { EditPenIcon } from './Icons';
const TestimonialsBlock = ({nonprofit, ownsNonprofit, onEditClick }) => (

  <Block>
    <div className="flex">
      <div className="font-bold text-16px leading-30px t:text-20px">
        Testimonials
      </div>
      {ownsNonprofit && (
        <div onClick={onEditClick} className="cursor-pointer ml-5px">
          <EditPenIcon />
        </div>
      )}
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
  </Block>


);

export default TestimonialsBlock;