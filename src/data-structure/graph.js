import Edge from "./edge.js";
import Vertex from "./vertex.js";

export default class Graph {
    /**
     * Graph Class
     * 
     * Implementation of the Graph Data Structure, which
     * utilises the Vertex and Edge Classes that are used
     * to represent the data, and to connect the data to
     * one another.
     */
    constructor () {
        // Initialise Variables
        this._vertices = []; 
        this._edges = [];
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
     * For a given Vertex, if it is in the Graph, and if it
     * has any Edges associated with it, then those Edges 
     * would be removed, and finally the Vertex would then 
     * be removed from the Graph.
     * 
     * @param {Vertex} v Vertex
     */
    removeVertex (v) {
        // Check if Vertex is Connected to Other Vertices
        for (let edge of this.edges()) {
            if (edge.hasVertex) {
                // Remove Neighbour References for Vertiices
                edge.vertices[0].removeNeighbour(edge.vertices[1]);
                edge.vertices[1].removeNeighbour(edge.vertices[0]);

                // Remove Edge
                this.removeEdge(edge);
            }
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
     * Clear Vertices Function
     * 
     * Clears all vertices in the Graph.
     */
    clearVertices () {
        do { this._vertices.pop() } while (this._vertices.length > 0);
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
     * For a given Edge, if it is in the Graph, the Edge 
     * would then be removed from the Graph.
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
     * Removes all edges in the Graph.
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
}