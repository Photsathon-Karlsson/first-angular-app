// Controls one user button
import { Component, input, output } from '@angular/core'; // Imports Component, input, and output from Angular

// Defines the structure of a user object
type UserData = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',         // The HTML tag used to show this component
  imports: [],                  // No other components are used here
  templateUrl: './user.html',   // Connects this component to its HTML file
  styleUrl: './user.css'        // Connects this component to its CSS file
})

export class User {
  // Receives the required user object from the parent component
  user = input.required<UserData>();

  // Receives whether this user is currently selected
  selected = input.required<boolean>();

  // Creates a custom event that sends the user ID to the parent component
  select = output<string>();

  // Sends the selected user's ID to the parent component
  onSelectUser() {
    this.select.emit(this.user().id);
  }

  // Creates and returns the user's image path
  get imagePath() {
    return 'users/' + this.user().avatar;
  }
}