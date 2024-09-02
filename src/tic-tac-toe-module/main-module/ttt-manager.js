import Game from "../game-module/game";
import Grid from "../grid-module/grid";

export default class TTTManager {
    #DEFAULT_GRID = 3;
    #THEMES = [
        "Normal",
        "Retro",
        "Neon",
        "Terminal",
        "Fancy",
        "Scruffy"
    ];

    constructor () {
        // Build Game DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("tic-tac-toe-game-module");

        // Build Scoring DOM Components
        this._scorecard = document.createElement("div");
        this._scorecard.classList.add("scorecard");

        // Build Human Scorecard DOM Components
        const humanScorecard = document.createElement("div");
        humanScorecard.classList.add("human-scorecard");

        // Build Human Label DOM Element
        this._humanLabel = document.createElement("div");
        this._humanLabel.classList.add("human-label");
        this._humanLabel.classList.add("turn");
        this._humanLabel.textContent = "H: ";

        // Build Human Score DOM Element
        this._human = document.createElement("div");
        this._human.classList.add("human-score");
        this._human.textContent = 0;

        // Add Components to Human Scorecard
        humanScorecard.appendChild(this._humanLabel);
        humanScorecard.appendChild(this._human);

        // Build Algorithm Scorecard DOM Components
        const algorithmScorecard = document.createElement("div");
        algorithmScorecard.classList.add("algorithm-scorecard");

        // Build Algorithm Label DOM Element
        this._algorithmLabel = document.createElement("div");
        this._algorithmLabel.classList.add("algorithm-label");
        this._algorithmLabel.textContent = "A: ";

        // Build Algorithm Score DOM Element
        this._algorithm = document.createElement("div");
        this._algorithm.classList.add("algorithm-score");
        this._algorithm.textContent = 0;

        // Add Components to Algorithm Scorecard
        algorithmScorecard.appendChild(this._algorithmLabel);
        algorithmScorecard.appendChild(this._algorithm);

        // Build Versus Label DOM Element
        const vsLabel = document.createElement("div");
        vsLabel.classList.add("versus-label");
        vsLabel.textContent = "VS";

        // Add Components to Scorecard
        this._scorecard.appendChild(humanScorecard);
        this._scorecard.appendChild(vsLabel);
        this._scorecard.appendChild(algorithmScorecard);

        // Initialise Grid Object
        this._grid = new Grid(this.#DEFAULT_GRID);

        // Append All Components to Module
        this._module.appendChild(this._grid.module);
        this._module.appendChild(this._scorecard);

        // Initialise Variables
        this._controller = true;
        this._user = "o";
        this._game = new Game(this.#DEFAULT_GRID);
        this._scores = {human: 0, algorithm: 0};
        this._end = false;

        // Set the Default Theme
        this.setTheme(this.#THEMES[0]);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get grid () { return this._grid; }

    set grid (obj) { this._grid = obj; }

    get controller () { return this._controller; }

    set controller (bool) { this._controller = bool; }

    get user () { return this._user; }

    set user (str) { this._user = str; }

    get game () { return this._game; }

    set game (obj) { this._game = obj; }

    get scores () { return this._scores; }

    set scores (dict) { this._scores = dict; }

    get end () { return this._end; }

    set end (bool) { this._end = bool; }

    /**
     * Setup Method
     * 
     * TODO: Write Description
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setup (width, height) {
        // Set Game Dimensions
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`;

        // Set Grid Dimensions
        const dim = Math.floor(Math.min(width, height) * 0.8);
        this._grid.setDimensions(dim);

        // Set Scorecard Font Size
        this._scorecard.style.fontSize = `${Math.floor(dim * 0.07)}px`;
    }

    /**
     * Set Marker Method
     * 
     * Before the Game begins, the User must select the marker theyb want to 
     * play with.
     * 
     * @param {string} nought Nought or Cross
     */
    setMarker (nought) { 
        this._user = nought;
        this._game.setup(nought);
    }

    /**
     * Set Theme Method
     * 
     * Update the Styling to Reflect the Theme Selected.
     * 
     * @param {string} theme Theme Name
     */
    setTheme (theme) {
        // Get Root Element
        const root = document.documentElement;
        root.className = theme.toLowerCase();
    }

    /**
     * Play Algorithm Move Method
     * 
     * Play Selected Algorithm's New Move.
     * 
     * @returns Message for Algorithm's Move
     */
    playAlgorithmMove () {
        // Get Next Move
        const move = this._game.algorithm.play(this._game.grid);
        
        // Update Display
        this._grid.algorithmSelect(move);

        // Return Message resulting from Move
        return this._game.attempt(move.x, move.y);
    }

    /**
     * Reset Method
     * 
     * TODO: Write Description
     */
    reset () {
        this._end = false;
    }

    /**
     * Horizontal Move Method
     * 
     * TODO: Write Description
     */
    horizontalMove (right=true) { if (!this._end) this._grid.horizontalMove(right); }

    /**
     * Vertical Move Method
     * 
     * TODO: Write Description
     */
    verticalMove (up=true) { if (!this._end) this._grid.verticalMove(up); }

    /**
     * Accept Action Method
     * 
     * TODO: Write Description
     * 
     * @callback gameoverCallback Gameover Callback Method
     */
    acceptAction (gameoverCallback) {
        if (!this._end) {
            // Check that the Attempt is Valid
            const turn = this._game.getMarker();
            let msg = this._game.attempt(this._grid.current.x, this._grid.current.y);
            
            // Check if Attempt was Illegal
            if (msg.includes("Illegal Move!")){
                gameoverCallback(msg); 
                return;
            }

            // Check if User has Won
            if (msg === this._user) {
                this._end = true;
                msg = "Congratulations, you won!";
            } 
            // Check if there is a Draw
            else if (msg === "Draw!")
                this._end = true;
            
            // Make the Move on the Grid
            this._grid.acceptAction(turn);

            // Don't allow Algorithm to Move if Game is Over
            if (this._end) {
                gameoverCallback(msg);
                return;
            }
                // return true;

            // Prompt Algorithm to Move
            setTimeout(() => {
                msg = this.playAlgorithmMove();
        
                // Chek if Algorithm has Won
                if (msg === (this._user === "o" ? "x" : "o")) {
                    this._end = true;
                    msg = "Bad luck, the Algorithm has won!";
                } 
                // Check if there is a Draw
                else if (msg === "Draw!")
                    this._end = true;
                
                if (this._end) {
                    gameoverCallback(msg);
                    return;
                }
            }, 1000);
        }
        // this.playAlgorithmMove();

        // // Chek if Algorithm has Won
        // if (this._msg === (this._user === "o" ? "x" : "o")) {
        //     this._end = true;
        //     this._msg = "Bad luck, the Algorithm has won!";
        // } 
        // // Check if there is a Draw
        // else if (this._msg === "Draw!")
        //     this._end = true;
        
        // return true;
    }

    /**
     * Decline Action Method
     * 
     * TODO: Write Description
     */
    declineAction () {}

    /**
     * Selection Action Method
     * 
     * TODO: Write Description
     */
    selectAction () {}
}