import Level from "./level.js";

export default class Easy extends Level {
    /**
     * Easy Level Class
     * 
     * For the Tic-Tac-Toe Game, the Easy Level randomly selects its next move,
     * without any effort for minimising loss.
     */
    constructor () { super("easy"); }

    /**
     * Play Method
     * 
     * For the Current Grid, the method will randomly select an unoccupied cell
     * as the Selected Move.
     * 
     * @param {string[][]} grid Current Grid
     * @returns Selected Move
     */
    play (grid) {
        // Initialise Available Array
        let available = [];
        
        // Iterate through Grid to Find Available Cells
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                // Only Push Avaiable Cells into Array
                if (grid[i][j] === "")
                    available.push({x: j, y: i});
            }
        }

        // Return a Random Selection of Available Squares
        return available[Math.floor(Math.random() * available.length)];
    }
}