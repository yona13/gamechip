import "./console-styling.css";
import Controller from "./controller.js";
import Display from "./display.js";
import GameInterface from "./game-interface.js";

export default class GameChip {
    /**
     * GameChip Class
     * 
     * Console on which a Game can be Played.
     * 
     * @param {GameInterface} game Game to be Played
     */
    constructor (game) {
        // Create Game Console Module DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("game-console");

        // Initialise Game Variable
        this._game = game;

        // Create Game Display
        this._display = new Display();

        // Create Controller
        const controller = new Controller(
            game.upCallback.bind(game),
            game.rightCallback.bind(game),
            game.downCallback.bind(game),
            game.leftCallback.bind(game),
            game.aCallback.bind(game),
            game.bCallback.bind(game),
            game.startCallback.bind(game),
            game.selectCallback.bind(game)
        );

        // Append Objects to Console
        this._module.appendChild(this._display.module);
        this._module.appendChild(controller.module);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get game () { return this._game; }

    set game (game) { this._game = game; }

    /**
     * Start Method
     * 
     * Start the Game.
     */
    start () {
        // Set the Scene for the Game
        this._game.setScene(
            this._display.show.bind(this._display),
            this._display.takeDown.bind(this._display),
            this._display.getDimensions.bind(this._display)
        );
    }
}