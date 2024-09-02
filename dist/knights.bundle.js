"use strict";
(self["webpackChunkgamechip"] = self["webpackChunkgamechip"] || []).push([["knights"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/knights-module/board-module/board-styling.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/knights-module/board-module/board-styling.css ***!
  \*************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.chessboard { 
    font-family: "Gothica";
    display: grid; 
    border: 3px solid var(--num-colour);
}

[class*="-tile"] {
    position: relative;
    color: var(--num-colour);
}

[class*="-tile"] > .knight {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}

#cursor-tile { 
    background-color: var(--cursor); 
    position: absolute;
    top: 0;
    left: 0;
    animation: blink 1.5s infinite;
    animation-fill-mode: both;
}

.black-tile { background-color: var(--black); }

.black-tile.selected { background-color: var(--black-selected); }

.white-tile { background-color: var(--white); }

.white-tile.selected { background-color: var(--white-selected); }`, "",{"version":3,"sources":["webpack://./src/knights-module/board-module/board-styling.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,UAAU;AACd;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA,cAAc,8BAA8B,EAAE;;AAE9C,uBAAuB,uCAAuC,EAAE;;AAEhE,cAAc,8BAA8B,EAAE;;AAE9C,uBAAuB,uCAAuC,EAAE","sourcesContent":[".chessboard { \n    font-family: \"Gothica\";\n    display: grid; \n    border: 3px solid var(--num-colour);\n}\n\n[class*=\"-tile\"] {\n    position: relative;\n    color: var(--num-colour);\n}\n\n[class*=\"-tile\"] > .knight {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n}\n\n#cursor-tile { \n    background-color: var(--cursor); \n    position: absolute;\n    top: 0;\n    left: 0;\n    animation: blink 1.5s infinite;\n    animation-fill-mode: both;\n}\n\n.black-tile { background-color: var(--black); }\n\n.black-tile.selected { background-color: var(--black-selected); }\n\n.white-tile { background-color: var(--white); }\n\n.white-tile.selected { background-color: var(--white-selected); }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/knights-module/game-styling.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/knights-module/game-styling.css ***!
  \***********************************************************************************/
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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/dogica.ttf */ "./src/fonts/dogica.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/dogicabold.ttf */ "./src/fonts/dogicabold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --white: #fdfffc;
    --black: #020100;
}

:root.normal {
    --white-selected: #87d3ed;
    --black-selected: #2277a9;
    --screen: #235789;
    --error-screen: #f69493;
    --cursor: #e8c547;
    --num-colour: #e5b80b;
    --text-colour: #020100;
}

:root.retro {
    --white: #aaaaaa;
    --black: #0f380f;
    --white-selected: #9bbc0f;
    --black-selected: #306230;
    --screen: #aaaaaa;
    --error-screen: #f69493;
    --cursor: #8bac0f;
    --num-colour: #aaaaaa;
    --text-colour: #0f380f;
}

:root.future {
    --white: #d1e8e2;
    --black: #2c3531;
    --white-selected: #ffcb9a; 
    --black-select: #bd5e27;
    --screen: #116466;
    --error-screen: #ff9900;
    --cursor: #ffcb9a;
    --num-colour: #116466;
    --text-colour: #2c3531;
}

:root.neon {
    --white: #0abdc6;
    --black: #133e7c;
    --white-selected: #00797e; 
    --black-select: #307cbf;
    --screen: #091833;
    --error-screen: #e7ee4f;
    --cursor: #ea00d9;
    --num-colour: #711c91;
    --text-colour: #ea00d9;
}

:root.terminal {
    --white: cyan;
    --black: black;
    --black-selected: black;
    --white-selected: cyan;
    --screen: black;
    --error-screen: blue;
    --cursor: green;
    --num-colour: green;
    --text-colour: green;
}

:root.fantasy {
    --white: #e4934c;
    --black: #542b29;
    --white-selected: #f1b872; 
    --black-select: #431e1f;
    --screen: #9a9a8e;
    --error-screen: #960018;
    --cursor: #9c6b65;
    --num-colour: #7c142c;
    --text-colour: #0a1583;
}

@font-face {
    font-family: "Gothica";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: "Dogica";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: "Dogica Bold";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.knights-game-module { 
    position: absolute;
    color: var(--text-colour);
    background-color: var(--screen); 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

@keyframes blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes fade {
    0% { background-color: var(--screen); }
    50% { background-color: var(--cursor); }
    100% { background-color: var(--screen); }
}`, "",{"version":3,"sources":["webpack://./src/knights-module/game-styling.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;IACjB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,yBAAyB;IACzB,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;IACjB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,uBAAuB;IACvB,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;IACjB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,uBAAuB;IACvB,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;IACjB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,uBAAuB;IACvB,iBAAiB;IACjB,uBAAuB;IACvB,iBAAiB;IACjB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,4CAAqC;AACzC;;AAEA;IACI,qBAAqB;IACrB,4CAA+B;AACnC;;AAEA;IACI,0BAA0B;IAC1B,4CAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,KAAK,UAAU,EAAE;IACjB,MAAM,UAAU,EAAE;IAClB,OAAO,UAAU,EAAE;AACvB;;AAEA;IACI,KAAK,+BAA+B,EAAE;IACtC,MAAM,+BAA+B,EAAE;IACvC,OAAO,+BAA+B,EAAE;AAC5C","sourcesContent":[":root {\n    --white: #fdfffc;\n    --black: #020100;\n}\n\n:root.normal {\n    --white-selected: #87d3ed;\n    --black-selected: #2277a9;\n    --screen: #235789;\n    --error-screen: #f69493;\n    --cursor: #e8c547;\n    --num-colour: #e5b80b;\n    --text-colour: #020100;\n}\n\n:root.retro {\n    --white: #aaaaaa;\n    --black: #0f380f;\n    --white-selected: #9bbc0f;\n    --black-selected: #306230;\n    --screen: #aaaaaa;\n    --error-screen: #f69493;\n    --cursor: #8bac0f;\n    --num-colour: #aaaaaa;\n    --text-colour: #0f380f;\n}\n\n:root.future {\n    --white: #d1e8e2;\n    --black: #2c3531;\n    --white-selected: #ffcb9a; \n    --black-select: #bd5e27;\n    --screen: #116466;\n    --error-screen: #ff9900;\n    --cursor: #ffcb9a;\n    --num-colour: #116466;\n    --text-colour: #2c3531;\n}\n\n:root.neon {\n    --white: #0abdc6;\n    --black: #133e7c;\n    --white-selected: #00797e; \n    --black-select: #307cbf;\n    --screen: #091833;\n    --error-screen: #e7ee4f;\n    --cursor: #ea00d9;\n    --num-colour: #711c91;\n    --text-colour: #ea00d9;\n}\n\n:root.terminal {\n    --white: cyan;\n    --black: black;\n    --black-selected: black;\n    --white-selected: cyan;\n    --screen: black;\n    --error-screen: blue;\n    --cursor: green;\n    --num-colour: green;\n    --text-colour: green;\n}\n\n:root.fantasy {\n    --white: #e4934c;\n    --black: #542b29;\n    --white-selected: #f1b872; \n    --black-select: #431e1f;\n    --screen: #9a9a8e;\n    --error-screen: #960018;\n    --cursor: #9c6b65;\n    --num-colour: #7c142c;\n    --text-colour: #0a1583;\n}\n\n@font-face {\n    font-family: \"Gothica\";\n    src: url(\"../fonts/Gothica-Book.ttf\");\n}\n\n@font-face {\n    font-family: \"Dogica\";\n    src: url(\"../fonts/dogica.ttf\");\n}\n\n@font-face {\n    font-family: \"Dogica Bold\";\n    src: url(\"../fonts/dogicabold.ttf\");\n}\n\n.knights-game-module { \n    position: absolute;\n    color: var(--text-colour);\n    background-color: var(--screen); \n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n@keyframes blink {\n    0% { opacity: 0; }\n    50% { opacity: 1; }\n    100% { opacity: 0; }\n}\n\n@keyframes fade {\n    0% { background-color: var(--screen); }\n    50% { background-color: var(--cursor); }\n    100% { background-color: var(--screen); }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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

/***/ "./src/knights-module/board-module/board-styling.css":
/*!***********************************************************!*\
  !*** ./src/knights-module/board-module/board-styling.css ***!
  \***********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_board_styling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./board-styling.css */ "./node_modules/css-loader/dist/cjs.js!./src/knights-module/board-module/board-styling.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_board_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_board_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_board_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_board_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/knights-module/game-styling.css":
/*!*********************************************!*\
  !*** ./src/knights-module/game-styling.css ***!
  \*********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./game-styling.css */ "./node_modules/css-loader/dist/cjs.js!./src/knights-module/game-styling.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/knights-module/board-module/board.js":
/*!**************************************************!*\
  !*** ./src/knights-module/board-module/board.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _board_styling_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-styling.css */ "./src/knights-module/board-module/board-styling.css");
/* harmony import */ var _knight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight.js */ "./src/knights-module/board-module/knight.js");
/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile.js */ "./src/knights-module/board-module/tile.js");




class Board {
    #BOARD = 8;
    #DEFAULT_POS = {x: 3, y:3};
    #completeCallback;

    /**
     * Board Class
     * 
     * Chessboard Class that is responsible for setting up all Tiles and the 
     * Knight, in addition to managing the controls for the the Knight.
     * 
     * @callback completeCallback Puzzle Complete Callback
     */
    constructor (completeCallback) {
        // Generate the Board DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("chessboard");
        
        // Add Grid Template Areas to the Board DOM Element
        let template = "";
        for (let i = this.#BOARD - 1; i >= 0; i--) {
            for (let j = 0; j < this.#BOARD; j++) {
                if (j === 0)
                    template += `"tile-${i}${j} `;
                else if (j === this.#BOARD - 1)
                    template += `tile-${i}${j}"${i === 0 ? "" : " "}`;
                else
                    template += `tile-${i}${j} `;
            }
        }
        this._module.style.setProperty("grid-template-areas", template);

        // Initailise Tiles
        this._tiles = [];
        for (let i = 0; i < this.#BOARD; i++) {
            for (let j = 0; j < this.#BOARD; j++) {
                const tile = new _tile_js__WEBPACK_IMPORTED_MODULE_2__["default"](
                    i, 
                    j, 
                    j % 2 ? (
                        i % 2 ? "black" : "white"
                    ) : (
                        i % 2 ? "white" : "black"
                    )
                );
                this._tiles.push(tile);
                this._module.appendChild(tile.element);
            }
        }

        // Initialise Knight
        this._knight = new _knight_js__WEBPACK_IMPORTED_MODULE_1__["default"](
            this.#DEFAULT_POS.x, 
            this.#DEFAULT_POS.y, this.#BOARD, 
            this._tiles
        );

        // Place Knight and Cursor on Initial Tile
        this._tiles.forEach(tile => {
            if (
                tile.x === this.#DEFAULT_POS.x && 
                tile.y === this.#DEFAULT_POS.y
            ) {
                tile.placeKnight(this._knight.element);
                this._current = tile;
                this._current.placeCursor();
            }
        });

        // Initialise Callback and Variables
        this.#completeCallback = completeCallback;
        this._previous = [];
        this._initialise = false;
        this._puzzling = false;
        this._algorithm = false;
        this._goal = {x: -1, y: -1};
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get knight () { return this._knight; }

    set knight (obj) { this._knight = obj; }

    get previous () { return this._previous; }

    set previous (arr) { this._previous = arr; }

    get puzzling () { return this._puzzling; }

    set puzzling (bool) { this._puzzling = bool; }

    get goal () { return this._goal; }

    set goal (dict) { this._goal = dict; }

    /**
     * Get Root Method
     * 
     * Returns the Selected Root Position of the Knight for the Puzzle.
     * 
     * @returns Root Position
     */
    getRoot () { return { x: this._knight.x, y: this._knight.y }; }

    /**
     * Get Graph Method
     * 
     * Returns the Graph Generated by the Knight connecting all the Tiles to 
     * each other by the legally allowed moves of the Knight.
     * 
     * @returns Graph of Chessboard
     */
    getGraph () { return this._knight.graph; }

    /**
     * Set Dimensions Method
     * 
     * For the Board, the width and height are dependent on the screen size.
     * 
     * @param {number} dimension Board Size (pixels)
     */
    setDimensions (dimension) {
        // Set Board Dimensions
        this._module.style.width = `${dimension}px`;
        this._module.style.height = `${dimension}px`;

        // Set Tile Dimensions
        const tileDim = Math.floor(dimension / this.#BOARD);
        const fontSize = Math.floor(tileDim * 0.8);
        this._tiles.forEach(tile => {
            tile.element.style.width = `${tileDim}px`;
            tile.element.style.height = `${tileDim}px`;
            tile.element.style.fontSize = `${fontSize}px`;
            tile.cursor.style.width = `${tileDim}px`;
            tile.cursor.style.height = `${tileDim}px`;
        });

        // Set Knight Dimensions
        this._knight.icon.style.width = `${tileDim}px`;
        this._knight.icon.style.height = `${tileDim}px`;
    }

    /**
     * Set Theme Method
     * 
     * Update the Knight's Icon.
     * 
     * @param {string} theme Theme Name
     */
    setTheme (theme) { this._knight.changeIcon(theme); }

    /**
     * Set Goal Method
     * 
     * Set Goal Tile for Shortest Path Puzzle.
     * 
     * @param {number} x Goal X-Position
     * @param {number} y Goal Y-Position
     */
    setGoal (x, y) {
        // Find Goal Tile
        let aux;
        this._tiles.forEach(tile => {
            if (tile.x === x && tile.y === y)
                aux = tile;
        });

        // Set Goal Variable
        this._goal.x = x;
        this._goal.y = y;

        // Highlight Goal Tile
        aux.highlight();
    }

    /**
     * Is Complete Method
     * 
     * For the given Puzzle, the method will check if it has been completed.
     * 
     * @returns True, if Puzzle is Complete
     */
    isComplete () {
        // Handle Shortest Path Puzzle
        if (this._goal.x !== -1 && this._goal.y !== -1)
            return (
                this._current.x === this._goal.x && 
                this._current.y === this._goal.y
            );

        // Handle Knight's Tour Puzzle
        let check = false;
        for (let i = 0; i < this._tiles.length; i++) {
            if (this._tiles[i].move === this._tiles.length) {
                check = true;
                break;
            }
        }
        return check;
    }

    /**
     * Move Method
     * 
     * Used for Moving the Knight to the Next Position.
     * 
     * @param {number} x Next X-Position
     * @param {number} y Next Y-Position
     */
    move (x, y) {
        // Find Tile that Correspond to Next Position
        let tile;
        this._tiles.forEach(t => {
            if (t.x === x && t.y === y)
                tile = t;
        });

        // Place Cursor and Knight on Tile
        this._current.placeCursor(false);
        this.#placeKnight(tile);
        this._current.placeCursor();
    }

    /**
     * Reset Method
     * 
     * Reset the Board's Tiles to remove any highlights.
     */
    reset () {
        // Reset Tiles
        this._tiles.forEach(tile => {
            tile.reset();

            // Ensure Knight and Cursor Remain on their Tile
            if (tile.x === this._knight.x && tile.y === this._knight.y) {
                tile.placeKnight(this._knight.element);
                tile.placeCursor();
            }
        });

        // Reset Other Variables
        this._puzzling = false;
        this._algorithm = false;
        this._previous = [];
        this._goal.x = -1;
        this._goal.y = -1;
    }

    /**
     * Horizontal Move Method
     * 
     * Move the Cursor Horizontally around the Board.
     * 
     * @param {boolean} right Default Action is Rightwards
     */
    horizontalMove (right=true) {
        // Ensure Horizontal Move is still on Board
        const curr = this._current.y + (right ? 1 : -1);
        if (curr < this.#BOARD && curr >= 0) {
            // Remove Cursor from Tile
            this._current.placeCursor(false);

            // Iterate and Find New Tile for Cursor
            this._tiles.forEach(tile => {
                if (tile.y === curr && tile.x === this._current.x)
                    this._current = tile;
            });

            // Place Cursor on Tile
            this._current.placeCursor(true);
        }
    }

    /**
     * Vertical Move Method
     * 
     * Move the Cursor up or down around the Board.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) {
        // Ensure Vertical Move is still on Board
        const curr = this._current.x + (up ? 1 : -1);
        if (curr < this.#BOARD && curr >= 0) {
            // Remove Cursor from Tile
            this._current.placeCursor(false);

            // Iterate and Find New Tile for Cursor
            this._tiles.forEach(tile => {
                if (tile.y === this._current.y && tile.x === curr)
                    this._current = tile;
            });

            // Place Cursor on Tile
            this._current.placeCursor(true);
        }
    }

    /**
     * Accept Action Method
     * 
     * If move is legal, Knight is Placed and no error is rasied. On the other 
     * hand, if the move is illegal, then no action is taken and error should 
     * be raised.
     * 
     * @returns Error Message, if required
     */
    acceptAction () {
        // Find Current Tile
        let aux;
        this._tiles.forEach(tile => {
            if (tile.pointer)
                aux = tile;
        });

        // Ensure Move is Legal
        if (this._initialise || this._knight.isLegal(aux.x, aux.y)) {
            let check = true;
            // Store Tile if Solving Puzzle
            if (this._puzzling) {
                this._previous.push(aux);

                // For Touring, Confirm No Repeated Tiles
                if (this._goal.x === -1 && this._goal.y === -1)
                    check = aux.move === 0;
            }
            
            if (check) {
                // Update Current Tile
                this.#placeKnight(aux);
                this._initialise = false;

                // Number Tile, if Touring
                if (this._goal.x === -1 && this._goal.y === -1 && this._puzzling)
                    this._current.number(this._previous.length, this._knight.element);

                // Check if Puzzle is Complete
                if (this.isComplete())
                    this.#completeCallback();

                // Update without Error
                return "";
            } else {
                this._previous.pop();
                return `Move to (${aux.y}, ${aux.x}) has already been made!`;
            }
        }

        // Update with Error
        return `Move to (${aux.y}, ${aux.x}) is illegal!`;
    }

    /**
     * Decline Action Method
     * 
     * If while solving the Puzzle the User finds they want to undo their last 
     * move, then the previous move will replace the current position.
     */
    declineAction () {
        // Handle only if Solving Puzzle
        if (this._puzzling && !this._algorithm && this._previous.length > 1) {
            // Set Last Move in List as Current Move
            let aux = this._previous.pop();
            if (aux.x === this._current.x && aux.y === this._current.y)
                aux = this._previous.pop();
            this.#placeKnight(aux, this._current, true);
            this._previous.push(this._current);
        }
    }

    /**
     * Select Action Method
     * 
     * Either used for Selecting the Initial Position of the Knight for 
     * completing the Puzzle, or for using the Algorithm to show a Solution for
     * the Puzzle.
     * 
     * @param {boolean} tour Knight's Tour or Not
     * @param {Array} path Path Generated by Algorithm
     * @callback moveCallback Move Callback Method
     */
    selectAction (tour=false, path=[], moveCallback) {
        // Select Initial Position for Knight
        if (path.length === 0) {
            // Find the Current Tile
            let aux;
            this._tiles.forEach(tile => {
                if (tile.pointer)
                    aux = tile;
            });

            // Update Current Tile
            this.#placeKnight(aux);

            // Setup Puzzling Variables
            this._previous.push(aux);
            this._puzzling = true;
            this._tiles.forEach(tile => {
                if (!tile.active)
                    tile.toggle();
            });
            this._current.highlight();


            // If completing a Knight's Tour, Number Tile
            if (tour) {
                this._current.number(1, this._knight.element);
            }
        } 
        
        // Prompt Knight to Use Algorithm's Path
        else {
            // Set Variables for Timing Interval
            this._algorithm = true;
            var self = this;

            // Setup 1s Timing Interval
            var x = setInterval(function () {
                // Set Vertex to be Last Element in Path
                let vertex;
                vertex = path.pop();

                // Add Vertex to Previous Steps
                self.previous.push(vertex);

                // For Knight's Tour, Number the Tiles
                if (tour)
                    // Iterate through Tiles
                    self._tiles.forEach(tile => {
                        // Number Tile that Knight is On
                        if (vertex.x === tile.x && vertex.y === tile.y)
                            tile.number(
                                self.previous.length - 1, 
                                self.knight.element
                            );
                    });

                // Update Game Interface
                moveCallback(vertex.x, vertex.y);

                // Check if Puzzle is Complete
                if (path.length === 0) {
                    // Close Timing Interval
                    clearInterval(x);

                    // Puzzle Complete
                    self.#completeCallback();
                }
            }, 1000);
        }
    }

    /**
     * Place Knight Method
     * 
     * For the given tile, Place the Knight there.
     * 
     * @param {Tile} tile Desired Tile
     * @param {Tile} prev Previous Tile
     * @param {boolean} undo Undo, default False
     */
    #placeKnight (tile, prev, undo=false) {
        // Remove Knight from Current Tile
        this._current.removeKnight();

        // For Undoing Placement, Update Tiles
        if (undo) {
            prev.placeCursor(false);
            prev.reset();
            tile.placeCursor();
        }

        // Update Current Tile
        this._current = tile;
        this._current.placeKnight(this._knight.element);
        this._knight.update(tile.x, tile.y);
    }
}

/***/ }),

/***/ "./src/knights-module/board-module/knight.js":
/*!***************************************************!*\
  !*** ./src/knights-module/board-module/knight.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Knight)
/* harmony export */ });
/* harmony import */ var _data_structures_graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-structures/graph.js */ "./src/data-structures/graph.js");
/* harmony import */ var _images_knight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/knight.png */ "./src/knights-module/images/knight.png");
/* harmony import */ var _images_knight_retro_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/knight-retro.png */ "./src/knights-module/images/knight-retro.png");
/* harmony import */ var _images_knight_future_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/knight-future.png */ "./src/knights-module/images/knight-future.png");
/* harmony import */ var _images_knight_neon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/knight-neon.png */ "./src/knights-module/images/knight-neon.png");
/* harmony import */ var _images_knight_terminal_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/knight-terminal.png */ "./src/knights-module/images/knight-terminal.png");
/* harmony import */ var _images_knight_fantasy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/knight-fantasy.png */ "./src/knights-module/images/knight-fantasy.png");








class Knight {
    #BOARD;
    #THEMES = {
        "normal": _images_knight_png__WEBPACK_IMPORTED_MODULE_1__,
        "retro": _images_knight_retro_png__WEBPACK_IMPORTED_MODULE_2__,
        "future": _images_knight_future_png__WEBPACK_IMPORTED_MODULE_3__,
        "neon": _images_knight_neon_png__WEBPACK_IMPORTED_MODULE_4__,
        "terminal": _images_knight_terminal_png__WEBPACK_IMPORTED_MODULE_5__,
        "fantasy": _images_knight_fantasy_png__WEBPACK_IMPORTED_MODULE_6__,
    };

    /**
     * Knight Class
     * 
     * Class that Generates the DOM element that represents the Knight Object, 
     * and also controls the Knight as it moves across the Chessboard, either 
     * by the User or by the Search Algorithm.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @param {number} board Chessboard Size
     * @param {Array} tiles Array of Chessboard Tiles
     */
    constructor (x, y, board, tiles) {
        // Generate Knight DOM Element
        this._element = document.createElement("div");
        this._icon = new Image();
        this._icon.src= _images_knight_png__WEBPACK_IMPORTED_MODULE_1__;
        this._element.appendChild(this._icon);
        this._element.classList.add("knight");

        // Initialise Variables
        this._x = x;
        this._y = y;
        this.#BOARD = board;
        this._tiles = tiles;
        this._legal = [];
        this._path = [];

        // Generate Graph for Tiles
        this._graph = new _data_structures_graph_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.fill();
        this.currentLegalMoves();
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get icon () { return this._icon; }

    set icon (img) { this._icon = img; }

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
     * Change Icon Method
     * 
     * Set the New Icon for the given Theme.
     * 
     * @param {string} theme New Theme
     */
    changeIcon (theme) {
        // Ensure Theme Exists
        if (Object.keys(this.#THEMES).includes(theme)) {
            // Replace Icon
            this._element.innerHTML = "";
            this._icon.src = this.#THEMES[theme];
            this._element.appendChild(this._icon);
        }
    }

    /**
     * Fill Method
     * 
     * Based on the Legal Moves that a Knight can make on a Chessboard, this 
     * method will fill up the graph with edges that correspond to the legal 
     * movements a knight can make at each square on the board.
     */
    fill () {
        // Add a Vertex for each Tile
        this._tiles.forEach(tile => {
            this._graph.insertVertex(tile.x, tile.y);
        });

        // Add an Edge for Traversing with Knight
        for (let x = 0; x < this.#BOARD; x++)
            for (let y = 0; y < this.#BOARD; y++)
                this.getLegalMoves(x, y);
    }

    /**
     * Current Legal Moves Method
     * 
     * For the current position the knight is in on the Chessboard, this method 
     * will fill up the legal moves array with the currently available legal 
     * moves.
     */
    currentLegalMoves () {
        // Get Vertex for Current Location from Graph
        const current = this._graph.getVertex(this.x, this.y);

        // Iterate through Neighbours, adding them to Legal Moves Array
        for (let i = 0; i < current.neighbours.length; i++)
            this._legal.push(current.neighbours[i]);
    }

    /**
     * Update Method
     * 
     * Update the Position of the Knight, and retrieve new legal moves.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    update (x, y) {
        this._x = x;
        this._y = y;
        this._legal = [];
        this.currentLegalMoves();
    }

    /**
     * Is Legal Method
     * 
     * Checks if the Move selected is a legal one, given the restrictions of the
     * Knight's movement on a chessboard.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     * @returns True if Move is Legal
     */
    isLegal (x, y) {
        // Find if Coordinate is a Legal Vertex
        let idx = -1;
        for (let i = 0; i < this._legal.length; i++)
            // Check if Coordinate Matches Legal Vertex
            if (this._legal[i].x === x && this._legal[i].y === y)
                idx = i;
        
        return idx >= 0;
    }

    /**
     * Get Legal Moves Method
     * 
     * For the Given Position, the method will generate the edges towards the 
     * legal positions, given the knights restricted moves on a chessboard.
     * 
     * @param {number} x X-Coordinate
     * @param {number} y Y-Coordinate
     */
    getLegalMoves (x, y) {
        let current = this._graph.getVertex(x, y);
        // Top Moves
        if (y + 2 < this.#BOARD) {
            // Check if Top-Right is Legal
            if (x + 1 < this.#BOARD) {
                let topRight = this._graph.getVertex(x + 1, y + 2);
                this._graph.insertEdge(current, topRight);
            }
            // Check if Top-Left is Legel
            if (x - 1 >= 0) {
                let topLeft = this._graph.getVertex(x - 1, y + 2);
                this._graph.insertEdge(current, topLeft);
            }
        }
        // Right Moves
        if (x + 2 < this.#BOARD) {
            // Check if Right-Top is Legal
            if (y + 1 < this.#BOARD) {
                let rightTop = this._graph.getVertex(x + 2, y + 1);
                this._graph.insertEdge(current, rightTop);
            }
            // Check if Right-Bottom is Legal
            if (y - 1 >= 0) {
                let rightBottom = this._graph.getVertex(x + 2, y - 1);
                this._graph.insertEdge(current, rightBottom);
            }
        }
        // Bottom Moves
        if (y - 2 >= 0) {
            // Check if Bottom-Right is Legal
            if (x + 1 < this.#BOARD) {
                let bottomRight = this._graph.getVertex(x + 1, y - 2);
                this._graph.insertEdge(current, bottomRight);
            }
            // Check if Bottom-Left is Legal
            if (x - 1 >= 0) {
                let bottomLeft = this._graph.getVertex(x - 1, y - 2);
                this._graph.insertEdge(current, bottomLeft);
            }
        }
        // Left Moves
        if (x - 2 >= 0) {
            // Check if Left-Top is Legal
            if (y + 1 < this.#BOARD) {
                let leftTop = this._graph.getVertex(x - 2, y + 1);
                this._graph.insertEdge(current, leftTop);
            }
            // Check if Left-Bottom is Legal
            if (y - 1 >= 0) {
                let leftBottom = this._graph.getVertex(x - 2, y - 1);
                this._graph.insertEdge(current, leftBottom);
            }
        }
    }
}

/***/ }),

/***/ "./src/knights-module/board-module/tile.js":
/*!*************************************************!*\
  !*** ./src/knights-module/board-module/tile.js ***!
  \*************************************************/
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
        // Generate Tile DOM Element
        this._element = document.createElement("div");
        this._element.classList.add(`${colour}-tile`);
        this._element.id = `${x}-${y}-tile`;
        this._element.style.setProperty(
            "grid-area", `tile-${x}${y}`
        );

        // Generate Cursor DOM Element
        this._cursor = document.createElement("div");
        this._cursor.id = "cursor-tile";

        // Initialise Variables
        this._x = x;
        this._y = y;
        this._move = 0;
        this._colour = colour;
        this._active = false;
        this._pointer = false;
    }

    get element () { return this._element; }

    set element (elem) { this._element = elem; }

    get cursor () { return this._cursor; }

    set cursor (elem) { this._cursor = elem; }

    get x () { return this._x; }

    set x (x) { this._x = x; }

    get y () { return this._y; }

    set y (y) { this._y = y; }

    get move () { return this._move; }

    set move (num) { this._move = num; }

    get active () { return this._active; }

    set active (bool) { this._active = bool; }

    get pointer () { return this._pointer; }

    set pointer (bool) { this._pointer = bool; }

    /**
     * Remove Knight Method
     * 
     * Removes the Knight DOM Element from the tile.
     */
    removeKnight () { 
        // Clear DOM Elements
        this._element.innerHTML = ""; 
        
        // If Number was on Tile, Keep it On
        if (this._active && this._move > 0)
            this._element.textContent = this._move;

        // If Cursor was on Tile, Keep it On
        if (this._pointer)
            this._element.appendChild(this._cursor);
    }

    /**
     * Place Knight Method
     * 
     * Appends the Knight DOM Element to the tile.
     * 
     * @param {*} elem Knight DOM Element
     */
    placeKnight (elem) {
        this._element.appendChild(elem);
        this.highlight();
    }

    /**
     * Place Cursor Method
     * 
     * Place or Remove the Cursor on the tile.
     * 
     * @param {boolean} on Place or Remove
     */
    placeCursor (on=true) {
        // Place Cursor on Tile
        if (on && !this._pointer) {
            this._element.appendChild(this._cursor);
            this._pointer = true;
        }
        // Remove Cursor from Tile
        if (!on && this._pointer) {
            this._element.removeChild(this._cursor);
            this._pointer = false;
        }
    }

    /**
     * Number Method
     * 
     * Number the Tile with a Desired Number.
     * 
     * @param {number} num Number for Tile
     * @param {*} knight Knight DOM Element
     */
    number (num, knight) { 
        this._move = num;
        this._element.textContent = num; 
        this._element.appendChild(knight);
        this.highlight();
        this._element.appendChild(this._cursor);
    }

    /**
     * Highlight Method
     * 
     * Highlights the tile when if the tile is active and if the knight lands 
     * on the tile.
     */
    highlight () {
        if (this._active && !this._element.classList.contains("selected"))
            this._element.classList.add("selected");
    }

    /**
     * Toggle Method
     * 
     * Sets the active variable to be on or off, depending on whether or not 
     * there is a puzzle that the user is currently completing.
     */
    toggle () { this._active = !this._active; }

    /**
     * Reset Method
     * 
     * Removes any instance of the Tile being highlighted.
     */
    reset () {
        // Remove Highlight, if needed
        if (this._element.classList.contains("selected")) {
            this._element.classList.remove("selected");
        }

        // Reset Other Variables
        this._move = 0;
        this._active = false;
        if (this._pointer)
            this.placeCursor(false);
        if (this._element.textContent !== "")
            this._element.textContent = "";
    }
}

