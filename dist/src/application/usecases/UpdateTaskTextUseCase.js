"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskTextUseCase = void 0;
class UpdateTaskTextUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async execute(taskId, newText) {
        return this.taskRepository.updateTaskText(taskId, newText);
    }
}
exports.UpdateTaskTextUseCase = UpdateTaskTextUseCase;
//# sourceMappingURL=UpdateTaskTextUseCase.js.map