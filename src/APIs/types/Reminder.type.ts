import mongoose from 'mongoose'

export interface IReminderModel{
      patient_id: mongoose.Types.ObjectId | undefined
      supervisor_id: mongoose.Types.ObjectId | undefined
      title: string
      description: string
      due_date: Date
      created_at: Date
      updated_at: Date
}

export type CreateReminderObjectType = {
      patient_Id: mongoose.Types.ObjectId
      supervisor_id: mongoose.Types.ObjectId
      due_date:Date
      title:string
      description: string
}
