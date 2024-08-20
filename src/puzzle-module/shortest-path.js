import Graph from "../data-structure/graph.js";
import Queue from "../data-structure/queue.js";
import GenericControls from "./generic-controls.js";

export default class ShortestPathControls extends GenericControls {
    /**
     * Shortest Path Puzzle Controls
     * 
     * Controller Class for Generating the Puzzle whereby
     * the User or Search Algorithm must move the Knight to
     * in the Smallest Number of Moves.
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
        super(["Shortest", "Path"], x, y, board);

        // Add Start Puzzle Event Listener
        this.start.addEventListener("click", (e) => {
            // Generate Puzzle
            const pos = this.generate();
            startCallback(pos.x, pos.y);
        });

        // Add Display Puzzle Info Event Listener
        this.info.addEventListener("click", (e) => {
            // Display Puzzle Information
            infoCallback(
                "Use the Select Start Button to choose your " +
                "initial Tile. Once selected, a Goal tile will" +
                " become highlighted, and you have to try to reach" +
                " that tile in as few moves as possible.\nBy clicking" +
                " the Show button, the knight will automatically move" +
                " to the Goal tile in the fewest possible moves."
            );
        });

        // Add Undo Move Event Listener
        this.undo.addEventListener("click", (e) => { undoCallback(); });

        // Add Show Solution Event Listener
        this.show.addEventListener("click", (e) => { showCallback(); });
    }

    /**
     * Generate Function
     * 
     * Creates a Coordinate of a Random Tile that is not
     * the Current Position on the Chessboard.
     * 
     * @returns Random Location on the Chessboard
     */
    generate () {
        // Initialise Position Variable
        let pos = {x: 0, y: 0};

        // Ensure Position is not the Initial Position
        while (true) {
            // Generate a Random Number for each Coordinate
            Object.keys(pos).forEach(coord => {
                pos[coord] = this.#random();
            });

            // Reject Positions that are Initial Position
            if (pos.x !== this.x && pos.y !== this.y)
                break;
        }

        return pos;
    }

    /**
     * Breadth First Search Function
     * 
     * Modified Version of the Breadth First Search
     * Algorithm, starting from the Root Vertex, the BFS
     * Algorithm visits all subsequent unvisited Vertices,
     * until the Goal Vertex is found.
     * 
     * @param {number} rx Root X-Coordinate
     * @param {number} ry Root Y-Coordinate
     * @param {number} gx Goal X-Coordinate
     * @param {number} gy Goal Y-Coordinate
     * @param {Graph} graph Graph of Board
     * @returns Shortest Path from Root to Goal
     */
    bfs (rx, ry, gx, gy, graph) {
        // Get Root and Goal Vertices
        const root = graph.getVertex(rx, ry);
        const goal = graph.getVertex(gx, gy);

        // Set All Vertices to be Unvisited
        for (let v of graph.vertices())
            v.visited = false;

        // Set Root to be Visited
        root.visited = true;

        // Setup Parent Array and Queue
        let parents = [];
        const queue = new Queue();
        queue.enqueue(root);

        // Handle Neighbour Vertices
        while (!queue.isEmpty()) {
            let vertex = queue.dequeue();

            // Break out of Loop if Goal is Found
            if (vertex.sameVertex(goal))
                break;

            // Otherwise enqueue Neighbours of Neighbour
            vertex.neighbours.forEach(neighbour => {
                if (!neighbour.visited) {
                    neighbour.visited = true;

                    // Push Parent into Array
                    parents.push({vertex: neighbour, parent: vertex});
                    queue.enqueue(neighbour);
                }
            }); 
        }

        // Generate Shortest Path
        let path = [];
        path.push(goal);
        let current = goal;

        // Get Previous Vertices
        while (true) {
            // Search Parents for Previous Vertices
            let idx = -1;
            for (let i = 0; i < parents.length; i++) {
                if (parents[i].vertex.sameVertex(current)) {
                    idx = i;
                    break;
                }
            }

            // Add Parent to Path
            current = parents[idx].parent;

            // Break out if Root Found
            if (current.sameVertex(root))
                break;
            
            // Otherwise add to Path
            path.push(current);
        }

        return path;
    }

    /**
     * Random Function
     * 
     * Generates a random number between 0 and the size of 
     * the Chessboard.
     * 
     * @returns Random Number between 0 and Board Size
     */
    #random () { return Math.floor(Math.random() * this.size); }
}