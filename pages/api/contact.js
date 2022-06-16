import sendgrid from '@sendgrid/mail'

const sendgridApiKey = process.env.SENDGRID_API_KEY
const emailTo = process.env.EMAIL_TO.split(',')

sendgrid.setApiKey(sendgridApiKey)

function generateEmail(body) {
  const filteredBodyKeys = Object.keys(body).filter((key) => key !== 'subject')
  let html = 'You have a new message from your website contact form.'
  html += '<br/><br/>'
  filteredBodyKeys.forEach((key) => {
    html += `${key}: ${body[key]}<br/>`
  })
  html += '<br/><br/>'
  html +=
    'Your husband loves you and knows your business is gonna be successful!'
  return html
}

async function sendEmail(req, res) {
  try {
    const result = await sendgrid.send({
      to: emailTo, // Your email where you'll receive emails
      from: 'noreply@pawticas.com', // your website email address here
      subject: `${req.body.subject} from ${req.body.name}`,
      html: generateEmail(req.body),
    })
    if (result.statusCode !== 202) {
      return res.status(200).json({result})
    } else {
      return res.status(500).json({error: result.status})
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({error: error.message})
  }
}

export default sendEmail
