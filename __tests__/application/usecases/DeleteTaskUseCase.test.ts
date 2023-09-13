import { DeleteTaskUseCase } from "../../../src/application/usecases/DeleteTaskUseCase";
import { TaskRepositoryPort } from "../../../src/application/ports/TaskRepositoryPort";

describe('DeleteTaskUseCase', () => {
    it('should delete a task when given a valid taskId', async () => {
        // Arrange
        const taskId = 'validTaskId';
        const taskRepositoryMock: TaskRepositoryPort = {
            findTasks: jest.fn(),
            createTask: jest.fn(async (text: string) => {
              // Simulate the creation of a new task
              const newTask = {
                _id: '1',
                date: new Date(),
                text,
                completed: false,
                important: false,
              };
              return newTask;
            }),
            updateTask: jest.fn(),
            updateTaskText: jest.fn(),
            deleteTask: jest.fn().mockResolvedValue(true),
          };
        const deleteTaskUseCase = new DeleteTaskUseCase(taskRepositoryMock);
  
        // Act
        const result = await deleteTaskUseCase.execute(taskId);
  
        // Assert
        expect(result).toBe(true);
        expect(taskRepositoryMock.deleteTask).toHaveBeenCalledWith(taskId);
      });
});
