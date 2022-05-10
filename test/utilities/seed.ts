import * as NoteModel from '../../src/APIs/models/Note.model'
import { CreateNoteObjectType } from '../../src/APIs/types/Note.type'

export const createNote = async () => {
  const note:CreateNoteObjectType = {
    userId: '6263ce0577164ec6745e3bd7',
    title: 'Hello',
    description: 'world!'
  }
  const note2:CreateNoteObjectType = {
    userId: '6263ce0577164ec6745e3bd7',
    title: 'Hello2',
    description: 'world2!'
  }
  await NoteModel.createNote(note)
  await NoteModel.createNote(note2)
}
