const paddle = document.querySelector(".paddle");

let paddlePosition = 22.5;

const leftBound = 0;
const rightBound = 45;

function changePaddlePosition(newPosition) {
  if (newPosition >= leftBound && newPosition <= rightBound) {
    // then you can move it
    paddlePosition = newPosition;
    paddle.style.transform = `translate(${newPosition}vw, 45vh)`;
  } else {
    // trying to move it out of bounds, bad
  }
}
paddle.style.transform = "translate(22.5vw, 45vh)";

function gameLoop() {
  updateGameState();

  setTimeout(() => {
    window.requestAnimationFrame(gameLoop);
  }, 100);

  return;
}

function updateGameState() {
  // do game stuff in here
}

gameLoop();
