export default class Player {
    /**
     * Player Class
     * 
     * Managaes the Player's Marker (i.e. nought or cross) and also the player's
     * score.
     * 
     * @param {string} nought Nought or Cross
     */
    constructor (nought, size) {
        // Initialise Variables
        this._marker = nought;
        this._size = size;
        this._scores = [];
        for (let i = 0; i < (size * 2 + 2); i++)
            this._scores.push(0);
    }
    
    get marker () { return this._marker; }

    set marker (str) { this._marker = str; }

    get scores () { return this._scores; }

    set scores (arr) { this._scores = arr; }

    /**
     * Reset Method
     * 
     * Set all score values to be zero.
     */
    reset () { for (let i = 0; i < this._scores.length; i++) this._scores[i] = 0; }

    /**
     * Play Method
     * 
     * Updates the Player's Score Array.
     * 
     * @param {number} x Move X-Coordinate
     * @param {number} y Move Y-Coordinate
     */
    play (x, y) {
        // Update Column Score
        this._scores[x] += 1;
        // Update Row Score
        this._scores[y + this._size] += 1;
        // Update Negative Diagonal Score
        this._scores[this._scores.length - 2] += (x === y ? 1 : 0);
        // Update Positive Diagonal Score
        this._scores[this._scores.length - 1] += (x + y === this._size - 1 ? 1 : 0);
    }

    /**
     * Has Won Method
     * 
     * Checks the Players Scores for a 3, implying they have achieved the required
     * 3 in a row.
     * 
     * @returns True, if Player has 3 in a Row
     */
    hasWon () { return this._scores.includes(3); }
}