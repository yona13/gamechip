import GameInterface from "../game-console-module/game-interface.js";
import KnightsManager from "./manager-module/knights-manager.js";
// import Board from "./board-module/board.js";

export default class KnightsGame extends GameInterface {
    #showCallback;
    #dimensionsCallback;

    constructor () {
        super();

        // Create Knight's Manager
        this._km = new KnightsManager();
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
        this._km.setup(dimensions.width, dimensions.height);

        // Set Board on Display
        this.#showCallback(this._km.module);
    }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () { this._km.board.cursor.verticalMove(true); }

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () { this._km.board.cursor.horizontalMove(true); }

    /**
     * Down Callback Method
     * 
     * Handles the Click of the Down Button on the Direction Pad.
     */
    downCallback () { this._km.board.cursor.verticalMove(false); }

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () { this._km.board.cursor.horizontalMove(false); }

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