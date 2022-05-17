/* eslint-disable no-undef */
import * as PatientService from '../../src/APIs/services/Patient.services'
import * as dbHandler from '../utilities/dbHandler'
import { CreatePatientObjectType } from '../../src/APIs/types/Patient.type'
import { createPatient } from '../utilities/seed'

describe('Testing Patient Service', () => {
  beforeAll(async () => await dbHandler.connect())
  beforeEach(async () => {
    await createPatient()
  })

  afterEach(async () => await dbHandler.clearDatabase())
  afterAll(async () => await dbHandler.closeDatabase())

  test('Get all patients', async () => {
    const patients = await PatientService.getAllPatients()

    expect(patients.length).toBe(2)
  })

  test('Create patient', async () => {
    const patientInput : CreatePatientObjectType = {
      email: 'masha11@gmail.com',
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
    const patient = await PatientService.createPatient(patientInput)
    expect(patient.email).toBe('masha11@gmail.com')
  })

  test('Get patient', async () => {
    const patientInput : CreatePatientObjectType = {
      email: 'masha111@gmail.com',
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

    const { _id } = await PatientService.createPatient(patientInput)
    if (!_id) {
      return
    }

    const patient = await PatientService.getPatient(_id)
    if (!patient) {
      return
    }
    expect(patient.email).toBe('masha111@gmail.com')
  })

  test('Update patient', async () => {
    const patientInput : CreatePatientObjectType = {
      email: 'masha111@gmail.com',
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

    const { _id } = await PatientService.createPatient(patientInput)
    if (!_id) {
      return
    }

    const patientUpdate : CreatePatientObjectType = {
      email: 'mashaUpdated@gmail.com',
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

    const patient = await PatientService.updatePatient(_id, patientUpdate)
    if (!patient) {
      return
    }

    expect(patient.email).toBe('mashaUpdated@gmail.com')
  })

  test('Delete patient', async () => {
    const patientInput : CreatePatientObjectType = {
      email: 'masha111@gmail.com',
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

    const { _id } = await PatientService.createPatient(patientInput)
    if (!_id) {
      return
    }

    const patient = await PatientService.deletePatient(_id)
    if (!patient) {
      return
    }

    expect(patient._id).toEqual(_id)
  })
})
