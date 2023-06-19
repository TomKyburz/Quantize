const form = document.getElementById('login');

window.onload = () => {
    const element = document.getElementById('game-container')
    element.style.backgroundColor = "black";
}

function accessSwitch(id, toggle) {
    let element = document.getElementById(id);
    let display = ( toggle ) ? "block" : "none";
    element.style.display = display;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('un');
    const pwdInput = document.getElementById('pw');
    const theAccess = document.getElementById('access');
  
    let name = nameInput.value;
    let pwd = pwdInput.value;
  
    fetch('players.json')
      .then(response => response.json())
      .then(data => {

        const users = data.users;
        const foundUser = users.find(user => user.playerName === name && user.password === pwd);
  
        if (foundUser) {
          console.log('Access granted');
          theAccess.style.color = 'lime';
          theAccess.innerHTML = 'ACCESS GRANTED';
          accessSwitch('unpw', false);
          accessSwitch('login', false);
          accessSwitch('buttons', false);
          accessSwitch('access', true);
        } else {
          console.log('Access denied');
          theAccess.style.color = 'red';
          theAccess.innerHTML = 'ACCESS DENIED';
          accessSwitch('access', true);
        }
      })
      .catch(error => {

        console.error('Error:', error);
      });
  
    form.reset();
  });