import Post from './Post';
import User from './User';

export default interface PostLike {
  id: number;
  postId: number;
  userId: number;
  liked: boolean;
  post: Post;
  user: User;
  updatedAt: Date;
  createdAt: Date;
}
