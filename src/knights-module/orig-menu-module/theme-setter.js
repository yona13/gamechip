import MenuBase from "./menu-base.js";

export default class ThemeSetter extends MenuBase {
    #selectCallback;
    #THEMES = [
        "Normal",
        "Retro",
        "Future",
        "Neon",
        "Terminal",
        "Fantasy"
    ];

    constructor (selectCallback) {
        super("theme-setter", ["Normal", "Retro", "Future", "Neon", "Terminal", "Fantasy"]);

        // Initialise Callback
        this.#selectCallback = selectCallback;
    }

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
}