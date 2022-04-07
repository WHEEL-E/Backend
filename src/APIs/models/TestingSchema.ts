// Just for testing the schema's creation using dummy methods
// It will be removed while merging
import Note from './Schema/Note'
import Patient from './Schema/Patient'
import Reminder from './Schema/Reminder'
import mongoose from 'mongoose'

export const createNewNote = async (userId: mongoose.Types.ObjectId, title:string, description: string) => {
  const note = new Note({
    user_id: userId,
    title: title,
    description: description
  })
  await note.save()
  console.log('Your Note is: ', note)
}

export const createNewReminder = async (patient_Id: mongoose.Types.ObjectId, supervisor_id: mongoose.Types.ObjectId, due_date:Date, title:string, description: string) => {
  const reminder = new Reminder({
    patient_id: patient_Id,
    supervisor_id: supervisor_id,
    due_date: due_date,
    title: title,
    description: description
  })
  await reminder.save()
  console.log('Your Reminder is: ', reminder)
}
// too many arguments is a bad coding convetion, just testing with it until we make formal types for this
export const createNewPatient = async (patient_name:string,
  email:string,
  password:string,
  phone:number,
  emergency_number:number,
  address:string,
  gender: string,
  weight:number,
  height:number,
  dob:Date,
  smoking:boolean
) => {
  const patient = new Patient({
    name: patient_name,
    email: email,
    password: password,
    phone: phone,
    emergency_number: emergency_number,
    address: address,
    gender: gender,
    weight: weight,
    height: height,
    dob: dob,
    smoking: smoking

  })

  const res = await patient.save()

  return res._id
}

export const TestingAll = async () => {
  // creating a patient
  try {
    const patientID = await createNewPatient('Sponge bob', 'sponge8@gmail.com', '123456789', 12255886644, 1258944, 'Sea bed st.', 'male', 15, 70, new Date('1-2-0005'), false)
    // creating a note
    await createNewNote(patientID, 'My first awesome note', 'Nah just testing it!')
    await createNewReminder(patientID, patientID, new Date(2022, 11, 17), 'My first Reminder', 'Awesome one right?!')
  } catch (error) {
    console.log(error)
  }
}
