// src/application/usecases/CreateTaskUseCase.ts
import { TaskRepositoryPort } from '../ports/TaskRepositoryPort';
import { ITask } from '../../domain/ITask';

export class CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepositoryPort) {}

    async execute(text: string): Promise<CreateTaskResult> {
      if (!text) {
        throw new Error("Item field is required");
      }
    
      const newTask = await this.taskRepository.createTask(text);
      return { status: "success", task: newTask }; // Ensure newTask is correct
    }
    
  
}

interface CreateTaskResult {
  status: "success";
  task: ITask;
}


// este funciona
// import { TaskRepositoryPort } from '../ports/TaskRepositoryPort';
// import { ITask } from '../../domain/ITask';

// export class CreateTaskUseCase {
//   constructor(private readonly taskRepository: TaskRepositoryPort) {}

//   async execute(text: string): Promise<ITask> {
//     if (!text) {
//       throw new Error("Item field is required");
//     }

//     const newTask = await this.taskRepository.createTask(text);
//     return newTask;
//   }
// }

