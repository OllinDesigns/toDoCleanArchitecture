import express from "express";
import { Request, Response } from "express";
import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { DeleteTaskUseCase } from '../../application/usecases/DeleteTaskUseCase'

const router = express.Router();

const deleteTaskUseCase = new DeleteTaskUseCase(new TaskRepository());

router.delete("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id: taskId } = req.params;

    const deletedTask = await deleteTaskUseCase.execute(taskId);

    if (!deletedTask) {
      res.status(404).json({ error: "Task not found" });
    } else {
      console.log(`Deleted task: ${JSON.stringify(taskId)}`);
      res.json(deletedTask);
    }
  } catch (err) {
    console.error(`Error deleting task in MongoDB: ${err}`);
    res.status(500).send("Internal Server Error");
  }
});

export default router;



// este funciona pero le falta CA
// import { Request, Response } from "express";
// import express from "express";
// import { DbModel } from "../dBModel";

// const router = express.Router();

// router.delete("/tasks/:id", async (req: Request, res: Response) => {
//   try {
//     const { id: taskId } = req.params;

//     const deletedTask = await DbModel.findByIdAndDelete(taskId);

//     if (!deletedTask) {
//       res.status(404).json({ error: "Task not found" });
//     } else {
//       console.log(`Deleted task: "${deletedTask.text}"`);
//       res.json(deletedTask);
//     }
//   } catch (err) {
//     console.error(`Error deleting task in MongoDB: ${err}`);
//     res.status(500).send("Internal Server Error");
//   }
// });

// export default router;
