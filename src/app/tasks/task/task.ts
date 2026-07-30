import { Component, input } from '@angular/core'; // Imports Component and input from Angular
import type { TaskData } from '../../dummy-tasks'; // Imports the task data type

@Component({
  selector: 'app-task',       // The HTML tag used to show this component
  imports: [],                // No other components are used here
  templateUrl: './task.html', // Connects this component to its HTML file
  styleUrl: './task.css'      // Connects this component to its CSS file
})

export class Task {
  // Receives one task object from the parent component
  task = input.required<TaskData>();
}