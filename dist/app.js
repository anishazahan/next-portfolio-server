"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// application route
const projects_routes_1 = __importDefault(require("./app/modules/projects/projects.routes"));
//  using cors
app.use((0, cors_1.default)());
// parse data
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res, next) => {
    res.send("hellow server");
});
app.use("/api/project", projects_routes_1.default);
exports.default = app;
/*
    step1:interface
    step1:Schema
    step1:model
    step1:database query  on model
    */
/*


   // creating an interface
     //  creating schema using interface
      // creating model
      // creating instance using model

  => breakdown

  step1: interface  ->interface.ts
  step2: schema,model -> model.ts
  step3: routes function -> controller.ts
  step4: database query function -> service.ts

  */
// route -> controller -> service
