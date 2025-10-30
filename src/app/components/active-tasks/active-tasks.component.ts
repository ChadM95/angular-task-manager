import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.css']
})
export class ActiveTasksComponent implements OnInit {

  activeTasks: Task[] = [];

  constructor(private taskService: TaskService) { }


  deactivateTask(id: number): void {
    this.taskService.deactivateTask(id);
  }


  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => {
      this.activeTasks = tasks.filter(task => task.active);
    })
  }

}
