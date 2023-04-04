const frame = document.querySelector('.frame')
const body = document.querySelector('body')
const numbers = document.querySelectorAll('.number')
const clock = document.querySelector('.clock')

const min = document.querySelector('.min')
const hr = document.querySelector('.hr')

let isNight = localStorage.getItem('isNight') || false
let savedCurr = localStorage.getItem('currentTheme') || light.toString()

let restoreTheme = eval( `(${savedCurr})` )
restoreTheme()

function themeToggle() {
    if (isNight) {
        light()
        savedCurr = localStorage.setItem('currentTheme', light.toString() )
    } else {
        dark()
        savedCurr = localStorage.setItem('currentTheme', dark.toString() )
    }
    isNight = !isNight
    localStorage.setItem('isNight', isNight)
}


function light() {
    body.style.backgroundColor = 'white'
    clock.style.backgroundImage = 'url("./imgs/light-mode.png") '

    min.style.backgroundColor = 'black'
    hr.style.backgroundColor = 'black'

    numbers.forEach((number) => {
        number.style.color = 'black'
    })
    frame.innerHTML = `
    <div class="day">
        <i class="fa-regular fa-sun"></i>
    </div>
    `
}

function dark() { 
    body.style.backgroundColor = 'black'
    clock.style.backgroundImage = 'url("./imgs/dark-mode.png") '

    min.style.backgroundColor = 'white'
    hr.style.backgroundColor = 'white'

    numbers.forEach((number) => {
        number.style.color = 'white'
    })
    frame.innerHTML = `
    <div class="night">
        <i class="fa-regular fa-moon"></i>
    </div>
    `
}

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

function time() {
    setInterval(() => {
        let day = new Date()
        let h = day.getHours() * 30
        let m = day.getMinutes() *6
        let s = day.getSeconds() *6

        hour.style.transform = `rotate(${h + m/12}deg)`
        minute.style.transform = `rotate(${m}deg)`
        second.style.transform = `rotate(${s}deg)`
    }) 
}

function start() {
    frame.onclick = themeToggle
    time()
}

start()
