
export default interface ClaimPageRequest {
  id: number;
  email: string;
  role: string;
  name: string;
  paypalId: string;
  nonprofitName: string;
  nonprofitLogo?: string;
  createdAt?: Date;
  updatedAt?: Date;
  status: "PENDING" | "APPROVED" | "REJECTED";
}
