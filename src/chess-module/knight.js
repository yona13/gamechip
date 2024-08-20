import Graph from "../data-structure/graph.js";
import Icon from "../images/knight.png";

export default class Knight {
    #BOARD_SIZE;

    /**
     * Knight Class
     * 
     * Class that Generates the DOM element that represents
     * the Knight Object, and also controls the Knight as 
     * it moves across the Chessboard, either by the User
     * or by the Search Algorithm.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @param {number} board Chessboard Size
     * @param {Array} tiles Array of Chessboard Tiles
     */
    constructor (x, y, board, tiles) {
        // Create DOM Element
        this.element = document.createElement("div");
        const icon = new Image();
        icon.src= Icon;
        this.element.appendChild(icon);
        this.element.classList.add("knight");

        // Initialise Variables
        this.x = x;
        this.y = y;
        this.#BOARD_SIZE = board;
        this.tiles = tiles;
        this.legal = [];
        this.path = [];

        // Generate Graph for Tiles
        this.graph = new Graph();
        this.fill();
        this.currentLegalMoves();
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

    set path (arr) { this._path = arr; }

    get steps () { return this._steps; }

    set steps (num) { this._steps = num; }

    /**
     * Prime Function
     * 
     * Prime the Knight for a Fair Traversal.
     */
    prime () {
        for (let vertex of this.graph.vertices())
            vertex.visited = false;
    }

    /**
     * Update Board Function
     * 
     * For a newly selected Board Size by the User, the 
     * Knight's variables must also be updated.
     * 
     * @param {number} size New Board Size
     * @param {Array} tiles Array of Tiles
     */
    updateBoard (size, tiles) {
        // Reset Graph
        this.graph.clearEdges();
        this.graph.clearVertices();

        // Update Variables
        this.#BOARD_SIZE = size;
        this.tiles = tiles;

        // Fill Graph and update Legal Moves
        this.fill();
        this.currentLegalMoves();
    }

    /**
     * Set Path Function
     * 
     * Assign new Path for the Knight to Traverse through.
     * 
     * @param {Array} path Path for Knight 
     */
    setPath (path) { this.path = path; }

    /**
     * Prompt Function
     * 
     * Using an Interval, the function will iterate through
     * the Path Generated to make the Knight Traverse the
     * Chessboard.
     * 
     * @callback moveCallback Move Knight Callback
     * @param {boolean} tour True if Knight's Tour
     */
    prompt (moveCallback, tour=false) {
        // // First Vertex is the Current Position
        this.steps = this.path.length;
        var aux = [...this.path];

        // For tours, first Vertex is Initial Position
        if (tour)
            aux.splice(0, 1);

        // Every Second, Knight executes the next move
        var x = setInterval(function () {
            let vertex;

            // Tours are stored from the Front of Array
            if (tour) {
                vertex = aux[0];
                aux.splice(0, 1);
            } 
            // Shortest Path are stored from Back of Array
            else 
                vertex = aux.pop();

            // Step Forward
            moveCallback(vertex.x, vertex.y);
            if (aux.length === 0)
                clearInterval(x);
        }, 1000);
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
        // Add a Vertex for each Tile
        this.tiles.forEach(tile => {
            this.graph.insertVertex(tile.x, tile.y);
        });

        // Add an Edge for Traversing with Knight
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
     * Been Visited Function
     * 
     * Checks if Vertex has been Visited, updating it if it
     * has not been.
     * 
     * @param {number} x Vertex X-Coordinate
     * @param {number} y Vertex Y-Coordinate
     * @returns True if Vertex has been Visited
     */
    beenVisited (x, y) {
        // Get Vertex from Graph
        let vertex = this.graph.getVertex(x, y);

        // Return True if it has been Visited
        if (vertex.visited) 
            return true;
        
        // Else, set Visited to be True and Return False
        vertex.visited = true;
        return false;
    }

    /**
     * End of Tour Function
     * 
     * Checks if the Current Tile is the Final Tile in the
     * Knight's Tour.
     * 
     * @param {number} x Current X-Coordinate
     * @param {number} y Current Y-Coordinate
     * @returns True if Current Tile is Last Tile in Tour
     */
    endOfTour (x, y) { return this.graph.getVertex(x, y).move === Math.pow(this.#BOARD_SIZE, 2); }

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