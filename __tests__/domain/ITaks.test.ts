import { ITask } from '../../src/domain/ITask'

describe('ITask', () => {

    // Tests that a task can be created with all required fields
    it('should create a task with all required fields', () => {
      const task: ITask = {
        _id: '1',
        date: new Date(),
        text: 'The best task',
        completed: false,
        important: false
      };
      expect(task._id).toBe('1');
      expect(task.date).toBeInstanceOf(Date);
      expect(task.text).toBe('The best task');
      expect(task.completed).toBe(false);
      expect(task.important).toBe(false);
    });

});
