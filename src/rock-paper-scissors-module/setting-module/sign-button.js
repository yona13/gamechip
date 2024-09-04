export default class SignButton {
    /**
     * Sign Button Class
     * 
     * For each of the Signs in Rock, Paper, Scissors, the User needs to be 
     * able to select those signs to play their move, and this class allows the
     * User to do that.
     * 
     * @param {string} sign Name of Sign
     */
    constructor (sign) {
        // Build Sign Button DOM Element
        this._module = document.createElement("div");
        this._module.classList.add(`${sign.toLowerCase()}-sign-button`);

        // Build Cursor DOM Element
        this._cursor = document.createElement("div");
        this._cursor.id = "cursor-button";

        // Build Icon for Button
        this._icon = new Image();

        // Initialise Variables
        this._sign = sign;
        this._pointer = false;
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get cursor () { return this._cursor; }

    set cursor (elem) { this._cursor = elem; }

    get sign () { return this._sign; }

    set sign (str) { this._sign = str; }

    get pointer () { return this._pointer; }

    set pointer (bool) { this._pointer = bool; }

    /**
     * Set Dimensions Method
     * 
     * Set the Button and Icon Dimensions.
     * 
     * @param {number} dim Button Size (pixels)
     */
    setDimensions (dim) {
        // Set Module Dimensions
        this._module.style.width = `${dim}px`;
        this._module.style.height = `${dim}px`;

        // Set Cursor Dimensions
        this._cursor.style.width = `${dim}px`;
        this._cursor.style.height = `${dim}px`;

        // Set Icon Dimensions
        this._icon.style.width = `${dim}px`;
        this._icon.style.height = `${dim}px`;
    }

    /**
     * Set Icon Method
     * 
     * Set the Icon inside the Sign Button.
     * 
     * @param {string} src Source of Icon to Set
     */
    setIcon (src) {
        // Set Source of Icon
        this._module.innerHTML = "";
        this._icon.src = src;
        this._module.appendChild(this._icon);
        if (this._pointer)
            this._module.appendChild(this._cursor);
    }

    /**
     * Place Cursor Method
     * 
     * Place or Remove Cursor from the Button.
     * 
     * @param {boolean} on Place or Remove
     */
    placeCursor (on=true) {
        // Place Cursor on Button
        if (on && !this._pointer) {
            this._module.appendChild(this._cursor);
            this._pointer = true;
        }
        // Remove Cursor from Button
        if (!on && this._pointer) {
            this._module.removeChild(this._cursor);
            this._pointer = false;
        }
    }
}