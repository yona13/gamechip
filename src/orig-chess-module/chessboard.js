import Controller from "../puzzle-module/controller";
import Board from "./board.js";

export default class Chessboard extends Board {
    #DEFAULT_INITIAL = {x: 3, y: 3};
    #DEFAULT_BOARD = 8;
    #ERROR = false;

    /**
     * Chessboard Class
     * 
     * By expanding on its base Board Class, this class is
     * responsible for managing the Controller Class, and 
     * all its necessary callback methods.
     */
    constructor () {
        super(3, 3, 8); // Default values

        // Initialise Controller
        this.controller = new Controller(
            this.#DEFAULT_INITIAL.x, 
            this.#DEFAULT_INITIAL.y, 
            this.#DEFAULT_BOARD, 
            this.selectCallback.bind(this),
            this.startCallback.bind(this),
            this.undoCallback.bind(this),
            this.showCallback.bind(this)
        );

        // Initialise Variables
        this._root = this.#DEFAULT_INITIAL;
        this._goal = {x: 0, y: 0};
        this._path = [];
        this._selecting = false;
        this._touring = false;
        this._start = false;
        this._algorithm = false;

        // Add Click Event Listeners to Tiles
        this.tiles.forEach(tile => {
            tile.setClickEventListener(this.clickCallback.bind(this));
        });
    }

    get controller () { return this._controller; }

    set controller (obj) { this._controller = obj; }

    /**
     * Generate Puzzle Function
     * 
     * For either Puzzle, this function will setup the path
     * that the Knight must Traverse to complete the Puzzle
     * and will also initialise the Tiles to Highlight when
     * the Knight has visited the tile.
     * 
     * @param {boolean} tour True if Knight's Tour
     */
    generatePuzzle (tour=false) {
        // Clear Display
        this.controller.clear();

        // Setup Root Variable
        this._root.x = this.knight.x;
        this._root.y = this.knight.y;
        
        // Prime Knight for Path Exploration
        this.knight.prime();

        // Setup Path for the Knight
        if (tour) {
            this.knight.setPath(this.controller.tour.warnsdorff(
                this._root.x,
                this._root.y,
                this.knight.graph
            ));
        } else {
            this.knight.setPath(this.controller.shortest.bfs(
                this._root.x,
                this._root.y,
                this._goal.x,
                this._goal.y,
                this.knight.graph
            ));
        }
        
        // Prime Knight for Traversal
        this.knight.prime();

        // Activate Tiles for Highlighting
        this.tiles.forEach(tile => {
            // Toggle Tile so they may be Highlighted
            if (!tile.active)
                tile.toggle();

            // Highlight Root and Goal Tiles
            if ((tile.x === this.knight.x && tile.y === this.knight.y) || (tile.x === this._goal.x && tile.y === this._goal.y))
                tile.highlight();
        });

        // Display Tile Coordinate for the User
        this.controller.update(
            tour ? `Knight's Tour Beginning at (${this._root.y}, ${this._root.x});` :
            `Goal Tile: (${this._goal.y + 1}, ${this._goal.x + 1});`
        );

        // Start the Puzzle
        this._start = true;
        this._path = [];
    }

    /**
     * Click Function
     * 
     * With each Tile, if pressed and passed all conditions
     * will update the Knight's Position to the new Tile.
     * 
     * @param {number} x New X-Coordinate
     * @param {number} y New Y-Coordinate
     */
    click (x, y) {
        // Retain Knight's Previous Location
        let prev = {x: this.knight.x, y: this.knight.y};

        // Update Current Tile
        this.previous.push(this.current);
        this.current.removeKnight();
        this.tiles.forEach(tile => {
            if (tile.x === x && tile.y === y) {
                this.current = tile;
                if (this._touring)
                    this.current.number(this.knight.graph.getVertex(x, y).move);
                tile.placeKnight(this.knight.element);
            }
        });

        // Update Knight's Current Location
        this.knight.update(x, y);

        // Ease Alert if Required
        if (this.#ERROR) {
            this.#ERROR = false;
            this.controller.ease();
        }

        // Update Message Displaying the Current Position
        this.controller.update(
            `Move from (${prev.y + 1}, ${prev.x + 1}) to (${y + 1}, ${x + 1});`
        );
    }

    /**
     * Select Callback Function
     * 
     * Used as a parameter for the Board-Builder Class, 
     * this is a callback function that allows the user to
     * update the size of the Chessboard where the puzzles
     * are set, between 5 by 5 and 8 by 8.
     * 
     * @param {number} size New Board Size
     */
    selectCallback (size) { this.rebuild(size); }

    /**
     * Start Callback Function
     * 
     * Used as a parameter for the Shortest Path and the 
     * Knight's Tour Control Classes, this is a callback 
     * function that initialises the two different kinds of
     * puzzles available within the app.
     * 
     * @param {number} x Goal X-Coordinate
     * @param {number} y Goal Y-Coordinate
     * @param {boolean} tour Tour Puzzle (Default False)
     */
    startCallback (x, y, tour=false) {
        // Clear Display
        this.controller.clear();

        // Clear Highlights on Tiles
        this.tiles.forEach(tile => { tile.reset(); });

        // Prompt User to Select an Initial Tile
        this._selecting = true;
        this._touring = tour;
        this.controller.update(
            "Please Select an Initial Tile for the Knight."
        );

        // Setup Variables
        if (!tour) {
            this._goal.x = x;
            this._goal.y = y;
        }
    }

