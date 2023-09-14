// src/application/usecases/updateTaskUseCase.ts

import { TaskRepositoryPort } from "../ports/TaskRepositoryPort";
import { ITask } from "../../domain/ITask";

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRepositoryPort) {}

  async execute(taskId: string, completed: boolean): Promise<ITask | null> {
    return this.taskRepository.updateTask(taskId, completed);
  }
}
