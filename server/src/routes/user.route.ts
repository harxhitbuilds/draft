import express from 'express';

import {
  getMe,
  getUserProfile,
  updateProfile,
} from '../controllers/user.controller.js';
import { verifyAccessToken } from '../middlewares/accessToken.middleware.js';

const userRouter = express.Router();

userRouter.post('/update', verifyAccessToken, updateProfile);
userRouter.get(
  '/get-profile/:username',
  getUserProfile,
);
userRouter.get("/getMe",verifyAccessToken,getMe)

export default userRouter;
