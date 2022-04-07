import mongoose, { Schema, model } from 'mongoose'

interface INote {
  _id: Number
  user_id: mongoose.Types.ObjectId | undefined
  title: string
  description: string
  created_at: Date
  updated_at: Date
}
// Note ID is generated dynamically by the db
const notesSchema = new Schema<INote>({
  // patient_id
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  title: {
    type: String,
    minlength: 3,
    maxlength: 250
  },
  description: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

export default model('Note', notesSchema)
