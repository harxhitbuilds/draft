import mongoose from "mongoose";

interface IRequest {
  userId: mongoose.Types.ObjectId;
  role: string;
  status: "pending" | "accepted" | "rejected";
}

const requestSchema = new mongoose.Schema<IRequest>({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  role: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
});

const Request = mongoose.model<IRequest>("Request", requestSchema);

export default Request;
export type { IRequest };
