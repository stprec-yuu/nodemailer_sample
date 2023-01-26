const mailer = require('nodemailer')

require('dotenv').config()

const MAIL_SENDER = process.env.MAIL_SENDER
const MAIL_SENDER_NAME = process.env.MAIL_SENDER_NAME
const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT
const SMTP_USERNAME = process.env.SMTP_USERNAME
const SMTP_PASSWORD = process.env.SMTP_PASSWORD

console.log(MAIL_SENDER)
console.log(MAIL_SENDER_NAME)
console.log(SMTP_HOST)
console.log(SMTP_PORT)
console.log(SMTP_USERNAME)
console.log(SMTP_PASSWORD)

const cfg = {
  host: SMTP_HOST,
  port: SMTP_PORT,
  // secure: true,
  // tls: { ciphers: 'SSLv3' },
  // auth: {
  //   user: SMTP_USERNAME,
  //   pass: SMTP_PASSWORD
  // }
}
console.log(cfg)

const transpoter = mailer.createTransport(cfg)
const data = {
  from: `"${MAIL_SENDER_NAME}" <${MAIL_SENDER}>`,
  to: 'yuu@stprec.co.jp',
  subject: '送信テスト',
  text: '送信ボディ',
}
console.log(data)

transpoter.sendMail(data, (error, info) => {
  if (error) {
    console.log(error)
  } else {
    console.log(`Response: ${info.response}`)
  }
})
