import Graph from "../data-structure/graph.js";
import GenericControls from "./generic-controls.js";

export default class KnightsTourControls extends GenericControls {
    /**
     * Knight's Tour Puzzle Controls
     * 
     * Controller Class for Implementing the Famous problem
     * known as the knight's tour. A knight's tour is a 
     * sequence of moves of a knight on a chessboard such 
     * that the knight visits every square exactly once.
     * 
     * @param {number} x Initial X-Coordinate
     * @param {number} y Initial Y-Coordinate
     * @param {number} board Board Size
     * @callback startCallback Start Puzzle Callback
     * @callback infoCallback Display Puzzle Info Callback
     * @callback undoCallback Undo Move Callback
     * @callback showCallback Show Solution Callback
     */
    constructor (x, y, board, startCallback, infoCallback, undoCallback, showCallback) {
        super(["Knights", "Tour"], x, y, board, startCallback, infoCallback, showCallback);

        // Add Start Puzzle Event Listener
        this.start.addEventListener("click", (e) => { startCallback(0, 0, true); });

        // Add Display Puzzle Info Event Listener
        this.info.addEventListener("click", (e) => {
            infoCallback(
                `The Knight's Tour!\nGiven the ${board}` +
                ` by ${board} board with the Knight ` +
                `wherever you please, move the Knight ` +
                `according to the rules of chess, you ` +
                `must visit each square exactly once.`
            );
        });

        // Add Undo Move Event Listener
        this.undo.addEventListener("click", (e) => { undoCallback(); });

        // Add Show Solution Event Listener
        this.show.addEventListener("click", (e) => { showCallback(true); });
    }

    /**
     * Warnsdorff Function
     * 
     * Using Warndorff's Algorithm to find the Knight's
     * Tour for the given Root Tile, this algorithm can be
     * broken down into Warndorff's Rule:
     *  1. We can start from any initial position of the 
     *     knight on the board.
     *  2. We always move to an adjacent, unvisited square
     *     with minimal degree (minimum number of
     *     unvisited adjacent).
     * 
     * @param {number} rx Root X-Coordinate
     * @param {number} ry Root Y-Coordinate
     * @param {Graph} graph Graph of Board
     * @returns The Knight's Tour
     */
    warnsdorff (rx, ry, graph) {
        // Get Root Vertex
        const root = graph.getVertex(rx, ry);

        // Set All Vertices Move to be 0
        for (let v of graph.vertices()) {
            v.move = 0;
            v.visited = false;
        }

        // Set Root to be 1st Move
        root.move = 1;
        root.visited = true;
        let path = [root];

        // Setup Vertex to Cycle through Vertices
        let last = root.move;
        let aux = root;
        while (aux.move !== Math.pow(this.size, 2)) {
            // Find Neightbour with Fewest Neighbours
            let min = 1000000;
            let idx = -1;
            for (let i = 0; i < aux.neighbours.length; i++) {
                // Assign Neighbour
                let neighbour = graph.getVertex(aux.neighbours[i].x, aux.neighbours[i].y);

                // Count Number of Unvisited Neighbours
                let count = 0;
                for (let n of neighbour.neighbours) {
                    if (!n.visited)
                        count++;
                }

                // Assign Least Accessible Neighbour
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
            path.push(aux);
        }

        return path;
    }
}