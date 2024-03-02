import patientController from "../controllers/patientController.js";
import express from "express";
const patientRoutes = express.Router();

// add the patient 

patientRoutes.post('/addPatient', patientController.addPatient);

// get the patient record with particular id

patientRoutes.get('/:id', patientController.getPatientById);

export default patientRoutes;
