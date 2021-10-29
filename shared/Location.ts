import Nonprofit from './Nonprofit';

export default interface Location {
  id: number;
  nonprofitId: number;
  nonprofit: Nonprofit;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
}
