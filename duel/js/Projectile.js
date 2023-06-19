class Projectile {
    constructor(x, y, direction) {
        if (direction === 'left') {
            this.x = x - 11;
            this.y = y + 4;
        } else {
            this.x = x + 2.5;
            this.y = y + 4;
        }
        this.width = 13;
        this.height = 2;
        this.speed = 5;
        this.direction = direction;
    }

    update() {
        if (this.direction === 'left') {
            this.x -= this.speed;
        } else {
            this.x += this.speed;
        }
        if (this.x + this.width < 0 || this.x > width) {
            projectiles.splice(projectiles.indexOf(this), 1);
        }
    }

    draw() {
        c.fillStyle = 'lime';
        c.fillRect(this.x, this.y, this.width, this.height);
    }
}