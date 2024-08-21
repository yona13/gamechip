"use strict";
(self["webpackChunkknight_travails"] = self["webpackChunkknight_travails"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/board.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/board.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.chessboard {
    padding: 0.3rem;
    border-radius: 0.2rem;
    background-color: var(--orange);
    width: fit-content;
    height: fit-content;
    display: grid;
}

[class*="-tile"] {
    width: var(--mobile-tile-size);
    height: var(--mobile-tile-size);
    color: var(--gold);
    font-size: calc(var(--mobile-tile-size) * 0.8);
    position: relative;
}

[class*="-tile"] > .knight { 
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1; 
}

.black-tile {
    background-color: var(--onyx);
}

.black-tile.selected {
    background-color: var(--dark-selected);
}

.white-tile {
    background-color: var(--white);
}

.white-tile.selected {
    background-color: var(--light-selected);
}

.knight > img {
    width: var(--mobile-tile-size);
    height: var(--mobile-tile-size);
}

@media only screen and (min-width: 700px) {
    .chessboard { grid-area: board; }

    [class*="-tile"] {
        width: var(--regular-tile-size);
        height: var(--regular-tile-size);
        font-size: calc(var(--regular-tile-size) * 0.8);
    }

    .knight > img {
        width: var(--regular-tile-size);
        height: var(--regular-tile-size);
    }
}`, "",{"version":3,"sources":["webpack://./src/css/board.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,qBAAqB;IACrB,+BAA+B;IAC/B,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;IAC/B,kBAAkB;IAClB,8CAA8C;IAC9C,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,UAAU;AACd;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,cAAc,gBAAgB,EAAE;;IAEhC;QACI,+BAA+B;QAC/B,gCAAgC;QAChC,+CAA+C;IACnD;;IAEA;QACI,+BAA+B;QAC/B,gCAAgC;IACpC;AACJ","sourcesContent":[".chessboard {\n    padding: 0.3rem;\n    border-radius: 0.2rem;\n    background-color: var(--orange);\n    width: fit-content;\n    height: fit-content;\n    display: grid;\n}\n\n[class*=\"-tile\"] {\n    width: var(--mobile-tile-size);\n    height: var(--mobile-tile-size);\n    color: var(--gold);\n    font-size: calc(var(--mobile-tile-size) * 0.8);\n    position: relative;\n}\n\n[class*=\"-tile\"] > .knight { \n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1; \n}\n\n.black-tile {\n    background-color: var(--onyx);\n}\n\n.black-tile.selected {\n    background-color: var(--dark-selected);\n}\n\n.white-tile {\n    background-color: var(--white);\n}\n\n.white-tile.selected {\n    background-color: var(--light-selected);\n}\n\n.knight > img {\n    width: var(--mobile-tile-size);\n    height: var(--mobile-tile-size);\n}\n\n@media only screen and (min-width: 700px) {\n    .chessboard { grid-area: board; }\n\n    [class*=\"-tile\"] {\n        width: var(--regular-tile-size);\n        height: var(--regular-tile-size);\n        font-size: calc(var(--regular-tile-size) * 0.8);\n    }\n\n    .knight > img {\n        width: var(--regular-tile-size);\n        height: var(--regular-tile-size);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/controller.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/controller.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.puzzle-controller {
    border: 0.2rem solid var(--orange);
    border-radius: 0.5rem;
    background-color: var(--dark-blue);
    padding: 0.2rem;
    display: grid;
    grid-template-areas:
        "board-builder display"
        "shortest-path display"
        "knights-tour display";
}

.puzzle-controller > div > h2 {
    margin: 0;
    font-family: "Gothica-Bold";
    color: var(--white);
}

[class*="-btn"] {
    width: fit-content;
    height: 2rem;
    border-radius: 1rem;
    border: none;
    font-family: "Gothica-Italic";
    font-size: 0.7rem;
    color: var(--white);
    background-color: var(--orange);
}

[class*="-btn"]:hover { background-color: var(--dark-orange); }

.controller-display {
    grid-area: display;
    font-family: "Dogica";
    font-size: 0.5rem;
    border: 0.1rem solid var(--onyx);
    width: 8rem;
    height: 12rem;
    margin-left: 0.5rem;
    color: var(--onyx);
    background-color: var(--light-blue);
    white-space: pre-wrap;
    overflow-y: scroll;
}

.controller-display.alert {
    color: var(--white);
    background-color: var(--magenta);
}

.board-builder {
    grid-area: board-builder;
    display: grid;
    grid-template-areas:
        "bb-title bb-title"
        "bb-info bb-select";
}

.info-board-builder-btn { grid-area: bb-info; }

.board-builder-dropdown { grid-area: bb-select; }

.shortest-path-buttons {
    grid-area: shortest-path;
    display: grid;
    grid-template-areas:
        "sp-title sp-title sp-title sp-title"
        "sp-human sp-info sp-undo sp-comp";
}

.shortest-path-buttons > h2 { grid-area: sp-title; }

.start-shortest-path-btn { grid-area: sp-human; }

.info-shortest-path-btn { grid-area: sp-info; }

.undo-shortest-path.btn { grid-area: sp-undo; }

.show-shortest-path-btn { grid-area: sp-comp; }

.knights-tour-buttons {
    grid-area: knights-tour;
    display: grid;
    grid-template-areas:
        "kt-title kt-title kt-title kt-title"
        "kt-human kt-info kt-undo kt-comp";
}

.knights-tour-buttons > h2 { grid-area: kt-title; }

.start-knights-tour-btn { grid-area: kt-human; }

.info-knights-tour-btn { grid-area: kt-info; }

.undo-knights-tour-btn { grid-area: kt-undo; }

.show-knights-tour-btn { grid-area: kt-comp; }

@media only screen and (min-width: 700px) {
    .puzzle-controller {
        grid-area: controller;
        display: grid;
        grid-template-areas:
            "display"
            "display"
            "board-builder"
            "shortest-path"
            "knights-tour";
    }

    .controller-display {
        width: 16rem;
        height: 16rem;
        margin-left: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/controller.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;IAClC,qBAAqB;IACrB,kCAAkC;IAClC,eAAe;IACf,aAAa;IACb;;;8BAG0B;AAC9B;;AAEA;IACI,SAAS;IACT,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,6BAA6B;IAC7B,iBAAiB;IACjB,mBAAmB;IACnB,+BAA+B;AACnC;;AAEA,wBAAwB,oCAAoC,EAAE;;AAE9D;IACI,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,gCAAgC;IAChC,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mCAAmC;IACnC,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb;;2BAEuB;AAC3B;;AAEA,0BAA0B,kBAAkB,EAAE;;AAE9C,0BAA0B,oBAAoB,EAAE;;AAEhD;IACI,wBAAwB;IACxB,aAAa;IACb;;0CAEsC;AAC1C;;AAEA,8BAA8B,mBAAmB,EAAE;;AAEnD,2BAA2B,mBAAmB,EAAE;;AAEhD,0BAA0B,kBAAkB,EAAE;;AAE9C,0BAA0B,kBAAkB,EAAE;;AAE9C,0BAA0B,kBAAkB,EAAE;;AAE9C;IACI,uBAAuB;IACvB,aAAa;IACb;;0CAEsC;AAC1C;;AAEA,6BAA6B,mBAAmB,EAAE;;AAElD,0BAA0B,mBAAmB,EAAE;;AAE/C,yBAAyB,kBAAkB,EAAE;;AAE7C,yBAAyB,kBAAkB,EAAE;;AAE7C,yBAAyB,kBAAkB,EAAE;;AAE7C;IACI;QACI,qBAAqB;QACrB,aAAa;QACb;;;;;0BAKkB;IACtB;;IAEA;QACI,YAAY;QACZ,aAAa;QACb,cAAc;IAClB;AACJ","sourcesContent":[".puzzle-controller {\n    border: 0.2rem solid var(--orange);\n    border-radius: 0.5rem;\n    background-color: var(--dark-blue);\n    padding: 0.2rem;\n    display: grid;\n    grid-template-areas:\n        \"board-builder display\"\n        \"shortest-path display\"\n        \"knights-tour display\";\n}\n\n.puzzle-controller > div > h2 {\n    margin: 0;\n    font-family: \"Gothica-Bold\";\n    color: var(--white);\n}\n\n[class*=\"-btn\"] {\n    width: fit-content;\n    height: 2rem;\n    border-radius: 1rem;\n    border: none;\n    font-family: \"Gothica-Italic\";\n    font-size: 0.7rem;\n    color: var(--white);\n    background-color: var(--orange);\n}\n\n[class*=\"-btn\"]:hover { background-color: var(--dark-orange); }\n\n.controller-display {\n    grid-area: display;\n    font-family: \"Dogica\";\n    font-size: 0.5rem;\n    border: 0.1rem solid var(--onyx);\n    width: 8rem;\n    height: 12rem;\n    margin-left: 0.5rem;\n    color: var(--onyx);\n    background-color: var(--light-blue);\n    white-space: pre-wrap;\n    overflow-y: scroll;\n}\n\n.controller-display.alert {\n    color: var(--white);\n    background-color: var(--magenta);\n}\n\n.board-builder {\n    grid-area: board-builder;\n    display: grid;\n    grid-template-areas:\n        \"bb-title bb-title\"\n        \"bb-info bb-select\";\n}\n\n.info-board-builder-btn { grid-area: bb-info; }\n\n.board-builder-dropdown { grid-area: bb-select; }\n\n.shortest-path-buttons {\n    grid-area: shortest-path;\n    display: grid;\n    grid-template-areas:\n        \"sp-title sp-title sp-title sp-title\"\n        \"sp-human sp-info sp-undo sp-comp\";\n}\n\n.shortest-path-buttons > h2 { grid-area: sp-title; }\n\n.start-shortest-path-btn { grid-area: sp-human; }\n\n.info-shortest-path-btn { grid-area: sp-info; }\n\n.undo-shortest-path.btn { grid-area: sp-undo; }\n\n.show-shortest-path-btn { grid-area: sp-comp; }\n\n.knights-tour-buttons {\n    grid-area: knights-tour;\n    display: grid;\n    grid-template-areas:\n        \"kt-title kt-title kt-title kt-title\"\n        \"kt-human kt-info kt-undo kt-comp\";\n}\n\n.knights-tour-buttons > h2 { grid-area: kt-title; }\n\n.start-knights-tour-btn { grid-area: kt-human; }\n\n.info-knights-tour-btn { grid-area: kt-info; }\n\n.undo-knights-tour-btn { grid-area: kt-undo; }\n\n.show-knights-tour-btn { grid-area: kt-comp; }\n\n@media only screen and (min-width: 700px) {\n    .puzzle-controller {\n        grid-area: controller;\n        display: grid;\n        grid-template-areas:\n            \"display\"\n            \"display\"\n            \"board-builder\"\n            \"shortest-path\"\n            \"knights-tour\";\n    }\n\n    .controller-display {\n        width: 16rem;\n        height: 16rem;\n        margin-left: 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/drop-down-styling.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/drop-down-styling.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Drop Down Styling */
[class*="-dropdown"], [class*="-disabled"] {
    user-select: none;
    border-radius: 0.2rem;
    padding: 0.5rem;
    width: 4rem;
    color: var(--onyx);
    background-color: var(--white);
}

[class*="-dropdown"]:hover { background-color: var(--light-blue); }

/* Options Styling */
[class*="-options"] {
    user-select: none;
    position: absolute;
    color: var(--onyx);
    background-color: var(--white);
    display: none;
    margin-left: calc(-1 * 0.5rem);
    height: 6rem;
    width: 4rem;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: scroll;
}

.visible { display: block; }

[class*="-option"] > div:hover { background-color: var(--light-blue); }

[class*="-options"] > div { padding: 0.5rem; }`, "",{"version":3,"sources":["webpack://./src/css/drop-down-styling.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;IACI,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA,6BAA6B,mCAAmC,EAAE;;AAElE,oBAAoB;AACpB;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,8BAA8B;IAC9B,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA,WAAW,cAAc,EAAE;;AAE3B,iCAAiC,mCAAmC,EAAE;;AAEtE,4BAA4B,eAAe,EAAE","sourcesContent":["/* Drop Down Styling */\n[class*=\"-dropdown\"], [class*=\"-disabled\"] {\n    user-select: none;\n    border-radius: 0.2rem;\n    padding: 0.5rem;\n    width: 4rem;\n    color: var(--onyx);\n    background-color: var(--white);\n}\n\n[class*=\"-dropdown\"]:hover { background-color: var(--light-blue); }\n\n/* Options Styling */\n[class*=\"-options\"] {\n    user-select: none;\n    position: absolute;\n    color: var(--onyx);\n    background-color: var(--white);\n    display: none;\n    margin-left: calc(-1 * 0.5rem);\n    height: 6rem;\n    width: 4rem;\n    z-index: 1;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n\n.visible { display: block; }\n\n[class*=\"-option\"] > div:hover { background-color: var(--light-blue); }\n\n[class*=\"-options\"] > div { padding: 0.5rem; }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: var(--dark-blue);
}

.nav-bar > * {
    padding: 0.5rem;
}

.nav-bar > h1 {
    font-family: "Gothica-Bold";
    color: var(--white);
    margin: 0;
}

.nav-bar > button {
    border: none;
    color: var(--white);
    background-color: var(--orange);
    border-radius: 0.2rem;
    margin-right: 0.5rem;
}

@media only screen and (min-width: 700px) {
    .nav-bar { grid-area: header; }

    .footer { grid-area: footer; }
}`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,+BAA+B;IAC/B,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,WAAW,iBAAiB,EAAE;;IAE9B,UAAU,iBAAiB,EAAE;AACjC","sourcesContent":[".nav-bar {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100vw;\n    background-color: var(--dark-blue);\n}\n\n.nav-bar > * {\n    padding: 0.5rem;\n}\n\n.nav-bar > h1 {\n    font-family: \"Gothica-Bold\";\n    color: var(--white);\n    margin: 0;\n}\n\n.nav-bar > button {\n    border: none;\n    color: var(--white);\n    background-color: var(--orange);\n    border-radius: 0.2rem;\n    margin-right: 0.5rem;\n}\n\n@media only screen and (min-width: 700px) {\n    .nav-bar { grid-area: header; }\n\n    .footer { grid-area: footer; }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalise.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalise.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

 html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  /* Sections
     ========================================================================== */
  
  /**
   * Remove the margin in all browsers.
   */
  
  body {
    margin: 0;
  }
  
  /**
   * Render the \`main\` element consistently in IE.
   */
  
  main {
    display: block;
  }
  
  /**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  /* Grouping content
     ========================================================================== */
  
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /* Text-level semantics
     ========================================================================== */
  
  /**
   * Remove the gray background on active links in IE 10.
   */
  
  a {
    background-color: transparent;
  }
  
  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
   * Add the correct font size in all browsers.
   */
  
  small {
    font-size: 80%;
  }
  
  /**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  /* Embedded content
     ========================================================================== */
  
  /**
   * Remove the border on images inside links in IE 10.
   */
  
  img {
    border-style: none;
  }
  
  /* Forms
     ========================================================================== */
  
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
   * Remove the inner border and padding in Firefox.
   */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /**
   * Restore the focus styles unset by the previous rule.
   */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /**
   * Correct the padding in Firefox.
   */
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  
  progress {
    vertical-align: baseline;
  }
  
  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  
  textarea {
    overflow: auto;
  }
  
  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  /* Interactive
     ========================================================================== */
  
  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  
  details {
    display: block;
  }
  
  /*
   * Add the correct display in all browsers.
   */
  
  summary {
    display: list-item;
  }
  
  /* Misc
     ========================================================================== */
  
  /**
   * Add the correct display in IE 10+.
   */
  
  template {
    display: none;
  }
  
  /**
   * Add the correct display in IE 10.
   */
  
  [hidden] {
    display: none;
  }`, "",{"version":3,"sources":["webpack://./src/css/normalise.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;IACG,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Gothica-Book.ttf */ "./src/fonts/Gothica-Book.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Gothica-Bold.ttf */ "./src/fonts/Gothica-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Gothica-BookOblique.ttf */ "./src/fonts/Gothica-BookOblique.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/dogica.ttf */ "./src/fonts/dogica.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Root Variables */
:root {
    --white: #f5f5f5;
    --light-selected: #87d3ed;
    --onyx: #454545;
    --dark-selected: #2277a9;
    --magenta: #d67ab1;
    --blue: #2589bd;
    --dark-blue: #195787;
    --light-blue: #b4e4fc;
    --orange: #ffb140;
    --dark-orange: #fa8100;
    --gold: #e5b80b;
    --mobile-tile-size: 2rem;
    --regular-tile-size: 5rem;
}

/* Regular Font */
@font-face {
    font-family: "Gothica";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: "Gothica-Bold";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: "Gothica-Italic";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
    font-family: "Dogica";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

/* Body Styling */
body {
    font-family: "Gothica";
    font-size: 1rem;
    height: 100vh;
    color: var(--onyx);
    background-color: var(--blue);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

@media only screen and (min-width: 700px) {
    body {
        display: grid;
        justify-items: center;
        align-items: start;
        grid-template-areas:
            "header header"
            "board controller"
            "footer footer";
    }
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;IACI,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;IACf,wBAAwB;IACxB,kBAAkB;IAClB,eAAe;IACf,oBAAoB;IACpB,qBAAqB;IACrB,iBAAiB;IACjB,sBAAsB;IACtB,eAAe;IACf,wBAAwB;IACxB,yBAAyB;AAC7B;;AAEA,iBAAiB;AACjB;IACI,sBAAsB;IACtB,4CAAqC;AACzC;;AAEA;IACI,2BAA2B;IAC3B,4CAAqC;AACzC;;AAEA;IACI,6BAA6B;IAC7B,4CAA4C;AAChD;;AAEA;IACI,qBAAqB;IACrB,4CAA+B;AACnC;;AAEA,iBAAiB;AACjB;IACI,sBAAsB;IACtB,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI;QACI,aAAa;QACb,qBAAqB;QACrB,kBAAkB;QAClB;;;2BAGmB;IACvB;AACJ","sourcesContent":["/* Root Variables */\n:root {\n    --white: #f5f5f5;\n    --light-selected: #87d3ed;\n    --onyx: #454545;\n    --dark-selected: #2277a9;\n    --magenta: #d67ab1;\n    --blue: #2589bd;\n    --dark-blue: #195787;\n    --light-blue: #b4e4fc;\n    --orange: #ffb140;\n    --dark-orange: #fa8100;\n    --gold: #e5b80b;\n    --mobile-tile-size: 2rem;\n    --regular-tile-size: 5rem;\n}\n\n/* Regular Font */\n@font-face {\n    font-family: \"Gothica\";\n    src: url(\"../fonts/Gothica-Book.ttf\");\n}\n\n@font-face {\n    font-family: \"Gothica-Bold\";\n    src: url(\"../fonts/Gothica-Bold.ttf\");\n}\n\n@font-face {\n    font-family: \"Gothica-Italic\";\n    src: url(\"../fonts/Gothica-BookOblique.ttf\");\n}\n\n@font-face {\n    font-family: \"Dogica\";\n    src: url(\"../fonts/dogica.ttf\");\n}\n\n/* Body Styling */\nbody {\n    font-family: \"Gothica\";\n    font-size: 1rem;\n    height: 100vh;\n    color: var(--onyx);\n    background-color: var(--blue);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n@media only screen and (min-width: 700px) {\n    body {\n        display: grid;\n        justify-items: center;\n        align-items: start;\n        grid-template-areas:\n            \"header header\"\n            \"board controller\"\n            \"footer footer\";\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/board.css":
/*!***************************!*\
  !*** ./src/css/board.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./board.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/board.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/controller.css":
/*!********************************!*\
  !*** ./src/css/controller.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_controller_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./controller.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/controller.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_controller_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_controller_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_controller_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_controller_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/drop-down-styling.css":
/*!***************************************!*\
  !*** ./src/css/drop-down-styling.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_drop_down_styling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./drop-down-styling.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/drop-down-styling.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_drop_down_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_drop_down_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_drop_down_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_drop_down_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/header.css":
/*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/normalise.css":
/*!*******************************!*\
  !*** ./src/css/normalise.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalise_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalise.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalise.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalise_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalise_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalise_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalise_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/chess-module/board.js":
/*!***********************************!*\
  !*** ./src/chess-module/board.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _css_board_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/board.css */ "./src/css/board.css");
/* harmony import */ var _knight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight.js */ "./src/chess-module/knight.js");
/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile.js */ "./src/chess-module/tile.js");




class Board {
    /**
     * Board Class
     * 
     * Base Class for the Chessboard Class. This class is
     * responsible for setting up the DOM elements, such as
     * the Chessboard, the Tiles, and the Knight. Resulting
     * from setting up the Tiles and Knight, this class is
     * also manages those variables.
     * 
     * @param {number} x Initial X-Coordinate
     * @param {number} y Initial Y-Coordinate
     * @param {number} board Board Size
     */
    constructor (x, y, board) {
        // Initialise Board Size
        this.size = board;
        
        // Construct the Board DOM Element
        this.module = document.createElement("div");
        this.module.classList.add("chessboard");
        
        // Add Grid Template Areas to the Board DOM Element
        let template = "";
        for (let i = this.size - 1; i >= 0; i--) {
            for (let j = 0; j < this.size; j++) {
                if (j === 0)
                    template += `"tile-${i}${j} `
                else if (j === this.size - 1)
                    template += `tile-${i}${j}"${i === 0 ? "" : " "}`;
                else
                    template += `tile-${i}${j} `
            }
        }
        this.module.style.setProperty(
            "grid-template-areas", template
        );

        // Initailise Tiles
        this.tiles = [];
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                const tile = new _tile_js__WEBPACK_IMPORTED_MODULE_2__["default"](i, j, j % 2 ? (i % 2 ? "black" : "white") : (i % 2 ? "white" : "black"));
                this.tiles.push(tile);
                this.module.appendChild(tile.element);
            }
        }

        // Initialise Variables
        this.knight = new _knight_js__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, board, this.tiles);
        this.tiles.forEach(tile => {
            if (tile.x === x && tile.y === y) {
                tile.placeKnight(this.knight.element);
                this.current = tile;
            }
        });
        this.previous = [];
    }

    get size () { return this._size; }

    set size (num) { this._size = num; }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get tiles () { return this._tiles; }

    set tiles (arr) { this._tiles = arr; }

    get current () { return this._current; }

    set current (tile) { this._current = tile; }

    get previous () { return this._previous; }

    set previous (arr) { this._previous = arr; }

    get knight () { return this._knight; }

    set knight (obj) { this._knight = obj; }

    /**
     * Rebuild Function
     * 
     * For a newly selected Board Size by the User, the 
     * Board must update the Tiles and Knight Classes to
     * reflect the change in Board Size.
     * 
     * @param {number} size New Board Size
     */
    rebuild (size) {
        // Update only if Boardsize has been Changed
        if (this.size !== size) {
            // Empty Module
            this.module.innerHTML = "";

            // Reset Board Size
            this.size = size;
            
            // Add Grid Template Areas to the Board DOM Element
            let template = "";
            for (let i = this.size - 1; i >= 0; i--) {
                for (let j = 0; j < this.size; j++) {
                    if (j === 0)
                        template += `"tile-${i}${j} `
                    else if (j === this.size - 1)
                        template += `tile-${i}${j}"${i === 0 ? "" : " "}`;
                    else
                        template += `tile-${i}${j} `
                }
            }
            this.module.style.setProperty(
                "grid-template-areas", template
            );

            // Reset Tiles
            this.tiles = [];
            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    const tile = new _tile_js__WEBPACK_IMPORTED_MODULE_2__["default"](i, j, j % 2 ? (i % 2 ? "black" : "white") : (i % 2 ? "white" : "black"));
                    this.tiles.push(tile);
                    this.module.appendChild(tile.element);
                }
            }
            
            // Reset Knight
            let coord = Math.floor(this.size / 2);
            this.knight.updateBoard(size, this.tiles);
            this.tiles.forEach(tile => {
                if (tile.x === coord && tile.y === coord) {
                    tile.placeKnight(this.knight.element);
                    this.current = tile;
                }
            });
        }
    }
}

/***/ }),

/***/ "./src/chess-module/chessboard.js":
/*!****************************************!*\
  !*** ./src/chess-module/chessboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chessboard)
/* harmony export */ });
/* harmony import */ var _puzzle_module_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../puzzle-module/controller */ "./src/puzzle-module/controller.js");
/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ "./src/chess-module/board.js");



