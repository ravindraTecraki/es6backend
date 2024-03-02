import otpController from "../controllers/otpController.js"
import express from "express";

const otpRoutes = express.Router();

// Public Routes
otpRoutes.post('/sendOtp', otpController.sendOtp)
otpRoutes.post('/verifyOtp', otpController.verifyOtp)


export default otpRoutes;


