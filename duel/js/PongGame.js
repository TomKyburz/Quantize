const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Simulated game state
const gameState = {
    player1: {
        name: 'Player 1',
        level: 1,
        profilePicture: 'profile-picture.jpg',
        activePower: 50,
        health: 80,
    },
    // Add similar properties for player2
};

function drawHUD() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player information
    ctx.fillStyle = '#000';
    ctx.font = '20px Arial';
    ctx.fillText(`${gameState.player1.name} - Level ${gameState.player1.level}`, 20, 30);

    // Draw profile picture
    const profileImage = new Image();
    profileImage.src = gameState.player1.profilePicture;
    profileImage.onload = () => {
        ctx.drawImage(profileImage, 20, 40, 40, 40);
    };

    // Draw active power
    ctx.fillText(`Active Power: ${gameState.player1.activePower}%`, canvas.width - 200, 30);

    // Draw health bar
    ctx.fillStyle = '#ddd';
    ctx.fillRect(20, canvas.height - 60, 100, 20); // Background
    ctx.fillStyle = '#ff6262';
    const healthWidth = (gameState.player1.health / 100) * 100;
    ctx.fillRect(20, canvas.height - 60, healthWidth, 20);

    // Draw controls (mocked with text for simplicity)
    ctx.fillStyle = '#000';
    ctx.font = '16px Arial';
    ctx.fillText('Controls:', 20, canvas.height - 30);
    ctx.fillText('Left: A', 20, canvas.height - 10);
    ctx.fillText('Jump: Space', 120, canvas.height - 10);
    ctx.fillText('Right: D', 250, canvas.height - 10);
}

function updateGame() {
    // Simulate changes in game state
    gameState.player1.health -= 0.5;
    // Add similar updates for other properties and player2

    // Draw the updated HUD
    drawHUD();

    // Check for game over conditions, handle victory/defeat scenarios
    if (gameState.player1.health <= 0 || gameState.player2.health <= 0) {
        alert('Game Over!');
    }

    // Repeat the updateGame function
    requestAnimationFrame(updateGame);
}

// Initial draw
drawHUD();

// Start the game loop
updateGame();
