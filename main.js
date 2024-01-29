// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38 (In my opinion: not user-friendly)
//Better Current Time is: 10 : 30 : 38 PM

const today = new Date();

//Getting the day of the week;
const day = today.getDay();
const dayList =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.querySelector('#day').innerHTML = "Today is : " + dayList[day];


// Getting hour, minutes and seconds
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

//Transforming from 24 hours to 12 hours system
var hours = (hours >= 12)? hours-12 : hours;

//Deciding whether it's am or pm
var dayNight = (hours>= 12) ? 'PM' : 'AM';

//Solving the 0 hour issue that will appear when the hours is 12 & Deciding whether it's noon or midnight
if (hours === 0 && dayNight === 'PM') {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        dayNight = 'Noon'
    } else {
        hours = 12;
        dayNight = 'PM'
    }
}

if (hours === 0 && dayNight === 'AM') {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        dayNight = 'Midnight'
    } else {
        hours = 12;
        dayNight = 'PM'
    }
}

document.querySelector('#time').innerHTML = "Current Time is : " + hours + " : " + minutes + " : " + seconds + " " + dayNight; 


