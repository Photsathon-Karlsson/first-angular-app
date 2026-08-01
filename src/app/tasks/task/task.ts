// Controls one task item and sends the completed task ID
import { Component, input, output } from '@angular/core'; // Imports Component, input, and output from Angular
import type { TaskData } from './task.model'; // Imports the task data model

@Component({
  selector: 'app-task',       // The HTML tag used to show this component
  imports: [],                // No other components are used here
  templateUrl: './task.html', // Connects this component to its HTML file
  styleUrl: './task.css'      // Connects this component to its CSS file
})

export class Task {
  // Receives one task object from the parent component
  task = input.required<TaskData>();

  // Sends the completed task ID to the parent component
  complete = output<string>();

  // Sends the current task ID when the Complete button is clicked
  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}