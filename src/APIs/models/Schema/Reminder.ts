import mongoose, { Schema, model } from 'mongoose'

interface IReminderModel{
      patient_id: mongoose.Types.ObjectId | undefined
      supervisor_id: mongoose.Types.ObjectId | undefined
      title: string
      description: string
      due_date: Date
      created_at: Date
      updated_at: Date
}
// Reminder ID is generated dynamically by the db
const reminderSchema = new Schema<IReminderModel>({
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

const Reminder = model('Reminder', reminderSchema)

export default Reminder
