import "./game-styling.css";
import categories from "./data/menu.json5";
import selection from "./data/select.json5";
import GameInterface from "../game-chip-module/game-interface.js";
import KnightsManager from "./main-module/knights-manager.js";
import Menu from "../pop-up-module/menu.js";
import ErrorBox from "../pop-up-module/error-box.js";
import InfoBox from "../pop-up-module/info-box.js";
import SelectBox from "../pop-up-module/select-box.js";

export default class KnightsGame extends GameInterface {
    #showCallback;
    #takeDownCallback;

    /**
     * Knight's Game Interface Class
     * 
     * Used for Controlling the Menu and Chessboard Modules with the GameChip's
     * Controllers, and also for Updating the Display with the relevant Error 
     * and Information Messages.
     * 
     * @param {string} title Title of the Game
     */
    constructor (title) {
        super(title);

        // Initialise Objects for the Knight's Game
        this._km = new KnightsManager(this.completeCallback.bind(this));
        this._menu = new Menu(categories);
        this._error = new ErrorBox();
        this._info = new InfoBox();
        this._select = new SelectBox(
            selection.game.description,
            selection.game.categories
        );

        // Initialise Variable
        this._game_selected = false;
    }

    /**
     * Set Scene Method
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

        // Set Board Dimensions
        const dimensions = getDimensions();
        this._km.setup(dimensions.width, dimensions.height);

        // Set Pop-Up Dimensions
        this._menu.setDimensions(dimensions.width, dimensions.height);
        this._sub_set = false;
        this._sub_menu; 
        this._error.setDimensions(dimensions.width, dimensions.height);
        this._info.setDimensions(dimensions.width, dimensions.height);
        this._select.setDimensions(dimensions.width, dimensions.height);

        // Set Board on Display
        this.#showCallback(this._km.module);

        // Show Information about Current Game
        this._select.active = true;
        this._km.controller = false;
        this.#showCallback(this._select.module, true);
    }

    /**
     * Puzzle Complete Callback Method
     * 
     * When the Puzzle is Complete, the User should be informed with the relevant 
     * information.
     */
    completeCallback () {
        // Set Path Taken
        this._km.path = this._km.board.previous;
        this._km.controller = true;

        // Puzzle Complete, Display Info
        this._info.setTitle(this._km.game.puzzleTitle());
        this._info.setMessage(this._km.game.endInfo(
            this._km.human,
            this._km.human ? this._km.steps.human + 1 : this._km.steps.algorithm,
            this._km.path
        ));
        this.#showCallback(this._info.module, true);
        this._km.reset();
    }

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () {
        // Handle Chessboard Movement
        if (this._km.controller)
            this._km.horizontalMove();
    }

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () {
        // Handle Chessboard Movement
        if (this._km.controller)
            this._km.horizontalMove(false);
    }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () {
        // Handle Chessboard Movement
        if (this._km.controller)
            this._km.verticalMove();
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
        // Handle Chessboard Movement
        if (this._km.controller)
            this._km.verticalMove(false);
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
        if (this._select.active && !this._game_selected) {
            // Set Game
            this._km.setGame(this._select.acceptAction());
            this._game_selected = true;

            // Show Information about Game
            this.#takeDownCallback();
            this._select.active = false;

            this._info.setTitle(this._km.game.puzzleTitle());
            this._info.setMessage(this._km.game.puzzleInfo());
            this.#showCallback(this._info.module, true);
        }
        // Handle Info Action
        else if (this._info.active) {
            this.#takeDownCallback();
            this._info.active = false;
            this._km.controller = true;
        } 
        // Handle Error Action
        else if (this._error.active) {
            this.#takeDownCallback();
            this._error.active = false;
        } 
        // Handle Chessboard Action
        else if (this._km.controller) {
            if (!this._km.acceptAction()) {
                this._error.setMessage(this._km.message);
                this.#showCallback(this._error.module, true);
            }
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
                if (this._sub_menu.selected.key === "Game") {
                    this._km.setGame(this._sub_menu.selected.value);
                    this.#close();

                    // Show Information about Current Game
                    this._info.setTitle(this._km.game.puzzleTitle());
                    this._info.setMessage(this._km.game.puzzleInfo());
                    this.#showCallback(this._info.module, true);
                }
                
                // Handle Theme Set
                if (this._sub_menu.selected.key === "Theme") {
                    this._km.setTheme(this._sub_menu.selected.value);
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
        // Handle Chessboard Action
        if (this._error.active) {
            this.#takeDownCallback();
            this._error.active = false;
            this._km.controller = true;
        } else if (this._info.active) {
            this.#takeDownCallback();
            this._info.active = false;
            this._km.controller = true;
        } else if (this._km.controller)
            this._km.declineAction();
        // Handle Menu Action
        else if (this._menu.controller) 
            this.#close();
        // Handle Sub-Menu Action
        else if (this._sub_set)
            this.#mainReturn();
    }

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () { this.#menu(); }

    /**
     * Select Callback Method
     * 
     * Handles the Click of the Select User Button.
     */
    selectCallback () {
        // Only Handle Gameplay Events
        if (this._km.controller)
            this._km.selectAction();
    }

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
        this._km.controller = true;
        this._menu.controller = false;
        this.#takeDownCallback();
    }

    /**
     * Menu Method
     * 
     * When the Start button is pressed, either the Menu should be Displayed 
     * (i.e. during gameplay), or the Menu should be Taken Down (i.e. while the 
     * Menu is up on the screen).
     */
    #menu () {
        // Menu to be Displayed
        if (this._km.controller) {
            // Set Menu to be Controlled
            this._km.controller = false;
            this._menu.controller = true;

            // Display the Menu
            this.#showCallback(this._menu.module, true);
        } 
        
        // Menu to be Taken Down
        else {
            // Set Knight to be Controlled
            this._km.controller = true;
            this._menu.controller = false;

            // Take Down Menu/Sub-Menu
            this.#takeDownCallback();
            if (this._sub_set) {
                this._menu.resetSubMenus();
                this._sub_set = false;
            }
        }
    }
}