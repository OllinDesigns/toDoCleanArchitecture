// // import { taskSchema } from '../../src/infrastructure/taskSchema';
// import { DbModel } from '../../src/infrastructure/dBModel'

// // const Task = mongoose.model("Task", taskSchema);

// jest.mock('../../src/infrastructure/dBModel', () => {
//     return {
//         __esModule: true,
//     default: {
//       create: jest.fn(),
//     },
// };
// });

// describe('taskSchema', () => {

//     it('should create a task' , () => {
//         const taskData = {
//             date: new Date(),
//             text: 'test for the test',
//             completed: false,
//             important: false

//         };

//         // const task = new Task(taskData);

//         const createSpy = jest.spyOn(DbModel, 'create');
//     createSpy.mockResolvedValue(taskData);

//     // Test the behavior of your code that uses DbModel.create
//     // ... Your code here ...

//     // You can assert that the spy was called with the expected arguments
//     expect(createSpy).toHaveBeenCalledWith(taskData);

//     // You can also await the result of your code if it's asynchronous
//     // const result = await yourAsyncCodeHere();
//     // ... Assert the result ...

//     // Restore the original implementation of the create function
//     createSpy.mockRestore();

//     })
// })