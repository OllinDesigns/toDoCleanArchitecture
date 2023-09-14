"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskUseCase = void 0;
class CreateTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(text) {
        if (!text) {
            throw new Error("Item field is required");
        }
        const newTask = await this.taskRepository.createTask(text);
        return newTask;
    }
}
exports.CreateTaskUseCase = CreateTaskUseCase;
//# sourceMappingURL=CreateTaskUseCase.js.map