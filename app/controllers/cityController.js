import State from '../models/State.js';
import City from '../models/City.js';

class CityController {
    static async getCitiesByState(req, res) {
        const { state_id } = req.params; // Extract state_id from request parameters

        try {
            const state = await State.findByPk(state_id); // Find the state by ID
            if (!state) {
                return res.status(404).json({ message: 'State not found' });
            }
      
            // Find all cities associated with the state_id
            const cities = await City.findAll({ where: { state_id } }); 

            // Get city names using city IDs
            const cityNames = await Promise.all(cities.map(async city => {
                const cityName = await City.findOne({ where: { id: city.id } });
                return { id: city.id, city_name: cityName.city_name, state_name: state.state_name };
            }));

            res.json(cityNames); // Send the cities as JSON response      
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' }); // Handle errors
        }
    }

    static async getCityById(req, res) {
       
        const city_id = req.params.id.trim(); 
    
        console.log("Requested city ID:", city_id);
    
        try {
            const city = await City.findByPk(city_id); 
            console.log("Retrieved city:", city); // Log the retrieved city
            if (!city) {
                return res.status(404).json({ message: 'City not found' });
            }
    
            const cityDetails = {
                id: city.id,
                city_name: city.city_name,
            };
    
            res.json(cityDetails); // Send the city details as JSON response      
        } catch (error) {
            console.error("Error fetching city:", error);
            res.status(500).json({ error: 'Internal Server Error' }); // Handle errors
        }
    }
    
}


export default CityController;
