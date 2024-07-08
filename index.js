// index.js

const Todo = require('./todo'); // Import the Todo module

const myTodoList = new Todo(); // Create an instance of the Todo class

console.log(myTodoList.addTask('Learn Node.js')); // Add a task and log the result
console.log(myTodoList.addTask('Write a blog post')); // Add another task and log the result
console.log(myTodoList.addTask('Go for a walk')); // Add a third task and log the result

console.log('\nCurrent Tasks:');
console.log(myTodoList.listTasks()); // List all tasks and log the result

console.log('\nRemoving a task:');
console.log(myTodoList.removeTask('Write a blog post')); // Remove a task and log the result

console.log('\nCurrent Tasks:');
console.log(myTodoList.listTasks()); // List all tasks again and log the result
