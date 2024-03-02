import State from '../models/State.js'; // Imported the State model

class stateController {
    // Function to get all states
    static async getStates(req, res) {
        try {
            const states = await State.findAll(); // Retrieving all states from the database
            res.json(states); // Sending  the states as JSON response
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'no such state' }); 
        }
    }
}

export default stateController;
