import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    })
  }

  onTaskAdded(name: string) {
    this.taskService.addTask(name);
    this.tasks = this.taskService.getAllTasks();
  }

  activateTask(id: number) {
    this.taskService.activateTask(id);
    this.tasks = this.taskService.getAllTasks();  
  }

}
