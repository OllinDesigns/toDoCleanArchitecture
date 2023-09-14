// src/infrastructure/routes/postRouter.ts
import express from "express";
import { Request, Response } from "express";
import { CreateTaskUseCase } from "../../application/usecases/CreateTaskUseCase"; // Import the use case
import { TaskRepository } from "../../infrastructure/repositories/TaskRepository"; // Import the repository

const router = express.Router();
const taskRepository = new TaskRepository();
const createTaskUseCase = new CreateTaskUseCase(taskRepository);

router.post(
  "/tasks",
  express.urlencoded({ extended: false }),
  async (req: Request, res: Response) => {
    try {
      const { text } = req.body;

      const newTask = await createTaskUseCase.execute(text);

      console.log(`New task added: '${text}'`);

      res.json(newTask);
    } catch (err) {
      console.error("Error saving data to MongoDB:", err);
      res.status(500).send("Internal Server Error");
    }
  }
);

export default router;
