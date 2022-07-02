import mongoose from 'mongoose'

const ResetPasswordTokenSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      required: true,
      unique: true
    },
    token: {
      type: String,
      required: true
    },
    expiration_date: {
      type: Date,
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

const ResetPasswordToken = mongoose.model(
  'ResetPasswordTokens',
  ResetPasswordTokenSchema
)

export default ResetPasswordToken
