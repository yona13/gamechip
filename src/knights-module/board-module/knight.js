import Graph from "../../data-structures/graph.js";
import KnightNormal from "../images/knight.png";
import KnightRetro from "../images/knight-retro.png";
import KnightFuture from "../images/knight-future.png";
import KnightNeon from "../images/knight-neon.png";
import KnightTerminal from "../images/knight-terminal.png";
import KnightFantasy from "../images/knight-fantasy.png";

export default class Knight {
    #BOARD;
    #THEMES = {
        "normal": KnightNormal,
        "retro": KnightRetro,
        "future": KnightFuture,
        "neon": KnightNeon,
        "terminal": KnightTerminal,
        "fantasy": KnightFantasy,
    };

    /**
     * Knight Class
     * 
     * Class that Generates the DOM element that represents the Knight Object, 
     * and also controls the Knight as it moves across the Chessboard, either 
     * by the User or by the Search Algorithm.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @param {number} board Chessboard Size
     * @param {Array} tiles Array of Chessboard Tiles
     */
    constructor (x, y, board, tiles) {
        // Generate Knight DOM Element
        this._element = document.createElement("div");
        this._icon = new Image();
        this._icon.src= KnightNormal;
        this._element.appendChild(this._icon);
        this._element.classList.add("knight");

        // Initialise Variables
        this._x = x;
        this._y = y;
        this.#BOARD = board;
        this._tiles = tiles;
        this._legal = [];
        this._path = [];

        // Generate Graph for Tiles
        this._graph = new Graph();
        this.fill();
        this.currentLegalMoves();
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get icon () { return this._icon; }

    set icon (img) { this._icon = img; }

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
     * Set Icon Method
     * 
     * Set the New Icon for the given Theme.
     * 
     * @param {string} theme New Theme
     */
    setIcon (theme) {
        // Ensure Theme Exists
        if (Object.keys(this.#THEMES).includes(theme)) {
            // Replace Icon
            this._element.innerHTML = "";
            this._icon.src = this.#THEMES[theme];
            this._element.appendChild(this._icon);
        }
    }

    /**
     * Fill Method
     * 
     * Based on the Legal Moves that a Knight can make on a Chessboard, this 
     * method will fill up the graph with edges that correspond to the legal 
     * movements a knight can make at each square on the board.
     */
    fill () {
        // Add a Vertex for each Tile
        this._tiles.forEach(tile => {
            this._graph.insertVertex(tile.x, tile.y);
        });

        // Add an Edge for Traversing with Knight
        for (let x = 0; x < this.#BOARD; x++)
            for (let y = 0; y < this.#BOARD; y++)
                this.getLegalMoves(x, y);
    }

    /**
     * Current Legal Moves Method
     * 
     * For the current position the knight is in on the Chessboard, this method 
     * will fill up the legal moves array with the currently available legal 
     * moves.
     */
    currentLegalMoves () {
        // Get Vertex for Current Location from Graph
        const current = this._graph.getVertex(this.x, this.y);

        // Iterate through Neighbours, adding them to Legal Moves Array
        for (let i = 0; i < current.neighbours.length; i++)
            this._legal.push(current.neighbours[i]);
    }

    /**
     * Update Method
     * 
     * Update the Position of the Knight, and retrieve new legal moves.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    update (x, y) {
        this._x = x;
        this._y = y;
        this._legal = [];
        this.currentLegalMoves();
    }

    /**
     * Is Legal Method
     * 
     * Checks if the Move selected is a legal one, given the restrictions of the
     * Knight's movement on a chessboard.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @returns True if Move is Legal
     */
    isLegal (x, y) {
        // Find if Coordinate is a Legal Vertex
        let idx = -1;
        for (let i = 0; i < this._legal.length; i++)
            // Check if Coordinate Matches Legal Vertex
            if (this._legal[i].x === x && this._legal[i].y === y)
                idx = i;
        
        return idx >= 0;
    }

    /**
     * Get Legal Moves Method
     * 
     * For the Given Position, the method will generate the edges towards the 
     * legal positions, given the knights restricted moves on a chessboard.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    getLegalMoves (x, y) {
        let current = this._graph.getVertex(x, y);
        // Top Moves
        if (y + 2 < this.#BOARD) {
            // Check if Top-Right is Legal
            if (x + 1 < this.#BOARD) {
                let topRight = this._graph.getVertex(x + 1, y + 2);
                this._graph.insertEdge(current, topRight);
            }
            // Check if Top-Left is Legel
            if (x - 1 >= 0) {
                let topLeft = this._graph.getVertex(x - 1, y + 2);
                this._graph.insertEdge(current, topLeft);
            }
        }
        // Right Moves
        if (x + 2 < this.#BOARD) {
            // Check if Right-Top is Legal
            if (y + 1 < this.#BOARD) {
                let rightTop = this._graph.getVertex(x + 2, y + 1);
                this._graph.insertEdge(current, rightTop);
            }
            // Check if Right-Bottom is Legal
            if (y - 1 >= 0) {
                let rightBottom = this._graph.getVertex(x + 2, y - 1);
                this._graph.insertEdge(current, rightBottom);
            }
        }
        // Bottom Moves
        if (y - 2 >= 0) {
            // Check if Bottom-Right is Legal
            if (x + 1 < this.#BOARD) {
                let bottomRight = this._graph.getVertex(x + 1, y - 2);
                this._graph.insertEdge(current, bottomRight);
            }
            // Check if Bottom-Left is Legal
            if (x - 1 >= 0) {
                let bottomLeft = this._graph.getVertex(x - 1, y - 2);
                this._graph.insertEdge(current, bottomLeft);
            }
        }
        // Left Moves
        if (x - 2 >= 0) {
            // Check if Left-Top is Legal
            if (y + 1 < this.#BOARD) {
                let leftTop = this._graph.getVertex(x - 2, y + 1);
                this._graph.insertEdge(current, leftTop);
            }
            // Check if Left-Bottom is Legal
            if (y - 1 >= 0) {
                let leftBottom = this._graph.getVertex(x - 2, y - 1);
                this._graph.insertEdge(current, leftBottom);
            }
        }
    }
}