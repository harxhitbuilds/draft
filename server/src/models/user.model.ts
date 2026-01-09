import mongoose, { Document, Schema } from "mongoose";

interface ISkill {
  name: string;
}

interface IUser {
  firebaseId: string;
  name: string;
  username: string;
  email: string;
  provider: string;
  profile?: string;
  skills: ISkill[];
  banner: string;
  onboard: boolean;
}

interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    firebaseId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    provider: {
      type: String,
      enum: ["google", "github"],
    },
    profile: {
      type: String,
      trim: true,
    },
    skills: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    banner: {
      type: String,
      default: "",
    },
    onboard: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUserDocument>("User", userSchema);

export default User;
export type { IUser, IUserDocument };
