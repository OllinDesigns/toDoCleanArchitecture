// src/infrastructure/routes/putRouter.ts
import express from 'express';
import { Request, Response } from 'express';
import { ITask } from '../../domain/ITask';
import { UpdateTaskUseCase } from '../../application/usecases/UpdateTaskUseCase';
import { TaskRepository } from '../../infrastructure/repositories/TaskRepository'; // Import the repository
import { UpdateTaskTextUseCase } from '../../application/usecases/UpdateTaskTextUseCase';

const router = express.Router();

const updateTaskUseCase = new UpdateTaskUseCase(new TaskRepository());
const updateTaskTextUseCase = new UpdateTaskTextUseCase(new TaskRepository());


router.put('/tasks/:id', async (req: Request, res: Response) => {
  try {
    const { id: taskId } = req.params;
    const { completed } = req.body as ITask;

    const updatedTask = await updateTaskUseCase.execute(taskId, completed);

    console.log(`Task status changed ${JSON.stringify(updatedTask)}`, completed);

    if (!updatedTask) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(updatedTask);
    }
  } catch (err) {
    console.error(`Error updating task:`, err);
    res.status(500).send('Internal Server Error');
  }
});

// Route for updating task text
router.put('/tasks/text/:id', async (req: Request, res: Response) => {
  try {
    const { id: taskId } = req.params;
    const { text } = req.body as ITask;

    const updatedTask = await updateTaskTextUseCase.execute(taskId, text);

    console.log(`Task status changed ${JSON.stringify(updatedTask)}`, text);

    if (!updatedTask) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(updatedTask);
    }
  } catch (err) {
    console.error(`Error updating task text:`, err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;


// router.put('/tasks/:id', async (req: Request, res: Response) => {
//   try {
//     const { id: taskId } = req.params;
//     const { completed } = req.body as ITask;

//     const updatedTask = await updateTaskUseCase.execute(taskId, completed,);

//     console.log(`Task status changed ${JSON.stringify(updatedTask)}`, completed);

//     if (!updatedTask) {
//       res.status(404).json({ error: 'Task not found' });
//     } else {
//       res.json(updatedTask);
//     }
//   } catch (err) {
//     console.error(`Error updating task:`, err);
//     res.status(500).send('Internal Server Error');
//   }

  

//   router.put('/tasks/:id', async (req: Request, res: Response) => {
//     try {
//       const { id: taskId } = req.params;
//       const { text } = req.body as ITask;
  
//       const updatedTask = await updateTaskTextUseCase.execute(taskId, text);
  
//       if (!updatedTask) {
//         res.status(404).json({ error: 'Task not found' });
//       } else {
//         res.json(updatedTask);
//       }
//     } catch (err) {
//       console.error(`Error updating task text:`, err);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
// });

// export default router;


// // funciona pero no es CA
// import express from "express";
// import { Request, Response } from "express";
// import { ITask } from "../../domain/ITask";
// import { DbModel } from "../dBModel";

// const router = express.Router();

// export async function updateTask(
//   taskId: string,
//   completed: boolean
// ): Promise<ITask | null> {
//   try {
//     const updatedTask = await DbModel.findByIdAndUpdate(
//       taskId,
//       { completed: completed },
//       { new: true }
//     );

//     return updatedTask;
//   } catch (error) {
//     console.error(`Error updating task in MongoDB:`, error);
//     throw error;
//   }
// }

// router.put("/tasks/:id", async (req: Request, res: Response) => {
//   try {
//     const { id: taskId } = req.params;
//     const { completed } = req.body as ITask;

//     const updatedTask = await updateTask(taskId, completed);

//     console.log(`Task status changed ${updatedTask}`, completed);

//     if (!updatedTask) {
//       res.status(404).json({ error: "Task not found" });
//     } else {
//       res.json(updatedTask);
//     }
//   } catch (err) {
//     console.error(`Error updating task:`, err);
//     res.status(500).send("Internal Server Error");
//   }
// });

// export default router;


