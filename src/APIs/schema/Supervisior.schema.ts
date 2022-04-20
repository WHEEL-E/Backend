import mongoose from 'mongoose'

const SupervisiorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 255
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 255
    },
    phone: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    profile_picture: {
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

const SupervisiorModel = mongoose.model('Supervisiors', SupervisiorSchema)

export default SupervisiorModel
