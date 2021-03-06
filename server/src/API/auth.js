import express from 'express';
const router = express.Router();

import { asyncHandler } from '../Middleware/asyncErrorHandler.js';
import { requireAuth } from '../Middleware/auth.js';
import { updateEmail, updateUsername, Login, SignUp } from '../Services/auth/authentication.js';

//sign in or sign up user then send jwt token
router.post('/signup', asyncHandler(SignUp));
router.post('/login', asyncHandler(Login));

//update username
router.put('/put/username', requireAuth, asyncHandler(updateUsername));

//update email
router.put('/put/email', requireAuth, asyncHandler(updateEmail));

/*
JWT is sessionless, so logout only needs to be implemented
client side. 
*/

export default router;
