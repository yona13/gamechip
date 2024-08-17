export default class Stack {
    /**
     * Stack Class
     * 
     * Implementation of the Stack Data Structure. The 
     * Stack Data Structure utilises the Last-In, First-Out 
     * principle, elements added to the Stack will be added 
     * to the top of the Stack, and top of the stack is the
     * first element to be removed when pop is called.
     */
    constructor () {
        this._stack = [];
    }

    /**
     * Size Function
     * 
     * Returns the number of elements in the Stack.
     * 
     * @returns Size of Stack
     */
    size () { return this._stack.length; }

    /**
     * Is Empty Function
     * 
     * If there are no Elements in the Stack, the function
     * returns true, and will return false in all other
     * cases.
     * 
     * @returns True if there are no Elements in the Stack
     */
    isEmpty () { return this._stack.length === 0; }

    /**
     * Push Function
     * 
     * Adds a new Element to the Stack.
     * 
     * @param {*} e New Element for Stack
     */
    push (e) { this._stack.push(e); }

    /**
     * First Function
     * 
     * Returns the Top Element of the Stack, without
     * popping it.
     * 
     * @returns The First Element of the Stack
     */
    top () { return this._stack[this._stack.length - 1]; }

    /**
     * Pop Function
     * 
     * Removes the Top Element of the Stack, and removes
     * it in the process.
     * 
     * @returns The Top Element of the Stack
     */
    pop () { return this._stack.pop(); }
}