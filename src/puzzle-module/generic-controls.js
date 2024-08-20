export default class GenericControls {
    /**
     * Generic Controls Class
     * 
     * Used as a Base Class, this class will generate the 
     * DOM Elements associated with the controllers that 
     * include the User start button, and the Controller
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

        // Create start Button DOM Element
        this.start = document.createElement("button");
        this.start.classList.add(`start-${names[0].toLowerCase()}-${names[1].toLowerCase()}-btn`);
        this.start.textContent = "Select Start";

        // Create Information Button DOM Element
        this.info = document.createElement("button");
        this.info.classList.add(`info-${names[0].toLowerCase()}-${names[1].toLowerCase()}-btn`);
        this.info.textContent = "Info";

        // Create Undo Button DOM Element
        this.undo = document.createElement("button");
        this.undo.classList.add(`undo-${names[0].toLowerCase()}-${names[1].toLowerCase()}-btn`);
        this.undo.textContent = "Undo";

        // Create Show Button DOM Element
        this.show = document.createElement("button");
        this.show.classList.add(`show-${names[0].toLowerCase()}-${names[1].toLowerCase()}-btn`);
        this.show.textContent = "Show";

        // Append Elements into Module
        this.module.appendChild(title);
        this.module.appendChild(this.start);
        this.module.appendChild(this.info);
        this.module.appendChild(this.undo);
        this.module.appendChild(this.show);

        // Initialise Variables
        this.x = x;
        this.y = y;
        this.size = board;
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get start () { return this._start; }

    set start (elem) { this._start = elem; }

    get info () { return this._info; }

    set info (elem) { this._info = elem; }

    get undo () { return this._undo; }

    set undo (elem) { this._undo = elem; }

    get show () { return this._show; }

    set show (elem) { this._show = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get size () { return this._size; }

    set size (board) { this._size = board; }
}