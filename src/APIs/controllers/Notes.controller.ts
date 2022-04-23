import * as NotesServices from '../services/Notes.services'
import { RequestHandler } from 'express'
import { UpdateNoteObjectType } from '../types/Note.type'
import mongoose from 'mongoose'

export const getAllNotes: RequestHandler = async ({ body }) => {
  const userId = new mongoose.Types.ObjectId(body.user_id)
  const response = await NotesServices.getAllNotes(userId)

  return {
    response: response,
    message: 'Notes retrieved successfully'
  }
}

export const getNote: RequestHandler = async ({ body }) => {
  const noteId = new mongoose.Types.ObjectId(body.id)
  const response = await NotesServices.getNote(noteId)

  return {
    response: response,
    message: 'Note retrieved successfully'
  }
}

export const createNote: RequestHandler = async ({ body }) => {
  const response = await NotesServices.createNote(body)

  return {
    response: response,
    message: 'Note created successfully'
  }
}

export const deleteNote: RequestHandler = async ({ body }) => {
  const noteId = new mongoose.Types.ObjectId(body.id)
  const response = await NotesServices.deleteNote(noteId)

  return {
    response: response,
    message: 'Note deleted successfully'
  }
}

export const updateNote: RequestHandler = async ({ body }) => {
  const updateNoteInput : UpdateNoteObjectType = {
    noteId: new mongoose.Types.ObjectId(body.id),
    title: body.title,
    description: body.description
  }

  const response = await NotesServices.updateNote(updateNoteInput)

  return {
    response: response,
    message: 'Note updated successfully'
  }
}
