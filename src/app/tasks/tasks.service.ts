// For managing and saving task data
import { Injectable } from '@angular/core'; // Imports Injectable from Angular
import { DUMMY_TASKS } from '../dummy-tasks'; // Imports the default task data

@Injectable({
  providedIn: 'root' // Makes this service available across the application
})

export class TasksService {
  // Stores the task data that can be changed
  private tasks = DUMMY_TASKS;

  // Loads saved tasks from localStorage when the service starts
  constructor() {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  // Finds and returns the tasks of one user
  getUserTasks(userId: string) {
    return this.tasks.filter(
      (task) => task.userId === userId
    );
  }

  // Adds a new task for the selected user
  addTask(
    taskData: {
      title: string;
      summary: string;
      date: string;
    },
    userId: string
  ) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });

    // Saves the updated tasks
    this.saveTasks();
  }

  // Removes a completed task
  removeTask(id: string) {
    this.tasks = this.tasks.filter(
      (task) => task.id !== id
    );

    // Saves the updated tasks
    this.saveTasks();
  }

  // Saves all tasks in localStorage
  private saveTasks() {
    localStorage.setItem(
      'tasks',
      JSON.stringify(this.tasks)
    );
  }
}