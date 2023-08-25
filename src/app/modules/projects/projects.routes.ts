import express from "express";
import {
  createProject,
  deleteProjectByID,
  getProjectByID,
  getProjects,
  updateProjectByID,
} from "./projects.controller";

const router = express.Router();

router.post("/create-project", createProject);

router.get("/", getProjects);
router.get("/:id", getProjectByID);
router.patch("/update/:id", updateProjectByID);
router.delete("/delete/:id", deleteProjectByID);

export default router;
