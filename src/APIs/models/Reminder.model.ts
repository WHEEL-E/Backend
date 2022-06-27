import { CreateReminderObjectType, UpdateReminderObjectType } from '../types/Reminder.type'
import Reminder from '../schema/Reminder.schema'
import mongoose from 'mongoose'

/**
 *
 * @param userId Id of the reminders owner
 * @returns array of stored reminders
 */
export const getAllRemindersByPatientId = async (patientId: mongoose.Types.ObjectId) => {
  const reminders = await Reminder.find({ patient_id: patientId })

  return reminders
}

/**
 *
 * @param userId Id of the reminders owner
 * @returns array of stored reminders
 */
export const getAllRemindersBySupervisorId = async (supervisorId: mongoose.Types.ObjectId) => {
  const reminders = await Reminder.find({ supervisor_id: supervisorId })

  return reminders
}

/**
 *
 * @param userId Id of the reminder to be retrieved
 * @returns The stored reminder
 */
export const getReminder = async (reminderId: mongoose.Types.ObjectId) => {
  const reminder = await Reminder.findOne({ _id: reminderId })

  return reminder
}

/**
 *
 * @param reminderInput create a new remineder input
 * @returns id of the newly created reminder
 */
export const createReminder = async (reminderInput: CreateReminderObjectType) => {
  const reminder = await Reminder.create({
    patient_id: new mongoose.Types.ObjectId(reminderInput.patient_id),
    supervisor_id: new mongoose.Types.ObjectId(reminderInput.supervisor_id),
    due_date: new Date(reminderInput.due_date),
    title: reminderInput.title,
    description: reminderInput.description
  })

  return reminder
}

/**
 *
 * @param reimnderInput Id of the reminder to be deleted
 * @returns the deleted reminder
 */
export const deleteReminder = async (reminderId: mongoose.Types.ObjectId) => {
  const reminder = await Reminder.findByIdAndRemove(reminderId)

  return reminder
}

/**
 *
 * @param reminderUpdateInput Id and updated data
 * @returns the updated reminder
 */
export const updateReminder = async (reminderUpdateInput: UpdateReminderObjectType) => {
  const { reminder_id, title, description } = reminderUpdateInput
  const reminder = await Reminder.findOneAndUpdate({ _id: reminder_id }, { title: title, description: description }, { new: true })

  return reminder
}
