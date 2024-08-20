import "../css/board.css";
import Knight from "./knight.js";
import Tile from "./tile.js";

export default class Board {
    /**
     * Board Class
     * 
     * Base Class for the Chessboard Class. This class is
     * responsible for setting up the DOM elements, such as
     * the Chessboard, the Tiles, and the Knight. Resulting
     * from setting up the Tiles and Knight, this class is
     * also manages those variables.
     * 
     * @param {number} x Initial X-Coordinate
     * @param {number} y Initial Y-Coordinate
     * @param {number} board Board Size
     */
    constructor (x, y, board) {
        // Initialise Board Size
        this.size = board;
        
        // Construct the Board DOM Element
        this.module = document.createElement("div");
        this.module.classList.add("chessboard");
        
        // Add Grid Template Areas to the Board DOM Element
        let template = "";
        for (let i = this.size - 1; i >= 0; i--) {
            for (let j = 0; j < this.size; j++) {
                if (j === 0)
                    template += `"tile-${i}${j} `
                else if (j === this.size - 1)
                    template += `tile-${i}${j}"${i === 0 ? "" : " "}`;
                else
                    template += `tile-${i}${j} `
            }
        }
        this.module.style.setProperty(
            "grid-template-areas", template
        );

        // Initailise Tiles
        this.tiles = [];
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                const tile = new Tile(i, j, j % 2 ? (i % 2 ? "black" : "white") : (i % 2 ? "white" : "black"));
                this.tiles.push(tile);
                this.module.appendChild(tile.element);
            }
        }

        // Initialise Variables
        this.knight = new Knight(x, y, board, this.tiles);
        this.tiles.forEach(tile => {
            if (tile.x === x && tile.y === y) {
                tile.placeKnight(this.knight.element);
                this.current = tile;
            }
        });
        this.previous = [];
    }

    get size () { return this._size; }

    set size (num) { this._size = num; }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get tiles () { return this._tiles; }

    set tiles (arr) { this._tiles = arr; }

    get current () { return this._current; }

    set current (tile) { this._current = tile; }

    get previous () { return this._previous; }

    set previous (arr) { this._previous = arr; }

    get knight () { return this._knight; }

    set knight (obj) { this._knight = obj; }

    /**
     * Rebuild Function
     * 
     * For a newly selected Board Size by the User, the 
     * Board must update the Tiles and Knight Classes to
     * reflect the change in Board Size.
     * 
     * @param {number} size New Board Size
     */
    rebuild (size) {
        // Update only if Boardsize has been Changed
        if (this.size !== size) {
            // Empty Module
            this.module.innerHTML = "";

            // Reset Board Size
            this.size = size;
            
            // Add Grid Template Areas to the Board DOM Element
            let template = "";
            for (let i = this.size - 1; i >= 0; i--) {
                for (let j = 0; j < this.size; j++) {
                    if (j === 0)
                        template += `"tile-${i}${j} `
                    else if (j === this.size - 1)
                        template += `tile-${i}${j}"${i === 0 ? "" : " "}`;
                    else
                        template += `tile-${i}${j} `
                }
            }
            this.module.style.setProperty(
                "grid-template-areas", template
            );

            // Reset Tiles
            this.tiles = [];
            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    const tile = new Tile(i, j, j % 2 ? (i % 2 ? "black" : "white") : (i % 2 ? "white" : "black"));
                    this.tiles.push(tile);
                    this.module.appendChild(tile.element);
                }
            }
            
            // Reset Knight
            let coord = Math.floor(this.size / 2);
            this.knight.updateBoard(size, this.tiles);
            this.tiles.forEach(tile => {
                if (tile.x === coord && tile.y === coord) {
                    tile.placeKnight(this.knight.element);
                    this.current = tile;
                }
            });
        }
    }
}