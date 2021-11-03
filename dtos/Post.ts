import User from './User';
import PostToUser from './PostToUser';
import Challenge from './Challenge';
import PostLike from './PostLike';

export default interface Post {
  id: number;
  userId: number;
  user: User;
  challengeId: number;
  challenge: Challenge;
  description: string;
  videoUrl: string;
  mp4Video: string;
  duration: number;
  width: number;
  height: number;
  videoThumbnail: string;
  videoShareThumbnail: string;
  location: string;
  donationAmount: number;
  viewCount: number;
  likeCount: number;
  timesShared: number;
  mentionedUsers: User[];
  postToUsers: PostToUser[];
  usersWhoLiked: PostLike[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  reporters: User[];
  removeViewed: boolean;
}
