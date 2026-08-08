// Controls the new task dialog and stores form input values
import { Component, output } from '@angular/core'; // Imports Component and output from Angular
import { FormsModule } from '@angular/forms'; // Imports FormsModule to use ngModel

@Component({
  selector: 'app-new-task',       // The HTML tag used to show this component
  standalone: true,               // Makes this a standalone component
  imports: [FormsModule],         // Allows this component to use ngModel
  templateUrl: './new-task.html', // Connects this component to its HTML file
  styleUrl: './new-task.css'      // Connects this component to its CSS file
})

export class NewTask {
  // Stores the entered task title
  enteredTitle = '';

  // Stores the entered task summary
  enteredSummary = '';

  // Stores the entered task due date
  enteredDate = '';

  // Sends a cancel event to the parent component
  cancel = output<void>();

  // Sends the cancel event when the dialog is closed
  onCancel() {
    this.cancel.emit();
  }
}