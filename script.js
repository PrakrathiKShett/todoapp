let tasks = [];

function addTask() {
    let text = prompt("Enter task");
    if (!text) return;

    tasks.push({ text: text, completed: false });
    render();
}

function render() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.className = task.completed ? "completed" : "";

        li.innerHTML = `
            ${task.text}
            <span onclick="deleteTask(${index})">❌</span>
        `;

        li.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            render();
        };

        list.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    render();
}