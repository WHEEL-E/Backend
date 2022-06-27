import mongoose, { Schema, model } from 'mongoose'
import { IPatientModel } from '../types/Patient.type'

const PatientSchema = new Schema<IPatientModel>({
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
  dob: { type: Date, required: true },
  smoking: {
    type: Boolean
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  chair_serial_id: {
    type: String
  },
  supervisors: {
    type: [{ type: mongoose.Types.ObjectId, ref: 'Supervisor', default: [] }],
    default: []
  },
  profile_picture: {
    type: String
  },
  medical_history: [{ type: String }]
})

const Patient = model('Patient', PatientSchema)

export default Patient
