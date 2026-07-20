import { Component } from '@angular/core'; // Imports the Component feature from Angular
import { DUMMY_USERS } from '../dummy-users'; // Imports the user data

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); // Creates a random user index

@Component({
  selector: 'app-user',        // The HTML tag used to show this component
  imports: [],                 // No other components are used here
  templateUrl: './user.html',  // Connects this component to its HTML file
  styleUrl: './user.css'       // Connects this component to its CSS file
})

export class User {
  // Selects one random user from DUMMY_USERS
  selectedUser = DUMMY_USERS[randomIndex]; 

  // Creates and returns the image path
  get imagePath() {
    return 'users/' + this.selectedUser.avatar;
  }

  // Runs when the user button is clicked
  onSelectUser() {
    console.log('Clicked!');
  }
}