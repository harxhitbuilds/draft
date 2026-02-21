import { IUser } from "./next-auth";

interface ITechnology {
  name: string;
}

interface IIdea {
  title: string;
  description: string;
  coverImage: string;
  owner: IUser;
  technologies: ITechnology[];
  status: "draft" | "open" | "in-progress" | "completed" | "archived";
  slug?: string;
  lookingForCollaboratos: boolean;
  requirements: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface ISocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export type { IIdea, ITechnology, IUser,ISocialLinks };
