import mongoose from "mongoose";
import { ITask } from "../domain/ITask";
import { taskSchema } from "./taskSchema";

export const DbModel = mongoose.model<ITask>("DbModel", taskSchema, "Tasks");
