import { Component, input } from '@angular/core'; // Imports Component and input from Angular

@Component({
  selector: 'app-active-user',          // The HTML tag used to show this component
  imports: [],                          // No other components are used here
  templateUrl: './active-user.html',    // Connects this component to its HTML file
  styleUrl: './active-user.css'         // Connects this component to its CSS file
})

export class ActiveUser {
  // Receives the required user name from the parent component
  name = input.required<string>();
}