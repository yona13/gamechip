import "./console-styling.css";
import Controller from "./controller.js";
import Display from "./display.js";
import GameInterface from "./game-interface.js";
import Initialiser from "./initailiser.js";

export default class GameChip {
    /**
     * GameChip Class
     * 
     * Console on which a Game can be Played.
     * 
     * @param {Array} games Games List
     */
    constructor (games) {
        // Create GameChip Module DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("gamechip");

        // Initialise Game Variable
        this._games = games;

        // Create Game Display
        this._display = new Display();
        this._initialiser = new Initialiser(games, this.#initialiseCallback.bind(this));

        // Create Controller
        this._controller = new Controller(
            this._initialiser.upCallback.bind(this._initialiser),
            this._initialiser.rightCallback.bind(this._initialiser),
            this._initialiser.downCallback.bind(this._initialiser),
            this._initialiser.leftCallback.bind(this._initialiser),
            this._initialiser.aCallback.bind(this._initialiser),
            this._initialiser.bCallback.bind(this._initialiser),
            this._initialiser.startCallback.bind(this._initialiser),
            this._initialiser.selectCallback.bind(this._initialiser)
        );

        // Append Objects to Console
        this._module.appendChild(this._display.background);
        this._module.appendChild(this._controller.module);

        // Initialise Variables
        this._initialised = false;

        // Setup Screen Event Listeners
        window.addEventListener("resize", (e) => {
            if (this._initialised)
                this.play(this._game);
            else
                this.initialise();
        });
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get game () { return this._game; }

    set game (game) { this._game = game; }

    get games () { return this._games; }

    set games (arr) { this._games = arr; }

    /**
     * Play Method
     * 
     * Allow User to Play selected Game.
     */
    play () {
        // Set the Scene for the Game
        this._game.setScene(
            this._display.show.bind(this._display),
            this._display.takeDown.bind(this._display),
            this._display.getDimensions.bind(this._display)
        );
    }

    /**
     * Initialise Method
     * 
     * Initialise GameChip.
     */
    initialise () {
        this._initialiser.setScene(
            this._display.show.bind(this._display),
            this._display.takeDown.bind(this._display),
            this._display.getDimensions.bind(this._display)
        );
    }

    /**
     * Initialise Callback Method
     * 
     * Used by the Initialiser Class for Selecting the Game that the User wants
     * to play.
     * 
     * @param {GameInterface} game Game Selected
     */
    #initialiseCallback (game) {
        // Set Game Variable
        this._game = game;

        // Set Controller Callbacks
        this._controller.setCallbacks(
            this._game.upCallback.bind(this),
            this._game.rightCallback.bind(this),
            this._game.downCallback.bind(this),
            this._game.leftCallback.bind(this),
            this._game.aCallback.bind(this),
            this._game.bCallback.bind(this),
            this._game.startCallback.bind(this),
            this._game.selectCallback.bind(this)
        );

        this.play();
    }
}