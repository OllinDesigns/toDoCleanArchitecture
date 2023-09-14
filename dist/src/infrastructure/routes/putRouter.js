"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UpdateTaskUseCase_1 = require("../../application/usecases/UpdateTaskUseCase");
const TaskRepository_1 = require("../../infrastructure/repositories/TaskRepository");
const UpdateTaskTextUseCase_1 = require("../../application/usecases/UpdateTaskTextUseCase");
const router = express_1.default.Router();
const updateTaskUseCase = new UpdateTaskUseCase_1.UpdateTaskUseCase(new TaskRepository_1.TaskRepository());
const updateTaskTextUseCase = new UpdateTaskTextUseCase_1.UpdateTaskTextUseCase(new TaskRepository_1.TaskRepository());
router.put("/tasks/:id", async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const { completed } = req.body;
        const updatedTask = await updateTaskUseCase.execute(taskId, completed);
        console.log(`Task status changed ${JSON.stringify(updatedTask)}`, completed);
        if (!updatedTask) {
            res.status(404).json({ error: "Task not found" });
        }
        else {
            res.json(updatedTask);
        }
    }
    catch (err) {
        console.error(`Error updating task:`, err);
        res.status(500).send("Internal Server Error");
    }
});
router.put("/tasks/text/:id", async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const { text } = req.body;
        const updatedTask = await updateTaskTextUseCase.execute(taskId, text);
        console.log(`Task status changed ${JSON.stringify(updatedTask)}`, text);
        if (!updatedTask) {
            res.status(404).json({ error: "Task not found" });
        }
        else {
            res.json(updatedTask);
        }
    }
    catch (err) {
        console.error(`Error updating task text:`, err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
//# sourceMappingURL=putRouter.js.map