import nodemailer from 'nodemailer';

const SMTP_USERNAME = process.env.SMTP_USERNAME;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

export default async function handler(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'email-smtp.ap-southeast-2.amazonaws.com',
      port: '465',
      secure: true,
      auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
      },
    });

    const text = `
      Name: ${req.body.name}
      Email: ${req.body.email}
      Contact Number: ${req.body.contact_number}
      Storage Period: ${req.body.storage_period}
      Estimated Space: ${req.body.estimated_space}
    `;

    let info = await transporter.sendMail({
      from: 'form@brixtonhive.com.au',
      to: 'hello@brixtonhive.com.au',
      subject: 'New Quote Submisison - brixtonhive.com.au',
      text,
    });

    res.status(200).end();
  } catch (err) {
    const { message } = err;
    res.status(500).json({ message });
  }
}
