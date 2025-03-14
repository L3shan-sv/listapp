// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  } else {
    alert('Please enter a task!');
  }
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing "Enter" in the input field
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});