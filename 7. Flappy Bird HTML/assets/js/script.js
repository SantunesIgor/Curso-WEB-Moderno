let gameStarted = false;

function createPipe() {
  if (!gameStarted) return;

  const frame = document.getElementById("frame");
  const bird = document.getElementById("bird");
  const pipeTemplate = document.createElement("img");

  pipeTemplate.src = "assets/img/pipe.png";
  pipeTemplate.classList.add("pipe");
  pipeTemplate.style.position = "absolute";

  let left = 751;

  const pipeTop = pipeTemplate.cloneNode(true);
  const pipeTopPosition = Math.floor(Math.random() * 300) + 200;
  pipeTop.style.top = pipeTopPosition + "px";
  pipeTop.style.left = left + "px";

  const pipeBottom = pipeTemplate.cloneNode(true);
  pipeBottom.style.transform = "rotate(180deg)";
  pipeBottom.style.top = pipeTopPosition - 800 + "px";
  pipeBottom.style.left = left + "px";

  frame.appendChild(pipeTop);
  frame.appendChild(pipeBottom);

  const intervalId = setInterval(() => {
    if (!gameStarted) {
      clearInterval(intervalId);
      return;
    }

    left -= 5;
    pipeTop.style.left = left + "px";
    pipeBottom.style.left = left + "px";

    if (left === 456) createPipe();

    if (left < -101) {
      pipeTop.remove();
      pipeBottom.remove();
      clearInterval(intervalId);
    }

    if (
      ((210 > parseInt(pipeBottom.style.left) &&
        parseInt(bird.style.top) > parseInt(pipeBottom.style.top) + 740) ||
        (210 > parseInt(pipeTop.style.left) &&
          parseInt(bird.style.top) < parseInt(pipeTop.style.top) - 131)) &&
      110 < parseInt(pipeTop.style.left)
    ) {
      gameOver();
    }
  }, 50);
}

function moveBird() {
  const bird = document.getElementById("bird");
  let top = parseFloat(bird.style.top) || 200;
  let velocity = 0;
  const gravity = 0.1;
  const jumpStrength = -3;
  const floorLimit = 535;
  let movementAllowed = false;

  bird.style.position = "absolute";
  bird.style.top = top + "px";

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && gameStarted) {
      velocity = jumpStrength;
      movementAllowed = true;
    }
  });

  function update() {
    if (movementAllowed) {
      velocity += gravity;
      top += velocity;

      if (top < 0) {
        top = 0;
        velocity = 0;
      }

      if (top > floorLimit) {
        top = floorLimit;
        velocity = 0;
        gameOver();
      }

      bird.style.top = top + "px";
    }

    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function gameOver() {
  gameStarted = false;
  document.getElementById("gameover").style.opacity = "1";
  document.getElementById("background").src =
    "assets/img/backgroundstopped.png";
}

function gameStart() {
  gameStarted = true;
  createPipe();
  moveBird();
}

document.getElementById("start").onclick = () => {
  if (!gameStarted) gameStart();
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !gameStarted) gameStart();
});
