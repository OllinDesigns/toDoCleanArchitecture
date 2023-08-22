"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.taskSchema = new mongoose_1.default.Schema({
    date: {
        type: Date,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    completed: { type: Boolean, default: false },
    important: { type: Boolean, default: false },
});
//# sourceMappingURL=taskSchema.js.map