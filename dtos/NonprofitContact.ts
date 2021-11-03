import Nonprofit from './Nonprofit';

export default interface NonprofitContact {
  id: number;
  nonprofitId: number;
  nonprofit: Nonprofit;
  branch: string;
  primaryEmailAddress: string;
  secondaryEmailAddress: string;
  primaryPhoneNumber: string;
  secondaryPhoneNumber: string;
  website: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}
