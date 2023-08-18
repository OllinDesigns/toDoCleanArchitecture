import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { DbModel } from "../../infrastructure/dBModel";
import mongoose from "mongoose";

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();

router.post("/", urlencodedParser, async (req: Request, res: Response) => {
  try {
    if (!req.body.text) {
      return res.status(400).send("Item field is required");
    }

    const newTask = new DbModel({
      _id: new mongoose.Types.ObjectId(),
      date: new Date(),
      text: req.body.text,
      completed: false,
      important: false,
    });

    await newTask.save();
    console.log("New task added", req.body.text);

    const data = await DbModel.find({});
    res.json(data);
  } catch (err) {
    console.error("Error saving data to MongoDB:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
