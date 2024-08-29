export default class Display {
    /**
     * Display Class
     * 
     * Governs the GameChip Display.
     */
    constructor () {
        // Generate Background DOM Element
        this._background = document.createElement("div");
        this._background.classList.add("gamechip-background");

        // Generate Display DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("gamechip-display");

        // Generate Title
        const title = document.createElement("div");
        title.classList.add("gamechip-title");
        title.textContent = "GAMECHIP \u00A9";

        // Add Display to Background
        this._background.appendChild(this._module);
        this._background.appendChild(title);
    }

    get background () { return this._background; }

    set background (elem) { this._background = elem; }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Show Method
     * 
     * Update the Display to Show the Desired Element.
     * 
     * @param {*} elem Element to Display
     * @param {boolean} overlay Default is False
     */
    show (elem, overlay=false) {
        if (!overlay) {
            this._module.innerHTML = "";
            this._main = elem;
        }
        this._module.appendChild(elem);
    }

    /**
     * Take Down Method
     * 
     * Update the Display to remove any overlayed element.
     */
    takeDown () {
        this._module.innerHTML = "";
        this._module.appendChild(this._main);
    }

    /**
     * Get Dimensions Method
     * 
     * Retrieves the Screen Width and Height for the Game.
     * 
     * @returns Dictionary of Screen Width and Height
     */
    getDimensions () { return {
        width: this._module.clientWidth,
        height: this._module.clientHeight
    }; }
}