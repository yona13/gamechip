import Sign from "../sign.js";
import Level from "./level.js";

export default class Hard extends Level {
    // Key, Values of Wins, Draws, and Losses Scores
    #SCORES = {
        WIN: { value: 1 },
        DRAW: { value: 0 },
        LOSE: { value: -1 }
    };
    // Key, Index of Signs
    #SIGNS = [{sign: "rock"}, {sign: "paper"}, {sign: "scissors"}];
    // Frequency Distributions of Human's Choices
    #FREQUENCY_DISTRIBUTIONS = {
        WIN: {
            ROCKROCK: 1, ROCKPAPER: 1, ROCKSCISSORS: 1,
            PAPERROCK: 1, PAPERPAPER: 1, PAPERSCISSORS: 1,
            SCISSORSROCK: 1, SCISSORSPAPER: 1, SCISSORSSCISSORS: 1
        },
        DRAW: {
            ROCKROCK: 1, ROCKPAPER: 1, ROCKSCISSORS: 1,
            PAPERROCK: 1, PAPERPAPER: 1, PAPERSCISSORS: 1,
            SCISSORSROCK: 1, SCISSORSPAPER: 1, SCISSORSSCISSORS: 1
        },
        LOSE: {
            ROCKROCK: 1, ROCKPAPER: 1, ROCKSCISSORS: 1,
            PAPERROCK: 1, PAPERPAPER: 1, PAPERSCISSORS: 1,
            SCISSORSROCK: 1, SCISSORSPAPER: 1, SCISSORSSCISSORS: 1
        }
    };
    // Transition Probabilities of States
    #TRANSITION_TABLES = {
        WIN: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        DRAW: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        LOSE: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
    };

    /**
     * Hard Level Class
     * 
     * For the Rock, Paper, Scissors Game, the Hard Level uses a Markov Chain 
     * to make a Best Guess for it's next move. Initially, it will choose a 
     * random Sign, but all subsequent moves will predict the Human's next move
     * and select a Sign that would ensure the Algorithm's success.
     * 
     * @param {Sign[]} signs List of Available Signs
     */
    constructor (signs) { 
        super(signs, "hard"); 
        
        // Initialise Variables
        this._scores = { WIN: 0, DRAW: 0, LOSE: 0 };
        this._results = [];
        this._human = [];
        this._round = 0;
    }

    /**
     * Play Method
     * 
     * Using a Markov Chain, the method will find a Best Guess to Oppose the
     * Human's Selection.
     * 
     * @returns String Representation of Sign to Play
     */
    play () {
        // Initialise Variables
        let probabilities;

        // First Round:
        if (this._round === 0)
            return this._signs[Math.floor(Math.random() * this._signs.length)];

        // Subsequent Rounds:
        else {
            // Get Previous Choice and Result
            let idx = this.#getSignIndex(this._human.slice(-1)[0]);
            let key = this.#getScoreKey(this._results.slice(-1)[0]);

            // Second Round, probabilities of Each Choice are Equal
            if (this._round === 1)
                probabilities = [1/3, 1/3, 1/3];

            // Subsequent Rouds, probabilities from Transition Matrices
            else 
                probabilities = this.#TRANSITION_TABLES[key][idx];

            // Predict Next Move
            let predicted;
            let max = -1;
            for (let i = 0; i < probabilities.length; i++) {
                if (probabilities[i] > max) {
                    max = probabilities[i];
                    predicted = i;
                }
            }
            return this.#bestBet(predicted);
        }
    }

    /**
     * Update Method
     * 
     * Algorithm Learning Method.
     * 
     * @param {Sign} hMove Human Move
     * @param {Sign} aMove Algorithm Move
     * @param {number} result Result of Matchup
     */
    update (hMove, result) {
        if (this._round > 0) {
            // Update Frequency Distributions and Transition Tables
            let prev = this._human.slice(-1)[0];
            let pResult = this._results.slice(-1)[0];
            this.#updateFrequencyDistributions(prev.name, hMove.name, pResult);
            this.#updateTransitionTables(pResult);
        }

        // Update Scores and Results
        this._scores[this.#getScoreKey(result)]++;
        this._results.push(result);

        // Update Human and Algorithm Moves
        this._human.push(hMove);
        this._round++;
    }

    /**
     * Update Frequency Distributions Method
     * 
     * Track the Humans Moves, dependant on their success rate.
     * 
     * @param {string} prev Previous Human Choice
     * @param {string} curr Current Human Choice
     * @param {number} result Previous Result (1: win, 0: draw, -1: loss)
     */
    #updateFrequencyDistributions (prev, curr, result) {
        // Get the Key for the Score
        const key = this.#getScoreKey(result);

        // Update Frequency for Previous and Current Move by User
        this.#FREQUENCY_DISTRIBUTIONS[key][
            prev.toUpperCase() + curr.toUpperCase()
        ]++;
    }

    /**
     * Update Transition Tables Method
     * 
     * Track the Probabilities of the Human using a Particular Move, based on 
     * previous results.
     * 
     * @param {number} result Previous Result (1: win, 0: draw, -1: loss)
     */
    #updateTransitionTables (result) {
        // Get the Sum of Frequnecies for Each Score type and Sign
        const frequencies = this.#getCurrentFrequencies();

        // Get the Score Key
        const key = this.#getScoreKey(result);

        // Iterate through appropriate Transition Matrix and Update
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Get the Appropriate Frequency for that Matrix
                let current_freq = this.#FREQUENCY_DISTRIBUTIONS[key][
                    this._signs[i].toUpperCase() + this._signs[j].toUpperCase()
                ];

                // Update the Probability of Choosing Rock
                if (i === 0)
                    this.#TRANSITION_TABLES[key][i][j] = current_freq / frequencies[key].ROCK;
                // Update the Probability of Choosing Paper
                if (i === 1)
                    this.#TRANSITION_TABLES[key][i][j] = current_freq / frequencies[key].PAPER;
                // Update the Probability of Choosing Scissors
                if (i === 2)
                    this.#TRANSITION_TABLES[key][i][j] = current_freq / frequencies[key].SCISSORS;
            }
        }
    }

    /**
     * Best Bet Method
     * 
     * For a given Index of a Sign, the method will return the Sign that will
     * outmatch that Sign.
     * 
     * @param {number} idx Index of Sign
     * @returns Winning Sign
     */
    #bestBet (idx) {
        // Paper beats Rock
        if (idx === 0)
            return "paper";
        // Scissors beats Paper
        else if (idx === 1)
            return "scissors";
        // Rock beats Scissors
        else if (idx === 2)
            return "rock";
    }

    /**
     * Get Score Key Method
     * 
     * For a given Score Value, the method will return the corresponding key.
     * 
     * @param {number} value Score Value
     * @returns Score Key
     */
    #getScoreKey (value) {
        // Find the Corresponding Key to the Score Value
        let key;
        Object.entries(this.#SCORES).forEach(([k, v]) => {
            if (v.value === value)
                key = k;
        });

        return key;
    }

    /**
     * Get Sign Index Method
     * 
     * For the Sign, get the Corresponding Index.
     * 
     * @param {Sign} sign Sign to get Index of
     * @returns 0 for Rock; 1 for Paper; 2 for Scissors;
     */
    #getSignIndex (sign) {
        let idx;
        for (let i = 0; i < this.#SIGNS.length; i++)
            if (this.#SIGNS[i].sign === sign.name)
                idx = i;
        return idx;
    }

    /**
     * Get Current Frequencies Method
     * 
     * Compilation of the Humans Past Moves.
     * 
     * @returns Dictionary of Current Frequencies
     */
    #getCurrentFrequencies () {
        return {
            WIN: {
                ROCK:
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.ROCKROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.ROCKPAPER + 
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.ROCKSCISSORS,
                PAPER: 
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.PAPERROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.PAPERPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.PAPERSCISSORS,
                SCISSORS:
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.SCISSORSROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.SCISSORSPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.SCISSORSSCISSORS
            },
            DRAW: {
                ROCK:
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.ROCKROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.ROCKPAPER + 
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.ROCKSCISSORS,
                PAPER: 
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.PAPERROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.PAPERPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.PAPERSCISSORS,
                SCISSORS:
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.SCISSORSROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.SCISSORSPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.SCISSORSSCISSORS
            },
            LOSE: {
                ROCK:
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.ROCKROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.ROCKPAPER + 
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.ROCKSCISSORS,
                PAPER: 
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.PAPERROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.PAPERPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.PAPERSCISSORS,
                SCISSORS:
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.SCISSORSROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.SCISSORSPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.SCISSORSSCISSORS
            },
        }
    }
}