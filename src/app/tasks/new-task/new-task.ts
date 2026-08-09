// For controlling the new task form and sending submitted task data
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

  // Sends the entered task data to the parent component
  add = output<{
    title: string;
    summary: string;
    date: string;
  }>();

  // Sends the cancel event when the dialog is closed
  onCancel() {
    this.cancel.emit();
  }

  // Sends the entered task data when the form is submitted
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    });
  }
}