// src/application/usecases/GetTasksUseCase.ts
import { TaskRepositoryPort } from '../ports/TaskRepositoryPort';
import { ITask } from '../../domain/ITask';

export class GetTasksUseCase {
  constructor(private taskRepository: TaskRepositoryPort) {}

  async execute(): Promise<ITask[]> {
    return this.taskRepository.findTasks();
  }
}


// // src/application/usecases/GetTasksUseCase.ts

// import { ITask } from '../../domain/ITask';

// export interface GetTasksUseCase {
//   execute(): Promise<ITask[]>;
// }
