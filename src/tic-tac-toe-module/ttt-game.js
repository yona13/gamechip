import "./game-styling.css";
import categories from "./data/menu.json5";
import GameInterface from "../game-chip-module/game-interface.js";
import TTTManager from "./main-module/ttt-manager.js";
import Menu from "../pop-up-module/menu.js";
import ErrorBox from "../pop-up-module/error-box.js";
import InfoBox from "../pop-up-module/info-box.js";

export default class TTTGame extends GameInterface {
    #showCallback;
    #takeDownCallback;

    constructor (title) {
        super(title);

        // Initialise Objects for the Tic-Tac-Toe Game
        this._tm = new TTTManager();
        this._menu = new Menu(categories);
        this._error = new ErrorBox();
        this._info = new InfoBox();
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

        // Set Pop-Up Dimensions
        this._menu.setDimensions(dimensions.width, dimensions.height);
        this._sub_set = false;
        this._sub_menu;
        this._error.setDimensions(dimensions.width, dimensions.height);
        this._info.setDimensions(dimensions.width, dimensions.height);

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
    aCallback () {
        // Handle Grid Action
        if (this._tm.controller) {
            this._tm.acceptAction(this.#gameoverCallback.bind(this));
            // // Check if Game is Over
            // if (this._tm.acceptAction() && this._tm.end) { 
            //     /* TODO: Raise Information about Outcome of Game */ 
            //     console.log("Game Over!");
            //     console.log(this._tm.message);
            // }

            // // Handle Error Message
            // else {
            //     this._error.setMessage(this._tm.message);
            //     this.#showCallback(this._error.module, true);
            // }
        }
    }

    /**
     * B Callback Method
     * 
     * Handles the Click of the B Action Button.
     */
    bCallback () {
        // Handle Grid Action
        if (this._error.active) {
            this.#takeDownCallback();
            this._error.active = false;
        }
    }

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () {
        // Menu to be Displayed
        if (this._tm.controller) {
            // Set Menu to be Controlled
            this._km.controller = false;
            this._menu.controller = true;

            // Display the Menu
            this.#showCallback(this._menu.module, true);
        }

        // Menu to be Taken Down
        else {
            // Set Tic-Tac-Toe to be Controlled
            this._tm.controller = true;
            this._menu.controller = false;
            
            // Take Down Menu/Sub-Menu
            this.#takeDownCallback();
            if (this._sub_set) {
                this._menu.resetSubMenus();
                this._sub_set = false;
            }
        }
    }

    /**
     * Select Callback Method
     * 
     * Handles the Click of the Select User Button.
     */
    selectCallback () {}

    /**
     * Gameover Callback Method
     * 
     * Method used for informing the User of the End Game Results.
     * 
     * @param {string} msg Game Over Message
     * @param {boolean} error Default is No Error
     */
    #gameoverCallback (msg, error=false) {
        // Display End Game Information if there are no errors.
        if (!error) {
            // Set Information Box Parameters
            this._info.setTitle("Game Over!");
            this._info.setMessage(msg);

            // Update Cursor Control
            this._tm.controller = false;
            this._info.controller = true;

            // Display Information
            this.#showCallback(this._info.module, true);
        }

        // Otherwise, inform the User of the Error
        else {
            // Set Error Box Parameters
            this._error.setMessage(msg);

            // Update Cursor Control
            this._tm.controller = false;
            
            // Display Error
            this.#showCallback(this._error.module, true);
        }
    }
}