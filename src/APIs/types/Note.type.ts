import mongoose from 'mongoose'

export interface INoteModel {
      _id:mongoose.Types.ObjectId | undefined
      user_id: mongoose.Types.ObjectId | undefined
      title: string
      description: string
      created_at: Date
      updated_at: Date
}

export type CreateNoteObjectType = {
      userId: string
      title:string
      description: string
}

export type UpdateNoteObjectType = {
      noteId: mongoose.Types.ObjectId | undefined
      title: string
      description: string
}
