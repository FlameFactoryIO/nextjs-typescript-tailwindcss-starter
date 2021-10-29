import Nonprofit from './Nonprofit';

export default interface Testimonial {
  id: number;
  nonprofitId: number;
  nonprofit: Nonprofit;
  name: string;
  company: string;
  comments: string;
  createdAt?: Date;
  updatedAt?: Date;
}
