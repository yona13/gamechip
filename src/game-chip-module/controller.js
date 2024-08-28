import ActionButton from "./controller-modules/action-button.js";
import DirectionPad from "./controller-modules/d-pad.js";
import UserButton from "./controller-modules/user-button.js";

export default class Controller {
    /**
     * Controller Class
     * 
     * Governs the GameChip Controller.
     * 
     * @callback upCallback 
     * @callback rightCallback 
     * @callback downCallback 
     * @callback leftCallback 
     * @callback aCallback 
     * @callback bCallback 
     * @callback startCallback 
     * @callback selectCallback 
     */
    constructor (
        upCallback, 
        rightCallback, 
        downCallback, 
        leftCallback, 
        aCallback, 
        bCallback, 
        startCallback, 
        selectCallback
    ) {
        // Generate Module DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("game-console-controller");

        // Create the Direction Pad
        const dPad = new DirectionPad(upCallback, rightCallback, downCallback, leftCallback);

        // Create A & B Buttons
        const aBtn = new ActionButton(aCallback, "A");
        const bBtn = new ActionButton(bCallback, "B");

        // Create Start & Select Buttons
        const startBtn = new UserButton(startCallback, "Start");
        const selectBtn = new UserButton(selectCallback, "Select");

        // Append Objects to Module
        this._module.appendChild(dPad.pad);
        this._module.appendChild(aBtn.button);
        this._module.appendChild(bBtn.button);
        this._module.appendChild(startBtn.button);
        this._module.appendChild(selectBtn.button);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }
}