import { Component, signal } from '@angular/core'; // Imports Component and signal from Angular
import { DUMMY_USERS } from '../dummy-users'; // Imports the user data

@Component({
  selector: 'app-user',        // The HTML tag used to show this component
  imports: [],                  // No other components are used here
  templateUrl: './user.html',   // Connects this component to its HTML file
  styleUrl: './user.css'        // Connects this component to its CSS file
})

export class User {
  // Stores the selected user inside a Signal
  selectedUser = signal(DUMMY_USERS[0]);

  // Creates and returns the selected user's image path
  get imagePath() {
    return 'users/' + this.selectedUser().avatar;
  }

  // Selects a new random user when the button is clicked
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    // Updates the Signal with a new user
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}