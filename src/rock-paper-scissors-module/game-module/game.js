import Rock from "./signs/rock.js";
import Paper from "./signs/paper.js";
import Scissors from "./signs/scissors.js";
import Easy from "./levels/easy.js";
import Medium from "./levels/medium.js";
import Hard from "./levels/hard.js";
import Sign from "./signs/sign.js";

export default class Game {
    #LEVELS = {easy: null, medium: null, hard: null};

    constructor () {
        // Initialise Variables
        this._signs = [
            new Rock(),
            new Paper(),
            new Scissors()
        ];
        this.#LEVELS.easy = new Easy();
        this.#LEVELS.medium = new Medium();
        this.#LEVELS.hard = new Hard();
        
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
     * Play Method
     * 
     * TODO: Write Description
     * 
     * @param {Sign} sign Sign to Play
     * @returns 1 for a Win, 0 for a Draw, -1 for a Loss
     */
    play (sign) { /* TODO: Implement */ return 0; }
}