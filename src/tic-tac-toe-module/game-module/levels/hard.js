import Player from "../player.js";
import Game from "../player.js";
import Level from "./level.js";

export default class Hard extends Level {
    #INFINITY = 1000;

    constructor (marker, size) { 
        super("hard"); 
        this._marker = marker;
        this._size = size;
        this._move = {x: -1, y: -1};
    }

    get marker () { return this._marker; }

    set marker (str) { this._marker = str; }

    get size () { return this._size; }

    set size (num) { this._size = num; }

    get move () { return this._move; }

    set move (dict) { this._move = dict; }

    /**
     * Play Method
     * 
     * For the Current Grid, the method will select the next move using the 
     * Minimax Algorithm, which aims to minimise the possible losses for any 
     * given move for the worst possible move the User will make (from the 
     * computer's perspective).
     * 
     * @param {string[][]} grid Current Grid
     * @returns Selected Move
     */
    play (grid) {
        this.#minimax(grid, 0, true, (this._marker === "o" ? "x" : "o"));
        return this._move; 
    }

    #minimax (grid, depth=0, maximising=true, marker="") {
        // Check if Game is Complete
        const state = this.#isComplete(grid);

        // Return Heuristic for State
        if (state === this._marker)
            return 10;
        else if (state === (this._marker === "o" ? "x" : "o"))
            return -10;
        else if (state === "DRAW")
            return 0;

        // Setup for Minimax Algorithm
        let value;
        let idx;
        const moves = this.#availableMoves(grid);
        const next = marker === "o" ? "x" : "o";

        // Handle Maximising Player
        if (maximising) {
            value = -1 * this.#INFINITY;
            for (let i = 0; i < moves.length; i++) {
                const move = moves[i];
                const newState = this.#simulate(grid, move.x, move.y, next);
                const newValue = this.#minimax(newState, depth + 1, false, next);
                if (newValue > value) {
                    value = newValue;
                    idx = i;
                }
            }
            // Update Move
            this._move = moves[idx];

            return value;
        }

        // Handle Minimising Player
        else {
            value = this.#INFINITY;
            for (let i = 0; i < moves.length; i++) {
                const move = moves[i];
                const newState = this.#simulate(grid, move.x, move.y, next);
                const newValue = this.#minimax(newState, depth - 1, true, next);
                if (newValue < value) {
                    value = newValue;
                    idx = i;
                }
            }
            // Update Move
            this._move = moves[idx];

            return value;
        }
        // let value;
        // const moves = this.#availableMoves(grid);
        // const next = this.#nextTurn(grid, marker);

        // // Handle Maximising Player
        // if (maximising) {
        //     value = -1 * this.#INFINITY;
        //     moves.forEach(move => {
        //         const newState = this.#simulate(grid, move.x, move.y, next);
        //         value = Math.max(value, this.#minimax(newState, depth + 1, false));
        //     });

        //     return value;
        // }

        // // Handle Minimising Player
        // else {
        //     value = this.#INFINITY;
        //     moves.forEach(move => {
        //         const newState = this.#simulate(grid, move.x, move.y, next);
        //         value = Math.min(value, this.#minimax(newState, depth + 1, true));
        //     });

        //     return value;
        // }
    }

    /**
     * Is Complete Method
     * 
     * Check if a Given Grid is Complete.
     * 
     * @param {string[][]} grid Current Grid
     * @returns State of Grid
     */
    #isComplete (grid) {
        // Initialise Variables
        let players = {
            p1: new Player((this._marker === "o" ? "x": "o"), this._size),
            p2: new Player(this._marker, this._size)
        };
        let filled = true;

        // Iterate through Desired Grid
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                // Check for First Player
                if (grid[i][j] === players.p1.marker)
                    players.p1.play(j, i);
                // Check for Second Player
                else if (grid[i][j] === players.p2.marker)
                    players.p2.play(j, i);
                // Check for Unplayed Cell
                else
                    filled = false;
            }
        }

        if (players.p1.hasWon())
            return players.p1.marker;
        else if (players.p2.hasWon())
            return players.p2.marker;
        else if (filled)
            return "DRAW";
        return "INCOMPLETE";
    }

    /**
     * Available Moves Method
     * 
     * For a Current State, this method returns the Available Moves.
     * 
     * @param {string[][]} grid Current State of Game
     * @returns Available Moves for Current State
     */
    #availableMoves (grid) {
        // Initialise Moves Array
        const moves = [];

        // Iterate through Grid and find Available Cells
        for (let i = 0; i < this._size; i++) {
            for (let j = 0; j < this._size; j++) {
                if (grid[i][j] === "")
                    moves.push({x: j, y: i});
            }
        }

        return moves;
    }

    /**
     * Simulate Method
     * 
     * For a given move, return a New Game State.
     * 
     * @param {string[][]} grid Current Grid
     * @param {number} x Move X-Coordinate
     * @param {number} y Move Y-Coordinate
     * @param {string} marker Marker for Move
     * @returns New Game State
     */
    #simulate (grid, x, y, marker) {
        // Initialise New State
        const newState = [];
        for (let i = 0; i < this._size; i++)
            newState.push([]);

        // Iterate through Matrix
        for (let i = 0; i < this._size; i++) {
            for (let j = 0; j < this._size; j++) {
                // Add Marker to Cell
                if (j === x && i === y)
                    newState[i].push(marker);
                // Add Current Marker Otherwise
                else
                    newState[i].push(grid[i][j]);
            }
        }

        return newState;
    }
}