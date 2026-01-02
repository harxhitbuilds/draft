import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import admin from "../config/firebase.config.js";
import User from "../models/user.model.js";

export const authMiddleware = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new ApiError(401, "Authorization header missing");
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    throw new ApiError(
      401,
      "Invalid authorization header format. Expected 'Bearer <token>'"
    );
  }

  const firebaseToken = parts[1];
  if (!firebaseToken) {
    throw new ApiError(401, "Token missing in authorization header");
  }

  const decodedToken = await admin.auth().verifyIdToken(firebaseToken);

  if (!decodedToken) {
    throw new ApiError(500, "Unauthorized access attempt");
  }

  const firebaseId = decodedToken.uid;
  let user = await User.findOne({ firebaseId });

  if (!user) {
    if (!decodedToken.name) {
      throw new ApiError(400, "User name is missing from token");
    }
    if (!decodedToken.email) {
      throw new ApiError(400, "User email is missing from token");
    }
    const userData: {
      firebaseId: string;
      name: string;
      email: string;
      profile?: string;
    } = {
      firebaseId,
      name: decodedToken.name,
      email: decodedToken.email,
    };
    if (decodedToken.picture) {
      userData.profile = decodedToken.picture;
    }
    user = await User.create(userData);
  }

  req.user = user;
  next();
});
