import express from 'express';

import {
  
  fetchIdea,
  fetchIdeas,
  searchIdeas,
  updateIdea,
  uploadIdea,
} from '../controllers/idea.controller.js';
import { verifyAccessToken } from '../middlewares/accessToken.middleware.js';
import upload from '../middlewares/multer.middleware.js';

const router = express.Router();

router.get('/', fetchIdeas);
router.get('/search', searchIdeas);

router
  .route('/:slug')
  .get(fetchIdea)
  .patch(verifyAccessToken, updateIdea)

router.post('/upload', verifyAccessToken, upload.single("coverImage"),uploadIdea);

export default router;
