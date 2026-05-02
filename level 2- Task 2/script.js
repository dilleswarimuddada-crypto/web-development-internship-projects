let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return;

    tasks.push(taskText);
    input.value = "";

    displayTasks();
    saveTasks();
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task}</span>
            <button onclick="deleteTask(${index})">X</button>
        `;

        list.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
    saveTasks();
}

function toggleTask(index) {
    let listItems = document.querySelectorAll("li span");
    listItems[index].classList.toggle("completed");
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        tasks = JSON.parse(saved);
        displayTasks();
    }
}

loadTasks();