import jwt from 'jsonwebtoken';
import type { Secret, SignOptions } from 'jsonwebtoken';
import mongoose from 'mongoose';
import type { StringValue } from 'ms';

import type { IUser, IUserModel } from '../types/user.js';

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      sparse: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    provider: {
      type: String,
      enum: ['google', 'github'],
    },
    profile: {
      type: String,
      trim: true,
    },
    skills: [String],
    refreshToken: {
      type: String,
    },
    socialLinks: {
      github: { type: String, trim: true },
      linkedIn: { type: String, trim: true },
      x: { type: String, trim: true },
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.generateAccessToken = function (): string {
  const expiresIn: StringValue = (process.env.ACCESS_TOKEN_EXPIRY as StringValue) || '1d';

  const options: SignOptions = {
    expiresIn,
    algorithm: 'HS256',
  };

  return jwt.sign(
    {
      _id: this._id.toString(),
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET as Secret,
    options,
  );
};

userSchema.methods.generateRefreshToken = function (): string {
  const expiresIn: StringValue = (process.env.REFRESH_TOKEN_EXPIRY as StringValue) || '1d';

  const options: SignOptions = {
    expiresIn,
    algorithm: 'HS256',
  };

  return jwt.sign(
    {
      _id: this._id.toString(),
      email: this.email,
    },
    process.env.REFRESH_TOKEN_SECRET as Secret,
    options,
  );
};

const User = mongoose.model<IUser, IUserModel>('User', userSchema);

export default User;
