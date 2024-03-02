import Hospital from "../models/Hospital.js"; // Import the Hospital model
import Doctor from "../models/Doctor.js"; // Import the Doctor model

export class DoctorController {

    // Function to get all doctors
    static async getDoctors(req, res) {
        try {
            const doctors = await Doctor.findAll();
            return res.json(doctors);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    // Function to get doctors associated with a specific hospital ID
    static async getDoctorsByHospitalId(req, res) {
        const { id } = req.params; 

        try {
            // Find the hospital by ID
            const hospital = await Hospital.findByPk(id);

            if (!hospital) {
                return res.status(404).json({ error: 'Hospital not found' });
            }

            // Retrieve all doctors associated with the hospital
            const doctors = await hospital.getDoctors();

            // Return the list of doctors
            return res.json(doctors);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default DoctorController;
