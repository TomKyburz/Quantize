// PongGame.js
const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

// Paddle
const paddleWidth = 10;
const paddleHeight = 60;
let leftPaddleY = canvas.height / 2 - paddleHeight / 2;
let rightPaddleY = canvas.height / 2 - paddleHeight / 2;

// Ball
const ballSize = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
    ctx.fillRect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);

    // Draw ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();

    // Move ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball collision with walls
    if (ballY + ballSize > canvas.height || ballY - ballSize < 0) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddles
    if (
        (ballX - ballSize < paddleWidth && ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) ||
        (ballX + ballSize > canvas.width - paddleWidth && ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight)
    ) {
        ballSpeedX = -ballSpeedX;
    }

    // Update game
    requestAnimationFrame(draw);
}

// Handle touch events for mobile controls
document.addEventListener("touchmove", (e) => {
    const touchY = e.touches[0].clientY - canvas.getBoundingClientRect().top;
    leftPaddleY = Math.min(canvas.height - paddleHeight, Math.max(0, touchY - paddleHeight / 2));
});

// Start the game
draw();
