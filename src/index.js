import "./css/normalise.css";
import "./css/style.css";
import GameChip from "./game-chip-module/game-chip.js";
import KnightsGame from "./knights-module/knights-game.js";
import RPSGame from "./rock-paper-scissors-module/rps-game.js";
import TTTGame from "./tic-tac-toe-module/ttt-game.js";

// Initialise Games for GameChip
const knightsGame = new KnightsGame("Knight's Travails");
const tttGame = new TTTGame("Tic-Tac-Toe");
const rpsGame = new RPSGame("Rock, Paper, Scissors");

// Initialise GameChip
const gameChip = new GameChip([
    knightsGame,
    tttGame,
    rpsGame
]);

// Add GameChip
document.body.appendChild(gameChip.module);
gameChip.initialise();