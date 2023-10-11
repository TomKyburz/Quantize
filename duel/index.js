const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

// Player settings
const player = {
  x: width / 2,
  y: height / 2,
  width: 30,
  height: 30,
  color: "red",
  velocityY: 0,
  gravity: 0.5,
};

window.onload = () => {
  animate();
};

function animate() {
  // Clear the canvas
  c.clearRect(0, 0, width, height);

  // Update player position
  player.velocityY += player.gravity;
  player.y += player.velocityY;

  // Check if the player hits the bottom
  if (player.y + player.height >= height) {
    player.y = height - player.height;
    player.velocityY = 0; // Stop when hitting the bottom
  }

  // Draw the player
  c.fillStyle = player.color;
  c.fillRect(player.x, player.y, player.width, player.height);

  // Request animation frame
  requestAnimationFrame(animate);
}

// You can add user input handling to make the player jump or move left/right.
