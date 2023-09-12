import { TaskRepositoryPort } from "../../../src/application/ports/TaskRepositoryPort";

describe("should successfully retrieve tasks when findTasks is called", () => {
  it("should use the method findTasks", async () => {
    const taskRepository: TaskRepositoryPort = {
      findTasks: jest.fn().mockResolvedValue([
        {
          _id: "1",
          date: new Date(),
          text: "Task 1",
          completed: false,
          important: false,
        },
      ]),
      createTask: jest.fn(),
      updateTask: jest.fn(),
      updateTaskText: jest.fn(),
      deleteTask: jest.fn(),
    };

    const result = await taskRepository.findTasks();

    expect(result).toEqual([
      {
        _id: "1",
        date: expect.any(Date),
        text: "Task 1",
        completed: false,
        important: false,
      },
    ]);
  });

  it("should return an empty array when no tasks are found", () => {
    const taskRepository: TaskRepositoryPort = {
      findTasks: jest.fn().mockResolvedValue([]),
      createTask: jest.fn(),
      updateTask: jest.fn(),
      updateTaskText: jest.fn(),
      deleteTask: jest.fn(),
    };

    const result = taskRepository.findTasks();

    expect(result).resolves.toEqual([]);
  });

  it("should successfully create a task when createTask is called with valid text", () => {
    const taskRepository: TaskRepositoryPort = {
      findTasks: jest.fn(),
      createTask: jest.fn().mockResolvedValue({
        _id: "1",
        date: new Date(),
        text: "happy Gurrus",
        completed: false,
        important: false,
      }),
      updateTask: jest.fn(),
      updateTaskText: jest.fn(),
      deleteTask: jest.fn(),
    };

    const text = "happy Gurrus";

    const result = taskRepository.createTask(text);

    expect(result).resolves.toEqual({
      _id: "1",
      date: expect.any(Date),
      text: "happy Gurrus",
      completed: false,
      important: false,
    });
  });

  it("should throw an error when updateTask is called with an invalid task ID", () => {
    const taskRepository: TaskRepositoryPort = {
      findTasks: jest.fn(),
      createTask: jest.fn(),
      updateTask: jest.fn().mockRejectedValue(new Error("Invalid task ID")),
      updateTaskText: jest.fn(),
      deleteTask: jest.fn(),
    };
    const taskId = "invalid";
    const completed = true;

    const result = taskRepository.updateTask(taskId, completed);

    expect(result).rejects.toThrowError("Invalid task ID");
  });

  it("should successfully update a task when updateTask is called", () => {
    const taskRepository: TaskRepositoryPort = {
      findTasks: jest.fn(),
      createTask: jest.fn(),
      updateTask: jest.fn().mockResolvedValue({
        _id: "1",
        date: new Date(),
        text: "happy Gurrus",
        completed: true,
        important: false,
      }),
      updateTaskText: jest.fn(),
      deleteTask: jest.fn(),
    };

    const completed = true;

    const result = taskRepository.updateTask("1", true);

    expect(result).resolves.toEqual({
      _id: "1",
      date: new Date(),
      text: "happy Gurrus",
      completed: true,
      important: false,
    });
  });
});
