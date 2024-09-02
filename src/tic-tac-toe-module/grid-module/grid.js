import "./grid-styling.css";
import Cell from "./cell.js";

export default class Grid {
    #GRID;
    #DEFAULT_POS = {x: 1, y: 1};

    /**
     * Grid Class
     * 
     * Tic-Tac-Toe Grid that is responsible for setting up all Cells and the
     * control of those Cells.
     */
    constructor (size) {
        // Build the Grid DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("tic-tac-toe-grid");

        // Add Grid Template Areas to the Grid DOM Element
        this.#GRID = size;
        let template = "";
        for (let i = 0; i < this.#GRID; i++) {
        // for (let i = this.#GRID - 1; i >= 0; i--) {
            for (let j = 0; j < this.#GRID; j++) {
                if (j === 0)
                    template += `"cell-${j}${i} `;
                else if (j === this.#GRID - 1)
                    template += `cell-${j}${i}"${i === 0 ? "" : " "}`;
                else
                    template += `cell-${j}${i} `;
            }
        }
        this._module.style.setProperty("grid-template-areas", template);

        // Initialise Cells
        this._cells = [];
        for (let i = 0; i < this.#GRID; i++) {
            for (let j = 0; j < this.#GRID; j++) {
                const cell = new Cell(j, i);
                this._cells.push(cell);
                this._module.appendChild(cell.element);

                // Place Cursor on Default Initial Cursor
                if (cell.x === this.#DEFAULT_POS.x && cell.y === this.#DEFAULT_POS.y) {
                    this._current = cell;
                    cell.placeCursor();
                }
            }
        }
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get current () { return this._current; }

    set current (cell) { this._current = cell; }

    /**
     * Set Dimensions Method
     * 
     * For the Grid, the Width and Height are dependent on the Screen Size.
     * 
     * @param {number} dimension Grid Size (pixels)
     */
    setDimensions (dimension) {
        // Set Grid Dimensions
        this._module.style.width = `${dimension}px`;
        this._module.style.height = `${dimension}px`;

        // Set Cell Dimensions
        const cellDim = Math.floor(dimension / this.#GRID);
        const fontSize = Math.floor(cellDim * 0.8);
        this._cells.forEach(cell => {
            cell.element.style.width = `${cellDim}px`;
            cell.element.style.height = `${cellDim}px`;
            cell.cursor.style.width = `${cellDim}px`;
            cell.cursor.style.height = `${cellDim}px`;
            cell.nought.style.fontSize = `${fontSize}px`;
            cell.cross.style.fontSize = `${fontSize}px`;
        });
    }

    /**
     * Algorithm Select Method
     * 
     * For the Algorithm's Selected Move, the Grid on Display must Update with
     * the appropriate Value.
     * 
     * @param {Object} move X and Y Coordinates
     * @param {boolean} nought Nought or Cross
     */
    algorithmSelect (move, nought) {
        // Find Cell and Update with Algorithm's Marker
        this._cells.forEach(cell => {
            if (cell.x === move.x && cell.y === move.y)
                nought ? cell.placeNought() : cell.placeCross();
        });
    }

    /**
     * Horizontal Move Method
     * 
     * TODO: Write Description
     * 
     * @param {boolean} right Default Action is Rightwards
     */
    horizontalMove (right=true) {
        // Ensure Horizontal Move is still on Grid
        const curr = this._current.x + (right ? 1 : -1);
        if (curr < this.#GRID && curr >= 0) {
            // Remove Cursor from Cell
            this._current.placeCursor(false);

            // Iterate and Find New Cell for Cursor
            this._cells.forEach(cell => {
                if (cell.x === curr && cell.y === this._current.y)
                    this._current = cell;
            });

            // Place Cursor on Cell
            this._current.placeCursor(true);
        }
    }

    /**
     * Vertical Move Method
     * 
     * TODO: Write Description
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) {
        // Ensure Vertical Move is still on Grid
        const curr = this._current.y + (up ? -1 : 1);
        if (curr < this.#GRID && curr >= 0) {
            // Remove Cursor from Cell
            this._current.placeCursor(false);

            // Iterate and Find New Cell for Cursor
            this._cells.forEach(cell => {
                if (cell.x === this._current.x && cell.y === curr)
                    this._current = cell;
            });

            // Place Cursor on Cell
            this._current.placeCursor(true);
        }
    }

    /**
     * Accept Action Method
     * 
     * TODO: Write Description
     * 
     * @param {boolean} nought Nought or Cross
     * @returns Error Message, if required
     */
    acceptAction (nought) { nought ? this._current.placeNought() : this._current.placeCross(); }

    /**
     * Decline Action Method
     * 
     * TODO: Write Description
     */
    declineAction () { /* TODO: Implement */ }
}