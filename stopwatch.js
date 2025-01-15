let startTime, updatedTime, difference;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(updateTime, 10);
    running = true;
    startButton.disabled = true; // Disable the start button after being clicked
  }
}

function pauseTimer() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
    startButton.disabled = false; // Re-enable the start button when paused
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  running = false;
  startButton.disabled = false; // Re-enable the start button when reset
  difference = 0;
  display.textContent = "00:00:00";
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let milliseconds = Math.floor((difference % 1000) / 10);
  let seconds = Math.floor((difference / 1000) % 60);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);

  display.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(unit) {
  return unit.toString().padStart(2, "0");
}
