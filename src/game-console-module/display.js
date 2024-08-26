export default class Display {
    /**
     * Display Class
     * 
     * Governs the Game Console Display.
     */
    constructor () {
        // Generate Display DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("game-console-display");
    }

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