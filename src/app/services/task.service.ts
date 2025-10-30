import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private tasks: Task[] = [];
  private nextId = 1;
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();


  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(name: string): void {
    const newTask: Task = {
      id: this.nextId++,
      name,
      active: false
    };
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);
  }
  
  activateTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.active = true;
      console.log(task.id + " - active : " + task.active);
      this.tasksSubject.next(this.tasks);
    }
  }

  getActiveTasks(): Task[] {
    return this.tasks.filter(task => task.active);
  }

  deactivateTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.active = false;
      console.log("task : \'" + task.name + "\' deactivated");
      this.tasksSubject.next(this.tasks);
    }
  }

}
