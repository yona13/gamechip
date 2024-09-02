"use strict";
(self["webpackChunkgamechip"] = self["webpackChunkgamechip"] || []).push([["tictactoe"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pop-up-module/pop-up-styling.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pop-up-module/pop-up-styling.css ***!
  \************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.info-components {
    font-family: "Dogica";
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 3rem;
}

.info-components > div { border-bottom: 2px solid var(--black); }

.menu-container,
.select-container,
.information-container { font-family: "Dogica"; }

.menu-box,
.select-box,
.information-box {
    background-color: var(--screen);
    justify-content: flex-start;
    align-items: start;
}

.information-box {
    white-space: pre-wrap;
    overflow-x: hidden;
    overflow-y: hidden;
}

/* .info-message { font-size: 0.4rem; } */

.menu-title,
.select-description,
.information-title,
.error-title { font-family: "Dogica Bold"; }

.menu-box > div,
.select-box > div,
.information-box > div { text-align: start; }

.menu-box > div.cursor,
.select-box > div.cursor {
    animation: fade 1.5s infinite;
    animation-fill-mode: both;
}

.error-container {
    position: relative;
}

.error-box,
.select-box,
.information-box,
.menu-box {
    position: absolute;
    z-index: 4;
    border: 3px var(--text-colour) solid;
    color: var(--text-colour);
    text-align: center;
    display: flex;
    flex-direction: column;
}

.error-box {
    font-family: "Dogica Bold";
    justify-content: center;
    align-items: center;
    background-color: var(--error-screen);
}

.blurred-background {
    z-index: 3;
    background-color: var(--black);
    opacity: 0.7;
}`, "",{"version":3,"sources":["webpack://./src/pop-up-module/pop-up-styling.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA,yBAAyB,qCAAqC,EAAE;;AAEhE;;yBAEyB,qBAAqB,EAAE;;AAEhD;;;IAGI,+BAA+B;IAC/B,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA,yCAAyC;;AAEzC;;;eAGe,0BAA0B,EAAE;;AAE3C;;yBAEyB,iBAAiB,EAAE;;AAE5C;;IAEI,6BAA6B;IAC7B,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;;IAII,kBAAkB;IAClB,UAAU;IACV,oCAAoC;IACpC,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;IAC1B,uBAAuB;IACvB,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,8BAA8B;IAC9B,YAAY;AAChB","sourcesContent":[".info-components {\n    font-family: \"Dogica\";\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    gap: 3rem;\n}\n\n.info-components > div { border-bottom: 2px solid var(--black); }\n\n.menu-container,\n.select-container,\n.information-container { font-family: \"Dogica\"; }\n\n.menu-box,\n.select-box,\n.information-box {\n    background-color: var(--screen);\n    justify-content: flex-start;\n    align-items: start;\n}\n\n.information-box {\n    white-space: pre-wrap;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n/* .info-message { font-size: 0.4rem; } */\n\n.menu-title,\n.select-description,\n.information-title,\n.error-title { font-family: \"Dogica Bold\"; }\n\n.menu-box > div,\n.select-box > div,\n.information-box > div { text-align: start; }\n\n.menu-box > div.cursor,\n.select-box > div.cursor {\n    animation: fade 1.5s infinite;\n    animation-fill-mode: both;\n}\n\n.error-container {\n    position: relative;\n}\n\n.error-box,\n.select-box,\n.information-box,\n.menu-box {\n    position: absolute;\n    z-index: 4;\n    border: 3px var(--text-colour) solid;\n    color: var(--text-colour);\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.error-box {\n    font-family: \"Dogica Bold\";\n    justify-content: center;\n    align-items: center;\n    background-color: var(--error-screen);\n}\n\n.blurred-background {\n    z-index: 3;\n    background-color: var(--black);\n    opacity: 0.7;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/tic-tac-toe-module/game-styling.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/tic-tac-toe-module/game-styling.css ***!
  \***************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/MeromSans-Regular.ttf */ "./src/fonts/MeromSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/dogica.ttf */ "./src/fonts/dogica.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Gothica-Book.ttf */ "./src/fonts/Gothica-Book.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/AlexBrush-Regular-OTF.otf */ "./src/fonts/AlexBrush-Regular-OTF.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/freemetto.ttf */ "./src/fonts/freemetto.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rich Eatin'.otf */ "./src/fonts/Rich Eatin'.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Beon-Regular.otf */ "./src/fonts/Beon-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Merom Sans";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: "Dogica";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: "Gothica";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
    font-family: "Alex Brush";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___})
}

@font-face {
    font-family: "Free Metto";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

@font-face {
    font-family: "Rich Eatin";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

@font-face {
    font-family: "Beon";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}

:root {
    --white: #fdfffc;
    --black: #020100;
}

:root.normal {
    --font: "Merom Sans";
    --marker-font: "Free Metto";
    --white: #ffecd1;
    --black: #001524;
    --screen: #15616d;
    --error-screen: #78290f;
    --border-colour: #ff7d00;
    --cursor: #36bce1;
    --text-colour: #001524;
    --bottom-border: #ff7d00;
}

:root.retro {
    --font: "Dogica";
    --marker-font: "Dogica";
    --white: #aaaaaa;
    --black: #0f380f;
    --screen: #9bbc0f;
    --error-screen: #f69493;
    --border-colour: #b5af42;
    --cursor: #8bac0f;
    --text-colour: #0f380f;
    --bottom-border: #b5af42;
}

:root.neon {
    --font: "Beon";
    --marker-font: "Beon";
    --white: #ea00d9;
    --black: #133e7c;
    --screen: #091833;
    --error-screen: #f23ca6;
    --border-colour: #711c91;
    --cursor: #0abdc6;
    --text-colour: #fbff36;
    --bottom-border: #711c91;
}

:root.terminal {
    --font: "Dogica";
    --marker-font: "Dogica";
    --white: black;
    --black: black;
    --screen: black;
    --error-screen: red;
    --border-colour: green;
    --cursor: black;
    --text-colour: green;
    --bottom-border: black;
}

:root.fancy {
    --font: "Gothica";
    --marker-font: "Alex Brush";
    --white: #efefe9;
    --black: #223030;
    --screen: #e8d9cd;
    --error-screen: #d7504d;
    --border-colour: #523d35;
    --cursor: #bba584;
    --text-colour: #223030;
    --bottom-border: #523d35;
}

:root.scruffy {
    --font: "Rich Eatin";
    --marker-font: "Rich Eatin";
    --white: #f7f7f7;
    --black: #170f11;
    --screen: #21c5b0;
    --error-screen: #7a0a0a;
    --border-colour: #dfcc16;
    --cursor: #12a365;
    --text-colour: #170f11;
    --bottom-border: #dfcc16;
}

.tic-tac-toe-game-module {
    position: absolute;
    color: var(--text-colour);
    background-color: var(--screen);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.scorecard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    background-color: var(--cursor);
    border: 3px solid var(--border-colour);
}

.scorecard > [class*="-scorecard"] {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.information-container { font-size: 1.5rem; }

.info-message { font-size: 1rem; }


@keyframes blink {
    0% { 
        opacity: 0; 
        border-bottom: 2px solid var(--border-colour);
    }
    50% { 
        opacity: 1;
        border-bottom: 2px solid var(--bottom-border);
    }
    100% { 
        opacity: 0;
        border-bottom: 2px solid var(--border-colour);
    }
}`, "",{"version":3,"sources":["webpack://./src/tic-tac-toe-module/game-styling.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAA0C;AAC9C;;AAEA;IACI,qBAAqB;IACrB,4CAA+B;AACnC;;AAEA;IACI,sBAAsB;IACtB,4CAAqC;AACzC;;AAEA;IACI,yBAAyB;IACzB;AACJ;;AAEA;IACI,yBAAyB;IACzB,4CAAkC;AACtC;;AAEA;IACI,yBAAyB;IACzB,4CAAsC;AAC1C;;AAEA;IACI,mBAAmB;IACnB,4CAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,2BAA2B;IAC3B,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,cAAc;IACd,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,2BAA2B;IAC3B,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,+BAA+B;IAC/B,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA,yBAAyB,iBAAiB,EAAE;;AAE5C,gBAAgB,eAAe,EAAE;;;AAGjC;IACI;QACI,UAAU;QACV,6CAA6C;IACjD;IACA;QACI,UAAU;QACV,6CAA6C;IACjD;IACA;QACI,UAAU;QACV,6CAA6C;IACjD;AACJ","sourcesContent":["@font-face {\n    font-family: \"Merom Sans\";\n    src: url(\"../fonts/MeromSans-Regular.ttf\");\n}\n\n@font-face {\n    font-family: \"Dogica\";\n    src: url(\"../fonts/dogica.ttf\");\n}\n\n@font-face {\n    font-family: \"Gothica\";\n    src: url(\"../fonts/Gothica-Book.ttf\");\n}\n\n@font-face {\n    font-family: \"Alex Brush\";\n    src: url(\"../fonts/AlexBrush-Regular-OTF.otf\")\n}\n\n@font-face {\n    font-family: \"Free Metto\";\n    src: url(\"../fonts/freemetto.ttf\");\n}\n\n@font-face {\n    font-family: \"Rich Eatin\";\n    src: url(\"../fonts/Rich\\ Eatin\\'.otf\");\n}\n\n@font-face {\n    font-family: \"Beon\";\n    src: url(\"../fonts/Beon-Regular.otf\");\n}\n\n:root {\n    --white: #fdfffc;\n    --black: #020100;\n}\n\n:root.normal {\n    --font: \"Merom Sans\";\n    --marker-font: \"Free Metto\";\n    --white: #ffecd1;\n    --black: #001524;\n    --screen: #15616d;\n    --error-screen: #78290f;\n    --border-colour: #ff7d00;\n    --cursor: #36bce1;\n    --text-colour: #001524;\n    --bottom-border: #ff7d00;\n}\n\n:root.retro {\n    --font: \"Dogica\";\n    --marker-font: \"Dogica\";\n    --white: #aaaaaa;\n    --black: #0f380f;\n    --screen: #9bbc0f;\n    --error-screen: #f69493;\n    --border-colour: #b5af42;\n    --cursor: #8bac0f;\n    --text-colour: #0f380f;\n    --bottom-border: #b5af42;\n}\n\n:root.neon {\n    --font: \"Beon\";\n    --marker-font: \"Beon\";\n    --white: #ea00d9;\n    --black: #133e7c;\n    --screen: #091833;\n    --error-screen: #f23ca6;\n    --border-colour: #711c91;\n    --cursor: #0abdc6;\n    --text-colour: #fbff36;\n    --bottom-border: #711c91;\n}\n\n:root.terminal {\n    --font: \"Dogica\";\n    --marker-font: \"Dogica\";\n    --white: black;\n    --black: black;\n    --screen: black;\n    --error-screen: red;\n    --border-colour: green;\n    --cursor: black;\n    --text-colour: green;\n    --bottom-border: black;\n}\n\n:root.fancy {\n    --font: \"Gothica\";\n    --marker-font: \"Alex Brush\";\n    --white: #efefe9;\n    --black: #223030;\n    --screen: #e8d9cd;\n    --error-screen: #d7504d;\n    --border-colour: #523d35;\n    --cursor: #bba584;\n    --text-colour: #223030;\n    --bottom-border: #523d35;\n}\n\n:root.scruffy {\n    --font: \"Rich Eatin\";\n    --marker-font: \"Rich Eatin\";\n    --white: #f7f7f7;\n    --black: #170f11;\n    --screen: #21c5b0;\n    --error-screen: #7a0a0a;\n    --border-colour: #dfcc16;\n    --cursor: #12a365;\n    --text-colour: #170f11;\n    --bottom-border: #dfcc16;\n}\n\n.tic-tac-toe-game-module {\n    position: absolute;\n    color: var(--text-colour);\n    background-color: var(--screen);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.scorecard {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n    background-color: var(--cursor);\n    border: 3px solid var(--border-colour);\n}\n\n.scorecard > [class*=\"-scorecard\"] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.information-container { font-size: 1.5rem; }\n\n.info-message { font-size: 1rem; }\n\n\n@keyframes blink {\n    0% { \n        opacity: 0; \n        border-bottom: 2px solid var(--border-colour);\n    }\n    50% { \n        opacity: 1;\n        border-bottom: 2px solid var(--bottom-border);\n    }\n    100% { \n        opacity: 0;\n        border-bottom: 2px solid var(--border-colour);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/tic-tac-toe-module/grid-module/grid-styling.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/tic-tac-toe-module/grid-module/grid-styling.css ***!
  \***************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tic-tac-toe-grid {
    font-family: var(--font);
    display: grid;
}

.cell {
    position: relative;
    background-color: var(--white);
    border: 2px solid var(--border-colour);
    color: var(--text-colour);
}

.cell > div { 
    font-family: var(--marker-font);
    text-align: center;
}

#cursor-cell {
    background-color: var(--cursor);
    position: absolute;
    top: 0;
    left: 0;
    animation: blink 1.5s infinite;
    animation-fill-mode: both;
}`, "",{"version":3,"sources":["webpack://./src/tic-tac-toe-module/grid-module/grid-styling.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,sCAAsC;IACtC,yBAAyB;AAC7B;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,8BAA8B;IAC9B,yBAAyB;AAC7B","sourcesContent":[".tic-tac-toe-grid {\n    font-family: var(--font);\n    display: grid;\n}\n\n.cell {\n    position: relative;\n    background-color: var(--white);\n    border: 2px solid var(--border-colour);\n    color: var(--text-colour);\n}\n\n.cell > div { \n    font-family: var(--marker-font);\n    text-align: center;\n}\n\n#cursor-cell {\n    background-color: var(--cursor);\n    position: absolute;\n    top: 0;\n    left: 0;\n    animation: blink 1.5s infinite;\n    animation-fill-mode: both;\n}"],"sourceRoot":""}]);
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

/***/ "./src/pop-up-module/pop-up-styling.css":
/*!**********************************************!*\
  !*** ./src/pop-up-module/pop-up-styling.css ***!
  \**********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pop_up_styling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pop-up-styling.css */ "./node_modules/css-loader/dist/cjs.js!./src/pop-up-module/pop-up-styling.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pop_up_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pop_up_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pop_up_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pop_up_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/tic-tac-toe-module/game-styling.css":
/*!*************************************************!*\
  !*** ./src/tic-tac-toe-module/game-styling.css ***!
  \*************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./game-styling.css */ "./node_modules/css-loader/dist/cjs.js!./src/tic-tac-toe-module/game-styling.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/tic-tac-toe-module/grid-module/grid-styling.css":
/*!*************************************************************!*\
  !*** ./src/tic-tac-toe-module/grid-module/grid-styling.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_grid_styling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./grid-styling.css */ "./node_modules/css-loader/dist/cjs.js!./src/tic-tac-toe-module/grid-module/grid-styling.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_grid_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_grid_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_grid_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_grid_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/game-chip-module/game-interface.js":
/*!************************************************!*\
  !*** ./src/game-chip-module/game-interface.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameInterface)
/* harmony export */ });
class GameInterface {
    /**
     * Game Interface Class
     * 
     * Base Game Class that should be Inherited by Other Games to be Played on 
     * the GameChip.
     * 
     * @param {string} title Name of the Game
     */
    constructor (title) { this._title = title; }

    get title () { return this._title; }

    set title (str) { this._title; }

    /**
     * Set Show Method
     * 
     * Set the Show Callback Method for Updating the GameChip Display
     * 
     * @callback showCallback Show Callback
     * @callback takeDownCallback Take Down Callback
     * @callback dimensionsCallback Get Dimensions Callback
     */
    setScene (showCallback, takeDownCallback, getDimensions) {}

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () {}

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () {}

    /**
     * Down Callback Method
     * 
     * Handles the Click of the Down Button on the Direction Pad.
     */
    downCallback () {}

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () {}

    /**
     * A Callback Method
     * 
     * Handles the Click of the A Action Button.
     */
    aCallback () {}

    /**
     * B Callback Method
     * 
     * Handles the Click of the B Action Button.
     */
    bCallback () {}

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () {}

    /**
     * Select Callback Method
     * 
     * Handles the Click of the Select User Button.
     */
    selectCallback () {}
}

/***/ }),

/***/ "./src/pop-up-module/error-box.js":
/*!****************************************!*\
  !*** ./src/pop-up-module/error-box.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorBox)
/* harmony export */ });
/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up.js */ "./src/pop-up-module/pop-up.js");


class ErrorBox extends _pop_up_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Error Box Class
     * 
     * Used for updating the User with the current error.
     */
    constructor () {
        super("Error");

        // Build Message DOM Element
        this._message = document.createElement("div");
        this._message.classList.add("error-message");
        this._box.appendChild(this._message);

        // Set Active to be False
        this._active = false;
    }

    get message () { return this._message; }

    set message (elem) { this._message = elem; }

    get active () { return this._active; }

    set active (bool) { this._active = bool; }

    /**
     * Set Message Method
     * 
     * Update the Error Box with the most up to date error.
     * 
     * @param {string} txt Error Message
     */
    setMessage (txt) { 
        this._message.textContent = txt; 
        this._active = true;
    }
}

/***/ }),

/***/ "./src/pop-up-module/info-box.js":
/*!***************************************!*\
  !*** ./src/pop-up-module/info-box.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoBox)
/* harmony export */ });
/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up.js */ "./src/pop-up-module/pop-up.js");


class InfoBox extends _pop_up_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Information Box Class
     * 
     * Used for updating the User with Information relating to the current Game 
     * being played.
     */
    constructor () {
        super("Information");

        // Build Message DOM Element
        this._message = document.createElement("div");
        this._message.classList.add("info-message");
        this._box.appendChild(this._message);

        // Set Active to be False
        this._active = false;
    }

    get message () { return this._message; }

    set message (elem) { this._message = elem; }

    get active () { return this._active; }

    set active (bool) { this._active = bool; }

    /**
     * Set Dimensions Method
     * 
     * For the Components of the Pop-Up Box, the width and height are to be set.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimensions (width, height) {
        // Set Container Dimensions
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`

        // Set Blurred Backgound Dimensions
        this._blurred.style.width = `${width}px`;
        this._blurred.style.height = `${height}px`;

        // Set Pop-Up Box Dimensions
        const boxW = Math.floor(width * 0.9);
        const boxH = Math.floor(height * 0.9);
        this._box.style.width = `${boxW}px`;
        this._box.style.height = `${boxH}px`;

        // Set Pop-Up Box Position
        const left = Math.floor(width * 0.1);
        const top = Math.floor(height * 0.1);
        this._box.style.left = `${left}px`;
        this._box.style.top = `${top}px`;

        // Set Message Font Size
        const fontSize = Math.floor(Math.min(width, height) * 0.04);
        this._message.style.fontSize = `${fontSize}px`;
    }

    /**
     * Set Title Method
     * 
     * Update the Title of the Information Box.
     * 
     * @param {string} txt New Title
     */
    setTitle (txt) { this._title.textContent = txt; }

    /**
     * Set Message Method
     * 
     * Update the Information Box with the necessary information related to the 
     * game being played.
     * 
     * @param {string} txt Information Message
     */
    setMessage (txt) { 
        this._message.textContent = txt; 
        this._active = true;
    }
}

/***/ }),

/***/ "./src/pop-up-module/menu-base.js":
/*!****************************************!*\
  !*** ./src/pop-up-module/menu-base.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuBase)
/* harmony export */ });
/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up.js */ "./src/pop-up-module/pop-up.js");


class MenuBase extends _pop_up_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Menu Base Class
     * 
     * Base Class for Main Menus or Sub-Menus.
     * 
     * @param {Object} categories Categories for Menu
     */
    constructor (categories) {
        super("Menu");

        // Build Option DOM Elements
        this._options = [];
        categories.subs.forEach(sub => {
            const option = document.createElement("div");
            option.id = `${sub.key.toLowerCase()}-option`;
            option.textContent = sub.key;
            this._box.appendChild(option);
            this._options.push(option);
        });

        // Build Return Option DOM Element
        this._return = document.createElement("div");
        this._return.classList.add("return-option");
        this._return.textContent = "Return";
        this._box.appendChild(this._return);

        // Setup Cursor
        this._current = 0;
        this.setCursor();

        // Initialise Variables
        this._name = categories.key;
        this._selected = {
            key: this._name,
            value: ""
        };
    }

    get options () { return this._options; }

    set options (arr) { this._options = arr; }

    get return () { return this._return; }

    set return (elem) { this._return = elem; }

    get name () { return this._name; }

    set name (str) { this._name = str; }

    get selected () { return this._selected; }

    set selected (dict) { this._selected = dict; }

    /**
     * Set Dimensions Method
     * 
     * For the Components of the Menu Box, the width and height are to be set.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimensions (width, height) {
        super.setDimensions(width, height);

        // Set Options Width
        const boxW = Math.floor(width * 0.6);
        this._options.forEach(option => { option.style.width = `${boxW}px`; });
        this._return.style.width = `${boxW}px`;
    }

    /**
     * Set Cursor Method
     * 
     * While cycling through the Menu Options, if the cursor is on an option, 
     * then the option should be highlighted.
     * 
     * @param {boolean} on Cursor on Option
     */
    setCursor (on=true) {
        // Handle Return Option
        if (this._current === this._options.length) {
            const check = this._return.classList.contains("cursor");
            if (on && !check)
                this._return.classList.add("cursor");
            if (!on && check)
                this._return.classList.remove("cursor");
        } 
        // Handle Other Options
        else {
            const check = this._options[this._current].classList.contains("cursor");
            if (on && !check)
                this._options[this._current].classList.add("cursor");
            if (!on && check)
                this._options[this._current].classList.remove("cursor");
        }
    }

    /**
     * Vertical Move Method
     * 
     * Moving the Cursor Up or Down on the Menu.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) {
        const curr = this._current + (up ? -1 : 1);
        if (curr <= this._options.length && curr >= 0) {
            this.setCursor(false);
            this._current = curr;
            this.setCursor();
        }
    }

    /**
     * Accept Action Method
     * 
     * Chooses the Option on the Menu that the User has selected, returning true 
     * implies that an option was selected, false implies that the return option 
     * was selected.
     * 
     * @returns True for an Option, False for Return
     */
    acceptAction () {
        // Handle Return Select
        if (this._current === this._options.length) {
            this._selected.value = "";
            return false;
        }

        // Handle Options Select
        this._selected.value = this._options[this._current].textContent;
        return true;
    }
}

/***/ }),

/***/ "./src/pop-up-module/menu.js":
/*!***********************************!*\
  !*** ./src/pop-up-module/menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _menu_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-base.js */ "./src/pop-up-module/menu-base.js");


class Menu extends _menu_base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Menu Class
     * 
     * For the given Categories for the Menu, a display will be presented to 
     * the User for them to Select.
     * 
     * @param {Object} categories JSON Object of Menu Categories
     */
    constructor (categories) {
        super(categories);

        // Build Sub-Menus
        this._subs = [];
        categories.subs.forEach(sub => {
            // Only Create Sub-Menu if Necessary
            if (sub.subs.length > 0)
                this._subs.push({
                    key: sub.key,
                    controller: false,
                    menu: new Menu(sub)
                });
        });

        // Initialise Variable
        this._controller = false;
    }

    get subs () { return this._subs; }

    set subs (arr) { this._subs = arr; }

    get controller () { return this._controller; }

    set controller (bool) { this._controller = bool; }

    /**
     * Set Dimensions Method
     * 
     * For the Components of the Menu Box, the width and height are to be set. 
     * Additionally, the width and height of the Sub-Menu Components are to be 
     * set.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimensions (width, height) {
        // Handle Menu Dimensions
        super.setDimensions(width, height);

        // Handle Sub-Menu Dimensions
        this._subs.forEach(sub => { sub.menu.setDimensions(width, height); });
    }
    
    /**
     * Set Sub-Menu Method
     * 
     * Sets the Sub-Menu Selected by the User to be on Display.
     * 
     * @returns Sub-Menu DOM Element
     */
    setSubMenu () {
        this._subs[this._current].controller = true;
        return this._subs[this._current].menu;
    }

    /**
     * Reset Sub-Menus Method
     * 
     * Sets the Main Menu to be on Display.
     */
    resetSubMenus () { this._subs.forEach(sub => { sub.controller = false; }); }
}

