import mongoose from 'mongoose'

const VerificationTokenSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      required: true
    },
    token: {
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

const SupervisiorModel = mongoose.model(
  'VerificationTokens',
  VerificationTokenSchema
)

export default SupervisiorModel
