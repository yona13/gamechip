export default class Level {
    /**
     * Level Class
     * 
     * Base Class for the Difficulty Level of the Computer for the Tic-Tac-Toe
     * Game.
     * 
     * @param {string} level Difficulty Level
     */
    constructor (level) { this._level = level; }

    get level () { return this._level; }

    set level (str) { this._level = str; }

    /**
     * Play Method
     * 
     * For the Current Grid, the method will select the next move.
     * 
     * @param {string[][]} grid Current Grid
     * @returns Selected Move
     */
    play (grid) { return {x: -1, y: -1}; }
}