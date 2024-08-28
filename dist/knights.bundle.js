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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/knights-module/main-module/pop-up-styling.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/knights-module/main-module/pop-up-styling.css ***!
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
.information-container { font-family: "Dogica"; }

.menu-box,
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

.info-message { font-size: 0.6rem; }

.menu-title,
.information-title,
.error-title { font-family: "Dogica Bold"; }

.menu-box > div,
.information-box > div { text-align: start; }

.menu-box > div.cursor {
    animation: fade 1.5s infinite;
    animation-fill-mode: both;
}

.error-container {
    position: relative;
}

.error-box,
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
}`, "",{"version":3,"sources":["webpack://./src/knights-module/main-module/pop-up-styling.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA,yBAAyB,qCAAqC,EAAE;;AAEhE;yBACyB,qBAAqB,EAAE;;AAEhD;;IAEI,+BAA+B;IAC/B,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA,gBAAgB,iBAAiB,EAAE;;AAEnC;;eAEe,0BAA0B,EAAE;;AAE3C;yBACyB,iBAAiB,EAAE;;AAE5C;IACI,6BAA6B;IAC7B,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,kBAAkB;IAClB,UAAU;IACV,oCAAoC;IACpC,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;IAC1B,uBAAuB;IACvB,mBAAmB;IACnB,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,8BAA8B;IAC9B,YAAY;AAChB","sourcesContent":[".info-components {\n    font-family: \"Dogica\";\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    gap: 3rem;\n}\n\n.info-components > div { border-bottom: 2px solid var(--black); }\n\n.menu-container,\n.information-container { font-family: \"Dogica\"; }\n\n.menu-box,\n.information-box {\n    background-color: var(--screen);\n    justify-content: flex-start;\n    align-items: start;\n}\n\n.information-box {\n    white-space: pre-wrap;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\n.info-message { font-size: 0.6rem; }\n\n.menu-title,\n.information-title,\n.error-title { font-family: \"Dogica Bold\"; }\n\n.menu-box > div,\n.information-box > div { text-align: start; }\n\n.menu-box > div.cursor {\n    animation: fade 1.5s infinite;\n    animation-fill-mode: both;\n}\n\n.error-container {\n    position: relative;\n}\n\n.error-box,\n.information-box,\n.menu-box {\n    position: absolute;\n    z-index: 4;\n    border: 3px var(--text-colour) solid;\n    color: var(--text-colour);\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.error-box {\n    font-family: \"Dogica Bold\";\n    justify-content: center;\n    align-items: center;\n    background-color: var(--error-screen);\n}\n\n.blurred-background {\n    z-index: 3;\n    background-color: var(--black);\n    opacity: 0.7;\n}"],"sourceRoot":""}]);
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

/***/ "./src/knights-module/main-module/pop-up-styling.css":
/*!***********************************************************!*\
  !*** ./src/knights-module/main-module/pop-up-styling.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pop_up_styling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./pop-up-styling.css */ "./node_modules/css-loader/dist/cjs.js!./src/knights-module/main-module/pop-up-styling.css");

      
      
      
      
      
      
      
      
      

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
     */
    constructor () {}

    /**
     * Set Show Method
     * 
     * Set the Show Callback Method for Updating the GameChip Display
     * 
     * @callback showCallback Show Callback
     * @callback dimensionsCallback Get Dimensions Callback
     */
    setScene (showCallback, getDimensions) {}

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
                    template += `"tile-${i}${j} `
                else if (j === this.#BOARD - 1)
                    template += `tile-${i}${j}"${i === 0 ? "" : " "}`;
                else
                    template += `tile-${i}${j} `
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
        this._last;
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
        this._knight.update(tile.x, tile.y);
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
            tile.toggle();

            // Ensure Knight and Cursor Remain on their Tile
            if (tile.x === this._knight.x && tile.y === this._knight.y) {
                tile.placeKnight(this._knight.element);
                tile.pointer = false;
                tile.placeCursor();
            }
        });

        // Reset Other Variables
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

                // Check if Puzzle is Complete
                if (this.isComplete())
                    this.#completeCallback();
            }
            
            if (check) {
                // Update Current Tile
                this._last = this._current;
                this.#placeKnight(aux);
                this._knight.update(aux.x, aux.y);
                this._initialise = false;

                // Number Tile, if Touring
                if (this._goal.x === -1 && this._goal.y === -1)
                    this._current.number(this._previous.length, this._knight.element);

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
        if (this._puzzling && !this._algorithm && this._previous.length > 0) {
            let check = this._previous[this._previous.length - 1];

            // Remove Move if Last Move is the Same as Last in List
            if (check.x === this._last.x && check.y === this._last.y)
                this._previous.pop();

            // Set Last Move in List as Current Move
            let aux = this._previous.pop();
            this.#placeKnight(aux, this._current, true);
            this._knight.update(aux.x, aux.y);
            this._last = this._current;
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
            this._knight.update(aux.x, aux.y);

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

    get colour () { return this._colour; }

    set colour (str) { this._colour = str; }

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
     * Place Cursor
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
        // Only Reset Tiles that are Highlighted
        if (this._element.classList.contains("selected")) {
            this._element.classList.remove("selected");
            this._element.textContent = "";
            this._move = 0;
        }
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
/* harmony import */ var _game_chip_module_game_interface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-chip-module/game-interface.js */ "./src/game-chip-module/game-interface.js");
/* harmony import */ var _main_module_error_box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-module/error-box.js */ "./src/knights-module/main-module/error-box.js");
/* harmony import */ var _main_module_knights_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-module/knights-manager.js */ "./src/knights-module/main-module/knights-manager.js");
/* harmony import */ var _main_module_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-module/menu.js */ "./src/knights-module/main-module/menu.js");
/* harmony import */ var _main_module_info_box_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-module/info-box.js */ "./src/knights-module/main-module/info-box.js");








class KnightsGame extends _game_chip_module_game_interface_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
    #showCallback;
    #takeDownCallback;
    #dimensionsCallback;

    /**
     * Knight's Game Interface Class
     * 
     * Used for Controlling the Menu and Chessboard Modules with the GameChip's
     * Controllers, and also for Updating the Display with the relevant Error 
     * and Information Messages.
     */
    constructor () {
        super();

        // Create Knight's Manager
        this._km = new _main_module_knights_manager_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.completeCallback.bind(this));
        this._menu = new _main_module_menu_js__WEBPACK_IMPORTED_MODULE_5__["default"](_data_menu_json5__WEBPACK_IMPORTED_MODULE_1__);
        this._error = new _main_module_error_box_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this._info = new _main_module_info_box_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    }

    /**
     * Set Scene Method
     * 
     * Set the Show and Get Dimensions Callback Method for Updating the Game 
     * Console Display.
     * 
     * @callback showCallback Show Callback
     * @callback takeDownCallback Take Down Callback
     * @callback dimensionsCallback Get Dimensions Callback
     */
    setScene (showCallback, takeDownCallback, getDimensions) {
        // Set Callback Methods
        this.#showCallback = showCallback;
        this.#takeDownCallback = takeDownCallback;
        this.#dimensionsCallback = getDimensions;

        // Set Board Dimensions
        const dimensions = this.#dimensionsCallback();
        this._km.setup(dimensions.width, dimensions.height);
        this._menu.setDimensions(dimensions.width, dimensions.height);
        this._sub_set = false;
        this._sub_menu; 
        this._error.setDimensions(dimensions.width, dimensions.height);
        this._info.setDimensions(dimensions.width, dimensions.height);

        // Set Board on Display
        this.#showCallback(this._km.module);

        // Show Information about Current Game
        this._info.setTitle(this._km.game.puzzleTitle());
        this._info.setMessage(this._km.game.puzzleInfo());
        this.#showCallback(this._info.module, true);
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
            this._km.human ? this._km.steps.human : this._km.steps.algorithm,
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
    }

    /**
     * A Callback Method
     * 
     * Handles the Click of the A Action Button.
     */
    aCallback () { 
        // Handle Chessboard Action
        if (this._info.active) {
            this.#takeDownCallback();
            this._info.active = false;
        } else if (this._km.controller) {
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
                if (this._sub_menu.selected.key === "Game")
                    this._km.setGame(this._sub_menu.selected.value);
                
                // Handle Theme Set
                if (this._sub_menu.selected.key === "Theme")
                    this._km.setTheme(this._sub_menu.selected.value);

                // Close Menu & Sub-Menu
                this.#close();
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
        } else if (this._info.active) {
            this.#takeDownCallback();
            this._info.active = false;
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

/***/ "./src/knights-module/main-module/error-box.js":
/*!*****************************************************!*\
  !*** ./src/knights-module/main-module/error-box.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorBox)
/* harmony export */ });
/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up.js */ "./src/knights-module/main-module/pop-up.js");


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

/***/ "./src/knights-module/main-module/info-box.js":
/*!****************************************************!*\
  !*** ./src/knights-module/main-module/info-box.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoBox)
/* harmony export */ });
/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up.js */ "./src/knights-module/main-module/pop-up.js");


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
        const boxW = Math.floor(width * 0.8);
        const boxH = Math.floor(height * 0.8);
        this._box.style.width = `${boxW}px`;
        this._box.style.height = `${boxH}px`;

        // Set Pop-Up Box Position
        const left = Math.floor(width * 0.1);
        const top = Math.floor(height * 0.2);
        this._box.style.left = `${left}px`;
        this._box.style.top = `${top}px`;
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
        this._module.style.width = width;
        this._module.style.height = height;

        // Set Board Dimensions
        const dim = Math.floor(Math.min(width, height) * 0.9);
        this._board.setDimensions(dim);

        // Set Information Panel Font Size
        this._information.style.fontSize = Math.floor(dim * 0.2);
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
        this._steps.human = 0;
        this._steps.algorithm = 0;
        this._path = [];

        // Reset Tiles
        this._board.reset();
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
    declineAction () { this._board.declineAction(); }

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

/***/ "./src/knights-module/main-module/menu-base.js":
/*!*****************************************************!*\
  !*** ./src/knights-module/main-module/menu-base.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuBase)
/* harmony export */ });
/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up.js */ "./src/knights-module/main-module/pop-up.js");


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
        this._options.forEach(option => {
            option.style.width = `${boxW}px`;
        });
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
     * implies that an option was seleccted, false implies that the return option 
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

/***/ "./src/knights-module/main-module/menu.js":
/*!************************************************!*\
  !*** ./src/knights-module/main-module/menu.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _menu_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-base.js */ "./src/knights-module/main-module/menu-base.js");


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

/***/ "./src/knights-module/main-module/pop-up.js":
/*!**************************************************!*\
  !*** ./src/knights-module/main-module/pop-up.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopUp)
/* harmony export */ });
/* harmony import */ var _pop_up_styling_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up-styling.css */ "./src/knights-module/main-module/pop-up-styling.css");


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
            `was ${this._algorithm_path.length} steps.` : 
            `Warnsdorff's Algorithm found a path in ` +
            `${steps} steps.`;
            
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
        this._started = false;
        this._generated = false;
        this._user_path = [];
        this._algorithm_path = [];
    }

    get root () { return this._root; }

    set root (dict) { this._root = dict; }

    get started () { return this._started; }

    set started (bool) { this._started = bool; }
    
    get generated () { return this._generated; }

    set generated (bool) { this._generated = bool; }
    
    get user () { return this._user_path; }

    set user (arr) { this._user_path = arr; }

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

