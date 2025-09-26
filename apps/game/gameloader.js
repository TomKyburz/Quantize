const params = new URLSearchParams(window.location.search);

const gameTitle  = params.get("title")  || "Unknown Game";
const gameFile   = params.get("file")   || null;
const gameWidth  = parseInt(params.get("width"))  || 640;
const gameHeight = parseInt(params.get("height")) || 480;

// Update header and page title
document.getElementById("game-title").textContent = gameTitle;
document.getElementById("page-title").textContent = gameTitle;

// Apply aspect ratio dynamically
const container = document.getElementById("game-container");
container.style.setProperty("aspect-ratio", `${gameWidth} / ${gameHeight}`);

// Load game
if (gameFile) {
  window.RufflePlayer = window.RufflePlayer || {};
  const ruffle = window.RufflePlayer.newest();
  const player = ruffle.createPlayer();
  container.appendChild(player);
  player.style.width = "100%";
  player.style.height = "100%";
  player.load(`${gameFile}`);
}

// 🧹 Clean up the URL (remove query params)
window.addEventListener("DOMContentLoaded", () => {
  window.history.replaceState({}, document.title, window.location.pathname);
});

