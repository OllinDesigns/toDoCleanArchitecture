"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updatedTaskService_1 = require("../services/updatedTaskService");
const router = express_1.default.Router();
router.put("/tasks/:id", async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const { completed } = req.body;
        const updatedTask = await (0, updatedTaskService_1.updateTask)(taskId, completed);
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