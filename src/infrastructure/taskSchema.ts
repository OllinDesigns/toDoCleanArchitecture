import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  completed: { type: Boolean, default: false },
  important: { type: Boolean, default: false }
});
// mongoose.model('newTask', taskSchema)
// no se si sirva
 


// propuesta codium

// import mongoose from "mongoose";
// import { Schema } from "mongoose"

// interface ITask extends Document {
//   date: Date;
//   text: string;
//   completed: boolean;
//   important: boolean;
// }

// const taskSchema: Schema = new Schema({
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

// export const TaskModel = mongoose.model<ITask>(
//   'TaskModel',
//   taskSchema,
//   'Tasks'
// );