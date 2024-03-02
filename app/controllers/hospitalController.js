import User from "../models/User.js";
import Hospital from "../models/Hospital.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export const validateHospital = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

export class hospitalController {
    static async addHospital(req, res) {
        try {
            if (!req.body.email) {
                return res.status(400).json({ Status: false, error: "Email is required" });
            }

            const existingUser = await User.findOne({ where: { email: req.body.email } });
            if (existingUser) {
                return res.status(400).json({ error: "Email is already registered" });
            }

            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const hashedConfirmation = await bcrypt.hash(req.body.password_confirmation, 10);

            let imagePath = null;
            let imageType = null;
            if (req.file && req.file.buffer && req.file.mimetype) {
                imagePath = req.file.buffer;
                imageType = req.file.mimetype;

                // Check if image size exceeds 200kb
                const imageSizeKB = req.file.size / 1024;
                if (imageSizeKB > 200) {
                    return res.status(400).json({ error: "Image size exceeds 200kb" });
                }
            }

            // Creating a new user instance 
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                userType: "hospital"
            });

            // Creating a new hospital instance
            const hospital = await Hospital.create({
                name: req.body.name,
                address: req.body.address,
                logo: imagePath,
                logoContentType: imageType,
                city_id: req.body.city_id,
                state_id: req.body.state_id,
                pincode: req.body.pincode,
                website: req.body.website,
                phone_primary: req.body.phone_primary,
                phone_secondary: req.body.phone_secondary || null,
                email: req.body.email,
                password: hashedPassword,
                password_confirmation: hashedConfirmation,
                user_id: user.id
            });

            const transporter = nodemailer.createTransport({
                host: "smtp.hostinger.com",
                port: "465",
                auth: {
                    user: process.env.GRIEVANCE_EMAIL,
                    pass: process.env.GRIEVANCE_EMAIL_PASSWORD,
          
                },
              });
        
              const mailOptions = {
                from: "it@tecraki.io",
                to: [req.body.email],
        
        
                subject: "Registration Successful",
                html: `
                <h1>Welcome To Suvidha Forms Portal </h1>
            <p>Dear ${req.body.name},</p>
            <p>Thank you for registration with our portal</p>
                  <img src="https://img.freepik.com/free-psd/interior-modern-emergency-room-with-empty-nurses-station-generative-ai_587448-2137.jpg" alt="Hospital Image">
            <p>For any further queries or assistance, feel free to connect at www.tecraki.io</p>
            <p>Best regards</p>
                  `,
              };
        
              transporter.sendMail(mailOptions, (error) => {
                if (error) {
                  console.error(error);
                  return res
                    .status(500)
                    .json({ status: false, error: "Error sending email" });
                } else {
                  console.log("Mail sent, check your mail on update section");
                  return res
                    .status(200)
                    .json({ status: true, msg: "Registered successfully", hospital });
                }
              });

            return res.status(200).json({ msg: 'Registered successfully', hospital, user });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error during registration' });
        }
    }

    static async getHospital(req, res) {
        try {
            const hospitals = await Hospital.findAll();
            return res.status(200).json({ hospitals });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getHospitalById(req, res) {
        const { id } = req.params;
        try {
            const hospital = await Hospital.findByPk(id);

            if(!hospital){
                return res.status(404).json({error: 'hospital not found'});
            }
            // retrieve all the hospitals
           return res.status(200).json({ hospital });
           } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
           }
    }
}

export default hospitalController;

