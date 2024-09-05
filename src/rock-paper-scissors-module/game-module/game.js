import Easy from "./levels/easy.js";
import Medium from "./levels/medium.js";
import Hard from "./levels/hard.js";
import Sign from "./sign.js";

export default class Game {
    #LEVELS = {easy: null, medium: null, hard: null};

    constructor () {
        // Initialise Variables
        this._signs = [
            new Sign("rock"),
            new Sign("paper"),
            new Sign("scissors")
        ];
        this.#LEVELS.easy = new Easy(this._signs);
        this.#LEVELS.medium = new Medium(this._signs);
        this.#LEVELS.hard = new Hard(this._signs);
        
        // Set Default Algorithm to be Easy
        this._algorithm = this.#LEVELS.easy;
    }

    get signs () { return this._signs; }

    set signs (arr) { this._signs = arr; }

    get algorithm () { return this._algorithm; }

    set algorithm (obj) { this._algorithm = obj; }

    /**
     * Set Level Method
     * 
     * Difficulty Level is Set with this Method.
     * 
     * @param {string} level Algorithm Difficulty
     */
    setLevel (level) { this._algorithm = this.#LEVELS[level]; }

    /**
     * Algorithm Select Method
     * 
     * Algorithm must make a blind selection of it's next move.
     * 
     * @returns Alogrithms' Selected Sign
     */
    algorithmSelect () { 
        console.log(this._algorithm);
        return this._algorithm.play(); }

    /**
     * Play Method
     * 
     * TODO: Write Description
     * 
     * @param {string} hStr String representation for Human Sign Selection
     * @param {string} aStr String representation for Algorithm Sign Selection
     * @returns 1 for a Win, 0 for a Draw, -1 for a Loss
     */
    play (hStr, aStr) { 
        console.log(`My Sign: ${hStr}; AI Sign: ${aStr};`);
        // Find the Signs that Represent Signs Selected
        let hSign;
        let aSign;
        this._signs.forEach(sign => {
            if (sign.name === hStr)
                hSign = sign;
            if (sign.name === aStr)
                aSign = sign;
        });

        // Get Matchup Results and Update Algorithm
        const result = hSign.matchup(aSign);
        this._algorithm.update(hSign, result);

        return result;
    }
}