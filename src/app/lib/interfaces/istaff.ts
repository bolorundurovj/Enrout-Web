export interface IStaff {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  designation: string;
  staffId: string;
  email: string;
  avatar: string;
  phone: string;
  isActive?: boolean;
}
