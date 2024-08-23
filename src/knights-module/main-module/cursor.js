export default class Cursor {
    #xCallback;
    #yCallback;
    #aCallback;
    #bCallback;
    #mCallback;

    /**
     * Cursor Class
     * 
     * Navigation tool that is used in various roles, such
     * as to move through the tiles on the Chessboard, or
     * for selecting options on the Menu.
     */
    constructor () {}

    /**
     * Horizontal Move Function
     * 
     * Moves the Cursor Left or Right.
     * 
     * @param {boolean} right Default Action is Rightwars
     */
    horizontalMove (right=true) { this.#xCallback(right); }

    /**
     * Vertical Move Function
     * 
     * Moves the Cursor Up or Down.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) { this.#yCallback(up); }

    /**
     * Accept Action Function
     * 
     * Makes the Selection the User has made.
     * 
     * @returns True if Action is Accepted
     */
    acceptAction () { return this.#aCallback(); }
    
    /**
     * Decline Action Function
     * 
     * Cancels whatever the User is doing, if possible.
     */
    declineAction () { this.#bCallback(); }

    /**
     * Menu Function
     * 
     * Switches to the Menu, or out of the Menu.
     */
    menuSelect () { this.#mCallback(); }

    /**
     * Set Callbacks Function
     * 
     * Sets the Cursor Callback Methods.
     * 
     * @callback horizontal Horizontal Move Callback
     * @callback vertical Vertical Move Callback
     * @callback accept Accept Action Callback
     * @callback decline Decline Action Callback
     * @callback menu Menu Select Callback
     */
    setCallbacks (horizontal, vertical, accept, decline, menu) {
        this.#xCallback = horizontal;
        this.#yCallback = vertical;
        this.#aCallback = accept;
        this.#bCallback = decline;
        this.#mCallback = menu;
    }
}