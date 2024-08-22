import Cursor from "./cursor.js";
import Knight from "./knight.js";
import Tile from "./tile.js";

export default class Board {
    #BOARD = 8;
    #DEFAULT_POS = {x: 3, y:3};

    constructor () {
        // Generate the Board DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("chessboard");
        
        // Add Grid Template Areas to the Board DOM Element
        let template = "";
        for (let i = this.#BOARD - 1; i >= 0; i--) {
            for (let j = 0; j < this.#BOARD; j++) {
                if (j === 0)
                    template += `"tile-${i}${j} `
                else if (j === this.#BOARD - 1)
                    template += `tile-${i}${j}"${i === 0 ? "" : " "}`;
                else
                    template += `tile-${i}${j} `
            }
        }
        this._module.style.setProperty("grid-template-areas", template);

        // Initailise Tiles
        this._tiles = [];
        for (let i = 0; i < this.#BOARD; i++) {
            for (let j = 0; j < this.#BOARD; j++) {
                const tile = new Tile(i, j, j % 2 ? (i % 2 ? "black" : "white") : (i % 2 ? "white" : "black"));
                this._tiles.push(tile);
                this._module.appendChild(tile.element);
            }
        }

        // Initialise Variables
        this._knight = new Knight(this.#DEFAULT_POS.x, this.#DEFAULT_POS.y, this.#BOARD, this._tiles);
        this._tiles.forEach(tile => {
            if (tile.x === this.#DEFAULT_POS.x && tile.y === this.#DEFAULT_POS.y) {
                tile.placeKnight(this._knight.element);
                this._current = tile;
                this._cursor = new Cursor(tile, this.#BOARD, this._tiles);
            }
        });
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get knight () { return this._knight; }

    set knight (obj) { this._knight = obj; }

    get cursor () { return this._cursor; }

    set cursor (obj) { this._cursor = obj; }

    /**
     * Set Dimensions Function
     * 
     * For the Board, the width and height are dependent on
     * the scrreen size.
     * 
     * @param {number} dimension Board Size (pixels)
     */
    setDimensions (dimension) {
        // Set Board Dimensions
        this._module.style.width = `${dimension}px`;
        this._module.style.height = `${dimension}px`;

        // Set Tile Dimensions
        const tileDim = Math.floor(dimension / this.#BOARD);
        const fontSize = Math.floor(tileDim * 0.8);
        this._tiles.forEach(tile => {
            tile.element.style.width = `${tileDim}px`;
            tile.element.style.height = `${tileDim}px`;
            tile.element.style.fontSize = `${fontSize}px`;
        });

        // Set Knight Dimensions
        this._knight.icon.style.width = `${tileDim}px`;
        this._knight.icon.style.height = `${tileDim}px`;
    }

    /**
     * Set Theme Function
     * 
     * Update the Knight's Icon.
     * 
     * @param {string} theme Theme Name
     */
    setTheme (theme) { this._knight.changeIcon(theme); }
}