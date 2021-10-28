import Activity from './Activity';
import User from './User';

export default interface ActivityToUser {
  activityToUserId: number;
  activityId: number;
  userId: number;
  linkedEntityId: number | string;
  linkedEntityType: string;
  createdAt?: Date;
  activity: Activity;
  user: User;
}
