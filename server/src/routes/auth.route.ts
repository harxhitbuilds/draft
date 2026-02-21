import express from 'express';
import {
  logout,
  oauthLogin,
  refreshToken,
} from '../controllers/auth.controller.js';
import { verifyAccessToken } from '../middlewares/accessToken.middleware.js';


const router = express.Router();

// oauth login
router.post('/oauth', oauthLogin);
// refresh token
router.post('/refresh', refreshToken);
// logout user
router.post('/logout', verifyAccessToken, logout);

export default router;