/***/ }),

/***/ "./src/pop-up-module/pop-up.js":
/*!*************************************!*\
  !*** ./src/pop-up-module/pop-up.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopUp)
/* harmony export */ });
/* harmony import */ var _pop_up_styling_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up-styling.css */ "./src/pop-up-module/pop-up-styling.css");


class PopUp {
    /**
     * Pop-Up Class
     * 
     * Several Components to the Game require a Pop-Up Box, and this Class 
     * Represents that Box.
     * 
     * @param {string} name Name for Pop-Up
     */
    constructor (name) {
        // Build Pop-Up Container DOM Element
        this._module = document.createElement("div");
        this._module.classList.add(`${name.toLowerCase()}-container`);
        
        // Build Pop-Up Box DOM Element
        this._box = document.createElement("div");
        this._box.classList.add(`${name.toLowerCase()}-box`);

        // Build Title DOM Element
        this._title = document.createElement("div");
        this._title.classList.add(`${name.toLowerCase()}-title`);
        this._title.textContent = name;
        this._box.appendChild(this._title);

        // Build Blurred Background DOM Element
        this._blurred = document.createElement("div");
        this._blurred.classList.add("blurred-background");

        // Append Components to Module
        this._module.appendChild(this._blurred);
        this._module.appendChild(this._box);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Set Dimensions Method
     * 
     * For the Components of the Pop-Up Box, the width and height are to be set.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimensions (width, height) {
        // Set Container Dimensions
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`

        // Set Blurred Backgound Dimensions
        this._blurred.style.width = `${width}px`;
        this._blurred.style.height = `${height}px`;

        // Set Pop-Up Box Dimensions
        const boxW = Math.floor(width * 0.6);
        const boxH = Math.floor(height * 0.6);
        this._box.style.width = `${boxW}px`;
        this._box.style.height = `${boxH}px`;

        // Set Pop-Up Box Position
        const left = Math.floor(width * 0.2);
        const top = Math.floor(height * 0.2);
        this._box.style.left = `${left}px`;
        this._box.style.top = `${top}px`;
    }
}

/***/ }),

/***/ "./src/pop-up-module/select-box.js":
/*!*****************************************!*\
  !*** ./src/pop-up-module/select-box.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectBox)
/* harmony export */ });
/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up.js */ "./src/pop-up-module/pop-up.js");


class SelectBox extends _pop_up_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (description, categories) {
        super("Select");

        // Remove Title
        this._box.removeChild(this._title);

        // Build Description DOM Element
        this._desc = document.createElement("div");
        this._desc.classList.add("select-description");
        this._desc.textContent = description;
        this._box.appendChild(this._desc);

        // Build Option DOM Elements
        this._options = [];
        categories.forEach(category => {
            const option = document.createElement("div");
            option.id = `${category.key.toLowerCase()}-option`;
            option.textContent = category.key;
            this._box.appendChild(option);
            this._options.push(option);
        });

        // Setup Cursor
        this._current = 0;
        this.setCursor();

        // Set Active to be False
        this._active = false;
    }

    get description () { return this._desc; }

    set description (str) { this._desc = str; }

    get options () { return this._options; }

    set options (arr) { this._options = arr; }

    get active () { return this._active; }

    set active (bool) { this._active = bool; }

    /**
     * Set Dimensions Method
     * 
     * For the Components of the Select Box, the width and height are to be set.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimensions (width, height) {
        super.setDimensions(width, height);

        // Set Component Width
        this._boxW = Math.floor(width * 0.6);
        this._desc.style.width = `${this._boxW}px`;
        this._options.forEach(option => { option.style.width = `${this._boxW}px`; });
    }

    /**
     * Set Cursor Method
     * 
     * While cycling through the Select Options, if the cursor is on an option, 
     * then the option should be highlighted.
     * 
     * @param {boolean} on Cursor on Option
     */
    setCursor (on=true) {
        // Handle Options
        const check = this._options[this._current].classList.contains("cursor");
        if (on && !check)
            this._options[this._current].classList.add("cursor");
        if (!on && check)
            this._options[this._current].classList.remove("cursor");
    }

    /**
     * Set Selections Method
     * 
     * For the New Selection, the method will reset the DOM Elements in the 
     * Selection Box.
     * 
     * @param {string} desc New Description for Selection
     * @param {Object[]} categories New List of Categories
     */
    setSelections (desc, categories) {
        // Set Description
        this._desc.textContent = desc;

        // Remove Options from Box
        this._options.forEach(option => { this._box.removeChild(option); });

        // Set New Options
        this._options = [];
        categories.forEach(category => {
            const option = document.createElement("div");
            option.id = `${category.key.toLowerCase()}-option`;
            option.textContent = category.key;
            option.style.width = `${this._boxW}px`;
            this._box.appendChild(option);
            this._options.push(option);
        });

        // Set Cursor
        this._current = 0;
        this.setCursor();
    }

    /**
     * Vertical Move Method
     * 
     * Moving the Cursor Up or Down on the Select Box.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove(up=true) {
        const curr = this._current + (up ? -1 : 1);
        if (curr < this._options.length && curr >= 0) {
            this.setCursor(false);
            this._current = curr;
            this.setCursor();
        }
    }

    /**
     * Accept Action Method
     * 
     * Chooses the Option on the Select Box that the User has selected, and the
     * method returns the string of what was selected.
     * 
     * @returns String Representation of Selection
     */
    acceptAction () { return this._options[this._current].textContent; }
}

/***/ }),

/***/ "./src/tic-tac-toe-module/game-module/game.js":
/*!****************************************************!*\
  !*** ./src/tic-tac-toe-module/game-module/game.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _levels_easy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels/easy.js */ "./src/tic-tac-toe-module/game-module/levels/easy.js");
/* harmony import */ var _levels_hard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/hard.js */ "./src/tic-tac-toe-module/game-module/levels/hard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./src/tic-tac-toe-module/game-module/player.js");




class Game {
    #TURN;
    #SIZE;
    #LEVELS = {easy: null, hard: null};

    /**
     * Game Class
     * 
     * Object for tracking the current game.
     * 
     * @param {number} size Size of Grid
     */
    constructor (size) {
        // Initialise Variables
        this._grid = [];
        for (let i = 0; i < size; i++)
            this._grid.push([]);
        this._players = [];
        this.#TURN = 0;
        this.#SIZE = size;
        this.#LEVELS.easy = new _levels_easy_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.#LEVELS.hard = new _levels_hard_js__WEBPACK_IMPORTED_MODULE_1__["default"]("x", this.#SIZE);
        this._initialised = false;
        
        // Set Default Algorithm to be Easy
        this._algorithm = this.#LEVELS.easy;
    }

    get grid () { return this._grid; }

    set grid (arr) { this._grid = arr; }

    get players () { return this._players; }

    set players (arr) { this._players = arr; }

    get algorithm () { return this._algorithm; }

    set algorithm (obj) { this._level = obj; }

    /**
     * Setup Method
     * 
     * Create Player Objects for the Upcoming Game.
     * 
     * @param {string} nought Player 1 Nought or Cross
     */
    setup (nought) {
        // Check if Players have already been initialised
        if (this._players.length === 0) {
            this._players.push(new _player_js__WEBPACK_IMPORTED_MODULE_2__["default"](nought, this.#SIZE));
            this._players.push(new _player_js__WEBPACK_IMPORTED_MODULE_2__["default"]((nought === "o" ? "x" : "o"), this.#SIZE));
            this.#LEVELS.hard.marker = (nought === "o" ? "x" : "o");
            this._initialised = true;
        }
        // Otherwise, Update Players, if required
        else if (this._players[0].marker !== nought) {
            // Update Player Markers
            this._players[0].marker = nought;
            this._players[1].marker = (nought === "o" ? "x" : "o");
            this.#LEVELS.hard.marker = (nought === "o" ? "x" : "o");
        }
        
        this.reset();
    }

    /**
     * Set Level Method
     * 
     * Difficulty Level is set with this Method.
     * 
     * @param {string} level Algorithm Difficulty
     */
    setLevel (level) { 
        this._algorithm = this.#LEVELS[level]; 
        if (this._initialised)
            this.setup(this._players[0].marker);
    }

    /**
     * Get Marker Method
     * 
     * For the Current Turn, the method returns the Marker of the Player.
     * 
     * @returns True, if Current Turn is Nought
     */
    getMarker () { return this._players[this.#TURN].marker === "o" ? true : false; }
    
    /**
     * Reset Method
     * 
     * Reset Scores and Grid.
     */
    reset () {
        // Reset Player Scores
        this._players[0].reset();
        this._players[1].reset();

        // Reset Grid
        for (let i = 0; i < this.#SIZE; i++) 
            for (let j = 0; j < this.#SIZE; j++)
                this._grid[i][j] = "";
    }

    /**
     * Attempt Method
     * 
     * When the Player Attempts to make a move, the method will ensure that the
     * move was a legal one or not, and also check if the resulting move has led
     * to the end of the Game, whether that player has won, or if it resulted in
     * a draw.
     * 
     * @param {number} x Attempt X-Coordinate
     * @param {number} y Attempt Y-Coordinate
     * @returns Message indicating Attempt's Result
     */
    attempt (x, y) {
        // Reject Attempts that are beyond Grid Bounds
        if (x < 3 && x >= 0 && y < 3 && y >= 0) {
            // Check if Attempt isn't on an Occupied Cell
            if (this.#legal(x, y)) {
                // Update Player
                this._players[this.#TURN].play(x, y);

                // Update Grid
                this._grid[y][x] = this._players[this.#TURN].marker;

                // Chcek if Player has Won
                if (this._players[this.#TURN].hasWon())
                    return this._players[this.#TURN].marker;

                // Check for a Draw
                if (this.#filled()) 
                    return "Draw!";

                // Next Turn
                this.#TURN = this.#TURN === 0 ? 1 : 0;

                // Game should Resume
                return "";
            }

            return `Illegal Move! (${x}, ${y}) is already occupied!`;
        }

        return `Illegal Move! (${x}, ${y}) is out of bounds!`;
    }

    /**
     * Legal Method
     * 
     * Checks if the Attempt is Legal.
     * 
     * @param {number} x Attemp X-Coordinate
     * @param {number} y Attempt Y-Coordinate
     * @returns True, if Attempt is Legal
     */
    #legal (x, y) { return this._grid[y][x] === ""; }

    /**
     * Filled Method
     * 
     * Checks if all the cells in the grid have been marked.
     * 
     * @returns True if Grid is Fully Marked
     */
    #filled () {
        // Iterate through Grid and Search for Unmarked Cell
        let filled = true;
        for (let i = 0; i < this.#SIZE; i++)
            if (this._grid[i].includes("")) {
                filled = false;
                break;
            }

        return filled;
    }
}

/***/ }),

/***/ "./src/tic-tac-toe-module/game-module/levels/easy.js":
/*!***********************************************************!*\
  !*** ./src/tic-tac-toe-module/game-module/levels/easy.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Easy)
/* harmony export */ });
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.js */ "./src/tic-tac-toe-module/game-module/levels/level.js");


class Easy extends _level_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Easy Level Class
     * 
     * For the Tic-Tac-Toe Game, the Easy Level randomly selects its next move,
     * without any effort for minimising loss.
     */
    constructor () { super("easy"); }

    /**
     * Play Method
     * 
     * For the Current Grid, the method will randomly select an unoccupied cell
     * as the Selected Move.
     * 
     * @param {string[][]} grid Current Grid
     * @returns Selected Move
     */
    play (grid) {
        // Initialise Available Array
        let available = [];
        
        // Iterate through Grid to Find Available Cells
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                // Only Push Avaiable Cells into Array
                if (grid[j][i] === "")
                    available.push({x: j, y: i});
            }
        }

        // Return a Random Selection of Available Squares
        return available[Math.floor(Math.random() * available.length)];
    }
}

/***/ }),

/***/ "./src/tic-tac-toe-module/game-module/levels/hard.js":
/*!***********************************************************!*\
  !*** ./src/tic-tac-toe-module/game-module/levels/hard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hard)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player.js */ "./src/tic-tac-toe-module/game-module/player.js");
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level.js */ "./src/tic-tac-toe-module/game-module/levels/level.js");



class Hard extends _level_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    #INFINITY = 1000;

    /**
     * Hard Level Class
     * 
     * For the Tic-Tac-Toe Game, the Hard Level utilises the Minimax Algorithm
     * to find the Next Move it will take.
     * 
     * @param {string} marker Default Algorithm Marker
     * @param {number} size Size of the Grid
     */
    constructor (marker, size) { 
        super("hard"); 
        this._marker = marker;
        this._size = size;
        this._move = {x: -1, y: -1};
    }

    get marker () { return this._marker; }

    set marker (str) { this._marker = str; }

    get size () { return this._size; }

    set size (num) { this._size = num; }

    get move () { return this._move; }

    set move (dict) { this._move = dict; }

    /**
     * Play Method
     * 
     * For the Current Grid, the method will select the next move using the 
     * Minimax Algorithm, which aims to minimise the possible losses for any 
     * given move for the worst possible move the User will make (from the 
     * computer's perspective).
     * 
     * @param {string[][]} grid Current Grid
     * @returns Selected Move
     */
    play (grid) {
        this.#minimax(grid, 0, true, (this._marker === "o" ? "x" : "o"));
        return this._move; 
    }

    /**
     * Minimax Algorithm Method
     * 
     * The Minimax Algorithm is a decision tool for minimising the possible loss
     * for a worst case scenario. This Algorithm was modified for the context of
     * playing Tic-Tac-Toe.
     * 
     * @param {string[][]} grid Current Grid
     * @param {number} depth Depth of Recursion
     * @param {boolean} maximising Default is Maximising
     * @param {string} marker Marker for Turn
     * @returns The Cost/Benefit of the Move
     */
    #minimax (grid, depth=0, maximising=true, marker="") {
        // Check if Game is Complete
        const state = this.#isComplete(grid);

        // Return Heuristic for State
        if (state === this._marker)
            return 10;
        else if (state === (this._marker === "o" ? "x" : "o"))
            return -10;
        else if (state === "DRAW")
            return 0;

        // Setup for Minimax Algorithm
        let value;
        let idx;
        const moves = this.#availableMoves(grid);
        const next = marker === "o" ? "x" : "o";

        // Handle Maximising Player
        if (maximising) {
            value = -1 * this.#INFINITY;
            for (let i = 0; i < moves.length; i++) {
                const move = moves[i];
                const newState = this.#simulate(grid, move.x, move.y, next);
                const newValue = this.#minimax(newState, depth + 1, false, next);
                if (newValue > value) {
                    value = newValue;
                    idx = i;
                }
            }
            // Update Move
            this._move = moves[idx];

            return value;
        }

        // Handle Minimising Player
        else {
            value = this.#INFINITY;
            for (let i = 0; i < moves.length; i++) {
                const move = moves[i];
                const newState = this.#simulate(grid, move.x, move.y, next);
                const newValue = this.#minimax(newState, depth - 1, true, next);
                if (newValue < value) {
                    value = newValue;
                    idx = i;
                }
            }
            // Update Move
            this._move = moves[idx];

            return value;
        }
    }

    /**
     * Is Complete Method
     * 
     * Check if a Given Grid is Complete.
     * 
     * @param {string[][]} grid Current Grid
     * @returns State of Grid
     */
    #isComplete (grid) {
        // Initialise Variables
        let players = {
            p1: new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]((this._marker === "o" ? "x": "o"), this._size),
            p2: new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._marker, this._size)
        };
        let filled = true;

        // Iterate through Desired Grid
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                // Check for First Player
                if (grid[i][j] === players.p1.marker)
                    players.p1.play(j, i);
                // Check for Second Player
                else if (grid[i][j] === players.p2.marker)
                    players.p2.play(j, i);
                // Check for Unplayed Cell
                else
                    filled = false;
            }
        }

        if (players.p1.hasWon())
            return players.p1.marker;
        else if (players.p2.hasWon())
            return players.p2.marker;
        else if (filled)
            return "DRAW";
        return "INCOMPLETE";
    }

    /**
     * Available Moves Method
     * 
     * For a Current State, this method returns the Available Moves.
     * 
     * @param {string[][]} grid Current State of Game
     * @returns Available Moves for Current State
     */
    #availableMoves (grid) {
        // Initialise Moves Array
        const moves = [];

        // Iterate through Grid and find Available Cells
        for (let i = 0; i < this._size; i++) {
            for (let j = 0; j < this._size; j++) {
                if (grid[i][j] === "")
                    moves.push({x: j, y: i});
            }
        }

        return moves;
    }

    /**
     * Simulate Method
     * 
     * For a given move, return a New Game State.
     * 
     * @param {string[][]} grid Current Grid
     * @param {number} x Move X-Coordinate
     * @param {number} y Move Y-Coordinate
     * @param {string} marker Marker for Move
     * @returns New Game State
     */
    #simulate (grid, x, y, marker) {
        // Initialise New State
        const newState = [];
        for (let i = 0; i < this._size; i++)
            newState.push([]);

        // Iterate through Matrix
        for (let i = 0; i < this._size; i++) {
            for (let j = 0; j < this._size; j++) {
                // Add Marker to Cell
                if (j === x && i === y)
                    newState[i].push(marker);
                // Add Current Marker Otherwise
                else
                    newState[i].push(grid[i][j]);
            }
        }

        return newState;
    }
}

/***/ }),

/***/ "./src/tic-tac-toe-module/game-module/levels/level.js":
/*!************************************************************!*\
  !*** ./src/tic-tac-toe-module/game-module/levels/level.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Level)
/* harmony export */ });
class Level {
    /**
     * Level Class
     * 
     * Base Class for the Difficulty Level of the Computer for the Tic-Tac-Toe
     * Game.
     * 
     * @param {string} level Difficulty Level
     */
    constructor (level) { this._level = level; }

    get level () { return this._level; }

    set level (str) { this._level = str; }

    /**
     * Play Method
     * 
     * For the Current Grid, the method will select the next move.
     * 
     * @param {string[][]} grid Current Grid
     * @returns Selected Move
     */
    play (grid) { return {x: -1, y: -1}; }
}

/***/ }),

/***/ "./src/tic-tac-toe-module/game-module/player.js":
/*!******************************************************!*\
  !*** ./src/tic-tac-toe-module/game-module/player.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
    /**
     * Player Class
     * 
     * Managaes the Player's Marker (i.e. nought or cross) and also the player's
     * score.
     * 
     * @param {string} nought Nought or Cross
     */
    constructor (nought, size) {
        // Initialise Variables
        this._marker = nought;
        this._size = size;
        this._scores = [];
        for (let i = 0; i < (size * 2 + 2); i++)
            this._scores.push(0);
    }
    
    get marker () { return this._marker; }

    set marker (str) { this._marker = str; }

    get scores () { return this._scores; }

    set scores (arr) { this._scores = arr; }

    /**
     * Reset Method
     * 
     * Set all score values to be zero.
     */
    reset () { this._scores.forEach(e => { e = 0; }); }

    /**
     * Play Method
     * 
     * Updates the Player's Score Array.
     * 
     * @param {number} x Move X-Coordinate
     * @param {number} y Move Y-Coordinate
     */
    play (x, y) {
        // Update Column Score
        this._scores[x] += 1;
        // Update Row Score
        this._scores[y + this._size] += 1;
        // Update Negative Diagonal Score
        this._scores[this._scores.length - 2] += (x === y ? 1 : 0);
        // Update Positive Diagonal Score
        this._scores[this._scores.length - 1] += (x + y === this._size - 1 ? 1 : 0);
    }

    /**
     * Has Won Method
     * 
     * Checks the Players Scores for a 3, implying they have achieved the required
     * 3 in a row.
     * 
     * @returns True, if Player has 3 in a Row
     */
    hasWon () { return this._scores.includes(3); }
}

/***/ }),

/***/ "./src/tic-tac-toe-module/grid-module/cell.js":
/*!****************************************************!*\
  !*** ./src/tic-tac-toe-module/grid-module/cell.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cell)
/* harmony export */ });
class Cell {
    /**
     * Cell Class
     * 
     * Tic-Tac-Toe Cell Element.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    constructor (x, y) {
        // Build Cell DOM Element
        this._element = document.createElement("div");
        this._element.classList.add("cell");
        this._element.id = `${x}-${y}-cell`;
        this._element.style.setProperty(
            "grid-area", `cell-${x}${y}`
        );

        // Build Cursor DOM Element
        this._cursor = document.createElement("div");
        this._cursor.id = "cursor-cell";

        // Build Nought DOM Element
        this._nought = document.createElement("div");
        this._nought.id = `nought-${x}-${y}`;
        this._nought.textContent = "O";

        // Build Cross DOM Element
        this._cross = document.createElement("div");
        this._cross.id = `cross-${x}-${y}`;
        this._cross.textContent = "X";

        // Initialise Variables
        this._x = x;
        this._y = y;
        this._pointer = false;
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get cursor () { return this._cursor; }

    set cursor (elem) { this._cursor = elem; }

    get nought () { return this._nought; }

    set nought (elem) { this._nought = elem; }

    get cross () { return this._cross; }

    set cross (elem) { this._cross = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get pointer () { return this._pointer; }

    set pointer (bool) { this._pointer = bool; }

    /**
     * Place Cursor Method
     * 
     * Place or Remove the Cursor on the Cell.
     * 
     * @param {boolean} on Place or Remove
     */
    placeCursor (on=true) {
        // Place Cursor on Cell
        if (on && !this._pointer) {
            this._element.appendChild(this._cursor);
            this._pointer = true;
        }
        // Remove Cursor from Cell
        if (!on && this._pointer) {
            this._element.removeChild(this._cursor);
            this._pointer = false;
        }
    }

    /**
     * Place Nought Method
     * 
     * Place or Remove the Nought in the Cell.
     * 
     * @param {boolean} on Place or Remove
     */
    placeNought (on=true) {
        // Place Nought in Cell
        if (on && !this._element.contains(this._nought)) 
            this._element.appendChild(this._nought);
        // Remove Nought from Cell
        if (!on && this._element.contains(this._nought))
            this._element.removeChild(this._nought);
    }

    /**
     * Place Cross Method
     * 
     * Place or Remove the Cross in the Cell.
     * 
     * @param {boolean} on Place or Remove
     */
    placeCross (on=true) {
        // Place Cross in Cell
        if (on && !this._element.contains(this._cross))
            this._element.appendChild(this._cross);
        // Remove Cross from Cell
        if (!on && this._element.contains(this._cross))
            this._element.removeChild(this._cross);
    }

    /**
     * Reset Method
     * 
     * Removes cursor, nought and cross from cell.
     */
    reset () {
        // Remove Cursor, if needed
        if (this._pointer)
            this.placeCursor(false);

        // Remove Nought
        this.placeNought(false);

        // Remove Cross
        this.placeCross(false);
    }
}

/***/ }),

/***/ "./src/tic-tac-toe-module/grid-module/grid.js":
/*!****************************************************!*\
  !*** ./src/tic-tac-toe-module/grid-module/grid.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _grid_styling_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid-styling.css */ "./src/tic-tac-toe-module/grid-module/grid-styling.css");
/* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell.js */ "./src/tic-tac-toe-module/grid-module/cell.js");



class Grid {
    #GRID;
    #DEFAULT_POS = {x: 1, y: 1};

    /**
     * Grid Class
     * 
     * Tic-Tac-Toe Grid that is responsible for setting up all Cells and the
     * control of those Cells.
     */
    constructor (size) {
        // Build the Grid DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("tic-tac-toe-grid");

        // Add Grid Template Areas to the Grid DOM Element
        this.#GRID = size;
        let template = "";
        for (let i = 0; i < this.#GRID; i++) {
        // for (let i = this.#GRID - 1; i >= 0; i--) {
            for (let j = 0; j < this.#GRID; j++) {
                if (j === 0)
                    template += `"cell-${j}${i} `;
                else if (j === this.#GRID - 1)
                    template += `cell-${j}${i}"${i === 0 ? "" : " "}`;
                else
                    template += `cell-${j}${i} `;
            }
        }
        this._module.style.setProperty("grid-template-areas", template);

        // Initialise Cells
        this._cells = [];
        for (let i = 0; i < this.#GRID; i++) {
            for (let j = 0; j < this.#GRID; j++) {
                const cell = new _cell_js__WEBPACK_IMPORTED_MODULE_1__["default"](j, i);
                this._cells.push(cell);
                this._module.appendChild(cell.element);

                // Place Cursor on Default Initial Cursor
                if (cell.x === this.#DEFAULT_POS.x && cell.y === this.#DEFAULT_POS.y) {
                    this._current = cell;
                    cell.placeCursor();
                }
            }
        }
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get current () { return this._current; }

    set current (cell) { this._current = cell; }

    /**
     * Set Dimensions Method
     * 
     * For the Grid, the Width and Height are dependent on the Screen Size.
     * 
     * @param {number} dimension Grid Size (pixels)
     */
    setDimensions (dimension) {
        // Set Grid Dimensions
        this._module.style.width = `${dimension}px`;
        this._module.style.height = `${dimension}px`;

        // Set Cell Dimensions
        const cellDim = Math.floor(dimension / this.#GRID);
        const fontSize = Math.floor(cellDim * 0.8);
        this._cells.forEach(cell => {
            cell.element.style.width = `${cellDim}px`;
            cell.element.style.height = `${cellDim}px`;
            cell.cursor.style.width = `${cellDim}px`;
            cell.cursor.style.height = `${cellDim}px`;
            cell.nought.style.fontSize = `${fontSize}px`;
            cell.cross.style.fontSize = `${fontSize}px`;
        });
    }

    /**
     * Reset Method
     * 
     * For the Cells in the Grid, the method will remove any nought or cross 
     * within them.
     */
    reset () {
        // Iterate through Cells and Remove Nought or Cross
        this._cells.forEach(cell => {
            cell.placeCross(false);
            cell.placeNought(false);
        })
    }

    /**
     * Algorithm Select Method
     * 
     * For the Algorithm's Selected Move, the Grid on Display must Update with
     * the appropriate Value.
     * 
     * @param {Object} move X and Y Coordinates
     * @param {boolean} nought Nought or Cross
     */
    algorithmSelect (move, nought) {
        // Find Cell and Update with Algorithm's Marker
        this._cells.forEach(cell => {
            if (cell.x === move.x && cell.y === move.y)
                nought ? cell.placeNought() : cell.placeCross();
        });
    }

    /**
     * Horizontal Move Method
     * 
     * Move the Cursor Horizontally around the Grid.
     * 
     * @param {boolean} right Default Action is Rightwards
     */
    horizontalMove (right=true) {
        // Ensure Horizontal Move is still on Grid
        const curr = this._current.x + (right ? 1 : -1);
        if (curr < this.#GRID && curr >= 0) {
            // Remove Cursor from Cell
            this._current.placeCursor(false);

            // Iterate and Find New Cell for Cursor
            this._cells.forEach(cell => {
                if (cell.x === curr && cell.y === this._current.y)
                    this._current = cell;
            });

            // Place Cursor on Cell
            this._current.placeCursor(true);
        }
    }

    /**
     * Vertical Move Method
     * 
     * Move the Cursor Vertically around the Grid.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) {
        // Ensure Vertical Move is still on Grid
        const curr = this._current.y + (up ? -1 : 1);
        if (curr < this.#GRID && curr >= 0) {
            // Remove Cursor from Cell
            this._current.placeCursor(false);

            // Iterate and Find New Cell for Cursor
            this._cells.forEach(cell => {
                if (cell.x === this._current.x && cell.y === curr)
                    this._current = cell;
            });

            // Place Cursor on Cell
            this._current.placeCursor(true);
        }
    }

    /**
     * Accept Action Method
     * 
     * Depending on whether a Nought or Cross is Placed in the cell, the cell
     * will be updated so that it reflects the move that was just played.
     * 
     * @param {boolean} nought Nought or Cross
     * @returns Error Message, if required
     */
    acceptAction (nought) { nought ? this._current.placeNought() : this._current.placeCross(); }
}

/***/ }),

