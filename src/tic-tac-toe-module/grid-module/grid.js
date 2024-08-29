import Cell from "./cell";

export default class Grid {
    #GRID = 3;
    #DEFAULT_POS = {x: 1, y: 2};

    /**
     * Grid Class
     * 
     * Tic-Tac-Toe Grid that is responsible for setting up all Cells and the
     * control of those Cells.
     */
    constructor () {
        // Build the Grid DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("tic-tac-toe-grid");

        // Add Grid Template Areas to the Grid DOM Element
        let template = "";
        for (let i = this.#GRID - 1; i >= 0; i--) {
            for (let j = 0; j < this.#GRID; j++) {
                if (j === 0)
                    template += `"cell-${i}${j} `;
                else if (j === this.#GRID - 1)
                    template += `cell-${i}${j}"${i === 0 ? "" : " "}`;
                else
                    template += `cell-${i}${j} `;
            }
        }
        this._module.style.setProperty("grid-template-ares", template);

        // Initialise Cells
        this._cells = [];
        for (let i = 0; i < this.#GRID; i++) {
            for (let j = 0; j < this.#GRID; j++) {
                const cell = new Cell(i, j);
                this._cells.push(cell);
                this._module.appendChild(cell.element);

                // Place Cursor on Default Initial Cursor
                if (cell.x === this.#DEFAULT_POS.x && cell.y === this.#DEFAULT_POS.y)
                    cell.placeCursor();
            }
        }
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }
}