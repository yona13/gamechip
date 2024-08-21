import GameInterface from "../game-console-module/game-interface.js";
import Board from "./board-module/board.js";

export default class KnightsGame extends GameInterface {
    #showCallback;
    #dimensionsCallback;

    constructor () {
        super();

        // Create Chessboard
        this._board = new Board();
    }

    /**
     * Set Scene Method
     * 
     * Set the Show and Get Dimensions Callback Method for
     * Updating the Game Console Display
     * 
     * @callback showCallback Show Callback
     * @callback dimensionsCallback Get Dimensions Callback
     */
    setScene (showCallback, getDimensions) {
        // Set Callback Methods
        this.#showCallback = showCallback;
        this.#dimensionsCallback = getDimensions;

        // Set Board Dimensions
        const dimensions = this.#dimensionsCallback();
        this._board.setDimensions(dimensions.width, dimensions.height);

        // Set Board on Display
        this.#showCallback(this._board.module);
    }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () {}

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () {}

    /**
     * Down Callback Method
     * 
     * Handles the Click of the Down Button on the Direction Pad.
     */
    downCallback () {}

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () {}

    /**
     * A Callback Method
     * 
     * Handles the Click of the A Action Button.
     */
    aCallback () {}

    /**
     * B Callback Method
     * 
     * Handles the Click of the B Action Button.
     */
    bCallback () {}

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () {}

    /**
     * Select Callback Method
     * 
     * Handles the Click of the Select User Button.
     */
    selectCallback () {}
}