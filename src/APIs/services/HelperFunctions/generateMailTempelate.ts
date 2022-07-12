import { MailObject } from '../../types/sendingMail.types'

const generateMailTempelate = (mailData: MailObject) => {
  const { userMail, userName, mailBody, subject, url } = mailData

  return {
    Destination: {
      CcAddresses: ['wheel.e@outlook.com'],
      ToAddresses: userMail
    },

    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `<html><body><h3>Hello ${userName}</h3><div><p>${mailBody}</p> <a href=${url}>Open Link</a> </p></div> <p>Best Wishes</p> <p>Wheel.E Team</p></body></html>`
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
