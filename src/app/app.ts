import { Component, signal } from '@angular/core'; // Imports Component and signal from Angular
import { HeaderComponent } from './header/header.component'; // Imports the header component
import { User } from './user/user'; // Imports the user component
import { Tasks } from './tasks/tasks'; // Imports the tasks component
import { DUMMY_USERS } from './dummy-users'; // Imports the user data

@Component({
  selector: 'app-root',                    // The main application component
  imports: [HeaderComponent, User, Tasks], // Makes the components available
  templateUrl: './app.html',               // Connects this component to its HTML file
  styleUrl: './app.css'                    // Connects this component to its CSS file
})

export class App {
  // Makes all users available in the template
  users = DUMMY_USERS;

  // Stores the selected user ID or undefined before a user is selected
  selectedUserId = signal<string | undefined>(undefined);

  // Finds and returns the selected user
  get selectedUser() {
    return this.users.find(
      (user) => user.id === this.selectedUserId()
    );
  }

  // Receives and stores the selected user ID
  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}