import User from './User';

export default interface UserFollow {
  id: number;
  userId: number;
  userFollowingId: number;
  user: User;
  userFollowing: User;
  following: boolean;
  updatedAt: Date;
  createdAt: Date;
}
