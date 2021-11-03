import Impact from './Impact';

export default interface SocialImage {
  id: number;
  imageUrl?: string;
  impact: Impact;
  order: number;
}
