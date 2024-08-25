export default class MenuBase {
    #returnCallback;

    /**
     * Menu Base Class
     * 
     * For each of the different sub-menus and main menu,
     * this is the base class for them, initialising the 
     * overall DOM element, along with the options that can
     * be selected by the User, and the return button.
     * 
     * @param {string} name Name of Sub-Menu
     * @param {Array} arr Array of Options
     */
    constructor (name, arr) {
        // Generate Container DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("start-menu");
        this._module.id = `${name}-menu`;

        // Generate Menu Box DOM Element
        this._box = document.createElement("div");
        this._box.classList.add("menu-box");

        // Generate Blurred Background DOM Element
        this._blurred = document.createElement("div");
        this._blurred.classList.add("blurred-background");

        // Append Components to Module
        this._module.appendChild(this._blurred);
        this._module.appendChild(this._box);

        // Generate Option DOM Elements
        this._options = [];
        arr.forEach(entry => {
            const option = document.createElement("div");
            option.id = `${entry.toLowerCase()}-option`;
            option.textContent = entry;
            this._module.appendChild(option);
            this._options.push(option);
        });

        // Generate Return DOM Element
        this._return = document.createElement("div");
        this._return.classList.add(`${name}-return`);
        this._return.textContent = "return";
        
        // Initialise Variable
        this._current = 0;
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get options () { return this._options; }

    set options (arr) { this._options = arr; }

    get return () { return this._return; }

    set return (btn) { this._return = btn; }

    get current () { return this._current; }

    set current (num) { this._current = num; }

    /**
     * Show Function
     * 
     * Overlay Menu on Display.
     */
    show () {}

    /**
     * Take Down Function
     * 
     * Take down Menu from Display.
     */
    takeDown () { this.#returnCallback(); }

    /**
     * Vertical Move Function
     * 
     * Navigate the Menu Options.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) {}

    /**
     * Accept Action
     * 
     * Choose a Menu Option.
     */
    acceptAction () {}
    
    /**
     * Decline Action
     * 
     * Either Navigate to Parent Menu or Close Menu.
     */
    declineAction () { this.#returnCallback(); }

    /**
     * Place Cursor
     * 
     * Place or Remove the Cursor on the Option.
     * 
     * @param {boolean} on Place or Remove
     */
    placeCursor (on=true) {}

    setReturnCallback (returnCallback) { this.#returnCallback = returnCallback; }

    /**
     * Set Dimensions Function
     * 
     * For the Components of the Menu Box, the width and
     * height are to be set.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimensions (width, height) {
        // Set Container Dimensions
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`

        // Set Blurred Backgound Dimensions
        this._blurred.style.width = `${width}px`;
        this._blurred.style.height = `${height}px`;

        // Set Menu Box Dimensions
        const boxW = Math.floor(width * 0.6);
        const boxH = Math.floor(height * 0.6);
        this._box.style.width = `${boxW}px`;
        this._box.style.height = `${boxH}px`;

        // Set Menu Box Position
        const left = Math.floor(width * 0.2);
        const top = Math.floor(height * 0.2);
        this._box.style.left = `${left}px`;
        this._box.style.top = `${top}px`;
    }
}