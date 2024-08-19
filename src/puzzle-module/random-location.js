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
     * @callback updateCallback
     * @callback promptCallback 
     */
    setCallback (attemptCallback, updateCallback, promptCallback) {
        this.start.addEventListener("click", (e) => {
            const pos = this.generate();
            attemptCallback(pos.x, pos.y);
        });
        this.info.addEventListener("click", (e) => {
            updateCallback(
                "Use the Select Start Button to choose your " +
                "initial Tile. Once selected, a Goal tile will" +
                " become highlighted, and you have to try to reach" +
                " that tile in as few moves as possible.\nBy clicking" +
                " the Show button, the knight will automatically move" +
                " to the Goal tile in the fewest possible moves."
            );
        });
        this.show.addEventListener("click", (e) => {
            promptCallback();
        });
    }

    #random () { return Math.floor(Math.random() * this.size); }
}