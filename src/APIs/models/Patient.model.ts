import { CreatePatientObjectType } from '../types/Patient.type'
import Patient from '../schema/Patient.schema'

/**
 *
 * @param patientInput create new patient data
 * @returns id of the newly created patient
 */
export const createPatient = async (patientInput: CreatePatientObjectType) => {
  const patient = await Patient.create({
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
    smoking: patientInput.smoking
  })
  const response = patient.save()

  return response
}
