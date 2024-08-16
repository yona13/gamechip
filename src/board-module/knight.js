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
     * or by the Moving Algorithm.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @param {number} size Chessboard Size
     * @param {Array} tiles Array of Chessboard Tiles
     */
    constructor (x, y, size, tiles) {
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
        this.tiles = tiles;

        // Generate Graph for Tiles
        this.graph = new Graph();
        this.tiles.forEach(tile => {
            this.graph.insertVertex(tile.x, tile.y);
        });
        this.getLegalMoves(this.x, this.y);
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get tiles () { return this._tiles; }

    set tiles (arr) { this._tiles = arr; }

    get graph () { return this._graph; }

    set graph (graph) { this._graph = graph; }

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
        for (let edge of this.graph.edges())
            this.graph.removeEdge(edge);
        // for (let edge of this.graph.edges())
        //     console.log(edge);
        this.getLegalMoves(x, y);
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
        let current = this.graph.getVertex(x, y);
        let desired = this.graph.getVertex(x, y);

        return this.graph.getEdge(current, desired) !== null;
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