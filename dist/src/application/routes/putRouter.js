"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = void 0;
const express_1 = __importDefault(require("express"));
const dBModel_1 = require("../../infrastructure/dBModel");
const router = express_1.default.Router();
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
router.put("/tasks/:id", async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const { completed } = req.body;
        const updatedTask = await updateTask(taskId, completed);
        console.log(`Task status changed ${updatedTask}`, completed);
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
exports.default = router;
//# sourceMappingURL=putRouter.js.map