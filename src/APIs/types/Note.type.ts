import mongoose from 'mongoose'

export interface INoteModel {
      _id: Number
      user_id: mongoose.Types.ObjectId | undefined
      title: string
      description: string
      created_at: Date
      updated_at: Date
}

export type CreateNoteObjectType = {
      userId: mongoose.Types.ObjectId
      title:string
      description: string
}
