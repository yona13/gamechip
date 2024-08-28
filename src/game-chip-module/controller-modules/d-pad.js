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
        const up = new DirectionButton(upCallback, "up");
        const right = new DirectionButton(rightCallback, "right");
        const down = new DirectionButton(downCallback, "down");
        const left = new DirectionButton(leftCallback, "left");
        const central = document.createElement("div");
        central.id = ("central-pad");

        // Append Directional Buttons to Pad
        this._pad.appendChild(up.button);
        this._pad.appendChild(right.button);
        this._pad.appendChild(down.button);
        this._pad.appendChild(left.button);
        this._pad.appendChild(central);
    }

    get pad () { return this._pad; }

    set pad (elem) { this._pad = elem; }
}