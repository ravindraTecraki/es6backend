import doctorController from '../controllers/doctorController.js';
import express from 'express';
const doctorRoutes = express.Router();


// getting all doctors
doctorRoutes.get('/', doctorController.getDoctors); 

// getting the doctor based on the hospital id
doctorRoutes.get('/doctors/hospitals/:id', doctorController.getDoctorsByHospitalId);



export default doctorRoutes;
