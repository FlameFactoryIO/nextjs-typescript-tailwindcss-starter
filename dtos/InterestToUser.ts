import User from './User';
import Interest from './Interest';

export default interface InterestToUser {
  id: number;
  userId: number;
  interestId: number;
  user: User;
  interest: Interest;
}
