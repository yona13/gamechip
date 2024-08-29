import DirectionButton from "./direction-button.js";

export default class DirectionPad {
    /**
     * Direction Pad Class
     * 
     * Governs the Directional Buttons for the GameChip.
     * 
     * @callback upCallback Up Click Callback Method
     * @callback rightCallback Right Click Callback Method
     * @callback downCallback Down Click Callback Method
     * @callback leftCallback Left Click Callback Method
     */
    constructor (upCallback, rightCallback, downCallback, leftCallback) {
        // Generate Pad DOM Element;    
        this._pad = document.createElement("div");
        this._pad.classList.add("direction-pad");

        // Create Directional Buttons
        this._up = new DirectionButton(upCallback, "up");
        this._right = new DirectionButton(rightCallback, "right");
        this._down = new DirectionButton(downCallback, "down");
        this._left = new DirectionButton(leftCallback, "left");
        const central = document.createElement("div");
        central.id = ("central-pad");

        // Append Directional Buttons to Pad
        this._pad.appendChild(this._up.button);
        this._pad.appendChild(this._right.button);
        this._pad.appendChild(this._down.button);
        this._pad.appendChild(this._left.button);
        this._pad.appendChild(central);
    }

    get pad () { return this._pad; }

    set pad (elem) { this._pad = elem; }

    /**
     * Set Callbacks Method
     * 
     * For the Direction Pad Buttons, set the different Callback Methods.
     * 
     * @callback upCallback Up Click Callback Method
     * @callback rightCallback Right Click Callback Method
     * @callback downCallback Down Click Callback Method
     * @callback leftCallback Left Click Callback Method
     */
    setCallbacks (upCallback, rightCallback, downCallback, leftCallback) {
        this._up.setCallback(upCallback);
        this._right.setCallback(rightCallback);
        this._down.setCallback(downCallback);
        this._left.setCallback(leftCallback);
    }
}