// src/application/usecases/DeleteTaskUseCase.ts
import { TaskRepositoryPort } from '../ports/TaskRepositoryPort';

export class DeleteTaskUseCase {
  constructor(private taskRepository: TaskRepositoryPort) {}

  async execute(taskId: string): Promise<boolean> {
    return this.taskRepository.deleteTask(taskId);
  }
}

// import { TaskRepositoryPort } from '../ports/TaskRepositoryPort';

// export class DeleteTaskUseCase{
//     constructor(private taskRepository: TaskRepositoryPort) {}

//     async execute(taskId: string): Promise<boolean> {
//         return this.taskRepository.deleteTask(taskId)
//     }
//     }