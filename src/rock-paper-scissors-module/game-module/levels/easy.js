import Sign from "../sign.js";
import Level from "./level.js";

export default class Easy extends Level {
    /**
     * Easy Level Class
     * 
     * For the Rock, Paper, Scissors Game, the Easy Level will only play Rock.
     * 
     * @param {Sign[]} signs Available Signs
     */
    constructor (signs) { super(signs, "easy"); }
}