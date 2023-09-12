// src/infrastructure/routes/getTasksRouter.ts
import express from 'express';
import { GetTasksUseCase } from '../../application/usecases/GetTasksUseCase'; // Import the use case
// Correct the import path to match the actual location of TaskRepository
import { TaskRepository } from '../../infrastructure/repositories/TaskRepository'; // Adjust the import path accordingly


const router = express.Router();

// Inject the taskRepository instance when creating the use case
const getTasksUseCase = new GetTasksUseCase(new TaskRepository());

router.get('/', async (_req, res) => {
  try {
    const tasks = await getTasksUseCase.execute();
    res.json(tasks);
  } catch (err) {
    console.error("Error retrieving data from MongoDB:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;




// // este funciona bien pero no hay nada en app layer
// import express from 'express';
// import { DbModel } from '../dBModel';

// const router = express.Router();

// router.get('/', async (_req, res)=> {
//     try{
//         const data = await DbModel.find({});
//         res.json(data);
//     } catch (err) {
//         console.error("Error retrieving data from MongoDB:", err);
//         res.status(500).send("Internal Server Error");
//       }
// });

// export default router;










// este es complicado. src/application/routes/taskRouter.ts

// import express from 'express';
// import { DatabaseInterface } from "../../domain/external-interfaces/Database";
// import { ITask } from "../../domain/ITask";

// const router = express.Router();

// router.get('/', async (_req, res)=> {
//     try {
//         const database: DatabaseInterface = new MongooseDatabase(); // Instantiate the implementation
//         const tasks: ITask[] = await database.findTasks(); // Use the implementation
//         res.json(tasks);
//     } catch (err) {
//         console.error("Error retrieving data:", err);
//         res.status(500).send("Internal Server Error");
//     }
// });

// export default router;



