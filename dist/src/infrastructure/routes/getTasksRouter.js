"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GetTasksUseCase_1 = require("../../application/usecases/GetTasksUseCase");
const TaskRepository_1 = require("../../infrastructure/repositories/TaskRepository");
const router = express_1.default.Router();
const getTasksUseCase = new GetTasksUseCase_1.GetTasksUseCase(new TaskRepository_1.TaskRepository());
router.get("/", async (_req, res) => {
    try {
        const tasks = await getTasksUseCase.execute();
        res.json(tasks);
    }
    catch (err) {
        console.error("Error retrieving data from MongoDB:", err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
//# sourceMappingURL=getTasksRouter.js.map