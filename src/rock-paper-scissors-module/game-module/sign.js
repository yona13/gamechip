export default class Sign {
    /**
     * Sign Class
     * 
     * One of Three possible Signs available for the Traditional Rock, Paper, 
     * Scissors Game, this class will handle how each fair against each other
     * in the Game.
     * 
     * @param {string} name Name of Sign
     */
    constructor (name) { this._name = name; }

    get name () { return this._name; }

    set name (str) { this._name = str; }

    /**
     * Matchup Method
     * 
     * For a given Opposing Sign, the method will return how this sign would 
     * fair, whether it returns a win, draw or loss (represented numerically).
     * 
     * @param {Sign} sign Opposing Sign
     * @returns 1 for a Win, 0 for a Draw, -1 for a Loss
     */
    matchup (sign) {
        console.log(`My Sign: ${this._name}; Opposing Sign: ${sign.name};`);
        // This is Rock
        if (this._name === "rock") {
            // Opposing Rock
            if (sign.name === "rock") return 0;

            // Opposing Papper
            if (sign.name === "paper") return -1;

            // Opposing Scissors
            if (sign.name === "scissors") return 1;
        }

        // This is Paper
        if (this._name === "paper") {
            // Opposing Rock
            if (sign.name === "rock") return 1;

            // Opposing Papper
            if (sign.name === "paper") return 0;

            // Opposing Scissors
            if (sign.name === "scissors") return -1;
        }

        // This is Scissors
        if (this._name === "scissors") {
            // Opposing Rock
            if (sign.name === "rock") return -1;

            // Opposing Papper
            if (sign.name === "paper") return 1;

            // Opposing Scissors
            if (sign.name === "scissors") return 0;
        }
    }
}