import mongoose from 'mongoose';

interface ITechnology {
  name: string;
}

interface IIdea {
  title: string;
  description: string;
  coverImage : string;
  owner: mongoose.Types.ObjectId;
  technologies: ITechnology[];
  status: 'draft' | 'open' | 'in-progress' | 'completed' | 'archived';
  slug?: string;
  lookingForCollaboratos: boolean;
  requirements: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type { ITechnology, IIdea };
