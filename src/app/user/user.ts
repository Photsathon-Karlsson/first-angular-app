import { Component, input, output } from '@angular/core'; // Imports Component, input, and output from Angular

@Component({
  selector: 'app-user',         // The HTML tag used to show this component
  imports: [],                  // No other components are used here
  templateUrl: './user.html',   // Connects this component to its HTML file
  styleUrl: './user.css'        // Connects this component to its CSS file
})

export class User {
  // Receives the required user ID from the parent component
  id = input.required<string>();

  // Receives the required user name from the parent component
  name = input.required<string>();

  // Receives the required avatar filename from the parent component
  avatar = input.required<string>();

  // Creates a custom event that sends the user ID to the parent component
  select = output<string>();

  // Sends the selected user's ID to the parent component
  onSelectUser() {
    this.select.emit(this.id());
  }

  // Creates and returns the user's image path
  get imagePath() {
    return 'users/' + this.avatar();
  }
}