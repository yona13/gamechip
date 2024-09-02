import Easy from "./levels/easy.js";
import Hard from "./levels/hard.js";
import Player from "./player.js";

export default class Game {
    #TURN;
    #SIZE;
    #LEVELS = {easy: null, hard: null};

    /**
     * Game Class
     * 
     * Object for tracking the current game.
     * 
     * @param {number} size Size of Grid
     */
    constructor (size) {
        // Initialise Variables
        this._grid = [];
        for (let i = 0; i < size; i++)
            this._grid.push([]);
        this._players = [];
        this.#TURN = 0;
        this.#SIZE = size;
        this.#LEVELS.easy = new Easy();
        this.#LEVELS.hard = new Hard("x", this.#SIZE);
        
        // Set Default Algorithm to be Easy
        this._algorithm = this.#LEVELS.hard;
    }

    get grid () { return this._grid; }

    set grid (arr) { this._grid = arr; }

    get players () { return this._players; }

    set players (arr) { this._players = arr; }

    get algorithm () { return this._algorithm; }

    set algorithm (obj) { this._level = obj; }

    /**
     * Setup Method
     * 
     * Create Player Objects for the Upcoming Game.
     * 
     * @param {string} nought Player 1 Nought or Cross
     */
    setup (nought) {
        // Check if Players have already been initialised
        if (this._players.length === 0) {
            this._players.push(new Player(nought, this.#SIZE));
            this._players.push(new Player((nought === "o" ? "x" : "o"), this.#SIZE));
        }
        // Otherwise, Update Players, if required
        else if (this._players[0].marker !== nought) {
            // Update Player Markers
            this._players[0].marker = nought;
            this._players[1].marker = (nought === "o" ? "x" : "o");

            // Reset Player Scores
            this._players[0].reset();
            this._players[1].reset();
        }

        // Reset Grid
        for (let i = 0; i < this.#SIZE; i++) 
            for (let j = 0; j < this.#SIZE; j++)
                this._grid[i][j] = "";
    }

    /**
     * Set Level Method
     * 
     * Difficulty Level is set with this Method.
     * 
     * @param {string} level Algorithm Difficulty
     */
    setLevel (level) { this._algorithm = this.#LEVELS[level]; }

    /**
     * Get Marker Method
     * 
     * For the Current Turn, the method returns the Marker of the Player.
     * 
     * @returns True, if Current Turn is Nought
     */
    getMarker () { return this._players[this.#TURN].marker === "o" ? true : false; }

    /**
     * Attempt Method
     * 
     * When the Player Attempts to make a move, the method will ensure that the
     * move was a legal one or not, and also check if the resulting move has led
     * to the end of the Game, whether that player has won, or if it resulted in
     * a draw.
     * 
     * @param {number} x Attempt X-Coordinate
     * @param {number} y Attempt Y-Coordinate
     * @returns Message indicating Attempt's Result
     */
    attempt (x, y) {
        // Reject Attempts that are beyond Grid Bounds
        if (x < 3 && x >= 0 && y < 3 && y >= 0) {
            // Check if Attempt isn't on an Occupied Cell
            if (this.#legal(x, y)) {
                // Update Player
                this._players[this.#TURN].play(x, y);

                // Update Grid
                this._grid[y][x] = this._players[this.#TURN].marker;

                // Chcek if Player has Won
                if (this._players[this.#TURN].hasWon())
                    return this._players[this.#TURN].marker;

                // Check for a Draw
                if (this.#filled()) 
                    return "Draw!";

                // Next Turn
                this.#TURN = this.#TURN === 0 ? 1 : 0;

                // Game should Resume
                return "";
            }

            return `Illegal Move! (${x}, ${y}) is already occupied!`;
        }

        return `Illegal Move! (${x}, ${y}) is out of bounds!`;
    }

    /**
     * Legal Method
     * 
     * Checks if the Attempt is Legal.
     * 
     * @param {number} x Attemp X-Coordinate
     * @param {number} y Attempt Y-Coordinate
     * @returns True, if Attempt is Legal
     */
    #legal (x, y) { return this._grid[y][x] === ""; }

    /**
     * Filled Method
     * 
     * Checks if all the cells in the grid have been marked.
     * 
     * @returns True if Grid is Fully Marked
     */
    #filled () {
        // Iterate through Grid and Search for Unmarked Cell
        let filled = true;
        for (let i = 0; i < this.#SIZE; i++)
            if (this._grid[i].includes("")) {
                filled = false;
                break;
            }

        return filled;
    }
}