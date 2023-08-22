"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskService_1 = require("../services/taskService");
const router = express_1.default.Router();
router.post("/tasks", express_1.default.urlencoded({ extended: false }), async (req, res) => {
    try {
        if (!req.body.text) {
            return res.status(400).send("Item field is required");
        }
        const newTask = await (0, taskService_1.createTask)(req.body.text);
        console.log("New task added", req.body.text);
        res.json(newTask);
    }
    catch (err) {
        console.error("Error saving data to MongoDB:", err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
//# sourceMappingURL=postRouter.js.map