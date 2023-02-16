export interface IStaffDashboardStats {
  // The total number of submissions made by all students.
  submissions: number;

  // An array of objects containing the count of submissions for each category.
  submissionsByCategory: SubmissionsByCategory[];

  // The number of unique students who have made submissions.
  students: number;

  // An array of objects representing the weekly submission data for each category.
  weeklySubmissions: WeeklySubmissionData[];
}

interface SubmissionsByCategory {
  // The state of the submission category (e.g. "draft", "pending", etc.).
  state: "draft" | "pending" | "approved" | "rejected" | "change-requested";

  // The count of submissions in this category.
  count: number;
}

interface WeeklySubmissionData {
  // The name of the submission category (e.g. "draft", "pending", etc.).
  name: "draft" | "pending" | "approved" | "rejected" | "change-requested";

  // An array of length 7 representing the number of submissions for each day of the week,
  // starting with Sunday at index 0 and ending with Saturday at index 6.
  data: [number, number, number, number, number, number, number];
}
