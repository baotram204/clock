const frame = document.querySelector('.frame')
const body = document.querySelector('body')
const numbers = document.querySelectorAll('.number')
const clock = document.querySelector('.clock')

const min = document.querySelector('.min')
const hr = document.querySelector('.hr')

// khởi tạo localstorage
let isNight = localStorage.getItem('isNight') 
let savedCurr = localStorage.getItem('currentTheme') 


if (isNight === 'false') {
    isNight = false
}

// after refresh update use web 
if (savedCurr === 'light' || savedCurr === null) {
    light()
} else {
    dark()
}

// function turnn on or off light
function themeToggle() {
    if (isNight) {
        light()
        savedCurr = localStorage.setItem('currentTheme', 'light' )
    } else {
        dark()
        savedCurr = localStorage.setItem('currentTheme', 'dark' )
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
