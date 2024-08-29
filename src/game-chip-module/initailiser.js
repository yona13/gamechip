export default class Initialiser {
    #initialiseCallback;
    #showCallback;

    /**
     * Initialiser Class
     * 
     * TODO: Write Description
     * 
     * @param {Array} games List of Games
     * @callback initialiseCallback Initialise Callback Method
     */
    constructor (games, initialiseCallback) {
        // Build Initial Screen DOM Element
        this._screen = document.createElement("div");
        this._screen.classList.add("initial-screen");

        // Build Title DOM Element
        this._title = document.createElement("div");
        this._title.classList.add("initialise-title");
        this._title.textContent = "GAMECHIP";
        this._screen.appendChild(this._title);
        this._title.addEventListener("animationend", (e) => {
            this.#handleAnimationEnd();
        });

        // Initialise Variables
        this._games = games;
        this._options = [];
        this._arrows = [];
        this._ready = false;
        this._current = 0;

        // Setup Options for Game Selection
        this._games.forEach(game => {
            // Build Option DOM Element
            const option = document.createElement("div");
            option.classList.add("available-game");

            // Build Cursor Arrow DOM Element
            const arrow = document.createElement("div");
            arrow.classList.add("initial-cursor");

            // Build Game Title DOM Element
            const label = document.createElement("div");
            label.classList.add("available-game-title")
            label.textContent = game.title;

            // Add Components to Option
            option.appendChild(arrow);
            option.appendChild(label);

            // Add Componets to Corresponding Lists
            this._arrows.push(arrow);
            this._options.push(option);
        });

        // Set Callback Method
        this.#initialiseCallback = initialiseCallback;

        // Roll Down Title
        this.#displayTitle();
    }

    /**
     * Set Show Method
     * 
     * Set the Show Callback Method for Updating the GameChip Display.
     * 
     * @callback showCallback Show Callback
     * @callback takeDownCallback Take Down Callback
     * @callback dimensionsCallback Get Dimensions Callback
     */
    setScene (showCallback, takeDownCallback, getDimensions) {
        // Set Callback Method
        this.#showCallback = showCallback;

        // Set Initial Screen Dimensions
        const dimensions = getDimensions();
        this._screen.style.width = `${dimensions.width}px`;
        this._screen.style.height = `${dimensions.height}px`;

        // Set Title Font Size
        const size = Math.floor(Math.min(dimensions.width, dimensions.height) * 0.1);
        this._title.style.fontSize = `${size}px`;

        // Set Initial Screen on Diplsay
        this.#showCallback(this._screen);
    }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () { this.#verticalMove(); }

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () {}

    /**
     * Down Callback Method
     * 
     * Handles the Click of the Down Button on the Direction Pad.
     */
    downCallback () { this.#verticalMove(false); }

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () {}

    /**
     * A Callback Method
     * 
     * Handles the Click of the A Action Button.
     */
    aCallback () { 
        if (this._ready)
            this.#initialiseCallback(this._games[this._current]); 
    }

    /**
     * B Callback Method
     * 
     * Handles the Click of the B Action Button.
     */
    bCallback () {}

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () {}

    /**
     * Select Callback Method
     * 
     * Handles the Click of the Select User Button.
     */
    selectCallback () {}

    /**
     * Vertical Move Function
     * 
     * Move the Cursor down or up along game options.
     * 
     * @param {boolean} down Default is Downwards
     */
    #verticalMove (down=true) {
        if (this._ready) {
            const curr = this._current + (down ? -1 : 1);
            if (curr < this._games.length && curr >= 0) {
                this._arrows[this._current].classList.remove("active");
                this._current = curr;
                this._arrows[this._current].classList.add("active");
            }
        }
    }

    /**
     * Handle Animaition End Method
     * 
     * For the Ends of Animiations, depening on the animation type, this method
     * will handle what should happen next.
     */
    #handleAnimationEnd () {
        // Handle Roll-Down Animation Complete
        if (this._title.classList.contains("roll-down")) {
            this._title.classList.remove("roll-down");
            this._title.classList.add("roll-up");
        } 
        // Handle Roll-Up Animation Complete
        else if (this._title.classList.contains("roll-up")) {
            this._title.classList.remove("roll-up");
            this.#displayGames();
        }
    }

    /**
     * Display Title Method
     * 
     * Initialise Title Roll Down Display.
     */
    #displayTitle () { this._title.classList.add("roll-down"); }

    /**
     * Display Games Method
     * 
     * Games Display is Ready.
     */
    #displayGames () {
        // Set Variables to Ready
        this._ready = true;
        this._screen.classList.add("ready");

        // Display Games and Initialise Cursor
        this._options.forEach(option => { this._screen.appendChild(option); });
        this._arrows[0].classList.add("active");
    }
}