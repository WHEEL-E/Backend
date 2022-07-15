import * as NoteModel from '../../src/APIs/models/Note.model'
import * as PatientModel from '../../src/APIs/models/Patient.model'
import * as ReminderModel from '../../src/APIs/models/Reminder.model'
import { CreateNoteObjectType } from '../../src/APIs/types/Note.type'
import { CreatePatientObjectType } from '../../src/APIs/types/Patient.type'
import { CreateReminderObjectType } from '../../src/APIs/types/Reminder.type'
import { UnprocessableError } from '../../src/APIs/types/general.types'
import mongoose from 'mongoose'

export const createNote = async ():Promise<mongoose.Types.ObjectId[]> => {
  const note:CreateNoteObjectType = {
    user_id: '6263ce0577164ec6745e3bd7',
    title: 'Hello',
    description: 'world!'
  }
  const note2:CreateNoteObjectType = {
    user_id: '6263ce0577164ec6745e3bd7',
    title: 'Hello2',
    description: 'world2!'
  }

  const { _id: noteId1 } = await NoteModel.createNote(note)
  const { _id: noteId2 } = await NoteModel.createNote(note2)

  if (!noteId1 || !noteId2) {
    throw new UnprocessableError('Can not intialize the notes in db for testing')
  }

  return [noteId1, noteId2]
}

export const createReminder = async () => {
  const reminder:CreateReminderObjectType = {
    patient_id: new mongoose.Types.ObjectId('6263ce0577164ec6745e3bd7'),
    supervisor_id: new mongoose.Types.ObjectId('6263a04f5de1617c2c84dbbd'),
    title: 'Hello',
    description: 'world!',
    due_date: new Date('2022-7-15')
  }
  const reminder1:CreateReminderObjectType = {
    patient_id: new mongoose.Types.ObjectId('6263ce0577164ec6745e3bd7'),
    supervisor_id: new mongoose.Types.ObjectId('6263a04f5de1617c2c84dbbd'),
    title: 'Hiii',
    description: 'Life',
    due_date: new Date('2022-5-22')
  }

  const { _id: remId1 } = await ReminderModel.createReminder(reminder)
  const { _id: remdId2 } = await ReminderModel.createReminder(reminder1)

  if (!remId1 || !remdId2) {
    throw new UnprocessableError('Can not intialize the notes in db for testing')
  }

  return [remId1, remdId2]
}

export const createPatient = async () => {
  const patient : CreatePatientObjectType = {
    email: 'masha@gmail.com',
    patient_name: 'masha',
    address: 'woods',
    dob: new Date('1990-5-20'),
    emergency_number: 1258944646,
    gender: 'female',
    height: 150,
    password: '1234587sjjds',
    phone: 128564644,
    smoking: false,
    weight: 55
  }
  const patient1 : CreatePatientObjectType = {
    email: 'masha1@gmail.com',
    patient_name: 'masha',
    address: 'woods',
    dob: new Date('1990-5-20'),
    emergency_number: 1258944646,
    gender: 'female',
    height: 150,
    password: '1234587sjjds',
    phone: 128564644,
    smoking: false,
    weight: 55
  }

  const { _id: patientId1 } = await PatientModel.createPatient(patient)
  const { _id: patientId2 } = await PatientModel.createPatient(patient1)

  return [patientId1, patientId2]
}
