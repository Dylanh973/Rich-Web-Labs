//Get the button and create an observe to check if the button is clicked.
let startButton = document.getElementById('start')
let start = Rx.Observable.fromEvent(startButton, 'click')

//Get the users hours minutes and seconds input
let userhour = document.getElementById('hour')
let userminute = document.getElementById('minute')
let usersecond = document.getElementById('second')

//We get the placeholders for the hours minutes and seconds to countdown so we can pass info to it.
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let converttime = (time) => ({
    hours: Math.floor(time / 3600),
    minutes: Math.floor(time % 3600 / 60),
    seconds: Math.floor(time % 3600 % 60)
});

