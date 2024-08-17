export default class Display {
    /**
     * Display Class
     * 
     * Part of the Puzzle Controller Module, this class is
     * the part of the UI that updates the User on moves 
     * that either they or the Controller Algorithm has
     * completed. Additionally, the display will show any
     * alerts that should come to the User's attention.
     */
    constructor () {
        // Create Display DOM Element
        this.module = document.createElement("div");
        this.module.classList.add("controller-display");

        // Intialise Variables
        this._message = "";
        this._save_message = "";
        this._alerted = false;
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Clear Function
     * 
     * Clears all messages on the Display.
     */
    clear () { 
        // Clear Message Queue and Display
        this._message = "";
        this.module.innerHTML = ""; 
    }

    /**
     * Update Function
     * 
     * For the incoming message, this function will display
     * the new message below any current messages.
     * 
     * @param {string} msg New Message
     */
    update (msg) {
        // Update New Queue of Messages
        if (this._message === "")
            this._message = msg;
        // Update Existing Queue of Messages
        else
            this._message += "\n" + msg;

        // Update Display
        this.module.textContent = this._message;
    }

    /**
     * Alert Function
     * 
     * For the incoming alert message, this function will
     * display the alert below any current messages, and
     * change the display to indicate there is an alert.
     * 
     * @param {string} msg Alert Message
     */
    alert (msg) {
        // Set Alert and Store Current Queue
        this._alerted = true;
        this._save_message = this._message;

        // Update Display indicating Alert
        if (!this.module.classList.contains("alert"))
            this.module.classList.add("alert");

        // Queue Alert
        this.update(msg);
    }

    /**
     * Ease Function
     * 
     * If there was an alert, this function will clear any
     * alert messages and revert the display to a regular
     * one.
     */
    ease () {
        // Ease Display from Alert to Regular
        if (this.module.classList.contains("alert"))
            this.module.classList.remove("alert");

        // Clear Message Queue of Alert
        this.clear();

        // Resume Original Message Queue
        this._message = this._save_message;
        this.module.textContent = this._message;
    }
}