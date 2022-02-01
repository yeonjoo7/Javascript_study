const todoForm = document.getElementById("todo-Form")
const todoInput = document.querySelector("#todo-Form input")
const todoList = document.getElementById("todo-List")

const HIDDEN_CLASSNAME = "hidden"
const TODOS_KEY ="todos"

let todos = []

function appendTodo(event) {
    event.preventDefault()
    if (todos.length < 2) {
        const newTodo = todoInput.value
        const newTodoObj = { id:Date.now(), text:newTodo }
        todos.push(newTodoObj)
        paintTodos(newTodoObj)
        localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
        todoInput.value = ""    
    } else  {
        const newTodo = todoInput.value
        const newTodoObj = { id:Date.now(), text:newTodo }
        todos.push(newTodoObj)
        paintTodos(newTodoObj)
        localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
        todoInput.value = ""
        todoForm.classList.add(HIDDEN_CLASSNAME)
    }
}

function paintTodos(item) {
    const li = document.createElement("li")
    todoList.appendChild(li)
    li.setAttribute("id", item.id)

    const span = document.createElement("span")
    li.appendChild(span)
    span.innerText = item.text

    const btn = document.createElement("button")
    li.appendChild(btn)
    btn.innerText = "❌"
    btn.addEventListener("click", pressDelete)
}

function pressDelete(event) {
    const li = event.target.parentNode
    li.remove()
    todos = todos.filter((item) => item.id !== parseInt(li.id) )
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
}

function checkTop3() {
    if (todos.length >= 3) {
        todoForm.classList.add(HIDDEN_CLASSNAME)
    } else {
        todoForm.classList.remove(HIDDEN_CLASSNAME)
    }
}

todoForm.addEventListener("submit", appendTodo)
todoList.addEventListener("click", checkTop3)

const local_todos = localStorage.getItem(TODOS_KEY)


if (local_todos) {
    todos = JSON.parse(local_todos)
    todos.forEach(paintTodos)
} 