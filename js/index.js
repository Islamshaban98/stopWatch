window.onload = function () {
  let start = document.querySelector("#start"),
    stop = document.querySelector("#stop"),
    reset = document.querySelector("#reset"),
    time = document.querySelector("time"),
    Time,
    tens,
    seconds = 0,
    minutes = 0,
    hours = 0;
  function timer() {
    tens++;
    if (tens > 99) {
      tens = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }
      }
    }
    time.textContent =
      (hours ? (hours >= 9 ? hours : "0" + hours + ":") : "") +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes + ":") : "") +
      (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
      "s." +
      (tens ? (tens > 9 ? tens : "0" + tens) : "00");
  }

  start.addEventListener("click", () => {
    Time = setInterval(timer, 10);
    start.textContent = "continue";
  });
  stop.addEventListener("click", () => {
    clearInterval(Time);
  });
  reset.addEventListener("click", () => {
    clearInterval(Time);
    time.textContent = "00s.00";
    start.textContent = "Start";
    tens = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
  });
  let list_1 = document.querySelector(".list-1"),
    list_2 = document.querySelector(".list-2"),
    watchDiv = document.querySelector(".watch-div");
    timerDiv = document.querySelector(".timer-div");
  list_1.addEventListener("click", () => {
    watchDiv.style.display = "none";
    timerDiv.style.display='block';
    // timerDiv.style.backgroundColor= 'azure';

  });
  list_2.addEventListener('click',()=>{
    timerDiv.style.display='none';
    watchDiv.style.display = "block";
    // watchDiv.style.backgroundColor= 'azure';


  })
};
