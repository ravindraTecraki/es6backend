import CityController from "../controllers/cityController.js";
import express from 'express';

const router = express.Router();

// get api for getting all the cities based in the state id


router.get('/getcitiesByState/:state_id', CityController.getCitiesByState);


// getting cities with the help of its id

router.get('/getCity/:id', CityController.getCityById);


export default router;
