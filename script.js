let sec=00;

function start() {

    setInterval(count,1000)
}

function pause() {
    console.log('pausou')
}

function stop() {
    console.log('parou')
}

function count() {
    sec++;
    document.getElementById("timer").innerText=sec;

}