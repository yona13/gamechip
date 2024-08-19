export default class Tile {
    /**
     * Tile Class
     * 
     * Chess Board Tile Element.
     * 
     * @callback clickCallback Click Event Listener
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @param {string} colour "black" or "white"
     */
    constructor (clickCallback, x, y, colour="white") {
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
        this.colour = colour;
        this.highlight = false;
        this.knighted = false;

        this.element.addEventListener("click", (e) => {
            clickCallback(x, y);
            this.highlightTile();
        });
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get colour () { return this._colour; }

    set colour (str) { this._colour = str; }

    get highlight () { return this._highlight; }

    set highlight (bool) { this._highlight = bool; }

    get knighted () { return this._knighted; }

    set knighted (bool) { this._knighted = bool; }

    /**
     * Remove Knight Function
     * 
     * Removes the Knight DOM Element from the tile.
     */
    removeKnight () {
        this.element.innerHTML = "";
        this.knighted = false;
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
        this.knighted = true;
        if (!this.element.classList.contains("selected") && this.highlight)
            this.element.classList.add("selected");
    }

    highlightTile () {
        if (!this.element.classList.contains("selected") && this.highlight)
            this.element.classList.add("selected");
    }

    /**
     * Set Highlight Function
     * 
     * Update Highlight Variable to allow tile class to
     * highlight the tile when selected, or not.
     */
    setHighlight () { this.highlight = !this.highlight; }

    /**
     * Reset Function
     * 
     * Removes any instance of the Tile being selected.
     */
    reset () {
        if (this.element.classList.contains("selected"))
            this.element.classList.remove("selected");
    }
}