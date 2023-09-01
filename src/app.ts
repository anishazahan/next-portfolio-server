import express, { Application } from "express";
import cors from "cors";
import { NextFunction, Response, Request } from "express";
const app: Application = express();

// application route

import projectRoutes from "./app/modules/projects/projects.routes";
import Message from "./app/modules/projects/sendMessage.model";

//  using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hellow server");
});

// Define the message route
app.post(
  "/send-message",
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    // console.log(data);
    try {
      const savedMessage = await Message.create(data);
      res.status(200).json({
        sendMessage: "Message Send Successfully.",
        status: "success",
        data: savedMessage,
      });
    } catch (error) {
      // console.error(error);
      res.status(500).json({
        sendMessage: "Failed to send message.",
        status: "error",
      });
    }
  }
);

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
