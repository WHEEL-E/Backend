import * as RemindersServices from '../services/Reminders.services'
import { RequestHandler } from 'express'
import { UpdateReminderObjectType } from '../types/Reminder.type'
import mongoose from 'mongoose'

export const getAllRemindersByPatientId: RequestHandler = async ({ params }) => {
  const patientId = new mongoose.Types.ObjectId(params.user_id)
  const response = await RemindersServices.getAllRemindersByPatientId(patientId)

  return {
    response: response,
    message: 'Reminder retrieved successfully'
  }
}

export const getAllRemindersBySupervisorId: RequestHandler = async ({ params }) => {
  const supervisorId = new mongoose.Types.ObjectId(params.user_id)
  const response = await RemindersServices.getAllRemindersByPatientId(supervisorId)

  return {
    response: response,
    message: 'Reminder retrieved successfully'
  }
}

export const getReminder: RequestHandler = async ({ params }) => {
  const reminderId = new mongoose.Types.ObjectId(params.id)
  const response = await RemindersServices.getReminder(reminderId)

  return {
    response: response,
    message: 'Reminder retrieved successfully'
  }
}

export const createReminder: RequestHandler = async ({ body }) => {
  const response = await RemindersServices.createReminder(body)

  return {
    response: response,
    message: 'Reminder created successfully'
  }
}

export const deleteReminder: RequestHandler = async ({ params }) => {
  const reminderId = new mongoose.Types.ObjectId(params.id)
  const response = await RemindersServices.deleteReminder(reminderId)

  return {
    response: response,
    message: 'Reminder deleted successfully'
  }
}

export const updateReminder: RequestHandler = async ({ body, params }) => {
  const updatereminderInput : UpdateReminderObjectType = {
    reminder_id: new mongoose.Types.ObjectId(params.id),
    title: body.title,
    description: body.description
  }

  const response = await RemindersServices.updateReminder(updatereminderInput)

  return {
    response: response,
    message: 'Reminder updated successfully'
  }
}
