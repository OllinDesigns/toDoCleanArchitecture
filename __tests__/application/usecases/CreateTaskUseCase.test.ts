import { CreateTaskUseCase } from "../../../src/application/usecases/CreateTaskUseCase";
import { TaskRepositoryPort } from "../../../src/application/ports/TaskRepositoryPort";
import { ITask } from "../../../src/domain/ITask";

describe('CreateTaskUseCase', () => {
  it('should create a new task when valid text input is provided', async () => {

    const text = 'Valid task text';
    const createdTask: ITask = {
      _id: '1',
      date: new Date(),
      text: 'Valid task text',
      completed: false,
      important: false,
    };

    const taskRepositoryMock: TaskRepositoryPort = {
        findTasks: jest.fn(),
        createTask: jest.fn(async (text: string) => {
          const newTask = {
            _id: '1',
            date: new Date(),
            text: 'Valid task text',
            completed: false,
            important: false,
          };
          return newTask;
        }),
        updateTask: jest.fn(),
        updateTaskText: jest.fn(),
        deleteTask: jest.fn().mockResolvedValue(true),
      };

      
    
    const createTaskUseCase = new CreateTaskUseCase(taskRepositoryMock);

    const result = await createTaskUseCase.execute(text);

    expect(result).toEqual(createdTask);
    expect(taskRepositoryMock.createTask).toHaveBeenCalledWith(text);
  });
});