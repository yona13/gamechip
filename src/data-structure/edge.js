import Vertex from "./vertex.js";

export default class Edge {
    /**
     * Edge Class
     * 
     * Data structure that connects two Vertices of the
     * Graph Data Structure.
     * 
     * @param {Vertex} u Starting Vertex
     * @param {Vertex} v Ending Vertex
     */
    constructor (u, v) {
        // Initialise Variables
        this.vertices = [];
        this.vertices.push(u);
        this.vertices.push(v);
    }

    get vertices () { return this._vertices; }

    set vertices (arr) { this._vertices = arr; }

    /**
     * Same Edge Function
     * 
     * Checks if the given Edge is the same edge as this.
     * 
     * @param {Edge} e Edge
     * @returns True if they are the Same Edge
     */
    sameEdge (e) {
        let first = false;
        let second = false;
        e.vertices.forEach(u => {
            if (this.vertices[0].sameVertex(u) || this.vertices[1].sameVertex(u)) {
                if (!first)
                    first = true;
                else
                    second = true;
            }
        });

        return first && second;
    }

    /**
     * Get Neighbour Function
     * 
     * For a given vertex, if it exists in the edge, the
     * function will return the neighbour vertex, otherwise
     * it will return null;
     * 
     * @param {Vertex} v Vertex
     * @returns Neighbour Vertex, or Null
     */
    getNeighbour (v) {
        let u = null;
        this.vertices.forEach(vertex => {
            if (v.x === vertex.x && v.y === vertex.y)
                u = vertex;
        });

        return u;
    }

    /**
     * Has Vertex
     * 
     * Checks if one of the Vertices that makes up the Edge
     * contains the desired Vertex, and returns true if it
     * does.
     * 
     * @param {Vertex} v Vertex
     * @returns True if Edge Connects Vertex
     */
    hasVertex (v) {
        let check = false;
        this.vertices.forEach(vertex => {
            if (v.sameVertex(vertex))
                check = true;
        });

        return check;
    }

    /**
     * Has Vertices Function
     * 
     * Checks if the pair of given Vertices are connected 
     * by the Edge, and returns true if they are.
     * 
     * @param {Vertex} u One Vertex
     * @param {Vertex} v Other Vertex
     * @returns True if both Vertices are connected by Edge
     */
    hasVertices (u, v) {
        let first = false;
        let second = false;
        this.vertices.forEach(vertex => {
            if (u.sameVertex(vertex))
                first = true;
            if (v.sameVertex(vertex))
                second = true;
        });

        return first && second;
    }
}