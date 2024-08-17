import Graph from "../data-structure/graph.js";
import Stack from "../data-structure/stack.js";
import Icon from "../images/knight.png";

export default class Knight {
    #BOARD_SIZE;
    #moveCallback

    /**
     * Knight Class
     * 
     * Class that Generates the DOM element that represents
     * the Knight Object, and also controls the Knight as 
     * it moves across the Chessboard, either by the User
     * or by the Controller Algorithm.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @param {number} size Chessboard Size
     * @param {Array} tiles Array of Chessboard Tiles
     */
    constructor (x, y, size, tiles, moveCallback) {
        // Create DOM Element
        this.element = document.createElement("div");
        const icon = new Image();
        icon.src= Icon;
        this.element.appendChild(icon);
        this.element.classList.add("knight");

        // Initialise Variables
        this.x = x;
        this.y = y;
        this.#BOARD_SIZE = size;
        this.#moveCallback = moveCallback;
        this.tiles = tiles;
        this.legal = [];

        // Generate Graph for Tiles
        this.graph = new Graph();
        this.tiles.forEach(tile => {
            this.graph.insertVertex(tile.x, tile.y);
        });
        this.fill();
        this.currentLegalMoves();
        this.path = new Stack();
        // let path = this.graph.bfs(x, y, 7, 0); // TESTING BFS
        // while (!path.isEmpty()) {
        //     let v = path.pop();
        //     console.log(`V: (${v.x}, ${v.y});`);
        // }
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get legal () { return this._legal; }

    set legal (arr) { this._legal = arr; }

    get tiles () { return this._tiles; }

    set tiles (arr) { this._tiles = arr; }

    get graph () { return this._graph; }

    set graph (graph) { this._graph = graph; }

    get path () { return this._path; }

    set path (stack) { this._path = stack;}

    get timeoutID () { return this._timeout_id; }

    set timeoutID (id) { this._timeout_id = id; }

    shortestPath (x, y) { this.path = this.graph.bfs(this.x, this.y, x, y); }

    start () { this.timeoutID = setTimeout(this.nextStep.bind(this), 100); }

    nextStep () {
        if (this.path.isEmpty()) 
            clearTimeout(this.timeoutID);
        else {
            let nextVertex = this.path.pop();
            console.log(nextVertex);
            this.#moveCallback(nextVertex.x, nextVertex.y);
        }
    }

    /**
     * Fill Function
     * 
     * Based on the Legal Moves that a Knight can make on a
     * Chessboard, this function will fill up the graph
     * with edges that correspond to the legal movements a
     * knight can make at each square on the board.
     */
    fill () {
        for (let x = 0; x < this.#BOARD_SIZE; x++)
            for (let y = 0; y < this.#BOARD_SIZE; y++)
                this.getLegalMoves(x, y);
    }

    /**
     * Current Legal Moves Function
     * 
     * For the current position the knight is in on the 
     * Chessboard, this function will fill up the legal 
     * moves array with the currently available legal moves.
     */
    currentLegalMoves () {
        const current = this.graph.getVertex(this.x, this.y);
        for (let i = 0; i < current.neighbours.length; i++)
            this.legal.push(current.neighbours[i]);
    }

    /**
     * Update Function
     * 
     * Update the Position of the Knight, and retrieve new
     * legal moves.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    update (x, y) {
        this.x = x;
        this.y = y;
        this.legal = [];
        this.currentLegalMoves();
    }

    /**
     * Is Legal Function
     * 
     * Checks if the Move selected is a legal one, given 
     * the restrictions of the Knight's movement on a
     * chessboard.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @returns True if Move is Legal
     */
    isLegal (x, y) {
        let idx = -1;
        for (let i = 0; i < this.legal.length; i++)
            if (this.legal[i].x === x && this.legal[i].y === y)
                idx = i;
        
        return idx >= 0;
    }

    /**
     * Get Legal Moves Function
     * 
     * For the Given Position, the function will generate
     * the edges towards the legal positions, given the 
     * knights restricted moves on a chessboard.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    getLegalMoves (x, y) {
        let current = this.graph.getVertex(x, y);
        // Top Moves
        if (y + 2 < this.#BOARD_SIZE) {
            // Check if Top-Right is Legal
            if (x + 1 < this.#BOARD_SIZE) {
                let topRight = this.graph.getVertex(x + 1, y + 2);
                this.graph.insertEdge(current, topRight);
            }
            // Check if Top-Left is Legel
            if (x - 1 >= 0) {
                let topLeft = this.graph.getVertex(x - 1, y + 2);
                this.graph.insertEdge(current, topLeft);
            }
        }
        // Right Moves
        if (x + 2 < this.#BOARD_SIZE) {
            // Check if Right-Top is Legal
            if (y + 1 < this.#BOARD_SIZE) {
                let rightTop = this.graph.getVertex(x + 2, y + 1);
                this.graph.insertEdge(current, rightTop);
            }
            // Check if Right-Bottom is Legal
            if (y - 1 >= 0) {
                let rightBottom = this.graph.getVertex(x + 2, y - 1);
                this.graph.insertEdge(current, rightBottom);
            }
        }
        // Bottom Moves
        if (y - 2 >= 0) {
            // Check if Bottom-Right is Legal
            if (x + 1 < this.#BOARD_SIZE) {
                let bottomRight = this.graph.getVertex(x + 1, y - 2);
                this.graph.insertEdge(current, bottomRight);
            }
            // Check if Bottom-Left is Legal
            if (x - 1 >= 0) {
                let bottomLeft = this.graph.getVertex(x - 1, y - 2);
                this.graph.insertEdge(current, bottomLeft);
            }
        }
        // Left Moves
        if (x - 2 >= 0) {
            // Check if Left-Top is Legal
            if (y + 1 < this.#BOARD_SIZE) {
                let leftTop = this.graph.getVertex(x - 2, y + 1);
                this.graph.insertEdge(current, leftTop);
            }
            // Check if Left-Bottom is Legal
            if (y - 1 >= 0) {
                let leftBottom = this.graph.getVertex(x - 2, y - 1);
                this.graph.insertEdge(current, leftBottom);
            }
        }
    }
}