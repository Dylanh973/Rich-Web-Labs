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


//Converting the time by dividing hours by 3600, then we divide the remainder using modulo by 60 to convert the minutes, then we just add the remainder for the seconds
let converttime = (seconds) => ({
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor(seconds % 3600 / 60),
    seconds: Math.floor(seconds % 3600 % 60)
});


//After the button is clicked we subscribe ourselves to the observable to run the timer.
start.subscribe(() => {
    //getting the users inputs of hours minutes and seconds and converting the input to seconds
    let userhours = (userhour.value * 60 * 60);
    let userminutes = (userminute.value) * 60;
    let userseconds = (usersecond.value);

    //Adding all of them up so we can get the total time
    let totaltime = userhours + userminutes + userseconds;

    timer = Rx.Observable
    //Here we set a timer for the total time, in an interval of 1 second (1000 milliseconds).
        .timer(totaltime, 1000)
        //Here is where I pass in the i and assign it totaltime, and deduct 1 from the total time to keep track of the timing.
        .map(i => (totaltime - 1) - i) 
        //This is where we utilize the function we created above to convert the time to seconds.
        .map(converttime) //Create a new array for storing the elements, hours minutes, seconds
        .subscribe((seconds) => { 
            converttime(seconds);//Here we convert the time passing in the seconds and using the new array we made to display the hours, minutes, seconds.
            console.log('Countdown', seconds); //Used just to basic test before we implement the displaying of the actual timer.
        });
});