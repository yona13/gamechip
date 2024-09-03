import RockNormal from "../../images/rock.png";
import RockMonotone from "../../images/rock-hand.png";
import RockNeon from "../../images/neon-rock.png";
import RockTerminal from "../../images/rock-terminal.png";
import Sign from "./sign.js";

export default class Rock extends Sign {
    #THEMES = {
        "normal": RockNormal,
        "monotone": RockMonotone,
        "neon": RockNeon,
        "terminal": RockTerminal
    };

    /**
     * Rock Class
     * 
     * Utilising the Sign Base Class, the Rock Class Manages the Icons for the 
     * Rock Sign in the Rock, Paper, Scissors Game.
     */
    constructor () { super("Rock"); }

    /**
     * Change Icon Method
     * 
     * For the given Theme, the Icon of the Rock Sign should be Updated.
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
     * If the Opposing Sign is a Rock, Rcok will draw, resulting in a 0.
     * If the Opposing Sign is a Paper, Rock will lose, resulting in a 1.
     * If the Opposing Sign is Scissors, Rock will win, resulting in a 1.
     * 
     * @param {Sign} sign Sign going up Against
     * @returns 1 for a Win, 0 for a Draw, -1 for a Loss
     */
    matchup (sign) {
        // Rock Draws to Rock
        if (sign.name.toLowerCase() === "rock") 
            return 0;
        // Rock Loses to Paper
        if (sign.name.toLowerCase() === "paper") 
            return -1;
        // Rock Wins against Scissors
        if (sign.name.toLowerCase() === "scissors") 
            return 1;
    }
}