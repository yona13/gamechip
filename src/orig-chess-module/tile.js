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
        // Create DOM Element
        this.element = document.createElement("div");
        this.element.classList.add(`${colour}-tile`);
        this.element.id = `${x}-${y}-tile`;
        this.element.style.setProperty(
            "grid-area", `tile-${x}${y}`
        );

        // Initialise Variables
        this.x = x;
        this.y = y;
        this.move = 0;
        this.colour = colour;
        this.active = false;
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
        this.element.innerHTML = ""; 
        if (this.active && this.move > 0)
            this.element.textContent = this.move;
    }

    /**
     * Place Knight Function
     * 
     * Appends the Knight DOM Element to the tile.
     * 
     * @param {*} elem Knight DOM Element
     */
    placeKnight (elem) {
        this.element.appendChild(elem);
        this.highlight();
    }

    /**
     * Number Function
     * 
     * Number the Tile with a Desired Number.
     * 
     * @param {number} num Number for Tile
     */
    number (num) { 
        this.move = num;
        this.element.textContent = num; 
    }

    /**
     * Highlight Function
     * 
     * Highlights the tile when if the tile is active and
     * if the knight lands on the tile.
     */
    highlight () {
        if (this.active && !this.element.classList.contains("selected"))
            this.element.classList.add("selected");
    }

    /**
     * Toggle Function
     * 
     * Sets the active variable to be on or off, depending
     * on whether or not there is a puzzle that the user is
     * currently completing.
     */
    toggle () { this.active = !this.active; }

    /**
     * Reset Function
     * 
     * Removes any instance of the Tile being highlighted.
     */
    reset () {
        if (this.element.classList.contains("selected")) {
            this.element.classList.remove("selected");
            this.element.textContent = "";
            this.move = 0;
        }
    }

    /**
     * Set Click Event Listener Function
     * 
     * With the Callback Parameter, this function will set
     * the Click Event Listener to the Tile DOM element so
     * that it will highlight the tile, if active, and also
     * complete the desired task for the Tile.
     * 
     * @callback callback Click Tile Callback
     */
    setClickEventListener (callback) {
        this.element.addEventListener("click", (e) => {
            this.highlight();
            callback(this.x, this.y);
        });
    }
}