"use strict";
(self["webpackChunkgamechip"] = self["webpackChunkgamechip"] || []).push([["queue"],{

/***/ "./src/data-structures/queue.js":
/*!**************************************!*\
  !*** ./src/data-structures/queue.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Queue)
/* harmony export */ });
class Queue {
    /**
     * Queue Class
     * 
     * Implementation of the Queue Data Structure. The Queue Data Structure
     * utilises the First-In, First-Out principle, elements added to the Queue 
     * will be pushed to the back of the Array, and only the first element will
     * be removed each time dequeue is called.
     */
    constructor () {
        this._queue = [];
    }

    /**
     * Size Method
     * 
     * Returns the number of elements in the Queue.
     * 
     * @returns Size of the Queue
     */
    size () { return this._queue.length; }

    /**
     * Is Empty Method
     * 
     * If there are no Elements in the Queue, the method returns true, and will
     * return false in all other cases.
     * 
     * @returns True if there are no Elements in the Queue
     */
    isEmpty () { return this._queue.length === 0; }

    /**
     * Enqueue Method
     * 
     * Adds a new Element to the Queue.
     * 
     * @param {*} e New Element for Queue
     */
    enqueue (e) { this._queue.push(e); }

    /**
     * First Method
     * 
     * Returns the First Element of the Queue, without dequeuing it.
     * 
     * @returns The First Element of the Queue
     */
    first () { return this._queue[0]; }

    /**
     * Dequeue Method
     * 
     * Removes the First Element of the Queue, and removes it in the process.
     * 
     * @returns The First Element of the Queue
     */
    dequeue () {
        let elem = this._queue[0];
        this._queue.splice(0, 1);

        return elem;
    }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/data-structures/queue.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEdBQUc7QUFDbEI7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvcXVldWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xuICAgIC8qKlxuICAgICAqIFF1ZXVlIENsYXNzXG4gICAgICogXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFF1ZXVlIERhdGEgU3RydWN0dXJlLiBUaGUgUXVldWUgRGF0YSBTdHJ1Y3R1cmVcbiAgICAgKiB1dGlsaXNlcyB0aGUgRmlyc3QtSW4sIEZpcnN0LU91dCBwcmluY2lwbGUsIGVsZW1lbnRzIGFkZGVkIHRvIHRoZSBRdWV1ZSBcbiAgICAgKiB3aWxsIGJlIHB1c2hlZCB0byB0aGUgYmFjayBvZiB0aGUgQXJyYXksIGFuZCBvbmx5IHRoZSBmaXJzdCBlbGVtZW50IHdpbGxcbiAgICAgKiBiZSByZW1vdmVkIGVhY2ggdGltZSBkZXF1ZXVlIGlzIGNhbGxlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIFF1ZXVlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFNpemUgb2YgdGhlIFF1ZXVlXG4gICAgICovXG4gICAgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGg7IH1cblxuICAgIC8qKlxuICAgICAqIElzIEVtcHR5IE1ldGhvZFxuICAgICAqIFxuICAgICAqIElmIHRoZXJlIGFyZSBubyBFbGVtZW50cyBpbiB0aGUgUXVldWUsIHRoZSBtZXRob2QgcmV0dXJucyB0cnVlLCBhbmQgd2lsbFxuICAgICAqIHJldHVybiBmYWxzZSBpbiBhbGwgb3RoZXIgY2FzZXMuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGVyZSBhcmUgbm8gRWxlbWVudHMgaW4gdGhlIFF1ZXVlXG4gICAgICovXG4gICAgaXNFbXB0eSAoKSB7IHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDA7IH1cblxuICAgIC8qKlxuICAgICAqIEVucXVldWUgTWV0aG9kXG4gICAgICogXG4gICAgICogQWRkcyBhIG5ldyBFbGVtZW50IHRvIHRoZSBRdWV1ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGUgTmV3IEVsZW1lbnQgZm9yIFF1ZXVlXG4gICAgICovXG4gICAgZW5xdWV1ZSAoZSkgeyB0aGlzLl9xdWV1ZS5wdXNoKGUpOyB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJzdCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBGaXJzdCBFbGVtZW50IG9mIHRoZSBRdWV1ZSwgd2l0aG91dCBkZXF1ZXVpbmcgaXQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVGhlIEZpcnN0IEVsZW1lbnQgb2YgdGhlIFF1ZXVlXG4gICAgICovXG4gICAgZmlyc3QgKCkgeyByZXR1cm4gdGhpcy5fcXVldWVbMF07IH1cblxuICAgIC8qKlxuICAgICAqIERlcXVldWUgTWV0aG9kXG4gICAgICogXG4gICAgICogUmVtb3ZlcyB0aGUgRmlyc3QgRWxlbWVudCBvZiB0aGUgUXVldWUsIGFuZCByZW1vdmVzIGl0IGluIHRoZSBwcm9jZXNzLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRoZSBGaXJzdCBFbGVtZW50IG9mIHRoZSBRdWV1ZVxuICAgICAqL1xuICAgIGRlcXVldWUgKCkge1xuICAgICAgICBsZXQgZWxlbSA9IHRoaXMuX3F1ZXVlWzBdO1xuICAgICAgICB0aGlzLl9xdWV1ZS5zcGxpY2UoMCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==