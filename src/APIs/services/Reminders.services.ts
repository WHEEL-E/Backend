import * as RemindersModel from '../models/Reminder.model'
import { CreateReminderObjectType, UpdateReminderObjectType } from '../types/Reminder.type'
import { UnprocessableError } from '../types/general.types'
import mongoose from 'mongoose'

export const getAllRemindersByPatientId = (userId: mongoose.Types.ObjectId) => {
  const reminders = RemindersModel.getAllRemindersByPatientId(userId)
  if (!reminders) {
    throw new UnprocessableError('Could not fetch reminders using patientId')
  }

  return reminders
}

export const getAllRemindersBySupervisorId = (userId: mongoose.Types.ObjectId) => {
  const reminders = RemindersModel.getAllRemindersBySupervisorId(userId)
  if (!reminders) {
    throw new UnprocessableError('Could not fetch reminders using supervisorId')
  }

  return reminders
}

export const getReminder = (reminderId:mongoose.Types.ObjectId) => {
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

export const updateReminder = (reminderUpdateInput: UpdateReminderObjectType) => {
  const reminder = RemindersModel.updateReminder(reminderUpdateInput)
  if (!reminder) {
    throw new UnprocessableError('Could not update reminder')
  }

  return reminder
}
