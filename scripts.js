/*JavaScript*/

document.addEventListener("DOMContentLoaded", function() {
  const bug = document.getElementById("bug"); //Get the bug element
  const scoreElement = document.getElementById("score"); //Get the score element
  const speedElement = document.getElementById("speed"); //Get the speed element
  const resetSpeedButton = document.getElementById("resetSpeed"); //Get the Reset Speed button
  const resetScoreButton = document.getElementById("resetScore"); //Get the Reset Score button
  
  let score = 0; //Initialize the score to 0
  let speed = 1000; //Initialize the speed to 1000 milliseconds
  let timerId; //Variable to store the timer ID
  
  function moveBug() { //This function calculates the maximum X and Y coordinates for bug movement, generates random coordinates, and updates the bug's position
    const gameArea = document.getElementById("gameArea"); //Get the Game Area element
    const maxX = gameArea.clientWidth - bug.clientWidth; //Calculate the maximum X coordinate for bug movement
    const maxY = gameArea.clientHeight - bug.clientHeight; //Calculate the maximum Y coordinate for bug movement
  
    const randomX = Math.floor(Math.random() * maxX); //Generate a random X coordinate
    const randomY = Math.floor(Math.random() * maxY); //Generate a random Y coordinate
  
    bug.style.left = randomX + "px"; //Set the Left Position of the bug element
    bug.style.top = randomY + "px"; //Set the Top Position of the bug element
  }
  
  function incrementScore() { //This function increments the score, updates the Score element's text, decreases the speed, and updates the Speed element's text
    score++; //Increment the score
    scoreElement.textContent = score; //Update the Score element's text
    speed -= 50; //Decrease speed by 50ms
    speedElement.textContent = speed; //Update the Speed element's text
  }
  
  function clickBug() { //This function is called when the bug is clicked. It increments the score, moves the bug to a new position, clears the previous interval, and sets a new interval with the updated speed
    incrementScore(); //Call the incrementScore() function to increment the score
    moveBug(); //Call the moveBug() function to move the bug to a new position
    clearInterval(timerId); //Clear the previous interval
    timerId = setInterval(moveBug, speed); //Move the bug every speed milliseconds
  }
  
  function resetSpeed() { //This function resets the speed to the initial value, updates the Speed element's text, clears the previous interval, and sets a new interval with the initial speed
    speed = 1000; //Reset speed to initial value
    speedElement.textContent = speed; //Update the Speed element's text
    clearInterval(timerId); //Clear the previous interval
    timerId = setInterval(moveBug, speed); //Move the bug every speed milliseconds
  }
  
  function resetScore() { //This function resets the score to 0 and updates the Score element's text
    score = 0; //Reset score to 0
    scoreElement.textContent = score; //Update the Score element's text
  }
  
  bug.addEventListener("click", clickBug); //Add a click event listener to the bug element
  resetSpeedButton.addEventListener("click", resetSpeed); //Add a click event listener to the Reset Speed button
  resetScoreButton.addEventListener("click", resetScore); // Add a click event listener to the Reset Score button
  
  moveBug(); //Initial bug position
  
  timerId = setInterval(moveBug, speed); //Move the bug every speed milliseconds
});
