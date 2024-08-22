export default class Menu {
    #THEMES = [
        "Normal",
        "Retro",
        "Future",
        "Neon",
        "Terminal",
        "Fantasy"
    ];

    constructor () {}

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    theme () {}
}