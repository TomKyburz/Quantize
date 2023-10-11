const canvas = document.getElementById("canvasx");
const c = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

window.onload = () => {
    const element = document.getElementById('game-container')
    element.style.backgroundColor = "darkblue";
}



function credits() {
    window.location.href = '../credits.html';
}
