import "../css/board.css";
import Knight from "./knight.js";
import Tile from "./tile.js";

export default class Board {
    #INITIAL_POS;
    #BOARD_SIZE;
    #HIGHLIGHT_MOVES = false;
    #ERROR = false;
    #updateCallback;
    #alertCallback;
    #easeCallback;
    #clearCallback;

    /**
     * Board Class
     * 
     * Builds and Controls all elements within the chess-
     * board.
     * 
     * @param {number} initial Initial Position (x & y)
     * @param {number} board Board Size (x & y)
     * @callback updateCallback Update Message Callback
     * @callback alertCallback Alert Message Callback
     * @callback easeCallback Ease Message Callback
     * @callback clearCallback Clear Message Callback
     */
    constructor (initial, board, updateCallback, alertCallback, easeCallback, clearCallback) {
        // Initialise Parameters
        this.#INITIAL_POS = initial;
        this.#BOARD_SIZE = board;
        this.root = {x: 0, y: 0};
        this.goal = {x: 0, y: 0};
        this.count = 0;
        this.userSelect = false;
        this.start = false;
        
        // Construct the Board
        this.module = document.createElement("div");
        this.module.classList.add("chessboard");

        // Initailise Tiles
        this.tiles = [];
        for (let i = 0; i < this.#BOARD_SIZE; i++) {
            for (let j = 0; j < this.#BOARD_SIZE; j++) {
                const tile = new Tile(this.tileCallback.bind(this), j, i, j % 2 ? (i % 2 ? "black" : "white") : (i % 2 ? "white" : "black"));
                this.tiles.push(tile);
                this.module.appendChild(tile.element);
            }
        }

        // Initialise Knight
        this.knight = new Knight(this.#INITIAL_POS, this.#INITIAL_POS, this.#BOARD_SIZE, this.tiles, this.tileCallback.bind(this));
        this.tiles.forEach(tile => {
            if (tile.x === this.#INITIAL_POS && tile.y === this.#INITIAL_POS) {
                tile.placeKnight(this.knight.element);
                this.current = tile;
            }
        });

        // Setup Callbacks
        this.#updateCallback = updateCallback;
        this.#alertCallback = alertCallback;
        this.#easeCallback = easeCallback;
        this.#clearCallback = clearCallback;
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get tiles () { return this._tiles; }

    set tiles (arr) { this._tiles = arr; }

    get current () { return this._current; }

    set current (tile) { this._current = tile; }

    get root () { return this._root; }

    set root (dict) { this._root = dict; }

    get goal () { return this._goal; }

    set goal (dict) { this._goal = dict; }

    get count () { return this._count; }

    set count (num) { this._count = num; }

    get knight () { return this._knight; }

    set knight (knight) { this._knight = knight; }

    get userSelect () { return this._user_select; }

    set userSelect (bool) { this._user_select = bool; }

    get start () { return this._start; }

    set start (bool) { this._start = bool; }

    /**
     * 
     */
    generateShortestPath () {
        // Clear Display
        this.#clearCallback();

        // Generate Shortest Path
        this.knight.shortestPath(this.goal.x, this.goal.y);

        // Initialise Root and Goal Tiles
        let root;
        let goal;

        // Set Each tile to be Highlightable
        this.tiles.forEach(tile => {
            if (!tile.highlight)
                tile.setHighlight();

            // Identify Root and Goal Tiles
            if (tile.x === this.knight.x && tile.y === this.knight.y)
                root = tile;
            if (tile.x === this.goal.x && tile.y === this.goal.y)
                goal = tile;
        });

        // Initialise Root Variable
        this.root.x = root.x;
        this.root.y = root.y;
        
        // Highlight Root and Goal Tiles
        root.highlightTile();
        goal.highlightTile();

        // Display Goal Tile
        this.#updateCallback(`Goal Tile: (${this.goal.x}, ${this.goal.y});`);

        // Start
        this.start = true;
        this.count = -1;
    }

    /**
     * Reset Callback Function
     * 
     * Used as a parameter for the Get Header Function, 
     * this is a callback function that allows the user to
     * reset the board to the original position.
     */
    resetCallback () {
        // Only Reset Knight's Position if not Initial Position
        if (this.current.x !== this.#INITIAL_POS || this.current.y !== this.#INITIAL_POS) {
            // Update Current Tile
            this.current.removeKnight();
            this.tiles.forEach(tile => {
                if (tile.x === this.#INITIAL_POS && tile.y === this.#INITIAL_POS) {
                    this.current = tile;
                    tile.placeKnight(this.knight.element);
                }
                tile.reset();
            });
            // Update Knight's Current Position
            this.knight.update(this.#INITIAL_POS, this.#INITIAL_POS);

            // Clear Message Display
            this.#clearCallback();
        }

        // Reset Highlighted Tiles
        if (this.#HIGHLIGHT_MOVES) {
            this.tiles.forEach(tile => {
                tile.reset();
            });
        }
    }

    /**
     * Tile Click Callback Function
     * 
     * Used as a parameter for the Tile Class, this is a
     * callback function that allows the tile to update 
     * parents classses.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    tileCallback (x, y) {
        if (this.userSelect) {
            // Update Current Tile
            this.current.removeKnight();
            this.tiles.forEach(tile => {
                if (tile.x === x && tile.y === y) {
                    this.current = tile;
                    tile.placeKnight(this.knight.element);
                }
            });
            // Update Knight's Current Position
            this.knight.update(x, y);

            // Generate Goal Posiiton
            this.userSelect = false;
            this.generateShortestPath();
        } else {
            // Check if Move is Legal
            if (this.knight.isLegal(x, y)) {
                let current = {x: this.knight.x, y: this.knight.y};

                // Update Current Tile
                this.current.removeKnight();
                this.tiles.forEach(tile => {
                    if (tile.x === x && tile.y === y) {
                        this.current = tile;
                        tile.placeKnight(this.knight.element);
                    }
                });
                // Update Knight's Current Position
                this.knight.update(x, y);

                // Ease Alert, if required
                if (this.#ERROR) {
                    this.#ERROR = false;
                    this.#easeCallback();
                }

                // Update Message Display with Current Position
                this.#updateCallback(`Move from (${current.x}, ${current.y}) to (${this.knight.x}, ${this.knight.y});`);
            } 
            // Alert User that Move is Illegal
            else {
                this.#ERROR = true;
                this.#alertCallback("That's an illegal move!");
            }
        }

        if (this.start) {
            this.count++;
            if (this.goal.x === x && this.goal.y === y) {
                this.#updateCallback(
                    `Congratulations for reaching the goal in ${this.count};\n` +
                    `Search Algorithm's Best: ${this.knight.path.length - 1};`
                );
                this.start = false;
            }
        }
    }

    /**
     * Random Location Callback Function
     * 
     * Used by the Random Location Controller to Update the
     * Board and the Knight Classes of the Required Random
     * Location that the User or the Controller Algorithm
     * must Attempt.
     * 
     * @param {number} x Desired X-Coordinate
     * @param {number} y Desired Y-Coordinate
     */
    randomLocationCallback (x, y) {
        // Clear Display
        this.#clearCallback();
        this.#updateCallback(
            "Please Select an Initial Tile for the Knight."
        );

        // Setup Variables
        this.goal.x = x;
        this.goal.y = y;
        this.userSelect = true;
    }

    /**
     * Random Location Start Callback Function
     * 
     * Used by the Random Location Controller to Prompt the
     * Knight on the Chessboard to Execute the Shortest 
     * path from it's Current Position to the Goal Position.
     */
    randomStartCallback () { this.knight.prompt(); }
}