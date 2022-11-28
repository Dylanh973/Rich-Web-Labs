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
let converttime = (secondscount) => ({
    hours: Math.floor(secondscount / 3600),
    minutes: Math.floor(secondscount % 3600 / 60),
    seconds: Math.floor(secondscount % 3600 % 60)
});

//After the button is clicked we subscribe ourselves to the observable to run the timer.
start.subscribe(() => {
    //getting the users inputs of hours minutes and seconds and converting the input to seconds
    let userhours = (userhour.value * 60 * 60 * 1000);
    let userminutes = (userminute.value) * 60 * 1000;
    let userseconds = (usersecond.value) * 1000;

    //Adding all of them up so we can get the total time
    let totaltime = userhours + userminutes + userseconds;
    totaltime = totaltime / 1000;

    timer = Rx.Observable
    //Here we set a timer for the total time, in an interval of 1 second (1000 milliseconds).
        .timer(totaltime, 1000)
        //Here is where I pass in the i and assign it totaltime, and deduct 1 from the total time to keep track of the timing.
        .map(i => (totaltime - 1) - i) 
        //Error checking to ensure the timer stops at 0.
        .takeWhile(i=> i >= 0)
        //This is where we utilize the function we created above to convert the time to seconds.
        .map(converttime) //Create a new array for storing the elements, hours minutes, seconds
        .subscribe((secondscount) => { 
            converttime(secondscount);//Here we convert the time passing in the seconds and using the new array we made to display the hours, minutes, seconds.
            //Here we run the display function to display the secondscount down.
            display(secondscount);
            console.log('Countdown', secondscount); //Used just to basic test before we implement the displaying of the actual timer.
        });
        
        
    //Error checking to delete users input fields after the timer runs out.
let display = (secondscount) => {
    if((secondscount.hours) == 0 && (secondscount.minutes) == 0 && secondscount.seconds == 0 ) {
        hours.innerHTML = "0:";
        minutes.innerHTML = "0:";
        seconds.innerHTML = "0";
        userhour.value = "";
        userminute.value = "";
        usersecond.value = "";
    } else {
        //If the fields aren't supposed to be blank, display the count down.
        let houramount = secondscount.hours;
        hours.innerHTML = houramount +":";

        let minuteamount = secondscount.minutes;
        minutes.innerHTML = minuteamount +":";

        seconds.innerHTML = secondscount.seconds;
    }
}

});