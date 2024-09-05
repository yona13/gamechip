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
}

:root.terminal {
    --font: "Dogica";
    --marker-font: "Dogica";
    --white: black;
    --black: black;
    --screen: black;
    --error-screen: red;
    --border-colour: green;
    --cursor: green;
    --text-colour: green;
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
    background-color: var(--screen);
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
    0% { opacity: 0; }
    50% { opacity: 1;}
    100% { opacity: 0; }
}`, "",{"version":3,"sources":["webpack://./src/tic-tac-toe-module/game-styling.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAA0C;AAC9C;;AAEA;IACI,qBAAqB;IACrB,4CAA+B;AACnC;;AAEA;IACI,sBAAsB;IACtB,4CAAqC;AACzC;;AAEA;IACI,yBAAyB;IACzB;AACJ;;AAEA;IACI,yBAAyB;IACzB,4CAAkC;AACtC;;AAEA;IACI,yBAAyB;IACzB,4CAAsC;AAC1C;;AAEA;IACI,mBAAmB;IACnB,4CAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,2BAA2B;IAC3B,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,cAAc;IACd,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;IACpB,2BAA2B;IAC3B,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,+BAA+B;IAC/B,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA,yBAAyB,iBAAiB,EAAE;;AAE5C,gBAAgB,eAAe,EAAE;;;AAGjC;IACI,KAAK,UAAU,EAAE;IACjB,MAAM,UAAU,CAAC;IACjB,OAAO,UAAU,EAAE;AACvB","sourcesContent":["@font-face {\n    font-family: \"Merom Sans\";\n    src: url(\"../fonts/MeromSans-Regular.ttf\");\n}\n\n@font-face {\n    font-family: \"Dogica\";\n    src: url(\"../fonts/dogica.ttf\");\n}\n\n@font-face {\n    font-family: \"Gothica\";\n    src: url(\"../fonts/Gothica-Book.ttf\");\n}\n\n@font-face {\n    font-family: \"Alex Brush\";\n    src: url(\"../fonts/AlexBrush-Regular-OTF.otf\")\n}\n\n@font-face {\n    font-family: \"Free Metto\";\n    src: url(\"../fonts/freemetto.ttf\");\n}\n\n@font-face {\n    font-family: \"Rich Eatin\";\n    src: url(\"../fonts/Rich\\ Eatin\\'.otf\");\n}\n\n@font-face {\n    font-family: \"Beon\";\n    src: url(\"../fonts/Beon-Regular.otf\");\n}\n\n:root {\n    --white: #fdfffc;\n    --black: #020100;\n}\n\n:root.normal {\n    --font: \"Merom Sans\";\n    --marker-font: \"Free Metto\";\n    --white: #ffecd1;\n    --black: #001524;\n    --screen: #15616d;\n    --error-screen: #78290f;\n    --border-colour: #ff7d00;\n    --cursor: #36bce1;\n    --text-colour: #001524;\n}\n\n:root.retro {\n    --font: \"Dogica\";\n    --marker-font: \"Dogica\";\n    --white: #aaaaaa;\n    --black: #0f380f;\n    --screen: #9bbc0f;\n    --error-screen: #f69493;\n    --border-colour: #b5af42;\n    --cursor: #8bac0f;\n    --text-colour: #0f380f;\n}\n\n:root.neon {\n    --font: \"Beon\";\n    --marker-font: \"Beon\";\n    --white: #ea00d9;\n    --black: #133e7c;\n    --screen: #091833;\n    --error-screen: #f23ca6;\n    --border-colour: #711c91;\n    --cursor: #0abdc6;\n    --text-colour: #fbff36;\n}\n\n:root.terminal {\n    --font: \"Dogica\";\n    --marker-font: \"Dogica\";\n    --white: black;\n    --black: black;\n    --screen: black;\n    --error-screen: red;\n    --border-colour: green;\n    --cursor: green;\n    --text-colour: green;\n}\n\n:root.fancy {\n    --font: \"Gothica\";\n    --marker-font: \"Alex Brush\";\n    --white: #efefe9;\n    --black: #223030;\n    --screen: #e8d9cd;\n    --error-screen: #d7504d;\n    --border-colour: #523d35;\n    --cursor: #bba584;\n    --text-colour: #223030;\n}\n\n:root.scruffy {\n    --font: \"Rich Eatin\";\n    --marker-font: \"Rich Eatin\";\n    --white: #f7f7f7;\n    --black: #170f11;\n    --screen: #21c5b0;\n    --error-screen: #7a0a0a;\n    --border-colour: #dfcc16;\n    --cursor: #12a365;\n    --text-colour: #170f11;\n}\n\n.tic-tac-toe-game-module {\n    position: absolute;\n    color: var(--text-colour);\n    background-color: var(--screen);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.scorecard {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n    background-color: var(--screen);\n    border: 3px solid var(--border-colour);\n}\n\n.scorecard > [class*=\"-scorecard\"] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.information-container { font-size: 1.5rem; }\n\n.info-message { font-size: 1rem; }\n\n\n@keyframes blink {\n    0% { opacity: 0; }\n    50% { opacity: 1;}\n    100% { opacity: 0; }\n}"],"sourceRoot":""}]);
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
                if (grid[i][j] === "")
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
    reset () { for (let i = 0; i < this._scores.length; i++) this._scores[i] = 0; }

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

    /**
     * Tic-Tac-Toe Manager Class
     * 
     * For the Tic-Tac-Toe Game, this Manager Class will Handle UI Components
     * such as the Scores for either Player, and of course the Grid upon which
     * the game is played. It will also manage the Actions on the Grid with the
     * parent Game Interface.
     */
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
                this.reset();
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
                    this.reset();
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

    /**
     * Tic-Tac-Toe Interface Class
     * 
     * Used for Controlling the Menu and the Grid Modules with the GameChip's
     * Controllers, and also for Updating the Display with the relevant Error
     * and Information Messages.
     * 
     * TODO: Add a feature for enlarging the grid
     * 
     * @param {string} title Title of the Game
     */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtBQUNuRCx5Q0FBeUMsUUFBUTtBQUNqRCwwQ0FBMEMsUUFBUTtBQUNsRCw0Q0FBNEMsU0FBUztBQUNyRCwyQ0FBMkMsU0FBUztBQUNwRCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQy9LdUM7QUFDQTs7QUFFeEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQTRCO0FBQzVDLGdCQUFnQixpRUFBMkI7QUFDM0M7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3BvcC11cC1tb2R1bGUvcG9wLXVwLXN0eWxpbmcuY3NzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9ncmlkLW1vZHVsZS9ncmlkLXN0eWxpbmcuY3NzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL3BvcC11cC1zdHlsaW5nLmNzcz9mNzQ1Iiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzPzM5MTMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dyaWQtbW9kdWxlL2dyaWQtc3R5bGluZy5jc3M/MDkwNyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvZ2FtZS1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcG9wLXVwLW1vZHVsZS9lcnJvci1ib3guanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcG9wLXVwLW1vZHVsZS9pbmZvLWJveC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL21lbnUtYmFzZS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL21lbnUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcG9wLXVwLW1vZHVsZS9wb3AtdXAuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcG9wLXVwLW1vZHVsZS9zZWxlY3QtYm94LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLW1vZHVsZS9nYW1lLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLW1vZHVsZS9sZXZlbHMvZWFzeS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy90aWMtdGFjLXRvZS1tb2R1bGUvZ2FtZS1tb2R1bGUvbGV2ZWxzL2hhcmQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dhbWUtbW9kdWxlL2xldmVscy9sZXZlbC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy90aWMtdGFjLXRvZS1tb2R1bGUvZ2FtZS1tb2R1bGUvcGxheWVyLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9ncmlkLW1vZHVsZS9jZWxsLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9ncmlkLW1vZHVsZS9ncmlkLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9tYWluLW1vZHVsZS90dHQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy90aWMtdGFjLXRvZS1tb2R1bGUvdHR0LWdhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbmZvLWNvbXBvbmVudHMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtO1xufVxuXG4uaW5mby1jb21wb25lbnRzID4gZGl2IHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTsgfVxuXG4ubWVudS1jb250YWluZXIsXG4uc2VsZWN0LWNvbnRhaW5lcixcbi5pbmZvcm1hdGlvbi1jb250YWluZXIgeyBmb250LWZhbWlseTogXCJEb2dpY2FcIjsgfVxuXG4ubWVudS1ib3gsXG4uc2VsZWN0LWJveCxcbi5pbmZvcm1hdGlvbi1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmluZm9ybWF0aW9uLWJveCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi8qIC5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDAuNHJlbTsgfSAqL1xuXG4ubWVudS10aXRsZSxcbi5zZWxlY3QtZGVzY3JpcHRpb24sXG4uaW5mb3JtYXRpb24tdGl0bGUsXG4uZXJyb3ItdGl0bGUgeyBmb250LWZhbWlseTogXCJEb2dpY2EgQm9sZFwiOyB9XG5cbi5tZW51LWJveCA+IGRpdixcbi5zZWxlY3QtYm94ID4gZGl2LFxuLmluZm9ybWF0aW9uLWJveCA+IGRpdiB7IHRleHQtYWxpZ246IHN0YXJ0OyB9XG5cbi5tZW51LWJveCA+IGRpdi5jdXJzb3IsXG4uc2VsZWN0LWJveCA+IGRpdi5jdXJzb3Ige1xuICAgIGFuaW1hdGlvbjogZmFkZSAxLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5lcnJvci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVycm9yLWJveCxcbi5zZWxlY3QtYm94LFxuLmluZm9ybWF0aW9uLWJveCxcbi5tZW51LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgYm9yZGVyOiAzcHggdmFyKC0tdGV4dC1jb2xvdXIpIHNvbGlkO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVycm9yLWJveCB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhIEJvbGRcIjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLXNjcmVlbik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQge1xuICAgIHotaW5kZXg6IDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIG9wYWNpdHk6IDAuNztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3AtdXAtbW9kdWxlL3BvcC11cC1zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBLHlCQUF5QixxQ0FBcUMsRUFBRTs7QUFFaEU7O3lCQUV5QixxQkFBcUIsRUFBRTs7QUFFaEQ7OztJQUdJLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUEseUNBQXlDOztBQUV6Qzs7O2VBR2UsMEJBQTBCLEVBQUU7O0FBRTNDOzt5QkFFeUIsaUJBQWlCLEVBQUU7O0FBRTVDOztJQUVJLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmluZm8tY29tcG9uZW50cyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uaW5mby1jb21wb25lbnRzID4gZGl2IHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTsgfVxcblxcbi5tZW51LWNvbnRhaW5lcixcXG4uc2VsZWN0LWNvbnRhaW5lcixcXG4uaW5mb3JtYXRpb24tY29udGFpbmVyIHsgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiOyB9XFxuXFxuLm1lbnUtYm94LFxcbi5zZWxlY3QtYm94LFxcbi5pbmZvcm1hdGlvbi1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmluZm9ybWF0aW9uLWJveCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi8qIC5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDAuNHJlbTsgfSAqL1xcblxcbi5tZW51LXRpdGxlLFxcbi5zZWxlY3QtZGVzY3JpcHRpb24sXFxuLmluZm9ybWF0aW9uLXRpdGxlLFxcbi5lcnJvci10aXRsZSB7IGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhIEJvbGRcXFwiOyB9XFxuXFxuLm1lbnUtYm94ID4gZGl2LFxcbi5zZWxlY3QtYm94ID4gZGl2LFxcbi5pbmZvcm1hdGlvbi1ib3ggPiBkaXYgeyB0ZXh0LWFsaWduOiBzdGFydDsgfVxcblxcbi5tZW51LWJveCA+IGRpdi5jdXJzb3IsXFxuLnNlbGVjdC1ib3ggPiBkaXYuY3Vyc29yIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlIDEuNXMgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5lcnJvci1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5lcnJvci1ib3gsXFxuLnNlbGVjdC1ib3gsXFxuLmluZm9ybWF0aW9uLWJveCxcXG4ubWVudS1ib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIGJvcmRlcjogM3B4IHZhcigtLXRleHQtY29sb3VyKSBzb2xpZDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXJyb3ItYm94IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2EgQm9sZFxcXCI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1zY3JlZW4pO1xcbn1cXG5cXG4uYmx1cnJlZC1iYWNrZ3JvdW5kIHtcXG4gICAgei1pbmRleDogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTWVyb21TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvZG9naWNhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0dvdGhpY2EtQm9vay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9BbGV4QnJ1c2gtUmVndWxhci1PVEYub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvZnJlZW1ldHRvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JpY2ggRWF0aW4nLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0Jlb24tUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIk1lcm9tIFNhbnNcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkdvdGhpY2FcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQWxleCBCcnVzaFwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pXG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkZyZWUgTWV0dG9cIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUmljaCBFYXRpblwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJCZW9uXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG59XG5cbjpyb290IHtcbiAgICAtLXdoaXRlOiAjZmRmZmZjO1xuICAgIC0tYmxhY2s6ICMwMjAxMDA7XG59XG5cbjpyb290Lm5vcm1hbCB7XG4gICAgLS1mb250OiBcIk1lcm9tIFNhbnNcIjtcbiAgICAtLW1hcmtlci1mb250OiBcIkZyZWUgTWV0dG9cIjtcbiAgICAtLXdoaXRlOiAjZmZlY2QxO1xuICAgIC0tYmxhY2s6ICMwMDE1MjQ7XG4gICAgLS1zY3JlZW46ICMxNTYxNmQ7XG4gICAgLS1lcnJvci1zY3JlZW46ICM3ODI5MGY7XG4gICAgLS1ib3JkZXItY29sb3VyOiAjZmY3ZDAwO1xuICAgIC0tY3Vyc29yOiAjMzZiY2UxO1xuICAgIC0tdGV4dC1jb2xvdXI6ICMwMDE1MjQ7XG59XG5cbjpyb290LnJldHJvIHtcbiAgICAtLWZvbnQ6IFwiRG9naWNhXCI7XG4gICAgLS1tYXJrZXItZm9udDogXCJEb2dpY2FcIjtcbiAgICAtLXdoaXRlOiAjYWFhYWFhO1xuICAgIC0tYmxhY2s6ICMwZjM4MGY7XG4gICAgLS1zY3JlZW46ICM5YmJjMGY7XG4gICAgLS1lcnJvci1zY3JlZW46ICNmNjk0OTM7XG4gICAgLS1ib3JkZXItY29sb3VyOiAjYjVhZjQyO1xuICAgIC0tY3Vyc29yOiAjOGJhYzBmO1xuICAgIC0tdGV4dC1jb2xvdXI6ICMwZjM4MGY7XG59XG5cbjpyb290Lm5lb24ge1xuICAgIC0tZm9udDogXCJCZW9uXCI7XG4gICAgLS1tYXJrZXItZm9udDogXCJCZW9uXCI7XG4gICAgLS13aGl0ZTogI2VhMDBkOTtcbiAgICAtLWJsYWNrOiAjMTMzZTdjO1xuICAgIC0tc2NyZWVuOiAjMDkxODMzO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjZjIzY2E2O1xuICAgIC0tYm9yZGVyLWNvbG91cjogIzcxMWM5MTtcbiAgICAtLWN1cnNvcjogIzBhYmRjNjtcbiAgICAtLXRleHQtY29sb3VyOiAjZmJmZjM2O1xufVxuXG46cm9vdC50ZXJtaW5hbCB7XG4gICAgLS1mb250OiBcIkRvZ2ljYVwiO1xuICAgIC0tbWFya2VyLWZvbnQ6IFwiRG9naWNhXCI7XG4gICAgLS13aGl0ZTogYmxhY2s7XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1zY3JlZW46IGJsYWNrO1xuICAgIC0tZXJyb3Itc2NyZWVuOiByZWQ7XG4gICAgLS1ib3JkZXItY29sb3VyOiBncmVlbjtcbiAgICAtLWN1cnNvcjogZ3JlZW47XG4gICAgLS10ZXh0LWNvbG91cjogZ3JlZW47XG59XG5cbjpyb290LmZhbmN5IHtcbiAgICAtLWZvbnQ6IFwiR290aGljYVwiO1xuICAgIC0tbWFya2VyLWZvbnQ6IFwiQWxleCBCcnVzaFwiO1xuICAgIC0td2hpdGU6ICNlZmVmZTk7XG4gICAgLS1ibGFjazogIzIyMzAzMDtcbiAgICAtLXNjcmVlbjogI2U4ZDljZDtcbiAgICAtLWVycm9yLXNjcmVlbjogI2Q3NTA0ZDtcbiAgICAtLWJvcmRlci1jb2xvdXI6ICM1MjNkMzU7XG4gICAgLS1jdXJzb3I6ICNiYmE1ODQ7XG4gICAgLS10ZXh0LWNvbG91cjogIzIyMzAzMDtcbn1cblxuOnJvb3Quc2NydWZmeSB7XG4gICAgLS1mb250OiBcIlJpY2ggRWF0aW5cIjtcbiAgICAtLW1hcmtlci1mb250OiBcIlJpY2ggRWF0aW5cIjtcbiAgICAtLXdoaXRlOiAjZjdmN2Y3O1xuICAgIC0tYmxhY2s6ICMxNzBmMTE7XG4gICAgLS1zY3JlZW46ICMyMWM1YjA7XG4gICAgLS1lcnJvci1zY3JlZW46ICM3YTBhMGE7XG4gICAgLS1ib3JkZXItY29sb3VyOiAjZGZjYzE2O1xuICAgIC0tY3Vyc29yOiAjMTJhMzY1O1xuICAgIC0tdGV4dC1jb2xvdXI6ICMxNzBmMTE7XG59XG5cbi50aWMtdGFjLXRvZS1nYW1lLW1vZHVsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNjb3JlY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvdXIpO1xufVxuXG4uc2NvcmVjYXJkID4gW2NsYXNzKj1cIi1zY29yZWNhcmRcIl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmluZm9ybWF0aW9uLWNvbnRhaW5lciB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XG5cbi5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDFyZW07IH1cblxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICA1MCUgeyBvcGFjaXR5OiAxO31cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBK0I7QUFDbkM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQXFDO0FBQ3pDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQWtDO0FBQ3RDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBcUM7QUFDekM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0Isc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBLHlCQUF5QixpQkFBaUIsRUFBRTs7QUFFNUMsZ0JBQWdCLGVBQWUsRUFBRTs7O0FBR2pDO0lBQ0ksS0FBSyxVQUFVLEVBQUU7SUFDakIsTUFBTSxVQUFVLENBQUM7SUFDakIsT0FBTyxVQUFVLEVBQUU7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWVyb20gU2Fuc1xcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9NZXJvbVNhbnMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL2RvZ2ljYS50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR290aGljYVxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9Hb3RoaWNhLUJvb2sudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkFsZXggQnJ1c2hcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvQWxleEJydXNoLVJlZ3VsYXItT1RGLm90ZlxcXCIpXFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkZyZWUgTWV0dG9cXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvZnJlZW1ldHRvLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSaWNoIEVhdGluXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL1JpY2hcXFxcIEVhdGluXFxcXCcub3RmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkJlb25cXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvQmVvbi1SZWd1bGFyLm90ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0td2hpdGU6ICNmZGZmZmM7XFxuICAgIC0tYmxhY2s6ICMwMjAxMDA7XFxufVxcblxcbjpyb290Lm5vcm1hbCB7XFxuICAgIC0tZm9udDogXFxcIk1lcm9tIFNhbnNcXFwiO1xcbiAgICAtLW1hcmtlci1mb250OiBcXFwiRnJlZSBNZXR0b1xcXCI7XFxuICAgIC0td2hpdGU6ICNmZmVjZDE7XFxuICAgIC0tYmxhY2s6ICMwMDE1MjQ7XFxuICAgIC0tc2NyZWVuOiAjMTU2MTZkO1xcbiAgICAtLWVycm9yLXNjcmVlbjogIzc4MjkwZjtcXG4gICAgLS1ib3JkZXItY29sb3VyOiAjZmY3ZDAwO1xcbiAgICAtLWN1cnNvcjogIzM2YmNlMTtcXG4gICAgLS10ZXh0LWNvbG91cjogIzAwMTUyNDtcXG59XFxuXFxuOnJvb3QucmV0cm8ge1xcbiAgICAtLWZvbnQ6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICAtLW1hcmtlci1mb250OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgLS13aGl0ZTogI2FhYWFhYTtcXG4gICAgLS1ibGFjazogIzBmMzgwZjtcXG4gICAgLS1zY3JlZW46ICM5YmJjMGY7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjZjY5NDkzO1xcbiAgICAtLWJvcmRlci1jb2xvdXI6ICNiNWFmNDI7XFxuICAgIC0tY3Vyc29yOiAjOGJhYzBmO1xcbiAgICAtLXRleHQtY29sb3VyOiAjMGYzODBmO1xcbn1cXG5cXG46cm9vdC5uZW9uIHtcXG4gICAgLS1mb250OiBcXFwiQmVvblxcXCI7XFxuICAgIC0tbWFya2VyLWZvbnQ6IFxcXCJCZW9uXFxcIjtcXG4gICAgLS13aGl0ZTogI2VhMDBkOTtcXG4gICAgLS1ibGFjazogIzEzM2U3YztcXG4gICAgLS1zY3JlZW46ICMwOTE4MzM7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjZjIzY2E2O1xcbiAgICAtLWJvcmRlci1jb2xvdXI6ICM3MTFjOTE7XFxuICAgIC0tY3Vyc29yOiAjMGFiZGM2O1xcbiAgICAtLXRleHQtY29sb3VyOiAjZmJmZjM2O1xcbn1cXG5cXG46cm9vdC50ZXJtaW5hbCB7XFxuICAgIC0tZm9udDogXFxcIkRvZ2ljYVxcXCI7XFxuICAgIC0tbWFya2VyLWZvbnQ6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICAtLXdoaXRlOiBibGFjaztcXG4gICAgLS1ibGFjazogYmxhY2s7XFxuICAgIC0tc2NyZWVuOiBibGFjaztcXG4gICAgLS1lcnJvci1zY3JlZW46IHJlZDtcXG4gICAgLS1ib3JkZXItY29sb3VyOiBncmVlbjtcXG4gICAgLS1jdXJzb3I6IGdyZWVuO1xcbiAgICAtLXRleHQtY29sb3VyOiBncmVlbjtcXG59XFxuXFxuOnJvb3QuZmFuY3kge1xcbiAgICAtLWZvbnQ6IFxcXCJHb3RoaWNhXFxcIjtcXG4gICAgLS1tYXJrZXItZm9udDogXFxcIkFsZXggQnJ1c2hcXFwiO1xcbiAgICAtLXdoaXRlOiAjZWZlZmU5O1xcbiAgICAtLWJsYWNrOiAjMjIzMDMwO1xcbiAgICAtLXNjcmVlbjogI2U4ZDljZDtcXG4gICAgLS1lcnJvci1zY3JlZW46ICNkNzUwNGQ7XFxuICAgIC0tYm9yZGVyLWNvbG91cjogIzUyM2QzNTtcXG4gICAgLS1jdXJzb3I6ICNiYmE1ODQ7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMyMjMwMzA7XFxufVxcblxcbjpyb290LnNjcnVmZnkge1xcbiAgICAtLWZvbnQ6IFxcXCJSaWNoIEVhdGluXFxcIjtcXG4gICAgLS1tYXJrZXItZm9udDogXFxcIlJpY2ggRWF0aW5cXFwiO1xcbiAgICAtLXdoaXRlOiAjZjdmN2Y3O1xcbiAgICAtLWJsYWNrOiAjMTcwZjExO1xcbiAgICAtLXNjcmVlbjogIzIxYzViMDtcXG4gICAgLS1lcnJvci1zY3JlZW46ICM3YTBhMGE7XFxuICAgIC0tYm9yZGVyLWNvbG91cjogI2RmY2MxNjtcXG4gICAgLS1jdXJzb3I6ICMxMmEzNjU7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMxNzBmMTE7XFxufVxcblxcbi50aWMtdGFjLXRvZS1nYW1lLW1vZHVsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zY29yZWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG91cik7XFxufVxcblxcbi5zY29yZWNhcmQgPiBbY2xhc3MqPVxcXCItc2NvcmVjYXJkXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvcm1hdGlvbi1jb250YWluZXIgeyBmb250LXNpemU6IDEuNXJlbTsgfVxcblxcbi5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDFyZW07IH1cXG5cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgIDUwJSB7IG9wYWNpdHk6IDE7fVxcbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50aWMtdGFjLXRvZS1ncmlkIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmNlbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG91cik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcbn1cblxuLmNlbGwgPiBkaXYgeyBcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFya2VyLWZvbnQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2N1cnNvci1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXJzb3IpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBhbmltYXRpb246IGJsaW5rIDEuNXMgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90aWMtdGFjLXRvZS1tb2R1bGUvZ3JpZC1tb2R1bGUvZ3JpZC1zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixzQ0FBc0M7SUFDdEMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCw4QkFBOEI7SUFDOUIseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aWMtdGFjLXRvZS1ncmlkIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3VyKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcXG59XFxuXFxuLmNlbGwgPiBkaXYgeyBcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1hcmtlci1mb250KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY3Vyc29yLWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXJzb3IpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYW5pbWF0aW9uOiBibGluayAxLjVzIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wLXVwLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wLXVwLXN0eWxpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtc3R5bGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXN0eWxpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dyaWQtc3R5bGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ncmlkLXN0eWxpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW50ZXJmYWNlIHtcbiAgICAvKipcbiAgICAgKiBHYW1lIEludGVyZmFjZSBDbGFzc1xuICAgICAqIFxuICAgICAqIEJhc2UgR2FtZSBDbGFzcyB0aGF0IHNob3VsZCBiZSBJbmhlcml0ZWQgYnkgT3RoZXIgR2FtZXMgdG8gYmUgUGxheWVkIG9uIFxuICAgICAqIHRoZSBHYW1lQ2hpcC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgTmFtZSBvZiB0aGUgR2FtZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSkgeyB0aGlzLl90aXRsZSA9IHRpdGxlOyB9XG5cbiAgICBnZXQgdGl0bGUgKCkgeyByZXR1cm4gdGhpcy5fdGl0bGU7IH1cblxuICAgIHNldCB0aXRsZSAoc3RyKSB7IHRoaXMuX3RpdGxlOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgU2hvdyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgdGhlIFNob3cgQ2FsbGJhY2sgTWV0aG9kIGZvciBVcGRhdGluZyB0aGUgR2FtZUNoaXAgRGlzcGxheVxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBzaG93Q2FsbGJhY2sgU2hvdyBDYWxsYmFja1xuICAgICAqIEBjYWxsYmFjayB0YWtlRG93bkNhbGxiYWNrIFRha2UgRG93biBDYWxsYmFja1xuICAgICAqIEBjYWxsYmFjayBkaW1lbnNpb25zQ2FsbGJhY2sgR2V0IERpbWVuc2lvbnMgQ2FsbGJhY2tcbiAgICAgKi9cbiAgICBzZXRTY2VuZSAoc2hvd0NhbGxiYWNrLCB0YWtlRG93bkNhbGxiYWNrLCBnZXREaW1lbnNpb25zKSB7fVxuXG4gICAgLyoqXG4gICAgICogVXAgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFVwIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICB1cENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBSaWdodCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgUmlnaHQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHJpZ2h0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIERvd24gQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIERvd24gQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGRvd25DYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogTGVmdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgTGVmdCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgbGVmdENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBBIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYUNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBCIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBCIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYkNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgU3RhcnQgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc3RhcnRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTZWxlY3QgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc2VsZWN0Q2FsbGJhY2sgKCkge31cbn0iLCJpbXBvcnQgUG9wVXAgZnJvbSBcIi4vcG9wLXVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQm94IGV4dGVuZHMgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIEVycm9yIEJveCBDbGFzc1xuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIHVwZGF0aW5nIHRoZSBVc2VyIHdpdGggdGhlIGN1cnJlbnQgZXJyb3IuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcIkVycm9yXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE1lc3NhZ2UgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImVycm9yLW1lc3NhZ2VcIik7XG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl9tZXNzYWdlKTtcblxuICAgICAgICAvLyBTZXQgQWN0aXZlIHRvIGJlIEZhbHNlXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBtZXNzYWdlICgpIHsgcmV0dXJuIHRoaXMuX21lc3NhZ2U7IH1cblxuICAgIHNldCBtZXNzYWdlIChlbGVtKSB7IHRoaXMuX21lc3NhZ2UgPSBlbGVtOyB9XG5cbiAgICBnZXQgYWN0aXZlICgpIHsgcmV0dXJuIHRoaXMuX2FjdGl2ZTsgfVxuXG4gICAgc2V0IGFjdGl2ZSAoYm9vbCkgeyB0aGlzLl9hY3RpdmUgPSBib29sOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgTWVzc2FnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIEVycm9yIEJveCB3aXRoIHRoZSBtb3N0IHVwIHRvIGRhdGUgZXJyb3IuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR4dCBFcnJvciBNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TWVzc2FnZSAodHh0KSB7IFxuICAgICAgICB0aGlzLl9tZXNzYWdlLnRleHRDb250ZW50ID0gdHh0OyBcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IFBvcFVwIGZyb20gXCIuL3BvcC11cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvQm94IGV4dGVuZHMgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIEluZm9ybWF0aW9uIEJveCBDbGFzc1xuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIHVwZGF0aW5nIHRoZSBVc2VyIHdpdGggSW5mb3JtYXRpb24gcmVsYXRpbmcgdG8gdGhlIGN1cnJlbnQgR2FtZSBcbiAgICAgKiBiZWluZyBwbGF5ZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcIkluZm9ybWF0aW9uXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE1lc3NhZ2UgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImluZm8tbWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX21lc3NhZ2UpO1xuXG4gICAgICAgIC8vIFNldCBBY3RpdmUgdG8gYmUgRmFsc2VcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UgKCkgeyByZXR1cm4gdGhpcy5fbWVzc2FnZTsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKGVsZW0pIHsgdGhpcy5fbWVzc2FnZSA9IGVsZW07IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgUG9wLVVwIEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBTZXQgQ29udGFpbmVyIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuXG4gICAgICAgIC8vIFNldCBCbHVycmVkIEJhY2tnb3VuZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGJveFcgPSBNYXRoLmZsb29yKHdpZHRoICogMC45KTtcbiAgICAgICAgY29uc3QgYm94SCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC45KTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5oZWlnaHQgPSBgJHtib3hIfXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBQb3NpdGlvblxuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuMSk7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC4xKTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG5cbiAgICAgICAgLy8gU2V0IE1lc3NhZ2UgRm9udCBTaXplXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gTWF0aC5mbG9vcihNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAqIDAuMDQpO1xuICAgICAgICB0aGlzLl9tZXNzYWdlLnN0eWxlLmZvbnRTaXplID0gYCR7Zm9udFNpemV9cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBUaXRsZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIFRpdGxlIG9mIHRoZSBJbmZvcm1hdGlvbiBCb3guXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR4dCBOZXcgVGl0bGVcbiAgICAgKi9cbiAgICBzZXRUaXRsZSAodHh0KSB7IHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gdHh0OyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgTWVzc2FnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIEluZm9ybWF0aW9uIEJveCB3aXRoIHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gcmVsYXRlZCB0byB0aGUgXG4gICAgICogZ2FtZSBiZWluZyBwbGF5ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR4dCBJbmZvcm1hdGlvbiBNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TWVzc2FnZSAodHh0KSB7IFxuICAgICAgICB0aGlzLl9tZXNzYWdlLnRleHRDb250ZW50ID0gdHh0OyBcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IFBvcFVwIGZyb20gXCIuL3BvcC11cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFzZSBleHRlbmRzIFBvcFVwIHtcbiAgICAvKipcbiAgICAgKiBNZW51IEJhc2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBCYXNlIENsYXNzIGZvciBNYWluIE1lbnVzIG9yIFN1Yi1NZW51cy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2F0ZWdvcmllcyBDYXRlZ29yaWVzIGZvciBNZW51XG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgc3VwZXIoXCJNZW51XCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE9wdGlvbiBET00gRWxlbWVudHNcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5pZCA9IGAke3N1Yi5rZXkudG9Mb3dlckNhc2UoKX0tb3B0aW9uYDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHN1Yi5rZXk7XG4gICAgICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdWlsZCBSZXR1cm4gT3B0aW9uIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX3JldHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3JldHVybi5jbGFzc0xpc3QuYWRkKFwicmV0dXJuLW9wdGlvblwiKTtcbiAgICAgICAgdGhpcy5fcmV0dXJuLnRleHRDb250ZW50ID0gXCJSZXR1cm5cIjtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX3JldHVybik7XG5cbiAgICAgICAgLy8gU2V0dXAgQ3Vyc29yXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX25hbWUgPSBjYXRlZ29yaWVzLmtleTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgICBrZXk6IHRoaXMuX25hbWUsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBvcHRpb25zICgpIHsgcmV0dXJuIHRoaXMuX29wdGlvbnM7IH1cblxuICAgIHNldCBvcHRpb25zIChhcnIpIHsgdGhpcy5fb3B0aW9ucyA9IGFycjsgfVxuXG4gICAgZ2V0IHJldHVybiAoKSB7IHJldHVybiB0aGlzLl9yZXR1cm47IH1cblxuICAgIHNldCByZXR1cm4gKGVsZW0pIHsgdGhpcy5fcmV0dXJuID0gZWxlbTsgfVxuXG4gICAgZ2V0IG5hbWUgKCkgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuXG4gICAgc2V0IG5hbWUgKHN0cikgeyB0aGlzLl9uYW1lID0gc3RyOyB9XG5cbiAgICBnZXQgc2VsZWN0ZWQgKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cblxuICAgIHNldCBzZWxlY3RlZCAoZGljdCkgeyB0aGlzLl9zZWxlY3RlZCA9IGRpY3Q7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgTWVudSBCb3gsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSB0byBiZSBzZXQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFNjcmVlbiBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgU2NyZWVuIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgc3VwZXIuc2V0RGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvLyBTZXQgT3B0aW9ucyBXaWR0aFxuICAgICAgICBjb25zdCBib3hXID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuNik7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uc3R5bGUud2lkdGggPSBgJHtib3hXfXB4YDsgfSk7XG4gICAgICAgIHRoaXMuX3JldHVybi5zdHlsZS53aWR0aCA9IGAke2JveFd9cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBDdXJzb3IgTWV0aG9kXG4gICAgICogXG4gICAgICogV2hpbGUgY3ljbGluZyB0aHJvdWdoIHRoZSBNZW51IE9wdGlvbnMsIGlmIHRoZSBjdXJzb3IgaXMgb24gYW4gb3B0aW9uLCBcbiAgICAgKiB0aGVuIHRoZSBvcHRpb24gc2hvdWxkIGJlIGhpZ2hsaWdodGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb24gQ3Vyc29yIG9uIE9wdGlvblxuICAgICAqL1xuICAgIHNldEN1cnNvciAob249dHJ1ZSkge1xuICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIE9wdGlvblxuICAgICAgICBpZiAodGhpcy5fY3VycmVudCA9PT0gdGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5jb250YWlucyhcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmIChvbiAmJiAhY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3JcIik7XG4gICAgICAgICAgICBpZiAoIW9uICYmIGNoZWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuX3JldHVybi5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yXCIpO1xuICAgICAgICB9IFxuICAgICAgICAvLyBIYW5kbGUgT3RoZXIgT3B0aW9uc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QuY29udGFpbnMoXCJjdXJzb3JcIik7XG4gICAgICAgICAgICBpZiAob24gJiYgIWNoZWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmICghb24gJiYgY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZpbmcgdGhlIEN1cnNvciBVcCBvciBEb3duIG9uIHRoZSBNZW51LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXAgRGVmYXVsdCBBY3Rpb24gaXMgVXB3YXJkc1xuICAgICAqL1xuICAgIHZlcnRpY2FsTW92ZSAodXA9dHJ1ZSkge1xuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudCArICh1cCA/IC0xIDogMSk7XG4gICAgICAgIGlmIChjdXJyIDw9IHRoaXMuX29wdGlvbnMubGVuZ3RoICYmIGN1cnIgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJzb3IoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IGN1cnI7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXB0IEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaG9vc2VzIHRoZSBPcHRpb24gb24gdGhlIE1lbnUgdGhhdCB0aGUgVXNlciBoYXMgc2VsZWN0ZWQsIHJldHVybmluZyB0cnVlIFxuICAgICAqIGltcGxpZXMgdGhhdCBhbiBvcHRpb24gd2FzIHNlbGVjdGVkLCBmYWxzZSBpbXBsaWVzIHRoYXQgdGhlIHJldHVybiBvcHRpb24gXG4gICAgICogd2FzIHNlbGVjdGVkLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRydWUgZm9yIGFuIE9wdGlvbiwgRmFsc2UgZm9yIFJldHVyblxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBSZXR1cm4gU2VsZWN0XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50ID09PSB0aGlzLl9vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIE9wdGlvbnMgU2VsZWN0XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkLnZhbHVlID0gdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSIsImltcG9ydCBNZW51QmFzZSBmcm9tIFwiLi9tZW51LWJhc2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIE1lbnVCYXNlIHtcbiAgICAvKipcbiAgICAgKiBNZW51IENsYXNzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBnaXZlbiBDYXRlZ29yaWVzIGZvciB0aGUgTWVudSwgYSBkaXNwbGF5IHdpbGwgYmUgcHJlc2VudGVkIHRvIFxuICAgICAqIHRoZSBVc2VyIGZvciB0aGVtIHRvIFNlbGVjdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2F0ZWdvcmllcyBKU09OIE9iamVjdCBvZiBNZW51IENhdGVnb3JpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY2F0ZWdvcmllcykge1xuICAgICAgICBzdXBlcihjYXRlZ29yaWVzKTtcblxuICAgICAgICAvLyBCdWlsZCBTdWItTWVudXNcbiAgICAgICAgdGhpcy5fc3VicyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBDcmVhdGUgU3ViLU1lbnUgaWYgTmVjZXNzYXJ5XG4gICAgICAgICAgICBpZiAoc3ViLnN1YnMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHN1Yi5rZXksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZW51OiBuZXcgTWVudShzdWIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBzdWJzICgpIHsgcmV0dXJuIHRoaXMuX3N1YnM7IH1cblxuICAgIHNldCBzdWJzIChhcnIpIHsgdGhpcy5fc3VicyA9IGFycjsgfVxuXG4gICAgZ2V0IGNvbnRyb2xsZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbGxlcjsgfVxuXG4gICAgc2V0IGNvbnRyb2xsZXIgKGJvb2wpIHsgdGhpcy5fY29udHJvbGxlciA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgTWVudSBCb3gsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSB0byBiZSBzZXQuIFxuICAgICAqIEFkZGl0aW9uYWxseSwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIFN1Yi1NZW51IENvbXBvbmVudHMgYXJlIHRvIGJlIFxuICAgICAqIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBIYW5kbGUgTWVudSBEaW1lbnNpb25zXG4gICAgICAgIHN1cGVyLnNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fc3Vicy5mb3JFYWNoKHN1YiA9PiB7IHN1Yi5tZW51LnNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCk7IH0pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgU3ViLU1lbnUgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0cyB0aGUgU3ViLU1lbnUgU2VsZWN0ZWQgYnkgdGhlIFVzZXIgdG8gYmUgb24gRGlzcGxheS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBTdWItTWVudSBET00gRWxlbWVudFxuICAgICAqL1xuICAgIHNldFN1Yk1lbnUgKCkge1xuICAgICAgICB0aGlzLl9zdWJzW3RoaXMuX2N1cnJlbnRdLmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3Vic1t0aGlzLl9jdXJyZW50XS5tZW51O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IFN1Yi1NZW51cyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXRzIHRoZSBNYWluIE1lbnUgdG8gYmUgb24gRGlzcGxheS5cbiAgICAgKi9cbiAgICByZXNldFN1Yk1lbnVzICgpIHsgdGhpcy5fc3Vicy5mb3JFYWNoKHN1YiA9PiB7IHN1Yi5jb250cm9sbGVyID0gZmFsc2U7IH0pOyB9XG59IiwiaW1wb3J0IFwiLi9wb3AtdXAtc3R5bGluZy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIFBvcC1VcCBDbGFzc1xuICAgICAqIFxuICAgICAqIFNldmVyYWwgQ29tcG9uZW50cyB0byB0aGUgR2FtZSByZXF1aXJlIGEgUG9wLVVwIEJveCwgYW5kIHRoaXMgQ2xhc3MgXG4gICAgICogUmVwcmVzZW50cyB0aGF0IEJveC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIGZvciBQb3AtVXBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICAvLyBCdWlsZCBQb3AtVXAgQ29udGFpbmVyIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX21vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tY29udGFpbmVyYCk7XG4gICAgICAgIFxuICAgICAgICAvLyBCdWlsZCBQb3AtVXAgQm94IERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2JveC5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tYm94YCk7XG5cbiAgICAgICAgLy8gQnVpbGQgVGl0bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl90aXRsZS5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tdGl0bGVgKTtcbiAgICAgICAgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fdGl0bGUpO1xuXG4gICAgICAgIC8vIEJ1aWxkIEJsdXJyZWQgQmFja2dyb3VuZCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9ibHVycmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5jbGFzc0xpc3QuYWRkKFwiYmx1cnJlZC1iYWNrZ3JvdW5kXCIpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBDb21wb25lbnRzIHRvIE1vZHVsZVxuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fYmx1cnJlZCk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9ib3gpO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgUG9wLVVwIEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBTZXQgQ29udGFpbmVyIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuXG4gICAgICAgIC8vIFNldCBCbHVycmVkIEJhY2tnb3VuZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGJveFcgPSBNYXRoLmZsb29yKHdpZHRoICogMC42KTtcbiAgICAgICAgY29uc3QgYm94SCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC42KTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5oZWlnaHQgPSBgJHtib3hIfXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBQb3NpdGlvblxuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuMik7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC4yKTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgfVxufSIsImltcG9ydCBQb3BVcCBmcm9tIFwiLi9wb3AtdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0Qm94IGV4dGVuZHMgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yIChkZXNjcmlwdGlvbiwgY2F0ZWdvcmllcykge1xuICAgICAgICBzdXBlcihcIlNlbGVjdFwiKTtcblxuICAgICAgICAvLyBSZW1vdmUgVGl0bGVcbiAgICAgICAgdGhpcy5fYm94LnJlbW92ZUNoaWxkKHRoaXMuX3RpdGxlKTtcblxuICAgICAgICAvLyBCdWlsZCBEZXNjcmlwdGlvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fZGVzYy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0aGlzLl9kZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl9kZXNjKTtcblxuICAgICAgICAvLyBCdWlsZCBPcHRpb24gRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBvcHRpb24uaWQgPSBgJHtjYXRlZ29yeS5rZXkudG9Mb3dlckNhc2UoKX0tb3B0aW9uYDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNhdGVnb3J5LmtleTtcbiAgICAgICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldHVwIEN1cnNvclxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5zZXRDdXJzb3IoKTtcblxuICAgICAgICAvLyBTZXQgQWN0aXZlIHRvIGJlIEZhbHNlXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kZXNjOyB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24gKHN0cikgeyB0aGlzLl9kZXNjID0gc3RyOyB9XG5cbiAgICBnZXQgb3B0aW9ucyAoKSB7IHJldHVybiB0aGlzLl9vcHRpb25zOyB9XG5cbiAgICBzZXQgb3B0aW9ucyAoYXJyKSB7IHRoaXMuX29wdGlvbnMgPSBhcnI7IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgU2VsZWN0IEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBzdXBlci5zZXREaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBDb21wb25lbnQgV2lkdGhcbiAgICAgICAgdGhpcy5fYm94VyA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjYpO1xuICAgICAgICB0aGlzLl9kZXNjLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fYm94V31weGA7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uc3R5bGUud2lkdGggPSBgJHt0aGlzLl9ib3hXfXB4YDsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEN1cnNvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGlsZSBjeWNsaW5nIHRocm91Z2ggdGhlIFNlbGVjdCBPcHRpb25zLCBpZiB0aGUgY3Vyc29yIGlzIG9uIGFuIG9wdGlvbiwgXG4gICAgICogdGhlbiB0aGUgb3B0aW9uIHNob3VsZCBiZSBoaWdobGlnaHRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uIEN1cnNvciBvbiBPcHRpb25cbiAgICAgKi9cbiAgICBzZXRDdXJzb3IgKG9uPXRydWUpIHtcbiAgICAgICAgLy8gSGFuZGxlIE9wdGlvbnNcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLmNsYXNzTGlzdC5jb250YWlucyhcImN1cnNvclwiKTtcbiAgICAgICAgaWYgKG9uICYmICFjaGVjaylcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgICAgICAgaWYgKCFvbiAmJiBjaGVjaylcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LnJlbW92ZShcImN1cnNvclwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgU2VsZWN0aW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIE5ldyBTZWxlY3Rpb24sIHRoZSBtZXRob2Qgd2lsbCByZXNldCB0aGUgRE9NIEVsZW1lbnRzIGluIHRoZSBcbiAgICAgKiBTZWxlY3Rpb24gQm94LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjIE5ldyBEZXNjcmlwdGlvbiBmb3IgU2VsZWN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gY2F0ZWdvcmllcyBOZXcgTGlzdCBvZiBDYXRlZ29yaWVzXG4gICAgICovXG4gICAgc2V0U2VsZWN0aW9ucyAoZGVzYywgY2F0ZWdvcmllcykge1xuICAgICAgICAvLyBTZXQgRGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5fZGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG5cbiAgICAgICAgLy8gUmVtb3ZlIE9wdGlvbnMgZnJvbSBCb3hcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7IHRoaXMuX2JveC5yZW1vdmVDaGlsZChvcHRpb24pOyB9KTtcblxuICAgICAgICAvLyBTZXQgTmV3IE9wdGlvbnNcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5pZCA9IGAke2NhdGVnb3J5LmtleS50b0xvd2VyQ2FzZSgpfS1vcHRpb25gO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnkua2V5O1xuICAgICAgICAgICAgb3B0aW9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fYm94V31weGA7XG4gICAgICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgQ3Vyc29yXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92aW5nIHRoZSBDdXJzb3IgVXAgb3IgRG93biBvbiB0aGUgU2VsZWN0IEJveC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwIERlZmF1bHQgQWN0aW9uIGlzIFVwd2FyZHNcbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE1vdmUodXA9dHJ1ZSkge1xuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudCArICh1cCA/IC0xIDogMSk7XG4gICAgICAgIGlmIChjdXJyIDwgdGhpcy5fb3B0aW9ucy5sZW5ndGggJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gY3VycjtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2NlcHQgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENob29zZXMgdGhlIE9wdGlvbiBvbiB0aGUgU2VsZWN0IEJveCB0aGF0IHRoZSBVc2VyIGhhcyBzZWxlY3RlZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCByZXR1cm5zIHRoZSBzdHJpbmcgb2Ygd2hhdCB3YXMgc2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgU3RyaW5nIFJlcHJlc2VudGF0aW9uIG9mIFNlbGVjdGlvblxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoKSB7IHJldHVybiB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLnRleHRDb250ZW50OyB9XG59IiwiaW1wb3J0IEVhc3kgZnJvbSBcIi4vbGV2ZWxzL2Vhc3kuanNcIjtcbmltcG9ydCBIYXJkIGZyb20gXCIuL2xldmVscy9oYXJkLmpzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICAjVFVSTjtcbiAgICAjU0laRTtcbiAgICAjTEVWRUxTID0ge2Vhc3k6IG51bGwsIGhhcmQ6IG51bGx9O1xuXG4gICAgLyoqXG4gICAgICogR2FtZSBDbGFzc1xuICAgICAqIFxuICAgICAqIE9iamVjdCBmb3IgdHJhY2tpbmcgdGhlIGN1cnJlbnQgZ2FtZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBTaXplIG9mIEdyaWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoc2l6ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9ncmlkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKVxuICAgICAgICAgICAgdGhpcy5fZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLiNUVVJOID0gMDtcbiAgICAgICAgdGhpcy4jU0laRSA9IHNpemU7XG4gICAgICAgIHRoaXMuI0xFVkVMUy5lYXN5ID0gbmV3IEVhc3koKTtcbiAgICAgICAgdGhpcy4jTEVWRUxTLmhhcmQgPSBuZXcgSGFyZChcInhcIiwgdGhpcy4jU0laRSk7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpc2VkID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAvLyBTZXQgRGVmYXVsdCBBbGdvcml0aG0gdG8gYmUgRWFzeVxuICAgICAgICB0aGlzLl9hbGdvcml0aG0gPSB0aGlzLiNMRVZFTFMuZWFzeTtcbiAgICB9XG5cbiAgICBnZXQgZ3JpZCAoKSB7IHJldHVybiB0aGlzLl9ncmlkOyB9XG5cbiAgICBzZXQgZ3JpZCAoYXJyKSB7IHRoaXMuX2dyaWQgPSBhcnI7IH1cblxuICAgIGdldCBwbGF5ZXJzICgpIHsgcmV0dXJuIHRoaXMuX3BsYXllcnM7IH1cblxuICAgIHNldCBwbGF5ZXJzIChhcnIpIHsgdGhpcy5fcGxheWVycyA9IGFycjsgfVxuXG4gICAgZ2V0IGFsZ29yaXRobSAoKSB7IHJldHVybiB0aGlzLl9hbGdvcml0aG07IH1cblxuICAgIHNldCBhbGdvcml0aG0gKG9iaikgeyB0aGlzLl9sZXZlbCA9IG9iajsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgTWV0aG9kXG4gICAgICogXG4gICAgICogQ3JlYXRlIFBsYXllciBPYmplY3RzIGZvciB0aGUgVXBjb21pbmcgR2FtZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbm91Z2h0IFBsYXllciAxIE5vdWdodCBvciBDcm9zc1xuICAgICAqL1xuICAgIHNldHVwIChub3VnaHQpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgUGxheWVycyBoYXZlIGFscmVhZHkgYmVlbiBpbml0aWFsaXNlZFxuICAgICAgICBpZiAodGhpcy5fcGxheWVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMucHVzaChuZXcgUGxheWVyKG5vdWdodCwgdGhpcy4jU0laRSkpO1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoKG5vdWdodCA9PT0gXCJvXCIgPyBcInhcIiA6IFwib1wiKSwgdGhpcy4jU0laRSkpO1xuICAgICAgICAgICAgdGhpcy4jTEVWRUxTLmhhcmQubWFya2VyID0gKG5vdWdodCA9PT0gXCJvXCIgPyBcInhcIiA6IFwib1wiKTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIFVwZGF0ZSBQbGF5ZXJzLCBpZiByZXF1aXJlZFxuICAgICAgICBlbHNlIGlmICh0aGlzLl9wbGF5ZXJzWzBdLm1hcmtlciAhPT0gbm91Z2h0KSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgUGxheWVyIE1hcmtlcnNcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnNbMF0ubWFya2VyID0gbm91Z2h0O1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyc1sxXS5tYXJrZXIgPSAobm91Z2h0ID09PSBcIm9cIiA/IFwieFwiIDogXCJvXCIpO1xuICAgICAgICAgICAgdGhpcy4jTEVWRUxTLmhhcmQubWFya2VyID0gKG5vdWdodCA9PT0gXCJvXCIgPyBcInhcIiA6IFwib1wiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBMZXZlbCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBEaWZmaWN1bHR5IExldmVsIGlzIHNldCB3aXRoIHRoaXMgTWV0aG9kLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBBbGdvcml0aG0gRGlmZmljdWx0eVxuICAgICAqL1xuICAgIHNldExldmVsIChsZXZlbCkgeyBcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtID0gdGhpcy4jTEVWRUxTW2xldmVsXTsgXG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXNlZClcbiAgICAgICAgICAgIHRoaXMuc2V0dXAodGhpcy5fcGxheWVyc1swXS5tYXJrZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBNYXJrZXIgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDdXJyZW50IFR1cm4sIHRoZSBtZXRob2QgcmV0dXJucyB0aGUgTWFya2VyIG9mIHRoZSBQbGF5ZXIuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSwgaWYgQ3VycmVudCBUdXJuIGlzIE5vdWdodFxuICAgICAqL1xuICAgIGdldE1hcmtlciAoKSB7IHJldHVybiB0aGlzLl9wbGF5ZXJzW3RoaXMuI1RVUk5dLm1hcmtlciA9PT0gXCJvXCIgPyB0cnVlIDogZmFsc2U7IH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXNldCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXNldCBTY29yZXMgYW5kIEdyaWQuXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgICAvLyBSZXNldCBQbGF5ZXIgU2NvcmVzXG4gICAgICAgIHRoaXMuX3BsYXllcnNbMF0ucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fcGxheWVyc1sxXS5yZXNldCgpO1xuXG4gICAgICAgIC8vIFJlc2V0IEdyaWRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNTSVpFOyBpKyspIFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNTSVpFOyBqKyspXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JpZFtpXVtqXSA9IFwiXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0ZW1wdCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGVuIHRoZSBQbGF5ZXIgQXR0ZW1wdHMgdG8gbWFrZSBhIG1vdmUsIHRoZSBtZXRob2Qgd2lsbCBlbnN1cmUgdGhhdCB0aGVcbiAgICAgKiBtb3ZlIHdhcyBhIGxlZ2FsIG9uZSBvciBub3QsIGFuZCBhbHNvIGNoZWNrIGlmIHRoZSByZXN1bHRpbmcgbW92ZSBoYXMgbGVkXG4gICAgICogdG8gdGhlIGVuZCBvZiB0aGUgR2FtZSwgd2hldGhlciB0aGF0IHBsYXllciBoYXMgd29uLCBvciBpZiBpdCByZXN1bHRlZCBpblxuICAgICAqIGEgZHJhdy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBBdHRlbXB0IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IEF0dGVtcHQgWS1Db29yZGluYXRlXG4gICAgICogQHJldHVybnMgTWVzc2FnZSBpbmRpY2F0aW5nIEF0dGVtcHQncyBSZXN1bHRcbiAgICAgKi9cbiAgICBhdHRlbXB0ICh4LCB5KSB7XG4gICAgICAgIC8vIFJlamVjdCBBdHRlbXB0cyB0aGF0IGFyZSBiZXlvbmQgR3JpZCBCb3VuZHNcbiAgICAgICAgaWYgKHggPCAzICYmIHggPj0gMCAmJiB5IDwgMyAmJiB5ID49IDApIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIEF0dGVtcHQgaXNuJ3Qgb24gYW4gT2NjdXBpZWQgQ2VsbFxuICAgICAgICAgICAgaWYgKHRoaXMuI2xlZ2FsKHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIFBsYXllclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllcnNbdGhpcy4jVFVSTl0ucGxheSh4LCB5KTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBHcmlkXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JpZFt5XVt4XSA9IHRoaXMuX3BsYXllcnNbdGhpcy4jVFVSTl0ubWFya2VyO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hjZWsgaWYgUGxheWVyIGhhcyBXb25cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGxheWVyc1t0aGlzLiNUVVJOXS5oYXNXb24oKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BsYXllcnNbdGhpcy4jVFVSTl0ubWFya2VyO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGEgRHJhd1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNmaWxsZWQoKSkgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkRyYXchXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBOZXh0IFR1cm5cbiAgICAgICAgICAgICAgICB0aGlzLiNUVVJOID0gdGhpcy4jVFVSTiA9PT0gMCA/IDEgOiAwO1xuXG4gICAgICAgICAgICAgICAgLy8gR2FtZSBzaG91bGQgUmVzdW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBgSWxsZWdhbCBNb3ZlISAoJHt4fSwgJHt5fSkgaXMgYWxyZWFkeSBvY2N1cGllZCFgO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGBJbGxlZ2FsIE1vdmUhICgke3h9LCAke3l9KSBpcyBvdXQgb2YgYm91bmRzIWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGVnYWwgTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIHRoZSBBdHRlbXB0IGlzIExlZ2FsLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEF0dGVtcCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBBdHRlbXB0IFktQ29vcmRpbmF0ZVxuICAgICAqIEByZXR1cm5zIFRydWUsIGlmIEF0dGVtcHQgaXMgTGVnYWxcbiAgICAgKi9cbiAgICAjbGVnYWwgKHgsIHkpIHsgcmV0dXJuIHRoaXMuX2dyaWRbeV1beF0gPT09IFwiXCI7IH1cblxuICAgIC8qKlxuICAgICAqIEZpbGxlZCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgYWxsIHRoZSBjZWxscyBpbiB0aGUgZ3JpZCBoYXZlIGJlZW4gbWFya2VkLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgR3JpZCBpcyBGdWxseSBNYXJrZWRcbiAgICAgKi9cbiAgICAjZmlsbGVkICgpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIEdyaWQgYW5kIFNlYXJjaCBmb3IgVW5tYXJrZWQgQ2VsbFxuICAgICAgICBsZXQgZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNTSVpFOyBpKyspXG4gICAgICAgICAgICBpZiAodGhpcy5fZ3JpZFtpXS5pbmNsdWRlcyhcIlwiKSkge1xuICAgICAgICAgICAgICAgIGZpbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWxsZWQ7XG4gICAgfVxufSIsImltcG9ydCBMZXZlbCBmcm9tIFwiLi9sZXZlbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFYXN5IGV4dGVuZHMgTGV2ZWwge1xuICAgIC8qKlxuICAgICAqIEVhc3kgTGV2ZWwgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIFRpYy1UYWMtVG9lIEdhbWUsIHRoZSBFYXN5IExldmVsIHJhbmRvbWx5IHNlbGVjdHMgaXRzIG5leHQgbW92ZSxcbiAgICAgKiB3aXRob3V0IGFueSBlZmZvcnQgZm9yIG1pbmltaXNpbmcgbG9zcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7IHN1cGVyKFwiZWFzeVwiKTsgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEN1cnJlbnQgR3JpZCwgdGhlIG1ldGhvZCB3aWxsIHJhbmRvbWx5IHNlbGVjdCBhbiB1bm9jY3VwaWVkIGNlbGxcbiAgICAgKiBhcyB0aGUgU2VsZWN0ZWQgTW92ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdW119IGdyaWQgQ3VycmVudCBHcmlkXG4gICAgICogQHJldHVybnMgU2VsZWN0ZWQgTW92ZVxuICAgICAqL1xuICAgIHBsYXkgKGdyaWQpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBBdmFpbGFibGUgQXJyYXlcbiAgICAgICAgbGV0IGF2YWlsYWJsZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIEdyaWQgdG8gRmluZCBBdmFpbGFibGUgQ2VsbHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IFB1c2ggQXZhaWFibGUgQ2VsbHMgaW50byBBcnJheVxuICAgICAgICAgICAgICAgIGlmIChncmlkW2ldW2pdID09PSBcIlwiKVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUucHVzaCh7eDogaiwgeTogaX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIGEgUmFuZG9tIFNlbGVjdGlvbiBvZiBBdmFpbGFibGUgU3F1YXJlc1xuICAgICAgICByZXR1cm4gYXZhaWxhYmxlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZS5sZW5ndGgpXTtcbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFyZCBleHRlbmRzIExldmVsIHtcbiAgICAjSU5GSU5JVFkgPSAxMDAwO1xuXG4gICAgLyoqXG4gICAgICogSGFyZCBMZXZlbCBDbGFzc1xuICAgICAqIFxuICAgICAqIEZvciB0aGUgVGljLVRhYy1Ub2UgR2FtZSwgdGhlIEhhcmQgTGV2ZWwgdXRpbGlzZXMgdGhlIE1pbmltYXggQWxnb3JpdGhtXG4gICAgICogdG8gZmluZCB0aGUgTmV4dCBNb3ZlIGl0IHdpbGwgdGFrZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWFya2VyIERlZmF1bHQgQWxnb3JpdGhtIE1hcmtlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFNpemUgb2YgdGhlIEdyaWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobWFya2VyLCBzaXplKSB7IFxuICAgICAgICBzdXBlcihcImhhcmRcIik7IFxuICAgICAgICB0aGlzLl9tYXJrZXIgPSBtYXJrZXI7XG4gICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xuICAgICAgICB0aGlzLl9tb3ZlID0ge3g6IC0xLCB5OiAtMX07XG4gICAgfVxuXG4gICAgZ2V0IG1hcmtlciAoKSB7IHJldHVybiB0aGlzLl9tYXJrZXI7IH1cblxuICAgIHNldCBtYXJrZXIgKHN0cikgeyB0aGlzLl9tYXJrZXIgPSBzdHI7IH1cblxuICAgIGdldCBzaXplICgpIHsgcmV0dXJuIHRoaXMuX3NpemU7IH1cblxuICAgIHNldCBzaXplIChudW0pIHsgdGhpcy5fc2l6ZSA9IG51bTsgfVxuXG4gICAgZ2V0IG1vdmUgKCkgeyByZXR1cm4gdGhpcy5fbW92ZTsgfVxuXG4gICAgc2V0IG1vdmUgKGRpY3QpIHsgdGhpcy5fbW92ZSA9IGRpY3Q7IH1cblxuICAgIC8qKlxuICAgICAqIFBsYXkgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDdXJyZW50IEdyaWQsIHRoZSBtZXRob2Qgd2lsbCBzZWxlY3QgdGhlIG5leHQgbW92ZSB1c2luZyB0aGUgXG4gICAgICogTWluaW1heCBBbGdvcml0aG0sIHdoaWNoIGFpbXMgdG8gbWluaW1pc2UgdGhlIHBvc3NpYmxlIGxvc3NlcyBmb3IgYW55IFxuICAgICAqIGdpdmVuIG1vdmUgZm9yIHRoZSB3b3JzdCBwb3NzaWJsZSBtb3ZlIHRoZSBVc2VyIHdpbGwgbWFrZSAoZnJvbSB0aGUgXG4gICAgICogY29tcHV0ZXIncyBwZXJzcGVjdGl2ZSkuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXVtdfSBncmlkIEN1cnJlbnQgR3JpZFxuICAgICAqIEByZXR1cm5zIFNlbGVjdGVkIE1vdmVcbiAgICAgKi9cbiAgICBwbGF5IChncmlkKSB7XG4gICAgICAgIHRoaXMuI21pbmltYXgoZ3JpZCwgMCwgdHJ1ZSwgKHRoaXMuX21hcmtlciA9PT0gXCJvXCIgPyBcInhcIiA6IFwib1wiKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZlOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNaW5pbWF4IEFsZ29yaXRobSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBUaGUgTWluaW1heCBBbGdvcml0aG0gaXMgYSBkZWNpc2lvbiB0b29sIGZvciBtaW5pbWlzaW5nIHRoZSBwb3NzaWJsZSBsb3NzXG4gICAgICogZm9yIGEgd29yc3QgY2FzZSBzY2VuYXJpby4gVGhpcyBBbGdvcml0aG0gd2FzIG1vZGlmaWVkIGZvciB0aGUgY29udGV4dCBvZlxuICAgICAqIHBsYXlpbmcgVGljLVRhYy1Ub2UuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXVtdfSBncmlkIEN1cnJlbnQgR3JpZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZXB0aCBEZXB0aCBvZiBSZWN1cnNpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1heGltaXNpbmcgRGVmYXVsdCBpcyBNYXhpbWlzaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1hcmtlciBNYXJrZXIgZm9yIFR1cm5cbiAgICAgKiBAcmV0dXJucyBUaGUgQ29zdC9CZW5lZml0IG9mIHRoZSBNb3ZlXG4gICAgICovXG4gICAgI21pbmltYXggKGdyaWQsIGRlcHRoPTAsIG1heGltaXNpbmc9dHJ1ZSwgbWFya2VyPVwiXCIpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgR2FtZSBpcyBDb21wbGV0ZVxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuI2lzQ29tcGxldGUoZ3JpZCk7XG5cbiAgICAgICAgLy8gUmV0dXJuIEhldXJpc3RpYyBmb3IgU3RhdGVcbiAgICAgICAgaWYgKHN0YXRlID09PSB0aGlzLl9tYXJrZXIpXG4gICAgICAgICAgICByZXR1cm4gMTA7XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAodGhpcy5fbWFya2VyID09PSBcIm9cIiA/IFwieFwiIDogXCJvXCIpKVxuICAgICAgICAgICAgcmV0dXJuIC0xMDtcbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IFwiRFJBV1wiKVxuICAgICAgICAgICAgcmV0dXJuIDA7XG5cbiAgICAgICAgLy8gU2V0dXAgZm9yIE1pbmltYXggQWxnb3JpdGhtXG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IGlkeDtcbiAgICAgICAgY29uc3QgbW92ZXMgPSB0aGlzLiNhdmFpbGFibGVNb3ZlcyhncmlkKTtcbiAgICAgICAgY29uc3QgbmV4dCA9IG1hcmtlciA9PT0gXCJvXCIgPyBcInhcIiA6IFwib1wiO1xuXG4gICAgICAgIC8vIEhhbmRsZSBNYXhpbWlzaW5nIFBsYXllclxuICAgICAgICBpZiAobWF4aW1pc2luZykge1xuICAgICAgICAgICAgdmFsdWUgPSAtMSAqIHRoaXMuI0lORklOSVRZO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBtb3Zlc1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHRoaXMuI3NpbXVsYXRlKGdyaWQsIG1vdmUueCwgbW92ZS55LCBuZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuI21pbmltYXgobmV3U3RhdGUsIGRlcHRoICsgMSwgZmFsc2UsIG5leHQpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA+IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIE1vdmVcbiAgICAgICAgICAgIHRoaXMuX21vdmUgPSBtb3Zlc1tpZHhdO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgTWluaW1pc2luZyBQbGF5ZXJcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuI0lORklOSVRZO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBtb3Zlc1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHRoaXMuI3NpbXVsYXRlKGdyaWQsIG1vdmUueCwgbW92ZS55LCBuZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuI21pbmltYXgobmV3U3RhdGUsIGRlcHRoIC0gMSwgdHJ1ZSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgTW92ZVxuICAgICAgICAgICAgdGhpcy5fbW92ZSA9IG1vdmVzW2lkeF07XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIENvbXBsZXRlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrIGlmIGEgR2l2ZW4gR3JpZCBpcyBDb21wbGV0ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdW119IGdyaWQgQ3VycmVudCBHcmlkXG4gICAgICogQHJldHVybnMgU3RhdGUgb2YgR3JpZFxuICAgICAqL1xuICAgICNpc0NvbXBsZXRlIChncmlkKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIGxldCBwbGF5ZXJzID0ge1xuICAgICAgICAgICAgcDE6IG5ldyBQbGF5ZXIoKHRoaXMuX21hcmtlciA9PT0gXCJvXCIgPyBcInhcIjogXCJvXCIpLCB0aGlzLl9zaXplKSxcbiAgICAgICAgICAgIHAyOiBuZXcgUGxheWVyKHRoaXMuX21hcmtlciwgdGhpcy5fc2l6ZSlcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZpbGxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIERlc2lyZWQgR3JpZFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBGaXJzdCBQbGF5ZXJcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZFtpXVtqXSA9PT0gcGxheWVycy5wMS5tYXJrZXIpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnMucDEucGxheShqLCBpKTtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgU2Vjb25kIFBsYXllclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGdyaWRbaV1bal0gPT09IHBsYXllcnMucDIubWFya2VyKVxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJzLnAyLnBsYXkoaiwgaSk7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIFVucGxheWVkIENlbGxcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsYXllcnMucDEuaGFzV29uKCkpXG4gICAgICAgICAgICByZXR1cm4gcGxheWVycy5wMS5tYXJrZXI7XG4gICAgICAgIGVsc2UgaWYgKHBsYXllcnMucDIuaGFzV29uKCkpXG4gICAgICAgICAgICByZXR1cm4gcGxheWVycy5wMi5tYXJrZXI7XG4gICAgICAgIGVsc2UgaWYgKGZpbGxlZClcbiAgICAgICAgICAgIHJldHVybiBcIkRSQVdcIjtcbiAgICAgICAgcmV0dXJuIFwiSU5DT01QTEVURVwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF2YWlsYWJsZSBNb3ZlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgYSBDdXJyZW50IFN0YXRlLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBBdmFpbGFibGUgTW92ZXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXVtdfSBncmlkIEN1cnJlbnQgU3RhdGUgb2YgR2FtZVxuICAgICAqIEByZXR1cm5zIEF2YWlsYWJsZSBNb3ZlcyBmb3IgQ3VycmVudCBTdGF0ZVxuICAgICAqL1xuICAgICNhdmFpbGFibGVNb3ZlcyAoZ3JpZCkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIE1vdmVzIEFycmF5XG4gICAgICAgIGNvbnN0IG1vdmVzID0gW107XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIEdyaWQgYW5kIGZpbmQgQXZhaWxhYmxlIENlbGxzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX3NpemU7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChncmlkW2ldW2pdID09PSBcIlwiKVxuICAgICAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKHt4OiBqLCB5OiBpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW92ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2ltdWxhdGUgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gbW92ZSwgcmV0dXJuIGEgTmV3IEdhbWUgU3RhdGUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXVtdfSBncmlkIEN1cnJlbnQgR3JpZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IE1vdmUgWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgTW92ZSBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWFya2VyIE1hcmtlciBmb3IgTW92ZVxuICAgICAqIEByZXR1cm5zIE5ldyBHYW1lIFN0YXRlXG4gICAgICovXG4gICAgI3NpbXVsYXRlIChncmlkLCB4LCB5LCBtYXJrZXIpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBOZXcgU3RhdGVcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICBuZXdTdGF0ZS5wdXNoKFtdKTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggTWF0cml4XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX3NpemU7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBNYXJrZXIgdG8gQ2VsbFxuICAgICAgICAgICAgICAgIGlmIChqID09PSB4ICYmIGkgPT09IHkpXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlW2ldLnB1c2gobWFya2VyKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgQ3VycmVudCBNYXJrZXIgT3RoZXJ3aXNlXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZVtpXS5wdXNoKGdyaWRbaV1bal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XG4gICAgLyoqXG4gICAgICogTGV2ZWwgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBCYXNlIENsYXNzIGZvciB0aGUgRGlmZmljdWx0eSBMZXZlbCBvZiB0aGUgQ29tcHV0ZXIgZm9yIHRoZSBUaWMtVGFjLVRvZVxuICAgICAqIEdhbWUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIERpZmZpY3VsdHkgTGV2ZWxcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobGV2ZWwpIHsgdGhpcy5fbGV2ZWwgPSBsZXZlbDsgfVxuXG4gICAgZ2V0IGxldmVsICgpIHsgcmV0dXJuIHRoaXMuX2xldmVsOyB9XG5cbiAgICBzZXQgbGV2ZWwgKHN0cikgeyB0aGlzLl9sZXZlbCA9IHN0cjsgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEN1cnJlbnQgR3JpZCwgdGhlIG1ldGhvZCB3aWxsIHNlbGVjdCB0aGUgbmV4dCBtb3ZlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW11bXX0gZ3JpZCBDdXJyZW50IEdyaWRcbiAgICAgKiBAcmV0dXJucyBTZWxlY3RlZCBNb3ZlXG4gICAgICovXG4gICAgcGxheSAoZ3JpZCkgeyByZXR1cm4ge3g6IC0xLCB5OiAtMX07IH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIC8qKlxuICAgICAqIFBsYXllciBDbGFzc1xuICAgICAqIFxuICAgICAqIE1hbmFnYWVzIHRoZSBQbGF5ZXIncyBNYXJrZXIgKGkuZS4gbm91Z2h0IG9yIGNyb3NzKSBhbmQgYWxzbyB0aGUgcGxheWVyJ3NcbiAgICAgKiBzY29yZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbm91Z2h0IE5vdWdodCBvciBDcm9zc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChub3VnaHQsIHNpemUpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fbWFya2VyID0gbm91Z2h0O1xuICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5fc2NvcmVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHNpemUgKiAyICsgMik7IGkrKylcbiAgICAgICAgICAgIHRoaXMuX3Njb3Jlcy5wdXNoKDApO1xuICAgIH1cbiAgICBcbiAgICBnZXQgbWFya2VyICgpIHsgcmV0dXJuIHRoaXMuX21hcmtlcjsgfVxuXG4gICAgc2V0IG1hcmtlciAoc3RyKSB7IHRoaXMuX21hcmtlciA9IHN0cjsgfVxuXG4gICAgZ2V0IHNjb3JlcyAoKSB7IHJldHVybiB0aGlzLl9zY29yZXM7IH1cblxuICAgIHNldCBzY29yZXMgKGFycikgeyB0aGlzLl9zY29yZXMgPSBhcnI7IH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCBhbGwgc2NvcmUgdmFsdWVzIHRvIGJlIHplcm8uXG4gICAgICovXG4gICAgcmVzZXQgKCkgeyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Njb3Jlcy5sZW5ndGg7IGkrKykgdGhpcy5fc2NvcmVzW2ldID0gMDsgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGVzIHRoZSBQbGF5ZXIncyBTY29yZSBBcnJheS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBNb3ZlIFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IE1vdmUgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgcGxheSAoeCwgeSkge1xuICAgICAgICAvLyBVcGRhdGUgQ29sdW1uIFNjb3JlXG4gICAgICAgIHRoaXMuX3Njb3Jlc1t4XSArPSAxO1xuICAgICAgICAvLyBVcGRhdGUgUm93IFNjb3JlXG4gICAgICAgIHRoaXMuX3Njb3Jlc1t5ICsgdGhpcy5fc2l6ZV0gKz0gMTtcbiAgICAgICAgLy8gVXBkYXRlIE5lZ2F0aXZlIERpYWdvbmFsIFNjb3JlXG4gICAgICAgIHRoaXMuX3Njb3Jlc1t0aGlzLl9zY29yZXMubGVuZ3RoIC0gMl0gKz0gKHggPT09IHkgPyAxIDogMCk7XG4gICAgICAgIC8vIFVwZGF0ZSBQb3NpdGl2ZSBEaWFnb25hbCBTY29yZVxuICAgICAgICB0aGlzLl9zY29yZXNbdGhpcy5fc2NvcmVzLmxlbmd0aCAtIDFdICs9ICh4ICsgeSA9PT0gdGhpcy5fc2l6ZSAtIDEgPyAxIDogMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFzIFdvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgdGhlIFBsYXllcnMgU2NvcmVzIGZvciBhIDMsIGltcGx5aW5nIHRoZXkgaGF2ZSBhY2hpZXZlZCB0aGUgcmVxdWlyZWRcbiAgICAgKiAzIGluIGEgcm93LlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRydWUsIGlmIFBsYXllciBoYXMgMyBpbiBhIFJvd1xuICAgICAqL1xuICAgIGhhc1dvbiAoKSB7IHJldHVybiB0aGlzLl9zY29yZXMuaW5jbHVkZXMoMyk7IH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcbiAgICAvKipcbiAgICAgKiBDZWxsIENsYXNzXG4gICAgICogXG4gICAgICogVGljLVRhYy1Ub2UgQ2VsbCBFbGVtZW50LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5KSB7XG4gICAgICAgIC8vIEJ1aWxkIENlbGwgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuaWQgPSBgJHt4fS0ke3l9LWNlbGxgO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgXCJncmlkLWFyZWFcIiwgYGNlbGwtJHt4fSR7eX1gXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQnVpbGQgQ3Vyc29yIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2N1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2N1cnNvci5pZCA9IFwiY3Vyc29yLWNlbGxcIjtcblxuICAgICAgICAvLyBCdWlsZCBOb3VnaHQgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbm91Z2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbm91Z2h0LmlkID0gYG5vdWdodC0ke3h9LSR7eX1gO1xuICAgICAgICB0aGlzLl9ub3VnaHQudGV4dENvbnRlbnQgPSBcIk9cIjtcblxuICAgICAgICAvLyBCdWlsZCBDcm9zcyBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9jcm9zcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2Nyb3NzLmlkID0gYGNyb3NzLSR7eH0tJHt5fWA7XG4gICAgICAgIHRoaXMuX2Nyb3NzLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB0aGlzLl9wb2ludGVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGVsZW1lbnQgKCkgeyByZXR1cm4gdGhpcy5fZWxlbWVudDsgfVxuXG4gICAgc2V0IGVsZW1lbnQgKGVsZW0pIHsgdGhpcy5fZWxlbWVudCA9IGVsZW07IH1cblxuICAgIGdldCBjdXJzb3IgKCkgeyByZXR1cm4gdGhpcy5fY3Vyc29yOyB9XG5cbiAgICBzZXQgY3Vyc29yIChlbGVtKSB7IHRoaXMuX2N1cnNvciA9IGVsZW07IH1cblxuICAgIGdldCBub3VnaHQgKCkgeyByZXR1cm4gdGhpcy5fbm91Z2h0OyB9XG5cbiAgICBzZXQgbm91Z2h0IChlbGVtKSB7IHRoaXMuX25vdWdodCA9IGVsZW07IH1cblxuICAgIGdldCBjcm9zcyAoKSB7IHJldHVybiB0aGlzLl9jcm9zczsgfVxuXG4gICAgc2V0IGNyb3NzIChlbGVtKSB7IHRoaXMuX2Nyb3NzID0gZWxlbTsgfVxuXG4gICAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feDsgfVxuXG4gICAgc2V0IHggKHgpIHsgdGhpcy5feCA9IHg7IH1cblxuICAgIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3k7IH1cblxuICAgIHNldCB5ICh5KSB7IHRoaXMuX3kgPSB5OyB9XG5cbiAgICBnZXQgcG9pbnRlciAoKSB7IHJldHVybiB0aGlzLl9wb2ludGVyOyB9XG5cbiAgICBzZXQgcG9pbnRlciAoYm9vbCkgeyB0aGlzLl9wb2ludGVyID0gYm9vbDsgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2UgQ3Vyc29yIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFBsYWNlIG9yIFJlbW92ZSB0aGUgQ3Vyc29yIG9uIHRoZSBDZWxsLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb24gUGxhY2Ugb3IgUmVtb3ZlXG4gICAgICovXG4gICAgcGxhY2VDdXJzb3IgKG9uPXRydWUpIHtcbiAgICAgICAgLy8gUGxhY2UgQ3Vyc29yIG9uIENlbGxcbiAgICAgICAgaWYgKG9uICYmICF0aGlzLl9wb2ludGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2N1cnNvcik7XG4gICAgICAgICAgICB0aGlzLl9wb2ludGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yIGZyb20gQ2VsbFxuICAgICAgICBpZiAoIW9uICYmIHRoaXMuX3BvaW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fY3Vyc29yKTtcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIE5vdWdodCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBQbGFjZSBvciBSZW1vdmUgdGhlIE5vdWdodCBpbiB0aGUgQ2VsbC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uIFBsYWNlIG9yIFJlbW92ZVxuICAgICAqL1xuICAgIHBsYWNlTm91Z2h0IChvbj10cnVlKSB7XG4gICAgICAgIC8vIFBsYWNlIE5vdWdodCBpbiBDZWxsXG4gICAgICAgIGlmIChvbiAmJiAhdGhpcy5fZWxlbWVudC5jb250YWlucyh0aGlzLl9ub3VnaHQpKSBcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fbm91Z2h0KTtcbiAgICAgICAgLy8gUmVtb3ZlIE5vdWdodCBmcm9tIENlbGxcbiAgICAgICAgaWYgKCFvbiAmJiB0aGlzLl9lbGVtZW50LmNvbnRhaW5zKHRoaXMuX25vdWdodCkpXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX25vdWdodCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2UgQ3Jvc3MgTWV0aG9kXG4gICAgICogXG4gICAgICogUGxhY2Ugb3IgUmVtb3ZlIHRoZSBDcm9zcyBpbiB0aGUgQ2VsbC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uIFBsYWNlIG9yIFJlbW92ZVxuICAgICAqL1xuICAgIHBsYWNlQ3Jvc3MgKG9uPXRydWUpIHtcbiAgICAgICAgLy8gUGxhY2UgQ3Jvc3MgaW4gQ2VsbFxuICAgICAgICBpZiAob24gJiYgIXRoaXMuX2VsZW1lbnQuY29udGFpbnModGhpcy5fY3Jvc3MpKVxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jcm9zcyk7XG4gICAgICAgIC8vIFJlbW92ZSBDcm9zcyBmcm9tIENlbGxcbiAgICAgICAgaWYgKCFvbiAmJiB0aGlzLl9lbGVtZW50LmNvbnRhaW5zKHRoaXMuX2Nyb3NzKSlcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fY3Jvc3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJlbW92ZXMgY3Vyc29yLCBub3VnaHQgYW5kIGNyb3NzIGZyb20gY2VsbC5cbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICAgIC8vIFJlbW92ZSBDdXJzb3IsIGlmIG5lZWRlZFxuICAgICAgICBpZiAodGhpcy5fcG9pbnRlcilcbiAgICAgICAgICAgIHRoaXMucGxhY2VDdXJzb3IoZmFsc2UpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBOb3VnaHRcbiAgICAgICAgdGhpcy5wbGFjZU5vdWdodChmYWxzZSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIENyb3NzXG4gICAgICAgIHRoaXMucGxhY2VDcm9zcyhmYWxzZSk7XG4gICAgfVxufSIsImltcG9ydCBcIi4vZ3JpZC1zdHlsaW5nLmNzc1wiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vY2VsbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICAjR1JJRDtcbiAgICAjREVGQVVMVF9QT1MgPSB7eDogMSwgeTogMX07XG5cbiAgICAvKipcbiAgICAgKiBHcmlkIENsYXNzXG4gICAgICogXG4gICAgICogVGljLVRhYy1Ub2UgR3JpZCB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBzZXR0aW5nIHVwIGFsbCBDZWxscyBhbmQgdGhlXG4gICAgICogY29udHJvbCBvZiB0aG9zZSBDZWxscy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoc2l6ZSkge1xuICAgICAgICAvLyBCdWlsZCB0aGUgR3JpZCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcInRpYy10YWMtdG9lLWdyaWRcIik7XG5cbiAgICAgICAgLy8gQWRkIEdyaWQgVGVtcGxhdGUgQXJlYXMgdG8gdGhlIEdyaWQgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy4jR1JJRCA9IHNpemU7XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jR1JJRDsgaSsrKSB7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSB0aGlzLiNHUklEIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jR1JJRDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGBcImNlbGwtJHtqfSR7aX0gYDtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChqID09PSB0aGlzLiNHUklEIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYGNlbGwtJHtqfSR7aX1cIiR7aSA9PT0gMCA/IFwiXCIgOiBcIiBcIn1gO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYGNlbGwtJHtqfSR7aX0gYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuc2V0UHJvcGVydHkoXCJncmlkLXRlbXBsYXRlLWFyZWFzXCIsIHRlbXBsYXRlKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIENlbGxzXG4gICAgICAgIHRoaXMuX2NlbGxzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jR1JJRDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI0dSSUQ7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBuZXcgQ2VsbChqLCBpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jZWxscy5wdXNoKGNlbGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZChjZWxsLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gUGxhY2UgQ3Vyc29yIG9uIERlZmF1bHQgSW5pdGlhbCBDdXJzb3JcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC54ID09PSB0aGlzLiNERUZBVUxUX1BPUy54ICYmIGNlbGwueSA9PT0gdGhpcy4jREVGQVVMVF9QT1MueSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5wbGFjZUN1cnNvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIGdldCBjdXJyZW50ICgpIHsgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7IH1cblxuICAgIHNldCBjdXJyZW50IChjZWxsKSB7IHRoaXMuX2N1cnJlbnQgPSBjZWxsOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgRGltZW5zaW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEdyaWQsIHRoZSBXaWR0aCBhbmQgSGVpZ2h0IGFyZSBkZXBlbmRlbnQgb24gdGhlIFNjcmVlbiBTaXplLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkaW1lbnNpb24gR3JpZCBTaXplIChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAoZGltZW5zaW9uKSB7XG4gICAgICAgIC8vIFNldCBHcmlkIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7ZGltZW5zaW9ufXB4YDtcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLmhlaWdodCA9IGAke2RpbWVuc2lvbn1weGA7XG5cbiAgICAgICAgLy8gU2V0IENlbGwgRGltZW5zaW9uc1xuICAgICAgICBjb25zdCBjZWxsRGltID0gTWF0aC5mbG9vcihkaW1lbnNpb24gLyB0aGlzLiNHUklEKTtcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSBNYXRoLmZsb29yKGNlbGxEaW0gKiAwLjgpO1xuICAgICAgICB0aGlzLl9jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY2VsbC5lbGVtZW50LnN0eWxlLndpZHRoID0gYCR7Y2VsbERpbX1weGA7XG4gICAgICAgICAgICBjZWxsLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7Y2VsbERpbX1weGA7XG4gICAgICAgICAgICBjZWxsLmN1cnNvci5zdHlsZS53aWR0aCA9IGAke2NlbGxEaW19cHhgO1xuICAgICAgICAgICAgY2VsbC5jdXJzb3Iuc3R5bGUuaGVpZ2h0ID0gYCR7Y2VsbERpbX1weGA7XG4gICAgICAgICAgICBjZWxsLm5vdWdodC5zdHlsZS5mb250U2l6ZSA9IGAke2ZvbnRTaXplfXB4YDtcbiAgICAgICAgICAgIGNlbGwuY3Jvc3Muc3R5bGUuZm9udFNpemUgPSBgJHtmb250U2l6ZX1weGA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ2VsbHMgaW4gdGhlIEdyaWQsIHRoZSBtZXRob2Qgd2lsbCByZW1vdmUgYW55IG5vdWdodCBvciBjcm9zcyBcbiAgICAgKiB3aXRoaW4gdGhlbS5cbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBDZWxscyBhbmQgUmVtb3ZlIE5vdWdodCBvciBDcm9zc1xuICAgICAgICB0aGlzLl9jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY2VsbC5wbGFjZUNyb3NzKGZhbHNlKTtcbiAgICAgICAgICAgIGNlbGwucGxhY2VOb3VnaHQoZmFsc2UpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsZ29yaXRobSBTZWxlY3QgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBBbGdvcml0aG0ncyBTZWxlY3RlZCBNb3ZlLCB0aGUgR3JpZCBvbiBEaXNwbGF5IG11c3QgVXBkYXRlIHdpdGhcbiAgICAgKiB0aGUgYXBwcm9wcmlhdGUgVmFsdWUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1vdmUgWCBhbmQgWSBDb29yZGluYXRlc1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbm91Z2h0IE5vdWdodCBvciBDcm9zc1xuICAgICAqL1xuICAgIGFsZ29yaXRobVNlbGVjdCAobW92ZSwgbm91Z2h0KSB7XG4gICAgICAgIC8vIEZpbmQgQ2VsbCBhbmQgVXBkYXRlIHdpdGggQWxnb3JpdGhtJ3MgTWFya2VyXG4gICAgICAgIHRoaXMuX2NlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAoY2VsbC54ID09PSBtb3ZlLnggJiYgY2VsbC55ID09PSBtb3ZlLnkpXG4gICAgICAgICAgICAgICAgbm91Z2h0ID8gY2VsbC5wbGFjZU5vdWdodCgpIDogY2VsbC5wbGFjZUNyb3NzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhvcml6b250YWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZlIHRoZSBDdXJzb3IgSG9yaXpvbnRhbGx5IGFyb3VuZCB0aGUgR3JpZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJpZ2h0IERlZmF1bHQgQWN0aW9uIGlzIFJpZ2h0d2FyZHNcbiAgICAgKi9cbiAgICBob3Jpem9udGFsTW92ZSAocmlnaHQ9dHJ1ZSkge1xuICAgICAgICAvLyBFbnN1cmUgSG9yaXpvbnRhbCBNb3ZlIGlzIHN0aWxsIG9uIEdyaWRcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQueCArIChyaWdodCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChjdXJyIDwgdGhpcy4jR1JJRCAmJiBjdXJyID49IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBDdXJzb3IgZnJvbSBDZWxsXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbmQgRmluZCBOZXcgQ2VsbCBmb3IgQ3Vyc29yXG4gICAgICAgICAgICB0aGlzLl9jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLnggPT09IGN1cnIgJiYgY2VsbC55ID09PSB0aGlzLl9jdXJyZW50LnkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSBjZWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBDZWxsXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZlIHRoZSBDdXJzb3IgVmVydGljYWxseSBhcm91bmQgdGhlIEdyaWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1cCBEZWZhdWx0IEFjdGlvbiBpcyBVcHdhcmRzXG4gICAgICovXG4gICAgdmVydGljYWxNb3ZlICh1cD10cnVlKSB7XG4gICAgICAgIC8vIEVuc3VyZSBWZXJ0aWNhbCBNb3ZlIGlzIHN0aWxsIG9uIEdyaWRcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQueSArICh1cCA/IC0xIDogMSk7XG4gICAgICAgIGlmIChjdXJyIDwgdGhpcy4jR1JJRCAmJiBjdXJyID49IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBDdXJzb3IgZnJvbSBDZWxsXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbmQgRmluZCBOZXcgQ2VsbCBmb3IgQ3Vyc29yXG4gICAgICAgICAgICB0aGlzLl9jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLnggPT09IHRoaXMuX2N1cnJlbnQueCAmJiBjZWxsLnkgPT09IGN1cnIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSBjZWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBDZWxsXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXB0IEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBEZXBlbmRpbmcgb24gd2hldGhlciBhIE5vdWdodCBvciBDcm9zcyBpcyBQbGFjZWQgaW4gdGhlIGNlbGwsIHRoZSBjZWxsXG4gICAgICogd2lsbCBiZSB1cGRhdGVkIHNvIHRoYXQgaXQgcmVmbGVjdHMgdGhlIG1vdmUgdGhhdCB3YXMganVzdCBwbGF5ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBub3VnaHQgTm91Z2h0IG9yIENyb3NzXG4gICAgICogQHJldHVybnMgRXJyb3IgTWVzc2FnZSwgaWYgcmVxdWlyZWRcbiAgICAgKi9cbiAgICBhY2NlcHRBY3Rpb24gKG5vdWdodCkgeyBub3VnaHQgPyB0aGlzLl9jdXJyZW50LnBsYWNlTm91Z2h0KCkgOiB0aGlzLl9jdXJyZW50LnBsYWNlQ3Jvc3MoKTsgfVxufSIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9nYW1lLW1vZHVsZS9nYW1lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi4vZ3JpZC1tb2R1bGUvZ3JpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUVFRNYW5hZ2VyIHtcbiAgICAjREVGQVVMVF9HUklEID0gMztcbiAgICAjVEhFTUVTID0gW1xuICAgICAgICBcIk5vcm1hbFwiLFxuICAgICAgICBcIlJldHJvXCIsXG4gICAgICAgIFwiTmVvblwiLFxuICAgICAgICBcIlRlcm1pbmFsXCIsXG4gICAgICAgIFwiRmFuY3lcIixcbiAgICAgICAgXCJTY3J1ZmZ5XCJcbiAgICBdO1xuXG4gICAgLyoqXG4gICAgICogVGljLVRhYy1Ub2UgTWFuYWdlciBDbGFzc1xuICAgICAqIFxuICAgICAqIEZvciB0aGUgVGljLVRhYy1Ub2UgR2FtZSwgdGhpcyBNYW5hZ2VyIENsYXNzIHdpbGwgSGFuZGxlIFVJIENvbXBvbmVudHNcbiAgICAgKiBzdWNoIGFzIHRoZSBTY29yZXMgZm9yIGVpdGhlciBQbGF5ZXIsIGFuZCBvZiBjb3Vyc2UgdGhlIEdyaWQgdXBvbiB3aGljaFxuICAgICAqIHRoZSBnYW1lIGlzIHBsYXllZC4gSXQgd2lsbCBhbHNvIG1hbmFnZSB0aGUgQWN0aW9ucyBvbiB0aGUgR3JpZCB3aXRoIHRoZVxuICAgICAqIHBhcmVudCBHYW1lIEludGVyZmFjZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIEJ1aWxkIEdhbWUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJ0aWMtdGFjLXRvZS1nYW1lLW1vZHVsZVwiKTtcblxuICAgICAgICAvLyBCdWlsZCBTY29yaW5nIERPTSBDb21wb25lbnRzXG4gICAgICAgIHRoaXMuX3Njb3JlY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3Njb3JlY2FyZC5jbGFzc0xpc3QuYWRkKFwic2NvcmVjYXJkXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIEh1bWFuIFNjb3JlY2FyZCBET00gQ29tcG9uZW50c1xuICAgICAgICBjb25zdCBodW1hblNjb3JlY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGh1bWFuU2NvcmVjYXJkLmNsYXNzTGlzdC5hZGQoXCJodW1hbi1zY29yZWNhcmRcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgSHVtYW4gTGFiZWwgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5faHVtYW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2h1bWFuTGFiZWwuY2xhc3NMaXN0LmFkZChcImh1bWFuLWxhYmVsXCIpO1xuICAgICAgICB0aGlzLl9odW1hbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ0dXJuXCIpO1xuICAgICAgICB0aGlzLl9odW1hbkxhYmVsLnRleHRDb250ZW50ID0gXCJIOiBcIjtcblxuICAgICAgICAvLyBCdWlsZCBIdW1hbiBTY29yZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9odW1hbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2h1bWFuLmNsYXNzTGlzdC5hZGQoXCJodW1hbi1zY29yZVwiKTtcbiAgICAgICAgdGhpcy5faHVtYW4udGV4dENvbnRlbnQgPSAwO1xuXG4gICAgICAgIC8vIEFkZCBDb21wb25lbnRzIHRvIEh1bWFuIFNjb3JlY2FyZFxuICAgICAgICBodW1hblNjb3JlY2FyZC5hcHBlbmRDaGlsZCh0aGlzLl9odW1hbkxhYmVsKTtcbiAgICAgICAgaHVtYW5TY29yZWNhcmQuYXBwZW5kQ2hpbGQodGhpcy5faHVtYW4pO1xuXG4gICAgICAgIC8vIEJ1aWxkIEFsZ29yaXRobSBTY29yZWNhcmQgRE9NIENvbXBvbmVudHNcbiAgICAgICAgY29uc3QgYWxnb3JpdGhtU2NvcmVjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYWxnb3JpdGhtU2NvcmVjYXJkLmNsYXNzTGlzdC5hZGQoXCJhbGdvcml0aG0tc2NvcmVjYXJkXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIEFsZ29yaXRobSBMYWJlbCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9hbGdvcml0aG1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJhbGdvcml0aG0tbGFiZWxcIik7XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobUxhYmVsLnRleHRDb250ZW50ID0gXCJBOiBcIjtcblxuICAgICAgICAvLyBCdWlsZCBBbGdvcml0aG0gU2NvcmUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtLmNsYXNzTGlzdC5hZGQoXCJhbGdvcml0aG0tc2NvcmVcIik7XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobS50ZXh0Q29udGVudCA9IDA7XG5cbiAgICAgICAgLy8gQWRkIENvbXBvbmVudHMgdG8gQWxnb3JpdGhtIFNjb3JlY2FyZFxuICAgICAgICBhbGdvcml0aG1TY29yZWNhcmQuYXBwZW5kQ2hpbGQodGhpcy5fYWxnb3JpdGhtTGFiZWwpO1xuICAgICAgICBhbGdvcml0aG1TY29yZWNhcmQuYXBwZW5kQ2hpbGQodGhpcy5fYWxnb3JpdGhtKTtcblxuICAgICAgICAvLyBCdWlsZCBWZXJzdXMgTGFiZWwgRE9NIEVsZW1lbnRcbiAgICAgICAgY29uc3QgdnNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZzTGFiZWwuY2xhc3NMaXN0LmFkZChcInZlcnN1cy1sYWJlbFwiKTtcbiAgICAgICAgdnNMYWJlbC50ZXh0Q29udGVudCA9IFwiVlNcIjtcblxuICAgICAgICAvLyBBZGQgQ29tcG9uZW50cyB0byBTY29yZWNhcmRcbiAgICAgICAgdGhpcy5fc2NvcmVjYXJkLmFwcGVuZENoaWxkKGh1bWFuU2NvcmVjYXJkKTtcbiAgICAgICAgdGhpcy5fc2NvcmVjYXJkLmFwcGVuZENoaWxkKHZzTGFiZWwpO1xuICAgICAgICB0aGlzLl9zY29yZWNhcmQuYXBwZW5kQ2hpbGQoYWxnb3JpdGhtU2NvcmVjYXJkKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIEdyaWQgT2JqZWN0XG4gICAgICAgIHRoaXMuX2dyaWQgPSBuZXcgR3JpZCh0aGlzLiNERUZBVUxUX0dSSUQpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBBbGwgQ29tcG9uZW50cyB0byBNb2R1bGVcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2dyaWQubW9kdWxlKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX3Njb3JlY2FyZCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX3VzZXIgPSBcIm9cIjtcbiAgICAgICAgdGhpcy5fZ2FtZSA9IG5ldyBHYW1lKHRoaXMuI0RFRkFVTFRfR1JJRCk7XG4gICAgICAgIHRoaXMuX3Njb3JlcyA9IHtodW1hbjogMCwgYWxnb3JpdGhtOiAwfTtcbiAgICAgICAgdGhpcy5fZW5kID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBEZWZhdWx0IFRoZW1lXG4gICAgICAgIHRoaXMuc2V0VGhlbWUodGhpcy4jVEhFTUVTWzBdKTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgZ3JpZCAoKSB7IHJldHVybiB0aGlzLl9ncmlkOyB9XG5cbiAgICBzZXQgZ3JpZCAob2JqKSB7IHRoaXMuX2dyaWQgPSBvYmo7IH1cblxuICAgIGdldCBjb250cm9sbGVyICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRyb2xsZXI7IH1cblxuICAgIHNldCBjb250cm9sbGVyIChib29sKSB7IHRoaXMuX2NvbnRyb2xsZXIgPSBib29sOyB9XG5cbiAgICBnZXQgdXNlciAoKSB7IHJldHVybiB0aGlzLl91c2VyOyB9XG5cbiAgICBzZXQgdXNlciAoc3RyKSB7IHRoaXMuX3VzZXIgPSBzdHI7IH1cblxuICAgIGdldCBnYW1lICgpIHsgcmV0dXJuIHRoaXMuX2dhbWU7IH1cblxuICAgIHNldCBnYW1lIChvYmopIHsgdGhpcy5fZ2FtZSA9IG9iajsgfVxuXG4gICAgZ2V0IHNjb3JlcyAoKSB7IHJldHVybiB0aGlzLl9zY29yZXM7IH1cblxuICAgIHNldCBzY29yZXMgKGRpY3QpIHsgdGhpcy5fc2NvcmVzID0gZGljdDsgfVxuXG4gICAgZ2V0IGVuZCAoKSB7IHJldHVybiB0aGlzLl9lbmQ7IH1cblxuICAgIHNldCBlbmQgKGJvb2wpIHsgdGhpcy5fZW5kID0gYm9vbDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0cyB1cCB0aGUgRGlzcGxheSBmb3IgdGhlIEdhbWUsIGluY2x1ZGluZyB0aGUgY2VsbHMgYW5kIHRoZSBzY29yZWNhcmQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFNjcmVlbiBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgU2NyZWVuIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldHVwICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIFNldCBHYW1lIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgR3JpZCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGRpbSA9IE1hdGguZmxvb3IoTWF0aC5taW4od2lkdGgsIGhlaWdodCkgKiAwLjgpO1xuICAgICAgICB0aGlzLl9ncmlkLnNldERpbWVuc2lvbnMoZGltKTtcblxuICAgICAgICAvLyBTZXQgU2NvcmVjYXJkIEZvbnQgU2l6ZVxuICAgICAgICB0aGlzLl9zY29yZWNhcmQuc3R5bGUuZm9udFNpemUgPSBgJHtNYXRoLmZsb29yKGRpbSAqIDAuMDcpfXB4YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgTWFya2VyIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEJlZm9yZSB0aGUgR2FtZSBiZWdpbnMsIHRoZSBVc2VyIG11c3Qgc2VsZWN0IHRoZSBtYXJrZXIgdGhleWIgd2FudCB0byBcbiAgICAgKiBwbGF5IHdpdGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5vdWdodCBOb3VnaHQgb3IgQ3Jvc3NcbiAgICAgKi9cbiAgICBzZXRNYXJrZXIgKG5vdWdodCkgeyBcbiAgICAgICAgdGhpcy5fdXNlciA9IG5vdWdodDtcbiAgICAgICAgdGhpcy5fZ2FtZS5zZXR1cChub3VnaHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBMZXZlbCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIEdhbWUgYmFzZWQgb24gdGhlIExldmVsIFNlbGVjdGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBTZWxlY3RlZCBMZXZlbFxuICAgICAqL1xuICAgIHNldExldmVsIChsZXZlbCkgeyBcbiAgICAgICAgdGhpcy5fZ2FtZS5zZXRMZXZlbChsZXZlbC50b0xvd2VyQ2FzZSgpKTsgXG4gICAgICAgIHRoaXMuX2dyaWQucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgVGhlbWUgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBTdHlsaW5nIHRvIFJlZmxlY3QgdGhlIFRoZW1lIFNlbGVjdGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aGVtZSBUaGVtZSBOYW1lXG4gICAgICovXG4gICAgc2V0VGhlbWUgKHRoZW1lKSB7XG4gICAgICAgIC8vIEdldCBSb290IEVsZW1lbnRcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcm9vdC5jbGFzc05hbWUgPSB0aGVtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYXkgQWxnb3JpdGhtIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogUGxheSBTZWxlY3RlZCBBbGdvcml0aG0ncyBOZXcgTW92ZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBNZXNzYWdlIGZvciBBbGdvcml0aG0ncyBNb3ZlXG4gICAgICovXG4gICAgcGxheUFsZ29yaXRobU1vdmUgKCkge1xuICAgICAgICAvLyBHZXQgTmV4dCBNb3ZlXG4gICAgICAgIGNvbnN0IG1vdmUgPSB0aGlzLl9nYW1lLmFsZ29yaXRobS5wbGF5KHRoaXMuX2dhbWUuZ3JpZCk7XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgRGlzcGxheVxuICAgICAgICB0aGlzLl9ncmlkLmFsZ29yaXRobVNlbGVjdChtb3ZlLCAodGhpcy5fdXNlciAhPT0gXCJvXCIpKTtcblxuICAgICAgICAvLyBSZXR1cm4gTWVzc2FnZSByZXN1bHRpbmcgZnJvbSBNb3ZlXG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lLmF0dGVtcHQobW92ZS54LCBtb3ZlLnkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCBhbGwgdmFyaWFibGVzIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcywgYW5kIHNldCB0aGUgZ3JpZCBzbyB0aGF0IHRoZVxuICAgICAqIGNlbGxzIGRvbid0IGNvbnRhaW4gbm91Z2h0cyBub3IgY3Jvc3Nlcy5cbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHRoaXMuX2VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9ncmlkLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX2dhbWUucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIb3Jpem9udGFsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92aW5nIHRoZSBDdXJzb3IgUmlnaHQgb3IgTGVmdCBvbiB0aGUgR3JpZC5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsTW92ZSAocmlnaHQ9dHJ1ZSkgeyBpZiAoIXRoaXMuX2VuZCkgdGhpcy5fZ3JpZC5ob3Jpem9udGFsTW92ZShyaWdodCk7IH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92aW5nIHRoZSBDdXJzb3IgVXAgb3IgRG93biBvbiB0aGUgR3JpZC5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE1vdmUgKHVwPXRydWUpIHsgaWYgKCF0aGlzLl9lbmQpIHRoaXMuX2dyaWQudmVydGljYWxNb3ZlKHVwKTsgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXB0IEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGVuIHRoZSBVc2VyIG1ha2VzIGEgbW92ZSwgdGhlbiB0aGUgZ3JpZCBzaG91bGQgdXBkYXRlIHRoZSBjb3JyZXNwb25kaW5nXG4gICAgICogY2VsbCB0byByZWZsZWN0IHRoZSBVc2VycyBtb3ZlLCBnaXZlbiB0aGF0IHRoZSBtb3ZlIGlzIGxlZ2FsLCBvdGhlcndpc2UgXG4gICAgICogdGhlIG1vdmUgc2hvdWxkIHJhaXNlIGFuIGVycm9yLiBBZGRpdGlvbmFsbHksIHdoZW4gdGhlIG1vdmUgaXMgbWFkZSwgdGhlIFxuICAgICAqIEFsZ29yaXRobSBzaG91bGQgYmUgcHJvbXB0ZWQgdG8gbWFrZSBpdHMgbmV4dCBtb3ZlLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBnYW1lb3ZlckNhbGxiYWNrIEdhbWVvdmVyIENhbGxiYWNrIE1ldGhvZFxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoZ2FtZW92ZXJDYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMuX2VuZCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgQXR0ZW1wdCBpcyBWYWxpZFxuICAgICAgICAgICAgY29uc3QgdHVybiA9IHRoaXMuX2dhbWUuZ2V0TWFya2VyKCk7XG4gICAgICAgICAgICBsZXQgbXNnID0gdGhpcy5fZ2FtZS5hdHRlbXB0KHRoaXMuX2dyaWQuY3VycmVudC54LCB0aGlzLl9ncmlkLmN1cnJlbnQueSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIEF0dGVtcHQgd2FzIElsbGVnYWxcbiAgICAgICAgICAgIGlmIChtc2cuaW5jbHVkZXMoXCJJbGxlZ2FsIE1vdmUhXCIpKXtcbiAgICAgICAgICAgICAgICBnYW1lb3ZlckNhbGxiYWNrKG1zZywgdHJ1ZSk7IFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgVXNlciBoYXMgV29uXG4gICAgICAgICAgICBpZiAobXNnID09PSB0aGlzLl91c2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBtc2cgPSBcIkNvbmdyYXR1bGF0aW9ucywgeW91IHdvbiFcIjtcbiAgICAgICAgICAgICAgICB0aGlzLiNnYW1lb3Zlcih0cnVlKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIERyYXdcbiAgICAgICAgICAgIGVsc2UgaWYgKG1zZyA9PT0gXCJEcmF3IVwiKVxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZCA9IHRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE1ha2UgdGhlIE1vdmUgb24gdGhlIEdyaWRcbiAgICAgICAgICAgIHRoaXMuX2dyaWQuYWNjZXB0QWN0aW9uKHR1cm4pO1xuXG4gICAgICAgICAgICAvLyBEb24ndCBhbGxvdyBBbGdvcml0aG0gdG8gTW92ZSBpZiBHYW1lIGlzIE92ZXJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbmQpIHtcbiAgICAgICAgICAgICAgICBnYW1lb3ZlckNhbGxiYWNrKG1zZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gUHJvbXB0IEFsZ29yaXRobSB0byBNb3ZlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtc2cgPSB0aGlzLnBsYXlBbGdvcml0aG1Nb3ZlKCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENoZWsgaWYgQWxnb3JpdGhtIGhhcyBXb25cbiAgICAgICAgICAgICAgICBpZiAobXNnID09PSAodGhpcy5fdXNlciA9PT0gXCJvXCIgPyBcInhcIiA6IFwib1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkJhZCBsdWNrLCB0aGUgQWxnb3JpdGhtIGhhcyB3b24hXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2dhbWVvdmVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgRHJhd1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1zZyA9PT0gXCJEcmF3IVwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZW92ZXJDYWxsYmFjayhtc2cpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdhbWVvdmVyIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciBhIG5vbi1kcmF3LCB0aGlzIG1ldGhvZCB1cGRhdGVzIHRoZSBET00gU2NvcmVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaHVtYW4gSHVtYW4gV29uXG4gICAgICovXG4gICAgI2dhbWVvdmVyIChodW1hbj1mYWxzZSkge1xuICAgICAgICAvLyBVcGRhdGUgSHVtYW4gU2NvcmVcbiAgICAgICAgaWYgKGh1bWFuKSB7XG4gICAgICAgICAgICB0aGlzLl9zY29yZXMuaHVtYW4gKz0gMTtcbiAgICAgICAgICAgIHRoaXMuX2h1bWFuLnRleHRDb250ZW50ID0gdGhpcy5fc2NvcmVzLmh1bWFuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSBBbGdvcml0aG0gU2NvcmVcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zY29yZXMuYWxnb3JpdGhtICs9IDE7XG4gICAgICAgICAgICB0aGlzLl9hbGdvcml0aG0udGV4dENvbnRlbnQgPSB0aGlzLl9zY29yZXMuYWxnb3JpdGhtO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBcIi4vZ2FtZS1zdHlsaW5nLmNzc1wiO1xuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4vZGF0YS9tZW51Lmpzb241XCI7XG5pbXBvcnQgc2VsZWN0aW9uIGZyb20gXCIuL2RhdGEvc2VsZWN0Lmpzb241XCI7XG5pbXBvcnQgR2FtZUludGVyZmFjZSBmcm9tIFwiLi4vZ2FtZS1jaGlwLW1vZHVsZS9nYW1lLWludGVyZmFjZS5qc1wiO1xuaW1wb3J0IFRUVE1hbmFnZXIgZnJvbSBcIi4vbWFpbi1tb2R1bGUvdHR0LW1hbmFnZXIuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi9wb3AtdXAtbW9kdWxlL21lbnUuanNcIjtcbmltcG9ydCBFcnJvckJveCBmcm9tIFwiLi4vcG9wLXVwLW1vZHVsZS9lcnJvci1ib3guanNcIjtcbmltcG9ydCBJbmZvQm94IGZyb20gXCIuLi9wb3AtdXAtbW9kdWxlL2luZm8tYm94LmpzXCI7XG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gXCIuLi9wb3AtdXAtbW9kdWxlL3NlbGVjdC1ib3guanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFRUR2FtZSBleHRlbmRzIEdhbWVJbnRlcmZhY2Uge1xuICAgICNzaG93Q2FsbGJhY2s7XG4gICAgI3Rha2VEb3duQ2FsbGJhY2s7XG5cbiAgICAvKipcbiAgICAgKiBUaWMtVGFjLVRvZSBJbnRlcmZhY2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBVc2VkIGZvciBDb250cm9sbGluZyB0aGUgTWVudSBhbmQgdGhlIEdyaWQgTW9kdWxlcyB3aXRoIHRoZSBHYW1lQ2hpcCdzXG4gICAgICogQ29udHJvbGxlcnMsIGFuZCBhbHNvIGZvciBVcGRhdGluZyB0aGUgRGlzcGxheSB3aXRoIHRoZSByZWxldmFudCBFcnJvclxuICAgICAqIGFuZCBJbmZvcm1hdGlvbiBNZXNzYWdlcy5cbiAgICAgKiBcbiAgICAgKiBUT0RPOiBBZGQgYSBmZWF0dXJlIGZvciBlbmxhcmdpbmcgdGhlIGdyaWRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgVGl0bGUgb2YgdGhlIEdhbWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcbiAgICAgICAgc3VwZXIodGl0bGUpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgT2JqZWN0cyBmb3IgdGhlIFRpYy1UYWMtVG9lIEdhbWVcbiAgICAgICAgdGhpcy5fdG0gPSBuZXcgVFRUTWFuYWdlcigpO1xuICAgICAgICB0aGlzLl9tZW51ID0gbmV3IE1lbnUoY2F0ZWdvcmllcyk7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gbmV3IEVycm9yQm94KCk7XG4gICAgICAgIHRoaXMuX2luZm8gPSBuZXcgSW5mb0JveCgpO1xuICAgICAgICB0aGlzLl9zZWxlY3QgPSBuZXcgU2VsZWN0Qm94KFxuICAgICAgICAgICAgc2VsZWN0aW9uLmRpZmZpY3VsdHkuZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgc2VsZWN0aW9uLmRpZmZpY3VsdHkuY2F0ZWdvcmllc1xuICAgICAgICApO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX2RpZmZpY3VsdHlfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWFya2VyX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNob3cgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBDYWxsYmFjayBNZXRob2RzIGZvciBVcGRhdGluZyB0aGUgR2FtZUNoaXAgRGlzcGxheS5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgc2hvd0NhbGxiYWNrIFNob3cgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgdGFrZURvd25DYWxsYmFjayBUYWtlIERvd24gQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgZGltZW5zaW9uc0NhbGxiYWNrIEdldCBEaW1lbnNpb25zIENhbGxiYWNrXG4gICAgICovXG4gICAgc2V0U2NlbmUgKHNob3dDYWxsYmFjaywgdGFrZURvd25DYWxsYmFjaywgZ2V0RGltZW5zaW9ucykge1xuICAgICAgICAvLyBTZXQgQ2FsbGJhY2sgTWV0aG9kc1xuICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sgPSBzaG93Q2FsbGJhY2s7XG4gICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2sgPSB0YWtlRG93bkNhbGxiYWNrO1xuXG4gICAgICAgIC8vIFNldCBHcmlkIERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGdldERpbWVuc2lvbnMoKTtcbiAgICAgICAgdGhpcy5fdG0uc2V0dXAoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tZW51LnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9zdWJfc2V0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3N1Yl9tZW51O1xuICAgICAgICB0aGlzLl9lcnJvci5zZXREaW1lbnNpb25zKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5faW5mby5zZXREaW1lbnNpb25zKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fc2VsZWN0LnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBHcmlkIG9uIERpc3BsYXlcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX3RtLm1vZHVsZSk7XG5cbiAgICAgICAgLy8gU2hvdyBEaWZmaWN1bHR5IFNlbGVjdGlvblxuICAgICAgICB0aGlzLl9zZWxlY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sodGhpcy5fc2VsZWN0Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmlnaHQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFJpZ2h0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICByaWdodENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIEdyaWQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3RtLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl90bS5ob3Jpem9udGFsTW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExlZnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIExlZnQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGxlZnRDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBHcmlkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl90bS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fdG0uaG9yaXpvbnRhbE1vdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBVcCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgdXBDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBHcmlkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl90bS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fdG0udmVydGljYWxNb3ZlKCk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9tZW51LnZlcnRpY2FsTW92ZSgpO1xuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3N1Yl9zZXQpXG4gICAgICAgICAgICB0aGlzLl9zdWJfbWVudS52ZXJ0aWNhbE1vdmUoKTtcbiAgICAgICAgLy8gSGFuZGxlIFNlbGVjdCBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0LmFjdGl2ZSlcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdC52ZXJ0aWNhbE1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb3duIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBEb3duIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBkb3duQ2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgR3JpZCBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fdG0uY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX3RtLnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9tZW51LnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fc3ViX3NldClcbiAgICAgICAgICAgIHRoaXMuX3N1Yl9tZW51LnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBTZWxlY3QgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdC5hY3RpdmUpXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3QudmVydGljYWxNb3ZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBBIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYUNhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIFNlbGVjdCBBY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdC5hY3RpdmUgJiYgIXRoaXMuX2RpZmZpY3VsdHlfc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIFNldCBEaWZmaWN1bHR5IExldmVsXG4gICAgICAgICAgICB0aGlzLl90bS5zZXRMZXZlbCh0aGlzLl9zZWxlY3QuYWNjZXB0QWN0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5fZGlmZmljdWx0eV9zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFNldCBNYXJrZXIgU2VsZWN0aW9uXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Quc2V0U2VsZWN0aW9ucyhcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ubWFya2VyLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5tYXJrZXIuY2F0ZWdvcmllc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zZWxlY3QuYWN0aXZlICYmICF0aGlzLl9tYXJrZXJfc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIFNldCBNYXJrZXJcbiAgICAgICAgICAgIHRoaXMuX3RtLnNldE1hcmtlcih0aGlzLl9zZWxlY3QuYWNjZXB0QWN0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5fbWFya2VyX3NlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gVGFrZSBkb3duIFNlbGVjdCBCb3hcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX3RtLmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBJbmZvIEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9pbmZvLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9pbmZvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICAvLyBIYW5kbGUgRXJyb3IgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2Vycm9yLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gSGFuZGxlIEdyaWQgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3RtLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3RtLmFjY2VwdEFjdGlvbih0aGlzLiNnYW1lb3ZlckNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBTZWxlY3RlZFxuICAgICAgICAgICAgaWYgKHRoaXMuX21lbnUuYWNjZXB0QWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJfc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJfbWVudSA9IHRoaXMuX21lbnUuc2V0U3ViTWVudSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sodGhpcy5fc3ViX21lbnUubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIFNlbGVjdGVkXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHRoaXMuI2Nsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdWJfc2V0KSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgT3B0aW9uIFNlbGVjdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5fc3ViX21lbnUuYWNjZXB0QWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgR2FtZSBTZXRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3ViX21lbnUuc2VsZWN0ZWQua2V5ID09PSBcIkxldmVsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdG0uc2V0TGV2ZWwodGhpcy5fc3ViX21lbnUuc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9rbS5zZXRHYW1lKHRoaXMuX3N1Yl9tZW51LnNlbGVjdGVkLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIFRoZW1lIFNldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiVGhlbWVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90bS5zZXRUaGVtZSh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2Nsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIENvbnRyb2xzIEluZm9ybWF0aW9uIEdldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiQ29udHJvbHNcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmZvLnNldFRpdGxlKFwiQ29udHJvbGxlciBJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5mby5zZXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXIC0gU2FtZSBhcyBVcC1CdXR0b25cXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkQgLSBTYW1lIGFzIFJpZ2h0LUJ1dHRvblxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUyAtIFNhbWUgYXMgRG93bi1CdXR0b25cXG5cIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBIC0gU2FtZSBhcyBMZWZ0LUJ1dHRvblxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTyAtIFNhbWUgYXMgQi1CdXR0b25cXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIksgLSBTYW1lIGFzIEEtQnV0dG9uXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTcGFjZSAtIFNhbWUgYXMgU3RhcnRcXG5cIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTaGlmdCAtIFNhbWUgYXMgU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIFNlbGVjdGVkXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHRoaXMuI21haW5SZXR1cm4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgR3JpZCBBY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuX2Vycm9yLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gTWVudSB0byBiZSBEaXNwbGF5ZWRcbiAgICAgICAgaWYgKHRoaXMuX3RtLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIFNldCBNZW51IHRvIGJlIENvbnRyb2xsZWRcbiAgICAgICAgICAgIHRoaXMuX3RtLmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIE1lbnVcbiAgICAgICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNZW51IHRvIGJlIFRha2VuIERvd25cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgVGljLVRhYy1Ub2UgdG8gYmUgQ29udHJvbGxlZFxuICAgICAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGFrZSBEb3duIE1lbnUvU3ViLU1lbnVcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVudS5yZXNldFN1Yk1lbnVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTZWxlY3QgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc2VsZWN0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIE1haW4gUmV0dXJuIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybiB0byB0aGUgTWFpbiBNZW51IGZyb20gdGhlIFN1Yi1NZW51LlxuICAgICAqL1xuICAgICNtYWluUmV0dXJuICgpIHtcbiAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgTWV0aG9kXG4gICAgICogXG4gICAgICogT3V0c2lkZSBvZiBjbGlja2luZyB0aGUgU3RhcnQgYnV0dG9uLCBpZiB0aGUgVXNlciBpcyB1c2luZyB0aGUgTWVudSwgYW5kIFxuICAgICAqIHNlbGVjdHMgYW4gb3B0aW9uIHN1Y2ggdGhhdCB0aGUgbWVudSBzaG91bGQgY2xvc2UsIHRoaXMgbWV0aG9kIHdpbGwgXG4gICAgICogY29tcGxldGUgdGhhdCB0YXNrLlxuICAgICAqL1xuICAgICNjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuX3N1Yl9zZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2FtZW92ZXIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogTWV0aG9kIHVzZWQgZm9yIGluZm9ybWluZyB0aGUgVXNlciBvZiB0aGUgRW5kIEdhbWUgUmVzdWx0cy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbXNnIEdhbWUgT3ZlciBNZXNzYWdlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlcnJvciBEZWZhdWx0IGlzIE5vIEVycm9yXG4gICAgICovXG4gICAgI2dhbWVvdmVyQ2FsbGJhY2sgKG1zZywgZXJyb3I9ZmFsc2UpIHtcbiAgICAgICAgLy8gRGlzcGxheSBFbmQgR2FtZSBJbmZvcm1hdGlvbiBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzLlxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAvLyBTZXQgSW5mb3JtYXRpb24gQm94IFBhcmFtZXRlcnNcbiAgICAgICAgICAgIHRoaXMuX2luZm8uc2V0VGl0bGUoXCJHYW1lIE92ZXIhXCIpO1xuICAgICAgICAgICAgdGhpcy5faW5mby5zZXRNZXNzYWdlKG1zZyk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBDdXJzb3IgQ29udHJvbFxuICAgICAgICAgICAgdGhpcy5fdG0uY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faW5mby5jb250cm9sbGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gRGlzcGxheSBJbmZvcm1hdGlvblxuICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE90aGVyd2lzZSwgaW5mb3JtIHRoZSBVc2VyIG9mIHRoZSBFcnJvclxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldCBFcnJvciBCb3ggUGFyYW1ldGVyc1xuICAgICAgICAgICAgdGhpcy5fZXJyb3Iuc2V0TWVzc2FnZShtc2cpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgQ3Vyc29yIENvbnRyb2xcbiAgICAgICAgICAgIHRoaXMuX3RtLmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gRGlzcGxheSBFcnJvclxuICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2Vycm9yLm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9