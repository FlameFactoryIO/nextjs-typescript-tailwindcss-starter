import User from "./User";

export default interface Contact {
  id: number;
  userId: number;
  user: User;
  name: string;
  phoneNumber: string;
  invited: boolean;
  signedUp: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
