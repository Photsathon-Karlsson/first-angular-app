import { Component, signal } from '@angular/core'; // Imports Component and signal from Angular
import { HeaderComponent } from './header/header.component'; // Imports the header component from the header folder
import { User } from './user/user'; // Imports the user component
import { DUMMY_USERS } from './dummy-users'; // Imports the user data

@Component({
  selector: 'app-root',                    // The main application component
  imports: [HeaderComponent, User],        // Makes the header and user components available
  templateUrl: './app.html',               // Connects this component to its HTML file
  styleUrl: './app.css'                    // Connects this component to its CSS file
})

export class App {
  // Stores the currently selected user inside a Signal
  selectedUser = signal(DUMMY_USERS[0]);

  // Selects a new random user
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    // Updates the Signal with a new user
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}