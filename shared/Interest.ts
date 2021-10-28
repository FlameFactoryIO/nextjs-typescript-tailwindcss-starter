import InterestToUser from './InterestToUser';
import InterestToNonprofit from './InterestToNonprofit';

export default interface Interest {
  id: number;
  name: string;
  users: InterestToUser[];
  nonprofits: InterestToNonprofit[];
  unavailable?: boolean;
}
