import "./game-styling.css";
import categories from "./data/menu.json5";
import selection from "./data/select.json5";
import GameInterface from "../game-chip-module/game-interface.js";
import TTTManager from "./main-module/ttt-manager.js";
import Menu from "../pop-up-module/menu.js";
import ErrorBox from "../pop-up-module/error-box.js";
import InfoBox from "../pop-up-module/info-box.js";
import SelectBox from "../pop-up-module/select-box.js";

export default class TTTGame extends GameInterface {
    #showCallback;
    #takeDownCallback;

    /**
     * Tic-Tac-Toe Interface Class
     * 
     * Used for Controlling the Menu and the Grid Modules with the GameChip's
     * Controllers, and also for Updating the Display with the relevant Error
     * and Information Messages.
     * 
     * TODO: Add a feature for enlarging the grid
     * 
     * @param {string} title Title of the Game
     */
    constructor (title) {
        super(title);

        // Initialise Objects for the Tic-Tac-Toe Game
        this._tm = new TTTManager();
        this._menu = new Menu(categories);
        this._error = new ErrorBox();
        this._info = new InfoBox();
        this._select = new SelectBox(
            selection.difficulty.description, 
            selection.difficulty.categories
        );

        // Initialise Variables
        this._difficulty_selected = false;
        this._marker_selected = false;
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
        this._select.setDimensions(dimensions.width, dimensions.height);

        // Set Grid on Display
        this.#showCallback(this._tm.module);

        // Show Difficulty Selection
        this._select.active = true;
        this._tm.controller = false;
        this.#showCallback(this._select.module, true);
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
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.verticalMove();
        // Handle Menu Movement
        if (this._menu.controller)
            this._menu.verticalMove();
        // Handle Sub-Menu Movement
        if (this._sub_set)
            this._sub_menu.verticalMove();
        // Handle Select Movement
        if (this._select.active)
            this._select.verticalMove();
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
        // Handle Menu Movement
        if (this._menu.controller)
            this._menu.verticalMove(false);
        // Handle Sub-Menu Movement
        if (this._sub_set)
            this._sub_menu.verticalMove(false);
        // Handle Select Movement
        if (this._select.active)
            this._select.verticalMove(false);
    }

    /**
     * A Callback Method
     * 
     * Handles the Click of the A Action Button.
     */
    aCallback () {
        // Handle Select Action
        if (this._select.active && !this._difficulty_selected) {
            // Set Difficulty Level
            this._tm.setLevel(this._select.acceptAction());
            this._difficulty_selected = true;

            // Set Marker Selection
            this._select.setSelections(
                selection.marker.description,
                selection.marker.categories
            );
        } else if (this._select.active && !this._marker_selected) {
            // Set Marker
            this._tm.setMarker(this._select.acceptAction());
            this._marker_selected = true;

            // Take down Select Box
            this.#takeDownCallback();
            this._select.active = false;
            this._tm.controller = true;
        }
        // Handle Info Action
        else if (this._info.active) {
            this.#takeDownCallback();
            this._tm.controller = true;
            this._info.active = false;
        } 
        // Handle Error Action
        else if (this._error.active) {
            this.#takeDownCallback();
            this._tm.controller = true;
            this._error.active = false;
        } 
        // Handle Grid Action
        else if (this._tm.controller) {
            this._tm.acceptAction(this.#gameoverCallback.bind(this));
        }
        // Handle Menu Action
        else if (this._menu.controller) {
            // Handle Sub-Menu Selected
            if (this._menu.acceptAction()) {
                this._sub_set = true;
                this._menu.controller = false;
                this._sub_menu = this._menu.setSubMenu();
                this.#takeDownCallback();
                this.#showCallback(this._sub_menu.module, true);
            } 
            // Handle Return Selected
            else 
                this.#close();
        }
        // Handle Sub-Menu Action
        else if (this._sub_set) {
            // Handle Option Selected
            if (this._sub_menu.acceptAction()) {
                // Handle Game Set
                if (this._sub_menu.selected.key === "Level") {
                    this._tm.setLevel(this._sub_menu.selected.value);
                    // this._km.setGame(this._sub_menu.selected.value);
                    this.#close();
                }
                
                // Handle Theme Set
                if (this._sub_menu.selected.key === "Theme") {
                    this._tm.setTheme(this._sub_menu.selected.value);
                    this.#close();
                }

                // Handle Controls Information Get
                if (this._sub_menu.selected.key === "Controls") {
                    this._info.setTitle("Controller Information");
                    this._info.setMessage(
                        "W - Same as Up-Button\n" +
                        "D - Same as Right-Button\n" +
                        "S - Same as Down-Button\n" + 
                        "A - Same as Left-Button\n" +
                        "O - Same as B-Button\n" +
                        "K - Same as A-Button\n" +
                        "Space - Same as Start\n" + 
                        "Shift - Same as Select"
                    );
                    this.#close();
                    this.#showCallback(this._info.module, true);
                }
            }
            // Handle Return Selected
            else 
                this.#mainReturn();
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
            this._tm.controller = true;
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
            this._tm.controller = false;
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
     * Main Return Method
     * 
     * Return to the Main Menu from the Sub-Menu.
     */
    #mainReturn () {
        this._sub_set = false;
        this._menu.controller = true;
        this.#takeDownCallback();
        this.#showCallback(this._menu.module, true);
    }

    /**
     * Close Method
     * 
     * Outside of clicking the Start button, if the User is using the Menu, and 
     * selects an option such that the menu should close, this method will 
     * complete that task.
     */
    #close () {
        this._sub_set = false;
        this._tm.controller = true;
        this._menu.controller = false;
        this.#takeDownCallback();
    }

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