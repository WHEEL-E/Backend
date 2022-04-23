import { CreateReminderObjectType } from '../types/Reminder.type'
import Reminder from '../Schema/Reminder.schema'

/**
 *
 * @param reminderInput create a new remineder input
 * @returns id of the newly created reminder
 */
export const createReminder = async (reminderInput: CreateReminderObjectType) => {
  const reminder = await Reminder.create({
    patient_id: reminderInput.patient_Id,
    supervisor_id: reminderInput.supervisor_id,
    due_date: reminderInput.due_date,
    title: reminderInput.title,
    description: reminderInput.description
  })

  const response = reminder.save()

  return response
}