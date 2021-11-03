import User from './User';
import ActivityToUser from './ActivityToUser';
import Post from './Post';
import Payment from './Payment';
import PostToUser from './PostToUser';

export type ActivityEntities = User | Post | Payment | PostToUser;

export default interface Activity {
  id: number;
  section: "activity" | "challenges";
  userId: number;
  user: User;
  entityId: number | string;
  entityType: string;
  rootEntityId: number | string;
  rootEntityType: string;
  type: "like" | "follow" | "tag" | "mention" | "donate" | "challenge" | "challengeFulfilled" | "challengeUploaded" | "challengeDeleted" | "postReported" | "contact_joined" | "complete_onboarding";
  groupId: number;
  linkedEntityCount: number | null;
  read: boolean;
  activityToUsers: ActivityToUser[];
  createdAt: Date;
  updatedAt: Date;
}
