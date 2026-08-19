// Controls one task item and removes completed tasks
import { Component, inject, input } from '@angular/core'; // Imports Component, inject, and input from Angular
import { DatePipe } from '@angular/common'; // Imports DatePipe for formatting dates
import type { TaskData } from './task.model'; // Imports the task data model
import { TasksService } from '../tasks.service'; // Imports the task service

@Component({
  selector: 'app-task',       // The HTML tag used to show this component
  imports: [DatePipe],        // Makes DatePipe available in the template
  templateUrl: './task.html', // Connects this component to its HTML file
  styleUrl: './task.css'      // Connects this component to its CSS file
})

export class Task {
  // Gets the task service from Angular
  private tasksService = inject(TasksService);

  // Receives one task object from the parent component
  task = input.required<TaskData>();

  // Removes the current task when the Complete button is clicked
  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }
}