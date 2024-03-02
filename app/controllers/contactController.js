import Contact from './../models/Contact.js';
import nodemailer from 'nodemailer';

export class contactController {


static async addContact(req, res) {
    try {
      const { name, email, subject, message } = req.body;

      // Create a new contact instance
      const contact = await Contact.create({
        name,
        email,
        subject,
        message,
      });

      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: "465",
        auth: {
      
          user: 'it@tecraki.io',
          pass: 'Newtech@2024',
        },
      });

      const mailOptions = {
        from: '',
        to: ['it@tecraki.io'],
        subject: 'Incoming mail from suvidha Forms',
        html: `<p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>`,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ status: false, error: 'Error sending email' });
        } else {
          console.log('Mail sent, check your mail on update section');
          return res.status(200).json({ status: true, msg: 'Registered successfully', contact });
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: false, error: 'Error during registration' });
    }
  }

}


export default contactController;
