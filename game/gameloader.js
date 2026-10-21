const params = new URLSearchParams(window.location.search);

const flashgame = params.get("swf") || "notgame"
console.log(flashgame)
const jsongame = JSON.parse("games.json")
console.log(jsongame)
