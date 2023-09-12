"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskUseCase = void 0;
class UpdateTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(taskId, completed) {
        return this.taskRepository.updateTask(taskId, completed);
    }
}
exports.UpdateTaskUseCase = UpdateTaskUseCase;
//# sourceMappingURL=UpdateTaskUseCase.js.map