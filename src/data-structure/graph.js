import Edge from "./edge.js";
import Vertex from "./vertex.js";
import Queue from "./queue.js";
import Stack from "./stack.js";

export default class Graph {
    /**
     * Graph Class
     * 
     * TODO: write description
     */
    constructor () {
        // Initialise Variables
        this._vertices = []; 
        this._edges = [];
    }

    bfs (rx, ry, gx, gy) {
        const root = this.getVertex(rx, ry);
        const goal = this.getVertex(gx, gy);
        for (let v of this.vertices())
            v.visited = false;
        root.visited = true;
        let dist = [{vertex: root, cost: 0}];
        let parent = [];
        const queue = new Queue();
        queue.enqueue(root);
        
        while (!queue.isEmpty()) {
            let vertex = queue.dequeue();
            if (vertex.sameVertex(goal))
                break;

            vertex.neighbours.forEach(v => {
                if (!v.visited) {
                    v.visited = true;
                    let cost = 0;
                    for (let i = 0; i < dist.length; i++)
                        if (dist[i].vertex.sameVertex(vertex)) {
                            cost = dist[i].cost;
                            break;
                        }
                    dist.push({vertex: v, cost: cost + 1});
                    parent.push({vertex: v, parent: vertex});
                    queue.enqueue(v);
                }
            });
        }
        let stack = new Stack();
        stack.push(goal);
        let current = goal;
        while (true) {
            let idx = -1;
            for (let i = 0; i < parent.length; i++)
                if (parent[i].vertex.sameVertex(current)) {
                    idx = i;
                    break;
                }
            
            stack.push(parent[idx].parent);
            current = parent[idx].parent;
            if (current.sameVertex(root))
                break;
        }
        stack.pop();
        return stack;
    }

    /**
     * Vertices Iterator Function
     * 
     * Function that can be used in loops to iterate
     * through the Graph's Vertices.
     * 
     * @returns Iterator of Vertices
     */
    vertices () {
        return {
            [Symbol.iterator]: () => {
                let i = 0;
                return {
                    next: () => {
                        if (i >= this._vertices.length) {
                            return { done: true };
                        } else {
                            return { value: this._vertices[i++], done: false };
                        }
                    }
                }
            }
        }
    }

    /**
     * Edges Iterator Function
     * 
     * Function that can be used in loops to iterate
     * through the Graph's Edges.
     * 
     * @returns Iterator of Edges
     */
    edges () {
        return {
            [Symbol.iterator]: () => {
                let i = 0;
                return {
                    next: () => {
                        if (i >= this._edges.length) {
                            return { done: true };
                        } else {
                            return { value: this._edges[i++], done: false };
                        }
                    }
                }
            }
        }
    }

    /**
     * Number of Vertices Function
     * 
     * Get the Number of Vertices within the Graph.
     * 
     * @returns Number of Vertices
     */
    numVertices () { return this._vertices.length; }

    /**
     * Number of Edges Function
     * 
     * Get the Number of Edges within the Graph.
     * 
     * @returns Number of Edges
     */
    numEdges () { return this._edges.length; }

    /**
     * Insert Vertex Function
     * 
     * For a given (x, y) coordinate, this function will 
     * create a new Vertex for the Graph.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    insertVertex (x, y) {
        const vertex = new Vertex(x, y);
        this._vertices.push(vertex);
    }

    /**
     * Remove Vertex Function
     * 
     * TODO: Write description
     * 
     * @param {Vertex} v Vertex
     */
    removeVertex (v) {
        // Check if Vertex is Connected to Other Vertices
        let idx = -1;
        for (let i = 0; i < this._edges.length; i++) {
            if (this._edges[i].hasVertex(v))
                idx = i;
        }

        // Handle Removal of Edge
        if (idx >= 0) {
            // Remove Neighbour References for Vertices
            let edge = this._edges[i];
            edge.vertices[0].removeNeighbour(edge.vertices[1]);
            edge.vertices[1].removeNeighbour(edge.vertices[0]);

            // Remove Edge
            this._edges.splice(idx, 1);
        }

        // Find Vertex in Array
        idx = -1;
        for (let i = 0; i < this._vertices.length; i++) {
            if (v.sameVertex(this._vertices[i]))
                idx = i;
        }

        // Remove Vertex if Found
        if (idx >= 0)
            this._vertices.splice(idx, 1);
    }

    /**
     * Get Vertex Function
     * 
     * For a given (x, y) coordinate, this function will 
     * search its known vertices and return the vertex that
     * corresponds with the coordinate, or null if it does
     * not exist.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @returns Corresponding Vertex
     */
    getVertex (x, y) {
        let u = null;
        for (let vertex of this.vertices()) {
            if (vertex.x === x && vertex.y === y)
                u = vertex;
        }

        return u;
    }

    /**
     * Insert Edge Function
     * 
     * For a given pair of Vertices, this function will
     * create a new Edge for the pair, if there isn't one
     * already.
     * 
     * @param {Vertex} u Starting Vertex
     * @param {Vertex} v Ending Vertex
     */
    insertEdge (u, v) {
        if (this.getEdge(u, v) === null) {
            const edge = new Edge(u, v);
            u.insertNeighbour(v);
            v.insertNeighbour(u);
            this._edges.push(edge);
        }
    }

    /**
     * Remove Edge Function
     * 
     * TODO: Write description
     * 
     * @param {Edge} e Edge
     */
    removeEdge (e) {
        // Check if Edge exists in Graph
        let idx = -1;
        for (let i = 0; i < this._edges.length; i++) {
            if (this._edges[i].sameEdge(e))
                idx = i;
        }

        // Remove if Edge exists
        if (idx >= 0) {
            // Remove Neighbour References for Vertices
            let edge = this._edges[idx];
            edge.vertices[0].removeNeighbour(edge.vertices[1]);
            edge.vertices[1].removeNeighbour(edge.vertices[0]);

            // Remove Edge
            this._edges.splice(idx, 1);
        }
    }

    /**
     * Clear Edges
     * 
     * Removes all known edges in the Graph.
     */
    clearEdges () {
        // Iterate through edges
        for (let edge of this.edges()) {
            // Remove References to Neighbour Vertices
            edge.vertices[0].removeNeighbour(edge.vertices[1]);
            edge.vertices[1].removeNeighbour(edge.vertices[0]);

            this._edges.pop();
        }
    }

    /**
     * Get Edge Function
     * 
     * For the given pair of Vertices, the function will
     * iterate through the known Edges of the Graph and 
     * return the Edge that connects them, or returns null.
     * 
     * @param {Vertex} u One Vertex
     * @param {Vertex} v Other Vertex
     * @returns Edge that Connects the two Vertices
     */
    getEdge (u, v) {
        let e = null;
        for (let edge of this.edges()) {
            if (edge.hasVertices(u, v))
                e = edge;
        }

        return e;
    }

    /**
     * Cost Function
     * 
     * Calculates the Pythagorean Distance between the two
     * vertices given.
     * 
     * @param {Vertex} u One Vertex
     * @param {Vertex} v Another Vertex
     * @returns Distance between two Vertices
     */
    #cost (u, v) {
        const delX = Math.pow(u.x - v.x, 2);
        const delY = Math.pow(u.y - v.y, 2);
        return Math.sqrt(delX + delY);
    }
}