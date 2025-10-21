import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { AddTaskComponent } from './components/all-tasks/add-task/add-task.component';
import { ActiveTasksComponent } from './components/active-tasks/active-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTasksComponent,
    AddTaskComponent,
    ActiveTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
