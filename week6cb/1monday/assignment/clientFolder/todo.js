const todoList = document.getElementById('todoList')
const taskName = document.getElementById('taskName')
const taskPriority = document.getElementById('taskPriority')
const taskDate = document.getElementById('taskDate')
const submitButton = document.getElementById('submitButton')

function getList() {
    fetch('http://localhost:8080/toDo')
    .then(response => response.json())
    .then(todo => {
        const addItem = todo.map((task) => {
            return `
            <h1>${task.title}</h1>
            <div>${task.priority}</div>
            <div>${task.date}</div>
            `
        }) 
        todoList.innerHTML = addItem.join('')
    })
}

async function addItem(task, priority, date) {
    const body = {
    title: task,
    priority: priority,
    date: date
    }

    const request = await fetch('http://localhost:8080/toDo', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(body)
    })
}

submitButton.addEventListener('click', function() {
    const todoName = taskName.value
    const todoPriority = taskPriority.value
    const todoDate = taskDate.value

    addItem(todoName, todoPriority, todoDate)
})

getList()