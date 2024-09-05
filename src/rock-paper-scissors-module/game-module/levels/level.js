import Sign from "../sign.js";

export default class Level {
    /**
     * Level Class
     * 
     * Base Class for the Difficulty Level of the Computer for the Rock, Paper, 
     * Scissors Game.
     * 
     * @param {Sign[]} signs Available Signs
     * @param {string} level Difficulty Level
     */
    constructor (signs, level) {
        // Intialise Variables
        this._signs = [];
        signs.forEach(sign => { this._signs.push(sign.name); });
        this._level = level; 
    }

    get level () { return this._level; }

    set level (str) { this._level = str; }

    /**
     * Play Method
     * 
     * The Method will choose a Sign to Play.
     * 
     * @returns String Representation of Sign to Play
     */
    play () { return this._signs[0]; }

    /**
     * Update Method
     * 
     * Algorithm Learning Method.
     * 
     * @param {Sign} hMove Human Move
     * @param {number} result Result of Matchup
     */
    update (hMove, result) {}
}