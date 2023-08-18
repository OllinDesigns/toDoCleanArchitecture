"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dBModel_1 = require("../../infrastructure/dBModel");
const mongoose_1 = __importDefault(require("mongoose"));
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
const router = express_1.default.Router();
router.post("/", urlencodedParser, async (req, res) => {
    try {
        if (!req.body.text) {
            return res.status(400).send("Item field is required");
        }
        const newTask = new dBModel_1.DbModel({
            _id: new mongoose_1.default.Types.ObjectId(),
            date: new Date(),
            text: req.body.text,
            completed: false,
            important: false,
        });
        await newTask.save();
        console.log("New task added", req.body.text);
        const data = await dBModel_1.DbModel.find({});
        res.json(data);
    }
    catch (err) {
        console.error("Error saving data to MongoDB:", err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
//# sourceMappingURL=postRouter.js.map