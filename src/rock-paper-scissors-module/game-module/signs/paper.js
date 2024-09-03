import PaperNormal from "../../images/paper.png";
import PaperMonotone from "../../images/paper-hand.png";
import PaperNeon from "../../images/neon-paper.png";
import PaperTerminal from "../../images/paper-terminal.png";
import Sign from "./sign.js";

export default class Paper extends Sign {
    #THEMES = {
        "normal": PaperNormal,
        "monotone": PaperMonotone,
        "neon": PaperNeon,
        "terminal": PaperTerminal
    };

    /**
     * Paper Class
     * 
     * Utilising the Sign Base Class, the Paper Class Manages the Icons for the 
     * Paper Sign in the Rock, Paper, Scissors Game.
     */
    constructor () { super("Paper"); }

    /**
     * Change Icon Method
     * 
     * For the given Theme, the Icon of the Paper Sign should be Updated.
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
     * If the Opposing Sign is a Rock, Paper will win, resulting in a 1.
     * If the Opposing Sign is a Paper, Paper will draw, resulting in a 0.
     * If the Opposing Sign is Scissors, Paper will lose, resulting in a -1.
     * 
     * @param {Sign} sign Sign going up Against
     * @returns 1 for a Win, 0 for a Draw, -1 for a Loss
     */
    matchup (sign) {
        // Paper Wins against Rock
        if (sign.name.toLowerCase() === "rock") 
            return 1;
        // Paper Draws to Paper
        if (sign.name.toLowerCase() === "paper")
            return 0;
        // Paper Loses to Scissors
        if (sign.name.toLowerCase() === "scissors")
            return -1;
    }
}