module.exports = /*#__PURE__*/JSON.parse('{"key":"Main","subs":[{"key":"Game","subs":[{"key":"Shortest-Path","subs":[]},{"key":"Knights-Tour","subs":[]}]},{"key":"Theme","subs":[{"key":"Normal","subs":[]},{"key":"Retro","subs":[]},{"key":"Future","subs":[]},{"key":"Neon","subs":[]},{"key":"Terminal","subs":[]},{"key":"Fantasy","subs":[]}]}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/knights-module/knights-game.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BTZ0M7O0FBRWpCLHVCQUF1QixrREFBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCOztB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QUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsaUVBQUs7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxrQ0FBa0M7QUFDcEU7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS9ib2FyZC1zdHlsaW5nLmNzcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL21haW4tbW9kdWxlL3BvcC11cC1zdHlsaW5nLmNzcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvYm9hcmQtbW9kdWxlL2JvYXJkLXN0eWxpbmcuY3NzPzE3MjQiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvZ2FtZS1zdHlsaW5nLmNzcz9kMzQyIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL21haW4tbW9kdWxlL3BvcC11cC1zdHlsaW5nLmNzcz81NDI4Iiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2VkZ2UuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2dyYXBoLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9xdWV1ZS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvdmVydGV4LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvZ2FtZS1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvYm9hcmQtbW9kdWxlL2JvYXJkLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS9rbmlnaHQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvYm9hcmQtbW9kdWxlL3RpbGUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUva25pZ2h0cy1nYW1lLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL21haW4tbW9kdWxlL2Vycm9yLWJveC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9pbmZvLWJveC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9rbmlnaHRzLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvbWFpbi1tb2R1bGUvbWVudS1iYXNlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL21haW4tbW9kdWxlL21lbnUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvbWFpbi1tb2R1bGUvcG9wLXVwLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL3B1enpsZXMva25pZ2h0cy10b3VyLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL3B1enpsZXMvcHV6emxlLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9wdXp6bGVzL3Nob3J0ZXN0LXBhdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jaGVzc2JvYXJkIHsgXG4gICAgZm9udC1mYW1pbHk6IFwiR290aGljYVwiO1xuICAgIGRpc3BsYXk6IGdyaWQ7IFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW51bS1jb2xvdXIpO1xufVxuXG5bY2xhc3MqPVwiLXRpbGVcIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogdmFyKC0tbnVtLWNvbG91cik7XG59XG5cbltjbGFzcyo9XCItdGlsZVwiXSA+IC5rbmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4jY3Vyc29yLXRpbGUgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXJzb3IpOyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYW5pbWF0aW9uOiBibGluayAxLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5ibGFjay10aWxlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spOyB9XG5cbi5ibGFjay10aWxlLnNlbGVjdGVkIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stc2VsZWN0ZWQpOyB9XG5cbi53aGl0ZS10aWxlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XG5cbi53aGl0ZS10aWxlLnNlbGVjdGVkIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2VsZWN0ZWQpOyB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMva25pZ2h0cy1tb2R1bGUvYm9hcmQtbW9kdWxlL2JvYXJkLXN0eWxpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtBQUNkOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUE4QjtJQUM5Qix5QkFBeUI7QUFDN0I7O0FBRUEsY0FBYyw4QkFBOEIsRUFBRTs7QUFFOUMsdUJBQXVCLHVDQUF1QyxFQUFFOztBQUVoRSxjQUFjLDhCQUE4QixFQUFFOztBQUU5Qyx1QkFBdUIsdUNBQXVDLEVBQUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNoZXNzYm9hcmQgeyBcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHb3RoaWNhXFxcIjtcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW51bS1jb2xvdXIpO1xcbn1cXG5cXG5bY2xhc3MqPVxcXCItdGlsZVxcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogdmFyKC0tbnVtLWNvbG91cik7XFxufVxcblxcbltjbGFzcyo9XFxcIi10aWxlXFxcIl0gPiAua25pZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbiNjdXJzb3ItdGlsZSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXJzb3IpOyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMS41cyBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmJsYWNrLXRpbGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7IH1cXG5cXG4uYmxhY2stdGlsZS5zZWxlY3RlZCB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLXNlbGVjdGVkKTsgfVxcblxcbi53aGl0ZS10aWxlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuXFxuLndoaXRlLXRpbGUuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zZWxlY3RlZCk7IH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0dvdGhpY2EtQm9vay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9kb2dpY2EudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvZG9naWNhYm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0td2hpdGU6ICNmZGZmZmM7XG4gICAgLS1ibGFjazogIzAyMDEwMDtcbn1cblxuOnJvb3Qubm9ybWFsIHtcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjODdkM2VkO1xuICAgIC0tYmxhY2stc2VsZWN0ZWQ6ICMyMjc3YTk7XG4gICAgLS1zY3JlZW46ICMyMzU3ODk7XG4gICAgLS1lcnJvci1zY3JlZW46ICNmNjk0OTM7XG4gICAgLS1jdXJzb3I6ICNlOGM1NDc7XG4gICAgLS1udW0tY29sb3VyOiAjZTViODBiO1xuICAgIC0tdGV4dC1jb2xvdXI6ICMwMjAxMDA7XG59XG5cbjpyb290LnJldHJvIHtcbiAgICAtLXdoaXRlOiAjYWFhYWFhO1xuICAgIC0tYmxhY2s6ICMwZjM4MGY7XG4gICAgLS13aGl0ZS1zZWxlY3RlZDogIzliYmMwZjtcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiAjMzA2MjMwO1xuICAgIC0tc2NyZWVuOiAjYWFhYWFhO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjZjY5NDkzO1xuICAgIC0tY3Vyc29yOiAjOGJhYzBmO1xuICAgIC0tbnVtLWNvbG91cjogI2FhYWFhYTtcbiAgICAtLXRleHQtY29sb3VyOiAjMGYzODBmO1xufVxuXG46cm9vdC5mdXR1cmUge1xuICAgIC0td2hpdGU6ICNkMWU4ZTI7XG4gICAgLS1ibGFjazogIzJjMzUzMTtcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjZmZjYjlhOyBcbiAgICAtLWJsYWNrLXNlbGVjdDogI2JkNWUyNztcbiAgICAtLXNjcmVlbjogIzExNjQ2NjtcbiAgICAtLWVycm9yLXNjcmVlbjogI2ZmOTkwMDtcbiAgICAtLWN1cnNvcjogI2ZmY2I5YTtcbiAgICAtLW51bS1jb2xvdXI6ICMxMTY0NjY7XG4gICAgLS10ZXh0LWNvbG91cjogIzJjMzUzMTtcbn1cblxuOnJvb3QubmVvbiB7XG4gICAgLS13aGl0ZTogIzBhYmRjNjtcbiAgICAtLWJsYWNrOiAjMTMzZTdjO1xuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICMwMDc5N2U7IFxuICAgIC0tYmxhY2stc2VsZWN0OiAjMzA3Y2JmO1xuICAgIC0tc2NyZWVuOiAjMDkxODMzO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjZTdlZTRmO1xuICAgIC0tY3Vyc29yOiAjZWEwMGQ5O1xuICAgIC0tbnVtLWNvbG91cjogIzcxMWM5MTtcbiAgICAtLXRleHQtY29sb3VyOiAjZWEwMGQ5O1xufVxuXG46cm9vdC50ZXJtaW5hbCB7XG4gICAgLS13aGl0ZTogY3lhbjtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiBibGFjaztcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiBjeWFuO1xuICAgIC0tc2NyZWVuOiBibGFjaztcbiAgICAtLWVycm9yLXNjcmVlbjogYmx1ZTtcbiAgICAtLWN1cnNvcjogZ3JlZW47XG4gICAgLS1udW0tY29sb3VyOiBncmVlbjtcbiAgICAtLXRleHQtY29sb3VyOiBncmVlbjtcbn1cblxuOnJvb3QuZmFudGFzeSB7XG4gICAgLS13aGl0ZTogI2U0OTM0YztcbiAgICAtLWJsYWNrOiAjNTQyYjI5O1xuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICNmMWI4NzI7IFxuICAgIC0tYmxhY2stc2VsZWN0OiAjNDMxZTFmO1xuICAgIC0tc2NyZWVuOiAjOWE5YThlO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjOTYwMDE4O1xuICAgIC0tY3Vyc29yOiAjOWM2YjY1O1xuICAgIC0tbnVtLWNvbG91cjogIzdjMTQyYztcbiAgICAtLXRleHQtY29sb3VyOiAjMGExNTgzO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJHb3RoaWNhXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJEb2dpY2EgQm9sZFwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4ua25pZ2h0cy1nYW1lLW1vZHVsZSB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gICAgMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pOyB9XG4gICAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTsgfVxuICAgIDEwMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pOyB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMva25pZ2h0cy1tb2R1bGUvZ2FtZS1zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBK0I7QUFDbkM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNENBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksS0FBSyxVQUFVLEVBQUU7SUFDakIsTUFBTSxVQUFVLEVBQUU7SUFDbEIsT0FBTyxVQUFVLEVBQUU7QUFDdkI7O0FBRUE7SUFDSSxLQUFLLCtCQUErQixFQUFFO0lBQ3RDLE1BQU0sK0JBQStCLEVBQUU7SUFDdkMsT0FBTywrQkFBK0IsRUFBRTtBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0td2hpdGU6ICNmZGZmZmM7XFxuICAgIC0tYmxhY2s6ICMwMjAxMDA7XFxufVxcblxcbjpyb290Lm5vcm1hbCB7XFxuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICM4N2QzZWQ7XFxuICAgIC0tYmxhY2stc2VsZWN0ZWQ6ICMyMjc3YTk7XFxuICAgIC0tc2NyZWVuOiAjMjM1Nzg5O1xcbiAgICAtLWVycm9yLXNjcmVlbjogI2Y2OTQ5MztcXG4gICAgLS1jdXJzb3I6ICNlOGM1NDc7XFxuICAgIC0tbnVtLWNvbG91cjogI2U1YjgwYjtcXG4gICAgLS10ZXh0LWNvbG91cjogIzAyMDEwMDtcXG59XFxuXFxuOnJvb3QucmV0cm8ge1xcbiAgICAtLXdoaXRlOiAjYWFhYWFhO1xcbiAgICAtLWJsYWNrOiAjMGYzODBmO1xcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjOWJiYzBmO1xcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiAjMzA2MjMwO1xcbiAgICAtLXNjcmVlbjogI2FhYWFhYTtcXG4gICAgLS1lcnJvci1zY3JlZW46ICNmNjk0OTM7XFxuICAgIC0tY3Vyc29yOiAjOGJhYzBmO1xcbiAgICAtLW51bS1jb2xvdXI6ICNhYWFhYWE7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMwZjM4MGY7XFxufVxcblxcbjpyb290LmZ1dHVyZSB7XFxuICAgIC0td2hpdGU6ICNkMWU4ZTI7XFxuICAgIC0tYmxhY2s6ICMyYzM1MzE7XFxuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICNmZmNiOWE7IFxcbiAgICAtLWJsYWNrLXNlbGVjdDogI2JkNWUyNztcXG4gICAgLS1zY3JlZW46ICMxMTY0NjY7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjZmY5OTAwO1xcbiAgICAtLWN1cnNvcjogI2ZmY2I5YTtcXG4gICAgLS1udW0tY29sb3VyOiAjMTE2NDY2O1xcbiAgICAtLXRleHQtY29sb3VyOiAjMmMzNTMxO1xcbn1cXG5cXG46cm9vdC5uZW9uIHtcXG4gICAgLS13aGl0ZTogIzBhYmRjNjtcXG4gICAgLS1ibGFjazogIzEzM2U3YztcXG4gICAgLS13aGl0ZS1zZWxlY3RlZDogIzAwNzk3ZTsgXFxuICAgIC0tYmxhY2stc2VsZWN0OiAjMzA3Y2JmO1xcbiAgICAtLXNjcmVlbjogIzA5MTgzMztcXG4gICAgLS1lcnJvci1zY3JlZW46ICNlN2VlNGY7XFxuICAgIC0tY3Vyc29yOiAjZWEwMGQ5O1xcbiAgICAtLW51bS1jb2xvdXI6ICM3MTFjOTE7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICNlYTAwZDk7XFxufVxcblxcbjpyb290LnRlcm1pbmFsIHtcXG4gICAgLS13aGl0ZTogY3lhbjtcXG4gICAgLS1ibGFjazogYmxhY2s7XFxuICAgIC0tYmxhY2stc2VsZWN0ZWQ6IGJsYWNrO1xcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiBjeWFuO1xcbiAgICAtLXNjcmVlbjogYmxhY2s7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiBibHVlO1xcbiAgICAtLWN1cnNvcjogZ3JlZW47XFxuICAgIC0tbnVtLWNvbG91cjogZ3JlZW47XFxuICAgIC0tdGV4dC1jb2xvdXI6IGdyZWVuO1xcbn1cXG5cXG46cm9vdC5mYW50YXN5IHtcXG4gICAgLS13aGl0ZTogI2U0OTM0YztcXG4gICAgLS1ibGFjazogIzU0MmIyOTtcXG4gICAgLS13aGl0ZS1zZWxlY3RlZDogI2YxYjg3MjsgXFxuICAgIC0tYmxhY2stc2VsZWN0OiAjNDMxZTFmO1xcbiAgICAtLXNjcmVlbjogIzlhOWE4ZTtcXG4gICAgLS1lcnJvci1zY3JlZW46ICM5NjAwMTg7XFxuICAgIC0tY3Vyc29yOiAjOWM2YjY1O1xcbiAgICAtLW51bS1jb2xvdXI6ICM3YzE0MmM7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMwYTE1ODM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkdvdGhpY2FcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvR290aGljYS1Cb29rLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvZG9naWNhLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2EgQm9sZFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9kb2dpY2Fib2xkLnR0ZlxcXCIpO1xcbn1cXG5cXG4ua25pZ2h0cy1nYW1lLW1vZHVsZSB7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgICAwJSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7IH1cXG4gICAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTsgfVxcbiAgICAxMDAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTsgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbmZvLWNvbXBvbmVudHMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtO1xufVxuXG4uaW5mby1jb21wb25lbnRzID4gZGl2IHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTsgfVxuXG4ubWVudS1jb250YWluZXIsXG4uaW5mb3JtYXRpb24tY29udGFpbmVyIHsgZm9udC1mYW1pbHk6IFwiRG9naWNhXCI7IH1cblxuLm1lbnUtYm94LFxuLmluZm9ybWF0aW9uLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uaW5mb3JtYXRpb24tYm94IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmluZm8tbWVzc2FnZSB7IGZvbnQtc2l6ZTogMC42cmVtOyB9XG5cbi5tZW51LXRpdGxlLFxuLmluZm9ybWF0aW9uLXRpdGxlLFxuLmVycm9yLXRpdGxlIHsgZm9udC1mYW1pbHk6IFwiRG9naWNhIEJvbGRcIjsgfVxuXG4ubWVudS1ib3ggPiBkaXYsXG4uaW5mb3JtYXRpb24tYm94ID4gZGl2IHsgdGV4dC1hbGlnbjogc3RhcnQ7IH1cblxuLm1lbnUtYm94ID4gZGl2LmN1cnNvciB7XG4gICAgYW5pbWF0aW9uOiBmYWRlIDEuNXMgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmVycm9yLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXJyb3ItYm94LFxuLmluZm9ybWF0aW9uLWJveCxcbi5tZW51LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgYm9yZGVyOiAzcHggdmFyKC0tdGV4dC1jb2xvdXIpIHNvbGlkO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVycm9yLWJveCB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhIEJvbGRcIjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLXNjcmVlbik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQge1xuICAgIHotaW5kZXg6IDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIG9wYWNpdHk6IDAuNztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9wb3AtdXAtc3R5bGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQSx5QkFBeUIscUNBQXFDLEVBQUU7O0FBRWhFO3lCQUN5QixxQkFBcUIsRUFBRTs7QUFFaEQ7O0lBRUksK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQSxnQkFBZ0IsaUJBQWlCLEVBQUU7O0FBRW5DOztlQUVlLDBCQUEwQixFQUFFOztBQUUzQzt5QkFDeUIsaUJBQWlCLEVBQUU7O0FBRTVDO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbmZvLWNvbXBvbmVudHMge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRvZ2ljYVxcXCI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLmluZm8tY29tcG9uZW50cyA+IGRpdiB7IGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7IH1cXG5cXG4ubWVudS1jb250YWluZXIsXFxuLmluZm9ybWF0aW9uLWNvbnRhaW5lciB7IGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhXFxcIjsgfVxcblxcbi5tZW51LWJveCxcXG4uaW5mb3JtYXRpb24tYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5pbmZvcm1hdGlvbi1ib3gge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uaW5mby1tZXNzYWdlIHsgZm9udC1zaXplOiAwLjZyZW07IH1cXG5cXG4ubWVudS10aXRsZSxcXG4uaW5mb3JtYXRpb24tdGl0bGUsXFxuLmVycm9yLXRpdGxlIHsgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2EgQm9sZFxcXCI7IH1cXG5cXG4ubWVudS1ib3ggPiBkaXYsXFxuLmluZm9ybWF0aW9uLWJveCA+IGRpdiB7IHRleHQtYWxpZ246IHN0YXJ0OyB9XFxuXFxuLm1lbnUtYm94ID4gZGl2LmN1cnNvciB7XFxuICAgIGFuaW1hdGlvbjogZmFkZSAxLjVzIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4uZXJyb3ItY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZXJyb3ItYm94LFxcbi5pbmZvcm1hdGlvbi1ib3gsXFxuLm1lbnUtYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICBib3JkZXI6IDNweCB2YXIoLS10ZXh0LWNvbG91cikgc29saWQ7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVycm9yLWJveCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhIEJvbGRcXFwiO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3Itc2NyZWVuKTtcXG59XFxuXFxuLmJsdXJyZWQtYmFja2dyb3VuZCB7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQtc3R5bGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3AtdXAtc3R5bGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3AtdXAtc3R5bGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICAgIC8qKlxuICAgICAqIEVkZ2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBEYXRhIHN0cnVjdHVyZSB0aGF0IGNvbm5lY3RzIHR3byBWZXJ0aWNlcyBvZiB0aGUgR3JhcGggRGF0YSBTdHJ1Y3R1cmUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgU3RhcnRpbmcgVmVydGV4XG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgRW5kaW5nIFZlcnRleFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh1LCB2KSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHUpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godik7XG4gICAgfVxuXG4gICAgZ2V0IHZlcnRpY2VzICgpIHsgcmV0dXJuIHRoaXMuX3ZlcnRpY2VzOyB9XG5cbiAgICBzZXQgdmVydGljZXMgKGFycikgeyB0aGlzLl92ZXJ0aWNlcyA9IGFycjsgfVxuXG4gICAgLyoqXG4gICAgICogU2FtZSBFZGdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gRWRnZSBpcyB0aGUgc2FtZSBlZGdlIGFzIHRoaXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtFZGdlfSBlIEVkZ2VcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZXkgYXJlIHRoZSBTYW1lIEVkZ2VcbiAgICAgKi9cbiAgICBzYW1lRWRnZSAoZSkge1xuICAgICAgICAvLyBDaGVjayB0aGF0IGJvdGggVmVydGljZXMgYXJlIElkZW50aWNhbFxuICAgICAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNlY29uZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBWZXJ0aWNlcyBvbiBFZGdlXG4gICAgICAgIGUudmVydGljZXMuZm9yRWFjaCh1ID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzBdLnNhbWVWZXJ0ZXgodSkgfHwgXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1sxXS5zYW1lVmVydGV4KHUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0KVxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIG9uZSBvZiB0aGUgVmVydGljZXMgdGhhdCBtYWtlcyB1cCB0aGUgRWRnZSBjb250YWlucyB0aGUgZGVzaXJlZCBcbiAgICAgKiBWZXJ0ZXgsIGFuZCByZXR1cm5zIHRydWUgaWYgaXQgZG9lcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBWZXJ0ZXhcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIEVkZ2UgQ29ubmVjdHMgVmVydGV4XG4gICAgICovXG4gICAgaGFzVmVydGV4ICh2KSB7XG4gICAgICAgIC8vIENoZWNrIEJvdGggVmVydGljZXMgb24gRWRnZVxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKHZlcnRleCA9PiB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBWZXJ0ZXggaXMgYSBNYXRjaFxuICAgICAgICAgICAgaWYgKHYuc2FtZVZlcnRleCh2ZXJ0ZXgpKVxuICAgICAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBWZXJ0aWNlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgdGhlIHBhaXIgb2YgZ2l2ZW4gVmVydGljZXMgYXJlIGNvbm5lY3RlZCAgYnkgdGhlIEVkZ2UsIGFuZCBcbiAgICAgKiByZXR1cm5zIHRydWUgaWYgdGhleSBhcmUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgT25lIFZlcnRleFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IE90aGVyIFZlcnRleFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgYm90aCBWZXJ0aWNlcyBhcmUgY29ubmVjdGVkIGJ5IEVkZ2VcbiAgICAgKi9cbiAgICBoYXNWZXJ0aWNlcyAodSwgdikge1xuICAgICAgICAvLyBDaGVjayBCb3RoIFZlcnRpY2VzIG9uIEVkZWdlXG4gICAgICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgICAgICBsZXQgc2Vjb25kID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICAgICAgLy8gRW5zdXJlIEJvdGggYXJlIEFjY291bnRlZCBGb3JcbiAgICAgICAgICAgIGlmICh1LnNhbWVWZXJ0ZXgodmVydGV4KSlcbiAgICAgICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodi5zYW1lVmVydGV4KHZlcnRleCkpXG4gICAgICAgICAgICAgICAgc2Vjb25kID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZDtcbiAgICB9XG59IiwiaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZS5qc1wiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGgge1xuICAgIC8qKlxuICAgICAqIEdyYXBoIENsYXNzXG4gICAgICogXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgdGhlIEdyYXBoIERhdGEgU3RydWN0dXJlLCB3aGljaCB1dGlsaXNlcyB0aGUgVmVydGV4IGFuZFxuICAgICAqIEVkZ2UgQ2xhc3NlcyB0aGF0IGFyZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgZGF0YSwgYW5kIHRvIGNvbm5lY3QgdGhlIGRhdGFcbiAgICAgKiB0byBvbmUgYW5vdGhlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3ZlcnRpY2VzID0gW107IFxuICAgICAgICB0aGlzLl9lZGdlcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2VzIEl0ZXJhdG9yIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIGluIGxvb3BzIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgR3JhcGgncyBWZXJ0aWNlcy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBJdGVyYXRvciBvZiBWZXJ0aWNlc1xuICAgICAqL1xuICAgIHZlcnRpY2VzICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IHRoaXMuX3ZlcnRpY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHRoaXMuX3ZlcnRpY2VzW2krK10sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFZGdlcyBJdGVyYXRvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNZXRob2QgdGhhdCBjYW4gYmUgdXNlZCBpbiBsb29wcyB0byBpdGVyYXRlIHRocm91Z2ggdGhlIEdyYXBoJ3MgRWRnZXMuXG4gICAgICogXG4gICAgICogQHJldHVybnMgSXRlcmF0b3Igb2YgRWRnZXNcbiAgICAgKi9cbiAgICBlZGdlcyAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9lZGdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB0aGlzLl9lZGdlc1tpKytdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIFZlcnRpY2VzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEdldCB0aGUgTnVtYmVyIG9mIFZlcnRpY2VzIHdpdGhpbiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIFZlcnRpY2VzXG4gICAgICovXG4gICAgbnVtVmVydGljZXMgKCkgeyByZXR1cm4gdGhpcy5fdmVydGljZXMubGVuZ3RoOyB9XG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgRWRnZXMgTWV0aG9kXG4gICAgICogXG4gICAgICogR2V0IHRoZSBOdW1iZXIgb2YgRWRnZXMgd2l0aGluIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgRWRnZXNcbiAgICAgKi9cbiAgICBudW1FZGdlcyAoKSB7IHJldHVybiB0aGlzLl9lZGdlcy5sZW5ndGg7IH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gKHgsIHkpIGNvb3JkaW5hdGUsIHRoaXMgbWV0aG9kIHdpbGwgY3JlYXRlIGEgbmV3IFZlcnRleCBmb3JcbiAgICAgKiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgaW5zZXJ0VmVydGV4ICh4LCB5KSB7IHRoaXMuX3ZlcnRpY2VzLnB1c2gobmV3IFZlcnRleCh4LCB5KSk7IH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gVmVydGV4LCBpZiBpdCBpcyBpbiB0aGUgR3JhcGgsIGFuZCBpZiBpdCBoYXMgYW55IEVkZ2VzIFxuICAgICAqIGFzc29jaWF0ZWQgd2l0aCBpdCwgdGhlbiB0aG9zZSBFZGdlcyB3b3VsZCBiZSByZW1vdmVkLCBhbmQgZmluYWxseSB0aGUgXG4gICAgICogVmVydGV4IHdvdWxkIHRoZW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBWZXJ0ZXhcbiAgICAgKi9cbiAgICByZW1vdmVWZXJ0ZXggKHYpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgVmVydGV4IGlzIENvbm5lY3RlZCB0byBPdGhlciBWZXJ0aWNlc1xuICAgICAgICBmb3IgKGxldCBlZGdlIG9mIHRoaXMuZWRnZXMoKSkge1xuICAgICAgICAgICAgaWYgKGVkZ2UuaGFzVmVydGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIE5laWdoYm91ciBSZWZlcmVuY2VzIGZvciBWZXJ0aWljZXNcbiAgICAgICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzBdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzFdKTtcbiAgICAgICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzFdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzBdKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBFZGdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBWZXJ0ZXggaW4gQXJyYXlcbiAgICAgICAgaWR4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2LnNhbWVWZXJ0ZXgodGhpcy5fdmVydGljZXNbaV0pKVxuICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgVmVydGV4IGlmIEZvdW5kXG4gICAgICAgIGlmIChpZHggPj0gMClcbiAgICAgICAgICAgIHRoaXMuX3ZlcnRpY2VzLnNwbGljZShpZHgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIFZlcnRpY2VzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENsZWFycyBhbGwgdmVydGljZXMgaW4gdGhlIEdyYXBoLlxuICAgICAqL1xuICAgIGNsZWFyVmVydGljZXMgKCkge1xuICAgICAgICBkbyB7IHRoaXMuX3ZlcnRpY2VzLnBvcCgpIH0gd2hpbGUgKHRoaXMuX3ZlcnRpY2VzLmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gKHgsIHkpIGNvb3JkaW5hdGUsIHRoaXMgbWV0aG9kIHdpbGwgc2VhcmNoIGl0cyBrbm93biB2ZXJ0aWNlc1xuICAgICAqIGFuZCByZXR1cm4gdGhlIHZlcnRleCB0aGF0IGNvcnJlc3BvbmRzIHdpdGggdGhlIGNvb3JkaW5hdGUsIG9yIG51bGwgaWYgaXRcbiAgICAgKiBkb2VzIG5vdCBleGlzdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcmV0dXJucyBDb3JyZXNwb25kaW5nIFZlcnRleFxuICAgICAqL1xuICAgIGdldFZlcnRleCAoeCwgeSkge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggVmVydGljZXNcbiAgICAgICAgbGV0IHUgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCB2ZXJ0ZXggb2YgdGhpcy52ZXJ0aWNlcygpKSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IFZlcnRleCBDb29yZGluYXRlcyBtYXRjaCBEZXNpcmVkXG4gICAgICAgICAgICBpZiAodmVydGV4LnggPT09IHggJiYgdmVydGV4LnkgPT09IHkpXG4gICAgICAgICAgICAgICAgdSA9IHZlcnRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBFZGdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciBhIGdpdmVuIHBhaXIgb2YgVmVydGljZXMsIHRoaXMgbWV0aG9kIHdpbGwgY3JlYXRlIGEgbmV3IEVkZ2UgZm9yIHRoZSBcbiAgICAgKiBwYWlyLCBpZiB0aGVyZSBpc24ndCBvbmUgYWxyZWFkeS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdSBTdGFydGluZyBWZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBFbmRpbmcgVmVydGV4XG4gICAgICovXG4gICAgaW5zZXJ0RWRnZSAodSwgdikge1xuICAgICAgICAvLyBFbnN1cmUgbm8gRWRnZSB3aXRoIFZlcnRpY2VzIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGlmICh0aGlzLmdldEVkZ2UodSwgdikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIE5ldyBFZGdlIGZvciBWZXJ0aWNlc1xuICAgICAgICAgICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKHUsIHYpO1xuICAgICAgICAgICAgdS5pbnNlcnROZWlnaGJvdXIodik7XG4gICAgICAgICAgICB2Lmluc2VydE5laWdoYm91cih1KTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIEVkZ2VzIEFycmF5XG4gICAgICAgICAgICB0aGlzLl9lZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEVkZ2UgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gRWRnZSwgaWYgaXQgaXMgaW4gdGhlIEdyYXBoLCB0aGUgRWRnZSB3b3VsZCB0aGVuIGJlIHJlbW92ZWRcbiAgICAgKiBmcm9tIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGUgRWRnZVxuICAgICAqL1xuICAgIHJlbW92ZUVkZ2UgKGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgRWRnZSBleGlzdHMgaW4gR3JhcGhcbiAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2VkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZWRnZXNbaV0uc2FtZUVkZ2UoZSkpXG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBpZiBFZGdlIGV4aXN0c1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBOZWlnaGJvdXIgUmVmZXJlbmNlcyBmb3IgVmVydGljZXNcbiAgICAgICAgICAgIGxldCBlZGdlID0gdGhpcy5fZWRnZXNbaWR4XTtcbiAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMF0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMV0pO1xuICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1sxXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1swXSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBFZGdlXG4gICAgICAgICAgICB0aGlzLl9lZGdlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIEVkZ2VzXG4gICAgICogXG4gICAgICogUmVtb3ZlcyBhbGwgZWRnZXMgaW4gdGhlIEdyYXBoLlxuICAgICAqL1xuICAgIGNsZWFyRWRnZXMgKCkge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggZWRnZXNcbiAgICAgICAgZm9yIChsZXQgZWRnZSBvZiB0aGlzLmVkZ2VzKCkpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBSZWZlcmVuY2VzIHRvIE5laWdoYm91ciBWZXJ0aWNlc1xuICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1swXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1sxXSk7XG4gICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzFdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzBdKTtcblxuICAgICAgICAgICAgdGhpcy5fZWRnZXMucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgRWRnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGdpdmVuIHBhaXIgb2YgVmVydGljZXMsIHRoZSBtZXRob2Qgd2lsbCBpdGVyYXRlIHRocm91Z2ggdGhlIGtub3duXG4gICAgICogRWRnZXMgb2YgdGhlIEdyYXBoIGFuZCByZXR1cm4gdGhlIEVkZ2UgdGhhdCBjb25uZWN0cyB0aGVtLCBvciByZXR1cm5zIFxuICAgICAqIG51bGwuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgT25lIFZlcnRleFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IE90aGVyIFZlcnRleFxuICAgICAqIEByZXR1cm5zIEVkZ2UgdGhhdCBDb25uZWN0cyB0aGUgdHdvIFZlcnRpY2VzXG4gICAgICovXG4gICAgZ2V0RWRnZSAodSwgdikge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggRWRnZXNcbiAgICAgICAgbGV0IGUgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBlZGdlIG9mIHRoaXMuZWRnZXMoKSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgRWRnZSBoYXMgYm90aCBWZXJ0aWNlc1xuICAgICAgICAgICAgaWYgKGVkZ2UuaGFzVmVydGljZXModSwgdikpXG4gICAgICAgICAgICAgICAgZSA9IGVkZ2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xuICAgIC8qKlxuICAgICAqIFF1ZXVlIENsYXNzXG4gICAgICogXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFF1ZXVlIERhdGEgU3RydWN0dXJlLiBUaGUgUXVldWUgRGF0YSBTdHJ1Y3R1cmVcbiAgICAgKiB1dGlsaXNlcyB0aGUgRmlyc3QtSW4sIEZpcnN0LU91dCBwcmluY2lwbGUsIGVsZW1lbnRzIGFkZGVkIHRvIHRoZSBRdWV1ZSBcbiAgICAgKiB3aWxsIGJlIHB1c2hlZCB0byB0aGUgYmFjayBvZiB0aGUgQXJyYXksIGFuZCBvbmx5IHRoZSBmaXJzdCBlbGVtZW50IHdpbGxcbiAgICAgKiBiZSByZW1vdmVkIGVhY2ggdGltZSBkZXF1ZXVlIGlzIGNhbGxlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIFF1ZXVlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFNpemUgb2YgdGhlIFF1ZXVlXG4gICAgICovXG4gICAgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGg7IH1cblxuICAgIC8qKlxuICAgICAqIElzIEVtcHR5IE1ldGhvZFxuICAgICAqIFxuICAgICAqIElmIHRoZXJlIGFyZSBubyBFbGVtZW50cyBpbiB0aGUgUXVldWUsIHRoZSBtZXRob2QgcmV0dXJucyB0cnVlLCBhbmQgd2lsbFxuICAgICAqIHJldHVybiBmYWxzZSBpbiBhbGwgb3RoZXIgY2FzZXMuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGVyZSBhcmUgbm8gRWxlbWVudHMgaW4gdGhlIFF1ZXVlXG4gICAgICovXG4gICAgaXNFbXB0eSAoKSB7IHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDA7IH1cblxuICAgIC8qKlxuICAgICAqIEVucXVldWUgTWV0aG9kXG4gICAgICogXG4gICAgICogQWRkcyBhIG5ldyBFbGVtZW50IHRvIHRoZSBRdWV1ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGUgTmV3IEVsZW1lbnQgZm9yIFF1ZXVlXG4gICAgICovXG4gICAgZW5xdWV1ZSAoZSkgeyB0aGlzLl9xdWV1ZS5wdXNoKGUpOyB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJzdCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBGaXJzdCBFbGVtZW50IG9mIHRoZSBRdWV1ZSwgd2l0aG91dCBkZXF1ZXVpbmcgaXQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVGhlIEZpcnN0IEVsZW1lbnQgb2YgdGhlIFF1ZXVlXG4gICAgICovXG4gICAgZmlyc3QgKCkgeyByZXR1cm4gdGhpcy5fcXVldWVbMF07IH1cblxuICAgIC8qKlxuICAgICAqIERlcXVldWUgTWV0aG9kXG4gICAgICogXG4gICAgICogUmVtb3ZlcyB0aGUgRmlyc3QgRWxlbWVudCBvZiB0aGUgUXVldWUsIGFuZCByZW1vdmVzIGl0IGluIHRoZSBwcm9jZXNzLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRoZSBGaXJzdCBFbGVtZW50IG9mIHRoZSBRdWV1ZVxuICAgICAqL1xuICAgIGRlcXVldWUgKCkge1xuICAgICAgICBsZXQgZWxlbSA9IHRoaXMuX3F1ZXVlWzBdO1xuICAgICAgICB0aGlzLl9xdWV1ZS5zcGxpY2UoMCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gICAgLyoqXG4gICAgICogVmVydGV4IENsYXNzXG4gICAgICogXG4gICAgICogRGF0YSBzdHJ1Y3R1cmUgdGhhdCBzdG9yZSB0aGUgZGF0YSB3aXRoaW4gdGhlIEdyYXBoLCBpbiB0aGlzIGNhc2UsIHN0b3Jlc1xuICAgICAqICh4LCB5KSBjb29yZGluYXRlcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnZpc2l0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb3ZlID0gMDtcbiAgICAgICAgdGhpcy5uZWlnaGJvdXJzID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feDsgfVxuXG4gICAgc2V0IHggKHgpIHsgdGhpcy5feCA9IHg7IH1cblxuICAgIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3k7IH1cblxuICAgIHNldCB5ICh5KSB7IHRoaXMuX3kgPSB5OyB9XG5cbiAgICBnZXQgdmlzaXRlZCAoKSB7IHJldHVybiB0aGlzLl92aXNpdGVkOyB9XG5cbiAgICBzZXQgdmlzaXRlZCAoYm9vbCkgeyB0aGlzLl92aXNpdGVkID0gYm9vbDsgfVxuXG4gICAgZ2V0IG1vdmUgKCkgeyByZXR1cm4gdGhpcy5fbW92ZTsgfVxuXG4gICAgc2V0IG1vdmUgKG51bSkgeyB0aGlzLl9tb3ZlID0gbnVtOyB9XG5cbiAgICBnZXQgbmVpZ2hib3VycyAoKSB7IHJldHVybiB0aGlzLl9uZWlnaGJvdXJzOyB9XG5cbiAgICBzZXQgbmVpZ2hib3VycyAoYXJyKSB7IHRoaXMuX25laWdoYm91cnMgPSBhcnI7IH1cblxuICAgIC8qKlxuICAgICAqIFNhbWUgVmVydGV4IE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gVmVydGV4IGlzIHRoZSBzYW1lIG9uZSBhcyB0aGlzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IFZlcnRleFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIFNhbWUgVmVydGV4XG4gICAgICovXG4gICAgc2FtZVZlcnRleCAodikgeyByZXR1cm4gdi54ID09PSB0aGlzLnggJiYgdi55ID09PSB0aGlzLnk7IH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBOZWlnaGJvdXIgTWV0aG9kXG4gICAgICogXG4gICAgICogQWRkcyBhIG5ldyBWZXJ0ZXggdGhhdCBpcyBOZWlnaGJvdXIgdGhpcyBWZXJ0ZXggaW4gdGhlIEdyYXBoLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2ZXJ0ZXggVmVydGV4XG4gICAgICovXG4gICAgaW5zZXJ0TmVpZ2hib3VyICh2ZXJ0ZXgpIHsgdGhpcy5uZWlnaGJvdXJzLnB1c2godmVydGV4KTsgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIE5laWdoYm91ciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZW1vdmVzIGEgTmVpZ2hib3VyIFZlcnRleCwgaWYgaXQgZXhpc3RzIGZyb20gdGhlIFZlcnRleCdzIE5laWdoYm91cnMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHZlcnRleCBOZWlnaGJvdXIgdG8gUmVtb3ZlXG4gICAgICovXG4gICAgcmVtb3ZlTmVpZ2hib3VyICh2ZXJ0ZXgpIHtcbiAgICAgICAgLy8gRmluZCBWZXJ0ZXggaWYgUHJlc2VudCBpbiBuZWlnaGJvdXJzIEFycmF5XG4gICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5laWdoYm91cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5laWdoYm91cnNbaV0uc2FtZVZlcnRleCh2ZXJ0ZXgpKVxuICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBuZWlnaGJvdXJzIGlmIFByZXNlbnRcbiAgICAgICAgaWYgKGlkeCA+PSAwKVxuICAgICAgICAgICAgdGhpcy5uZWlnaGJvdXJzLnNwbGljZShpZHgsIDEpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW50ZXJmYWNlIHtcbiAgICAvKipcbiAgICAgKiBHYW1lIEludGVyZmFjZSBDbGFzc1xuICAgICAqIFxuICAgICAqIEJhc2UgR2FtZSBDbGFzcyB0aGF0IHNob3VsZCBiZSBJbmhlcml0ZWQgYnkgT3RoZXIgR2FtZXMgdG8gYmUgUGxheWVkIG9uIFxuICAgICAqIHRoZSBHYW1lQ2hpcC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNob3cgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBTaG93IENhbGxiYWNrIE1ldGhvZCBmb3IgVXBkYXRpbmcgdGhlIEdhbWVDaGlwIERpc3BsYXlcbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgc2hvd0NhbGxiYWNrIFNob3cgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgZGltZW5zaW9uc0NhbGxiYWNrIEdldCBEaW1lbnNpb25zIENhbGxiYWNrXG4gICAgICovXG4gICAgc2V0U2NlbmUgKHNob3dDYWxsYmFjaywgZ2V0RGltZW5zaW9ucykge31cblxuICAgIC8qKlxuICAgICAqIFVwIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBVcCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgdXBDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogUmlnaHQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFJpZ2h0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICByaWdodENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBEb3duIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBEb3duIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBkb3duQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIExlZnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIExlZnQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGxlZnRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQSBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQSBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGFDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQiBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGJDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFN0YXJ0IFVzZXIgQnV0dG9uLlxuICAgICAqL1xuICAgIHN0YXJ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgU2VsZWN0IFVzZXIgQnV0dG9uLlxuICAgICAqL1xuICAgIHNlbGVjdENhbGxiYWNrICgpIHt9XG59IiwiaW1wb3J0IFwiLi9ib2FyZC1zdHlsaW5nLmNzc1wiO1xuaW1wb3J0IEtuaWdodCBmcm9tIFwiLi9rbmlnaHQuanNcIjtcbmltcG9ydCBUaWxlIGZyb20gXCIuL3RpbGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmQge1xuICAgICNCT0FSRCA9IDg7XG4gICAgI0RFRkFVTFRfUE9TID0ge3g6IDMsIHk6M307XG4gICAgI2NvbXBsZXRlQ2FsbGJhY2s7XG5cbiAgICAvKipcbiAgICAgKiBCb2FyZCBDbGFzc1xuICAgICAqIFxuICAgICAqIENoZXNzYm9hcmQgQ2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3Igc2V0dGluZyB1cCBhbGwgVGlsZXMgYW5kIHRoZSBcbiAgICAgKiBLbmlnaHQsIGluIGFkZGl0aW9uIHRvIG1hbmFnaW5nIHRoZSBjb250cm9scyBmb3IgdGhlIHRoZSBLbmlnaHQuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGNvbXBsZXRlQ2FsbGJhY2sgUHV6emxlIENvbXBsZXRlIENhbGxiYWNrXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIEJvYXJkIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX21vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5jbGFzc0xpc3QuYWRkKFwiY2hlc3Nib2FyZFwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBHcmlkIFRlbXBsYXRlIEFyZWFzIHRvIHRoZSBCb2FyZCBET00gRWxlbWVudFxuICAgICAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy4jQk9BUkQgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNCT0FSRDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGBcInRpbGUtJHtpfSR7an0gYFxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGogPT09IHRoaXMuI0JPQVJEIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYHRpbGUtJHtpfSR7an1cIiR7aSA9PT0gMCA/IFwiXCIgOiBcIiBcIn1gO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYHRpbGUtJHtpfSR7an0gYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5zZXRQcm9wZXJ0eShcImdyaWQtdGVtcGxhdGUtYXJlYXNcIiwgdGVtcGxhdGUpO1xuXG4gICAgICAgIC8vIEluaXRhaWxpc2UgVGlsZXNcbiAgICAgICAgdGhpcy5fdGlsZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNCT0FSRDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI0JPQVJEOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gbmV3IFRpbGUoXG4gICAgICAgICAgICAgICAgICAgIGksIFxuICAgICAgICAgICAgICAgICAgICBqLCBcbiAgICAgICAgICAgICAgICAgICAgaiAlIDIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBpICUgMiA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgaSAlIDIgPyBcIndoaXRlXCIgOiBcImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGlsZS5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgS25pZ2h0XG4gICAgICAgIHRoaXMuX2tuaWdodCA9IG5ldyBLbmlnaHQoXG4gICAgICAgICAgICB0aGlzLiNERUZBVUxUX1BPUy54LCBcbiAgICAgICAgICAgIHRoaXMuI0RFRkFVTFRfUE9TLnksIHRoaXMuI0JPQVJELCBcbiAgICAgICAgICAgIHRoaXMuX3RpbGVzXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gUGxhY2UgS25pZ2h0IGFuZCBDdXJzb3Igb24gSW5pdGlhbCBUaWxlXG4gICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGlsZS54ID09PSB0aGlzLiNERUZBVUxUX1BPUy54ICYmIFxuICAgICAgICAgICAgICAgIHRpbGUueSA9PT0gdGhpcy4jREVGQVVMVF9QT1MueVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGlsZS5wbGFjZUtuaWdodCh0aGlzLl9rbmlnaHQuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IHRpbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIENhbGxiYWNrIGFuZCBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy4jY29tcGxldGVDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX2xhc3Q7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzID0gW107XG4gICAgICAgIHRoaXMuX2luaXRpYWxpc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcHV6emxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2dvYWwgPSB7eDogLTEsIHk6IC0xfTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICBnZXQga25pZ2h0ICgpIHsgcmV0dXJuIHRoaXMuX2tuaWdodDsgfVxuXG4gICAgc2V0IGtuaWdodCAob2JqKSB7IHRoaXMuX2tuaWdodCA9IG9iajsgfVxuXG4gICAgZ2V0IHByZXZpb3VzICgpIHsgcmV0dXJuIHRoaXMuX3ByZXZpb3VzOyB9XG5cbiAgICBzZXQgcHJldmlvdXMgKGFycikgeyB0aGlzLl9wcmV2aW91cyA9IGFycjsgfVxuXG4gICAgZ2V0IHB1enpsaW5nICgpIHsgcmV0dXJuIHRoaXMuX3B1enpsaW5nOyB9XG5cbiAgICBzZXQgcHV6emxpbmcgKGJvb2wpIHsgdGhpcy5fcHV6emxpbmcgPSBib29sOyB9XG5cbiAgICBnZXQgZ29hbCAoKSB7IHJldHVybiB0aGlzLl9nb2FsOyB9XG5cbiAgICBzZXQgZ29hbCAoZGljdCkgeyB0aGlzLl9nb2FsID0gZGljdDsgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFJvb3QgTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgU2VsZWN0ZWQgUm9vdCBQb3NpdGlvbiBvZiB0aGUgS25pZ2h0IGZvciB0aGUgUHV6emxlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFJvb3QgUG9zaXRpb25cbiAgICAgKi9cbiAgICBnZXRSb290ICgpIHsgcmV0dXJuIHsgeDogdGhpcy5fa25pZ2h0LngsIHk6IHRoaXMuX2tuaWdodC55IH07IH1cblxuICAgIC8qKlxuICAgICAqIEdldCBHcmFwaCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBHcmFwaCBHZW5lcmF0ZWQgYnkgdGhlIEtuaWdodCBjb25uZWN0aW5nIGFsbCB0aGUgVGlsZXMgdG8gXG4gICAgICogZWFjaCBvdGhlciBieSB0aGUgbGVnYWxseSBhbGxvd2VkIG1vdmVzIG9mIHRoZSBLbmlnaHQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgR3JhcGggb2YgQ2hlc3Nib2FyZFxuICAgICAqL1xuICAgIGdldEdyYXBoICgpIHsgcmV0dXJuIHRoaXMuX2tuaWdodC5ncmFwaDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBCb2FyZCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIGRlcGVuZGVudCBvbiB0aGUgc2NyZWVuIHNpemUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRpbWVuc2lvbiBCb2FyZCBTaXplIChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAoZGltZW5zaW9uKSB7XG4gICAgICAgIC8vIFNldCBCb2FyZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS53aWR0aCA9IGAke2RpbWVuc2lvbn1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtkaW1lbnNpb259cHhgO1xuXG4gICAgICAgIC8vIFNldCBUaWxlIERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgdGlsZURpbSA9IE1hdGguZmxvb3IoZGltZW5zaW9uIC8gdGhpcy4jQk9BUkQpO1xuICAgICAgICBjb25zdCBmb250U2l6ZSA9IE1hdGguZmxvb3IodGlsZURpbSAqIDAuOCk7XG4gICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICB0aWxlLmVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aWxlRGltfXB4YDtcbiAgICAgICAgICAgIHRpbGUuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aWxlRGltfXB4YDtcbiAgICAgICAgICAgIHRpbGUuZWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IGAke2ZvbnRTaXplfXB4YDtcbiAgICAgICAgICAgIHRpbGUuY3Vyc29yLnN0eWxlLndpZHRoID0gYCR7dGlsZURpbX1weGA7XG4gICAgICAgICAgICB0aWxlLmN1cnNvci5zdHlsZS5oZWlnaHQgPSBgJHt0aWxlRGltfXB4YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IEtuaWdodCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2tuaWdodC5pY29uLnN0eWxlLndpZHRoID0gYCR7dGlsZURpbX1weGA7XG4gICAgICAgIHRoaXMuX2tuaWdodC5pY29uLnN0eWxlLmhlaWdodCA9IGAke3RpbGVEaW19cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBUaGVtZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIEtuaWdodCdzIEljb24uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIFRoZW1lIE5hbWVcbiAgICAgKi9cbiAgICBzZXRUaGVtZSAodGhlbWUpIHsgdGhpcy5fa25pZ2h0LmNoYW5nZUljb24odGhlbWUpOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgR29hbCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgR29hbCBUaWxlIGZvciBTaG9ydGVzdCBQYXRoIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBHb2FsIFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBHb2FsIFktUG9zaXRpb25cbiAgICAgKi9cbiAgICBzZXRHb2FsICh4LCB5KSB7XG4gICAgICAgIC8vIEZpbmQgR29hbCBUaWxlXG4gICAgICAgIGxldCBhdXg7XG4gICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICBpZiAodGlsZS54ID09PSB4ICYmIHRpbGUueSA9PT0geSlcbiAgICAgICAgICAgICAgICBhdXggPSB0aWxlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgR29hbCBWYXJpYWJsZVxuICAgICAgICB0aGlzLl9nb2FsLnggPSB4O1xuICAgICAgICB0aGlzLl9nb2FsLnkgPSB5O1xuXG4gICAgICAgIC8vIEhpZ2hsaWdodCBHb2FsIFRpbGVcbiAgICAgICAgYXV4LmhpZ2hsaWdodCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIENvbXBsZXRlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgZ2l2ZW4gUHV6emxlLCB0aGUgbWV0aG9kIHdpbGwgY2hlY2sgaWYgaXQgaGFzIGJlZW4gY29tcGxldGVkLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRydWUsIGlmIFB1enpsZSBpcyBDb21wbGV0ZVxuICAgICAqL1xuICAgIGlzQ29tcGxldGUgKCkge1xuICAgICAgICAvLyBIYW5kbGUgU2hvcnRlc3QgUGF0aCBQdXp6bGVcbiAgICAgICAgaWYgKHRoaXMuX2dvYWwueCAhPT0gLTEgJiYgdGhpcy5fZ29hbC55ICE9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudC54ID09PSB0aGlzLl9nb2FsLnggJiYgXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudC55ID09PSB0aGlzLl9nb2FsLnlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgLy8gSGFuZGxlIEtuaWdodCdzIFRvdXIgUHV6emxlXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdGlsZXNbaV0ubW92ZSA9PT0gdGhpcy5fdGlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIE1vdmluZyB0aGUgS25pZ2h0IHRvIHRoZSBOZXh0IFBvc2l0aW9uLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IE5leHQgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IE5leHQgWS1Qb3NpdGlvblxuICAgICAqL1xuICAgIG1vdmUgKHgsIHkpIHtcbiAgICAgICAgLy8gRmluZCBUaWxlIHRoYXQgQ29ycmVzcG9uZCB0byBOZXh0IFBvc2l0aW9uXG4gICAgICAgIGxldCB0aWxlO1xuICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICAgICAgaWYgKHQueCA9PT0geCAmJiB0LnkgPT09IHkpXG4gICAgICAgICAgICAgICAgdGlsZSA9IHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFBsYWNlIEN1cnNvciBhbmQgS25pZ2h0IG9uIFRpbGVcbiAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcihmYWxzZSk7XG4gICAgICAgIHRoaXMuI3BsYWNlS25pZ2h0KHRpbGUpO1xuICAgICAgICB0aGlzLl9rbmlnaHQudXBkYXRlKHRpbGUueCwgdGlsZS55KTtcbiAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJlc2V0IHRoZSBCb2FyZCdzIFRpbGVzIHRvIHJlbW92ZSBhbnkgaGlnaGxpZ2h0cy5cbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICAgIC8vIFJlc2V0IFRpbGVzXG4gICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICB0aWxlLnJlc2V0KCk7XG4gICAgICAgICAgICB0aWxlLnRvZ2dsZSgpO1xuXG4gICAgICAgICAgICAvLyBFbnN1cmUgS25pZ2h0IGFuZCBDdXJzb3IgUmVtYWluIG9uIHRoZWlyIFRpbGVcbiAgICAgICAgICAgIGlmICh0aWxlLnggPT09IHRoaXMuX2tuaWdodC54ICYmIHRpbGUueSA9PT0gdGhpcy5fa25pZ2h0LnkpIHtcbiAgICAgICAgICAgICAgICB0aWxlLnBsYWNlS25pZ2h0KHRoaXMuX2tuaWdodC5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aWxlLnBvaW50ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aWxlLnBsYWNlQ3Vyc29yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2V0IE90aGVyIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9wcmV2aW91cyA9IFtdO1xuICAgICAgICB0aGlzLl9nb2FsLnggPSAtMTtcbiAgICAgICAgdGhpcy5fZ29hbC55ID0gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSG9yaXpvbnRhbCBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1vdmUgdGhlIEN1cnNvciBIb3Jpem9udGFsbHkgYXJvdW5kIHRoZSBCb2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJpZ2h0IERlZmF1bHQgQWN0aW9uIGlzIFJpZ2h0d2FyZHNcbiAgICAgKi9cbiAgICBob3Jpem9udGFsTW92ZSAocmlnaHQ9dHJ1ZSkge1xuICAgICAgICAvLyBFbnN1cmUgSG9yaXpvbnRhbCBNb3ZlIGlzIHN0aWxsIG9uIEJvYXJkXG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50LnkgKyAocmlnaHQgPyAxIDogLTEpO1xuICAgICAgICBpZiAoY3VyciA8IHRoaXMuI0JPQVJEICYmIGN1cnIgPj0gMCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIEN1cnNvciBmcm9tIFRpbGVcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQucGxhY2VDdXJzb3IoZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIGFuZCBGaW5kIE5ldyBUaWxlIGZvciBDdXJzb3JcbiAgICAgICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbGUueSA9PT0gY3VyciAmJiB0aWxlLnggPT09IHRoaXMuX2N1cnJlbnQueClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IHRpbGU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUGxhY2UgQ3Vyc29yIG9uIFRpbGVcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQucGxhY2VDdXJzb3IodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJ0aWNhbCBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1vdmUgdGhlIEN1cnNvciB1cCBvciBkb3duIGFyb3VuZCB0aGUgQm9hcmQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1cCBEZWZhdWx0IEFjdGlvbiBpcyBVcHdhcmRzXG4gICAgICovXG4gICAgdmVydGljYWxNb3ZlICh1cD10cnVlKSB7XG4gICAgICAgIC8vIEVuc3VyZSBWZXJ0aWNhbCBNb3ZlIGlzIHN0aWxsIG9uIEJvYXJkXG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50LnggKyAodXAgPyAxIDogLTEpO1xuICAgICAgICBpZiAoY3VyciA8IHRoaXMuI0JPQVJEICYmIGN1cnIgPj0gMCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIEN1cnNvciBmcm9tIFRpbGVcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQucGxhY2VDdXJzb3IoZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIGFuZCBGaW5kIE5ldyBUaWxlIGZvciBDdXJzb3JcbiAgICAgICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbGUueSA9PT0gdGhpcy5fY3VycmVudC55ICYmIHRpbGUueCA9PT0gY3VycilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IHRpbGU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUGxhY2UgQ3Vyc29yIG9uIFRpbGVcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQucGxhY2VDdXJzb3IodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2NlcHQgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIElmIG1vdmUgaXMgbGVnYWwsIEtuaWdodCBpcyBQbGFjZWQgYW5kIG5vIGVycm9yIGlzIHJhc2llZC4gT24gdGhlIG90aGVyIFxuICAgICAqIGhhbmQsIGlmIHRoZSBtb3ZlIGlzIGlsbGVnYWwsIHRoZW4gbm8gYWN0aW9uIGlzIHRha2VuIGFuZCBlcnJvciBzaG91bGQgXG4gICAgICogYmUgcmFpc2VkLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIEVycm9yIE1lc3NhZ2UsIGlmIHJlcXVpcmVkXG4gICAgICovXG4gICAgYWNjZXB0QWN0aW9uICgpIHtcbiAgICAgICAgLy8gRmluZCBDdXJyZW50IFRpbGVcbiAgICAgICAgbGV0IGF1eDtcbiAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIGlmICh0aWxlLnBvaW50ZXIpXG4gICAgICAgICAgICAgICAgYXV4ID0gdGlsZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRW5zdXJlIE1vdmUgaXMgTGVnYWxcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxpc2UgfHwgdGhpcy5fa25pZ2h0LmlzTGVnYWwoYXV4LngsIGF1eC55KSkge1xuICAgICAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIFN0b3JlIFRpbGUgaWYgU29sdmluZyBQdXp6bGVcbiAgICAgICAgICAgIGlmICh0aGlzLl9wdXp6bGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzLnB1c2goYXV4KTtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBUb3VyaW5nLCBDb25maXJtIE5vIFJlcGVhdGVkIFRpbGVzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dvYWwueCA9PT0gLTEgJiYgdGhpcy5fZ29hbC55ID09PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBhdXgubW92ZSA9PT0gMDtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIFB1enpsZSBpcyBDb21wbGV0ZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29tcGxldGUoKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgQ3VycmVudCBUaWxlXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdCA9IHRoaXMuX2N1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy4jcGxhY2VLbmlnaHQoYXV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9rbmlnaHQudXBkYXRlKGF1eC54LCBhdXgueSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdGlhbGlzZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gTnVtYmVyIFRpbGUsIGlmIFRvdXJpbmdcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ29hbC54ID09PSAtMSAmJiB0aGlzLl9nb2FsLnkgPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Lm51bWJlcih0aGlzLl9wcmV2aW91cy5sZW5ndGgsIHRoaXMuX2tuaWdodC5lbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB3aXRob3V0IEVycm9yXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzLnBvcCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBgTW92ZSB0byAoJHthdXgueX0sICR7YXV4Lnh9KSBoYXMgYWxyZWFkeSBiZWVuIG1hZGUhYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB3aXRoIEVycm9yXG4gICAgICAgIHJldHVybiBgTW92ZSB0byAoJHthdXgueX0sICR7YXV4Lnh9KSBpcyBpbGxlZ2FsIWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjbGluZSBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogSWYgd2hpbGUgc29sdmluZyB0aGUgUHV6emxlIHRoZSBVc2VyIGZpbmRzIHRoZXkgd2FudCB0byB1bmRvIHRoZWlyIGxhc3QgXG4gICAgICogbW92ZSwgdGhlbiB0aGUgcHJldmlvdXMgbW92ZSB3aWxsIHJlcGxhY2UgdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAgICovXG4gICAgZGVjbGluZUFjdGlvbiAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBvbmx5IGlmIFNvbHZpbmcgUHV6emxlXG4gICAgICAgIGlmICh0aGlzLl9wdXp6bGluZyAmJiAhdGhpcy5fYWxnb3JpdGhtICYmIHRoaXMuX3ByZXZpb3VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRoaXMuX3ByZXZpb3VzW3RoaXMuX3ByZXZpb3VzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgTW92ZSBpZiBMYXN0IE1vdmUgaXMgdGhlIFNhbWUgYXMgTGFzdCBpbiBMaXN0XG4gICAgICAgICAgICBpZiAoY2hlY2sueCA9PT0gdGhpcy5fbGFzdC54ICYmIGNoZWNrLnkgPT09IHRoaXMuX2xhc3QueSlcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91cy5wb3AoKTtcblxuICAgICAgICAgICAgLy8gU2V0IExhc3QgTW92ZSBpbiBMaXN0IGFzIEN1cnJlbnQgTW92ZVxuICAgICAgICAgICAgbGV0IGF1eCA9IHRoaXMuX3ByZXZpb3VzLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy4jcGxhY2VLbmlnaHQoYXV4LCB0aGlzLl9jdXJyZW50LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuX2tuaWdodC51cGRhdGUoYXV4LngsIGF1eC55KTtcbiAgICAgICAgICAgIHRoaXMuX2xhc3QgPSB0aGlzLl9jdXJyZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBFaXRoZXIgdXNlZCBmb3IgU2VsZWN0aW5nIHRoZSBJbml0aWFsIFBvc2l0aW9uIG9mIHRoZSBLbmlnaHQgZm9yIFxuICAgICAqIGNvbXBsZXRpbmcgdGhlIFB1enpsZSwgb3IgZm9yIHVzaW5nIHRoZSBBbGdvcml0aG0gdG8gc2hvdyBhIFNvbHV0aW9uIGZvclxuICAgICAqIHRoZSBQdXp6bGUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSB0b3VyIEtuaWdodCdzIFRvdXIgb3IgTm90XG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aCBQYXRoIEdlbmVyYXRlZCBieSBBbGdvcml0aG1cbiAgICAgKiBAY2FsbGJhY2sgbW92ZUNhbGxiYWNrIE1vdmUgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgc2VsZWN0QWN0aW9uICh0b3VyPWZhbHNlLCBwYXRoPVtdLCBtb3ZlQ2FsbGJhY2spIHtcbiAgICAgICAgLy8gU2VsZWN0IEluaXRpYWwgUG9zaXRpb24gZm9yIEtuaWdodFxuICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIEN1cnJlbnQgVGlsZVxuICAgICAgICAgICAgbGV0IGF1eDtcbiAgICAgICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbGUucG9pbnRlcilcbiAgICAgICAgICAgICAgICAgICAgYXV4ID0gdGlsZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgQ3VycmVudCBUaWxlXG4gICAgICAgICAgICB0aGlzLiNwbGFjZUtuaWdodChhdXgpO1xuICAgICAgICAgICAgdGhpcy5fa25pZ2h0LnVwZGF0ZShhdXgueCwgYXV4LnkpO1xuXG4gICAgICAgICAgICAvLyBTZXR1cCBQdXp6bGluZyBWYXJpYWJsZXNcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzLnB1c2goYXV4KTtcbiAgICAgICAgICAgIHRoaXMuX3B1enpsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aWxlLmFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgdGlsZS50b2dnbGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5oaWdobGlnaHQoKTtcblxuXG4gICAgICAgICAgICAvLyBJZiBjb21wbGV0aW5nIGEgS25pZ2h0J3MgVG91ciwgTnVtYmVyIFRpbGVcbiAgICAgICAgICAgIGlmICh0b3VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudC5udW1iZXIoMSwgdGhpcy5fa25pZ2h0LmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgLy8gUHJvbXB0IEtuaWdodCB0byBVc2UgQWxnb3JpdGhtJ3MgUGF0aFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldCBWYXJpYWJsZXMgZm9yIFRpbWluZyBJbnRlcnZhbFxuICAgICAgICAgICAgdGhpcy5fYWxnb3JpdGhtID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgLy8gU2V0dXAgMXMgVGltaW5nIEludGVydmFsXG4gICAgICAgICAgICB2YXIgeCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXQgVmVydGV4IHRvIGJlIExhc3QgRWxlbWVudCBpbiBQYXRoXG4gICAgICAgICAgICAgICAgbGV0IHZlcnRleDtcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBwYXRoLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIFZlcnRleCB0byBQcmV2aW91cyBTdGVwc1xuICAgICAgICAgICAgICAgIHNlbGYucHJldmlvdXMucHVzaCh2ZXJ0ZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIEtuaWdodCdzIFRvdXIsIE51bWJlciB0aGUgVGlsZXNcbiAgICAgICAgICAgICAgICBpZiAodG91cilcbiAgICAgICAgICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIFRpbGVzXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOdW1iZXIgVGlsZSB0aGF0IEtuaWdodCBpcyBPblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZlcnRleC54ID09PSB0aWxlLnggJiYgdmVydGV4LnkgPT09IHRpbGUueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlLm51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcmV2aW91cy5sZW5ndGggLSAxLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5rbmlnaHQuZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIEdhbWUgSW50ZXJmYWNlXG4gICAgICAgICAgICAgICAgbW92ZUNhbGxiYWNrKHZlcnRleC54LCB2ZXJ0ZXgueSk7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBQdXp6bGUgaXMgQ29tcGxldGVcbiAgICAgICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgVGltaW5nIEludGVydmFsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHV6emxlIENvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuI2NvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIEtuaWdodCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGdpdmVuIHRpbGUsIFBsYWNlIHRoZSBLbmlnaHQgdGhlcmUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtUaWxlfSB0aWxlIERlc2lyZWQgVGlsZVxuICAgICAqIEBwYXJhbSB7VGlsZX0gcHJldiBQcmV2aW91cyBUaWxlXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1bmRvIFVuZG8sIGRlZmF1bHQgRmFsc2VcbiAgICAgKi9cbiAgICAjcGxhY2VLbmlnaHQgKHRpbGUsIHByZXYsIHVuZG89ZmFsc2UpIHtcbiAgICAgICAgLy8gUmVtb3ZlIEtuaWdodCBmcm9tIEN1cnJlbnQgVGlsZVxuICAgICAgICB0aGlzLl9jdXJyZW50LnJlbW92ZUtuaWdodCgpO1xuXG4gICAgICAgIC8vIEZvciBVbmRvaW5nIFBsYWNlbWVudCwgVXBkYXRlIFRpbGVzXG4gICAgICAgIGlmICh1bmRvKSB7XG4gICAgICAgICAgICBwcmV2LnBsYWNlQ3Vyc29yKGZhbHNlKTtcbiAgICAgICAgICAgIHByZXYucmVzZXQoKTtcbiAgICAgICAgICAgIHRpbGUucGxhY2VDdXJzb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBDdXJyZW50IFRpbGVcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IHRpbGU7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQucGxhY2VLbmlnaHQodGhpcy5fa25pZ2h0LmVsZW1lbnQpO1xuICAgIH1cbn0iLCJpbXBvcnQgR3JhcGggZnJvbSBcIi4uLy4uL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qc1wiO1xuaW1wb3J0IEtuaWdodE5vcm1hbCBmcm9tIFwiLi4vaW1hZ2VzL2tuaWdodC5wbmdcIjtcbmltcG9ydCBLbmlnaHRSZXRybyBmcm9tIFwiLi4vaW1hZ2VzL2tuaWdodC1yZXRyby5wbmdcIjtcbmltcG9ydCBLbmlnaHRGdXR1cmUgZnJvbSBcIi4uL2ltYWdlcy9rbmlnaHQtZnV0dXJlLnBuZ1wiO1xuaW1wb3J0IEtuaWdodE5lb24gZnJvbSBcIi4uL2ltYWdlcy9rbmlnaHQtbmVvbi5wbmdcIjtcbmltcG9ydCBLbmlnaHRUZXJtaW5hbCBmcm9tIFwiLi4vaW1hZ2VzL2tuaWdodC10ZXJtaW5hbC5wbmdcIjtcbmltcG9ydCBLbmlnaHRGYW50YXN5IGZyb20gXCIuLi9pbWFnZXMva25pZ2h0LWZhbnRhc3kucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtuaWdodCB7XG4gICAgI0JPQVJEO1xuICAgICNUSEVNRVMgPSB7XG4gICAgICAgIFwibm9ybWFsXCI6IEtuaWdodE5vcm1hbCxcbiAgICAgICAgXCJyZXRyb1wiOiBLbmlnaHRSZXRybyxcbiAgICAgICAgXCJmdXR1cmVcIjogS25pZ2h0RnV0dXJlLFxuICAgICAgICBcIm5lb25cIjogS25pZ2h0TmVvbixcbiAgICAgICAgXCJ0ZXJtaW5hbFwiOiBLbmlnaHRUZXJtaW5hbCxcbiAgICAgICAgXCJmYW50YXN5XCI6IEtuaWdodEZhbnRhc3ksXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEtuaWdodCBDbGFzc1xuICAgICAqIFxuICAgICAqIENsYXNzIHRoYXQgR2VuZXJhdGVzIHRoZSBET00gZWxlbWVudCB0aGF0IHJlcHJlc2VudHMgdGhlIEtuaWdodCBPYmplY3QsIFxuICAgICAqIGFuZCBhbHNvIGNvbnRyb2xzIHRoZSBLbmlnaHQgYXMgaXQgbW92ZXMgYWNyb3NzIHRoZSBDaGVzc2JvYXJkLCBlaXRoZXIgXG4gICAgICogYnkgdGhlIFVzZXIgb3IgYnkgdGhlIFNlYXJjaCBBbGdvcml0aG0uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvYXJkIENoZXNzYm9hcmQgU2l6ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHRpbGVzIEFycmF5IG9mIENoZXNzYm9hcmQgVGlsZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSwgYm9hcmQsIHRpbGVzKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIEtuaWdodCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5faWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLl9pY29uLnNyYz0gS25pZ2h0Tm9ybWFsO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2ljb24pO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJrbmlnaHRcIik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB0aGlzLiNCT0FSRCA9IGJvYXJkO1xuICAgICAgICB0aGlzLl90aWxlcyA9IHRpbGVzO1xuICAgICAgICB0aGlzLl9sZWdhbCA9IFtdO1xuICAgICAgICB0aGlzLl9wYXRoID0gW107XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgR3JhcGggZm9yIFRpbGVzXG4gICAgICAgIHRoaXMuX2dyYXBoID0gbmV3IEdyYXBoKCk7XG4gICAgICAgIHRoaXMuZmlsbCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGVsZW1lbnQgKCkgeyByZXR1cm4gdGhpcy5fZWxlbWVudDsgfVxuXG4gICAgc2V0IGVsZW1lbnQgKGVsZW0pIHsgdGhpcy5fZWxlbWVudCA9IGVsZW07IH1cblxuICAgIGdldCBpY29uICgpIHsgcmV0dXJuIHRoaXMuX2ljb247IH1cblxuICAgIHNldCBpY29uIChpbWcpIHsgdGhpcy5faWNvbiA9IGltZzsgfVxuXG4gICAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feDsgfVxuXG4gICAgc2V0IHggKHgpIHsgdGhpcy5feCA9IHg7IH1cblxuICAgIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3k7IH1cblxuICAgIHNldCB5ICh5KSB7IHRoaXMuX3kgPSB5OyB9XG5cbiAgICBnZXQgbGVnYWwgKCkgeyByZXR1cm4gdGhpcy5fbGVnYWw7IH1cblxuICAgIHNldCBsZWdhbCAoYXJyKSB7IHRoaXMuX2xlZ2FsID0gYXJyOyB9XG5cbiAgICBnZXQgdGlsZXMgKCkgeyByZXR1cm4gdGhpcy5fdGlsZXM7IH1cblxuICAgIHNldCB0aWxlcyAoYXJyKSB7IHRoaXMuX3RpbGVzID0gYXJyOyB9XG5cbiAgICBnZXQgZ3JhcGggKCkgeyByZXR1cm4gdGhpcy5fZ3JhcGg7IH1cblxuICAgIHNldCBncmFwaCAoZ3JhcGgpIHsgdGhpcy5fZ3JhcGggPSBncmFwaDsgfVxuXG4gICAgZ2V0IHBhdGggKCkgeyByZXR1cm4gdGhpcy5fcGF0aDsgfVxuXG4gICAgc2V0IHBhdGggKGFycikgeyB0aGlzLl9wYXRoID0gYXJyOyB9XG5cbiAgICBnZXQgc3RlcHMgKCkgeyByZXR1cm4gdGhpcy5fc3RlcHM7IH1cblxuICAgIHNldCBzdGVwcyAobnVtKSB7IHRoaXMuX3N0ZXBzID0gbnVtOyB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgSWNvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgdGhlIE5ldyBJY29uIGZvciB0aGUgZ2l2ZW4gVGhlbWUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIE5ldyBUaGVtZVxuICAgICAqL1xuICAgIGNoYW5nZUljb24gKHRoZW1lKSB7XG4gICAgICAgIC8vIEVuc3VyZSBUaGVtZSBFeGlzdHNcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuI1RIRU1FUykuaW5jbHVkZXModGhlbWUpKSB7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIEljb25cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuX2ljb24uc3JjID0gdGhpcy4jVEhFTUVTW3RoZW1lXTtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5faWNvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaWxsIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEJhc2VkIG9uIHRoZSBMZWdhbCBNb3ZlcyB0aGF0IGEgS25pZ2h0IGNhbiBtYWtlIG9uIGEgQ2hlc3Nib2FyZCwgdGhpcyBcbiAgICAgKiBtZXRob2Qgd2lsbCBmaWxsIHVwIHRoZSBncmFwaCB3aXRoIGVkZ2VzIHRoYXQgY29ycmVzcG9uZCB0byB0aGUgbGVnYWwgXG4gICAgICogbW92ZW1lbnRzIGEga25pZ2h0IGNhbiBtYWtlIGF0IGVhY2ggc3F1YXJlIG9uIHRoZSBib2FyZC5cbiAgICAgKi9cbiAgICBmaWxsICgpIHtcbiAgICAgICAgLy8gQWRkIGEgVmVydGV4IGZvciBlYWNoIFRpbGVcbiAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydFZlcnRleCh0aWxlLngsIHRpbGUueSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBhbiBFZGdlIGZvciBUcmF2ZXJzaW5nIHdpdGggS25pZ2h0XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy4jQk9BUkQ7IHgrKylcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy4jQk9BUkQ7IHkrKylcbiAgICAgICAgICAgICAgICB0aGlzLmdldExlZ2FsTW92ZXMoeCwgeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBMZWdhbCBNb3ZlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGN1cnJlbnQgcG9zaXRpb24gdGhlIGtuaWdodCBpcyBpbiBvbiB0aGUgQ2hlc3Nib2FyZCwgdGhpcyBtZXRob2QgXG4gICAgICogd2lsbCBmaWxsIHVwIHRoZSBsZWdhbCBtb3ZlcyBhcnJheSB3aXRoIHRoZSBjdXJyZW50bHkgYXZhaWxhYmxlIGxlZ2FsIFxuICAgICAqIG1vdmVzLlxuICAgICAqL1xuICAgIGN1cnJlbnRMZWdhbE1vdmVzICgpIHtcbiAgICAgICAgLy8gR2V0IFZlcnRleCBmb3IgQ3VycmVudCBMb2NhdGlvbiBmcm9tIEdyYXBoXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgodGhpcy54LCB0aGlzLnkpO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBOZWlnaGJvdXJzLCBhZGRpbmcgdGhlbSB0byBMZWdhbCBNb3ZlcyBBcnJheVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnQubmVpZ2hib3Vycy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHRoaXMuX2xlZ2FsLnB1c2goY3VycmVudC5uZWlnaGJvdXJzW2ldKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBQb3NpdGlvbiBvZiB0aGUgS25pZ2h0LCBhbmQgcmV0cmlldmUgbmV3IGxlZ2FsIG1vdmVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZSAoeCwgeSkge1xuICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgIHRoaXMuX2xlZ2FsID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudExlZ2FsTW92ZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBMZWdhbCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgdGhlIE1vdmUgc2VsZWN0ZWQgaXMgYSBsZWdhbCBvbmUsIGdpdmVuIHRoZSByZXN0cmljdGlvbnMgb2YgdGhlXG4gICAgICogS25pZ2h0J3MgbW92ZW1lbnQgb24gYSBjaGVzc2JvYXJkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgTW92ZSBpcyBMZWdhbFxuICAgICAqL1xuICAgIGlzTGVnYWwgKHgsIHkpIHtcbiAgICAgICAgLy8gRmluZCBpZiBDb29yZGluYXRlIGlzIGEgTGVnYWwgVmVydGV4XG4gICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZWdhbC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIENvb3JkaW5hdGUgTWF0Y2hlcyBMZWdhbCBWZXJ0ZXhcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZWdhbFtpXS54ID09PSB4ICYmIHRoaXMuX2xlZ2FsW2ldLnkgPT09IHkpXG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpZHggPj0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTGVnYWwgTW92ZXMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBHaXZlbiBQb3NpdGlvbiwgdGhlIG1ldGhvZCB3aWxsIGdlbmVyYXRlIHRoZSBlZGdlcyB0b3dhcmRzIHRoZSBcbiAgICAgKiBsZWdhbCBwb3NpdGlvbnMsIGdpdmVuIHRoZSBrbmlnaHRzIHJlc3RyaWN0ZWQgbW92ZXMgb24gYSBjaGVzc2JvYXJkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIGdldExlZ2FsTW92ZXMgKHgsIHkpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCwgeSk7XG4gICAgICAgIC8vIFRvcCBNb3Zlc1xuICAgICAgICBpZiAoeSArIDIgPCB0aGlzLiNCT0FSRCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgVG9wLVJpZ2h0IGlzIExlZ2FsXG4gICAgICAgICAgICBpZiAoeCArIDEgPCB0aGlzLiNCT0FSRCkge1xuICAgICAgICAgICAgICAgIGxldCB0b3BSaWdodCA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4ICsgMSwgeSArIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgdG9wUmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgVG9wLUxlZnQgaXMgTGVnZWxcbiAgICAgICAgICAgIGlmICh4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcExlZnQgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCAtIDEsIHkgKyAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIHRvcExlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJpZ2h0IE1vdmVzXG4gICAgICAgIGlmICh4ICsgMiA8IHRoaXMuI0JPQVJEKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBSaWdodC1Ub3AgaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh5ICsgMSA8IHRoaXMuI0JPQVJEKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJpZ2h0VG9wID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggKyAyLCB5ICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCByaWdodFRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBSaWdodC1Cb3R0b20gaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh5IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJpZ2h0Qm90dG9tID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggKyAyLCB5IC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCByaWdodEJvdHRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQm90dG9tIE1vdmVzXG4gICAgICAgIGlmICh5IC0gMiA+PSAwKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBCb3R0b20tUmlnaHQgaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh4ICsgMSA8IHRoaXMuI0JPQVJEKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvdHRvbVJpZ2h0ID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggKyAxLCB5IC0gMik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCBib3R0b21SaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBCb3R0b20tTGVmdCBpcyBMZWdhbFxuICAgICAgICAgICAgaWYgKHggLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgYm90dG9tTGVmdCA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4IC0gMSwgeSAtIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgYm90dG9tTGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTGVmdCBNb3Zlc1xuICAgICAgICBpZiAoeCAtIDIgPj0gMCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgTGVmdC1Ub3AgaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh5ICsgMSA8IHRoaXMuI0JPQVJEKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxlZnRUb3AgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCAtIDIsIHkgKyAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIGxlZnRUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgTGVmdC1Cb3R0b20gaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh5IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxlZnRCb3R0b20gPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCAtIDIsIHkgLSAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIGxlZnRCb3R0b20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUge1xuICAgIC8qKlxuICAgICAqIFRpbGUgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBDaGVzcyBCb2FyZCBUaWxlIEVsZW1lbnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG91ciBcImJsYWNrXCIgb3IgXCJ3aGl0ZVwiXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHksIGNvbG91cj1cIndoaXRlXCIpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgVGlsZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NvbG91cn0tdGlsZWApO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmlkID0gYCR7eH0tJHt5fS10aWxlYDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgIFwiZ3JpZC1hcmVhXCIsIGB0aWxlLSR7eH0ke3l9YFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIEN1cnNvciBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jdXJzb3IuaWQgPSBcImN1cnNvci10aWxlXCI7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB0aGlzLl9tb3ZlID0gMDtcbiAgICAgICAgdGhpcy5fY29sb3VyID0gY29sb3VyO1xuICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcG9pbnRlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBlbGVtZW50ICgpIHsgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7IH1cblxuICAgIHNldCBlbGVtZW50IChlbGVtKSB7IHRoaXMuX2VsZW1lbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgY3Vyc29yICgpIHsgcmV0dXJuIHRoaXMuX2N1cnNvcjsgfVxuXG4gICAgc2V0IGN1cnNvciAoZWxlbSkgeyB0aGlzLl9jdXJzb3IgPSBlbGVtOyB9XG5cbiAgICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94OyB9XG5cbiAgICBzZXQgeCAoeCkgeyB0aGlzLl94ID0geDsgfVxuXG4gICAgZ2V0IHkgKCkgeyByZXR1cm4gdGhpcy5feTsgfVxuXG4gICAgc2V0IHkgKHkpIHsgdGhpcy5feSA9IHk7IH1cblxuICAgIGdldCBtb3ZlICgpIHsgcmV0dXJuIHRoaXMuX21vdmU7IH1cblxuICAgIHNldCBtb3ZlIChudW0pIHsgdGhpcy5fbW92ZSA9IG51bTsgfVxuXG4gICAgZ2V0IGNvbG91ciAoKSB7IHJldHVybiB0aGlzLl9jb2xvdXI7IH1cblxuICAgIHNldCBjb2xvdXIgKHN0cikgeyB0aGlzLl9jb2xvdXIgPSBzdHI7IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIGdldCBwb2ludGVyICgpIHsgcmV0dXJuIHRoaXMuX3BvaW50ZXI7IH1cblxuICAgIHNldCBwb2ludGVyIChib29sKSB7IHRoaXMuX3BvaW50ZXIgPSBib29sOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgS25pZ2h0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJlbW92ZXMgdGhlIEtuaWdodCBET00gRWxlbWVudCBmcm9tIHRoZSB0aWxlLlxuICAgICAqL1xuICAgIHJlbW92ZUtuaWdodCAoKSB7IFxuICAgICAgICAvLyBDbGVhciBET00gRWxlbWVudHNcbiAgICAgICAgdGhpcy5fZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiOyBcbiAgICAgICAgXG4gICAgICAgIC8vIElmIE51bWJlciB3YXMgb24gVGlsZSwgS2VlcCBpdCBPblxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlICYmIHRoaXMuX21vdmUgPiAwKVxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMuX21vdmU7XG5cbiAgICAgICAgLy8gSWYgQ3Vyc29yIHdhcyBvbiBUaWxlLCBLZWVwIGl0IE9uXG4gICAgICAgIGlmICh0aGlzLl9wb2ludGVyKVxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jdXJzb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIEtuaWdodCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBBcHBlbmRzIHRoZSBLbmlnaHQgRE9NIEVsZW1lbnQgdG8gdGhlIHRpbGUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHsqfSBlbGVtIEtuaWdodCBET00gRWxlbWVudFxuICAgICAqL1xuICAgIHBsYWNlS25pZ2h0IChlbGVtKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2UgQ3Vyc29yXG4gICAgICogXG4gICAgICogUGxhY2Ugb3IgUmVtb3ZlIHRoZSBDdXJzb3Igb24gdGhlIHRpbGUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbiBQbGFjZSBvciBSZW1vdmVcbiAgICAgKi9cbiAgICBwbGFjZUN1cnNvciAob249dHJ1ZSkge1xuICAgICAgICAvLyBQbGFjZSBDdXJzb3Igb24gVGlsZVxuICAgICAgICBpZiAob24gJiYgIXRoaXMuX3BvaW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fY3Vyc29yKTtcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBDdXJzb3IgZnJvbSBUaWxlXG4gICAgICAgIGlmICghb24gJiYgdGhpcy5fcG9pbnRlcikge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9jdXJzb3IpO1xuICAgICAgICAgICAgdGhpcy5fcG9pbnRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE51bWJlciB0aGUgVGlsZSB3aXRoIGEgRGVzaXJlZCBOdW1iZXIuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bSBOdW1iZXIgZm9yIFRpbGVcbiAgICAgKiBAcGFyYW0geyp9IGtuaWdodCBLbmlnaHQgRE9NIEVsZW1lbnRcbiAgICAgKi9cbiAgICBudW1iZXIgKG51bSwga25pZ2h0KSB7IFxuICAgICAgICB0aGlzLl9tb3ZlID0gbnVtO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnRleHRDb250ZW50ID0gbnVtOyBcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChrbmlnaHQpO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCgpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2N1cnNvcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlnaGxpZ2h0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhpZ2hsaWdodHMgdGhlIHRpbGUgd2hlbiBpZiB0aGUgdGlsZSBpcyBhY3RpdmUgYW5kIGlmIHRoZSBrbmlnaHQgbGFuZHMgXG4gICAgICogb24gdGhlIHRpbGUuXG4gICAgICovXG4gICAgaGlnaGxpZ2h0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSAmJiAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSlcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXRzIHRoZSBhY3RpdmUgdmFyaWFibGUgdG8gYmUgb24gb3Igb2ZmLCBkZXBlbmRpbmcgb24gd2hldGhlciBvciBub3QgXG4gICAgICogdGhlcmUgaXMgYSBwdXp6bGUgdGhhdCB0aGUgdXNlciBpcyBjdXJyZW50bHkgY29tcGxldGluZy5cbiAgICAgKi9cbiAgICB0b2dnbGUgKCkgeyB0aGlzLl9hY3RpdmUgPSAhdGhpcy5fYWN0aXZlOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZW1vdmVzIGFueSBpbnN0YW5jZSBvZiB0aGUgVGlsZSBiZWluZyBoaWdobGlnaHRlZC5cbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICAgIC8vIE9ubHkgUmVzZXQgVGlsZXMgdGhhdCBhcmUgSGlnaGxpZ2h0ZWRcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlID0gMDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgXCIuL2dhbWUtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gXCIuL2RhdGEvbWVudS5qc29uNVwiO1xuaW1wb3J0IEdhbWVJbnRlcmZhY2UgZnJvbSBcIi4uL2dhbWUtY2hpcC1tb2R1bGUvZ2FtZS1pbnRlcmZhY2UuanNcIjtcbmltcG9ydCBFcnJvckJveCBmcm9tIFwiLi9tYWluLW1vZHVsZS9lcnJvci1ib3guanNcIjtcbmltcG9ydCBLbmlnaHRzTWFuYWdlciBmcm9tIFwiLi9tYWluLW1vZHVsZS9rbmlnaHRzLW1hbmFnZXIuanNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21haW4tbW9kdWxlL21lbnUuanNcIjtcbmltcG9ydCBJbmZvQm94IGZyb20gXCIuL21haW4tbW9kdWxlL2luZm8tYm94LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtuaWdodHNHYW1lIGV4dGVuZHMgR2FtZUludGVyZmFjZSB7XG4gICAgI3Nob3dDYWxsYmFjaztcbiAgICAjdGFrZURvd25DYWxsYmFjaztcbiAgICAjZGltZW5zaW9uc0NhbGxiYWNrO1xuXG4gICAgLyoqXG4gICAgICogS25pZ2h0J3MgR2FtZSBJbnRlcmZhY2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBVc2VkIGZvciBDb250cm9sbGluZyB0aGUgTWVudSBhbmQgQ2hlc3Nib2FyZCBNb2R1bGVzIHdpdGggdGhlIEdhbWVDaGlwJ3NcbiAgICAgKiBDb250cm9sbGVycywgYW5kIGFsc28gZm9yIFVwZGF0aW5nIHRoZSBEaXNwbGF5IHdpdGggdGhlIHJlbGV2YW50IEVycm9yIFxuICAgICAqIGFuZCBJbmZvcm1hdGlvbiBNZXNzYWdlcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIEtuaWdodCdzIE1hbmFnZXJcbiAgICAgICAgdGhpcy5fa20gPSBuZXcgS25pZ2h0c01hbmFnZXIodGhpcy5jb21wbGV0ZUNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9tZW51ID0gbmV3IE1lbnUoY2F0ZWdvcmllcyk7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gbmV3IEVycm9yQm94KCk7XG4gICAgICAgIHRoaXMuX2luZm8gPSBuZXcgSW5mb0JveCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBTY2VuZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgdGhlIFNob3cgYW5kIEdldCBEaW1lbnNpb25zIENhbGxiYWNrIE1ldGhvZCBmb3IgVXBkYXRpbmcgdGhlIEdhbWUgXG4gICAgICogQ29uc29sZSBEaXNwbGF5LlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBzaG93Q2FsbGJhY2sgU2hvdyBDYWxsYmFja1xuICAgICAqIEBjYWxsYmFjayB0YWtlRG93bkNhbGxiYWNrIFRha2UgRG93biBDYWxsYmFja1xuICAgICAqIEBjYWxsYmFjayBkaW1lbnNpb25zQ2FsbGJhY2sgR2V0IERpbWVuc2lvbnMgQ2FsbGJhY2tcbiAgICAgKi9cbiAgICBzZXRTY2VuZSAoc2hvd0NhbGxiYWNrLCB0YWtlRG93bkNhbGxiYWNrLCBnZXREaW1lbnNpb25zKSB7XG4gICAgICAgIC8vIFNldCBDYWxsYmFjayBNZXRob2RzXG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayA9IHNob3dDYWxsYmFjaztcbiAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjayA9IHRha2VEb3duQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuI2RpbWVuc2lvbnNDYWxsYmFjayA9IGdldERpbWVuc2lvbnM7XG5cbiAgICAgICAgLy8gU2V0IEJvYXJkIERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMuI2RpbWVuc2lvbnNDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLl9rbS5zZXR1cChkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIHRoaXMuX21lbnUuc2V0RGltZW5zaW9ucyhkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgIHRoaXMuX3N1Yl9zZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3ViX21lbnU7IFxuICAgICAgICB0aGlzLl9lcnJvci5zZXREaW1lbnNpb25zKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5faW5mby5zZXREaW1lbnNpb25zKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBTZXQgQm9hcmQgb24gRGlzcGxheVxuICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sodGhpcy5fa20ubW9kdWxlKTtcblxuICAgICAgICAvLyBTaG93IEluZm9ybWF0aW9uIGFib3V0IEN1cnJlbnQgR2FtZVxuICAgICAgICB0aGlzLl9pbmZvLnNldFRpdGxlKHRoaXMuX2ttLmdhbWUucHV6emxlVGl0bGUoKSk7XG4gICAgICAgIHRoaXMuX2luZm8uc2V0TWVzc2FnZSh0aGlzLl9rbS5nYW1lLnB1enpsZUluZm8oKSk7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9pbmZvLm1vZHVsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHV6emxlIENvbXBsZXRlIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIFB1enpsZSBpcyBDb21wbGV0ZSwgdGhlIFVzZXIgc2hvdWxkIGJlIGluZm9ybWVkIHdpdGggdGhlIHJlbGV2YW50IFxuICAgICAqIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGNvbXBsZXRlQ2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBTZXQgUGF0aCBUYWtlblxuICAgICAgICB0aGlzLl9rbS5wYXRoID0gdGhpcy5fa20uYm9hcmQucHJldmlvdXM7XG4gICAgICAgIHRoaXMuX2ttLmNvbnRyb2xsZXIgPSB0cnVlO1xuXG4gICAgICAgIC8vIFB1enpsZSBDb21wbGV0ZSwgRGlzcGxheSBJbmZvXG4gICAgICAgIHRoaXMuX2luZm8uc2V0VGl0bGUodGhpcy5fa20uZ2FtZS5wdXp6bGVUaXRsZSgpKTtcbiAgICAgICAgdGhpcy5faW5mby5zZXRNZXNzYWdlKHRoaXMuX2ttLmdhbWUuZW5kSW5mbyhcbiAgICAgICAgICAgIHRoaXMuX2ttLmh1bWFuLFxuICAgICAgICAgICAgdGhpcy5fa20uaHVtYW4gPyB0aGlzLl9rbS5zdGVwcy5odW1hbiA6IHRoaXMuX2ttLnN0ZXBzLmFsZ29yaXRobSxcbiAgICAgICAgICAgIHRoaXMuX2ttLnBhdGhcbiAgICAgICAgKSk7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9pbmZvLm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2ttLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmlnaHQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFJpZ2h0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICByaWdodENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIENoZXNzYm9hcmQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9rbS5ob3Jpem9udGFsTW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExlZnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIExlZnQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGxlZnRDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBDaGVzc2JvYXJkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9rbS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fa20uaG9yaXpvbnRhbE1vdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBVcCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgdXBDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBDaGVzc2JvYXJkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9rbS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fa20udmVydGljYWxNb3ZlKCk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9tZW51LnZlcnRpY2FsTW92ZSgpO1xuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3N1Yl9zZXQpXG4gICAgICAgICAgICB0aGlzLl9zdWJfbWVudS52ZXJ0aWNhbE1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb3duIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBEb3duIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBkb3duQ2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgQ2hlc3Nib2FyZCBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fa20uY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX2ttLnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9tZW51LnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fc3ViX3NldClcbiAgICAgICAgICAgIHRoaXMuX3N1Yl9tZW51LnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQSBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGFDYWxsYmFjayAoKSB7IFxuICAgICAgICAvLyBIYW5kbGUgQ2hlc3Nib2FyZCBBY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuX2luZm8uYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmZvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fa20uYWNjZXB0QWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvci5zZXRNZXNzYWdlKHRoaXMuX2ttLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9lcnJvci5tb2R1bGUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBTZWxlY3RlZFxuICAgICAgICAgICAgaWYgKHRoaXMuX21lbnUuYWNjZXB0QWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJfc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJfbWVudSA9IHRoaXMuX21lbnUuc2V0U3ViTWVudSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sodGhpcy5fc3ViX21lbnUubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIFNlbGVjdGVkXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHRoaXMuI2Nsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdWJfc2V0KSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgT3B0aW9uIFNlbGVjdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5fc3ViX21lbnUuYWNjZXB0QWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgR2FtZSBTZXRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3ViX21lbnUuc2VsZWN0ZWQua2V5ID09PSBcIkdhbWVcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa20uc2V0R2FtZSh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIFRoZW1lIFNldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiVGhlbWVcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa20uc2V0VGhlbWUodGhpcy5fc3ViX21lbnUuc2VsZWN0ZWQudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2xvc2UgTWVudSAmIFN1Yi1NZW51XG4gICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhhbmRsZSBSZXR1cm4gU2VsZWN0ZWRcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgdGhpcy4jbWFpblJldHVybigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQiBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGJDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBDaGVzc2JvYXJkIEFjdGlvblxuICAgICAgICBpZiAodGhpcy5fZXJyb3IuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgICAgICB0aGlzLl9lcnJvci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pbmZvLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5faW5mby5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9rbS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fa20uZGVjbGluZUFjdGlvbigpO1xuICAgICAgICAvLyBIYW5kbGUgTWVudSBBY3Rpb25cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fbWVudS5jb250cm9sbGVyKSBcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlKCk7XG4gICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBBY3Rpb25cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc3ViX3NldClcbiAgICAgICAgICAgIHRoaXMuI21haW5SZXR1cm4oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgU3RhcnQgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc3RhcnRDYWxsYmFjayAoKSB7IHRoaXMuI21lbnUoKTsgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTZWxlY3QgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc2VsZWN0Q2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBPbmx5IEhhbmRsZSBHYW1lcGxheSBFdmVudHNcbiAgICAgICAgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9rbS5zZWxlY3RBY3Rpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWluIFJldHVybiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm4gdG8gdGhlIE1haW4gTWVudSBmcm9tIHRoZSBTdWItTWVudS5cbiAgICAgKi9cbiAgICAjbWFpblJldHVybiAoKSB7XG4gICAgICAgIHRoaXMuX3N1Yl9zZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWVudS5jb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sodGhpcy5fbWVudS5tb2R1bGUsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE91dHNpZGUgb2YgY2xpY2tpbmcgdGhlIFN0YXJ0IGJ1dHRvbiwgaWYgdGhlIFVzZXIgaXMgdXNpbmcgdGhlIE1lbnUsIGFuZCBcbiAgICAgKiBzZWxlY3RzIGFuIG9wdGlvbiBzdWNoIHRoYXQgdGhlIG1lbnUgc2hvdWxkIGNsb3NlLCB0aGlzIG1ldGhvZCB3aWxsIFxuICAgICAqIGNvbXBsZXRlIHRoYXQgdGFzay5cbiAgICAgKi9cbiAgICAjY2xvc2UgKCkge1xuICAgICAgICB0aGlzLl9zdWJfc2V0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ttLmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lbnUgTWV0aG9kXG4gICAgICogXG4gICAgICogV2hlbiB0aGUgU3RhcnQgYnV0dG9uIGlzIHByZXNzZWQsIGVpdGhlciB0aGUgTWVudSBzaG91bGQgYmUgRGlzcGxheWVkIFxuICAgICAqIChpLmUuIGR1cmluZyBnYW1lcGxheSksIG9yIHRoZSBNZW51IHNob3VsZCBiZSBUYWtlbiBEb3duIChpLmUuIHdoaWxlIHRoZSBcbiAgICAgKiBNZW51IGlzIHVwIG9uIHRoZSBzY3JlZW4pLlxuICAgICAqL1xuICAgICNtZW51ICgpIHtcbiAgICAgICAgLy8gTWVudSB0byBiZSBEaXNwbGF5ZWRcbiAgICAgICAgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIFNldCBNZW51IHRvIGJlIENvbnRyb2xsZWRcbiAgICAgICAgICAgIHRoaXMuX2ttLmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIE1lbnVcbiAgICAgICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICAvLyBNZW51IHRvIGJlIFRha2VuIERvd25cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgS25pZ2h0IHRvIGJlIENvbnRyb2xsZWRcbiAgICAgICAgICAgIHRoaXMuX2ttLmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbWVudS5jb250cm9sbGVyID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIFRha2UgRG93biBNZW51L1N1Yi1NZW51XG4gICAgICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3ViX3NldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21lbnUucmVzZXRTdWJNZW51cygpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yl9zZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgUG9wVXAgZnJvbSBcIi4vcG9wLXVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yQm94IGV4dGVuZHMgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIEVycm9yIEJveCBDbGFzc1xuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIHVwZGF0aW5nIHRoZSBVc2VyIHdpdGggdGhlIGN1cnJlbnQgZXJyb3IuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcIkVycm9yXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE1lc3NhZ2UgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImVycm9yLW1lc3NhZ2VcIik7XG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl9tZXNzYWdlKTtcblxuICAgICAgICAvLyBTZXQgQWN0aXZlIHRvIGJlIEZhbHNlXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBtZXNzYWdlICgpIHsgcmV0dXJuIHRoaXMuX21lc3NhZ2U7IH1cblxuICAgIHNldCBtZXNzYWdlIChlbGVtKSB7IHRoaXMuX21lc3NhZ2UgPSBlbGVtOyB9XG5cbiAgICBnZXQgYWN0aXZlICgpIHsgcmV0dXJuIHRoaXMuX2FjdGl2ZTsgfVxuXG4gICAgc2V0IGFjdGl2ZSAoYm9vbCkgeyB0aGlzLl9hY3RpdmUgPSBib29sOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgTWVzc2FnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIEVycm9yIEJveCB3aXRoIHRoZSBtb3N0IHVwIHRvIGRhdGUgZXJyb3IuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR4dCBFcnJvciBNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TWVzc2FnZSAodHh0KSB7IFxuICAgICAgICB0aGlzLl9tZXNzYWdlLnRleHRDb250ZW50ID0gdHh0OyBcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IFBvcFVwIGZyb20gXCIuL3BvcC11cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvQm94IGV4dGVuZHMgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIEluZm9ybWF0aW9uIEJveCBDbGFzc1xuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIHVwZGF0aW5nIHRoZSBVc2VyIHdpdGggSW5mb3JtYXRpb24gcmVsYXRpbmcgdG8gdGhlIGN1cnJlbnQgR2FtZSBcbiAgICAgKiBiZWluZyBwbGF5ZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcIkluZm9ybWF0aW9uXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE1lc3NhZ2UgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImluZm8tbWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX21lc3NhZ2UpO1xuXG4gICAgICAgIC8vIFNldCBBY3RpdmUgdG8gYmUgRmFsc2VcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UgKCkgeyByZXR1cm4gdGhpcy5fbWVzc2FnZTsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKGVsZW0pIHsgdGhpcy5fbWVzc2FnZSA9IGVsZW07IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgUG9wLVVwIEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBTZXQgQ29udGFpbmVyIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuXG4gICAgICAgIC8vIFNldCBCbHVycmVkIEJhY2tnb3VuZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGJveFcgPSBNYXRoLmZsb29yKHdpZHRoICogMC44KTtcbiAgICAgICAgY29uc3QgYm94SCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC44KTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5oZWlnaHQgPSBgJHtib3hIfXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBQb3NpdGlvblxuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuMSk7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC4yKTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFRpdGxlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgVGl0bGUgb2YgdGhlIEluZm9ybWF0aW9uIEJveC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHh0IE5ldyBUaXRsZVxuICAgICAqL1xuICAgIHNldFRpdGxlICh0eHQpIHsgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSB0eHQ7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBNZXNzYWdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgSW5mb3JtYXRpb24gQm94IHdpdGggdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiByZWxhdGVkIHRvIHRoZSBcbiAgICAgKiBnYW1lIGJlaW5nIHBsYXllZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHh0IEluZm9ybWF0aW9uIE1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRNZXNzYWdlICh0eHQpIHsgXG4gICAgICAgIHRoaXMuX21lc3NhZ2UudGV4dENvbnRlbnQgPSB0eHQ7IFxuICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgQm9hcmQgZnJvbSBcIi4uL2JvYXJkLW1vZHVsZS9ib2FyZC5qc1wiO1xuaW1wb3J0IEtuaWdodHNUb3VyIGZyb20gXCIuLi9wdXp6bGVzL2tuaWdodHMtdG91ci5qc1wiO1xuaW1wb3J0IFNob3J0ZXN0UGF0aCBmcm9tIFwiLi4vcHV6emxlcy9zaG9ydGVzdC1wYXRoLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtuaWdodHNNYW5hZ2VyIHtcbiAgICAjR0FNRV9UWVBFUyA9IHtcbiAgICAgICAgXCJTUFwiOiBudWxsLFxuICAgICAgICBcIktUXCI6IG51bGwsXG4gICAgfTtcbiAgICAjVEhFTUVTID0gW1xuICAgICAgICBcIk5vcm1hbFwiLFxuICAgICAgICBcIlJldHJvXCIsXG4gICAgICAgIFwiRnV0dXJlXCIsXG4gICAgICAgIFwiTmVvblwiLFxuICAgICAgICBcIlRlcm1pbmFsXCIsXG4gICAgICAgIFwiRmFudGFzeVwiXG4gICAgXTtcblxuICAgIC8qKlxuICAgICAqIEtuaWdodCdzIEdhbWUgTWFuYWdlciBDbGFzc1xuICAgICAqIFxuICAgICAqIEZvciB0aGUgS25pZ2h0J3MgR2FtZSwgdGhpcyBNYW5hZ2VyIENsYXNzIHdpbGwgSGFuZGxlIFVJIENvbXBvbmVudHMgc3VjaFxuICAgICAqIGFzIHRoZSBDdXJyZW50IE1vdmUgQ291bnQsIHRoZSBHYW1lIGJlaW5nIFBsYXllZCwgdGhlIENoZXNzYm9hcmQgYW5kIGl0c1xuICAgICAqIGFzc29jaWF0ZWQgZWxlbWVudHMsIGFuZCB3aGV0aGVyIHRoZSBVc2VyIGlzIGNvbXBsZXRpbmcgdGhlIFB1enpsZSBvciB0aGVcbiAgICAgKiBBbGdvcml0aG0gaXMuIEl0IG1hbmFnZXMgdGhlIEFjdGlvbnMgb24gdGhlIENoZXNzYm9hcmQgd2l0aCB0aGUgcGFyZW50IFxuICAgICAqIEdhbWUgSW50ZXJmYWNlLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjb21wbGV0ZUNhbGxiYWNrIFB1enpsZSBDb21wbGV0ZSBDYWxsYmFja1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIEdhbWUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJrbmlnaHRzLWdhbWUtbW9kdWxlXCIpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIEluZm8gQ29tcG9uZW50IERPTSBFbGVtZW50c1xuICAgICAgICB0aGlzLl9pbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbXBvbmVudHNcIik7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgUGxheWVyIEluZm8gRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fcGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fcGxheWVyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItaW5mb1wiKTtcbiAgICAgICAgdGhpcy5fcGxheWVyLnRleHRDb250ZW50ID0gXCJIXCI7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgU3RlcHMgVGFrZW4gSW5mbyBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fY3VycmVudC5jbGFzc0xpc3QuYWRkKFwic3RlcHMtdGFrZW5cIik7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQudGV4dENvbnRlbnQgPSAwO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIEdhbWUgVHlwZSBJbmZvIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX3R5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl90eXBlLmNsYXNzTGlzdC5hZGQoXCJnYW1lLXR5cGVcIik7XG4gICAgICAgIHRoaXMuX3R5cGUudGV4dENvbnRlbnQgPSBcIlNQXCI7XG5cbiAgICAgICAgLy8gQXBwZW5kIEluZm8gQ29tcG9uZW50cyB0byBJbmZvcm1hdGlvblxuICAgICAgICB0aGlzLl9pbmZvcm1hdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl9wbGF5ZXIpO1xuICAgICAgICB0aGlzLl9pbmZvcm1hdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl9jdXJyZW50KTtcbiAgICAgICAgdGhpcy5faW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQodGhpcy5fdHlwZSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBPYmplY3RzXG4gICAgICAgIHRoaXMuX2JvYXJkID0gbmV3IEJvYXJkKGNvbXBsZXRlQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLiNHQU1FX1RZUEVTW1wiU1BcIl0gPSBuZXcgU2hvcnRlc3RQYXRoKFxuICAgICAgICAgICAgdGhpcy5fYm9hcmQua25pZ2h0LngsXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5rbmlnaHQueSxcbiAgICAgICAgICAgIDhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy4jR0FNRV9UWVBFU1tcIktUXCJdID0gbmV3IEtuaWdodHNUb3VyKFxuICAgICAgICAgICAgdGhpcy5fYm9hcmQua25pZ2h0LngsXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5rbmlnaHQueSxcbiAgICAgICAgICAgIDhcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBBcHBlbmQgQWxsIENvbXBvbmVudHMgdG8gTW9kdWxlXG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9ib2FyZC5tb2R1bGUpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5faW5mb3JtYXRpb24pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl9odW1hbiA9IHRydWU7IC8vIERlZmF1bHQgaXMgVXNlciBNb3Zlc1xuICAgICAgICB0aGlzLl9nYW1lID0gdGhpcy4jR0FNRV9UWVBFU1t0aGlzLl90eXBlLnRleHRDb250ZW50XTtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFtdO1xuICAgICAgICB0aGlzLl9zdGVwcyA9IHtodW1hbjogMCwgYWxnb3JpdGhtOiAwfTtcbiAgICAgICAgdGhpcy5fbXNnID0gXCJcIjtcblxuICAgICAgICAvLyBTZXQgdGhlIERlZmF1bHQgVGhlbWVcbiAgICAgICAgdGhpcy5zZXRUaGVtZSh0aGlzLiNUSEVNRVNbMF0pO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIGdldCBib2FyZCAoKSB7IHJldHVybiB0aGlzLl9ib2FyZDsgfVxuXG4gICAgc2V0IGJvYXJkIChvYmopIHsgdGhpcy5fYm9hcmQgPSBvYmo7IH1cblxuICAgIGdldCBjb250cm9sbGVyICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRyb2xsZXI7IH1cblxuICAgIHNldCBjb250cm9sbGVyIChib29sKSB7IHRoaXMuX2NvbnRyb2xsZXIgPSBib29sOyB9XG5cbiAgICBnZXQgaHVtYW4gKCkgeyByZXR1cm4gdGhpcy5faHVtYW47IH1cblxuICAgIHNldCBodW1hbiAoYm9vbCkgeyB0aGlzLl9odW1hbiA9IGJvb2w7IH1cblxuICAgIGdldCBnYW1lICgpIHsgcmV0dXJuIHRoaXMuX2dhbWU7IH1cblxuICAgIHNldCBnYW1lIChvYmopIHsgdGhpcy5fZ2FtZSA9IG9iajsgfVxuXG4gICAgZ2V0IHBhdGggKCkgeyByZXR1cm4gdGhpcy5fcGF0aDsgfVxuXG4gICAgc2V0IHBhdGggKGFycikgeyB0aGlzLl9wYXRoID0gYXJyOyB9XG5cbiAgICBnZXQgc3RlcHMgKCkgeyByZXR1cm4gdGhpcy5fc3RlcHM7IH1cblxuICAgIHNldCBzdGVwcyAoZGljdCkgeyB0aGlzLl9zdGVwcyA9IGRpY3Q7IH1cbiAgICBcbiAgICBnZXQgbWVzc2FnZSAoKSB7IHJldHVybiB0aGlzLl9tc2c7IH1cblxuICAgIHNldCBtZXNzYWdlIChzdHIpIHsgdGhpcy5fbXNnID0gc3RyOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXRzIHVwIHRoZSBEaXNwbGF5IGZvciB0aGUgR2FtZSwgaW5jbHVkaW5nIHRoZSBib2FyZCwgdGhlIGluZm9ybWF0aW9uIFxuICAgICAqIHBhbmVsIGFuZCB0aGUgc3ViLW1vZHVsZXMgZm9yIHRoZSBnYW1lLCBzdWNoIGFzIHRoZSBTaG9ydGVzdCBQYXRoLCB0aGUgXG4gICAgICogS25pZ2h0J3MgVG91ciwgYW5kIHRoZSBTdGFydCBTY3JlZW4uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFNjcmVlbiBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgU2NyZWVuIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldHVwICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIFNldCBHYW1lIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgLy8gU2V0IEJvYXJkIERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgZGltID0gTWF0aC5mbG9vcihNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAqIDAuOSk7XG4gICAgICAgIHRoaXMuX2JvYXJkLnNldERpbWVuc2lvbnMoZGltKTtcblxuICAgICAgICAvLyBTZXQgSW5mb3JtYXRpb24gUGFuZWwgRm9udCBTaXplXG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uLnN0eWxlLmZvbnRTaXplID0gTWF0aC5mbG9vcihkaW0gKiAwLjIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBHYW1lIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgR2FtZSB0aGUgVXNlciBpcyBQbGF5aW5nLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBnYW1lIEdhbWUgTmFtZVxuICAgICAqL1xuICAgIHNldEdhbWUgKGdhbWUpIHtcbiAgICAgICAgLy8gSGFuZGxlIFNob3J0ZXN0IFBhdGggUHV6emxlXG4gICAgICAgIGlmIChnYW1lID09PSBcIlNob3J0ZXN0LVBhdGhcIikge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZSA9IHRoaXMuI0dBTUVfVFlQRVNbXCJTUFwiXTtcbiAgICAgICAgICAgIHRoaXMuX3R5cGUudGV4dENvbnRlbnQgPSBcIlNQXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIEtuaWdodCdzIFRvdXIgUHV6emxlXG4gICAgICAgIGlmIChnYW1lID09PSBcIktuaWdodHMtVG91clwiKSB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lID0gdGhpcy4jR0FNRV9UWVBFU1tcIktUXCJdO1xuICAgICAgICAgICAgdGhpcy5fdHlwZS50ZXh0Q29udGVudCA9IFwiS1RcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBUaGVtZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIFN0eWxpbmcgdG8gUmVmbGVjdCB0aGUgVGhlbWUgU2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIFRoZW1lIE5hbWVcbiAgICAgKi9cbiAgICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICAgICAgLy8gR2V0IFJvb3QgRWxlbWVudFxuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LmNsYXNzTmFtZSA9IHRoZW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIEtuaWdodCdzIEljb25cbiAgICAgICAgdGhpcy5fYm9hcmQuc2V0VGhlbWUodGhlbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IGFsbCB2YXJpYWJsZXMgdG8gdGhlaXIgb3JpZ2luYWwgdmFsdWVzLCBhbmQgc2V0IHRoZSBib2FyZCBzbyB0aGF0IHRoZSBcbiAgICAgKiB0aWxlcyBhcmVuJ3QgaGlnaGxpZ2h0ZWQuXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgICAvLyBSZXNldCBWYWx1ZXMgb24gRGlzcGxheVxuICAgICAgICB0aGlzLl9wbGF5ZXIudGV4dENvbnRlbnQgPSBcIkhcIjtcbiAgICAgICAgdGhpcy5fY3VycmVudC50ZXh0Q29udGVudCA9IDA7XG5cbiAgICAgICAgLy8gUmVzZXQgU3RlcHMgVGFrZW5cbiAgICAgICAgdGhpcy5fc3RlcHMuaHVtYW4gPSAwO1xuICAgICAgICB0aGlzLl9zdGVwcy5hbGdvcml0aG0gPSAwO1xuICAgICAgICB0aGlzLl9wYXRoID0gW107XG5cbiAgICAgICAgLy8gUmVzZXQgVGlsZXNcbiAgICAgICAgdGhpcy5fYm9hcmQucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIb3Jpem9udGFsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92aW5nIHRoZSBDdXJzb3IgUmlnaHQgb3IgTGVmdCBvbiB0aGUgQ2hlc3Nib2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJpZ2h0IERlZmF1bHQgQWN0aW9uIGlzIFJpZ2h0d2FyZHNcbiAgICAgKi9cbiAgICBob3Jpem9udGFsTW92ZSAocmlnaHQ9dHJ1ZSkgeyB0aGlzLl9ib2FyZC5ob3Jpem9udGFsTW92ZShyaWdodCk7IH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92aW5nIHRoZSBDdXJzb3IgVXAgb3IgRG93biBvbiB0aGUgQ2hlc3Nib2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwIERlZmF1bHQgQWN0aW9uIGlzIFVwd2FyZHNcbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE1vdmUgKHVwPXRydWUpIHsgdGhpcy5fYm9hcmQudmVydGljYWxNb3ZlKHVwKTsgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXB0IEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBEdXJpbmcgdGhlIGdhbWUsIGlmIGFuIGVycm9yIG9jY3Vycywgc2F5IHdoZW4gYW4gaWxsZWdhbCBtb3ZlIGlzIG1hZGUsIFxuICAgICAqIHRoZW4gYSBtZXNzYWdlIHNob3VsZCBiZSBhYmxlIHRvIGJlIHZpZXdlZCBieSB0aGUgdXNlci5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZXJlIGFyZSBubyBFcnJvcnNcbiAgICAgKi9cbiAgICBhY2NlcHRBY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5fYm9hcmQuYWNjZXB0QWN0aW9uKCk7XG4gICAgICAgIGlmIChtZXNzYWdlICE9PSBcIlwiKSB7IFxuICAgICAgICAgICAgLy8gU2V0IEVycm9yIE1lc3NhZ2VcbiAgICAgICAgICAgIHRoaXMuX21zZyA9IG1lc3NhZ2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB3aXRoIEVycm9yIE1lc3NhZ2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluY3JlbWVudCBTdGVwcyBpZiBQdXp6bGUgaGFzIENvbW1lbmNlZFxuICAgICAgICBpZiAodGhpcy5fYm9hcmQucHV6emxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0ZXBzLmh1bWFuICs9IDE7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnRleHRDb250ZW50ID0gdGhpcy5fc3RlcHMuaHVtYW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgd2l0aCBubyBFcnJvciBNZXNzYWdlXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY2xpbmUgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoaWxlIFNvbHZpbmcgdGhlIFB1enpsZSwgdGhlIFVzZXIgY2FuIHVzZSB0aGUgQiBCdXR0b24gYXMgYW4gVW5kbyBidXR0b24uXG4gICAgICovXG4gICAgZGVjbGluZUFjdGlvbiAoKSB7IHRoaXMuX2JvYXJkLmRlY2xpbmVBY3Rpb24oKTsgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0aW9uIEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBEdXJpbmcgdGhlIEdhbWUsIGlmIHRoZSBVc2VyIHByZXNzZXMgU2VsZWN0LCB0aGVuIGVpdGhlciB0aGUgVXNlciBpcyBcbiAgICAgKiBzZWxlY3RpbmcgYW4gSW5pdGlhbCBQb3NpdGlvbiBmb3IgdGhlIEtuaWdodCwgb3IgdGhleSBhcmUgcmVxdWVzdGluZyBhIFxuICAgICAqIFNvbHV0aW9uIGZvciB0aGUgUHV6emxlLlxuICAgICAqL1xuICAgIHNlbGVjdEFjdGlvbiAoKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIEtuaWdodCdzIFRvdXIgaXMgdGhlIFNlbGVjdGVkIFB1enpsZVxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLl90eXBlLnRleHRDb250ZW50ID09PSBcIktUXCI7XG5cbiAgICAgICAgLy8gSGFuZGxlIFJlcXVlc3QgZm9yIFNvbHV0aW9uXG4gICAgICAgIGlmICh0aGlzLl9nYW1lLmdlbmVyYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5fYm9hcmQuc2VsZWN0QWN0aW9uKFxuICAgICAgICAgICAgICAgIGNoZWNrLCBcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lLmFsZ29yaXRobSwgXG4gICAgICAgICAgICAgICAgdGhpcy4jbW92ZUNhbGxiYWNrLmJpbmQodGhpcylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9odW1hbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyLnRleHRDb250ZW50ID0gXCJBXCI7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9sbGVyID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgU2VsZWN0aW5nIEluaXRpYWwgUG9zaXRpb25cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5zZWxlY3RBY3Rpb24oY2hlY2ssIFtdLCB0aGlzLiNtb3ZlQ2FsbGJhY2suYmluZCh0aGlzKSk7XG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIFB1enpsZVxuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuX2JvYXJkLmdldFJvb3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGdyYXBoID0gdGhpcy5fYm9hcmQuZ2V0R3JhcGgoKTtcbiAgICAgICAgICAgIHRoaXMuX2dhbWUuZ2VuZXJhdGUocm9vdC54LCByb290LnksIGdyYXBoKTtcblxuICAgICAgICAgICAgLy8gSWYgU2hvcnRlc3QgUGF0aCwgVXBkYXRlIEdvYWwgVGlsZVxuICAgICAgICAgICAgaWYgKCFjaGVjaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdvYWwgPSB0aGlzLl9nYW1lLmdvYWw7XG4gICAgICAgICAgICAgICAgdGhpcy5fYm9hcmQuc2V0R29hbChnb2FsLngsIGdvYWwueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIE1vdmluZyB0aGUgS25pZ2h0IGR1cmluZyBwcm9tcHRpbmcsIHRoZSBtZXRob2Qgd2lsbCBhbHNvIFxuICAgICAqIGluY3JlbWVudCB0aGUgc3RlcHMgb24gdGhlIFVJLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IE5leHQgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IE5leHQgWS1Qb3NpdGlvblxuICAgICAqL1xuICAgICNtb3ZlQ2FsbGJhY2sgKHgsIHkpIHtcbiAgICAgICAgLy8gVXBkYXRlIFVJIE1vdmUgQ291bnQgRWxlbWVudFxuICAgICAgICB0aGlzLl9zdGVwcy5hbGdvcml0aG0gKz0gMTtcbiAgICAgICAgdGhpcy5fY3VycmVudC50ZXh0Q29udGVudCA9IHRoaXMuX3N0ZXBzLmFsZ29yaXRobTtcblxuICAgICAgICAvLyBNb3ZlIEtuaWdodCB0byBEZXNpcmVkIENvb3JkaW5hdGVcbiAgICAgICAgdGhpcy5fYm9hcmQubW92ZSh4LCB5KTtcbiAgICB9XG59IiwiaW1wb3J0IFBvcFVwIGZyb20gXCIuL3BvcC11cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFzZSBleHRlbmRzIFBvcFVwIHtcbiAgICAvKipcbiAgICAgKiBNZW51IEJhc2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBCYXNlIENsYXNzIGZvciBNYWluIE1lbnVzIG9yIFN1Yi1NZW51cy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2F0ZWdvcmllcyBDYXRlZ29yaWVzIGZvciBNZW51XG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgc3VwZXIoXCJNZW51XCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE9wdGlvbiBET00gRWxlbWVudHNcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5pZCA9IGAke3N1Yi5rZXkudG9Mb3dlckNhc2UoKX0tb3B0aW9uYDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHN1Yi5rZXk7XG4gICAgICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdWlsZCBSZXR1cm4gT3B0aW9uIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX3JldHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3JldHVybi5jbGFzc0xpc3QuYWRkKFwicmV0dXJuLW9wdGlvblwiKTtcbiAgICAgICAgdGhpcy5fcmV0dXJuLnRleHRDb250ZW50ID0gXCJSZXR1cm5cIjtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX3JldHVybik7XG5cbiAgICAgICAgLy8gU2V0dXAgQ3Vyc29yXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX25hbWUgPSBjYXRlZ29yaWVzLmtleTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgICBrZXk6IHRoaXMuX25hbWUsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBvcHRpb25zICgpIHsgcmV0dXJuIHRoaXMuX29wdGlvbnM7IH1cblxuICAgIHNldCBvcHRpb25zIChhcnIpIHsgdGhpcy5fb3B0aW9ucyA9IGFycjsgfVxuXG4gICAgZ2V0IHJldHVybiAoKSB7IHJldHVybiB0aGlzLl9yZXR1cm47IH1cblxuICAgIHNldCByZXR1cm4gKGVsZW0pIHsgdGhpcy5fcmV0dXJuID0gZWxlbTsgfVxuXG4gICAgZ2V0IG5hbWUgKCkgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuXG4gICAgc2V0IG5hbWUgKHN0cikgeyB0aGlzLl9uYW1lID0gc3RyOyB9XG5cbiAgICBnZXQgc2VsZWN0ZWQgKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cblxuICAgIHNldCBzZWxlY3RlZCAoZGljdCkgeyB0aGlzLl9zZWxlY3RlZCA9IGRpY3Q7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgTWVudSBCb3gsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSB0byBiZSBzZXQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFNjcmVlbiBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgU2NyZWVuIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgc3VwZXIuc2V0RGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvLyBTZXQgT3B0aW9ucyBXaWR0aFxuICAgICAgICBjb25zdCBib3hXID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuNik7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgb3B0aW9uLnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZXR1cm4uc3R5bGUud2lkdGggPSBgJHtib3hXfXB4YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgQ3Vyc29yIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoaWxlIGN5Y2xpbmcgdGhyb3VnaCB0aGUgTWVudSBPcHRpb25zLCBpZiB0aGUgY3Vyc29yIGlzIG9uIGFuIG9wdGlvbiwgXG4gICAgICogdGhlbiB0aGUgb3B0aW9uIHNob3VsZCBiZSBoaWdobGlnaHRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uIEN1cnNvciBvbiBPcHRpb25cbiAgICAgKi9cbiAgICBzZXRDdXJzb3IgKG9uPXRydWUpIHtcbiAgICAgICAgLy8gSGFuZGxlIFJldHVybiBPcHRpb25cbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnQgPT09IHRoaXMuX29wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IHRoaXMuX3JldHVybi5jbGFzc0xpc3QuY29udGFpbnMoXCJjdXJzb3JcIik7XG4gICAgICAgICAgICBpZiAob24gJiYgIWNoZWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuX3JldHVybi5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yXCIpO1xuICAgICAgICAgICAgaWYgKCFvbiAmJiBjaGVjaylcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXR1cm4uY2xhc3NMaXN0LnJlbW92ZShcImN1cnNvclwiKTtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gSGFuZGxlIE90aGVyIE9wdGlvbnNcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY3Vyc29yXCIpO1xuICAgICAgICAgICAgaWYgKG9uICYmICFjaGVjaylcbiAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3JcIik7XG4gICAgICAgICAgICBpZiAoIW9uICYmIGNoZWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LnJlbW92ZShcImN1cnNvclwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92aW5nIHRoZSBDdXJzb3IgVXAgb3IgRG93biBvbiB0aGUgTWVudS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwIERlZmF1bHQgQWN0aW9uIGlzIFVwd2FyZHNcbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE1vdmUgKHVwPXRydWUpIHtcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQgKyAodXAgPyAtMSA6IDEpO1xuICAgICAgICBpZiAoY3VyciA8PSB0aGlzLl9vcHRpb25zLmxlbmd0aCAmJiBjdXJyID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSBjdXJyO1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJzb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VwdCBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hvb3NlcyB0aGUgT3B0aW9uIG9uIHRoZSBNZW51IHRoYXQgdGhlIFVzZXIgaGFzIHNlbGVjdGVkLCByZXR1cm5pbmcgdHJ1ZSBcbiAgICAgKiBpbXBsaWVzIHRoYXQgYW4gb3B0aW9uIHdhcyBzZWxlY2N0ZWQsIGZhbHNlIGltcGxpZXMgdGhhdCB0aGUgcmV0dXJuIG9wdGlvbiBcbiAgICAgKiB3YXMgc2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSBmb3IgYW4gT3B0aW9uLCBGYWxzZSBmb3IgUmV0dXJuXG4gICAgICovXG4gICAgYWNjZXB0QWN0aW9uICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIFJldHVybiBTZWxlY3RcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnQgPT09IHRoaXMuX29wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgT3B0aW9ucyBTZWxlY3RcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQudmFsdWUgPSB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLnRleHRDb250ZW50O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IE1lbnVCYXNlIGZyb20gXCIuL21lbnUtYmFzZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgTWVudUJhc2Uge1xuICAgIC8qKlxuICAgICAqIE1lbnUgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGdpdmVuIENhdGVnb3JpZXMgZm9yIHRoZSBNZW51LCBhIGRpc3BsYXkgd2lsbCBiZSBwcmVzZW50ZWQgdG8gXG4gICAgICogdGhlIFVzZXIgZm9yIHRoZW0gdG8gU2VsZWN0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYXRlZ29yaWVzIEpTT04gT2JqZWN0IG9mIE1lbnUgQ2F0ZWdvcmllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjYXRlZ29yaWVzKSB7XG4gICAgICAgIHN1cGVyKGNhdGVnb3JpZXMpO1xuXG4gICAgICAgIC8vIEJ1aWxkIFN1Yi1NZW51c1xuICAgICAgICB0aGlzLl9zdWJzID0gW107XG4gICAgICAgIGNhdGVnb3JpZXMuc3Vicy5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICAgICAgICAvLyBPbmx5IENyZWF0ZSBTdWItTWVudSBpZiBOZWNlc3NhcnlcbiAgICAgICAgICAgIGlmIChzdWIuc3Vicy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGtleTogc3ViLmtleSxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1lbnU6IG5ldyBNZW51KHN1YilcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZVxuICAgICAgICB0aGlzLl9jb250cm9sbGVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHN1YnMgKCkgeyByZXR1cm4gdGhpcy5fc3ViczsgfVxuXG4gICAgc2V0IHN1YnMgKGFycikgeyB0aGlzLl9zdWJzID0gYXJyOyB9XG5cbiAgICBnZXQgY29udHJvbGxlciAoKSB7IHJldHVybiB0aGlzLl9jb250cm9sbGVyOyB9XG5cbiAgICBzZXQgY29udHJvbGxlciAoYm9vbCkgeyB0aGlzLl9jb250cm9sbGVyID0gYm9vbDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb21wb25lbnRzIG9mIHRoZSBNZW51IEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC4gXG4gICAgICogQWRkaXRpb25hbGx5LCB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgU3ViLU1lbnUgQ29tcG9uZW50cyBhcmUgdG8gYmUgXG4gICAgICogc2V0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBTY3JlZW4gV2lkdGggKHBpeGVscylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFNjcmVlbiBIZWlnaHQgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IERpbWVuc2lvbnNcbiAgICAgICAgc3VwZXIuc2V0RGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9zdWJzLmZvckVhY2goc3ViID0+IHsgc3ViLm1lbnUuc2V0RGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KTsgfSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFNldCBTdWItTWVudSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXRzIHRoZSBTdWItTWVudSBTZWxlY3RlZCBieSB0aGUgVXNlciB0byBiZSBvbiBEaXNwbGF5LlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFN1Yi1NZW51IERPTSBFbGVtZW50XG4gICAgICovXG4gICAgc2V0U3ViTWVudSAoKSB7XG4gICAgICAgIHRoaXMuX3N1YnNbdGhpcy5fY3VycmVudF0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJzW3RoaXMuX2N1cnJlbnRdLm1lbnU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgU3ViLU1lbnVzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldHMgdGhlIE1haW4gTWVudSB0byBiZSBvbiBEaXNwbGF5LlxuICAgICAqL1xuICAgIHJlc2V0U3ViTWVudXMgKCkgeyB0aGlzLl9zdWJzLmZvckVhY2goc3ViID0+IHsgc3ViLmNvbnRyb2xsZXIgPSBmYWxzZTsgfSk7IH1cbn0iLCJpbXBvcnQgXCIuL3BvcC11cC1zdHlsaW5nLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BVcCB7XG4gICAgLyoqXG4gICAgICogUG9wLVVwIENsYXNzXG4gICAgICogXG4gICAgICogU2V2ZXJhbCBDb21wb25lbnRzIHRvIHRoZSBHYW1lIHJlcXVpcmUgYSBQb3AtVXAgQm94LCBhbmQgdGhpcyBDbGFzcyBcbiAgICAgKiBSZXByZXNlbnRzIHRoYXQgQm94LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIE5hbWUgZm9yIFBvcC1VcFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIC8vIEJ1aWxkIFBvcC1VcCBDb250YWluZXIgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS1jb250YWluZXJgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEJ1aWxkIFBvcC1VcCBCb3ggRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYm94LmNsYXNzTGlzdC5hZGQoYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS1ib3hgKTtcblxuICAgICAgICAvLyBCdWlsZCBUaXRsZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3RpdGxlLmNsYXNzTGlzdC5hZGQoYCR7bmFtZS50b0xvd2VyQ2FzZSgpfS10aXRsZWApO1xuICAgICAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl90aXRsZSk7XG5cbiAgICAgICAgLy8gQnVpbGQgQmx1cnJlZCBCYWNrZ3JvdW5kIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2JsdXJyZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9ibHVycmVkLmNsYXNzTGlzdC5hZGQoXCJibHVycmVkLWJhY2tncm91bmRcIik7XG5cbiAgICAgICAgLy8gQXBwZW5kIENvbXBvbmVudHMgdG8gTW9kdWxlXG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9ibHVycmVkKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2JveCk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb21wb25lbnRzIG9mIHRoZSBQb3AtVXAgQm94LCB0aGUgd2lkdGggYW5kIGhlaWdodCBhcmUgdG8gYmUgc2V0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBTY3JlZW4gV2lkdGggKHBpeGVscylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFNjcmVlbiBIZWlnaHQgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIFNldCBDb250YWluZXIgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG5cbiAgICAgICAgLy8gU2V0IEJsdXJyZWQgQmFja2dvdW5kIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgQm94IERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgYm94VyA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjYpO1xuICAgICAgICBjb25zdCBib3hIID0gTWF0aC5mbG9vcihoZWlnaHQgKiAwLjYpO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUud2lkdGggPSBgJHtib3hXfXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmhlaWdodCA9IGAke2JveEh9cHhgO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgQm94IFBvc2l0aW9uXG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHdpZHRoICogMC4yKTtcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihoZWlnaHQgKiAwLjIpO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICB9XG59IiwiaW1wb3J0IFB1enpsZU1vZHVsZSBmcm9tIFwiLi9wdXp6bGUtbW9kdWxlLmpzXCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4uLy4uL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLbmlnaHRzVG91ciBleHRlbmRzIFB1enpsZU1vZHVsZSB7XG4gICAgLyoqXG4gICAgICogS25pZ2h0J3MgVG91ciBQdXp6bGVcbiAgICAgKiBcbiAgICAgKiBVdGlsaXNpbmcgV2FybnNkb3JmZidzIEFsZ29yaXRobSwgdGhpcyBQdXp6bGUgQ2xhc3MgZG9lcyBub3QgZmluZCBhIGdvYWxcbiAgICAgKiB2ZXJ0ZXggdGhhdCB0aGUgVXNlciBtdXN0IG5hdmlnYXRlIHRvLCBidXQgaW5zdGVhZCwgdGhlIFVzZXIgbXVzdCBuYXZpZ2F0ZVxuICAgICAqIGFyb3VuZCB0aGUgQ2hlc3Nib2FyZCwgZXhwbG9yaW5nIGV2ZXJ5IHNpbmdsZSB0aWxlIGV4YWN0bHkgb25jZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBJbml0aWFsIFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBJbml0aWFsIFktUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBDaGVzc2JvYXJkIFNpemVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSwgc2l6ZSkge1xuICAgICAgICBzdXBlcih4LCB5LCBzaXplKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXp6bGUgVGl0bGUgTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgVGl0bGUgb2YgdGhlIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBQdXp6bGUgVGl0bGVcbiAgICAgKi9cbiAgICBwdXp6bGVUaXRsZSAoKSB7IHJldHVybiBcIktuaWdodCdzIFRvdXJcIjsgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1enpsZSBJbmZvcm1hdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNZXNzYWdlIGFib3V0IHRoZSBQdXp6bGVzIEluZm9ybWF0aW9uLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFB1enpsZSBJbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHB1enpsZUluZm8gKCkgeyBcbiAgICAgICAgcmV0dXJuIFwiR2l2ZW4gdGhlIDggYnkgOCBib2FyZCwgdXNlIHRoZSBTZWxlY3QgXCIgK1xuICAgICAgICAgICAgXCJCdXR0b24gdG8gY2hvb3NlIHlvdXIgSW5pdGlhbCBUaWxlLiBUaGVuIHlvdSBcIiArXG4gICAgICAgICAgICBcIndpbGwgbmVlZCB0byBtb3ZlIHRoZSBLbmlnaHQsIGFjY29yZGluZyB0byB0aGUgXCIgK1xuICAgICAgICAgICAgXCJydWxlcyBvZiBjaGVzcywgc3VjaCB0aGF0IGl0IHZpc2l0cyBldmVyeSB0aWxlIFwiICtcbiAgICAgICAgICAgIFwib24gdGhlIGNoZXNzYm9hcmQgZXhhY3RseSBvbmNlLlxcbkJ5IGNsaWNraW5nIFwiICtcbiAgICAgICAgICAgIFwidGhlIFNlbGVjdCBidXR0b24gYWdhaW4sIHRoZSBrbmlnaHQgd2lsbCBhdXRvbWF0aWNhbGx5IFwiICtcbiAgICAgICAgICAgIFwibW92ZSBhbmQgdmlzaXQgZWFjaCB0aWxlIGV4YWN0bHkgb25jZS5cXG5cIiArXG4gICAgICAgICAgICBcIlRvIHJlc2V0LCBwcmVzcyBzdGFydCBhbmQgc2VsZWN0IHRoZSBTaG9ydGVzdCBQYXRoIHB1enpsZS5cIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmQgb2YgUHV6emxlIEluZm9ybWF0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIFB1enpsZSBoYXMgYmVlbiBjb21wbGV0ZWQsIGVpdGhlciBieSB0aGUgVXNlciBvciBieSB0aGUgQWxnb3JpdGhtLCBcbiAgICAgKiB0aGVuIGEgbWVzc2FnZSBzaG91bGQgYmUgcHJlc2VudGVkIHRvIHRoZSBVc2VyIGFib3V0IGhvdyB3ZWxsIHRoZSBwdXp6bGUgXG4gICAgICogd2FzIGNvbXBsZXRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGh1bWFuIEh1bWFuIG9yIEFsZ29yaXRobVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwcyBOdW1iZXIgb2YgU3RlcHMgdG8gQ29tcGxldGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoIFBhdGggdGFrZW5cbiAgICAgKiBAcmV0dXJucyBFbmQgb2YgUHV6emxlIEluZm9yYW10aW9uXG4gICAgICovXG4gICAgZW5kSW5mbyAoaHVtYW4sIHN0ZXBzLCBwYXRoKSB7IFxuICAgICAgICAvLyBUb2dnbGUgR2VuZXJhdGVkXG4gICAgICAgIHRoaXMuX2dlbmVyYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIE1haW4gTWVzc2FnZVxuICAgICAgICBsZXQgbXNnID0gaHVtYW4gPyBcbiAgICAgICAgICAgIGBDb25ncmF0dWxhdGlvbnMhIFlvdSBjb21wbGV0ZWQgdGhlIHB1enpsZSBgICtcbiAgICAgICAgICAgIGBpbiAke3N0ZXBzfSBzdGVwcyFcXG5UaGUgQWxnb3JpdGhtJ3MgYmVzdCBgICtcbiAgICAgICAgICAgIGB3YXMgJHt0aGlzLl9hbGdvcml0aG1fcGF0aC5sZW5ndGh9IHN0ZXBzLmAgOiBcbiAgICAgICAgICAgIGBXYXJuc2RvcmZmJ3MgQWxnb3JpdGhtIGZvdW5kIGEgcGF0aCBpbiBgICtcbiAgICAgICAgICAgIGAke3N0ZXBzfSBzdGVwcy5gO1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBtc2c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBLbmlnaHQncyBUb3VyIFB1enpsZSwgV2FybnNkb3JmZidzIEFsZ29yaXRobSBpcyBpbXBsZW1lbnRlZCB0byBcbiAgICAgKiBmaW5kIGEgZnVsbCB0b3VyIG9mIHRoZSBDaGVzc2JvYXJkLCB0aGUgYWxnb3JpdGhtIGNhbiBiZSBicm9rZW4gZG93biBcbiAgICAgKiB1c2luZyBXYXJuc2RvcmZmJ3MgUnVsZTpcbiAgICAgKiAgMS4gU3RhcnQgZnJvbSBhbnkgaW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgS25pZ2h0IG9uIHRoZSBib2FyZC5cbiAgICAgKiAgMi4gQWx3YXlzIG1vdmUgdG8gYW4gYWRqYWNlbnQsIHVudmlzaXRlZCB0aWxlIHdpdGggbWluaW1hbCBkZWdyZWUgKGkuZS5cbiAgICAgKiAgICAgbWluaW11bSBudW1iZXIgb2YgdW52aXNpdGVkIGFkamFjZW50IHRpbGVzKS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBSb290IFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBSb290IFktUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge0dyYXBofSBncmFwaCBHcmFwaCBvZiBDaGVzc2JvYXJkXG4gICAgICovXG4gICAgZ2VuZXJhdGUgKHgsIHksIGdyYXBoKSB7XG4gICAgICAgIC8vIEdldCBSb290IFZlcnRleFxuICAgICAgICBjb25zdCByb290ID0gZ3JhcGguZ2V0VmVydGV4KHgsIHkpO1xuXG4gICAgICAgIC8vIFNldCBBbGwgVmVydGljZXMgTW92ZSB0byBiZSAwXG4gICAgICAgIGZvciAobGV0IHYgb2YgZ3JhcGgudmVydGljZXMoKSkge1xuICAgICAgICAgICAgdi5tb3ZlID0gMDtcbiAgICAgICAgICAgIHYudmlzaXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IFJvb3QgdG8gYmUgMXN0IE1vdmVcbiAgICAgICAgcm9vdC5tb3ZlID0gMTtcbiAgICAgICAgcm9vdC52aXNpdGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBCdWlsZCBSZXZlcnNlIFBhdGhcbiAgICAgICAgbGV0IGJhY2t3YXJkcyA9IFtyb290XTtcblxuICAgICAgICAvLyBTZXR1cCBWZXJ0ZXggdG8gQ3ljbGUgdGhyb3VnaCBWZXJ0aWNlc1xuICAgICAgICBsZXQgbGFzdCA9IHJvb3QubW92ZTtcbiAgICAgICAgbGV0IGF1eCA9IHJvb3Q7XG4gICAgICAgIHdoaWxlIChhdXgubW92ZSAhPT0gTWF0aC5wb3codGhpcy5fc2l6ZSwgMikpIHtcbiAgICAgICAgICAgIC8vIEZpbmQgTmVpZ2hib3VyIHdpdGggRmV3ZXN0IE5laWdib3Vyc1xuICAgICAgICAgICAgbGV0IG1pbiA9IDEwMDAwMDA7XG4gICAgICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF1eC5uZWlnaGJvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIE5laWdoYm91clxuICAgICAgICAgICAgICAgIGxldCBuZWlnaGJvdXIgPSBncmFwaC5nZXRWZXJ0ZXgoXG4gICAgICAgICAgICAgICAgICAgIGF1eC5uZWlnaGJvdXJzW2ldLngsIFxuICAgICAgICAgICAgICAgICAgICBhdXgubmVpZ2hib3Vyc1tpXS55XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIENvdW50IE51bWJlciBvZiBVbnZpc2l0ZWQgTmVpZ2hib3Vyc1xuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiBvZiBuZWlnaGJvdXIubmVpZ2hib3Vycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW4udmlzaXRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIExlYXN0IEFjY2Vzc2libGUgTmVpZ2hib3V0XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50IDwgbWluICYmICFuZWlnaGJvdXIudmlzaXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBMZWFzdCBBY2Nlc3NpYmxlIFZlcnRleCB0byBiZSBOZXh0IE1vdmVcbiAgICAgICAgICAgIGF1eCA9IGF1eC5uZWlnaGJvdXJzW2lkeF07XG4gICAgICAgICAgICBhdXgudmlzaXRlZCA9IHRydWU7XG4gICAgICAgICAgICBhdXgubW92ZSA9IGxhc3QgKyAxO1xuICAgICAgICAgICAgbGFzdCA9IGF1eC5tb3ZlO1xuICAgICAgICAgICAgYmFja3dhcmRzLnB1c2goYXV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldmVyc2UgQmFja3dhcmRzIFBhdGhcbiAgICAgICAgd2hpbGUgKGJhY2t3YXJkcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgdGhpcy5fYWxnb3JpdGhtX3BhdGgucHVzaChiYWNrd2FyZHMucG9wKCkpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBHZW5lcmF0ZWRcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVkID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IEdyYXBoIGZyb20gXCIuLi8uLi9kYXRhLXN0cnVjdHVyZXMvZ3JhcGguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHV6emxlTW9kdWxlIHtcbiAgICAvKipcbiAgICAgKiBQdXp6bGUgTW9kdWxlXG4gICAgICogXG4gICAgICogQmFzZSBDbGFzcyBmb3IgdGhlIFNob3J0ZXN0IFBhdGggYW5kIEtuaWdodCdzIFRvdXIgUHV6emxlcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBJbml0aWFsIFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBJbml0aWFsIFktUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBTaXplIG9mIEJvYXJkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHksIHNpemUpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXM7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSB7eDogeCwgeTogeX07XG4gICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xuICAgICAgICB0aGlzLl9zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2dlbmVyYXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl91c2VyX3BhdGggPSBbXTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtX3BhdGggPSBbXTtcbiAgICB9XG5cbiAgICBnZXQgcm9vdCAoKSB7IHJldHVybiB0aGlzLl9yb290OyB9XG5cbiAgICBzZXQgcm9vdCAoZGljdCkgeyB0aGlzLl9yb290ID0gZGljdDsgfVxuXG4gICAgZ2V0IHN0YXJ0ZWQgKCkgeyByZXR1cm4gdGhpcy5fc3RhcnRlZDsgfVxuXG4gICAgc2V0IHN0YXJ0ZWQgKGJvb2wpIHsgdGhpcy5fc3RhcnRlZCA9IGJvb2w7IH1cbiAgICBcbiAgICBnZXQgZ2VuZXJhdGVkICgpIHsgcmV0dXJuIHRoaXMuX2dlbmVyYXRlZDsgfVxuXG4gICAgc2V0IGdlbmVyYXRlZCAoYm9vbCkgeyB0aGlzLl9nZW5lcmF0ZWQgPSBib29sOyB9XG4gICAgXG4gICAgZ2V0IHVzZXIgKCkgeyByZXR1cm4gdGhpcy5fdXNlcl9wYXRoOyB9XG5cbiAgICBzZXQgdXNlciAoYXJyKSB7IHRoaXMuX3VzZXJfcGF0aCA9IGFycjsgfVxuXG4gICAgZ2V0IGFsZ29yaXRobSAoKSB7IHJldHVybiB0aGlzLl9hbGdvcml0aG1fcGF0aDsgfVxuXG4gICAgc2V0IGFsZ29yaXRobSAoYXJyKSB7IHRoaXMuX2FsZ29yaXRobV9wYXRoID0gYXJyOyB9XG5cbiAgICAvKipcbiAgICAgKiBQdXp6bGUgVGl0bGUgTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgVGl0bGUgb2YgdGhlIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBQdXp6bGUgVGl0bGVcbiAgICAgKi9cbiAgICBwdXp6bGVUaXRsZSAoKSB7IHJldHVybiBcIlwiOyB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHV6emxlIEluZm9ybWF0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1lc3NhZ2UgYWJvdXQgdGhlIFB1enpsZXMgSW5mb3JtYXRpb24uXG4gICAgICogXG4gICAgICogQHJldHVybnMgUHV6emxlIEluZm9ybWF0aW9uXG4gICAgICovXG4gICAgcHV6emxlSW5mbyAoKSB7IHJldHVybiBcIlwiOyB9XG5cbiAgICAvKipcbiAgICAgKiBFbmQgb2YgUHV6emxlIEluZm9ybWF0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIFB1enpsZSBoYXMgYmVlbiBjb21wbGV0ZWQsIGVpdGhlciBieSB0aGUgVXNlciBvciBieSB0aGUgQWxnb3JpdGhtLCBcbiAgICAgKiB0aGVuIGEgbWVzc2FnZSBzaG91bGQgYmUgcHJlc2VudGVkIHRvIHRoZSBVc2VyIGFib3V0IGhvdyB3ZWxsIHRoZSBwdXp6bGUgXG4gICAgICogd2FzIGNvbXBsZXRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGh1bWFuIEh1bWFuIG9yIEFsZ29yaXRobVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwcyBOdW1iZXIgb2YgU3RlcHMgdG8gQ29tcGxldGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoIFBhdGggdGFrZW5cbiAgICAgKiBAcmV0dXJucyBFbmQgb2YgUHV6emxlIEluZm9yYW10aW9uXG4gICAgICovXG4gICAgZW5kSW5mbyAoaHVtYW4sIHN0ZXBzLCBwYXRoKSB7IHJldHVybiBcIlwiOyB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGdpdmVuIFB1enpsZSBUeXBlLCB0aGUgQWxnb3JpdGhtIHVzZWQgZm9yIHNvbHZpbmcgdGhlIFB1enpsZSB3aWxsIFxuICAgICAqIGJlIGltcGxlbWVudGVkIHRvIGNyZWF0ZSB0aGUgUGF0aCByZXF1aXJlZCBmb3IgdGhlIEtuaWdodCB0byBjb21wbGV0ZSB0aGUgXG4gICAgICogUHV6emxlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFJvb3QgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFJvb3QgWS1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7R3JhcGh9IGdyYXBoIEdyYXBoIG9mIENoZXNzYm9hcmRcbiAgICAgKi9cbiAgICBnZW5lcmF0ZSAoeCwgeSwgZ3JhcGgpIHt9XG59IiwiaW1wb3J0IFB1enpsZU1vZHVsZSBmcm9tIFwiLi9wdXp6bGUtbW9kdWxlLmpzXCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4uLy4uL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qc1wiO1xuaW1wb3J0IFF1ZXVlIGZyb20gXCIuLi8uLi9kYXRhLXN0cnVjdHVyZXMvcXVldWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcnRlc3RQYXRoIGV4dGVuZHMgUHV6emxlTW9kdWxlIHtcbiAgICAvKipcbiAgICAgKiBTaG9ydGVzdCBQYXRoIFB1enpsZVxuICAgICAqIFxuICAgICAqIFV0aWxpc2luZyBhIG1vZGlmaWVkIEJyZWFkdGgtRmlyc3QgU2VhcmNoIEFsZ29yaXRobSwgdGhpcyBwdXp6bGUgd2lsbFxuICAgICAqIGluaXRpYWxseSByYW5kb21seSBnZW5lcmF0ZSBhIEdvYWwgUG9zaXRpb24gd2hlcmUgdGhlIFVzZXIgbXVzdCBhdHRlbXB0XG4gICAgICogdG8gZmluZCB0aGUgU2hvcnRlc3QgUGF0aCB0bywgb3IgdXNlIHRoZSBBbGdvcml0aG0ncyBHZW5lcmF0ZWQgU2hvcnRlc3RcbiAgICAgKiBQYXRoIHRvIHRoZSBHb2FsIFBvc2l0aW9uLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEluaXRpYWwgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IEluaXRpYWwgWS1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIENoZXNzYm9hcmQgU2l6ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5LCBzaXplKSB7IHN1cGVyKHgsIHksIHNpemUpOyB9XG5cbiAgICBnZXQgZ29hbCAoKSB7IHJldHVybiB0aGlzLl9nb2FsOyB9XG5cbiAgICBzZXQgZ29hbCAoZGljdCkgeyB0aGlzLl9nb2FsID0gZGljdDsgfVxuXG4gICAgLyoqXG4gICAgICogUHV6emxlIFRpdGxlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybnMgdGhlIFRpdGxlIG9mIHRoZSBQdXp6bGUuXG4gICAgICogXG4gICAgICogQHJldHVybnMgUHV6emxlIFRpdGxlXG4gICAgICovXG4gICAgcHV6emxlVGl0bGUgKCkgeyByZXR1cm4gXCJTaG9ydGVzdCBQYXRoXCI7IH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdXp6bGUgSW5mb3JtYXRpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogTWVzc2FnZSBhYm91dCB0aGUgUHV6emxlcyBJbmZvcm1hdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBQdXp6bGUgSW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBwdXp6bGVJbmZvICgpIHsgXG4gICAgICAgIHJldHVybiBcIlVzZSB0aGUgU2VsZWN0IEJ1dHRvbiB0byBjaG9vc2UgeW91ciBcIiArXG4gICAgICAgICAgICBcImluaXRpYWwgVGlsZS4gT25jZSBzZWxlY3RlZCwgYSBHb2FsIHRpbGUgd2lsbCBcIiArXG4gICAgICAgICAgICBcImJlY29tZSBoaWdobGlnaHRlZCwgYW5kIHlvdSBoYXZlIHRvIHRyeSB0byByZWFjaCBcIiArXG4gICAgICAgICAgICBcInRoYXQgdGlsZSBpbiBhcyBmZXcgbW92ZXMgYXMgcG9zc2libGUuXFxuQnkgY2xpY2tpbmcgXCIgK1xuICAgICAgICAgICAgXCJ0aGUgU2VsZWN0IGJ1dHRvbiBhZ2FpbiwgdGhlIGtuaWdodCB3aWxsIGF1dG9tYXRpY2FsbHkgXCIgK1xuICAgICAgICAgICAgXCJtb3ZlIHRvIHRoZSBHb2FsIHRpbGUgaW4gdGhlIGZld2VzdCBwb3NzaWJsZSBtb3Zlcy5cXG5cIiArXG4gICAgICAgICAgICBcIlRvIHJlc2V0LCBwcmVzcyBzdGFydCBhbmQgc2VsZWN0IHRoZSBTaG9ydGVzdCBQYXRoIHB1enpsZS5cIjsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5kIG9mIFB1enpsZSBJbmZvcm1hdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGVuIHRoZSBQdXp6bGUgaGFzIGJlZW4gY29tcGxldGVkLCBlaXRoZXIgYnkgdGhlIFVzZXIgb3IgYnkgdGhlIEFsZ29yaXRobSwgXG4gICAgICogdGhlbiBhIG1lc3NhZ2Ugc2hvdWxkIGJlIHByZXNlbnRlZCB0byB0aGUgVXNlciBhYm91dCBob3cgd2VsbCB0aGUgcHV6emxlIFxuICAgICAqIHdhcyBjb21wbGV0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBodW1hbiBIdW1hbiBvciBBbGdvcml0aG1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RlcHMgTnVtYmVyIG9mIFN0ZXBzIHRvIENvbXBsZXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aCBQYXRoIHRha2VuXG4gICAgICogQHJldHVybnMgRW5kIG9mIFB1enpsZSBJbmZvcmFtdGlvblxuICAgICAqL1xuICAgIGVuZEluZm8gKGh1bWFuLCBzdGVwcywgcGF0aCkgeyBcbiAgICAgICAgLy8gVG9nZ2xlIEdlbmVyYXRlZFxuICAgICAgICB0aGlzLl9nZW5lcmF0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBNYWluIE1lc3NhZ2VcbiAgICAgICAgbGV0IG1zZyA9IGh1bWFuID8gXG4gICAgICAgICAgICBgQ29uZ3JhdHVsYXRpb25zISBZb3UgY29tcGxldGVkIHRoZSBwdXp6bGUgYCArXG4gICAgICAgICAgICBgaW4gJHtzdGVwc30gc3RlcHMhXFxuVGhlIEFsZ29yaXRobSdzIGJlc3QgYCArXG4gICAgICAgICAgICBgd2FzICR7dGhpcy5fYWxnb3JpdGhtX3BhdGgubGVuZ3RofSBzdGVwcy5cXG5gICtcbiAgICAgICAgICAgIGBIZXJlJ3MgeW91ciBwYXRoOlxcbmAgOiBcbiAgICAgICAgICAgIGBUaGUgQnJlYWR0aC1GaXJzdCBTZWFyY2ggQWxnb3JpdGhtIGZvdW5kIGEgYCArXG4gICAgICAgICAgICBgcGF0aCBpbiAke3N0ZXBzfSBzdGVwcy5cXG5IZXJlJ3MgaXRzIHBhdGg6XFxuYDtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBQYXRoIHRha2VuIHRvIE1lc3NhZ2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtc2cgKz0gYCgke3BhdGhbaV0ueX0sICR7cGF0aFtpXS54fSlgO1xuICAgICAgICAgICAgaWYgKGkgPCBwYXRoLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgbXNnICs9IFwiPT5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXNnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgU2hvcnRlc3QgUGF0aCBQdXp6bGUsIGEgbW9kaWZpZWQgdmVyc2lvbiBvZiB0aGUgQnJlYWR0aC1GaXJzdCBcbiAgICAgKiBTZWFyY2ggQWxnb3JpdGhtIGlzIHV0aWxpc2VkIGZvciBmaW5kaW5nIHRoZSBzaG9ydGVzdCBwYXRoIGZyb20gdGhlIFJvb3QgXG4gICAgICogVmVydGV4IHRvIHRoZSBHb2FsIFZlcnRleCwgdGhlIGxhdHRlciBvZiB3aGljaCBpcyByYW5kb21seSBnZW5lcmF0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggUm9vdCBYLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgUm9vdCBZLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtHcmFwaH0gZ3JhcGggR3JhcGggb2YgQ2hlc3Nib2FyZFxuICAgICAqL1xuICAgIGdlbmVyYXRlICh4LCB5LCBncmFwaCkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFJvb3QgJiBHb2FsIFZlcnRleFxuICAgICAgICB0aGlzLl9yb290ID0ge3g6IHgsIHk6IHl9O1xuICAgICAgICB0aGlzLl9nb2FsID0ge3g6IDAsIHk6IDB9O1xuXG4gICAgICAgIC8vIEVuc3VyZSBHb2FsIGlzIG5vdCB0aGUgUm9vdCBWZXJ0ZXhcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIFJhbmRvbSBOdW1iZXJzIGZvciBCb3RoIENvb3JkaW5hdGVzXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9nb2FsKS5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nb2FsW2Nvb3JkXSA9IHRoaXMuI3JhbmRvbSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlamVjdCBQb3NpdGlvbnMgdGhhdCBhcmUgUm9vdFxuICAgICAgICAgICAgaWYgKHRoaXMuX2dvYWwueCAhPT0geCAmJiB0aGlzLl9nb2FsLnkgIT09IHkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgR3JhcGggc28gQWxsIFZlcnRpY2VzIGFyZSBVbnZpc2l0ZWRcbiAgICAgICAgZm9yIChsZXQgdiBvZiBncmFwaC52ZXJ0aWNlcygpKVxuICAgICAgICAgICAgdi52aXNpdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2V0dXAgUm9vdCBhbmQgR29hbCBWZXJ0ZXggVmFyaWFibGVzXG4gICAgICAgIGNvbnN0IHJvb3QgPSBncmFwaC5nZXRWZXJ0ZXgoeCwgeSk7XG4gICAgICAgIGNvbnN0IGdvYWwgPSBncmFwaC5nZXRWZXJ0ZXgodGhpcy5fZ29hbC54LCB0aGlzLl9nb2FsLnkpO1xuICAgICAgICByb290LnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFNldHVwIFBhcmVudHMgQXJyYXkgYW5kIFF1ZXVlXG4gICAgICAgIGxldCBwYXJlbnRzID0gW107XG4gICAgICAgIGNvbnN0IHF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gICAgICAgIHF1ZXVlLmVucXVldWUocm9vdCk7XG5cbiAgICAgICAgLy8gVmlzaXQgQWxsIE5laWdoYm91cnNcbiAgICAgICAgd2hpbGUgKCFxdWV1ZS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIGxldCB2ZXJ0ZXggPSBxdWV1ZS5kZXF1ZXVlKCk7XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIG91dCBpZiBHb2FsIGlzIEZvdW5kXG4gICAgICAgICAgICBpZiAodmVydGV4LnNhbWVWZXJ0ZXgoZ29hbCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBFbnF1ZXVlIE5laWdoYm91cnNcbiAgICAgICAgICAgIHZlcnRleC5uZWlnaGJvdXJzLmZvckVhY2gobmVpZ2hib3VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW5laWdoYm91ci52aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91ci52aXNpdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBQdXNoIFBhcmVudCBpbnRvIEFycmF5XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCh7dmVydGV4OiBuZWlnaGJvdXIsIHBhcmVudDogdmVydGV4fSk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLmVucXVldWUobmVpZ2hib3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdlbmVyYXRlIFNob3J0ZXN0IFBhdGhcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtX3BhdGgucHVzaChnb2FsKTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBnb2FsO1xuXG4gICAgICAgIC8vIEdldCBQcmV2aW91cyBWZXJ0aWNlc1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgLy8gU2VhcmNoIFBhcmVudHMgZm9yIFByZXZpb3VzIFZlcnRpY2VzXG4gICAgICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50c1tpXS52ZXJ0ZXguc2FtZVZlcnRleChjdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBQYXJlbnQgdG8gUGF0aFxuICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHNbaWR4XS5wYXJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEJyZWFrIG91dCBpZiBSb290IEZvdW5kXG4gICAgICAgICAgICBpZiAoY3VycmVudC5zYW1lVmVydGV4KHJvb3QpKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIHRvIFBhdGhcbiAgICAgICAgICAgIHRoaXMuX2FsZ29yaXRobV9wYXRoLnB1c2goY3VycmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUb2dnbGUgR2VuZXJhdGVkXG4gICAgICAgIHRoaXMuX2dlbmVyYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmFuZG9tIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwIGFuZCB0aGUgc2l6ZSBvZiB0aGUgQ2hlc3Nib2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBSYW5kb20gTnVtYmVyIGJldHdlZW4gMCBhbmQgQm9hcmQgU2l6ZVxuICAgICAqL1xuICAgICNyYW5kb20gKCkgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fc2l6ZSk7IH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=