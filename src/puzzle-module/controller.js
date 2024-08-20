import "../css/controller.css";
import BoardBuilder from "./board-builder.js";
import Display from "./display.js";
import KnightsTourControls from "./knights-tour.js";
import ShortestPathControls from "./shortest-path.js";

export default class Controller {
    /**
     * Controller Class
     * 
     * Generates the DOM Elements for the Puzzle Controller
     * including the Display, and the two Puzzle Components
     * specifically, the Shortest Path Puzzle and the 
     * Knight's Tour Puzzle.
     * 
     * @param {number} x Initial X-Coordinate
     * @param {number} y Initial Y-Coordinate
     * @param {number} board Chessboard Size
     * @callback selectCallback Select Board Size Callback
     * @callback startCallback Start Puzzle Callback
     * @callback undoCallback Undo Move Callback
     * @callback showCallback Show Solution Callback
     */
    constructor (x, y, board, selectCallback, startCallback, undoCallback, showCallback) {
        // Initialise Variables
        this.board = board;
        this.initial = {x: x, y: y};

        // Create Module DOM Element
        this.module = document.createElement("div");
        this.module.classList.add("puzzle-controller");

        // Create Display DOM Element
        this.display = new Display();

        // Create Board-Builder Controls DOM ELement
        this.builder = new BoardBuilder(this.update.bind(this), selectCallback);

        // Create Random Location Controls DOM Element
        this.shortest = new ShortestPathControls(x, y, board, startCallback, this.update.bind(this), undoCallback, showCallback);

        // Create Full-Board Controls DOM Element
        this.tour = new KnightsTourControls(x, y, board, startCallback, this.update.bind(this), undoCallback, showCallback);

        // Append All To Module
        this.module.appendChild(this.display.module);
        this.module.appendChild(this.builder.module);
        this.module.appendChild(this.shortest.module);
        this.module.appendChild(this.tour.module);
    }

    get board () { return this._board; }

    set board (num) { this._board = num; }

    get initial () { return this._initial; }

    set initial (dict) { this._initial = dict; }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get display () { return this._display; }

    set display (obj) { this._display = obj; }

    get builder () { return this._builder; }

    set builder (obj) { this._builder = obj; }

    get shortest () { return this._shortest; }

    set shortest (obj) { this._shortest = obj; }

    get tour () { return this._tour; }

    set tour (obj) { this._tour = obj; }

    /**
     * Update Function
     * 
     * Used by Chessboard Class to update the Puzzle-
     * Controller Display with a New Message.
     * 
     * @param {string} msg New Message
     */
    update (msg) { this.display.update(msg); }
    
    /**
     * Alert Function
     * 
     * Used by Chessboard Class to alert the Puzzle-
     * Controller Display with an Alert.
     * 
     * @param {string} msg Alert Message
     */
    alert (msg) { this.display.alert(msg); }

    /**
     * Ease Function
     * 
     * Used by Chessboard Class to update the Puzzle-
     * Controller that any Alerts have been eased.
     */
    ease () { this.display.ease(); }

    /**
     * Clear Function
     * 
     * Used by Chessboard Class to clear the Puzzle-
     * Controller's display of all messages.
     */
    clear () { this.display.clear(); }
}