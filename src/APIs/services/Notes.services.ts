import * as NotesModel from '../models/Note.model'
import { CreateNoteObjectType, UpdateNoteObjectType } from '../types/Note.type'
import mongoose from 'mongoose'

export const getAllNotes = (userId: mongoose.Types.ObjectId) =>
  NotesModel.getAllNotes(userId)

export const getNote = (noteId:mongoose.Types.ObjectId) =>
  NotesModel.getNote(noteId)

export const createNote = (createNoteInput: CreateNoteObjectType) =>
  NotesModel.createNote(createNoteInput)

export const deleteNote = (noteId: mongoose.Types.ObjectId) =>
  NotesModel.deleteNote(noteId)

export const updateNote = (noteUpdateInput: UpdateNoteObjectType) =>
  NotesModel.updateNote(noteUpdateInput)
