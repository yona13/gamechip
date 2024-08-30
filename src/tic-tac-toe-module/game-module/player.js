export default class Player {
    /**
     * Player Class
     * 
     * Managaes the Player's Marker (i.e. nought or cross) and also the player's
     * score.
     * 
     * @param {boolean} nought Nought or Cross
     */
    constructor (nought, size) {
        // Initialise Variables
        this._is_nought = nought;
        this._size = size;
        this._scores = [];
        for (let i = 0; i < (size * 2 + 2); i++)
            this._scores.push(0);
    }

    get isNought () { return this._is_nought; }

    set isNought (bool) { this._is_nought = bool; }

    get scores () { return this._scores; }

    set scores (arr) { this._scores = arr; }

    /**
     * Play Method
     * 
     * Updates the Player's Score Array.
     * 
     * @param {number} x Move X-Coordinate
     * @param {number} y Move Y-Coordinate
     */
    play (x, y) {
        this._scores[x + this._size] += 1;                                  // Update Row Score
        this._scores[y] += 1;                                               // Update Column Score
        this._scores[this._size - 2] += (x === y ? 1 : 0);                  // Update Negative Diaogonal Score
        this._scores[this._size - 1] += (x + y === this._size - 1 ? 1 : 0); // Update Negative Diagonal Score
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

    /**
     * Reset Method
     * 
     * Set all score values to be zero.
     */
    reset () { this._scores.forEach(e => { e = 0; }); }
}