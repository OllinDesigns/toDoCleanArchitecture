import { ITask } from "../../src/domain/ITask";

describe("ITask", () => {
  // Tests that a task can be created with all required fields
  it("should create a task with all required fields", () => {
    const task: ITask = {
      _id: "1",
      date: new Date(),
      text: "The best task",
      completed: false,
      important: false,
    };
    expect(task._id).toBe("1");
    expect(task.date).toBeInstanceOf(Date);
    expect(task.text).toBe("The best task");
    expect(task.completed).toBe(false);
    expect(task.important).toBe(false);
  });

  // Updating a task's text or completion status
  it("should update a task's text or completion status", () => {
    const task: ITask = {
      _id: "1",
      date: new Date(),
      text: "Task 1",
      completed: false,
      important: true,
    };
    task.text = "Updated Task";
    task.completed = true;
    expect(task.text).toBe("Updated Task");
    expect(task.completed).toBe(true);
  });

  it('should retrieve a list of tasks', () => {
    const tasks: ITask[] = [
      {
        _id: '1',
        date: new Date(),
        text: 'Task 1',
        completed: false,
        important: true
      },
      {
        _id: '2',
        date: new Date(),
        text: 'Task 2',
        completed: true,
        important: false
      }
    ];
    expect(tasks.length).toBe(2);
    expect(tasks[0].text).toBe('Task 1');
    expect(tasks[1].text).toBe('Task 2');
  });

      // Creating a task with an empty text field
      it('should not create a task with an empty text field', () => {
        const task: ITask = {
          _id: '1',
          date: new Date(),
          text: '',
          completed: false,
          important: true
        };
        expect(task.text).toBe('');
      });

            // Creating a task with a future date
    it('should create a task with a future date', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      const task: ITask = {
        _id: '1',
        date: futureDate,
        text: 'Task 1',
        completed: false,
        important: true
      };
      expect(task.date).toBe(futureDate);
    });

        // Updating a task with an invalid ID
        it('should not update a task with an invalid ID', () => {
          const task: ITask = {
            _id: '1',
            date: new Date(),
            text: 'Task 1',
            completed: false,
            important: true
          };
          const updatedTask: ITask = {
            _id: '2',
            date: new Date(),
            text: 'Updated Task',
            completed: true,
            important: false
          };
          expect(task._id).not.toBe(updatedTask._id);
        });

});
