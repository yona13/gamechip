import "./game-styling.css";
import Board from "../board-module/board.js";

export default class KnightsManager {
    #GAME_TYPES = {
        "SP": null,     // TODO: Replace with Shortest Path Module
        "KT": null,     // TODO: Replace with Knight's Tour Module
    };
    #THEMES = [
        "Normal",
        "Retro",
        "Future",
        "Neon",
        "Terminal",
        "Fantasy"
    ];

    constructor () {
        // Generate Game DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("knights-game-module");

        // Generate Info Component DOM Elements
        this._information = document.createElement("div");
        this._information.classList.add("info-components");

        // Generate Player Info DOM Element
        this._player = document.createElement("div");
        this._player.classList.add("player-info");
        this._player.textContent = "H";

        // Generate Steps Taken Info DOM Element
        this._current = document.createElement("div");
        this._current.classList.add("steps-taken");
        this._current.textContent = 0;

        // Generate Game Type Info DOM Element
        this._type = document.createElement("div");
        this._type.classList.add("game-type");
        this._type.textContent = "SP";

        // Append Info Components to Information
        this._information.appendChild(this._player);
        this._information.appendChild(this._current);
        this._information.appendChild(this._type);

        // Create Chessboard
        this._board = new Board();

        // Append All Components to Module
        this._module.appendChild(this._board.module);
        this._module.appendChild(this._information);

        // Initialise Variables
        this._human = true; // Default is User Moves
        this._game = this.#GAME_TYPES[this._type.textContent];
        this._path = [];
        this._steps = {human: 0, algorithm: 0};

        // Set the Default Theme
        this.setTheme(this.#THEMES[0]);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get board () { return this._board; }

    set board (obj) { this._board = obj; }

    get human () { return this._human; }

    set human (bool) { this._human = bool; }

    get game () { return this._game; }

    set game (obj) { this._game = obj; }

    get path () { return this._path; }

    set path (arr) { this._path = arr; }

    get steps () { return this._steps; }

    set steps (dict) { this._steps = dict; }

    /**
     * Setup Function
     * 
     * Sets up the Display for the Game, including the 
     * board, the information panel and the sub-modules for
     * the game, such as the Shortest Path, the Knight's
     * Tour, and the Start Screen.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setup (width, height) {
        // Set Game Dimensions
        this._module.style.width = width;
        this._module.style.height = height;

        // Set Board Dimensions
        const dim = Math.floor(Math.min(width, height) * 0.9);
        this._board.setDimensions(dim);

        // Set Information Panel Font Size
        this._information.style.fontSize = Math.floor(dim * 0.2);
    }

    /**
     * Set Theme Function
     * 
     * Update the Styling to Reflect the Theme Selected.
     * 
     * @param {string} theme Theme Name
     */
    setTheme (theme) {
        // Get Root Element
        const root = document.documentElement;
        root.className = theme.toLowerCase();

        // Update Knight's Icon
        this._board.setTheme(theme.toLowerCase());
    }
}