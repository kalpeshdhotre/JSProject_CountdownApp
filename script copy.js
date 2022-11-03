let startButton = document.querySelector(".controls .startBtn");
startButton.addEventListener(`click`, () => startCountDown());

let resetButton = document.querySelector(".controls .resetBtn");
resetButton.addEventListener(`click`, () => resetCounter());

let intervalSession;
let miliSec = 100;
let mins = 0;
let secs = 0;

function startCountDown() {
    secs = Number(document.querySelector(".seconds").value);
    mins = Number(document.querySelector(".minutes").value);
    if ((secs == 0) & (mins == 0)) {
        alert(`please select desire time`);
    }else{
        intervalSession = setInterval(displayCountDownOnPage, 10);
    }
}

function resetCounter() {
    // mins = Number(document.querySelector(".minutes").value);
    console.log(secs);
    console.log(`minutes : ${mins}`);
    clearInterval(intervalSession);
    document.querySelector(".seconds").value = 00;
    document.querySelector(".minutes").value = 00;
    document.querySelector(".miliseconds").innerHTML = 00;
    miliSec = 100;
    mins = 0;
    secs = 0;
}

function displayCountDownOnPage() {
    miliSec = miliSec - 1;
    console.log(miliSec);

    if ((miliSec == 0) & (secs != 0)) {
        secs = secs - 1;
        document.querySelector(".seconds").value = secs.toString().padStart(2, 0);
        miliSec = 100;
    } else if ((miliSec == 0) & (secs == 0) & (mins != 0)) {
        mins = mins - 1;
        secs = 60;
        miliSec = 100;
        document.querySelector(".seconds").value = secs.toString().padStart(2, 0);
        document.querySelector(".minutes").value = mins.toString().padStart(2, 0);
    } else if ((miliSec == 0) & (secs == 0) & (mins == 0)) {
        clearInterval(intervalSession);
    }

    document.querySelector(".miliseconds").innerHTML = miliSec.toString().padStart(3, 0);
}
