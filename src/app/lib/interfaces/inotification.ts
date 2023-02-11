export interface INotification {
  createdAt: any;
  id: string;
  isRead: boolean;
  message: string;
  ownerId: string;
  title: string;
  type: string;
  formattedDate?: Date;
}
