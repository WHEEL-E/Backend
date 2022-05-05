/* eslint-disable no-undef */
import * as NoteService from '../../src/APIs/services/Notes.services'
import * as dbHandler from '../utilities/dbHandler'
import { CreateNoteObjectType, UpdateNoteObjectType } from '../../src/APIs/types/Note.type'
import { createNote } from '../utilities/seed'
import mongoose from 'mongoose'
describe('Testing Note Service', () => {
  beforeAll(async () => await dbHandler.connect())
  beforeEach(async () => {
    await createNote()
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
      userId: '6263ce0577164ec6745e3bd7',
      title: 'Hello',
      description: 'world!'
    }
    const note = await NoteService.createNote(noteInput)
    expect(note.title).toBe('Hello')
  })

  test('Get note', async () => {
    const noteInput:CreateNoteObjectType = {
      userId: '6263ce0577164ec6745e3bd7',
      title: 'Hello',
      description: 'world!'
    }
    const { _id } = await NoteService.createNote(noteInput)
    if (!_id) {
      // search about error handling in tests
      return
    }
    const note = await NoteService.getNote(_id)
    if (!note) {
      // search about error handling in tests
      return
    }
    expect(note.title).toBe('Hello')
  })

  test('Update note', async () => {
    const noteInput:CreateNoteObjectType = {
      userId: '6263ce0577164ec6745e3bd7',
      title: 'Hello',
      description: 'world!'
    }
    const { _id } = await NoteService.createNote(noteInput)
    if (!_id) {
      // search about error handling in tests
      return
    }
    const noteUpdateInput: UpdateNoteObjectType = {
      noteId: new mongoose.Types.ObjectId('6263ce0577164ec6745e3bd7'),
      title: 'Updated',
      description: 'world!'
    }
    const note = await NoteService.updateNote(noteUpdateInput)
    if (!note) {
      // search about error handling in tests
      return
    }
    expect(note.title).toBe('Updated')
  })

  test('Delete note', async () => {
    const noteInput:CreateNoteObjectType = {
      userId: '6263ce0577164ec6745e3bd7',
      title: 'Hello',
      description: 'world!'
    }
    const { _id } = await NoteService.createNote(noteInput)
    if (!_id) {
      // search about error handling in tests
      return
    }

    const note = await NoteService.deleteNote(_id)
    if (!note) {
      // search about error handling in tests
      return
    }

    expect(note._id).toEqual(_id)
  })
})
