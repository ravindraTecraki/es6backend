import formController from "../controllers/formController.js";
import express from "express";

const formRoutes = express.Router();

// saving the form

formRoutes.post("/saveForm", formController.addForm);

// getting the form with the specific id 

formRoutes.get('/forms/:id', formController.getForm);

export default formRoutes;