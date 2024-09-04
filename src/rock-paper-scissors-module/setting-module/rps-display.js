export default class RPSDisplay {
    /**
     * Rock, Paper, Scissors Display Class
     * 
     * The Game is Displayed using this Class, including showing the User with
     * the selected Signs, both by them and the Algorithm, but also shows the
     * User the current running score for the Game.
     */
    constructor () {
        // Build Display DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("rps-display");

        // Build Human Move DOM Element
        this._human = document.createElement("div");
        this._human.classList.add("rps-human-move");

        // Build Human Label DOM Element
        this._hLabel = document.createElement("div");
        this._hLabel.classList.add("rps-human-label");
        this._hLabel.textContent = "Human: 0";

        // Build Human Icon DOM Element
        this._hIcon = new Image();

        // Add Components to Human Move
        this._human.appendChild(this._hLabel);
        this._human.appendChild(this._hIcon);

        // Build Algorithm Move DOM Element
        this._algorithm = document.createElement("div");
        this._algorithm.classList.add("rps-algorithm-move");

        // Build Algorithm Label DOM Element
        this._aLabel = document.createElement("div");
        this._aLabel.classList.add("rps-algorithm-label");
        this._aLabel.textContent = "Algorithm: 0";

        // Build Algorithm Icon DOM Element
        this._aIcon = new Image();

        // Add Components to Algorithm Move
        this._algorithm.appendChild(this._aLabel);
        this._algorithm.appendChild(this._aIcon);

        // Add Moves to Module
        this._module.appendChild(this._human);
        this._module.appendChild(this._algorithm);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Set Dimensions Method
     * 
     * For the Display, the Module Height should be about 40% of the Width.
     * 
     * @param {number} width Module Width (pixels)
     * @param {number} height Module Height (pixels)
     */
    setDimensions (width, height) {
        // Set Module Dimensions
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`;

        // Set Icon Dimensions
        this._hIcon.style.width = `${height}px`;
        this._hIcon.style.height = `${height}px`;
        this._aIcon.style.width = `${height}px`;
        this._aIcon.style.height = `${height}px`;
    }

    /**
     * Set Icons Method
     * 
     * For the Human and Algorithm Selections, the Display should Update to 
     * represent their Current Selections.
     * 
     * @param {string} hSrc Source for Human Icon
     * @param {string} aSrc Source for Algorithm Icon
     */
    setIcons (hSrc, aSrc) {
        // Handle Human Icon
        this._human.innerHTML = "";
        this._hIcon.src = hSrc;
        this._human.appendChild(this._hLabel);
        this._human.appendChild(this._hIcon);

        // Handle Algorithm Icon
        this._algorithm.innerHTML = "";
        this._aIcon.src = aSrc;
        this._algorithm.appendChild(this._aLabel);
        this._algorithm.appendChild(this._aIcon);
    }

    /**
     * Update Score Method
     * 
     * Depending on whether it is the Human or the Algorithm that won, the score
     * is updated using this Function.
     * 
     * @param {number} score Score to Update
     * @param {boolean} human Human Score to Update or Algorithm Score to Update
     */
    updateScore (score, human=true) {
        // Update Human Score
        if (human)
            this._hLabel.textContent = `Human: ${score}`;
        // Update Algorithm Score
        else
            this._aLabel.textContent = `Algorithm: ${score}`;
    }
}