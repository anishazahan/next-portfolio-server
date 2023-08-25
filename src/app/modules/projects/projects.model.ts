import mongoose, { Document, Schema } from "mongoose";
import { IProjects } from "./projects.interface"; // Assuming it should be IProject, not IProjects

const projectSchema: Schema = new Schema<IProjects>({
  img: { type: String, required: true },
  detailsImg: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: [String], required: true }, // Use [String] for an array of strings
  useTechnology: { type: [String], required: true }, // Use [String] for an array of strings
  live: { type: String, required: true },
  code: { type: String, required: true },
  server: { type: String, required: true },
});

const Project = mongoose.model<IProjects>("Project", projectSchema);

export default Project;
