// todo.js

class Todo {
  constructor() {
      this.tasks = []; // Initialize an empty array to store tasks
  }

  addTask(task) {
      if (task && typeof task === 'string') {
          this.tasks.push(task); // Add task to the array
          return `Task "${task}" added.`; // Return confirmation message
      }
      return 'Invalid task.'; // Return error message if input is invalid
  }

  removeTask(task) {
      const index = this.tasks.indexOf(task);
      if (index > -1) {
          this.tasks.splice(index, 1); // Remove task from the array
          return `Task "${task}" removed.`; // Return confirmation message
      }
      return `Task "${task}" not found.`; // Return error message if task is not found
  }

  listTasks() {
      if (this.tasks.length > 0) {
          // Return a numbered list of tasks
          return this.tasks.map((task, index) => `${index + 1}. ${task}`).join('\n');
      }
      return 'No tasks available.'; // Return message if no tasks are available
  }
}

module.exports = Todo; // Export the Todo class for use in other files
