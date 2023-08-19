"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const dBModel_1 = require("../../infrastructure/dBModel");
const mongoose_1 = __importDefault(require("mongoose"));
async function createTask(text) {
    const newTask = new dBModel_1.DbModel({
        _id: new mongoose_1.default.Types.ObjectId(),
        date: new Date(),
        text,
        completed: false,
        important: false,
    });
    await newTask.save();
    return newTask;
}
exports.createTask = createTask;
//# sourceMappingURL=taskService.js.map