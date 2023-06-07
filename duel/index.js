const canvas = document.getElementById("canvasx");
const c = canvas.getContext('2d');

const width = canvas.width
const height = canvas.height

class Player {
    constructor() {
        this.width = 12
        this.height = 10
        
        this.position = {
            x: width / 2 - this.width / 2,
            y: height / 2 - this.height / 2
        }
        
        this.sides = {
            bottom: this.position.y + this.height,
        }

        this.velocity = {
            x: 0,
            y: 0,
        }
        
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        
    update() {
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        
        if (this.position.y + this.height > height) {
            this.position.y = height - this.height;
            this.velocity.y = 0;
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
        }
    
}

class Button {
    constructor() {
        this.width = 24
        this.height = 20

        this.position = {
            x: 10,
            y: height - 30
        }
    }

    left() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    right() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x+40, this.position.y, this.width, this.height);
    }

    down() {
        c.fillStyle = 'blue';
        c.fillRect(width-74, this.position.y, this.width, this.height);
    }

    up() {
        c.fillStyle = 'blue';
        c.fillRect(width-34, this.position.y, this.width, this.height);
    }
}

const p = new Player()
const b = new Button()

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black';
    c.fillRect(0, 0, width, height);

    p.draw()
    p.update()

    b.left()
    b.right()

    b.down()
    b.up()
}

animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            p.velocity.x = -5;
            break;
        case 'ArrowRight':
            p.velocity.x = 5;
            break;
        case 'ArrowUp':
            p.velocity.y = -5;
            break;
        case 'ArrowDown':
            p.velocity.y = 5;
            break;
    }
});

function handleMouseDown(e) {
    const rect = canvas.getBoundingClientRect();
    const canvasX = e.clientX - rect.left;
    const canvasY = e.clientY - rect.top;
  
    if (
      canvasX >= b.position.x &&
      canvasX <= b.position.x + b.width &&
      canvasY >= b.position.y &&
      canvasY <= b.position.y + b.height
    ) {
      p.velocity.x = -5;
    } else if (
      canvasX >= b.position.x + 40 &&
      canvasX <= b.position.x + b.width + 40 &&
      canvasY >= b.position.y &&
      canvasY <= b.position.y + b.height
    ) {
      p.velocity.x = 5;
    } else if (
      canvasX >= width - 74 &&
      canvasX <= width - 74 + b.width &&
      canvasY >= b.position.y &&
      canvasY <= b.position.y + b.height
    ) {
      p.velocity.y = 5;
    } else if (
      canvasX >= width - 34 &&
      canvasX <= width - 34 + b.width &&
      canvasY >= b.position.y &&
      canvasY <= b.position.y + b.height
    ) {
      p.velocity.y = -5;
    }
  }
  
  window.addEventListener('mousedown', handleMouseDown);
  console.log(e)