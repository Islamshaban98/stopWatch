window.onload = function () {
  /*Stop Watch code*/

  let start = document.querySelector("#start"),
    stop = document.querySelector("#stop"),
    reset = document.querySelector("#reset"),
    time = document.querySelector("time"),
    Time,
    tens=0,
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
      (hours ? (hours >= 9 ? hours + 'h' : "0" + hours +"h" + ":") : "") +
      (minutes ? (minutes > 9 ? minutes +'m' : "0" + minutes + 'm' + ":") : "") +
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
    timerDiv.style.display = "block";
  });
  list_2.addEventListener("click", () => {
    timerDiv.style.display = "none";
    watchDiv.style.display = "block";
  });

  /*Timer Code*/
  let timeInSeconds =0, timeInMinutes=0, timeInHours=0, interval;
  document.querySelector("#secondsInput").addEventListener("change", (e) => {
    timeInSeconds = e.target.value;
  });
  document.querySelector("#minutesInput").addEventListener("change", (e) => {
    timeInMinutes = e.target.value;
  });
  document.querySelector("#hoursInput").addEventListener("change", (e) => {
    timeInHours = e.target.value;
  });

  document.querySelector("#start-timer").addEventListener("click", () => {
    let secondTimer =
      Number((timeInHours * 60 * 60)) +
      Number((timeInMinutes * 60)) +
      Number(timeInSeconds);
    var displayTime = () => {
      var displayHours = Math.floor(secondTimer / (60 * 60));
      var remainder = secondTimer - displayHours * 60 * 60;
      var displayMinutes = Math.floor(remainder / 60);
      var displaySeconds = remainder - displayMinutes * 60;
      document.querySelector("#secondsInput").value = displaySeconds + "s";
      document.querySelector("#minutesInput").value = displayMinutes + "m";
      document.querySelector("#hoursInput").value = displayHours + "h";
    };
    interval = setInterval(() => {
      displayTime();
      secondTimer -= 1;
      if (secondTimer < 0) {
        clearInterval(interval);
        document.querySelector("h1").textContent = "EXPIRED!!";
      }
    }, 1000);
  });
  document.querySelector("#stop-timer").addEventListener("click", () => {
    clearInterval(interval);
  });
  document.querySelector("#reset-timer").addEventListener("click", () => {
    clearInterval(interval);
    document.querySelector("h1").textContent = "";
    document.querySelector("#secondsInput").value = 0;
    document.querySelector("#minutesInput").value = 0;
    document.querySelector("#hoursInput").value = 0;
    timeInHours = 0;
    timeInMinutes = 0;
    timeInSeconds = 0;
  });
};
