import { MailObject } from '../../types/sendingMail.types'

const generateMailTempelate = (mailData: MailObject) => {
  const { userMail, userName, mailBody, subject } = mailData

  return {
    Destination: {
      CcAddresses: ['wheel.e@outlook.com'],
      ToAddresses: userMail
    },

    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `<html><body><h3>Hello ${userName}</h3><p>${mailBody}</p> <p>Best Wishes</p> <p>StorkyApp Team</p></body></html>`
        },
        Text: {
          Charset: 'UTF-8',
          Data: mailBody
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject
      }
    },
    Source: 'wheel.e@outlook.com'
  }
}

export default generateMailTempelate
