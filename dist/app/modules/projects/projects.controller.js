"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageController = exports.deleteProjectByID = exports.updateProjectByID = exports.getProjectByID = exports.getProjects = exports.createProject = void 0;
const projects_services_1 = require("./projects.services");
const sendMessage_model_1 = __importDefault(require("./sendMessage.model"));
const createProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const project = yield (0, projects_services_1.createProjecttoDB)(data);
    res.status(200).json({
        status: "success",
        data: project,
    });
});
exports.createProject = createProject;
const getProjects = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, projects_services_1.getProjectToDB)();
    res.status(200).json({
        status: "status success",
        data: result,
    });
});
exports.getProjects = getProjects;
const getProjectByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req);
    const { id } = req.params;
    const result = yield (0, projects_services_1.getProjectByIdFromDB)(id);
    res.status(200).json({
        status: "success",
        data: result,
    });
});
exports.getProjectByID = getProjectByID;
const updateProjectByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const project = req.body;
    const updateProject = yield (0, projects_services_1.updateProjectByIdFromDB)(id, project);
    res.status(200).json({
        status: "success update projects",
        data: updateProject,
    });
});
exports.updateProjectByID = updateProjectByID;
const deleteProjectByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const project = yield (0, projects_services_1.deleteProjectByIdFromDB)(id);
    res.status(200).json({
        status: " deleted success",
        data: project,
    });
});
exports.deleteProjectByID = deleteProjectByID;
// Define the message route
const messageController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    try {
        const savedMessage = yield sendMessage_model_1.default.create(data);
        res.status(200).json({
            sendMessage: "Message Send Successfully.",
            status: "success",
            data: savedMessage,
        });
    }
    catch (error) {
        // console.error(error);
        res.status(500).json({
            sendMessage: "Failed to send message.",
            status: "error",
        });
    }
});
exports.messageController = messageController;
