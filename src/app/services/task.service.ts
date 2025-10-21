import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks: Task[] = [];
  private nextId = 1;

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(name: string): void {
    const newTask: Task = {
      id: this.nextId++,
      name,
      active: false
    };
    this.tasks.push(newTask)
  }
  
  activateTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.active = true;
    }
  }

  getActiveTasks(): Task[] {
    return this.tasks.filter(task => task.active);
  }

}
