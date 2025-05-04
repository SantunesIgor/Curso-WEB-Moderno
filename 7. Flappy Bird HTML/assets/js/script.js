const yellowbird = document.getElementById("yellowbird");
const frame = document.querySelector('.frame');

let y = yellowbird.offsetTop;
let velocity = 0;
const gravity = 0.1;
const jumpStrength = -4;

function updatePosition() {
  velocity += gravity;
  y += velocity;

  const maxY = frame.clientHeight + 100;
  if (y > maxY) {
    y = maxY;
    velocity = 0;
  }

  if (y < 140) {
    y = 140;
    velocity = 0;
  }

  yellowbird.style.top = `${y}px`;

  requestAnimationFrame(updatePosition);
}

document.addEventListener('keydown', function (event) {
  if (event.key === "ArrowUp") {
    velocity = jumpStrength;
  }
});

updatePosition();
