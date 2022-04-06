import mongoose from 'mongoose'

const SupervisiorSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
    autoIncrement: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: true
  }
})

export const SupervisiorModel = mongoose.model('User', SupervisiorSchema)
