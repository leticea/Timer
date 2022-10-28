let sec = 0;
let min = 0;
let hour = 0;

let interval;

function start() {

    interval = setInterval(count,1)
}

function pause() {

    clearInterval(interval);
}

function stop() {

    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById("timer").innerText='00:00';
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

    document.getElementById("timer").innerText=hour+':'+min+':'+sec;
}