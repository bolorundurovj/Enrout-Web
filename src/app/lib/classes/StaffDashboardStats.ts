import {IStaffDashboardStats} from "@lib/interfaces/istaff-dashboard-stats";

export class StaffDashboardStats implements IStaffDashboardStats{
  submissions = 0;

  submissionsByCategory = [];

  students = 0;

  weeklySubmissions= [];
}
