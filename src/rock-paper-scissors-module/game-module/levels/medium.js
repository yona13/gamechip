import Level from "./level.js";

export default class Medium extends Level {
    /**
     * Medium Level Class
     * 
     * For the Rock, Paper, Scissors Game, the Medium Level will randomly select
     * its next move, without any effort for minimising loss.
     */
    constructor () { super("medium"); }

    /**
     * Play Method
     * 
     * The Method will choose a random Sign to Play.
     * 
     * @param {Sign[]} signs Available Signs
     * @returns String Representation of Sign to Play
     */
    play (signs) { return signs[Math.floor(Math.random() * signs.length)].sign; }
}