import mongoose from 'mongoose'

const NotificationsSchema = new mongoose.Schema({
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
    default: false
  },
  type: {
    type: String,
    required: true
  }
})

const NotificationsModel = mongoose.model('Notifications', NotificationsSchema)

export default NotificationsModel
