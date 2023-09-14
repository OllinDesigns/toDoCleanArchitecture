// src/application/usecases/UpdateTaskTextUseCase.ts

import { TaskRepositoryPort } from "../ports/TaskRepositoryPort";
import { ITask } from "../../domain/ITask";

export class UpdateTaskTextUseCase {
  constructor(private taskRepository: TaskRepositoryPort) {}

  async execute(taskId: string, newText: string): Promise<ITask | null> {
    return this.taskRepository.updateTaskText(taskId, newText);
  }
}