/***/ }),

/***/ "./src/knights-module/knights-game.js":
/*!********************************************!*\
  !*** ./src/knights-module/knights-game.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KnightsGame)
/* harmony export */ });
/* harmony import */ var _game_styling_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-styling.css */ "./src/knights-module/game-styling.css");
/* harmony import */ var _data_menu_json5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/menu.json5 */ "./src/knights-module/data/menu.json5");
/* harmony import */ var _data_select_json5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/select.json5 */ "./src/knights-module/data/select.json5");
/* harmony import */ var _game_chip_module_game_interface_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-chip-module/game-interface.js */ "./src/game-chip-module/game-interface.js");
/* harmony import */ var _main_module_knights_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-module/knights-manager.js */ "./src/knights-module/main-module/knights-manager.js");
/* harmony import */ var _pop_up_module_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pop-up-module/menu.js */ "./src/pop-up-module/menu.js");
/* harmony import */ var _pop_up_module_error_box_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pop-up-module/error-box.js */ "./src/pop-up-module/error-box.js");
/* harmony import */ var _pop_up_module_info_box_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pop-up-module/info-box.js */ "./src/pop-up-module/info-box.js");
/* harmony import */ var _pop_up_module_select_box_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pop-up-module/select-box.js */ "./src/pop-up-module/select-box.js");










class KnightsGame extends _game_chip_module_game_interface_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
    #showCallback;
    #takeDownCallback;

    /**
     * Knight's Game Interface Class
     * 
     * Used for Controlling the Menu and Chessboard Modules with the GameChip's
     * Controllers, and also for Updating the Display with the relevant Error 
     * and Information Messages.
     */
    constructor (title) {
        super(title);

        // Initialise Objects for the Knight's Game
        this._km = new _main_module_knights_manager_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.completeCallback.bind(this));
        this._menu = new _pop_up_module_menu_js__WEBPACK_IMPORTED_MODULE_5__["default"](_data_menu_json5__WEBPACK_IMPORTED_MODULE_1__);
        this._error = new _pop_up_module_error_box_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this._info = new _pop_up_module_info_box_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
        this._select = new _pop_up_module_select_box_js__WEBPACK_IMPORTED_MODULE_8__["default"](
            _data_select_json5__WEBPACK_IMPORTED_MODULE_2__.game.description,
            _data_select_json5__WEBPACK_IMPORTED_MODULE_2__.game.categories
        );

        // Initialise Variable
        this._game_selected = false;
    }

    /**
     * Set Scene Method
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

        // Set Board Dimensions
        const dimensions = getDimensions();
        this._km.setup(dimensions.width, dimensions.height);

        // Set Pop-Up Dimensions
        this._menu.setDimensions(dimensions.width, dimensions.height);
        this._sub_set = false;
        this._sub_menu; 
        this._error.setDimensions(dimensions.width, dimensions.height);
        this._info.setDimensions(dimensions.width, dimensions.height);
        this._select.setDimensions(dimensions.width, dimensions.height);

        // Set Board on Display
        this.#showCallback(this._km.module);

        // Show Information about Current Game
        this._select.active = true;
        this._km.controller = false;
        this.#showCallback(this._select.module, true);
    }

    /**
     * Puzzle Complete Callback Method
     * 
     * When the Puzzle is Complete, the User should be informed with the relevant 
     * information.
     */
    completeCallback () {
        // Set Path Taken
        this._km.path = this._km.board.previous;
        this._km.controller = true;

        // Puzzle Complete, Display Info
        this._info.setTitle(this._km.game.puzzleTitle());
        this._info.setMessage(this._km.game.endInfo(
            this._km.human,
            this._km.human ? this._km.steps.human + 1 : this._km.steps.algorithm,
            this._km.path
        ));
        this.#showCallback(this._info.module, true);
        this._km.reset();
    }

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () {
        // Handle Chessboard Movement
        if (this._km.controller)
            this._km.horizontalMove();
    }

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () {
        // Handle Chessboard Movement
        if (this._km.controller)
            this._km.horizontalMove(false);
    }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () {
        // Handle Chessboard Movement
        if (this._km.controller)
            this._km.verticalMove();
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
        // Handle Chessboard Movement
        if (this._km.controller)
            this._km.verticalMove(false);
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
        if (this._select.active && !this._game_selected) {
            // Set Game
            this._km.setGame(this._select.acceptAction());
            this._game_selected = true;

            // Show Information about Game
            this.#takeDownCallback();
            this._select.active = false;

            this._info.setTitle(this._km.game.puzzleTitle());
            this._info.setMessage(this._km.game.puzzleInfo());
            this.#showCallback(this._info.module, true);
        }
        // Handle Info Action
        else if (this._info.active) {
            this.#takeDownCallback();
            this._info.active = false;
            this._km.controller = true;
        } 
        // Handle Error Action
        else if (this._error.active) {
            this.#takeDownCallback();
            this._error.active = false;
        } 
        // Handle Chessboard Action
        else if (this._km.controller) {
            if (!this._km.acceptAction()) {
                this._error.setMessage(this._km.message);
                this.#showCallback(this._error.module, true);
            }
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
                if (this._sub_menu.selected.key === "Game") {
                    this._km.setGame(this._sub_menu.selected.value);
                    this.#close();

                    // Show Information about Current Game
                    this._info.setTitle(this._km.game.puzzleTitle());
                    this._info.setMessage(this._km.game.puzzleInfo());
                    this.#showCallback(this._info.module, true);
                }
                
                // Handle Theme Set
                if (this._sub_menu.selected.key === "Theme") {
                    this._km.setTheme(this._sub_menu.selected.value);
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
        // Handle Chessboard Action
        if (this._error.active) {
            this.#takeDownCallback();
            this._error.active = false;
            this._km.controller = true;
        } else if (this._info.active) {
            this.#takeDownCallback();
            this._info.active = false;
            this._km.controller = true;
        } else if (this._km.controller)
            this._km.declineAction();
        // Handle Menu Action
        else if (this._menu.controller) 
            this.#close();
        // Handle Sub-Menu Action
        else if (this._sub_set)
            this.#mainReturn();
    }

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () { this.#menu(); }

    /**
     * Select Callback Method
     * 
     * Handles the Click of the Select User Button.
     */
    selectCallback () {
        // Only Handle Gameplay Events
        if (this._km.controller)
            this._km.selectAction();
    }

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
        this._km.controller = true;
        this._menu.controller = false;
        this.#takeDownCallback();
    }

    /**
     * Menu Method
     * 
     * When the Start button is pressed, either the Menu should be Displayed 
     * (i.e. during gameplay), or the Menu should be Taken Down (i.e. while the 
     * Menu is up on the screen).
     */
    #menu () {
        // Menu to be Displayed
        if (this._km.controller) {
            // Set Menu to be Controlled
            this._km.controller = false;
            this._menu.controller = true;

            // Display the Menu
            this.#showCallback(this._menu.module, true);
        } 
        
        // Menu to be Taken Down
        else {
            // Set Knight to be Controlled
            this._km.controller = true;
            this._menu.controller = false;

            // Take Down Menu/Sub-Menu
            this.#takeDownCallback();
            if (this._sub_set) {
                this._menu.resetSubMenus();
                this._sub_set = false;
            }
        }
    }
}

/***/ }),

/***/ "./src/knights-module/main-module/knights-manager.js":
/*!***********************************************************!*\
  !*** ./src/knights-module/main-module/knights-manager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KnightsManager)
/* harmony export */ });
/* harmony import */ var _board_module_board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../board-module/board.js */ "./src/knights-module/board-module/board.js");
/* harmony import */ var _puzzles_knights_tour_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../puzzles/knights-tour.js */ "./src/knights-module/puzzles/knights-tour.js");
/* harmony import */ var _puzzles_shortest_path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../puzzles/shortest-path.js */ "./src/knights-module/puzzles/shortest-path.js");




class KnightsManager {
    #GAME_TYPES = {
        "SP": null,
        "KT": null,
    };
    #THEMES = [
        "Normal",
        "Retro",
        "Future",
        "Neon",
        "Terminal",
        "Fantasy"
    ];

    /**
     * Knight's Game Manager Class
     * 
     * For the Knight's Game, this Manager Class will Handle UI Components such
     * as the Current Move Count, the Game being Played, the Chessboard and its
     * associated elements, and whether the User is completing the Puzzle or the
     * Algorithm is. It manages the Actions on the Chessboard with the parent 
     * Game Interface.
     * 
     * @callback completeCallback Puzzle Complete Callback
     */
    constructor (completeCallback) {
        // Generate Game DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("knights-game-module");

        // Generate Info Component DOM Elements
        this._information = document.createElement("div");
        this._information.classList.add("info-components");

        // Generate Player Info DOM Element
        this._player = document.createElement("div");
        this._player.classList.add("player-info");
        this._player.textContent = "H";

        // Generate Steps Taken Info DOM Element
        this._current = document.createElement("div");
        this._current.classList.add("steps-taken");
        this._current.textContent = 0;

        // Generate Game Type Info DOM Element
        this._type = document.createElement("div");
        this._type.classList.add("game-type");
        this._type.textContent = "SP";

        // Append Info Components to Information
        this._information.appendChild(this._player);
        this._information.appendChild(this._current);
        this._information.appendChild(this._type);

        // Initialise Objects
        this._board = new _board_module_board_js__WEBPACK_IMPORTED_MODULE_0__["default"](completeCallback);
        this.#GAME_TYPES["SP"] = new _puzzles_shortest_path_js__WEBPACK_IMPORTED_MODULE_2__["default"](
            this._board.knight.x,
            this._board.knight.y,
            8
        );
        this.#GAME_TYPES["KT"] = new _puzzles_knights_tour_js__WEBPACK_IMPORTED_MODULE_1__["default"](
            this._board.knight.x,
            this._board.knight.y,
            8
        );

        // Append All Components to Module
        this._module.appendChild(this._board.module);
        this._module.appendChild(this._information);

        // Initialise Variables
        this._controller = true;
        this._human = true; // Default is User Moves
        this._game = this.#GAME_TYPES[this._type.textContent];
        this._path = [];
        this._steps = {human: 0, algorithm: 0};
        this._msg = "";

        // Set the Default Theme
        this.setTheme(this.#THEMES[0]);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get board () { return this._board; }

    set board (obj) { this._board = obj; }

    get controller () { return this._controller; }

    set controller (bool) { this._controller = bool; }

    get human () { return this._human; }

    set human (bool) { this._human = bool; }

    get game () { return this._game; }

    set game (obj) { this._game = obj; }

    get path () { return this._path; }

    set path (arr) { this._path = arr; }

    get steps () { return this._steps; }

    set steps (dict) { this._steps = dict; }
    
    get message () { return this._msg; }

    set message (str) { this._msg = str; }

    /**
     * Setup Method
     * 
     * Sets up the Display for the Game, including the board, the information 
     * panel and the sub-modules for the game, such as the Shortest Path, the 
     * Knight's Tour, and the Start Screen.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setup (width, height) {
        // Set Game Dimensions
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`;

        // Set Board Dimensions
        const dim = Math.floor(Math.min(width, height) * 0.9);
        this._board.setDimensions(dim);

        // Set Information Panel Font Size
        this._information.style.fontSize = `${Math.floor(dim * 0.07)}px`;
    }

    /**
     * Set Game Method
     * 
     * Update the Game the User is Playing.
     * 
     * @param {string} game Game Name
     */
    setGame (game) {
        // Handle Shortest Path Puzzle
        if (game === "Shortest-Path") {
            this._game = this.#GAME_TYPES["SP"];
            this._type.textContent = "SP";
        }
        // Handle Knight's Tour Puzzle
        if (game === "Knights-Tour") {
            this._game = this.#GAME_TYPES["KT"];
            this._type.textContent = "KT";
        }
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

        // Update Knight's Icon
        this._board.setTheme(theme.toLowerCase());
    }

    /**
     * Reset Method
     * 
     * Set all variables to their original values, and set the board so that the 
     * tiles aren't highlighted.
     */
    reset () {
        // Reset Values on Display
        this._player.textContent = "H";
        this._current.textContent = 0;

        // Reset Steps Taken
        this._human = true;
        this._steps.human = 0;
        this._steps.algorithm = 0;
        this._path = [];

        // Reset Tiles
        this._board.reset();

        // Reset Puzzle
        this._game.reset();
    }

    /**
     * Horizontal Move Method
     * 
     * Moving the Cursor Right or Left on the Chessboard.
     * 
     * @param {boolean} right Default Action is Rightwards
     */
    horizontalMove (right=true) { this._board.horizontalMove(right); }

    /**
     * Vertical Move Method
     * 
     * Moving the Cursor Up or Down on the Chessboard.
     * 
     * @param {boolean} up Default Action is Upwards
     */
    verticalMove (up=true) { this._board.verticalMove(up); }

    /**
     * Accept Action Method
     * 
     * During the game, if an error occurs, say when an illegal move is made, 
     * then a message should be able to be viewed by the user.
     * 
     * @returns True if there are no Errors
     */
    acceptAction () {
        const message = this._board.acceptAction();
        if (message !== "") { 
            // Set Error Message
            this._msg = message;
            
            // Update with Error Message
            return false;
        }

        // Increment Steps if Puzzle has Commenced
        if (this._board.puzzling) {
            this._steps.human += 1;
            this._current.textContent = this._steps.human;
        }

        // Update with no Error Message
        return true;
    }

    /**
     * Decline Action Method
     * 
     * While Solving the Puzzle, the User can use the B Button as an Undo button.
     */
    declineAction () { 
        if (this._board.puzzling) {
            if (this._steps.human > 0) {
                this._steps.human -= 1;
                this._current.textContent = this._steps.human;
            }
            this._board.declineAction();
        } 
    }

    /**
     * Selection Action Method
     * 
     * During the Game, if the User presses Select, then either the User is 
     * selecting an Initial Position for the Knight, or they are requesting a 
     * Solution for the Puzzle.
     */
    selectAction () {
        // Check if Knight's Tour is the Selected Puzzle
        let check = this._type.textContent === "KT";

        // Handle Request for Solution
        if (this._game.generated) {
            this._board.selectAction(
                check, 
                this._game.algorithm, 
                this.#moveCallback.bind(this)
            );
            this._human = false;
            this._player.textContent = "A";
            this._controller = false;
        }

        // Handle Selecting Initial Position
        else {
            this._board.selectAction(check, [], this.#moveCallback.bind(this));

            // Generate Puzzle
            const root = this._board.getRoot();
            const graph = this._board.getGraph();
            this._game.generate(root.x, root.y, graph);

            // If Shortest Path, Update Goal Tile
            if (!check) {
                const goal = this._game.goal;
                this._board.setGoal(goal.x, goal.y);
            }
        }
    }

    /**
     * Move Callback Method
     * 
     * Used for Moving the Knight during prompting, the method will also 
     * increment the steps on the UI.
     * 
     * @param {number} x Next X-Position
     * @param {number} y Next Y-Position
     */
    #moveCallback (x, y) {
        // Update UI Move Count Element
        this._steps.algorithm += 1;
        this._current.textContent = this._steps.algorithm;

        // Move Knight to Desired Coordinate
        this._board.move(x, y);
    }
}

/***/ }),

/***/ "./src/knights-module/puzzles/knights-tour.js":
/*!****************************************************!*\
  !*** ./src/knights-module/puzzles/knights-tour.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KnightsTour)
/* harmony export */ });
/* harmony import */ var _puzzle_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puzzle-module.js */ "./src/knights-module/puzzles/puzzle-module.js");
/* harmony import */ var _data_structures_graph_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-structures/graph.js */ "./src/data-structures/graph.js");



class KnightsTour extends _puzzle_module_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Knight's Tour Puzzle
     * 
     * Utilising Warnsdorff's Algorithm, this Puzzle Class does not find a goal
     * vertex that the User must navigate to, but instead, the User must navigate
     * around the Chessboard, exploring every single tile exactly once.
     * 
     * @param {number} x Initial X-Position
     * @param {number} y Initial Y-Position
     * @param {number} size Chessboard Size
     */
    constructor (x, y, size) {
        super(x, y, size);
    }

    /**
     * Puzzle Title Method
     * 
     * Returns the Title of the Puzzle.
     * 
     * @returns Puzzle Title
     */
    puzzleTitle () { return "Knight's Tour"; }
    
    /**
     * Puzzle Information Method
     * 
     * Message about the Puzzles Information.
     * 
     * @returns Puzzle Information
     */
    puzzleInfo () { 
        return "Given the 8 by 8 board, use the Select " +
            "Button to choose your Initial Tile. Then you " +
            "will need to move the Knight, according to the " +
            "rules of chess, such that it visits every tile " +
            "on the chessboard exactly once.\nBy clicking " +
            "the Select button again, the knight will automatically " +
            "move and visit each tile exactly once.\n" +
            "To reset, press start and select the Shortest Path puzzle.";
    }

    /**
     * End of Puzzle Information Method
     * 
     * When the Puzzle has been completed, either by the User or by the Algorithm, 
     * then a message should be presented to the User about how well the puzzle 
     * was completed.
     * 
     * @param {boolean} human Human or Algorithm
     * @param {number} steps Number of Steps to Complete
     * @param {Array} path Path taken
     * @returns End of Puzzle Inforamtion
     */
    endInfo (human, steps, path) { 
        // Toggle Generated
        this._generated = false;

        // Generate Main Message
        let msg = human ? 
            `Congratulations! You completed the puzzle ` +
            `in ${steps} steps!\nThe Algorithm's best ` +
            `was ${this._algorithm_path.length - 1} steps.` : 
            `Warnsdorff's Algorithm found a path in ` +
            `${steps - 1} steps.`;
            
        return msg;
    }

    /**
     * Generate Method
     * 
     * For the Knight's Tour Puzzle, Warnsdorff's Algorithm is implemented to 
     * find a full tour of the Chessboard, the algorithm can be broken down 
     * using Warnsdorff's Rule:
     *  1. Start from any initial position of the Knight on the board.
     *  2. Always move to an adjacent, unvisited tile with minimal degree (i.e.
     *     minimum number of unvisited adjacent tiles).
     * 
     * @param {number} x Root X-Position
     * @param {number} y Root Y-Position
     * @param {Graph} graph Graph of Chessboard
     */
    generate (x, y, graph) {
        // Get Root Vertex
        const root = graph.getVertex(x, y);

        // Set All Vertices Move to be 0
        for (let v of graph.vertices()) {
            v.move = 0;
            v.visited = false;
        }

        // Set Root to be 1st Move
        root.move = 1;
        root.visited = true;

        // Build Reverse Path
        let backwards = [root];

        // Setup Vertex to Cycle through Vertices
        let last = root.move;
        let aux = root;
        while (aux.move !== Math.pow(this._size, 2)) {
            // Find Neighbour with Fewest Neigbours
            let min = 1000000;
            let idx = -1;
            for (let i = 0; i < aux.neighbours.length; i++) {
                // Assign Neighbour
                let neighbour = graph.getVertex(
                    aux.neighbours[i].x, 
                    aux.neighbours[i].y
                );

                // Count Number of Unvisited Neighbours
                let count = 0;
                for (let n of neighbour.neighbours) {
                    if (!n.visited)
                        count++;
                }

                // Assign Least Accessible Neighbout
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
            backwards.push(aux);
        }

        // Reverse Backwards Path
        while (backwards.length > 0)
            this._algorithm_path.push(backwards.pop());

        // Toggle Generated
        this._generated = true;
    }
}

/***/ }),

/***/ "./src/knights-module/puzzles/puzzle-module.js":
/*!*****************************************************!*\
  !*** ./src/knights-module/puzzles/puzzle-module.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PuzzleModule)
/* harmony export */ });
/* harmony import */ var _data_structures_graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data-structures/graph.js */ "./src/data-structures/graph.js");


class PuzzleModule {
    /**
     * Puzzle Module
     * 
     * Base Class for the Shortest Path and Knight's Tour Puzzles.
     * 
     * @param {number} x Initial X-Position
     * @param {number} y Initial Y-Position
     * @param {number} size Size of Board
     */
    constructor (x, y, size) {
        // Initialise Variables;
        this._root = {x: x, y: y};
        this._size = size;
        this._generated = false;
        this._algorithm_path = [];
    }

    get root () { return this._root; }

    set root (dict) { this._root = dict; }
    
    get generated () { return this._generated; }

    set generated (bool) { this._generated = bool; }

    get algorithm () { return this._algorithm_path; }

    set algorithm (arr) { this._algorithm_path = arr; }

    /**
     * Puzzle Title Method
     * 
     * Returns the Title of the Puzzle.
     * 
     * @returns Puzzle Title
     */
    puzzleTitle () { return ""; }
    
    /**
     * Puzzle Information Method
     * 
     * Message about the Puzzles Information.
     * 
     * @returns Puzzle Information
     */
    puzzleInfo () { return ""; }

    /**
     * End of Puzzle Information Method
     * 
     * When the Puzzle has been completed, either by the User or by the Algorithm, 
     * then a message should be presented to the User about how well the puzzle 
     * was completed.
     * 
     * @param {boolean} human Human or Algorithm
     * @param {number} steps Number of Steps to Complete
     * @param {Array} path Path taken
     * @returns End of Puzzle Inforamtion
     */
    endInfo (human, steps, path) { return ""; }

    /**
     * Generate Method
     * 
     * For the given Puzzle Type, the Algorithm used for solving the Puzzle will 
     * be implemented to create the Path required for the Knight to complete the 
     * Puzzle.
     * 
     * @param {number} x Root X-Position
     * @param {number} y Root Y-Position
     * @param {Graph} graph Graph of Chessboard
     */
    generate (x, y, graph) {}

    /**
     * Reset Method
     * 
     * Reset Puzzle.
     */
    reset () {
        this._generated = false;
        this._algorithm_path = [];
    }
}

/***/ }),

/***/ "./src/knights-module/puzzles/shortest-path.js":
/*!*****************************************************!*\
  !*** ./src/knights-module/puzzles/shortest-path.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShortestPath)
/* harmony export */ });
/* harmony import */ var _puzzle_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puzzle-module.js */ "./src/knights-module/puzzles/puzzle-module.js");
/* harmony import */ var _data_structures_graph_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data-structures/graph.js */ "./src/data-structures/graph.js");
/* harmony import */ var _data_structures_queue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data-structures/queue.js */ "./src/data-structures/queue.js");




class ShortestPath extends _puzzle_module_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Shortest Path Puzzle
     * 
     * Utilising a modified Breadth-First Search Algorithm, this puzzle will
     * initially randomly generate a Goal Position where the User must attempt
     * to find the Shortest Path to, or use the Algorithm's Generated Shortest
     * Path to the Goal Position.
     * 
     * @param {number} x Initial X-Position
     * @param {number} y Initial Y-Position
     * @param {number} size Chessboard Size
     */
    constructor (x, y, size) { super(x, y, size); }

    get goal () { return this._goal; }

    set goal (dict) { this._goal = dict; }

    /**
     * Puzzle Title Method
     * 
     * Returns the Title of the Puzzle.
     * 
     * @returns Puzzle Title
     */
    puzzleTitle () { return "Shortest Path"; }
    
    /**
     * Puzzle Information Method
     * 
     * Message about the Puzzles Information.
     * 
     * @returns Puzzle Information
     */
    puzzleInfo () { 
        return "Use the Select Button to choose your " +
            "initial Tile. Once selected, a Goal tile will " +
            "become highlighted, and you have to try to reach " +
            "that tile in as few moves as possible.\nBy clicking " +
            "the Select button again, the knight will automatically " +
            "move to the Goal tile in the fewest possible moves.\n" +
            "To reset, press start and select the Shortest Path puzzle."; 
    }

    /**
     * End of Puzzle Information Method
     * 
     * When the Puzzle has been completed, either by the User or by the Algorithm, 
     * then a message should be presented to the User about how well the puzzle 
     * was completed.
     * 
     * @param {boolean} human Human or Algorithm
     * @param {number} steps Number of Steps to Complete
     * @param {Array} path Path taken
     * @returns End of Puzzle Inforamtion
     */
    endInfo (human, steps, path) { 
        // Toggle Generated
        this._generated = false;

        // Generate Main Message
        let msg = human ? 
            `Congratulations! You completed the puzzle ` +
            `in ${steps} steps!\nThe Algorithm's best ` +
            `was ${this._algorithm_path.length} steps.\n` +
            `Here's your path:\n` : 
            `The Breadth-First Search Algorithm found a ` +
            `path in ${steps} steps.\nHere's its path:\n`;
        
        // Add Path taken to Message
        for (let i = 0; i < path.length; i++) {
            msg += `(${path[i].y}, ${path[i].x})`;
            if (i < path.length - 1)
                msg += "=>";
        }
        return msg;
    }

    /**
     * Generate Method
     * 
     * For the Shortest Path Puzzle, a modified version of the Breadth-First 
     * Search Algorithm is utilised for finding the shortest path from the Root 
     * Vertex to the Goal Vertex, the latter of which is randomly generated.
     * 
     * @param {number} x Root X-Position
     * @param {number} y Root Y-Position
     * @param {Graph} graph Graph of Chessboard
     */
    generate (x, y, graph) {
        // Initialise Root & Goal Vertex
        this._root = {x: x, y: y};
        this._goal = {x: 0, y: 0};

        // Ensure Goal is not the Root Vertex
        while (true) {
            // Generate Random Numbers for Both Coordinates
            Object.keys(this._goal).forEach(coord => {
                this._goal[coord] = this.#random();
            });

            // Reject Positions that are Root
            if (this._goal.x !== x && this._goal.y !== y)
                break;
        }

        // Update Graph so All Vertices are Unvisited
        for (let v of graph.vertices())
            v.visited = false;

        // Setup Root and Goal Vertex Variables
        const root = graph.getVertex(x, y);
        const goal = graph.getVertex(this._goal.x, this._goal.y);
        root.visited = true;

        // Setup Parents Array and Queue
        let parents = [];
        const queue = new _data_structures_queue_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        queue.enqueue(root);

        // Visit All Neighbours
        while (!queue.isEmpty()) {
            let vertex = queue.dequeue();

            // Break out if Goal is Found
            if (vertex.sameVertex(goal))
                break;

            // Otherwise Enqueue Neighbours
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
        this._algorithm_path.push(goal);
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
            this._algorithm_path.push(current);
        }

        // Toggle Generated
        this._generated = true;
    }

    /**
     * Random Method
     * 
     * Generates a random number between 0 and the size of the Chessboard.
     * 
     * @returns Random Number between 0 and Board Size
     */
    #random () { return Math.floor(Math.random() * this._size); }
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

