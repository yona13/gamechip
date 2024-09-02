import "./game-styling.css";
import GameInterface from "../game-chip-module/game-interface.js";
import TTTManager from "./main-module/ttt-manager.js";

export default class TTTGame extends GameInterface {
    #showCallback;
    #takeDownCallback;

    constructor (title) {
        super(title);

        // Initialise Objects for the Tic-Tac-Toe Game
        this._tm = new TTTManager();
    }

    /**
     * Set Show Method
     * 
     * Set the Callback Methods for Updating the GameChip Display.
     * 
     * @callback showCallback Show Callback
     * @callback takeDownCallback Take Down Callback
     * @callback dimensionsCallback Get Dimensions Callback
     */
    setScene (showCallback, takeDownCallback, getDimensions) {
        // Set Callback Methods
        this.#showCallback = showCallback;
        this.#takeDownCallback = takeDownCallback;

        // Set Grid Dimensions
        const dimensions = getDimensions();
        this._tm.setup(dimensions.width, dimensions.height);

        // Set Grid on Display
        this.#showCallback(this._tm.module);

        // Show Information about the Tic-Tac-Toe Game
        this._tm.setMarker("o"); // TODO: Replace with info where user can select marker
    }

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.horizontalMove();
    }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.verticalMove();
    }

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.horizontalMove(false);
    }

    /**
     * Down Callback Method
     * 
     * Handles the Click of the Down Button on the Direction Pad.
     */
    downCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.verticalMove(false);
    }

    /**
     * A Callback Method
     * 
     * Handles the Click of the A Action Button.
     */
    async aCallback () {
        // Handle Grid Action
        if (this._tm.controller) {
            // Check if Game is Over
            if (await this._tm.acceptAction() && this._tm.end) { 
                console.log("Game Over!");
                console.log(this._tm.message);
                /* TODO: Raise Information about Outcome of Game */ 
            }

            // Handle Error Message
            else { /* TODO: Raise Error in Popup */ }
        }
    }

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