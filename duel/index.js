const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define player properties
let player = {
  x: 50,
  y: 50,
  width: 50,
  height: 50,
  speed: 5,
  jumping: false,
};

// Draw the player on the canvas
function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Move the player
function movePlayer() {
  if (rightPressed && player.x < canvas.width - player.width) {
    player.x += player.speed;
  } else if (leftPressed && player.x > 0) {
    player.x -= player.speed;
  }

  if (jumpPressed && !player.jumping) {
    player.jumping = true;
    player.yVelocity = -player.speed * 2;
  }

  if (player.jumping) {
    player.yVelocity += 0.2;
    player.y += player.yVelocity;

    if (player.y > canvas.height - player.height) {
      player.jumping = false;
      player.y = canvas.height - player.height;
      player.yVelocity = 0;
    }
  }
}

// Game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  drawPlayer();

  // Move the player
  movePlayer();

  // Call gameLoop again
  requestAnimationFrame(gameLoop);
}

// Start the game loop
requestAnimationFrame(gameLoop);
