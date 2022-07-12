import mongoose from 'mongoose'

export interface IPatientModel {
  _id?: mongoose.Types.ObjectId,
  name: string;
  email: string;
  password: string;
  phone: number;
  emergency_number: number;
  address: string;
  gender: string;
  weight?: number;
  height?: number;
  dob: Date;
  smoking?: boolean;
  chair_serial_id?: string;
  associated_users?: [mongoose.Types.ObjectId];
  profile_picture?: string;
  medical_history: [string];
  isVerified: Boolean;
  notification_token: string;
}

export type CreatePatientObjectType = {
  patient_name: string;
  email: string;
  password: string;
  phone: number;
  emergency_number: number;
  address: string;
  gender: string;
  weight: number;
  height: number;
  dob: Date;
  smoking: boolean;
  profile_picture?: string;
  notification_token?: string,
};
