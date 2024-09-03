import Game from "../game-module/game.js";

export default class RPSManager {
    #THEMES = [
        "Normal",
        "Monotone",
        "Neon",
        "Terminal"
    ];

    constructor () {
        // Build Game DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("rock-paper-scissors-game-module");
        
        // Initialise Variables
        
        this._game = new Game();
    }

    get game () { return this._game; }

    set game (obj) { this._game = obj; }
}