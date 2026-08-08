// Controls the new task dialog and stores form input values with signals
import { Component, output, signal } from '@angular/core'; // Imports Component, output, and signal from Angular
import { FormsModule } from '@angular/forms'; // Imports FormsModule to use ngModel

@Component({
  selector: 'app-new-task',       // The HTML tag used to show this component
  standalone: true,               // Makes this a standalone component
  imports: [FormsModule],         // Allows this component to use ngModel
  templateUrl: './new-task.html', // Connects this component to its HTML file
  styleUrl: './new-task.css'      // Connects this component to its CSS file
})

export class NewTask {
  // Stores the entered task title as a signal
  enteredTitle = signal('');

  // Stores the entered task summary as a signal
  enteredSummary = signal('');

  // Stores the entered task due date as a signal
  enteredDate = signal('');

  // Sends a cancel event to the parent component
  cancel = output<void>();

  // Sends the cancel event when the dialog is closed
  onCancel() {
    this.cancel.emit();
  }
}