import { DbModel } from "../../infrastructure/dBModel";
import { ITask } from "../../domain/ITask";

export async function updateTask(
  taskId: string,
  completed: boolean
): Promise<ITask | null> {
  try {
    const updatedTask = await DbModel.findByIdAndUpdate(
      taskId,
      { completed: completed },
      { new: true }
    );

    return updatedTask;
  } catch (error) {
    console.error(`Error updating task in MongoDB:`, error);
    throw error;
  }
}
