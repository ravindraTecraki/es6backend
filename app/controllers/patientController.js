import Patient from "../models/Patient.js";
import User from "../models/User.js";


export class patientController {

    static async addPatient(req, res) {

         // Create a new user instance
         const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            userType: "patient"
        });

        // create a new patient instance

        const patient = await Patient.create({

            patient_name : req.body.patient_name,
            patient_age: req.body.patient_age,
            patient_gender: req.body.patient_gender,
            patient_phone: req.body.patient_phone,
            patient_address: req.body.patient_address,
            patient_state: req.body.patient_state,
            patient_city: req.body.patient_city,
            patient_pincode: req.body.patient_pincode,
            user_id: user.id

        });
        //return the success response

        return res.status(200).json({ msg: 'Registered successfully', patient, user });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error during registration' });
        }

        // get patient with the help of id

        static async getPatientById(req, res) {
            try {
                // Import the Hospital model
                const patient = await Patient.findByPk(req.params.id);
                
                // Return the retrieved hospital as JSON response
                return res.status(200).json({ patient });
            } catch (error) {
                console.error(error);
                // Handle error response
                return res.status(500).json({ error: 'patient not found '});
            }
        }
    }
    export default patientController;

