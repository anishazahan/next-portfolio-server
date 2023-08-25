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
exports.deleteProjectByIdFromDB = exports.updateProjectByIdFromDB = exports.getProjectByIdFromDB = exports.getProjectToDB = exports.createProjecttoDB = void 0;
const projects_model_1 = __importDefault(require("./projects.model"));
const createProjecttoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield new projects_model_1.default(payload);
    yield project.save();
    return project;
});
exports.createProjecttoDB = createProjecttoDB;
const getProjectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.default.find();
    return result;
});
exports.getProjectToDB = getProjectToDB;
const getProjectByIdFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.default.findOne({ _id: payload });
    //  console.log(result);
    return result;
});
exports.getProjectByIdFromDB = getProjectByIdFromDB;
const updateProjectByIdFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.default.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.updateProjectByIdFromDB = updateProjectByIdFromDB;
const deleteProjectByIdFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_model_1.default.findByIdAndDelete({ _id: payload });
    return result;
});
exports.deleteProjectByIdFromDB = deleteProjectByIdFromDB;
