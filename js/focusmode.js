const divClock = document.querySelector(".toggleClock")
const focus = document.getElementById("focus")
const timerInput = document.querySelector(".timerInput")
const timer = document.getElementById("timer")

let realTimer = 0
let time = 0

function turnonFocus() {
    focus.innerText = "Set Timer"
    timerInput.classList.remove(HIDDEN_CLASSNAME)
    clock.classList.add(HIDDEN_CLASSNAME)
    timerInput.focus()
    timerInput.setAttribute("onkeyup", "if(window.event.keyCode==13){turnonTimer()}")
}

function turnonTimer() {
    focus.innerText = "Focus🔥"
    timer.classList.remove(HIDDEN_CLASSNAME)
    timerInput.classList.add(HIDDEN_CLASSNAME)
    time = parseInt(timerInput.value)
    if (time <= 0) {
        timerInput.value = ""
        time = 0 
        timerInput.classList.remove(HIDDEN_CLASSNAME)
        timer.classList.add(HIDDEN_CLASSNAME)
        focus.innerText = "Set Timer"
        timerInput.setAttribute("onkeyup", "if(window.event.keyCode==13){turnonTimer()}")
    } else {
        const timerHour = String(Math.floor(time / 60)).padStart(2, '0')
        const timerMinute = String(time % 60).padStart(2, '0')
        timer.innerText = `${timerHour}:${timerMinute}`
        timerInput.value = ""
        realTimer = setInterval(countdownTimer, 60000)
    }
}

function countdownTimer() {
    time -= 1
    if (time > 0) {
        const timerHour = String(Math.floor(time / 60)).padStart(2, '0')
        const timerMinute = String(time % 60).padStart(2, '0')
        timer.innerText = `${timerHour}:${timerMinute}`
    } else {
        clearInterval(realTimer)
        clock.classList.remove(HIDDEN_CLASSNAME)
        focus.innerText = "Good Job! Again?🔥"
        document.querySelector("#timer").classList.add(HIDDEN_CLASSNAME)
    }
}

focus.addEventListener("click", turnonFocus)
