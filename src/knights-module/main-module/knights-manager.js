import "./game-styling.css";
import Board from "../board-module/board.js";
import Cursor from "./cursor.js";

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
    #MODE = [
        "gameplay",
        "menu",
        "game-setter",
        "theme-setter",
        "info-getter"
    ];

    constructor (showCallback, takeDownCallback) {
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

        // Initialise Objects
        this._cursor = new Cursor();
        this._board = new Board();

        // Append All Components to Module
        this._module.appendChild(this._board.module);
        this._module.appendChild(this._information);

        // Initialise Variables
        this._human = true; // Default is User Moves
        this._game = this.#GAME_TYPES[this._type.textContent];
        this._path = [];
        this._steps = {human: 0, algorithm: 0};
        this._msg = "";
        this.#initialiseCallbacks();
        this.setMode(this.#MODE[0]);

        // Set the Default Theme
        this.setTheme(this.#THEMES[0]);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get cursor () { return this._cursor; }

    set cursor (obj) { this._cursor = obj; }

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
    
    get message () { return this._msg; }

    set message (str) { this._msg = str; }

    get mode () { return this._mode; }

    set mode (str) { this._mode = str; }

    get callbacks () { return this._callbacks; }

    set callbacks (dict) { this._callbacks = dict; }

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

    /**
     * Set Mode Function
     * 
     * The game should either be in Gameplay or Menu mode.
     * 
     * @param {string} mode Mode to be Set
     */
    setMode (mode) {
        if (this.#MODE.includes(mode)) {
            // Set Mode Variable
            this._mode = mode;

            // Set Cursor Callbacks
            this._cursor.setCallbacks(
                this._callbacks[mode].horizontal,
                this._callbacks[mode].vertical,
                this._callbacks[mode].accept,
                this._callbacks[mode].decline,
                this._callbacks[mode].menu
            );
        }
    }

    /**
     * Game Accept Action Function
     * 
     * During the game, if an error occurs, say when an 
     * illegal move is made, then a message should be able
     * to be viewed by the user.
     * 
     * @returns True if there are no Errors
     */
    gameAcceptAction () {
        const message = this._board.acceptAction();
        if (message !== "") { 
            // Set Error Message
            this._msg = message;
            
            // Update with Error Message
            return false;
        }

        // Update with no Error Message
        return true;
    }

    /**
     * Initialise Callbacks Function
     * 
     * For each mode, that is, gameplay or menu, the button
     * callback methods are setup within the Callbacks 
     * Dictionary.
     */
    #initialiseCallbacks () {
        // Initialise Callback Dictionary
        this._callbacks = {
            "gameplay": {
                horizontal: this._board.horizontalMove.bind(this._board),
                vertical: this._board.verticalMove.bind(this._board),
                accept: this.gameAcceptAction.bind(this),
                decline: function () { return; },
                menu: this.showMenu.bind(this)
            },
        }
    }
}