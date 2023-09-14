"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const dBModel_1 = require("../dBModel");
const mongoose_1 = __importDefault(require("mongoose"));
class TaskRepository {
    async findTasks() {
        console.log("Method findTasks from TaskRepository is being used");
        const tasks = await dBModel_1.DbModel.find({});
        return tasks;
    }
    async createTask(text) {
        const newTask = new dBModel_1.DbModel({
            _id: new mongoose_1.default.Types.ObjectId(),
            date: new Date(),
            text,
            completed: false,
            important: false,
        });
        console.log("Method createTask from TaskRepository has been used");
        await newTask.save();
        return newTask;
    }
    async updateTask(taskId, completed) {
        try {
            const updatedTask = await dBModel_1.DbModel.findByIdAndUpdate(taskId, { completed: completed }, { new: true });
            console.log("Method updateTask from TaskRepository has been used");
            return updatedTask;
        }
        catch (error) {
            console.error(`Error updating task in MongoDB:`, error);
            throw error;
        }
    }
    async updateTaskText(taskId, newText) {
        try {
            const updatedTask = await dBModel_1.DbModel.findByIdAndUpdate(taskId, { text: newText }, { new: true });
            console.log("method updateTaskText from TaskRepository has been used");
            return updatedTask;
        }
        catch (error) {
            console.error(`Error updating task text in MongoDB:`, error);
            throw error;
        }
    }
    async deleteTask(taskId) {
        try {
            const result = await dBModel_1.DbModel.findByIdAndDelete(taskId);
            console.log("method deleteTask from TaskRepository has been used");
            return !!result;
        }
        catch (error) {
            console.error(`Error updating task text in MongoDB:`, error);
            throw error;
        }
    }
}
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=TaskRepository.js.map