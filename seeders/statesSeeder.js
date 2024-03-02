import knex from "knex";
import {Seeder} from knex
import sequelize from "../config/sequelize";
import State from "../app/models/State"

const seeder = new Seeder(knex(sequelize));

class StatesTableSeeder extends Seeder {
    // Run the database seeds
    async run() {
        // Define the states data
        const statesData = [
            { state_name: 'Andhra Pradesh' },
            { state_name: 'Arunachal Pradesh' },
            { state_name: 'Andaman and Nicobar Islands' },
            { state_name: 'Assam' },
            { state_name: 'Bihar' },
            { state_name: 'Chandigarh' },
            { state_name: 'Chhattisgarh' },
            { state_name: 'Dadra and Nagar Haveli' },
            { state_name: 'Daman and Diu' },
            { state_name: 'Delhi' },
            { state_name: 'Goa' },
            { state_name: 'Gujarat' },
            { state_name: 'Haryana' },
            { state_name: 'Himachal Pradesh' },
            { state_name: 'Jammu and Kashmir' },
            { state_name: 'Jharkhand' },
            { state_name: 'Karnataka' },
            { state_name: 'Kerala' },
            { state_name: 'Madhya Pradesh' },
            { state_name: 'Maharashtra' },
            { state_name: 'Manipur' },
            { state_name: 'Meghalaya' },
            { state_name: 'Mizoram' },
            { state_name: 'Nagaland' },
            { state_name: 'Odisha' },
            { state_name: 'Puducherry' },
            { state_name: 'Punjab' },
            { state_name: 'Rajasthan' },
            { state_name: 'Sikkim' },
            { state_name: 'Tamil Nadu' },
            { state_name: 'Telangana' },
            { state_name: 'Tripura' },
            { state_name: 'Uttar Pradesh' },
            { state_name: 'Uttarakhand' },
            { state_name: 'West Bengal' },
        ];

        // Use Knex to insert the data into the states table
        await knex('states').insert(statesData);
    
    runSeeders().then(() => {
        console.log('Seeders executed successfully');
        process.exit(0); 
    }).catch(error => {
        console.error('Error executing seeders:', error);
        process.exit(1); 
    });
}
}

// Export the StatesTableSeeder class
export default StatesTableSeeder;