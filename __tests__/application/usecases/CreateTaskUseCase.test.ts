import { TaskRepositoryPort } from "../../../src/application/ports/TaskRepositoryPort";
import { CreateTaskUseCase } from "../../../src/application/usecases/CreateTaskUseCase";
import { ITask } from "../../../src/domain/ITask";

describe('CreateTaskUseCase', () => {
  it('should create a task with valid input', async () => {
    // Arrange
    const text = "Valid task";
    const newTask: ITask = { _id: "1", date: new Date(), text: text, completed: false, important: false };
    const taskRepositoryMock: TaskRepositoryPort = {
      findTasks: jest.fn(),
      createTask: jest.fn().mockResolvedValue(newTask),
      updateTask: jest.fn(),
      updateTaskText: jest.fn(),
      deleteTask: jest.fn(),
    };
    const createTaskUseCase = new CreateTaskUseCase(taskRepositoryMock);

    // Act
    const result = await createTaskUseCase.execute(text);

    // Assert
    // expect(result.status).toBe("success");
    // expect(result.task).toEqual(newTask);
    expect(taskRepositoryMock.createTask).toHaveBeenCalledWith(text);
  });
});





// import { TaskRepositoryPort } from "../../../src/application/ports/TaskRepositoryPort";
// import { CreateTaskUseCase } from "../../../src/application/usecases/CreateTaskUseCase"

// describe('should create a task with valid input', () => {

//     it('should create a task with valid input', async () =>{
//         const text = 'Valid task';
//         const createdTask = { _id: '1', date: new Date(), text, completed: false, important: false };
//         const taskRepositoryMock: TaskRepositoryPort = {
//             findTasks: jest.fn(),
//             createTask: jest.fn().mockResolvedValue(createdTask),
//             updateTask: jest.fn(),
//             updateTaskText: jest.fn(),
//             deleteTask: jest.fn(),
//           };
          
//         const createTaskUseCase = new CreateTaskUseCase(taskRepositoryMock);

//         const result = await createTaskUseCase.execute(text);

//         expect(result).toEqual(createdTask);
//         expect(taskRepositoryMock.createTask).toHaveBeenNthCalledWith(1, text);
//     })

//     // it('should throw an error when input is empty', async () =>{
//     //     const text = '';
//     //     const taskRepositoryMock: TaskRepositoryPort = {
//     //         findTasks: jest.fn(),
//     //         createTask: jest.fn(),
//     //         updateTask: jest.fn(),
//     //         updateTaskText: jest.fn(),
//     //         deleteTask: jest.fn(),
//     //     };

//     //     const createTaskUseCase = new CreateTaskUseCase(taskRepositoryMock);

//     //     // Use an async function with expect to catch the error
//     //     await expect(createTaskUseCase.execute(text)).rejects.toThrowError("Item field is required");

//     //     // Ensure createTask was not called when input is empty
//     //     expect(taskRepositoryMock.createTask).not.toHaveBeenCalled();
//     // });
// })