let sec = 0;
let min = 0;
let hour = 0;

let interval;

function twoDigits(digit) {

    if (digit<10) {

        return('0'+digit);

    } else {
        
        return(digit);
    }
}

function start() {

    count();
    interval = setInterval(count,1000);
}

function pause() {

    clearInterval(interval);
}

function stop() {

    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById("timer").innerText='00:00:00';
}

function count() {

    sec++;

    if (sec == 60) {
        sec = 0;
        min++;

        if (min == 60) {
            min = 0;
            hour++;
        }
    }

    document.getElementById("timer").innerText=twoDigits(hour)+':'+twoDigits(min)+':'+twoDigits(sec);
}