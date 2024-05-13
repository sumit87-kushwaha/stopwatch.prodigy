
const sta = document.getElementById("start")
const sto = document.getElementById("stop");
const res = document.getElementById("reset");
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = flase;

function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    document.getElementById("hr").innerHTML ="00";
    document.getElementById("min").innerHTML ="00";
    document.getElementById("sec").innerHTML ="00";
    document.getElementById("count").innerHTML ="00";
    // stopwatch();

}
function stopwatch() {
    if (timer == true) {
        count = count + 1
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            count = 0
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            count = 0
            sec = 0;
            min = 0
        }
        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;
        setTimeout("stopwatch()", -1000)
        if (count == 100) {
            sec = set + 1;
            count = 0;
        }
    }
}
