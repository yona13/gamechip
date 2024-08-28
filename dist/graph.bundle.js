"use strict";
(self["webpackChunkgamechip"] = self["webpackChunkgamechip"] || []).push([["graph"],{

/***/ "./src/data-structures/edge.js":
/*!*************************************!*\
  !*** ./src/data-structures/edge.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edge)
/* harmony export */ });
/* harmony import */ var _vertex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertex.js */ "./src/data-structures/vertex.js");


class Edge {
    /**
     * Edge Class
     * 
     * Data structure that connects two Vertices of the Graph Data Structure.
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
     * Same Edge Method
     * 
     * Checks if the given Edge is the same edge as this.
     * 
     * @param {Edge} e Edge
     * @returns True if they are the Same Edge
     */
    sameEdge (e) {
        // Check that both Vertices are Identical
        let first = false;
        let second = false;

        // Iterate through Vertices on Edge
        e.vertices.forEach(u => {
            if (
                this.vertices[0].sameVertex(u) || 
                this.vertices[1].sameVertex(u)
            ) {
                if (!first)
                    first = true;
                else
                    second = true;
            }
        });

        return first && second;
    }

    /**
     * Has Vertex Method
     * 
     * Checks if one of the Vertices that makes up the Edge contains the desired 
     * Vertex, and returns true if it does.
     * 
     * @param {Vertex} v Vertex
     * @returns True if Edge Connects Vertex
     */
    hasVertex (v) {
        // Check Both Vertices on Edge
        let check = false;
        this.vertices.forEach(vertex => {
            // Check if Vertex is a Match
            if (v.sameVertex(vertex))
                check = true;
        });

        return check;
    }

    /**
     * Has Vertices Method
     * 
     * Checks if the pair of given Vertices are connected  by the Edge, and 
     * returns true if they are.
     * 
     * @param {Vertex} u One Vertex
     * @param {Vertex} v Other Vertex
     * @returns True if both Vertices are connected by Edge
     */
    hasVertices (u, v) {
        // Check Both Vertices on Edege
        let first = false;
        let second = false;
        this.vertices.forEach(vertex => {
            // Ensure Both are Accounted For
            if (u.sameVertex(vertex))
                first = true;
            if (v.sameVertex(vertex))
                second = true;
        });

        return first && second;
    }
}

/***/ }),

/***/ "./src/data-structures/graph.js":
/*!**************************************!*\
  !*** ./src/data-structures/graph.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Graph)
/* harmony export */ });
/* harmony import */ var _edge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edge.js */ "./src/data-structures/edge.js");
/* harmony import */ var _vertex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertex.js */ "./src/data-structures/vertex.js");



class Graph {
    /**
     * Graph Class
     * 
     * Implementation of the Graph Data Structure, which utilises the Vertex and
     * Edge Classes that are used to represent the data, and to connect the data
     * to one another.
     */
    constructor () {
        // Initialise Variables
        this._vertices = []; 
        this._edges = [];
    }

    /**
     * Vertices Iterator Method
     * 
     * Method that can be used in loops to iterate through the Graph's Vertices.
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
     * Edges Iterator Method
     * 
     * Method that can be used in loops to iterate through the Graph's Edges.
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
     * Number of Vertices Method
     * 
     * Get the Number of Vertices within the Graph.
     * 
     * @returns Number of Vertices
     */
    numVertices () { return this._vertices.length; }

    /**
     * Number of Edges Method
     * 
     * Get the Number of Edges within the Graph.
     * 
     * @returns Number of Edges
     */
    numEdges () { return this._edges.length; }

    /**
     * Insert Vertex Method
     * 
     * For a given (x, y) coordinate, this method will create a new Vertex for
     * the Graph.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    insertVertex (x, y) { this._vertices.push(new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"](x, y)); }

    /**
     * Remove Vertex Method
     * 
     * For a given Vertex, if it is in the Graph, and if it has any Edges 
     * associated with it, then those Edges would be removed, and finally the 
     * Vertex would then be removed from the Graph.
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
     * Clear Vertices Method
     * 
     * Clears all vertices in the Graph.
     */
    clearVertices () {
        do { this._vertices.pop() } while (this._vertices.length > 0);
    }

