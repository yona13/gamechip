import "../css/board.css";
import Knight from "./knight.js";
import Tile from "./tile.js";

export default class Board {
    #BOARD_SIZE = 8;
    #INITIAL_POS = 3;
    #HIGHLIGHT_MOVES = false;

    /**
     * Board Class
     * 
     * Builds and Controls all elements within the chess-
     * board.
     */
    constructor () {
        // Construct the Board
        this.module = document.createElement("div");
        this.module.classList.add("chessboard");

        // Initailise Tiles
        this.tiles = [];
        for (let i = 0; i < this.#BOARD_SIZE; i++) {
            for (let j = 0; j < this.#BOARD_SIZE; j++) {
                const tile = new Tile(this.tileCallback.bind(this), j, i, j % 2 ? (i % 2 ? "black" : "white") : (i % 2 ? "white" : "black"));
                this.tiles.push(tile);
                this.module.appendChild(tile.element);
            }
        }

        // Initialise Knight
        this.knight = new Knight(this.#INITIAL_POS, this.#INITIAL_POS, this.#BOARD_SIZE, this.tiles);
        this.tiles.forEach(tile => {
            if (tile.x === this.#INITIAL_POS && tile.y === this.#INITIAL_POS) {
                tile.placeKnight(this.knight.element);
                this.current = tile;
            }
        });
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get tiles () { return this._tiles; }

    set tiles (arr) { this._tiles = arr; }

    get current () { return this._current; }

    set current (tile) { this._current = tile; }

    get knight () { return this._knight; }

    set knight (knight) { this._knight = knight; }

    /**
     * Reset Callback Function
     * 
     * Used as a parameter for the Get Header Function, 
     * this is a callback function that allows the user to
     * reset the board to the original position.
     */
    resetCallback () {
        // Only Reset Knight's Position if not Initial Position
        if (this.current.x !== this.#INITIAL_POS || this.current.y !== this.#INITIAL_POS) {
            // Update Current Tile
            this.current.removeKnight();
            this.tiles.forEach(tile => {
                if (tile.x === this.#INITIAL_POS && tile.y === this.#INITIAL_POS) {
                    this.current = tile;
                    tile.placeKnight(this.knight.element);
                }
            });
            // Update Knight's Current Position
            this.knight.update(this.#INITIAL_POS, this.#INITIAL_POS);
        }

        // Reset Highlighted Tiles
        if (this.#HIGHLIGHT_MOVES) {
            this.tiles.forEach(tile => {
                tile.reset();
            });
        }
    }

    /**
     * Tile Click Callback Function
     * 
     * Used as a parameter for the Tile Class, this is a
     * callback function that allows the tile to update 
     * parents classses.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    tileCallback (x, y) {
        // Check if Move is Legal
        if (this.knight.isLegal(x, y)) {
            // Update Current Tile
            this.current.removeKnight();
            this.tiles.forEach(tile => {
                if (tile.x === x && tile.y === y) {
                    this.current = tile;
                    tile.placeKnight(this.knight.element);
                }
            });
            // Update Knight's Current Position
            this.knight.update(x, y);
        } 
        // Alert User that Move is Illegal
        else {
            // TODO: Improve this
            window.alert("That's an illegal move!");
        }
    }
}