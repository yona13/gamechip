import "../css/drop-down-styling.css";
import OptionsList from "./options.js";

export default class DropDownModule extends OptionsList {
    /**
     * Drop Down Module
     * 
     * Generic Drop Down Module, that creates a list
     * of options that a User can Choose from, with a
     * default Option that will display for the user.
     * 
     * @param {Array} content Array of Content
     * @param {string} name Name of Options List
     * @param {string} selected Default Option
     */
    constructor (content, name, selected) {
        super(content, name, selected);

        // Create DOM Elemets
        this.dropDown = document.createElement("div");
        this.dropDown.classList.add(`${name}-dropdown`);
        this.dropDown.textContent = selected;
        
        // Initially, not Disabled
        this.disabled = false;

        // Add Click Event Listener to Select
        this.dropDown.addEventListener("click", (e) => { this.toggle(); });

        // Append Options List to Module
        this.dropDown.appendChild(this.options);
    }

    get dropDown () { return this._drop_down; }

    set dropDown (elem) { this._drop_down = elem; }

    /**
     * Update Selection Method
     * 
     * Update Dropdown selection based on User's seleciton.
     */
    updateSelection () { this.dropDown.childNodes[0].nodeValue = this.selected; }
}