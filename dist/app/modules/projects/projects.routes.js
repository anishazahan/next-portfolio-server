"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projects_controller_1 = require("./projects.controller");
const router = express_1.default.Router();
router.post("/create-project", projects_controller_1.createProject);
router.get("/", projects_controller_1.getProjects);
router.get("/:id", projects_controller_1.getProjectByID);
router.patch("/update/:id", projects_controller_1.updateProjectByID);
router.delete("/delete/:id", projects_controller_1.deleteProjectByID);
exports.default = router;
