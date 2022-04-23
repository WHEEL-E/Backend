export interface NotificationObjectType {
    _id?: string;
    user_id: number;
    title: string;
    description: string;
    isRead: boolean;
    type: string;
}
