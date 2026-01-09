import mongoose, { Schema } from "mongoose";

interface ITechnology {
  name: string;
}

interface IRequirement {
  role: string;
}

interface ITeamMember {
  userId: mongoose.Types.ObjectId;
  role: string;
  joinedAt: Date;
}

interface IRequestSubdocument {
  userId: mongoose.Types.ObjectId;
  role: string;
  status: "pending" | "accepted" | "rejected";
}

interface IIdea {
  title: string;
  description: string;
  owner: mongoose.Types.ObjectId;
  technologies: ITechnology[];
  requirements: IRequirement[];
  teamMembers: ITeamMember[];
  status: "draft" | "open" | "in-progress" | "completed" | "archived";
  requests: IRequestSubdocument[];
  slug?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ideaSchema = new Schema<IIdea>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Owner is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
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
    requirements: [
      {
        role: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    teamMembers: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        role: {
          type: String,
          required: true,
          trim: true,
        },
        joinedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    status: {
      type: String,
      enum: ["draft", "open", "in-progress", "completed", "archived"],
      default: "draft",
    },
    requests: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        message: {
          type: String,
          trim: true,
        },
        status: {
          type: String,
          enum: ["pending", "accepted", "rejected"],
          default: "pending",
        },
      },
    ],
    slug: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Idea = mongoose.model<IIdea>("Idea", ideaSchema);

export default Idea;
export type { IIdea, ITeamMember };
