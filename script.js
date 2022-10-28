let sec=0;
let min=0;

function start() {

    setInterval(count,10)
}

function pause() {

    console.log('pausou')
}

function stop() {

    console.log('parou')
}

function count() {

    sec++;
    if (sec==60) {

        min++;
        sec=0;
    }

    document.getElementById("timer").innerText=min+':'+sec;
}