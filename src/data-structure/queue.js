export default class Queue {
    /**
     * Queue Class
     * 
     * Implementation of the Queue Data Structure. The 
     * Queue Data Structure utilises the First-In, First-
     * Out principle, elements added to the Queue will be
     * pushed to the back of the Array, and only the first
     * element will be removed each time dequeue is called.
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
     * If there are no Elements in the Queue, the method
     * returns true, and will return false in all other
     * cases.
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
     * Returns the First Element of the Queue, without
     * dequeuing it.
     * 
     * @returns The First Element of the Queue
     */
    first () { return this._queue[0]; }

    /**
     * Dequeue Method
     * 
     * Removes the First Element of the Queue, and removes
     * it in the process.
     * 
     * @returns The First Element of the Queue
     */
    dequeue () {
        let elem = this._queue[0];
        this._queue.splice(0, 1);

        return elem;
    }
}