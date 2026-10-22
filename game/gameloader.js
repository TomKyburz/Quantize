const params = new URLSearchParams(window.location.search)
const container = document.getElementById("game-container")

async function loadJsongames() {
  try {
    const response = await fetch('games.json')

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`)
    }
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('json failed: ', error)
  }
}

const flashgame = params.get("swf") || "notgame"
const gameFile = `swf/${flashgame}.swf`
const ruffleplayer = document.getElementById("ruffle-player")
console.log(flashgame)
loadJsongames()

// container.style.setProperty("aspect-ratio", `${gameWidth} / ${gameHeight}`);

if (gameFile) {
  window.RufflePlayer = window.RufflePlayer || {};
  const ruffle = window.RufflePlayer.newest();
  const player = ruffle.createPlayer();
  container.appendChild(player);
  player.style.width = "100%";
  player.style.height = "100%";
  player.load(gameFile);
} else {
  console.error("No SWF file specified.");
}
