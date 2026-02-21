import "next-auth";
import "next-auth/jwt";

interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  provider: string;
  profile?: string;
  skills: string[];
  refreshToken: string;
  socialLinks: {
    github: string;
    linkedIn: string;
    x: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

declare module "next-auth" {
  interface User {
    accessToken?: string;
    refreshToken?: string;
    onBoarded?: boolean;
    user: IUser;
  }

  interface Session {
    accessToken?: string;
    refreshToken?: string;
    onBoarded?: boolean;
    error?: string;
    user: IUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    onBoarded?: boolean;
    accessTokenExpires?: number;
    error?: string;
    user: IUser;
  }
}
