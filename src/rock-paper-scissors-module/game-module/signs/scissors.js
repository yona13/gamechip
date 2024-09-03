import ScissorsNormal from "../../images/scissors.png";
import ScissorsMonotone from "../../images/scissors-hand.png";
import ScissorsNeon from "../../images/neon-scissors.png";
import ScissorsTerminal from "../../images/scissors-terminal.png";
import Sign from "./sign.js";

export default class Scissors extends Sign {
    #THEMES = {
        "normal": ScissorsNormal,
        "monotone": ScissorsMonotone,
        "neon": ScissorsNeon,
        "terminal": ScissorsTerminal
    };

    /**
     * Scissors Class
     * 
     * Utilising the Sign Base Class, the Scissors Class Manages the Icons for
     * the Scissors Sign in the Rock, Paper, Scissors Game.
     */
    constructor () { super("Scissors"); }

    /**
     * Change Icon Method
     * 
     * For the given Theme, the Icon of the Scissors Sign should be Updated.
     * 
     * @param {string} theme New Theme
     */
    changeIcon (theme) {
        // Ensure Theme Exists
        if (Object.keys(this.#THEMES).includes(theme)) {
            // Replace Icon
            this._element.innerHTML = "";
            this._icon.src = this.#THEMES[theme];
            this._element.appendChild(this._icon);
        }
    }

    /**
     * Matchup Method
     * 
     * If the Opposing Sign is a Rock, Scissors will lose, resulting in a -1.
     * If the Opposing Sign is a Paper, Scissors will win, resulting in a 1.
     * If the Opposing Sign is Scissors, Scissors will draw, resulting in a 0.
     * 
     * @param {Sign} sign Sign going up Against
     * @returns 1 for a Win, 0 for a Draw, -1 for a Loss
     */
    matchup (sign) {
        // Scissors Loses to Rock
        if (sign.name.toLowerCase() === "rock") 
            return -1;
        // Scissors Wins against Paper
        if (sign.name.toLowerCase() === "paper") 
            return 1;
        // Scissors Draws to Scissors
        if (sign.name.toLowerCase() === "scissors") 
            return 0;
    }
}