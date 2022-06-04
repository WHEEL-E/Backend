import nodemailer from 'nodemailer'
import nodemailerSendgrid from 'nodemailer-sendgrid'

const transporter = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY as string
  })
)

export const sendMail = async (
  userMail: string,
  subject: string,
  message: string,
  Url: string
) => {
  const response = await transporter.sendMail({
    to: userMail,
    from: 'test@wheelE.com',
    subject: subject,
    html: `<h1>${message}</h1> <br/> <a href="${Url}">${Url}</a> <br/> <footer><p>Copyright © WheelE 2019</p></footer>` // TODO  Add Decent Html here
  })

  return response
}
