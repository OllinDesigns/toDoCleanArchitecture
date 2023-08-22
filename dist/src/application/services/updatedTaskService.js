"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const dBModel_1 = require("../../infrastructure/dBModel");
async function updateTask(taskId, completed) {
    try {
        const updatedTask = await dBModel_1.DbModel.findByIdAndUpdate(taskId, { completed: completed }, { new: true });
        return updatedTask;
    }
    catch (error) {
        console.error(`Error updating task in MongoDB:`, error);
        throw error;
    }
}
exports.updateTask = updateTask;
//# sourceMappingURL=updatedTaskService.js.map