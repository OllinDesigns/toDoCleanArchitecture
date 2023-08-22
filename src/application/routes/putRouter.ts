import express from "express";
import { Request, Response } from "express";
import { updateTask } from "../services/updatedTaskService";
import { ITask } from "../../domain/ITask";

const router = express.Router();

router.put("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id: taskId } = req.params;
    const { completed } = req.body as ITask;

    const updatedTask = await updateTask(taskId, completed);

    console.log(`Task status changed ${updatedTask}`, completed);

    if (!updatedTask) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json(updatedTask);
    }
  } catch (err) {
    console.error(`Error updating task:`, err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
