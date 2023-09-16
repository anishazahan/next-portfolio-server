import express, { Application } from "express";
import cors from "cors";
import { NextFunction, Response, Request } from "express";
const app: Application = express();

// application route

import projectRoutes from "./app/modules/projects/projects.routes";

// Configure CORS to allow requests from 'http://localhost:3000'
// const allowedOrigins = ["https://next-portfolio-server.vercel.app"];
// const allowedOrigins = ["http://localhost:3000"];
// const allowedOrigins = ["*"];
const allowedOrigins = [
  "https://anisha-portfolio.vercel.app",
  "http://localhost:3000",
];
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

app.post("/api/formdata", (req: Request, res: Response, next: NextFunction) => {
  console.log("data ................");
  const data = req.params;

  res.status(200).json({
    message: " Form Submitted Successfully",
    data: data,
  });
});

app.use("/api/project", projectRoutes);
// Set the Access-Control-Allow-Origin header for your API routes
// app.use(
//   "/api/project",
//   (req, res, next) => {
//     res.header(
//       "Access-Control-Allow-Origin",
//       "https://anisha-portfolio.vercel.app"
//     );
//     next();
//   },
//   projectRoutes
// );

export default app;
