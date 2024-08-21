import "./board-styling.css";
import Knight from "./knight.js";
import Tile from "./tile.js";

export default class Board {
    #BOARD = 8;
    #DEFAULT_POS = {x: 3, y:3};

    constructor () {
        // Construct the Board DOM Element
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
            }
        });
        this._previous = [];
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get knight () { return this._knight; }

    set knight (obj) { this._knight = obj; }

    /**
     * Set Dimensions Function
     * 
     * For the Board, the width and height are dependent on
     * the scrreen size.
     * 
     * @param {number} width Screen Width
     * @param {number} height Screen Height
     */
    setDimensions (width, height) {
        // Set Board Dimensions
        const dim = Math.floor(Math.min(width, height) * 0.95);
        console.log(`Width: ${width}px;\nHeight: ${height}px;\nMin: ${dim}px;`);
        this._module.style.width = `${dim}px`;
        this._module.style.height = `${dim}px`;

        // Set Tile Dimensions
        const tileDim = Math.floor(dim / this.#BOARD);
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
}