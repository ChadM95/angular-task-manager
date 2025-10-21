import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskName = '';
  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.taskName.trim()) {
      this.taskAdded.emit(this.taskName.trim());
      this.taskName = '';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
