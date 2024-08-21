export default class DirectionButton {
    /**
     * Direction Button Class
     * 
     * Governs a Direction Button for the Direction Pad on the Game Console.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     */
    constructor (clickCallback, btnType) {
        // Generate Direction Button DOM Element
        this._button = document.createElement("button");
        this._button.classList.add("direction-button");
        this._button.id = btnType + "-btn";

        // Generate Arrow DOM Element
        const arrow = document.createElement("div");
        arrow.id = btnType + "-arrow";

        // Append Arrow to Button
        this._button.appendChild(arrow);

        // Add Click Event Listener to Button
        this._button.addEventListener("click", (e) => { clickCallback(); })
    }

    get button () { return this._button; }

    set button (btn) { this._button = btn; }
}