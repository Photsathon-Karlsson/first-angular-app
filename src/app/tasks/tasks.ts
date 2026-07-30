import { Component, input } from '@angular/core'; // Imports Component and input from Angular
import { Task } from './task/task'; // Imports the task component

@Component({
  selector: 'app-tasks',       // The HTML tag used to show this component
  imports: [Task],             // Makes the task component available
  templateUrl: './tasks.html', // Connects this component to its HTML file
  styleUrl: './tasks.css'      // Connects this component to its CSS file
})

export class Tasks {
  // Receives the selected user name from the parent component
  name = input.required<string>();
}