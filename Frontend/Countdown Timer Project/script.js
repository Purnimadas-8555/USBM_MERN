// step 1: select elements from the HTML

const startButton =document.getElementById('startButton');
const timeInput=document.getElementById('timeInput');
const display=document.getElementById('display');

// step 2: define variables for countdown

let countdown;
let remainingTimes;

// step 3: Add event listener for the start button

startButton.addEventListener('click'),() => {

// step 4: clear any existing countdown interval

clearInterval(countdown);

// step 5: Get the number of seconds from user input

remainingTimes=parseInt(timeInput.value);

//step 6: check if the input is a valid number
if (isNaN(remainingTimes) || remainingTimes <= 0) {
    display.innerText= 'please enter a valid number of seconds .' ;
    return;
}

// step 7: Display the initial time
display.innerText=`Time Remainings: ${remainingTimes}seconds`;

//step 8: start the countdowner
countdown=setInterval(() => { remainingTimes--;
    display.innerText=`Time Remainings: ${remainingTimes}seconds`;

    //step 9: check if time has ran out
    if (remainingTimes <= 0){
        clearInterval(countdown);
        display.innerText='Time is up!';
    }
}, 1000);


}
