import mongoose, { Schema, model } from 'mongoose'
import { INoteModel } from '../types/Note.type'
// Note ID is generated dynamically by the db
export const NotesSchema = new Schema<INoteModel>({
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

export default model('Note', NotesSchema)
