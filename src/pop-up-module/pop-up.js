import "./pop-up-styling.css";

export default class PopUp {
    /**
     * Pop-Up Class
     * 
     * Several Components to the Game require a Pop-Up Box, and this Class 
     * Represents that Box.
     * 
     * @param {string} name Name for Pop-Up
     */
    constructor (name) {
        // Build Pop-Up Container DOM Element
        this._module = document.createElement("div");
        this._module.classList.add(`${name.toLowerCase()}-container`);
        
        // Build Pop-Up Box DOM Element
        this._box = document.createElement("div");
        this._box.classList.add(`${name.toLowerCase()}-box`);

        // Build Title DOM Element
        this._title = document.createElement("div");
        this._title.classList.add(`${name.toLowerCase()}-title`);
        this._title.textContent = name;
        this._box.appendChild(this._title);

        // Build Blurred Background DOM Element
        this._blurred = document.createElement("div");
        this._blurred.classList.add("blurred-background");

        // Append Components to Module
        this._module.appendChild(this._blurred);
        this._module.appendChild(this._box);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Set Dimensions Method
     * 
     * For the Components of the Pop-Up Box, the width and height are to be set.
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

        // Set Pop-Up Box Dimensions
        const boxW = Math.floor(width * 0.6);
        const boxH = Math.floor(height * 0.6);
        this._box.style.width = `${boxW}px`;
        this._box.style.height = `${boxH}px`;

        // Set Pop-Up Box Position
        const left = Math.floor(width * 0.2);
        const top = Math.floor(height * 0.2);
        this._box.style.left = `${left}px`;
        this._box.style.top = `${top}px`;
    }
}