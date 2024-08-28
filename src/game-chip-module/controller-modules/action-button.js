export default class ActionButton {
    /**
     * Action Button Class
     * 
     * Governs the A or B Buttons for the Game Console.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     */
    constructor (clickCallback, btnType) {
        // Generate Action Button DOM Element
        this._button = document.createElement("button");
        this._button.classList.add("action-button");
        this._button.id = btnType.toLowerCase() + "-btn";
        this._button.textContent = btnType;

        // Add Click Event Listener to Button
        this._button.addEventListener("click", (e) => { clickCallback(); })
    }

    get button () { return this._button; }

    set button (btn) { this._button = btn; }
}