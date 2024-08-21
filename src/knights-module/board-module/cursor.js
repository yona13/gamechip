import Tile from "./tile";

export default class Cursor {
    #BOARD;

    /**
     * Cursor Class
     * 
     * Class that is used by the User to navigate through
     * the Chessboard and select a Tile whereby they want
     * the Knight to land.
     * 
     * @param {Tile} tile Current Tile
     * @param {number} board Chessboard Size
     * @param {Array} tiles Array of Chessboard Tiles
     */
    constructor (tile, board, tiles) {
        // Initialise Variables
        this._tile = tile;
        this._tiles = tiles;
        this.#BOARD = board;
    }

    get tile () { return this._tile; }

    set tile (tile) { this._tile = tile; }

    get tiles () { return this._tiles; }

    set tiles (arr) { this._tiles = arr; }

    /**
     * Vertical Move Function
     * 
     * Move the Cursor Vertically around the Board.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) {
        // Ensure Vertical Move is still on Board
        const curr = this._tile.x + (up ? 1 : -1);
        if (curr < this.#BOARD && curr >= 0) {
            // Remove Cursor from Tile
            this._tile.placeCursor(false);

            // Iterate and Find New Tile for Cursor
            this._tiles.forEach(tile => {
                if (tile.y === this._tile.y && tile.x === curr)
                    this._tile = tile;
            });

            // Place Cursor on Tile
            this._tile.placeCursor(true);
        }
    }

    /**
     * Horizontal Move Function
     * 
     * Move the Cursor Horizontally around the Board.
     * 
     * @param {boolean} right Default Action is Rightwards
     */
    horizontalMove (right=true) {
        // Ensure Horizontal Move is still on Board
        const curr = this._tile.y + (right ? 1 : -1);
        if (curr < this.#BOARD && curr >= 0) {
            // Remove Cursor from Tile
            this._tile.placeCursor(false);

            // Iterate and Find New Tile for Cursor
            this._tiles.forEach(tile => {
                if (tile.y === curr && tile.x === this._tile.x)
                    this._tile = tile;
            });

            // Place Cursor on Tile
            this._tile.placeCursor(true);
        }
    }
}