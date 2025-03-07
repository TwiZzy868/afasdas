const timeInput = document.getElementById('timeInput');
const timer = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const message = document.getElementById('message');

let seconds = 0;
let timerInterval;
let isRunning = false;

function updateDisplay() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timer.textContent = 
        mins.toString().padStart(2, '0') + ':' + 
        secs.toString().padStart(2, '0');
}

startBtn.addEventListener('click', function() {
    if (isRunning) return;
    
    if (!seconds) {
        const inputTime = parseInt(timeInput.value);
        if (isNaN(inputTime) || inputTime <= 0) {
            message.textContent = "Введіть додатне число!";
            return;
        }
        seconds = inputTime;
        updateDisplay();
    }
    
    isRunning = true;
    message.textContent = "";
    
    timerInterval = setInterval(function() {
        seconds--;
        updateDisplay();
        
        if (seconds <= 0) {
            clearInterval(timerInterval);
            isRunning = false;
            message.textContent = "Час вийшов!";
            seconds = 0;
        }
    }, 1000);
});

pauseBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    isRunning = false;
});

increaseBtn.addEventListener('click', function() {
    seconds += 10;
    updateDisplay();
});

decreaseBtn.addEventListener('click', function() {
    if (seconds >= 10) {
        seconds -= 10;
    } else {
        seconds = 0;
    }
    updateDisplay();
});