import mongoose from 'mongoose'

export interface NotificationObjectType {
    _id?: mongoose.Types.ObjectId;
    user_id: mongoose.Types.ObjectId;
    title: string;
    description: string;
    isRead: boolean;
    type: string;
}
