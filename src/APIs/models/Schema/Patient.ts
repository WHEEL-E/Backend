import { Schema, model } from 'mongoose'

interface IPatientModel{
      name: string
      email: string
      password: string
      phone: number
      emergency_number: number
      address: string
      gender: string
      weight?: number
      height?: number
      dob: Date
      smoking?: boolean
      chair_serial_id?: string
      // Commented until we know how we're going to store them effeciently
      // profile_picture: string
      // medical_history: string
}

// Patient ID is generated dynamically by the db
const patientSchema = new Schema<IPatientModel>({
  name: {
    type: String,
    minlength: 3,
    maxlength: 250,
    required: true
  },
  email: {
    type: String,
    unique: true,
    minlength: 10,
    maxlength: 250,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 250,
    required: true
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 25,
    required: true
  },
  emergency_number: {
    type: Number,
    minlength: 10,
    maxlength: 25,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  weight: { type: Number },
  height: { type: Number },
  // instead of age attribute
  dob: { type: Date, required: true },
  smoking: {
    type: Boolean
  },
  chair_serial_id: {
    type: String
  }
  // profile_picture: {},
  // medical_history: {}
})

const Patient = model('Patient', patientSchema)

export default Patient
