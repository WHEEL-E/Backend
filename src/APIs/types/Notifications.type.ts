export interface NotificationObject {
    userID: number;
    title: string;
    description: string;
    createdAt?: Date;
    isRead?: boolean;
    type: string;
}
