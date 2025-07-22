<<<<<<< HEAD
let gameStarted = false;
let score = 0;

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

    if (left === 51) {
=======
let isGameRunning = false;
let score = 0;
let isBirdMoving = false;
let animationId;

function startGame() {
  resetGame();
  isGameRunning = true;
  spawnPipe();
  animateBird();
}

function resetGame() {
  const bird = document.getElementById("bird");
  const scoreDisplay = document.getElementById("score");
  const gameOverScreen = document.getElementById("gameover");
  const background = document.getElementById("background");

  bird.style.top = "200px";
  score = 0;
  scoreDisplay.textContent = score;
  gameOverScreen.style.opacity = "0";
  background.src = "assets/img/background.gif";

  document.querySelectorAll(".pipe").forEach(pipe => pipe.remove());
}

function endGame() {
  isGameRunning = false;
  isBirdMoving = false;
  cancelAnimationFrame(animationId);

  document.getElementById("gameover").style.opacity = "1";
  document.getElementById("background").src = "assets/img/backgroundstopped.png";
  document.getElementById("finalscore").textContent = 
    `Você fez ${score} pontos, aperte o botão "Start" ou pressione "Enter" para continuar`;
}

function spawnPipe() {
  if (!isGameRunning) return;

  const frame = document.getElementById("frame");
  const bird = document.getElementById("bird");

  const pipeImg = document.createElement("img");
  pipeImg.src = "assets/img/pipe.png";
  pipeImg.classList.add("pipe");
  pipeImg.style.position = "absolute";

  let pipeLeft = 751;
  const openingTop = Math.floor(Math.random() * 300) + 200;

  const topPipe = pipeImg.cloneNode();
  topPipe.style.top = `${openingTop}px`;
  topPipe.style.left = `${pipeLeft}px`;

  const bottomPipe = pipeImg.cloneNode();
  bottomPipe.style.transform = "rotate(180deg)";
  bottomPipe.style.top = `${openingTop - 800}px`;
  bottomPipe.style.left = `${pipeLeft}px`;

  frame.appendChild(topPipe);
  frame.appendChild(bottomPipe);

  const pipeInterval = setInterval(() => {
    if (!isGameRunning) {
      clearInterval(pipeInterval);
      return;
    }

    pipeLeft -= 5;
    topPipe.style.left = `${pipeLeft}px`;
    bottomPipe.style.left = `${pipeLeft}px`;

    if (pipeLeft === 456) spawnPipe();

    if (pipeLeft === 51) {
>>>>>>> 3cebfc9 (Recriando repositório e adicionando arquivos)
      score++;
      document.getElementById("score").textContent = score;
    }

<<<<<<< HEAD
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
=======
    if (pipeLeft < -101) {
      topPipe.remove();
      bottomPipe.remove();
      clearInterval(pipeInterval);
    }

    const birdTop = parseInt(bird.style.top);
    const pipeLeftPos = parseInt(topPipe.style.left);
    const topPipeTop = parseInt(topPipe.style.top);
    const bottomPipeTop = parseInt(bottomPipe.style.top);

    const birdHitsBottomPipe = (210 > pipeLeftPos && birdTop > bottomPipeTop + 740);
    const birdHitsTopPipe = (210 > pipeLeftPos && birdTop < topPipeTop - 131);
    const birdWithinPipeZone = 110 < pipeLeftPos;

    if ((birdHitsBottomPipe || birdHitsTopPipe) && birdWithinPipeZone) {
      endGame();
>>>>>>> 3cebfc9 (Recriando repositório e adicionando arquivos)
    }
  }, 50);
}

<<<<<<< HEAD
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
  document.getElementById(
    "finalscore"
  ).textContent = `Você fez ${score} pontos, aperte o botão "Start" ou pressione "Enter" para continuar`;
}

function resetGame() {
  score = 0;
  document.getElementById("score").textContent = score;
  document.getElementById("gameover").style.opacity = "0";
  document.getElementById("background").src = "assets/img/background.gif";

  const pipes = document.querySelectorAll(".pipe");
  pipes.forEach(pipe => pipe.remove());

  const bird = document.getElementById("bird");
  bird.style.top = "";
}

function gameStart() {
  resetGame();
  gameStarted = true;
  createPipe();
  moveBird();
}

document.getElementById("start").onclick = () => {
  if (!gameStarted) gameStart();
};

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !gameStarted) gameStart();
=======
function animateBird() {
  const bird = document.getElementById("bird");
  let velocity = 0;
  const gravity = 0.1;
  const jumpForce = -3;
  const groundLimit = 535;

  document.addEventListener("keydown", event => {
    if (event.key === "ArrowUp" && isGameRunning) {
      velocity = jumpForce;
      isBirdMoving = true;
    }
  });

  function updatePosition() {
    if (isBirdMoving) {
      let birdTop = parseFloat(bird.style.top) || 200;

      velocity += gravity;
      birdTop += velocity;

      if (birdTop < 0) {
        birdTop = 1;
        velocity = 0;
      }

      if (birdTop > groundLimit) {
        birdTop = groundLimit;
        velocity = 0;
        endGame();
        return;
      }

      bird.style.top = `${birdTop}px`;
    }

    animationId = requestAnimationFrame(updatePosition);
  }

  animationId = requestAnimationFrame(updatePosition);
}

document.getElementById("start").onclick = () => {
  if (!isGameRunning) startGame();
};

document.addEventListener("keydown", event => {
  if (event.key === "Enter" && !isGameRunning) startGame();
>>>>>>> 3cebfc9 (Recriando repositório e adicionando arquivos)
});
