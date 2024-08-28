export default class UserButton {
    /**
     * User Button Class
     * 
     * Governs the Start or Select Buttons for the GameChip.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     */
    constructor (clickCallback, btnType) {
        // Generate Container DOM Element
        this._button = document.createElement("div");
        this._button.classList.add("user-button");
        this._button.id = btnType.toLowerCase() + "-container";

        // Generate Label DOM Element
        const label = document.createElement("div");
        label.classList.add("user-button-label");
        label.textContent = btnType.toUpperCase();

        // Generate Button DOM Element
        const btn = document.createElement("button");
        btn.id = btnType.toLowerCase() + "-btn";

        // Add Click Event Listener to Button
        btn.addEventListener("click", (e) => { clickCallback(); });

        // Append Objects to Container
        this._button.appendChild(label);
        this._button.appendChild(btn);
    }

    get button () { return this._button; }

    set button (btn) { this._button = btn; }
}