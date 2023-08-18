"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    date: {
        type: Date,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    completed: { type: Boolean, default: false },
    important: { type: Boolean, default: false }
});
exports.TaskModel = mongoose_1.default.model('TaskModel', taskSchema, 'Tasks');
//# sourceMappingURL=collectionSchema.js.map