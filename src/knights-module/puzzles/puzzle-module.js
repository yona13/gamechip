import Graph from "../../data-structure/graph.js";

export default class PuzzleModule {
    /**
     * Puzzle Module
     * 
     * Base Class for the Shortest Path and Knight's Tour
     * Puzzles.
     * 
     * @param {number} x Initial X-Position
     * @param {number} y Initial Y-Position
     * @param {number} size Size of Board
     */
    constructor (x, y, size) {
        // Initialise Variables;
        this._root = {x: x, y: y};
        this._size = size;
        this._started = false;
        this._generated = false;
        this._user_path = [];
        this._algorithm_path = [];
    }

    get root () { return this._root; }

    set root (dict) { this._root = dict; }

    get started () { return this._started; }

    set started (bool) { this._started = bool; }
    
    get generated () { return this._generated; }

    set generated (bool) { this._generated = bool; }
    
    get user () { return this._user_path; }

    set user (arr) { this._user_path = arr; }

    get algorithm () { return this._algorithm_path; }

    set algorithm (arr) { this._algorithm_path = arr; }

    /**
     * Puzzle Title Method
     * 
     * Returns the Title of the Puzzle.
     * 
     * @returns Puzzle Title
     */
    puzzleTitle () { return ""; }
    
    /**
     * Puzzle Information Method
     * 
     * Message about the Puzzles Information.
     * 
     * @returns Puzzle Information
     */
    puzzleInfo () { return ""; }

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