    /**
     * Get Vertex Method
     * 
     * For a given (x, y) coordinate, this method will search its known vertices
     * and return the vertex that corresponds with the coordinate, or null if it
     * does not exist.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @returns Corresponding Vertex
     */
    getVertex (x, y) {
        // Iterate through Vertices
        let u = null;
        for (let vertex of this.vertices()) {
            // Check that Vertex Coordinates match Desired
            if (vertex.x === x && vertex.y === y)
                u = vertex;
        }

        return u;
    }

    /**
     * Insert Edge Method
     * 
     * For a given pair of Vertices, this method will create a new Edge for the 
     * pair, if there isn't one already.
     * 
     * @param {Vertex} u Starting Vertex
     * @param {Vertex} v Ending Vertex
     */
    insertEdge (u, v) {
        // Ensure no Edge with Vertices already exists
        if (this.getEdge(u, v) === null) {
            // Create a New Edge for Vertices
            const edge = new _edge_js__WEBPACK_IMPORTED_MODULE_0__["default"](u, v);
            u.insertNeighbour(v);
            v.insertNeighbour(u);

            // Add to Edges Array
            this._edges.push(edge);
        }
    }

    /**
     * Remove Edge Method
     * 
     * For a given Edge, if it is in the Graph, the Edge would then be removed
     * from the Graph.
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
     * Get Edge Method
     * 
     * For the given pair of Vertices, the method will iterate through the known
     * Edges of the Graph and return the Edge that connects them, or returns 
     * null.
     * 
     * @param {Vertex} u One Vertex
     * @param {Vertex} v Other Vertex
     * @returns Edge that Connects the two Vertices
     */
    getEdge (u, v) {
        // Iterate through Edges
        let e = null;
        for (let edge of this.edges()) {
            // Check if Edge has both Vertices
            if (edge.hasVertices(u, v))
                e = edge;
        }

        return e;
    }
}

/***/ }),

/***/ "./src/data-structures/vertex.js":
/*!***************************************!*\
  !*** ./src/data-structures/vertex.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vertex)
/* harmony export */ });
class Vertex {
    /**
     * Vertex Class
     * 
     * Data structure that store the data within the Graph, in this case, stores
     * (x, y) coordinates.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    constructor (x, y) {
        // Initialise Variables
        this.x = x;
        this.y = y;
        this.visited = false;
        this.move = 0;
        this.neighbours = [];
    }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get visited () { return this._visited; }

    set visited (bool) { this._visited = bool; }

    get move () { return this._move; }

    set move (num) { this._move = num; }

    get neighbours () { return this._neighbours; }

    set neighbours (arr) { this._neighbours = arr; }

    /**
     * Same Vertex Method
     * 
     * Checks if the given Vertex is the same one as this.
     * 
     * @param {Vertex} v Vertex
     * @returns True if the Same Vertex
     */
    sameVertex (v) { return v.x === this.x && v.y === this.y; }

    /**
     * Insert Neighbour Method
     * 
     * Adds a new Vertex that is Neighbour this Vertex in the Graph.
     * 
     * @param {Vertex} vertex Vertex
     */
    insertNeighbour (vertex) { this.neighbours.push(vertex); }

