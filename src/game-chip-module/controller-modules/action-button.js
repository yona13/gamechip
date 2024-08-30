export default class ActionButton {
    #callback;

    /**
     * Action Button Class
     * 
     * Governs the A or B Buttons for the GameChip.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     * @param {string} key Key Press for Button
     */
    constructor (clickCallback, btnType, key) {
        // Generate Action Button DOM Element
        this._button = document.createElement("button");
        this._button.classList.add("action-button");
        this._button.id = btnType.toLowerCase() + "-btn";
        this._button.textContent = btnType;

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