/***/ "./src/tic-tac-toe-module/main-module/ttt-manager.js":
/*!***********************************************************!*\
  !*** ./src/tic-tac-toe-module/main-module/ttt-manager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TTTManager)
/* harmony export */ });
/* harmony import */ var _game_module_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-module/game */ "./src/tic-tac-toe-module/game-module/game.js");
/* harmony import */ var _grid_module_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grid-module/grid */ "./src/tic-tac-toe-module/grid-module/grid.js");



class TTTManager {
    #DEFAULT_GRID = 3;
    #THEMES = [
        "Normal",
        "Retro",
        "Neon",
        "Terminal",
        "Fancy",
        "Scruffy"
    ];

    constructor () {
        // Build Game DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("tic-tac-toe-game-module");

        // Build Scoring DOM Components
        this._scorecard = document.createElement("div");
        this._scorecard.classList.add("scorecard");

        // Build Human Scorecard DOM Components
        const humanScorecard = document.createElement("div");
        humanScorecard.classList.add("human-scorecard");

        // Build Human Label DOM Element
        this._humanLabel = document.createElement("div");
        this._humanLabel.classList.add("human-label");
        this._humanLabel.classList.add("turn");
        this._humanLabel.textContent = "H: ";

        // Build Human Score DOM Element
        this._human = document.createElement("div");
        this._human.classList.add("human-score");
        this._human.textContent = 0;

        // Add Components to Human Scorecard
        humanScorecard.appendChild(this._humanLabel);
        humanScorecard.appendChild(this._human);

        // Build Algorithm Scorecard DOM Components
        const algorithmScorecard = document.createElement("div");
        algorithmScorecard.classList.add("algorithm-scorecard");

        // Build Algorithm Label DOM Element
        this._algorithmLabel = document.createElement("div");
        this._algorithmLabel.classList.add("algorithm-label");
        this._algorithmLabel.textContent = "A: ";

        // Build Algorithm Score DOM Element
        this._algorithm = document.createElement("div");
        this._algorithm.classList.add("algorithm-score");
        this._algorithm.textContent = 0;

        // Add Components to Algorithm Scorecard
        algorithmScorecard.appendChild(this._algorithmLabel);
        algorithmScorecard.appendChild(this._algorithm);

        // Build Versus Label DOM Element
        const vsLabel = document.createElement("div");
        vsLabel.classList.add("versus-label");
        vsLabel.textContent = "VS";

        // Add Components to Scorecard
        this._scorecard.appendChild(humanScorecard);
        this._scorecard.appendChild(vsLabel);
        this._scorecard.appendChild(algorithmScorecard);

        // Initialise Grid Object
        this._grid = new _grid_module_grid__WEBPACK_IMPORTED_MODULE_1__["default"](this.#DEFAULT_GRID);

        // Append All Components to Module
        this._module.appendChild(this._grid.module);
        this._module.appendChild(this._scorecard);

        // Initialise Variables
        this._controller = true;
        this._user = "o";
        this._game = new _game_module_game__WEBPACK_IMPORTED_MODULE_0__["default"](this.#DEFAULT_GRID);
        this._scores = {human: 0, algorithm: 0};
        this._end = false;

        // Set the Default Theme
        this.setTheme(this.#THEMES[0]);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get grid () { return this._grid; }

    set grid (obj) { this._grid = obj; }

    get controller () { return this._controller; }

    set controller (bool) { this._controller = bool; }

    get user () { return this._user; }

    set user (str) { this._user = str; }

    get game () { return this._game; }

    set game (obj) { this._game = obj; }

    get scores () { return this._scores; }

    set scores (dict) { this._scores = dict; }

    get end () { return this._end; }

    set end (bool) { this._end = bool; }

    /**
     * Setup Method
     * 
     * Sets up the Display for the Game, including the cells and the scorecard.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setup (width, height) {
        // Set Game Dimensions
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`;

        // Set Grid Dimensions
        const dim = Math.floor(Math.min(width, height) * 0.8);
        this._grid.setDimensions(dim);

        // Set Scorecard Font Size
        this._scorecard.style.fontSize = `${Math.floor(dim * 0.07)}px`;
    }

    /**
     * Set Marker Method
     * 
     * Before the Game begins, the User must select the marker theyb want to 
     * play with.
     * 
     * @param {string} nought Nought or Cross
     */
    setMarker (nought) { 
        this._user = nought;
        this._game.setup(nought);
    }

    /**
     * Set Level Method
     * 
     * Update the Game based on the Level Selected.
     * 
     * @param {string} level Selected Level
     */
    setLevel (level) { 
        this._game.setLevel(level.toLowerCase()); 
        this._grid.reset();
    }

    /**
     * Set Theme Method
     * 
     * Update the Styling to Reflect the Theme Selected.
     * 
     * @param {string} theme Theme Name
     */
    setTheme (theme) {
        // Get Root Element
        const root = document.documentElement;
        root.className = theme.toLowerCase();
    }

    /**
     * Play Algorithm Move Method
     * 
     * Play Selected Algorithm's New Move.
     * 
     * @returns Message for Algorithm's Move
     */
    playAlgorithmMove () {
        // Get Next Move
        const move = this._game.algorithm.play(this._game.grid);
        
        // Update Display
        this._grid.algorithmSelect(move, (this._user !== "o"));

        // Return Message resulting from Move
        return this._game.attempt(move.x, move.y);
    }

    /**
     * Reset Method
     * 
     * Set all variables to their original values, and set the grid so that the
     * cells don't contain noughts nor crosses.
     */
    reset () {
        this._end = false;
        this._grid.reset();
        this._game.reset();
    }

    /**
     * Horizontal Move Method
     * 
     * Moving the Cursor Right or Left on the Grid.
     */
    horizontalMove (right=true) { if (!this._end) this._grid.horizontalMove(right); }

    /**
     * Vertical Move Method
     * 
     * Moving the Cursor Up or Down on the Grid.
     */
    verticalMove (up=true) { if (!this._end) this._grid.verticalMove(up); }

    /**
     * Accept Action Method
     * 
     * When the User makes a move, then the grid should update the corresponding
     * cell to reflect the Users move, given that the move is legal, otherwise 
     * the move should raise an error. Additionally, when the move is made, the 
     * Algorithm should be prompted to make its next move.
     * 
     * @callback gameoverCallback Gameover Callback Method
     */
    acceptAction (gameoverCallback) {
        if (!this._end) {
            // Check that the Attempt is Valid
            const turn = this._game.getMarker();
            let msg = this._game.attempt(this._grid.current.x, this._grid.current.y);
            
            // Check if Attempt was Illegal
            if (msg.includes("Illegal Move!")){
                gameoverCallback(msg, true); 
                return;
            }

            // Check if User has Won
            if (msg === this._user) {
                this._end = true;
                msg = "Congratulations, you won!";
                this.#gameover(true);
            } 
            // Check if there is a Draw
            else if (msg === "Draw!")
                this._end = true;
            
            // Make the Move on the Grid
            this._grid.acceptAction(turn);

            // Don't allow Algorithm to Move if Game is Over
            if (this._end) {
                gameoverCallback(msg);
                return;
            }
                // return true;

            // Prompt Algorithm to Move
            setTimeout(() => {
                msg = this.playAlgorithmMove();
        
                // Chek if Algorithm has Won
                if (msg === (this._user === "o" ? "x" : "o")) {
                    this._end = true;
                    msg = "Bad luck, the Algorithm has won!";
                    this.#gameover(false);
                } 
                // Check if there is a Draw
                else if (msg === "Draw!")
                    this._end = true;
                
                if (this._end) {
                    gameoverCallback(msg);
                    return;
                }
            }, 1000);
        }
    }

    /**
     * Gameover Method
     * 
     * For a non-draw, this method updates the DOM Scores.
     * 
     * @param {boolean} human Human Won
     */
    #gameover (human=false) {
        // Update Human Score
        if (human) {
            this._scores.human += 1;
            this._human.textContent = this._scores.human;
        }
        // Update Algorithm Score
        else {
            this._scores.algorithm += 1;
            this._algorithm.textContent = this._scores.algorithm;
        }

        this.reset();
    }
}

/***/ }),

/***/ "./src/tic-tac-toe-module/ttt-game.js":
/*!********************************************!*\
  !*** ./src/tic-tac-toe-module/ttt-game.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TTTGame)
/* harmony export */ });
/* harmony import */ var _game_styling_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-styling.css */ "./src/tic-tac-toe-module/game-styling.css");
/* harmony import */ var _data_menu_json5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/menu.json5 */ "./src/tic-tac-toe-module/data/menu.json5");
/* harmony import */ var _data_select_json5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/select.json5 */ "./src/tic-tac-toe-module/data/select.json5");
/* harmony import */ var _game_chip_module_game_interface_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-chip-module/game-interface.js */ "./src/game-chip-module/game-interface.js");
/* harmony import */ var _main_module_ttt_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-module/ttt-manager.js */ "./src/tic-tac-toe-module/main-module/ttt-manager.js");
/* harmony import */ var _pop_up_module_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pop-up-module/menu.js */ "./src/pop-up-module/menu.js");
/* harmony import */ var _pop_up_module_error_box_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pop-up-module/error-box.js */ "./src/pop-up-module/error-box.js");
/* harmony import */ var _pop_up_module_info_box_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pop-up-module/info-box.js */ "./src/pop-up-module/info-box.js");
/* harmony import */ var _pop_up_module_select_box_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pop-up-module/select-box.js */ "./src/pop-up-module/select-box.js");










class TTTGame extends _game_chip_module_game_interface_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
    #showCallback;
    #takeDownCallback;

    constructor (title) {
        super(title);

        // Initialise Objects for the Tic-Tac-Toe Game
        this._tm = new _main_module_ttt_manager_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._menu = new _pop_up_module_menu_js__WEBPACK_IMPORTED_MODULE_5__["default"](_data_menu_json5__WEBPACK_IMPORTED_MODULE_1__);
        this._error = new _pop_up_module_error_box_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this._info = new _pop_up_module_info_box_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this._select = new _pop_up_module_select_box_js__WEBPACK_IMPORTED_MODULE_8__["default"](
            _data_select_json5__WEBPACK_IMPORTED_MODULE_2__.difficulty.description, 
            _data_select_json5__WEBPACK_IMPORTED_MODULE_2__.difficulty.categories
        );

        // Initialise Variables
        this._difficulty_selected = false;
        this._marker_selected = false;
    }

    /**
     * Set Show Method
     * 
     * Set the Callback Methods for Updating the GameChip Display.
     * 
     * @callback showCallback Show Callback
     * @callback takeDownCallback Take Down Callback
     * @callback dimensionsCallback Get Dimensions Callback
     */
    setScene (showCallback, takeDownCallback, getDimensions) {
        // Set Callback Methods
        this.#showCallback = showCallback;
        this.#takeDownCallback = takeDownCallback;

        // Set Grid Dimensions
        const dimensions = getDimensions();
        this._tm.setup(dimensions.width, dimensions.height);

        // Set Pop-Up Dimensions
        this._menu.setDimensions(dimensions.width, dimensions.height);
        this._sub_set = false;
        this._sub_menu;
        this._error.setDimensions(dimensions.width, dimensions.height);
        this._info.setDimensions(dimensions.width, dimensions.height);
        this._select.setDimensions(dimensions.width, dimensions.height);

        // Set Grid on Display
        this.#showCallback(this._tm.module);

        // Show Difficulty Selection
        this._select.active = true;
        this._tm.controller = false;
        this.#showCallback(this._select.module, true);
    }

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.horizontalMove();
    }

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.horizontalMove(false);
    }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.verticalMove();
        // Handle Menu Movement
        if (this._menu.controller)
            this._menu.verticalMove();
        // Handle Sub-Menu Movement
        if (this._sub_set)
            this._sub_menu.verticalMove();
        // Handle Select Movement
        if (this._select.active)
            this._select.verticalMove();
    }

    /**
     * Down Callback Method
     * 
     * Handles the Click of the Down Button on the Direction Pad.
     */
    downCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.verticalMove(false);
        // Handle Menu Movement
        if (this._menu.controller)
            this._menu.verticalMove(false);
        // Handle Sub-Menu Movement
        if (this._sub_set)
            this._sub_menu.verticalMove(false);
        // Handle Select Movement
        if (this._select.active)
            this._select.verticalMove(false);
    }

    /**
     * A Callback Method
     * 
     * Handles the Click of the A Action Button.
     */
    aCallback () {
        // Handle Select Action
        if (this._select.active && !this._difficulty_selected) {
            // Set Difficulty Level
            this._tm.setLevel(this._select.acceptAction());
            this._difficulty_selected = true;

            // Set Marker Selection
            this._select.setSelections(
                _data_select_json5__WEBPACK_IMPORTED_MODULE_2__.marker.description,
                _data_select_json5__WEBPACK_IMPORTED_MODULE_2__.marker.categories
            );
        } else if (this._select.active && !this._marker_selected) {
            // Set Marker
            this._tm.setMarker(this._select.acceptAction());
            this._marker_selected = true;

            // Take down Select Box
            this.#takeDownCallback();
            this._select.active = false;
            this._tm.controller = true;
        }
        // Handle Info Action
        else if (this._info.active) {
            this.#takeDownCallback();
            this._tm.controller = true;
            this._info.active = false;
        } 
        // Handle Error Action
        else if (this._error.active) {
            this.#takeDownCallback();
            this._tm.controller = true;
            this._error.active = false;
        } 
        // Handle Grid Action
        else if (this._tm.controller) {
            this._tm.acceptAction(this.#gameoverCallback.bind(this));
        }
        // Handle Menu Action
        else if (this._menu.controller) {
            // Handle Sub-Menu Selected
            if (this._menu.acceptAction()) {
                this._sub_set = true;
                this._menu.controller = false;
                this._sub_menu = this._menu.setSubMenu();
                this.#takeDownCallback();
                this.#showCallback(this._sub_menu.module, true);
            } 
            // Handle Return Selected
            else 
                this.#close();
        }
        // Handle Sub-Menu Action
        else if (this._sub_set) {
            // Handle Option Selected
            if (this._sub_menu.acceptAction()) {
                // Handle Game Set
                if (this._sub_menu.selected.key === "Level") {
                    this._tm.setLevel(this._sub_menu.selected.value);
                    // this._km.setGame(this._sub_menu.selected.value);
                    this.#close();
                }
                
                // Handle Theme Set
                if (this._sub_menu.selected.key === "Theme") {
                    this._tm.setTheme(this._sub_menu.selected.value);
                    this.#close();
                }

                // Handle Controls Information Get
                if (this._sub_menu.selected.key === "Controls") {
                    this._info.setTitle("Controller Information");
                    this._info.setMessage(
                        "W - Same as Up-Button\n" +
                        "D - Same as Right-Button\n" +
                        "S - Same as Down-Button\n" + 
                        "A - Same as Left-Button\n" +
                        "O - Same as B-Button\n" +
                        "K - Same as A-Button\n" +
                        "Space - Same as Start\n" + 
                        "Shift - Same as Select"
                    );
                    this.#close();
                    this.#showCallback(this._info.module, true);
                }
            }
            // Handle Return Selected
            else 
                this.#mainReturn();
        }
    }

    /**
     * B Callback Method
     * 
     * Handles the Click of the B Action Button.
     */
    bCallback () {
        // Handle Grid Action
        if (this._error.active) {
            this.#takeDownCallback();
            this._tm.controller = true;
            this._error.active = false;
        }
    }

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () {
        // Menu to be Displayed
        if (this._tm.controller) {
            // Set Menu to be Controlled
            this._tm.controller = false;
            this._menu.controller = true;

            // Display the Menu
            this.#showCallback(this._menu.module, true);
        }

        // Menu to be Taken Down
        else {
            // Set Tic-Tac-Toe to be Controlled
            this._tm.controller = true;
            this._menu.controller = false;
            
            // Take Down Menu/Sub-Menu
            this.#takeDownCallback();
            if (this._sub_set) {
                this._menu.resetSubMenus();
                this._sub_set = false;
            }
        }
    }

    /**
     * Select Callback Method
     * 
     * Handles the Click of the Select User Button.
     */
    selectCallback () {}

    /**
     * Main Return Method
     * 
     * Return to the Main Menu from the Sub-Menu.
     */
    #mainReturn () {
        this._sub_set = false;
        this._menu.controller = true;
        this.#takeDownCallback();
        this.#showCallback(this._menu.module, true);
    }

    /**
     * Close Method
     * 
     * Outside of clicking the Start button, if the User is using the Menu, and 
     * selects an option such that the menu should close, this method will 
     * complete that task.
     */
    #close () {
        this._sub_set = false;
        this._tm.controller = true;
        this._menu.controller = false;
        this.#takeDownCallback();
    }

    /**
     * Gameover Callback Method
     * 
     * Method used for informing the User of the End Game Results.
     * 
     * @param {string} msg Game Over Message
     * @param {boolean} error Default is No Error
     */
    #gameoverCallback (msg, error=false) {
        // Display End Game Information if there are no errors.
        if (!error) {
            // Set Information Box Parameters
            this._info.setTitle("Game Over!");
            this._info.setMessage(msg);

            // Update Cursor Control
            this._tm.controller = false;
            this._info.controller = true;

            // Display Information
            this.#showCallback(this._info.module, true);
        }

        // Otherwise, inform the User of the Error
        else {
            // Set Error Box Parameters
            this._error.setMessage(msg);

            // Update Cursor Control
            this._tm.controller = false;
            
            // Display Error
            this.#showCallback(this._error.module, true);
        }
    }
}

/***/ }),

/***/ "./src/fonts/AlexBrush-Regular-OTF.otf":
/*!*********************************************!*\
  !*** ./src/fonts/AlexBrush-Regular-OTF.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ca08e2cd78827b13dd2.otf";

/***/ }),

/***/ "./src/fonts/Beon-Regular.otf":
/*!************************************!*\
  !*** ./src/fonts/Beon-Regular.otf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07144caf899a050cb869.otf";

/***/ }),

/***/ "./src/fonts/Gothica-Book.ttf":
/*!************************************!*\
  !*** ./src/fonts/Gothica-Book.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b31ddefd8f9b01b38f96.ttf";

/***/ }),

/***/ "./src/fonts/MeromSans-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/MeromSans-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e52d9502c4b9b0c64e77.ttf";

/***/ }),

/***/ "./src/fonts/Rich Eatin'.otf":
/*!***********************************!*\
  !*** ./src/fonts/Rich Eatin'.otf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e3179af9243862e952a.otf";

/***/ }),

/***/ "./src/fonts/dogica.ttf":
/*!******************************!*\
  !*** ./src/fonts/dogica.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "214cd23097c4c02eb9bd.ttf";

/***/ }),

/***/ "./src/fonts/freemetto.ttf":
/*!*********************************!*\
  !*** ./src/fonts/freemetto.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aafd63724f52b04e8587.ttf";

/***/ }),

/***/ "./src/tic-tac-toe-module/data/menu.json5":
/*!************************************************!*\
  !*** ./src/tic-tac-toe-module/data/menu.json5 ***!
  \************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"key":"Main","subs":[{"key":"Level","subs":[{"key":"Easy","subs":[]},{"key":"Hard","subs":[]}]},{"key":"Theme","subs":[{"key":"Normal","subs":[]},{"key":"Retro","subs":[]},{"key":"Neon","subs":[]},{"key":"Terminal","subs":[]},{"key":"Fancy","subs":[]},{"key":"Scruffy","subs":[]}]},{"key":"Controls","subs":[{"key":"Information","subs":[]}]}]}');

/***/ }),

