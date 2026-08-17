// Controls the task list and uses the task service
import { Component, inject, input } from '@angular/core'; // Imports Component, inject, and input from Angular
import { Task } from './task/task'; // Imports the task component
import { NewTask } from './new-task/new-task'; // Imports the new task component
import { TasksService } from './tasks.service'; // Imports the task service

@Component({
  selector: 'app-tasks',             // The HTML tag used to show this component
  imports: [Task, NewTask],          // Makes the task and new task components available
  templateUrl: './tasks.html',       // Connects this component to its HTML file
  styleUrl: './tasks.css'            // Connects this component to its CSS file
})

export class Tasks {
  // Gets the task service from Angular
  private tasksService = inject(TasksService);

  // Controls whether the new task dialog is visible
  isAddingTask = false;

  // Receives the selected user ID from the parent component
  userId = input.required<string>();

  // Receives the selected user name from the parent component
  name = input.required<string>();

  // Gets the tasks of the selected user from the service
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(
      this.userId()
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

  // Adds a new task through the task service
  onAddTask(taskData: {
    title: string;
    summary: string;
    date: string;
  }) {
    this.tasksService.addTask(
      taskData,
      this.userId()
    );

    this.isAddingTask = false;
  }

  // Removes the completed task through the task service
  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }
}