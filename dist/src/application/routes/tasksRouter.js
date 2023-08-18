"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dBModel_1 = require("../../infrastructure/dBModel");
const router = express_1.default.Router();
router.get('/', async (_req, res) => {
    try {
        const data = await dBModel_1.DbModel.find({});
        res.json(data);
    }
    catch (err) {
        console.error("Error retrieving data from MongoDB:", err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
//# sourceMappingURL=tasksRouter.js.map