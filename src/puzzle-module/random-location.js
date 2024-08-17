import GenericControls from "./generic-controls.js";

export default class RandomLocationControls extends GenericControls {
    constructor (x, y, board) {
        super(["Random", "Location"], x, y, board);
    }

    generate () {
        let pos = {x: 0, y: 0};
        while (true) {
            Object.keys(pos).forEach(coord => {
                pos[coord] = this.#random();
            });

            if (pos.x !== this.x && pos.y !== this.y)
                break;
        }

        return pos;
    }

    /**
     * 
     * @callback attemptCallback 
     * @callback promptCallback 
     */
    setCallback (attemptCallback, promptCallback) {
        this.attempt.addEventListener("click", (e) => {
            const pos = this.generate();
            attemptCallback(pos.x, pos.y);
        });
        this.show.addEventListener("click", (e) => {
            promptCallback();
        });
    }

    #random () { return Math.floor(Math.random() * this.size); }
}