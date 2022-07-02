import { CreatePatientObjectType } from '../types/Patient.type'
import Patient from '../schema/Patient.schema'
import mongoose from 'mongoose'

// will leave it's implementation until we agree upon a certain method
/**
 *
 * @param supervisorId
 * @returns all patients data associated with a certain supervisor
 */
export const getAllPatientsBySupervisorId = async (
  supervisorId: mongoose.Types.ObjectId
) => {
  const patients = await Patient.find({
    supervisors: supervisorId
  })

  return patients
}

/**
 *
 * @param
 * @returns all patients data
 */

export const getAllPatients = async () => {
  const patients = await Patient.find()

  return patients
}

/**
 *
 * @param patientId
 * @returns patient data
 */
export const getPatient = async (patientId: mongoose.Types.ObjectId) => {
  const patient = await Patient.findById(patientId)

  return patient
}

/**
 *
 * @param email of the patient
 * @returns patient data
 */
export const getPatientByEmail = async (email: string) => {
  const patient = await Patient.findOne({ email: email })

  return patient
}

/**
 *
 * @param patientInput create new patient data
 * @returns id of the newly created patient
 */
export const createPatient = async (patientInput: CreatePatientObjectType) => {
  const response = await Patient.create({
    name: patientInput.patient_name,
    email: patientInput.email,
    password: patientInput.password,
    phone: patientInput.phone,
    emergency_number: patientInput.emergency_number,
    address: patientInput.address,
    gender: patientInput.gender,
    weight: patientInput.weight,
    height: patientInput.height,
    dob: patientInput.dob,
    smoking: patientInput.smoking,
    profile_picture: patientInput.profile_picture
  })

  return response
}

/**
 *
 * @param patientId
 * @returns the deleted patient record
 */
export const deletePatient = async (patientId: mongoose.Types.ObjectId) => {
  const patient = await Patient.findOneAndDelete({ _id: patientId })

  return patient
}

/**
 *
 * @param patientId
 * @returns the updated patient record
 */
export const updatePatient = async (
  patientId: mongoose.Types.ObjectId,
  updatePatientInput: CreatePatientObjectType
) => {
  const patient = Patient.findByIdAndUpdate(patientId, updatePatientInput, {
    returnDocument: 'after'
  })

  return patient
}

export const linkSupervisor = async (
  supervisorID: mongoose.Types.ObjectId,
  patientID: mongoose.Types.ObjectId
) => {
  const patient = await Patient.findById(
    new mongoose.Types.ObjectId(patientID)
  )
  if (patient?.associated_users) {
    patient.associated_users.push(supervisorID)
    const res = await patient.save()

    return res
  } else {
    return 'Patient not found'
  }
}

export const updateVerificationStatus = async (
  id: mongoose.Types.ObjectId,
  newValue: Boolean
) => {
  const patient = await Patient.findByIdAndUpdate(
    id,
    {
      isVerified: newValue
    },
    { new: true }
  )

  return patient
}

/**
 *
 * @param patientId
 * @param healthRecord
 * @returns the updated patient record
 */
export const uploadMedicalRecord = async (
  patientId: mongoose.Types.ObjectId,
  medicalRecord: string
) => {
  const patient = await Patient.findById(patientId)

  if (patient?.medical_history) {
    patient.medical_history.push(medicalRecord)
    const res = await patient.save()

    return res
  }
}
