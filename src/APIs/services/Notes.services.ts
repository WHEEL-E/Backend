import * as NotesModel from '../models/Note.model'
import { CreateNoteObjectType, UpdateNoteObjectType } from '../types/Note.type'
import { UnprocessableError } from '../types/general.types'
import mongoose from 'mongoose'

export const getAllNotes = (userId: mongoose.Types.ObjectId) => {
  const notes = NotesModel.getAllNotes(userId)
  if (!notes) {
    throw new UnprocessableError('Could not fetch notes ')
  }

  return notes
}

export const getNote = (noteId:mongoose.Types.ObjectId) => {
  const note = NotesModel.getNote(noteId)
  if (!note) {
    throw new UnprocessableError('Could not fetch note')
  }

  return note
}

export const createNote = (createNoteInput: CreateNoteObjectType) =>
  NotesModel.createNote(createNoteInput)

export const deleteNote = (noteId: mongoose.Types.ObjectId) => {
  const note = NotesModel.deleteNote(noteId)

  if (!note) {
    throw new UnprocessableError('Could not delete note')
  }

  return note
}

export const updateNote = (noteUpdateInput: UpdateNoteObjectType) => {
  const note = NotesModel.updateNote(noteUpdateInput)
  if (!note) {
    throw new UnprocessableError('could not update note')
  }

  return note
}
