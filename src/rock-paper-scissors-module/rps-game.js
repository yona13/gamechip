import GameInterface from "../game-chip-module/game-interface.js";
import RPSManager from "./main-module/rps-manager.js";

export default class RPSGame extends GameInterface {
    constructor (title) {
        super(title);

        // Initialise Objects for the Rock, Paper, Scissors Game
        this._rm = new RPSManager();
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
    setScene (showCallback, takeDownCallback, getDimensions) { /* TODO: Implement Method */ }

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () { /* TODO: Implement Method */ }

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () { /* TODO: Implement Method */ }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () { /* TODO: Implement Method */ }

    /**
     * Down Callback Method
     * 
     * Handles the Click of the Down Button on the Direction Pad.
     */
    downCallback () { /* TODO: Implement Method */ }

    /**
     * A Callback Method
     * 
     * Handles the Click of the A Action Button.
     */
    aCallback () { /* TODO: Implement Method */ }

    /**
     * B Callback Method
     * 
     * Handles the Click of the B Action Button.
     */
    bCallback () { /* TODO: Implement Method */ }

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () { /* TODO: Implement Method */ }

    /**
     * Select Callback Method
     * 
     * Handles the Click of the Select User Button.
     */
    selectCallback () { /* TODO: Implement Method */ }
}