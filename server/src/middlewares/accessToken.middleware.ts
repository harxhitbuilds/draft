import jwt from 'jsonwebtoken';


import User from '../models/user.model.js';
import type { IAuthenticatedRequest } from '../types/request.js';
import ApiError from '../utils/apiError.js';
import asyncHandler from '../utils/asyncHandler.js';

export const verifyAccessToken = asyncHandler(
  async (req: IAuthenticatedRequest, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        throw new ApiError(400, 'Unauthorized access');
      }
      console.log(process.env.ACCESS_TOKEN_SECRET)
      const decodedToken = (await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string)) as {
        _id: string;
      };
      const user = await User.findById(decodedToken?._id).select(
        '-refreshToken',
      );

      if (!user) {
        throw new ApiError(400, 'User not found');
      }
      req.user = {
        userId: user._id.toString(),
      };
      next();
    } catch (error) {
      console.log(error);
      throw new ApiError(401, 'Invalid access token.');
    }
  },
);
