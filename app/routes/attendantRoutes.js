import attendantController from '../controllers/attendantController.js';
import express from 'express';
const attendantRoutes = express.Router();


// Registration route
attendantRoutes.post('/addAttendant', attendantController.addAttendant); 

attendantRoutes.get('/:id', attendantController.getAttendantById);



 export default attendantRoutes
