import PopUp from "./pop-up.js";

export default class SelectBox extends PopUp {
    constructor (description, categories) {
        super("Select");

        // Build Description DOM Element
        this._desc = document.createElement("div");
        this._desc.classList.add("select-description");
        this._desc.textContent = description;

        // Build Option DOM Elements
        this._options = [];
        categories.forEach(category => {
            const option = document.createElement("div");
            option.id = `${category.key.toLowerCase()}-option`;
            option.textContent = category.key;
            this._box.appendChild(option);
            this._options.push(option);
        });

        // Setup Cursor
        this._cursor = 0;
        this.setCursor();

        // Initialise Variable
        this._selected = "";
    }

    get description () { return this._desc; }

    set description (str) { this._desc = str; }

    get options () { return this._options; }

    set options (arr) { this._options = arr; }

    get selected () { return this._select; }

    set selected (str) { this._selected = str; }

    /**
     * Set Dimensions Method
     * 
     * For the Components of the Select Box, the width and height are to be set.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimensions (width, height) {
        super.setDimensions(width, height);

        // Set Description 
    }
}