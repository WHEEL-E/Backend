import mongoose from 'mongoose'

export interface IPatientModel {
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
  supervisors?: [mongoose.Types.ObjectId];
  profile_picture?: string;
  medical_history: [string];
  isVerified: Boolean;
  notificatio_token: string;
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
  notificatio_token?: string
};
