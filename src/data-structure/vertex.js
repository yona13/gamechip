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
        this.visited = false;
        this.cost = 0;
        this.neighbours = [];
    }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get visited () { return this._visited; }

    set visited (bool) { this._visited = bool; }

    get cost () { return this._cost; }

    set cost (num) { this._cost = num; }

    get neighbours () { return this._neighbours; }

    set neighbours (arr) { this._neighbours = arr; }

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
     * Insert Neighbour Function
     * 
     * Adds a new Vertex that is Neighbour this Vertex in 
     * the Graph.
     * 
     * @param {Vertex} vertex Vertex
     */
    insertNeighbour (vertex) { this.neighbours.push(vertex); }

    removeNeighbour (vertex) {
        // Find Vertex if Present in neighbours Array
        let idx = -1;
        for (let i = 0; i < this.neighbours.length; i++) {
            if (this.neighbours[i].sameVertex(vertex))
                idx = i;
        }

        // Remove from neighbours if Present
        if (idx >= 0)
            this.neighbours.splice(idx, 1);
    }
}