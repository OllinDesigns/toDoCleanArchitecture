import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
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
