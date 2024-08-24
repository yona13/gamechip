import GameSetter from "./game-setter.js";
import InfoGetter from "./info-getter.js";
import MenuBase from "./menu-base.js";
import ThemeSetter from "./theme-setter.js";

export default class Menu extends MenuBase {
    #showCallback;
    #takeDownCallback;

    constructor (showCallback, takeDownCallback, selectCallback) {
        super("main", ["Game", "Theme", "Information"], this.returnCallback.bind(this));

        // Initialise Callbacks
        this.#showCallback = showCallback;
        this.#takeDownCallback = takeDownCallback;

        // Initialise Sub-Menus
        this._game = new GameSetter(dim, selectCallback, this.mainReturnCallback.bind(this));
        this._theme = new ThemeSetter(dim, selectCallback, this.mainReturnCallback.bind(this));
        this._info = new InfoGetter(dim, this.mainReturnCallback.bind(this));
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Show Function
     * 
     * Overlay Menu on Display.
     */
    show () { this.#showCallback(this._module); }

    /**
     * Take Down Function
     * 
     * Take down Menu from Display.
     */
    takeDown () { this.#takeDownCallback(); }

    /**
     * Vertical Move Function
     * 
     * Navigate the Menu Options.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) {}

    /**
     * Accept Action
     * 
     * Choose a Menu Option.
     */
    acceptAction () {}
    
    /**
     * Decline Action
     * 
     * Close Menu.
     */
    declineAction () { this.#takeDownCallback(); }

    /**
     * Set Dimensions Function
     * 
     * Set Menu Display Dimensions
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimension (width, height) {
        super(width, height);

        // Set Sub-Menu Dimensions
        this._game.setDimensions(width, height);
        this._theme.setDimensions(width, height);
        this._info.setDimensions(width, height);
    }

    mainReturnCallback () { this.#showCallback(this.module); }
    
    returnCallback () { this.#takeDownCallback(); }
}