import hospitalController from "../controllers/hospitalController.js"
import express from 'express';
import multer from 'multer';

// const upload = multer();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const hospitalRoutes = express.Router();
// Add hospital
hospitalRoutes.post('/addHospital',upload.single('logo') ,hospitalController.addHospital);

// Get all hospitals
hospitalRoutes.get('/', hospitalController.getHospital);

// get the hospital with the particular id

hospitalRoutes.get('/:id', hospitalController.getHospitalById);

export default hospitalRoutes;