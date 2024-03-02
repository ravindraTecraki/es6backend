import contactController from '../controllers/contactController.js';
import express from 'express';
const contactRoutes = express.Router();


// Registration route
contactRoutes.post('/register', contactController.addContact); 

 export default contactRoutes;
