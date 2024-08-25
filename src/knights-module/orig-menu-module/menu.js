import GameSetter from "./game-setter.js";
import InfoGetter from "./info-getter.js";
import MenuBase from "./menu-base.js";
import ThemeSetter from "./theme-setter.js";

export default class Menu extends MenuBase {
    #showCallback;
    #takeDownCallback;
    #setModeCallback
    #NUM_MODES = 3;

    constructor (showCallback, takeDownCallback, setModeCallback, selectCallback) {
        super("main", ["Game", "Theme", "Information"]);
        json

        // Initialise Callbacks
        this.#showCallback = showCallback;
        this.#takeDownCallback = takeDownCallback;
        this.#setModeCallback = setModeCallback;

        // Initialise Sub-Menus
        this._subs = [];
        this._subs.push(
            new GameSetter(selectCallback),
            new ThemeSetter(selectCallback),
            new InfoGetter()
        );
        this._subs.forEach(sub => { sub.setReturnCallback(this.mainReturnCallback.bind(this)); });
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }
    
    get subs () { return this._subs; }

    set subs (arr) { this._subs = arr; }

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
    verticalMove (up=true) {
        const curr = this._current + (up ? 1 : -1);
        if (curr <= this.#NUM_MODES && curr >= 0) {
            this.placeCursor(this._current, false);
            this._current = curr;
            this.placeCursor(this._current, true);
            console.log(this._subs[this._current]);
        }
    }

    /**
     * Accept Action
     * 
     * Choose a Menu Option.
     */
    acceptAction () {
        this.#takeDownCallback();
        this.#showCallback(this._subs[this._current].module);
        return "";
    }
    
    /**
     * Decline Action
     * 
     * Close Menu.
     */
    declineAction () { this.#takeDownCallback(); }

    /**
     * Place Cursor
     * 
     * Place or Remove the Cursor on the Option.
     * 
     * @param {boolean} on Place or Remove
     */
    placeCursor (on=true) {
        if (this._current < this.#NUM_MODES) {
            const check = this._options[idx].classList.contains("cursor");
            if (on && !check) 
                this._options[idx].classList.add("cursor");
            if (!on && check)
                this._options[idx].classList.remove("cursor");
        } else if (this._current === this.#NUM_MODES) {
            const check = this._return.classList.contains("cursor");
            if (on && !check)
                this._return.classList.add("cursor");
            if (!on && check)
                this._return.classList.remove("cursor");
        }
    }

    /**
     * Set Dimensions Function
     * 
     * Set Menu Display Dimensions
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimension (width, height) {
        super.setDimensions(width, height);

        // Set Sub-Menu Dimensions
        this._game.setDimensions(width, height);
        this._theme.setDimensions(width, height);
        this._info.setDimensions(width, height);
    }

    mainReturnCallback () { 
        this.#takeDownCallback();
        this.#showCallback(this.module);
    }
    
    returnCallback () { this.#takeDownCallback(); }
}