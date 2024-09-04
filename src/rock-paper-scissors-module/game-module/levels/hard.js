import Level from "./level.js";

export default class Hard extends Level {
    /**
     * Hard Level Class
     * 
     * TODO: Write Description
     */
    constructor () { super("hard"); }

    /**
     * Play Method
     * 
     * TODO: Write Description
     * 
     * @param {Sign[]} signs Available Signs
     * @returns String Representation of Sign to Play
     */
    play (signs) { return signs[0].sign; }
}