export default class DirectionButton {
    #callback;

    /**
     * Direction Button Class
     * 
     * Governs a Direction Button for the Direction Pad on the GameChip.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     * @param {string} key Key Press for Button
     */
    constructor (clickCallback, btnType, key) {
        // Generate Direction Button DOM Element
        this._button = document.createElement("button");
        this._button.classList.add("direction-button");
        this._button.id = btnType + "-btn";

        // Generate Arrow DOM Element
        const arrow = document.createElement("div");
        arrow.id = btnType + "-arrow";

        // Append Arrow to Button
        this._button.appendChild(arrow);

        // Set Default Callback
        this.#callback = clickCallback;

        // Add Click Event Listener to Button
        this._button.addEventListener("click", (e) => { this.#callback(); })

        // Add Key Down Event Listener to Window
        window.addEventListener("keydown", (e) => {
            if (e.key === key)
                this.#callback();
        });
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