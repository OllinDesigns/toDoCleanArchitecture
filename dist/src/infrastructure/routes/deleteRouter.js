"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskRepository_1 = require("../../infrastructure/repositories/TaskRepository");
const DeleteTaskUseCase_1 = require("../../application/usecases/DeleteTaskUseCase");
const router = express_1.default.Router();
const deleteTaskUseCase = new DeleteTaskUseCase_1.DeleteTaskUseCase(new TaskRepository_1.TaskRepository());
router.delete("/tasks/:id", async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const deletedTask = await deleteTaskUseCase.execute(taskId);
        if (!deletedTask) {
            res.status(404).json({ error: "Task not found" });
        }
        else {
            console.log(`Deleted task: ${JSON.stringify(taskId)}`);
            res.json(deletedTask);
        }
    }
    catch (err) {
        console.error(`Error deleting task in MongoDB: ${err}`);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
//# sourceMappingURL=deleteRouter.js.map