// Controls the new task dialog
import { Component, output } from '@angular/core'; // Imports Component and output from Angular

@Component({
  selector: 'app-new-task',       // The HTML tag used to show this component
  standalone: true,               // Makes this a standalone component
  imports: [],                    // No other components are used here
  templateUrl: './new-task.html', // Connects this component to its HTML file
  styleUrl: './new-task.css'      // Connects this component to its CSS file
})

export class NewTask {
  // Sends a cancel event to the parent component
  cancel = output<void>();

  // Sends the cancel event when the dialog is closed
  onCancel() {
    this.cancel.emit();
  }
}