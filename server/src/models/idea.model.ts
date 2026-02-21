import mongoose, { Schema } from 'mongoose';

import type { IIdea } from '../types/idea.js';

const ideaSchema = new Schema<IIdea>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Owner is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    coverImage : {
     type : String,
     default : "https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHwy"
    },
    technologies: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    status: {
      type: String,
      enum: ['draft', 'open', 'in-progress', 'completed', 'archived'],
      default: 'draft',
    },
    slug: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    lookingForCollaboratos: {
      type: Boolean,
      required: true,
    },
    requirements: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Idea = mongoose.model<IIdea>('Idea', ideaSchema);

export default Idea;
export type { IIdea };