/***/ "./src/fonts/Gothica-Book.ttf":
/*!************************************!*\
  !*** ./src/fonts/Gothica-Book.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b31ddefd8f9b01b38f96.ttf";

/***/ }),

/***/ "./src/fonts/dogica.ttf":
/*!******************************!*\
  !*** ./src/fonts/dogica.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "214cd23097c4c02eb9bd.ttf";

/***/ }),

/***/ "./src/fonts/dogicabold.ttf":
/*!**********************************!*\
  !*** ./src/fonts/dogicabold.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "942b4ec9a276f5d55516.ttf";

/***/ }),

/***/ "./src/knights-module/images/knight-fantasy.png":
/*!******************************************************!*\
  !*** ./src/knights-module/images/knight-fantasy.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b1d8dfdddb9a58849b7.png";

/***/ }),

/***/ "./src/knights-module/images/knight-future.png":
/*!*****************************************************!*\
  !*** ./src/knights-module/images/knight-future.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2490cf23c37f5a686ce.png";

/***/ }),

/***/ "./src/knights-module/images/knight-neon.png":
/*!***************************************************!*\
  !*** ./src/knights-module/images/knight-neon.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d88d890518e70e2d54a6.png";

/***/ }),

/***/ "./src/knights-module/images/knight-retro.png":
/*!****************************************************!*\
  !*** ./src/knights-module/images/knight-retro.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad44bd82292bf45a2863.png";

/***/ }),

/***/ "./src/knights-module/images/knight-terminal.png":
/*!*******************************************************!*\
  !*** ./src/knights-module/images/knight-terminal.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "503a10804cdc64ac01d0.png";

/***/ }),

/***/ "./src/knights-module/images/knight.png":
/*!**********************************************!*\
  !*** ./src/knights-module/images/knight.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d38136d2be31b56f4cff.png";

/***/ }),

/***/ "./src/knights-module/data/menu.json5":
/*!********************************************!*\
  !*** ./src/knights-module/data/menu.json5 ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"key":"Main","subs":[{"key":"Game","subs":[{"key":"Shortest-Path","subs":[]},{"key":"Knights-Tour","subs":[]}]},{"key":"Theme","subs":[{"key":"Normal","subs":[]},{"key":"Retro","subs":[]},{"key":"Future","subs":[]},{"key":"Neon","subs":[]},{"key":"Terminal","subs":[]},{"key":"Fantasy","subs":[]}]},{"key":"Controls","subs":[{"key":"Information","subs":[]}]}]}');

/***/ }),

