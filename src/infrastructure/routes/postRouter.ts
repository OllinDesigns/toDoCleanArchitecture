// src/infrastructure/routes/postRouter.ts
import express from 'express';
import { Request, Response } from 'express';
import { CreateTaskUseCase } from '../../application/usecases/CreateTaskUseCase'; // Import the use case
import { TaskRepository } from '../../infrastructure/repositories/TaskRepository'; // Import the repository

const router = express.Router();
const taskRepository = new TaskRepository();
const createTaskUseCase = new CreateTaskUseCase(taskRepository);

router.post(
  '/tasks',
  express.urlencoded({ extended: false }),
  async (req: Request, res: Response) => {
    try {
      const { text } = req.body;

      const newTask = await createTaskUseCase.execute(text);

      console.log(`New task added: '${text}'`);

      res.json(newTask);
    } catch (err) {
      console.error('Error saving data to MongoDB:', err);
      res.status(500).send('Internal Server Error');
    }
  }
);

export default router;



//este postrouter funciona tambien, el de arriba es una version mejorada
// import express from "express";
// import { Request, Response } from "express";
// import { DbModel } from "../../infrastructure/dBModel";
// import mongoose from "mongoose";
// import { ITask } from "../../domain/ITask";

// const router = express.Router();

// export async function createTask(text: string): Promise<ITask> {
//   const newTask = new DbModel({
//     _id: new mongoose.Types.ObjectId(),
//     date: new Date(),
//     text,
//     completed: false,
//     important: false,
//   });

//   await newTask.save();
//   return newTask;
// }

// router.post(
//   "/tasks",
//   express.urlencoded({ extended: false }),
//   async (req: Request, res: Response) => {
//     try {
//       if (!req.body.text) {
//         return res.status(400).send("Item field is required");
//       }

//       const newTask = await createTask(req.body.text);

//       console.log("New task added", req.body.text);

//       res.json(newTask);
//     } catch (err) {
//       console.error("Error saving data to MongoDB:", err);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

// export default router;




// ESTE ES EL VIEJO ROUTER QUE FUNCIONA
// import express from "express";
// import { Request, Response } from "express";
// import { createTask } from "../../application/services/taskService";

// const router = express.Router();

// router.post(
//   "/tasks",
//   express.urlencoded({ extended: false }),
//   async (req: Request, res: Response) => {
//     try {
//       if (!req.body.text) {
//         return res.status(400).send("Item field is required");
//       }

//       const newTask = await createTask(req.body.text);

//       console.log("New task added", req.body.text);

//       res.json(newTask);
//     } catch (err) {
//       console.error("Error saving data to MongoDB:", err);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

// export default router;
