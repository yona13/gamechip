import DropDownModule from "../drop-down-module/dropdown";

export default class BoardBuilder {
    #MINIMUM = 5;
    #MAXIMUM = 8;

    /**
     * Board Builder Class
     * 
     * Controller Class for Adjusting the Chessboard size
     * and providing information about the size limitations
     * for the User.
     * 
     * @callback infoCallback Builder Info Callback
     * @callback selectCallback Option Select Callback
     */
    constructor (infoCallback, selectCallback) {
        // Create Module DOM Element
        this.module = document.createElement("div");
        this.module.classList.add("board-builder");

        // Create Title DOM Element
        const title = document.createElement("h2");
        title.textContent = "Board Builder";

        // Create Information Button DOM Element
        this.info = document.createElement("button");
        this.info.classList.add("info-board-builder-btn");
        this.info.textContent = "Info";
        
        // Create Board Size Options DOM Element
        this.select = new DropDownModule(this.#buildOptions(), "board-builder", this._options[8]);

        // Add Display Builder Info Event Listener
        this.info.addEventListener("click", (e) => {
            infoCallback(
                "Rebuild Board to your liking.\nPlease note that you may not " +
                "Build a board that is smaller than 5 by 5, because there are " +
                "no Knight's tours that can be completed in smaller boards, " +
                "except for the Trivial 1 by 1 case. Due to screen size limitations" +
                "the maximum board size is the traditional Chessboard size, 8 by 8."
            );
        });

        // Add Option Select Event Listeners
        this.select.list.forEach(option => {
            option.addEventListener("click", (e) => {
                // Find the Option that has been Selected
                let selection;
                Object.entries(this._options).forEach(([key, value]) => {
                    if (value === option.textContent) {
                        this.select.selected = option.textContent;
                        selection = key;
                        this.select.updateSelection();
                    }
                });

                // Update Board
                selectCallback(selection);
            });
        });

        // Append Elements into Module
        this.module.appendChild(title);
        this.module.appendChild(this.info);
        this.module.appendChild(this.select.dropDown);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get info () { return this._info; }

    set info (elem) { this._info = elem; }

    get select () { return this._select; }

    set select (obj) { this._select = obj; }

    /**
     * Build Options Function
     * 
     * Builds options for the Sizes of the Chessboard that
     * are Mathematical possible (up to 8 by 8).
     * 
     * @returns Array of Options for Dropdown list
     */
    #buildOptions () {
        this._options = {};
        for (let i = this.#MINIMUM; i <= this.#MAXIMUM; i++)
            this._options[i] = `${i}\u00D7${i}`;

        return Object.values(this._options);
    }
}