    /**
     * Remove Neighbour Method
     * 
     * Removes a Neighbour Vertex, if it exists from the Vertex's Neighbours.
     * 
     * @param {Vertex} vertex Neighbour to Remove
     */
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/data-structures/graph.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hQZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7O0FBRWYsZ0JBQWdCOztBQUVoQixlQUFlOztBQUVmLGdCQUFnQjs7QUFFaEIscUJBQXFCOztBQUVyQix5QkFBeUI7O0FBRXpCLGtCQUFrQjs7QUFFbEIscUJBQXFCOztBQUVyQix3QkFBd0I7O0FBRXhCLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9lZGdlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICAgIC8qKlxuICAgICAqIEVkZ2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBEYXRhIHN0cnVjdHVyZSB0aGF0IGNvbm5lY3RzIHR3byBWZXJ0aWNlcyBvZiB0aGUgR3JhcGggRGF0YSBTdHJ1Y3R1cmUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgU3RhcnRpbmcgVmVydGV4XG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgRW5kaW5nIFZlcnRleFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh1LCB2KSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHUpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godik7XG4gICAgfVxuXG4gICAgZ2V0IHZlcnRpY2VzICgpIHsgcmV0dXJuIHRoaXMuX3ZlcnRpY2VzOyB9XG5cbiAgICBzZXQgdmVydGljZXMgKGFycikgeyB0aGlzLl92ZXJ0aWNlcyA9IGFycjsgfVxuXG4gICAgLyoqXG4gICAgICogU2FtZSBFZGdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gRWRnZSBpcyB0aGUgc2FtZSBlZGdlIGFzIHRoaXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtFZGdlfSBlIEVkZ2VcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZXkgYXJlIHRoZSBTYW1lIEVkZ2VcbiAgICAgKi9cbiAgICBzYW1lRWRnZSAoZSkge1xuICAgICAgICAvLyBDaGVjayB0aGF0IGJvdGggVmVydGljZXMgYXJlIElkZW50aWNhbFxuICAgICAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNlY29uZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBWZXJ0aWNlcyBvbiBFZGdlXG4gICAgICAgIGUudmVydGljZXMuZm9yRWFjaCh1ID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzBdLnNhbWVWZXJ0ZXgodSkgfHwgXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1sxXS5zYW1lVmVydGV4KHUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0KVxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIG9uZSBvZiB0aGUgVmVydGljZXMgdGhhdCBtYWtlcyB1cCB0aGUgRWRnZSBjb250YWlucyB0aGUgZGVzaXJlZCBcbiAgICAgKiBWZXJ0ZXgsIGFuZCByZXR1cm5zIHRydWUgaWYgaXQgZG9lcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBWZXJ0ZXhcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIEVkZ2UgQ29ubmVjdHMgVmVydGV4XG4gICAgICovXG4gICAgaGFzVmVydGV4ICh2KSB7XG4gICAgICAgIC8vIENoZWNrIEJvdGggVmVydGljZXMgb24gRWRnZVxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKHZlcnRleCA9PiB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBWZXJ0ZXggaXMgYSBNYXRjaFxuICAgICAgICAgICAgaWYgKHYuc2FtZVZlcnRleCh2ZXJ0ZXgpKVxuICAgICAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBWZXJ0aWNlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgdGhlIHBhaXIgb2YgZ2l2ZW4gVmVydGljZXMgYXJlIGNvbm5lY3RlZCAgYnkgdGhlIEVkZ2UsIGFuZCBcbiAgICAgKiByZXR1cm5zIHRydWUgaWYgdGhleSBhcmUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgT25lIFZlcnRleFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IE90aGVyIFZlcnRleFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgYm90aCBWZXJ0aWNlcyBhcmUgY29ubmVjdGVkIGJ5IEVkZ2VcbiAgICAgKi9cbiAgICBoYXNWZXJ0aWNlcyAodSwgdikge1xuICAgICAgICAvLyBDaGVjayBCb3RoIFZlcnRpY2VzIG9uIEVkZWdlXG4gICAgICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgICAgICBsZXQgc2Vjb25kID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICAgICAgLy8gRW5zdXJlIEJvdGggYXJlIEFjY291bnRlZCBGb3JcbiAgICAgICAgICAgIGlmICh1LnNhbWVWZXJ0ZXgodmVydGV4KSlcbiAgICAgICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodi5zYW1lVmVydGV4KHZlcnRleCkpXG4gICAgICAgICAgICAgICAgc2Vjb25kID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZDtcbiAgICB9XG59IiwiaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZS5qc1wiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGgge1xuICAgIC8qKlxuICAgICAqIEdyYXBoIENsYXNzXG4gICAgICogXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgdGhlIEdyYXBoIERhdGEgU3RydWN0dXJlLCB3aGljaCB1dGlsaXNlcyB0aGUgVmVydGV4IGFuZFxuICAgICAqIEVkZ2UgQ2xhc3NlcyB0aGF0IGFyZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgZGF0YSwgYW5kIHRvIGNvbm5lY3QgdGhlIGRhdGFcbiAgICAgKiB0byBvbmUgYW5vdGhlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3ZlcnRpY2VzID0gW107IFxuICAgICAgICB0aGlzLl9lZGdlcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2VzIEl0ZXJhdG9yIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIGluIGxvb3BzIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgR3JhcGgncyBWZXJ0aWNlcy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBJdGVyYXRvciBvZiBWZXJ0aWNlc1xuICAgICAqL1xuICAgIHZlcnRpY2VzICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IHRoaXMuX3ZlcnRpY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHRoaXMuX3ZlcnRpY2VzW2krK10sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFZGdlcyBJdGVyYXRvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNZXRob2QgdGhhdCBjYW4gYmUgdXNlZCBpbiBsb29wcyB0byBpdGVyYXRlIHRocm91Z2ggdGhlIEdyYXBoJ3MgRWRnZXMuXG4gICAgICogXG4gICAgICogQHJldHVybnMgSXRlcmF0b3Igb2YgRWRnZXNcbiAgICAgKi9cbiAgICBlZGdlcyAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9lZGdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB0aGlzLl9lZGdlc1tpKytdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIFZlcnRpY2VzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEdldCB0aGUgTnVtYmVyIG9mIFZlcnRpY2VzIHdpdGhpbiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIFZlcnRpY2VzXG4gICAgICovXG4gICAgbnVtVmVydGljZXMgKCkgeyByZXR1cm4gdGhpcy5fdmVydGljZXMubGVuZ3RoOyB9XG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgRWRnZXMgTWV0aG9kXG4gICAgICogXG4gICAgICogR2V0IHRoZSBOdW1iZXIgb2YgRWRnZXMgd2l0aGluIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgRWRnZXNcbiAgICAgKi9cbiAgICBudW1FZGdlcyAoKSB7IHJldHVybiB0aGlzLl9lZGdlcy5sZW5ndGg7IH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gKHgsIHkpIGNvb3JkaW5hdGUsIHRoaXMgbWV0aG9kIHdpbGwgY3JlYXRlIGEgbmV3IFZlcnRleCBmb3JcbiAgICAgKiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgaW5zZXJ0VmVydGV4ICh4LCB5KSB7IHRoaXMuX3ZlcnRpY2VzLnB1c2gobmV3IFZlcnRleCh4LCB5KSk7IH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gVmVydGV4LCBpZiBpdCBpcyBpbiB0aGUgR3JhcGgsIGFuZCBpZiBpdCBoYXMgYW55IEVkZ2VzIFxuICAgICAqIGFzc29jaWF0ZWQgd2l0aCBpdCwgdGhlbiB0aG9zZSBFZGdlcyB3b3VsZCBiZSByZW1vdmVkLCBhbmQgZmluYWxseSB0aGUgXG4gICAgICogVmVydGV4IHdvdWxkIHRoZW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBWZXJ0ZXhcbiAgICAgKi9cbiAgICByZW1vdmVWZXJ0ZXggKHYpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgVmVydGV4IGlzIENvbm5lY3RlZCB0byBPdGhlciBWZXJ0aWNlc1xuICAgICAgICBmb3IgKGxldCBlZGdlIG9mIHRoaXMuZWRnZXMoKSkge1xuICAgICAgICAgICAgaWYgKGVkZ2UuaGFzVmVydGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIE5laWdoYm91ciBSZWZlcmVuY2VzIGZvciBWZXJ0aWljZXNcbiAgICAgICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzBdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzFdKTtcbiAgICAgICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzFdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzBdKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBFZGdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBWZXJ0ZXggaW4gQXJyYXlcbiAgICAgICAgaWR4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2LnNhbWVWZXJ0ZXgodGhpcy5fdmVydGljZXNbaV0pKVxuICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgVmVydGV4IGlmIEZvdW5kXG4gICAgICAgIGlmIChpZHggPj0gMClcbiAgICAgICAgICAgIHRoaXMuX3ZlcnRpY2VzLnNwbGljZShpZHgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIFZlcnRpY2VzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENsZWFycyBhbGwgdmVydGljZXMgaW4gdGhlIEdyYXBoLlxuICAgICAqL1xuICAgIGNsZWFyVmVydGljZXMgKCkge1xuICAgICAgICBkbyB7IHRoaXMuX3ZlcnRpY2VzLnBvcCgpIH0gd2hpbGUgKHRoaXMuX3ZlcnRpY2VzLmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gKHgsIHkpIGNvb3JkaW5hdGUsIHRoaXMgbWV0aG9kIHdpbGwgc2VhcmNoIGl0cyBrbm93biB2ZXJ0aWNlc1xuICAgICAqIGFuZCByZXR1cm4gdGhlIHZlcnRleCB0aGF0IGNvcnJlc3BvbmRzIHdpdGggdGhlIGNvb3JkaW5hdGUsIG9yIG51bGwgaWYgaXRcbiAgICAgKiBkb2VzIG5vdCBleGlzdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcmV0dXJucyBDb3JyZXNwb25kaW5nIFZlcnRleFxuICAgICAqL1xuICAgIGdldFZlcnRleCAoeCwgeSkge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggVmVydGljZXNcbiAgICAgICAgbGV0IHUgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCB2ZXJ0ZXggb2YgdGhpcy52ZXJ0aWNlcygpKSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IFZlcnRleCBDb29yZGluYXRlcyBtYXRjaCBEZXNpcmVkXG4gICAgICAgICAgICBpZiAodmVydGV4LnggPT09IHggJiYgdmVydGV4LnkgPT09IHkpXG4gICAgICAgICAgICAgICAgdSA9IHZlcnRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBFZGdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciBhIGdpdmVuIHBhaXIgb2YgVmVydGljZXMsIHRoaXMgbWV0aG9kIHdpbGwgY3JlYXRlIGEgbmV3IEVkZ2UgZm9yIHRoZSBcbiAgICAgKiBwYWlyLCBpZiB0aGVyZSBpc24ndCBvbmUgYWxyZWFkeS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdSBTdGFydGluZyBWZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBFbmRpbmcgVmVydGV4XG4gICAgICovXG4gICAgaW5zZXJ0RWRnZSAodSwgdikge1xuICAgICAgICAvLyBFbnN1cmUgbm8gRWRnZSB3aXRoIFZlcnRpY2VzIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGlmICh0aGlzLmdldEVkZ2UodSwgdikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIE5ldyBFZGdlIGZvciBWZXJ0aWNlc1xuICAgICAgICAgICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKHUsIHYpO1xuICAgICAgICAgICAgdS5pbnNlcnROZWlnaGJvdXIodik7XG4gICAgICAgICAgICB2Lmluc2VydE5laWdoYm91cih1KTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIEVkZ2VzIEFycmF5XG4gICAgICAgICAgICB0aGlzLl9lZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEVkZ2UgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gRWRnZSwgaWYgaXQgaXMgaW4gdGhlIEdyYXBoLCB0aGUgRWRnZSB3b3VsZCB0aGVuIGJlIHJlbW92ZWRcbiAgICAgKiBmcm9tIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGUgRWRnZVxuICAgICAqL1xuICAgIHJlbW92ZUVkZ2UgKGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgRWRnZSBleGlzdHMgaW4gR3JhcGhcbiAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2VkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZWRnZXNbaV0uc2FtZUVkZ2UoZSkpXG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBpZiBFZGdlIGV4aXN0c1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBOZWlnaGJvdXIgUmVmZXJlbmNlcyBmb3IgVmVydGljZXNcbiAgICAgICAgICAgIGxldCBlZGdlID0gdGhpcy5fZWRnZXNbaWR4XTtcbiAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMF0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMV0pO1xuICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1sxXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1swXSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBFZGdlXG4gICAgICAgICAgICB0aGlzLl9lZGdlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIEVkZ2VzXG4gICAgICogXG4gICAgICogUmVtb3ZlcyBhbGwgZWRnZXMgaW4gdGhlIEdyYXBoLlxuICAgICAqL1xuICAgIGNsZWFyRWRnZXMgKCkge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggZWRnZXNcbiAgICAgICAgZm9yIChsZXQgZWRnZSBvZiB0aGlzLmVkZ2VzKCkpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBSZWZlcmVuY2VzIHRvIE5laWdoYm91ciBWZXJ0aWNlc1xuICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1swXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1sxXSk7XG4gICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzFdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzBdKTtcblxuICAgICAgICAgICAgdGhpcy5fZWRnZXMucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgRWRnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGdpdmVuIHBhaXIgb2YgVmVydGljZXMsIHRoZSBtZXRob2Qgd2lsbCBpdGVyYXRlIHRocm91Z2ggdGhlIGtub3duXG4gICAgICogRWRnZXMgb2YgdGhlIEdyYXBoIGFuZCByZXR1cm4gdGhlIEVkZ2UgdGhhdCBjb25uZWN0cyB0aGVtLCBvciByZXR1cm5zIFxuICAgICAqIG51bGwuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgT25lIFZlcnRleFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IE90aGVyIFZlcnRleFxuICAgICAqIEByZXR1cm5zIEVkZ2UgdGhhdCBDb25uZWN0cyB0aGUgdHdvIFZlcnRpY2VzXG4gICAgICovXG4gICAgZ2V0RWRnZSAodSwgdikge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggRWRnZXNcbiAgICAgICAgbGV0IGUgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBlZGdlIG9mIHRoaXMuZWRnZXMoKSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgRWRnZSBoYXMgYm90aCBWZXJ0aWNlc1xuICAgICAgICAgICAgaWYgKGVkZ2UuaGFzVmVydGljZXModSwgdikpXG4gICAgICAgICAgICAgICAgZSA9IGVkZ2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgICAvKipcbiAgICAgKiBWZXJ0ZXggQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBEYXRhIHN0cnVjdHVyZSB0aGF0IHN0b3JlIHRoZSBkYXRhIHdpdGhpbiB0aGUgR3JhcGgsIGluIHRoaXMgY2FzZSwgc3RvcmVzXG4gICAgICogKHgsIHkpIGNvb3JkaW5hdGVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5KSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMudmlzaXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vdmUgPSAwO1xuICAgICAgICB0aGlzLm5laWdoYm91cnMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94OyB9XG5cbiAgICBzZXQgeCAoeCkgeyB0aGlzLl94ID0geDsgfVxuXG4gICAgZ2V0IHkgKCkgeyByZXR1cm4gdGhpcy5feTsgfVxuXG4gICAgc2V0IHkgKHkpIHsgdGhpcy5feSA9IHk7IH1cblxuICAgIGdldCB2aXNpdGVkICgpIHsgcmV0dXJuIHRoaXMuX3Zpc2l0ZWQ7IH1cblxuICAgIHNldCB2aXNpdGVkIChib29sKSB7IHRoaXMuX3Zpc2l0ZWQgPSBib29sOyB9XG5cbiAgICBnZXQgbW92ZSAoKSB7IHJldHVybiB0aGlzLl9tb3ZlOyB9XG5cbiAgICBzZXQgbW92ZSAobnVtKSB7IHRoaXMuX21vdmUgPSBudW07IH1cblxuICAgIGdldCBuZWlnaGJvdXJzICgpIHsgcmV0dXJuIHRoaXMuX25laWdoYm91cnM7IH1cblxuICAgIHNldCBuZWlnaGJvdXJzIChhcnIpIHsgdGhpcy5fbmVpZ2hib3VycyA9IGFycjsgfVxuXG4gICAgLyoqXG4gICAgICogU2FtZSBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBWZXJ0ZXggaXMgdGhlIHNhbWUgb25lIGFzIHRoaXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgVmVydGV4XG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgU2FtZSBWZXJ0ZXhcbiAgICAgKi9cbiAgICBzYW1lVmVydGV4ICh2KSB7IHJldHVybiB2LnggPT09IHRoaXMueCAmJiB2LnkgPT09IHRoaXMueTsgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IE5laWdoYm91ciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBBZGRzIGEgbmV3IFZlcnRleCB0aGF0IGlzIE5laWdoYm91ciB0aGlzIFZlcnRleCBpbiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHZlcnRleCBWZXJ0ZXhcbiAgICAgKi9cbiAgICBpbnNlcnROZWlnaGJvdXIgKHZlcnRleCkgeyB0aGlzLm5laWdoYm91cnMucHVzaCh2ZXJ0ZXgpOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgTmVpZ2hib3VyIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJlbW92ZXMgYSBOZWlnaGJvdXIgVmVydGV4LCBpZiBpdCBleGlzdHMgZnJvbSB0aGUgVmVydGV4J3MgTmVpZ2hib3Vycy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdmVydGV4IE5laWdoYm91ciB0byBSZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVOZWlnaGJvdXIgKHZlcnRleCkge1xuICAgICAgICAvLyBGaW5kIFZlcnRleCBpZiBQcmVzZW50IGluIG5laWdoYm91cnMgQXJyYXlcbiAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmVpZ2hib3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubmVpZ2hib3Vyc1tpXS5zYW1lVmVydGV4KHZlcnRleCkpXG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIG5laWdoYm91cnMgaWYgUHJlc2VudFxuICAgICAgICBpZiAoaWR4ID49IDApXG4gICAgICAgICAgICB0aGlzLm5laWdoYm91cnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==