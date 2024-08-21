import "./css/normalise.css";
import "./css/style.css";
import GameConsole from "./game-console-module/console-module.js";
import KnightsGame from "./knights-module/knights-game.js";

const knightsGame = new KnightsGame();
const gameConsole = new GameConsole(knightsGame);

document.body.appendChild(gameConsole.module);

// Start Game
gameConsole.start();