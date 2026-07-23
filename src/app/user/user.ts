import { Component, input } from '@angular/core'; // Imports Component and input from Angular

@Component({
  selector: 'app-user',         // The HTML tag used to show this component
  imports: [],                  // No other components are used here
  templateUrl: './user.html',   // Connects this component to its HTML file
  styleUrl: './user.css'        // Connects this component to its CSS file
})

export class User {
  // Receives the required user name from the parent component
  name = input.required<string>();

  // Receives the required avatar filename from the parent component
  avatar = input.required<string>();

  // Creates and returns the user's image path
  get imagePath() {
    return 'users/' + this.avatar();
  }
}