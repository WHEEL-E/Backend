/* eslint-disable no-undef */
import * as ReminderService from '../../src/APIs/services/Reminders.services'
import * as dbHandler from '../utilities/dbHandler'
import { CreateReminderObjectType, UpdateReminderObjectType } from '../../src/APIs/types/Reminder.type'
import { createReminder } from '../utilities/seed'
import mongoose from 'mongoose'
describe('Testing Note Service', () => {
  beforeAll(async () => await dbHandler.connect())
  beforeEach(async () => {
    await createReminder()
  })

  afterEach(async () => await dbHandler.clearDatabase())
  afterAll(async () => await dbHandler.closeDatabase())

  test('Get reminders by patient id', async () => {
    const patientId = new mongoose.Types.ObjectId('6263ce0577164ec6745e3bd7')
    const reminders = await ReminderService.getAllRemindersByPatientId(patientId)

    expect(reminders.length).toBe(2)
    expect(reminders[0].title).toBe('Hello')
  })

  test('Get reminders by supervisor id', async () => {
    const supervisorId = new mongoose.Types.ObjectId('6263a04f5de1617c2c84dbbd')
    const reminders = await ReminderService.getAllRemindersBySupervisorId(supervisorId)

    expect(reminders.length).toBe(2)
    expect(reminders[0].title).toBe('Hello')
  })

  test('Create a reminder', async () => {
    const reminderInput:CreateReminderObjectType = {
      patient_id: new mongoose.Types.ObjectId('624b12004b1127a31d8da46e'),
      supervisor_id: new mongoose.Types.ObjectId('6263a04f5de1617c2c84dbbd'),
      title: 'Hello',
      description: 'world!',
      due_date: new Date('2022-9-15')
    }

    const reminder = await ReminderService.createReminder(reminderInput)

    expect(reminder.title).toBe('Hello')
  })

  test('Get reminder', async () => {
    const reminderInput:CreateReminderObjectType = {
      patient_id: new mongoose.Types.ObjectId('624b12004b1127a31d8da46e'),
      supervisor_id: new mongoose.Types.ObjectId('6263a04f5de1617c2c84dbbd'),
      title: 'Hello',
      description: 'world!',
      due_date: new Date('2022-9-15')
    }

    const { _id } = await ReminderService.createReminder(reminderInput)
    if (!_id) {
      return
    }

    const reminder = await ReminderService.getReminder(_id)
    if (!reminder) {
      return
    }

    expect(reminder.title).toBe('Hello')
  })

  test('Update reminder', async () => {
    const reminderInput:CreateReminderObjectType = {
      patient_id: new mongoose.Types.ObjectId('624b12004b1127a31d8da46e'),
      supervisor_id: new mongoose.Types.ObjectId('6263a04f5de1617c2c84dbbd'),
      title: 'Hello',
      description: 'world!',
      due_date: new Date('2022-9-15')
    }
    const { _id } = await ReminderService.createReminder(reminderInput)
    if (!_id) {
      return
    }

    const reminderUpdateInput: UpdateReminderObjectType = {
      reminder_id: new mongoose.Types.ObjectId('6263ce0577164ec6745e3bd7'),
      title: 'Updated',
      description: 'world!'
    }

    const reminder = await ReminderService.updateReminder(reminderUpdateInput)
    if (!reminder) {
      return
    }

    expect(reminder.title).toBe('Updated')
  })

  test('Delete reminder', async () => {
    const reminderInput:CreateReminderObjectType = {
      patient_id: new mongoose.Types.ObjectId('624b12004b1127a31d8da46e'),
      supervisor_id: new mongoose.Types.ObjectId('6263a04f5de1617c2c84dbbd'),
      title: 'Hello',
      description: 'world!',
      due_date: new Date('2022-9-15')
    }

    const { _id } = await ReminderService.createReminder(reminderInput)
    if (!_id) {
      return
    }

    const reminder = await ReminderService.deleteReminder(_id)
    if (!reminder) {
      return
    }

    expect(reminder._id).toEqual(_id)
  })
})