class Chessboard extends _board_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    #DEFAULT_INITIAL = {x: 3, y: 3};
    #DEFAULT_BOARD = 8;
    #ERROR = false;

    /**
     * Chessboard Class
     * 
     * By expanding on its base Board Class, this class is
     * responsible for managing the Controller Class, and 
     * all its necessary callback methods.
     */
    constructor () {
        super(3, 3, 8); // Default values

        // Initialise Controller
        this.controller = new _puzzle_module_controller__WEBPACK_IMPORTED_MODULE_0__["default"](
            this.#DEFAULT_INITIAL.x, 
            this.#DEFAULT_INITIAL.y, 
            this.#DEFAULT_BOARD, 
            this.selectCallback.bind(this),
            this.startCallback.bind(this),
            this.undoCallback.bind(this),
            this.showCallback.bind(this)
        );

        // Initialise Variables
        this._root = this.#DEFAULT_INITIAL;
        this._goal = {x: 0, y: 0};
        this._path = [];
        this._selecting = false;
        this._touring = false;
        this._start = false;
        this._algorithm = false;

        // Add Click Event Listeners to Tiles
        this.tiles.forEach(tile => {
            tile.setClickEventListener(this.clickCallback.bind(this));
        });
    }

    get controller () { return this._controller; }

    set controller (obj) { this._controller = obj; }

    /**
     * Generate Puzzle Function
     * 
     * For either Puzzle, this function will setup the path
     * that the Knight must Traverse to complete the Puzzle
     * and will also initialise the Tiles to Highlight when
     * the Knight has visited the tile.
     * 
     * @param {boolean} tour True if Knight's Tour
     */
    generatePuzzle (tour=false) {
        // Clear Display
        this.controller.clear();

        // Setup Root Variable
        this._root.x = this.knight.x;
        this._root.y = this.knight.y;
        
        // Prime Knight for Path Exploration
        this.knight.prime();

        // Setup Path for the Knight
        if (tour) {
            this.knight.setPath(this.controller.tour.warnsdorff(
                this._root.x,
                this._root.y,
                this.knight.graph
            ));
        } else {
            this.knight.setPath(this.controller.shortest.bfs(
                this._root.x,
                this._root.y,
                this._goal.x,
                this._goal.y,
                this.knight.graph
            ));
        }
        
        // Prime Knight for Traversal
        this.knight.prime();

        // Activate Tiles for Highlighting
        this.tiles.forEach(tile => {
            // Toggle Tile so they may be Highlighted
            if (!tile.active)
                tile.toggle();

            // Highlight Root and Goal Tiles
            if ((tile.x === this.knight.x && tile.y === this.knight.y) || (tile.x === this._goal.x && tile.y === this._goal.y))
                tile.highlight();
        });

        // Display Tile Coordinate for the User
        this.controller.update(
            tour ? `Knight's Tour Beginning at (${this._root.x}, ${this._root.y});` :
            `Goal Tile: (${this._goal.x + 1}, ${this._goal.y + 1});`
        );

        // Start the Puzzle
        this._start = true;
        this._path = [];
    }

    /**
     * Click Function
     * 
     * With each Tile, if pressed and passed all conditions
     * will update the Knight's Position to the new Tile.
     * 
     * @param {number} x New X-Coordinate
     * @param {number} y New Y-Coordinate
     */
    click (x, y) {
        // Retain Knight's Previous Location
        let prev = {x: this.knight.x, y: this.knight.y};

        // Update Current Tile
        this.previous.push(this.current);
        this.current.removeKnight();
        this.tiles.forEach(tile => {
            if (tile.x === x && tile.y === y) {
                this.current = tile;
                if (this._touring)
                    this.current.number(this.knight.graph.getVertex(x, y).move);
                tile.placeKnight(this.knight.element);
            }
        });

        // Update Knight's Current Location
        this.knight.update(x, y);

        // Ease Alert if Required
        if (this.#ERROR) {
            this.#ERROR = false;
            this.controller.ease();
        }

        // Update Message Displaying the Current Position
        this.controller.update(
            `Move from (${prev.x + 1}, ${prev.y + 1}) to (${x + 1}, ${y + 1});`
        );
    }

    /**
     * Select Callback Function
     * 
     * Used as a parameter for the Board-Builder Class, 
     * this is a callback function that allows the user to
     * update the size of the Chessboard where the puzzles
     * are set, between 5 by 5 and 8 by 8.
     * 
     * @param {number} size New Board Size
     */
    selectCallback (size) { this.rebuild(size); }

    /**
     * Start Callback Function
     * 
     * Used as a parameter for the Shortest Path and the 
     * Knight's Tour Control Classes, this is a callback 
     * function that initialises the two different kinds of
     * puzzles available within the app.
     * 
     * @param {number} x Goal X-Coordinate
     * @param {number} y Goal Y-Coordinate
     * @param {boolean} tour Tour Puzzle (Default False)
     */
    startCallback (x, y, tour=false) {
        // Clear Display
        this.controller.clear();

        // Clear Highlights on Tiles
        this.tiles.forEach(tile => { tile.reset(); });

        // Prompt User to Select an Initial Tile
        this._selecting = true;
        this._touring = tour;
        this.controller.update(
            "Please Select an Initial Tile for the Knight."
        );

        // Setup Variables
        if (!tour) {
            this._goal.x = x;
            this._goal.y = y;
        }
    }

    /**
     * Undo Callback Function
     * 
     * Used as a parameter for the Shortest Path and the
     * Knight's Tour Control Classse, this is a callback 
     * function that will return the Knight to it's last
     * tile, if that tile exists.
     */
    undoCallback () {
        if (this.previous.length > 0) {
            // Remove Knight from Current Tile
            this.current.removeKnight();
            
            // Update Current Tile to Last Tile
            this.current = this.previous.pop();
            this.current.placeKnight(this.knight.element);

            // Update Knight's Current Location
            this.knight.update(x, y);
        }
    }

    /**
     * Show Solution Callback Function
     * 
     * Used as a parameter for the Shortest Path and the
     * Knight's Tour Control Classes, this is a callback
     * function that prompts the Search Algorithm to show
     * the solution generated.
     * 
     * @param {boolean} tour True if Knight's Tour
     */
    showCallback (tour=false) { 
        this._algorithm = true;
        this.knight.prompt(this.clickCallback.bind(this), tour); 
    }

    /**
     * Click Tile Callback Function
     * 
     * Used as a parameter for the Tile Class, this is a 
     * callback function that can be used either to move
     * the Knight to a desired location, given it is a 
     * legal move, or for placing the Knight on a desired
     * initial tile for the Puzzles.
     * 
     * @param {number} x Desired X-Coordinate
     * @param {number} y Desired Y-Coordinate
     */
    clickCallback (x, y) {
        // Handle User Initial Tile Selection
        if (this._selecting) {
            // Update Current Tile
            this.current.removeKnight();
            this.tiles.forEach(tile => {
                if (tile.x === x && tile.y === y) {
                    this.current = tile;
                    if (this._touring) 
                        this.current.number(1);
                    tile.placeKnight(this.knight.element);
                }
            });
            // Update Knight's Current Position
            this.knight.update(x, y);

            // Generate Goal Posiiton
            this._selecting = false;
            this.generatePuzzle(this._touring);
        } else if (this._start && this._touring) {
            const legal = this.knight.isLegal(x, y);
            const visited = this.knight.beenVisited(x, y);
            if (legal && !visited) {
                // Add Move to Path
                this._path.push({x: x, y: y});
                this.click(x, y);

                if (this.knight.endOfTour(x, y)) {
                    if (this._algorithm) {
                        // Update User on Knight's Success and Path there
                        this.controller.update(
                            "The Knight's Tour was Completed using Warnsdorff's Algorith.\n" + 
                            `The Path taken:\n(${this._root.x + 1}, ${this._root.y + 1})`
                        );
                        do {
                            let step = this.knight.path[0];
                            this.knight.path.splice(0, 1);
                            this.controller.update(`(${step.x + 1}, ${step.y + 1})`);
                        } while (this.knight.path.length > 0);
                    } else {
                        // Update User on their Success and the Path there
                        this.controller.update(
                            "Congratulations for completing the Knight's Tour!\n" +
                            `Path taken:\n(${this._root.x + 1}, ${this._root.y + 1})`
                        );
                        this._path.forEach(coord => {
                            this.controller.update(`(${coord.x + 1}, ${coord.y + 1})`);
                        });
                    }

                    // Stop the Puzzle
                    this._start = false;
                }
            } else if (!legal) {
                // Alert User that their move was Illegal
                this.#ERROR = true;
                this.controller.alert("Nice try, that is an illegal move!");
            } else if (visited) {
                // Alert User the tile has been Visited
                this.#ERROR = true;
                this.controller.alert("Tile has already been visited!");
            }
        } else if (this._start && !this._touring) {
            if (this.knight.isLegal(x, y)) {
                // Add Move to Path
                this._path.push({x: x, y: y});
                this.click(x, y);

                // Check if Goal has been Reached
                if (this._goal.x === x && this._goal.y === y) {
                    if (this._algorithm) {
                        // Update User on Knight's Success and path there
                        this.controller.update(
                            `The Search Algorithm has reached the goal in ${this.knight.steps};\n` +
                            `Path taken:\n(${this._root.x + 1}, ${this._root.y + 1})`
                        );
                        do {
                            let step = this.knight.path.pop();
                            this.controller.update(`(${step.x + 1}, ${step.y + 1})`)
                        } while (this.knight.path.length > 0);
                    } else {
                        // Update User on their Success and the path there
                        this.controller.update(
                            `Congratulations for reaching the goal in ${this._path.length};\n` +
                            `Search Algorithm's Best: ${this.knight.path.length - 1};\n` + 
                            `Path taken:\n(${this._root.x + 1}, ${this._root.y + 1})`
                        );
                        this._path.forEach(coord => {
                            this.controller.update(`(${coord.x + 1}, ${coord.y + 1})`);
                        });
                    }

                    // Stop the Puzzle
                    this._start = true;
                }
            } else {
                // Alert User that their move was Illegal
                this.#ERROR = true;
                this.controller.alert("Nice try, that is an illegal move!");
            }
        } else {
            // Regular Clicking
            if (this.knight.isLegal(x, y)) 
                this.click(x, y);
            else {
                // Alert User that their move was Illegal
                this.#ERROR = true;
                this.controller.alert("That is an illegal move!");
            }
        }
    }

    /**
     * Reset Callback Function
     * 
     * Used as a parameter for the Get Header Function, 
     * this is a callback function that allows the user to
     * reset the board to the original position.
     */
    resetCallback () {
        // Only Reset Knight's Position if not Initial Position
        if (this.current.x !== this._root.x || this.current.y !== this._root.y) {
            // Update Current Tile
            this.current.removeKnight();
            this.tiles.forEach(tile => {
                if (tile.x === this._root.x && tile.y === this._root.y) {
                    this.current = tile;
                    tile.placeKnight(this.knight.element);
                }
                tile.reset();
            });
            // Update Knight's Current Position
            this.knight.update(this._root.x, this._root.y);

            // Clear Message Display
            this.controller.clear();
        }
    }
}

/***/ }),

/***/ "./src/chess-module/knight.js":
/*!************************************!*\
  !*** ./src/chess-module/knight.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Knight)
/* harmony export */ });
/* harmony import */ var _data_structure_graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-structure/graph.js */ "./src/data-structure/graph.js");
/* harmony import */ var _images_knight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/knight.png */ "./src/images/knight.png");



class Knight {
    #BOARD_SIZE;

    /**
     * Knight Class
     * 
     * Class that Generates the DOM element that represents
     * the Knight Object, and also controls the Knight as 
     * it moves across the Chessboard, either by the User
     * or by the Search Algorithm.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @param {number} board Chessboard Size
     * @param {Array} tiles Array of Chessboard Tiles
     */
    constructor (x, y, board, tiles) {
        // Create DOM Element
        this.element = document.createElement("div");
        const icon = new Image();
        icon.src= _images_knight_png__WEBPACK_IMPORTED_MODULE_1__;
        this.element.appendChild(icon);
        this.element.classList.add("knight");

        // Initialise Variables
        this.x = x;
        this.y = y;
        this.#BOARD_SIZE = board;
        this.tiles = tiles;
        this.legal = [];
        this.path = [];

        // Generate Graph for Tiles
        this.graph = new _data_structure_graph_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.fill();
        this.currentLegalMoves();
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get legal () { return this._legal; }

    set legal (arr) { this._legal = arr; }

    get tiles () { return this._tiles; }

    set tiles (arr) { this._tiles = arr; }

    get graph () { return this._graph; }

    set graph (graph) { this._graph = graph; }

    get path () { return this._path; }

    set path (arr) { this._path = arr; }

    get steps () { return this._steps; }

    set steps (num) { this._steps = num; }

    /**
     * Prime Function
     * 
     * Prime the Knight for a Fair Traversal.
     */
    prime () {
        for (let vertex of this.graph.vertices())
            vertex.visited = false;
    }

    /**
     * Update Board Function
     * 
     * For a newly selected Board Size by the User, the 
     * Knight's variables must also be updated.
     * 
     * @param {number} size New Board Size
     * @param {Array} tiles Array of Tiles
     */
    updateBoard (size, tiles) {
        // Reset Graph
        this.graph.clearEdges();
        this.graph.clearVertices();

        // Update Variables
        this.#BOARD_SIZE = size;
        this.tiles = tiles;

        // Fill Graph and update Legal Moves
        this.fill();
        this.currentLegalMoves();
    }

    /**
     * Set Path Function
     * 
     * Assign new Path for the Knight to Traverse through.
     * 
     * @param {Array} path Path for Knight 
     */
    setPath (path) { this.path = path; }

    /**
     * Prompt Function
     * 
     * Using an Interval, the function will iterate through
     * the Path Generated to make the Knight Traverse the
     * Chessboard.
     * 
     * @callback moveCallback Move Knight Callback
     * @param {boolean} tour True if Knight's Tour
     */
    prompt (moveCallback, tour=false) {
        // // First Vertex is the Current Position
        this.steps = this.path.length;
        var aux = [...this.path];

        // For tours, first Vertex is Initial Position
        if (tour)
            aux.splice(0, 1);

        // Every Second, Knight executes the next move
        var x = setInterval(function () {
            let vertex;

            // Tours are stored from the Front of Array
            if (tour) {
                vertex = aux[0];
                aux.splice(0, 1);
            } 
            // Shortest Path are stored from Back of Array
            else 
                vertex = aux.pop();

            // Step Forward
            moveCallback(vertex.x, vertex.y);
            if (aux.length === 0)
                clearInterval(x);
        }, 1000);
    }

    /**
     * Fill Function
     * 
     * Based on the Legal Moves that a Knight can make on a
     * Chessboard, this function will fill up the graph
     * with edges that correspond to the legal movements a
     * knight can make at each square on the board.
     */
    fill () {
        // Add a Vertex for each Tile
        this.tiles.forEach(tile => {
            this.graph.insertVertex(tile.x, tile.y);
        });

        // Add an Edge for Traversing with Knight
        for (let x = 0; x < this.#BOARD_SIZE; x++)
            for (let y = 0; y < this.#BOARD_SIZE; y++)
                this.getLegalMoves(x, y);
    }

    /**
     * Current Legal Moves Function
     * 
     * For the current position the knight is in on the 
     * Chessboard, this function will fill up the legal 
     * moves array with the currently available legal moves.
     */
    currentLegalMoves () {
        const current = this.graph.getVertex(this.x, this.y);
        for (let i = 0; i < current.neighbours.length; i++)
            this.legal.push(current.neighbours[i]);
    }

    /**
     * Update Function
     * 
     * Update the Position of the Knight, and retrieve new
     * legal moves.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    update (x, y) {
        this.x = x;
        this.y = y;
        this.legal = [];
        this.currentLegalMoves();
    }

    /**
     * Been Visited Function
     * 
     * Checks if Vertex has been Visited, updating it if it
     * has not been.
     * 
     * @param {number} x Vertex X-Coordinate
     * @param {number} y Vertex Y-Coordinate
     * @returns True if Vertex has been Visited
     */
    beenVisited (x, y) {
        // Get Vertex from Graph
        let vertex = this.graph.getVertex(x, y);

        // Return True if it has been Visited
        if (vertex.visited) 
            return true;
        
        // Else, set Visited to be True and Return False
        vertex.visited = true;
        return false;
    }

    /**
     * End of Tour Function
     * 
     * Checks if the Current Tile is the Final Tile in the
     * Knight's Tour.
     * 
     * @param {number} x Current X-Coordinate
     * @param {number} y Current Y-Coordinate
     * @returns True if Current Tile is Last Tile in Tour
     */
    endOfTour (x, y) { return this.graph.getVertex(x, y).move === Math.pow(this.#BOARD_SIZE, 2); }

    /**
     * Is Legal Function
     * 
     * Checks if the Move selected is a legal one, given 
     * the restrictions of the Knight's movement on a
     * chessboard.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @returns True if Move is Legal
     */
    isLegal (x, y) {
        let idx = -1;
        for (let i = 0; i < this.legal.length; i++)
            if (this.legal[i].x === x && this.legal[i].y === y)
                idx = i;
        
        return idx >= 0;
    }

    /**
     * Get Legal Moves Function
     * 
     * For the Given Position, the function will generate
     * the edges towards the legal positions, given the 
     * knights restricted moves on a chessboard.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    getLegalMoves (x, y) {
        let current = this.graph.getVertex(x, y);
        // Top Moves
        if (y + 2 < this.#BOARD_SIZE) {
            // Check if Top-Right is Legal
            if (x + 1 < this.#BOARD_SIZE) {
                let topRight = this.graph.getVertex(x + 1, y + 2);
                this.graph.insertEdge(current, topRight);
            }
            // Check if Top-Left is Legel
            if (x - 1 >= 0) {
                let topLeft = this.graph.getVertex(x - 1, y + 2);
                this.graph.insertEdge(current, topLeft);
            }
        }
        // Right Moves
        if (x + 2 < this.#BOARD_SIZE) {
            // Check if Right-Top is Legal
            if (y + 1 < this.#BOARD_SIZE) {
                let rightTop = this.graph.getVertex(x + 2, y + 1);
                this.graph.insertEdge(current, rightTop);
            }
            // Check if Right-Bottom is Legal
            if (y - 1 >= 0) {
                let rightBottom = this.graph.getVertex(x + 2, y - 1);
                this.graph.insertEdge(current, rightBottom);
            }
        }
        // Bottom Moves
        if (y - 2 >= 0) {
            // Check if Bottom-Right is Legal
            if (x + 1 < this.#BOARD_SIZE) {
                let bottomRight = this.graph.getVertex(x + 1, y - 2);
                this.graph.insertEdge(current, bottomRight);
            }
            // Check if Bottom-Left is Legal
            if (x - 1 >= 0) {
                let bottomLeft = this.graph.getVertex(x - 1, y - 2);
                this.graph.insertEdge(current, bottomLeft);
            }
        }
        // Left Moves
        if (x - 2 >= 0) {
            // Check if Left-Top is Legal
            if (y + 1 < this.#BOARD_SIZE) {
                let leftTop = this.graph.getVertex(x - 2, y + 1);
                this.graph.insertEdge(current, leftTop);
            }
            // Check if Left-Bottom is Legal
            if (y - 1 >= 0) {
                let leftBottom = this.graph.getVertex(x - 2, y - 1);
                this.graph.insertEdge(current, leftBottom);
            }
        }
    }
}

/***/ }),

/***/ "./src/chess-module/tile.js":
/*!**********************************!*\
  !*** ./src/chess-module/tile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tile)
/* harmony export */ });
class Tile {
    /**
     * Tile Class
     * 
     * Chess Board Tile Element.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @param {string} colour "black" or "white"
     */
    constructor (x, y, colour="white") {
        // Create DOM Element
        this.element = document.createElement("div");
        this.element.classList.add(`${colour}-tile`);
        this.element.id = `${x}-${y}-tile`;
        this.element.style.setProperty(
            "grid-area", `tile-${x}${y}`
        );

        // Initialise Variables
        this.x = x;
        this.y = y;
        this.move = 0;
        this.colour = colour;
        this.active = false;
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get move () { return this._move; }

    set move (num) { this._move = num; }

    get colour () { return this._colour; }

    set colour (str) { this._colour = str; }

    get active () { return this._active; }

    set active (bool) { this._active = bool; }

    /**
     * Remove Knight Function
     * 
     * Removes the Knight DOM Element from the tile.
     */
    removeKnight () { 
        this.element.innerHTML = ""; 
        if (this.active && this.move > 0)
            this.element.textContent = this.move;
    }

    /**
     * Place Knight Function
     * 
     * Appends the Knight DOM Element to the tile.
     * 
     * @param {*} elem Knight DOM Element
     */
    placeKnight (elem) {
        this.element.appendChild(elem);
        this.highlight();
    }

    /**
     * Number Function
     * 
     * Number the Tile with a Desired Number.
     * 
     * @param {number} num Number for Tile
     */
    number (num) { 
        this.move = num;
        this.element.textContent = num; 
    }

    /**
     * Highlight Function
     * 
     * Highlights the tile when if the tile is active and
     * if the knight lands on the tile.
     */
    highlight () {
        if (this.active && !this.element.classList.contains("selected"))
            this.element.classList.add("selected");
    }

    /**
     * Toggle Function
     * 
     * Sets the active variable to be on or off, depending
     * on whether or not there is a puzzle that the user is
     * currently completing.
     */
    toggle () { this.active = !this.active; }

    /**
     * Reset Function
     * 
     * Removes any instance of the Tile being highlighted.
     */
    reset () {
        if (this.element.classList.contains("selected")) {
            this.element.classList.remove("selected");
            this.element.textContent = "";
            this.move = 0;
        }
    }

    /**
     * Set Click Event Listener Function
     * 
     * With the Callback Parameter, this function will set
     * the Click Event Listener to the Tile DOM element so
     * that it will highlight the tile, if active, and also
     * complete the desired task for the Tile.
     * 
     * @callback callback Click Tile Callback
     */
    setClickEventListener (callback) {
        this.element.addEventListener("click", (e) => {
            this.highlight();
            callback(this.x, this.y);
        });
    }
}

/***/ }),

/***/ "./src/data-structure/edge.js":
/*!************************************!*\
  !*** ./src/data-structure/edge.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edge)
/* harmony export */ });
/* harmony import */ var _vertex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertex.js */ "./src/data-structure/vertex.js");


class Edge {
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

/***/ }),

/***/ "./src/data-structure/graph.js":
/*!*************************************!*\
  !*** ./src/data-structure/graph.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Graph)
/* harmony export */ });
/* harmony import */ var _edge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edge.js */ "./src/data-structure/edge.js");
/* harmony import */ var _vertex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertex.js */ "./src/data-structure/vertex.js");



class Graph {
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
        const vertex = new _vertex_js__WEBPACK_IMPORTED_MODULE_1__["default"](x, y);
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
            const edge = new _edge_js__WEBPACK_IMPORTED_MODULE_0__["default"](u, v);
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

/***/ }),

/***/ "./src/data-structure/queue.js":
/*!*************************************!*\
  !*** ./src/data-structure/queue.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Queue)
/* harmony export */ });
class Queue {
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
     * Size Function
     * 
     * Returns the number of elements in the Queue.
     * 
     * @returns Size of the Queue
     */
    size () { return this._queue.length; }

    /**
     * Is Empty Function
     * 
     * If there are no Elements in the Queue, the function
     * returns true, and will return false in all other
     * cases.
     * 
     * @returns True if there are no Elements in the Queue
     */
    isEmpty () { return this._queue.length === 0; }

    /**
     * Enqueue Function
     * 
     * Adds a new Element to the Queue.
     * 
     * @param {*} e New Element for Queue
     */
    enqueue (e) { this._queue.push(e); }

    /**
     * First Function
     * 
     * Returns the First Element of the Queue, without
     * dequeuing it.
     * 
     * @returns The First Element of the Queue
     */
    first () { return this._queue[0]; }

    /**
     * Dequeue Function
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

/***/ }),

/***/ "./src/data-structure/vertex.js":
/*!**************************************!*\
  !*** ./src/data-structure/vertex.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vertex)
/* harmony export */ });
class Vertex {
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

    /**
     * Remove Neighbour Function
     * 
     * Removes a Neighbour Vertex, if it exists from the
     * Vertex's Neighbour List.
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

/***/ }),

/***/ "./src/drop-down-module/dropdown.js":
/*!******************************************!*\
  !*** ./src/drop-down-module/dropdown.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropDownModule)
/* harmony export */ });
/* harmony import */ var _css_drop_down_styling_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/drop-down-styling.css */ "./src/css/drop-down-styling.css");
/* harmony import */ var _options_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.js */ "./src/drop-down-module/options.js");



class DropDownModule extends _options_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Drop Down Module
     * 
     * Generic Drop Down Module, that creates a list
     * of options that a User can Choose from, with a
     * default Option that will display for the user.
     * 
     * @param {Array} content Array of Content
     * @param {string} name Name of Options List
     * @param {string} selected Default Option
     */
    constructor (content, name, selected) {
        super(content, name, selected);

        // Create DOM Elemets
        this.dropDown = document.createElement("div");
        this.dropDown.classList.add(`${name}-dropdown`);
        this.dropDown.textContent = selected;
        
        // Initially, not Disabled
        this.disabled = false;

        // Add Click Event Listener to Select
        this.dropDown.addEventListener("click", (e) => { this.toggle(); });

        // Append Options List to Module
        this.dropDown.appendChild(this.options);
    }

    get dropDown () { return this._drop_down; }

    set dropDown (elem) { this._drop_down = elem; }

    /**
     * Update Selection Function
     * 
     * Update Dropdown selection based on User's seleciton.
     */
    updateSelection () { this.dropDown.childNodes[0].nodeValue = this.selected; }
}

/***/ }),

/***/ "./src/drop-down-module/options.js":
/*!*****************************************!*\
  !*** ./src/drop-down-module/options.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OptionsList)
/* harmony export */ });
class OptionsList {
    /**
     * Options List Class
     * 
     * Generates an Options List of desired content.
     * 
     * @param {Array} content Array of Content
     * @param {string} name Name of Options List
     * @param {string} selected Default Option
     */
    constructor (content, name, selected) {
        // Create DOM Elements
        this.name = name;
        this.options = document.createElement("div");
        this.options.classList.add(`${name}-options`);

        // Initialise Content
        this.initialise(content, selected);
    }

    get name () { return this._name; }

    set name (str) { this._name = str; }

    get list () { return this._list; }

    set list (arr) { this._list = arr; }

    get options () { return this._options; }

    set options (elem) { this._options = elem; }

    get selected () { return this._selected; }

    set selected (value) { this._selected = value; }

    /**
     * Toggle Function 
     *
     * Dropdown List can be revealed or hidden using
     * this function.
     */
    toggle () {
        // Toggle Visibility of Options
        this.options.classList.toggle("visible");

        // Toggle Visibility of Menu Objects
        this.list.forEach(item => { item.classList.toggle("visible"); });
    }

    /**
     * Initialise Function
     * 
     * Sets up the options in Option List and adds
     * them to the List.
     * 
     * @param {Array} content Array of Content
     * @param {string} selected Default Selection
     */
    initialise (content, selected) {
        this.list = [];
        this.selected = selected;
        this.options.innerHTML = "";

        // Iterate through Content
        content.forEach(item => {
            // Create Option DOM Object
            const option = document.createElement("div");
            option.classList.add(`${this.name}-option`);
            option.textContent = item;
            option.id = item.toLowerCase();

            // Add Option to List & Options Object
            this.list.push(option);
            this.options.appendChild(option);
        });
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalise_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalise.css */ "./src/css/normalise.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/header.css */ "./src/css/header.css");
/* harmony import */ var _layout_builder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-builder.js */ "./src/layout-builder.js");
/* harmony import */ var _chess_module_chessboard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chess-module/chessboard.js */ "./src/chess-module/chessboard.js");






// Generate Chessboard
const chessboard = new _chess_module_chessboard_js__WEBPACK_IMPORTED_MODULE_4__["default"]();

// Add DOM Elements to Body
document.body.appendChild((0,_layout_builder_js__WEBPACK_IMPORTED_MODULE_3__.getHeader)(chessboard.resetCallback.bind(chessboard)));
document.body.appendChild(chessboard.module);
document.body.appendChild(chessboard.controller.module);
document.body.appendChild((0,_layout_builder_js__WEBPACK_IMPORTED_MODULE_3__.getFooter)());

/***/ }),

/***/ "./src/layout-builder.js":
/*!*******************************!*\
  !*** ./src/layout-builder.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFooter: () => (/* binding */ getFooter),
/* harmony export */   getHeader: () => (/* binding */ getHeader)
/* harmony export */ });
/**
 * Get Header Function
 * 
 * Generates Header DOM Element.
 * 
 * @callback resetCallback Reset Event Listener
 * @returns Header DOM Element
 */
const getHeader = function (resetCallback) {
    // Create Nav-Bar DOM Element
    const nav = document.createElement("div");
    nav.classList.add("nav-bar");

    // Create Title DOM Element
    const title = document.createElement("h1");
    title.textContent = "Knight Travails";

    // Create Reset Button DOM Element
    const reset = document.createElement("button");
    reset.textContent = "Reset";
    reset.addEventListener("click", (e) => { 
        resetCallback();
    });

    // Add Elements to Nav-Bar
    nav.appendChild(title);
    nav.appendChild(reset);

    return nav;
}

/**
 * Get Footer Function
 * 
 * Generates Footer DOM Element.
 * 
 * @returns Footer DOM element
 */
const getFooter = function () {
    // Create Footer DOM Element
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Yona \u00A9 2024";
    
    return footer;
}



/***/ }),

/***/ "./src/puzzle-module/board-builder.js":
/*!********************************************!*\
  !*** ./src/puzzle-module/board-builder.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoardBuilder)
/* harmony export */ });
/* harmony import */ var _drop_down_module_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drop-down-module/dropdown */ "./src/drop-down-module/dropdown.js");


class BoardBuilder {
    #MINIMUM = 5;
    #MAXIMUM = 8;

    /**
     * Board Builder Class
     * 
     * Controller Class for Adjusting the Chessboard size
     * and providing information about the size limitations
     * for the User.
     * 
     * @callback infoCallback Builder Info Callback
     * @callback selectCallback Option Select Callback
     */
    constructor (infoCallback, selectCallback) {
        // Create Module DOM Element
        this.module = document.createElement("div");
        this.module.classList.add("board-builder");

        // Create Title DOM Element
        const title = document.createElement("h2");
        title.textContent = "Board Builder";

        // Create Information Button DOM Element
        this.info = document.createElement("button");
        this.info.classList.add("info-board-builder-btn");
        this.info.textContent = "Info";
        
        // Create Board Size Options DOM Element
        this.select = new _drop_down_module_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"](this.#buildOptions(), "board-builder", this._options[8]);

        // Add Display Builder Info Event Listener
        this.info.addEventListener("click", (e) => {
            infoCallback(
                "Rebuild Board to your liking.\nPlease note that you may not " +
                "Build a board that is smaller than 5 by 5, because there are " +
                "no Knight's tours that can be completed in smaller boards, " +
                "except for the Trivial 1 by 1 case. Due to screen size limitations" +
                "the maximum board size is the traditional Chessboard size, 8 by 8."
            );
        });

        // Add Option Select Event Listeners
        this.select.list.forEach(option => {
            option.addEventListener("click", (e) => {
                // Find the Option that has been Selected
                let selection;
                Object.entries(this._options).forEach(([key, value]) => {
                    if (value === option.textContent) {
                        this.select.selected = option.textContent;
                        selection = key;
                        this.select.updateSelection();
                    }
                });

                // Update Board
                selectCallback(selection);
            });
        });

        // Append Elements into Module
        this.module.appendChild(title);
        this.module.appendChild(this.info);
        this.module.appendChild(this.select.dropDown);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get info () { return this._info; }

    set info (elem) { this._info = elem; }

    get select () { return this._select; }

    set select (obj) { this._select = obj; }

    /**
     * Build Options Function
     * 
     * Builds options for the Sizes of the Chessboard that
     * are Mathematical possible (up to 8 by 8).
     * 
     * @returns Array of Options for Dropdown list
     */
    #buildOptions () {
        this._options = {};
        for (let i = this.#MINIMUM; i <= this.#MAXIMUM; i++)
            this._options[i] = `${i}\u00D7${i}`;

        return Object.values(this._options);
    }
}

/***/ }),

/***/ "./src/puzzle-module/controller.js":
/*!*****************************************!*\
  !*** ./src/puzzle-module/controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _css_controller_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/controller.css */ "./src/css/controller.css");
/* harmony import */ var _board_builder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board-builder.js */ "./src/puzzle-module/board-builder.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/puzzle-module/display.js");
/* harmony import */ var _knights_tour_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knights-tour.js */ "./src/puzzle-module/knights-tour.js");
/* harmony import */ var _shortest_path_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shortest-path.js */ "./src/puzzle-module/shortest-path.js");






class Controller {
    /**
     * Controller Class
     * 
     * Generates the DOM Elements for the Puzzle Controller
     * including the Display, and the two Puzzle Components
     * specifically, the Shortest Path Puzzle and the 
     * Knight's Tour Puzzle.
     * 
     * @param {number} x Initial X-Coordinate
     * @param {number} y Initial Y-Coordinate
     * @param {number} board Chessboard Size
     * @callback selectCallback Select Board Size Callback
     * @callback startCallback Start Puzzle Callback
     * @callback undoCallback Undo Move Callback
     * @callback showCallback Show Solution Callback
     */
    constructor (x, y, board, selectCallback, startCallback, undoCallback, showCallback) {
        // Initialise Variables
        this.board = board;
        this.initial = {x: x, y: y};

        // Create Module DOM Element
        this.module = document.createElement("div");
        this.module.classList.add("puzzle-controller");

        // Create Display DOM Element
        this.display = new _display_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

        // Create Board-Builder Controls DOM ELement
        this.builder = new _board_builder_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.update.bind(this), selectCallback);

        // Create Random Location Controls DOM Element
        this.shortest = new _shortest_path_js__WEBPACK_IMPORTED_MODULE_4__["default"](x, y, board, startCallback, this.update.bind(this), undoCallback, showCallback);

        // Create Full-Board Controls DOM Element
        this.tour = new _knights_tour_js__WEBPACK_IMPORTED_MODULE_3__["default"](x, y, board, startCallback, this.update.bind(this), undoCallback, showCallback);

