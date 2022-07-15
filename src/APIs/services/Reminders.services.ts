import * as RemindersModel from '../models/Reminder.model'
import {
  CreateReminderObjectType,
  UpdateReminderObjectType
} from '../types/Reminder.type'
import { UnprocessableError } from '../types/general.types'
import { getPatient } from '../models/Patient.model'
import { getSupervisorById } from '../models/Supervisor.model'
import mongoose from 'mongoose'

export const getAllRemindersByPatientId = async (
  patientId: mongoose.Types.ObjectId
) => {
  const reminders = await RemindersModel.getAllRemindersByPatientId(patientId)
  if (!reminders) {
    throw new UnprocessableError('Could not fetch reminders using patientId')
  }

  const AllReminders = await getReminderUserNames(reminders as [])

  return AllReminders
}

export const getAllRemindersBySupervisorId = async (
  supervisorId: mongoose.Types.ObjectId
) => {
  const reminders = await RemindersModel.getAllRemindersBySupervisorId(
    supervisorId
  )
  if (!reminders) {
    throw new UnprocessableError(
      'Could not fetch reminders using supervisorId'
    )
  }

  const AllReminders = await getReminderUserNames(reminders as [])

  return AllReminders
}

export const getReminder = (reminderId: mongoose.Types.ObjectId) => {
  const reminder = RemindersModel.getReminder(reminderId)
  if (!reminder) {
    throw new UnprocessableError('Could not fetch reminder')
  }

  return reminder
}

export const createReminder = (createReminderInput: CreateReminderObjectType) =>
  RemindersModel.createReminder(createReminderInput)

export const deleteReminder = (reminderId: mongoose.Types.ObjectId) => {
  const reminder = RemindersModel.deleteReminder(reminderId)

  if (!reminder) {
    throw new UnprocessableError('Could not delete reminder')
  }

  return reminder
}

export const updateReminder = (
  reminderUpdateInput: UpdateReminderObjectType
) => {
  const reminder = RemindersModel.updateReminder(reminderUpdateInput)
  if (!reminder) {
    throw new UnprocessableError('Could not update reminder')
  }

  return reminder
}

const getReminderUserNames = async (reminders: []) => {
  const AllReminders: any = []
  await Promise.all(
    reminders.map(async (reminder) => {
      const { patient_id, supervisor_id } = reminder
      const patient = await getPatient(new mongoose.Types.ObjectId(patient_id))
      const supervisor = await getSupervisorById(
        new mongoose.Types.ObjectId(supervisor_id)
      )

      AllReminders.push({
        reminder,
        patientName: patient?.name,
        supervisorName: supervisor.name
      })
    })
  )

  return AllReminders
}
