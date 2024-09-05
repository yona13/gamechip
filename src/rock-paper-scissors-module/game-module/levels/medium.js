import Level from "./level.js";

export default class Medium extends Level {
    /**
     * Medium Level Class
     * 
     * For the Rock, Paper, Scissors Game, the Medium Level will randomly select
     * its next move, without any effort for minimising loss.
     * 
     * @param {Sign[]} signs Available Signs
     */
    constructor (signs) { super(signs, "medium"); }

    /**
     * Play Method
     * 
     * The Method will choose a random Sign to Play.
     * 
     * @returns String Representation of Sign to Play
     */
    play () { return this._signs[Math.floor(Math.random() * this._signs.length)]; }
}