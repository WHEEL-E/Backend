import mongoose from 'mongoose'

export interface CreateInvitationObjectType {
  form_id: mongoose.Types.ObjectId;
  to_id: mongoose.Types.ObjectId;
  status: string;
}

export enum InvitationStatus {
  PENDING = 'Pending',
  ACCEPTED = 'Accepted',
  REJECTED = 'Rejected',
}
