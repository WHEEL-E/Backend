import mongoose, { Schema, model } from 'mongoose'

const InvitationSchema = new Schema(
  {
    from_id: {
      type: mongoose.Types.ObjectId,
      ref: 'Patient',
      required: true
    },
    to_id: {
      type: mongoose.Types.ObjectId,
      ref: 'Supervisior',
      required: true
    },
    status: {
      type: String,
      values: ['Pending', 'Accepted', 'Rejected'],
      default: 'Pending'
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

export default model('Invitations', InvitationSchema)
