function addTask() {
  const input = document.getElementById("tf-input").value;
  if (!input) return;

  const task = document.createElement("li");
  const taskId = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);
  task.id = taskId;
  task.classList.add("list-item");
  task.innerHTML = `
    <span>${input}</span>
    <button onclick="editTask(this)" class="edit-button">Edit</button>
    <button onclick="deleteTask(this)" class="delete-button">Delete</button>
  `;
  document.getElementById("task-container").appendChild(task);
  document.getElementById("tf-input").value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}

function editTask(button) {
  const taskElement = button.parentElement;
  const taskText = taskElement.querySelector("span").textContent;
  document.getElementById("tf-input").value = taskText;
  document.getElementById("add-btn").style.display = "none";
  document.getElementById("update-btn").style.display = "inline-block";
  document.getElementById("update-btn").setAttribute("data-task-id", taskElement.id);
}

function updateTask() {
  const taskId = document.getElementById("update-btn").getAttribute("data-task-id");
  const taskElement = document.getElementById(taskId);
  const newText = document.getElementById("tf-input").value;
  if (!newText) return;

  taskElement.querySelector("span").textContent = newText;
  document.getElementById("tf-input").value = "";
  document.getElementById("add-btn").style.display = "inline-block";
  document.getElementById("update-btn").style.display = "none";
  document.getElementById("update-btn").removeAttribute("data-task-id");
}
