import PuzzleModule from "./puzzle-module.js";
import Graph from "../../data-structure/graph.js";

export default class KnightsTour extends PuzzleModule {
    constructor (x, y, size) {
        super(x, y, size);
    }

    /**
     * Puzzle Title Method
     * 
     * Returns the Title of the Puzzle.
     * 
     * @returns Puzzle Title
     */
    puzzleTitle () { return "Knight's Tour"; }
    
    /**
     * Puzzle Information Method
     * 
     * Message about the Puzzles Information.
     * 
     * @returns Puzzle Information
     */
    puzzleInfo () { 
        return "Given the 8 by 8 board, use the Select " +
            "Button to choose your Initial Tile. Then you " +
            "will need to move the Knight, according to the " +
            "rules of chess, such that it visits every tile " +
            "on the chessboard exactly once.\nBy clicking " +
            "the Select button again, the knight will automatically " +
            "move and visit each tile exactly once.\n" +
            "To reset, press start and select the Shortest Path puzzle.";
    }

    /**
     * End of Puzzle Information Method
     * 
     * When the Puzzle has been completed, either by the 
     * User or by the Algorithm, then a message should be
     * presented to the User about how well the puzzle was
     * completed.
     * 
     * @returns End of Puzzle Inforamtion
     */
    endInfo () { return ""; }

    /**
     * Generate Method
     * 
     * For the given Puzzle Type, the Algorithm used for 
     * solving the Puzzle will be implemented to create the
     * Path required for the Knight to complete the Puzzle.
     * 
     * @param {number} x Root X-Position
     * @param {number} y Root Y-Position
     * @param {Graph} graph Graph of Chessboard
     */
    generate (x, y, graph) {}
}