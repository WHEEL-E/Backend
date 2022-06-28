import ResetPasswordToken from '../schema/ResetPasswordToken.schema'
import mongoose from 'mongoose'

export const createResetPasswordToken = async (
  userId: mongoose.Types.ObjectId,
  token: string
) => {
  const response = await ResetPasswordToken.create({
    user_id: userId,
    token: token,
    expiration_date: Date.now() + 3600000 // expires in an hour
  })

  return response
}

export const findToken = async (token: string) => {
  const fetchedToken = await ResetPasswordToken.findOne({
    token: token,
    expiration_date: { $gt: Date.now() }
  })

  return fetchedToken
}

export const findTokenByUserID = async (userId: mongoose.Types.ObjectId) => {
  const fetchedToken = await ResetPasswordToken.findOne({
    user_id: userId
  })

  return fetchedToken
}
