import express from "express";
import {
  updateProfile,
  getUserProfile,
} from "../controllers/user.controller.js";
import { verifyAccessToken } from "../middlewares/accessToken.middleware.js";
import { requireOnboarding } from "../middlewares/onboard.middleware.js";
const userRouter = express.Router();

userRouter.post("/update", verifyAccessToken, requireOnboarding, updateProfile);
userRouter.get(
  "/get-profile/:username",
  verifyAccessToken,
  requireOnboarding,
  getUserProfile
);

export default userRouter;
