import "./css/normalise.css";
import "./css/style.css";
import GameChip from "./game-chip-module/game-chip.js";
import KnightsGame from "./knights-module/knights-game.js";
import RPSGame from "./rock-paper-scissors-module/rps-game.js";

// Initialise Games for GameChip
const knightsGame = new KnightsGame("Knight's Game");
const rpsGame = new RPSGame("Rock, Paper, Scissors");

// Initialise GameChip
const gameChip = new GameChip([
    knightsGame,
    rpsGame
]);

// Add GameChip
document.body.appendChild(gameChip.module);
gameChip.initialise();