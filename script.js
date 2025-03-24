//INSTRUCTIONS ARE UP HERE SO I DON'T HAVE TO GO BACK AND FORTH.

// Create a Web page with the following 3 buttons:

// <input type="button" id="startTimer" value="Start Timer"><br>

// <input type="button" id="stopTimer" value="Stop Timer"><br> 

// <input type="button" id="resetTimer" value="Reset Timer"><br> 

// The start button should start a timer displayed on this page beginning at zero and incrementing (counting up) at one second intervals. REQUIRED: use the .innerHTML property to display your timer on the page.

// The stop button should stop the timer at whatever number it has reached. If this button is clicked at 8 seconds, the time should freeze at 8. If the start button is then clicked, the timing should resume beginning with 8. 

// The reset button should stop the timer and reset it to zero.

// The function of this program must work no matter how often the buttons are clicked or in what order they are clicked.

let timerInterval;
let seconds = 0;
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startTimer');
const stopButton = document.getElementById('stopTimer');
const resetButton = document.getElementById('resetTimer');
timerDisplay.innerHTML = seconds;

startButton.addEventListener('click', () => {
    if (!timerInterval) { // Only start if not already running (If timerInterval is null)
        timerInterval = setInterval(() => {
            seconds++;
            timerDisplay.innerHTML = seconds;
        }, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timerInterval); // Stop the timer
    timerInterval = null; // Clear the interval
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval); // Stop the timer
    timerInterval = null; // Clear the interval
    seconds = 0; // Reset seconds
    timerDisplay.innerHTML = seconds; // Display the resetted value (0)
});



