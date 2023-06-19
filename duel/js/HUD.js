class Hud {
    constructor() {
      this.width = 80;
      this.height = 15;
      this.playerName = ''; // Store the player's name
    }
  
    setPlayerName(name) {
      this.playerName = name; // Set the player's name
    }
  
    draw() {
        c.fillStyle = 'red';
        c.fillRect(5, 5, this.width, this.height);
      
        c.fillStyle = 'white';
        c.font = '10px Arial';
      
        let health = '15';
        let healthText = health.padStart(2); // Add leading spaces if needed
      
        // Calculate the starting position for the player's name
        const playerNameStartX = 10;
        const playerNameEndX = this.width - 10;
        const playerNameWidth = playerNameEndX - playerNameStartX;
        const playerName = this.playerName.substring(0, playerNameWidth); // Truncate if longer
      
        c.fillText(playerName, playerNameStartX, 15);
        c.fillText(healthText, playerNameEndX, 15);
      }
      
  }
  