// src/infrastructure/repositories/TaskRepository.ts
import { TaskRepositoryPort } from '../../application/ports/TaskRepositoryPort';
import { ITask } from '../../domain/ITask';
import { DbModel } from '../dBModel';
import mongoose from 'mongoose';

export class TaskRepository implements TaskRepositoryPort {
  async findTasks(): Promise<ITask[]> {
    console.log('TaskRepository is being used')
    const tasks = await DbModel.find({});
    return tasks;
  }


  async createTask(text: string): Promise<ITask> {
    const newTask = new DbModel({
      _id: new mongoose.Types.ObjectId(),
      date: new Date(),
      text,
      completed: false,
      important: false,
    });

    console.log('method createTask from TaskRepository has been used')

    await newTask.save();
    return newTask;
  }

  async updateTask(taskId: string, completed: boolean): Promise<ITask | null> {
    try {
      const updatedTask = await DbModel.findByIdAndUpdate(
        taskId,
        { completed: completed },
        { new: true }
      );

      console.log('method updateTask from TaskRepository has been used')

      return updatedTask;
    } catch (error) {
      console.error(`Error updating task in MongoDB:`, error);
      throw error;
    }
  }

  async updateTaskText(taskId: string, newText: string): Promise<ITask | null> {
    try {
      const updatedTask = await DbModel.findByIdAndUpdate(
        taskId,
        { text: newText }, // Update the text field
        { new: true }
      );

      return updatedTask;
    } catch (error) {
      console.error(`Error updating task text in MongoDB:`, error);
      throw error;
    }
  }

  async deleteTask(taskId: string): Promise<boolean> {
    try {
      const result = await DbModel.findByIdAndDelete(taskId);

      console.log('method deleteTask from TaskRepository has been used')

      return !!result
    } catch (error) {
      console.error(`Error updating task text in MongoDB:`, error);
      throw error;

    }
    
  } 
}

