import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

import Idea from "../models/idea.model.js";

import type { IAuthenticatedRequest } from "../types/request.js";

import User from "../models/user.model.js";

export const updateProfile = asyncHandler(
  async (req: IAuthenticatedRequest, res) => {
    const { github, x, linkedIn } = req.body;
    if (!github && !x && !linkedIn) {
      throw new ApiError(400, "Not provided any information");
    }

    const userId = req.user?.userId;
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(400, "User not found");
    }

    if (github) {
      user.socialLinks.github = github;
    }
    if (linkedIn) {
      user.socialLinks.linkedIn = linkedIn;
    }
    if (x) {
      user.socialLinks.x = x;
    }

    await user.save({ validateBeforeSave: false });

    return res
      .status(200)
      .json(new ApiResponse(200, { user }, "User updated successfully"));
  }
);

export const getUserProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;
  if (!username) {
    throw new ApiError(400, "Username not found");
  }

  const user = await User.findOne({ username });
  if (!user) {
    throw new ApiError(400, "User not found");
  }

  const userIdeas = await Idea.find({ owner: user._id });

  return res
    .status(200)
    .json(new ApiResponse(200, { user, userIdeas }, "Fetched !"));
});
