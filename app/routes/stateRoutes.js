import stateController from "../controllers/stateController.js";
import express from 'express';
const stateRoutes = express.Router();

// Get all states

stateRoutes.get('/', stateController.getStates);

export default stateRoutes;