/***/ "./src/tic-tac-toe-module/data/select.json5":
/*!**************************************************!*\
  !*** ./src/tic-tac-toe-module/data/select.json5 ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"difficulty":{"description":"Please choose a difficulty level.","categories":[{"key":"Easy"},{"key":"Hard"}]},"marker":{"description":"Please choose a marker.","categories":[{"key":"o"},{"key":"x"}]}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tic-tac-toe-module/ttt-game.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrRUFBNEI7QUFDNUMsZ0JBQWdCLGlFQUEyQjtBQUMzQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcG9wLXVwLW1vZHVsZS9wb3AtdXAtc3R5bGluZy5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dhbWUtc3R5bGluZy5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dyaWQtbW9kdWxlL2dyaWQtc3R5bGluZy5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3BvcC11cC1tb2R1bGUvcG9wLXVwLXN0eWxpbmcuY3NzP2Y3NDUiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dhbWUtc3R5bGluZy5jc3M/MzkxMyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy90aWMtdGFjLXRvZS1tb2R1bGUvZ3JpZC1tb2R1bGUvZ3JpZC1zdHlsaW5nLmNzcz8wOTA3Iiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9nYW1lLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL2Vycm9yLWJveC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL2luZm8tYm94LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3BvcC11cC1tb2R1bGUvbWVudS1iYXNlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3BvcC11cC1tb2R1bGUvbWVudS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL3BvcC11cC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL3NlbGVjdC1ib3guanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dhbWUtbW9kdWxlL2dhbWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dhbWUtbW9kdWxlL2xldmVscy9lYXN5LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLW1vZHVsZS9sZXZlbHMvaGFyZC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy90aWMtdGFjLXRvZS1tb2R1bGUvZ2FtZS1tb2R1bGUvbGV2ZWxzL2xldmVsLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLW1vZHVsZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dyaWQtbW9kdWxlL2NlbGwuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dyaWQtbW9kdWxlL2dyaWQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL21haW4tbW9kdWxlL3R0dC1tYW5hZ2VyLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS90dHQtZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmluZm8tY29tcG9uZW50cyB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhXCI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDNyZW07XG59XG5cbi5pbmZvLWNvbXBvbmVudHMgPiBkaXYgeyBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmxhY2spOyB9XG5cbi5tZW51LWNvbnRhaW5lcixcbi5zZWxlY3QtY29udGFpbmVyLFxuLmluZm9ybWF0aW9uLWNvbnRhaW5lciB7IGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiOyB9XG5cbi5tZW51LWJveCxcbi5zZWxlY3QtYm94LFxuLmluZm9ybWF0aW9uLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uaW5mb3JtYXRpb24tYm94IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLyogLmluZm8tbWVzc2FnZSB7IGZvbnQtc2l6ZTogMC40cmVtOyB9ICovXG5cbi5tZW51LXRpdGxlLFxuLnNlbGVjdC1kZXNjcmlwdGlvbixcbi5pbmZvcm1hdGlvbi10aXRsZSxcbi5lcnJvci10aXRsZSB7IGZvbnQtZmFtaWx5OiBcIkRvZ2ljYSBCb2xkXCI7IH1cblxuLm1lbnUtYm94ID4gZGl2LFxuLnNlbGVjdC1ib3ggPiBkaXYsXG4uaW5mb3JtYXRpb24tYm94ID4gZGl2IHsgdGV4dC1hbGlnbjogc3RhcnQ7IH1cblxuLm1lbnUtYm94ID4gZGl2LmN1cnNvcixcbi5zZWxlY3QtYm94ID4gZGl2LmN1cnNvciB7XG4gICAgYW5pbWF0aW9uOiBmYWRlIDEuNXMgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmVycm9yLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXJyb3ItYm94LFxuLnNlbGVjdC1ib3gsXG4uaW5mb3JtYXRpb24tYm94LFxuLm1lbnUtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNDtcbiAgICBib3JkZXI6IDNweCB2YXIoLS10ZXh0LWNvbG91cikgc29saWQ7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXJyb3ItYm94IHtcbiAgICBmb250LWZhbWlseTogXCJEb2dpY2EgQm9sZFwiO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3Itc2NyZWVuKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZCB7XG4gICAgei1pbmRleDogMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgb3BhY2l0eTogMC43O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcC11cC1tb2R1bGUvcG9wLXVwLXN0eWxpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUEseUJBQXlCLHFDQUFxQyxFQUFFOztBQUVoRTs7eUJBRXlCLHFCQUFxQixFQUFFOztBQUVoRDs7O0lBR0ksK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQSx5Q0FBeUM7O0FBRXpDOzs7ZUFHZSwwQkFBMEIsRUFBRTs7QUFFM0M7O3lCQUV5QixpQkFBaUIsRUFBRTs7QUFFNUM7O0lBRUksNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW5mby1jb21wb25lbnRzIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5pbmZvLWNvbXBvbmVudHMgPiBkaXYgeyBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmxhY2spOyB9XFxuXFxuLm1lbnUtY29udGFpbmVyLFxcbi5zZWxlY3QtY29udGFpbmVyLFxcbi5pbmZvcm1hdGlvbi1jb250YWluZXIgeyBmb250LWZhbWlseTogXFxcIkRvZ2ljYVxcXCI7IH1cXG5cXG4ubWVudS1ib3gsXFxuLnNlbGVjdC1ib3gsXFxuLmluZm9ybWF0aW9uLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uaW5mb3JtYXRpb24tYm94IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLyogLmluZm8tbWVzc2FnZSB7IGZvbnQtc2l6ZTogMC40cmVtOyB9ICovXFxuXFxuLm1lbnUtdGl0bGUsXFxuLnNlbGVjdC1kZXNjcmlwdGlvbixcXG4uaW5mb3JtYXRpb24tdGl0bGUsXFxuLmVycm9yLXRpdGxlIHsgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2EgQm9sZFxcXCI7IH1cXG5cXG4ubWVudS1ib3ggPiBkaXYsXFxuLnNlbGVjdC1ib3ggPiBkaXYsXFxuLmluZm9ybWF0aW9uLWJveCA+IGRpdiB7IHRleHQtYWxpZ246IHN0YXJ0OyB9XFxuXFxuLm1lbnUtYm94ID4gZGl2LmN1cnNvcixcXG4uc2VsZWN0LWJveCA+IGRpdi5jdXJzb3Ige1xcbiAgICBhbmltYXRpb246IGZhZGUgMS41cyBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmVycm9yLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmVycm9yLWJveCxcXG4uc2VsZWN0LWJveCxcXG4uaW5mb3JtYXRpb24tYm94LFxcbi5tZW51LWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG4gICAgYm9yZGVyOiAzcHggdmFyKC0tdGV4dC1jb2xvdXIpIHNvbGlkO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lcnJvci1ib3gge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRvZ2ljYSBCb2xkXFxcIjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLXNjcmVlbik7XFxufVxcblxcbi5ibHVycmVkLWJhY2tncm91bmQge1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9NZXJvbVNhbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9kb2dpY2EudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvR290aGljYS1Cb29rLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0FsZXhCcnVzaC1SZWd1bGFyLU9URi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9mcmVlbWV0dG8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUmljaCBFYXRpbicub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQmVvbi1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTWVyb20gU2Fuc1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJEb2dpY2FcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR290aGljYVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJBbGV4IEJydXNoXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSlcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRnJlZSBNZXR0b1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJSaWNoIEVhdGluXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkJlb25cIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX199KTtcbn1cblxuOnJvb3Qge1xuICAgIC0td2hpdGU6ICNmZGZmZmM7XG4gICAgLS1ibGFjazogIzAyMDEwMDtcbn1cblxuOnJvb3Qubm9ybWFsIHtcbiAgICAtLWZvbnQ6IFwiTWVyb20gU2Fuc1wiO1xuICAgIC0tbWFya2VyLWZvbnQ6IFwiRnJlZSBNZXR0b1wiO1xuICAgIC0td2hpdGU6ICNmZmVjZDE7XG4gICAgLS1ibGFjazogIzAwMTUyNDtcbiAgICAtLXNjcmVlbjogIzE1NjE2ZDtcbiAgICAtLWVycm9yLXNjcmVlbjogIzc4MjkwZjtcbiAgICAtLWJvcmRlci1jb2xvdXI6ICNmZjdkMDA7XG4gICAgLS1jdXJzb3I6ICMzNmJjZTE7XG4gICAgLS10ZXh0LWNvbG91cjogIzAwMTUyNDtcbiAgICAtLWJvdHRvbS1ib3JkZXI6ICNmZjdkMDA7XG59XG5cbjpyb290LnJldHJvIHtcbiAgICAtLWZvbnQ6IFwiRG9naWNhXCI7XG4gICAgLS1tYXJrZXItZm9udDogXCJEb2dpY2FcIjtcbiAgICAtLXdoaXRlOiAjYWFhYWFhO1xuICAgIC0tYmxhY2s6ICMwZjM4MGY7XG4gICAgLS1zY3JlZW46ICM5YmJjMGY7XG4gICAgLS1lcnJvci1zY3JlZW46ICNmNjk0OTM7XG4gICAgLS1ib3JkZXItY29sb3VyOiAjYjVhZjQyO1xuICAgIC0tY3Vyc29yOiAjOGJhYzBmO1xuICAgIC0tdGV4dC1jb2xvdXI6ICMwZjM4MGY7XG4gICAgLS1ib3R0b20tYm9yZGVyOiAjYjVhZjQyO1xufVxuXG46cm9vdC5uZW9uIHtcbiAgICAtLWZvbnQ6IFwiQmVvblwiO1xuICAgIC0tbWFya2VyLWZvbnQ6IFwiQmVvblwiO1xuICAgIC0td2hpdGU6ICNlYTAwZDk7XG4gICAgLS1ibGFjazogIzEzM2U3YztcbiAgICAtLXNjcmVlbjogIzA5MTgzMztcbiAgICAtLWVycm9yLXNjcmVlbjogI2YyM2NhNjtcbiAgICAtLWJvcmRlci1jb2xvdXI6ICM3MTFjOTE7XG4gICAgLS1jdXJzb3I6ICMwYWJkYzY7XG4gICAgLS10ZXh0LWNvbG91cjogI2ZiZmYzNjtcbiAgICAtLWJvdHRvbS1ib3JkZXI6ICM3MTFjOTE7XG59XG5cbjpyb290LnRlcm1pbmFsIHtcbiAgICAtLWZvbnQ6IFwiRG9naWNhXCI7XG4gICAgLS1tYXJrZXItZm9udDogXCJEb2dpY2FcIjtcbiAgICAtLXdoaXRlOiBibGFjaztcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLXNjcmVlbjogYmxhY2s7XG4gICAgLS1lcnJvci1zY3JlZW46IHJlZDtcbiAgICAtLWJvcmRlci1jb2xvdXI6IGdyZWVuO1xuICAgIC0tY3Vyc29yOiBibGFjaztcbiAgICAtLXRleHQtY29sb3VyOiBncmVlbjtcbiAgICAtLWJvdHRvbS1ib3JkZXI6IGJsYWNrO1xufVxuXG46cm9vdC5mYW5jeSB7XG4gICAgLS1mb250OiBcIkdvdGhpY2FcIjtcbiAgICAtLW1hcmtlci1mb250OiBcIkFsZXggQnJ1c2hcIjtcbiAgICAtLXdoaXRlOiAjZWZlZmU5O1xuICAgIC0tYmxhY2s6ICMyMjMwMzA7XG4gICAgLS1zY3JlZW46ICNlOGQ5Y2Q7XG4gICAgLS1lcnJvci1zY3JlZW46ICNkNzUwNGQ7XG4gICAgLS1ib3JkZXItY29sb3VyOiAjNTIzZDM1O1xuICAgIC0tY3Vyc29yOiAjYmJhNTg0O1xuICAgIC0tdGV4dC1jb2xvdXI6ICMyMjMwMzA7XG4gICAgLS1ib3R0b20tYm9yZGVyOiAjNTIzZDM1O1xufVxuXG46cm9vdC5zY3J1ZmZ5IHtcbiAgICAtLWZvbnQ6IFwiUmljaCBFYXRpblwiO1xuICAgIC0tbWFya2VyLWZvbnQ6IFwiUmljaCBFYXRpblwiO1xuICAgIC0td2hpdGU6ICNmN2Y3Zjc7XG4gICAgLS1ibGFjazogIzE3MGYxMTtcbiAgICAtLXNjcmVlbjogIzIxYzViMDtcbiAgICAtLWVycm9yLXNjcmVlbjogIzdhMGEwYTtcbiAgICAtLWJvcmRlci1jb2xvdXI6ICNkZmNjMTY7XG4gICAgLS1jdXJzb3I6ICMxMmEzNjU7XG4gICAgLS10ZXh0LWNvbG91cjogIzE3MGYxMTtcbiAgICAtLWJvdHRvbS1ib3JkZXI6ICNkZmNjMTY7XG59XG5cbi50aWMtdGFjLXRvZS1nYW1lLW1vZHVsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNjb3JlY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXJzb3IpO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvdXIpO1xufVxuXG4uc2NvcmVjYXJkID4gW2NsYXNzKj1cIi1zY29yZWNhcmRcIl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmluZm9ybWF0aW9uLWNvbnRhaW5lciB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XG5cbi5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDFyZW07IH1cblxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAwJSB7IFxuICAgICAgICBvcGFjaXR5OiAwOyBcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvdXIpO1xuICAgIH1cbiAgICA1MCUgeyBcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvdHRvbS1ib3JkZXIpO1xuICAgIH1cbiAgICAxMDAlIHsgXG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3VyKTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dhbWUtc3R5bGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQTBDO0FBQzlDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUErQjtBQUNuQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBcUM7QUFDekM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQXNDO0FBQzFDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULCtCQUErQjtJQUMvQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUEseUJBQXlCLGlCQUFpQixFQUFFOztBQUU1QyxnQkFBZ0IsZUFBZSxFQUFFOzs7QUFHakM7SUFDSTtRQUNJLFVBQVU7UUFDViw2Q0FBNkM7SUFDakQ7SUFDQTtRQUNJLFVBQVU7UUFDViw2Q0FBNkM7SUFDakQ7SUFDQTtRQUNJLFVBQVU7UUFDViw2Q0FBNkM7SUFDakQ7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNZXJvbSBTYW5zXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL01lcm9tU2Fucy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvZG9naWNhLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHb3RoaWNhXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0dvdGhpY2EtQm9vay50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQWxleCBCcnVzaFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9BbGV4QnJ1c2gtUmVndWxhci1PVEYub3RmXFxcIilcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRnJlZSBNZXR0b1xcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9mcmVlbWV0dG8udHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlJpY2ggRWF0aW5cXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvUmljaFxcXFwgRWF0aW5cXFxcJy5vdGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmVvblxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9CZW9uLVJlZ3VsYXIub3RmXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS13aGl0ZTogI2ZkZmZmYztcXG4gICAgLS1ibGFjazogIzAyMDEwMDtcXG59XFxuXFxuOnJvb3Qubm9ybWFsIHtcXG4gICAgLS1mb250OiBcXFwiTWVyb20gU2Fuc1xcXCI7XFxuICAgIC0tbWFya2VyLWZvbnQ6IFxcXCJGcmVlIE1ldHRvXFxcIjtcXG4gICAgLS13aGl0ZTogI2ZmZWNkMTtcXG4gICAgLS1ibGFjazogIzAwMTUyNDtcXG4gICAgLS1zY3JlZW46ICMxNTYxNmQ7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjNzgyOTBmO1xcbiAgICAtLWJvcmRlci1jb2xvdXI6ICNmZjdkMDA7XFxuICAgIC0tY3Vyc29yOiAjMzZiY2UxO1xcbiAgICAtLXRleHQtY29sb3VyOiAjMDAxNTI0O1xcbiAgICAtLWJvdHRvbS1ib3JkZXI6ICNmZjdkMDA7XFxufVxcblxcbjpyb290LnJldHJvIHtcXG4gICAgLS1mb250OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgLS1tYXJrZXItZm9udDogXFxcIkRvZ2ljYVxcXCI7XFxuICAgIC0td2hpdGU6ICNhYWFhYWE7XFxuICAgIC0tYmxhY2s6ICMwZjM4MGY7XFxuICAgIC0tc2NyZWVuOiAjOWJiYzBmO1xcbiAgICAtLWVycm9yLXNjcmVlbjogI2Y2OTQ5MztcXG4gICAgLS1ib3JkZXItY29sb3VyOiAjYjVhZjQyO1xcbiAgICAtLWN1cnNvcjogIzhiYWMwZjtcXG4gICAgLS10ZXh0LWNvbG91cjogIzBmMzgwZjtcXG4gICAgLS1ib3R0b20tYm9yZGVyOiAjYjVhZjQyO1xcbn1cXG5cXG46cm9vdC5uZW9uIHtcXG4gICAgLS1mb250OiBcXFwiQmVvblxcXCI7XFxuICAgIC0tbWFya2VyLWZvbnQ6IFxcXCJCZW9uXFxcIjtcXG4gICAgLS13aGl0ZTogI2VhMDBkOTtcXG4gICAgLS1ibGFjazogIzEzM2U3YztcXG4gICAgLS1zY3JlZW46ICMwOTE4MzM7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjZjIzY2E2O1xcbiAgICAtLWJvcmRlci1jb2xvdXI6ICM3MTFjOTE7XFxuICAgIC0tY3Vyc29yOiAjMGFiZGM2O1xcbiAgICAtLXRleHQtY29sb3VyOiAjZmJmZjM2O1xcbiAgICAtLWJvdHRvbS1ib3JkZXI6ICM3MTFjOTE7XFxufVxcblxcbjpyb290LnRlcm1pbmFsIHtcXG4gICAgLS1mb250OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgLS1tYXJrZXItZm9udDogXFxcIkRvZ2ljYVxcXCI7XFxuICAgIC0td2hpdGU6IGJsYWNrO1xcbiAgICAtLWJsYWNrOiBibGFjaztcXG4gICAgLS1zY3JlZW46IGJsYWNrO1xcbiAgICAtLWVycm9yLXNjcmVlbjogcmVkO1xcbiAgICAtLWJvcmRlci1jb2xvdXI6IGdyZWVuO1xcbiAgICAtLWN1cnNvcjogYmxhY2s7XFxuICAgIC0tdGV4dC1jb2xvdXI6IGdyZWVuO1xcbiAgICAtLWJvdHRvbS1ib3JkZXI6IGJsYWNrO1xcbn1cXG5cXG46cm9vdC5mYW5jeSB7XFxuICAgIC0tZm9udDogXFxcIkdvdGhpY2FcXFwiO1xcbiAgICAtLW1hcmtlci1mb250OiBcXFwiQWxleCBCcnVzaFxcXCI7XFxuICAgIC0td2hpdGU6ICNlZmVmZTk7XFxuICAgIC0tYmxhY2s6ICMyMjMwMzA7XFxuICAgIC0tc2NyZWVuOiAjZThkOWNkO1xcbiAgICAtLWVycm9yLXNjcmVlbjogI2Q3NTA0ZDtcXG4gICAgLS1ib3JkZXItY29sb3VyOiAjNTIzZDM1O1xcbiAgICAtLWN1cnNvcjogI2JiYTU4NDtcXG4gICAgLS10ZXh0LWNvbG91cjogIzIyMzAzMDtcXG4gICAgLS1ib3R0b20tYm9yZGVyOiAjNTIzZDM1O1xcbn1cXG5cXG46cm9vdC5zY3J1ZmZ5IHtcXG4gICAgLS1mb250OiBcXFwiUmljaCBFYXRpblxcXCI7XFxuICAgIC0tbWFya2VyLWZvbnQ6IFxcXCJSaWNoIEVhdGluXFxcIjtcXG4gICAgLS13aGl0ZTogI2Y3ZjdmNztcXG4gICAgLS1ibGFjazogIzE3MGYxMTtcXG4gICAgLS1zY3JlZW46ICMyMWM1YjA7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjN2EwYTBhO1xcbiAgICAtLWJvcmRlci1jb2xvdXI6ICNkZmNjMTY7XFxuICAgIC0tY3Vyc29yOiAjMTJhMzY1O1xcbiAgICAtLXRleHQtY29sb3VyOiAjMTcwZjExO1xcbiAgICAtLWJvdHRvbS1ib3JkZXI6ICNkZmNjMTY7XFxufVxcblxcbi50aWMtdGFjLXRvZS1nYW1lLW1vZHVsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zY29yZWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG91cik7XFxufVxcblxcbi5zY29yZWNhcmQgPiBbY2xhc3MqPVxcXCItc2NvcmVjYXJkXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvcm1hdGlvbi1jb250YWluZXIgeyBmb250LXNpemU6IDEuNXJlbTsgfVxcblxcbi5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDFyZW07IH1cXG5cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgMCUgeyBcXG4gICAgICAgIG9wYWNpdHk6IDA7IFxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvdXIpO1xcbiAgICB9XFxuICAgIDUwJSB7IFxcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ib3R0b20tYm9yZGVyKTtcXG4gICAgfVxcbiAgICAxMDAlIHsgXFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvdXIpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRpYy10YWMtdG9lLWdyaWQge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4uY2VsbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3VyKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xufVxuXG4uY2VsbCA+IGRpdiB7IFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYXJrZXItZm9udCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY3Vyc29yLWNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1cnNvcik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGFuaW1hdGlvbjogYmxpbmsgMS41cyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9ncmlkLW1vZHVsZS9ncmlkLXN0eWxpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLHNDQUFzQztJQUN0Qyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUE4QjtJQUM5Qix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpYy10YWMtdG9lLWdyaWQge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvdXIpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xcbn1cXG5cXG4uY2VsbCA+IGRpdiB7IFxcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFya2VyLWZvbnQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjdXJzb3ItY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1cnNvcik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBhbmltYXRpb246IGJsaW5rIDEuNXMgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3AtdXAtc3R5bGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3AtdXAtc3R5bGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1zdHlsaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtc3R5bGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ3JpZC1zdHlsaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dyaWQtc3R5bGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbnRlcmZhY2Uge1xuICAgIC8qKlxuICAgICAqIEdhbWUgSW50ZXJmYWNlIENsYXNzXG4gICAgICogXG4gICAgICogQmFzZSBHYW1lIENsYXNzIHRoYXQgc2hvdWxkIGJlIEluaGVyaXRlZCBieSBPdGhlciBHYW1lcyB0byBiZSBQbGF5ZWQgb24gXG4gICAgICogdGhlIEdhbWVDaGlwLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBOYW1lIG9mIHRoZSBHYW1lXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHRpdGxlKSB7IHRoaXMuX3RpdGxlID0gdGl0bGU7IH1cblxuICAgIGdldCB0aXRsZSAoKSB7IHJldHVybiB0aGlzLl90aXRsZTsgfVxuXG4gICAgc2V0IHRpdGxlIChzdHIpIHsgdGhpcy5fdGl0bGU7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBTaG93IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgU2hvdyBDYWxsYmFjayBNZXRob2QgZm9yIFVwZGF0aW5nIHRoZSBHYW1lQ2hpcCBEaXNwbGF5XG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHNob3dDYWxsYmFjayBTaG93IENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIHRha2VEb3duQ2FsbGJhY2sgVGFrZSBEb3duIENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIGRpbWVuc2lvbnNDYWxsYmFjayBHZXQgRGltZW5zaW9ucyBDYWxsYmFja1xuICAgICAqL1xuICAgIHNldFNjZW5lIChzaG93Q2FsbGJhY2ssIHRha2VEb3duQ2FsbGJhY2ssIGdldERpbWVuc2lvbnMpIHt9XG5cbiAgICAvKipcbiAgICAgKiBVcCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgVXAgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHVwQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFJpZ2h0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBSaWdodCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgcmlnaHRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogRG93biBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgRG93biBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgZG93bkNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBMZWZ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBMZWZ0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBsZWZ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEEgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEEgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBhQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFNlbGVjdCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzZWxlY3RDYWxsYmFjayAoKSB7fVxufSIsImltcG9ydCBQb3BVcCBmcm9tIFwiLi9wb3AtdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JCb3ggZXh0ZW5kcyBQb3BVcCB7XG4gICAgLyoqXG4gICAgICogRXJyb3IgQm94IENsYXNzXG4gICAgICogXG4gICAgICogVXNlZCBmb3IgdXBkYXRpbmcgdGhlIFVzZXIgd2l0aCB0aGUgY3VycmVudCBlcnJvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFwiRXJyb3JcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgTWVzc2FnZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItbWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX21lc3NhZ2UpO1xuXG4gICAgICAgIC8vIFNldCBBY3RpdmUgdG8gYmUgRmFsc2VcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UgKCkgeyByZXR1cm4gdGhpcy5fbWVzc2FnZTsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKGVsZW0pIHsgdGhpcy5fbWVzc2FnZSA9IGVsZW07IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBNZXNzYWdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgRXJyb3IgQm94IHdpdGggdGhlIG1vc3QgdXAgdG8gZGF0ZSBlcnJvci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHh0IEVycm9yIE1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRNZXNzYWdlICh0eHQpIHsgXG4gICAgICAgIHRoaXMuX21lc3NhZ2UudGV4dENvbnRlbnQgPSB0eHQ7IFxuICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgUG9wVXAgZnJvbSBcIi4vcG9wLXVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9Cb3ggZXh0ZW5kcyBQb3BVcCB7XG4gICAgLyoqXG4gICAgICogSW5mb3JtYXRpb24gQm94IENsYXNzXG4gICAgICogXG4gICAgICogVXNlZCBmb3IgdXBkYXRpbmcgdGhlIFVzZXIgd2l0aCBJbmZvcm1hdGlvbiByZWxhdGluZyB0byB0aGUgY3VycmVudCBHYW1lIFxuICAgICAqIGJlaW5nIHBsYXllZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFwiSW5mb3JtYXRpb25cIik7XG5cbiAgICAgICAgLy8gQnVpbGQgTWVzc2FnZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaW5mby1tZXNzYWdlXCIpO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fbWVzc2FnZSk7XG5cbiAgICAgICAgLy8gU2V0IEFjdGl2ZSB0byBiZSBGYWxzZVxuICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZSAoKSB7IHJldHVybiB0aGlzLl9tZXNzYWdlOyB9XG5cbiAgICBzZXQgbWVzc2FnZSAoZWxlbSkgeyB0aGlzLl9tZXNzYWdlID0gZWxlbTsgfVxuXG4gICAgZ2V0IGFjdGl2ZSAoKSB7IHJldHVybiB0aGlzLl9hY3RpdmU7IH1cblxuICAgIHNldCBhY3RpdmUgKGJvb2wpIHsgdGhpcy5fYWN0aXZlID0gYm9vbDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb21wb25lbnRzIG9mIHRoZSBQb3AtVXAgQm94LCB0aGUgd2lkdGggYW5kIGhlaWdodCBhcmUgdG8gYmUgc2V0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBTY3JlZW4gV2lkdGggKHBpeGVscylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFNjcmVlbiBIZWlnaHQgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIFNldCBDb250YWluZXIgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG5cbiAgICAgICAgLy8gU2V0IEJsdXJyZWQgQmFja2dvdW5kIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgQm94IERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgYm94VyA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjkpO1xuICAgICAgICBjb25zdCBib3hIID0gTWF0aC5mbG9vcihoZWlnaHQgKiAwLjkpO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUud2lkdGggPSBgJHtib3hXfXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmhlaWdodCA9IGAke2JveEh9cHhgO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgQm94IFBvc2l0aW9uXG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHdpZHRoICogMC4xKTtcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihoZWlnaHQgKiAwLjEpO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcblxuICAgICAgICAvLyBTZXQgTWVzc2FnZSBGb250IFNpemVcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSBNYXRoLmZsb29yKE1hdGgubWluKHdpZHRoLCBoZWlnaHQpICogMC4wNCk7XG4gICAgICAgIHRoaXMuX21lc3NhZ2Uuc3R5bGUuZm9udFNpemUgPSBgJHtmb250U2l6ZX1weGA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFRpdGxlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgVGl0bGUgb2YgdGhlIEluZm9ybWF0aW9uIEJveC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHh0IE5ldyBUaXRsZVxuICAgICAqL1xuICAgIHNldFRpdGxlICh0eHQpIHsgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSB0eHQ7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBNZXNzYWdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgSW5mb3JtYXRpb24gQm94IHdpdGggdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiByZWxhdGVkIHRvIHRoZSBcbiAgICAgKiBnYW1lIGJlaW5nIHBsYXllZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHh0IEluZm9ybWF0aW9uIE1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRNZXNzYWdlICh0eHQpIHsgXG4gICAgICAgIHRoaXMuX21lc3NhZ2UudGV4dENvbnRlbnQgPSB0eHQ7IFxuICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgUG9wVXAgZnJvbSBcIi4vcG9wLXVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVCYXNlIGV4dGVuZHMgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIE1lbnUgQmFzZSBDbGFzc1xuICAgICAqIFxuICAgICAqIEJhc2UgQ2xhc3MgZm9yIE1haW4gTWVudXMgb3IgU3ViLU1lbnVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYXRlZ29yaWVzIENhdGVnb3JpZXMgZm9yIE1lbnVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY2F0ZWdvcmllcykge1xuICAgICAgICBzdXBlcihcIk1lbnVcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgT3B0aW9uIERPTSBFbGVtZW50c1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIGNhdGVnb3JpZXMuc3Vicy5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgb3B0aW9uLmlkID0gYCR7c3ViLmtleS50b0xvd2VyQ2FzZSgpfS1vcHRpb25gO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gc3ViLmtleTtcbiAgICAgICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJ1aWxkIFJldHVybiBPcHRpb24gRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fcmV0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5hZGQoXCJyZXR1cm4tb3B0aW9uXCIpO1xuICAgICAgICB0aGlzLl9yZXR1cm4udGV4dENvbnRlbnQgPSBcIlJldHVyblwiO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fcmV0dXJuKTtcblxuICAgICAgICAvLyBTZXR1cCBDdXJzb3JcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fbmFtZSA9IGNhdGVnb3JpZXMua2V5O1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHtcbiAgICAgICAgICAgIGtleTogdGhpcy5fbmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IG9wdGlvbnMgKCkgeyByZXR1cm4gdGhpcy5fb3B0aW9uczsgfVxuXG4gICAgc2V0IG9wdGlvbnMgKGFycikgeyB0aGlzLl9vcHRpb25zID0gYXJyOyB9XG5cbiAgICBnZXQgcmV0dXJuICgpIHsgcmV0dXJuIHRoaXMuX3JldHVybjsgfVxuXG4gICAgc2V0IHJldHVybiAoZWxlbSkgeyB0aGlzLl9yZXR1cm4gPSBlbGVtOyB9XG5cbiAgICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG5cbiAgICBzZXQgbmFtZSAoc3RyKSB7IHRoaXMuX25hbWUgPSBzdHI7IH1cblxuICAgIGdldCBzZWxlY3RlZCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3RlZDsgfVxuXG4gICAgc2V0IHNlbGVjdGVkIChkaWN0KSB7IHRoaXMuX3NlbGVjdGVkID0gZGljdDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb21wb25lbnRzIG9mIHRoZSBNZW51IEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBzdXBlci5zZXREaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBPcHRpb25zIFdpZHRoXG4gICAgICAgIGNvbnN0IGJveFcgPSBNYXRoLmZsb29yKHdpZHRoICogMC42KTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5zdHlsZS53aWR0aCA9IGAke2JveFd9cHhgOyB9KTtcbiAgICAgICAgdGhpcy5fcmV0dXJuLnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEN1cnNvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGlsZSBjeWNsaW5nIHRocm91Z2ggdGhlIE1lbnUgT3B0aW9ucywgaWYgdGhlIGN1cnNvciBpcyBvbiBhbiBvcHRpb24sIFxuICAgICAqIHRoZW4gdGhlIG9wdGlvbiBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbiBDdXJzb3Igb24gT3B0aW9uXG4gICAgICovXG4gICAgc2V0Q3Vyc29yIChvbj10cnVlKSB7XG4gICAgICAgIC8vIEhhbmRsZSBSZXR1cm4gT3B0aW9uXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50ID09PSB0aGlzLl9vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSB0aGlzLl9yZXR1cm4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY3Vyc29yXCIpO1xuICAgICAgICAgICAgaWYgKG9uICYmICFjaGVjaylcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXR1cm4uY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmICghb24gJiYgY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3JcIik7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIEhhbmRsZSBPdGhlciBPcHRpb25zXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLmNsYXNzTGlzdC5jb250YWlucyhcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmIChvbiAmJiAhY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yXCIpO1xuICAgICAgICAgICAgaWYgKCFvbiAmJiBjaGVjaylcbiAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3JcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJ0aWNhbCBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1vdmluZyB0aGUgQ3Vyc29yIFVwIG9yIERvd24gb24gdGhlIE1lbnUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1cCBEZWZhdWx0IEFjdGlvbiBpcyBVcHdhcmRzXG4gICAgICovXG4gICAgdmVydGljYWxNb3ZlICh1cD10cnVlKSB7XG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50ICsgKHVwID8gLTEgOiAxKTtcbiAgICAgICAgaWYgKGN1cnIgPD0gdGhpcy5fb3B0aW9ucy5sZW5ndGggJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gY3VycjtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2NlcHQgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENob29zZXMgdGhlIE9wdGlvbiBvbiB0aGUgTWVudSB0aGF0IHRoZSBVc2VyIGhhcyBzZWxlY3RlZCwgcmV0dXJuaW5nIHRydWUgXG4gICAgICogaW1wbGllcyB0aGF0IGFuIG9wdGlvbiB3YXMgc2VsZWN0ZWQsIGZhbHNlIGltcGxpZXMgdGhhdCB0aGUgcmV0dXJuIG9wdGlvbiBcbiAgICAgKiB3YXMgc2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSBmb3IgYW4gT3B0aW9uLCBGYWxzZSBmb3IgUmV0dXJuXG4gICAgICovXG4gICAgYWNjZXB0QWN0aW9uICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIFJldHVybiBTZWxlY3RcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnQgPT09IHRoaXMuX29wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgT3B0aW9ucyBTZWxlY3RcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQudmFsdWUgPSB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLnRleHRDb250ZW50O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IE1lbnVCYXNlIGZyb20gXCIuL21lbnUtYmFzZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgTWVudUJhc2Uge1xuICAgIC8qKlxuICAgICAqIE1lbnUgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGdpdmVuIENhdGVnb3JpZXMgZm9yIHRoZSBNZW51LCBhIGRpc3BsYXkgd2lsbCBiZSBwcmVzZW50ZWQgdG8gXG4gICAgICogdGhlIFVzZXIgZm9yIHRoZW0gdG8gU2VsZWN0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYXRlZ29yaWVzIEpTT04gT2JqZWN0IG9mIE1lbnUgQ2F0ZWdvcmllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjYXRlZ29yaWVzKSB7XG4gICAgICAgIHN1cGVyKGNhdGVnb3JpZXMpO1xuXG4gICAgICAgIC8vIEJ1aWxkIFN1Yi1NZW51c1xuICAgICAgICB0aGlzLl9zdWJzID0gW107XG4gICAgICAgIGNhdGVnb3JpZXMuc3Vicy5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IENyZWF0ZSBTdWItTWVudSBpZiBOZWNlc3NhcnlcbiAgICAgICAgICAgIGlmIChzdWIuc3Vicy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogc3ViLmtleSxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lbnU6IG5ldyBNZW51KHN1YilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZVxuICAgICAgICB0aGlzLl9jb250cm9sbGVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHN1YnMgKCkgeyByZXR1cm4gdGhpcy5fc3ViczsgfVxuXG4gICAgc2V0IHN1YnMgKGFycikgeyB0aGlzLl9zdWJzID0gYXJyOyB9XG5cbiAgICBnZXQgY29udHJvbGxlciAoKSB7IHJldHVybiB0aGlzLl9jb250cm9sbGVyOyB9XG5cbiAgICBzZXQgY29udHJvbGxlciAoYm9vbCkgeyB0aGlzLl9jb250cm9sbGVyID0gYm9vbDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb21wb25lbnRzIG9mIHRoZSBNZW51IEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC4gXG4gICAgICogQWRkaXRpb25hbGx5LCB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgU3ViLU1lbnUgQ29tcG9uZW50cyBhcmUgdG8gYmUgXG4gICAgICogc2V0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBTY3JlZW4gV2lkdGggKHBpeGVscylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFNjcmVlbiBIZWlnaHQgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IERpbWVuc2lvbnNcbiAgICAgICAgc3VwZXIuc2V0RGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9zdWJzLmZvckVhY2goc3ViID0+IHsgc3ViLm1lbnUuc2V0RGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KTsgfSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNldCBTdWItTWVudSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXRzIHRoZSBTdWItTWVudSBTZWxlY3RlZCBieSB0aGUgVXNlciB0byBiZSBvbiBEaXNwbGF5LlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFN1Yi1NZW51IERPTSBFbGVtZW50XG4gICAgICovXG4gICAgc2V0U3ViTWVudSAoKSB7XG4gICAgICAgIHRoaXMuX3N1YnNbdGhpcy5fY3VycmVudF0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJzW3RoaXMuX2N1cnJlbnRdLm1lbnU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgU3ViLU1lbnVzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldHMgdGhlIE1haW4gTWVudSB0byBiZSBvbiBEaXNwbGF5LlxuICAgICAqL1xuICAgIHJlc2V0U3ViTWVudXMgKCkgeyB0aGlzLl9zdWJzLmZvckVhY2goc3ViID0+IHsgc3ViLmNvbnRyb2xsZXIgPSBmYWxzZTsgfSk7IH1cbn0iLCJpbXBvcnQgXCIuL3BvcC11cC1zdHlsaW5nLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BVcCB7XG4gICAgLyoqXG4gICAgICogUG9wLVVwIENsYXNzXG4gICAgICogXG4gICAgICogU2V2ZXJhbCBDb21wb25lbnRzIHRvIHRoZSBHYW1lIHJlcXVpcmUgYSBQb3AtVXAgQm94LCBhbmQgdGhpcyBDbGFzcyBcbiAgICAgKiBSZXByZXNlbnRzIHRoYXQgQm94LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgZm9yIFBvcC1VcFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIC8vIEJ1aWxkIFBvcC1VcCBDb250YWluZXIgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS1jb250YWluZXJgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEJ1aWxkIFBvcC1VcCBCb3ggRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYm94LmNsYXNzTGlzdC5hZGQoYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS1ib3hgKTtcblxuICAgICAgICAvLyBCdWlsZCBUaXRsZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3RpdGxlLmNsYXNzTGlzdC5hZGQoYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS10aXRsZWApO1xuICAgICAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl90aXRsZSk7XG5cbiAgICAgICAgLy8gQnVpbGQgQmx1cnJlZCBCYWNrZ3JvdW5kIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2JsdXJyZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9ibHVycmVkLmNsYXNzTGlzdC5hZGQoXCJibHVycmVkLWJhY2tncm91bmRcIik7XG5cbiAgICAgICAgLy8gQXBwZW5kIENvbXBvbmVudHMgdG8gTW9kdWxlXG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9ibHVycmVkKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2JveCk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb21wb25lbnRzIG9mIHRoZSBQb3AtVXAgQm94LCB0aGUgd2lkdGggYW5kIGhlaWdodCBhcmUgdG8gYmUgc2V0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBTY3JlZW4gV2lkdGggKHBpeGVscylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFNjcmVlbiBIZWlnaHQgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIFNldCBDb250YWluZXIgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG5cbiAgICAgICAgLy8gU2V0IEJsdXJyZWQgQmFja2dvdW5kIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgQm94IERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgYm94VyA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjYpO1xuICAgICAgICBjb25zdCBib3hIID0gTWF0aC5mbG9vcihoZWlnaHQgKiAwLjYpO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUud2lkdGggPSBgJHtib3hXfXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmhlaWdodCA9IGAke2JveEh9cHhgO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgQm94IFBvc2l0aW9uXG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHdpZHRoICogMC4yKTtcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihoZWlnaHQgKiAwLjIpO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICB9XG59IiwiaW1wb3J0IFBvcFVwIGZyb20gXCIuL3BvcC11cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RCb3ggZXh0ZW5kcyBQb3BVcCB7XG4gICAgY29uc3RydWN0b3IgKGRlc2NyaXB0aW9uLCBjYXRlZ29yaWVzKSB7XG4gICAgICAgIHN1cGVyKFwiU2VsZWN0XCIpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBUaXRsZVxuICAgICAgICB0aGlzLl9ib3gucmVtb3ZlQ2hpbGQodGhpcy5fdGl0bGUpO1xuXG4gICAgICAgIC8vIEJ1aWxkIERlc2NyaXB0aW9uIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9kZXNjLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtZGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRoaXMuX2Rlc2MudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX2Rlc2MpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE9wdGlvbiBET00gRWxlbWVudHNcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5pZCA9IGAke2NhdGVnb3J5LmtleS50b0xvd2VyQ2FzZSgpfS1vcHRpb25gO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnkua2V5O1xuICAgICAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0dXAgQ3Vyc29yXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuXG4gICAgICAgIC8vIFNldCBBY3RpdmUgdG8gYmUgRmFsc2VcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2Rlc2M7IH1cblxuICAgIHNldCBkZXNjcmlwdGlvbiAoc3RyKSB7IHRoaXMuX2Rlc2MgPSBzdHI7IH1cblxuICAgIGdldCBvcHRpb25zICgpIHsgcmV0dXJuIHRoaXMuX29wdGlvbnM7IH1cblxuICAgIHNldCBvcHRpb25zIChhcnIpIHsgdGhpcy5fb3B0aW9ucyA9IGFycjsgfVxuXG4gICAgZ2V0IGFjdGl2ZSAoKSB7IHJldHVybiB0aGlzLl9hY3RpdmU7IH1cblxuICAgIHNldCBhY3RpdmUgKGJvb2wpIHsgdGhpcy5fYWN0aXZlID0gYm9vbDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb21wb25lbnRzIG9mIHRoZSBTZWxlY3QgQm94LCB0aGUgd2lkdGggYW5kIGhlaWdodCBhcmUgdG8gYmUgc2V0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBTY3JlZW4gV2lkdGggKHBpeGVscylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFNjcmVlbiBIZWlnaHQgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHN1cGVyLnNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgLy8gU2V0IENvbXBvbmVudCBXaWR0aFxuICAgICAgICB0aGlzLl9ib3hXID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuNik7XG4gICAgICAgIHRoaXMuX2Rlc2Muc3R5bGUud2lkdGggPSBgJHt0aGlzLl9ib3hXfXB4YDtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7IG9wdGlvbi5zdHlsZS53aWR0aCA9IGAke3RoaXMuX2JveFd9cHhgOyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgQ3Vyc29yIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoaWxlIGN5Y2xpbmcgdGhyb3VnaCB0aGUgU2VsZWN0IE9wdGlvbnMsIGlmIHRoZSBjdXJzb3IgaXMgb24gYW4gb3B0aW9uLCBcbiAgICAgKiB0aGVuIHRoZSBvcHRpb24gc2hvdWxkIGJlIGhpZ2hsaWdodGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb24gQ3Vyc29yIG9uIE9wdGlvblxuICAgICAqL1xuICAgIHNldEN1cnNvciAob249dHJ1ZSkge1xuICAgICAgICAvLyBIYW5kbGUgT3B0aW9uc1xuICAgICAgICBjb25zdCBjaGVjayA9IHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY3Vyc29yXCIpO1xuICAgICAgICBpZiAob24gJiYgIWNoZWNrKVxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yXCIpO1xuICAgICAgICBpZiAoIW9uICYmIGNoZWNrKVxuICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBTZWxlY3Rpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgTmV3IFNlbGVjdGlvbiwgdGhlIG1ldGhvZCB3aWxsIHJlc2V0IHRoZSBET00gRWxlbWVudHMgaW4gdGhlIFxuICAgICAqIFNlbGVjdGlvbiBCb3guXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2MgTmV3IERlc2NyaXB0aW9uIGZvciBTZWxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBjYXRlZ29yaWVzIE5ldyBMaXN0IG9mIENhdGVnb3JpZXNcbiAgICAgKi9cbiAgICBzZXRTZWxlY3Rpb25zIChkZXNjLCBjYXRlZ29yaWVzKSB7XG4gICAgICAgIC8vIFNldCBEZXNjcmlwdGlvblxuICAgICAgICB0aGlzLl9kZXNjLnRleHRDb250ZW50ID0gZGVzYztcblxuICAgICAgICAvLyBSZW1vdmUgT3B0aW9ucyBmcm9tIEJveFxuICAgICAgICB0aGlzLl9vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHsgdGhpcy5fYm94LnJlbW92ZUNoaWxkKG9wdGlvbik7IH0pO1xuXG4gICAgICAgIC8vIFNldCBOZXcgT3B0aW9uc1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgb3B0aW9uLmlkID0gYCR7Y2F0ZWdvcnkua2V5LnRvTG93ZXJDYXNlKCl9LW9wdGlvbmA7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjYXRlZ29yeS5rZXk7XG4gICAgICAgICAgICBvcHRpb24uc3R5bGUud2lkdGggPSBgJHt0aGlzLl9ib3hXfXB4YDtcbiAgICAgICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBDdXJzb3JcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZpbmcgdGhlIEN1cnNvciBVcCBvciBEb3duIG9uIHRoZSBTZWxlY3QgQm94LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXAgRGVmYXVsdCBBY3Rpb24gaXMgVXB3YXJkc1xuICAgICAqL1xuICAgIHZlcnRpY2FsTW92ZSh1cD10cnVlKSB7XG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50ICsgKHVwID8gLTEgOiAxKTtcbiAgICAgICAgaWYgKGN1cnIgPCB0aGlzLl9vcHRpb25zLmxlbmd0aCAmJiBjdXJyID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSBjdXJyO1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJzb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VwdCBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hvb3NlcyB0aGUgT3B0aW9uIG9uIHRoZSBTZWxlY3QgQm94IHRoYXQgdGhlIFVzZXIgaGFzIHNlbGVjdGVkLCBhbmQgdGhlXG4gICAgICogbWV0aG9kIHJldHVybnMgdGhlIHN0cmluZyBvZiB3aGF0IHdhcyBzZWxlY3RlZC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBTdHJpbmcgUmVwcmVzZW50YXRpb24gb2YgU2VsZWN0aW9uXG4gICAgICovXG4gICAgYWNjZXB0QWN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0udGV4dENvbnRlbnQ7IH1cbn0iLCJpbXBvcnQgRWFzeSBmcm9tIFwiLi9sZXZlbHMvZWFzeS5qc1wiO1xuaW1wb3J0IEhhcmQgZnJvbSBcIi4vbGV2ZWxzL2hhcmQuanNcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgICNUVVJOO1xuICAgICNTSVpFO1xuICAgICNMRVZFTFMgPSB7ZWFzeTogbnVsbCwgaGFyZDogbnVsbH07XG5cbiAgICAvKipcbiAgICAgKiBHYW1lIENsYXNzXG4gICAgICogXG4gICAgICogT2JqZWN0IGZvciB0cmFja2luZyB0aGUgY3VycmVudCBnYW1lLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFNpemUgb2YgR3JpZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChzaXplKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX2dyaWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspXG4gICAgICAgICAgICB0aGlzLl9ncmlkLnB1c2goW10pO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzID0gW107XG4gICAgICAgIHRoaXMuI1RVUk4gPSAwO1xuICAgICAgICB0aGlzLiNTSVpFID0gc2l6ZTtcbiAgICAgICAgdGhpcy4jTEVWRUxTLmVhc3kgPSBuZXcgRWFzeSgpO1xuICAgICAgICB0aGlzLiNMRVZFTFMuaGFyZCA9IG5ldyBIYXJkKFwieFwiLCB0aGlzLiNTSVpFKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNldCBEZWZhdWx0IEFsZ29yaXRobSB0byBiZSBFYXN5XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobSA9IHRoaXMuI0xFVkVMUy5lYXN5O1xuICAgIH1cblxuICAgIGdldCBncmlkICgpIHsgcmV0dXJuIHRoaXMuX2dyaWQ7IH1cblxuICAgIHNldCBncmlkIChhcnIpIHsgdGhpcy5fZ3JpZCA9IGFycjsgfVxuXG4gICAgZ2V0IHBsYXllcnMgKCkgeyByZXR1cm4gdGhpcy5fcGxheWVyczsgfVxuXG4gICAgc2V0IHBsYXllcnMgKGFycikgeyB0aGlzLl9wbGF5ZXJzID0gYXJyOyB9XG5cbiAgICBnZXQgYWxnb3JpdGhtICgpIHsgcmV0dXJuIHRoaXMuX2FsZ29yaXRobTsgfVxuXG4gICAgc2V0IGFsZ29yaXRobSAob2JqKSB7IHRoaXMuX2xldmVsID0gb2JqOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDcmVhdGUgUGxheWVyIE9iamVjdHMgZm9yIHRoZSBVcGNvbWluZyBHYW1lLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBub3VnaHQgUGxheWVyIDEgTm91Z2h0IG9yIENyb3NzXG4gICAgICovXG4gICAgc2V0dXAgKG5vdWdodCkge1xuICAgICAgICAvLyBDaGVjayBpZiBQbGF5ZXJzIGhhdmUgYWxyZWFkeSBiZWVuIGluaXRpYWxpc2VkXG4gICAgICAgIGlmICh0aGlzLl9wbGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKG5ldyBQbGF5ZXIobm91Z2h0LCB0aGlzLiNTSVpFKSk7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzLnB1c2gobmV3IFBsYXllcigobm91Z2h0ID09PSBcIm9cIiA/IFwieFwiIDogXCJvXCIpLCB0aGlzLiNTSVpFKSk7XG4gICAgICAgICAgICB0aGlzLiNMRVZFTFMuaGFyZC5tYXJrZXIgPSAobm91Z2h0ID09PSBcIm9cIiA/IFwieFwiIDogXCJvXCIpO1xuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgVXBkYXRlIFBsYXllcnMsIGlmIHJlcXVpcmVkXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3BsYXllcnNbMF0ubWFya2VyICE9PSBub3VnaHQpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBQbGF5ZXIgTWFya2Vyc1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyc1swXS5tYXJrZXIgPSBub3VnaHQ7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzWzFdLm1hcmtlciA9IChub3VnaHQgPT09IFwib1wiID8gXCJ4XCIgOiBcIm9cIik7XG4gICAgICAgICAgICB0aGlzLiNMRVZFTFMuaGFyZC5tYXJrZXIgPSAobm91Z2h0ID09PSBcIm9cIiA/IFwieFwiIDogXCJvXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IExldmVsIE1ldGhvZFxuICAgICAqIFxuICAgICAqIERpZmZpY3VsdHkgTGV2ZWwgaXMgc2V0IHdpdGggdGhpcyBNZXRob2QuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIEFsZ29yaXRobSBEaWZmaWN1bHR5XG4gICAgICovXG4gICAgc2V0TGV2ZWwgKGxldmVsKSB7IFxuICAgICAgICB0aGlzLl9hbGdvcml0aG0gPSB0aGlzLiNMRVZFTFNbbGV2ZWxdOyBcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpc2VkKVxuICAgICAgICAgICAgdGhpcy5zZXR1cCh0aGlzLl9wbGF5ZXJzWzBdLm1hcmtlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IE1hcmtlciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEN1cnJlbnQgVHVybiwgdGhlIG1ldGhvZCByZXR1cm5zIHRoZSBNYXJrZXIgb2YgdGhlIFBsYXllci5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUcnVlLCBpZiBDdXJyZW50IFR1cm4gaXMgTm91Z2h0XG4gICAgICovXG4gICAgZ2V0TWFya2VyICgpIHsgcmV0dXJuIHRoaXMuX3BsYXllcnNbdGhpcy4jVFVSTl0ubWFya2VyID09PSBcIm9cIiA/IHRydWUgOiBmYWxzZTsgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFJlc2V0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJlc2V0IFNjb3JlcyBhbmQgR3JpZC5cbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICAgIC8vIFJlc2V0IFBsYXllciBTY29yZXNcbiAgICAgICAgdGhpcy5fcGxheWVyc1swXS5yZXNldCgpO1xuICAgICAgICB0aGlzLl9wbGF5ZXJzWzFdLnJlc2V0KCk7XG5cbiAgICAgICAgLy8gUmVzZXQgR3JpZFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI1NJWkU7IGkrKykgXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI1NJWkU7IGorKylcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmlkW2ldW2pdID0gXCJcIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIFBsYXllciBBdHRlbXB0cyB0byBtYWtlIGEgbW92ZSwgdGhlIG1ldGhvZCB3aWxsIGVuc3VyZSB0aGF0IHRoZVxuICAgICAqIG1vdmUgd2FzIGEgbGVnYWwgb25lIG9yIG5vdCwgYW5kIGFsc28gY2hlY2sgaWYgdGhlIHJlc3VsdGluZyBtb3ZlIGhhcyBsZWRcbiAgICAgKiB0byB0aGUgZW5kIG9mIHRoZSBHYW1lLCB3aGV0aGVyIHRoYXQgcGxheWVyIGhhcyB3b24sIG9yIGlmIGl0IHJlc3VsdGVkIGluXG4gICAgICogYSBkcmF3LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEF0dGVtcHQgWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgQXR0ZW1wdCBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcmV0dXJucyBNZXNzYWdlIGluZGljYXRpbmcgQXR0ZW1wdCdzIFJlc3VsdFxuICAgICAqL1xuICAgIGF0dGVtcHQgKHgsIHkpIHtcbiAgICAgICAgLy8gUmVqZWN0IEF0dGVtcHRzIHRoYXQgYXJlIGJleW9uZCBHcmlkIEJvdW5kc1xuICAgICAgICBpZiAoeCA8IDMgJiYgeCA+PSAwICYmIHkgPCAzICYmIHkgPj0gMCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgQXR0ZW1wdCBpc24ndCBvbiBhbiBPY2N1cGllZCBDZWxsXG4gICAgICAgICAgICBpZiAodGhpcy4jbGVnYWwoeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgUGxheWVyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyc1t0aGlzLiNUVVJOXS5wbGF5KHgsIHkpO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIEdyaWRcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmlkW3ldW3hdID0gdGhpcy5fcGxheWVyc1t0aGlzLiNUVVJOXS5tYXJrZXI7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGNlayBpZiBQbGF5ZXIgaGFzIFdvblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wbGF5ZXJzW3RoaXMuI1RVUk5dLmhhc1dvbigpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyc1t0aGlzLiNUVVJOXS5tYXJrZXI7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgYSBEcmF3XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI2ZpbGxlZCgpKSBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRHJhdyFcIjtcblxuICAgICAgICAgICAgICAgIC8vIE5leHQgVHVyblxuICAgICAgICAgICAgICAgIHRoaXMuI1RVUk4gPSB0aGlzLiNUVVJOID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBHYW1lIHNob3VsZCBSZXN1bWVcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGBJbGxlZ2FsIE1vdmUhICgke3h9LCAke3l9KSBpcyBhbHJlYWR5IG9jY3VwaWVkIWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYElsbGVnYWwgTW92ZSEgKCR7eH0sICR7eX0pIGlzIG91dCBvZiBib3VuZHMhYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMZWdhbCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgdGhlIEF0dGVtcHQgaXMgTGVnYWwuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggQXR0ZW1wIFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IEF0dGVtcHQgWS1Db29yZGluYXRlXG4gICAgICogQHJldHVybnMgVHJ1ZSwgaWYgQXR0ZW1wdCBpcyBMZWdhbFxuICAgICAqL1xuICAgICNsZWdhbCAoeCwgeSkgeyByZXR1cm4gdGhpcy5fZ3JpZFt5XVt4XSA9PT0gXCJcIjsgfVxuXG4gICAgLyoqXG4gICAgICogRmlsbGVkIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiBhbGwgdGhlIGNlbGxzIGluIHRoZSBncmlkIGhhdmUgYmVlbiBtYXJrZWQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBHcmlkIGlzIEZ1bGx5IE1hcmtlZFxuICAgICAqL1xuICAgICNmaWxsZWQgKCkge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggR3JpZCBhbmQgU2VhcmNoIGZvciBVbm1hcmtlZCBDZWxsXG4gICAgICAgIGxldCBmaWxsZWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI1NJWkU7IGkrKylcbiAgICAgICAgICAgIGlmICh0aGlzLl9ncmlkW2ldLmluY2x1ZGVzKFwiXCIpKSB7XG4gICAgICAgICAgICAgICAgZmlsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpbGxlZDtcbiAgICB9XG59IiwiaW1wb3J0IExldmVsIGZyb20gXCIuL2xldmVsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVhc3kgZXh0ZW5kcyBMZXZlbCB7XG4gICAgLyoqXG4gICAgICogRWFzeSBMZXZlbCBDbGFzc1xuICAgICAqIFxuICAgICAqIEZvciB0aGUgVGljLVRhYy1Ub2UgR2FtZSwgdGhlIEVhc3kgTGV2ZWwgcmFuZG9tbHkgc2VsZWN0cyBpdHMgbmV4dCBtb3ZlLFxuICAgICAqIHdpdGhvdXQgYW55IGVmZm9ydCBmb3IgbWluaW1pc2luZyBsb3NzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHsgc3VwZXIoXCJlYXN5XCIpOyB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ3VycmVudCBHcmlkLCB0aGUgbWV0aG9kIHdpbGwgcmFuZG9tbHkgc2VsZWN0IGFuIHVub2NjdXBpZWQgY2VsbFxuICAgICAqIGFzIHRoZSBTZWxlY3RlZCBNb3ZlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW11bXX0gZ3JpZCBDdXJyZW50IEdyaWRcbiAgICAgKiBAcmV0dXJucyBTZWxlY3RlZCBNb3ZlXG4gICAgICovXG4gICAgcGxheSAoZ3JpZCkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIEF2YWlsYWJsZSBBcnJheVxuICAgICAgICBsZXQgYXZhaWxhYmxlID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggR3JpZCB0byBGaW5kIEF2YWlsYWJsZSBDZWxsc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgUHVzaCBBdmFpYWJsZSBDZWxscyBpbnRvIEFycmF5XG4gICAgICAgICAgICAgICAgaWYgKGdyaWRbal1baV0gPT09IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZS5wdXNoKHt4OiBqLCB5OiBpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gYSBSYW5kb20gU2VsZWN0aW9uIG9mIEF2YWlsYWJsZSBTcXVhcmVzXG4gICAgICAgIHJldHVybiBhdmFpbGFibGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlLmxlbmd0aCldO1xuICAgIH1cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9wbGF5ZXIuanNcIjtcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9sZXZlbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXJkIGV4dGVuZHMgTGV2ZWwge1xuICAgICNJTkZJTklUWSA9IDEwMDA7XG5cbiAgICAvKipcbiAgICAgKiBIYXJkIExldmVsIENsYXNzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBUaWMtVGFjLVRvZSBHYW1lLCB0aGUgSGFyZCBMZXZlbCB1dGlsaXNlcyB0aGUgTWluaW1heCBBbGdvcml0aG1cbiAgICAgKiB0byBmaW5kIHRoZSBOZXh0IE1vdmUgaXQgd2lsbCB0YWtlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXJrZXIgRGVmYXVsdCBBbGdvcml0aG0gTWFya2VyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgU2l6ZSBvZiB0aGUgR3JpZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChtYXJrZXIsIHNpemUpIHsgXG4gICAgICAgIHN1cGVyKFwiaGFyZFwiKTsgXG4gICAgICAgIHRoaXMuX21hcmtlciA9IG1hcmtlcjtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuX21vdmUgPSB7eDogLTEsIHk6IC0xfTtcbiAgICB9XG5cbiAgICBnZXQgbWFya2VyICgpIHsgcmV0dXJuIHRoaXMuX21hcmtlcjsgfVxuXG4gICAgc2V0IG1hcmtlciAoc3RyKSB7IHRoaXMuX21hcmtlciA9IHN0cjsgfVxuXG4gICAgZ2V0IHNpemUgKCkgeyByZXR1cm4gdGhpcy5fc2l6ZTsgfVxuXG4gICAgc2V0IHNpemUgKG51bSkgeyB0aGlzLl9zaXplID0gbnVtOyB9XG5cbiAgICBnZXQgbW92ZSAoKSB7IHJldHVybiB0aGlzLl9tb3ZlOyB9XG5cbiAgICBzZXQgbW92ZSAoZGljdCkgeyB0aGlzLl9tb3ZlID0gZGljdDsgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEN1cnJlbnQgR3JpZCwgdGhlIG1ldGhvZCB3aWxsIHNlbGVjdCB0aGUgbmV4dCBtb3ZlIHVzaW5nIHRoZSBcbiAgICAgKiBNaW5pbWF4IEFsZ29yaXRobSwgd2hpY2ggYWltcyB0byBtaW5pbWlzZSB0aGUgcG9zc2libGUgbG9zc2VzIGZvciBhbnkgXG4gICAgICogZ2l2ZW4gbW92ZSBmb3IgdGhlIHdvcnN0IHBvc3NpYmxlIG1vdmUgdGhlIFVzZXIgd2lsbCBtYWtlIChmcm9tIHRoZSBcbiAgICAgKiBjb21wdXRlcidzIHBlcnNwZWN0aXZlKS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdW119IGdyaWQgQ3VycmVudCBHcmlkXG4gICAgICogQHJldHVybnMgU2VsZWN0ZWQgTW92ZVxuICAgICAqL1xuICAgIHBsYXkgKGdyaWQpIHtcbiAgICAgICAgdGhpcy4jbWluaW1heChncmlkLCAwLCB0cnVlLCAodGhpcy5fbWFya2VyID09PSBcIm9cIiA/IFwieFwiIDogXCJvXCIpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmU7IFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1pbmltYXggQWxnb3JpdGhtIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFRoZSBNaW5pbWF4IEFsZ29yaXRobSBpcyBhIGRlY2lzaW9uIHRvb2wgZm9yIG1pbmltaXNpbmcgdGhlIHBvc3NpYmxlIGxvc3NcbiAgICAgKiBmb3IgYSB3b3JzdCBjYXNlIHNjZW5hcmlvLiBUaGlzIEFsZ29yaXRobSB3YXMgbW9kaWZpZWQgZm9yIHRoZSBjb250ZXh0IG9mXG4gICAgICogcGxheWluZyBUaWMtVGFjLVRvZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdW119IGdyaWQgQ3VycmVudCBHcmlkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIERlcHRoIG9mIFJlY3Vyc2lvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWF4aW1pc2luZyBEZWZhdWx0IGlzIE1heGltaXNpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWFya2VyIE1hcmtlciBmb3IgVHVyblxuICAgICAqIEByZXR1cm5zIFRoZSBDb3N0L0JlbmVmaXQgb2YgdGhlIE1vdmVcbiAgICAgKi9cbiAgICAjbWluaW1heCAoZ3JpZCwgZGVwdGg9MCwgbWF4aW1pc2luZz10cnVlLCBtYXJrZXI9XCJcIikge1xuICAgICAgICAvLyBDaGVjayBpZiBHYW1lIGlzIENvbXBsZXRlXG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy4jaXNDb21wbGV0ZShncmlkKTtcblxuICAgICAgICAvLyBSZXR1cm4gSGV1cmlzdGljIGZvciBTdGF0ZVxuICAgICAgICBpZiAoc3RhdGUgPT09IHRoaXMuX21hcmtlcilcbiAgICAgICAgICAgIHJldHVybiAxMDtcbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09ICh0aGlzLl9tYXJrZXIgPT09IFwib1wiID8gXCJ4XCIgOiBcIm9cIikpXG4gICAgICAgICAgICByZXR1cm4gLTEwO1xuICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gXCJEUkFXXCIpXG4gICAgICAgICAgICByZXR1cm4gMDtcblxuICAgICAgICAvLyBTZXR1cCBmb3IgTWluaW1heCBBbGdvcml0aG1cbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgaWR4O1xuICAgICAgICBjb25zdCBtb3ZlcyA9IHRoaXMuI2F2YWlsYWJsZU1vdmVzKGdyaWQpO1xuICAgICAgICBjb25zdCBuZXh0ID0gbWFya2VyID09PSBcIm9cIiA/IFwieFwiIDogXCJvXCI7XG5cbiAgICAgICAgLy8gSGFuZGxlIE1heGltaXNpbmcgUGxheWVyXG4gICAgICAgIGlmIChtYXhpbWlzaW5nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IC0xICogdGhpcy4jSU5GSU5JVFk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZSA9IG1vdmVzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gdGhpcy4jc2ltdWxhdGUoZ3JpZCwgbW92ZS54LCBtb3ZlLnksIG5leHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy4jbWluaW1heChuZXdTdGF0ZSwgZGVwdGggKyAxLCBmYWxzZSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgTW92ZVxuICAgICAgICAgICAgdGhpcy5fbW92ZSA9IG1vdmVzW2lkeF07XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBNaW5pbWlzaW5nIFBsYXllclxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy4jSU5GSU5JVFk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZSA9IG1vdmVzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gdGhpcy4jc2ltdWxhdGUoZ3JpZCwgbW92ZS54LCBtb3ZlLnksIG5leHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy4jbWluaW1heChuZXdTdGF0ZSwgZGVwdGggLSAxLCB0cnVlLCBuZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBNb3ZlXG4gICAgICAgICAgICB0aGlzLl9tb3ZlID0gbW92ZXNbaWR4XTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgQ29tcGxldGUgTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2sgaWYgYSBHaXZlbiBHcmlkIGlzIENvbXBsZXRlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW11bXX0gZ3JpZCBDdXJyZW50IEdyaWRcbiAgICAgKiBAcmV0dXJucyBTdGF0ZSBvZiBHcmlkXG4gICAgICovXG4gICAgI2lzQ29tcGxldGUgKGdyaWQpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgbGV0IHBsYXllcnMgPSB7XG4gICAgICAgICAgICBwMTogbmV3IFBsYXllcigodGhpcy5fbWFya2VyID09PSBcIm9cIiA/IFwieFwiOiBcIm9cIiksIHRoaXMuX3NpemUpLFxuICAgICAgICAgICAgcDI6IG5ldyBQbGF5ZXIodGhpcy5fbWFya2VyLCB0aGlzLl9zaXplKVxuICAgICAgICB9O1xuICAgICAgICBsZXQgZmlsbGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggRGVzaXJlZCBHcmlkXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIEZpcnN0IFBsYXllclxuICAgICAgICAgICAgICAgIGlmIChncmlkW2ldW2pdID09PSBwbGF5ZXJzLnAxLm1hcmtlcilcbiAgICAgICAgICAgICAgICAgICAgcGxheWVycy5wMS5wbGF5KGosIGkpO1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBTZWNvbmQgUGxheWVyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZ3JpZFtpXVtqXSA9PT0gcGxheWVycy5wMi5tYXJrZXIpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnMucDIucGxheShqLCBpKTtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgVW5wbGF5ZWQgQ2VsbFxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVycy5wMS5oYXNXb24oKSlcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJzLnAxLm1hcmtlcjtcbiAgICAgICAgZWxzZSBpZiAocGxheWVycy5wMi5oYXNXb24oKSlcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJzLnAyLm1hcmtlcjtcbiAgICAgICAgZWxzZSBpZiAoZmlsbGVkKVxuICAgICAgICAgICAgcmV0dXJuIFwiRFJBV1wiO1xuICAgICAgICByZXR1cm4gXCJJTkNPTVBMRVRFXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXZhaWxhYmxlIE1vdmVzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciBhIEN1cnJlbnQgU3RhdGUsIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIEF2YWlsYWJsZSBNb3Zlcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdW119IGdyaWQgQ3VycmVudCBTdGF0ZSBvZiBHYW1lXG4gICAgICogQHJldHVybnMgQXZhaWxhYmxlIE1vdmVzIGZvciBDdXJyZW50IFN0YXRlXG4gICAgICovXG4gICAgI2F2YWlsYWJsZU1vdmVzIChncmlkKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgTW92ZXMgQXJyYXlcbiAgICAgICAgY29uc3QgbW92ZXMgPSBbXTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggR3JpZCBhbmQgZmluZCBBdmFpbGFibGUgQ2VsbHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdyaWRbaV1bal0gPT09IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIG1vdmVzLnB1c2goe3g6IGosIHk6IGl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW11bGF0ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgYSBnaXZlbiBtb3ZlLCByZXR1cm4gYSBOZXcgR2FtZSBTdGF0ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdW119IGdyaWQgQ3VycmVudCBHcmlkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggTW92ZSBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBNb3ZlIFktQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXJrZXIgTWFya2VyIGZvciBNb3ZlXG4gICAgICogQHJldHVybnMgTmV3IEdhbWUgU3RhdGVcbiAgICAgKi9cbiAgICAjc2ltdWxhdGUgKGdyaWQsIHgsIHksIG1hcmtlcikge1xuICAgICAgICAvLyBJbml0aWFsaXNlIE5ldyBTdGF0ZVxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIG5ld1N0YXRlLnB1c2goW10pO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBNYXRyaXhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIE1hcmtlciB0byBDZWxsXG4gICAgICAgICAgICAgICAgaWYgKGogPT09IHggJiYgaSA9PT0geSlcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGVbaV0ucHVzaChtYXJrZXIpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBDdXJyZW50IE1hcmtlciBPdGhlcndpc2VcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlW2ldLnB1c2goZ3JpZFtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcbiAgICAvKipcbiAgICAgKiBMZXZlbCBDbGFzc1xuICAgICAqIFxuICAgICAqIEJhc2UgQ2xhc3MgZm9yIHRoZSBEaWZmaWN1bHR5IExldmVsIG9mIHRoZSBDb21wdXRlciBmb3IgdGhlIFRpYy1UYWMtVG9lXG4gICAgICogR2FtZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgRGlmZmljdWx0eSBMZXZlbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChsZXZlbCkgeyB0aGlzLl9sZXZlbCA9IGxldmVsOyB9XG5cbiAgICBnZXQgbGV2ZWwgKCkgeyByZXR1cm4gdGhpcy5fbGV2ZWw7IH1cblxuICAgIHNldCBsZXZlbCAoc3RyKSB7IHRoaXMuX2xldmVsID0gc3RyOyB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ3VycmVudCBHcmlkLCB0aGUgbWV0aG9kIHdpbGwgc2VsZWN0IHRoZSBuZXh0IG1vdmUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXVtdfSBncmlkIEN1cnJlbnQgR3JpZFxuICAgICAqIEByZXR1cm5zIFNlbGVjdGVkIE1vdmVcbiAgICAgKi9cbiAgICBwbGF5IChncmlkKSB7IHJldHVybiB7eDogLTEsIHk6IC0xfTsgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgLyoqXG4gICAgICogUGxheWVyIENsYXNzXG4gICAgICogXG4gICAgICogTWFuYWdhZXMgdGhlIFBsYXllcidzIE1hcmtlciAoaS5lLiBub3VnaHQgb3IgY3Jvc3MpIGFuZCBhbHNvIHRoZSBwbGF5ZXInc1xuICAgICAqIHNjb3JlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBub3VnaHQgTm91Z2h0IG9yIENyb3NzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKG5vdWdodCwgc2l6ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9tYXJrZXIgPSBub3VnaHQ7XG4gICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xuICAgICAgICB0aGlzLl9zY29yZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoc2l6ZSAqIDIgKyAyKTsgaSsrKVxuICAgICAgICAgICAgdGhpcy5fc2NvcmVzLnB1c2goMCk7XG4gICAgfVxuICAgIFxuICAgIGdldCBtYXJrZXIgKCkgeyByZXR1cm4gdGhpcy5fbWFya2VyOyB9XG5cbiAgICBzZXQgbWFya2VyIChzdHIpIHsgdGhpcy5fbWFya2VyID0gc3RyOyB9XG5cbiAgICBnZXQgc2NvcmVzICgpIHsgcmV0dXJuIHRoaXMuX3Njb3JlczsgfVxuXG4gICAgc2V0IHNjb3JlcyAoYXJyKSB7IHRoaXMuX3Njb3JlcyA9IGFycjsgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IGFsbCBzY29yZSB2YWx1ZXMgdG8gYmUgemVyby5cbiAgICAgKi9cbiAgICByZXNldCAoKSB7IHRoaXMuX3Njb3Jlcy5mb3JFYWNoKGUgPT4geyBlID0gMDsgfSk7IH1cblxuICAgIC8qKlxuICAgICAqIFBsYXkgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlcyB0aGUgUGxheWVyJ3MgU2NvcmUgQXJyYXkuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggTW92ZSBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBNb3ZlIFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIHBsYXkgKHgsIHkpIHtcbiAgICAgICAgLy8gVXBkYXRlIENvbHVtbiBTY29yZVxuICAgICAgICB0aGlzLl9zY29yZXNbeF0gKz0gMTtcbiAgICAgICAgLy8gVXBkYXRlIFJvdyBTY29yZVxuICAgICAgICB0aGlzLl9zY29yZXNbeSArIHRoaXMuX3NpemVdICs9IDE7XG4gICAgICAgIC8vIFVwZGF0ZSBOZWdhdGl2ZSBEaWFnb25hbCBTY29yZVxuICAgICAgICB0aGlzLl9zY29yZXNbdGhpcy5fc2NvcmVzLmxlbmd0aCAtIDJdICs9ICh4ID09PSB5ID8gMSA6IDApO1xuICAgICAgICAvLyBVcGRhdGUgUG9zaXRpdmUgRGlhZ29uYWwgU2NvcmVcbiAgICAgICAgdGhpcy5fc2NvcmVzW3RoaXMuX3Njb3Jlcy5sZW5ndGggLSAxXSArPSAoeCArIHkgPT09IHRoaXMuX3NpemUgLSAxID8gMSA6IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBXb24gTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIHRoZSBQbGF5ZXJzIFNjb3JlcyBmb3IgYSAzLCBpbXBseWluZyB0aGV5IGhhdmUgYWNoaWV2ZWQgdGhlIHJlcXVpcmVkXG4gICAgICogMyBpbiBhIHJvdy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUcnVlLCBpZiBQbGF5ZXIgaGFzIDMgaW4gYSBSb3dcbiAgICAgKi9cbiAgICBoYXNXb24gKCkgeyByZXR1cm4gdGhpcy5fc2NvcmVzLmluY2x1ZGVzKDMpOyB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XG4gICAgLyoqXG4gICAgICogQ2VsbCBDbGFzc1xuICAgICAqIFxuICAgICAqIFRpYy1UYWMtVG9lIENlbGwgRWxlbWVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSkge1xuICAgICAgICAvLyBCdWlsZCBDZWxsIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmlkID0gYCR7eH0tJHt5fS1jZWxsYDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgIFwiZ3JpZC1hcmVhXCIsIGBjZWxsLSR7eH0ke3l9YFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEJ1aWxkIEN1cnNvciBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jdXJzb3IuaWQgPSBcImN1cnNvci1jZWxsXCI7XG5cbiAgICAgICAgLy8gQnVpbGQgTm91Z2h0IERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX25vdWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX25vdWdodC5pZCA9IGBub3VnaHQtJHt4fS0ke3l9YDtcbiAgICAgICAgdGhpcy5fbm91Z2h0LnRleHRDb250ZW50ID0gXCJPXCI7XG5cbiAgICAgICAgLy8gQnVpbGQgQ3Jvc3MgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fY3Jvc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jcm9zcy5pZCA9IGBjcm9zcy0ke3h9LSR7eX1gO1xuICAgICAgICB0aGlzLl9jcm9zcy50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB0aGlzLl95ID0geTtcbiAgICAgICAgdGhpcy5fcG9pbnRlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBlbGVtZW50ICgpIHsgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7IH1cblxuICAgIHNldCBlbGVtZW50IChlbGVtKSB7IHRoaXMuX2VsZW1lbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgY3Vyc29yICgpIHsgcmV0dXJuIHRoaXMuX2N1cnNvcjsgfVxuXG4gICAgc2V0IGN1cnNvciAoZWxlbSkgeyB0aGlzLl9jdXJzb3IgPSBlbGVtOyB9XG5cbiAgICBnZXQgbm91Z2h0ICgpIHsgcmV0dXJuIHRoaXMuX25vdWdodDsgfVxuXG4gICAgc2V0IG5vdWdodCAoZWxlbSkgeyB0aGlzLl9ub3VnaHQgPSBlbGVtOyB9XG5cbiAgICBnZXQgY3Jvc3MgKCkgeyByZXR1cm4gdGhpcy5fY3Jvc3M7IH1cblxuICAgIHNldCBjcm9zcyAoZWxlbSkgeyB0aGlzLl9jcm9zcyA9IGVsZW07IH1cblxuICAgIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3g7IH1cblxuICAgIHNldCB4ICh4KSB7IHRoaXMuX3ggPSB4OyB9XG5cbiAgICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95OyB9XG5cbiAgICBzZXQgeSAoeSkgeyB0aGlzLl95ID0geTsgfVxuXG4gICAgZ2V0IHBvaW50ZXIgKCkgeyByZXR1cm4gdGhpcy5fcG9pbnRlcjsgfVxuXG4gICAgc2V0IHBvaW50ZXIgKGJvb2wpIHsgdGhpcy5fcG9pbnRlciA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIEN1cnNvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBQbGFjZSBvciBSZW1vdmUgdGhlIEN1cnNvciBvbiB0aGUgQ2VsbC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uIFBsYWNlIG9yIFJlbW92ZVxuICAgICAqL1xuICAgIHBsYWNlQ3Vyc29yIChvbj10cnVlKSB7XG4gICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBDZWxsXG4gICAgICAgIGlmIChvbiAmJiAhdGhpcy5fcG9pbnRlcikge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jdXJzb3IpO1xuICAgICAgICAgICAgdGhpcy5fcG9pbnRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIEN1cnNvciBmcm9tIENlbGxcbiAgICAgICAgaWYgKCFvbiAmJiB0aGlzLl9wb2ludGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2N1cnNvcik7XG4gICAgICAgICAgICB0aGlzLl9wb2ludGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZSBOb3VnaHQgTWV0aG9kXG4gICAgICogXG4gICAgICogUGxhY2Ugb3IgUmVtb3ZlIHRoZSBOb3VnaHQgaW4gdGhlIENlbGwuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbiBQbGFjZSBvciBSZW1vdmVcbiAgICAgKi9cbiAgICBwbGFjZU5vdWdodCAob249dHJ1ZSkge1xuICAgICAgICAvLyBQbGFjZSBOb3VnaHQgaW4gQ2VsbFxuICAgICAgICBpZiAob24gJiYgIXRoaXMuX2VsZW1lbnQuY29udGFpbnModGhpcy5fbm91Z2h0KSkgXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX25vdWdodCk7XG4gICAgICAgIC8vIFJlbW92ZSBOb3VnaHQgZnJvbSBDZWxsXG4gICAgICAgIGlmICghb24gJiYgdGhpcy5fZWxlbWVudC5jb250YWlucyh0aGlzLl9ub3VnaHQpKVxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9ub3VnaHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIENyb3NzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFBsYWNlIG9yIFJlbW92ZSB0aGUgQ3Jvc3MgaW4gdGhlIENlbGwuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbiBQbGFjZSBvciBSZW1vdmVcbiAgICAgKi9cbiAgICBwbGFjZUNyb3NzIChvbj10cnVlKSB7XG4gICAgICAgIC8vIFBsYWNlIENyb3NzIGluIENlbGxcbiAgICAgICAgaWYgKG9uICYmICF0aGlzLl9lbGVtZW50LmNvbnRhaW5zKHRoaXMuX2Nyb3NzKSlcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fY3Jvc3MpO1xuICAgICAgICAvLyBSZW1vdmUgQ3Jvc3MgZnJvbSBDZWxsXG4gICAgICAgIGlmICghb24gJiYgdGhpcy5fZWxlbWVudC5jb250YWlucyh0aGlzLl9jcm9zcykpXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2Nyb3NzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZW1vdmVzIGN1cnNvciwgbm91Z2h0IGFuZCBjcm9zcyBmcm9tIGNlbGwuXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yLCBpZiBuZWVkZWRcbiAgICAgICAgaWYgKHRoaXMuX3BvaW50ZXIpXG4gICAgICAgICAgICB0aGlzLnBsYWNlQ3Vyc29yKGZhbHNlKTtcblxuICAgICAgICAvLyBSZW1vdmUgTm91Z2h0XG4gICAgICAgIHRoaXMucGxhY2VOb3VnaHQoZmFsc2UpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBDcm9zc1xuICAgICAgICB0aGlzLnBsYWNlQ3Jvc3MoZmFsc2UpO1xuICAgIH1cbn0iLCJpbXBvcnQgXCIuL2dyaWQtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL2NlbGwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgI0dSSUQ7XG4gICAgI0RFRkFVTFRfUE9TID0ge3g6IDEsIHk6IDF9O1xuXG4gICAgLyoqXG4gICAgICogR3JpZCBDbGFzc1xuICAgICAqIFxuICAgICAqIFRpYy1UYWMtVG9lIEdyaWQgdGhhdCBpcyByZXNwb25zaWJsZSBmb3Igc2V0dGluZyB1cCBhbGwgQ2VsbHMgYW5kIHRoZVxuICAgICAqIGNvbnRyb2wgb2YgdGhvc2UgQ2VsbHMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHNpemUpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIEdyaWQgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJ0aWMtdGFjLXRvZS1ncmlkXCIpO1xuXG4gICAgICAgIC8vIEFkZCBHcmlkIFRlbXBsYXRlIEFyZWFzIHRvIHRoZSBHcmlkIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuI0dSSUQgPSBzaXplO1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0dSSUQ7IGkrKykge1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gdGhpcy4jR1JJRCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI0dSSUQ7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChqID09PSAwKVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgXCJjZWxsLSR7an0ke2l9IGA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaiA9PT0gdGhpcy4jR1JJRCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGBjZWxsLSR7an0ke2l9XCIke2kgPT09IDAgPyBcIlwiIDogXCIgXCJ9YDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGBjZWxsLSR7an0ke2l9IGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLnNldFByb3BlcnR5KFwiZ3JpZC10ZW1wbGF0ZS1hcmVhc1wiLCB0ZW1wbGF0ZSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBDZWxsc1xuICAgICAgICB0aGlzLl9jZWxscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0dSSUQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNHUklEOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gbmV3IENlbGwoaiwgaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQoY2VsbC5lbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBEZWZhdWx0IEluaXRpYWwgQ3Vyc29yXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwueCA9PT0gdGhpcy4jREVGQVVMVF9QT1MueCAmJiBjZWxsLnkgPT09IHRoaXMuI0RFRkFVTFRfUE9TLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IGNlbGw7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucGxhY2VDdXJzb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgY3VycmVudCAoKSB7IHJldHVybiB0aGlzLl9jdXJyZW50OyB9XG5cbiAgICBzZXQgY3VycmVudCAoY2VsbCkgeyB0aGlzLl9jdXJyZW50ID0gY2VsbDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBHcmlkLCB0aGUgV2lkdGggYW5kIEhlaWdodCBhcmUgZGVwZW5kZW50IG9uIHRoZSBTY3JlZW4gU2l6ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGltZW5zaW9uIEdyaWQgU2l6ZSAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKGRpbWVuc2lvbikge1xuICAgICAgICAvLyBTZXQgR3JpZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS53aWR0aCA9IGAke2RpbWVuc2lvbn1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtkaW1lbnNpb259cHhgO1xuXG4gICAgICAgIC8vIFNldCBDZWxsIERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgY2VsbERpbSA9IE1hdGguZmxvb3IoZGltZW5zaW9uIC8gdGhpcy4jR1JJRCk7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gTWF0aC5mbG9vcihjZWxsRGltICogMC44KTtcbiAgICAgICAgdGhpcy5fY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwuZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke2NlbGxEaW19cHhgO1xuICAgICAgICAgICAgY2VsbC5lbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2NlbGxEaW19cHhgO1xuICAgICAgICAgICAgY2VsbC5jdXJzb3Iuc3R5bGUud2lkdGggPSBgJHtjZWxsRGltfXB4YDtcbiAgICAgICAgICAgIGNlbGwuY3Vyc29yLnN0eWxlLmhlaWdodCA9IGAke2NlbGxEaW19cHhgO1xuICAgICAgICAgICAgY2VsbC5ub3VnaHQuc3R5bGUuZm9udFNpemUgPSBgJHtmb250U2l6ZX1weGA7XG4gICAgICAgICAgICBjZWxsLmNyb3NzLnN0eWxlLmZvbnRTaXplID0gYCR7Zm9udFNpemV9cHhgO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIENlbGxzIGluIHRoZSBHcmlkLCB0aGUgbWV0aG9kIHdpbGwgcmVtb3ZlIGFueSBub3VnaHQgb3IgY3Jvc3MgXG4gICAgICogd2l0aGluIHRoZW0uXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggQ2VsbHMgYW5kIFJlbW92ZSBOb3VnaHQgb3IgQ3Jvc3NcbiAgICAgICAgdGhpcy5fY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwucGxhY2VDcm9zcyhmYWxzZSk7XG4gICAgICAgICAgICBjZWxsLnBsYWNlTm91Z2h0KGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGdvcml0aG0gU2VsZWN0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQWxnb3JpdGhtJ3MgU2VsZWN0ZWQgTW92ZSwgdGhlIEdyaWQgb24gRGlzcGxheSBtdXN0IFVwZGF0ZSB3aXRoXG4gICAgICogdGhlIGFwcHJvcHJpYXRlIFZhbHVlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtb3ZlIFggYW5kIFkgQ29vcmRpbmF0ZXNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5vdWdodCBOb3VnaHQgb3IgQ3Jvc3NcbiAgICAgKi9cbiAgICBhbGdvcml0aG1TZWxlY3QgKG1vdmUsIG5vdWdodCkge1xuICAgICAgICAvLyBGaW5kIENlbGwgYW5kIFVwZGF0ZSB3aXRoIEFsZ29yaXRobSdzIE1hcmtlclxuICAgICAgICB0aGlzLl9jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgaWYgKGNlbGwueCA9PT0gbW92ZS54ICYmIGNlbGwueSA9PT0gbW92ZS55KVxuICAgICAgICAgICAgICAgIG5vdWdodCA/IGNlbGwucGxhY2VOb3VnaHQoKSA6IGNlbGwucGxhY2VDcm9zcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIb3Jpem9udGFsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92ZSB0aGUgQ3Vyc29yIEhvcml6b250YWxseSBhcm91bmQgdGhlIEdyaWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSByaWdodCBEZWZhdWx0IEFjdGlvbiBpcyBSaWdodHdhcmRzXG4gICAgICovXG4gICAgaG9yaXpvbnRhbE1vdmUgKHJpZ2h0PXRydWUpIHtcbiAgICAgICAgLy8gRW5zdXJlIEhvcml6b250YWwgTW92ZSBpcyBzdGlsbCBvbiBHcmlkXG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50LnggKyAocmlnaHQgPyAxIDogLTEpO1xuICAgICAgICBpZiAoY3VyciA8IHRoaXMuI0dSSUQgJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yIGZyb20gQ2VsbFxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcihmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgYW5kIEZpbmQgTmV3IENlbGwgZm9yIEN1cnNvclxuICAgICAgICAgICAgdGhpcy5fY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC54ID09PSBjdXJyICYmIGNlbGwueSA9PT0gdGhpcy5fY3VycmVudC55KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gY2VsbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBQbGFjZSBDdXJzb3Igb24gQ2VsbFxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92ZSB0aGUgQ3Vyc29yIFZlcnRpY2FsbHkgYXJvdW5kIHRoZSBHcmlkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXAgRGVmYXVsdCBBY3Rpb24gaXMgVXB3YXJkc1xuICAgICAqL1xuICAgIHZlcnRpY2FsTW92ZSAodXA9dHJ1ZSkge1xuICAgICAgICAvLyBFbnN1cmUgVmVydGljYWwgTW92ZSBpcyBzdGlsbCBvbiBHcmlkXG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50LnkgKyAodXAgPyAtMSA6IDEpO1xuICAgICAgICBpZiAoY3VyciA8IHRoaXMuI0dSSUQgJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yIGZyb20gQ2VsbFxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcihmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgYW5kIEZpbmQgTmV3IENlbGwgZm9yIEN1cnNvclxuICAgICAgICAgICAgdGhpcy5fY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC54ID09PSB0aGlzLl9jdXJyZW50LnggJiYgY2VsbC55ID09PSBjdXJyKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gY2VsbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBQbGFjZSBDdXJzb3Igb24gQ2VsbFxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VwdCBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogRGVwZW5kaW5nIG9uIHdoZXRoZXIgYSBOb3VnaHQgb3IgQ3Jvc3MgaXMgUGxhY2VkIGluIHRoZSBjZWxsLCB0aGUgY2VsbFxuICAgICAqIHdpbGwgYmUgdXBkYXRlZCBzbyB0aGF0IGl0IHJlZmxlY3RzIHRoZSBtb3ZlIHRoYXQgd2FzIGp1c3QgcGxheWVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbm91Z2h0IE5vdWdodCBvciBDcm9zc1xuICAgICAqIEByZXR1cm5zIEVycm9yIE1lc3NhZ2UsIGlmIHJlcXVpcmVkXG4gICAgICovXG4gICAgYWNjZXB0QWN0aW9uIChub3VnaHQpIHsgbm91Z2h0ID8gdGhpcy5fY3VycmVudC5wbGFjZU5vdWdodCgpIDogdGhpcy5fY3VycmVudC5wbGFjZUNyb3NzKCk7IH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi4vZ2FtZS1tb2R1bGUvZ2FtZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4uL2dyaWQtbW9kdWxlL2dyaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFRUTWFuYWdlciB7XG4gICAgI0RFRkFVTFRfR1JJRCA9IDM7XG4gICAgI1RIRU1FUyA9IFtcbiAgICAgICAgXCJOb3JtYWxcIixcbiAgICAgICAgXCJSZXRyb1wiLFxuICAgICAgICBcIk5lb25cIixcbiAgICAgICAgXCJUZXJtaW5hbFwiLFxuICAgICAgICBcIkZhbmN5XCIsXG4gICAgICAgIFwiU2NydWZmeVwiXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gQnVpbGQgR2FtZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcInRpYy10YWMtdG9lLWdhbWUtbW9kdWxlXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIFNjb3JpbmcgRE9NIENvbXBvbmVudHNcbiAgICAgICAgdGhpcy5fc2NvcmVjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fc2NvcmVjYXJkLmNsYXNzTGlzdC5hZGQoXCJzY29yZWNhcmRcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgSHVtYW4gU2NvcmVjYXJkIERPTSBDb21wb25lbnRzXG4gICAgICAgIGNvbnN0IGh1bWFuU2NvcmVjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaHVtYW5TY29yZWNhcmQuY2xhc3NMaXN0LmFkZChcImh1bWFuLXNjb3JlY2FyZFwiKTtcblxuICAgICAgICAvLyBCdWlsZCBIdW1hbiBMYWJlbCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9odW1hbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5faHVtYW5MYWJlbC5jbGFzc0xpc3QuYWRkKFwiaHVtYW4tbGFiZWxcIik7XG4gICAgICAgIHRoaXMuX2h1bWFuTGFiZWwuY2xhc3NMaXN0LmFkZChcInR1cm5cIik7XG4gICAgICAgIHRoaXMuX2h1bWFuTGFiZWwudGV4dENvbnRlbnQgPSBcIkg6IFwiO1xuXG4gICAgICAgIC8vIEJ1aWxkIEh1bWFuIFNjb3JlIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2h1bWFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5faHVtYW4uY2xhc3NMaXN0LmFkZChcImh1bWFuLXNjb3JlXCIpO1xuICAgICAgICB0aGlzLl9odW1hbi50ZXh0Q29udGVudCA9IDA7XG5cbiAgICAgICAgLy8gQWRkIENvbXBvbmVudHMgdG8gSHVtYW4gU2NvcmVjYXJkXG4gICAgICAgIGh1bWFuU2NvcmVjYXJkLmFwcGVuZENoaWxkKHRoaXMuX2h1bWFuTGFiZWwpO1xuICAgICAgICBodW1hblNjb3JlY2FyZC5hcHBlbmRDaGlsZCh0aGlzLl9odW1hbik7XG5cbiAgICAgICAgLy8gQnVpbGQgQWxnb3JpdGhtIFNjb3JlY2FyZCBET00gQ29tcG9uZW50c1xuICAgICAgICBjb25zdCBhbGdvcml0aG1TY29yZWNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhbGdvcml0aG1TY29yZWNhcmQuY2xhc3NMaXN0LmFkZChcImFsZ29yaXRobS1zY29yZWNhcmRcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgQWxnb3JpdGhtIExhYmVsIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtTGFiZWwuY2xhc3NMaXN0LmFkZChcImFsZ29yaXRobS1sYWJlbFwiKTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtTGFiZWwudGV4dENvbnRlbnQgPSBcIkE6IFwiO1xuXG4gICAgICAgIC8vIEJ1aWxkIEFsZ29yaXRobSBTY29yZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9hbGdvcml0aG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9hbGdvcml0aG0uY2xhc3NMaXN0LmFkZChcImFsZ29yaXRobS1zY29yZVwiKTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtLnRleHRDb250ZW50ID0gMDtcblxuICAgICAgICAvLyBBZGQgQ29tcG9uZW50cyB0byBBbGdvcml0aG0gU2NvcmVjYXJkXG4gICAgICAgIGFsZ29yaXRobVNjb3JlY2FyZC5hcHBlbmRDaGlsZCh0aGlzLl9hbGdvcml0aG1MYWJlbCk7XG4gICAgICAgIGFsZ29yaXRobVNjb3JlY2FyZC5hcHBlbmRDaGlsZCh0aGlzLl9hbGdvcml0aG0pO1xuXG4gICAgICAgIC8vIEJ1aWxkIFZlcnN1cyBMYWJlbCBET00gRWxlbWVudFxuICAgICAgICBjb25zdCB2c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdnNMYWJlbC5jbGFzc0xpc3QuYWRkKFwidmVyc3VzLWxhYmVsXCIpO1xuICAgICAgICB2c0xhYmVsLnRleHRDb250ZW50ID0gXCJWU1wiO1xuXG4gICAgICAgIC8vIEFkZCBDb21wb25lbnRzIHRvIFNjb3JlY2FyZFxuICAgICAgICB0aGlzLl9zY29yZWNhcmQuYXBwZW5kQ2hpbGQoaHVtYW5TY29yZWNhcmQpO1xuICAgICAgICB0aGlzLl9zY29yZWNhcmQuYXBwZW5kQ2hpbGQodnNMYWJlbCk7XG4gICAgICAgIHRoaXMuX3Njb3JlY2FyZC5hcHBlbmRDaGlsZChhbGdvcml0aG1TY29yZWNhcmQpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgR3JpZCBPYmplY3RcbiAgICAgICAgdGhpcy5fZ3JpZCA9IG5ldyBHcmlkKHRoaXMuI0RFRkFVTFRfR1JJRCk7XG5cbiAgICAgICAgLy8gQXBwZW5kIEFsbCBDb21wb25lbnRzIHRvIE1vZHVsZVxuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fZ3JpZC5tb2R1bGUpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fc2NvcmVjYXJkKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdXNlciA9IFwib1wiO1xuICAgICAgICB0aGlzLl9nYW1lID0gbmV3IEdhbWUodGhpcy4jREVGQVVMVF9HUklEKTtcbiAgICAgICAgdGhpcy5fc2NvcmVzID0ge2h1bWFuOiAwLCBhbGdvcml0aG06IDB9O1xuICAgICAgICB0aGlzLl9lbmQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTZXQgdGhlIERlZmF1bHQgVGhlbWVcbiAgICAgICAgdGhpcy5zZXRUaGVtZSh0aGlzLiNUSEVNRVNbMF0pO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIGdldCBncmlkICgpIHsgcmV0dXJuIHRoaXMuX2dyaWQ7IH1cblxuICAgIHNldCBncmlkIChvYmopIHsgdGhpcy5fZ3JpZCA9IG9iajsgfVxuXG4gICAgZ2V0IGNvbnRyb2xsZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbGxlcjsgfVxuXG4gICAgc2V0IGNvbnRyb2xsZXIgKGJvb2wpIHsgdGhpcy5fY29udHJvbGxlciA9IGJvb2w7IH1cblxuICAgIGdldCB1c2VyICgpIHsgcmV0dXJuIHRoaXMuX3VzZXI7IH1cblxuICAgIHNldCB1c2VyIChzdHIpIHsgdGhpcy5fdXNlciA9IHN0cjsgfVxuXG4gICAgZ2V0IGdhbWUgKCkgeyByZXR1cm4gdGhpcy5fZ2FtZTsgfVxuXG4gICAgc2V0IGdhbWUgKG9iaikgeyB0aGlzLl9nYW1lID0gb2JqOyB9XG5cbiAgICBnZXQgc2NvcmVzICgpIHsgcmV0dXJuIHRoaXMuX3Njb3JlczsgfVxuXG4gICAgc2V0IHNjb3JlcyAoZGljdCkgeyB0aGlzLl9zY29yZXMgPSBkaWN0OyB9XG5cbiAgICBnZXQgZW5kICgpIHsgcmV0dXJuIHRoaXMuX2VuZDsgfVxuXG4gICAgc2V0IGVuZCAoYm9vbCkgeyB0aGlzLl9lbmQgPSBib29sOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXRzIHVwIHRoZSBEaXNwbGF5IGZvciB0aGUgR2FtZSwgaW5jbHVkaW5nIHRoZSBjZWxscyBhbmQgdGhlIHNjb3JlY2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0dXAgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gU2V0IEdhbWUgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuXG4gICAgICAgIC8vIFNldCBHcmlkIERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgZGltID0gTWF0aC5mbG9vcihNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAqIDAuOCk7XG4gICAgICAgIHRoaXMuX2dyaWQuc2V0RGltZW5zaW9ucyhkaW0pO1xuXG4gICAgICAgIC8vIFNldCBTY29yZWNhcmQgRm9udCBTaXplXG4gICAgICAgIHRoaXMuX3Njb3JlY2FyZC5zdHlsZS5mb250U2l6ZSA9IGAke01hdGguZmxvb3IoZGltICogMC4wNyl9cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBNYXJrZXIgTWV0aG9kXG4gICAgICogXG4gICAgICogQmVmb3JlIHRoZSBHYW1lIGJlZ2lucywgdGhlIFVzZXIgbXVzdCBzZWxlY3QgdGhlIG1hcmtlciB0aGV5YiB3YW50IHRvIFxuICAgICAqIHBsYXkgd2l0aC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbm91Z2h0IE5vdWdodCBvciBDcm9zc1xuICAgICAqL1xuICAgIHNldE1hcmtlciAobm91Z2h0KSB7IFxuICAgICAgICB0aGlzLl91c2VyID0gbm91Z2h0O1xuICAgICAgICB0aGlzLl9nYW1lLnNldHVwKG5vdWdodCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IExldmVsIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgR2FtZSBiYXNlZCBvbiB0aGUgTGV2ZWwgU2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIFNlbGVjdGVkIExldmVsXG4gICAgICovXG4gICAgc2V0TGV2ZWwgKGxldmVsKSB7IFxuICAgICAgICB0aGlzLl9nYW1lLnNldExldmVsKGxldmVsLnRvTG93ZXJDYXNlKCkpOyBcbiAgICAgICAgdGhpcy5fZ3JpZC5yZXNldCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBUaGVtZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIFN0eWxpbmcgdG8gUmVmbGVjdCB0aGUgVGhlbWUgU2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIFRoZW1lIE5hbWVcbiAgICAgKi9cbiAgICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICAgICAgLy8gR2V0IFJvb3QgRWxlbWVudFxuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LmNsYXNzTmFtZSA9IHRoZW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBBbGdvcml0aG0gTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBQbGF5IFNlbGVjdGVkIEFsZ29yaXRobSdzIE5ldyBNb3ZlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIE1lc3NhZ2UgZm9yIEFsZ29yaXRobSdzIE1vdmVcbiAgICAgKi9cbiAgICBwbGF5QWxnb3JpdGhtTW92ZSAoKSB7XG4gICAgICAgIC8vIEdldCBOZXh0IE1vdmVcbiAgICAgICAgY29uc3QgbW92ZSA9IHRoaXMuX2dhbWUuYWxnb3JpdGhtLnBsYXkodGhpcy5fZ2FtZS5ncmlkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSBEaXNwbGF5XG4gICAgICAgIHRoaXMuX2dyaWQuYWxnb3JpdGhtU2VsZWN0KG1vdmUsICh0aGlzLl91c2VyICE9PSBcIm9cIikpO1xuXG4gICAgICAgIC8vIFJldHVybiBNZXNzYWdlIHJlc3VsdGluZyBmcm9tIE1vdmVcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWUuYXR0ZW1wdChtb3ZlLngsIG1vdmUueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IGFsbCB2YXJpYWJsZXMgdG8gdGhlaXIgb3JpZ2luYWwgdmFsdWVzLCBhbmQgc2V0IHRoZSBncmlkIHNvIHRoYXQgdGhlXG4gICAgICogY2VsbHMgZG9uJ3QgY29udGFpbiBub3VnaHRzIG5vciBjcm9zc2VzLlxuICAgICAqL1xuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgdGhpcy5fZW5kID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2dyaWQucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fZ2FtZS5yZXNldCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhvcml6b250YWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZpbmcgdGhlIEN1cnNvciBSaWdodCBvciBMZWZ0IG9uIHRoZSBHcmlkLlxuICAgICAqL1xuICAgIGhvcml6b250YWxNb3ZlIChyaWdodD10cnVlKSB7IGlmICghdGhpcy5fZW5kKSB0aGlzLl9ncmlkLmhvcml6b250YWxNb3ZlKHJpZ2h0KTsgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZpbmcgdGhlIEN1cnNvciBVcCBvciBEb3duIG9uIHRoZSBHcmlkLlxuICAgICAqL1xuICAgIHZlcnRpY2FsTW92ZSAodXA9dHJ1ZSkgeyBpZiAoIXRoaXMuX2VuZCkgdGhpcy5fZ3JpZC52ZXJ0aWNhbE1vdmUodXApOyB9XG5cbiAgICAvKipcbiAgICAgKiBBY2NlcHQgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIFVzZXIgbWFrZXMgYSBtb3ZlLCB0aGVuIHRoZSBncmlkIHNob3VsZCB1cGRhdGUgdGhlIGNvcnJlc3BvbmRpbmdcbiAgICAgKiBjZWxsIHRvIHJlZmxlY3QgdGhlIFVzZXJzIG1vdmUsIGdpdmVuIHRoYXQgdGhlIG1vdmUgaXMgbGVnYWwsIG90aGVyd2lzZSBcbiAgICAgKiB0aGUgbW92ZSBzaG91bGQgcmFpc2UgYW4gZXJyb3IuIEFkZGl0aW9uYWxseSwgd2hlbiB0aGUgbW92ZSBpcyBtYWRlLCB0aGUgXG4gICAgICogQWxnb3JpdGhtIHNob3VsZCBiZSBwcm9tcHRlZCB0byBtYWtlIGl0cyBuZXh0IG1vdmUuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGdhbWVvdmVyQ2FsbGJhY2sgR2FtZW92ZXIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgYWNjZXB0QWN0aW9uIChnYW1lb3ZlckNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5fZW5kKSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBBdHRlbXB0IGlzIFZhbGlkXG4gICAgICAgICAgICBjb25zdCB0dXJuID0gdGhpcy5fZ2FtZS5nZXRNYXJrZXIoKTtcbiAgICAgICAgICAgIGxldCBtc2cgPSB0aGlzLl9nYW1lLmF0dGVtcHQodGhpcy5fZ3JpZC5jdXJyZW50LngsIHRoaXMuX2dyaWQuY3VycmVudC55KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgQXR0ZW1wdCB3YXMgSWxsZWdhbFxuICAgICAgICAgICAgaWYgKG1zZy5pbmNsdWRlcyhcIklsbGVnYWwgTW92ZSFcIikpe1xuICAgICAgICAgICAgICAgIGdhbWVvdmVyQ2FsbGJhY2sobXNnLCB0cnVlKTsgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBVc2VyIGhhcyBXb25cbiAgICAgICAgICAgIGlmIChtc2cgPT09IHRoaXMuX3VzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG1zZyA9IFwiQ29uZ3JhdHVsYXRpb25zLCB5b3Ugd29uIVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuI2dhbWVvdmVyKHRydWUpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgRHJhd1xuICAgICAgICAgICAgZWxzZSBpZiAobXNnID09PSBcIkRyYXchXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgTW92ZSBvbiB0aGUgR3JpZFxuICAgICAgICAgICAgdGhpcy5fZ3JpZC5hY2NlcHRBY3Rpb24odHVybik7XG5cbiAgICAgICAgICAgIC8vIERvbid0IGFsbG93IEFsZ29yaXRobSB0byBNb3ZlIGlmIEdhbWUgaXMgT3ZlclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VuZCkge1xuICAgICAgICAgICAgICAgIGdhbWVvdmVyQ2FsbGJhY2sobXNnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIC8vIFByb21wdCBBbGdvcml0aG0gdG8gTW92ZVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbXNnID0gdGhpcy5wbGF5QWxnb3JpdGhtTW92ZSgpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDaGVrIGlmIEFsZ29yaXRobSBoYXMgV29uXG4gICAgICAgICAgICAgICAgaWYgKG1zZyA9PT0gKHRoaXMuX3VzZXIgPT09IFwib1wiID8gXCJ4XCIgOiBcIm9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJCYWQgbHVjaywgdGhlIEFsZ29yaXRobSBoYXMgd29uIVwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNnYW1lb3ZlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIERyYXdcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtc2cgPT09IFwiRHJhdyFcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVvdmVyQ2FsbGJhY2sobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2FtZW92ZXIgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgbm9uLWRyYXcsIHRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIERPTSBTY29yZXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBodW1hbiBIdW1hbiBXb25cbiAgICAgKi9cbiAgICAjZ2FtZW92ZXIgKGh1bWFuPWZhbHNlKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBIdW1hbiBTY29yZVxuICAgICAgICBpZiAoaHVtYW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3Njb3Jlcy5odW1hbiArPSAxO1xuICAgICAgICAgICAgdGhpcy5faHVtYW4udGV4dENvbnRlbnQgPSB0aGlzLl9zY29yZXMuaHVtYW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIEFsZ29yaXRobSBTY29yZVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Njb3Jlcy5hbGdvcml0aG0gKz0gMTtcbiAgICAgICAgICAgIHRoaXMuX2FsZ29yaXRobS50ZXh0Q29udGVudCA9IHRoaXMuX3Njb3Jlcy5hbGdvcml0aG07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxufSIsImltcG9ydCBcIi4vZ2FtZS1zdHlsaW5nLmNzc1wiO1xuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4vZGF0YS9tZW51Lmpzb241XCI7XG5pbXBvcnQgc2VsZWN0aW9uIGZyb20gXCIuL2RhdGEvc2VsZWN0Lmpzb241XCI7XG5pbXBvcnQgR2FtZUludGVyZmFjZSBmcm9tIFwiLi4vZ2FtZS1jaGlwLW1vZHVsZS9nYW1lLWludGVyZmFjZS5qc1wiO1xuaW1wb3J0IFRUVE1hbmFnZXIgZnJvbSBcIi4vbWFpbi1tb2R1bGUvdHR0LW1hbmFnZXIuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi9wb3AtdXAtbW9kdWxlL21lbnUuanNcIjtcbmltcG9ydCBFcnJvckJveCBmcm9tIFwiLi4vcG9wLXVwLW1vZHVsZS9lcnJvci1ib3guanNcIjtcbmltcG9ydCBJbmZvQm94IGZyb20gXCIuLi9wb3AtdXAtbW9kdWxlL2luZm8tYm94LmpzXCI7XG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gXCIuLi9wb3AtdXAtbW9kdWxlL3NlbGVjdC1ib3guanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFRUR2FtZSBleHRlbmRzIEdhbWVJbnRlcmZhY2Uge1xuICAgICNzaG93Q2FsbGJhY2s7XG4gICAgI3Rha2VEb3duQ2FsbGJhY2s7XG5cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcbiAgICAgICAgc3VwZXIodGl0bGUpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgT2JqZWN0cyBmb3IgdGhlIFRpYy1UYWMtVG9lIEdhbWVcbiAgICAgICAgdGhpcy5fdG0gPSBuZXcgVFRUTWFuYWdlcigpO1xuICAgICAgICB0aGlzLl9tZW51ID0gbmV3IE1lbnUoY2F0ZWdvcmllcyk7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gbmV3IEVycm9yQm94KCk7XG4gICAgICAgIHRoaXMuX2luZm8gPSBuZXcgSW5mb0JveCgpO1xuICAgICAgICB0aGlzLl9zZWxlY3QgPSBuZXcgU2VsZWN0Qm94KFxuICAgICAgICAgICAgc2VsZWN0aW9uLmRpZmZpY3VsdHkuZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgc2VsZWN0aW9uLmRpZmZpY3VsdHkuY2F0ZWdvcmllc1xuICAgICAgICApO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX2RpZmZpY3VsdHlfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWFya2VyX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNob3cgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBDYWxsYmFjayBNZXRob2RzIGZvciBVcGRhdGluZyB0aGUgR2FtZUNoaXAgRGlzcGxheS5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgc2hvd0NhbGxiYWNrIFNob3cgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgdGFrZURvd25DYWxsYmFjayBUYWtlIERvd24gQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgZGltZW5zaW9uc0NhbGxiYWNrIEdldCBEaW1lbnNpb25zIENhbGxiYWNrXG4gICAgICovXG4gICAgc2V0U2NlbmUgKHNob3dDYWxsYmFjaywgdGFrZURvd25DYWxsYmFjaywgZ2V0RGltZW5zaW9ucykge1xuICAgICAgICAvLyBTZXQgQ2FsbGJhY2sgTWV0aG9kc1xuICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sgPSBzaG93Q2FsbGJhY2s7XG4gICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2sgPSB0YWtlRG93bkNhbGxiYWNrO1xuXG4gICAgICAgIC8vIFNldCBHcmlkIERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGdldERpbWVuc2lvbnMoKTtcbiAgICAgICAgdGhpcy5fdG0uc2V0dXAoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tZW51LnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9zdWJfc2V0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3N1Yl9tZW51O1xuICAgICAgICB0aGlzLl9lcnJvci5zZXREaW1lbnNpb25zKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5faW5mby5zZXREaW1lbnNpb25zKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fc2VsZWN0LnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBHcmlkIG9uIERpc3BsYXlcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX3RtLm1vZHVsZSk7XG5cbiAgICAgICAgLy8gU2hvdyBEaWZmaWN1bHR5IFNlbGVjdGlvblxuICAgICAgICB0aGlzLl9zZWxlY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sodGhpcy5fc2VsZWN0Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmlnaHQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFJpZ2h0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICByaWdodENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIEdyaWQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3RtLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl90bS5ob3Jpem9udGFsTW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExlZnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIExlZnQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGxlZnRDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBHcmlkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl90bS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fdG0uaG9yaXpvbnRhbE1vdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBVcCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgdXBDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBHcmlkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl90bS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fdG0udmVydGljYWxNb3ZlKCk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9tZW51LnZlcnRpY2FsTW92ZSgpO1xuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3N1Yl9zZXQpXG4gICAgICAgICAgICB0aGlzLl9zdWJfbWVudS52ZXJ0aWNhbE1vdmUoKTtcbiAgICAgICAgLy8gSGFuZGxlIFNlbGVjdCBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0LmFjdGl2ZSlcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdC52ZXJ0aWNhbE1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb3duIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBEb3duIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBkb3duQ2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgR3JpZCBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fdG0uY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX3RtLnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9tZW51LnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fc3ViX3NldClcbiAgICAgICAgICAgIHRoaXMuX3N1Yl9tZW51LnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBTZWxlY3QgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdC5hY3RpdmUpXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3QudmVydGljYWxNb3ZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBBIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYUNhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIFNlbGVjdCBBY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdC5hY3RpdmUgJiYgIXRoaXMuX2RpZmZpY3VsdHlfc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIFNldCBEaWZmaWN1bHR5IExldmVsXG4gICAgICAgICAgICB0aGlzLl90bS5zZXRMZXZlbCh0aGlzLl9zZWxlY3QuYWNjZXB0QWN0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5fZGlmZmljdWx0eV9zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFNldCBNYXJrZXIgU2VsZWN0aW9uXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Quc2V0U2VsZWN0aW9ucyhcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ubWFya2VyLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5tYXJrZXIuY2F0ZWdvcmllc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zZWxlY3QuYWN0aXZlICYmICF0aGlzLl9tYXJrZXJfc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIFNldCBNYXJrZXJcbiAgICAgICAgICAgIHRoaXMuX3RtLnNldE1hcmtlcih0aGlzLl9zZWxlY3QuYWNjZXB0QWN0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyX3NlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gVGFrZSBkb3duIFNlbGVjdCBCb3hcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX3RtLmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBJbmZvIEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9pbmZvLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9pbmZvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICAvLyBIYW5kbGUgRXJyb3IgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2Vycm9yLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gSGFuZGxlIEdyaWQgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3RtLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3RtLmFjY2VwdEFjdGlvbih0aGlzLiNnYW1lb3ZlckNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBTZWxlY3RlZFxuICAgICAgICAgICAgaWYgKHRoaXMuX21lbnUuYWNjZXB0QWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJfc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJfbWVudSA9IHRoaXMuX21lbnUuc2V0U3ViTWVudSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sodGhpcy5fc3ViX21lbnUubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIFNlbGVjdGVkXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHRoaXMuI2Nsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdWJfc2V0KSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgT3B0aW9uIFNlbGVjdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5fc3ViX21lbnUuYWNjZXB0QWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgR2FtZSBTZXRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3ViX21lbnUuc2VsZWN0ZWQua2V5ID09PSBcIkxldmVsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG0uc2V0TGV2ZWwodGhpcy5fc3ViX21lbnUuc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9rbS5zZXRHYW1lKHRoaXMuX3N1Yl9tZW51LnNlbGVjdGVkLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIFRoZW1lIFNldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiVGhlbWVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90bS5zZXRUaGVtZSh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2Nsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIENvbnRyb2xzIEluZm9ybWF0aW9uIEdldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiQ29udHJvbHNcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmZvLnNldFRpdGxlKFwiQ29udHJvbGxlciBJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5mby5zZXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXIC0gU2FtZSBhcyBVcC1CdXR0b25cXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkQgLSBTYW1lIGFzIFJpZ2h0LUJ1dHRvblxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUyAtIFNhbWUgYXMgRG93bi1CdXR0b25cXG5cIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBIC0gU2FtZSBhcyBMZWZ0LUJ1dHRvblxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTyAtIFNhbWUgYXMgQi1CdXR0b25cXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIksgLSBTYW1lIGFzIEEtQnV0dG9uXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTcGFjZSAtIFNhbWUgYXMgU3RhcnRcXG5cIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTaGlmdCAtIFNhbWUgYXMgU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIFNlbGVjdGVkXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHRoaXMuI21haW5SZXR1cm4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgR3JpZCBBY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuX2Vycm9yLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gTWVudSB0byBiZSBEaXNwbGF5ZWRcbiAgICAgICAgaWYgKHRoaXMuX3RtLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIFNldCBNZW51IHRvIGJlIENvbnRyb2xsZWRcbiAgICAgICAgICAgIHRoaXMuX3RtLmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIE1lbnVcbiAgICAgICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNZW51IHRvIGJlIFRha2VuIERvd25cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgVGljLVRhYy1Ub2UgdG8gYmUgQ29udHJvbGxlZFxuICAgICAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGFrZSBEb3duIE1lbnUvU3ViLU1lbnVcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVudS5yZXNldFN1Yk1lbnVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTZWxlY3QgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc2VsZWN0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIE1haW4gUmV0dXJuIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybiB0byB0aGUgTWFpbiBNZW51IGZyb20gdGhlIFN1Yi1NZW51LlxuICAgICAqL1xuICAgICNtYWluUmV0dXJuICgpIHtcbiAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgTWV0aG9kXG4gICAgICogXG4gICAgICogT3V0c2lkZSBvZiBjbGlja2luZyB0aGUgU3RhcnQgYnV0dG9uLCBpZiB0aGUgVXNlciBpcyB1c2luZyB0aGUgTWVudSwgYW5kIFxuICAgICAqIHNlbGVjdHMgYW4gb3B0aW9uIHN1Y2ggdGhhdCB0aGUgbWVudSBzaG91bGQgY2xvc2UsIHRoaXMgbWV0aG9kIHdpbGwgXG4gICAgICogY29tcGxldGUgdGhhdCB0YXNrLlxuICAgICAqL1xuICAgICNjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuX3N1Yl9zZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2FtZW92ZXIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogTWV0aG9kIHVzZWQgZm9yIGluZm9ybWluZyB0aGUgVXNlciBvZiB0aGUgRW5kIEdhbWUgUmVzdWx0cy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnIEdhbWUgT3ZlciBNZXNzYWdlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlcnJvciBEZWZhdWx0IGlzIE5vIEVycm9yXG4gICAgICovXG4gICAgI2dhbWVvdmVyQ2FsbGJhY2sgKG1zZywgZXJyb3I9ZmFsc2UpIHtcbiAgICAgICAgLy8gRGlzcGxheSBFbmQgR2FtZSBJbmZvcm1hdGlvbiBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzLlxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAvLyBTZXQgSW5mb3JtYXRpb24gQm94IFBhcmFtZXRlcnNcbiAgICAgICAgICAgIHRoaXMuX2luZm8uc2V0VGl0bGUoXCJHYW1lIE92ZXIhXCIpO1xuICAgICAgICAgICAgdGhpcy5faW5mby5zZXRNZXNzYWdlKG1zZyk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBDdXJzb3IgQ29udHJvbFxuICAgICAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faW5mby5jb250cm9sbGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gRGlzcGxheSBJbmZvcm1hdGlvblxuICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgaW5mb3JtIHRoZSBVc2VyIG9mIHRoZSBFcnJvclxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldCBFcnJvciBCb3ggUGFyYW1ldGVyc1xuICAgICAgICAgICAgdGhpcy5fZXJyb3Iuc2V0TWVzc2FnZShtc2cpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgQ3Vyc29yIENvbnRyb2xcbiAgICAgICAgICAgIHRoaXMuX3RtLmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gRGlzcGxheSBFcnJvclxuICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2Vycm9yLm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9