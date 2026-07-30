import { Component } from '@angular/core'; // Imports Component from Angular

@Component({
  selector: 'app-task',       // The HTML tag used to show this component
  imports: [],                // No other components are used here
  templateUrl: './task.html', // Connects this component to its HTML file
  styleUrl: './task.css'      // Connects this component to its CSS file
})

export class Task {
}