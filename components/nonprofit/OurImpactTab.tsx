import { FC, useState } from "react";
import Nonprofit from '../../dtos/Nonprofit';
import AboutUsBigBlock from "./AboutUsBigBlock";
import AboutUsEditor from './AboutUsEditor';
import Interest from '../../dtos/Interest';
import TestimonialsBlock from './TestimonialsBlock';
import TestimonialsEditor from './TestimonialsEditor';
import Testimonial from '../../dtos/Testimonial';

const OurImpactTab: FC<{
  nonprofit: Nonprofit;
  ownsNonprofit: boolean;
}> = ({ nonprofit, ownsNonprofit }) => {

  const [isAboutUsEditorOpen, setAboutUsEditorOpen] = useState(false);
  const [isTestimonialsEditorOpen, setTestimonialsEditorOpen] = useState(false);

  const handleAboutUsSave = (
    description: string,
    interests: Interest[],
    locations: string[]
  ) => {
    try {
      // todo save to db
    } catch (e) {
    } finally {
      setAboutUsEditorOpen(false);
    }
  };

  const handleTestimonialsSave = (
    testimonials: Testimonial[],
  ) => {
    try {
      // todo save to db
    } catch (e) {
    } finally {
      setTestimonialsEditorOpen(false);
    }
  };

  return (
    <div>
      <AboutUsBigBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} onEditClick={() => setAboutUsEditorOpen(true)} ></AboutUsBigBlock>

      <div className="pt-30px">
        <TestimonialsBlock nonprofit={nonprofit} ownsNonprofit={ownsNonprofit} onEditClick={() => setTestimonialsEditorOpen(true)}></TestimonialsBlock>
      </div>
      

      {isAboutUsEditorOpen && (
        <AboutUsEditor nonprofit={nonprofit} onSave={handleAboutUsSave} onCancel={() => setAboutUsEditorOpen(false)} />
      )}

      {isTestimonialsEditorOpen && (
        <TestimonialsEditor nonprofit={nonprofit} onSave={handleTestimonialsSave} onCancel={() => setTestimonialsEditorOpen(false)} />
      )}
    </div>

  )

};

export default OurImpactTab;