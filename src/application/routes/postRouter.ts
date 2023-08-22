import express from "express";
import { Request, Response } from "express";
import { createTask } from "../services/taskService";

const router = express.Router();

router.post(
  "/tasks",
  express.urlencoded({ extended: false }),
  async (req: Request, res: Response) => {
    try {
      if (!req.body.text) {
        return res.status(400).send("Item field is required");
      }

      const newTask = await createTask(req.body.text);

      console.log("New task added", req.body.text);

      res.json(newTask);
    } catch (err) {
      console.error("Error saving data to MongoDB:", err);
      res.status(500).send("Internal Server Error");
    }
  }
);

export default router;
