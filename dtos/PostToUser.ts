import Post from './Post';
import User from './User';

export default interface PostToUser {
  id: number;
  postId: number;
  userId: number;
  post: Post;
  user: User;
  status: "IGNORED" | "PENDING" | "DONATED_ONLY" | "DONATED_POST" | "EXPIRED";
  createdAt: Date;
  updatedAt: Date;
}
