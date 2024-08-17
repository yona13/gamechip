import GenericControls from "./generic-controls.js";

export default class FullBoardControls extends GenericControls {
    constructor (x, y, board) {
        super(["Full", "Board"], x, y, board);
    }
}