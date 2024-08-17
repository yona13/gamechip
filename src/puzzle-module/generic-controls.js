export default class GenericControls {
    /**
     * Generic Controls Class
     * 
     * Used as a Base Class, this class will generate the 
     * DOM Elements associated with the controllers that 
     * include the User Attempt button, and the Controller
     * Algorithm button, which is represented by the Show
     * Button.
     * 
     * @param {Array} names Array of Strings
     * @param {number} x Initial X-Coordinate
     * @param {number} y Initial Y-Coordinate
     * @param {number} board Board Size
     */
    constructor (names, x, y, board) {
        // Create Module DOM Element
        this.module = document.createElement("div");
        this.module.classList.add(`${names[0].toLowerCase()}-${names[1].toLowerCase()}-buttons`);

        // Create Title DOM Element
        const title = document.createElement("h2");
        title.textContent = `${names[0]} ${names[1]}`;

        // Create Attempt Button DOM Element
        this.attempt = document.createElement("button");
        this.attempt.classList.add(`attempt-${names[0].toLowerCase()}-${names[1].toLowerCase()}-btn`);
        this.attempt.textContent = "Attempt";

        // Create Show Button DOM Element
        this.show = document.createElement("button");
        this.show.classList.add(`prompt-${names[0].toLowerCase()}-${names[1].toLowerCase()}-btn`);
        this.show.textContent = "Show";

        // Append Element into Module
        this.module.appendChild(title);
        this.module.appendChild(this.attempt);
        this.module.appendChild(this.show);

        // Initialise Variables
        this.x = x;
        this.y = y;
        this.size = board;
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get attempt () { return this._attempt; }

    set attempt (elem) { this._attempt = elem; }

    get show () { return this._show; }

    set show (elem) { this._show = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get size () { return this._size; }

    set size (board) { this._size = board; }
}