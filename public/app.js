var centi_sec = 0
var sec = 0
var min = 0
var centiSecond = document.getElementById("centi")
var second = document.getElementById("sec")
var minute = document.getElementById("min")
var interval;
var startButton = document.getElementById("start")
var pauseButton = document.getElementById("pause")
var resetButton = document.getElementById("reset")


function timer(){
    centi_sec++
    centiSecond.innerHTML = centi_sec
    second.innerHTML = sec
    minute.innerHTML = min 
    if(centi_sec >= 100){
        sec++
        centi_sec = 0
    }
    if(sec >= 60){
        min++
        sec = 0
    }
    
}
function start(){
    interval = setInterval(timer, 10)
    startButton.disabled = true
    if(    startButton.disabled = true
        ){
            pauseButton.disabled = false
            resetButton.disabled = false
        }
    
    
}
function pause(){
    clearInterval(interval)
    pauseButton.disabled = true
    if(pauseButton.disabled = true){
startButton.disabled = false
resetButton.disabled = false
    }
}
function reset(){
    sec = 0
    min = 0 
    centi_sec = 0
    centiSecond.innerHTML = centi_sec
    minute.innerHTML = min
    second.innerHTML = sec
    clearInterval(interval)
    resetButton.disabled = true
    if(    resetButton.disabled = true
        ){
        pauseButton.disabled = false
        startButton.disabled =false
        }
}



