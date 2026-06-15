import mongoose from "mongoose";

export interface ISubmission extends mongoose.Document {
  type: "contact" | "enrollment";
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  program?: string;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const submissionSchema = new mongoose.Schema<ISubmission>(
  {
    type: {
      type: String,
      enum: ["contact", "enrollment"],
      required: true,
    },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    subject: { type: String },
    program: { type: String },
    message: { type: String },
  },
  { timestamps: true },
);

export const Submission =
  mongoose.models["Submission"] ||
  mongoose.model<ISubmission>("Submission", submissionSchema);
