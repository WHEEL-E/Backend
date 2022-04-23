import { CreateNoteObjectType, UpdateNoteObjectType } from '../types/Note.type'
import { NotFoundError } from '../types/general.types'
import Note from '../schema/Note.schema'
import mongoose from 'mongoose'

/**
 *
 * @param userId Id of the notes owner
 * @returns array of stored notes
 */
export const getAllNotes = async (userId: mongoose.Types.ObjectId) => {
  const notes = await Note.find({ user_id: userId })
  if (!notes) {
    throw new NotFoundError('Notes not found')
  }

  return notes
}

/**
 *
 * @param userId Id of the note to be retrieved
 * @returns The stored note
 */
export const getNote = async (noteId: mongoose.Types.ObjectId) => {
  const note = await Note.findOne({ _id: noteId })
  if (!note) {
    throw new NotFoundError('Note not found')
  }

  return note
}

/**
 *
 * @param noteInput create new note iput
 * @returns id of the newly created input
 */
export const createNote = async (noteInput: CreateNoteObjectType) => {
  const response = await Note.create({
    user_id: new mongoose.Types.ObjectId(noteInput.userId),
    title: noteInput.title,
    description: noteInput.description
  })

  return response
}

/**
 *
 * @param noteInput Id of the note to be deleted
 * @returns the deleted note
 */
export const deleteNote = async (noteId: mongoose.Types.ObjectId) => {
  const note = await Note.findByIdAndRemove(noteId)
  // not sure this is the right place for error handling no?
  if (!note) {
    throw new NotFoundError('Note not found')
  }

  return note
}

/**
 *
 * @param noteUpdateInput Id and updated data
 * @returns the updated note
 */
export const updateNote = async (noteIUpdateInput: UpdateNoteObjectType) => {
  const { noteId, title, description } = noteIUpdateInput
  const note = await Note.findOneAndUpdate({ _id: noteId }, { title: title, description: description }, { new: true })
  if (!note) {
    throw new NotFoundError('Note not found')
  }

  return note
}
