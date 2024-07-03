import express from "express";
import { deleteUser, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);  /* We have imported this test from contoller */
router.put('/update/:userId', verifyToken,updateUser);   // For UPDATING User // /update/{userID copied from database}
router.delete('/delete/:userId', verifyToken, deleteUser);

export default router; /* Since we are using default, so we can import this using any name  */
