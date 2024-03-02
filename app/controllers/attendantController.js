import Attendant from '../models/Attendant.js';

export class attendantController {
  
    static async addAttendant(req, res) {
        try {
            // Create a new attendant instance
            const attendant = await Attendant.create({
                name: req.body.name,
                address: req.body.address,
                occupation: req.body.occupation,
                telephone: req.body.telephone,
                relation_with_patient: req.body.relation_with_patient,
                signature: req.body.signature,
            });
    
            // Return the success response
            return res.status(200).json({ Status: true, msg: 'Registered successfully', attendant });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ Status: false, error: 'Error during registration' });
        }
    }
    
  
     // get attendant with the id

     static async getAttendantById(req, res) {
        try {
            // Import the Hospital model
            const attendant = await Attendant.findByPk(req.params.id);
            
            // Return the retrieved hospital as JSON response
            return res.status(200).json({ attendant });
        } catch (error) {
            console.error(error);
            // Handle error response
            return res.status(500).json({ error: 'attendant not found '});
        }
    }
  
}


export default attendantController;
