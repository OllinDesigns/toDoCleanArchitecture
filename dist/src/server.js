"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const port = process.env.PORT || 3000;
const app = (0, index_1.default)();
const server = app.listen(port, () => {
    console.log(`Gurrus is using express and sleeping in port ${port}`);
});
exports.default = server;
//# sourceMappingURL=server.js.map