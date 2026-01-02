import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { getMe } from "../controllers/auth.controller.js";

const router = express.Router();
router.get("/getMe", authMiddleware, getMe);

export default router;
