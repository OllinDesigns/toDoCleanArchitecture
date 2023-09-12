// import { DbModel } from "../../infrastructure/dBModel";
// import mongoose from "mongoose";
// import { ITask } from "../../domain/ITask";

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