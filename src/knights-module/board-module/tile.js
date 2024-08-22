export default class Tile {
    /**
     * Tile Class
     * 
     * Chess Board Tile Element.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @param {string} colour "black" or "white"
     */
    constructor (x, y, colour="white") {
        // Generate Tile DOM Element
        this._element = document.createElement("div");
        this._element.classList.add(`${colour}-tile`);
        this._element.id = `${x}-${y}-tile`;
        this._element.style.setProperty(
            "grid-area", `tile-${x}${y}`
        );

        // Initialise Variables
        this._x = x;
        this._y = y;
        this._move = 0;
        this._colour = colour;
        this._active = false;
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get move () { return this._move; }

    set move (num) { this._move = num; }

    get colour () { return this._colour; }

    set colour (str) { this._colour = str; }

    get active () { return this._active; }

    set active (bool) { this._active = bool; }

    /**
     * Remove Knight Function
     * 
     * Removes the Knight DOM Element from the tile.
     */
    removeKnight () { 
        this._element.innerHTML = ""; 
        if (this._active && this._move > 0)
            this._element.textContent = this._move;
    }

    /**
     * Place Knight Function
     * 
     * Appends the Knight DOM Element to the tile.
     * 
     * @param {*} elem Knight DOM Element
     */
    placeKnight (elem) {
        this._element.appendChild(elem);
        this.highlight();
    }

    /**
     * Place Cursor
     * 
     * Place or Remove the Cursor on the tile.
     * 
     * @param {boolean} on Place or Remove
     */
    placeCursor (on=true) {
        if (on && !this._element.classList.contains("cursor"))
            this._element.classList.add("cursor");
        if (!on && this._element.classList.contains("cursor"))
            this._element.classList.remove("cursor");
    }

    /**
     * Number Function
     * 
     * Number the Tile with a Desired Number.
     * 
     * @param {number} num Number for Tile
     */
    number (num) { 
        this._move = num;
        this._element.textContent = num; 
    }

    /**
     * Highlight Function
     * 
     * Highlights the tile when if the tile is active and
     * if the knight lands on the tile.
     */
    highlight () {
        if (this._active && !this._element.classList.contains("selected"))
            this._element.classList.add("selected");
    }

    /**
     * Toggle Function
     * 
     * Sets the active variable to be on or off, depending
     * on whether or not there is a puzzle that the user is
     * currently completing.
     */
    toggle () { this._active = !this._active; }

    /**
     * Reset Function
     * 
     * Removes any instance of the Tile being highlighted.
     */
    reset () {
        if (this._element.classList.contains("selected")) {
            this._element.classList.remove("selected");
            this._element.textContent = "";
            this._move = 0;
        }
    }
}