import userController from '../controllers/userController.js';
import express from 'express';
const userRoutes = express.Router();

// Login route
userRoutes.post('/login', userController.login); 

// Registration route
userRoutes.post('/register', userController.registration);


 export default userRoutes;