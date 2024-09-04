import "./game-styling.css";
import categories from "./data/menu.json5";
import selection from "./data/select.json5";
import GameInterface from "../game-chip-module/game-interface.js";
import RPSManager from "./main-module/rps-manager.js";
import Menu from "../pop-up-module/menu.js";
import InfoBox from "../pop-up-module/info-box.js";
import SelectBox from "../pop-up-module/select-box.js";

export default class RPSGame extends GameInterface {
    #showCallback;
    #takeDownCallback;

    /**
     * Rock, Paper, Scissors Interface Class
     * 
     * Userd for Controlling the Menu and the Display Modules with the GameChip's
     * Controllers, and also for Updating the Display with the relevant 
     * Information Messages.
     * 
     * @param {string} title Title of the Game
     */
    constructor (title) {
        super(title);

        // Initialise Objects for the Rock, Paper, Scissors Game
        this._rm = new RPSManager();
        this._menu = new Menu(categories);
        this._info = new InfoBox();
        this._select = new SelectBox(
            selection.difficulty.description,
            selection.difficulty.categories
        );

        // Intialise Variable
        this._difficulty_selected = false;
    }

    /**
     * Set Scene Method
     * 
     * Set the Show and Get Dimensions Callback Method for Updating the Game 
     * Console Display.
     * 
     * @callback showCallback Show Callback
     * @callback takeDownCallback Take Down Callback
     * @callback dimensionsCallback Get Dimensions Callback
     */
    setScene (showCallback, takeDownCallback, getDimensions) {
        // Set Callback Methods
        this.#showCallback = showCallback;
        this.#takeDownCallback = takeDownCallback;

        // Set Display Dimensions
        const dimensions = getDimensions();
        this._rm.setDimensions(dimensions.width, dimensions.height);

        // Set Pop-Up Dimentiosn
        this._menu.setDimensions(dimensions.width, dimensions.height);
        this._sub_set = false;
        this._sub_menu;
        this._info.setDimensions(dimensions.width, dimensions.height);
        this._select.setDimensions(dimensions.width, dimensions.height);

        // Set Game Display
        this.#showCallback(this._rm.module);

        // Show Difficulty Selection
        this._select.active = true;
        this._rm.controller = false;
        this.#showCallback(this._select.module, true);
    }

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () {
        // Handle RPS Movement
        if (this._rm.controller)
            this._rm.horizontalMove();
    }

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () {
        // Handle RPS Movement
        if (this._rm.controller)
            this._rm.horizontalMove(false);
    }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () {
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
            this._rm.setLevel(this._select.acceptAction());
            this._difficulty_selected = true;

            // Take down Select Box
            this.#takeDownCallback();
            this._select.active = false;
            this._rm.controller = true;
        }
        // Handle Info Action
        else if (this._info.active) {
            this.#takeDownCallback();
            this._rm.controller = true;
            this._info.active = false;
        }
        // Handle Game Action
        else if (this._rm.controller) {
            const msg = this._rm.acceptAction();
            console.log(`You ${msg}!`); // TODO: Handle better
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
    bCallback () {}

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () {
        // Menu to be Displayed
        if (this._rm.controller) {
            // Set Menu to be Controlled
            this._rm.controller = false;
            this._menu.controller = true;
            
            // Display the Menu
            this.#showCallback(this._menu.module, true);
        }

        // Menu to be Taken Down
        else {
            // Set Rock, Paper, Scissors to be Controlled
            this._rm.controller = true;
            this._menu.controller = true;
            
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
    selectCallback () { /* TODO: Implement Method */ }

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
        this._rm.controller = true;
        this._menu.controller = false;
        this.#takeDownCallback();
    }
}