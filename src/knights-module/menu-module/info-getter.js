import MenuBase from "./menu-base.js";

export default class InfoGetter extends MenuBase {
    constructor (returnCallback) {
        super("info-getter", [], returnCallback);

        // TODO: Add Information
    }

    /**
     * Vertical Move Function
     * 
     * Navigate the Menu Options.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) {}
}