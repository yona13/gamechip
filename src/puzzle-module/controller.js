import "../css/controller.css";
import Display from "./display.js";
import FullBoardControls from "./full-board.js";
import RandomLocationControls from "./random-location.js";

export default class Controller {
    constructor (initial, board) {
        // Create Module DOM Element
        this.module = document.createElement("div");
        this.module.classList.add("puzzle-controller");

        // Create Display DOM Element
        this.display = new Display();

        // Create Random Location Controls DOM Element
        this.randomLocation = new RandomLocationControls(initial, initial, board);

        // Create Full-Board Controls DOM Element
        this.fullBoard = new FullBoardControls(initial, initial, board);

        // Append All To Module
        this.module.appendChild(this.display.module);
        this.module.appendChild(this.randomLocation.module);
        this.module.appendChild(this.fullBoard.module);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get display () { return this._display; }

    set display (obj) { this._display = obj; }

    get randomLocation () { return this._random_location; }

    set randomLocation (obj) { this._random_location = obj; }

    get fullBoard () { return this._full_board; }

    set fullBoard (obj) { this._full_board = obj; }

    /**
     * Update Callback Function
     * 
     * Used by Chessboard Module to update the Puzzle-
     * Controller Display with a New Message.
     * 
     * @param {string} msg New Message
     */
    updateCallback (msg) { this.display.update(msg); }
    
    /**
     * Alert Callback Function
     * 
     * Used by Chessboard Module to alert the Puzzle-
     * Controller Display with an Alert.
     * 
     * @param {string} msg Alert Message
     */
    alertCallback (msg) { this.display.alert(msg); }

    /**
     * Ease Callback Function
     * 
     * Used by Chessboard Module to update the Puzzle-
     * Controller that any Alerts have been eased.
     */
    easeCallback () { this.display.ease(); }

    /**
     * Clear Callback Function
     * 
     * Used by Chessboard Module to clear the Puzzle-
     * Controller's display of all messages.
     */
    clearCallback () { this.display.clear(); }

    setRandomLocationCallback (attemptCallback, promptCallback) { 
        this.randomLocation.setCallback(attemptCallback, promptCallback); 
    }
}