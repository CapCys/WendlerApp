function stopTimer(isRunning, button, buttonText){
    clearInterval(isRunning);
    button.innerHTML = buttonText;
  }
  
  function getTimeRemaining(remaining) {
    const seconds = Math.floor(remaining % 60);
    const minutes = Math.floor((remaining / 60) % 60);
    
    return {
      minutes,
      seconds
    };
  }
  
  function updateClock(remaining) {
    var title = document.getElementById("timeDisplay");
    const t = getTimeRemaining(remaining);
  
    title.innerHTML = ('0' + t.minutes).slice(-2) + ":" + ('0' + t.seconds).slice(-2);
  
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  
  var startButton = document.getElementById("startingPistol");
  var resetButton = document.getElementById("reset");
  var min = document.getElementById("inputMinutes");
  var sec = document.getElementById("inputSeconds");
  var time = 0;
  var isRunning = -1;
  updateClock(time);
  
  startButton.addEventListener("click", function(event){
    if(isRunning == -1){
      applyDefault();
      isRunning = setInterval(function(){
        time--;
        updateClock(time);
      }, 1000);
      startButton.innerHTML = "Pause";
    } else {
      stopTimer(isRunning, startButton, "Resume");
      isRunning = -1;
    }
  });
  
  resetButton.addEventListener("click", function(event){
    stopTimer(isRunning, startButton, "Start");
    isRunning = -1;
    time = setTime();
    updateClock(time);
  });

  function applyDefault() {

    time = setTime();
    updateClock(time);
  }

  function setTime() {
    var hard = document.getElementById("hard");
    var min = 1;
    var sec = 30;
  
    if (hard.checked == true) {
      min = 3;
      sec = 0;
    }
    return Math.floor((min * 60) + sec);
  }