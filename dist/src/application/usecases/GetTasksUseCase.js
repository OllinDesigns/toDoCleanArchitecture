"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTasksUseCase = void 0;
class GetTasksUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute() {
        return this.taskRepository.findTasks();
    }
}
exports.GetTasksUseCase = GetTasksUseCase;
//# sourceMappingURL=GetTasksUseCase.js.map