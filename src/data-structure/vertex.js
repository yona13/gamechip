export default class Vertex {
    /**
     * Vertex Class
     * 
     * Data structure that store the data within the Graph,
     * in this case, stores (x, y) coordinates.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    constructor (x, y) {
        // Initialise Variables
        this.x = x;
        this.y = y;
        this.opposites = [];
    }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get opposites () { return this._opposites; }

    set opposites (arr) { this._opposites = arr; }

    /**
     * Same Vertex Function
     * 
     * Checks if the given Vertex is the same one as this.
     * 
     * @param {Vertex} v Vertex
     * @returns True if the Same Vertex
     */
    sameVertex (v) { return v.x === this.x && v.y === this.y; }

    /**
     * Insert Opposite Function
     * 
     * Adds a new Vertex that is Opposite this Vertex in 
     * the Graph.
     * 
     * @param {Vertex} vertex Vertex
     */
    insertOpposite (vertex) { this.opposites.push(vertex); }

    removeOpposite (vertex) {
        // Find Vertex if Present in Opposites Array
        let idx = -1;
        for (let i = 0; i < this.opposites.length; i++) {
            if (this.opposites[i].sameVertex(vertex))
                idx = i;
        }

        // Remove from Opposites if Present
        if (idx >= 0)
            this.opposites.splice(idx, 1);
    }
}