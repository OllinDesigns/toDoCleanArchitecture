//src/application/ports/TaskRepositoryPort.ts
import { ITask } from "../../domain/ITask";

export interface TaskRepositoryPort {
  findTasks(): Promise<ITask[]>;
  createTask(text: string): Promise<ITask>;
  updateTask(taskId: string, completed: boolean): Promise<ITask | null>;
  updateTaskText(taskId: string, newText: string): Promise<ITask | null>;
  deleteTask(taskId: string): Promise<boolean>;
}
