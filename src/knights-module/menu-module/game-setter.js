import MenuBase from "./menu-base.js";

export default class GameSetter extends MenuBase {
    #selectCallback;
    #GAMES = [
        "Shortest-Path", 
        "Knights-Tour"
    ];

    constructor (selectCallback, returnCallback) {
        super("game-setter", ["Shortest-Path", "Knights-Tour"], returnCallback);

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