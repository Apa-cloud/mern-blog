import express from "express";
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);

export default router; /* Since we are using default, so we can import this using any name  */
