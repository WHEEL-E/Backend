/* eslint-disable no-undef */
import * as NoteService from '../../src/APIs/services/Notes.services'
import * as dbHandler from '../utilities/dbHandler'
import { CreateNoteObjectType, UpdateNoteObjectType } from '../../src/APIs/types/Note.type'
import { createNote } from '../utilities/seed'
import mongoose from 'mongoose'

describe('Testing Note Service', () => {
  let noteId1 : mongoose.Types.ObjectId, noteId2 : mongoose.Types.ObjectId
  beforeAll(async () => await dbHandler.connect())
  beforeEach(async () => {
    const result = await createNote()
    noteId1 = result[0]
    noteId2 = result[1]
  })

  afterEach(async () => await dbHandler.clearDatabase())
  afterAll(async () => await dbHandler.closeDatabase())

  test('Get notes', async () => {
    const userId = new mongoose.Types.ObjectId('6263ce0577164ec6745e3bd7')
    const notes = await NoteService.getAllNotes(userId)

    expect(notes.length).toBe(2)
    expect(notes[0].title).toBe('Hello')
  })

  test('Create note', async () => {
    const noteInput:CreateNoteObjectType = {
      user_id: '6263ce0577164ec6745e3bd7',
      title: 'Hello',
      description: 'world!'
    }
    const note = await NoteService.createNote(noteInput)
    expect(note.title).toBe('Hello')
  })

  test('Get note', async () => {
    const note = await NoteService.getNote(noteId1)
    if (!note) {
      throw new Error('Note not found')
    }
    expect(note.title).toBe('Hello')
  })

  test('Update note', async () => {
    const noteUpdateInput: UpdateNoteObjectType = {
      noteId: noteId1,
      title: 'Updated',
      description: 'world!'
    }
    const note = await NoteService.updateNote(noteUpdateInput)
    if (!note) {
      throw new Error('Can not update the note')
    }
    expect(note.title).toBe('Updated')
  })

  test('Delete note', async () => {
    const note = await NoteService.deleteNote(noteId2)
    if (!note) {
      throw new Error('Can not delete note')
    }

    expect(note._id).toEqual(noteId2)
  })
})
