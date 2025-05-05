const yellowbird = document.getElementById("yellowbird");
const frame = document.querySelector(".frame");

let y = yellowbird.offsetTop;
let velocity = 0;
const gravity = 0.25;
const jumpStrength = -5;

function updatePosition() {
  velocity += gravity;
  y += velocity;

  const maxY = frame.clientHeight - yellowbird.offsetHeight;
  if (y > maxY) {
    y = maxY;
    velocity = 0;
  }

  if (y < 0) {
    y = 0;
    velocity = 0;
  }

  yellowbird.style.top = `${y}px`;

  requestAnimationFrame(updatePosition);
}

function movePipe() {
  
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    velocity = jumpStrength;
  }
});

updatePosition();
