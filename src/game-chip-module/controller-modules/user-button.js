export default class UserButton {
    #callback;

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

        // Set Default Callback
        this.#callback = clickCallback;

        // Add Click Event Listener to Button
        btn.addEventListener("click", (e) => { this.#callback(); });

        // Append Objects to Container
        this._button.appendChild(label);
        this._button.appendChild(btn);
    }

    get button () { return this._button; }

    set button (btn) { this._button = btn; }

    /**
     * Set Callback Method
     * 
     * Set the Callback for the Button to be a different Callback Method.
     * 
     * @callback clickCallback Click Button Callback Method
     */
    setCallback (clickCallback) { this.#callback = clickCallback; }
}