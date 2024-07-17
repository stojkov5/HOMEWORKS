let tasks = [];

function displayMessage(msg) {
  let messageElement = document.querySelector(".error-message");
  if (!messageElement) {
    messageElement = document.createElement("p");
    messageElement.className = "error-message";
    document.querySelector(".container").appendChild(messageElement);
  }
  messageElement.textContent = msg;
}

function addTask() {
  const taskNameInput = document.getElementById("taskName").value.trim();
  if (taskNameInput === "") {
    displayMessage("Task cannot be empty.");
    return;
  }
  if (tasks.some((task) => task.taskName === taskNameInput)) {
    displayMessage("Task already exists.");
    return;
  }
  let taskAdded = {
    id: Math.round(Math.random() * 100000000),
    taskName: taskNameInput,
    isImportant: false,
  };
  tasks.push(taskAdded);
  displayTasks();
  document.getElementById("taskName").value = "";
  displayMessage("");
}

function displayTasks(filteredTasks = tasks) {
  const taskList = document.getElementById("listOfTasks");
  taskList.innerHTML = "";
  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.setAttribute("id", task.id);
    li.className = task.isImportant
      ? "bg-danger bg-gradient text-white"
      : "bg-secondary bg-gradient text-white";
    li.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <span class="task-name">${task.taskName}</span>
        <div class="task-buttons">
          
          <button class="btn btn-warning" onclick="editTask(${
            task.id
          })">Edit</button>

          <button class="btn btn-danger" onclick="deleteTask(${
            task.id
          })">Delete</button>

          <button class="btn btn-primary" onclick="toggleImportant(${
            task.id
          })">${task.isImportant ? "Unmark" : "Mark as Important"}</button>
        </div>
      </div>
    `;
    taskList.appendChild(li);
  });
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    displayTasks();
  }
}

function editTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  const listElement = document.getElementById(id);

  if (index !== -1) {
    listElement.innerHTML = `
    <div class="d-flex gap-3">
    <input type="text" id="taskNameEdit" placeholder="Task Name" class="form-control">
      <button id="submitTaskEdit" class="btn btn-primary" onclick="onEditBtn(${id}, ${index})" type="submit">Save</button>
    </div>
      
    `;

    document.getElementById("taskNameEdit").value = tasks[index].taskName;
  }
}

function onEditBtn(id, index) {
  const updatedTaskName = document.getElementById("taskNameEdit").value.trim();
  if (updatedTaskName !== "") {
    const updatedTask = {
      ...tasks[index],
      taskName: updatedTaskName,
    };
    tasks.splice(index, 1, updatedTask);
    displayTasks();
  } else {
    displayMessage("Task name cannot be empty.");
  }
}

function toggleImportant(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    const task = tasks[index];
    task.isImportant = !task.isImportant;
    tasks.splice(index, 1);
    if (task.isImportant) {
      tasks.unshift(task);
    } else {
      tasks.push(task);
    }
    displayTasks();
  }
}

function filterTasks() {
  const filterText = document
    .getElementById("filterTask")
    .value.trim()
    .toLowerCase();
  const filteredTasks = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(filterText)
  );
  displayTasks(filteredTasks);
}
