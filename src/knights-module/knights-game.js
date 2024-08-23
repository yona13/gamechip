import GameInterface from "../game-console-module/game-interface.js";
import ErrorBox from "./main-module/error-box.js";
import KnightsManager from "./main-module/knights-manager.js";

export default class KnightsGame extends GameInterface {
    #showCallback;
    #takeDownCallback;
    #dimensionsCallback;

    constructor () {
        super();

        // Create Knight's Manager
        this._km = new KnightsManager();
        this._error = new ErrorBox();
    }

    /**
     * Set Scene Method
     * 
     * Set the Show and Get Dimensions Callback Method for
     * Updating the Game Console Display
     * 
     * @callback showCallback Show Callback
     * @callback takeDownCallback Take Down Callback
     * @callback dimensionsCallback Get Dimensions Callback
     */
    setScene (showCallback, takeDownCallback, getDimensions) {
        // Set Callback Methods
        this.#showCallback = showCallback;
        this.#takeDownCallback = takeDownCallback;
        this.#dimensionsCallback = getDimensions;

        // Set Board Dimensions
        const dimensions = this.#dimensionsCallback();
        this._km.setup(dimensions.width, dimensions.height);
        this._error.setDimensions(dimensions.width, dimensions.height);

        // Set Board on Display
        this.#showCallback(this._km.module);
    }

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () { this._km.cursor.horizontalMove(true); }

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () { this._km.cursor.horizontalMove(false); }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () { this._km.cursor.verticalMove(true); }

    /**
     * Down Callback Method
     * 
     * Handles the Click of the Down Button on the Direction Pad.
     */
    downCallback () { this._km.cursor.verticalMove(false); }

    /**
     * A Callback Method
     * 
     * Handles the Click of the A Action Button.
     */
    aCallback () { 
        if (!this._km.cursor.acceptAction()) {
            this._error.setMessage(this._km.message);
            this.#showCallback(this._error.module, true);
        } 
    }

    /**
     * B Callback Method
     * 
     * Handles the Click of the B Action Button.
     */
    bCallback () { 
        if (this._error.active) {
            this.#takeDownCallback();
            this._error.active = false;
        } else 
            this._km.cursor.declineAction(); 
    }

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () { this._km.cursor.menuSelect(); }

    /**
     * Select Callback Method
     * 
     * Handles the Click of the Select User Button.
     */
    selectCallback () { this._km.cursor.menuSelect(); }
}