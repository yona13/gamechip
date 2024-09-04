import RockNormal from "../images/rock.png";
import RockMonotone from "../images/rock-hand.png";
import RockNeon from "../images/neon-rock.png";
import RockTerminal from "../images/rock-terminal.png";
import PaperNormal from "../images/paper.png";
import PaperMonotone from "../images/paper-hand.png";
import PaperNeon from "../images/neon-paper.png";
import PaperTerminal from "../images/paper-terminal.png";
import ScissorsNormal from "../images/scissors.png";
import ScissorsMonotone from "../images/scissors-hand.png";
import ScissorsNeon from "../images/neon-scissors.png";
import ScissorsTerminal from "../images/scissors-terminal.png";
import RPSDisplay from "../setting-module/rps-display";
import SignButton from "../setting-module/sign-button";
import Game from "../game-module/game";

export default class RPSManager {
    #THEMES = {
        normal: {
            rock: RockNormal,
            paper: PaperNormal,
            scissors: ScissorsNormal
        },
        monotone: {
            rock: RockMonotone,
            paper: PaperMonotone,
            scissors: ScissorsMonotone
        },
        neon: {
            rock: RockNeon,
            paper: PaperNeon,
            scissors: ScissorsNeon
        },
        terminal: {
            rock: RockTerminal,
            paper: PaperTerminal,
            scissors: ScissorsTerminal
        }
    }

    /**
     * Rock, Paper, Scissors Manager Class
     * 
     * For the Rock, Paper, Scissors Game, this Manager Class will Handle the UI
     * Components such as the Scores for Either Player, and the Display which 
     * will show both Players selected Signs. It also manages the Selection of
     * the Sign Buttons and the Actions with the parent Game Interface.
     */
    constructor () {
        // Build Game DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("rock-paper-scissors-game-module");

        // Build Display for the Game to take place in
        this._display = new RPSDisplay();
        this._module.appendChild(this._display.module);

        // Build Container for Buttons DOM Element
        this._container = document.createElement("div");
        this._container.classList.add("rps-button-container");

        // Build Sign Button DOM Elements
        this._buttons = [];
        ["rock", "paper", "scissors"].forEach(sign => {
            const btn = new SignButton(sign);
            this._container.appendChild(btn.module);
            this._buttons.push(btn);
        });
        this._module.appendChild(this._container);

        // Initialise Variables
        this._controller = true;
        this._game = new Game();
        this._scores = {human: 0, algorithm: 0};
        this._current = 0;
        this._theme = "normal";

        // Set the Default Theme
        this.setTheme(this._theme);

        // Set Cursor on Rock
        this._buttons[0].placeCursor();
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get controller () { return this._controller; }

    set controller (bool) { this._controller = bool; }

    get game () { return this._game; }

    set game (obj) { this._game = obj; }

    /**
     * Set Dimensions Method
     * 
     * Set the Display Dimensions for the Game.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimensions (width, height) {
        // Set Dimensions of Game Module
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`;

        // Set Display Dimensions
        const dWidth = Math.floor(width * 0.9);
        const dHeight = Math.floor(dWidth * 0.45);
        this._display.setDimensions(dWidth, dHeight);

        // Set Button Dimensions
        const dim = Math.floor(width * 0.25);
        const cHeight = Math.floor(height * 0.5);
        this._container.style.width = `${dWidth}px`;
        this._container.style.height = `${cHeight}px`;
        this._buttons.forEach(btn => { btn.setDimensions(dim); });
    }

    /**
     * Set Level Method
     * 
     * Set the Difficulty Level of the Game.
     * 
     * @param {string} level Selected Level
     */
    setLevel (level) { this._game.setLevel(level.toLowerCase()); }

    /**
     * Set Theme Method
     * 
     * Update the Styling for the Game.
     * 
     * @param {string} theme Theme Name
     */
    setTheme (theme) {
        // Update Theme Variable
        this._theme = theme.toLowerCase(); 

        // Get Root Element
        const root = document.documentElement;
        root.className = theme.toLowerCase();

        // Set Theme for Buttons
        this._buttons.forEach(btn => {
            // Handle Rock Button
            if (btn.sign === "rock")
                btn.setIcon(this.#THEMES[theme.toLowerCase()].rock);
            // Handle Paper Button
            if (btn.sign === "paper")
                btn.setIcon(this.#THEMES[theme.toLowerCase()].paper);
            // Handle Scissors Button
            if (btn.sign === "scissors")
                btn.setIcon(this.#THEMES[theme.toLowerCase()].scissors);
        });
    }

    /**
     * Horizontal Move Method
     * 
     * Move the Cursor Horizontally across Container.
     * 
     * @param {boolean} right Default Action is Rightwards
     */
    horizontalMove (right=true) {
        // Ensure Horizontal Move is Still in Container
        const curr = this._current + (right ? 1 : -1);
        if (curr < 3 && curr >= 0) {
            // Remove Cursor from Current Button
            this._buttons[this._current].placeCursor(false);

            // Update Current Pointer
            this._current = curr;
            
            // Place Cursor on Button
            this._buttons[this._current].placeCursor();
        }
    }

    /**
     * Accepet Action Method
     * 
     * When the User Makes a Move, the Display should update with their selected
     * Icon, but the Algorithm must Also Make a Move, and update the display with
     * its selected Move.
     * 
     * @returns Message indicating User's Success or Failure
     */
    acceptAction () {
        // Play Human Move
        const hMove = this._buttons[this._current].sign;

        // Get Algorithm move
        const aMove = this._game.algorithmSelect();

        // Update the Display
        this._display.setIcons(
            this.#THEMES[this._theme][hMove],
            this.#THEMES[this._theme][aMove]
        );

        // Update Scores
        const results = this._game.play(hMove, aMove);
        console.log(results);

        // TODO: in the following conditions, update algorithm with results

        // Handle Win
        if (results === 1) {
            this._scores.human += 1;
            this._display.updateScore(this._scores.human, true);
            return "WIN";
        }

        // Handle Draw
        else if (results === 0) {
            return "DRAW";
        }

        // Handle Loss
        else {
            this._scores.algorithm += 1;
            this._display.updateScore(this._scores.algorithm, false);
            return "LOSE";
        }
    }
}