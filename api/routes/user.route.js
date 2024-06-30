import express from "express";
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test   /* We have imported this test from contoller */
);

export default router; /* Since we are using default, so we can import this using any name  */
