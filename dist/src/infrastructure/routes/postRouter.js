"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateTaskUseCase_1 = require("../../application/usecases/CreateTaskUseCase");
const TaskRepository_1 = require("../../infrastructure/repositories/TaskRepository");
const router = express_1.default.Router();
const taskRepository = new TaskRepository_1.TaskRepository();
const createTaskUseCase = new CreateTaskUseCase_1.CreateTaskUseCase(taskRepository);
router.post("/tasks", express_1.default.urlencoded({ extended: false }), async (req, res) => {
    try {
        const { text } = req.body;
        const newTask = await createTaskUseCase.execute(text);
        console.log(`New task added: '${text}'`);
        res.json(newTask);
    }
    catch (err) {
        console.error("Error saving data to MongoDB:", err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
//# sourceMappingURL=postRouter.js.map