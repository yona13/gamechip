import ActionButton from "./controller-modules/action-button.js";
import DirectionPad from "./controller-modules/d-pad.js";
import UserButton from "./controller-modules/user-button.js";

export default class Controller {
    /**
     * Controller Class
     * 
     * Governs the GameChip Controller.
     * 
     * @callback upCallback Up Click Callback Method
     * @callback rightCallback Right Click Callback Method
     * @callback downCallback Down Click Callback Method
     * @callback leftCallback Left Click Callback Method
     * @callback aCallback A Click Callback Method
     * @callback bCallback B Click Callback Method
     * @callback startCallback Start Click Callback Method
     * @callback selectCallback Select Click Callback Method
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
        this._module.classList.add("gamechip-controller");

        // Create the Direction Pad
        this._dPad = new DirectionPad(upCallback, rightCallback, downCallback, leftCallback);

        // Create A & B Buttons
        this._aBtn = new ActionButton(aCallback, "A", "k");
        this._bBtn = new ActionButton(bCallback, "B", "o");

        // Create Start & Select Buttons
        this._startBtn = new UserButton(startCallback, "Start", " ");
        this._selectBtn = new UserButton(selectCallback, "Select", "Shift");

        // Append Objects to Module
        this._module.appendChild(this._dPad.pad);
        this._module.appendChild(this._aBtn.button);
        this._module.appendChild(this._bBtn.button);
        this._module.appendChild(this._startBtn.button);
        this._module.appendChild(this._selectBtn.button);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Controller Class
     * 
     * For the Controller Buttons, set the different Callback Methods.
     * 
     * @callback upCallback Up Click Callback Method
     * @callback rightCallback Right Click Callback Method
     * @callback downCallback Down Click Callback Method
     * @callback leftCallback Left Click Callback Method
     * @callback aCallback A Click Callback Method
     * @callback bCallback B Click Callback Method
     * @callback startCallback Start Click Callback Method
     * @callback selectCallback Select Click Callback Method
     */
    setCallbacks (
        upCallback, 
        rightCallback, 
        downCallback, 
        leftCallback, 
        aCallback, 
        bCallback, 
        startCallback, 
        selectCallback
    ) {
        this._dPad.setCallbacks(upCallback, rightCallback, downCallback, leftCallback);
        this._aBtn.setCallback(aCallback);
        this._bBtn.setCallback(bCallback);
        this._startBtn.setCallback(startCallback);
        this._selectBtn.setCallback(selectCallback);
    }
}