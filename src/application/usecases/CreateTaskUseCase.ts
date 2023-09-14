import { TaskRepositoryPort } from '../ports/TaskRepositoryPort';
import { ITask } from '../../domain/ITask';

export class CreateTaskUseCase {
  constructor(private taskRepository: TaskRepositoryPort) {}

  async execute(text: string): Promise<ITask> {
    if (!text) {
      throw new Error("Item field is required");
    }

    const newTask = await this.taskRepository.createTask(text);
    return newTask;
  }
}