        // Append All To Module
        this.module.appendChild(this.display.module);
        this.module.appendChild(this.builder.module);
        this.module.appendChild(this.shortest.module);
        this.module.appendChild(this.tour.module);
    }

    get board () { return this._board; }

    set board (num) { this._board = num; }

    get initial () { return this._initial; }

    set initial (dict) { this._initial = dict; }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get display () { return this._display; }

    set display (obj) { this._display = obj; }

    get builder () { return this._builder; }

    set builder (obj) { this._builder = obj; }

    get shortest () { return this._shortest; }

    set shortest (obj) { this._shortest = obj; }

    get tour () { return this._tour; }

    set tour (obj) { this._tour = obj; }

    /**
     * Update Function
     * 
     * Used by Chessboard Class to update the Puzzle-
     * Controller Display with a New Message.
     * 
     * @param {string} msg New Message
     */
    update (msg) { this.display.update(msg); }
    
    /**
     * Alert Function
     * 
     * Used by Chessboard Class to alert the Puzzle-
     * Controller Display with an Alert.
     * 
     * @param {string} msg Alert Message
     */
    alert (msg) { this.display.alert(msg); }

    /**
     * Ease Function
     * 
     * Used by Chessboard Class to update the Puzzle-
     * Controller that any Alerts have been eased.
     */
    ease () { this.display.ease(); }

    /**
     * Clear Function
     * 
     * Used by Chessboard Class to clear the Puzzle-
     * Controller's display of all messages.
     */
    clear () { this.display.clear(); }
}

/***/ }),

/***/ "./src/puzzle-module/display.js":
/*!**************************************!*\
  !*** ./src/puzzle-module/display.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Display)
/* harmony export */ });
class Display {
    /**
     * Display Class
     * 
     * Part of the Puzzle Controller Module, this class is
     * the part of the UI that updates the User on moves 
     * that either they or the Controller Algorithm has
     * completed. Additionally, the display will show any
     * alerts that should come to the User's attention.
     */
    constructor () {
        // Create Display DOM Element
        this.module = document.createElement("div");
        this.module.classList.add("controller-display");

        // Intialise Variables
        this._message = "";
        this._save_message = "";
        this._alerted = false;
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Clear Function
     * 
     * Clears all messages on the Display.
     */
    clear () { 
        // Clear Message Queue and Display
        this._message = "";
        this.module.innerHTML = ""; 
    }

    /**
     * Update Function
     * 
     * For the incoming message, this function will display
     * the new message below any current messages.
     * 
     * @param {string} msg New Message
     */
    update (msg) {
        // Update New Queue of Messages
        if (this._message === "")
            this._message = msg;
        // Update Existing Queue of Messages
        else
            this._message += "\n" + msg;

        // Update Display
        this.module.textContent = this._message;
    }

    /**
     * Alert Function
     * 
     * For the incoming alert message, this function will
     * display the alert below any current messages, and
     * change the display to indicate there is an alert.
     * 
     * @param {string} msg Alert Message
     */
    alert (msg) {
        // Set Alert and Store Current Queue
        this._alerted = true;
        this._save_message = this._message;

        // Update Display indicating Alert
        if (!this.module.classList.contains("alert"))
            this.module.classList.add("alert");

        // Queue Alert
        this.update(msg);
    }

    /**
     * Ease Function
     * 
     * If there was an alert, this function will clear any
     * alert messages and revert the display to a regular
     * one.
     */
    ease () {
        // Ease Display from Alert to Regular
        if (this.module.classList.contains("alert"))
            this.module.classList.remove("alert");

        // Clear Message Queue of Alert
        this.clear();

        // Resume Original Message Queue
        this._message = this._save_message;
        this.module.textContent = this._message;
    }
}

/***/ }),

/***/ "./src/puzzle-module/generic-controls.js":
/*!***********************************************!*\
  !*** ./src/puzzle-module/generic-controls.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenericControls)
/* harmony export */ });
class GenericControls {
    /**
     * Generic Controls Class
     * 
     * Used as a Base Class, this class will generate the 
     * DOM Elements associated with the controllers that 
     * include the User start button, and the Controller
     * Algorithm button, which is represented by the Show
     * Button.
     * 
     * @param {Array} names Array of Strings
     * @param {number} x Initial X-Coordinate
     * @param {number} y Initial Y-Coordinate
     * @param {number} board Board Size
     */
    constructor (names, x, y, board) {
        // Create Module DOM Element
        this.module = document.createElement("div");
        this.module.classList.add(`${names[0].toLowerCase()}-${names[1].toLowerCase()}-buttons`);

        // Create Title DOM Element
        const title = document.createElement("h2");
        title.textContent = `${names[0]} ${names[1]}`;

        // Create start Button DOM Element
        this.start = document.createElement("button");
        this.start.classList.add(`start-${names[0].toLowerCase()}-${names[1].toLowerCase()}-btn`);
        this.start.textContent = "Select Start";

        // Create Information Button DOM Element
        this.info = document.createElement("button");
        this.info.classList.add(`info-${names[0].toLowerCase()}-${names[1].toLowerCase()}-btn`);
        this.info.textContent = "Info";

        // Create Undo Button DOM Element
        this.undo = document.createElement("button");
        this.undo.classList.add(`undo-${names[0].toLowerCase()}-${names[1].toLowerCase()}-btn`);
        this.undo.textContent = "Undo";

        // Create Show Button DOM Element
        this.show = document.createElement("button");
        this.show.classList.add(`show-${names[0].toLowerCase()}-${names[1].toLowerCase()}-btn`);
        this.show.textContent = "Show";

        // Append Elements into Module
        this.module.appendChild(title);
        this.module.appendChild(this.start);
        this.module.appendChild(this.info);
        this.module.appendChild(this.undo);
        this.module.appendChild(this.show);

        // Initialise Variables
        this.x = x;
        this.y = y;
        this.size = board;
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get start () { return this._start; }

    set start (elem) { this._start = elem; }

    get info () { return this._info; }

    set info (elem) { this._info = elem; }

    get undo () { return this._undo; }

    set undo (elem) { this._undo = elem; }

    get show () { return this._show; }

    set show (elem) { this._show = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get size () { return this._size; }

    set size (board) { this._size = board; }
}

/***/ }),

/***/ "./src/puzzle-module/knights-tour.js":
/*!*******************************************!*\
  !*** ./src/puzzle-module/knights-tour.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KnightsTourControls)
/* harmony export */ });
/* harmony import */ var _data_structure_graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-structure/graph.js */ "./src/data-structure/graph.js");
/* harmony import */ var _generic_controls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic-controls.js */ "./src/puzzle-module/generic-controls.js");



class KnightsTourControls extends _generic_controls_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Knight's Tour Puzzle Controls
     * 
     * Controller Class for Implementing the Famous problem
     * known as the knight's tour. A knight's tour is a 
     * sequence of moves of a knight on a chessboard such 
     * that the knight visits every square exactly once.
     * 
     * @param {number} x Initial X-Coordinate
     * @param {number} y Initial Y-Coordinate
     * @param {number} board Board Size
     * @callback startCallback Start Puzzle Callback
     * @callback infoCallback Display Puzzle Info Callback
     * @callback undoCallback Undo Move Callback
     * @callback showCallback Show Solution Callback
     */
    constructor (x, y, board, startCallback, infoCallback, undoCallback, showCallback) {
        super(["Knights", "Tour"], x, y, board, startCallback, infoCallback, showCallback);

        // Add Start Puzzle Event Listener
        this.start.addEventListener("click", (e) => { startCallback(0, 0, true); });

        // Add Display Puzzle Info Event Listener
        this.info.addEventListener("click", (e) => {
            infoCallback(
                `The Knight's Tour!\nGiven the ${board}` +
                ` by ${board} board with the Knight ` +
                `wherever you please, move the Knight ` +
                `according to the rules of chess, you ` +
                `must visit each square exactly once.`
            );
        });

        // Add Undo Move Event Listener
        this.undo.addEventListener("click", (e) => { undoCallback(); });

        // Add Show Solution Event Listener
        this.show.addEventListener("click", (e) => { showCallback(true); });
    }

    /**
     * Warnsdorff Function
     * 
     * Using Warndorff's Algorithm to find the Knight's
     * Tour for the given Root Tile, this algorithm can be
     * broken down into Warndorff's Rule:
     *  1. We can start from any initial position of the 
     *     knight on the board.
     *  2. We always move to an adjacent, unvisited square
     *     with minimal degree (minimum number of
     *     unvisited adjacent).
     * 
     * @param {number} rx Root X-Coordinate
     * @param {number} ry Root Y-Coordinate
     * @param {Graph} graph Graph of Board
     * @returns The Knight's Tour
     */
    warnsdorff (rx, ry, graph) {
        // Get Root Vertex
        const root = graph.getVertex(rx, ry);

        // Set All Vertices Move to be 0
        for (let v of graph.vertices()) {
            v.move = 0;
            v.visited = false;
        }

        // Set Root to be 1st Move
        root.move = 1;
        root.visited = true;
        let path = [root];

        // Setup Vertex to Cycle through Vertices
        let last = root.move;
        let aux = root;
        while (aux.move !== Math.pow(this.size, 2)) {
            // Find Neightbour with Fewest Neighbours
            let min = 1000000;
            let idx = -1;
            for (let i = 0; i < aux.neighbours.length; i++) {
                // Assign Neighbour
                let neighbour = graph.getVertex(aux.neighbours[i].x, aux.neighbours[i].y);

                // Count Number of Unvisited Neighbours
                let count = 0;
                for (let n of neighbour.neighbours) {
                    if (!n.visited)
                        count++;
                }

                // Assign Least Accessible Neighbour
                if (count < min && !neighbour.visited) {
                    min = count;
                    idx = i;
                }
            }

            // Set Least Accessible Vertex to be Next Move
            aux = aux.neighbours[idx];
            aux.visited = true;
            aux.move = last + 1;
            last = aux.move;
            path.push(aux);
        }

        return path;
    }
}

/***/ }),

/***/ "./src/puzzle-module/shortest-path.js":
/*!********************************************!*\
  !*** ./src/puzzle-module/shortest-path.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShortestPathControls)
/* harmony export */ });
/* harmony import */ var _data_structure_graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-structure/graph.js */ "./src/data-structure/graph.js");
/* harmony import */ var _data_structure_queue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-structure/queue.js */ "./src/data-structure/queue.js");
/* harmony import */ var _generic_controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generic-controls.js */ "./src/puzzle-module/generic-controls.js");




class ShortestPathControls extends _generic_controls_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
    /**
     * Shortest Path Puzzle Controls
     * 
     * Controller Class for Generating the Puzzle whereby
     * the User or Search Algorithm must move the Knight to
     * in the Smallest Number of Moves.
     * 
     * @param {number} x Initial X-Coordinate
     * @param {number} y Initial Y-Coordinate
     * @param {number} board Board Size
     * @callback startCallback Start Puzzle Callback
     * @callback infoCallback Display Puzzle Info Callback
     * @callback undoCallback Undo Move Callback
     * @callback showCallback Show Solution Callback
     */
    constructor (x, y, board, startCallback, infoCallback, undoCallback, showCallback) {
        super(["Shortest", "Path"], x, y, board);

        // Add Start Puzzle Event Listener
        this.start.addEventListener("click", (e) => {
            // Generate Puzzle
            const pos = this.generate();
            startCallback(pos.x, pos.y);
        });

        // Add Display Puzzle Info Event Listener
        this.info.addEventListener("click", (e) => {
            // Display Puzzle Information
            infoCallback(
                "Use the Select Start Button to choose your " +
                "initial Tile. Once selected, a Goal tile will" +
                " become highlighted, and you have to try to reach" +
                " that tile in as few moves as possible.\nBy clicking" +
                " the Show button, the knight will automatically move" +
                " to the Goal tile in the fewest possible moves."
            );
        });

        // Add Undo Move Event Listener
        this.undo.addEventListener("click", (e) => { undoCallback(); });

        // Add Show Solution Event Listener
        this.show.addEventListener("click", (e) => { showCallback(); });
    }

    /**
     * Generate Function
     * 
     * Creates a Coordinate of a Random Tile that is not
     * the Current Position on the Chessboard.
     * 
     * @returns Random Location on the Chessboard
     */
    generate () {
        // Initialise Position Variable
        let pos = {x: 0, y: 0};

        // Ensure Position is not the Initial Position
        while (true) {
            // Generate a Random Number for each Coordinate
            Object.keys(pos).forEach(coord => {
                pos[coord] = this.#random();
            });

            // Reject Positions that are Initial Position
            if (pos.x !== this.x && pos.y !== this.y)
                break;
        }

        return pos;
    }

    /**
     * Breadth First Search Function
     * 
     * Modified Version of the Breadth First Search
     * Algorithm, starting from the Root Vertex, the BFS
     * Algorithm visits all subsequent unvisited Vertices,
     * until the Goal Vertex is found.
     * 
     * @param {number} rx Root X-Coordinate
     * @param {number} ry Root Y-Coordinate
     * @param {number} gx Goal X-Coordinate
     * @param {number} gy Goal Y-Coordinate
     * @param {Graph} graph Graph of Board
     * @returns Shortest Path from Root to Goal
     */
    bfs (rx, ry, gx, gy, graph) {
        // Get Root and Goal Vertices
        const root = graph.getVertex(rx, ry);
        const goal = graph.getVertex(gx, gy);

        // Set All Vertices to be Unvisited
        for (let v of graph.vertices())
            v.visited = false;

        // Set Root to be Visited
        root.visited = true;

        // Setup Parent Array and Queue
        let parents = [];
        const queue = new _data_structure_queue_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        queue.enqueue(root);

        // Handle Neighbour Vertices
        while (!queue.isEmpty()) {
            let vertex = queue.dequeue();

            // Break out of Loop if Goal is Found
            if (vertex.sameVertex(goal))
                break;

            // Otherwise enqueue Neighbours of Neighbour
            vertex.neighbours.forEach(neighbour => {
                if (!neighbour.visited) {
                    neighbour.visited = true;

                    // Push Parent into Array
                    parents.push({vertex: neighbour, parent: vertex});
                    queue.enqueue(neighbour);
                }
            }); 
        }

        // Generate Shortest Path
        let path = [];
        path.push(goal);
        let current = goal;

        // Get Previous Vertices
        while (true) {
            // Search Parents for Previous Vertices
            let idx = -1;
            for (let i = 0; i < parents.length; i++) {
                if (parents[i].vertex.sameVertex(current)) {
                    idx = i;
                    break;
                }
            }

            // Add Parent to Path
            current = parents[idx].parent;

            // Break out if Root Found
            if (current.sameVertex(root))
                break;
            
            // Otherwise add to Path
            path.push(current);
        }

        return path;
    }

    /**
     * Random Function
     * 
     * Generates a random number between 0 and the size of 
     * the Chessboard.
     * 
     * @returns Random Number between 0 and Board Size
     */
    #random () { return Math.floor(Math.random() * this.size); }
}

/***/ }),

/***/ "./src/fonts/Gothica-Bold.ttf":
/*!************************************!*\
  !*** ./src/fonts/Gothica-Bold.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "044723fb467356297c07.ttf";

/***/ }),

/***/ "./src/fonts/Gothica-Book.ttf":
/*!************************************!*\
  !*** ./src/fonts/Gothica-Book.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b31ddefd8f9b01b38f96.ttf";

/***/ }),

/***/ "./src/fonts/Gothica-BookOblique.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Gothica-BookOblique.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d615bddc9a4fac46ea7.ttf";

/***/ }),

/***/ "./src/fonts/dogica.ttf":
/*!******************************!*\
  !*** ./src/fonts/dogica.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "214cd23097c4c02eb9bd.ttf";

/***/ }),

