import VerificationTokenModel from '../schema/VerificationToken.schema'
import mongoose from 'mongoose'

export const createVerificationToken = async (
  id: mongoose.Types.ObjectId,
  token: string
) => {
  const response = await VerificationTokenModel.create({
    user_id: id,
    token: token
  })

  return response
}

export const findToken = async (id: mongoose.Types.ObjectId, token: string) => {
  const fetchedToken = await VerificationTokenModel.findOne({
    user_id: id,
    token: token
  })

  return fetchedToken
}

export const removeToken = async (id: mongoose.Types.ObjectId) => {
  return await VerificationTokenModel.findByIdAndRemove(id)
}
