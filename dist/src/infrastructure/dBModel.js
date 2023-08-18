"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema_1 = require("./taskSchema");
exports.DbModel = mongoose_1.default.model('DbModel', taskSchema_1.taskSchema, 'Tasks');
//# sourceMappingURL=dBModel.js.map