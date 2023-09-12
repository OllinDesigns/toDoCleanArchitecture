"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dBModel_1 = require("../../infrastructure/dBModel");
const router = express_1.default.Router();
router.delete("/tasks/:id", async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const deletedTask = await dBModel_1.DbModel.findByIdAndDelete(taskId);
        if (!deletedTask) {
            res.status(404).json({ error: "Task not found" });
        }
        else {
            console.log(`Deleted task: "${deletedTask.text}"`);
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