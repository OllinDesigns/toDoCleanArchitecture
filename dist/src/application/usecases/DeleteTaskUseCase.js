"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaskUseCase = void 0;
class DeleteTaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(taskId) {
        return this.taskRepository.deleteTask(taskId);
    }
}
exports.DeleteTaskUseCase = DeleteTaskUseCase;
//# sourceMappingURL=DeleteTaskUseCase.js.map