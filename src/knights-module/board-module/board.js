import "./board-styling.css";
import Knight from "./knight.js";
import Tile from "./tile.js";

export default class Board {
    #BOARD = 8;
    #DEFAULT_POS = {x: 3, y:3};
    #completeCallback;

    /**
     * Board Class
     * 
     * Chessboard Class that is responsible for setting up all Tiles and the 
     * Knight, in addition to managing the controls for the the Knight.
     * 
     * @callback completeCallback Puzzle Complete Callback
     */
    constructor (completeCallback) {
        // Generate the Board DOM Element
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
                const tile = new Tile(
                    i, 
                    j, 
                    j % 2 ? (
                        i % 2 ? "black" : "white"
                    ) : (
                        i % 2 ? "white" : "black"
                    )
                );
                this._tiles.push(tile);
                this._module.appendChild(tile.element);
            }
        }

        // Initialise Knight
        this._knight = new Knight(
            this.#DEFAULT_POS.x, 
            this.#DEFAULT_POS.y, this.#BOARD, 
            this._tiles
        );

        // Place Knight and Cursor on Initial Tile
        this._tiles.forEach(tile => {
            if (
                tile.x === this.#DEFAULT_POS.x && 
                tile.y === this.#DEFAULT_POS.y
            ) {
                tile.placeKnight(this._knight.element);
                this._current = tile;
                this._current.placeCursor();
            }
        });

        // Initialise Callback and Variables
        this.#completeCallback = completeCallback;
        this._previous = [];
        this._initialise = false;
        this._puzzling = false;
        this._algorithm = false;
        this._goal = {x: -1, y: -1};
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get knight () { return this._knight; }

    set knight (obj) { this._knight = obj; }

    get previous () { return this._previous; }

    set previous (arr) { this._previous = arr; }

    get puzzling () { return this._puzzling; }

    set puzzling (bool) { this._puzzling = bool; }

    get goal () { return this._goal; }

    set goal (dict) { this._goal = dict; }

    /**
     * Get Root Method
     * 
     * Returns the Selected Root Position of the Knight for the Puzzle.
     * 
     * @returns Root Position
     */
    getRoot () { return { x: this._knight.x, y: this._knight.y }; }

    /**
     * Get Graph Method
     * 
     * Returns the Graph Generated by the Knight connecting all the Tiles to 
     * each other by the legally allowed moves of the Knight.
     * 
     * @returns Graph of Chessboard
     */
    getGraph () { return this._knight.graph; }

    /**
     * Set Dimensions Method
     * 
     * For the Board, the width and height are dependent on the screen size.
     * 
     * @param {number} dimension Board Size (pixels)
     */
    setDimensions (dimension) {
        // Set Board Dimensions
        this._module.style.width = `${dimension}px`;
        this._module.style.height = `${dimension}px`;

        // Set Tile Dimensions
        const tileDim = Math.floor(dimension / this.#BOARD);
        const fontSize = Math.floor(tileDim * 0.8);
        this._tiles.forEach(tile => {
            tile.element.style.width = `${tileDim}px`;
            tile.element.style.height = `${tileDim}px`;
            tile.element.style.fontSize = `${fontSize}px`;
            tile.cursor.style.width = `${tileDim}px`;
            tile.cursor.style.height = `${tileDim}px`;
        });

        // Set Knight Dimensions
        this._knight.icon.style.width = `${tileDim}px`;
        this._knight.icon.style.height = `${tileDim}px`;
    }

    /**
     * Set Theme Method
     * 
     * Update the Knight's Icon.
     * 
     * @param {string} theme Theme Name
     */
    setTheme (theme) { this._knight.changeIcon(theme); }

    /**
     * Set Goal Method
     * 
     * Set Goal Tile for Shortest Path Puzzle.
     * 
     * @param {number} x Goal X-Position
     * @param {number} y Goal Y-Position
     */
    setGoal (x, y) {
        // Find Goal Tile
        let aux;
        this._tiles.forEach(tile => {
            if (tile.x === x && tile.y === y)
                aux = tile;
        });

        // Set Goal Variable
        this._goal.x = x;
        this._goal.y = y;

        // Highlight Goal Tile
        aux.highlight();
    }

    /**
     * Is Complete Method
     * 
     * For the given Puzzle, the method will check if it has been completed.
     * 
     * @returns True, if Puzzle is Complete
     */
    isComplete () {
        // Handle Shortest Path Puzzle
        if (this._goal.x !== -1 && this._goal.y !== -1)
            return (
                this._current.x === this._goal.x && 
                this._current.y === this._goal.y
            );

        // Handle Knight's Tour Puzzle
        let check = false;
        for (let i = 0; i < this._tiles.length; i++) {
            if (this._tiles[i].move === this._tiles.length) {
                check = true;
                break;
            }
        }
        return check;
    }

    /**
     * Move Method
     * 
     * Used for Moving the Knight to the Next Position.
     * 
     * @param {number} x Next X-Position
     * @param {number} y Next Y-Position
     */
    move (x, y) {
        // Find Tile that Correspond to Next Position
        let tile;
        this._tiles.forEach(t => {
            if (t.x === x && t.y === y)
                tile = t;
        });

        // Place Cursor and Knight on Tile
        this._current.placeCursor(false);
        this.#placeKnight(tile);
        this._current.placeCursor();
    }

    /**
     * Reset Method
     * 
     * Reset the Board's Tiles to remove any highlights.
     */
    reset () {
        // Reset Tiles
        this._tiles.forEach(tile => {
            tile.reset();

            // Ensure Knight and Cursor Remain on their Tile
            if (tile.x === this._knight.x && tile.y === this._knight.y) {
                tile.placeKnight(this._knight.element);
                tile.placeCursor();
            }
        });

        // Reset Other Variables
        this._puzzling = false;
        this._algorithm = false;
        this._previous = [];
        this._goal.x = -1;
        this._goal.y = -1;
    }

    /**
     * Horizontal Move Method
     * 
     * Move the Cursor Horizontally around the Board.
     * 
     * @param {boolean} right Default Action is Rightwards
     */
    horizontalMove (right=true) {
        // Ensure Horizontal Move is still on Board
        const curr = this._current.y + (right ? 1 : -1);
        if (curr < this.#BOARD && curr >= 0) {
            // Remove Cursor from Tile
            this._current.placeCursor(false);

            // Iterate and Find New Tile for Cursor
            this._tiles.forEach(tile => {
                if (tile.y === curr && tile.x === this._current.x)
                    this._current = tile;
            });

            // Place Cursor on Tile
            this._current.placeCursor(true);
        }
    }

    /**
     * Vertical Move Method
     * 
     * Move the Cursor up or down around the Board.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) {
        // Ensure Vertical Move is still on Board
        const curr = this._current.x + (up ? 1 : -1);
        if (curr < this.#BOARD && curr >= 0) {
            // Remove Cursor from Tile
            this._current.placeCursor(false);

            // Iterate and Find New Tile for Cursor
            this._tiles.forEach(tile => {
                if (tile.y === this._current.y && tile.x === curr)
                    this._current = tile;
            });

            // Place Cursor on Tile
            this._current.placeCursor(true);
        }
    }

    /**
     * Accept Action Method
     * 
     * If move is legal, Knight is Placed and no error is rasied. On the other 
     * hand, if the move is illegal, then no action is taken and error should 
     * be raised.
     * 
     * @returns Error Message, if required
     */
    acceptAction () {
        // Find Current Tile
        let aux;
        this._tiles.forEach(tile => {
            if (tile.pointer)
                aux = tile;
        });

        // Ensure Move is Legal
        if (this._initialise || this._knight.isLegal(aux.x, aux.y)) {
            let check = true;
            // Store Tile if Solving Puzzle
            if (this._puzzling) {
                this._previous.push(aux);

                // For Touring, Confirm No Repeated Tiles
                if (this._goal.x === -1 && this._goal.y === -1)
                    check = aux.move === 0;
            }
            
            if (check) {
                // Update Current Tile
                this.#placeKnight(aux);
                this._initialise = false;

                // Number Tile, if Touring
                if (this._goal.x === -1 && this._goal.y === -1 && this._puzzling)
                    this._current.number(this._previous.length, this._knight.element);

                // Check if Puzzle is Complete
                if (this.isComplete())
                    this.#completeCallback();

                // Update without Error
                return "";
            } else {
                this._previous.pop();
                return `Move to (${aux.y}, ${aux.x}) has already been made!`;
            }
        }

        // Update with Error
        return `Move to (${aux.y}, ${aux.x}) is illegal!`;
    }

    /**
     * Decline Action Method
     * 
     * If while solving the Puzzle the User finds they want to undo their last 
     * move, then the previous move will replace the current position.
     */
    declineAction () {
        // Handle only if Solving Puzzle
        if (this._puzzling && !this._algorithm && this._previous.length > 1) {
            // Set Last Move in List as Current Move
            let aux = this._previous.pop();
            if (aux.x === this._current.x && aux.y === this._current.y)
                aux = this._previous.pop();
            this.#placeKnight(aux, this._current, true);
            this._previous.push(this._current);
        }
    }

    /**
     * Select Action Method
     * 
     * Either used for Selecting the Initial Position of the Knight for 
     * completing the Puzzle, or for using the Algorithm to show a Solution for
     * the Puzzle.
     * 
     * @param {boolean} tour Knight's Tour or Not
     * @param {Array} path Path Generated by Algorithm
     * @callback moveCallback Move Callback Method
     */
    selectAction (tour=false, path=[], moveCallback) {
        // Select Initial Position for Knight
        if (path.length === 0) {
            // Find the Current Tile
            let aux;
            this._tiles.forEach(tile => {
                if (tile.pointer)
                    aux = tile;
            });

            // Update Current Tile
            this.#placeKnight(aux);

            // Setup Puzzling Variables
            this._previous.push(aux);
            this._puzzling = true;
            this._tiles.forEach(tile => {
                if (!tile.active)
                    tile.toggle();
            });
            this._current.highlight();


            // If completing a Knight's Tour, Number Tile
            if (tour) {
                this._current.number(1, this._knight.element);
            }
        } 
        
        // Prompt Knight to Use Algorithm's Path
        else {
            // Set Variables for Timing Interval
            this._algorithm = true;
            var self = this;

            // Setup 1s Timing Interval
            var x = setInterval(function () {
                // Set Vertex to be Last Element in Path
                let vertex;
                vertex = path.pop();

                // Add Vertex to Previous Steps
                self.previous.push(vertex);

                // For Knight's Tour, Number the Tiles
                if (tour)
                    // Iterate through Tiles
                    self._tiles.forEach(tile => {
                        // Number Tile that Knight is On
                        if (vertex.x === tile.x && vertex.y === tile.y)
                            tile.number(
                                self.previous.length - 1, 
                                self.knight.element
                            );
                    });

                // Update Game Interface
                moveCallback(vertex.x, vertex.y);

                // Check if Puzzle is Complete
                if (path.length === 0) {
                    // Close Timing Interval
                    clearInterval(x);

                    // Puzzle Complete
                    self.#completeCallback();
                }
            }, 1000);
        }
    }

    /**
     * Place Knight Method
     * 
     * For the given tile, Place the Knight there.
     * 
     * @param {Tile} tile Desired Tile
     * @param {Tile} prev Previous Tile
     * @param {boolean} undo Undo, default False
     */
    #placeKnight (tile, prev, undo=false) {
        // Remove Knight from Current Tile
        this._current.removeKnight();

        // For Undoing Placement, Update Tiles
        if (undo) {
            prev.placeCursor(false);
            prev.reset();
            tile.placeCursor();
        }

        // Update Current Tile
        this._current = tile;
        this._current.placeKnight(this._knight.element);
        this._knight.update(tile.x, tile.y);
    }
}