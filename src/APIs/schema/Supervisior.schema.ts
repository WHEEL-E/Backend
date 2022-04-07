import mongoose from 'mongoose'

const SupervisiorSchema = new mongoose.Schema({
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

const SupervisiorModel = mongoose.model('Supervisiors', SupervisiorSchema)

export default SupervisiorModel