/***/ "./src/knights-module/data/select.json5":
/*!**********************************************!*\
  !*** ./src/knights-module/data/select.json5 ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"game":{"description":"Please choose a game.","categories":[{"key":"Shortest-Path"},{"key":"Knights-Tour"}]}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/knights-module/knights-game.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxtQ0FBbUMsTUFBTSxJQUFJLE1BQU07QUFDbkQ7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixNQUFNLElBQUksTUFBTTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFh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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS9ib2FyZC1zdHlsaW5nLmNzcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3BvcC11cC1tb2R1bGUvcG9wLXVwLXN0eWxpbmcuY3NzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9ib2FyZC1tb2R1bGUvYm9hcmQtc3R5bGluZy5jc3M/MTcyNCIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzP2QzNDIiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcG9wLXVwLW1vZHVsZS9wb3AtdXAtc3R5bGluZy5jc3M/Zjc0NSIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9lZGdlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvcXVldWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3ZlcnRleC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2dhbWUtaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS9ib2FyZC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9ib2FyZC1tb2R1bGUva25pZ2h0LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS90aWxlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2tuaWdodHMtZ2FtZS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9rbmlnaHRzLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvcHV6emxlcy9rbmlnaHRzLXRvdXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvcHV6emxlcy9wdXp6bGUtbW9kdWxlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL3B1enpsZXMvc2hvcnRlc3QtcGF0aC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL2Vycm9yLWJveC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL2luZm8tYm94LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3BvcC11cC1tb2R1bGUvbWVudS1iYXNlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3BvcC11cC1tb2R1bGUvbWVudS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL3BvcC11cC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9wb3AtdXAtbW9kdWxlL3NlbGVjdC1ib3guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jaGVzc2JvYXJkIHsgXG4gICAgZm9udC1mYW1pbHk6IFwiR290aGljYVwiO1xuICAgIGRpc3BsYXk6IGdyaWQ7IFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW51bS1jb2xvdXIpO1xufVxuXG5bY2xhc3MqPVwiLXRpbGVcIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogdmFyKC0tbnVtLWNvbG91cik7XG59XG5cbltjbGFzcyo9XCItdGlsZVwiXSA+IC5rbmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4jY3Vyc29yLXRpbGUgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXJzb3IpOyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYW5pbWF0aW9uOiBibGluayAxLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5ibGFjay10aWxlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spOyB9XG5cbi5ibGFjay10aWxlLnNlbGVjdGVkIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stc2VsZWN0ZWQpOyB9XG5cbi53aGl0ZS10aWxlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XG5cbi53aGl0ZS10aWxlLnNlbGVjdGVkIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2VsZWN0ZWQpOyB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMva25pZ2h0cy1tb2R1bGUvYm9hcmQtbW9kdWxlL2JvYXJkLXN0eWxpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtBQUNkOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUE4QjtJQUM5Qix5QkFBeUI7QUFDN0I7O0FBRUEsY0FBYyw4QkFBOEIsRUFBRTs7QUFFOUMsdUJBQXVCLHVDQUF1QyxFQUFFOztBQUVoRSxjQUFjLDhCQUE4QixFQUFFOztBQUU5Qyx1QkFBdUIsdUNBQXVDLEVBQUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNoZXNzYm9hcmQgeyBcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHb3RoaWNhXFxcIjtcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW51bS1jb2xvdXIpO1xcbn1cXG5cXG5bY2xhc3MqPVxcXCItdGlsZVxcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogdmFyKC0tbnVtLWNvbG91cik7XFxufVxcblxcbltjbGFzcyo9XFxcIi10aWxlXFxcIl0gPiAua25pZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbiNjdXJzb3ItdGlsZSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXJzb3IpOyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMS41cyBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmJsYWNrLXRpbGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7IH1cXG5cXG4uYmxhY2stdGlsZS5zZWxlY3RlZCB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLXNlbGVjdGVkKTsgfVxcblxcbi53aGl0ZS10aWxlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuXFxuLndoaXRlLXRpbGUuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zZWxlY3RlZCk7IH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0dvdGhpY2EtQm9vay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9kb2dpY2EudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvZG9naWNhYm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0td2hpdGU6ICNmZGZmZmM7XG4gICAgLS1ibGFjazogIzAyMDEwMDtcbn1cblxuOnJvb3Qubm9ybWFsIHtcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjODdkM2VkO1xuICAgIC0tYmxhY2stc2VsZWN0ZWQ6ICMyMjc3YTk7XG4gICAgLS1zY3JlZW46ICMyMzU3ODk7XG4gICAgLS1lcnJvci1zY3JlZW46ICNmNjk0OTM7XG4gICAgLS1jdXJzb3I6ICNlOGM1NDc7XG4gICAgLS1udW0tY29sb3VyOiAjZTViODBiO1xuICAgIC0tdGV4dC1jb2xvdXI6ICMwMjAxMDA7XG59XG5cbjpyb290LnJldHJvIHtcbiAgICAtLXdoaXRlOiAjYWFhYWFhO1xuICAgIC0tYmxhY2s6ICMwZjM4MGY7XG4gICAgLS13aGl0ZS1zZWxlY3RlZDogIzliYmMwZjtcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiAjMzA2MjMwO1xuICAgIC0tc2NyZWVuOiAjYWFhYWFhO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjZjY5NDkzO1xuICAgIC0tY3Vyc29yOiAjOGJhYzBmO1xuICAgIC0tbnVtLWNvbG91cjogI2FhYWFhYTtcbiAgICAtLXRleHQtY29sb3VyOiAjMGYzODBmO1xufVxuXG46cm9vdC5mdXR1cmUge1xuICAgIC0td2hpdGU6ICNkMWU4ZTI7XG4gICAgLS1ibGFjazogIzJjMzUzMTtcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjZmZjYjlhOyBcbiAgICAtLWJsYWNrLXNlbGVjdDogI2JkNWUyNztcbiAgICAtLXNjcmVlbjogIzExNjQ2NjtcbiAgICAtLWVycm9yLXNjcmVlbjogI2ZmOTkwMDtcbiAgICAtLWN1cnNvcjogI2ZmY2I5YTtcbiAgICAtLW51bS1jb2xvdXI6ICMxMTY0NjY7XG4gICAgLS10ZXh0LWNvbG91cjogIzJjMzUzMTtcbn1cblxuOnJvb3QubmVvbiB7XG4gICAgLS13aGl0ZTogIzBhYmRjNjtcbiAgICAtLWJsYWNrOiAjMTMzZTdjO1xuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICMwMDc5N2U7IFxuICAgIC0tYmxhY2stc2VsZWN0OiAjMzA3Y2JmO1xuICAgIC0tc2NyZWVuOiAjMDkxODMzO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjZTdlZTRmO1xuICAgIC0tY3Vyc29yOiAjZWEwMGQ5O1xuICAgIC0tbnVtLWNvbG91cjogIzcxMWM5MTtcbiAgICAtLXRleHQtY29sb3VyOiAjZWEwMGQ5O1xufVxuXG46cm9vdC50ZXJtaW5hbCB7XG4gICAgLS13aGl0ZTogY3lhbjtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiBibGFjaztcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiBjeWFuO1xuICAgIC0tc2NyZWVuOiBibGFjaztcbiAgICAtLWVycm9yLXNjcmVlbjogYmx1ZTtcbiAgICAtLWN1cnNvcjogZ3JlZW47XG4gICAgLS1udW0tY29sb3VyOiBncmVlbjtcbiAgICAtLXRleHQtY29sb3VyOiBncmVlbjtcbn1cblxuOnJvb3QuZmFudGFzeSB7XG4gICAgLS13aGl0ZTogI2U0OTM0YztcbiAgICAtLWJsYWNrOiAjNTQyYjI5O1xuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICNmMWI4NzI7IFxuICAgIC0tYmxhY2stc2VsZWN0OiAjNDMxZTFmO1xuICAgIC0tc2NyZWVuOiAjOWE5YThlO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjOTYwMDE4O1xuICAgIC0tY3Vyc29yOiAjOWM2YjY1O1xuICAgIC0tbnVtLWNvbG91cjogIzdjMTQyYztcbiAgICAtLXRleHQtY29sb3VyOiAjMGExNTgzO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJHb3RoaWNhXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJEb2dpY2EgQm9sZFwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4ua25pZ2h0cy1nYW1lLW1vZHVsZSB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gICAgMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pOyB9XG4gICAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTsgfVxuICAgIDEwMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pOyB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMva25pZ2h0cy1tb2R1bGUvZ2FtZS1zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBK0I7QUFDbkM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNENBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksS0FBSyxVQUFVLEVBQUU7SUFDakIsTUFBTSxVQUFVLEVBQUU7SUFDbEIsT0FBTyxVQUFVLEVBQUU7QUFDdkI7O0FBRUE7SUFDSSxLQUFLLCtCQUErQixFQUFFO0lBQ3RDLE1BQU0sK0JBQStCLEVBQUU7SUFDdkMsT0FBTywrQkFBK0IsRUFBRTtBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0td2hpdGU6ICNmZGZmZmM7XFxuICAgIC0tYmxhY2s6ICMwMjAxMDA7XFxufVxcblxcbjpyb290Lm5vcm1hbCB7XFxuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICM4N2QzZWQ7XFxuICAgIC0tYmxhY2stc2VsZWN0ZWQ6ICMyMjc3YTk7XFxuICAgIC0tc2NyZWVuOiAjMjM1Nzg5O1xcbiAgICAtLWVycm9yLXNjcmVlbjogI2Y2OTQ5MztcXG4gICAgLS1jdXJzb3I6ICNlOGM1NDc7XFxuICAgIC0tbnVtLWNvbG91cjogI2U1YjgwYjtcXG4gICAgLS10ZXh0LWNvbG91cjogIzAyMDEwMDtcXG59XFxuXFxuOnJvb3QucmV0cm8ge1xcbiAgICAtLXdoaXRlOiAjYWFhYWFhO1xcbiAgICAtLWJsYWNrOiAjMGYzODBmO1xcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjOWJiYzBmO1xcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiAjMzA2MjMwO1xcbiAgICAtLXNjcmVlbjogI2FhYWFhYTtcXG4gICAgLS1lcnJvci1zY3JlZW46ICNmNjk0OTM7XFxuICAgIC0tY3Vyc29yOiAjOGJhYzBmO1xcbiAgICAtLW51bS1jb2xvdXI6ICNhYWFhYWE7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMwZjM4MGY7XFxufVxcblxcbjpyb290LmZ1dHVyZSB7XFxuICAgIC0td2hpdGU6ICNkMWU4ZTI7XFxuICAgIC0tYmxhY2s6ICMyYzM1MzE7XFxuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICNmZmNiOWE7IFxcbiAgICAtLWJsYWNrLXNlbGVjdDogI2JkNWUyNztcXG4gICAgLS1zY3JlZW46ICMxMTY0NjY7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjZmY5OTAwO1xcbiAgICAtLWN1cnNvcjogI2ZmY2I5YTtcXG4gICAgLS1udW0tY29sb3VyOiAjMTE2NDY2O1xcbiAgICAtLXRleHQtY29sb3VyOiAjMmMzNTMxO1xcbn1cXG5cXG46cm9vdC5uZW9uIHtcXG4gICAgLS13aGl0ZTogIzBhYmRjNjtcXG4gICAgLS1ibGFjazogIzEzM2U3YztcXG4gICAgLS13aGl0ZS1zZWxlY3RlZDogIzAwNzk3ZTsgXFxuICAgIC0tYmxhY2stc2VsZWN0OiAjMzA3Y2JmO1xcbiAgICAtLXNjcmVlbjogIzA5MTgzMztcXG4gICAgLS1lcnJvci1zY3JlZW46ICNlN2VlNGY7XFxuICAgIC0tY3Vyc29yOiAjZWEwMGQ5O1xcbiAgICAtLW51bS1jb2xvdXI6ICM3MTFjOTE7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICNlYTAwZDk7XFxufVxcblxcbjpyb290LnRlcm1pbmFsIHtcXG4gICAgLS13aGl0ZTogY3lhbjtcXG4gICAgLS1ibGFjazogYmxhY2s7XFxuICAgIC0tYmxhY2stc2VsZWN0ZWQ6IGJsYWNrO1xcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiBjeWFuO1xcbiAgICAtLXNjcmVlbjogYmxhY2s7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiBibHVlO1xcbiAgICAtLWN1cnNvcjogZ3JlZW47XFxuICAgIC0tbnVtLWNvbG91cjogZ3JlZW47XFxuICAgIC0tdGV4dC1jb2xvdXI6IGdyZWVuO1xcbn1cXG5cXG46cm9vdC5mYW50YXN5IHtcXG4gICAgLS13aGl0ZTogI2U0OTM0YztcXG4gICAgLS1ibGFjazogIzU0MmIyOTtcXG4gICAgLS13aGl0ZS1zZWxlY3RlZDogI2YxYjg3MjsgXFxuICAgIC0tYmxhY2stc2VsZWN0OiAjNDMxZTFmO1xcbiAgICAtLXNjcmVlbjogIzlhOWE4ZTtcXG4gICAgLS1lcnJvci1zY3JlZW46ICM5NjAwMTg7XFxuICAgIC0tY3Vyc29yOiAjOWM2YjY1O1xcbiAgICAtLW51bS1jb2xvdXI6ICM3YzE0MmM7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMwYTE1ODM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkdvdGhpY2FcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvR290aGljYS1Cb29rLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvZG9naWNhLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2EgQm9sZFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9kb2dpY2Fib2xkLnR0ZlxcXCIpO1xcbn1cXG5cXG4ua25pZ2h0cy1nYW1lLW1vZHVsZSB7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgICAwJSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7IH1cXG4gICAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTsgfVxcbiAgICAxMDAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTsgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbmZvLWNvbXBvbmVudHMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtO1xufVxuXG4uaW5mby1jb21wb25lbnRzID4gZGl2IHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTsgfVxuXG4ubWVudS1jb250YWluZXIsXG4uc2VsZWN0LWNvbnRhaW5lcixcbi5pbmZvcm1hdGlvbi1jb250YWluZXIgeyBmb250LWZhbWlseTogXCJEb2dpY2FcIjsgfVxuXG4ubWVudS1ib3gsXG4uc2VsZWN0LWJveCxcbi5pbmZvcm1hdGlvbi1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmluZm9ybWF0aW9uLWJveCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi8qIC5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDAuNHJlbTsgfSAqL1xuXG4ubWVudS10aXRsZSxcbi5zZWxlY3QtZGVzY3JpcHRpb24sXG4uaW5mb3JtYXRpb24tdGl0bGUsXG4uZXJyb3ItdGl0bGUgeyBmb250LWZhbWlseTogXCJEb2dpY2EgQm9sZFwiOyB9XG5cbi5tZW51LWJveCA+IGRpdixcbi5zZWxlY3QtYm94ID4gZGl2LFxuLmluZm9ybWF0aW9uLWJveCA+IGRpdiB7IHRleHQtYWxpZ246IHN0YXJ0OyB9XG5cbi5tZW51LWJveCA+IGRpdi5jdXJzb3IsXG4uc2VsZWN0LWJveCA+IGRpdi5jdXJzb3Ige1xuICAgIGFuaW1hdGlvbjogZmFkZSAxLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5lcnJvci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVycm9yLWJveCxcbi5zZWxlY3QtYm94LFxuLmluZm9ybWF0aW9uLWJveCxcbi5tZW51LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgYm9yZGVyOiAzcHggdmFyKC0tdGV4dC1jb2xvdXIpIHNvbGlkO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVycm9yLWJveCB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhIEJvbGRcIjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLXNjcmVlbik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQge1xuICAgIHotaW5kZXg6IDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIG9wYWNpdHk6IDAuNztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3AtdXAtbW9kdWxlL3BvcC11cC1zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBLHlCQUF5QixxQ0FBcUMsRUFBRTs7QUFFaEU7O3lCQUV5QixxQkFBcUIsRUFBRTs7QUFFaEQ7OztJQUdJLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUEseUNBQXlDOztBQUV6Qzs7O2VBR2UsMEJBQTBCLEVBQUU7O0FBRTNDOzt5QkFFeUIsaUJBQWlCLEVBQUU7O0FBRTVDOztJQUVJLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmluZm8tY29tcG9uZW50cyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uaW5mby1jb21wb25lbnRzID4gZGl2IHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTsgfVxcblxcbi5tZW51LWNvbnRhaW5lcixcXG4uc2VsZWN0LWNvbnRhaW5lcixcXG4uaW5mb3JtYXRpb24tY29udGFpbmVyIHsgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiOyB9XFxuXFxuLm1lbnUtYm94LFxcbi5zZWxlY3QtYm94LFxcbi5pbmZvcm1hdGlvbi1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmluZm9ybWF0aW9uLWJveCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi8qIC5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDAuNHJlbTsgfSAqL1xcblxcbi5tZW51LXRpdGxlLFxcbi5zZWxlY3QtZGVzY3JpcHRpb24sXFxuLmluZm9ybWF0aW9uLXRpdGxlLFxcbi5lcnJvci10aXRsZSB7IGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhIEJvbGRcXFwiOyB9XFxuXFxuLm1lbnUtYm94ID4gZGl2LFxcbi5zZWxlY3QtYm94ID4gZGl2LFxcbi5pbmZvcm1hdGlvbi1ib3ggPiBkaXYgeyB0ZXh0LWFsaWduOiBzdGFydDsgfVxcblxcbi5tZW51LWJveCA+IGRpdi5jdXJzb3IsXFxuLnNlbGVjdC1ib3ggPiBkaXYuY3Vyc29yIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlIDEuNXMgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5lcnJvci1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5lcnJvci1ib3gsXFxuLnNlbGVjdC1ib3gsXFxuLmluZm9ybWF0aW9uLWJveCxcXG4ubWVudS1ib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIGJvcmRlcjogM3B4IHZhcigtLXRleHQtY29sb3VyKSBzb2xpZDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXJyb3ItYm94IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2EgQm9sZFxcXCI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1zY3JlZW4pO1xcbn1cXG5cXG4uYmx1cnJlZC1iYWNrZ3JvdW5kIHtcXG4gICAgei1pbmRleDogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC1zdHlsaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvYXJkLXN0eWxpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtc3R5bGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXN0eWxpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcC11cC1zdHlsaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcC11cC1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRnZSB7XG4gICAgLyoqXG4gICAgICogRWRnZSBDbGFzc1xuICAgICAqIFxuICAgICAqIERhdGEgc3RydWN0dXJlIHRoYXQgY29ubmVjdHMgdHdvIFZlcnRpY2VzIG9mIHRoZSBHcmFwaCBEYXRhIFN0cnVjdHVyZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdSBTdGFydGluZyBWZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBFbmRpbmcgVmVydGV4XG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHUsIHYpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godSk7XG4gICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2KTtcbiAgICB9XG5cbiAgICBnZXQgdmVydGljZXMgKCkgeyByZXR1cm4gdGhpcy5fdmVydGljZXM7IH1cblxuICAgIHNldCB2ZXJ0aWNlcyAoYXJyKSB7IHRoaXMuX3ZlcnRpY2VzID0gYXJyOyB9XG5cbiAgICAvKipcbiAgICAgKiBTYW1lIEVkZ2UgTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBFZGdlIGlzIHRoZSBzYW1lIGVkZ2UgYXMgdGhpcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGUgRWRnZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhleSBhcmUgdGhlIFNhbWUgRWRnZVxuICAgICAqL1xuICAgIHNhbWVFZGdlIChlKSB7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgYm90aCBWZXJ0aWNlcyBhcmUgSWRlbnRpY2FsXG4gICAgICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgICAgICBsZXQgc2Vjb25kID0gZmFsc2U7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIFZlcnRpY2VzIG9uIEVkZ2VcbiAgICAgICAgZS52ZXJ0aWNlcy5mb3JFYWNoKHUgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXNbMF0uc2FtZVZlcnRleCh1KSB8fCBcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzFdLnNhbWVWZXJ0ZXgodSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmICghZmlyc3QpXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFzIFZlcnRleCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgb25lIG9mIHRoZSBWZXJ0aWNlcyB0aGF0IG1ha2VzIHVwIHRoZSBFZGdlIGNvbnRhaW5zIHRoZSBkZXNpcmVkIFxuICAgICAqIFZlcnRleCwgYW5kIHJldHVybnMgdHJ1ZSBpZiBpdCBkb2VzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IFZlcnRleFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgRWRnZSBDb25uZWN0cyBWZXJ0ZXhcbiAgICAgKi9cbiAgICBoYXNWZXJ0ZXggKHYpIHtcbiAgICAgICAgLy8gQ2hlY2sgQm90aCBWZXJ0aWNlcyBvbiBFZGdlXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2godmVydGV4ID0+IHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIFZlcnRleCBpcyBhIE1hdGNoXG4gICAgICAgICAgICBpZiAodi5zYW1lVmVydGV4KHZlcnRleCkpXG4gICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFzIFZlcnRpY2VzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgcGFpciBvZiBnaXZlbiBWZXJ0aWNlcyBhcmUgY29ubmVjdGVkICBieSB0aGUgRWRnZSwgYW5kIFxuICAgICAqIHJldHVybnMgdHJ1ZSBpZiB0aGV5IGFyZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdSBPbmUgVmVydGV4XG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgT3RoZXIgVmVydGV4XG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBib3RoIFZlcnRpY2VzIGFyZSBjb25uZWN0ZWQgYnkgRWRnZVxuICAgICAqL1xuICAgIGhhc1ZlcnRpY2VzICh1LCB2KSB7XG4gICAgICAgIC8vIENoZWNrIEJvdGggVmVydGljZXMgb24gRWRlZ2VcbiAgICAgICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIGxldCBzZWNvbmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKHZlcnRleCA9PiB7XG4gICAgICAgICAgICAvLyBFbnN1cmUgQm90aCBhcmUgQWNjb3VudGVkIEZvclxuICAgICAgICAgICAgaWYgKHUuc2FtZVZlcnRleCh2ZXJ0ZXgpKVxuICAgICAgICAgICAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh2LnNhbWVWZXJ0ZXgodmVydGV4KSlcbiAgICAgICAgICAgICAgICBzZWNvbmQgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kO1xuICAgIH1cbn0iLCJpbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlLmpzXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCB7XG4gICAgLyoqXG4gICAgICogR3JhcGggQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgR3JhcGggRGF0YSBTdHJ1Y3R1cmUsIHdoaWNoIHV0aWxpc2VzIHRoZSBWZXJ0ZXggYW5kXG4gICAgICogRWRnZSBDbGFzc2VzIHRoYXQgYXJlIHVzZWQgdG8gcmVwcmVzZW50IHRoZSBkYXRhLCBhbmQgdG8gY29ubmVjdCB0aGUgZGF0YVxuICAgICAqIHRvIG9uZSBhbm90aGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fdmVydGljZXMgPSBbXTsgXG4gICAgICAgIHRoaXMuX2VkZ2VzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljZXMgSXRlcmF0b3IgTWV0aG9kXG4gICAgICogXG4gICAgICogTWV0aG9kIHRoYXQgY2FuIGJlIHVzZWQgaW4gbG9vcHMgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBHcmFwaCdzIFZlcnRpY2VzLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIEl0ZXJhdG9yIG9mIFZlcnRpY2VzXG4gICAgICovXG4gICAgdmVydGljZXMgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5fdmVydGljZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdGhpcy5fdmVydGljZXNbaSsrXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVkZ2VzIEl0ZXJhdG9yIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIGluIGxvb3BzIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgR3JhcGgncyBFZGdlcy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBJdGVyYXRvciBvZiBFZGdlc1xuICAgICAqL1xuICAgIGVkZ2VzICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IHRoaXMuX2VkZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHRoaXMuX2VkZ2VzW2krK10sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgVmVydGljZXMgTWV0aG9kXG4gICAgICogXG4gICAgICogR2V0IHRoZSBOdW1iZXIgb2YgVmVydGljZXMgd2l0aGluIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgVmVydGljZXNcbiAgICAgKi9cbiAgICBudW1WZXJ0aWNlcyAoKSB7IHJldHVybiB0aGlzLl92ZXJ0aWNlcy5sZW5ndGg7IH1cblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBFZGdlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBHZXQgdGhlIE51bWJlciBvZiBFZGdlcyB3aXRoaW4gdGhlIEdyYXBoLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIE51bWJlciBvZiBFZGdlc1xuICAgICAqL1xuICAgIG51bUVkZ2VzICgpIHsgcmV0dXJuIHRoaXMuX2VkZ2VzLmxlbmd0aDsgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IFZlcnRleCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgYSBnaXZlbiAoeCwgeSkgY29vcmRpbmF0ZSwgdGhpcyBtZXRob2Qgd2lsbCBjcmVhdGUgYSBuZXcgVmVydGV4IGZvclxuICAgICAqIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBpbnNlcnRWZXJ0ZXggKHgsIHkpIHsgdGhpcy5fdmVydGljZXMucHVzaChuZXcgVmVydGV4KHgsIHkpKTsgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIFZlcnRleCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgYSBnaXZlbiBWZXJ0ZXgsIGlmIGl0IGlzIGluIHRoZSBHcmFwaCwgYW5kIGlmIGl0IGhhcyBhbnkgRWRnZXMgXG4gICAgICogYXNzb2NpYXRlZCB3aXRoIGl0LCB0aGVuIHRob3NlIEVkZ2VzIHdvdWxkIGJlIHJlbW92ZWQsIGFuZCBmaW5hbGx5IHRoZSBcbiAgICAgKiBWZXJ0ZXggd291bGQgdGhlbiBiZSByZW1vdmVkIGZyb20gdGhlIEdyYXBoLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IFZlcnRleFxuICAgICAqL1xuICAgIHJlbW92ZVZlcnRleCAodikge1xuICAgICAgICAvLyBDaGVjayBpZiBWZXJ0ZXggaXMgQ29ubmVjdGVkIHRvIE90aGVyIFZlcnRpY2VzXG4gICAgICAgIGZvciAobGV0IGVkZ2Ugb2YgdGhpcy5lZGdlcygpKSB7XG4gICAgICAgICAgICBpZiAoZWRnZS5oYXNWZXJ0ZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgTmVpZ2hib3VyIFJlZmVyZW5jZXMgZm9yIFZlcnRpaWNlc1xuICAgICAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMF0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMV0pO1xuICAgICAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMV0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMF0pO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIEVkZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVkZ2UoZWRnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIFZlcnRleCBpbiBBcnJheVxuICAgICAgICBpZHggPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl92ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHYuc2FtZVZlcnRleCh0aGlzLl92ZXJ0aWNlc1tpXSkpXG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBWZXJ0ZXggaWYgRm91bmRcbiAgICAgICAgaWYgKGlkeCA+PSAwKVxuICAgICAgICAgICAgdGhpcy5fdmVydGljZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgVmVydGljZXMgTWV0aG9kXG4gICAgICogXG4gICAgICogQ2xlYXJzIGFsbCB2ZXJ0aWNlcyBpbiB0aGUgR3JhcGguXG4gICAgICovXG4gICAgY2xlYXJWZXJ0aWNlcyAoKSB7XG4gICAgICAgIGRvIHsgdGhpcy5fdmVydGljZXMucG9wKCkgfSB3aGlsZSAodGhpcy5fdmVydGljZXMubGVuZ3RoID4gMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFZlcnRleCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgYSBnaXZlbiAoeCwgeSkgY29vcmRpbmF0ZSwgdGhpcyBtZXRob2Qgd2lsbCBzZWFyY2ggaXRzIGtub3duIHZlcnRpY2VzXG4gICAgICogYW5kIHJldHVybiB0aGUgdmVydGV4IHRoYXQgY29ycmVzcG9uZHMgd2l0aCB0aGUgY29vcmRpbmF0ZSwgb3IgbnVsbCBpZiBpdFxuICAgICAqIGRvZXMgbm90IGV4aXN0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqIEByZXR1cm5zIENvcnJlc3BvbmRpbmcgVmVydGV4XG4gICAgICovXG4gICAgZ2V0VmVydGV4ICh4LCB5KSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBWZXJ0aWNlc1xuICAgICAgICBsZXQgdSA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IHZlcnRleCBvZiB0aGlzLnZlcnRpY2VzKCkpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgVmVydGV4IENvb3JkaW5hdGVzIG1hdGNoIERlc2lyZWRcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueCA9PT0geCAmJiB2ZXJ0ZXgueSA9PT0geSlcbiAgICAgICAgICAgICAgICB1ID0gdmVydGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IEVkZ2UgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gcGFpciBvZiBWZXJ0aWNlcywgdGhpcyBtZXRob2Qgd2lsbCBjcmVhdGUgYSBuZXcgRWRnZSBmb3IgdGhlIFxuICAgICAqIHBhaXIsIGlmIHRoZXJlIGlzbid0IG9uZSBhbHJlYWR5LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB1IFN0YXJ0aW5nIFZlcnRleFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IEVuZGluZyBWZXJ0ZXhcbiAgICAgKi9cbiAgICBpbnNlcnRFZGdlICh1LCB2KSB7XG4gICAgICAgIC8vIEVuc3VyZSBubyBFZGdlIHdpdGggVmVydGljZXMgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgaWYgKHRoaXMuZ2V0RWRnZSh1LCB2KSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgTmV3IEVkZ2UgZm9yIFZlcnRpY2VzXG4gICAgICAgICAgICBjb25zdCBlZGdlID0gbmV3IEVkZ2UodSwgdik7XG4gICAgICAgICAgICB1Lmluc2VydE5laWdoYm91cih2KTtcbiAgICAgICAgICAgIHYuaW5zZXJ0TmVpZ2hib3VyKHUpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdG8gRWRnZXMgQXJyYXlcbiAgICAgICAgICAgIHRoaXMuX2VkZ2VzLnB1c2goZWRnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgRWRnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgYSBnaXZlbiBFZGdlLCBpZiBpdCBpcyBpbiB0aGUgR3JhcGgsIHRoZSBFZGdlIHdvdWxkIHRoZW4gYmUgcmVtb3ZlZFxuICAgICAqIGZyb20gdGhlIEdyYXBoLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7RWRnZX0gZSBFZGdlXG4gICAgICovXG4gICAgcmVtb3ZlRWRnZSAoZSkge1xuICAgICAgICAvLyBDaGVjayBpZiBFZGdlIGV4aXN0cyBpbiBHcmFwaFxuICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lZGdlc1tpXS5zYW1lRWRnZShlKSlcbiAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGlmIEVkZ2UgZXhpc3RzXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIE5laWdoYm91ciBSZWZlcmVuY2VzIGZvciBWZXJ0aWNlc1xuICAgICAgICAgICAgbGV0IGVkZ2UgPSB0aGlzLl9lZGdlc1tpZHhdO1xuICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1swXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1sxXSk7XG4gICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzFdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzBdKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIEVkZ2VcbiAgICAgICAgICAgIHRoaXMuX2VkZ2VzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgRWRnZXNcbiAgICAgKiBcbiAgICAgKiBSZW1vdmVzIGFsbCBlZGdlcyBpbiB0aGUgR3JhcGguXG4gICAgICovXG4gICAgY2xlYXJFZGdlcyAoKSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBlZGdlc1xuICAgICAgICBmb3IgKGxldCBlZGdlIG9mIHRoaXMuZWRnZXMoKSkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIFJlZmVyZW5jZXMgdG8gTmVpZ2hib3VyIFZlcnRpY2VzXG4gICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzBdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzFdKTtcbiAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMV0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMF0pO1xuXG4gICAgICAgICAgICB0aGlzLl9lZGdlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBFZGdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgZ2l2ZW4gcGFpciBvZiBWZXJ0aWNlcywgdGhlIG1ldGhvZCB3aWxsIGl0ZXJhdGUgdGhyb3VnaCB0aGUga25vd25cbiAgICAgKiBFZGdlcyBvZiB0aGUgR3JhcGggYW5kIHJldHVybiB0aGUgRWRnZSB0aGF0IGNvbm5lY3RzIHRoZW0sIG9yIHJldHVybnMgXG4gICAgICogbnVsbC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdSBPbmUgVmVydGV4XG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgT3RoZXIgVmVydGV4XG4gICAgICogQHJldHVybnMgRWRnZSB0aGF0IENvbm5lY3RzIHRoZSB0d28gVmVydGljZXNcbiAgICAgKi9cbiAgICBnZXRFZGdlICh1LCB2KSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBFZGdlc1xuICAgICAgICBsZXQgZSA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGVkZ2Ugb2YgdGhpcy5lZGdlcygpKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBFZGdlIGhhcyBib3RoIFZlcnRpY2VzXG4gICAgICAgICAgICBpZiAoZWRnZS5oYXNWZXJ0aWNlcyh1LCB2KSlcbiAgICAgICAgICAgICAgICBlID0gZWRnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XG4gICAgLyoqXG4gICAgICogUXVldWUgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgUXVldWUgRGF0YSBTdHJ1Y3R1cmUuIFRoZSBRdWV1ZSBEYXRhIFN0cnVjdHVyZVxuICAgICAqIHV0aWxpc2VzIHRoZSBGaXJzdC1JbiwgRmlyc3QtT3V0IHByaW5jaXBsZSwgZWxlbWVudHMgYWRkZWQgdG8gdGhlIFF1ZXVlIFxuICAgICAqIHdpbGwgYmUgcHVzaGVkIHRvIHRoZSBiYWNrIG9mIHRoZSBBcnJheSwgYW5kIG9ubHkgdGhlIGZpcnN0IGVsZW1lbnQgd2lsbFxuICAgICAqIGJlIHJlbW92ZWQgZWFjaCB0aW1lIGRlcXVldWUgaXMgY2FsbGVkLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaXplIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgUXVldWUuXG4gICAgICogXG4gICAgICogQHJldHVybnMgU2l6ZSBvZiB0aGUgUXVldWVcbiAgICAgKi9cbiAgICBzaXplICgpIHsgcmV0dXJuIHRoaXMuX3F1ZXVlLmxlbmd0aDsgfVxuXG4gICAgLyoqXG4gICAgICogSXMgRW1wdHkgTWV0aG9kXG4gICAgICogXG4gICAgICogSWYgdGhlcmUgYXJlIG5vIEVsZW1lbnRzIGluIHRoZSBRdWV1ZSwgdGhlIG1ldGhvZCByZXR1cm5zIHRydWUsIGFuZCB3aWxsXG4gICAgICogcmV0dXJuIGZhbHNlIGluIGFsbCBvdGhlciBjYXNlcy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZXJlIGFyZSBubyBFbGVtZW50cyBpbiB0aGUgUXVldWVcbiAgICAgKi9cbiAgICBpc0VtcHR5ICgpIHsgcmV0dXJuIHRoaXMuX3F1ZXVlLmxlbmd0aCA9PT0gMDsgfVxuXG4gICAgLyoqXG4gICAgICogRW5xdWV1ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBBZGRzIGEgbmV3IEVsZW1lbnQgdG8gdGhlIFF1ZXVlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gZSBOZXcgRWxlbWVudCBmb3IgUXVldWVcbiAgICAgKi9cbiAgICBlbnF1ZXVlIChlKSB7IHRoaXMuX3F1ZXVlLnB1c2goZSk7IH1cblxuICAgIC8qKlxuICAgICAqIEZpcnN0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybnMgdGhlIEZpcnN0IEVsZW1lbnQgb2YgdGhlIFF1ZXVlLCB3aXRob3V0IGRlcXVldWluZyBpdC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUaGUgRmlyc3QgRWxlbWVudCBvZiB0aGUgUXVldWVcbiAgICAgKi9cbiAgICBmaXJzdCAoKSB7IHJldHVybiB0aGlzLl9xdWV1ZVswXTsgfVxuXG4gICAgLyoqXG4gICAgICogRGVxdWV1ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZW1vdmVzIHRoZSBGaXJzdCBFbGVtZW50IG9mIHRoZSBRdWV1ZSwgYW5kIHJlbW92ZXMgaXQgaW4gdGhlIHByb2Nlc3MuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVGhlIEZpcnN0IEVsZW1lbnQgb2YgdGhlIFF1ZXVlXG4gICAgICovXG4gICAgZGVxdWV1ZSAoKSB7XG4gICAgICAgIGxldCBlbGVtID0gdGhpcy5fcXVldWVbMF07XG4gICAgICAgIHRoaXMuX3F1ZXVlLnNwbGljZSgwLCAxKTtcblxuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgICAvKipcbiAgICAgKiBWZXJ0ZXggQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBEYXRhIHN0cnVjdHVyZSB0aGF0IHN0b3JlIHRoZSBkYXRhIHdpdGhpbiB0aGUgR3JhcGgsIGluIHRoaXMgY2FzZSwgc3RvcmVzXG4gICAgICogKHgsIHkpIGNvb3JkaW5hdGVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5KSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMudmlzaXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vdmUgPSAwO1xuICAgICAgICB0aGlzLm5laWdoYm91cnMgPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94OyB9XG5cbiAgICBzZXQgeCAoeCkgeyB0aGlzLl94ID0geDsgfVxuXG4gICAgZ2V0IHkgKCkgeyByZXR1cm4gdGhpcy5feTsgfVxuXG4gICAgc2V0IHkgKHkpIHsgdGhpcy5feSA9IHk7IH1cblxuICAgIGdldCB2aXNpdGVkICgpIHsgcmV0dXJuIHRoaXMuX3Zpc2l0ZWQ7IH1cblxuICAgIHNldCB2aXNpdGVkIChib29sKSB7IHRoaXMuX3Zpc2l0ZWQgPSBib29sOyB9XG5cbiAgICBnZXQgbW92ZSAoKSB7IHJldHVybiB0aGlzLl9tb3ZlOyB9XG5cbiAgICBzZXQgbW92ZSAobnVtKSB7IHRoaXMuX21vdmUgPSBudW07IH1cblxuICAgIGdldCBuZWlnaGJvdXJzICgpIHsgcmV0dXJuIHRoaXMuX25laWdoYm91cnM7IH1cblxuICAgIHNldCBuZWlnaGJvdXJzIChhcnIpIHsgdGhpcy5fbmVpZ2hib3VycyA9IGFycjsgfVxuXG4gICAgLyoqXG4gICAgICogU2FtZSBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBWZXJ0ZXggaXMgdGhlIHNhbWUgb25lIGFzIHRoaXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgVmVydGV4XG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgU2FtZSBWZXJ0ZXhcbiAgICAgKi9cbiAgICBzYW1lVmVydGV4ICh2KSB7IHJldHVybiB2LnggPT09IHRoaXMueCAmJiB2LnkgPT09IHRoaXMueTsgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0IE5laWdoYm91ciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBBZGRzIGEgbmV3IFZlcnRleCB0aGF0IGlzIE5laWdoYm91ciB0aGlzIFZlcnRleCBpbiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHZlcnRleCBWZXJ0ZXhcbiAgICAgKi9cbiAgICBpbnNlcnROZWlnaGJvdXIgKHZlcnRleCkgeyB0aGlzLm5laWdoYm91cnMucHVzaCh2ZXJ0ZXgpOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgTmVpZ2hib3VyIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJlbW92ZXMgYSBOZWlnaGJvdXIgVmVydGV4LCBpZiBpdCBleGlzdHMgZnJvbSB0aGUgVmVydGV4J3MgTmVpZ2hib3Vycy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdmVydGV4IE5laWdoYm91ciB0byBSZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVOZWlnaGJvdXIgKHZlcnRleCkge1xuICAgICAgICAvLyBGaW5kIFZlcnRleCBpZiBQcmVzZW50IGluIG5laWdoYm91cnMgQXJyYXlcbiAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmVpZ2hib3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubmVpZ2hib3Vyc1tpXS5zYW1lVmVydGV4KHZlcnRleCkpXG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIG5laWdoYm91cnMgaWYgUHJlc2VudFxuICAgICAgICBpZiAoaWR4ID49IDApXG4gICAgICAgICAgICB0aGlzLm5laWdoYm91cnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbnRlcmZhY2Uge1xuICAgIC8qKlxuICAgICAqIEdhbWUgSW50ZXJmYWNlIENsYXNzXG4gICAgICogXG4gICAgICogQmFzZSBHYW1lIENsYXNzIHRoYXQgc2hvdWxkIGJlIEluaGVyaXRlZCBieSBPdGhlciBHYW1lcyB0byBiZSBQbGF5ZWQgb24gXG4gICAgICogdGhlIEdhbWVDaGlwLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBOYW1lIG9mIHRoZSBHYW1lXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHRpdGxlKSB7IHRoaXMuX3RpdGxlID0gdGl0bGU7IH1cblxuICAgIGdldCB0aXRsZSAoKSB7IHJldHVybiB0aGlzLl90aXRsZTsgfVxuXG4gICAgc2V0IHRpdGxlIChzdHIpIHsgdGhpcy5fdGl0bGU7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBTaG93IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgU2hvdyBDYWxsYmFjayBNZXRob2QgZm9yIFVwZGF0aW5nIHRoZSBHYW1lQ2hpcCBEaXNwbGF5XG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHNob3dDYWxsYmFjayBTaG93IENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIHRha2VEb3duQ2FsbGJhY2sgVGFrZSBEb3duIENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIGRpbWVuc2lvbnNDYWxsYmFjayBHZXQgRGltZW5zaW9ucyBDYWxsYmFja1xuICAgICAqL1xuICAgIHNldFNjZW5lIChzaG93Q2FsbGJhY2ssIHRha2VEb3duQ2FsbGJhY2ssIGdldERpbWVuc2lvbnMpIHt9XG5cbiAgICAvKipcbiAgICAgKiBVcCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgVXAgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHVwQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFJpZ2h0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBSaWdodCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgcmlnaHRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogRG93biBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgRG93biBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgZG93bkNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBMZWZ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBMZWZ0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBsZWZ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEEgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEEgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBhQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFNlbGVjdCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzZWxlY3RDYWxsYmFjayAoKSB7fVxufSIsImltcG9ydCBcIi4vYm9hcmQtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBLbmlnaHQgZnJvbSBcIi4va25pZ2h0LmpzXCI7XG5pbXBvcnQgVGlsZSBmcm9tIFwiLi90aWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgICAjQk9BUkQgPSA4O1xuICAgICNERUZBVUxUX1BPUyA9IHt4OiAzLCB5OjN9O1xuICAgICNjb21wbGV0ZUNhbGxiYWNrO1xuXG4gICAgLyoqXG4gICAgICogQm9hcmQgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBDaGVzc2JvYXJkIENsYXNzIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHNldHRpbmcgdXAgYWxsIFRpbGVzIGFuZCB0aGUgXG4gICAgICogS25pZ2h0LCBpbiBhZGRpdGlvbiB0byBtYW5hZ2luZyB0aGUgY29udHJvbHMgZm9yIHRoZSB0aGUgS25pZ2h0LlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjb21wbGV0ZUNhbGxiYWNrIFB1enpsZSBDb21wbGV0ZSBDYWxsYmFja1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBCb2FyZCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcImNoZXNzYm9hcmRcIik7XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgR3JpZCBUZW1wbGF0ZSBBcmVhcyB0byB0aGUgQm9hcmQgRE9NIEVsZW1lbnRcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuI0JPQVJEIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jQk9BUkQ7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChqID09PSAwKVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgXCJ0aWxlLSR7aX0ke2p9IGA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaiA9PT0gdGhpcy4jQk9BUkQgLSAxKVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgdGlsZS0ke2l9JHtqfVwiJHtpID09PSAwID8gXCJcIiA6IFwiIFwifWA7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgdGlsZS0ke2l9JHtqfSBgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5zZXRQcm9wZXJ0eShcImdyaWQtdGVtcGxhdGUtYXJlYXNcIiwgdGVtcGxhdGUpO1xuXG4gICAgICAgIC8vIEluaXRhaWxpc2UgVGlsZXNcbiAgICAgICAgdGhpcy5fdGlsZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNCT0FSRDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI0JPQVJEOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gbmV3IFRpbGUoXG4gICAgICAgICAgICAgICAgICAgIGksIFxuICAgICAgICAgICAgICAgICAgICBqLCBcbiAgICAgICAgICAgICAgICAgICAgaiAlIDIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBpICUgMiA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgaSAlIDIgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGlsZS5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgS25pZ2h0XG4gICAgICAgIHRoaXMuX2tuaWdodCA9IG5ldyBLbmlnaHQoXG4gICAgICAgICAgICB0aGlzLiNERUZBVUxUX1BPUy54LCBcbiAgICAgICAgICAgIHRoaXMuI0RFRkFVTFRfUE9TLnksIHRoaXMuI0JPQVJELCBcbiAgICAgICAgICAgIHRoaXMuX3RpbGVzXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gUGxhY2UgS25pZ2h0IGFuZCBDdXJzb3Igb24gSW5pdGlhbCBUaWxlXG4gICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGlsZS54ID09PSB0aGlzLiNERUZBVUxUX1BPUy54ICYmIFxuICAgICAgICAgICAgICAgIHRpbGUueSA9PT0gdGhpcy4jREVGQVVMVF9QT1MueVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGlsZS5wbGFjZUtuaWdodCh0aGlzLl9rbmlnaHQuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IHRpbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIENhbGxiYWNrIGFuZCBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy4jY29tcGxldGVDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzID0gW107XG4gICAgICAgIHRoaXMuX2luaXRpYWxpc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcHV6emxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2dvYWwgPSB7eDogLTEsIHk6IC0xfTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICBnZXQga25pZ2h0ICgpIHsgcmV0dXJuIHRoaXMuX2tuaWdodDsgfVxuXG4gICAgc2V0IGtuaWdodCAob2JqKSB7IHRoaXMuX2tuaWdodCA9IG9iajsgfVxuXG4gICAgZ2V0IHByZXZpb3VzICgpIHsgcmV0dXJuIHRoaXMuX3ByZXZpb3VzOyB9XG5cbiAgICBzZXQgcHJldmlvdXMgKGFycikgeyB0aGlzLl9wcmV2aW91cyA9IGFycjsgfVxuXG4gICAgZ2V0IHB1enpsaW5nICgpIHsgcmV0dXJuIHRoaXMuX3B1enpsaW5nOyB9XG5cbiAgICBzZXQgcHV6emxpbmcgKGJvb2wpIHsgdGhpcy5fcHV6emxpbmcgPSBib29sOyB9XG5cbiAgICBnZXQgZ29hbCAoKSB7IHJldHVybiB0aGlzLl9nb2FsOyB9XG5cbiAgICBzZXQgZ29hbCAoZGljdCkgeyB0aGlzLl9nb2FsID0gZGljdDsgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFJvb3QgTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgU2VsZWN0ZWQgUm9vdCBQb3NpdGlvbiBvZiB0aGUgS25pZ2h0IGZvciB0aGUgUHV6emxlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFJvb3QgUG9zaXRpb25cbiAgICAgKi9cbiAgICBnZXRSb290ICgpIHsgcmV0dXJuIHsgeDogdGhpcy5fa25pZ2h0LngsIHk6IHRoaXMuX2tuaWdodC55IH07IH1cblxuICAgIC8qKlxuICAgICAqIEdldCBHcmFwaCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBHcmFwaCBHZW5lcmF0ZWQgYnkgdGhlIEtuaWdodCBjb25uZWN0aW5nIGFsbCB0aGUgVGlsZXMgdG8gXG4gICAgICogZWFjaCBvdGhlciBieSB0aGUgbGVnYWxseSBhbGxvd2VkIG1vdmVzIG9mIHRoZSBLbmlnaHQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgR3JhcGggb2YgQ2hlc3Nib2FyZFxuICAgICAqL1xuICAgIGdldEdyYXBoICgpIHsgcmV0dXJuIHRoaXMuX2tuaWdodC5ncmFwaDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBCb2FyZCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIGRlcGVuZGVudCBvbiB0aGUgc2NyZWVuIHNpemUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRpbWVuc2lvbiBCb2FyZCBTaXplIChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAoZGltZW5zaW9uKSB7XG4gICAgICAgIC8vIFNldCBCb2FyZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS53aWR0aCA9IGAke2RpbWVuc2lvbn1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtkaW1lbnNpb259cHhgO1xuXG4gICAgICAgIC8vIFNldCBUaWxlIERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgdGlsZURpbSA9IE1hdGguZmxvb3IoZGltZW5zaW9uIC8gdGhpcy4jQk9BUkQpO1xuICAgICAgICBjb25zdCBmb250U2l6ZSA9IE1hdGguZmxvb3IodGlsZURpbSAqIDAuOCk7XG4gICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICB0aWxlLmVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aWxlRGltfXB4YDtcbiAgICAgICAgICAgIHRpbGUuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aWxlRGltfXB4YDtcbiAgICAgICAgICAgIHRpbGUuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke2ZvbnRTaXplfXB4YDtcbiAgICAgICAgICAgIHRpbGUuY3Vyc29yLnN0eWxlLndpZHRoID0gYCR7dGlsZURpbX1weGA7XG4gICAgICAgICAgICB0aWxlLmN1cnNvci5zdHlsZS5oZWlnaHQgPSBgJHt0aWxlRGltfXB4YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IEtuaWdodCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2tuaWdodC5pY29uLnN0eWxlLndpZHRoID0gYCR7dGlsZURpbX1weGA7XG4gICAgICAgIHRoaXMuX2tuaWdodC5pY29uLnN0eWxlLmhlaWdodCA9IGAke3RpbGVEaW19cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBUaGVtZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIEtuaWdodCdzIEljb24uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIFRoZW1lIE5hbWVcbiAgICAgKi9cbiAgICBzZXRUaGVtZSAodGhlbWUpIHsgdGhpcy5fa25pZ2h0LmNoYW5nZUljb24odGhlbWUpOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgR29hbCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgR29hbCBUaWxlIGZvciBTaG9ydGVzdCBQYXRoIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBHb2FsIFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBHb2FsIFktUG9zaXRpb25cbiAgICAgKi9cbiAgICBzZXRHb2FsICh4LCB5KSB7XG4gICAgICAgIC8vIEZpbmQgR29hbCBUaWxlXG4gICAgICAgIGxldCBhdXg7XG4gICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICBpZiAodGlsZS54ID09PSB4ICYmIHRpbGUueSA9PT0geSlcbiAgICAgICAgICAgICAgICBhdXggPSB0aWxlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgR29hbCBWYXJpYWJsZVxuICAgICAgICB0aGlzLl9nb2FsLnggPSB4O1xuICAgICAgICB0aGlzLl9nb2FsLnkgPSB5O1xuXG4gICAgICAgIC8vIEhpZ2hsaWdodCBHb2FsIFRpbGVcbiAgICAgICAgYXV4LmhpZ2hsaWdodCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIENvbXBsZXRlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgZ2l2ZW4gUHV6emxlLCB0aGUgbWV0aG9kIHdpbGwgY2hlY2sgaWYgaXQgaGFzIGJlZW4gY29tcGxldGVkLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRydWUsIGlmIFB1enpsZSBpcyBDb21wbGV0ZVxuICAgICAqL1xuICAgIGlzQ29tcGxldGUgKCkge1xuICAgICAgICAvLyBIYW5kbGUgU2hvcnRlc3QgUGF0aCBQdXp6bGVcbiAgICAgICAgaWYgKHRoaXMuX2dvYWwueCAhPT0gLTEgJiYgdGhpcy5fZ29hbC55ICE9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudC54ID09PSB0aGlzLl9nb2FsLnggJiYgXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudC55ID09PSB0aGlzLl9nb2FsLnlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgLy8gSGFuZGxlIEtuaWdodCdzIFRvdXIgUHV6emxlXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdGlsZXNbaV0ubW92ZSA9PT0gdGhpcy5fdGlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIE1vdmluZyB0aGUgS25pZ2h0IHRvIHRoZSBOZXh0IFBvc2l0aW9uLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IE5leHQgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IE5leHQgWS1Qb3NpdGlvblxuICAgICAqL1xuICAgIG1vdmUgKHgsIHkpIHtcbiAgICAgICAgLy8gRmluZCBUaWxlIHRoYXQgQ29ycmVzcG9uZCB0byBOZXh0IFBvc2l0aW9uXG4gICAgICAgIGxldCB0aWxlO1xuICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICAgICAgaWYgKHQueCA9PT0geCAmJiB0LnkgPT09IHkpXG4gICAgICAgICAgICAgICAgdGlsZSA9IHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFBsYWNlIEN1cnNvciBhbmQgS25pZ2h0IG9uIFRpbGVcbiAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcihmYWxzZSk7XG4gICAgICAgIHRoaXMuI3BsYWNlS25pZ2h0KHRpbGUpO1xuICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgTWV0aG9kXG4gICAgICogXG4gICAgICogUmVzZXQgdGhlIEJvYXJkJ3MgVGlsZXMgdG8gcmVtb3ZlIGFueSBoaWdobGlnaHRzLlxuICAgICAqL1xuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgLy8gUmVzZXQgVGlsZXNcbiAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVzZXQoKTtcblxuICAgICAgICAgICAgLy8gRW5zdXJlIEtuaWdodCBhbmQgQ3Vyc29yIFJlbWFpbiBvbiB0aGVpciBUaWxlXG4gICAgICAgICAgICBpZiAodGlsZS54ID09PSB0aGlzLl9rbmlnaHQueCAmJiB0aWxlLnkgPT09IHRoaXMuX2tuaWdodC55KSB7XG4gICAgICAgICAgICAgICAgdGlsZS5wbGFjZUtuaWdodCh0aGlzLl9rbmlnaHQuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGlsZS5wbGFjZUN1cnNvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNldCBPdGhlciBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fcHV6emxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzID0gW107XG4gICAgICAgIHRoaXMuX2dvYWwueCA9IC0xO1xuICAgICAgICB0aGlzLl9nb2FsLnkgPSAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIb3Jpem9udGFsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92ZSB0aGUgQ3Vyc29yIEhvcml6b250YWxseSBhcm91bmQgdGhlIEJvYXJkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmlnaHQgRGVmYXVsdCBBY3Rpb24gaXMgUmlnaHR3YXJkc1xuICAgICAqL1xuICAgIGhvcml6b250YWxNb3ZlIChyaWdodD10cnVlKSB7XG4gICAgICAgIC8vIEVuc3VyZSBIb3Jpem9udGFsIE1vdmUgaXMgc3RpbGwgb24gQm9hcmRcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQueSArIChyaWdodCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChjdXJyIDwgdGhpcy4jQk9BUkQgJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yIGZyb20gVGlsZVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcihmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgYW5kIEZpbmQgTmV3IFRpbGUgZm9yIEN1cnNvclxuICAgICAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS55ID09PSBjdXJyICYmIHRpbGUueCA9PT0gdGhpcy5fY3VycmVudC54KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGlsZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBQbGFjZSBDdXJzb3Igb24gVGlsZVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92ZSB0aGUgQ3Vyc29yIHVwIG9yIGRvd24gYXJvdW5kIHRoZSBCb2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwIERlZmF1bHQgQWN0aW9uIGlzIFVwd2FyZHNcbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE1vdmUgKHVwPXRydWUpIHtcbiAgICAgICAgLy8gRW5zdXJlIFZlcnRpY2FsIE1vdmUgaXMgc3RpbGwgb24gQm9hcmRcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQueCArICh1cCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChjdXJyIDwgdGhpcy4jQk9BUkQgJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yIGZyb20gVGlsZVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcihmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgYW5kIEZpbmQgTmV3IFRpbGUgZm9yIEN1cnNvclxuICAgICAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS55ID09PSB0aGlzLl9jdXJyZW50LnkgJiYgdGlsZS54ID09PSBjdXJyKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGlsZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBQbGFjZSBDdXJzb3Igb24gVGlsZVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VwdCBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogSWYgbW92ZSBpcyBsZWdhbCwgS25pZ2h0IGlzIFBsYWNlZCBhbmQgbm8gZXJyb3IgaXMgcmFzaWVkLiBPbiB0aGUgb3RoZXIgXG4gICAgICogaGFuZCwgaWYgdGhlIG1vdmUgaXMgaWxsZWdhbCwgdGhlbiBubyBhY3Rpb24gaXMgdGFrZW4gYW5kIGVycm9yIHNob3VsZCBcbiAgICAgKiBiZSByYWlzZWQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgRXJyb3IgTWVzc2FnZSwgaWYgcmVxdWlyZWRcbiAgICAgKi9cbiAgICBhY2NlcHRBY3Rpb24gKCkge1xuICAgICAgICAvLyBGaW5kIEN1cnJlbnQgVGlsZVxuICAgICAgICBsZXQgYXV4O1xuICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgaWYgKHRpbGUucG9pbnRlcilcbiAgICAgICAgICAgICAgICBhdXggPSB0aWxlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFbnN1cmUgTW92ZSBpcyBMZWdhbFxuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGlzZSB8fCB0aGlzLl9rbmlnaHQuaXNMZWdhbChhdXgueCwgYXV4LnkpKSB7XG4gICAgICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgLy8gU3RvcmUgVGlsZSBpZiBTb2x2aW5nIFB1enpsZVxuICAgICAgICAgICAgaWYgKHRoaXMuX3B1enpsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXMucHVzaChhdXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIFRvdXJpbmcsIENvbmZpcm0gTm8gUmVwZWF0ZWQgVGlsZXNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ29hbC54ID09PSAtMSAmJiB0aGlzLl9nb2FsLnkgPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGF1eC5tb3ZlID09PSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQ3VycmVudCBUaWxlXG4gICAgICAgICAgICAgICAgdGhpcy4jcGxhY2VLbmlnaHQoYXV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsaXNlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBOdW1iZXIgVGlsZSwgaWYgVG91cmluZ1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nb2FsLnggPT09IC0xICYmIHRoaXMuX2dvYWwueSA9PT0gLTEgJiYgdGhpcy5fcHV6emxpbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQubnVtYmVyKHRoaXMuX3ByZXZpb3VzLmxlbmd0aCwgdGhpcy5fa25pZ2h0LmVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgUHV6emxlIGlzIENvbXBsZXRlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZSgpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjb21wbGV0ZUNhbGxiYWNrKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgd2l0aG91dCBFcnJvclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91cy5wb3AoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYE1vdmUgdG8gKCR7YXV4Lnl9LCAke2F1eC54fSkgaGFzIGFscmVhZHkgYmVlbiBtYWRlIWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgd2l0aCBFcnJvclxuICAgICAgICByZXR1cm4gYE1vdmUgdG8gKCR7YXV4Lnl9LCAke2F1eC54fSkgaXMgaWxsZWdhbCFgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY2xpbmUgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIElmIHdoaWxlIHNvbHZpbmcgdGhlIFB1enpsZSB0aGUgVXNlciBmaW5kcyB0aGV5IHdhbnQgdG8gdW5kbyB0aGVpciBsYXN0IFxuICAgICAqIG1vdmUsIHRoZW4gdGhlIHByZXZpb3VzIG1vdmUgd2lsbCByZXBsYWNlIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgICAqL1xuICAgIGRlY2xpbmVBY3Rpb24gKCkge1xuICAgICAgICAvLyBIYW5kbGUgb25seSBpZiBTb2x2aW5nIFB1enpsZVxuICAgICAgICBpZiAodGhpcy5fcHV6emxpbmcgJiYgIXRoaXMuX2FsZ29yaXRobSAmJiB0aGlzLl9wcmV2aW91cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAvLyBTZXQgTGFzdCBNb3ZlIGluIExpc3QgYXMgQ3VycmVudCBNb3ZlXG4gICAgICAgICAgICBsZXQgYXV4ID0gdGhpcy5fcHJldmlvdXMucG9wKCk7XG4gICAgICAgICAgICBpZiAoYXV4LnggPT09IHRoaXMuX2N1cnJlbnQueCAmJiBhdXgueSA9PT0gdGhpcy5fY3VycmVudC55KVxuICAgICAgICAgICAgICAgIGF1eCA9IHRoaXMuX3ByZXZpb3VzLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy4jcGxhY2VLbmlnaHQoYXV4LCB0aGlzLl9jdXJyZW50LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzLnB1c2godGhpcy5fY3VycmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEVpdGhlciB1c2VkIGZvciBTZWxlY3RpbmcgdGhlIEluaXRpYWwgUG9zaXRpb24gb2YgdGhlIEtuaWdodCBmb3IgXG4gICAgICogY29tcGxldGluZyB0aGUgUHV6emxlLCBvciBmb3IgdXNpbmcgdGhlIEFsZ29yaXRobSB0byBzaG93IGEgU29sdXRpb24gZm9yXG4gICAgICogdGhlIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRvdXIgS25pZ2h0J3MgVG91ciBvciBOb3RcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoIFBhdGggR2VuZXJhdGVkIGJ5IEFsZ29yaXRobVxuICAgICAqIEBjYWxsYmFjayBtb3ZlQ2FsbGJhY2sgTW92ZSBDYWxsYmFjayBNZXRob2RcbiAgICAgKi9cbiAgICBzZWxlY3RBY3Rpb24gKHRvdXI9ZmFsc2UsIHBhdGg9W10sIG1vdmVDYWxsYmFjaykge1xuICAgICAgICAvLyBTZWxlY3QgSW5pdGlhbCBQb3NpdGlvbiBmb3IgS25pZ2h0XG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgQ3VycmVudCBUaWxlXG4gICAgICAgICAgICBsZXQgYXV4O1xuICAgICAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS5wb2ludGVyKVxuICAgICAgICAgICAgICAgICAgICBhdXggPSB0aWxlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBDdXJyZW50IFRpbGVcbiAgICAgICAgICAgIHRoaXMuI3BsYWNlS25pZ2h0KGF1eCk7XG5cbiAgICAgICAgICAgIC8vIFNldHVwIFB1enpsaW5nIFZhcmlhYmxlc1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXMucHVzaChhdXgpO1xuICAgICAgICAgICAgdGhpcy5fcHV6emxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGUuYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICB0aWxlLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LmhpZ2hsaWdodCgpO1xuXG5cbiAgICAgICAgICAgIC8vIElmIGNvbXBsZXRpbmcgYSBLbmlnaHQncyBUb3VyLCBOdW1iZXIgVGlsZVxuICAgICAgICAgICAgaWYgKHRvdXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Lm51bWJlcigxLCB0aGlzLl9rbmlnaHQuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICAvLyBQcm9tcHQgS25pZ2h0IHRvIFVzZSBBbGdvcml0aG0ncyBQYXRoXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU2V0IFZhcmlhYmxlcyBmb3IgVGltaW5nIEludGVydmFsXG4gICAgICAgICAgICB0aGlzLl9hbGdvcml0aG0gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyBTZXR1cCAxcyBUaW1pbmcgSW50ZXJ2YWxcbiAgICAgICAgICAgIHZhciB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFNldCBWZXJ0ZXggdG8gYmUgTGFzdCBFbGVtZW50IGluIFBhdGhcbiAgICAgICAgICAgICAgICBsZXQgdmVydGV4O1xuICAgICAgICAgICAgICAgIHZlcnRleCA9IHBhdGgucG9wKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgVmVydGV4IHRvIFByZXZpb3VzIFN0ZXBzXG4gICAgICAgICAgICAgICAgc2VsZi5wcmV2aW91cy5wdXNoKHZlcnRleCk7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgS25pZ2h0J3MgVG91ciwgTnVtYmVyIHRoZSBUaWxlc1xuICAgICAgICAgICAgICAgIGlmICh0b3VyKVxuICAgICAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggVGlsZXNcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBUaWxlIHRoYXQgS25pZ2h0IGlzIE9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4LnggPT09IHRpbGUueCAmJiB2ZXJ0ZXgueSA9PT0gdGlsZS55KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUubnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByZXZpb3VzLmxlbmd0aCAtIDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmtuaWdodC5lbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgR2FtZSBJbnRlcmZhY2VcbiAgICAgICAgICAgICAgICBtb3ZlQ2FsbGJhY2sodmVydGV4LngsIHZlcnRleC55KTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIFB1enpsZSBpcyBDb21wbGV0ZVxuICAgICAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBUaW1pbmcgSW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBQdXp6bGUgQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4jY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2UgS25pZ2h0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgZ2l2ZW4gdGlsZSwgUGxhY2UgdGhlIEtuaWdodCB0aGVyZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1RpbGV9IHRpbGUgRGVzaXJlZCBUaWxlXG4gICAgICogQHBhcmFtIHtUaWxlfSBwcmV2IFByZXZpb3VzIFRpbGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuZG8gVW5kbywgZGVmYXVsdCBGYWxzZVxuICAgICAqL1xuICAgICNwbGFjZUtuaWdodCAodGlsZSwgcHJldiwgdW5kbz1mYWxzZSkge1xuICAgICAgICAvLyBSZW1vdmUgS25pZ2h0IGZyb20gQ3VycmVudCBUaWxlXG4gICAgICAgIHRoaXMuX2N1cnJlbnQucmVtb3ZlS25pZ2h0KCk7XG5cbiAgICAgICAgLy8gRm9yIFVuZG9pbmcgUGxhY2VtZW50LCBVcGRhdGUgVGlsZXNcbiAgICAgICAgaWYgKHVuZG8pIHtcbiAgICAgICAgICAgIHByZXYucGxhY2VDdXJzb3IoZmFsc2UpO1xuICAgICAgICAgICAgcHJldi5yZXNldCgpO1xuICAgICAgICAgICAgdGlsZS5wbGFjZUN1cnNvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEN1cnJlbnQgVGlsZVxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGlsZTtcbiAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUtuaWdodCh0aGlzLl9rbmlnaHQuZWxlbWVudCk7XG4gICAgICAgIHRoaXMuX2tuaWdodC51cGRhdGUodGlsZS54LCB0aWxlLnkpO1xuICAgIH1cbn0iLCJpbXBvcnQgR3JhcGggZnJvbSBcIi4uLy4uL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qc1wiO1xuaW1wb3J0IEtuaWdodE5vcm1hbCBmcm9tIFwiLi4vaW1hZ2VzL2tuaWdodC5wbmdcIjtcbmltcG9ydCBLbmlnaHRSZXRybyBmcm9tIFwiLi4vaW1hZ2VzL2tuaWdodC1yZXRyby5wbmdcIjtcbmltcG9ydCBLbmlnaHRGdXR1cmUgZnJvbSBcIi4uL2ltYWdlcy9rbmlnaHQtZnV0dXJlLnBuZ1wiO1xuaW1wb3J0IEtuaWdodE5lb24gZnJvbSBcIi4uL2ltYWdlcy9rbmlnaHQtbmVvbi5wbmdcIjtcbmltcG9ydCBLbmlnaHRUZXJtaW5hbCBmcm9tIFwiLi4vaW1hZ2VzL2tuaWdodC10ZXJtaW5hbC5wbmdcIjtcbmltcG9ydCBLbmlnaHRGYW50YXN5IGZyb20gXCIuLi9pbWFnZXMva25pZ2h0LWZhbnRhc3kucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtuaWdodCB7XG4gICAgI0JPQVJEO1xuICAgICNUSEVNRVMgPSB7XG4gICAgICAgIFwibm9ybWFsXCI6IEtuaWdodE5vcm1hbCxcbiAgICAgICAgXCJyZXRyb1wiOiBLbmlnaHRSZXRybyxcbiAgICAgICAgXCJmdXR1cmVcIjogS25pZ2h0RnV0dXJlLFxuICAgICAgICBcIm5lb25cIjogS25pZ2h0TmVvbixcbiAgICAgICAgXCJ0ZXJtaW5hbFwiOiBLbmlnaHRUZXJtaW5hbCxcbiAgICAgICAgXCJmYW50YXN5XCI6IEtuaWdodEZhbnRhc3ksXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEtuaWdodCBDbGFzc1xuICAgICAqIFxuICAgICAqIENsYXNzIHRoYXQgR2VuZXJhdGVzIHRoZSBET00gZWxlbWVudCB0aGF0IHJlcHJlc2VudHMgdGhlIEtuaWdodCBPYmplY3QsIFxuICAgICAqIGFuZCBhbHNvIGNvbnRyb2xzIHRoZSBLbmlnaHQgYXMgaXQgbW92ZXMgYWNyb3NzIHRoZSBDaGVzc2JvYXJkLCBlaXRoZXIgXG4gICAgICogYnkgdGhlIFVzZXIgb3IgYnkgdGhlIFNlYXJjaCBBbGdvcml0aG0uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvYXJkIENoZXNzYm9hcmQgU2l6ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHRpbGVzIEFycmF5IG9mIENoZXNzYm9hcmQgVGlsZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSwgYm9hcmQsIHRpbGVzKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIEtuaWdodCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5faWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLl9pY29uLnNyYz0gS25pZ2h0Tm9ybWFsO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2ljb24pO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJrbmlnaHRcIik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB0aGlzLiNCT0FSRCA9IGJvYXJkO1xuICAgICAgICB0aGlzLl90aWxlcyA9IHRpbGVzO1xuICAgICAgICB0aGlzLl9sZWdhbCA9IFtdO1xuICAgICAgICB0aGlzLl9wYXRoID0gW107XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgR3JhcGggZm9yIFRpbGVzXG4gICAgICAgIHRoaXMuX2dyYXBoID0gbmV3IEdyYXBoKCk7XG4gICAgICAgIHRoaXMuZmlsbCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGVsZW1lbnQgKCkgeyByZXR1cm4gdGhpcy5fZWxlbWVudDsgfVxuXG4gICAgc2V0IGVsZW1lbnQgKGVsZW0pIHsgdGhpcy5fZWxlbWVudCA9IGVsZW07IH1cblxuICAgIGdldCBpY29uICgpIHsgcmV0dXJuIHRoaXMuX2ljb247IH1cblxuICAgIHNldCBpY29uIChpbWcpIHsgdGhpcy5faWNvbiA9IGltZzsgfVxuXG4gICAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feDsgfVxuXG4gICAgc2V0IHggKHgpIHsgdGhpcy5feCA9IHg7IH1cblxuICAgIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3k7IH1cblxuICAgIHNldCB5ICh5KSB7IHRoaXMuX3kgPSB5OyB9XG5cbiAgICBnZXQgbGVnYWwgKCkgeyByZXR1cm4gdGhpcy5fbGVnYWw7IH1cblxuICAgIHNldCBsZWdhbCAoYXJyKSB7IHRoaXMuX2xlZ2FsID0gYXJyOyB9XG5cbiAgICBnZXQgdGlsZXMgKCkgeyByZXR1cm4gdGhpcy5fdGlsZXM7IH1cblxuICAgIHNldCB0aWxlcyAoYXJyKSB7IHRoaXMuX3RpbGVzID0gYXJyOyB9XG5cbiAgICBnZXQgZ3JhcGggKCkgeyByZXR1cm4gdGhpcy5fZ3JhcGg7IH1cblxuICAgIHNldCBncmFwaCAoZ3JhcGgpIHsgdGhpcy5fZ3JhcGggPSBncmFwaDsgfVxuXG4gICAgZ2V0IHBhdGggKCkgeyByZXR1cm4gdGhpcy5fcGF0aDsgfVxuXG4gICAgc2V0IHBhdGggKGFycikgeyB0aGlzLl9wYXRoID0gYXJyOyB9XG5cbiAgICBnZXQgc3RlcHMgKCkgeyByZXR1cm4gdGhpcy5fc3RlcHM7IH1cblxuICAgIHNldCBzdGVwcyAobnVtKSB7IHRoaXMuX3N0ZXBzID0gbnVtOyB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgSWNvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgdGhlIE5ldyBJY29uIGZvciB0aGUgZ2l2ZW4gVGhlbWUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIE5ldyBUaGVtZVxuICAgICAqL1xuICAgIGNoYW5nZUljb24gKHRoZW1lKSB7XG4gICAgICAgIC8vIEVuc3VyZSBUaGVtZSBFeGlzdHNcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuI1RIRU1FUykuaW5jbHVkZXModGhlbWUpKSB7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIEljb25cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuX2ljb24uc3JjID0gdGhpcy4jVEhFTUVTW3RoZW1lXTtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5faWNvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaWxsIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEJhc2VkIG9uIHRoZSBMZWdhbCBNb3ZlcyB0aGF0IGEgS25pZ2h0IGNhbiBtYWtlIG9uIGEgQ2hlc3Nib2FyZCwgdGhpcyBcbiAgICAgKiBtZXRob2Qgd2lsbCBmaWxsIHVwIHRoZSBncmFwaCB3aXRoIGVkZ2VzIHRoYXQgY29ycmVzcG9uZCB0byB0aGUgbGVnYWwgXG4gICAgICogbW92ZW1lbnRzIGEga25pZ2h0IGNhbiBtYWtlIGF0IGVhY2ggc3F1YXJlIG9uIHRoZSBib2FyZC5cbiAgICAgKi9cbiAgICBmaWxsICgpIHtcbiAgICAgICAgLy8gQWRkIGEgVmVydGV4IGZvciBlYWNoIFRpbGVcbiAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydFZlcnRleCh0aWxlLngsIHRpbGUueSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBhbiBFZGdlIGZvciBUcmF2ZXJzaW5nIHdpdGggS25pZ2h0XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy4jQk9BUkQ7IHgrKylcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy4jQk9BUkQ7IHkrKylcbiAgICAgICAgICAgICAgICB0aGlzLmdldExlZ2FsTW92ZXMoeCwgeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBMZWdhbCBNb3ZlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGN1cnJlbnQgcG9zaXRpb24gdGhlIGtuaWdodCBpcyBpbiBvbiB0aGUgQ2hlc3Nib2FyZCwgdGhpcyBtZXRob2QgXG4gICAgICogd2lsbCBmaWxsIHVwIHRoZSBsZWdhbCBtb3ZlcyBhcnJheSB3aXRoIHRoZSBjdXJyZW50bHkgYXZhaWxhYmxlIGxlZ2FsIFxuICAgICAqIG1vdmVzLlxuICAgICAqL1xuICAgIGN1cnJlbnRMZWdhbE1vdmVzICgpIHtcbiAgICAgICAgLy8gR2V0IFZlcnRleCBmb3IgQ3VycmVudCBMb2NhdGlvbiBmcm9tIEdyYXBoXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgodGhpcy54LCB0aGlzLnkpO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBOZWlnaGJvdXJzLCBhZGRpbmcgdGhlbSB0byBMZWdhbCBNb3ZlcyBBcnJheVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnQubmVpZ2hib3Vycy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHRoaXMuX2xlZ2FsLnB1c2goY3VycmVudC5uZWlnaGJvdXJzW2ldKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBQb3NpdGlvbiBvZiB0aGUgS25pZ2h0LCBhbmQgcmV0cmlldmUgbmV3IGxlZ2FsIG1vdmVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZSAoeCwgeSkge1xuICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgIHRoaXMuX2xlZ2FsID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudExlZ2FsTW92ZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBMZWdhbCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgdGhlIE1vdmUgc2VsZWN0ZWQgaXMgYSBsZWdhbCBvbmUsIGdpdmVuIHRoZSByZXN0cmljdGlvbnMgb2YgdGhlXG4gICAgICogS25pZ2h0J3MgbW92ZW1lbnQgb24gYSBjaGVzc2JvYXJkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgTW92ZSBpcyBMZWdhbFxuICAgICAqL1xuICAgIGlzTGVnYWwgKHgsIHkpIHtcbiAgICAgICAgLy8gRmluZCBpZiBDb29yZGluYXRlIGlzIGEgTGVnYWwgVmVydGV4XG4gICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZWdhbC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIENvb3JkaW5hdGUgTWF0Y2hlcyBMZWdhbCBWZXJ0ZXhcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZWdhbFtpXS54ID09PSB4ICYmIHRoaXMuX2xlZ2FsW2ldLnkgPT09IHkpXG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpZHggPj0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTGVnYWwgTW92ZXMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBHaXZlbiBQb3NpdGlvbiwgdGhlIG1ldGhvZCB3aWxsIGdlbmVyYXRlIHRoZSBlZGdlcyB0b3dhcmRzIHRoZSBcbiAgICAgKiBsZWdhbCBwb3NpdGlvbnMsIGdpdmVuIHRoZSBrbmlnaHRzIHJlc3RyaWN0ZWQgbW92ZXMgb24gYSBjaGVzc2JvYXJkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIGdldExlZ2FsTW92ZXMgKHgsIHkpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCwgeSk7XG4gICAgICAgIC8vIFRvcCBNb3Zlc1xuICAgICAgICBpZiAoeSArIDIgPCB0aGlzLiNCT0FSRCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgVG9wLVJpZ2h0IGlzIExlZ2FsXG4gICAgICAgICAgICBpZiAoeCArIDEgPCB0aGlzLiNCT0FSRCkge1xuICAgICAgICAgICAgICAgIGxldCB0b3BSaWdodCA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4ICsgMSwgeSArIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgdG9wUmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgVG9wLUxlZnQgaXMgTGVnZWxcbiAgICAgICAgICAgIGlmICh4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcExlZnQgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCAtIDEsIHkgKyAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIHRvcExlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJpZ2h0IE1vdmVzXG4gICAgICAgIGlmICh4ICsgMiA8IHRoaXMuI0JPQVJEKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBSaWdodC1Ub3AgaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh5ICsgMSA8IHRoaXMuI0JPQVJEKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJpZ2h0VG9wID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggKyAyLCB5ICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCByaWdodFRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBSaWdodC1Cb3R0b20gaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh5IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJpZ2h0Qm90dG9tID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggKyAyLCB5IC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCByaWdodEJvdHRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQm90dG9tIE1vdmVzXG4gICAgICAgIGlmICh5IC0gMiA+PSAwKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBCb3R0b20tUmlnaHQgaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh4ICsgMSA8IHRoaXMuI0JPQVJEKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvdHRvbVJpZ2h0ID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggKyAxLCB5IC0gMik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCBib3R0b21SaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBCb3R0b20tTGVmdCBpcyBMZWdhbFxuICAgICAgICAgICAgaWYgKHggLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgYm90dG9tTGVmdCA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4IC0gMSwgeSAtIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgYm90dG9tTGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGVmdCBNb3Zlc1xuICAgICAgICBpZiAoeCAtIDIgPj0gMCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgTGVmdC1Ub3AgaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh5ICsgMSA8IHRoaXMuI0JPQVJEKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxlZnRUb3AgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCAtIDIsIHkgKyAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIGxlZnRUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgTGVmdC1Cb3R0b20gaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh5IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxlZnRCb3R0b20gPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCAtIDIsIHkgLSAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIGxlZnRCb3R0b20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUge1xuICAgIC8qKlxuICAgICAqIFRpbGUgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBDaGVzcyBCb2FyZCBUaWxlIEVsZW1lbnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG91ciBcImJsYWNrXCIgb3IgXCJ3aGl0ZVwiXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHksIGNvbG91cj1cIndoaXRlXCIpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgVGlsZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NvbG91cn0tdGlsZWApO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmlkID0gYCR7eH0tJHt5fS10aWxlYDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgIFwiZ3JpZC1hcmVhXCIsIGB0aWxlLSR7eH0ke3l9YFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIEN1cnNvciBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jdXJzb3IuaWQgPSBcImN1cnNvci10aWxlXCI7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB0aGlzLl9tb3ZlID0gMDtcbiAgICAgICAgdGhpcy5fY29sb3VyID0gY29sb3VyO1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcG9pbnRlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBlbGVtZW50ICgpIHsgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7IH1cblxuICAgIHNldCBlbGVtZW50IChlbGVtKSB7IHRoaXMuX2VsZW1lbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgY3Vyc29yICgpIHsgcmV0dXJuIHRoaXMuX2N1cnNvcjsgfVxuXG4gICAgc2V0IGN1cnNvciAoZWxlbSkgeyB0aGlzLl9jdXJzb3IgPSBlbGVtOyB9XG5cbiAgICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94OyB9XG5cbiAgICBzZXQgeCAoeCkgeyB0aGlzLl94ID0geDsgfVxuXG4gICAgZ2V0IHkgKCkgeyByZXR1cm4gdGhpcy5feTsgfVxuXG4gICAgc2V0IHkgKHkpIHsgdGhpcy5feSA9IHk7IH1cblxuICAgIGdldCBtb3ZlICgpIHsgcmV0dXJuIHRoaXMuX21vdmU7IH1cblxuICAgIHNldCBtb3ZlIChudW0pIHsgdGhpcy5fbW92ZSA9IG51bTsgfVxuXG4gICAgZ2V0IGFjdGl2ZSAoKSB7IHJldHVybiB0aGlzLl9hY3RpdmU7IH1cblxuICAgIHNldCBhY3RpdmUgKGJvb2wpIHsgdGhpcy5fYWN0aXZlID0gYm9vbDsgfVxuXG4gICAgZ2V0IHBvaW50ZXIgKCkgeyByZXR1cm4gdGhpcy5fcG9pbnRlcjsgfVxuXG4gICAgc2V0IHBvaW50ZXIgKGJvb2wpIHsgdGhpcy5fcG9pbnRlciA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBLbmlnaHQgTWV0aG9kXG4gICAgICogXG4gICAgICogUmVtb3ZlcyB0aGUgS25pZ2h0IERPTSBFbGVtZW50IGZyb20gdGhlIHRpbGUuXG4gICAgICovXG4gICAgcmVtb3ZlS25pZ2h0ICgpIHsgXG4gICAgICAgIC8vIENsZWFyIERPTSBFbGVtZW50c1xuICAgICAgICB0aGlzLl9lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7IFxuICAgICAgICBcbiAgICAgICAgLy8gSWYgTnVtYmVyIHdhcyBvbiBUaWxlLCBLZWVwIGl0IE9uXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgdGhpcy5fbW92ZSA+IDApXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5fbW92ZTtcblxuICAgICAgICAvLyBJZiBDdXJzb3Igd2FzIG9uIFRpbGUsIEtlZXAgaXQgT25cbiAgICAgICAgaWYgKHRoaXMuX3BvaW50ZXIpXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2N1cnNvcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2UgS25pZ2h0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEFwcGVuZHMgdGhlIEtuaWdodCBET00gRWxlbWVudCB0byB0aGUgdGlsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGVsZW0gS25pZ2h0IERPTSBFbGVtZW50XG4gICAgICovXG4gICAgcGxhY2VLbmlnaHQgKGVsZW0pIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZSBDdXJzb3IgTWV0aG9kXG4gICAgICogXG4gICAgICogUGxhY2Ugb3IgUmVtb3ZlIHRoZSBDdXJzb3Igb24gdGhlIHRpbGUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbiBQbGFjZSBvciBSZW1vdmVcbiAgICAgKi9cbiAgICBwbGFjZUN1cnNvciAob249dHJ1ZSkge1xuICAgICAgICAvLyBQbGFjZSBDdXJzb3Igb24gVGlsZVxuICAgICAgICBpZiAob24gJiYgIXRoaXMuX3BvaW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fY3Vyc29yKTtcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBDdXJzb3IgZnJvbSBUaWxlXG4gICAgICAgIGlmICghb24gJiYgdGhpcy5fcG9pbnRlcikge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9jdXJzb3IpO1xuICAgICAgICAgICAgdGhpcy5fcG9pbnRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE51bWJlciB0aGUgVGlsZSB3aXRoIGEgRGVzaXJlZCBOdW1iZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bSBOdW1iZXIgZm9yIFRpbGVcbiAgICAgKiBAcGFyYW0geyp9IGtuaWdodCBLbmlnaHQgRE9NIEVsZW1lbnRcbiAgICAgKi9cbiAgICBudW1iZXIgKG51bSwga25pZ2h0KSB7IFxuICAgICAgICB0aGlzLl9tb3ZlID0gbnVtO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnRleHRDb250ZW50ID0gbnVtOyBcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChrbmlnaHQpO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCgpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2N1cnNvcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlnaGxpZ2h0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhpZ2hsaWdodHMgdGhlIHRpbGUgd2hlbiBpZiB0aGUgdGlsZSBpcyBhY3RpdmUgYW5kIGlmIHRoZSBrbmlnaHQgbGFuZHMgXG4gICAgICogb24gdGhlIHRpbGUuXG4gICAgICovXG4gICAgaGlnaGxpZ2h0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSAmJiAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSlcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXRzIHRoZSBhY3RpdmUgdmFyaWFibGUgdG8gYmUgb24gb3Igb2ZmLCBkZXBlbmRpbmcgb24gd2hldGhlciBvciBub3QgXG4gICAgICogdGhlcmUgaXMgYSBwdXp6bGUgdGhhdCB0aGUgdXNlciBpcyBjdXJyZW50bHkgY29tcGxldGluZy5cbiAgICAgKi9cbiAgICB0b2dnbGUgKCkgeyB0aGlzLl9hY3RpdmUgPSAhdGhpcy5fYWN0aXZlOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZW1vdmVzIGFueSBpbnN0YW5jZSBvZiB0aGUgVGlsZSBiZWluZyBoaWdobGlnaHRlZC5cbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICAgIC8vIFJlbW92ZSBIaWdobGlnaHQsIGlmIG5lZWRlZFxuICAgICAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBPdGhlciBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fbW92ZSA9IDA7XG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fcG9pbnRlcilcbiAgICAgICAgICAgIHRoaXMucGxhY2VDdXJzb3IoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCAhPT0gXCJcIilcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH1cbn0iLCJpbXBvcnQgXCIuL2dhbWUtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gXCIuL2RhdGEvbWVudS5qc29uNVwiO1xuaW1wb3J0IHNlbGVjdGlvbiBmcm9tIFwiLi9kYXRhL3NlbGVjdC5qc29uNVwiO1xuaW1wb3J0IEdhbWVJbnRlcmZhY2UgZnJvbSBcIi4uL2dhbWUtY2hpcC1tb2R1bGUvZ2FtZS1pbnRlcmZhY2UuanNcIjtcbmltcG9ydCBLbmlnaHRzTWFuYWdlciBmcm9tIFwiLi9tYWluLW1vZHVsZS9rbmlnaHRzLW1hbmFnZXIuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi9wb3AtdXAtbW9kdWxlL21lbnUuanNcIjtcbmltcG9ydCBFcnJvckJveCBmcm9tIFwiLi4vcG9wLXVwLW1vZHVsZS9lcnJvci1ib3guanNcIjtcbmltcG9ydCBJbmZvQm94IGZyb20gXCIuLi9wb3AtdXAtbW9kdWxlL2luZm8tYm94LmpzXCI7XG5pbXBvcnQgU2VsZWN0Qm94IGZyb20gXCIuLi9wb3AtdXAtbW9kdWxlL3NlbGVjdC1ib3guanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZ2h0c0dhbWUgZXh0ZW5kcyBHYW1lSW50ZXJmYWNlIHtcbiAgICAjc2hvd0NhbGxiYWNrO1xuICAgICN0YWtlRG93bkNhbGxiYWNrO1xuXG4gICAgLyoqXG4gICAgICogS25pZ2h0J3MgR2FtZSBJbnRlcmZhY2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBVc2VkIGZvciBDb250cm9sbGluZyB0aGUgTWVudSBhbmQgQ2hlc3Nib2FyZCBNb2R1bGVzIHdpdGggdGhlIEdhbWVDaGlwJ3NcbiAgICAgKiBDb250cm9sbGVycywgYW5kIGFsc28gZm9yIFVwZGF0aW5nIHRoZSBEaXNwbGF5IHdpdGggdGhlIHJlbGV2YW50IEVycm9yIFxuICAgICAqIGFuZCBJbmZvcm1hdGlvbiBNZXNzYWdlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcbiAgICAgICAgc3VwZXIodGl0bGUpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgT2JqZWN0cyBmb3IgdGhlIEtuaWdodCdzIEdhbWVcbiAgICAgICAgdGhpcy5fa20gPSBuZXcgS25pZ2h0c01hbmFnZXIodGhpcy5jb21wbGV0ZUNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9tZW51ID0gbmV3IE1lbnUoY2F0ZWdvcmllcyk7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gbmV3IEVycm9yQm94KCk7XG4gICAgICAgIHRoaXMuX2luZm8gPSBuZXcgSW5mb0JveCgpO1xuICAgICAgICB0aGlzLl9zZWxlY3QgPSBuZXcgU2VsZWN0Qm94KFxuICAgICAgICAgICAgc2VsZWN0aW9uLmdhbWUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBzZWxlY3Rpb24uZ2FtZS5jYXRlZ29yaWVzXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZVxuICAgICAgICB0aGlzLl9nYW1lX3NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNjZW5lIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgQ2FsbGJhY2sgTWV0aG9kcyBmb3IgVXBkYXRpbmcgdGhlIEdhbWVDaGlwIERpc3BsYXkuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHNob3dDYWxsYmFjayBTaG93IENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIHRha2VEb3duQ2FsbGJhY2sgVGFrZSBEb3duIENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIGRpbWVuc2lvbnNDYWxsYmFjayBHZXQgRGltZW5zaW9ucyBDYWxsYmFja1xuICAgICAqL1xuICAgIHNldFNjZW5lIChzaG93Q2FsbGJhY2ssIHRha2VEb3duQ2FsbGJhY2ssIGdldERpbWVuc2lvbnMpIHtcbiAgICAgICAgLy8gU2V0IENhbGxiYWNrIE1ldGhvZHNcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrID0gc2hvd0NhbGxiYWNrO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrID0gdGFrZURvd25DYWxsYmFjaztcblxuICAgICAgICAvLyBTZXQgQm9hcmQgRGltZW5zaW9uc1xuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gZ2V0RGltZW5zaW9ucygpO1xuICAgICAgICB0aGlzLl9rbS5zZXR1cChkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgLy8gU2V0IFBvcC1VcCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX21lbnUuc2V0RGltZW5zaW9ucyhkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIHRoaXMuX3N1Yl9zZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3ViX21lbnU7IFxuICAgICAgICB0aGlzLl9lcnJvci5zZXREaW1lbnNpb25zKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5faW5mby5zZXREaW1lbnNpb25zKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fc2VsZWN0LnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBCb2FyZCBvbiBEaXNwbGF5XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9rbS5tb2R1bGUpO1xuXG4gICAgICAgIC8vIFNob3cgSW5mb3JtYXRpb24gYWJvdXQgQ3VycmVudCBHYW1lXG4gICAgICAgIHRoaXMuX3NlbGVjdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9rbS5jb250cm9sbGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9zZWxlY3QubW9kdWxlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXp6bGUgQ29tcGxldGUgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogV2hlbiB0aGUgUHV6emxlIGlzIENvbXBsZXRlLCB0aGUgVXNlciBzaG91bGQgYmUgaW5mb3JtZWQgd2l0aCB0aGUgcmVsZXZhbnQgXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgY29tcGxldGVDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIFNldCBQYXRoIFRha2VuXG4gICAgICAgIHRoaXMuX2ttLnBhdGggPSB0aGlzLl9rbS5ib2FyZC5wcmV2aW91cztcbiAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IHRydWU7XG5cbiAgICAgICAgLy8gUHV6emxlIENvbXBsZXRlLCBEaXNwbGF5IEluZm9cbiAgICAgICAgdGhpcy5faW5mby5zZXRUaXRsZSh0aGlzLl9rbS5nYW1lLnB1enpsZVRpdGxlKCkpO1xuICAgICAgICB0aGlzLl9pbmZvLnNldE1lc3NhZ2UodGhpcy5fa20uZ2FtZS5lbmRJbmZvKFxuICAgICAgICAgICAgdGhpcy5fa20uaHVtYW4sXG4gICAgICAgICAgICB0aGlzLl9rbS5odW1hbiA/IHRoaXMuX2ttLnN0ZXBzLmh1bWFuICsgMSA6IHRoaXMuX2ttLnN0ZXBzLmFsZ29yaXRobSxcbiAgICAgICAgICAgIHRoaXMuX2ttLnBhdGhcbiAgICAgICAgKSk7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9pbmZvLm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2ttLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmlnaHQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFJpZ2h0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICByaWdodENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIENoZXNzYm9hcmQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9rbS5ob3Jpem9udGFsTW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExlZnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIExlZnQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGxlZnRDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBDaGVzc2JvYXJkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9rbS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fa20uaG9yaXpvbnRhbE1vdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBVcCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgdXBDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBDaGVzc2JvYXJkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9rbS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fa20udmVydGljYWxNb3ZlKCk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9tZW51LnZlcnRpY2FsTW92ZSgpO1xuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3N1Yl9zZXQpXG4gICAgICAgICAgICB0aGlzLl9zdWJfbWVudS52ZXJ0aWNhbE1vdmUoKTtcbiAgICAgICAgLy8gSGFuZGxlIFNlbGVjdCBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0LmFjdGl2ZSlcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdC52ZXJ0aWNhbE1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb3duIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBEb3duIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBkb3duQ2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgQ2hlc3Nib2FyZCBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fa20uY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX2ttLnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9tZW51LnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fc3ViX3NldClcbiAgICAgICAgICAgIHRoaXMuX3N1Yl9tZW51LnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBTZWxlY3QgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdC5hY3RpdmUpXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3QudmVydGljYWxNb3ZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBBIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYUNhbGxiYWNrICgpIHsgXG4gICAgICAgIC8vIEhhbmRsZSBTZWxlY3QgQWN0aW9uXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3QuYWN0aXZlICYmICF0aGlzLl9nYW1lX3NlbGVjdGVkKSB7XG4gICAgICAgICAgICAvLyBTZXQgR2FtZVxuICAgICAgICAgICAgdGhpcy5fa20uc2V0R2FtZSh0aGlzLl9zZWxlY3QuYWNjZXB0QWN0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZV9zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIFNob3cgSW5mb3JtYXRpb24gYWJvdXQgR2FtZVxuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLl9pbmZvLnNldFRpdGxlKHRoaXMuX2ttLmdhbWUucHV6emxlVGl0bGUoKSk7XG4gICAgICAgICAgICB0aGlzLl9pbmZvLnNldE1lc3NhZ2UodGhpcy5fa20uZ2FtZS5wdXp6bGVJbmZvKCkpO1xuICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgSW5mbyBBY3Rpb25cbiAgICAgICAgZWxzZSBpZiAodGhpcy5faW5mby5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuX2luZm8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9rbS5jb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gSGFuZGxlIEVycm9yIEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9lcnJvci5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IFxuICAgICAgICAvLyBIYW5kbGUgQ2hlc3Nib2FyZCBBY3Rpb25cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fa20uY29udHJvbGxlcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9rbS5hY2NlcHRBY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yLnNldE1lc3NhZ2UodGhpcy5fa20ubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2Vycm9yLm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIE1lbnUgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX21lbnUuY29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IFNlbGVjdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5fbWVudS5hY2NlcHRBY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yl9zZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yl9tZW51ID0gdGhpcy5fbWVudS5zZXRTdWJNZW51KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9zdWJfbWVudS5tb2R1bGUsIHRydWUpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC8vIEhhbmRsZSBSZXR1cm4gU2VsZWN0ZWRcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3N1Yl9zZXQpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBPcHRpb24gU2VsZWN0ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5hY2NlcHRBY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBHYW1lIFNldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiR2FtZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ttLnNldEdhbWUodGhpcy5fc3ViX21lbnUuc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjbG9zZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgSW5mb3JtYXRpb24gYWJvdXQgQ3VycmVudCBHYW1lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZm8uc2V0VGl0bGUodGhpcy5fa20uZ2FtZS5wdXp6bGVUaXRsZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5mby5zZXRNZXNzYWdlKHRoaXMuX2ttLmdhbWUucHV6emxlSW5mbygpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIFRoZW1lIFNldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiVGhlbWVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rbS5zZXRUaGVtZSh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2Nsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIENvbnRyb2xzIEluZm9ybWF0aW9uIEdldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiQ29udHJvbHNcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmZvLnNldFRpdGxlKFwiQ29udHJvbGxlciBJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5mby5zZXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXIC0gU2FtZSBhcyBVcC1CdXR0b25cXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkQgLSBTYW1lIGFzIFJpZ2h0LUJ1dHRvblxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUyAtIFNhbWUgYXMgRG93bi1CdXR0b25cXG5cIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBIC0gU2FtZSBhcyBMZWZ0LUJ1dHRvblxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTyAtIFNhbWUgYXMgQi1CdXR0b25cXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIksgLSBTYW1lIGFzIEEtQnV0dG9uXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTcGFjZSAtIFNhbWUgYXMgU3RhcnRcXG5cIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTaGlmdCAtIFNhbWUgYXMgU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIFNlbGVjdGVkXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHRoaXMuI21haW5SZXR1cm4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgQ2hlc3Nib2FyZCBBY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuX2Vycm9yLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9rbS5jb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pbmZvLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5faW5mby5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2ttLmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9rbS5kZWNsaW5lQWN0aW9uKCk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpIFxuICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdWJfc2V0KVxuICAgICAgICAgICAgdGhpcy4jbWFpblJldHVybigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHsgdGhpcy4jbWVudSgpOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFNlbGVjdCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzZWxlY3RDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIE9ubHkgSGFuZGxlIEdhbWVwbGF5IEV2ZW50c1xuICAgICAgICBpZiAodGhpcy5fa20uY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX2ttLnNlbGVjdEFjdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1haW4gUmV0dXJuIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybiB0byB0aGUgTWFpbiBNZW51IGZyb20gdGhlIFN1Yi1NZW51LlxuICAgICAqL1xuICAgICNtYWluUmV0dXJuICgpIHtcbiAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgTWV0aG9kXG4gICAgICogXG4gICAgICogT3V0c2lkZSBvZiBjbGlja2luZyB0aGUgU3RhcnQgYnV0dG9uLCBpZiB0aGUgVXNlciBpcyB1c2luZyB0aGUgTWVudSwgYW5kIFxuICAgICAqIHNlbGVjdHMgYW4gb3B0aW9uIHN1Y2ggdGhhdCB0aGUgbWVudSBzaG91bGQgY2xvc2UsIHRoaXMgbWV0aG9kIHdpbGwgXG4gICAgICogY29tcGxldGUgdGhhdCB0YXNrLlxuICAgICAqL1xuICAgICNjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuX3N1Yl9zZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVudSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGVuIHRoZSBTdGFydCBidXR0b24gaXMgcHJlc3NlZCwgZWl0aGVyIHRoZSBNZW51IHNob3VsZCBiZSBEaXNwbGF5ZWQgXG4gICAgICogKGkuZS4gZHVyaW5nIGdhbWVwbGF5KSwgb3IgdGhlIE1lbnUgc2hvdWxkIGJlIFRha2VuIERvd24gKGkuZS4gd2hpbGUgdGhlIFxuICAgICAqIE1lbnUgaXMgdXAgb24gdGhlIHNjcmVlbikuXG4gICAgICovXG4gICAgI21lbnUgKCkge1xuICAgICAgICAvLyBNZW51IHRvIGJlIERpc3BsYXllZFxuICAgICAgICBpZiAodGhpcy5fa20uY29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gU2V0IE1lbnUgdG8gYmUgQ29udHJvbGxlZFxuICAgICAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fbWVudS5jb250cm9sbGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgTWVudVxuICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX21lbnUubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vIE1lbnUgdG8gYmUgVGFrZW4gRG93blxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldCBLbmlnaHQgdG8gYmUgQ29udHJvbGxlZFxuICAgICAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gVGFrZSBEb3duIE1lbnUvU3ViLU1lbnVcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVudS5yZXNldFN1Yk1lbnVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi4vYm9hcmQtbW9kdWxlL2JvYXJkLmpzXCI7XG5pbXBvcnQgS25pZ2h0c1RvdXIgZnJvbSBcIi4uL3B1enpsZXMva25pZ2h0cy10b3VyLmpzXCI7XG5pbXBvcnQgU2hvcnRlc3RQYXRoIGZyb20gXCIuLi9wdXp6bGVzL3Nob3J0ZXN0LXBhdGguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZ2h0c01hbmFnZXIge1xuICAgICNHQU1FX1RZUEVTID0ge1xuICAgICAgICBcIlNQXCI6IG51bGwsXG4gICAgICAgIFwiS1RcIjogbnVsbCxcbiAgICB9O1xuICAgICNUSEVNRVMgPSBbXG4gICAgICAgIFwiTm9ybWFsXCIsXG4gICAgICAgIFwiUmV0cm9cIixcbiAgICAgICAgXCJGdXR1cmVcIixcbiAgICAgICAgXCJOZW9uXCIsXG4gICAgICAgIFwiVGVybWluYWxcIixcbiAgICAgICAgXCJGYW50YXN5XCJcbiAgICBdO1xuXG4gICAgLyoqXG4gICAgICogS25pZ2h0J3MgR2FtZSBNYW5hZ2VyIENsYXNzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBLbmlnaHQncyBHYW1lLCB0aGlzIE1hbmFnZXIgQ2xhc3Mgd2lsbCBIYW5kbGUgVUkgQ29tcG9uZW50cyBzdWNoXG4gICAgICogYXMgdGhlIEN1cnJlbnQgTW92ZSBDb3VudCwgdGhlIEdhbWUgYmVpbmcgUGxheWVkLCB0aGUgQ2hlc3Nib2FyZCBhbmQgaXRzXG4gICAgICogYXNzb2NpYXRlZCBlbGVtZW50cywgYW5kIHdoZXRoZXIgdGhlIFVzZXIgaXMgY29tcGxldGluZyB0aGUgUHV6emxlIG9yIHRoZVxuICAgICAqIEFsZ29yaXRobSBpcy4gSXQgbWFuYWdlcyB0aGUgQWN0aW9ucyBvbiB0aGUgQ2hlc3Nib2FyZCB3aXRoIHRoZSBwYXJlbnQgXG4gICAgICogR2FtZSBJbnRlcmZhY2UuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGNvbXBsZXRlQ2FsbGJhY2sgUHV6emxlIENvbXBsZXRlIENhbGxiYWNrXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgR2FtZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcImtuaWdodHMtZ2FtZS1tb2R1bGVcIik7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgSW5mbyBDb21wb25lbnQgRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5faW5mb3JtYXRpb24uY2xhc3NMaXN0LmFkZChcImluZm8tY29tcG9uZW50c1wiKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBQbGF5ZXIgSW5mbyBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9wbGF5ZXIuY2xhc3NMaXN0LmFkZChcInBsYXllci1pbmZvXCIpO1xuICAgICAgICB0aGlzLl9wbGF5ZXIudGV4dENvbnRlbnQgPSBcIkhcIjtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBTdGVwcyBUYWtlbiBJbmZvIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzdGVwcy10YWtlblwiKTtcbiAgICAgICAgdGhpcy5fY3VycmVudC50ZXh0Q29udGVudCA9IDA7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgR2FtZSBUeXBlIEluZm8gRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3R5cGUuY2xhc3NMaXN0LmFkZChcImdhbWUtdHlwZVwiKTtcbiAgICAgICAgdGhpcy5fdHlwZS50ZXh0Q29udGVudCA9IFwiU1BcIjtcblxuICAgICAgICAvLyBBcHBlbmQgSW5mbyBDb21wb25lbnRzIHRvIEluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3BsYXllcik7XG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uLmFwcGVuZENoaWxkKHRoaXMuX2N1cnJlbnQpO1xuICAgICAgICB0aGlzLl9pbmZvcm1hdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl90eXBlKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIE9iamVjdHNcbiAgICAgICAgdGhpcy5fYm9hcmQgPSBuZXcgQm9hcmQoY29tcGxldGVDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuI0dBTUVfVFlQRVNbXCJTUFwiXSA9IG5ldyBTaG9ydGVzdFBhdGgoXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5rbmlnaHQueCxcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkLmtuaWdodC55LFxuICAgICAgICAgICAgOFxuICAgICAgICApO1xuICAgICAgICB0aGlzLiNHQU1FX1RZUEVTW1wiS1RcIl0gPSBuZXcgS25pZ2h0c1RvdXIoXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5rbmlnaHQueCxcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkLmtuaWdodC55LFxuICAgICAgICAgICAgOFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEFwcGVuZCBBbGwgQ29tcG9uZW50cyB0byBNb2R1bGVcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2JvYXJkLm1vZHVsZSk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9pbmZvcm1hdGlvbik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2h1bWFuID0gdHJ1ZTsgLy8gRGVmYXVsdCBpcyBVc2VyIE1vdmVzXG4gICAgICAgIHRoaXMuX2dhbWUgPSB0aGlzLiNHQU1FX1RZUEVTW3RoaXMuX3R5cGUudGV4dENvbnRlbnRdO1xuICAgICAgICB0aGlzLl9wYXRoID0gW107XG4gICAgICAgIHRoaXMuX3N0ZXBzID0ge2h1bWFuOiAwLCBhbGdvcml0aG06IDB9O1xuICAgICAgICB0aGlzLl9tc2cgPSBcIlwiO1xuXG4gICAgICAgIC8vIFNldCB0aGUgRGVmYXVsdCBUaGVtZVxuICAgICAgICB0aGlzLnNldFRoZW1lKHRoaXMuI1RIRU1FU1swXSk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxuXG4gICAgZ2V0IGJvYXJkICgpIHsgcmV0dXJuIHRoaXMuX2JvYXJkOyB9XG5cbiAgICBzZXQgYm9hcmQgKG9iaikgeyB0aGlzLl9ib2FyZCA9IG9iajsgfVxuXG4gICAgZ2V0IGNvbnRyb2xsZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbGxlcjsgfVxuXG4gICAgc2V0IGNvbnRyb2xsZXIgKGJvb2wpIHsgdGhpcy5fY29udHJvbGxlciA9IGJvb2w7IH1cblxuICAgIGdldCBodW1hbiAoKSB7IHJldHVybiB0aGlzLl9odW1hbjsgfVxuXG4gICAgc2V0IGh1bWFuIChib29sKSB7IHRoaXMuX2h1bWFuID0gYm9vbDsgfVxuXG4gICAgZ2V0IGdhbWUgKCkgeyByZXR1cm4gdGhpcy5fZ2FtZTsgfVxuXG4gICAgc2V0IGdhbWUgKG9iaikgeyB0aGlzLl9nYW1lID0gb2JqOyB9XG5cbiAgICBnZXQgcGF0aCAoKSB7IHJldHVybiB0aGlzLl9wYXRoOyB9XG5cbiAgICBzZXQgcGF0aCAoYXJyKSB7IHRoaXMuX3BhdGggPSBhcnI7IH1cblxuICAgIGdldCBzdGVwcyAoKSB7IHJldHVybiB0aGlzLl9zdGVwczsgfVxuXG4gICAgc2V0IHN0ZXBzIChkaWN0KSB7IHRoaXMuX3N0ZXBzID0gZGljdDsgfVxuICAgIFxuICAgIGdldCBtZXNzYWdlICgpIHsgcmV0dXJuIHRoaXMuX21zZzsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKHN0cikgeyB0aGlzLl9tc2cgPSBzdHI7IH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldHMgdXAgdGhlIERpc3BsYXkgZm9yIHRoZSBHYW1lLCBpbmNsdWRpbmcgdGhlIGJvYXJkLCB0aGUgaW5mb3JtYXRpb24gXG4gICAgICogcGFuZWwgYW5kIHRoZSBzdWItbW9kdWxlcyBmb3IgdGhlIGdhbWUsIHN1Y2ggYXMgdGhlIFNob3J0ZXN0IFBhdGgsIHRoZSBcbiAgICAgKiBLbmlnaHQncyBUb3VyLCBhbmQgdGhlIFN0YXJ0IFNjcmVlbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0dXAgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gU2V0IEdhbWUgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuXG4gICAgICAgIC8vIFNldCBCb2FyZCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGRpbSA9IE1hdGguZmxvb3IoTWF0aC5taW4od2lkdGgsIGhlaWdodCkgKiAwLjkpO1xuICAgICAgICB0aGlzLl9ib2FyZC5zZXREaW1lbnNpb25zKGRpbSk7XG5cbiAgICAgICAgLy8gU2V0IEluZm9ybWF0aW9uIFBhbmVsIEZvbnQgU2l6ZVxuICAgICAgICB0aGlzLl9pbmZvcm1hdGlvbi5zdHlsZS5mb250U2l6ZSA9IGAke01hdGguZmxvb3IoZGltICogMC4wNyl9cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBHYW1lIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgR2FtZSB0aGUgVXNlciBpcyBQbGF5aW5nLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBnYW1lIEdhbWUgTmFtZVxuICAgICAqL1xuICAgIHNldEdhbWUgKGdhbWUpIHtcbiAgICAgICAgLy8gSGFuZGxlIFNob3J0ZXN0IFBhdGggUHV6emxlXG4gICAgICAgIGlmIChnYW1lID09PSBcIlNob3J0ZXN0LVBhdGhcIikge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZSA9IHRoaXMuI0dBTUVfVFlQRVNbXCJTUFwiXTtcbiAgICAgICAgICAgIHRoaXMuX3R5cGUudGV4dENvbnRlbnQgPSBcIlNQXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIEtuaWdodCdzIFRvdXIgUHV6emxlXG4gICAgICAgIGlmIChnYW1lID09PSBcIktuaWdodHMtVG91clwiKSB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lID0gdGhpcy4jR0FNRV9UWVBFU1tcIktUXCJdO1xuICAgICAgICAgICAgdGhpcy5fdHlwZS50ZXh0Q29udGVudCA9IFwiS1RcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBUaGVtZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIFN0eWxpbmcgdG8gUmVmbGVjdCB0aGUgVGhlbWUgU2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIFRoZW1lIE5hbWVcbiAgICAgKi9cbiAgICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICAgICAgLy8gR2V0IFJvb3QgRWxlbWVudFxuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LmNsYXNzTmFtZSA9IHRoZW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIEtuaWdodCdzIEljb25cbiAgICAgICAgdGhpcy5fYm9hcmQuc2V0VGhlbWUodGhlbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IGFsbCB2YXJpYWJsZXMgdG8gdGhlaXIgb3JpZ2luYWwgdmFsdWVzLCBhbmQgc2V0IHRoZSBib2FyZCBzbyB0aGF0IHRoZSBcbiAgICAgKiB0aWxlcyBhcmVuJ3QgaGlnaGxpZ2h0ZWQuXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgICAvLyBSZXNldCBWYWx1ZXMgb24gRGlzcGxheVxuICAgICAgICB0aGlzLl9wbGF5ZXIudGV4dENvbnRlbnQgPSBcIkhcIjtcbiAgICAgICAgdGhpcy5fY3VycmVudC50ZXh0Q29udGVudCA9IDA7XG5cbiAgICAgICAgLy8gUmVzZXQgU3RlcHMgVGFrZW5cbiAgICAgICAgdGhpcy5faHVtYW4gPSB0cnVlO1xuICAgICAgICB0aGlzLl9zdGVwcy5odW1hbiA9IDA7XG4gICAgICAgIHRoaXMuX3N0ZXBzLmFsZ29yaXRobSA9IDA7XG4gICAgICAgIHRoaXMuX3BhdGggPSBbXTtcblxuICAgICAgICAvLyBSZXNldCBUaWxlc1xuICAgICAgICB0aGlzLl9ib2FyZC5yZXNldCgpO1xuXG4gICAgICAgIC8vIFJlc2V0IFB1enpsZVxuICAgICAgICB0aGlzLl9nYW1lLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSG9yaXpvbnRhbCBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1vdmluZyB0aGUgQ3Vyc29yIFJpZ2h0IG9yIExlZnQgb24gdGhlIENoZXNzYm9hcmQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSByaWdodCBEZWZhdWx0IEFjdGlvbiBpcyBSaWdodHdhcmRzXG4gICAgICovXG4gICAgaG9yaXpvbnRhbE1vdmUgKHJpZ2h0PXRydWUpIHsgdGhpcy5fYm9hcmQuaG9yaXpvbnRhbE1vdmUocmlnaHQpOyB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJ0aWNhbCBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1vdmluZyB0aGUgQ3Vyc29yIFVwIG9yIERvd24gb24gdGhlIENoZXNzYm9hcmQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1cCBEZWZhdWx0IEFjdGlvbiBpcyBVcHdhcmRzXG4gICAgICovXG4gICAgdmVydGljYWxNb3ZlICh1cD10cnVlKSB7IHRoaXMuX2JvYXJkLnZlcnRpY2FsTW92ZSh1cCk7IH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VwdCBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogRHVyaW5nIHRoZSBnYW1lLCBpZiBhbiBlcnJvciBvY2N1cnMsIHNheSB3aGVuIGFuIGlsbGVnYWwgbW92ZSBpcyBtYWRlLCBcbiAgICAgKiB0aGVuIGEgbWVzc2FnZSBzaG91bGQgYmUgYWJsZSB0byBiZSB2aWV3ZWQgYnkgdGhlIHVzZXIuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGVyZSBhcmUgbm8gRXJyb3JzXG4gICAgICovXG4gICAgYWNjZXB0QWN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuX2JvYXJkLmFjY2VwdEFjdGlvbigpO1xuICAgICAgICBpZiAobWVzc2FnZSAhPT0gXCJcIikgeyBcbiAgICAgICAgICAgIC8vIFNldCBFcnJvciBNZXNzYWdlXG4gICAgICAgICAgICB0aGlzLl9tc2cgPSBtZXNzYWdlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgd2l0aCBFcnJvciBNZXNzYWdlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbmNyZW1lbnQgU3RlcHMgaWYgUHV6emxlIGhhcyBDb21tZW5jZWRcbiAgICAgICAgaWYgKHRoaXMuX2JvYXJkLnB1enpsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGVwcy5odW1hbiArPSAxO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudC50ZXh0Q29udGVudCA9IHRoaXMuX3N0ZXBzLmh1bWFuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHdpdGggbm8gRXJyb3IgTWVzc2FnZVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNsaW5lIEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGlsZSBTb2x2aW5nIHRoZSBQdXp6bGUsIHRoZSBVc2VyIGNhbiB1c2UgdGhlIEIgQnV0dG9uIGFzIGFuIFVuZG8gYnV0dG9uLlxuICAgICAqL1xuICAgIGRlY2xpbmVBY3Rpb24gKCkgeyBcbiAgICAgICAgaWYgKHRoaXMuX2JvYXJkLnB1enpsaW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcHMuaHVtYW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RlcHMuaHVtYW4gLT0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50LnRleHRDb250ZW50ID0gdGhpcy5fc3RlcHMuaHVtYW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5kZWNsaW5lQWN0aW9uKCk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0aW9uIEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBEdXJpbmcgdGhlIEdhbWUsIGlmIHRoZSBVc2VyIHByZXNzZXMgU2VsZWN0LCB0aGVuIGVpdGhlciB0aGUgVXNlciBpcyBcbiAgICAgKiBzZWxlY3RpbmcgYW4gSW5pdGlhbCBQb3NpdGlvbiBmb3IgdGhlIEtuaWdodCwgb3IgdGhleSBhcmUgcmVxdWVzdGluZyBhIFxuICAgICAqIFNvbHV0aW9uIGZvciB0aGUgUHV6emxlLlxuICAgICAqL1xuICAgIHNlbGVjdEFjdGlvbiAoKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIEtuaWdodCdzIFRvdXIgaXMgdGhlIFNlbGVjdGVkIFB1enpsZVxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLl90eXBlLnRleHRDb250ZW50ID09PSBcIktUXCI7XG5cbiAgICAgICAgLy8gSGFuZGxlIFJlcXVlc3QgZm9yIFNvbHV0aW9uXG4gICAgICAgIGlmICh0aGlzLl9nYW1lLmdlbmVyYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5fYm9hcmQuc2VsZWN0QWN0aW9uKFxuICAgICAgICAgICAgICAgIGNoZWNrLCBcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLmFsZ29yaXRobSwgXG4gICAgICAgICAgICAgICAgdGhpcy4jbW92ZUNhbGxiYWNrLmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9odW1hbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyLnRleHRDb250ZW50ID0gXCJBXCI7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9sbGVyID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgU2VsZWN0aW5nIEluaXRpYWwgUG9zaXRpb25cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5zZWxlY3RBY3Rpb24oY2hlY2ssIFtdLCB0aGlzLiNtb3ZlQ2FsbGJhY2suYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIFB1enpsZVxuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX2JvYXJkLmdldFJvb3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGdyYXBoID0gdGhpcy5fYm9hcmQuZ2V0R3JhcGgoKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWUuZ2VuZXJhdGUocm9vdC54LCByb290LnksIGdyYXBoKTtcblxuICAgICAgICAgICAgLy8gSWYgU2hvcnRlc3QgUGF0aCwgVXBkYXRlIEdvYWwgVGlsZVxuICAgICAgICAgICAgaWYgKCFjaGVjaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdvYWwgPSB0aGlzLl9nYW1lLmdvYWw7XG4gICAgICAgICAgICAgICAgdGhpcy5fYm9hcmQuc2V0R29hbChnb2FsLngsIGdvYWwueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIE1vdmluZyB0aGUgS25pZ2h0IGR1cmluZyBwcm9tcHRpbmcsIHRoZSBtZXRob2Qgd2lsbCBhbHNvIFxuICAgICAqIGluY3JlbWVudCB0aGUgc3RlcHMgb24gdGhlIFVJLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IE5leHQgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IE5leHQgWS1Qb3NpdGlvblxuICAgICAqL1xuICAgICNtb3ZlQ2FsbGJhY2sgKHgsIHkpIHtcbiAgICAgICAgLy8gVXBkYXRlIFVJIE1vdmUgQ291bnQgRWxlbWVudFxuICAgICAgICB0aGlzLl9zdGVwcy5hbGdvcml0aG0gKz0gMTtcbiAgICAgICAgdGhpcy5fY3VycmVudC50ZXh0Q29udGVudCA9IHRoaXMuX3N0ZXBzLmFsZ29yaXRobTtcblxuICAgICAgICAvLyBNb3ZlIEtuaWdodCB0byBEZXNpcmVkIENvb3JkaW5hdGVcbiAgICAgICAgdGhpcy5fYm9hcmQubW92ZSh4LCB5KTtcbiAgICB9XG59IiwiaW1wb3J0IFB1enpsZU1vZHVsZSBmcm9tIFwiLi9wdXp6bGUtbW9kdWxlLmpzXCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4uLy4uL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLbmlnaHRzVG91ciBleHRlbmRzIFB1enpsZU1vZHVsZSB7XG4gICAgLyoqXG4gICAgICogS25pZ2h0J3MgVG91ciBQdXp6bGVcbiAgICAgKiBcbiAgICAgKiBVdGlsaXNpbmcgV2FybnNkb3JmZidzIEFsZ29yaXRobSwgdGhpcyBQdXp6bGUgQ2xhc3MgZG9lcyBub3QgZmluZCBhIGdvYWxcbiAgICAgKiB2ZXJ0ZXggdGhhdCB0aGUgVXNlciBtdXN0IG5hdmlnYXRlIHRvLCBidXQgaW5zdGVhZCwgdGhlIFVzZXIgbXVzdCBuYXZpZ2F0ZVxuICAgICAqIGFyb3VuZCB0aGUgQ2hlc3Nib2FyZCwgZXhwbG9yaW5nIGV2ZXJ5IHNpbmdsZSB0aWxlIGV4YWN0bHkgb25jZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBJbml0aWFsIFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBJbml0aWFsIFktUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBDaGVzc2JvYXJkIFNpemVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSwgc2l6ZSkge1xuICAgICAgICBzdXBlcih4LCB5LCBzaXplKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXp6bGUgVGl0bGUgTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgVGl0bGUgb2YgdGhlIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBQdXp6bGUgVGl0bGVcbiAgICAgKi9cbiAgICBwdXp6bGVUaXRsZSAoKSB7IHJldHVybiBcIktuaWdodCdzIFRvdXJcIjsgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1enpsZSBJbmZvcm1hdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNZXNzYWdlIGFib3V0IHRoZSBQdXp6bGVzIEluZm9ybWF0aW9uLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFB1enpsZSBJbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHB1enpsZUluZm8gKCkgeyBcbiAgICAgICAgcmV0dXJuIFwiR2l2ZW4gdGhlIDggYnkgOCBib2FyZCwgdXNlIHRoZSBTZWxlY3QgXCIgK1xuICAgICAgICAgICAgXCJCdXR0b24gdG8gY2hvb3NlIHlvdXIgSW5pdGlhbCBUaWxlLiBUaGVuIHlvdSBcIiArXG4gICAgICAgICAgICBcIndpbGwgbmVlZCB0byBtb3ZlIHRoZSBLbmlnaHQsIGFjY29yZGluZyB0byB0aGUgXCIgK1xuICAgICAgICAgICAgXCJydWxlcyBvZiBjaGVzcywgc3VjaCB0aGF0IGl0IHZpc2l0cyBldmVyeSB0aWxlIFwiICtcbiAgICAgICAgICAgIFwib24gdGhlIGNoZXNzYm9hcmQgZXhhY3RseSBvbmNlLlxcbkJ5IGNsaWNraW5nIFwiICtcbiAgICAgICAgICAgIFwidGhlIFNlbGVjdCBidXR0b24gYWdhaW4sIHRoZSBrbmlnaHQgd2lsbCBhdXRvbWF0aWNhbGx5IFwiICtcbiAgICAgICAgICAgIFwibW92ZSBhbmQgdmlzaXQgZWFjaCB0aWxlIGV4YWN0bHkgb25jZS5cXG5cIiArXG4gICAgICAgICAgICBcIlRvIHJlc2V0LCBwcmVzcyBzdGFydCBhbmQgc2VsZWN0IHRoZSBTaG9ydGVzdCBQYXRoIHB1enpsZS5cIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmQgb2YgUHV6emxlIEluZm9ybWF0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIFB1enpsZSBoYXMgYmVlbiBjb21wbGV0ZWQsIGVpdGhlciBieSB0aGUgVXNlciBvciBieSB0aGUgQWxnb3JpdGhtLCBcbiAgICAgKiB0aGVuIGEgbWVzc2FnZSBzaG91bGQgYmUgcHJlc2VudGVkIHRvIHRoZSBVc2VyIGFib3V0IGhvdyB3ZWxsIHRoZSBwdXp6bGUgXG4gICAgICogd2FzIGNvbXBsZXRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGh1bWFuIEh1bWFuIG9yIEFsZ29yaXRobVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwcyBOdW1iZXIgb2YgU3RlcHMgdG8gQ29tcGxldGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoIFBhdGggdGFrZW5cbiAgICAgKiBAcmV0dXJucyBFbmQgb2YgUHV6emxlIEluZm9yYW10aW9uXG4gICAgICovXG4gICAgZW5kSW5mbyAoaHVtYW4sIHN0ZXBzLCBwYXRoKSB7IFxuICAgICAgICAvLyBUb2dnbGUgR2VuZXJhdGVkXG4gICAgICAgIHRoaXMuX2dlbmVyYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIE1haW4gTWVzc2FnZVxuICAgICAgICBsZXQgbXNnID0gaHVtYW4gPyBcbiAgICAgICAgICAgIGBDb25ncmF0dWxhdGlvbnMhIFlvdSBjb21wbGV0ZWQgdGhlIHB1enpsZSBgICtcbiAgICAgICAgICAgIGBpbiAke3N0ZXBzfSBzdGVwcyFcXG5UaGUgQWxnb3JpdGhtJ3MgYmVzdCBgICtcbiAgICAgICAgICAgIGB3YXMgJHt0aGlzLl9hbGdvcml0aG1fcGF0aC5sZW5ndGggLSAxfSBzdGVwcy5gIDogXG4gICAgICAgICAgICBgV2FybnNkb3JmZidzIEFsZ29yaXRobSBmb3VuZCBhIHBhdGggaW4gYCArXG4gICAgICAgICAgICBgJHtzdGVwcyAtIDF9IHN0ZXBzLmA7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIG1zZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEtuaWdodCdzIFRvdXIgUHV6emxlLCBXYXJuc2RvcmZmJ3MgQWxnb3JpdGhtIGlzIGltcGxlbWVudGVkIHRvIFxuICAgICAqIGZpbmQgYSBmdWxsIHRvdXIgb2YgdGhlIENoZXNzYm9hcmQsIHRoZSBhbGdvcml0aG0gY2FuIGJlIGJyb2tlbiBkb3duIFxuICAgICAqIHVzaW5nIFdhcm5zZG9yZmYncyBSdWxlOlxuICAgICAqICAxLiBTdGFydCBmcm9tIGFueSBpbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBLbmlnaHQgb24gdGhlIGJvYXJkLlxuICAgICAqICAyLiBBbHdheXMgbW92ZSB0byBhbiBhZGphY2VudCwgdW52aXNpdGVkIHRpbGUgd2l0aCBtaW5pbWFsIGRlZ3JlZSAoaS5lLlxuICAgICAqICAgICBtaW5pbXVtIG51bWJlciBvZiB1bnZpc2l0ZWQgYWRqYWNlbnQgdGlsZXMpLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFJvb3QgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFJvb3QgWS1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7R3JhcGh9IGdyYXBoIEdyYXBoIG9mIENoZXNzYm9hcmRcbiAgICAgKi9cbiAgICBnZW5lcmF0ZSAoeCwgeSwgZ3JhcGgpIHtcbiAgICAgICAgLy8gR2V0IFJvb3QgVmVydGV4XG4gICAgICAgIGNvbnN0IHJvb3QgPSBncmFwaC5nZXRWZXJ0ZXgoeCwgeSk7XG5cbiAgICAgICAgLy8gU2V0IEFsbCBWZXJ0aWNlcyBNb3ZlIHRvIGJlIDBcbiAgICAgICAgZm9yIChsZXQgdiBvZiBncmFwaC52ZXJ0aWNlcygpKSB7XG4gICAgICAgICAgICB2Lm1vdmUgPSAwO1xuICAgICAgICAgICAgdi52aXNpdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgUm9vdCB0byBiZSAxc3QgTW92ZVxuICAgICAgICByb290Lm1vdmUgPSAxO1xuICAgICAgICByb290LnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIEJ1aWxkIFJldmVyc2UgUGF0aFxuICAgICAgICBsZXQgYmFja3dhcmRzID0gW3Jvb3RdO1xuXG4gICAgICAgIC8vIFNldHVwIFZlcnRleCB0byBDeWNsZSB0aHJvdWdoIFZlcnRpY2VzXG4gICAgICAgIGxldCBsYXN0ID0gcm9vdC5tb3ZlO1xuICAgICAgICBsZXQgYXV4ID0gcm9vdDtcbiAgICAgICAgd2hpbGUgKGF1eC5tb3ZlICE9PSBNYXRoLnBvdyh0aGlzLl9zaXplLCAyKSkge1xuICAgICAgICAgICAgLy8gRmluZCBOZWlnaGJvdXIgd2l0aCBGZXdlc3QgTmVpZ2JvdXJzXG4gICAgICAgICAgICBsZXQgbWluID0gMTAwMDAwMDtcbiAgICAgICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXV4Lm5laWdoYm91cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gTmVpZ2hib3VyXG4gICAgICAgICAgICAgICAgbGV0IG5laWdoYm91ciA9IGdyYXBoLmdldFZlcnRleChcbiAgICAgICAgICAgICAgICAgICAgYXV4Lm5laWdoYm91cnNbaV0ueCwgXG4gICAgICAgICAgICAgICAgICAgIGF1eC5uZWlnaGJvdXJzW2ldLnlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gQ291bnQgTnVtYmVyIG9mIFVudmlzaXRlZCBOZWlnaGJvdXJzXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuIG9mIG5laWdoYm91ci5uZWlnaGJvdXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbi52aXNpdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gTGVhc3QgQWNjZXNzaWJsZSBOZWlnaGJvdXRcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPCBtaW4gJiYgIW5laWdoYm91ci52aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNvdW50O1xuICAgICAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IExlYXN0IEFjY2Vzc2libGUgVmVydGV4IHRvIGJlIE5leHQgTW92ZVxuICAgICAgICAgICAgYXV4ID0gYXV4Lm5laWdoYm91cnNbaWR4XTtcbiAgICAgICAgICAgIGF1eC52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGF1eC5tb3ZlID0gbGFzdCArIDE7XG4gICAgICAgICAgICBsYXN0ID0gYXV4Lm1vdmU7XG4gICAgICAgICAgICBiYWNrd2FyZHMucHVzaChhdXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV2ZXJzZSBCYWNrd2FyZHMgUGF0aFxuICAgICAgICB3aGlsZSAoYmFja3dhcmRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLl9hbGdvcml0aG1fcGF0aC5wdXNoKGJhY2t3YXJkcy5wb3AoKSk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIEdlbmVyYXRlZFxuICAgICAgICB0aGlzLl9nZW5lcmF0ZWQgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgR3JhcGggZnJvbSBcIi4uLy4uL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXp6bGVNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIFB1enpsZSBNb2R1bGVcbiAgICAgKiBcbiAgICAgKiBCYXNlIENsYXNzIGZvciB0aGUgU2hvcnRlc3QgUGF0aCBhbmQgS25pZ2h0J3MgVG91ciBQdXp6bGVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEluaXRpYWwgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IEluaXRpYWwgWS1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFNpemUgb2YgQm9hcmRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSwgc2l6ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlcztcbiAgICAgICAgdGhpcy5fcm9vdCA9IHt4OiB4LCB5OiB5fTtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuX2dlbmVyYXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9hbGdvcml0aG1fcGF0aCA9IFtdO1xuICAgIH1cblxuICAgIGdldCByb290ICgpIHsgcmV0dXJuIHRoaXMuX3Jvb3Q7IH1cblxuICAgIHNldCByb290IChkaWN0KSB7IHRoaXMuX3Jvb3QgPSBkaWN0OyB9XG4gICAgXG4gICAgZ2V0IGdlbmVyYXRlZCAoKSB7IHJldHVybiB0aGlzLl9nZW5lcmF0ZWQ7IH1cblxuICAgIHNldCBnZW5lcmF0ZWQgKGJvb2wpIHsgdGhpcy5fZ2VuZXJhdGVkID0gYm9vbDsgfVxuXG4gICAgZ2V0IGFsZ29yaXRobSAoKSB7IHJldHVybiB0aGlzLl9hbGdvcml0aG1fcGF0aDsgfVxuXG4gICAgc2V0IGFsZ29yaXRobSAoYXJyKSB7IHRoaXMuX2FsZ29yaXRobV9wYXRoID0gYXJyOyB9XG5cbiAgICAvKipcbiAgICAgKiBQdXp6bGUgVGl0bGUgTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgVGl0bGUgb2YgdGhlIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBQdXp6bGUgVGl0bGVcbiAgICAgKi9cbiAgICBwdXp6bGVUaXRsZSAoKSB7IHJldHVybiBcIlwiOyB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHV6emxlIEluZm9ybWF0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1lc3NhZ2UgYWJvdXQgdGhlIFB1enpsZXMgSW5mb3JtYXRpb24uXG4gICAgICogXG4gICAgICogQHJldHVybnMgUHV6emxlIEluZm9ybWF0aW9uXG4gICAgICovXG4gICAgcHV6emxlSW5mbyAoKSB7IHJldHVybiBcIlwiOyB9XG5cbiAgICAvKipcbiAgICAgKiBFbmQgb2YgUHV6emxlIEluZm9ybWF0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIFB1enpsZSBoYXMgYmVlbiBjb21wbGV0ZWQsIGVpdGhlciBieSB0aGUgVXNlciBvciBieSB0aGUgQWxnb3JpdGhtLCBcbiAgICAgKiB0aGVuIGEgbWVzc2FnZSBzaG91bGQgYmUgcHJlc2VudGVkIHRvIHRoZSBVc2VyIGFib3V0IGhvdyB3ZWxsIHRoZSBwdXp6bGUgXG4gICAgICogd2FzIGNvbXBsZXRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGh1bWFuIEh1bWFuIG9yIEFsZ29yaXRobVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwcyBOdW1iZXIgb2YgU3RlcHMgdG8gQ29tcGxldGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoIFBhdGggdGFrZW5cbiAgICAgKiBAcmV0dXJucyBFbmQgb2YgUHV6emxlIEluZm9yYW10aW9uXG4gICAgICovXG4gICAgZW5kSW5mbyAoaHVtYW4sIHN0ZXBzLCBwYXRoKSB7IHJldHVybiBcIlwiOyB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGdpdmVuIFB1enpsZSBUeXBlLCB0aGUgQWxnb3JpdGhtIHVzZWQgZm9yIHNvbHZpbmcgdGhlIFB1enpsZSB3aWxsIFxuICAgICAqIGJlIGltcGxlbWVudGVkIHRvIGNyZWF0ZSB0aGUgUGF0aCByZXF1aXJlZCBmb3IgdGhlIEtuaWdodCB0byBjb21wbGV0ZSB0aGUgXG4gICAgICogUHV6emxlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFJvb3QgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFJvb3QgWS1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7R3JhcGh9IGdyYXBoIEdyYXBoIG9mIENoZXNzYm9hcmRcbiAgICAgKi9cbiAgICBnZW5lcmF0ZSAoeCwgeSwgZ3JhcGgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXNldCBQdXp6bGUuXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB0aGlzLl9nZW5lcmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtX3BhdGggPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFB1enpsZU1vZHVsZSBmcm9tIFwiLi9wdXp6bGUtbW9kdWxlLmpzXCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4uLy4uL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qc1wiO1xuaW1wb3J0IFF1ZXVlIGZyb20gXCIuLi8uLi9kYXRhLXN0cnVjdHVyZXMvcXVldWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcnRlc3RQYXRoIGV4dGVuZHMgUHV6emxlTW9kdWxlIHtcbiAgICAvKipcbiAgICAgKiBTaG9ydGVzdCBQYXRoIFB1enpsZVxuICAgICAqIFxuICAgICAqIFV0aWxpc2luZyBhIG1vZGlmaWVkIEJyZWFkdGgtRmlyc3QgU2VhcmNoIEFsZ29yaXRobSwgdGhpcyBwdXp6bGUgd2lsbFxuICAgICAqIGluaXRpYWxseSByYW5kb21seSBnZW5lcmF0ZSBhIEdvYWwgUG9zaXRpb24gd2hlcmUgdGhlIFVzZXIgbXVzdCBhdHRlbXB0XG4gICAgICogdG8gZmluZCB0aGUgU2hvcnRlc3QgUGF0aCB0bywgb3IgdXNlIHRoZSBBbGdvcml0aG0ncyBHZW5lcmF0ZWQgU2hvcnRlc3RcbiAgICAgKiBQYXRoIHRvIHRoZSBHb2FsIFBvc2l0aW9uLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEluaXRpYWwgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IEluaXRpYWwgWS1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIENoZXNzYm9hcmQgU2l6ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5LCBzaXplKSB7IHN1cGVyKHgsIHksIHNpemUpOyB9XG5cbiAgICBnZXQgZ29hbCAoKSB7IHJldHVybiB0aGlzLl9nb2FsOyB9XG5cbiAgICBzZXQgZ29hbCAoZGljdCkgeyB0aGlzLl9nb2FsID0gZGljdDsgfVxuXG4gICAgLyoqXG4gICAgICogUHV6emxlIFRpdGxlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybnMgdGhlIFRpdGxlIG9mIHRoZSBQdXp6bGUuXG4gICAgICogXG4gICAgICogQHJldHVybnMgUHV6emxlIFRpdGxlXG4gICAgICovXG4gICAgcHV6emxlVGl0bGUgKCkgeyByZXR1cm4gXCJTaG9ydGVzdCBQYXRoXCI7IH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdXp6bGUgSW5mb3JtYXRpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogTWVzc2FnZSBhYm91dCB0aGUgUHV6emxlcyBJbmZvcm1hdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBQdXp6bGUgSW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBwdXp6bGVJbmZvICgpIHsgXG4gICAgICAgIHJldHVybiBcIlVzZSB0aGUgU2VsZWN0IEJ1dHRvbiB0byBjaG9vc2UgeW91ciBcIiArXG4gICAgICAgICAgICBcImluaXRpYWwgVGlsZS4gT25jZSBzZWxlY3RlZCwgYSBHb2FsIHRpbGUgd2lsbCBcIiArXG4gICAgICAgICAgICBcImJlY29tZSBoaWdobGlnaHRlZCwgYW5kIHlvdSBoYXZlIHRvIHRyeSB0byByZWFjaCBcIiArXG4gICAgICAgICAgICBcInRoYXQgdGlsZSBpbiBhcyBmZXcgbW92ZXMgYXMgcG9zc2libGUuXFxuQnkgY2xpY2tpbmcgXCIgK1xuICAgICAgICAgICAgXCJ0aGUgU2VsZWN0IGJ1dHRvbiBhZ2FpbiwgdGhlIGtuaWdodCB3aWxsIGF1dG9tYXRpY2FsbHkgXCIgK1xuICAgICAgICAgICAgXCJtb3ZlIHRvIHRoZSBHb2FsIHRpbGUgaW4gdGhlIGZld2VzdCBwb3NzaWJsZSBtb3Zlcy5cXG5cIiArXG4gICAgICAgICAgICBcIlRvIHJlc2V0LCBwcmVzcyBzdGFydCBhbmQgc2VsZWN0IHRoZSBTaG9ydGVzdCBQYXRoIHB1enpsZS5cIjsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5kIG9mIFB1enpsZSBJbmZvcm1hdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGVuIHRoZSBQdXp6bGUgaGFzIGJlZW4gY29tcGxldGVkLCBlaXRoZXIgYnkgdGhlIFVzZXIgb3IgYnkgdGhlIEFsZ29yaXRobSwgXG4gICAgICogdGhlbiBhIG1lc3NhZ2Ugc2hvdWxkIGJlIHByZXNlbnRlZCB0byB0aGUgVXNlciBhYm91dCBob3cgd2VsbCB0aGUgcHV6emxlIFxuICAgICAqIHdhcyBjb21wbGV0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBodW1hbiBIdW1hbiBvciBBbGdvcml0aG1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RlcHMgTnVtYmVyIG9mIFN0ZXBzIHRvIENvbXBsZXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aCBQYXRoIHRha2VuXG4gICAgICogQHJldHVybnMgRW5kIG9mIFB1enpsZSBJbmZvcmFtdGlvblxuICAgICAqL1xuICAgIGVuZEluZm8gKGh1bWFuLCBzdGVwcywgcGF0aCkgeyBcbiAgICAgICAgLy8gVG9nZ2xlIEdlbmVyYXRlZFxuICAgICAgICB0aGlzLl9nZW5lcmF0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBNYWluIE1lc3NhZ2VcbiAgICAgICAgbGV0IG1zZyA9IGh1bWFuID8gXG4gICAgICAgICAgICBgQ29uZ3JhdHVsYXRpb25zISBZb3UgY29tcGxldGVkIHRoZSBwdXp6bGUgYCArXG4gICAgICAgICAgICBgaW4gJHtzdGVwc30gc3RlcHMhXFxuVGhlIEFsZ29yaXRobSdzIGJlc3QgYCArXG4gICAgICAgICAgICBgd2FzICR7dGhpcy5fYWxnb3JpdGhtX3BhdGgubGVuZ3RofSBzdGVwcy5cXG5gICtcbiAgICAgICAgICAgIGBIZXJlJ3MgeW91ciBwYXRoOlxcbmAgOiBcbiAgICAgICAgICAgIGBUaGUgQnJlYWR0aC1GaXJzdCBTZWFyY2ggQWxnb3JpdGhtIGZvdW5kIGEgYCArXG4gICAgICAgICAgICBgcGF0aCBpbiAke3N0ZXBzfSBzdGVwcy5cXG5IZXJlJ3MgaXRzIHBhdGg6XFxuYDtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBQYXRoIHRha2VuIHRvIE1lc3NhZ2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtc2cgKz0gYCgke3BhdGhbaV0ueX0sICR7cGF0aFtpXS54fSlgO1xuICAgICAgICAgICAgaWYgKGkgPCBwYXRoLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgbXNnICs9IFwiPT5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXNnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgU2hvcnRlc3QgUGF0aCBQdXp6bGUsIGEgbW9kaWZpZWQgdmVyc2lvbiBvZiB0aGUgQnJlYWR0aC1GaXJzdCBcbiAgICAgKiBTZWFyY2ggQWxnb3JpdGhtIGlzIHV0aWxpc2VkIGZvciBmaW5kaW5nIHRoZSBzaG9ydGVzdCBwYXRoIGZyb20gdGhlIFJvb3QgXG4gICAgICogVmVydGV4IHRvIHRoZSBHb2FsIFZlcnRleCwgdGhlIGxhdHRlciBvZiB3aGljaCBpcyByYW5kb21seSBnZW5lcmF0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggUm9vdCBYLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgUm9vdCBZLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtHcmFwaH0gZ3JhcGggR3JhcGggb2YgQ2hlc3Nib2FyZFxuICAgICAqL1xuICAgIGdlbmVyYXRlICh4LCB5LCBncmFwaCkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFJvb3QgJiBHb2FsIFZlcnRleFxuICAgICAgICB0aGlzLl9yb290ID0ge3g6IHgsIHk6IHl9O1xuICAgICAgICB0aGlzLl9nb2FsID0ge3g6IDAsIHk6IDB9O1xuXG4gICAgICAgIC8vIEVuc3VyZSBHb2FsIGlzIG5vdCB0aGUgUm9vdCBWZXJ0ZXhcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIFJhbmRvbSBOdW1iZXJzIGZvciBCb3RoIENvb3JkaW5hdGVzXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9nb2FsKS5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nb2FsW2Nvb3JkXSA9IHRoaXMuI3JhbmRvbSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlamVjdCBQb3NpdGlvbnMgdGhhdCBhcmUgUm9vdFxuICAgICAgICAgICAgaWYgKHRoaXMuX2dvYWwueCAhPT0geCAmJiB0aGlzLl9nb2FsLnkgIT09IHkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgR3JhcGggc28gQWxsIFZlcnRpY2VzIGFyZSBVbnZpc2l0ZWRcbiAgICAgICAgZm9yIChsZXQgdiBvZiBncmFwaC52ZXJ0aWNlcygpKVxuICAgICAgICAgICAgdi52aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2V0dXAgUm9vdCBhbmQgR29hbCBWZXJ0ZXggVmFyaWFibGVzXG4gICAgICAgIGNvbnN0IHJvb3QgPSBncmFwaC5nZXRWZXJ0ZXgoeCwgeSk7XG4gICAgICAgIGNvbnN0IGdvYWwgPSBncmFwaC5nZXRWZXJ0ZXgodGhpcy5fZ29hbC54LCB0aGlzLl9nb2FsLnkpO1xuICAgICAgICByb290LnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFNldHVwIFBhcmVudHMgQXJyYXkgYW5kIFF1ZXVlXG4gICAgICAgIGxldCBwYXJlbnRzID0gW107XG4gICAgICAgIGNvbnN0IHF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gICAgICAgIHF1ZXVlLmVucXVldWUocm9vdCk7XG5cbiAgICAgICAgLy8gVmlzaXQgQWxsIE5laWdoYm91cnNcbiAgICAgICAgd2hpbGUgKCFxdWV1ZS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXggPSBxdWV1ZS5kZXF1ZXVlKCk7XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIG91dCBpZiBHb2FsIGlzIEZvdW5kXG4gICAgICAgICAgICBpZiAodmVydGV4LnNhbWVWZXJ0ZXgoZ29hbCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBFbnF1ZXVlIE5laWdoYm91cnNcbiAgICAgICAgICAgIHZlcnRleC5uZWlnaGJvdXJzLmZvckVhY2gobmVpZ2hib3VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW5laWdoYm91ci52aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91ci52aXNpdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBQdXNoIFBhcmVudCBpbnRvIEFycmF5XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCh7dmVydGV4OiBuZWlnaGJvdXIsIHBhcmVudDogdmVydGV4fSk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLmVucXVldWUobmVpZ2hib3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdlbmVyYXRlIFNob3J0ZXN0IFBhdGhcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtX3BhdGgucHVzaChnb2FsKTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBnb2FsO1xuXG4gICAgICAgIC8vIEdldCBQcmV2aW91cyBWZXJ0aWNlc1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgLy8gU2VhcmNoIFBhcmVudHMgZm9yIFByZXZpb3VzIFZlcnRpY2VzXG4gICAgICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50c1tpXS52ZXJ0ZXguc2FtZVZlcnRleChjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBQYXJlbnQgdG8gUGF0aFxuICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHNbaWR4XS5wYXJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIG91dCBpZiBSb290IEZvdW5kXG4gICAgICAgICAgICBpZiAoY3VycmVudC5zYW1lVmVydGV4KHJvb3QpKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIHRvIFBhdGhcbiAgICAgICAgICAgIHRoaXMuX2FsZ29yaXRobV9wYXRoLnB1c2goY3VycmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUb2dnbGUgR2VuZXJhdGVkXG4gICAgICAgIHRoaXMuX2dlbmVyYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmFuZG9tIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCB0aGUgc2l6ZSBvZiB0aGUgQ2hlc3Nib2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBSYW5kb20gTnVtYmVyIGJldHdlZW4gMCBhbmQgQm9hcmQgU2l6ZVxuICAgICAqL1xuICAgICNyYW5kb20gKCkgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fc2l6ZSk7IH1cbn0iLCJpbXBvcnQgUG9wVXAgZnJvbSBcIi4vcG9wLXVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQm94IGV4dGVuZHMgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIEVycm9yIEJveCBDbGFzc1xuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIHVwZGF0aW5nIHRoZSBVc2VyIHdpdGggdGhlIGN1cnJlbnQgZXJyb3IuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcIkVycm9yXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE1lc3NhZ2UgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImVycm9yLW1lc3NhZ2VcIik7XG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl9tZXNzYWdlKTtcblxuICAgICAgICAvLyBTZXQgQWN0aXZlIHRvIGJlIEZhbHNlXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBtZXNzYWdlICgpIHsgcmV0dXJuIHRoaXMuX21lc3NhZ2U7IH1cblxuICAgIHNldCBtZXNzYWdlIChlbGVtKSB7IHRoaXMuX21lc3NhZ2UgPSBlbGVtOyB9XG5cbiAgICBnZXQgYWN0aXZlICgpIHsgcmV0dXJuIHRoaXMuX2FjdGl2ZTsgfVxuXG4gICAgc2V0IGFjdGl2ZSAoYm9vbCkgeyB0aGlzLl9hY3RpdmUgPSBib29sOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgTWVzc2FnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIEVycm9yIEJveCB3aXRoIHRoZSBtb3N0IHVwIHRvIGRhdGUgZXJyb3IuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR4dCBFcnJvciBNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TWVzc2FnZSAodHh0KSB7IFxuICAgICAgICB0aGlzLl9tZXNzYWdlLnRleHRDb250ZW50ID0gdHh0OyBcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IFBvcFVwIGZyb20gXCIuL3BvcC11cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvQm94IGV4dGVuZHMgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIEluZm9ybWF0aW9uIEJveCBDbGFzc1xuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIHVwZGF0aW5nIHRoZSBVc2VyIHdpdGggSW5mb3JtYXRpb24gcmVsYXRpbmcgdG8gdGhlIGN1cnJlbnQgR2FtZSBcbiAgICAgKiBiZWluZyBwbGF5ZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcIkluZm9ybWF0aW9uXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE1lc3NhZ2UgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImluZm8tbWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX21lc3NhZ2UpO1xuXG4gICAgICAgIC8vIFNldCBBY3RpdmUgdG8gYmUgRmFsc2VcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UgKCkgeyByZXR1cm4gdGhpcy5fbWVzc2FnZTsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKGVsZW0pIHsgdGhpcy5fbWVzc2FnZSA9IGVsZW07IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgUG9wLVVwIEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBTZXQgQ29udGFpbmVyIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuXG4gICAgICAgIC8vIFNldCBCbHVycmVkIEJhY2tnb3VuZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGJveFcgPSBNYXRoLmZsb29yKHdpZHRoICogMC45KTtcbiAgICAgICAgY29uc3QgYm94SCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC45KTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5oZWlnaHQgPSBgJHtib3hIfXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBQb3NpdGlvblxuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuMSk7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC4xKTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG5cbiAgICAgICAgLy8gU2V0IE1lc3NhZ2UgRm9udCBTaXplXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gTWF0aC5mbG9vcihNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAqIDAuMDQpO1xuICAgICAgICB0aGlzLl9tZXNzYWdlLnN0eWxlLmZvbnRTaXplID0gYCR7Zm9udFNpemV9cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBUaXRsZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIFRpdGxlIG9mIHRoZSBJbmZvcm1hdGlvbiBCb3guXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR4dCBOZXcgVGl0bGVcbiAgICAgKi9cbiAgICBzZXRUaXRsZSAodHh0KSB7IHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gdHh0OyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgTWVzc2FnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIEluZm9ybWF0aW9uIEJveCB3aXRoIHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gcmVsYXRlZCB0byB0aGUgXG4gICAgICogZ2FtZSBiZWluZyBwbGF5ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR4dCBJbmZvcm1hdGlvbiBNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TWVzc2FnZSAodHh0KSB7IFxuICAgICAgICB0aGlzLl9tZXNzYWdlLnRleHRDb250ZW50ID0gdHh0OyBcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IFBvcFVwIGZyb20gXCIuL3BvcC11cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFzZSBleHRlbmRzIFBvcFVwIHtcbiAgICAvKipcbiAgICAgKiBNZW51IEJhc2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBCYXNlIENsYXNzIGZvciBNYWluIE1lbnVzIG9yIFN1Yi1NZW51cy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2F0ZWdvcmllcyBDYXRlZ29yaWVzIGZvciBNZW51XG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgc3VwZXIoXCJNZW51XCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE9wdGlvbiBET00gRWxlbWVudHNcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5pZCA9IGAke3N1Yi5rZXkudG9Mb3dlckNhc2UoKX0tb3B0aW9uYDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHN1Yi5rZXk7XG4gICAgICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdWlsZCBSZXR1cm4gT3B0aW9uIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX3JldHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3JldHVybi5jbGFzc0xpc3QuYWRkKFwicmV0dXJuLW9wdGlvblwiKTtcbiAgICAgICAgdGhpcy5fcmV0dXJuLnRleHRDb250ZW50ID0gXCJSZXR1cm5cIjtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX3JldHVybik7XG5cbiAgICAgICAgLy8gU2V0dXAgQ3Vyc29yXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX25hbWUgPSBjYXRlZ29yaWVzLmtleTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgICBrZXk6IHRoaXMuX25hbWUsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBvcHRpb25zICgpIHsgcmV0dXJuIHRoaXMuX29wdGlvbnM7IH1cblxuICAgIHNldCBvcHRpb25zIChhcnIpIHsgdGhpcy5fb3B0aW9ucyA9IGFycjsgfVxuXG4gICAgZ2V0IHJldHVybiAoKSB7IHJldHVybiB0aGlzLl9yZXR1cm47IH1cblxuICAgIHNldCByZXR1cm4gKGVsZW0pIHsgdGhpcy5fcmV0dXJuID0gZWxlbTsgfVxuXG4gICAgZ2V0IG5hbWUgKCkgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuXG4gICAgc2V0IG5hbWUgKHN0cikgeyB0aGlzLl9uYW1lID0gc3RyOyB9XG5cbiAgICBnZXQgc2VsZWN0ZWQgKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cblxuICAgIHNldCBzZWxlY3RlZCAoZGljdCkgeyB0aGlzLl9zZWxlY3RlZCA9IGRpY3Q7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgTWVudSBCb3gsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSB0byBiZSBzZXQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFNjcmVlbiBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgU2NyZWVuIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgc3VwZXIuc2V0RGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvLyBTZXQgT3B0aW9ucyBXaWR0aFxuICAgICAgICBjb25zdCBib3hXID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuNik7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uc3R5bGUud2lkdGggPSBgJHtib3hXfXB4YDsgfSk7XG4gICAgICAgIHRoaXMuX3JldHVybi5zdHlsZS53aWR0aCA9IGAke2JveFd9cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBDdXJzb3IgTWV0aG9kXG4gICAgICogXG4gICAgICogV2hpbGUgY3ljbGluZyB0aHJvdWdoIHRoZSBNZW51IE9wdGlvbnMsIGlmIHRoZSBjdXJzb3IgaXMgb24gYW4gb3B0aW9uLCBcbiAgICAgKiB0aGVuIHRoZSBvcHRpb24gc2hvdWxkIGJlIGhpZ2hsaWdodGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb24gQ3Vyc29yIG9uIE9wdGlvblxuICAgICAqL1xuICAgIHNldEN1cnNvciAob249dHJ1ZSkge1xuICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIE9wdGlvblxuICAgICAgICBpZiAodGhpcy5fY3VycmVudCA9PT0gdGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5jb250YWlucyhcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmIChvbiAmJiAhY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3JcIik7XG4gICAgICAgICAgICBpZiAoIW9uICYmIGNoZWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuX3JldHVybi5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yXCIpO1xuICAgICAgICB9IFxuICAgICAgICAvLyBIYW5kbGUgT3RoZXIgT3B0aW9uc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QuY29udGFpbnMoXCJjdXJzb3JcIik7XG4gICAgICAgICAgICBpZiAob24gJiYgIWNoZWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmICghb24gJiYgY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZpbmcgdGhlIEN1cnNvciBVcCBvciBEb3duIG9uIHRoZSBNZW51LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXAgRGVmYXVsdCBBY3Rpb24gaXMgVXB3YXJkc1xuICAgICAqL1xuICAgIHZlcnRpY2FsTW92ZSAodXA9dHJ1ZSkge1xuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudCArICh1cCA/IC0xIDogMSk7XG4gICAgICAgIGlmIChjdXJyIDw9IHRoaXMuX29wdGlvbnMubGVuZ3RoICYmIGN1cnIgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJzb3IoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IGN1cnI7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXB0IEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaG9vc2VzIHRoZSBPcHRpb24gb24gdGhlIE1lbnUgdGhhdCB0aGUgVXNlciBoYXMgc2VsZWN0ZWQsIHJldHVybmluZyB0cnVlIFxuICAgICAqIGltcGxpZXMgdGhhdCBhbiBvcHRpb24gd2FzIHNlbGVjdGVkLCBmYWxzZSBpbXBsaWVzIHRoYXQgdGhlIHJldHVybiBvcHRpb24gXG4gICAgICogd2FzIHNlbGVjdGVkLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRydWUgZm9yIGFuIE9wdGlvbiwgRmFsc2UgZm9yIFJldHVyblxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBSZXR1cm4gU2VsZWN0XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50ID09PSB0aGlzLl9vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIE9wdGlvbnMgU2VsZWN0XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkLnZhbHVlID0gdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSIsImltcG9ydCBNZW51QmFzZSBmcm9tIFwiLi9tZW51LWJhc2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIE1lbnVCYXNlIHtcbiAgICAvKipcbiAgICAgKiBNZW51IENsYXNzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBnaXZlbiBDYXRlZ29yaWVzIGZvciB0aGUgTWVudSwgYSBkaXNwbGF5IHdpbGwgYmUgcHJlc2VudGVkIHRvIFxuICAgICAqIHRoZSBVc2VyIGZvciB0aGVtIHRvIFNlbGVjdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2F0ZWdvcmllcyBKU09OIE9iamVjdCBvZiBNZW51IENhdGVnb3JpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY2F0ZWdvcmllcykge1xuICAgICAgICBzdXBlcihjYXRlZ29yaWVzKTtcblxuICAgICAgICAvLyBCdWlsZCBTdWItTWVudXNcbiAgICAgICAgdGhpcy5fc3VicyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBDcmVhdGUgU3ViLU1lbnUgaWYgTmVjZXNzYXJ5XG4gICAgICAgICAgICBpZiAoc3ViLnN1YnMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHN1Yi5rZXksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZW51OiBuZXcgTWVudShzdWIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBzdWJzICgpIHsgcmV0dXJuIHRoaXMuX3N1YnM7IH1cblxuICAgIHNldCBzdWJzIChhcnIpIHsgdGhpcy5fc3VicyA9IGFycjsgfVxuXG4gICAgZ2V0IGNvbnRyb2xsZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbGxlcjsgfVxuXG4gICAgc2V0IGNvbnRyb2xsZXIgKGJvb2wpIHsgdGhpcy5fY29udHJvbGxlciA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgTWVudSBCb3gsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSB0byBiZSBzZXQuIFxuICAgICAqIEFkZGl0aW9uYWxseSwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIFN1Yi1NZW51IENvbXBvbmVudHMgYXJlIHRvIGJlIFxuICAgICAqIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBIYW5kbGUgTWVudSBEaW1lbnNpb25zXG4gICAgICAgIHN1cGVyLnNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fc3Vicy5mb3JFYWNoKHN1YiA9PiB7IHN1Yi5tZW51LnNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCk7IH0pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgU3ViLU1lbnUgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0cyB0aGUgU3ViLU1lbnUgU2VsZWN0ZWQgYnkgdGhlIFVzZXIgdG8gYmUgb24gRGlzcGxheS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBTdWItTWVudSBET00gRWxlbWVudFxuICAgICAqL1xuICAgIHNldFN1Yk1lbnUgKCkge1xuICAgICAgICB0aGlzLl9zdWJzW3RoaXMuX2N1cnJlbnRdLmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3Vic1t0aGlzLl9jdXJyZW50XS5tZW51O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IFN1Yi1NZW51cyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXRzIHRoZSBNYWluIE1lbnUgdG8gYmUgb24gRGlzcGxheS5cbiAgICAgKi9cbiAgICByZXNldFN1Yk1lbnVzICgpIHsgdGhpcy5fc3Vicy5mb3JFYWNoKHN1YiA9PiB7IHN1Yi5jb250cm9sbGVyID0gZmFsc2U7IH0pOyB9XG59IiwiaW1wb3J0IFwiLi9wb3AtdXAtc3R5bGluZy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIFBvcC1VcCBDbGFzc1xuICAgICAqIFxuICAgICAqIFNldmVyYWwgQ29tcG9uZW50cyB0byB0aGUgR2FtZSByZXF1aXJlIGEgUG9wLVVwIEJveCwgYW5kIHRoaXMgQ2xhc3MgXG4gICAgICogUmVwcmVzZW50cyB0aGF0IEJveC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIGZvciBQb3AtVXBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICAvLyBCdWlsZCBQb3AtVXAgQ29udGFpbmVyIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX21vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tY29udGFpbmVyYCk7XG4gICAgICAgIFxuICAgICAgICAvLyBCdWlsZCBQb3AtVXAgQm94IERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2JveC5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tYm94YCk7XG5cbiAgICAgICAgLy8gQnVpbGQgVGl0bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl90aXRsZS5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tdGl0bGVgKTtcbiAgICAgICAgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fdGl0bGUpO1xuXG4gICAgICAgIC8vIEJ1aWxkIEJsdXJyZWQgQmFja2dyb3VuZCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9ibHVycmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5jbGFzc0xpc3QuYWRkKFwiYmx1cnJlZC1iYWNrZ3JvdW5kXCIpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBDb21wb25lbnRzIHRvIE1vZHVsZVxuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fYmx1cnJlZCk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9ib3gpO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgUG9wLVVwIEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBTZXQgQ29udGFpbmVyIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuXG4gICAgICAgIC8vIFNldCBCbHVycmVkIEJhY2tnb3VuZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGJveFcgPSBNYXRoLmZsb29yKHdpZHRoICogMC42KTtcbiAgICAgICAgY29uc3QgYm94SCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC42KTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5oZWlnaHQgPSBgJHtib3hIfXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBQb3NpdGlvblxuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuMik7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC4yKTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgfVxufSIsImltcG9ydCBQb3BVcCBmcm9tIFwiLi9wb3AtdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0Qm94IGV4dGVuZHMgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yIChkZXNjcmlwdGlvbiwgY2F0ZWdvcmllcykge1xuICAgICAgICBzdXBlcihcIlNlbGVjdFwiKTtcblxuICAgICAgICAvLyBSZW1vdmUgVGl0bGVcbiAgICAgICAgdGhpcy5fYm94LnJlbW92ZUNoaWxkKHRoaXMuX3RpdGxlKTtcblxuICAgICAgICAvLyBCdWlsZCBEZXNjcmlwdGlvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fZGVzYy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0aGlzLl9kZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl9kZXNjKTtcblxuICAgICAgICAvLyBCdWlsZCBPcHRpb24gRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBvcHRpb24uaWQgPSBgJHtjYXRlZ29yeS5rZXkudG9Mb3dlckNhc2UoKX0tb3B0aW9uYDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNhdGVnb3J5LmtleTtcbiAgICAgICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldHVwIEN1cnNvclxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5zZXRDdXJzb3IoKTtcblxuICAgICAgICAvLyBTZXQgQWN0aXZlIHRvIGJlIEZhbHNlXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kZXNjOyB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24gKHN0cikgeyB0aGlzLl9kZXNjID0gc3RyOyB9XG5cbiAgICBnZXQgb3B0aW9ucyAoKSB7IHJldHVybiB0aGlzLl9vcHRpb25zOyB9XG5cbiAgICBzZXQgb3B0aW9ucyAoYXJyKSB7IHRoaXMuX29wdGlvbnMgPSBhcnI7IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgU2VsZWN0IEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBzdXBlci5zZXREaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBDb21wb25lbnQgV2lkdGhcbiAgICAgICAgdGhpcy5fYm94VyA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjYpO1xuICAgICAgICB0aGlzLl9kZXNjLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fYm94V31weGA7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uc3R5bGUud2lkdGggPSBgJHt0aGlzLl9ib3hXfXB4YDsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEN1cnNvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGlsZSBjeWNsaW5nIHRocm91Z2ggdGhlIFNlbGVjdCBPcHRpb25zLCBpZiB0aGUgY3Vyc29yIGlzIG9uIGFuIG9wdGlvbiwgXG4gICAgICogdGhlbiB0aGUgb3B0aW9uIHNob3VsZCBiZSBoaWdobGlnaHRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uIEN1cnNvciBvbiBPcHRpb25cbiAgICAgKi9cbiAgICBzZXRDdXJzb3IgKG9uPXRydWUpIHtcbiAgICAgICAgLy8gSGFuZGxlIE9wdGlvbnNcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLmNsYXNzTGlzdC5jb250YWlucyhcImN1cnNvclwiKTtcbiAgICAgICAgaWYgKG9uICYmICFjaGVjaylcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgICAgICAgaWYgKCFvbiAmJiBjaGVjaylcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LnJlbW92ZShcImN1cnNvclwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgU2VsZWN0aW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIE5ldyBTZWxlY3Rpb24sIHRoZSBtZXRob2Qgd2lsbCByZXNldCB0aGUgRE9NIEVsZW1lbnRzIGluIHRoZSBcbiAgICAgKiBTZWxlY3Rpb24gQm94LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjIE5ldyBEZXNjcmlwdGlvbiBmb3IgU2VsZWN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gY2F0ZWdvcmllcyBOZXcgTGlzdCBvZiBDYXRlZ29yaWVzXG4gICAgICovXG4gICAgc2V0U2VsZWN0aW9ucyAoZGVzYywgY2F0ZWdvcmllcykge1xuICAgICAgICAvLyBTZXQgRGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5fZGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG5cbiAgICAgICAgLy8gUmVtb3ZlIE9wdGlvbnMgZnJvbSBCb3hcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7IHRoaXMuX2JveC5yZW1vdmVDaGlsZChvcHRpb24pOyB9KTtcblxuICAgICAgICAvLyBTZXQgTmV3IE9wdGlvbnNcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5pZCA9IGAke2NhdGVnb3J5LmtleS50b0xvd2VyQ2FzZSgpfS1vcHRpb25gO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnkua2V5O1xuICAgICAgICAgICAgb3B0aW9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fYm94V31weGA7XG4gICAgICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgQ3Vyc29yXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92aW5nIHRoZSBDdXJzb3IgVXAgb3IgRG93biBvbiB0aGUgU2VsZWN0IEJveC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwIERlZmF1bHQgQWN0aW9uIGlzIFVwd2FyZHNcbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE1vdmUodXA9dHJ1ZSkge1xuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudCArICh1cCA/IC0xIDogMSk7XG4gICAgICAgIGlmIChjdXJyIDwgdGhpcy5fb3B0aW9ucy5sZW5ndGggJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gY3VycjtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2NlcHQgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENob29zZXMgdGhlIE9wdGlvbiBvbiB0aGUgU2VsZWN0IEJveCB0aGF0IHRoZSBVc2VyIGhhcyBzZWxlY3RlZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCByZXR1cm5zIHRoZSBzdHJpbmcgb2Ygd2hhdCB3YXMgc2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgU3RyaW5nIFJlcHJlc2VudGF0aW9uIG9mIFNlbGVjdGlvblxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoKSB7IHJldHVybiB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLnRleHRDb250ZW50OyB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9