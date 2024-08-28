import "./css/normalise.css";
import "./css/style.css";
import GameChip from "./game-chip-module/game-chip.js";
import KnightsGame from "./knights-module/knights-game.js";

// Initialise Games for GameChip
const knightsGame = new KnightsGame();

// Initialise GameChip
const gameChip = new GameChip(knightsGame);

// Add GameChip
document.body.appendChild(gameChip.module);

// Start Game
gameChip.start();