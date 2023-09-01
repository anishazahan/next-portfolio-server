import express, { Application } from "express";
import cors from "cors";
import { NextFunction, Response, Request } from "express";
const app: Application = express();

// application route

import projectRoutes from "./app/modules/projects/projects.routes";

// Configure CORS to allow requests from 'http://localhost:3000'
const allowedOrigins = ["https://next-portfolio-server.vercel.app/"];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hellow server");
});

app.use("/api/project", projectRoutes);

export default app;

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
