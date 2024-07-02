import express from "express";
import { signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);


export default router; /* Since we are using default, so we can import this using any name  */
