// Controls the task list and the new task dialog
import { Component, input } from '@angular/core'; // Imports Component and input from Angular
import { Task } from './task/task'; // Imports the task component
import { NewTask } from './new-task/new-task'; // Imports the new task component
import { DUMMY_TASKS } from '../dummy-tasks'; // Imports the task data

@Component({
  selector: 'app-tasks',             // The HTML tag used to show this component
  imports: [Task, NewTask],          // Makes the task and new task components available
  templateUrl: './tasks.html',       // Connects this component to its HTML file
  styleUrl: './tasks.css'            // Connects this component to its CSS file
})

export class Tasks {
  // Stores the task data that can be changed
  private tasks = DUMMY_TASKS;

  // Controls whether the new task dialog is visible
  isAddingTask = false;

  // Receives the selected user ID from the parent component
  userId = input.required<string>();

  // Receives the selected user name from the parent component
  name = input.required<string>();

  // Finds and returns the tasks of the selected user
  get selectedUserTasks() {
    return this.tasks.filter(
      (task) => task.userId === this.userId()
    );
  }

  // Opens the new task dialog
  onStartAddTask() {
    this.isAddingTask = true;
  }

  // Closes the new task dialog
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  // Removes the completed task from the task list
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(
      (task) => task.id !== id
    );
  }
}