"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./src/infrastructure/db");
const tasksRouter_1 = __importDefault(require("./src/application/routes/tasksRouter"));
const soylaRouter_1 = __importDefault(require("./src/application/routes/soylaRouter"));
const postRouter_1 = __importDefault(require("./src/application/routes/postRouter"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
(0, db_1.db)();
app.use("/tasks", tasksRouter_1.default);
app.use("/soyla", soylaRouter_1.default);
app.use("/", postRouter_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map