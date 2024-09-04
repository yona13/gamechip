import Sign from "../sign.js";

export default class Level {
    /**
     * Level Class
     * 
     * Base Class for the Difficulty Level of the Computer for the Rock, Paper, 
     * Scissors Game.
     * 
     * @param {string} level Difficulty Level
     */
    constructor (level) { this._level = level; }

    get level () { return this._level; }

    set level (str) { this._level = str; }

    /**
     * Play Method
     * 
     * The Method will choose a Sign to Play.
     * 
     * @param {Sign[]} signs Available Signs
     * @returns String Representation of Sign to Play
     */
    play (signs) { return signs[0].sign; }
}