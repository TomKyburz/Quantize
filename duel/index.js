const canvas = document.getElementById("canvasx");
const c = canvas.getContext('2d');
const form = document.getElementById('login')
const width = canvas.width;
const height = canvas.height;
const p = new Player();
const h = new Hud();
const buttons = [
    new Button(10, height - 30, 'button1'),
    new Button(54, height - 30, 'button2'),
    new Button(width - 74, height - 30, 'button3'),
    new Button(width - 34, height - 30, 'button4')
];
const projectiles = [];

window.onload = () => {
    const element = document.getElementById('game-container')
    element.style.backgroundColor = "darkblue";
}

function animate() {
    window.requestIdleCallback(animate);
    c.fillStyle = 'darkblue';
    c.fillRect(0, 0, width, height);
    // c.drawImage(backgroundImage, 0,0, width, height);
    p.draw();
    h.draw();
    p.update();

    projectiles.forEach(projectile => {
        projectile.update();
        projectile.draw();
    });

    buttons.forEach(button => {
        button.draw();
    });

    
}

animate();

// ...

function handleMouseDown(e) {
    const offset = canvas.getBoundingClientRect();
    const mouseX = e.clientX - offset.left;
    const mouseY = e.clientY - offset.top;
  
    buttons.forEach(button => {
      if (
        mouseX >= button.position.x &&
        mouseX <= button.position.x + button.width &&
        mouseY >= button.position.y &&
        mouseY <= button.position.y + button.height
      ) {
        console.log('Button ' + button.id + ' down');
        // Perform button-specific actions here
        switch (button.id) {
          case 'button1':
            console.log('left down');
            break;
          case 'button2':
            // Code for button 2
            break;
          case 'button3':
            // Code for button 3
            break;
          case 'button4':
            // Code for button 4
            break;
          default:
            break;
        }
      }
    });
  }
  
  function handleMouseUp(e) {
    const offset = canvas.getBoundingClientRect();
    const mouseX = e.clientX - offset.left;
    const mouseY = e.clientY - offset.top;
  
    buttons.forEach(button => {
      if (
        mouseX >= button.position.x &&
        mouseX <= button.position.x + button.width &&
        mouseY >= button.position.y &&
        mouseY <= button.position.y + button.height
      ) {
        console.log('Button ' + button.id + ' up');
        // Perform button-specific actions here
        switch (button.id) {
          case 'button1':
            // Code for button 1
            break;
          case 'button2':
            // Code for button 2
            break;
          case 'button3':
            // Code for button 3
            break;
          case 'button4':
            // Code for button 4
            break;
          default:
            break;
        }
      }
    });
  }

function toggleScreen(id, toggle) {
    let element = document.getElementById(id);
    let display = ( toggle ) ? "block" : "none";
    element.style.display = display;
}

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Access form inputs by their IDs
  const nameInput = document.getElementById('un');
  const pwdInput = document.getElementById('pw');

  // Get the values entered in the form
  let name = nameInput.value;
  let pwd = pwdInput.value;

  // Simulate an asynchronous request with setTimeout
  setTimeout(() => {
    // Replace the fetch call with your actual API endpoint
    fetch('https://quantize/duel/players.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, pwd }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if the entered username and password exist in the response
        const success = data.success;
        if (success) {
          console.log('Access granted');
          toggleScreen('start-screen', false);
          toggleScreen('canvasx', true);
          h.setPlayerName(name);
        } else {
          console.log('Access denied');
          alert('Username or password is incorrect');
        }
      })
      .catch((error) => {
        // Handle any error that occurred during the fetch
        console.error('Error:', error);
      })
      .finally(() => {
        // Reset the form fields
        form.reset();
      });
  }, 1000); // Simulate a delay of 1 second for the request
});

function credits() {
    window.location.href = '../credits.html';
}

document.addEventListener('click', handleMouseDown);
document.addEventListener('click', handleMouseUp);

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            p.moveLeft();
            break;
        case 'ArrowRight':
            p.moveRight();
            break;
        case 'ArrowUp':
            p.jump();
            break;
        case ' ':
            p.fireProjectile();
            break;
    }
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            if (p.velocity.x < 0)
                p.velocity.x = 0;
            break;
        case 'ArrowRight':
            if (p.velocity.x > 0)
                p.velocity.x = 0;
            break;
    }
});
