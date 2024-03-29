import mongoose, { Schema, model } from 'mongoose'
import { IReminderModel } from '../types/Reminder.type'
// Reminder ID is generated dynamically by the db
const ReminderSchema = new Schema<IReminderModel>({
  patient_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  supervisor_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    minlength: 3,
    maxlength: 250
  },
  description: {
    type: String
  },
  due_date: {
    type: Date,
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Reminder = model('Reminder', ReminderSchema)

export default Reminder
