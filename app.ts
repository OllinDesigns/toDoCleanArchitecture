import express from "express";
import { Express } from "express";
import { db } from "./src/infrastructure/db";
import taskRouter from "./src/infrastructure/routes/getTasksRouter";
import postRouter from "./src/infrastructure/routes/postRouter";
import putRouter from "./src/infrastructure/routes/putRouter";
import deleteRouter from "./src/infrastructure/routes/deleteRouter"
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
  app.use(deleteRouter);

  return app;
};

export default createApp;