    /**
     * Undo Callback Function
     * 
     * Used as a parameter for the Shortest Path and the
     * Knight's Tour Control Classse, this is a callback 
     * function that will return the Knight to it's last
     * tile, if that tile exists.
     */
    undoCallback () {
        if (this.previous.length > 0) {
            // Remove Knight from Current Tile
            this.current.removeKnight();
            
            // Update Current Tile to Last Tile
            this.current = this.previous.pop();
            this.current.placeKnight(this.knight.element);

            // Update Knight's Current Location
            this.knight.update(this.current.x, this.current.y);
        }
    }

    /**
     * Show Solution Callback Function
     * 
     * Used as a parameter for the Shortest Path and the
     * Knight's Tour Control Classes, this is a callback
     * function that prompts the Search Algorithm to show
     * the solution generated.
     * 
     * @param {boolean} tour True if Knight's Tour
     */
    showCallback (tour=false) { 
        this._algorithm = true;
        this.knight.prompt(this.clickCallback.bind(this), tour); 
    }

    /**
     * Click Tile Callback Function
     * 
     * Used as a parameter for the Tile Class, this is a 
     * callback function that can be used either to move
     * the Knight to a desired location, given it is a 
     * legal move, or for placing the Knight on a desired
     * initial tile for the Puzzles.
     * 
     * @param {number} x Desired X-Coordinate
     * @param {number} y Desired Y-Coordinate
     */
    clickCallback (x, y) {
        // Handle User Initial Tile Selection
        if (this._selecting) {
            // Update Current Tile
            this.current.removeKnight();
            this.tiles.forEach(tile => {
                if (tile.x === x && tile.y === y) {
                    this.current = tile;
                    if (this._touring) 
                        this.current.number(1);
                    tile.placeKnight(this.knight.element);
                }
            });
            // Update Knight's Current Position
            this.knight.update(x, y);

            // Generate Goal Posiiton
            this._selecting = false;
            this.generatePuzzle(this._touring);
        } else if (this._start && this._touring) {
            const legal = this.knight.isLegal(x, y);
            const visited = this.knight.beenVisited(x, y);
            if (legal && !visited) {
                // Add Move to Path
                this._path.push({x: x, y: y});
                this.click(x, y);

                if (this.knight.endOfTour(x, y)) {
                    if (this._algorithm) {
                        // Update User on Knight's Success and Path there
                        this.controller.update(
                            "The Knight's Tour was Completed using Warnsdorff's Algorith.\n" + 
                            `The Path taken:\n(${this._root.y + 1}, ${this._root.x + 1})`
                        );
                        do {
                            let step = this.knight.path[0];
                            this.knight.path.splice(0, 1);
                            this.controller.update(`(${step.y + 1}, ${step.x + 1})`);
                        } while (this.knight.path.length > 0);
                    } else {
                        // Update User on their Success and the Path there
                        this.controller.update(
                            "Congratulations for completing the Knight's Tour!\n" +
                            `Path taken:\n(${this._root.y + 1}, ${this._root.x + 1})`
                        );
                        this._path.forEach(coord => {
                            this.controller.update(`(${coord.y + 1}, ${coord.x + 1})`);
                        });
                    }

                    // Stop the Puzzle
                    this._start = false;
                }
            } else if (!legal) {
                // Alert User that their move was Illegal
                this.#ERROR = true;
                this.controller.alert("Nice try, that is an illegal move!");
            } else if (visited) {
                // Alert User the tile has been Visited
                this.#ERROR = true;
                this.controller.alert("Tile has already been visited!");
            }
        } else if (this._start && !this._touring) {
            if (this.knight.isLegal(x, y)) {
                // Add Move to Path
                this._path.push({x: x, y: y});
                this.click(x, y);

                // Check if Goal has been Reached
                if (this._goal.x === x && this._goal.y === y) {
                    if (this._algorithm) {
                        // Update User on Knight's Success and path there
                        this.controller.update(
                            `The Search Algorithm has reached the goal in ${this.knight.steps};\n` +
                            `Path taken:\n(${this._root.y + 1}, ${this._root.x + 1})`
                        );
                        do {
                            let step = this.knight.path.pop();
                            this.controller.update(`(${step.y + 1}, ${step.x + 1})`)
                        } while (this.knight.path.length > 0);
                    } else {
                        // Update User on their Success and the path there
                        this.controller.update(
                            `Congratulations for reaching the goal in ${this._path.length};\n` +
                            `Search Algorithm's Best: ${this.knight.path.length - 1};\n` + 
                            `Path taken:\n(${this._root.y + 1}, ${this._root.x + 1})`
                        );
                        this._path.forEach(coord => {
                            this.controller.update(`(${coord.y + 1}, ${coord.x + 1})`);
                        });
                    }

                    // Stop the Puzzle
                    this._start = true;
                }
            } else {
                // Alert User that their move was Illegal
                this.#ERROR = true;
                this.controller.alert("Nice try, that is an illegal move!");
            }
        } else {
            // Regular Clicking
            if (this.knight.isLegal(x, y)) 
                this.click(x, y);
            else {
                // Alert User that their move was Illegal
                this.#ERROR = true;
                this.controller.alert("That is an illegal move!");
            }
        }
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
        if (this.current.x !== this._root.x || this.current.y !== this._root.y) {
            // Update Current Tile
            this.current.removeKnight();
            this.tiles.forEach(tile => {
                if (tile.x === this._root.x && tile.y === this._root.y) {
                    this.current = tile;
                    tile.placeKnight(this.knight.element);
                }
                tile.reset();
            });
            // Update Knight's Current Position
            this.knight.update(this._root.x, this._root.y);

            // Clear Message Display
            this.controller.clear();
        }
    }
}