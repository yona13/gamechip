export default class Cell {
    /**
     * Cell Class
     * 
     * Tic-Tac-Toe Cell Element.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    constructor (x, y) {
        // Build Cell DOM Element
        this._element = document.createElement("div");
        this._element.classList.add("cell");
        this._element.id = `${x}-${y}-cell`;
        this._element.style.setProperty(
            "grid-area", `cell-${x}${y}`
        );

        // Build Cursor DOM Element
        this._cursor = document.createElement("div");
        this._cursor.id = "cursor-cell";

        // Build Nought DOM Element
        this._nought = document.createElement("div");
        this._nought.id = `nought-${x}-${y}`;

        // Build Cross DOM Element
        this._cross = document.createElement("div");
        this._cross.id = `cross-${x}-${y}`;

        // Initialise Variables
        this._x = x;
        this._y = y;
        this._pointer = false;
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get cursor () { return this._cursor; }

    set cursor (elem) { this._cursor = elem; }

    get nought () { return this._nought; }

    set nought (elem) { this._nought = elem; }

    get cross () { return this._cross; }

    set cross (elem) { this._cross = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get pointer () { return this._pointer; }

    set pointer (bool) { this._pointer = bool; }

    /**
     * Place Cursor Method
     * 
     * Place or Remove the Cursor on the Cell.
     * 
     * @param {boolean} on Place or Remove
     */
    placeCursor (on=true) {
        // Place Cursor on Cell
        if (on && !this._pointer) {
            this._element.appendChild(this._cursor);
            this._pointer = true;
        }
        // Remove Cursor from Cell
        if (!on && this._pointer) {
            this._element.removeChild(this._cursor);
            this._pointer = false;
        }
    }

    /**
     * Place Nought Method
     * 
     * Place or Remove the Nought in the Cell.
     * 
     * @param {boolean} on Place or Remove
     */
    placeNought (on=true) {
        // Place Nought in Cell
        if (on && !this._element.contains(this._nought)) 
            this._element.appendChild(this._nought);
        // Remove Nought from Cell
        if (!on && this._element.contains(this._nought))
            this._element.removeChild(this._nought);
    }

    /**
     * Place Cross Method
     * 
     * Place or Remove the Cross in the Cell.
     * 
     * @param {boolean} on Place or Remove
     */
    placeCross (on=true) {
        // Place Cross in Cell
        if (on && !this._element.contains(this._cross))
            this._element.appendChild(this._cross);
        // Remove Cross from Cell
        if (!on && this._element.contains(this._cross))
            this._element.removeChild(this._cross);
    }

    /**
     * Reset Method
     * 
     * Removes cursor, nought and cross from cell.
     */
    reset () {
        // Remove Cursor, if needed
        if (this._pointer)
            this.placeCursor(false);

        // Remove Nought
        this.placeNought(false);

        // Remove Cross
        this.placeCross(false);
    }
}