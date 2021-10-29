import Nonprofit from './Nonprofit';
import Interest from './Interest';

export default interface InterestToNonprofit {
  id: number;
  nonprofitId: number;
  interestId: number;
  nonprofit: Nonprofit;
  interest: Interest;
}
