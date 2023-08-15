const addButton = document.getElementById("addButton");
const showRemainingButton = document.getElementById("showRemainingButton");
const showCompletedButton = document.getElementById("showCompletedButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="deleteButton"><img src="delete-icon.jpeg" width="10%" height="10%"></button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteButton")) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});

showRemainingButton.addEventListener("click", function() {
    const tasks = taskList.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
        const checkbox = tasks[i].querySelector("input[type='checkbox']");
        tasks[i].style.display = checkbox.checked ? "none" : "flex";
    }
});

showCompletedButton.addEventListener("click", function() {
    const tasks = taskList.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
        const checkbox = tasks[i].querySelector("input[type='checkbox']");
        tasks[i].style.display = checkbox.checked ? "flex" : "none";
    }
});