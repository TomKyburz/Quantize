class Player {
    constructor() {
        this.width = 12;
        this.height = 10;

        this.position = {
            x: width / 2 - this.width / 2,
            y: height / 2 - this.height / 2
        };

        this.velocity = {
            x: 0,
            y: 0
        };

        this.projectileCooldown = 0; // Cooldown duration in frames
        this.projectileCooldownMax = 10; // Maximum cooldown duration in frames

        // Gravity properties
        this.jumpHeight = -5;
        this.gravity = 0.3;
        this.isJumping = false;
        this.jumpsLeft = 2; // Number of jumps left (including the initial jump)
        this.lastDirection = 'right';

        // Spinning properties
        this.isSpinning = false;
        this.spinSpeed = 0.1; // Adjust the spinning speed as needed
        this.rotationAngle = 0;
    }

    draw() {
        // Save the canvas state before applying transformations
        c.save();

        // Translate to the center of the player's position
        c.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);

        // Rotate the canvas based on the rotation angle
        c.rotate(this.rotationAngle);

        // Draw the player rectangle
        c.fillStyle = 'red';
        c.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

        // Restore the canvas state
        c.restore();
    }

    update() {
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
    
        if (this.position.y + this.height > height) {
            this.position.y = height - this.height;
            this.velocity.y = 0;
            this.isJumping = false;
            this.jumpsLeft = 2; // Reset the number of jumps left after landing
    
            // Stop spinning when landing
            this.isSpinning = false;
            this.rotationAngle = 0;
        } else if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.y = 0;
        }
    
        if (this.position.x + this.width > width) {
            this.position.x = width - this.width;
            this.velocity.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = 0;
            this.velocity.x = 0;
        }
    
        // Update rotation angle if spinning
        if (this.isSpinning) {
            this.rotationAngle += this.spinSpeed;
    
            // Stop spinning right before hitting the ground
            if (this.position.y + this.height + this.velocity.y >= height) {
                this.isSpinning = false;
                this.rotationAngle = 0;
            }
        }
        if (this.projectileCooldown > 0) {
            this.projectileCooldown--;
        }
    }

    fireProjectile() {
        if (this.projectileCooldown === 0) {
            projectiles.push(new Projectile(this.position.x + this.width / 2 - 2, this.position.y, this.lastDirection));
            this.projectileCooldown = this.projectileCooldownMax;
        }
    }
    
    jump() {
        if (this.jumpsLeft === 2) {
            this.velocity.y = this.jumpHeight;
            this.isJumping = true;
            this.jumpsLeft--;
        } else if (this.jumpsLeft === 1) {
            this.velocity.y = this.jumpHeight;
            this.isJumping = true;
            this.jumpsLeft--;
    
            // Start spinning on the second jump
            this.isSpinning = true;
    
            // Determine the spin direction based on the player's movement
            if (this.lastDirection === 'left') {
                this.spinSpeed = -0.1; // Negative value for counter-clockwise spin
            } else {
                this.spinSpeed = 0.1; // Positive value for clockwise spin
            }
        }
    }     

    moveLeft() {
        this.velocity.x = -3;
        this.lastDirection = 'left';
    }

    moveRight() {
        this.velocity.x = 3;
        this.lastDirection = 'right';
    }
}