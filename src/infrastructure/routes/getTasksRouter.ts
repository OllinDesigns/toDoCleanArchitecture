// src/infrastructure/routes/getTasksRouter.ts
import express from "express";
import { GetTasksUseCase } from "../../application/usecases/GetTasksUseCase";
import { TaskRepository } from "../../infrastructure/repositories/TaskRepository";

const router = express.Router();

const getTasksUseCase = new GetTasksUseCase(new TaskRepository());

router.get("/", async (_req, res) => {
  try {
    const tasks = await getTasksUseCase.execute();
    res.json(tasks);
  } catch (err) {
    console.error("Error retrieving data from MongoDB:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
