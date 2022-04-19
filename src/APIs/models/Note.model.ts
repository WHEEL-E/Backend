import { CreateNoteObjectType } from '../types/Note.type'
import Note from '../Schema/Note.schema'

/**
 *
 * @param noteInput create new note iput
 * @returns id of the newly created input
 */
export const createNote = async (noteInput: CreateNoteObjectType) => {
  const note = await Note.create({
    user_id: noteInput.userId,
    title: noteInput.title,
    description: noteInput.description
  })
  const response = await note.save()

  return response
}
