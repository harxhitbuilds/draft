import jwt from 'jsonwebtoken';
import type mongoose from 'mongoose';

import User from '../models/user.model.js';

import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import ApiResponse from '../utils/apiResponse.js';

import type { IAuthenticatedRequest } from '../types/request.js';


const generateAccessAndRefreshToken = async (
  userId: mongoose.Types.ObjectId,
) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(400, 'User not found');
    }
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, 'Something went wrong');
  }
};

const generateUniqueUsernameFromEmail = async(email : string)=>{
  const local = email.split("@")[0]?.toLocaleLowerCase().replace(/[^a-z0-9._-]/g, '');
  let candidate = local || "user";
  let i = 0;
  while(true){
    const exists = await User.findOne({username : candidate});
    if(!exists){
      return candidate;
    }
    i = i +1;
    candidate = `${local}${i}`;
  }
}

export const oauthLogin = asyncHandler(async (req, res) => {
  const { email, name, profile, provider } = req.body;
  if (!email || !name || !profile || !provider) {
    throw new ApiError(400, 'Missing informantion');
  }

  let user = await User.findOne({ email });
  if (!user) {
    const username = await generateUniqueUsernameFromEmail(email);
    user = await User.create({
      email,
      name,
      profile,
      provider,
      username 
    });
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id,
  );

  await user.save();

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { accessToken, refreshToken, user },
        'Login Successfull',
      ),
    );
});

export const refreshToken = asyncHandler(async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new ApiError(400, 'Refresh token not found');
  }

  const decodedToken = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET as string) as {
    _id: string;
  };

  const user = await User.findById(decodedToken._id);
  if (!user) {
    throw new ApiError(400, 'User not found');
  }
  if (token !== user.refreshToken) {
    throw new ApiError(401, 'Refresh token is expired or used');
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id,
  );

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { accessToken, refreshToken },
        'Token refreshed successfully',
      ),
    );
});

export const logout = asyncHandler(async (req: IAuthenticatedRequest, res) => {
  await User.findByIdAndUpdate(
    req.user?.userId,
    {
      $set: {
        refreshToken: '',
      },
    },
    { new: true },
  );

  return res
    .status(200)
    .json(new ApiResponse(200, {}, 'User logged out successfully'));
});
