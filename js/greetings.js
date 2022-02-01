const loginForm = document.getElementById("login-Form")
const loginInput = document.querySelector("#login-Form input")
const greeting = document.querySelector("#greeting")
const openTodoForm = document.getElementById("todo-Form")

// const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"


function handleLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    greetingUser(username)
}

function greetingUser(username) {
    const date = new Date()
    const dateHour = date.getHours()
    if (dateHour >= 12) {
        greeting.innerText = `Good afternoon, ${username}`
    } else if (dateHour >= 17) {
        greeting.innerText = `Good evening, ${username}`
    } else {
        greeting.innerText = `Good morning, ${username}`
    }
    greeting.classList.remove(HIDDEN_CLASSNAME)
    openTodoForm.classList.remove(HIDDEN_CLASSNAME)
}

const localUsername = localStorage.getItem(USERNAME_KEY)

if (localUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", handleLoginSubmit)
    
} else {
    greetingUser(localUsername)
    openTodoForm.classList.remove(HIDDEN_CLASSNAME)
    checkTop3()   // from todo.js
    console.log(openTodoForm)
}