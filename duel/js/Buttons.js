class Button {
    constructor(x, y, id) {
        this.width = 24;
        this.height = 20;
        this.position = {
            x: x,
            y: y
        };
        this.id = id;
    }

    drawHitBox() {
        Button.prototype.drawHitbox = function (c) {
            c.strokeStyle = 'red';
            c.lineWidth = 2;
            c.strokeRect(this.position.x, this.position.y, this.width, this.height);
          };
          
    }

    draw() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
          
    }
}