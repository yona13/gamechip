export default class OptionsList {
    /**
     * Options List Class
     * 
     * Generates an Options List of desired content.
     * 
     * @param {Array} content Array of Content
     * @param {string} name Name of Options List
     * @param {string} selected Default Option
     */
    constructor (content, name, selected) {
        // Create DOM Elements
        this.name = name;
        this.options = document.createElement("div");
        this.options.classList.add(`${name}-options`);

        // Initialise Content
        this.initialise(content, selected);
    }

    get name () { return this._name; }

    set name (str) { this._name = str; }

    get list () { return this._list; }

    set list (arr) { this._list = arr; }

    get options () { return this._options; }

    set options (elem) { this._options = elem; }

    get selected () { return this._selected; }

    set selected (value) { this._selected = value; }

    /**
     * Toggle Method 
     *
     * Dropdown List can be revealed or hidden using
     * this method.
     */
    toggle () {
        // Toggle Visibility of Options
        this.options.classList.toggle("visible");

        // Toggle Visibility of Menu Objects
        this.list.forEach(item => { item.classList.toggle("visible"); });
    }

    /**
     * Initialise Method
     * 
     * Sets up the options in Option List and adds
     * them to the List.
     * 
     * @param {Array} content Array of Content
     * @param {string} selected Default Selection
     */
    initialise (content, selected) {
        this.list = [];
        this.selected = selected;
        this.options.innerHTML = "";

        // Iterate through Content
        content.forEach(item => {
            // Create Option DOM Object
            const option = document.createElement("div");
            option.classList.add(`${this.name}-option`);
            option.textContent = item;
            option.id = item.toLowerCase();

            // Add Option to List & Options Object
            this.list.push(option);
            this.options.appendChild(option);
        });
    }
}