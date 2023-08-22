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




// propuesto por codium
// import { Schema } from "mongoose"

// interface ITask extends Document {
//   date: Date;
//   text: string;
//   completed: boolean;
//   important: boolean;
// }

// export const taskSchema: Schema = new Schema({
//   date: {
//     type: Date,
//     required: true
//   },
//   text: {
//     type: String,
//     required: true
//   },
//   completed: { type: Boolean, default: false },
//   important: { type: Boolean, default: false }
// });
