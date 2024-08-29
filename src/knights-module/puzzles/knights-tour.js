import PuzzleModule from "./puzzle-module.js";
import Graph from "../../data-structures/graph.js";

export default class KnightsTour extends PuzzleModule {
    /**
     * Knight's Tour Puzzle
     * 
     * Utilising Warnsdorff's Algorithm, this Puzzle Class does not find a goal
     * vertex that the User must navigate to, but instead, the User must navigate
     * around the Chessboard, exploring every single tile exactly once.
     * 
     * @param {number} x Initial X-Position
     * @param {number} y Initial Y-Position
     * @param {number} size Chessboard Size
     */
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
     * When the Puzzle has been completed, either by the User or by the Algorithm, 
     * then a message should be presented to the User about how well the puzzle 
     * was completed.
     * 
     * @param {boolean} human Human or Algorithm
     * @param {number} steps Number of Steps to Complete
     * @param {Array} path Path taken
     * @returns End of Puzzle Inforamtion
     */
    endInfo (human, steps, path) { 
        // Toggle Generated
        this._generated = false;

        // Generate Main Message
        let msg = human ? 
            `Congratulations! You completed the puzzle ` +
            `in ${steps} steps!\nThe Algorithm's best ` +
            `was ${this._algorithm_path.length - 1} steps.` : 
            `Warnsdorff's Algorithm found a path in ` +
            `${steps - 1} steps.`;
            
        return msg;
    }

    /**
     * Generate Method
     * 
     * For the Knight's Tour Puzzle, Warnsdorff's Algorithm is implemented to 
     * find a full tour of the Chessboard, the algorithm can be broken down 
     * using Warnsdorff's Rule:
     *  1. Start from any initial position of the Knight on the board.
     *  2. Always move to an adjacent, unvisited tile with minimal degree (i.e.
     *     minimum number of unvisited adjacent tiles).
     * 
     * @param {number} x Root X-Position
     * @param {number} y Root Y-Position
     * @param {Graph} graph Graph of Chessboard
     */
    generate (x, y, graph) {
        // Get Root Vertex
        const root = graph.getVertex(x, y);

        // Set All Vertices Move to be 0
        for (let v of graph.vertices()) {
            v.move = 0;
            v.visited = false;
        }

        // Set Root to be 1st Move
        root.move = 1;
        root.visited = true;

        // Build Reverse Path
        let backwards = [root];

        // Setup Vertex to Cycle through Vertices
        let last = root.move;
        let aux = root;
        while (aux.move !== Math.pow(this._size, 2)) {
            // Find Neighbour with Fewest Neigbours
            let min = 1000000;
            let idx = -1;
            for (let i = 0; i < aux.neighbours.length; i++) {
                // Assign Neighbour
                let neighbour = graph.getVertex(
                    aux.neighbours[i].x, 
                    aux.neighbours[i].y
                );

                // Count Number of Unvisited Neighbours
                let count = 0;
                for (let n of neighbour.neighbours) {
                    if (!n.visited)
                        count++;
                }

                // Assign Least Accessible Neighbout
                if (count < min && !neighbour.visited) {
                    min = count;
                    idx = i;
                }
            }

            // Set Least Accessible Vertex to be Next Move
            aux = aux.neighbours[idx];
            aux.visited = true;
            aux.move = last + 1;
            last = aux.move;
            backwards.push(aux);
        }

        // Reverse Backwards Path
        while (backwards.length > 0)
            this._algorithm_path.push(backwards.pop());

        // Toggle Generated
        this._generated = true;
    }
}