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
     * Show Function
     * 
     * Update the Display to Show the Desired Element.
     * 
     * @param {*} elem Element to Display
     */
    show (elem) {
        this._module.innerHTML = "";
        this._module.appendChild(elem);
    }

    /**
     * Get Dimensions Function
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