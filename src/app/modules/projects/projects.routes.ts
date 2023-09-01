import express from "express";
import {
  createProject,
  deleteProjectByID,
  getProjectByID,
  getProjects,
  messageController,
  updateProjectByID,
} from "./projects.controller";

const router = express.Router();

router.post("/create-project", createProject);

router.get("/", getProjects);
router.get("/:id", getProjectByID);
router.patch("/update/:id", updateProjectByID);
router.delete("/delete/:id", deleteProjectByID);
router.post("/send-message", messageController);

export default router;
