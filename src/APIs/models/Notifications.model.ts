import mongoose from 'mongoose'

const NotificationsSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
    autoIncrement: true,
    required: true
  },
  userID: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  isRead: {
    type: Boolean,
    default: false,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

export const NotificationsModel = mongoose.model('User', NotificationsSchema)
