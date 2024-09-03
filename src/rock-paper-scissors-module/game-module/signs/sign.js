export default class Sign {
    /**
     * Sign Class
     * 
     * Base class for the Rock, Paper, Scissor Signs that are used in the main
     * game. The Base class sets up the DOM element for the Sign, as well as 
     * initialises some of the base variables, and the methods.
     * 
     * @param {string} name Name of Sign
     */
    constructor (name) {
        // Build Sign DOM Element
        this._element = document.createElement("div");
        this._element.classList.add(`${name.toLowerCase()}-sign`);

        // Build Icon DOM Element
        this._icon = new Image();
        this._element.appendChild(this._icon);

        // Initialise Name Variables
        this._name = name;
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get icon () { return this._icon; }

    set icon (img) { this._icon = img; }

    get name () { return this._name; }

    set name (str) { this._name = str; }

    /**
     * Set Dimensions Method
     * 
     * Set the Icon Dimensions.
     * 
     * @param {number} dim Desired Icon Dimension
     */
    setDimensions (dim) {
        // Set Icon Dimensions
        this._icon.style.width = `${dim}px`;
        this._icon.style.height = `${dim}px`
    }

    /**
     * Change Icon Method
     * 
     * For the given Theme, the Icon of the Sign should be Updated.
     * 
     * @param {string} theme New Theme
     */
    changeIcon (theme) {}

    /**
     * Matchup Method
     * 
     * Depending on how the Sign fairs against the Opposing Sign, the Method
     * will return either 1, 0, or -1, the first corresponding to a Win, and 
     * the second for a Draw, and finally the third for a Loss.
     * 
     * @param {Sign} sign Sign going up Against
     * @returns 1 for a Win, 0 for a Draw, -1 for a Loss
     */
    matchup (sign) { return 0; }
}