/***/ "./src/images/knight.png":
/*!*******************************!*\
  !*** ./src/images/knight.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d38136d2be31b56f4cff.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aHQtdHJhdmFpbHMvLi9zcmMvY3NzL2JvYXJkLmNzcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvY3NzL2NvbnRyb2xsZXIuY3NzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9jc3MvZHJvcC1kb3duLXN0eWxpbmcuY3NzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvY3NzL25vcm1hbGlzZS5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9jc3MvYm9hcmQuY3NzPzNkMWUiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2Nzcy9jb250cm9sbGVyLmNzcz81YzczIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9jc3MvZHJvcC1kb3duLXN0eWxpbmcuY3NzPzRmNjQiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2Nzcy9oZWFkZXIuY3NzPzhhYzEiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2Nzcy9ub3JtYWxpc2UuY3NzPzBiNGEiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9jaGVzcy1tb2R1bGUvYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2NoZXNzLW1vZHVsZS9jaGVzc2JvYXJkLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9jaGVzcy1tb2R1bGUva25pZ2h0LmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9jaGVzcy1tb2R1bGUvdGlsZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvZGF0YS1zdHJ1Y3R1cmUvZWRnZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvZGF0YS1zdHJ1Y3R1cmUvZ3JhcGguanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2RhdGEtc3RydWN0dXJlL3F1ZXVlLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9kYXRhLXN0cnVjdHVyZS92ZXJ0ZXguanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2Ryb3AtZG93bi1tb2R1bGUvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2Ryb3AtZG93bi1tb2R1bGUvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL2xheW91dC1idWlsZGVyLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9wdXp6bGUtbW9kdWxlL2JvYXJkLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL3B1enpsZS1tb2R1bGUvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9rbmlnaHQtdHJhdmFpbHMvLi9zcmMvcHV6emxlLW1vZHVsZS9kaXNwbGF5LmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9wdXp6bGUtbW9kdWxlL2dlbmVyaWMtY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0LXRyYXZhaWxzLy4vc3JjL3B1enpsZS1tb2R1bGUva25pZ2h0cy10b3VyLmpzIiwid2VicGFjazovL2tuaWdodC10cmF2YWlscy8uL3NyYy9wdXp6bGUtbW9kdWxlL3Nob3J0ZXN0LXBhdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jaGVzc2JvYXJkIHtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuW2NsYXNzKj1cIi10aWxlXCJdIHtcbiAgICB3aWR0aDogdmFyKC0tbW9iaWxlLXRpbGUtc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1tb2JpbGUtdGlsZS1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0tZ29sZCk7XG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLW1vYmlsZS10aWxlLXNpemUpICogMC44KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbltjbGFzcyo9XCItdGlsZVwiXSA+IC5rbmlnaHQgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTsgXG59XG5cbi5ibGFjay10aWxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbnl4KTtcbn1cblxuLmJsYWNrLXRpbGUuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2VsZWN0ZWQpO1xufVxuXG4ud2hpdGUtdGlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4ud2hpdGUtdGlsZS5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2VsZWN0ZWQpO1xufVxuXG4ua25pZ2h0ID4gaW1nIHtcbiAgICB3aWR0aDogdmFyKC0tbW9iaWxlLXRpbGUtc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1tb2JpbGUtdGlsZS1zaXplKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIC5jaGVzc2JvYXJkIHsgZ3JpZC1hcmVhOiBib2FyZDsgfVxuXG4gICAgW2NsYXNzKj1cIi10aWxlXCJdIHtcbiAgICAgICAgd2lkdGg6IHZhcigtLXJlZ3VsYXItdGlsZS1zaXplKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1yZWd1bGFyLXRpbGUtc2l6ZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1yZWd1bGFyLXRpbGUtc2l6ZSkgKiAwLjgpO1xuICAgIH1cblxuICAgIC5rbmlnaHQgPiBpbWcge1xuICAgICAgICB3aWR0aDogdmFyKC0tcmVndWxhci10aWxlLXNpemUpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXJlZ3VsYXItdGlsZS1zaXplKTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2JvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksY0FBYyxnQkFBZ0IsRUFBRTs7SUFFaEM7UUFDSSwrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLCtDQUErQztJQUNuRDs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQixnQ0FBZ0M7SUFDcEM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2hlc3Nib2FyZCB7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbltjbGFzcyo9XFxcIi10aWxlXFxcIl0ge1xcbiAgICB3aWR0aDogdmFyKC0tbW9iaWxlLXRpbGUtc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tbW9iaWxlLXRpbGUtc2l6ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLW1vYmlsZS10aWxlLXNpemUpICogMC44KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5bY2xhc3MqPVxcXCItdGlsZVxcXCJdID4gLmtuaWdodCB7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTsgXFxufVxcblxcbi5ibGFjay10aWxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb255eCk7XFxufVxcblxcbi5ibGFjay10aWxlLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zZWxlY3RlZCk7XFxufVxcblxcbi53aGl0ZS10aWxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4ud2hpdGUtdGlsZS5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXNlbGVjdGVkKTtcXG59XFxuXFxuLmtuaWdodCA+IGltZyB7XFxuICAgIHdpZHRoOiB2YXIoLS1tb2JpbGUtdGlsZS1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1tb2JpbGUtdGlsZS1zaXplKTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICAuY2hlc3Nib2FyZCB7IGdyaWQtYXJlYTogYm9hcmQ7IH1cXG5cXG4gICAgW2NsYXNzKj1cXFwiLXRpbGVcXFwiXSB7XFxuICAgICAgICB3aWR0aDogdmFyKC0tcmVndWxhci10aWxlLXNpemUpO1xcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1yZWd1bGFyLXRpbGUtc2l6ZSk7XFxuICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0tcmVndWxhci10aWxlLXNpemUpICogMC44KTtcXG4gICAgfVxcblxcbiAgICAua25pZ2h0ID4gaW1nIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1yZWd1bGFyLXRpbGUtc2l6ZSk7XFxuICAgICAgICBoZWlnaHQ6IHZhcigtLXJlZ3VsYXItdGlsZS1zaXplKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wdXp6bGUtY29udHJvbGxlciB7XG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tb3JhbmdlKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBwYWRkaW5nOiAwLjJyZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcImJvYXJkLWJ1aWxkZXIgZGlzcGxheVwiXG4gICAgICAgIFwic2hvcnRlc3QtcGF0aCBkaXNwbGF5XCJcbiAgICAgICAgXCJrbmlnaHRzLXRvdXIgZGlzcGxheVwiO1xufVxuXG4ucHV6emxlLWNvbnRyb2xsZXIgPiBkaXYgPiBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIkdvdGhpY2EtQm9sZFwiO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbltjbGFzcyo9XCItYnRuXCJdIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBcIkdvdGhpY2EtSXRhbGljXCI7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xufVxuXG5bY2xhc3MqPVwiLWJ0blwiXTpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTsgfVxuXG4uY29udHJvbGxlci1kaXNwbGF5IHtcbiAgICBncmlkLWFyZWE6IGRpc3BsYXk7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhXCI7XG4gICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tb255eCk7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgaGVpZ2h0OiAxMnJlbTtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1vbnl4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uY29udHJvbGxlci1kaXNwbGF5LmFsZXJ0IHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hZ2VudGEpO1xufVxuXG4uYm9hcmQtYnVpbGRlciB7XG4gICAgZ3JpZC1hcmVhOiBib2FyZC1idWlsZGVyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJiYi10aXRsZSBiYi10aXRsZVwiXG4gICAgICAgIFwiYmItaW5mbyBiYi1zZWxlY3RcIjtcbn1cblxuLmluZm8tYm9hcmQtYnVpbGRlci1idG4geyBncmlkLWFyZWE6IGJiLWluZm87IH1cblxuLmJvYXJkLWJ1aWxkZXItZHJvcGRvd24geyBncmlkLWFyZWE6IGJiLXNlbGVjdDsgfVxuXG4uc2hvcnRlc3QtcGF0aC1idXR0b25zIHtcbiAgICBncmlkLWFyZWE6IHNob3J0ZXN0LXBhdGg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcInNwLXRpdGxlIHNwLXRpdGxlIHNwLXRpdGxlIHNwLXRpdGxlXCJcbiAgICAgICAgXCJzcC1odW1hbiBzcC1pbmZvIHNwLXVuZG8gc3AtY29tcFwiO1xufVxuXG4uc2hvcnRlc3QtcGF0aC1idXR0b25zID4gaDIgeyBncmlkLWFyZWE6IHNwLXRpdGxlOyB9XG5cbi5zdGFydC1zaG9ydGVzdC1wYXRoLWJ0biB7IGdyaWQtYXJlYTogc3AtaHVtYW47IH1cblxuLmluZm8tc2hvcnRlc3QtcGF0aC1idG4geyBncmlkLWFyZWE6IHNwLWluZm87IH1cblxuLnVuZG8tc2hvcnRlc3QtcGF0aC5idG4geyBncmlkLWFyZWE6IHNwLXVuZG87IH1cblxuLnNob3ctc2hvcnRlc3QtcGF0aC1idG4geyBncmlkLWFyZWE6IHNwLWNvbXA7IH1cblxuLmtuaWdodHMtdG91ci1idXR0b25zIHtcbiAgICBncmlkLWFyZWE6IGtuaWdodHMtdG91cjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwia3QtdGl0bGUga3QtdGl0bGUga3QtdGl0bGUga3QtdGl0bGVcIlxuICAgICAgICBcImt0LWh1bWFuIGt0LWluZm8ga3QtdW5kbyBrdC1jb21wXCI7XG59XG5cbi5rbmlnaHRzLXRvdXItYnV0dG9ucyA+IGgyIHsgZ3JpZC1hcmVhOiBrdC10aXRsZTsgfVxuXG4uc3RhcnQta25pZ2h0cy10b3VyLWJ0biB7IGdyaWQtYXJlYToga3QtaHVtYW47IH1cblxuLmluZm8ta25pZ2h0cy10b3VyLWJ0biB7IGdyaWQtYXJlYToga3QtaW5mbzsgfVxuXG4udW5kby1rbmlnaHRzLXRvdXItYnRuIHsgZ3JpZC1hcmVhOiBrdC11bmRvOyB9XG5cbi5zaG93LWtuaWdodHMtdG91ci1idG4geyBncmlkLWFyZWE6IGt0LWNvbXA7IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIC5wdXp6bGUtY29udHJvbGxlciB7XG4gICAgICAgIGdyaWQtYXJlYTogY29udHJvbGxlcjtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwiZGlzcGxheVwiXG4gICAgICAgICAgICBcImRpc3BsYXlcIlxuICAgICAgICAgICAgXCJib2FyZC1idWlsZGVyXCJcbiAgICAgICAgICAgIFwic2hvcnRlc3QtcGF0aFwiXG4gICAgICAgICAgICBcImtuaWdodHMtdG91clwiO1xuICAgIH1cblxuICAgIC5jb250cm9sbGVyLWRpc3BsYXkge1xuICAgICAgICB3aWR0aDogMTZyZW07XG4gICAgICAgIGhlaWdodDogMTZyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY29udHJvbGxlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsYUFBYTtJQUNiOzs7OEJBRzBCO0FBQzlCOztBQUVBO0lBQ0ksU0FBUztJQUNULDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DOztBQUVBLHdCQUF3QixvQ0FBb0MsRUFBRTs7QUFFOUQ7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2I7OzJCQUV1QjtBQUMzQjs7QUFFQSwwQkFBMEIsa0JBQWtCLEVBQUU7O0FBRTlDLDBCQUEwQixvQkFBb0IsRUFBRTs7QUFFaEQ7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiOzswQ0FFc0M7QUFDMUM7O0FBRUEsOEJBQThCLG1CQUFtQixFQUFFOztBQUVuRCwyQkFBMkIsbUJBQW1CLEVBQUU7O0FBRWhELDBCQUEwQixrQkFBa0IsRUFBRTs7QUFFOUMsMEJBQTBCLGtCQUFrQixFQUFFOztBQUU5QywwQkFBMEIsa0JBQWtCLEVBQUU7O0FBRTlDO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYjs7MENBRXNDO0FBQzFDOztBQUVBLDZCQUE2QixtQkFBbUIsRUFBRTs7QUFFbEQsMEJBQTBCLG1CQUFtQixFQUFFOztBQUUvQyx5QkFBeUIsa0JBQWtCLEVBQUU7O0FBRTdDLHlCQUF5QixrQkFBa0IsRUFBRTs7QUFFN0MseUJBQXlCLGtCQUFrQixFQUFFOztBQUU3QztJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYjs7Ozs7MEJBS2tCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO0lBQ2xCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnB1enpsZS1jb250cm9sbGVyIHtcXG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tb3JhbmdlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiYm9hcmQtYnVpbGRlciBkaXNwbGF5XFxcIlxcbiAgICAgICAgXFxcInNob3J0ZXN0LXBhdGggZGlzcGxheVxcXCJcXG4gICAgICAgIFxcXCJrbmlnaHRzLXRvdXIgZGlzcGxheVxcXCI7XFxufVxcblxcbi5wdXp6bGUtY29udHJvbGxlciA+IGRpdiA+IGgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIkdvdGhpY2EtQm9sZFxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbltjbGFzcyo9XFxcIi1idG5cXFwiXSB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR290aGljYS1JdGFsaWNcXFwiO1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuW2NsYXNzKj1cXFwiLWJ0blxcXCJdOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpOyB9XFxuXFxuLmNvbnRyb2xsZXItZGlzcGxheSB7XFxuICAgIGdyaWQtYXJlYTogZGlzcGxheTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICBmb250LXNpemU6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tb255eCk7XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBoZWlnaHQ6IDEycmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tb255eCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRyb2xsZXItZGlzcGxheS5hbGVydCB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hZ2VudGEpO1xcbn1cXG5cXG4uYm9hcmQtYnVpbGRlciB7XFxuICAgIGdyaWQtYXJlYTogYm9hcmQtYnVpbGRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJiYi10aXRsZSBiYi10aXRsZVxcXCJcXG4gICAgICAgIFxcXCJiYi1pbmZvIGJiLXNlbGVjdFxcXCI7XFxufVxcblxcbi5pbmZvLWJvYXJkLWJ1aWxkZXItYnRuIHsgZ3JpZC1hcmVhOiBiYi1pbmZvOyB9XFxuXFxuLmJvYXJkLWJ1aWxkZXItZHJvcGRvd24geyBncmlkLWFyZWE6IGJiLXNlbGVjdDsgfVxcblxcbi5zaG9ydGVzdC1wYXRoLWJ1dHRvbnMge1xcbiAgICBncmlkLWFyZWE6IHNob3J0ZXN0LXBhdGg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwic3AtdGl0bGUgc3AtdGl0bGUgc3AtdGl0bGUgc3AtdGl0bGVcXFwiXFxuICAgICAgICBcXFwic3AtaHVtYW4gc3AtaW5mbyBzcC11bmRvIHNwLWNvbXBcXFwiO1xcbn1cXG5cXG4uc2hvcnRlc3QtcGF0aC1idXR0b25zID4gaDIgeyBncmlkLWFyZWE6IHNwLXRpdGxlOyB9XFxuXFxuLnN0YXJ0LXNob3J0ZXN0LXBhdGgtYnRuIHsgZ3JpZC1hcmVhOiBzcC1odW1hbjsgfVxcblxcbi5pbmZvLXNob3J0ZXN0LXBhdGgtYnRuIHsgZ3JpZC1hcmVhOiBzcC1pbmZvOyB9XFxuXFxuLnVuZG8tc2hvcnRlc3QtcGF0aC5idG4geyBncmlkLWFyZWE6IHNwLXVuZG87IH1cXG5cXG4uc2hvdy1zaG9ydGVzdC1wYXRoLWJ0biB7IGdyaWQtYXJlYTogc3AtY29tcDsgfVxcblxcbi5rbmlnaHRzLXRvdXItYnV0dG9ucyB7XFxuICAgIGdyaWQtYXJlYToga25pZ2h0cy10b3VyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImt0LXRpdGxlIGt0LXRpdGxlIGt0LXRpdGxlIGt0LXRpdGxlXFxcIlxcbiAgICAgICAgXFxcImt0LWh1bWFuIGt0LWluZm8ga3QtdW5kbyBrdC1jb21wXFxcIjtcXG59XFxuXFxuLmtuaWdodHMtdG91ci1idXR0b25zID4gaDIgeyBncmlkLWFyZWE6IGt0LXRpdGxlOyB9XFxuXFxuLnN0YXJ0LWtuaWdodHMtdG91ci1idG4geyBncmlkLWFyZWE6IGt0LWh1bWFuOyB9XFxuXFxuLmluZm8ta25pZ2h0cy10b3VyLWJ0biB7IGdyaWQtYXJlYToga3QtaW5mbzsgfVxcblxcbi51bmRvLWtuaWdodHMtdG91ci1idG4geyBncmlkLWFyZWE6IGt0LXVuZG87IH1cXG5cXG4uc2hvdy1rbmlnaHRzLXRvdXItYnRuIHsgZ3JpZC1hcmVhOiBrdC1jb21wOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICAucHV6emxlLWNvbnRyb2xsZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBjb250cm9sbGVyO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcImRpc3BsYXlcXFwiXFxuICAgICAgICAgICAgXFxcImRpc3BsYXlcXFwiXFxuICAgICAgICAgICAgXFxcImJvYXJkLWJ1aWxkZXJcXFwiXFxuICAgICAgICAgICAgXFxcInNob3J0ZXN0LXBhdGhcXFwiXFxuICAgICAgICAgICAgXFxcImtuaWdodHMtdG91clxcXCI7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRyb2xsZXItZGlzcGxheSB7XFxuICAgICAgICB3aWR0aDogMTZyZW07XFxuICAgICAgICBoZWlnaHQ6IDE2cmVtO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBEcm9wIERvd24gU3R5bGluZyAqL1xuW2NsYXNzKj1cIi1kcm9wZG93blwiXSwgW2NsYXNzKj1cIi1kaXNhYmxlZFwiXSB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBjb2xvcjogdmFyKC0tb255eCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG5bY2xhc3MqPVwiLWRyb3Bkb3duXCJdOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7IH1cblxuLyogT3B0aW9ucyBTdHlsaW5nICovXG5bY2xhc3MqPVwiLW9wdGlvbnNcIl0ge1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogdmFyKC0tb255eCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiAwLjVyZW0pO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICB3aWR0aDogNHJlbTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi52aXNpYmxlIHsgZGlzcGxheTogYmxvY2s7IH1cblxuW2NsYXNzKj1cIi1vcHRpb25cIl0gPiBkaXY6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTsgfVxuXG5bY2xhc3MqPVwiLW9wdGlvbnNcIl0gPiBkaXYgeyBwYWRkaW5nOiAwLjVyZW07IH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZHJvcC1kb3duLXN0eWxpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjtBQUN0QjtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBLDZCQUE2QixtQ0FBbUMsRUFBRTs7QUFFbEUsb0JBQW9CO0FBQ3BCO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQSxXQUFXLGNBQWMsRUFBRTs7QUFFM0IsaUNBQWlDLG1DQUFtQyxFQUFFOztBQUV0RSw0QkFBNEIsZUFBZSxFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIERyb3AgRG93biBTdHlsaW5nICovXFxuW2NsYXNzKj1cXFwiLWRyb3Bkb3duXFxcIl0sIFtjbGFzcyo9XFxcIi1kaXNhYmxlZFxcXCJdIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgY29sb3I6IHZhcigtLW9ueXgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbltjbGFzcyo9XFxcIi1kcm9wZG93blxcXCJdOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7IH1cXG5cXG4vKiBPcHRpb25zIFN0eWxpbmcgKi9cXG5bY2xhc3MqPVxcXCItb3B0aW9uc1xcXCJdIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLW9ueXgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogMC41cmVtKTtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi52aXNpYmxlIHsgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5bY2xhc3MqPVxcXCItb3B0aW9uXFxcIl0gPiBkaXY6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTsgfVxcblxcbltjbGFzcyo9XFxcIi1vcHRpb25zXFxcIl0gPiBkaXYgeyBwYWRkaW5nOiAwLjVyZW07IH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5uYXYtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbi5uYXYtYmFyID4gKiB7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ubmF2LWJhciA+IGgxIHtcbiAgICBmb250LWZhbWlseTogXCJHb3RoaWNhLUJvbGRcIjtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm5hdi1iYXIgPiBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgLm5hdi1iYXIgeyBncmlkLWFyZWE6IGhlYWRlcjsgfVxuXG4gICAgLmZvb3RlciB7IGdyaWQtYXJlYTogZm9vdGVyOyB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXLGlCQUFpQixFQUFFOztJQUU5QixVQUFVLGlCQUFpQixFQUFFO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5uYXYtYmFyID4gKiB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm5hdi1iYXIgPiBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR290aGljYS1Cb2xkXFxcIjtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2LWJhciA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICAubmF2LWJhciB7IGdyaWQtYXJlYTogaGVhZGVyOyB9XFxuXFxuICAgIC5mb290ZXIgeyBncmlkLWFyZWE6IGZvb3RlcjsgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuIGh0bWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qIFNlY3Rpb25zXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cbiAgXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgXFxgbWFpblxcYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAgICovXG4gIFxuICBtYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLyoqXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIFxcYGgxXFxgIGVsZW1lbnRzIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZFxuICAgKiBcXGBhcnRpY2xlXFxgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAgICovXG4gIFxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcbiAgfVxuICBcbiAgLyogR3JvdXBpbmcgY29udGVudFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBcbiAgLyoqXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICAgKi9cbiAgXG4gIGhyIHtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICAgIGhlaWdodDogMDsgLyogMSAqL1xuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cbiAgXG4gIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbiAgfVxuICBcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gICAqL1xuICBcbiAgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICAgKi9cbiAgXG4gIGFiYnJbdGl0bGVdIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbiAgfVxuICBcbiAgLyoqXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gICAqL1xuICBcbiAgYixcbiAgc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG4gIFxuICAvKipcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAgICovXG4gIFxuICBjb2RlLFxuICBrYmQsXG4gIHNhbXAge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAgICovXG4gIFxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICAgKiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuICBcbiAgc3ViLFxuICBzdXAge1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cbiAgXG4gIHN1YiB7XG4gICAgYm90dG9tOiAtMC4yNWVtO1xuICB9XG4gIFxuICBzdXAge1xuICAgIHRvcDogLTAuNWVtO1xuICB9XG4gIFxuICAvKiBFbWJlZGRlZCBjb250ZW50XG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAgICovXG4gIFxuICBpbWcge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuICBcbiAgLyogRm9ybXNcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qKlxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICAgKi9cbiAgXG4gIGJ1dHRvbixcbiAgaW5wdXQsXG4gIG9wdGdyb3VwLFxuICBzZWxlY3QsXG4gIHRleHRhcmVhIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAgICovXG4gIFxuICBidXR0b24sXG4gIGlucHV0IHsgLyogMSAqL1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAgICovXG4gIFxuICBidXR0b24sXG4gIHNlbGVjdCB7IC8qIDEgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gICAqL1xuICBcbiAgYnV0dG9uLFxuICBbdHlwZT1cImJ1dHRvblwiXSxcbiAgW3R5cGU9XCJyZXNldFwiXSxcbiAgW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICB9XG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAgICovXG4gIFxuICBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG4gIFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuICBbdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuICBbdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gICAqL1xuICBcbiAgYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuICBbdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcbiAgW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcbiAgW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAgICovXG4gIFxuICBmaWVsZHNldCB7XG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xuICB9XG4gIFxuICAvKipcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBJRS5cbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICAgKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuICBcbiAgbGVnZW5kIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICAgIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICAgKi9cbiAgXG4gIHByb2dyZXNzIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAgICovXG4gIFxuICB0ZXh0YXJlYSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIC8qKlxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICAgKi9cbiAgXG4gIFt0eXBlPVwiY2hlY2tib3hcIl0sXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgICBwYWRkaW5nOiAwOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gICAqL1xuICBcbiAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC8qKlxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gICAqL1xuICBcbiAgW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAgICovXG4gIFxuICBbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG4gIFxuICAvKipcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiAgICovXG4gIFxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbiAgfVxuICBcbiAgLyogSW50ZXJhY3RpdmVcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gICAqL1xuICBcbiAgZGV0YWlscyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC8qXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAgICovXG4gIFxuICBzdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIH1cbiAgXG4gIC8qIE1pc2NcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gICAqL1xuICBcbiAgdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAgICovXG4gIFxuICBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ub3JtYWxpc2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0NBRUQ7SUFDRyxpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLDhCQUE4QixFQUFFLE1BQU07RUFDeEM7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLFNBQVM7RUFDWDs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7OztJQUdFOztFQUVGO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtpRkFDK0U7O0VBRS9FOzs7SUFHRTs7RUFFRjtJQUNFLHVCQUF1QixFQUFFLE1BQU07SUFDL0IsU0FBUyxFQUFFLE1BQU07SUFDakIsaUJBQWlCLEVBQUUsTUFBTTtFQUMzQjs7RUFFQTs7O0lBR0U7O0VBRUY7SUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0lBQ3pDLGNBQWMsRUFBRSxNQUFNO0VBQ3hCOztFQUVBO2lGQUMrRTs7RUFFL0U7O0lBRUU7O0VBRUY7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7OztJQUdFOztFQUVGO0lBQ0UsbUJBQW1CLEVBQUUsTUFBTTtJQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGlDQUFpQyxFQUFFLE1BQU07RUFDM0M7O0VBRUE7O0lBRUU7O0VBRUY7O0lBRUUsbUJBQW1CO0VBQ3JCOztFQUVBOzs7SUFHRTs7RUFFRjs7O0lBR0UsaUNBQWlDLEVBQUUsTUFBTTtJQUN6QyxjQUFjLEVBQUUsTUFBTTtFQUN4Qjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7OztJQUdFOztFQUVGOztJQUVFLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtpRkFDK0U7O0VBRS9FOzs7SUFHRTs7RUFFRjs7Ozs7SUFLRSxvQkFBb0IsRUFBRSxNQUFNO0lBQzVCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLGlCQUFpQixFQUFFLE1BQU07SUFDekIsU0FBUyxFQUFFLE1BQU07RUFDbkI7O0VBRUE7OztJQUdFOztFQUVGO1VBQ1EsTUFBTTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTs7O0lBR0U7O0VBRUY7V0FDUyxNQUFNO0lBQ2Isb0JBQW9CO0VBQ3RCOztFQUVBOztJQUVFOztFQUVGOzs7O0lBSUUsMEJBQTBCO0VBQzVCOztFQUVBOztJQUVFOztFQUVGOzs7O0lBSUUsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTs7SUFFRTs7RUFFRjs7OztJQUlFLDhCQUE4QjtFQUNoQzs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTs7Ozs7SUFLRTs7RUFFRjtJQUNFLHNCQUFzQixFQUFFLE1BQU07SUFDOUIsY0FBYyxFQUFFLE1BQU07SUFDdEIsY0FBYyxFQUFFLE1BQU07SUFDdEIsZUFBZSxFQUFFLE1BQU07SUFDdkIsVUFBVSxFQUFFLE1BQU07SUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtFQUM3Qjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7OztJQUdFOztFQUVGOztJQUVFLHNCQUFzQixFQUFFLE1BQU07SUFDOUIsVUFBVSxFQUFFLE1BQU07RUFDcEI7O0VBRUE7O0lBRUU7O0VBRUY7O0lBRUUsWUFBWTtFQUNkOztFQUVBOzs7SUFHRTs7RUFFRjtJQUNFLDZCQUE2QixFQUFFLE1BQU07SUFDckMsb0JBQW9CLEVBQUUsTUFBTTtFQUM5Qjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTs7O0lBR0U7O0VBRUY7SUFDRSwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGFBQWEsRUFBRSxNQUFNO0VBQ3ZCOztFQUVBO2lGQUMrRTs7RUFFL0U7O0lBRUU7O0VBRUY7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOztJQUVFOztFQUVGO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO2lGQUMrRTs7RUFFL0U7O0lBRUU7O0VBRUY7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxhQUFhO0VBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuIGh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG4gIFxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG4gIH1cXG4gIFxcbiAgLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG4gIFxcbiAgaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGIsXFxuICBzdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgY29kZSxcXG4gIGtiZCxcXG4gIHNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHN1YixcXG4gIHN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIHN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG4gIH1cXG4gIFxcbiAgc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxuICB9XFxuICBcXG4gIC8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBpbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0LFxcbiAgb3B0Z3JvdXAsXFxuICBzZWxlY3QsXFxuICB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgaW5wdXQgeyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIHNlbGVjdCB7IC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBmaWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgbGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcbiAgXFxuICBwcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbiAgW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgfVxcbiAgXFxuICAvKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvR290aGljYS1Cb29rLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0dvdGhpY2EtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Hb3RoaWNhLUJvb2tPYmxpcXVlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2RvZ2ljYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFJvb3QgVmFyaWFibGVzICovXG46cm9vdCB7XG4gICAgLS13aGl0ZTogI2Y1ZjVmNTtcbiAgICAtLWxpZ2h0LXNlbGVjdGVkOiAjODdkM2VkO1xuICAgIC0tb255eDogIzQ1NDU0NTtcbiAgICAtLWRhcmstc2VsZWN0ZWQ6ICMyMjc3YTk7XG4gICAgLS1tYWdlbnRhOiAjZDY3YWIxO1xuICAgIC0tYmx1ZTogIzI1ODliZDtcbiAgICAtLWRhcmstYmx1ZTogIzE5NTc4NztcbiAgICAtLWxpZ2h0LWJsdWU6ICNiNGU0ZmM7XG4gICAgLS1vcmFuZ2U6ICNmZmIxNDA7XG4gICAgLS1kYXJrLW9yYW5nZTogI2ZhODEwMDtcbiAgICAtLWdvbGQ6ICNlNWI4MGI7XG4gICAgLS1tb2JpbGUtdGlsZS1zaXplOiAycmVtO1xuICAgIC0tcmVndWxhci10aWxlLXNpemU6IDVyZW07XG59XG5cbi8qIFJlZ3VsYXIgRm9udCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR290aGljYVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJHb3RoaWNhLUJvbGRcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR290aGljYS1JdGFsaWNcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbi8qIEJvZHkgU3R5bGluZyAqL1xuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR290aGljYVwiO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGNvbG9yOiB2YXIoLS1vbnl4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICBib2R5IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcImhlYWRlciBoZWFkZXJcIlxuICAgICAgICAgICAgXCJib2FyZCBjb250cm9sbGVyXCJcbiAgICAgICAgICAgIFwiZm9vdGVyIGZvb3RlclwiO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjtBQUNuQjtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHlCQUF5QjtBQUM3Qjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxzQkFBc0I7SUFDdEIsNENBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQStCO0FBQ25DOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQjs7OzJCQUdtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJvb3QgVmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgICAtLXdoaXRlOiAjZjVmNWY1O1xcbiAgICAtLWxpZ2h0LXNlbGVjdGVkOiAjODdkM2VkO1xcbiAgICAtLW9ueXg6ICM0NTQ1NDU7XFxuICAgIC0tZGFyay1zZWxlY3RlZDogIzIyNzdhOTtcXG4gICAgLS1tYWdlbnRhOiAjZDY3YWIxO1xcbiAgICAtLWJsdWU6ICMyNTg5YmQ7XFxuICAgIC0tZGFyay1ibHVlOiAjMTk1Nzg3O1xcbiAgICAtLWxpZ2h0LWJsdWU6ICNiNGU0ZmM7XFxuICAgIC0tb3JhbmdlOiAjZmZiMTQwO1xcbiAgICAtLWRhcmstb3JhbmdlOiAjZmE4MTAwO1xcbiAgICAtLWdvbGQ6ICNlNWI4MGI7XFxuICAgIC0tbW9iaWxlLXRpbGUtc2l6ZTogMnJlbTtcXG4gICAgLS1yZWd1bGFyLXRpbGUtc2l6ZTogNXJlbTtcXG59XFxuXFxuLyogUmVndWxhciBGb250ICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR290aGljYVxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9Hb3RoaWNhLUJvb2sudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkdvdGhpY2EtQm9sZFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9Hb3RoaWNhLUJvbGQudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkdvdGhpY2EtSXRhbGljXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0dvdGhpY2EtQm9va09ibGlxdWUudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRvZ2ljYVxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9kb2dpY2EudHRmXFxcIik7XFxufVxcblxcbi8qIEJvZHkgU3R5bGluZyAqL1xcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIkdvdGhpY2FcXFwiO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGNvbG9yOiB2YXIoLS1vbnl4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgICAgIFxcXCJib2FyZCBjb250cm9sbGVyXFxcIlxcbiAgICAgICAgICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRyb2xsZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udHJvbGxlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZHJvcC1kb3duLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZHJvcC1kb3duLXN0eWxpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGlzZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpc2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi4vY3NzL2JvYXJkLmNzc1wiO1xuaW1wb3J0IEtuaWdodCBmcm9tIFwiLi9rbmlnaHQuanNcIjtcbmltcG9ydCBUaWxlIGZyb20gXCIuL3RpbGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICAgIC8qKlxuICAgICAqIEJvYXJkIENsYXNzXG4gICAgICogXG4gICAgICogQmFzZSBDbGFzcyBmb3IgdGhlIENoZXNzYm9hcmQgQ2xhc3MuIFRoaXMgY2xhc3MgaXNcbiAgICAgKiByZXNwb25zaWJsZSBmb3Igc2V0dGluZyB1cCB0aGUgRE9NIGVsZW1lbnRzLCBzdWNoIGFzXG4gICAgICogdGhlIENoZXNzYm9hcmQsIHRoZSBUaWxlcywgYW5kIHRoZSBLbmlnaHQuIFJlc3VsdGluZ1xuICAgICAqIGZyb20gc2V0dGluZyB1cCB0aGUgVGlsZXMgYW5kIEtuaWdodCwgdGhpcyBjbGFzcyBpc1xuICAgICAqIGFsc28gbWFuYWdlcyB0aG9zZSB2YXJpYWJsZXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggSW5pdGlhbCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBJbml0aWFsIFktQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib2FyZCBCb2FyZCBTaXplXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHksIGJvYXJkKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgQm9hcmQgU2l6ZVxuICAgICAgICB0aGlzLnNpemUgPSBib2FyZDtcbiAgICAgICAgXG4gICAgICAgIC8vIENvbnN0cnVjdCB0aGUgQm9hcmQgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm1vZHVsZS5jbGFzc0xpc3QuYWRkKFwiY2hlc3Nib2FyZFwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBHcmlkIFRlbXBsYXRlIEFyZWFzIHRvIHRoZSBCb2FyZCBET00gRWxlbWVudFxuICAgICAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zaXplIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYFwidGlsZS0ke2l9JHtqfSBgXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaiA9PT0gdGhpcy5zaXplIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYHRpbGUtJHtpfSR7an1cIiR7aSA9PT0gMCA/IFwiXCIgOiBcIiBcIn1gO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYHRpbGUtJHtpfSR7an0gYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kdWxlLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgXCJncmlkLXRlbXBsYXRlLWFyZWFzXCIsIHRlbXBsYXRlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gSW5pdGFpbGlzZSBUaWxlc1xuICAgICAgICB0aGlzLnRpbGVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gbmV3IFRpbGUoaSwgaiwgaiAlIDIgPyAoaSAlIDIgPyBcImJsYWNrXCIgOiBcIndoaXRlXCIpIDogKGkgJSAyID8gXCJ3aGl0ZVwiIDogXCJibGFja1wiKSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKHRpbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlLmFwcGVuZENoaWxkKHRpbGUuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLmtuaWdodCA9IG5ldyBLbmlnaHQoeCwgeSwgYm9hcmQsIHRoaXMudGlsZXMpO1xuICAgICAgICB0aGlzLnRpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICBpZiAodGlsZS54ID09PSB4ICYmIHRpbGUueSA9PT0geSkge1xuICAgICAgICAgICAgICAgIHRpbGUucGxhY2VLbmlnaHQodGhpcy5rbmlnaHQuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplOyB9XG5cbiAgICBzZXQgc2l6ZSAobnVtKSB7IHRoaXMuX3NpemUgPSBudW07IH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIGdldCB0aWxlcyAoKSB7IHJldHVybiB0aGlzLl90aWxlczsgfVxuXG4gICAgc2V0IHRpbGVzIChhcnIpIHsgdGhpcy5fdGlsZXMgPSBhcnI7IH1cblxuICAgIGdldCBjdXJyZW50ICgpIHsgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7IH1cblxuICAgIHNldCBjdXJyZW50ICh0aWxlKSB7IHRoaXMuX2N1cnJlbnQgPSB0aWxlOyB9XG5cbiAgICBnZXQgcHJldmlvdXMgKCkgeyByZXR1cm4gdGhpcy5fcHJldmlvdXM7IH1cblxuICAgIHNldCBwcmV2aW91cyAoYXJyKSB7IHRoaXMuX3ByZXZpb3VzID0gYXJyOyB9XG5cbiAgICBnZXQga25pZ2h0ICgpIHsgcmV0dXJuIHRoaXMuX2tuaWdodDsgfVxuXG4gICAgc2V0IGtuaWdodCAob2JqKSB7IHRoaXMuX2tuaWdodCA9IG9iajsgfVxuXG4gICAgLyoqXG4gICAgICogUmVidWlsZCBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEZvciBhIG5ld2x5IHNlbGVjdGVkIEJvYXJkIFNpemUgYnkgdGhlIFVzZXIsIHRoZSBcbiAgICAgKiBCb2FyZCBtdXN0IHVwZGF0ZSB0aGUgVGlsZXMgYW5kIEtuaWdodCBDbGFzc2VzIHRvXG4gICAgICogcmVmbGVjdCB0aGUgY2hhbmdlIGluIEJvYXJkIFNpemUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgTmV3IEJvYXJkIFNpemVcbiAgICAgKi9cbiAgICByZWJ1aWxkIChzaXplKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBvbmx5IGlmIEJvYXJkc2l6ZSBoYXMgYmVlbiBDaGFuZ2VkXG4gICAgICAgIGlmICh0aGlzLnNpemUgIT09IHNpemUpIHtcbiAgICAgICAgICAgIC8vIEVtcHR5IE1vZHVsZVxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICAgICAgLy8gUmVzZXQgQm9hcmQgU2l6ZVxuICAgICAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQWRkIEdyaWQgVGVtcGxhdGUgQXJlYXMgdG8gdGhlIEJvYXJkIERPTSBFbGVtZW50XG4gICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2l6ZSAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNpemU7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGBcInRpbGUtJHtpfSR7an0gYFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChqID09PSB0aGlzLnNpemUgLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYHRpbGUtJHtpfSR7an1cIiR7aSA9PT0gMCA/IFwiXCIgOiBcIiBcIn1gO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgdGlsZS0ke2l9JHtqfSBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tb2R1bGUuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICAgICAgXCJncmlkLXRlbXBsYXRlLWFyZWFzXCIsIHRlbXBsYXRlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBSZXNldCBUaWxlc1xuICAgICAgICAgICAgdGhpcy50aWxlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IG5ldyBUaWxlKGksIGosIGogJSAyID8gKGkgJSAyID8gXCJibGFja1wiIDogXCJ3aGl0ZVwiKSA6IChpICUgMiA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlLmFwcGVuZENoaWxkKHRpbGUuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBSZXNldCBLbmlnaHRcbiAgICAgICAgICAgIGxldCBjb29yZCA9IE1hdGguZmxvb3IodGhpcy5zaXplIC8gMik7XG4gICAgICAgICAgICB0aGlzLmtuaWdodC51cGRhdGVCb2FyZChzaXplLCB0aGlzLnRpbGVzKTtcbiAgICAgICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS54ID09PSBjb29yZCAmJiB0aWxlLnkgPT09IGNvb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUucGxhY2VLbmlnaHQodGhpcy5rbmlnaHQuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRpbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4uL3B1enpsZS1tb2R1bGUvY29udHJvbGxlclwiO1xuaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZXNzYm9hcmQgZXh0ZW5kcyBCb2FyZCB7XG4gICAgI0RFRkFVTFRfSU5JVElBTCA9IHt4OiAzLCB5OiAzfTtcbiAgICAjREVGQVVMVF9CT0FSRCA9IDg7XG4gICAgI0VSUk9SID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDaGVzc2JvYXJkIENsYXNzXG4gICAgICogXG4gICAgICogQnkgZXhwYW5kaW5nIG9uIGl0cyBiYXNlIEJvYXJkIENsYXNzLCB0aGlzIGNsYXNzIGlzXG4gICAgICogcmVzcG9uc2libGUgZm9yIG1hbmFnaW5nIHRoZSBDb250cm9sbGVyIENsYXNzLCBhbmQgXG4gICAgICogYWxsIGl0cyBuZWNlc3NhcnkgY2FsbGJhY2sgbWV0aG9kcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKDMsIDMsIDgpOyAvLyBEZWZhdWx0IHZhbHVlc1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgQ29udHJvbGxlclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIHRoaXMuI0RFRkFVTFRfSU5JVElBTC54LCBcbiAgICAgICAgICAgIHRoaXMuI0RFRkFVTFRfSU5JVElBTC55LCBcbiAgICAgICAgICAgIHRoaXMuI0RFRkFVTFRfQk9BUkQsIFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RDYWxsYmFjay5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5zdGFydENhbGxiYWNrLmJpbmQodGhpcyksXG4gICAgICAgICAgICB0aGlzLnVuZG9DYWxsYmFjay5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5zaG93Q2FsbGJhY2suYmluZCh0aGlzKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLiNERUZBVUxUX0lOSVRJQUw7XG4gICAgICAgIHRoaXMuX2dvYWwgPSB7eDogMCwgeTogMH07XG4gICAgICAgIHRoaXMuX3BhdGggPSBbXTtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RvdXJpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3RhcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWRkIENsaWNrIEV2ZW50IExpc3RlbmVycyB0byBUaWxlc1xuICAgICAgICB0aGlzLnRpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICB0aWxlLnNldENsaWNrRXZlbnRMaXN0ZW5lcih0aGlzLmNsaWNrQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBjb250cm9sbGVyICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRyb2xsZXI7IH1cblxuICAgIHNldCBjb250cm9sbGVyIChvYmopIHsgdGhpcy5fY29udHJvbGxlciA9IG9iajsgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgUHV6emxlIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIGVpdGhlciBQdXp6bGUsIHRoaXMgZnVuY3Rpb24gd2lsbCBzZXR1cCB0aGUgcGF0aFxuICAgICAqIHRoYXQgdGhlIEtuaWdodCBtdXN0IFRyYXZlcnNlIHRvIGNvbXBsZXRlIHRoZSBQdXp6bGVcbiAgICAgKiBhbmQgd2lsbCBhbHNvIGluaXRpYWxpc2UgdGhlIFRpbGVzIHRvIEhpZ2hsaWdodCB3aGVuXG4gICAgICogdGhlIEtuaWdodCBoYXMgdmlzaXRlZCB0aGUgdGlsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRvdXIgVHJ1ZSBpZiBLbmlnaHQncyBUb3VyXG4gICAgICovXG4gICAgZ2VuZXJhdGVQdXp6bGUgKHRvdXI9ZmFsc2UpIHtcbiAgICAgICAgLy8gQ2xlYXIgRGlzcGxheVxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY2xlYXIoKTtcblxuICAgICAgICAvLyBTZXR1cCBSb290IFZhcmlhYmxlXG4gICAgICAgIHRoaXMuX3Jvb3QueCA9IHRoaXMua25pZ2h0Lng7XG4gICAgICAgIHRoaXMuX3Jvb3QueSA9IHRoaXMua25pZ2h0Lnk7XG4gICAgICAgIFxuICAgICAgICAvLyBQcmltZSBLbmlnaHQgZm9yIFBhdGggRXhwbG9yYXRpb25cbiAgICAgICAgdGhpcy5rbmlnaHQucHJpbWUoKTtcblxuICAgICAgICAvLyBTZXR1cCBQYXRoIGZvciB0aGUgS25pZ2h0XG4gICAgICAgIGlmICh0b3VyKSB7XG4gICAgICAgICAgICB0aGlzLmtuaWdodC5zZXRQYXRoKHRoaXMuY29udHJvbGxlci50b3VyLndhcm5zZG9yZmYoXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdC54LFxuICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QueSxcbiAgICAgICAgICAgICAgICB0aGlzLmtuaWdodC5ncmFwaFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtuaWdodC5zZXRQYXRoKHRoaXMuY29udHJvbGxlci5zaG9ydGVzdC5iZnMoXG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdC54LFxuICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QueSxcbiAgICAgICAgICAgICAgICB0aGlzLl9nb2FsLngsXG4gICAgICAgICAgICAgICAgdGhpcy5fZ29hbC55LFxuICAgICAgICAgICAgICAgIHRoaXMua25pZ2h0LmdyYXBoXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUHJpbWUgS25pZ2h0IGZvciBUcmF2ZXJzYWxcbiAgICAgICAgdGhpcy5rbmlnaHQucHJpbWUoKTtcblxuICAgICAgICAvLyBBY3RpdmF0ZSBUaWxlcyBmb3IgSGlnaGxpZ2h0aW5nXG4gICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBUaWxlIHNvIHRoZXkgbWF5IGJlIEhpZ2hsaWdodGVkXG4gICAgICAgICAgICBpZiAoIXRpbGUuYWN0aXZlKVxuICAgICAgICAgICAgICAgIHRpbGUudG9nZ2xlKCk7XG5cbiAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBSb290IGFuZCBHb2FsIFRpbGVzXG4gICAgICAgICAgICBpZiAoKHRpbGUueCA9PT0gdGhpcy5rbmlnaHQueCAmJiB0aWxlLnkgPT09IHRoaXMua25pZ2h0LnkpIHx8ICh0aWxlLnggPT09IHRoaXMuX2dvYWwueCAmJiB0aWxlLnkgPT09IHRoaXMuX2dvYWwueSkpXG4gICAgICAgICAgICAgICAgdGlsZS5oaWdobGlnaHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGlzcGxheSBUaWxlIENvb3JkaW5hdGUgZm9yIHRoZSBVc2VyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUoXG4gICAgICAgICAgICB0b3VyID8gYEtuaWdodCdzIFRvdXIgQmVnaW5uaW5nIGF0ICgke3RoaXMuX3Jvb3QueH0sICR7dGhpcy5fcm9vdC55fSk7YCA6XG4gICAgICAgICAgICBgR29hbCBUaWxlOiAoJHt0aGlzLl9nb2FsLnggKyAxfSwgJHt0aGlzLl9nb2FsLnkgKyAxfSk7YFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBQdXp6bGVcbiAgICAgICAgdGhpcy5fc3RhcnQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYXRoID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xpY2sgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBXaXRoIGVhY2ggVGlsZSwgaWYgcHJlc3NlZCBhbmQgcGFzc2VkIGFsbCBjb25kaXRpb25zXG4gICAgICogd2lsbCB1cGRhdGUgdGhlIEtuaWdodCdzIFBvc2l0aW9uIHRvIHRoZSBuZXcgVGlsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBOZXcgWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgTmV3IFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIGNsaWNrICh4LCB5KSB7XG4gICAgICAgIC8vIFJldGFpbiBLbmlnaHQncyBQcmV2aW91cyBMb2NhdGlvblxuICAgICAgICBsZXQgcHJldiA9IHt4OiB0aGlzLmtuaWdodC54LCB5OiB0aGlzLmtuaWdodC55fTtcblxuICAgICAgICAvLyBVcGRhdGUgQ3VycmVudCBUaWxlXG4gICAgICAgIHRoaXMucHJldmlvdXMucHVzaCh0aGlzLmN1cnJlbnQpO1xuICAgICAgICB0aGlzLmN1cnJlbnQucmVtb3ZlS25pZ2h0KCk7XG4gICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIGlmICh0aWxlLnggPT09IHggJiYgdGlsZS55ID09PSB5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGlsZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG91cmluZylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Lm51bWJlcih0aGlzLmtuaWdodC5ncmFwaC5nZXRWZXJ0ZXgoeCwgeSkubW92ZSk7XG4gICAgICAgICAgICAgICAgdGlsZS5wbGFjZUtuaWdodCh0aGlzLmtuaWdodC5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIEtuaWdodCdzIEN1cnJlbnQgTG9jYXRpb25cbiAgICAgICAgdGhpcy5rbmlnaHQudXBkYXRlKHgsIHkpO1xuXG4gICAgICAgIC8vIEVhc2UgQWxlcnQgaWYgUmVxdWlyZWRcbiAgICAgICAgaWYgKHRoaXMuI0VSUk9SKSB7XG4gICAgICAgICAgICB0aGlzLiNFUlJPUiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmVhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBNZXNzYWdlIERpc3BsYXlpbmcgdGhlIEN1cnJlbnQgUG9zaXRpb25cbiAgICAgICAgdGhpcy5jb250cm9sbGVyLnVwZGF0ZShcbiAgICAgICAgICAgIGBNb3ZlIGZyb20gKCR7cHJldi54ICsgMX0sICR7cHJldi55ICsgMX0pIHRvICgke3ggKyAxfSwgJHt5ICsgMX0pO2BcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBVc2VkIGFzIGEgcGFyYW1ldGVyIGZvciB0aGUgQm9hcmQtQnVpbGRlciBDbGFzcywgXG4gICAgICogdGhpcyBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvXG4gICAgICogdXBkYXRlIHRoZSBzaXplIG9mIHRoZSBDaGVzc2JvYXJkIHdoZXJlIHRoZSBwdXp6bGVzXG4gICAgICogYXJlIHNldCwgYmV0d2VlbiA1IGJ5IDUgYW5kIDggYnkgOC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBOZXcgQm9hcmQgU2l6ZVxuICAgICAqL1xuICAgIHNlbGVjdENhbGxiYWNrIChzaXplKSB7IHRoaXMucmVidWlsZChzaXplKTsgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgQ2FsbGJhY2sgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBVc2VkIGFzIGEgcGFyYW1ldGVyIGZvciB0aGUgU2hvcnRlc3QgUGF0aCBhbmQgdGhlIFxuICAgICAqIEtuaWdodCdzIFRvdXIgQ29udHJvbCBDbGFzc2VzLCB0aGlzIGlzIGEgY2FsbGJhY2sgXG4gICAgICogZnVuY3Rpb24gdGhhdCBpbml0aWFsaXNlcyB0aGUgdHdvIGRpZmZlcmVudCBraW5kcyBvZlxuICAgICAqIHB1enpsZXMgYXZhaWxhYmxlIHdpdGhpbiB0aGUgYXBwLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEdvYWwgWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgR29hbCBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRvdXIgVG91ciBQdXp6bGUgKERlZmF1bHQgRmFsc2UpXG4gICAgICovXG4gICAgc3RhcnRDYWxsYmFjayAoeCwgeSwgdG91cj1mYWxzZSkge1xuICAgICAgICAvLyBDbGVhciBEaXNwbGF5XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5jbGVhcigpO1xuXG4gICAgICAgIC8vIENsZWFyIEhpZ2hsaWdodHMgb24gVGlsZXNcbiAgICAgICAgdGhpcy50aWxlcy5mb3JFYWNoKHRpbGUgPT4geyB0aWxlLnJlc2V0KCk7IH0pO1xuXG4gICAgICAgIC8vIFByb21wdCBVc2VyIHRvIFNlbGVjdCBhbiBJbml0aWFsIFRpbGVcbiAgICAgICAgdGhpcy5fc2VsZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdG91cmluZyA9IHRvdXI7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUoXG4gICAgICAgICAgICBcIlBsZWFzZSBTZWxlY3QgYW4gSW5pdGlhbCBUaWxlIGZvciB0aGUgS25pZ2h0LlwiXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU2V0dXAgVmFyaWFibGVzXG4gICAgICAgIGlmICghdG91cikge1xuICAgICAgICAgICAgdGhpcy5fZ29hbC54ID0geDtcbiAgICAgICAgICAgIHRoaXMuX2dvYWwueSA9IHk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbmRvIENhbGxiYWNrIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogVXNlZCBhcyBhIHBhcmFtZXRlciBmb3IgdGhlIFNob3J0ZXN0IFBhdGggYW5kIHRoZVxuICAgICAqIEtuaWdodCdzIFRvdXIgQ29udHJvbCBDbGFzc3NlLCB0aGlzIGlzIGEgY2FsbGJhY2sgXG4gICAgICogZnVuY3Rpb24gdGhhdCB3aWxsIHJldHVybiB0aGUgS25pZ2h0IHRvIGl0J3MgbGFzdFxuICAgICAqIHRpbGUsIGlmIHRoYXQgdGlsZSBleGlzdHMuXG4gICAgICovXG4gICAgdW5kb0NhbGxiYWNrICgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIEtuaWdodCBmcm9tIEN1cnJlbnQgVGlsZVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50LnJlbW92ZUtuaWdodCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgQ3VycmVudCBUaWxlIHRvIExhc3QgVGlsZVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wcmV2aW91cy5wb3AoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5wbGFjZUtuaWdodCh0aGlzLmtuaWdodC5lbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIEtuaWdodCdzIEN1cnJlbnQgTG9jYXRpb25cbiAgICAgICAgICAgIHRoaXMua25pZ2h0LnVwZGF0ZSh4LCB5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgU29sdXRpb24gQ2FsbGJhY2sgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBVc2VkIGFzIGEgcGFyYW1ldGVyIGZvciB0aGUgU2hvcnRlc3QgUGF0aCBhbmQgdGhlXG4gICAgICogS25pZ2h0J3MgVG91ciBDb250cm9sIENsYXNzZXMsIHRoaXMgaXMgYSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcHJvbXB0cyB0aGUgU2VhcmNoIEFsZ29yaXRobSB0byBzaG93XG4gICAgICogdGhlIHNvbHV0aW9uIGdlbmVyYXRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRvdXIgVHJ1ZSBpZiBLbmlnaHQncyBUb3VyXG4gICAgICovXG4gICAgc2hvd0NhbGxiYWNrICh0b3VyPWZhbHNlKSB7IFxuICAgICAgICB0aGlzLl9hbGdvcml0aG0gPSB0cnVlO1xuICAgICAgICB0aGlzLmtuaWdodC5wcm9tcHQodGhpcy5jbGlja0NhbGxiYWNrLmJpbmQodGhpcyksIHRvdXIpOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGljayBUaWxlIENhbGxiYWNrIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogVXNlZCBhcyBhIHBhcmFtZXRlciBmb3IgdGhlIFRpbGUgQ2xhc3MsIHRoaXMgaXMgYSBcbiAgICAgKiBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIGVpdGhlciB0byBtb3ZlXG4gICAgICogdGhlIEtuaWdodCB0byBhIGRlc2lyZWQgbG9jYXRpb24sIGdpdmVuIGl0IGlzIGEgXG4gICAgICogbGVnYWwgbW92ZSwgb3IgZm9yIHBsYWNpbmcgdGhlIEtuaWdodCBvbiBhIGRlc2lyZWRcbiAgICAgKiBpbml0aWFsIHRpbGUgZm9yIHRoZSBQdXp6bGVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IERlc2lyZWQgWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgRGVzaXJlZCBZLUNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBjbGlja0NhbGxiYWNrICh4LCB5KSB7XG4gICAgICAgIC8vIEhhbmRsZSBVc2VyIEluaXRpYWwgVGlsZSBTZWxlY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGluZykge1xuICAgICAgICAgICAgLy8gVXBkYXRlIEN1cnJlbnQgVGlsZVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50LnJlbW92ZUtuaWdodCgpO1xuICAgICAgICAgICAgdGhpcy50aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aWxlLnggPT09IHggJiYgdGlsZS55ID09PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl90b3VyaW5nKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudC5udW1iZXIoMSk7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUucGxhY2VLbmlnaHQodGhpcy5rbmlnaHQuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgS25pZ2h0J3MgQ3VycmVudCBQb3NpdGlvblxuICAgICAgICAgICAgdGhpcy5rbmlnaHQudXBkYXRlKHgsIHkpO1xuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBHb2FsIFBvc2lpdG9uXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVQdXp6bGUodGhpcy5fdG91cmluZyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhcnQgJiYgdGhpcy5fdG91cmluZykge1xuICAgICAgICAgICAgY29uc3QgbGVnYWwgPSB0aGlzLmtuaWdodC5pc0xlZ2FsKHgsIHkpO1xuICAgICAgICAgICAgY29uc3QgdmlzaXRlZCA9IHRoaXMua25pZ2h0LmJlZW5WaXNpdGVkKHgsIHkpO1xuICAgICAgICAgICAgaWYgKGxlZ2FsICYmICF2aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIE1vdmUgdG8gUGF0aFxuICAgICAgICAgICAgICAgIHRoaXMuX3BhdGgucHVzaCh7eDogeCwgeTogeX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2soeCwgeSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rbmlnaHQuZW5kT2ZUb3VyKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbGdvcml0aG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBVc2VyIG9uIEtuaWdodCdzIFN1Y2Nlc3MgYW5kIFBhdGggdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGUgS25pZ2h0J3MgVG91ciB3YXMgQ29tcGxldGVkIHVzaW5nIFdhcm5zZG9yZmYncyBBbGdvcml0aC5cXG5cIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBUaGUgUGF0aCB0YWtlbjpcXG4oJHt0aGlzLl9yb290LnggKyAxfSwgJHt0aGlzLl9yb290LnkgKyAxfSlgXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gdGhpcy5rbmlnaHQucGF0aFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtuaWdodC5wYXRoLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIudXBkYXRlKGAoJHtzdGVwLnggKyAxfSwgJHtzdGVwLnkgKyAxfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMua25pZ2h0LnBhdGgubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgVXNlciBvbiB0aGVpciBTdWNjZXNzIGFuZCB0aGUgUGF0aCB0aGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnVwZGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbmdyYXR1bGF0aW9ucyBmb3IgY29tcGxldGluZyB0aGUgS25pZ2h0J3MgVG91ciFcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFBhdGggdGFrZW46XFxuKCR7dGhpcy5fcm9vdC54ICsgMX0sICR7dGhpcy5fcm9vdC55ICsgMX0pYFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhdGguZm9yRWFjaChjb29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLnVwZGF0ZShgKCR7Y29vcmQueCArIDF9LCAke2Nvb3JkLnkgKyAxfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgUHV6emxlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghbGVnYWwpIHtcbiAgICAgICAgICAgICAgICAvLyBBbGVydCBVc2VyIHRoYXQgdGhlaXIgbW92ZSB3YXMgSWxsZWdhbFxuICAgICAgICAgICAgICAgIHRoaXMuI0VSUk9SID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuYWxlcnQoXCJOaWNlIHRyeSwgdGhhdCBpcyBhbiBpbGxlZ2FsIG1vdmUhXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQWxlcnQgVXNlciB0aGUgdGlsZSBoYXMgYmVlbiBWaXNpdGVkXG4gICAgICAgICAgICAgICAgdGhpcy4jRVJST1IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5hbGVydChcIlRpbGUgaGFzIGFscmVhZHkgYmVlbiB2aXNpdGVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGFydCAmJiAhdGhpcy5fdG91cmluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMua25pZ2h0LmlzTGVnYWwoeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgTW92ZSB0byBQYXRoXG4gICAgICAgICAgICAgICAgdGhpcy5fcGF0aC5wdXNoKHt4OiB4LCB5OiB5fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGljayh4LCB5KTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIEdvYWwgaGFzIGJlZW4gUmVhY2hlZFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nb2FsLnggPT09IHggJiYgdGhpcy5fZ29hbC55ID09PSB5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbGdvcml0aG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBVc2VyIG9uIEtuaWdodCdzIFN1Y2Nlc3MgYW5kIHBhdGggdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFRoZSBTZWFyY2ggQWxnb3JpdGhtIGhhcyByZWFjaGVkIHRoZSBnb2FsIGluICR7dGhpcy5rbmlnaHQuc3RlcHN9O1xcbmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBQYXRoIHRha2VuOlxcbigke3RoaXMuX3Jvb3QueCArIDF9LCAke3RoaXMuX3Jvb3QueSArIDF9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLmtuaWdodC5wYXRoLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUoYCgke3N0ZXAueCArIDF9LCAke3N0ZXAueSArIDF9KWApXG4gICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICh0aGlzLmtuaWdodC5wYXRoLmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIFVzZXIgb24gdGhlaXIgU3VjY2VzcyBhbmQgdGhlIHBhdGggdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYENvbmdyYXR1bGF0aW9ucyBmb3IgcmVhY2hpbmcgdGhlIGdvYWwgaW4gJHt0aGlzLl9wYXRoLmxlbmd0aH07XFxuYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFNlYXJjaCBBbGdvcml0aG0ncyBCZXN0OiAke3RoaXMua25pZ2h0LnBhdGgubGVuZ3RoIC0gMX07XFxuYCArIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBQYXRoIHRha2VuOlxcbigke3RoaXMuX3Jvb3QueCArIDF9LCAke3RoaXMuX3Jvb3QueSArIDF9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXRoLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci51cGRhdGUoYCgke2Nvb3JkLnggKyAxfSwgJHtjb29yZC55ICsgMX0pYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdGhlIFB1enpsZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBbGVydCBVc2VyIHRoYXQgdGhlaXIgbW92ZSB3YXMgSWxsZWdhbFxuICAgICAgICAgICAgICAgIHRoaXMuI0VSUk9SID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuYWxlcnQoXCJOaWNlIHRyeSwgdGhhdCBpcyBhbiBpbGxlZ2FsIG1vdmUhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVndWxhciBDbGlja2luZ1xuICAgICAgICAgICAgaWYgKHRoaXMua25pZ2h0LmlzTGVnYWwoeCwgeSkpIFxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2soeCwgeSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBbGVydCBVc2VyIHRoYXQgdGhlaXIgbW92ZSB3YXMgSWxsZWdhbFxuICAgICAgICAgICAgICAgIHRoaXMuI0VSUk9SID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuYWxlcnQoXCJUaGF0IGlzIGFuIGlsbGVnYWwgbW92ZSFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBDYWxsYmFjayBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIFVzZWQgYXMgYSBwYXJhbWV0ZXIgZm9yIHRoZSBHZXQgSGVhZGVyIEZ1bmN0aW9uLCBcbiAgICAgKiB0aGlzIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG9cbiAgICAgKiByZXNldCB0aGUgYm9hcmQgdG8gdGhlIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgICAqL1xuICAgIHJlc2V0Q2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBPbmx5IFJlc2V0IEtuaWdodCdzIFBvc2l0aW9uIGlmIG5vdCBJbml0aWFsIFBvc2l0aW9uXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnQueCAhPT0gdGhpcy5fcm9vdC54IHx8IHRoaXMuY3VycmVudC55ICE9PSB0aGlzLl9yb290LnkpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBDdXJyZW50IFRpbGVcbiAgICAgICAgICAgIHRoaXMuY3VycmVudC5yZW1vdmVLbmlnaHQoKTtcbiAgICAgICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS54ID09PSB0aGlzLl9yb290LnggJiYgdGlsZS55ID09PSB0aGlzLl9yb290LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5wbGFjZUtuaWdodCh0aGlzLmtuaWdodC5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGlsZS5yZXNldCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgS25pZ2h0J3MgQ3VycmVudCBQb3NpdGlvblxuICAgICAgICAgICAgdGhpcy5rbmlnaHQudXBkYXRlKHRoaXMuX3Jvb3QueCwgdGhpcy5fcm9vdC55KTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgTWVzc2FnZSBEaXNwbGF5XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgR3JhcGggZnJvbSBcIi4uL2RhdGEtc3RydWN0dXJlL2dyYXBoLmpzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2tuaWdodC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZ2h0IHtcbiAgICAjQk9BUkRfU0laRTtcblxuICAgIC8qKlxuICAgICAqIEtuaWdodCBDbGFzc1xuICAgICAqIFxuICAgICAqIENsYXNzIHRoYXQgR2VuZXJhdGVzIHRoZSBET00gZWxlbWVudCB0aGF0IHJlcHJlc2VudHNcbiAgICAgKiB0aGUgS25pZ2h0IE9iamVjdCwgYW5kIGFsc28gY29udHJvbHMgdGhlIEtuaWdodCBhcyBcbiAgICAgKiBpdCBtb3ZlcyBhY3Jvc3MgdGhlIENoZXNzYm9hcmQsIGVpdGhlciBieSB0aGUgVXNlclxuICAgICAqIG9yIGJ5IHRoZSBTZWFyY2ggQWxnb3JpdGhtLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib2FyZCBDaGVzc2JvYXJkIFNpemVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBBcnJheSBvZiBDaGVzc2JvYXJkIFRpbGVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHksIGJvYXJkLCB0aWxlcykge1xuICAgICAgICAvLyBDcmVhdGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpY29uLnNyYz0gSWNvbjtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImtuaWdodFwiKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLiNCT0FSRF9TSVpFID0gYm9hcmQ7XG4gICAgICAgIHRoaXMudGlsZXMgPSB0aWxlcztcbiAgICAgICAgdGhpcy5sZWdhbCA9IFtdO1xuICAgICAgICB0aGlzLnBhdGggPSBbXTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBHcmFwaCBmb3IgVGlsZXNcbiAgICAgICAgdGhpcy5ncmFwaCA9IG5ldyBHcmFwaCgpO1xuICAgICAgICB0aGlzLmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxNb3ZlcygpO1xuICAgIH1cblxuICAgIGdldCBlbGVtZW50ICgpIHsgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7IH1cblxuICAgIHNldCBlbGVtZW50IChlbGVtKSB7IHRoaXMuX2VsZW1lbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94OyB9XG5cbiAgICBzZXQgeCAoeCkgeyB0aGlzLl94ID0geDsgfVxuXG4gICAgZ2V0IHkgKCkgeyByZXR1cm4gdGhpcy5feTsgfVxuXG4gICAgc2V0IHkgKHkpIHsgdGhpcy5feSA9IHk7IH1cblxuICAgIGdldCBsZWdhbCAoKSB7IHJldHVybiB0aGlzLl9sZWdhbDsgfVxuXG4gICAgc2V0IGxlZ2FsIChhcnIpIHsgdGhpcy5fbGVnYWwgPSBhcnI7IH1cblxuICAgIGdldCB0aWxlcyAoKSB7IHJldHVybiB0aGlzLl90aWxlczsgfVxuXG4gICAgc2V0IHRpbGVzIChhcnIpIHsgdGhpcy5fdGlsZXMgPSBhcnI7IH1cblxuICAgIGdldCBncmFwaCAoKSB7IHJldHVybiB0aGlzLl9ncmFwaDsgfVxuXG4gICAgc2V0IGdyYXBoIChncmFwaCkgeyB0aGlzLl9ncmFwaCA9IGdyYXBoOyB9XG5cbiAgICBnZXQgcGF0aCAoKSB7IHJldHVybiB0aGlzLl9wYXRoOyB9XG5cbiAgICBzZXQgcGF0aCAoYXJyKSB7IHRoaXMuX3BhdGggPSBhcnI7IH1cblxuICAgIGdldCBzdGVwcyAoKSB7IHJldHVybiB0aGlzLl9zdGVwczsgfVxuXG4gICAgc2V0IHN0ZXBzIChudW0pIHsgdGhpcy5fc3RlcHMgPSBudW07IH1cblxuICAgIC8qKlxuICAgICAqIFByaW1lIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogUHJpbWUgdGhlIEtuaWdodCBmb3IgYSBGYWlyIFRyYXZlcnNhbC5cbiAgICAgKi9cbiAgICBwcmltZSAoKSB7XG4gICAgICAgIGZvciAobGV0IHZlcnRleCBvZiB0aGlzLmdyYXBoLnZlcnRpY2VzKCkpXG4gICAgICAgICAgICB2ZXJ0ZXgudmlzaXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBCb2FyZCBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEZvciBhIG5ld2x5IHNlbGVjdGVkIEJvYXJkIFNpemUgYnkgdGhlIFVzZXIsIHRoZSBcbiAgICAgKiBLbmlnaHQncyB2YXJpYWJsZXMgbXVzdCBhbHNvIGJlIHVwZGF0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgTmV3IEJvYXJkIFNpemVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBBcnJheSBvZiBUaWxlc1xuICAgICAqL1xuICAgIHVwZGF0ZUJvYXJkIChzaXplLCB0aWxlcykge1xuICAgICAgICAvLyBSZXNldCBHcmFwaFxuICAgICAgICB0aGlzLmdyYXBoLmNsZWFyRWRnZXMoKTtcbiAgICAgICAgdGhpcy5ncmFwaC5jbGVhclZlcnRpY2VzKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLiNCT0FSRF9TSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy50aWxlcyA9IHRpbGVzO1xuXG4gICAgICAgIC8vIEZpbGwgR3JhcGggYW5kIHVwZGF0ZSBMZWdhbCBNb3Zlc1xuICAgICAgICB0aGlzLmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxNb3ZlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBQYXRoIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQXNzaWduIG5ldyBQYXRoIGZvciB0aGUgS25pZ2h0IHRvIFRyYXZlcnNlIHRocm91Z2guXG4gICAgICogXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aCBQYXRoIGZvciBLbmlnaHQgXG4gICAgICovXG4gICAgc2V0UGF0aCAocGF0aCkgeyB0aGlzLnBhdGggPSBwYXRoOyB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9tcHQgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBVc2luZyBhbiBJbnRlcnZhbCwgdGhlIGZ1bmN0aW9uIHdpbGwgaXRlcmF0ZSB0aHJvdWdoXG4gICAgICogdGhlIFBhdGggR2VuZXJhdGVkIHRvIG1ha2UgdGhlIEtuaWdodCBUcmF2ZXJzZSB0aGVcbiAgICAgKiBDaGVzc2JvYXJkLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBtb3ZlQ2FsbGJhY2sgTW92ZSBLbmlnaHQgQ2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRvdXIgVHJ1ZSBpZiBLbmlnaHQncyBUb3VyXG4gICAgICovXG4gICAgcHJvbXB0IChtb3ZlQ2FsbGJhY2ssIHRvdXI9ZmFsc2UpIHtcbiAgICAgICAgLy8gLy8gRmlyc3QgVmVydGV4IGlzIHRoZSBDdXJyZW50IFBvc2l0aW9uXG4gICAgICAgIHRoaXMuc3RlcHMgPSB0aGlzLnBhdGgubGVuZ3RoO1xuICAgICAgICB2YXIgYXV4ID0gWy4uLnRoaXMucGF0aF07XG5cbiAgICAgICAgLy8gRm9yIHRvdXJzLCBmaXJzdCBWZXJ0ZXggaXMgSW5pdGlhbCBQb3NpdGlvblxuICAgICAgICBpZiAodG91cilcbiAgICAgICAgICAgIGF1eC5zcGxpY2UoMCwgMSk7XG5cbiAgICAgICAgLy8gRXZlcnkgU2Vjb25kLCBLbmlnaHQgZXhlY3V0ZXMgdGhlIG5leHQgbW92ZVxuICAgICAgICB2YXIgeCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXg7XG5cbiAgICAgICAgICAgIC8vIFRvdXJzIGFyZSBzdG9yZWQgZnJvbSB0aGUgRnJvbnQgb2YgQXJyYXlcbiAgICAgICAgICAgIGlmICh0b3VyKSB7XG4gICAgICAgICAgICAgICAgdmVydGV4ID0gYXV4WzBdO1xuICAgICAgICAgICAgICAgIGF1eC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLy8gU2hvcnRlc3QgUGF0aCBhcmUgc3RvcmVkIGZyb20gQmFjayBvZiBBcnJheVxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBhdXgucG9wKCk7XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgRm9yd2FyZFxuICAgICAgICAgICAgbW92ZUNhbGxiYWNrKHZlcnRleC54LCB2ZXJ0ZXgueSk7XG4gICAgICAgICAgICBpZiAoYXV4Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaWxsIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQmFzZWQgb24gdGhlIExlZ2FsIE1vdmVzIHRoYXQgYSBLbmlnaHQgY2FuIG1ha2Ugb24gYVxuICAgICAqIENoZXNzYm9hcmQsIHRoaXMgZnVuY3Rpb24gd2lsbCBmaWxsIHVwIHRoZSBncmFwaFxuICAgICAqIHdpdGggZWRnZXMgdGhhdCBjb3JyZXNwb25kIHRvIHRoZSBsZWdhbCBtb3ZlbWVudHMgYVxuICAgICAqIGtuaWdodCBjYW4gbWFrZSBhdCBlYWNoIHNxdWFyZSBvbiB0aGUgYm9hcmQuXG4gICAgICovXG4gICAgZmlsbCAoKSB7XG4gICAgICAgIC8vIEFkZCBhIFZlcnRleCBmb3IgZWFjaCBUaWxlXG4gICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGguaW5zZXJ0VmVydGV4KHRpbGUueCwgdGlsZS55KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGFuIEVkZ2UgZm9yIFRyYXZlcnNpbmcgd2l0aCBLbmlnaHRcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLiNCT0FSRF9TSVpFOyB4KyspXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuI0JPQVJEX1NJWkU7IHkrKylcbiAgICAgICAgICAgICAgICB0aGlzLmdldExlZ2FsTW92ZXMoeCwgeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBMZWdhbCBNb3ZlcyBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEZvciB0aGUgY3VycmVudCBwb3NpdGlvbiB0aGUga25pZ2h0IGlzIGluIG9uIHRoZSBcbiAgICAgKiBDaGVzc2JvYXJkLCB0aGlzIGZ1bmN0aW9uIHdpbGwgZmlsbCB1cCB0aGUgbGVnYWwgXG4gICAgICogbW92ZXMgYXJyYXkgd2l0aCB0aGUgY3VycmVudGx5IGF2YWlsYWJsZSBsZWdhbCBtb3Zlcy5cbiAgICAgKi9cbiAgICBjdXJyZW50TGVnYWxNb3ZlcyAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdyYXBoLmdldFZlcnRleCh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudC5uZWlnaGJvdXJzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy5sZWdhbC5wdXNoKGN1cnJlbnQubmVpZ2hib3Vyc1tpXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBQb3NpdGlvbiBvZiB0aGUgS25pZ2h0LCBhbmQgcmV0cmlldmUgbmV3XG4gICAgICogbGVnYWwgbW92ZXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgdXBkYXRlICh4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMubGVnYWwgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxNb3ZlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJlZW4gVmlzaXRlZCBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiBWZXJ0ZXggaGFzIGJlZW4gVmlzaXRlZCwgdXBkYXRpbmcgaXQgaWYgaXRcbiAgICAgKiBoYXMgbm90IGJlZW4uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggVmVydGV4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFZlcnRleCBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIFZlcnRleCBoYXMgYmVlbiBWaXNpdGVkXG4gICAgICovXG4gICAgYmVlblZpc2l0ZWQgKHgsIHkpIHtcbiAgICAgICAgLy8gR2V0IFZlcnRleCBmcm9tIEdyYXBoXG4gICAgICAgIGxldCB2ZXJ0ZXggPSB0aGlzLmdyYXBoLmdldFZlcnRleCh4LCB5KTtcblxuICAgICAgICAvLyBSZXR1cm4gVHJ1ZSBpZiBpdCBoYXMgYmVlbiBWaXNpdGVkXG4gICAgICAgIGlmICh2ZXJ0ZXgudmlzaXRlZCkgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIC8vIEVsc2UsIHNldCBWaXNpdGVkIHRvIGJlIFRydWUgYW5kIFJldHVybiBGYWxzZVxuICAgICAgICB2ZXJ0ZXgudmlzaXRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmQgb2YgVG91ciBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgQ3VycmVudCBUaWxlIGlzIHRoZSBGaW5hbCBUaWxlIGluIHRoZVxuICAgICAqIEtuaWdodCdzIFRvdXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggQ3VycmVudCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBDdXJyZW50IFktQ29vcmRpbmF0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgQ3VycmVudCBUaWxlIGlzIExhc3QgVGlsZSBpbiBUb3VyXG4gICAgICovXG4gICAgZW5kT2ZUb3VyICh4LCB5KSB7IHJldHVybiB0aGlzLmdyYXBoLmdldFZlcnRleCh4LCB5KS5tb3ZlID09PSBNYXRoLnBvdyh0aGlzLiNCT0FSRF9TSVpFLCAyKTsgfVxuXG4gICAgLyoqXG4gICAgICogSXMgTGVnYWwgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgdGhlIE1vdmUgc2VsZWN0ZWQgaXMgYSBsZWdhbCBvbmUsIGdpdmVuIFxuICAgICAqIHRoZSByZXN0cmljdGlvbnMgb2YgdGhlIEtuaWdodCdzIG1vdmVtZW50IG9uIGFcbiAgICAgKiBjaGVzc2JvYXJkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgTW92ZSBpcyBMZWdhbFxuICAgICAqL1xuICAgIGlzTGVnYWwgKHgsIHkpIHtcbiAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVnYWwubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5sZWdhbFtpXS54ID09PSB4ICYmIHRoaXMubGVnYWxbaV0ueSA9PT0geSlcbiAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGlkeCA+PSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBMZWdhbCBNb3ZlcyBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEZvciB0aGUgR2l2ZW4gUG9zaXRpb24sIHRoZSBmdW5jdGlvbiB3aWxsIGdlbmVyYXRlXG4gICAgICogdGhlIGVkZ2VzIHRvd2FyZHMgdGhlIGxlZ2FsIHBvc2l0aW9ucywgZ2l2ZW4gdGhlIFxuICAgICAqIGtuaWdodHMgcmVzdHJpY3RlZCBtb3ZlcyBvbiBhIGNoZXNzYm9hcmQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgZ2V0TGVnYWxNb3ZlcyAoeCwgeSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuZ3JhcGguZ2V0VmVydGV4KHgsIHkpO1xuICAgICAgICAvLyBUb3AgTW92ZXNcbiAgICAgICAgaWYgKHkgKyAyIDwgdGhpcy4jQk9BUkRfU0laRSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgVG9wLVJpZ2h0IGlzIExlZ2FsXG4gICAgICAgICAgICBpZiAoeCArIDEgPCB0aGlzLiNCT0FSRF9TSVpFKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcFJpZ2h0ID0gdGhpcy5ncmFwaC5nZXRWZXJ0ZXgoeCArIDEsIHkgKyAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgdG9wUmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgVG9wLUxlZnQgaXMgTGVnZWxcbiAgICAgICAgICAgIGlmICh4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcExlZnQgPSB0aGlzLmdyYXBoLmdldFZlcnRleCh4IC0gMSwgeSArIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCB0b3BMZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSaWdodCBNb3Zlc1xuICAgICAgICBpZiAoeCArIDIgPCB0aGlzLiNCT0FSRF9TSVpFKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBSaWdodC1Ub3AgaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh5ICsgMSA8IHRoaXMuI0JPQVJEX1NJWkUpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmlnaHRUb3AgPSB0aGlzLmdyYXBoLmdldFZlcnRleCh4ICsgMiwgeSArIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCByaWdodFRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBSaWdodC1Cb3R0b20gaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh5IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJpZ2h0Qm90dG9tID0gdGhpcy5ncmFwaC5nZXRWZXJ0ZXgoeCArIDIsIHkgLSAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgcmlnaHRCb3R0b20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEJvdHRvbSBNb3Zlc1xuICAgICAgICBpZiAoeSAtIDIgPj0gMCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgQm90dG9tLVJpZ2h0IGlzIExlZ2FsXG4gICAgICAgICAgICBpZiAoeCArIDEgPCB0aGlzLiNCT0FSRF9TSVpFKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvdHRvbVJpZ2h0ID0gdGhpcy5ncmFwaC5nZXRWZXJ0ZXgoeCArIDEsIHkgLSAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgYm90dG9tUmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgQm90dG9tLUxlZnQgaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvdHRvbUxlZnQgPSB0aGlzLmdyYXBoLmdldFZlcnRleCh4IC0gMSwgeSAtIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCBib3R0b21MZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBMZWZ0IE1vdmVzXG4gICAgICAgIGlmICh4IC0gMiA+PSAwKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBMZWZ0LVRvcCBpcyBMZWdhbFxuICAgICAgICAgICAgaWYgKHkgKyAxIDwgdGhpcy4jQk9BUkRfU0laRSkge1xuICAgICAgICAgICAgICAgIGxldCBsZWZ0VG9wID0gdGhpcy5ncmFwaC5nZXRWZXJ0ZXgoeCAtIDIsIHkgKyAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgbGVmdFRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBMZWZ0LUJvdHRvbSBpcyBMZWdhbFxuICAgICAgICAgICAgaWYgKHkgLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbGVmdEJvdHRvbSA9IHRoaXMuZ3JhcGguZ2V0VmVydGV4KHggLSAyLCB5IC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIGxlZnRCb3R0b20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUge1xuICAgIC8qKlxuICAgICAqIFRpbGUgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBDaGVzcyBCb2FyZCBUaWxlIEVsZW1lbnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG91ciBcImJsYWNrXCIgb3IgXCJ3aGl0ZVwiXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHksIGNvbG91cj1cIndoaXRlXCIpIHtcbiAgICAgICAgLy8gQ3JlYXRlIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NvbG91cn0tdGlsZWApO1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBgJHt4fS0ke3l9LXRpbGVgO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICBcImdyaWQtYXJlYVwiLCBgdGlsZS0ke3h9JHt5fWBcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLm1vdmUgPSAwO1xuICAgICAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgZWxlbWVudCAoKSB7IHJldHVybiB0aGlzLl9lbGVtZW50OyB9XG5cbiAgICBzZXQgZWxlbWVudCAoZWxlbSkgeyB0aGlzLl9lbGVtZW50ID0gZWxlbTsgfVxuXG4gICAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feDsgfVxuXG4gICAgc2V0IHggKHgpIHsgdGhpcy5feCA9IHg7IH1cblxuICAgIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3k7IH1cblxuICAgIHNldCB5ICh5KSB7IHRoaXMuX3kgPSB5OyB9XG5cbiAgICBnZXQgbW92ZSAoKSB7IHJldHVybiB0aGlzLl9tb3ZlOyB9XG5cbiAgICBzZXQgbW92ZSAobnVtKSB7IHRoaXMuX21vdmUgPSBudW07IH1cblxuICAgIGdldCBjb2xvdXIgKCkgeyByZXR1cm4gdGhpcy5fY29sb3VyOyB9XG5cbiAgICBzZXQgY29sb3VyIChzdHIpIHsgdGhpcy5fY29sb3VyID0gc3RyOyB9XG5cbiAgICBnZXQgYWN0aXZlICgpIHsgcmV0dXJuIHRoaXMuX2FjdGl2ZTsgfVxuXG4gICAgc2V0IGFjdGl2ZSAoYm9vbCkgeyB0aGlzLl9hY3RpdmUgPSBib29sOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgS25pZ2h0IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogUmVtb3ZlcyB0aGUgS25pZ2h0IERPTSBFbGVtZW50IGZyb20gdGhlIHRpbGUuXG4gICAgICovXG4gICAgcmVtb3ZlS25pZ2h0ICgpIHsgXG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiOyBcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlICYmIHRoaXMubW92ZSA+IDApXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLm1vdmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2UgS25pZ2h0IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQXBwZW5kcyB0aGUgS25pZ2h0IERPTSBFbGVtZW50IHRvIHRoZSB0aWxlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gZWxlbSBLbmlnaHQgRE9NIEVsZW1lbnRcbiAgICAgKi9cbiAgICBwbGFjZUtuaWdodCAoZWxlbSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogTnVtYmVyIHRoZSBUaWxlIHdpdGggYSBEZXNpcmVkIE51bWJlci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtIE51bWJlciBmb3IgVGlsZVxuICAgICAqL1xuICAgIG51bWJlciAobnVtKSB7IFxuICAgICAgICB0aGlzLm1vdmUgPSBudW07XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IG51bTsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlnaGxpZ2h0IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogSGlnaGxpZ2h0cyB0aGUgdGlsZSB3aGVuIGlmIHRoZSB0aWxlIGlzIGFjdGl2ZSBhbmRcbiAgICAgKiBpZiB0aGUga25pZ2h0IGxhbmRzIG9uIHRoZSB0aWxlLlxuICAgICAqL1xuICAgIGhpZ2hsaWdodCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAhdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBTZXRzIHRoZSBhY3RpdmUgdmFyaWFibGUgdG8gYmUgb24gb3Igb2ZmLCBkZXBlbmRpbmdcbiAgICAgKiBvbiB3aGV0aGVyIG9yIG5vdCB0aGVyZSBpcyBhIHB1enpsZSB0aGF0IHRoZSB1c2VyIGlzXG4gICAgICogY3VycmVudGx5IGNvbXBsZXRpbmcuXG4gICAgICovXG4gICAgdG9nZ2xlICgpIHsgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7IH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogUmVtb3ZlcyBhbnkgaW5zdGFuY2Ugb2YgdGhlIFRpbGUgYmVpbmcgaGlnaGxpZ2h0ZWQuXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMubW92ZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgQ2xpY2sgRXZlbnQgTGlzdGVuZXIgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBXaXRoIHRoZSBDYWxsYmFjayBQYXJhbWV0ZXIsIHRoaXMgZnVuY3Rpb24gd2lsbCBzZXRcbiAgICAgKiB0aGUgQ2xpY2sgRXZlbnQgTGlzdGVuZXIgdG8gdGhlIFRpbGUgRE9NIGVsZW1lbnQgc29cbiAgICAgKiB0aGF0IGl0IHdpbGwgaGlnaGxpZ2h0IHRoZSB0aWxlLCBpZiBhY3RpdmUsIGFuZCBhbHNvXG4gICAgICogY29tcGxldGUgdGhlIGRlc2lyZWQgdGFzayBmb3IgdGhlIFRpbGUuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGNhbGxiYWNrIENsaWNrIFRpbGUgQ2FsbGJhY2tcbiAgICAgKi9cbiAgICBzZXRDbGlja0V2ZW50TGlzdGVuZXIgKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0KCk7XG4gICAgICAgICAgICBjYWxsYmFjayh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgICAvKipcbiAgICAgKiBFZGdlIENsYXNzXG4gICAgICogXG4gICAgICogRGF0YSBzdHJ1Y3R1cmUgdGhhdCBjb25uZWN0cyB0d28gVmVydGljZXMgb2YgdGhlXG4gICAgICogR3JhcGggRGF0YSBTdHJ1Y3R1cmUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgU3RhcnRpbmcgVmVydGV4XG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgRW5kaW5nIFZlcnRleFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh1LCB2KSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHUpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godik7XG4gICAgfVxuXG4gICAgZ2V0IHZlcnRpY2VzICgpIHsgcmV0dXJuIHRoaXMuX3ZlcnRpY2VzOyB9XG5cbiAgICBzZXQgdmVydGljZXMgKGFycikgeyB0aGlzLl92ZXJ0aWNlcyA9IGFycjsgfVxuXG4gICAgLyoqXG4gICAgICogU2FtZSBFZGdlIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBFZGdlIGlzIHRoZSBzYW1lIGVkZ2UgYXMgdGhpcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGUgRWRnZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhleSBhcmUgdGhlIFNhbWUgRWRnZVxuICAgICAqL1xuICAgIHNhbWVFZGdlIChlKSB7XG4gICAgICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgICAgICBsZXQgc2Vjb25kID0gZmFsc2U7XG4gICAgICAgIGUudmVydGljZXMuZm9yRWFjaCh1ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2VzWzBdLnNhbWVWZXJ0ZXgodSkgfHwgdGhpcy52ZXJ0aWNlc1sxXS5zYW1lVmVydGV4KHUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaXJzdClcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTmVpZ2hib3VyIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gdmVydGV4LCBpZiBpdCBleGlzdHMgaW4gdGhlIGVkZ2UsIHRoZVxuICAgICAqIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBuZWlnaGJvdXIgdmVydGV4LCBvdGhlcndpc2VcbiAgICAgKiBpdCB3aWxsIHJldHVybiBudWxsO1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IFZlcnRleFxuICAgICAqIEByZXR1cm5zIE5laWdoYm91ciBWZXJ0ZXgsIG9yIE51bGxcbiAgICAgKi9cbiAgICBnZXROZWlnaGJvdXIgKHYpIHtcbiAgICAgICAgbGV0IHUgPSBudWxsO1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2godmVydGV4ID0+IHtcbiAgICAgICAgICAgIGlmICh2LnggPT09IHZlcnRleC54ICYmIHYueSA9PT0gdmVydGV4LnkpXG4gICAgICAgICAgICAgICAgdSA9IHZlcnRleDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFzIFZlcnRleFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiBvbmUgb2YgdGhlIFZlcnRpY2VzIHRoYXQgbWFrZXMgdXAgdGhlIEVkZ2VcbiAgICAgKiBjb250YWlucyB0aGUgZGVzaXJlZCBWZXJ0ZXgsIGFuZCByZXR1cm5zIHRydWUgaWYgaXRcbiAgICAgKiBkb2VzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IFZlcnRleFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgRWRnZSBDb25uZWN0cyBWZXJ0ZXhcbiAgICAgKi9cbiAgICBoYXNWZXJ0ZXggKHYpIHtcbiAgICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICAgICAgaWYgKHYuc2FtZVZlcnRleCh2ZXJ0ZXgpKVxuICAgICAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBWZXJ0aWNlcyBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgcGFpciBvZiBnaXZlbiBWZXJ0aWNlcyBhcmUgY29ubmVjdGVkIFxuICAgICAqIGJ5IHRoZSBFZGdlLCBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB1IE9uZSBWZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBPdGhlciBWZXJ0ZXhcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIGJvdGggVmVydGljZXMgYXJlIGNvbm5lY3RlZCBieSBFZGdlXG4gICAgICovXG4gICAgaGFzVmVydGljZXMgKHUsIHYpIHtcbiAgICAgICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIGxldCBzZWNvbmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKHZlcnRleCA9PiB7XG4gICAgICAgICAgICBpZiAodS5zYW1lVmVydGV4KHZlcnRleCkpXG4gICAgICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHYuc2FtZVZlcnRleCh2ZXJ0ZXgpKVxuICAgICAgICAgICAgICAgIHNlY29uZCA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQ7XG4gICAgfVxufSIsImltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2UuanNcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIHtcbiAgICAvKipcbiAgICAgKiBHcmFwaCBDbGFzc1xuICAgICAqIFxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBHcmFwaCBEYXRhIFN0cnVjdHVyZSwgd2hpY2hcbiAgICAgKiB1dGlsaXNlcyB0aGUgVmVydGV4IGFuZCBFZGdlIENsYXNzZXMgdGhhdCBhcmUgdXNlZFxuICAgICAqIHRvIHJlcHJlc2VudCB0aGUgZGF0YSwgYW5kIHRvIGNvbm5lY3QgdGhlIGRhdGEgdG9cbiAgICAgKiBvbmUgYW5vdGhlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3ZlcnRpY2VzID0gW107IFxuICAgICAgICB0aGlzLl9lZGdlcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2VzIEl0ZXJhdG9yIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCBpbiBsb29wcyB0byBpdGVyYXRlXG4gICAgICogdGhyb3VnaCB0aGUgR3JhcGgncyBWZXJ0aWNlcy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBJdGVyYXRvciBvZiBWZXJ0aWNlc1xuICAgICAqL1xuICAgIHZlcnRpY2VzICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IHRoaXMuX3ZlcnRpY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHRoaXMuX3ZlcnRpY2VzW2krK10sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFZGdlcyBJdGVyYXRvciBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgaW4gbG9vcHMgdG8gaXRlcmF0ZVxuICAgICAqIHRocm91Z2ggdGhlIEdyYXBoJ3MgRWRnZXMuXG4gICAgICogXG4gICAgICogQHJldHVybnMgSXRlcmF0b3Igb2YgRWRnZXNcbiAgICAgKi9cbiAgICBlZGdlcyAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9lZGdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB0aGlzLl9lZGdlc1tpKytdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIFZlcnRpY2VzIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogR2V0IHRoZSBOdW1iZXIgb2YgVmVydGljZXMgd2l0aGluIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgVmVydGljZXNcbiAgICAgKi9cbiAgICBudW1WZXJ0aWNlcyAoKSB7IHJldHVybiB0aGlzLl92ZXJ0aWNlcy5sZW5ndGg7IH1cblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBFZGdlcyBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEdldCB0aGUgTnVtYmVyIG9mIEVkZ2VzIHdpdGhpbiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIEVkZ2VzXG4gICAgICovXG4gICAgbnVtRWRnZXMgKCkgeyByZXR1cm4gdGhpcy5fZWRnZXMubGVuZ3RoOyB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgVmVydGV4IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gKHgsIHkpIGNvb3JkaW5hdGUsIHRoaXMgZnVuY3Rpb24gd2lsbCBcbiAgICAgKiBjcmVhdGUgYSBuZXcgVmVydGV4IGZvciB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgaW5zZXJ0VmVydGV4ICh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgoeCwgeSk7XG4gICAgICAgIHRoaXMuX3ZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgVmVydGV4IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gVmVydGV4LCBpZiBpdCBpcyBpbiB0aGUgR3JhcGgsIGFuZCBpZiBpdFxuICAgICAqIGhhcyBhbnkgRWRnZXMgYXNzb2NpYXRlZCB3aXRoIGl0LCB0aGVuIHRob3NlIEVkZ2VzIFxuICAgICAqIHdvdWxkIGJlIHJlbW92ZWQsIGFuZCBmaW5hbGx5IHRoZSBWZXJ0ZXggd291bGQgdGhlbiBcbiAgICAgKiBiZSByZW1vdmVkIGZyb20gdGhlIEdyYXBoLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IFZlcnRleFxuICAgICAqL1xuICAgIHJlbW92ZVZlcnRleCAodikge1xuICAgICAgICAvLyBDaGVjayBpZiBWZXJ0ZXggaXMgQ29ubmVjdGVkIHRvIE90aGVyIFZlcnRpY2VzXG4gICAgICAgIGZvciAobGV0IGVkZ2Ugb2YgdGhpcy5lZGdlcygpKSB7XG4gICAgICAgICAgICBpZiAoZWRnZS5oYXNWZXJ0ZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgTmVpZ2hib3VyIFJlZmVyZW5jZXMgZm9yIFZlcnRpaWNlc1xuICAgICAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMF0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMV0pO1xuICAgICAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMV0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMF0pO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIEVkZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIFZlcnRleCBpbiBBcnJheVxuICAgICAgICBpZHggPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl92ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHYuc2FtZVZlcnRleCh0aGlzLl92ZXJ0aWNlc1tpXSkpXG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBWZXJ0ZXggaWYgRm91bmRcbiAgICAgICAgaWYgKGlkeCA+PSAwKVxuICAgICAgICAgICAgdGhpcy5fdmVydGljZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgVmVydGljZXMgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBDbGVhcnMgYWxsIHZlcnRpY2VzIGluIHRoZSBHcmFwaC5cbiAgICAgKi9cbiAgICBjbGVhclZlcnRpY2VzICgpIHtcbiAgICAgICAgZG8geyB0aGlzLl92ZXJ0aWNlcy5wb3AoKSB9IHdoaWxlICh0aGlzLl92ZXJ0aWNlcy5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgVmVydGV4IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gKHgsIHkpIGNvb3JkaW5hdGUsIHRoaXMgZnVuY3Rpb24gd2lsbCBcbiAgICAgKiBzZWFyY2ggaXRzIGtub3duIHZlcnRpY2VzIGFuZCByZXR1cm4gdGhlIHZlcnRleCB0aGF0XG4gICAgICogY29ycmVzcG9uZHMgd2l0aCB0aGUgY29vcmRpbmF0ZSwgb3IgbnVsbCBpZiBpdCBkb2VzXG4gICAgICogbm90IGV4aXN0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqIEByZXR1cm5zIENvcnJlc3BvbmRpbmcgVmVydGV4XG4gICAgICovXG4gICAgZ2V0VmVydGV4ICh4LCB5KSB7XG4gICAgICAgIGxldCB1ID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgdmVydGV4IG9mIHRoaXMudmVydGljZXMoKSkge1xuICAgICAgICAgICAgaWYgKHZlcnRleC54ID09PSB4ICYmIHZlcnRleC55ID09PSB5KVxuICAgICAgICAgICAgICAgIHUgPSB2ZXJ0ZXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgRWRnZSBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEZvciBhIGdpdmVuIHBhaXIgb2YgVmVydGljZXMsIHRoaXMgZnVuY3Rpb24gd2lsbFxuICAgICAqIGNyZWF0ZSBhIG5ldyBFZGdlIGZvciB0aGUgcGFpciwgaWYgdGhlcmUgaXNuJ3Qgb25lXG4gICAgICogYWxyZWFkeS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdSBTdGFydGluZyBWZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBFbmRpbmcgVmVydGV4XG4gICAgICovXG4gICAgaW5zZXJ0RWRnZSAodSwgdikge1xuICAgICAgICBpZiAodGhpcy5nZXRFZGdlKHUsIHYpID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBlZGdlID0gbmV3IEVkZ2UodSwgdik7XG4gICAgICAgICAgICB1Lmluc2VydE5laWdoYm91cih2KTtcbiAgICAgICAgICAgIHYuaW5zZXJ0TmVpZ2hib3VyKHUpO1xuICAgICAgICAgICAgdGhpcy5fZWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFZGdlIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gRWRnZSwgaWYgaXQgaXMgaW4gdGhlIEdyYXBoLCB0aGUgRWRnZSBcbiAgICAgKiB3b3VsZCB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtFZGdlfSBlIEVkZ2VcbiAgICAgKi9cbiAgICByZW1vdmVFZGdlIChlKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIEVkZ2UgZXhpc3RzIGluIEdyYXBoXG4gICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9lZGdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2VkZ2VzW2ldLnNhbWVFZGdlKGUpKVxuICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgaWYgRWRnZSBleGlzdHNcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgTmVpZ2hib3VyIFJlZmVyZW5jZXMgZm9yIFZlcnRpY2VzXG4gICAgICAgICAgICBsZXQgZWRnZSA9IHRoaXMuX2VkZ2VzW2lkeF07XG4gICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzBdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzFdKTtcbiAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMV0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMF0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgRWRnZVxuICAgICAgICAgICAgdGhpcy5fZWRnZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBFZGdlc1xuICAgICAqIFxuICAgICAqIFJlbW92ZXMgYWxsIGVkZ2VzIGluIHRoZSBHcmFwaC5cbiAgICAgKi9cbiAgICBjbGVhckVkZ2VzICgpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVkZ2VzXG4gICAgICAgIGZvciAobGV0IGVkZ2Ugb2YgdGhpcy5lZGdlcygpKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgUmVmZXJlbmNlcyB0byBOZWlnaGJvdXIgVmVydGljZXNcbiAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMF0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMV0pO1xuICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1sxXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1swXSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2VkZ2VzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEVkZ2UgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGdpdmVuIHBhaXIgb2YgVmVydGljZXMsIHRoZSBmdW5jdGlvbiB3aWxsXG4gICAgICogaXRlcmF0ZSB0aHJvdWdoIHRoZSBrbm93biBFZGdlcyBvZiB0aGUgR3JhcGggYW5kIFxuICAgICAqIHJldHVybiB0aGUgRWRnZSB0aGF0IGNvbm5lY3RzIHRoZW0sIG9yIHJldHVybnMgbnVsbC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdSBPbmUgVmVydGV4XG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgT3RoZXIgVmVydGV4XG4gICAgICogQHJldHVybnMgRWRnZSB0aGF0IENvbm5lY3RzIHRoZSB0d28gVmVydGljZXNcbiAgICAgKi9cbiAgICBnZXRFZGdlICh1LCB2KSB7XG4gICAgICAgIGxldCBlID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgZWRnZSBvZiB0aGlzLmVkZ2VzKCkpIHtcbiAgICAgICAgICAgIGlmIChlZGdlLmhhc1ZlcnRpY2VzKHUsIHYpKVxuICAgICAgICAgICAgICAgIGUgPSBlZGdlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcbiAgICAvKipcbiAgICAgKiBRdWV1ZSBDbGFzc1xuICAgICAqIFxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBRdWV1ZSBEYXRhIFN0cnVjdHVyZS4gVGhlIFxuICAgICAqIFF1ZXVlIERhdGEgU3RydWN0dXJlIHV0aWxpc2VzIHRoZSBGaXJzdC1JbiwgRmlyc3QtXG4gICAgICogT3V0IHByaW5jaXBsZSwgZWxlbWVudHMgYWRkZWQgdG8gdGhlIFF1ZXVlIHdpbGwgYmVcbiAgICAgKiBwdXNoZWQgdG8gdGhlIGJhY2sgb2YgdGhlIEFycmF5LCBhbmQgb25seSB0aGUgZmlyc3RcbiAgICAgKiBlbGVtZW50IHdpbGwgYmUgcmVtb3ZlZCBlYWNoIHRpbWUgZGVxdWV1ZSBpcyBjYWxsZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpemUgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIFF1ZXVlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFNpemUgb2YgdGhlIFF1ZXVlXG4gICAgICovXG4gICAgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGg7IH1cblxuICAgIC8qKlxuICAgICAqIElzIEVtcHR5IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogSWYgdGhlcmUgYXJlIG5vIEVsZW1lbnRzIGluIHRoZSBRdWV1ZSwgdGhlIGZ1bmN0aW9uXG4gICAgICogcmV0dXJucyB0cnVlLCBhbmQgd2lsbCByZXR1cm4gZmFsc2UgaW4gYWxsIG90aGVyXG4gICAgICogY2FzZXMuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGVyZSBhcmUgbm8gRWxlbWVudHMgaW4gdGhlIFF1ZXVlXG4gICAgICovXG4gICAgaXNFbXB0eSAoKSB7IHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDA7IH1cblxuICAgIC8qKlxuICAgICAqIEVucXVldWUgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBBZGRzIGEgbmV3IEVsZW1lbnQgdG8gdGhlIFF1ZXVlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gZSBOZXcgRWxlbWVudCBmb3IgUXVldWVcbiAgICAgKi9cbiAgICBlbnF1ZXVlIChlKSB7IHRoaXMuX3F1ZXVlLnB1c2goZSk7IH1cblxuICAgIC8qKlxuICAgICAqIEZpcnN0IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgRmlyc3QgRWxlbWVudCBvZiB0aGUgUXVldWUsIHdpdGhvdXRcbiAgICAgKiBkZXF1ZXVpbmcgaXQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVGhlIEZpcnN0IEVsZW1lbnQgb2YgdGhlIFF1ZXVlXG4gICAgICovXG4gICAgZmlyc3QgKCkgeyByZXR1cm4gdGhpcy5fcXVldWVbMF07IH1cblxuICAgIC8qKlxuICAgICAqIERlcXVldWUgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBSZW1vdmVzIHRoZSBGaXJzdCBFbGVtZW50IG9mIHRoZSBRdWV1ZSwgYW5kIHJlbW92ZXNcbiAgICAgKiBpdCBpbiB0aGUgcHJvY2Vzcy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUaGUgRmlyc3QgRWxlbWVudCBvZiB0aGUgUXVldWVcbiAgICAgKi9cbiAgICBkZXF1ZXVlICgpIHtcbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLl9xdWV1ZVswXTtcbiAgICAgICAgdGhpcy5fcXVldWUuc3BsaWNlKDAsIDEpO1xuXG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICAgIC8qKlxuICAgICAqIFZlcnRleCBDbGFzc1xuICAgICAqIFxuICAgICAqIERhdGEgc3RydWN0dXJlIHRoYXQgc3RvcmUgdGhlIGRhdGEgd2l0aGluIHRoZSBHcmFwaCxcbiAgICAgKiBpbiB0aGlzIGNhc2UsIHN0b3JlcyAoeCwgeSkgY29vcmRpbmF0ZXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHkpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW92ZSA9IDA7XG4gICAgICAgIHRoaXMubmVpZ2hib3VycyA9IFtdO1xuICAgIH1cblxuICAgIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3g7IH1cblxuICAgIHNldCB4ICh4KSB7IHRoaXMuX3ggPSB4OyB9XG5cbiAgICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95OyB9XG5cbiAgICBzZXQgeSAoeSkgeyB0aGlzLl95ID0geTsgfVxuXG4gICAgZ2V0IHZpc2l0ZWQgKCkgeyByZXR1cm4gdGhpcy5fdmlzaXRlZDsgfVxuXG4gICAgc2V0IHZpc2l0ZWQgKGJvb2wpIHsgdGhpcy5fdmlzaXRlZCA9IGJvb2w7IH1cblxuICAgIGdldCBtb3ZlICgpIHsgcmV0dXJuIHRoaXMuX21vdmU7IH1cblxuICAgIHNldCBtb3ZlIChudW0pIHsgdGhpcy5fbW92ZSA9IG51bTsgfVxuXG4gICAgZ2V0IG5laWdoYm91cnMgKCkgeyByZXR1cm4gdGhpcy5fbmVpZ2hib3VyczsgfVxuXG4gICAgc2V0IG5laWdoYm91cnMgKGFycikgeyB0aGlzLl9uZWlnaGJvdXJzID0gYXJyOyB9XG5cbiAgICAvKipcbiAgICAgKiBTYW1lIFZlcnRleCBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gVmVydGV4IGlzIHRoZSBzYW1lIG9uZSBhcyB0aGlzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IFZlcnRleFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIFNhbWUgVmVydGV4XG4gICAgICovXG4gICAgc2FtZVZlcnRleCAodikgeyByZXR1cm4gdi54ID09PSB0aGlzLnggJiYgdi55ID09PSB0aGlzLnk7IH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBOZWlnaGJvdXIgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBBZGRzIGEgbmV3IFZlcnRleCB0aGF0IGlzIE5laWdoYm91ciB0aGlzIFZlcnRleCBpbiBcbiAgICAgKiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHZlcnRleCBWZXJ0ZXhcbiAgICAgKi9cbiAgICBpbnNlcnROZWlnaGJvdXIgKHZlcnRleCkgeyB0aGlzLm5laWdoYm91cnMucHVzaCh2ZXJ0ZXgpOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgTmVpZ2hib3VyIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogUmVtb3ZlcyBhIE5laWdoYm91ciBWZXJ0ZXgsIGlmIGl0IGV4aXN0cyBmcm9tIHRoZVxuICAgICAqIFZlcnRleCdzIE5laWdoYm91ciBMaXN0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2ZXJ0ZXggTmVpZ2hib3VyIHRvIFJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZU5laWdoYm91ciAodmVydGV4KSB7XG4gICAgICAgIC8vIEZpbmQgVmVydGV4IGlmIFByZXNlbnQgaW4gbmVpZ2hib3VycyBBcnJheVxuICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uZWlnaGJvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZWlnaGJvdXJzW2ldLnNhbWVWZXJ0ZXgodmVydGV4KSlcbiAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gbmVpZ2hib3VycyBpZiBQcmVzZW50XG4gICAgICAgIGlmIChpZHggPj0gMClcbiAgICAgICAgICAgIHRoaXMubmVpZ2hib3Vycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG59IiwiaW1wb3J0IFwiLi4vY3NzL2Ryb3AtZG93bi1zdHlsaW5nLmNzc1wiO1xuaW1wb3J0IE9wdGlvbnNMaXN0IGZyb20gXCIuL29wdGlvbnMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcERvd25Nb2R1bGUgZXh0ZW5kcyBPcHRpb25zTGlzdCB7XG4gICAgLyoqXG4gICAgICogRHJvcCBEb3duIE1vZHVsZVxuICAgICAqIFxuICAgICAqIEdlbmVyaWMgRHJvcCBEb3duIE1vZHVsZSwgdGhhdCBjcmVhdGVzIGEgbGlzdFxuICAgICAqIG9mIG9wdGlvbnMgdGhhdCBhIFVzZXIgY2FuIENob29zZSBmcm9tLCB3aXRoIGFcbiAgICAgKiBkZWZhdWx0IE9wdGlvbiB0aGF0IHdpbGwgZGlzcGxheSBmb3IgdGhlIHVzZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtBcnJheX0gY29udGVudCBBcnJheSBvZiBDb250ZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiBPcHRpb25zIExpc3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0ZWQgRGVmYXVsdCBPcHRpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY29udGVudCwgbmFtZSwgc2VsZWN0ZWQpIHtcbiAgICAgICAgc3VwZXIoY29udGVudCwgbmFtZSwgc2VsZWN0ZWQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBET00gRWxlbWV0c1xuICAgICAgICB0aGlzLmRyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5kcm9wRG93bi5jbGFzc0xpc3QuYWRkKGAke25hbWV9LWRyb3Bkb3duYCk7XG4gICAgICAgIHRoaXMuZHJvcERvd24udGV4dENvbnRlbnQgPSBzZWxlY3RlZDtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxseSwgbm90IERpc2FibGVkXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBBZGQgQ2xpY2sgRXZlbnQgTGlzdGVuZXIgdG8gU2VsZWN0XG4gICAgICAgIHRoaXMuZHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMudG9nZ2xlKCk7IH0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCBPcHRpb25zIExpc3QgdG8gTW9kdWxlXG4gICAgICAgIHRoaXMuZHJvcERvd24uYXBwZW5kQ2hpbGQodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBnZXQgZHJvcERvd24gKCkgeyByZXR1cm4gdGhpcy5fZHJvcF9kb3duOyB9XG5cbiAgICBzZXQgZHJvcERvd24gKGVsZW0pIHsgdGhpcy5fZHJvcF9kb3duID0gZWxlbTsgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIFNlbGVjdGlvbiBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIFVwZGF0ZSBEcm9wZG93biBzZWxlY3Rpb24gYmFzZWQgb24gVXNlcidzIHNlbGVjaXRvbi5cbiAgICAgKi9cbiAgICB1cGRhdGVTZWxlY3Rpb24gKCkgeyB0aGlzLmRyb3BEb3duLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlID0gdGhpcy5zZWxlY3RlZDsgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnNMaXN0IHtcbiAgICAvKipcbiAgICAgKiBPcHRpb25zIExpc3QgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBHZW5lcmF0ZXMgYW4gT3B0aW9ucyBMaXN0IG9mIGRlc2lyZWQgY29udGVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjb250ZW50IEFycmF5IG9mIENvbnRlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIE9wdGlvbnMgTGlzdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZCBEZWZhdWx0IE9wdGlvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjb250ZW50LCBuYW1lLCBzZWxlY3RlZCkge1xuICAgICAgICAvLyBDcmVhdGUgRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jbGFzc0xpc3QuYWRkKGAke25hbWV9LW9wdGlvbnNgKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIENvbnRlbnRcbiAgICAgICAgdGhpcy5pbml0aWFsaXNlKGNvbnRlbnQsIHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG5cbiAgICBzZXQgbmFtZSAoc3RyKSB7IHRoaXMuX25hbWUgPSBzdHI7IH1cblxuICAgIGdldCBsaXN0ICgpIHsgcmV0dXJuIHRoaXMuX2xpc3Q7IH1cblxuICAgIHNldCBsaXN0IChhcnIpIHsgdGhpcy5fbGlzdCA9IGFycjsgfVxuXG4gICAgZ2V0IG9wdGlvbnMgKCkgeyByZXR1cm4gdGhpcy5fb3B0aW9uczsgfVxuXG4gICAgc2V0IG9wdGlvbnMgKGVsZW0pIHsgdGhpcy5fb3B0aW9ucyA9IGVsZW07IH1cblxuICAgIGdldCBzZWxlY3RlZCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3RlZDsgfVxuXG4gICAgc2V0IHNlbGVjdGVkICh2YWx1ZSkgeyB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlOyB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgRnVuY3Rpb24gXG4gICAgICpcbiAgICAgKiBEcm9wZG93biBMaXN0IGNhbiBiZSByZXZlYWxlZCBvciBoaWRkZW4gdXNpbmdcbiAgICAgKiB0aGlzIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHRvZ2dsZSAoKSB7XG4gICAgICAgIC8vIFRvZ2dsZSBWaXNpYmlsaXR5IG9mIE9wdGlvbnNcbiAgICAgICAgdGhpcy5vcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBWaXNpYmlsaXR5IG9mIE1lbnUgT2JqZWN0c1xuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IHsgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZSBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIFNldHMgdXAgdGhlIG9wdGlvbnMgaW4gT3B0aW9uIExpc3QgYW5kIGFkZHNcbiAgICAgKiB0aGVtIHRvIHRoZSBMaXN0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbnRlbnQgQXJyYXkgb2YgQ29udGVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RlZCBEZWZhdWx0IFNlbGVjdGlvblxuICAgICAqL1xuICAgIGluaXRpYWxpc2UgKGNvbnRlbnQsIHNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBDb250ZW50XG4gICAgICAgIGNvbnRlbnQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBPcHRpb24gRE9NIE9iamVjdFxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKGAke3RoaXMubmFtZX0tb3B0aW9uYCk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgb3B0aW9uLmlkID0gaXRlbS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAvLyBBZGQgT3B0aW9uIHRvIExpc3QgJiBPcHRpb25zIE9iamVjdFxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2gob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IFwiLi9jc3Mvbm9ybWFsaXNlLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgeyBnZXRIZWFkZXIsIGdldEZvb3RlciB9IGZyb20gXCIuL2xheW91dC1idWlsZGVyLmpzXCI7XG5pbXBvcnQgQ2hlc3Nib2FyZCBmcm9tIFwiLi9jaGVzcy1tb2R1bGUvY2hlc3Nib2FyZC5qc1wiO1xuXG4vLyBHZW5lcmF0ZSBDaGVzc2JvYXJkXG5jb25zdCBjaGVzc2JvYXJkID0gbmV3IENoZXNzYm9hcmQoKTtcblxuLy8gQWRkIERPTSBFbGVtZW50cyB0byBCb2R5XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdldEhlYWRlcihjaGVzc2JvYXJkLnJlc2V0Q2FsbGJhY2suYmluZChjaGVzc2JvYXJkKSkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjaGVzc2JvYXJkLm1vZHVsZSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNoZXNzYm9hcmQuY29udHJvbGxlci5tb2R1bGUpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnZXRGb290ZXIoKSk7IiwiLyoqXG4gKiBHZXQgSGVhZGVyIEZ1bmN0aW9uXG4gKiBcbiAqIEdlbmVyYXRlcyBIZWFkZXIgRE9NIEVsZW1lbnQuXG4gKiBcbiAqIEBjYWxsYmFjayByZXNldENhbGxiYWNrIFJlc2V0IEV2ZW50IExpc3RlbmVyXG4gKiBAcmV0dXJucyBIZWFkZXIgRE9NIEVsZW1lbnRcbiAqL1xuY29uc3QgZ2V0SGVhZGVyID0gZnVuY3Rpb24gKHJlc2V0Q2FsbGJhY2spIHtcbiAgICAvLyBDcmVhdGUgTmF2LUJhciBET00gRWxlbWVudFxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpO1xuXG4gICAgLy8gQ3JlYXRlIFRpdGxlIERPTSBFbGVtZW50XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIktuaWdodCBUcmF2YWlsc1wiO1xuXG4gICAgLy8gQ3JlYXRlIFJlc2V0IEJ1dHRvbiBET00gRWxlbWVudFxuICAgIGNvbnN0IHJlc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXNldC50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcbiAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgXG4gICAgICAgIHJlc2V0Q2FsbGJhY2soKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBFbGVtZW50cyB0byBOYXYtQmFyXG4gICAgbmF2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocmVzZXQpO1xuXG4gICAgcmV0dXJuIG5hdjtcbn1cblxuLyoqXG4gKiBHZXQgRm9vdGVyIEZ1bmN0aW9uXG4gKiBcbiAqIEdlbmVyYXRlcyBGb290ZXIgRE9NIEVsZW1lbnQuXG4gKiBcbiAqIEByZXR1cm5zIEZvb3RlciBET00gZWxlbWVudFxuICovXG5jb25zdCBnZXRGb290ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ3JlYXRlIEZvb3RlciBET00gRWxlbWVudFxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJZb25hIFxcdTAwQTkgMjAyNFwiO1xuICAgIFxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCB7IGdldEhlYWRlciwgZ2V0Rm9vdGVyIH07IiwiaW1wb3J0IERyb3BEb3duTW9kdWxlIGZyb20gXCIuLi9kcm9wLWRvd24tbW9kdWxlL2Ryb3Bkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkQnVpbGRlciB7XG4gICAgI01JTklNVU0gPSA1O1xuICAgICNNQVhJTVVNID0gODtcblxuICAgIC8qKlxuICAgICAqIEJvYXJkIEJ1aWxkZXIgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBDb250cm9sbGVyIENsYXNzIGZvciBBZGp1c3RpbmcgdGhlIENoZXNzYm9hcmQgc2l6ZVxuICAgICAqIGFuZCBwcm92aWRpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNpemUgbGltaXRhdGlvbnNcbiAgICAgKiBmb3IgdGhlIFVzZXIuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGluZm9DYWxsYmFjayBCdWlsZGVyIEluZm8gQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgc2VsZWN0Q2FsbGJhY2sgT3B0aW9uIFNlbGVjdCBDYWxsYmFja1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChpbmZvQ2FsbGJhY2ssIHNlbGVjdENhbGxiYWNrKSB7XG4gICAgICAgIC8vIENyZWF0ZSBNb2R1bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm1vZHVsZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtYnVpbGRlclwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgVGl0bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJCb2FyZCBCdWlsZGVyXCI7XG5cbiAgICAgICAgLy8gQ3JlYXRlIEluZm9ybWF0aW9uIEJ1dHRvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLmluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmluZm8uY2xhc3NMaXN0LmFkZChcImluZm8tYm9hcmQtYnVpbGRlci1idG5cIik7XG4gICAgICAgIHRoaXMuaW5mby50ZXh0Q29udGVudCA9IFwiSW5mb1wiO1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIEJvYXJkIFNpemUgT3B0aW9ucyBET00gRWxlbWVudFxuICAgICAgICB0aGlzLnNlbGVjdCA9IG5ldyBEcm9wRG93bk1vZHVsZSh0aGlzLiNidWlsZE9wdGlvbnMoKSwgXCJib2FyZC1idWlsZGVyXCIsIHRoaXMuX29wdGlvbnNbOF0pO1xuXG4gICAgICAgIC8vIEFkZCBEaXNwbGF5IEJ1aWxkZXIgSW5mbyBFdmVudCBMaXN0ZW5lclxuICAgICAgICB0aGlzLmluZm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpbmZvQ2FsbGJhY2soXG4gICAgICAgICAgICAgICAgXCJSZWJ1aWxkIEJvYXJkIHRvIHlvdXIgbGlraW5nLlxcblBsZWFzZSBub3RlIHRoYXQgeW91IG1heSBub3QgXCIgK1xuICAgICAgICAgICAgICAgIFwiQnVpbGQgYSBib2FyZCB0aGF0IGlzIHNtYWxsZXIgdGhhbiA1IGJ5IDUsIGJlY2F1c2UgdGhlcmUgYXJlIFwiICtcbiAgICAgICAgICAgICAgICBcIm5vIEtuaWdodCdzIHRvdXJzIHRoYXQgY2FuIGJlIGNvbXBsZXRlZCBpbiBzbWFsbGVyIGJvYXJkcywgXCIgK1xuICAgICAgICAgICAgICAgIFwiZXhjZXB0IGZvciB0aGUgVHJpdmlhbCAxIGJ5IDEgY2FzZS4gRHVlIHRvIHNjcmVlbiBzaXplIGxpbWl0YXRpb25zXCIgK1xuICAgICAgICAgICAgICAgIFwidGhlIG1heGltdW0gYm9hcmQgc2l6ZSBpcyB0aGUgdHJhZGl0aW9uYWwgQ2hlc3Nib2FyZCBzaXplLCA4IGJ5IDguXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBPcHRpb24gU2VsZWN0IEV2ZW50IExpc3RlbmVyc1xuICAgICAgICB0aGlzLnNlbGVjdC5saXN0LmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBPcHRpb24gdGhhdCBoYXMgYmVlbiBTZWxlY3RlZFxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5fb3B0aW9ucykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gb3B0aW9uLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5zZWxlY3RlZCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbiA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQm9hcmRcbiAgICAgICAgICAgICAgICBzZWxlY3RDYWxsYmFjayhzZWxlY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyBpbnRvIE1vZHVsZVxuICAgICAgICB0aGlzLm1vZHVsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRoaXMubW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuaW5mbyk7XG4gICAgICAgIHRoaXMubW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0LmRyb3BEb3duKTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgaW5mbyAoKSB7IHJldHVybiB0aGlzLl9pbmZvOyB9XG5cbiAgICBzZXQgaW5mbyAoZWxlbSkgeyB0aGlzLl9pbmZvID0gZWxlbTsgfVxuXG4gICAgZ2V0IHNlbGVjdCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3Q7IH1cblxuICAgIHNldCBzZWxlY3QgKG9iaikgeyB0aGlzLl9zZWxlY3QgPSBvYmo7IH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIE9wdGlvbnMgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBCdWlsZHMgb3B0aW9ucyBmb3IgdGhlIFNpemVzIG9mIHRoZSBDaGVzc2JvYXJkIHRoYXRcbiAgICAgKiBhcmUgTWF0aGVtYXRpY2FsIHBvc3NpYmxlICh1cCB0byA4IGJ5IDgpLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIE9wdGlvbnMgZm9yIERyb3Bkb3duIGxpc3RcbiAgICAgKi9cbiAgICAjYnVpbGRPcHRpb25zICgpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy4jTUlOSU1VTTsgaSA8PSB0aGlzLiNNQVhJTVVNOyBpKyspXG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zW2ldID0gYCR7aX1cXHUwMEQ3JHtpfWA7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fb3B0aW9ucyk7XG4gICAgfVxufSIsImltcG9ydCBcIi4uL2Nzcy9jb250cm9sbGVyLmNzc1wiO1xuaW1wb3J0IEJvYXJkQnVpbGRlciBmcm9tIFwiLi9ib2FyZC1idWlsZGVyLmpzXCI7XG5pbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5LmpzXCI7XG5pbXBvcnQgS25pZ2h0c1RvdXJDb250cm9scyBmcm9tIFwiLi9rbmlnaHRzLXRvdXIuanNcIjtcbmltcG9ydCBTaG9ydGVzdFBhdGhDb250cm9scyBmcm9tIFwiLi9zaG9ydGVzdC1wYXRoLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIC8qKlxuICAgICAqIENvbnRyb2xsZXIgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBHZW5lcmF0ZXMgdGhlIERPTSBFbGVtZW50cyBmb3IgdGhlIFB1enpsZSBDb250cm9sbGVyXG4gICAgICogaW5jbHVkaW5nIHRoZSBEaXNwbGF5LCBhbmQgdGhlIHR3byBQdXp6bGUgQ29tcG9uZW50c1xuICAgICAqIHNwZWNpZmljYWxseSwgdGhlIFNob3J0ZXN0IFBhdGggUHV6emxlIGFuZCB0aGUgXG4gICAgICogS25pZ2h0J3MgVG91ciBQdXp6bGUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggSW5pdGlhbCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBJbml0aWFsIFktQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib2FyZCBDaGVzc2JvYXJkIFNpemVcbiAgICAgKiBAY2FsbGJhY2sgc2VsZWN0Q2FsbGJhY2sgU2VsZWN0IEJvYXJkIFNpemUgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgc3RhcnRDYWxsYmFjayBTdGFydCBQdXp6bGUgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgdW5kb0NhbGxiYWNrIFVuZG8gTW92ZSBDYWxsYmFja1xuICAgICAqIEBjYWxsYmFjayBzaG93Q2FsbGJhY2sgU2hvdyBTb2x1dGlvbiBDYWxsYmFja1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5LCBib2FyZCwgc2VsZWN0Q2FsbGJhY2ssIHN0YXJ0Q2FsbGJhY2ssIHVuZG9DYWxsYmFjaywgc2hvd0NhbGxiYWNrKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgdGhpcy5pbml0aWFsID0ge3g6IHgsIHk6IHl9O1xuXG4gICAgICAgIC8vIENyZWF0ZSBNb2R1bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm1vZHVsZS5jbGFzc0xpc3QuYWRkKFwicHV6emxlLWNvbnRyb2xsZXJcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIERpc3BsYXkgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcblxuICAgICAgICAvLyBDcmVhdGUgQm9hcmQtQnVpbGRlciBDb250cm9scyBET00gRUxlbWVudFxuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgQm9hcmRCdWlsZGVyKHRoaXMudXBkYXRlLmJpbmQodGhpcyksIHNlbGVjdENhbGxiYWNrKTtcblxuICAgICAgICAvLyBDcmVhdGUgUmFuZG9tIExvY2F0aW9uIENvbnRyb2xzIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuc2hvcnRlc3QgPSBuZXcgU2hvcnRlc3RQYXRoQ29udHJvbHMoeCwgeSwgYm9hcmQsIHN0YXJ0Q2FsbGJhY2ssIHRoaXMudXBkYXRlLmJpbmQodGhpcyksIHVuZG9DYWxsYmFjaywgc2hvd0NhbGxiYWNrKTtcblxuICAgICAgICAvLyBDcmVhdGUgRnVsbC1Cb2FyZCBDb250cm9scyBET00gRWxlbWVudFxuICAgICAgICB0aGlzLnRvdXIgPSBuZXcgS25pZ2h0c1RvdXJDb250cm9scyh4LCB5LCBib2FyZCwgc3RhcnRDYWxsYmFjaywgdGhpcy51cGRhdGUuYmluZCh0aGlzKSwgdW5kb0NhbGxiYWNrLCBzaG93Q2FsbGJhY2spO1xuXG4gICAgICAgIC8vIEFwcGVuZCBBbGwgVG8gTW9kdWxlXG4gICAgICAgIHRoaXMubW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuZGlzcGxheS5tb2R1bGUpO1xuICAgICAgICB0aGlzLm1vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkZXIubW9kdWxlKTtcbiAgICAgICAgdGhpcy5tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5zaG9ydGVzdC5tb2R1bGUpO1xuICAgICAgICB0aGlzLm1vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLnRvdXIubW9kdWxlKTtcbiAgICB9XG5cbiAgICBnZXQgYm9hcmQgKCkgeyByZXR1cm4gdGhpcy5fYm9hcmQ7IH1cblxuICAgIHNldCBib2FyZCAobnVtKSB7IHRoaXMuX2JvYXJkID0gbnVtOyB9XG5cbiAgICBnZXQgaW5pdGlhbCAoKSB7IHJldHVybiB0aGlzLl9pbml0aWFsOyB9XG5cbiAgICBzZXQgaW5pdGlhbCAoZGljdCkgeyB0aGlzLl9pbml0aWFsID0gZGljdDsgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxuXG4gICAgZ2V0IGRpc3BsYXkgKCkgeyByZXR1cm4gdGhpcy5fZGlzcGxheTsgfVxuXG4gICAgc2V0IGRpc3BsYXkgKG9iaikgeyB0aGlzLl9kaXNwbGF5ID0gb2JqOyB9XG5cbiAgICBnZXQgYnVpbGRlciAoKSB7IHJldHVybiB0aGlzLl9idWlsZGVyOyB9XG5cbiAgICBzZXQgYnVpbGRlciAob2JqKSB7IHRoaXMuX2J1aWxkZXIgPSBvYmo7IH1cblxuICAgIGdldCBzaG9ydGVzdCAoKSB7IHJldHVybiB0aGlzLl9zaG9ydGVzdDsgfVxuXG4gICAgc2V0IHNob3J0ZXN0IChvYmopIHsgdGhpcy5fc2hvcnRlc3QgPSBvYmo7IH1cblxuICAgIGdldCB0b3VyICgpIHsgcmV0dXJuIHRoaXMuX3RvdXI7IH1cblxuICAgIHNldCB0b3VyIChvYmopIHsgdGhpcy5fdG91ciA9IG9iajsgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogVXNlZCBieSBDaGVzc2JvYXJkIENsYXNzIHRvIHVwZGF0ZSB0aGUgUHV6emxlLVxuICAgICAqIENvbnRyb2xsZXIgRGlzcGxheSB3aXRoIGEgTmV3IE1lc3NhZ2UuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1zZyBOZXcgTWVzc2FnZVxuICAgICAqL1xuICAgIHVwZGF0ZSAobXNnKSB7IHRoaXMuZGlzcGxheS51cGRhdGUobXNnKTsgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEFsZXJ0IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogVXNlZCBieSBDaGVzc2JvYXJkIENsYXNzIHRvIGFsZXJ0IHRoZSBQdXp6bGUtXG4gICAgICogQ29udHJvbGxlciBEaXNwbGF5IHdpdGggYW4gQWxlcnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1zZyBBbGVydCBNZXNzYWdlXG4gICAgICovXG4gICAgYWxlcnQgKG1zZykgeyB0aGlzLmRpc3BsYXkuYWxlcnQobXNnKTsgfVxuXG4gICAgLyoqXG4gICAgICogRWFzZSBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIFVzZWQgYnkgQ2hlc3Nib2FyZCBDbGFzcyB0byB1cGRhdGUgdGhlIFB1enpsZS1cbiAgICAgKiBDb250cm9sbGVyIHRoYXQgYW55IEFsZXJ0cyBoYXZlIGJlZW4gZWFzZWQuXG4gICAgICovXG4gICAgZWFzZSAoKSB7IHRoaXMuZGlzcGxheS5lYXNlKCk7IH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogVXNlZCBieSBDaGVzc2JvYXJkIENsYXNzIHRvIGNsZWFyIHRoZSBQdXp6bGUtXG4gICAgICogQ29udHJvbGxlcidzIGRpc3BsYXkgb2YgYWxsIG1lc3NhZ2VzLlxuICAgICAqL1xuICAgIGNsZWFyICgpIHsgdGhpcy5kaXNwbGF5LmNsZWFyKCk7IH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IENsYXNzXG4gICAgICogXG4gICAgICogUGFydCBvZiB0aGUgUHV6emxlIENvbnRyb2xsZXIgTW9kdWxlLCB0aGlzIGNsYXNzIGlzXG4gICAgICogdGhlIHBhcnQgb2YgdGhlIFVJIHRoYXQgdXBkYXRlcyB0aGUgVXNlciBvbiBtb3ZlcyBcbiAgICAgKiB0aGF0IGVpdGhlciB0aGV5IG9yIHRoZSBDb250cm9sbGVyIEFsZ29yaXRobSBoYXNcbiAgICAgKiBjb21wbGV0ZWQuIEFkZGl0aW9uYWxseSwgdGhlIGRpc3BsYXkgd2lsbCBzaG93IGFueVxuICAgICAqIGFsZXJ0cyB0aGF0IHNob3VsZCBjb21lIHRvIHRoZSBVc2VyJ3MgYXR0ZW50aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIERpc3BsYXkgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm1vZHVsZS5jbGFzc0xpc3QuYWRkKFwiY29udHJvbGxlci1kaXNwbGF5XCIpO1xuXG4gICAgICAgIC8vIEludGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuX3NhdmVfbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2FsZXJ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIENsZWFycyBhbGwgbWVzc2FnZXMgb24gdGhlIERpc3BsYXkuXG4gICAgICovXG4gICAgY2xlYXIgKCkgeyBcbiAgICAgICAgLy8gQ2xlYXIgTWVzc2FnZSBRdWV1ZSBhbmQgRGlzcGxheVxuICAgICAgICB0aGlzLl9tZXNzYWdlID0gXCJcIjtcbiAgICAgICAgdGhpcy5tb2R1bGUuaW5uZXJIVE1MID0gXCJcIjsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIHRoZSBpbmNvbWluZyBtZXNzYWdlLCB0aGlzIGZ1bmN0aW9uIHdpbGwgZGlzcGxheVxuICAgICAqIHRoZSBuZXcgbWVzc2FnZSBiZWxvdyBhbnkgY3VycmVudCBtZXNzYWdlcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnIE5ldyBNZXNzYWdlXG4gICAgICovXG4gICAgdXBkYXRlIChtc2cpIHtcbiAgICAgICAgLy8gVXBkYXRlIE5ldyBRdWV1ZSBvZiBNZXNzYWdlc1xuICAgICAgICBpZiAodGhpcy5fbWVzc2FnZSA9PT0gXCJcIilcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UgPSBtc2c7XG4gICAgICAgIC8vIFVwZGF0ZSBFeGlzdGluZyBRdWV1ZSBvZiBNZXNzYWdlc1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlICs9IFwiXFxuXCIgKyBtc2c7XG5cbiAgICAgICAgLy8gVXBkYXRlIERpc3BsYXlcbiAgICAgICAgdGhpcy5tb2R1bGUudGV4dENvbnRlbnQgPSB0aGlzLl9tZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsZXJ0IEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogRm9yIHRoZSBpbmNvbWluZyBhbGVydCBtZXNzYWdlLCB0aGlzIGZ1bmN0aW9uIHdpbGxcbiAgICAgKiBkaXNwbGF5IHRoZSBhbGVydCBiZWxvdyBhbnkgY3VycmVudCBtZXNzYWdlcywgYW5kXG4gICAgICogY2hhbmdlIHRoZSBkaXNwbGF5IHRvIGluZGljYXRlIHRoZXJlIGlzIGFuIGFsZXJ0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgQWxlcnQgTWVzc2FnZVxuICAgICAqL1xuICAgIGFsZXJ0IChtc2cpIHtcbiAgICAgICAgLy8gU2V0IEFsZXJ0IGFuZCBTdG9yZSBDdXJyZW50IFF1ZXVlXG4gICAgICAgIHRoaXMuX2FsZXJ0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zYXZlX21lc3NhZ2UgPSB0aGlzLl9tZXNzYWdlO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBEaXNwbGF5IGluZGljYXRpbmcgQWxlcnRcbiAgICAgICAgaWYgKCF0aGlzLm1vZHVsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhbGVydFwiKSlcbiAgICAgICAgICAgIHRoaXMubW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJhbGVydFwiKTtcblxuICAgICAgICAvLyBRdWV1ZSBBbGVydFxuICAgICAgICB0aGlzLnVwZGF0ZShtc2cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVhc2UgRnVuY3Rpb25cbiAgICAgKiBcbiAgICAgKiBJZiB0aGVyZSB3YXMgYW4gYWxlcnQsIHRoaXMgZnVuY3Rpb24gd2lsbCBjbGVhciBhbnlcbiAgICAgKiBhbGVydCBtZXNzYWdlcyBhbmQgcmV2ZXJ0IHRoZSBkaXNwbGF5IHRvIGEgcmVndWxhclxuICAgICAqIG9uZS5cbiAgICAgKi9cbiAgICBlYXNlICgpIHtcbiAgICAgICAgLy8gRWFzZSBEaXNwbGF5IGZyb20gQWxlcnQgdG8gUmVndWxhclxuICAgICAgICBpZiAodGhpcy5tb2R1bGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWxlcnRcIikpXG4gICAgICAgICAgICB0aGlzLm1vZHVsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWxlcnRcIik7XG5cbiAgICAgICAgLy8gQ2xlYXIgTWVzc2FnZSBRdWV1ZSBvZiBBbGVydFxuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gUmVzdW1lIE9yaWdpbmFsIE1lc3NhZ2UgUXVldWVcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IHRoaXMuX3NhdmVfbWVzc2FnZTtcbiAgICAgICAgdGhpcy5tb2R1bGUudGV4dENvbnRlbnQgPSB0aGlzLl9tZXNzYWdlO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmljQ29udHJvbHMge1xuICAgIC8qKlxuICAgICAqIEdlbmVyaWMgQ29udHJvbHMgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBVc2VkIGFzIGEgQmFzZSBDbGFzcywgdGhpcyBjbGFzcyB3aWxsIGdlbmVyYXRlIHRoZSBcbiAgICAgKiBET00gRWxlbWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250cm9sbGVycyB0aGF0IFxuICAgICAqIGluY2x1ZGUgdGhlIFVzZXIgc3RhcnQgYnV0dG9uLCBhbmQgdGhlIENvbnRyb2xsZXJcbiAgICAgKiBBbGdvcml0aG0gYnV0dG9uLCB3aGljaCBpcyByZXByZXNlbnRlZCBieSB0aGUgU2hvd1xuICAgICAqIEJ1dHRvbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBuYW1lcyBBcnJheSBvZiBTdHJpbmdzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggSW5pdGlhbCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBJbml0aWFsIFktQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib2FyZCBCb2FyZCBTaXplXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKG5hbWVzLCB4LCB5LCBib2FyZCkge1xuICAgICAgICAvLyBDcmVhdGUgTW9kdWxlIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMubW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5tb2R1bGUuY2xhc3NMaXN0LmFkZChgJHtuYW1lc1swXS50b0xvd2VyQ2FzZSgpfS0ke25hbWVzWzFdLnRvTG93ZXJDYXNlKCl9LWJ1dHRvbnNgKTtcblxuICAgICAgICAvLyBDcmVhdGUgVGl0bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7bmFtZXNbMF19ICR7bmFtZXNbMV19YDtcblxuICAgICAgICAvLyBDcmVhdGUgc3RhcnQgQnV0dG9uIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnN0YXJ0LmNsYXNzTGlzdC5hZGQoYHN0YXJ0LSR7bmFtZXNbMF0udG9Mb3dlckNhc2UoKX0tJHtuYW1lc1sxXS50b0xvd2VyQ2FzZSgpfS1idG5gKTtcbiAgICAgICAgdGhpcy5zdGFydC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IFN0YXJ0XCI7XG5cbiAgICAgICAgLy8gQ3JlYXRlIEluZm9ybWF0aW9uIEJ1dHRvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLmluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLmluZm8uY2xhc3NMaXN0LmFkZChgaW5mby0ke25hbWVzWzBdLnRvTG93ZXJDYXNlKCl9LSR7bmFtZXNbMV0udG9Mb3dlckNhc2UoKX0tYnRuYCk7XG4gICAgICAgIHRoaXMuaW5mby50ZXh0Q29udGVudCA9IFwiSW5mb1wiO1xuXG4gICAgICAgIC8vIENyZWF0ZSBVbmRvIEJ1dHRvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLnVuZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnVuZG8uY2xhc3NMaXN0LmFkZChgdW5kby0ke25hbWVzWzBdLnRvTG93ZXJDYXNlKCl9LSR7bmFtZXNbMV0udG9Mb3dlckNhc2UoKX0tYnRuYCk7XG4gICAgICAgIHRoaXMudW5kby50ZXh0Q29udGVudCA9IFwiVW5kb1wiO1xuXG4gICAgICAgIC8vIENyZWF0ZSBTaG93IEJ1dHRvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLnNob3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnNob3cuY2xhc3NMaXN0LmFkZChgc2hvdy0ke25hbWVzWzBdLnRvTG93ZXJDYXNlKCl9LSR7bmFtZXNbMV0udG9Mb3dlckNhc2UoKX0tYnRuYCk7XG4gICAgICAgIHRoaXMuc2hvdy50ZXh0Q29udGVudCA9IFwiU2hvd1wiO1xuXG4gICAgICAgIC8vIEFwcGVuZCBFbGVtZW50cyBpbnRvIE1vZHVsZVxuICAgICAgICB0aGlzLm1vZHVsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRoaXMubW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLm1vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLmluZm8pO1xuICAgICAgICB0aGlzLm1vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLnVuZG8pO1xuICAgICAgICB0aGlzLm1vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLnNob3cpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IGJvYXJkO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIGdldCBzdGFydCAoKSB7IHJldHVybiB0aGlzLl9zdGFydDsgfVxuXG4gICAgc2V0IHN0YXJ0IChlbGVtKSB7IHRoaXMuX3N0YXJ0ID0gZWxlbTsgfVxuXG4gICAgZ2V0IGluZm8gKCkgeyByZXR1cm4gdGhpcy5faW5mbzsgfVxuXG4gICAgc2V0IGluZm8gKGVsZW0pIHsgdGhpcy5faW5mbyA9IGVsZW07IH1cblxuICAgIGdldCB1bmRvICgpIHsgcmV0dXJuIHRoaXMuX3VuZG87IH1cblxuICAgIHNldCB1bmRvIChlbGVtKSB7IHRoaXMuX3VuZG8gPSBlbGVtOyB9XG5cbiAgICBnZXQgc2hvdyAoKSB7IHJldHVybiB0aGlzLl9zaG93OyB9XG5cbiAgICBzZXQgc2hvdyAoZWxlbSkgeyB0aGlzLl9zaG93ID0gZWxlbTsgfVxuXG4gICAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feDsgfVxuXG4gICAgc2V0IHggKHgpIHsgdGhpcy5feCA9IHg7IH1cblxuICAgIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3k7IH1cblxuICAgIHNldCB5ICh5KSB7IHRoaXMuX3kgPSB5OyB9XG5cbiAgICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplOyB9XG5cbiAgICBzZXQgc2l6ZSAoYm9hcmQpIHsgdGhpcy5fc2l6ZSA9IGJvYXJkOyB9XG59IiwiaW1wb3J0IEdyYXBoIGZyb20gXCIuLi9kYXRhLXN0cnVjdHVyZS9ncmFwaC5qc1wiO1xuaW1wb3J0IEdlbmVyaWNDb250cm9scyBmcm9tIFwiLi9nZW5lcmljLWNvbnRyb2xzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtuaWdodHNUb3VyQ29udHJvbHMgZXh0ZW5kcyBHZW5lcmljQ29udHJvbHMge1xuICAgIC8qKlxuICAgICAqIEtuaWdodCdzIFRvdXIgUHV6emxlIENvbnRyb2xzXG4gICAgICogXG4gICAgICogQ29udHJvbGxlciBDbGFzcyBmb3IgSW1wbGVtZW50aW5nIHRoZSBGYW1vdXMgcHJvYmxlbVxuICAgICAqIGtub3duIGFzIHRoZSBrbmlnaHQncyB0b3VyLiBBIGtuaWdodCdzIHRvdXIgaXMgYSBcbiAgICAgKiBzZXF1ZW5jZSBvZiBtb3ZlcyBvZiBhIGtuaWdodCBvbiBhIGNoZXNzYm9hcmQgc3VjaCBcbiAgICAgKiB0aGF0IHRoZSBrbmlnaHQgdmlzaXRzIGV2ZXJ5IHNxdWFyZSBleGFjdGx5IG9uY2UuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggSW5pdGlhbCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBJbml0aWFsIFktQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib2FyZCBCb2FyZCBTaXplXG4gICAgICogQGNhbGxiYWNrIHN0YXJ0Q2FsbGJhY2sgU3RhcnQgUHV6emxlIENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIGluZm9DYWxsYmFjayBEaXNwbGF5IFB1enpsZSBJbmZvIENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIHVuZG9DYWxsYmFjayBVbmRvIE1vdmUgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgc2hvd0NhbGxiYWNrIFNob3cgU29sdXRpb24gQ2FsbGJhY2tcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSwgYm9hcmQsIHN0YXJ0Q2FsbGJhY2ssIGluZm9DYWxsYmFjaywgdW5kb0NhbGxiYWNrLCBzaG93Q2FsbGJhY2spIHtcbiAgICAgICAgc3VwZXIoW1wiS25pZ2h0c1wiLCBcIlRvdXJcIl0sIHgsIHksIGJvYXJkLCBzdGFydENhbGxiYWNrLCBpbmZvQ2FsbGJhY2ssIHNob3dDYWxsYmFjayk7XG5cbiAgICAgICAgLy8gQWRkIFN0YXJ0IFB1enpsZSBFdmVudCBMaXN0ZW5lclxuICAgICAgICB0aGlzLnN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBzdGFydENhbGxiYWNrKDAsIDAsIHRydWUpOyB9KTtcblxuICAgICAgICAvLyBBZGQgRGlzcGxheSBQdXp6bGUgSW5mbyBFdmVudCBMaXN0ZW5lclxuICAgICAgICB0aGlzLmluZm8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpbmZvQ2FsbGJhY2soXG4gICAgICAgICAgICAgICAgYFRoZSBLbmlnaHQncyBUb3VyIVxcbkdpdmVuIHRoZSAke2JvYXJkfWAgK1xuICAgICAgICAgICAgICAgIGAgYnkgJHtib2FyZH0gYm9hcmQgd2l0aCB0aGUgS25pZ2h0IGAgK1xuICAgICAgICAgICAgICAgIGB3aGVyZXZlciB5b3UgcGxlYXNlLCBtb3ZlIHRoZSBLbmlnaHQgYCArXG4gICAgICAgICAgICAgICAgYGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgY2hlc3MsIHlvdSBgICtcbiAgICAgICAgICAgICAgICBgbXVzdCB2aXNpdCBlYWNoIHNxdWFyZSBleGFjdGx5IG9uY2UuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIFVuZG8gTW92ZSBFdmVudCBMaXN0ZW5lclxuICAgICAgICB0aGlzLnVuZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHVuZG9DYWxsYmFjaygpOyB9KTtcblxuICAgICAgICAvLyBBZGQgU2hvdyBTb2x1dGlvbiBFdmVudCBMaXN0ZW5lclxuICAgICAgICB0aGlzLnNob3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHNob3dDYWxsYmFjayh0cnVlKTsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FybnNkb3JmZiBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIFVzaW5nIFdhcm5kb3JmZidzIEFsZ29yaXRobSB0byBmaW5kIHRoZSBLbmlnaHQnc1xuICAgICAqIFRvdXIgZm9yIHRoZSBnaXZlbiBSb290IFRpbGUsIHRoaXMgYWxnb3JpdGhtIGNhbiBiZVxuICAgICAqIGJyb2tlbiBkb3duIGludG8gV2FybmRvcmZmJ3MgUnVsZTpcbiAgICAgKiAgMS4gV2UgY2FuIHN0YXJ0IGZyb20gYW55IGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIFxuICAgICAqICAgICBrbmlnaHQgb24gdGhlIGJvYXJkLlxuICAgICAqICAyLiBXZSBhbHdheXMgbW92ZSB0byBhbiBhZGphY2VudCwgdW52aXNpdGVkIHNxdWFyZVxuICAgICAqICAgICB3aXRoIG1pbmltYWwgZGVncmVlIChtaW5pbXVtIG51bWJlciBvZlxuICAgICAqICAgICB1bnZpc2l0ZWQgYWRqYWNlbnQpLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByeCBSb290IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByeSBSb290IFktQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7R3JhcGh9IGdyYXBoIEdyYXBoIG9mIEJvYXJkXG4gICAgICogQHJldHVybnMgVGhlIEtuaWdodCdzIFRvdXJcbiAgICAgKi9cbiAgICB3YXJuc2RvcmZmIChyeCwgcnksIGdyYXBoKSB7XG4gICAgICAgIC8vIEdldCBSb290IFZlcnRleFxuICAgICAgICBjb25zdCByb290ID0gZ3JhcGguZ2V0VmVydGV4KHJ4LCByeSk7XG5cbiAgICAgICAgLy8gU2V0IEFsbCBWZXJ0aWNlcyBNb3ZlIHRvIGJlIDBcbiAgICAgICAgZm9yIChsZXQgdiBvZiBncmFwaC52ZXJ0aWNlcygpKSB7XG4gICAgICAgICAgICB2Lm1vdmUgPSAwO1xuICAgICAgICAgICAgdi52aXNpdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgUm9vdCB0byBiZSAxc3QgTW92ZVxuICAgICAgICByb290Lm1vdmUgPSAxO1xuICAgICAgICByb290LnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICBsZXQgcGF0aCA9IFtyb290XTtcblxuICAgICAgICAvLyBTZXR1cCBWZXJ0ZXggdG8gQ3ljbGUgdGhyb3VnaCBWZXJ0aWNlc1xuICAgICAgICBsZXQgbGFzdCA9IHJvb3QubW92ZTtcbiAgICAgICAgbGV0IGF1eCA9IHJvb3Q7XG4gICAgICAgIHdoaWxlIChhdXgubW92ZSAhPT0gTWF0aC5wb3codGhpcy5zaXplLCAyKSkge1xuICAgICAgICAgICAgLy8gRmluZCBOZWlnaHRib3VyIHdpdGggRmV3ZXN0IE5laWdoYm91cnNcbiAgICAgICAgICAgIGxldCBtaW4gPSAxMDAwMDAwO1xuICAgICAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdXgubmVpZ2hib3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBOZWlnaGJvdXJcbiAgICAgICAgICAgICAgICBsZXQgbmVpZ2hib3VyID0gZ3JhcGguZ2V0VmVydGV4KGF1eC5uZWlnaGJvdXJzW2ldLngsIGF1eC5uZWlnaGJvdXJzW2ldLnkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ291bnQgTnVtYmVyIG9mIFVudmlzaXRlZCBOZWlnaGJvdXJzXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuIG9mIG5laWdoYm91ci5uZWlnaGJvdXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbi52aXNpdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gTGVhc3QgQWNjZXNzaWJsZSBOZWlnaGJvdXJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPCBtaW4gJiYgIW5laWdoYm91ci52aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNvdW50O1xuICAgICAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IExlYXN0IEFjY2Vzc2libGUgVmVydGV4IHRvIGJlIE5leHQgTW92ZVxuICAgICAgICAgICAgYXV4ID0gYXV4Lm5laWdoYm91cnNbaWR4XTtcbiAgICAgICAgICAgIGF1eC52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGF1eC5tb3ZlID0gbGFzdCArIDE7XG4gICAgICAgICAgICBsYXN0ID0gYXV4Lm1vdmU7XG4gICAgICAgICAgICBwYXRoLnB1c2goYXV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbn0iLCJpbXBvcnQgR3JhcGggZnJvbSBcIi4uL2RhdGEtc3RydWN0dXJlL2dyYXBoLmpzXCI7XG5pbXBvcnQgUXVldWUgZnJvbSBcIi4uL2RhdGEtc3RydWN0dXJlL3F1ZXVlLmpzXCI7XG5pbXBvcnQgR2VuZXJpY0NvbnRyb2xzIGZyb20gXCIuL2dlbmVyaWMtY29udHJvbHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcnRlc3RQYXRoQ29udHJvbHMgZXh0ZW5kcyBHZW5lcmljQ29udHJvbHMge1xuICAgIC8qKlxuICAgICAqIFNob3J0ZXN0IFBhdGggUHV6emxlIENvbnRyb2xzXG4gICAgICogXG4gICAgICogQ29udHJvbGxlciBDbGFzcyBmb3IgR2VuZXJhdGluZyB0aGUgUHV6emxlIHdoZXJlYnlcbiAgICAgKiB0aGUgVXNlciBvciBTZWFyY2ggQWxnb3JpdGhtIG11c3QgbW92ZSB0aGUgS25pZ2h0IHRvXG4gICAgICogaW4gdGhlIFNtYWxsZXN0IE51bWJlciBvZiBNb3Zlcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBJbml0aWFsIFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IEluaXRpYWwgWS1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvYXJkIEJvYXJkIFNpemVcbiAgICAgKiBAY2FsbGJhY2sgc3RhcnRDYWxsYmFjayBTdGFydCBQdXp6bGUgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgaW5mb0NhbGxiYWNrIERpc3BsYXkgUHV6emxlIEluZm8gQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgdW5kb0NhbGxiYWNrIFVuZG8gTW92ZSBDYWxsYmFja1xuICAgICAqIEBjYWxsYmFjayBzaG93Q2FsbGJhY2sgU2hvdyBTb2x1dGlvbiBDYWxsYmFja1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5LCBib2FyZCwgc3RhcnRDYWxsYmFjaywgaW5mb0NhbGxiYWNrLCB1bmRvQ2FsbGJhY2ssIHNob3dDYWxsYmFjaykge1xuICAgICAgICBzdXBlcihbXCJTaG9ydGVzdFwiLCBcIlBhdGhcIl0sIHgsIHksIGJvYXJkKTtcblxuICAgICAgICAvLyBBZGQgU3RhcnQgUHV6emxlIEV2ZW50IExpc3RlbmVyXG4gICAgICAgIHRoaXMuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBQdXp6bGVcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2VuZXJhdGUoKTtcbiAgICAgICAgICAgIHN0YXJ0Q2FsbGJhY2socG9zLngsIHBvcy55KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIERpc3BsYXkgUHV6emxlIEluZm8gRXZlbnQgTGlzdGVuZXJcbiAgICAgICAgdGhpcy5pbmZvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gRGlzcGxheSBQdXp6bGUgSW5mb3JtYXRpb25cbiAgICAgICAgICAgIGluZm9DYWxsYmFjayhcbiAgICAgICAgICAgICAgICBcIlVzZSB0aGUgU2VsZWN0IFN0YXJ0IEJ1dHRvbiB0byBjaG9vc2UgeW91ciBcIiArXG4gICAgICAgICAgICAgICAgXCJpbml0aWFsIFRpbGUuIE9uY2Ugc2VsZWN0ZWQsIGEgR29hbCB0aWxlIHdpbGxcIiArXG4gICAgICAgICAgICAgICAgXCIgYmVjb21lIGhpZ2hsaWdodGVkLCBhbmQgeW91IGhhdmUgdG8gdHJ5IHRvIHJlYWNoXCIgK1xuICAgICAgICAgICAgICAgIFwiIHRoYXQgdGlsZSBpbiBhcyBmZXcgbW92ZXMgYXMgcG9zc2libGUuXFxuQnkgY2xpY2tpbmdcIiArXG4gICAgICAgICAgICAgICAgXCIgdGhlIFNob3cgYnV0dG9uLCB0aGUga25pZ2h0IHdpbGwgYXV0b21hdGljYWxseSBtb3ZlXCIgK1xuICAgICAgICAgICAgICAgIFwiIHRvIHRoZSBHb2FsIHRpbGUgaW4gdGhlIGZld2VzdCBwb3NzaWJsZSBtb3Zlcy5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIFVuZG8gTW92ZSBFdmVudCBMaXN0ZW5lclxuICAgICAgICB0aGlzLnVuZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHVuZG9DYWxsYmFjaygpOyB9KTtcblxuICAgICAgICAvLyBBZGQgU2hvdyBTb2x1dGlvbiBFdmVudCBMaXN0ZW5lclxuICAgICAgICB0aGlzLnNob3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHNob3dDYWxsYmFjaygpOyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIENyZWF0ZXMgYSBDb29yZGluYXRlIG9mIGEgUmFuZG9tIFRpbGUgdGhhdCBpcyBub3RcbiAgICAgKiB0aGUgQ3VycmVudCBQb3NpdGlvbiBvbiB0aGUgQ2hlc3Nib2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBSYW5kb20gTG9jYXRpb24gb24gdGhlIENoZXNzYm9hcmRcbiAgICAgKi9cbiAgICBnZW5lcmF0ZSAoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgUG9zaXRpb24gVmFyaWFibGVcbiAgICAgICAgbGV0IHBvcyA9IHt4OiAwLCB5OiAwfTtcblxuICAgICAgICAvLyBFbnN1cmUgUG9zaXRpb24gaXMgbm90IHRoZSBJbml0aWFsIFBvc2l0aW9uXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIFJhbmRvbSBOdW1iZXIgZm9yIGVhY2ggQ29vcmRpbmF0ZVxuICAgICAgICAgICAgT2JqZWN0LmtleXMocG9zKS5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgICAgICBwb3NbY29vcmRdID0gdGhpcy4jcmFuZG9tKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVqZWN0IFBvc2l0aW9ucyB0aGF0IGFyZSBJbml0aWFsIFBvc2l0aW9uXG4gICAgICAgICAgICBpZiAocG9zLnggIT09IHRoaXMueCAmJiBwb3MueSAhPT0gdGhpcy55KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBvcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCcmVhZHRoIEZpcnN0IFNlYXJjaCBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIE1vZGlmaWVkIFZlcnNpb24gb2YgdGhlIEJyZWFkdGggRmlyc3QgU2VhcmNoXG4gICAgICogQWxnb3JpdGhtLCBzdGFydGluZyBmcm9tIHRoZSBSb290IFZlcnRleCwgdGhlIEJGU1xuICAgICAqIEFsZ29yaXRobSB2aXNpdHMgYWxsIHN1YnNlcXVlbnQgdW52aXNpdGVkIFZlcnRpY2VzLFxuICAgICAqIHVudGlsIHRoZSBHb2FsIFZlcnRleCBpcyBmb3VuZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcnggUm9vdCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcnkgUm9vdCBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZ3ggR29hbCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZ3kgR29hbCBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge0dyYXBofSBncmFwaCBHcmFwaCBvZiBCb2FyZFxuICAgICAqIEByZXR1cm5zIFNob3J0ZXN0IFBhdGggZnJvbSBSb290IHRvIEdvYWxcbiAgICAgKi9cbiAgICBiZnMgKHJ4LCByeSwgZ3gsIGd5LCBncmFwaCkge1xuICAgICAgICAvLyBHZXQgUm9vdCBhbmQgR29hbCBWZXJ0aWNlc1xuICAgICAgICBjb25zdCByb290ID0gZ3JhcGguZ2V0VmVydGV4KHJ4LCByeSk7XG4gICAgICAgIGNvbnN0IGdvYWwgPSBncmFwaC5nZXRWZXJ0ZXgoZ3gsIGd5KTtcblxuICAgICAgICAvLyBTZXQgQWxsIFZlcnRpY2VzIHRvIGJlIFVudmlzaXRlZFxuICAgICAgICBmb3IgKGxldCB2IG9mIGdyYXBoLnZlcnRpY2VzKCkpXG4gICAgICAgICAgICB2LnZpc2l0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTZXQgUm9vdCB0byBiZSBWaXNpdGVkXG4gICAgICAgIHJvb3QudmlzaXRlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gU2V0dXAgUGFyZW50IEFycmF5IGFuZCBRdWV1ZVxuICAgICAgICBsZXQgcGFyZW50cyA9IFtdO1xuICAgICAgICBjb25zdCBxdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuICAgICAgICBxdWV1ZS5lbnF1ZXVlKHJvb3QpO1xuXG4gICAgICAgIC8vIEhhbmRsZSBOZWlnaGJvdXIgVmVydGljZXNcbiAgICAgICAgd2hpbGUgKCFxdWV1ZS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXggPSBxdWV1ZS5kZXF1ZXVlKCk7XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIG91dCBvZiBMb29wIGlmIEdvYWwgaXMgRm91bmRcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXguc2FtZVZlcnRleChnb2FsKSlcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGVucXVldWUgTmVpZ2hib3VycyBvZiBOZWlnaGJvdXJcbiAgICAgICAgICAgIHZlcnRleC5uZWlnaGJvdXJzLmZvckVhY2gobmVpZ2hib3VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW5laWdoYm91ci52aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91ci52aXNpdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBQdXNoIFBhcmVudCBpbnRvIEFycmF5XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCh7dmVydGV4OiBuZWlnaGJvdXIsIHBhcmVudDogdmVydGV4fSk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLmVucXVldWUobmVpZ2hib3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZW5lcmF0ZSBTaG9ydGVzdCBQYXRoXG4gICAgICAgIGxldCBwYXRoID0gW107XG4gICAgICAgIHBhdGgucHVzaChnb2FsKTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBnb2FsO1xuXG4gICAgICAgIC8vIEdldCBQcmV2aW91cyBWZXJ0aWNlc1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgLy8gU2VhcmNoIFBhcmVudHMgZm9yIFByZXZpb3VzIFZlcnRpY2VzXG4gICAgICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50c1tpXS52ZXJ0ZXguc2FtZVZlcnRleChjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBQYXJlbnQgdG8gUGF0aFxuICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHNbaWR4XS5wYXJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIG91dCBpZiBSb290IEZvdW5kXG4gICAgICAgICAgICBpZiAoY3VycmVudC5zYW1lVmVydGV4KHJvb3QpKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIHRvIFBhdGhcbiAgICAgICAgICAgIHBhdGgucHVzaChjdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbSBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIEdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCB0aGUgc2l6ZSBvZiBcbiAgICAgKiB0aGUgQ2hlc3Nib2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBSYW5kb20gTnVtYmVyIGJldHdlZW4gMCBhbmQgQm9hcmQgU2l6ZVxuICAgICAqL1xuICAgICNyYW5kb20gKCkgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5zaXplKTsgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==