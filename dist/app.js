"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./src/infrastructure/db");
const getTasksRouter_1 = __importDefault(require("./src/infrastructure/routes/getTasksRouter"));
const postRouter_1 = __importDefault(require("./src/infrastructure/routes/postRouter"));
const putRouter_1 = __importDefault(require("./src/infrastructure/routes/putRouter"));
const deleteRouter_1 = __importDefault(require("./src/infrastructure/routes/deleteRouter"));
const cors_1 = __importDefault(require("cors"));
const createApp = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, cors_1.default)());
    (0, db_1.db)();
    app.use("/tasks", getTasksRouter_1.default);
    app.use("/posts", postRouter_1.default);
    app.use(putRouter_1.default);
    app.use(deleteRouter_1.default);
    return app;
};
exports.default = createApp;
//# sourceMappingURL=app.js.map