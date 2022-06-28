import mongoose from 'mongoose'

const NotificationsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
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
    isRead: {
      type: Boolean,
      required: true,
      default: false
    },
    type: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

const NotificationsModel = mongoose.model('Notifications', NotificationsSchema)

export default NotificationsModel
