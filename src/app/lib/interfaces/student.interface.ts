import {StudentType} from "@lib/enums/student-type";

export interface IStudent {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  role: StudentType;
  matricNo: string;
  email: string;
  avatar: string;
  phone: string;
  isActive?: boolean;
}
