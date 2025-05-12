<<<<<<< HEAD
let gameStarted = false;

function createPipe() {
  if (!gameStarted) return;
=======
const yellowbird = document.getElementById("yellowbird");
const frame = document.querySelector(".frame");

let y = yellowbird.offsetTop;
let velocity = 0;
const gravity = 0.25;
const jumpStrength = -5;
>>>>>>> 7d974b9cb5dc76186f9578eb00061db516c608da

  const frame = document.getElementById("frame");
  const bird = document.getElementById("bird");
  const pipeTemplate = document.createElement("img");

<<<<<<< HEAD
  pipeTemplate.src = "assets/img/pipe.png";
  pipeTemplate.classList.add("pipe");
  pipeTemplate.style.position = "absolute";

  let left = 751;
=======
  const maxY = frame.clientHeight - yellowbird.offsetHeight;
  if (y > maxY) {
    y = maxY;
    velocity = 0;
  }

  if (y < 0) {
    y = 0;
    velocity = 0;
  }
>>>>>>> 7d974b9cb5dc76186f9578eb00061db516c608da

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

<<<<<<< HEAD
function moveBird() {
  const bird = document.getElementById("bird");
  let top = parseFloat(bird.style.top) || 200;
  let velocity = 0;
  const gravity = 0.1;
  const jumpStrength = -3;
  const floorLimit = 535;
  let movementAllowed = false;
=======
function movePipe() {
  
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    velocity = jumpStrength;
  }
});
>>>>>>> 7d974b9cb5dc76186f9578eb00061db516c608da

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
