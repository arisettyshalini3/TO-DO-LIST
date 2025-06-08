// Store all tasks in an array
let tasks = [];

// Render the task list to the UI
function renderTasks() {
  const list = document.getElementById("task-list");
  list.innerHTML = ""; // Clear previous list

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    // Create HTML content for each task
    li.innerHTML = `
      <div class="task-left">
        <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? "checked" : ""}>
        <span>${task.text}</span>
      </div>
      <div class="task-controls">
        <button class="edit" onclick="editTask(${index})">✏️</button>
        <button class="delete" onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;

    list.appendChild(li);
  });
}

// Add new task
function addTask() {
  const input = document.getElementById("task-input");
  const text = input.value.trim();

  if (text !== "") {
    tasks.push({ text, completed: false });
    input.value = "";
    renderTasks();
  }
}

// Mark a task as complete/incomplete
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Edit an existing task
function editTask(index) {
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

// Delete a task
function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

// Initial load
renderTasks();
