import express from "express";
import { Express } from "express";
import { db } from "./src/infrastructure/db";
import taskRouter from "./src/application/routes/tasksRouter";
import postRouter from "./src/application/routes/postRouter";
import putRouter from "./src/application/routes/putRouter";
import cors from "cors";

const createApp = (): Express => {
  const app: Express = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(cors());

  db();

  app.use("/tasks", taskRouter);
  app.use("/posts", postRouter);
  app.use(putRouter);

  return app;
};

export default createApp;
