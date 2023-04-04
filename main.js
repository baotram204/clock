const frame = document.querySelector('.frame')
const body = document.querySelector('body')
const numbers = document.querySelectorAll('.number')
const clock = document.querySelector('.clock')



let isNight = false


function themeToggle() {
    const min = document.querySelector('.min')
    const hr = document.querySelector('.hr')
    if (isNight) {

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
    } else {
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
    isNight = !isNight
}

const hr = document.querySelector('.hour')
const min = document.querySelector('.minute')
const sec = document.querySelector('.second')

function time() {
    setInterval(() => {
        let day = new Date()
        let hour = day.getHours() * 30
        let minute = day.getMinutes() *6
        let second = day.getSeconds() *6

        hr.style.transform = `rotate(${hour + minute/12}deg)`
        min.style.transform = `rotate(${minute}deg)`
        sec.style.transform = `rotate(${second}deg)`
    }) 

}

function start() {
    frame.onclick = themeToggle
    time()
}

start()
