import AWS from './HelperFunctions/AWSConnection'
import { MailObject } from '../types/sendingMail.types'
import { SES } from 'aws-sdk'
import generateMailTempelate from './HelperFunctions/generateMailTempelate'

const SESInstance = new AWS.SES({ apiVersion: '2010-12-01' })

export const sendMail = (mailDataObject: MailObject) => {
  const generatedMailTemp: SES.Types.SendEmailRequest =
    generateMailTempelate(mailDataObject)
  const sendPromise = SESInstance.sendEmail(generatedMailTemp).promise()

  sendPromise
    .then((data) => {
      return {
        mailID: data.MessageId,
        message: 'Email has been sent successfully'
      }
    })
    .catch((err) => {
      console.log(err?.message)
      throw new Error(err?.message)
    })
}
