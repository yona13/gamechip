import PopUp from "./pop-up.js";

export default class SelectBox extends PopUp {
    constructor (description, categories) {
        super("Select");

        // Remove Title
        this._box.removeChild(this._title);

        // Build Description DOM Element
        this._desc = document.createElement("div");
        this._desc.classList.add("select-description");
        this._desc.textContent = description;
        this._box.appendChild(this._desc);

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
        this._current = 0;
        this.setCursor();

        // Set Active to be False
        this._active = false;
    }

    get description () { return this._desc; }

    set description (str) { this._desc = str; }

    get options () { return this._options; }

    set options (arr) { this._options = arr; }

    get active () { return this._active; }

    set active (bool) { this._active = bool; }

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

        // Set Component Width
        this._boxW = Math.floor(width * 0.6);
        this._desc.style.width = `${this._boxW}px`;
        this._options.forEach(option => { option.style.width = `${this._boxW}px`; });
    }

    /**
     * Set Cursor Method
     * 
     * While cycling through the Select Options, if the cursor is on an option, 
     * then the option should be highlighted.
     * 
     * @param {boolean} on Cursor on Option
     */
    setCursor (on=true) {
        // Handle Options
        const check = this._options[this._current].classList.contains("cursor");
        if (on && !check)
            this._options[this._current].classList.add("cursor");
        if (!on && check)
            this._options[this._current].classList.remove("cursor");
    }

    /**
     * Set Selections Method
     * 
     * For the New Selection, the method will reset the DOM Elements in the 
     * Selection Box.
     * 
     * @param {string} desc New Description for Selection
     * @param {Object[]} categories New List of Categories
     */
    setSelections (desc, categories) {
        // Set Description
        this._desc.textContent = desc;

        // Remove Options from Box
        this._options.forEach(option => { this._box.removeChild(option); });

        // Set New Options
        this._options = [];
        categories.forEach(category => {
            const option = document.createElement("div");
            option.id = `${category.key.toLowerCase()}-option`;
            option.textContent = category.key;
            option.style.width = `${this._boxW}px`;
            this._box.appendChild(option);
            this._options.push(option);
        });

        // Set Cursor
        this._current = 0;
        this.setCursor();
    }

    /**
     * Vertical Move Method
     * 
     * Moving the Cursor Up or Down on the Select Box.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove(up=true) {
        const curr = this._current + (up ? -1 : 1);
        if (curr < this._options.length && curr >= 0) {
            this.setCursor(false);
            this._current = curr;
            this.setCursor();
        }
    }

    /**
     * Accept Action Method
     * 
     * Chooses the Option on the Select Box that the User has selected, and the
     * method returns the string of what was selected.
     * 
     * @returns String Representation of Selection
     */
    acceptAction () { return this._options[this._current].textContent; }
}