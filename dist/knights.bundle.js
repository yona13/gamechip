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
     * the Game Console.
     */
    constructor () {}

    /**
     * Set Show Method
     * 
     * Set the Show Callback Method for Updating the Game Console Display
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BTZ0M7O0FBRWpCLHVCQUF1QixrREFBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCOztB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QUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsaUVBQUs7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxrQ0FBa0M7QUFDcEU7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS9ib2FyZC1zdHlsaW5nLmNzcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL21haW4tbW9kdWxlL3BvcC11cC1zdHlsaW5nLmNzcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvYm9hcmQtbW9kdWxlL2JvYXJkLXN0eWxpbmcuY3NzPzE3MjQiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvZ2FtZS1zdHlsaW5nLmNzcz9kMzQyIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL21haW4tbW9kdWxlL3BvcC11cC1zdHlsaW5nLmNzcz81NDI4Iiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2VkZ2UuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL2dyYXBoLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9xdWV1ZS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvdmVydGV4LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvZ2FtZS1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvYm9hcmQtbW9kdWxlL2JvYXJkLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS9rbmlnaHQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvYm9hcmQtbW9kdWxlL3RpbGUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUva25pZ2h0cy1nYW1lLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL21haW4tbW9kdWxlL2Vycm9yLWJveC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9pbmZvLWJveC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9rbmlnaHRzLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvbWFpbi1tb2R1bGUvbWVudS1iYXNlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL21haW4tbW9kdWxlL21lbnUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvbWFpbi1tb2R1bGUvcG9wLXVwLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL3B1enpsZXMva25pZ2h0cy10b3VyLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL3B1enpsZXMvcHV6emxlLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9wdXp6bGVzL3Nob3J0ZXN0LXBhdGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jaGVzc2JvYXJkIHsgXG4gICAgZm9udC1mYW1pbHk6IFwiR290aGljYVwiO1xuICAgIGRpc3BsYXk6IGdyaWQ7IFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW51bS1jb2xvdXIpO1xufVxuXG5bY2xhc3MqPVwiLXRpbGVcIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogdmFyKC0tbnVtLWNvbG91cik7XG59XG5cbltjbGFzcyo9XCItdGlsZVwiXSA+IC5rbmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4jY3Vyc29yLXRpbGUgeyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXJzb3IpOyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYW5pbWF0aW9uOiBibGluayAxLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5ibGFjay10aWxlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spOyB9XG5cbi5ibGFjay10aWxlLnNlbGVjdGVkIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stc2VsZWN0ZWQpOyB9XG5cbi53aGl0ZS10aWxlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XG5cbi53aGl0ZS10aWxlLnNlbGVjdGVkIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2VsZWN0ZWQpOyB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMva25pZ2h0cy1tb2R1bGUvYm9hcmQtbW9kdWxlL2JvYXJkLXN0eWxpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtBQUNkOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDhCQUE4QjtJQUM5Qix5QkFBeUI7QUFDN0I7O0FBRUEsY0FBYyw4QkFBOEIsRUFBRTs7QUFFOUMsdUJBQXVCLHVDQUF1QyxFQUFFOztBQUVoRSxjQUFjLDhCQUE4QixFQUFFOztBQUU5Qyx1QkFBdUIsdUNBQXVDLEVBQUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNoZXNzYm9hcmQgeyBcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHb3RoaWNhXFxcIjtcXG4gICAgZGlzcGxheTogZ3JpZDsgXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW51bS1jb2xvdXIpO1xcbn1cXG5cXG5bY2xhc3MqPVxcXCItdGlsZVxcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogdmFyKC0tbnVtLWNvbG91cik7XFxufVxcblxcbltjbGFzcyo9XFxcIi10aWxlXFxcIl0gPiAua25pZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbiNjdXJzb3ItdGlsZSB7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXJzb3IpOyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMS41cyBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmJsYWNrLXRpbGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7IH1cXG5cXG4uYmxhY2stdGlsZS5zZWxlY3RlZCB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLXNlbGVjdGVkKTsgfVxcblxcbi53aGl0ZS10aWxlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpOyB9XFxuXFxuLndoaXRlLXRpbGUuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1zZWxlY3RlZCk7IH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0dvdGhpY2EtQm9vay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9kb2dpY2EudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvZG9naWNhYm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0td2hpdGU6ICNmZGZmZmM7XG4gICAgLS1ibGFjazogIzAyMDEwMDtcbn1cblxuOnJvb3Qubm9ybWFsIHtcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjODdkM2VkO1xuICAgIC0tYmxhY2stc2VsZWN0ZWQ6ICMyMjc3YTk7XG4gICAgLS1zY3JlZW46ICMyMzU3ODk7XG4gICAgLS1lcnJvci1zY3JlZW46ICNmNjk0OTM7XG4gICAgLS1jdXJzb3I6ICNlOGM1NDc7XG4gICAgLS1udW0tY29sb3VyOiAjZTViODBiO1xuICAgIC0tdGV4dC1jb2xvdXI6ICMwMjAxMDA7XG59XG5cbjpyb290LnJldHJvIHtcbiAgICAtLXdoaXRlOiAjYWFhYWFhO1xuICAgIC0tYmxhY2s6ICMwZjM4MGY7XG4gICAgLS13aGl0ZS1zZWxlY3RlZDogIzliYmMwZjtcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiAjMzA2MjMwO1xuICAgIC0tc2NyZWVuOiAjYWFhYWFhO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjZjY5NDkzO1xuICAgIC0tY3Vyc29yOiAjOGJhYzBmO1xuICAgIC0tbnVtLWNvbG91cjogI2FhYWFhYTtcbiAgICAtLXRleHQtY29sb3VyOiAjMGYzODBmO1xufVxuXG46cm9vdC5mdXR1cmUge1xuICAgIC0td2hpdGU6ICNkMWU4ZTI7XG4gICAgLS1ibGFjazogIzJjMzUzMTtcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjZmZjYjlhOyBcbiAgICAtLWJsYWNrLXNlbGVjdDogI2JkNWUyNztcbiAgICAtLXNjcmVlbjogIzExNjQ2NjtcbiAgICAtLWVycm9yLXNjcmVlbjogI2ZmOTkwMDtcbiAgICAtLWN1cnNvcjogI2ZmY2I5YTtcbiAgICAtLW51bS1jb2xvdXI6ICMxMTY0NjY7XG4gICAgLS10ZXh0LWNvbG91cjogIzJjMzUzMTtcbn1cblxuOnJvb3QubmVvbiB7XG4gICAgLS13aGl0ZTogIzBhYmRjNjtcbiAgICAtLWJsYWNrOiAjMTMzZTdjO1xuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICMwMDc5N2U7IFxuICAgIC0tYmxhY2stc2VsZWN0OiAjMzA3Y2JmO1xuICAgIC0tc2NyZWVuOiAjMDkxODMzO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjZTdlZTRmO1xuICAgIC0tY3Vyc29yOiAjZWEwMGQ5O1xuICAgIC0tbnVtLWNvbG91cjogIzcxMWM5MTtcbiAgICAtLXRleHQtY29sb3VyOiAjZWEwMGQ5O1xufVxuXG46cm9vdC50ZXJtaW5hbCB7XG4gICAgLS13aGl0ZTogY3lhbjtcbiAgICAtLWJsYWNrOiBibGFjaztcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiBibGFjaztcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiBjeWFuO1xuICAgIC0tc2NyZWVuOiBibGFjaztcbiAgICAtLWVycm9yLXNjcmVlbjogYmx1ZTtcbiAgICAtLWN1cnNvcjogZ3JlZW47XG4gICAgLS1udW0tY29sb3VyOiBncmVlbjtcbiAgICAtLXRleHQtY29sb3VyOiBncmVlbjtcbn1cblxuOnJvb3QuZmFudGFzeSB7XG4gICAgLS13aGl0ZTogI2U0OTM0YztcbiAgICAtLWJsYWNrOiAjNTQyYjI5O1xuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICNmMWI4NzI7IFxuICAgIC0tYmxhY2stc2VsZWN0OiAjNDMxZTFmO1xuICAgIC0tc2NyZWVuOiAjOWE5YThlO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjOTYwMDE4O1xuICAgIC0tY3Vyc29yOiAjOWM2YjY1O1xuICAgIC0tbnVtLWNvbG91cjogIzdjMTQyYztcbiAgICAtLXRleHQtY29sb3VyOiAjMGExNTgzO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJHb3RoaWNhXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJEb2dpY2EgQm9sZFwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4ua25pZ2h0cy1nYW1lLW1vZHVsZSB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gICAgMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pOyB9XG4gICAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTsgfVxuICAgIDEwMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pOyB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMva25pZ2h0cy1tb2R1bGUvZ2FtZS1zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBK0I7QUFDbkM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNENBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksS0FBSyxVQUFVLEVBQUU7SUFDakIsTUFBTSxVQUFVLEVBQUU7SUFDbEIsT0FBTyxVQUFVLEVBQUU7QUFDdkI7O0FBRUE7SUFDSSxLQUFLLCtCQUErQixFQUFFO0lBQ3RDLE1BQU0sK0JBQStCLEVBQUU7SUFDdkMsT0FBTywrQkFBK0IsRUFBRTtBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0td2hpdGU6ICNmZGZmZmM7XFxuICAgIC0tYmxhY2s6ICMwMjAxMDA7XFxufVxcblxcbjpyb290Lm5vcm1hbCB7XFxuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICM4N2QzZWQ7XFxuICAgIC0tYmxhY2stc2VsZWN0ZWQ6ICMyMjc3YTk7XFxuICAgIC0tc2NyZWVuOiAjMjM1Nzg5O1xcbiAgICAtLWVycm9yLXNjcmVlbjogI2Y2OTQ5MztcXG4gICAgLS1jdXJzb3I6ICNlOGM1NDc7XFxuICAgIC0tbnVtLWNvbG91cjogI2U1YjgwYjtcXG4gICAgLS10ZXh0LWNvbG91cjogIzAyMDEwMDtcXG59XFxuXFxuOnJvb3QucmV0cm8ge1xcbiAgICAtLXdoaXRlOiAjYWFhYWFhO1xcbiAgICAtLWJsYWNrOiAjMGYzODBmO1xcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjOWJiYzBmO1xcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiAjMzA2MjMwO1xcbiAgICAtLXNjcmVlbjogI2FhYWFhYTtcXG4gICAgLS1lcnJvci1zY3JlZW46ICNmNjk0OTM7XFxuICAgIC0tY3Vyc29yOiAjOGJhYzBmO1xcbiAgICAtLW51bS1jb2xvdXI6ICNhYWFhYWE7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMwZjM4MGY7XFxufVxcblxcbjpyb290LmZ1dHVyZSB7XFxuICAgIC0td2hpdGU6ICNkMWU4ZTI7XFxuICAgIC0tYmxhY2s6ICMyYzM1MzE7XFxuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICNmZmNiOWE7IFxcbiAgICAtLWJsYWNrLXNlbGVjdDogI2JkNWUyNztcXG4gICAgLS1zY3JlZW46ICMxMTY0NjY7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjZmY5OTAwO1xcbiAgICAtLWN1cnNvcjogI2ZmY2I5YTtcXG4gICAgLS1udW0tY29sb3VyOiAjMTE2NDY2O1xcbiAgICAtLXRleHQtY29sb3VyOiAjMmMzNTMxO1xcbn1cXG5cXG46cm9vdC5uZW9uIHtcXG4gICAgLS13aGl0ZTogIzBhYmRjNjtcXG4gICAgLS1ibGFjazogIzEzM2U3YztcXG4gICAgLS13aGl0ZS1zZWxlY3RlZDogIzAwNzk3ZTsgXFxuICAgIC0tYmxhY2stc2VsZWN0OiAjMzA3Y2JmO1xcbiAgICAtLXNjcmVlbjogIzA5MTgzMztcXG4gICAgLS1lcnJvci1zY3JlZW46ICNlN2VlNGY7XFxuICAgIC0tY3Vyc29yOiAjZWEwMGQ5O1xcbiAgICAtLW51bS1jb2xvdXI6ICM3MTFjOTE7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICNlYTAwZDk7XFxufVxcblxcbjpyb290LnRlcm1pbmFsIHtcXG4gICAgLS13aGl0ZTogY3lhbjtcXG4gICAgLS1ibGFjazogYmxhY2s7XFxuICAgIC0tYmxhY2stc2VsZWN0ZWQ6IGJsYWNrO1xcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiBjeWFuO1xcbiAgICAtLXNjcmVlbjogYmxhY2s7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiBibHVlO1xcbiAgICAtLWN1cnNvcjogZ3JlZW47XFxuICAgIC0tbnVtLWNvbG91cjogZ3JlZW47XFxuICAgIC0tdGV4dC1jb2xvdXI6IGdyZWVuO1xcbn1cXG5cXG46cm9vdC5mYW50YXN5IHtcXG4gICAgLS13aGl0ZTogI2U0OTM0YztcXG4gICAgLS1ibGFjazogIzU0MmIyOTtcXG4gICAgLS13aGl0ZS1zZWxlY3RlZDogI2YxYjg3MjsgXFxuICAgIC0tYmxhY2stc2VsZWN0OiAjNDMxZTFmO1xcbiAgICAtLXNjcmVlbjogIzlhOWE4ZTtcXG4gICAgLS1lcnJvci1zY3JlZW46ICM5NjAwMTg7XFxuICAgIC0tY3Vyc29yOiAjOWM2YjY1O1xcbiAgICAtLW51bS1jb2xvdXI6ICM3YzE0MmM7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMwYTE1ODM7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkdvdGhpY2FcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvR290aGljYS1Cb29rLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvZG9naWNhLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2EgQm9sZFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9kb2dpY2Fib2xkLnR0ZlxcXCIpO1xcbn1cXG5cXG4ua25pZ2h0cy1nYW1lLW1vZHVsZSB7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbiAgICAwJSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7IH1cXG4gICAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTsgfVxcbiAgICAxMDAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTsgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbmZvLWNvbXBvbmVudHMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtO1xufVxuXG4uaW5mby1jb21wb25lbnRzID4gZGl2IHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTsgfVxuXG4ubWVudS1jb250YWluZXIsXG4uaW5mb3JtYXRpb24tY29udGFpbmVyIHsgZm9udC1mYW1pbHk6IFwiRG9naWNhXCI7IH1cblxuLm1lbnUtYm94LFxuLmluZm9ybWF0aW9uLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uaW5mb3JtYXRpb24tYm94IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmluZm8tbWVzc2FnZSB7IGZvbnQtc2l6ZTogMC42cmVtOyB9XG5cbi5tZW51LXRpdGxlLFxuLmluZm9ybWF0aW9uLXRpdGxlLFxuLmVycm9yLXRpdGxlIHsgZm9udC1mYW1pbHk6IFwiRG9naWNhIEJvbGRcIjsgfVxuXG4ubWVudS1ib3ggPiBkaXYsXG4uaW5mb3JtYXRpb24tYm94ID4gZGl2IHsgdGV4dC1hbGlnbjogc3RhcnQ7IH1cblxuLm1lbnUtYm94ID4gZGl2LmN1cnNvciB7XG4gICAgYW5pbWF0aW9uOiBmYWRlIDEuNXMgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmVycm9yLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXJyb3ItYm94LFxuLmluZm9ybWF0aW9uLWJveCxcbi5tZW51LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgYm9yZGVyOiAzcHggdmFyKC0tdGV4dC1jb2xvdXIpIHNvbGlkO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVycm9yLWJveCB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhIEJvbGRcIjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLXNjcmVlbik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQge1xuICAgIHotaW5kZXg6IDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIG9wYWNpdHk6IDAuNztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9wb3AtdXAtc3R5bGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQSx5QkFBeUIscUNBQXFDLEVBQUU7O0FBRWhFO3lCQUN5QixxQkFBcUIsRUFBRTs7QUFFaEQ7O0lBRUksK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQSxnQkFBZ0IsaUJBQWlCLEVBQUU7O0FBRW5DOztlQUVlLDBCQUEwQixFQUFFOztBQUUzQzt5QkFDeUIsaUJBQWlCLEVBQUU7O0FBRTVDO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbmZvLWNvbXBvbmVudHMge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRvZ2ljYVxcXCI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuXFxuLmluZm8tY29tcG9uZW50cyA+IGRpdiB7IGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7IH1cXG5cXG4ubWVudS1jb250YWluZXIsXFxuLmluZm9ybWF0aW9uLWNvbnRhaW5lciB7IGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhXFxcIjsgfVxcblxcbi5tZW51LWJveCxcXG4uaW5mb3JtYXRpb24tYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5pbmZvcm1hdGlvbi1ib3gge1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uaW5mby1tZXNzYWdlIHsgZm9udC1zaXplOiAwLjZyZW07IH1cXG5cXG4ubWVudS10aXRsZSxcXG4uaW5mb3JtYXRpb24tdGl0bGUsXFxuLmVycm9yLXRpdGxlIHsgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2EgQm9sZFxcXCI7IH1cXG5cXG4ubWVudS1ib3ggPiBkaXYsXFxuLmluZm9ybWF0aW9uLWJveCA+IGRpdiB7IHRleHQtYWxpZ246IHN0YXJ0OyB9XFxuXFxuLm1lbnUtYm94ID4gZGl2LmN1cnNvciB7XFxuICAgIGFuaW1hdGlvbjogZmFkZSAxLjVzIGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG5cXG4uZXJyb3ItY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZXJyb3ItYm94LFxcbi5pbmZvcm1hdGlvbi1ib3gsXFxuLm1lbnUtYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiA0O1xcbiAgICBib3JkZXI6IDNweCB2YXIoLS10ZXh0LWNvbG91cikgc29saWQ7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVycm9yLWJveCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhIEJvbGRcXFwiO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZXJyb3Itc2NyZWVuKTtcXG59XFxuXFxuLmJsdXJyZWQtYmFja2dyb3VuZCB7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQtc3R5bGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3AtdXAtc3R5bGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3AtdXAtc3R5bGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkZ2Uge1xuICAgIC8qKlxuICAgICAqIEVkZ2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBEYXRhIHN0cnVjdHVyZSB0aGF0IGNvbm5lY3RzIHR3byBWZXJ0aWNlcyBvZiB0aGUgR3JhcGggRGF0YSBTdHJ1Y3R1cmUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgU3RhcnRpbmcgVmVydGV4XG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgRW5kaW5nIFZlcnRleFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh1LCB2KSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHUpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godik7XG4gICAgfVxuXG4gICAgZ2V0IHZlcnRpY2VzICgpIHsgcmV0dXJuIHRoaXMuX3ZlcnRpY2VzOyB9XG5cbiAgICBzZXQgdmVydGljZXMgKGFycikgeyB0aGlzLl92ZXJ0aWNlcyA9IGFycjsgfVxuXG4gICAgLyoqXG4gICAgICogU2FtZSBFZGdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gRWRnZSBpcyB0aGUgc2FtZSBlZGdlIGFzIHRoaXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtFZGdlfSBlIEVkZ2VcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZXkgYXJlIHRoZSBTYW1lIEVkZ2VcbiAgICAgKi9cbiAgICBzYW1lRWRnZSAoZSkge1xuICAgICAgICAvLyBDaGVjayB0aGF0IGJvdGggVmVydGljZXMgYXJlIElkZW50aWNhbFxuICAgICAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNlY29uZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBWZXJ0aWNlcyBvbiBFZGdlXG4gICAgICAgIGUudmVydGljZXMuZm9yRWFjaCh1ID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzWzBdLnNhbWVWZXJ0ZXgodSkgfHwgXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1sxXS5zYW1lVmVydGV4KHUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0KVxuICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIG9uZSBvZiB0aGUgVmVydGljZXMgdGhhdCBtYWtlcyB1cCB0aGUgRWRnZSBjb250YWlucyB0aGUgZGVzaXJlZCBcbiAgICAgKiBWZXJ0ZXgsIGFuZCByZXR1cm5zIHRydWUgaWYgaXQgZG9lcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBWZXJ0ZXhcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIEVkZ2UgQ29ubmVjdHMgVmVydGV4XG4gICAgICovXG4gICAgaGFzVmVydGV4ICh2KSB7XG4gICAgICAgIC8vIENoZWNrIEJvdGggVmVydGljZXMgb24gRWRnZVxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKHZlcnRleCA9PiB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBWZXJ0ZXggaXMgYSBNYXRjaFxuICAgICAgICAgICAgaWYgKHYuc2FtZVZlcnRleCh2ZXJ0ZXgpKVxuICAgICAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBWZXJ0aWNlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgdGhlIHBhaXIgb2YgZ2l2ZW4gVmVydGljZXMgYXJlIGNvbm5lY3RlZCAgYnkgdGhlIEVkZ2UsIGFuZCBcbiAgICAgKiByZXR1cm5zIHRydWUgaWYgdGhleSBhcmUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgT25lIFZlcnRleFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IE90aGVyIFZlcnRleFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgYm90aCBWZXJ0aWNlcyBhcmUgY29ubmVjdGVkIGJ5IEVkZ2VcbiAgICAgKi9cbiAgICBoYXNWZXJ0aWNlcyAodSwgdikge1xuICAgICAgICAvLyBDaGVjayBCb3RoIFZlcnRpY2VzIG9uIEVkZWdlXG4gICAgICAgIGxldCBmaXJzdCA9IGZhbHNlO1xuICAgICAgICBsZXQgc2Vjb25kID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICAgICAgLy8gRW5zdXJlIEJvdGggYXJlIEFjY291bnRlZCBGb3JcbiAgICAgICAgICAgIGlmICh1LnNhbWVWZXJ0ZXgodmVydGV4KSlcbiAgICAgICAgICAgICAgICBmaXJzdCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodi5zYW1lVmVydGV4KHZlcnRleCkpXG4gICAgICAgICAgICAgICAgc2Vjb25kID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZDtcbiAgICB9XG59IiwiaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZS5qc1wiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi92ZXJ0ZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGgge1xuICAgIC8qKlxuICAgICAqIEdyYXBoIENsYXNzXG4gICAgICogXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgdGhlIEdyYXBoIERhdGEgU3RydWN0dXJlLCB3aGljaCB1dGlsaXNlcyB0aGUgVmVydGV4IGFuZFxuICAgICAqIEVkZ2UgQ2xhc3NlcyB0aGF0IGFyZSB1c2VkIHRvIHJlcHJlc2VudCB0aGUgZGF0YSwgYW5kIHRvIGNvbm5lY3QgdGhlIGRhdGFcbiAgICAgKiB0byBvbmUgYW5vdGhlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3ZlcnRpY2VzID0gW107IFxuICAgICAgICB0aGlzLl9lZGdlcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2VzIEl0ZXJhdG9yIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1ldGhvZCB0aGF0IGNhbiBiZSB1c2VkIGluIGxvb3BzIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgR3JhcGgncyBWZXJ0aWNlcy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBJdGVyYXRvciBvZiBWZXJ0aWNlc1xuICAgICAqL1xuICAgIHZlcnRpY2VzICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtTeW1ib2wuaXRlcmF0b3JdOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IHRoaXMuX3ZlcnRpY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHRoaXMuX3ZlcnRpY2VzW2krK10sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFZGdlcyBJdGVyYXRvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNZXRob2QgdGhhdCBjYW4gYmUgdXNlZCBpbiBsb29wcyB0byBpdGVyYXRlIHRocm91Z2ggdGhlIEdyYXBoJ3MgRWRnZXMuXG4gICAgICogXG4gICAgICogQHJldHVybnMgSXRlcmF0b3Igb2YgRWRnZXNcbiAgICAgKi9cbiAgICBlZGdlcyAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9lZGdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB0aGlzLl9lZGdlc1tpKytdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIFZlcnRpY2VzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEdldCB0aGUgTnVtYmVyIG9mIFZlcnRpY2VzIHdpdGhpbiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIFZlcnRpY2VzXG4gICAgICovXG4gICAgbnVtVmVydGljZXMgKCkgeyByZXR1cm4gdGhpcy5fdmVydGljZXMubGVuZ3RoOyB9XG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgRWRnZXMgTWV0aG9kXG4gICAgICogXG4gICAgICogR2V0IHRoZSBOdW1iZXIgb2YgRWRnZXMgd2l0aGluIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgRWRnZXNcbiAgICAgKi9cbiAgICBudW1FZGdlcyAoKSB7IHJldHVybiB0aGlzLl9lZGdlcy5sZW5ndGg7IH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gKHgsIHkpIGNvb3JkaW5hdGUsIHRoaXMgbWV0aG9kIHdpbGwgY3JlYXRlIGEgbmV3IFZlcnRleCBmb3JcbiAgICAgKiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgaW5zZXJ0VmVydGV4ICh4LCB5KSB7IHRoaXMuX3ZlcnRpY2VzLnB1c2gobmV3IFZlcnRleCh4LCB5KSk7IH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gVmVydGV4LCBpZiBpdCBpcyBpbiB0aGUgR3JhcGgsIGFuZCBpZiBpdCBoYXMgYW55IEVkZ2VzIFxuICAgICAqIGFzc29jaWF0ZWQgd2l0aCBpdCwgdGhlbiB0aG9zZSBFZGdlcyB3b3VsZCBiZSByZW1vdmVkLCBhbmQgZmluYWxseSB0aGUgXG4gICAgICogVmVydGV4IHdvdWxkIHRoZW4gYmUgcmVtb3ZlZCBmcm9tIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBWZXJ0ZXhcbiAgICAgKi9cbiAgICByZW1vdmVWZXJ0ZXggKHYpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgVmVydGV4IGlzIENvbm5lY3RlZCB0byBPdGhlciBWZXJ0aWNlc1xuICAgICAgICBmb3IgKGxldCBlZGdlIG9mIHRoaXMuZWRnZXMoKSkge1xuICAgICAgICAgICAgaWYgKGVkZ2UuaGFzVmVydGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIE5laWdoYm91ciBSZWZlcmVuY2VzIGZvciBWZXJ0aWljZXNcbiAgICAgICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzBdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzFdKTtcbiAgICAgICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzFdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzBdKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBFZGdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFZGdlKGVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBWZXJ0ZXggaW4gQXJyYXlcbiAgICAgICAgaWR4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2LnNhbWVWZXJ0ZXgodGhpcy5fdmVydGljZXNbaV0pKVxuICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgVmVydGV4IGlmIEZvdW5kXG4gICAgICAgIGlmIChpZHggPj0gMClcbiAgICAgICAgICAgIHRoaXMuX3ZlcnRpY2VzLnNwbGljZShpZHgsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIFZlcnRpY2VzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENsZWFycyBhbGwgdmVydGljZXMgaW4gdGhlIEdyYXBoLlxuICAgICAqL1xuICAgIGNsZWFyVmVydGljZXMgKCkge1xuICAgICAgICBkbyB7IHRoaXMuX3ZlcnRpY2VzLnBvcCgpIH0gd2hpbGUgKHRoaXMuX3ZlcnRpY2VzLmxlbmd0aCA+IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBWZXJ0ZXggTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gKHgsIHkpIGNvb3JkaW5hdGUsIHRoaXMgbWV0aG9kIHdpbGwgc2VhcmNoIGl0cyBrbm93biB2ZXJ0aWNlc1xuICAgICAqIGFuZCByZXR1cm4gdGhlIHZlcnRleCB0aGF0IGNvcnJlc3BvbmRzIHdpdGggdGhlIGNvb3JkaW5hdGUsIG9yIG51bGwgaWYgaXRcbiAgICAgKiBkb2VzIG5vdCBleGlzdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcmV0dXJucyBDb3JyZXNwb25kaW5nIFZlcnRleFxuICAgICAqL1xuICAgIGdldFZlcnRleCAoeCwgeSkge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggVmVydGljZXNcbiAgICAgICAgbGV0IHUgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCB2ZXJ0ZXggb2YgdGhpcy52ZXJ0aWNlcygpKSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IFZlcnRleCBDb29yZGluYXRlcyBtYXRjaCBEZXNpcmVkXG4gICAgICAgICAgICBpZiAodmVydGV4LnggPT09IHggJiYgdmVydGV4LnkgPT09IHkpXG4gICAgICAgICAgICAgICAgdSA9IHZlcnRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBFZGdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciBhIGdpdmVuIHBhaXIgb2YgVmVydGljZXMsIHRoaXMgbWV0aG9kIHdpbGwgY3JlYXRlIGEgbmV3IEVkZ2UgZm9yIHRoZSBcbiAgICAgKiBwYWlyLCBpZiB0aGVyZSBpc24ndCBvbmUgYWxyZWFkeS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdSBTdGFydGluZyBWZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBFbmRpbmcgVmVydGV4XG4gICAgICovXG4gICAgaW5zZXJ0RWRnZSAodSwgdikge1xuICAgICAgICAvLyBFbnN1cmUgbm8gRWRnZSB3aXRoIFZlcnRpY2VzIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGlmICh0aGlzLmdldEVkZ2UodSwgdikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIE5ldyBFZGdlIGZvciBWZXJ0aWNlc1xuICAgICAgICAgICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKHUsIHYpO1xuICAgICAgICAgICAgdS5pbnNlcnROZWlnaGJvdXIodik7XG4gICAgICAgICAgICB2Lmluc2VydE5laWdoYm91cih1KTtcblxuICAgICAgICAgICAgLy8gQWRkIHRvIEVkZ2VzIEFycmF5XG4gICAgICAgICAgICB0aGlzLl9lZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEVkZ2UgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gRWRnZSwgaWYgaXQgaXMgaW4gdGhlIEdyYXBoLCB0aGUgRWRnZSB3b3VsZCB0aGVuIGJlIHJlbW92ZWRcbiAgICAgKiBmcm9tIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0VkZ2V9IGUgRWRnZVxuICAgICAqL1xuICAgIHJlbW92ZUVkZ2UgKGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgRWRnZSBleGlzdHMgaW4gR3JhcGhcbiAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2VkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZWRnZXNbaV0uc2FtZUVkZ2UoZSkpXG4gICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBpZiBFZGdlIGV4aXN0c1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBOZWlnaGJvdXIgUmVmZXJlbmNlcyBmb3IgVmVydGljZXNcbiAgICAgICAgICAgIGxldCBlZGdlID0gdGhpcy5fZWRnZXNbaWR4XTtcbiAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMF0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMV0pO1xuICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1sxXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1swXSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBFZGdlXG4gICAgICAgICAgICB0aGlzLl9lZGdlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIEVkZ2VzXG4gICAgICogXG4gICAgICogUmVtb3ZlcyBhbGwgZWRnZXMgaW4gdGhlIEdyYXBoLlxuICAgICAqL1xuICAgIGNsZWFyRWRnZXMgKCkge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggZWRnZXNcbiAgICAgICAgZm9yIChsZXQgZWRnZSBvZiB0aGlzLmVkZ2VzKCkpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBSZWZlcmVuY2VzIHRvIE5laWdoYm91ciBWZXJ0aWNlc1xuICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1swXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1sxXSk7XG4gICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzFdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzBdKTtcblxuICAgICAgICAgICAgdGhpcy5fZWRnZXMucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgRWRnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGdpdmVuIHBhaXIgb2YgVmVydGljZXMsIHRoZSBtZXRob2Qgd2lsbCBpdGVyYXRlIHRocm91Z2ggdGhlIGtub3duXG4gICAgICogRWRnZXMgb2YgdGhlIEdyYXBoIGFuZCByZXR1cm4gdGhlIEVkZ2UgdGhhdCBjb25uZWN0cyB0aGVtLCBvciByZXR1cm5zIFxuICAgICAqIG51bGwuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgT25lIFZlcnRleFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IE90aGVyIFZlcnRleFxuICAgICAqIEByZXR1cm5zIEVkZ2UgdGhhdCBDb25uZWN0cyB0aGUgdHdvIFZlcnRpY2VzXG4gICAgICovXG4gICAgZ2V0RWRnZSAodSwgdikge1xuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggRWRnZXNcbiAgICAgICAgbGV0IGUgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBlZGdlIG9mIHRoaXMuZWRnZXMoKSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgRWRnZSBoYXMgYm90aCBWZXJ0aWNlc1xuICAgICAgICAgICAgaWYgKGVkZ2UuaGFzVmVydGljZXModSwgdikpXG4gICAgICAgICAgICAgICAgZSA9IGVkZ2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xuICAgIC8qKlxuICAgICAqIFF1ZXVlIENsYXNzXG4gICAgICogXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgdGhlIFF1ZXVlIERhdGEgU3RydWN0dXJlLiBUaGUgUXVldWUgRGF0YSBTdHJ1Y3R1cmVcbiAgICAgKiB1dGlsaXNlcyB0aGUgRmlyc3QtSW4sIEZpcnN0LU91dCBwcmluY2lwbGUsIGVsZW1lbnRzIGFkZGVkIHRvIHRoZSBRdWV1ZSBcbiAgICAgKiB3aWxsIGJlIHB1c2hlZCB0byB0aGUgYmFjayBvZiB0aGUgQXJyYXksIGFuZCBvbmx5IHRoZSBmaXJzdCBlbGVtZW50IHdpbGxcbiAgICAgKiBiZSByZW1vdmVkIGVhY2ggdGltZSBkZXF1ZXVlIGlzIGNhbGxlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIFF1ZXVlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFNpemUgb2YgdGhlIFF1ZXVlXG4gICAgICovXG4gICAgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGg7IH1cblxuICAgIC8qKlxuICAgICAqIElzIEVtcHR5IE1ldGhvZFxuICAgICAqIFxuICAgICAqIElmIHRoZXJlIGFyZSBubyBFbGVtZW50cyBpbiB0aGUgUXVldWUsIHRoZSBtZXRob2QgcmV0dXJucyB0cnVlLCBhbmQgd2lsbFxuICAgICAqIHJldHVybiBmYWxzZSBpbiBhbGwgb3RoZXIgY2FzZXMuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGVyZSBhcmUgbm8gRWxlbWVudHMgaW4gdGhlIFF1ZXVlXG4gICAgICovXG4gICAgaXNFbXB0eSAoKSB7IHJldHVybiB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDA7IH1cblxuICAgIC8qKlxuICAgICAqIEVucXVldWUgTWV0aG9kXG4gICAgICogXG4gICAgICogQWRkcyBhIG5ldyBFbGVtZW50IHRvIHRoZSBRdWV1ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGUgTmV3IEVsZW1lbnQgZm9yIFF1ZXVlXG4gICAgICovXG4gICAgZW5xdWV1ZSAoZSkgeyB0aGlzLl9xdWV1ZS5wdXNoKGUpOyB9XG5cbiAgICAvKipcbiAgICAgKiBGaXJzdCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBGaXJzdCBFbGVtZW50IG9mIHRoZSBRdWV1ZSwgd2l0aG91dCBkZXF1ZXVpbmcgaXQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVGhlIEZpcnN0IEVsZW1lbnQgb2YgdGhlIFF1ZXVlXG4gICAgICovXG4gICAgZmlyc3QgKCkgeyByZXR1cm4gdGhpcy5fcXVldWVbMF07IH1cblxuICAgIC8qKlxuICAgICAqIERlcXVldWUgTWV0aG9kXG4gICAgICogXG4gICAgICogUmVtb3ZlcyB0aGUgRmlyc3QgRWxlbWVudCBvZiB0aGUgUXVldWUsIGFuZCByZW1vdmVzIGl0IGluIHRoZSBwcm9jZXNzLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRoZSBGaXJzdCBFbGVtZW50IG9mIHRoZSBRdWV1ZVxuICAgICAqL1xuICAgIGRlcXVldWUgKCkge1xuICAgICAgICBsZXQgZWxlbSA9IHRoaXMuX3F1ZXVlWzBdO1xuICAgICAgICB0aGlzLl9xdWV1ZS5zcGxpY2UoMCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gICAgLyoqXG4gICAgICogVmVydGV4IENsYXNzXG4gICAgICogXG4gICAgICogRGF0YSBzdHJ1Y3R1cmUgdGhhdCBzdG9yZSB0aGUgZGF0YSB3aXRoaW4gdGhlIEdyYXBoLCBpbiB0aGlzIGNhc2UsIHN0b3Jlc1xuICAgICAqICh4LCB5KSBjb29yZGluYXRlcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnZpc2l0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb3ZlID0gMDtcbiAgICAgICAgdGhpcy5uZWlnaGJvdXJzID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feDsgfVxuXG4gICAgc2V0IHggKHgpIHsgdGhpcy5feCA9IHg7IH1cblxuICAgIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3k7IH1cblxuICAgIHNldCB5ICh5KSB7IHRoaXMuX3kgPSB5OyB9XG5cbiAgICBnZXQgdmlzaXRlZCAoKSB7IHJldHVybiB0aGlzLl92aXNpdGVkOyB9XG5cbiAgICBzZXQgdmlzaXRlZCAoYm9vbCkgeyB0aGlzLl92aXNpdGVkID0gYm9vbDsgfVxuXG4gICAgZ2V0IG1vdmUgKCkgeyByZXR1cm4gdGhpcy5fbW92ZTsgfVxuXG4gICAgc2V0IG1vdmUgKG51bSkgeyB0aGlzLl9tb3ZlID0gbnVtOyB9XG5cbiAgICBnZXQgbmVpZ2hib3VycyAoKSB7IHJldHVybiB0aGlzLl9uZWlnaGJvdXJzOyB9XG5cbiAgICBzZXQgbmVpZ2hib3VycyAoYXJyKSB7IHRoaXMuX25laWdoYm91cnMgPSBhcnI7IH1cblxuICAgIC8qKlxuICAgICAqIFNhbWUgVmVydGV4IE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gVmVydGV4IGlzIHRoZSBzYW1lIG9uZSBhcyB0aGlzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IFZlcnRleFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIFNhbWUgVmVydGV4XG4gICAgICovXG4gICAgc2FtZVZlcnRleCAodikgeyByZXR1cm4gdi54ID09PSB0aGlzLnggJiYgdi55ID09PSB0aGlzLnk7IH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBOZWlnaGJvdXIgTWV0aG9kXG4gICAgICogXG4gICAgICogQWRkcyBhIG5ldyBWZXJ0ZXggdGhhdCBpcyBOZWlnaGJvdXIgdGhpcyBWZXJ0ZXggaW4gdGhlIEdyYXBoLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2ZXJ0ZXggVmVydGV4XG4gICAgICovXG4gICAgaW5zZXJ0TmVpZ2hib3VyICh2ZXJ0ZXgpIHsgdGhpcy5uZWlnaGJvdXJzLnB1c2godmVydGV4KTsgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIE5laWdoYm91ciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZW1vdmVzIGEgTmVpZ2hib3VyIFZlcnRleCwgaWYgaXQgZXhpc3RzIGZyb20gdGhlIFZlcnRleCdzIE5laWdoYm91cnMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHZlcnRleCBOZWlnaGJvdXIgdG8gUmVtb3ZlXG4gICAgICovXG4gICAgcmVtb3ZlTmVpZ2hib3VyICh2ZXJ0ZXgpIHtcbiAgICAgICAgLy8gRmluZCBWZXJ0ZXggaWYgUHJlc2VudCBpbiBuZWlnaGJvdXJzIEFycmF5XG4gICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5laWdoYm91cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5laWdoYm91cnNbaV0uc2FtZVZlcnRleCh2ZXJ0ZXgpKVxuICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBuZWlnaGJvdXJzIGlmIFByZXNlbnRcbiAgICAgICAgaWYgKGlkeCA+PSAwKVxuICAgICAgICAgICAgdGhpcy5uZWlnaGJvdXJzLnNwbGljZShpZHgsIDEpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW50ZXJmYWNlIHtcbiAgICAvKipcbiAgICAgKiBHYW1lIEludGVyZmFjZSBDbGFzc1xuICAgICAqIFxuICAgICAqIEJhc2UgR2FtZSBDbGFzcyB0aGF0IHNob3VsZCBiZSBJbmhlcml0ZWQgYnkgT3RoZXIgR2FtZXMgdG8gYmUgUGxheWVkIG9uIFxuICAgICAqIHRoZSBHYW1lIENvbnNvbGUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge31cblxuICAgIC8qKlxuICAgICAqIFNldCBTaG93IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgU2hvdyBDYWxsYmFjayBNZXRob2QgZm9yIFVwZGF0aW5nIHRoZSBHYW1lIENvbnNvbGUgRGlzcGxheVxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBzaG93Q2FsbGJhY2sgU2hvdyBDYWxsYmFja1xuICAgICAqIEBjYWxsYmFjayBkaW1lbnNpb25zQ2FsbGJhY2sgR2V0IERpbWVuc2lvbnMgQ2FsbGJhY2tcbiAgICAgKi9cbiAgICBzZXRTY2VuZSAoc2hvd0NhbGxiYWNrLCBnZXREaW1lbnNpb25zKSB7fVxuXG4gICAgLyoqXG4gICAgICogVXAgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFVwIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICB1cENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBSaWdodCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgUmlnaHQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHJpZ2h0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIERvd24gQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIERvd24gQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGRvd25DYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogTGVmdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgTGVmdCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgbGVmdENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBBIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYUNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBCIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBCIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYkNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgU3RhcnQgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc3RhcnRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTZWxlY3QgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc2VsZWN0Q2FsbGJhY2sgKCkge31cbn0iLCJpbXBvcnQgXCIuL2JvYXJkLXN0eWxpbmcuY3NzXCI7XG5pbXBvcnQgS25pZ2h0IGZyb20gXCIuL2tuaWdodC5qc1wiO1xuaW1wb3J0IFRpbGUgZnJvbSBcIi4vdGlsZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2FyZCB7XG4gICAgI0JPQVJEID0gODtcbiAgICAjREVGQVVMVF9QT1MgPSB7eDogMywgeTozfTtcbiAgICAjY29tcGxldGVDYWxsYmFjaztcblxuICAgIC8qKlxuICAgICAqIEJvYXJkIENsYXNzXG4gICAgICogXG4gICAgICogQ2hlc3Nib2FyZCBDbGFzcyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBzZXR0aW5nIHVwIGFsbCBUaWxlcyBhbmQgdGhlIFxuICAgICAqIEtuaWdodCwgaW4gYWRkaXRpb24gdG8gbWFuYWdpbmcgdGhlIGNvbnRyb2xzIGZvciB0aGUgdGhlIEtuaWdodC5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgY29tcGxldGVDYWxsYmFjayBQdXp6bGUgQ29tcGxldGUgQ2FsbGJhY2tcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY29tcGxldGVDYWxsYmFjaykge1xuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgQm9hcmQgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJjaGVzc2JvYXJkXCIpO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIEdyaWQgVGVtcGxhdGUgQXJlYXMgdG8gdGhlIEJvYXJkIERPTSBFbGVtZW50XG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLiNCT0FSRCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI0JPQVJEOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgKz0gYFwidGlsZS0ke2l9JHtqfSBgXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaiA9PT0gdGhpcy4jQk9BUkQgLSAxKVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgdGlsZS0ke2l9JHtqfVwiJHtpID09PSAwID8gXCJcIiA6IFwiIFwifWA7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgdGlsZS0ke2l9JHtqfSBgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLnNldFByb3BlcnR5KFwiZ3JpZC10ZW1wbGF0ZS1hcmVhc1wiLCB0ZW1wbGF0ZSk7XG5cbiAgICAgICAgLy8gSW5pdGFpbGlzZSBUaWxlc1xuICAgICAgICB0aGlzLl90aWxlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0JPQVJEOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jQk9BUkQ7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGUgPSBuZXcgVGlsZShcbiAgICAgICAgICAgICAgICAgICAgaSwgXG4gICAgICAgICAgICAgICAgICAgIGosIFxuICAgICAgICAgICAgICAgICAgICBqICUgMiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgJSAyID8gXCJibGFja1wiIDogXCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBpICUgMiA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90aWxlcy5wdXNoKHRpbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aWxlLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBLbmlnaHRcbiAgICAgICAgdGhpcy5fa25pZ2h0ID0gbmV3IEtuaWdodChcbiAgICAgICAgICAgIHRoaXMuI0RFRkFVTFRfUE9TLngsIFxuICAgICAgICAgICAgdGhpcy4jREVGQVVMVF9QT1MueSwgdGhpcy4jQk9BUkQsIFxuICAgICAgICAgICAgdGhpcy5fdGlsZXNcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBQbGFjZSBLbmlnaHQgYW5kIEN1cnNvciBvbiBJbml0aWFsIFRpbGVcbiAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aWxlLnggPT09IHRoaXMuI0RFRkFVTFRfUE9TLnggJiYgXG4gICAgICAgICAgICAgICAgdGlsZS55ID09PSB0aGlzLiNERUZBVUxUX1BPUy55XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aWxlLnBsYWNlS25pZ2h0KHRoaXMuX2tuaWdodC5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGlsZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgQ2FsbGJhY2sgYW5kIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLiNjb21wbGV0ZUNhbGxiYWNrID0gY29tcGxldGVDYWxsYmFjaztcbiAgICAgICAgdGhpcy5fbGFzdDtcbiAgICAgICAgdGhpcy5fcHJldmlvdXMgPSBbXTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wdXp6bGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9hbGdvcml0aG0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZ29hbCA9IHt4OiAtMSwgeTogLTF9O1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIGdldCBrbmlnaHQgKCkgeyByZXR1cm4gdGhpcy5fa25pZ2h0OyB9XG5cbiAgICBzZXQga25pZ2h0IChvYmopIHsgdGhpcy5fa25pZ2h0ID0gb2JqOyB9XG5cbiAgICBnZXQgcHJldmlvdXMgKCkgeyByZXR1cm4gdGhpcy5fcHJldmlvdXM7IH1cblxuICAgIHNldCBwcmV2aW91cyAoYXJyKSB7IHRoaXMuX3ByZXZpb3VzID0gYXJyOyB9XG5cbiAgICBnZXQgcHV6emxpbmcgKCkgeyByZXR1cm4gdGhpcy5fcHV6emxpbmc7IH1cblxuICAgIHNldCBwdXp6bGluZyAoYm9vbCkgeyB0aGlzLl9wdXp6bGluZyA9IGJvb2w7IH1cblxuICAgIGdldCBnb2FsICgpIHsgcmV0dXJuIHRoaXMuX2dvYWw7IH1cblxuICAgIHNldCBnb2FsIChkaWN0KSB7IHRoaXMuX2dvYWwgPSBkaWN0OyB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgUm9vdCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBTZWxlY3RlZCBSb290IFBvc2l0aW9uIG9mIHRoZSBLbmlnaHQgZm9yIHRoZSBQdXp6bGUuXG4gICAgICogXG4gICAgICogQHJldHVybnMgUm9vdCBQb3NpdGlvblxuICAgICAqL1xuICAgIGdldFJvb3QgKCkgeyByZXR1cm4geyB4OiB0aGlzLl9rbmlnaHQueCwgeTogdGhpcy5fa25pZ2h0LnkgfTsgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEdyYXBoIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybnMgdGhlIEdyYXBoIEdlbmVyYXRlZCBieSB0aGUgS25pZ2h0IGNvbm5lY3RpbmcgYWxsIHRoZSBUaWxlcyB0byBcbiAgICAgKiBlYWNoIG90aGVyIGJ5IHRoZSBsZWdhbGx5IGFsbG93ZWQgbW92ZXMgb2YgdGhlIEtuaWdodC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBHcmFwaCBvZiBDaGVzc2JvYXJkXG4gICAgICovXG4gICAgZ2V0R3JhcGggKCkgeyByZXR1cm4gdGhpcy5fa25pZ2h0LmdyYXBoOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgRGltZW5zaW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEJvYXJkLCB0aGUgd2lkdGggYW5kIGhlaWdodCBhcmUgZGVwZW5kZW50IG9uIHRoZSBzY3JlZW4gc2l6ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGltZW5zaW9uIEJvYXJkIFNpemUgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zIChkaW1lbnNpb24pIHtcbiAgICAgICAgLy8gU2V0IEJvYXJkIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7ZGltZW5zaW9ufXB4YDtcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLmhlaWdodCA9IGAke2RpbWVuc2lvbn1weGA7XG5cbiAgICAgICAgLy8gU2V0IFRpbGUgRGltZW5zaW9uc1xuICAgICAgICBjb25zdCB0aWxlRGltID0gTWF0aC5mbG9vcihkaW1lbnNpb24gLyB0aGlzLiNCT0FSRCk7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gTWF0aC5mbG9vcih0aWxlRGltICogMC44KTtcbiAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIHRpbGUuZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3RpbGVEaW19cHhgO1xuICAgICAgICAgICAgdGlsZS5lbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3RpbGVEaW19cHhgO1xuICAgICAgICAgICAgdGlsZS5lbGVtZW50LnN0eWxlLmZvbnRTaXplID0gYCR7Zm9udFNpemV9cHhgO1xuICAgICAgICAgICAgdGlsZS5jdXJzb3Iuc3R5bGUud2lkdGggPSBgJHt0aWxlRGltfXB4YDtcbiAgICAgICAgICAgIHRpbGUuY3Vyc29yLnN0eWxlLmhlaWdodCA9IGAke3RpbGVEaW19cHhgO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgS25pZ2h0IERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fa25pZ2h0Lmljb24uc3R5bGUud2lkdGggPSBgJHt0aWxlRGltfXB4YDtcbiAgICAgICAgdGhpcy5fa25pZ2h0Lmljb24uc3R5bGUuaGVpZ2h0ID0gYCR7dGlsZURpbX1weGA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFRoZW1lIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgS25pZ2h0J3MgSWNvbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGhlbWUgVGhlbWUgTmFtZVxuICAgICAqL1xuICAgIHNldFRoZW1lICh0aGVtZSkgeyB0aGlzLl9rbmlnaHQuY2hhbmdlSWNvbih0aGVtZSk7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBHb2FsIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCBHb2FsIFRpbGUgZm9yIFNob3J0ZXN0IFBhdGggUHV6emxlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEdvYWwgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IEdvYWwgWS1Qb3NpdGlvblxuICAgICAqL1xuICAgIHNldEdvYWwgKHgsIHkpIHtcbiAgICAgICAgLy8gRmluZCBHb2FsIFRpbGVcbiAgICAgICAgbGV0IGF1eDtcbiAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIGlmICh0aWxlLnggPT09IHggJiYgdGlsZS55ID09PSB5KVxuICAgICAgICAgICAgICAgIGF1eCA9IHRpbGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBHb2FsIFZhcmlhYmxlXG4gICAgICAgIHRoaXMuX2dvYWwueCA9IHg7XG4gICAgICAgIHRoaXMuX2dvYWwueSA9IHk7XG5cbiAgICAgICAgLy8gSGlnaGxpZ2h0IEdvYWwgVGlsZVxuICAgICAgICBhdXguaGlnaGxpZ2h0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgQ29tcGxldGUgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBnaXZlbiBQdXp6bGUsIHRoZSBtZXRob2Qgd2lsbCBjaGVjayBpZiBpdCBoYXMgYmVlbiBjb21wbGV0ZWQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSwgaWYgUHV6emxlIGlzIENvbXBsZXRlXG4gICAgICovXG4gICAgaXNDb21wbGV0ZSAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBTaG9ydGVzdCBQYXRoIFB1enpsZVxuICAgICAgICBpZiAodGhpcy5fZ29hbC54ICE9PSAtMSAmJiB0aGlzLl9nb2FsLnkgIT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50LnggPT09IHRoaXMuX2dvYWwueCAmJiBcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50LnkgPT09IHRoaXMuX2dvYWwueVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAvLyBIYW5kbGUgS25pZ2h0J3MgVG91ciBQdXp6bGVcbiAgICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl90aWxlc1tpXS5tb3ZlID09PSB0aGlzLl90aWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjaGVjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogVXNlZCBmb3IgTW92aW5nIHRoZSBLbmlnaHQgdG8gdGhlIE5leHQgUG9zaXRpb24uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggTmV4dCBYLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgTmV4dCBZLVBvc2l0aW9uXG4gICAgICovXG4gICAgbW92ZSAoeCwgeSkge1xuICAgICAgICAvLyBGaW5kIFRpbGUgdGhhdCBDb3JyZXNwb25kIHRvIE5leHQgUG9zaXRpb25cbiAgICAgICAgbGV0IHRpbGU7XG4gICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godCA9PiB7XG4gICAgICAgICAgICBpZiAodC54ID09PSB4ICYmIHQueSA9PT0geSlcbiAgICAgICAgICAgICAgICB0aWxlID0gdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUGxhY2UgQ3Vyc29yIGFuZCBLbmlnaHQgb24gVGlsZVxuICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKGZhbHNlKTtcbiAgICAgICAgdGhpcy4jcGxhY2VLbmlnaHQodGlsZSk7XG4gICAgICAgIHRoaXMuX2tuaWdodC51cGRhdGUodGlsZS54LCB0aWxlLnkpO1xuICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgTWV0aG9kXG4gICAgICogXG4gICAgICogUmVzZXQgdGhlIEJvYXJkJ3MgVGlsZXMgdG8gcmVtb3ZlIGFueSBoaWdobGlnaHRzLlxuICAgICAqL1xuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgLy8gUmVzZXQgVGlsZXNcbiAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgIHRpbGUucmVzZXQoKTtcbiAgICAgICAgICAgIHRpbGUudG9nZ2xlKCk7XG5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBLbmlnaHQgYW5kIEN1cnNvciBSZW1haW4gb24gdGhlaXIgVGlsZVxuICAgICAgICAgICAgaWYgKHRpbGUueCA9PT0gdGhpcy5fa25pZ2h0LnggJiYgdGlsZS55ID09PSB0aGlzLl9rbmlnaHQueSkge1xuICAgICAgICAgICAgICAgIHRpbGUucGxhY2VLbmlnaHQodGhpcy5fa25pZ2h0LmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRpbGUucG9pbnRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRpbGUucGxhY2VDdXJzb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzZXQgT3RoZXIgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzID0gW107XG4gICAgICAgIHRoaXMuX2dvYWwueCA9IC0xO1xuICAgICAgICB0aGlzLl9nb2FsLnkgPSAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIb3Jpem9udGFsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92ZSB0aGUgQ3Vyc29yIEhvcml6b250YWxseSBhcm91bmQgdGhlIEJvYXJkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmlnaHQgRGVmYXVsdCBBY3Rpb24gaXMgUmlnaHR3YXJkc1xuICAgICAqL1xuICAgIGhvcml6b250YWxNb3ZlIChyaWdodD10cnVlKSB7XG4gICAgICAgIC8vIEVuc3VyZSBIb3Jpem9udGFsIE1vdmUgaXMgc3RpbGwgb24gQm9hcmRcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQueSArIChyaWdodCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChjdXJyIDwgdGhpcy4jQk9BUkQgJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yIGZyb20gVGlsZVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcihmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgYW5kIEZpbmQgTmV3IFRpbGUgZm9yIEN1cnNvclxuICAgICAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS55ID09PSBjdXJyICYmIHRpbGUueCA9PT0gdGhpcy5fY3VycmVudC54KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGlsZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBQbGFjZSBDdXJzb3Igb24gVGlsZVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92ZSB0aGUgQ3Vyc29yIHVwIG9yIGRvd24gYXJvdW5kIHRoZSBCb2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwIERlZmF1bHQgQWN0aW9uIGlzIFVwd2FyZHNcbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE1vdmUgKHVwPXRydWUpIHtcbiAgICAgICAgLy8gRW5zdXJlIFZlcnRpY2FsIE1vdmUgaXMgc3RpbGwgb24gQm9hcmRcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQueCArICh1cCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChjdXJyIDwgdGhpcy4jQk9BUkQgJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yIGZyb20gVGlsZVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcihmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgYW5kIEZpbmQgTmV3IFRpbGUgZm9yIEN1cnNvclxuICAgICAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS55ID09PSB0aGlzLl9jdXJyZW50LnkgJiYgdGlsZS54ID09PSBjdXJyKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGlsZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBQbGFjZSBDdXJzb3Igb24gVGlsZVxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VwdCBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogSWYgbW92ZSBpcyBsZWdhbCwgS25pZ2h0IGlzIFBsYWNlZCBhbmQgbm8gZXJyb3IgaXMgcmFzaWVkLiBPbiB0aGUgb3RoZXIgXG4gICAgICogaGFuZCwgaWYgdGhlIG1vdmUgaXMgaWxsZWdhbCwgdGhlbiBubyBhY3Rpb24gaXMgdGFrZW4gYW5kIGVycm9yIHNob3VsZCBcbiAgICAgKiBiZSByYWlzZWQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgRXJyb3IgTWVzc2FnZSwgaWYgcmVxdWlyZWRcbiAgICAgKi9cbiAgICBhY2NlcHRBY3Rpb24gKCkge1xuICAgICAgICAvLyBGaW5kIEN1cnJlbnQgVGlsZVxuICAgICAgICBsZXQgYXV4O1xuICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgaWYgKHRpbGUucG9pbnRlcilcbiAgICAgICAgICAgICAgICBhdXggPSB0aWxlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBFbnN1cmUgTW92ZSBpcyBMZWdhbFxuICAgICAgICBpZiAodGhpcy5faW5pdGlhbGlzZSB8fCB0aGlzLl9rbmlnaHQuaXNMZWdhbChhdXgueCwgYXV4LnkpKSB7XG4gICAgICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xuICAgICAgICAgICAgLy8gU3RvcmUgVGlsZSBpZiBTb2x2aW5nIFB1enpsZVxuICAgICAgICAgICAgaWYgKHRoaXMuX3B1enpsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXMucHVzaChhdXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIFRvdXJpbmcsIENvbmZpcm0gTm8gUmVwZWF0ZWQgVGlsZXNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ29hbC54ID09PSAtMSAmJiB0aGlzLl9nb2FsLnkgPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGF1eC5tb3ZlID09PSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgUHV6emxlIGlzIENvbXBsZXRlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZSgpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBDdXJyZW50IFRpbGVcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0ID0gdGhpcy5fY3VycmVudDtcbiAgICAgICAgICAgICAgICB0aGlzLiNwbGFjZUtuaWdodChhdXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2tuaWdodC51cGRhdGUoYXV4LngsIGF1eC55KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0aWFsaXNlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBOdW1iZXIgVGlsZSwgaWYgVG91cmluZ1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nb2FsLnggPT09IC0xICYmIHRoaXMuX2dvYWwueSA9PT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQubnVtYmVyKHRoaXMuX3ByZXZpb3VzLmxlbmd0aCwgdGhpcy5fa25pZ2h0LmVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHdpdGhvdXQgRXJyb3JcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXMucG9wKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBNb3ZlIHRvICgke2F1eC55fSwgJHthdXgueH0pIGhhcyBhbHJlYWR5IGJlZW4gbWFkZSFgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHdpdGggRXJyb3JcbiAgICAgICAgcmV0dXJuIGBNb3ZlIHRvICgke2F1eC55fSwgJHthdXgueH0pIGlzIGlsbGVnYWwhYDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNsaW5lIEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBJZiB3aGlsZSBzb2x2aW5nIHRoZSBQdXp6bGUgdGhlIFVzZXIgZmluZHMgdGhleSB3YW50IHRvIHVuZG8gdGhlaXIgbGFzdCBcbiAgICAgKiBtb3ZlLCB0aGVuIHRoZSBwcmV2aW91cyBtb3ZlIHdpbGwgcmVwbGFjZSB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBkZWNsaW5lQWN0aW9uICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIG9ubHkgaWYgU29sdmluZyBQdXp6bGVcbiAgICAgICAgaWYgKHRoaXMuX3B1enpsaW5nICYmICF0aGlzLl9hbGdvcml0aG0gJiYgdGhpcy5fcHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5fcHJldmlvdXNbdGhpcy5fcHJldmlvdXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBNb3ZlIGlmIExhc3QgTW92ZSBpcyB0aGUgU2FtZSBhcyBMYXN0IGluIExpc3RcbiAgICAgICAgICAgIGlmIChjaGVjay54ID09PSB0aGlzLl9sYXN0LnggJiYgY2hlY2sueSA9PT0gdGhpcy5fbGFzdC55KVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzLnBvcCgpO1xuXG4gICAgICAgICAgICAvLyBTZXQgTGFzdCBNb3ZlIGluIExpc3QgYXMgQ3VycmVudCBNb3ZlXG4gICAgICAgICAgICBsZXQgYXV4ID0gdGhpcy5fcHJldmlvdXMucG9wKCk7XG4gICAgICAgICAgICB0aGlzLiNwbGFjZUtuaWdodChhdXgsIHRoaXMuX2N1cnJlbnQsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fa25pZ2h0LnVwZGF0ZShhdXgueCwgYXV4LnkpO1xuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IHRoaXMuX2N1cnJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEVpdGhlciB1c2VkIGZvciBTZWxlY3RpbmcgdGhlIEluaXRpYWwgUG9zaXRpb24gb2YgdGhlIEtuaWdodCBmb3IgXG4gICAgICogY29tcGxldGluZyB0aGUgUHV6emxlLCBvciBmb3IgdXNpbmcgdGhlIEFsZ29yaXRobSB0byBzaG93IGEgU29sdXRpb24gZm9yXG4gICAgICogdGhlIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHRvdXIgS25pZ2h0J3MgVG91ciBvciBOb3RcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoIFBhdGggR2VuZXJhdGVkIGJ5IEFsZ29yaXRobVxuICAgICAqIEBjYWxsYmFjayBtb3ZlQ2FsbGJhY2sgTW92ZSBDYWxsYmFjayBNZXRob2RcbiAgICAgKi9cbiAgICBzZWxlY3RBY3Rpb24gKHRvdXI9ZmFsc2UsIHBhdGg9W10sIG1vdmVDYWxsYmFjaykge1xuICAgICAgICAvLyBTZWxlY3QgSW5pdGlhbCBQb3NpdGlvbiBmb3IgS25pZ2h0XG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgQ3VycmVudCBUaWxlXG4gICAgICAgICAgICBsZXQgYXV4O1xuICAgICAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGlsZS5wb2ludGVyKVxuICAgICAgICAgICAgICAgICAgICBhdXggPSB0aWxlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBDdXJyZW50IFRpbGVcbiAgICAgICAgICAgIHRoaXMuI3BsYWNlS25pZ2h0KGF1eCk7XG4gICAgICAgICAgICB0aGlzLl9rbmlnaHQudXBkYXRlKGF1eC54LCBhdXgueSk7XG5cbiAgICAgICAgICAgIC8vIFNldHVwIFB1enpsaW5nIFZhcmlhYmxlc1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXMucHVzaChhdXgpO1xuICAgICAgICAgICAgdGhpcy5fcHV6emxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRpbGUuYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICB0aWxlLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LmhpZ2hsaWdodCgpO1xuXG5cbiAgICAgICAgICAgIC8vIElmIGNvbXBsZXRpbmcgYSBLbmlnaHQncyBUb3VyLCBOdW1iZXIgVGlsZVxuICAgICAgICAgICAgaWYgKHRvdXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Lm51bWJlcigxLCB0aGlzLl9rbmlnaHQuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICAvLyBQcm9tcHQgS25pZ2h0IHRvIFVzZSBBbGdvcml0aG0ncyBQYXRoXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU2V0IFZhcmlhYmxlcyBmb3IgVGltaW5nIEludGVydmFsXG4gICAgICAgICAgICB0aGlzLl9hbGdvcml0aG0gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyBTZXR1cCAxcyBUaW1pbmcgSW50ZXJ2YWxcbiAgICAgICAgICAgIHZhciB4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFNldCBWZXJ0ZXggdG8gYmUgTGFzdCBFbGVtZW50IGluIFBhdGhcbiAgICAgICAgICAgICAgICBsZXQgdmVydGV4O1xuICAgICAgICAgICAgICAgIHZlcnRleCA9IHBhdGgucG9wKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgVmVydGV4IHRvIFByZXZpb3VzIFN0ZXBzXG4gICAgICAgICAgICAgICAgc2VsZi5wcmV2aW91cy5wdXNoKHZlcnRleCk7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgS25pZ2h0J3MgVG91ciwgTnVtYmVyIHRoZSBUaWxlc1xuICAgICAgICAgICAgICAgIGlmICh0b3VyKVxuICAgICAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggVGlsZXNcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fdGlsZXMuZm9yRWFjaCh0aWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE51bWJlciBUaWxlIHRoYXQgS25pZ2h0IGlzIE9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmVydGV4LnggPT09IHRpbGUueCAmJiB2ZXJ0ZXgueSA9PT0gdGlsZS55KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUubnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByZXZpb3VzLmxlbmd0aCAtIDEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmtuaWdodC5lbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgR2FtZSBJbnRlcmZhY2VcbiAgICAgICAgICAgICAgICBtb3ZlQ2FsbGJhY2sodmVydGV4LngsIHZlcnRleC55KTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIFB1enpsZSBpcyBDb21wbGV0ZVxuICAgICAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBUaW1pbmcgSW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh4KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBQdXp6bGUgQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4jY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2UgS25pZ2h0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgZ2l2ZW4gdGlsZSwgUGxhY2UgdGhlIEtuaWdodCB0aGVyZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1RpbGV9IHRpbGUgRGVzaXJlZCBUaWxlXG4gICAgICogQHBhcmFtIHtUaWxlfSBwcmV2IFByZXZpb3VzIFRpbGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVuZG8gVW5kbywgZGVmYXVsdCBGYWxzZVxuICAgICAqL1xuICAgICNwbGFjZUtuaWdodCAodGlsZSwgcHJldiwgdW5kbz1mYWxzZSkge1xuICAgICAgICAvLyBSZW1vdmUgS25pZ2h0IGZyb20gQ3VycmVudCBUaWxlXG4gICAgICAgIHRoaXMuX2N1cnJlbnQucmVtb3ZlS25pZ2h0KCk7XG5cbiAgICAgICAgLy8gRm9yIFVuZG9pbmcgUGxhY2VtZW50LCBVcGRhdGUgVGlsZXNcbiAgICAgICAgaWYgKHVuZG8pIHtcbiAgICAgICAgICAgIHByZXYucGxhY2VDdXJzb3IoZmFsc2UpO1xuICAgICAgICAgICAgcHJldi5yZXNldCgpO1xuICAgICAgICAgICAgdGlsZS5wbGFjZUN1cnNvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEN1cnJlbnQgVGlsZVxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGlsZTtcbiAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUtuaWdodCh0aGlzLl9rbmlnaHQuZWxlbWVudCk7XG4gICAgfVxufSIsImltcG9ydCBHcmFwaCBmcm9tIFwiLi4vLi4vZGF0YS1zdHJ1Y3R1cmVzL2dyYXBoLmpzXCI7XG5pbXBvcnQgS25pZ2h0Tm9ybWFsIGZyb20gXCIuLi9pbWFnZXMva25pZ2h0LnBuZ1wiO1xuaW1wb3J0IEtuaWdodFJldHJvIGZyb20gXCIuLi9pbWFnZXMva25pZ2h0LXJldHJvLnBuZ1wiO1xuaW1wb3J0IEtuaWdodEZ1dHVyZSBmcm9tIFwiLi4vaW1hZ2VzL2tuaWdodC1mdXR1cmUucG5nXCI7XG5pbXBvcnQgS25pZ2h0TmVvbiBmcm9tIFwiLi4vaW1hZ2VzL2tuaWdodC1uZW9uLnBuZ1wiO1xuaW1wb3J0IEtuaWdodFRlcm1pbmFsIGZyb20gXCIuLi9pbWFnZXMva25pZ2h0LXRlcm1pbmFsLnBuZ1wiO1xuaW1wb3J0IEtuaWdodEZhbnRhc3kgZnJvbSBcIi4uL2ltYWdlcy9rbmlnaHQtZmFudGFzeS5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZ2h0IHtcbiAgICAjQk9BUkQ7XG4gICAgI1RIRU1FUyA9IHtcbiAgICAgICAgXCJub3JtYWxcIjogS25pZ2h0Tm9ybWFsLFxuICAgICAgICBcInJldHJvXCI6IEtuaWdodFJldHJvLFxuICAgICAgICBcImZ1dHVyZVwiOiBLbmlnaHRGdXR1cmUsXG4gICAgICAgIFwibmVvblwiOiBLbmlnaHROZW9uLFxuICAgICAgICBcInRlcm1pbmFsXCI6IEtuaWdodFRlcm1pbmFsLFxuICAgICAgICBcImZhbnRhc3lcIjogS25pZ2h0RmFudGFzeSxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogS25pZ2h0IENsYXNzXG4gICAgICogXG4gICAgICogQ2xhc3MgdGhhdCBHZW5lcmF0ZXMgdGhlIERPTSBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyB0aGUgS25pZ2h0IE9iamVjdCwgXG4gICAgICogYW5kIGFsc28gY29udHJvbHMgdGhlIEtuaWdodCBhcyBpdCBtb3ZlcyBhY3Jvc3MgdGhlIENoZXNzYm9hcmQsIGVpdGhlciBcbiAgICAgKiBieSB0aGUgVXNlciBvciBieSB0aGUgU2VhcmNoIEFsZ29yaXRobS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYm9hcmQgQ2hlc3Nib2FyZCBTaXplXG4gICAgICogQHBhcmFtIHtBcnJheX0gdGlsZXMgQXJyYXkgb2YgQ2hlc3Nib2FyZCBUaWxlc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5LCBib2FyZCwgdGlsZXMpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgS25pZ2h0IERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9pY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuX2ljb24uc3JjPSBLbmlnaHROb3JtYWw7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5faWNvbik7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImtuaWdodFwiKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgIHRoaXMuI0JPQVJEID0gYm9hcmQ7XG4gICAgICAgIHRoaXMuX3RpbGVzID0gdGlsZXM7XG4gICAgICAgIHRoaXMuX2xlZ2FsID0gW107XG4gICAgICAgIHRoaXMuX3BhdGggPSBbXTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBHcmFwaCBmb3IgVGlsZXNcbiAgICAgICAgdGhpcy5fZ3JhcGggPSBuZXcgR3JhcGgoKTtcbiAgICAgICAgdGhpcy5maWxsKCk7XG4gICAgICAgIHRoaXMuY3VycmVudExlZ2FsTW92ZXMoKTtcbiAgICB9XG5cbiAgICBnZXQgZWxlbWVudCAoKSB7IHJldHVybiB0aGlzLl9lbGVtZW50OyB9XG5cbiAgICBzZXQgZWxlbWVudCAoZWxlbSkgeyB0aGlzLl9lbGVtZW50ID0gZWxlbTsgfVxuXG4gICAgZ2V0IGljb24gKCkgeyByZXR1cm4gdGhpcy5faWNvbjsgfVxuXG4gICAgc2V0IGljb24gKGltZykgeyB0aGlzLl9pY29uID0gaW1nOyB9XG5cbiAgICBnZXQgeCAoKSB7IHJldHVybiB0aGlzLl94OyB9XG5cbiAgICBzZXQgeCAoeCkgeyB0aGlzLl94ID0geDsgfVxuXG4gICAgZ2V0IHkgKCkgeyByZXR1cm4gdGhpcy5feTsgfVxuXG4gICAgc2V0IHkgKHkpIHsgdGhpcy5feSA9IHk7IH1cblxuICAgIGdldCBsZWdhbCAoKSB7IHJldHVybiB0aGlzLl9sZWdhbDsgfVxuXG4gICAgc2V0IGxlZ2FsIChhcnIpIHsgdGhpcy5fbGVnYWwgPSBhcnI7IH1cblxuICAgIGdldCB0aWxlcyAoKSB7IHJldHVybiB0aGlzLl90aWxlczsgfVxuXG4gICAgc2V0IHRpbGVzIChhcnIpIHsgdGhpcy5fdGlsZXMgPSBhcnI7IH1cblxuICAgIGdldCBncmFwaCAoKSB7IHJldHVybiB0aGlzLl9ncmFwaDsgfVxuXG4gICAgc2V0IGdyYXBoIChncmFwaCkgeyB0aGlzLl9ncmFwaCA9IGdyYXBoOyB9XG5cbiAgICBnZXQgcGF0aCAoKSB7IHJldHVybiB0aGlzLl9wYXRoOyB9XG5cbiAgICBzZXQgcGF0aCAoYXJyKSB7IHRoaXMuX3BhdGggPSBhcnI7IH1cblxuICAgIGdldCBzdGVwcyAoKSB7IHJldHVybiB0aGlzLl9zdGVwczsgfVxuXG4gICAgc2V0IHN0ZXBzIChudW0pIHsgdGhpcy5fc3RlcHMgPSBudW07IH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBJY29uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgTmV3IEljb24gZm9yIHRoZSBnaXZlbiBUaGVtZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGhlbWUgTmV3IFRoZW1lXG4gICAgICovXG4gICAgY2hhbmdlSWNvbiAodGhlbWUpIHtcbiAgICAgICAgLy8gRW5zdXJlIFRoZW1lIEV4aXN0c1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy4jVEhFTUVTKS5pbmNsdWRlcyh0aGVtZSkpIHtcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgSWNvblxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5faWNvbi5zcmMgPSB0aGlzLiNUSEVNRVNbdGhlbWVdO1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9pY29uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbGwgTWV0aG9kXG4gICAgICogXG4gICAgICogQmFzZWQgb24gdGhlIExlZ2FsIE1vdmVzIHRoYXQgYSBLbmlnaHQgY2FuIG1ha2Ugb24gYSBDaGVzc2JvYXJkLCB0aGlzIFxuICAgICAqIG1ldGhvZCB3aWxsIGZpbGwgdXAgdGhlIGdyYXBoIHdpdGggZWRnZXMgdGhhdCBjb3JyZXNwb25kIHRvIHRoZSBsZWdhbCBcbiAgICAgKiBtb3ZlbWVudHMgYSBrbmlnaHQgY2FuIG1ha2UgYXQgZWFjaCBzcXVhcmUgb24gdGhlIGJvYXJkLlxuICAgICAqL1xuICAgIGZpbGwgKCkge1xuICAgICAgICAvLyBBZGQgYSBWZXJ0ZXggZm9yIGVhY2ggVGlsZVxuICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0VmVydGV4KHRpbGUueCwgdGlsZS55KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGFuIEVkZ2UgZm9yIFRyYXZlcnNpbmcgd2l0aCBLbmlnaHRcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLiNCT0FSRDsgeCsrKVxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLiNCT0FSRDsgeSsrKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TGVnYWxNb3Zlcyh4LCB5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IExlZ2FsIE1vdmVzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgY3VycmVudCBwb3NpdGlvbiB0aGUga25pZ2h0IGlzIGluIG9uIHRoZSBDaGVzc2JvYXJkLCB0aGlzIG1ldGhvZCBcbiAgICAgKiB3aWxsIGZpbGwgdXAgdGhlIGxlZ2FsIG1vdmVzIGFycmF5IHdpdGggdGhlIGN1cnJlbnRseSBhdmFpbGFibGUgbGVnYWwgXG4gICAgICogbW92ZXMuXG4gICAgICovXG4gICAgY3VycmVudExlZ2FsTW92ZXMgKCkge1xuICAgICAgICAvLyBHZXQgVmVydGV4IGZvciBDdXJyZW50IExvY2F0aW9uIGZyb20gR3JhcGhcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh0aGlzLngsIHRoaXMueSk7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIE5laWdoYm91cnMsIGFkZGluZyB0aGVtIHRvIExlZ2FsIE1vdmVzIEFycmF5XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudC5uZWlnaGJvdXJzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdGhpcy5fbGVnYWwucHVzaChjdXJyZW50Lm5laWdoYm91cnNbaV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIFBvc2l0aW9uIG9mIHRoZSBLbmlnaHQsIGFuZCByZXRyaWV2ZSBuZXcgbGVnYWwgbW92ZXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgdXBkYXRlICh4LCB5KSB7XG4gICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB0aGlzLl95ID0geTtcbiAgICAgICAgdGhpcy5fbGVnYWwgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxNb3ZlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIExlZ2FsIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgTW92ZSBzZWxlY3RlZCBpcyBhIGxlZ2FsIG9uZSwgZ2l2ZW4gdGhlIHJlc3RyaWN0aW9ucyBvZiB0aGVcbiAgICAgKiBLbmlnaHQncyBtb3ZlbWVudCBvbiBhIGNoZXNzYm9hcmQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBNb3ZlIGlzIExlZ2FsXG4gICAgICovXG4gICAgaXNMZWdhbCAoeCwgeSkge1xuICAgICAgICAvLyBGaW5kIGlmIENvb3JkaW5hdGUgaXMgYSBMZWdhbCBWZXJ0ZXhcbiAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xlZ2FsLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgQ29vcmRpbmF0ZSBNYXRjaGVzIExlZ2FsIFZlcnRleFxuICAgICAgICAgICAgaWYgKHRoaXMuX2xlZ2FsW2ldLnggPT09IHggJiYgdGhpcy5fbGVnYWxbaV0ueSA9PT0geSlcbiAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGlkeCA+PSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBMZWdhbCBNb3ZlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEdpdmVuIFBvc2l0aW9uLCB0aGUgbWV0aG9kIHdpbGwgZ2VuZXJhdGUgdGhlIGVkZ2VzIHRvd2FyZHMgdGhlIFxuICAgICAqIGxlZ2FsIHBvc2l0aW9ucywgZ2l2ZW4gdGhlIGtuaWdodHMgcmVzdHJpY3RlZCBtb3ZlcyBvbiBhIGNoZXNzYm9hcmQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgZ2V0TGVnYWxNb3ZlcyAoeCwgeSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4LCB5KTtcbiAgICAgICAgLy8gVG9wIE1vdmVzXG4gICAgICAgIGlmICh5ICsgMiA8IHRoaXMuI0JPQVJEKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBUb3AtUmlnaHQgaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh4ICsgMSA8IHRoaXMuI0JPQVJEKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcFJpZ2h0ID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggKyAxLCB5ICsgMik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCB0b3BSaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBUb3AtTGVmdCBpcyBMZWdlbFxuICAgICAgICAgICAgaWYgKHggLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9wTGVmdCA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4IC0gMSwgeSArIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgdG9wTGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmlnaHQgTW92ZXNcbiAgICAgICAgaWYgKHggKyAyIDwgdGhpcy4jQk9BUkQpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIFJpZ2h0LVRvcCBpcyBMZWdhbFxuICAgICAgICAgICAgaWYgKHkgKyAxIDwgdGhpcy4jQk9BUkQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmlnaHRUb3AgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCArIDIsIHkgKyAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIHJpZ2h0VG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIFJpZ2h0LUJvdHRvbSBpcyBMZWdhbFxuICAgICAgICAgICAgaWYgKHkgLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmlnaHRCb3R0b20gPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCArIDIsIHkgLSAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIHJpZ2h0Qm90dG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBCb3R0b20gTW92ZXNcbiAgICAgICAgaWYgKHkgLSAyID49IDApIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIEJvdHRvbS1SaWdodCBpcyBMZWdhbFxuICAgICAgICAgICAgaWYgKHggKyAxIDwgdGhpcy4jQk9BUkQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm90dG9tUmlnaHQgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCArIDEsIHkgLSAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIGJvdHRvbVJpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIEJvdHRvbS1MZWZ0IGlzIExlZ2FsXG4gICAgICAgICAgICBpZiAoeCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBib3R0b21MZWZ0ID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggLSAxLCB5IC0gMik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCBib3R0b21MZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBMZWZ0IE1vdmVzXG4gICAgICAgIGlmICh4IC0gMiA+PSAwKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBMZWZ0LVRvcCBpcyBMZWdhbFxuICAgICAgICAgICAgaWYgKHkgKyAxIDwgdGhpcy4jQk9BUkQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGVmdFRvcCA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4IC0gMiwgeSArIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgbGVmdFRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBMZWZ0LUJvdHRvbSBpcyBMZWdhbFxuICAgICAgICAgICAgaWYgKHkgLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbGVmdEJvdHRvbSA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4IC0gMiwgeSAtIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgbGVmdEJvdHRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSB7XG4gICAgLyoqXG4gICAgICogVGlsZSBDbGFzc1xuICAgICAqIFxuICAgICAqIENoZXNzIEJvYXJkIFRpbGUgRWxlbWVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sb3VyIFwiYmxhY2tcIiBvciBcIndoaXRlXCJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSwgY29sb3VyPVwid2hpdGVcIikge1xuICAgICAgICAvLyBHZW5lcmF0ZSBUaWxlIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y29sb3VyfS10aWxlYCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuaWQgPSBgJHt4fS0ke3l9LXRpbGVgO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgXCJncmlkLWFyZWFcIiwgYHRpbGUtJHt4fSR7eX1gXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgQ3Vyc29yIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2N1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2N1cnNvci5pZCA9IFwiY3Vyc29yLXRpbGVcIjtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl94ID0geDtcbiAgICAgICAgdGhpcy5feSA9IHk7XG4gICAgICAgIHRoaXMuX21vdmUgPSAwO1xuICAgICAgICB0aGlzLl9jb2xvdXIgPSBjb2xvdXI7XG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wb2ludGVyID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGVsZW1lbnQgKCkgeyByZXR1cm4gdGhpcy5fZWxlbWVudDsgfVxuXG4gICAgc2V0IGVsZW1lbnQgKGVsZW0pIHsgdGhpcy5fZWxlbWVudCA9IGVsZW07IH1cblxuICAgIGdldCBjdXJzb3IgKCkgeyByZXR1cm4gdGhpcy5fY3Vyc29yOyB9XG5cbiAgICBzZXQgY3Vyc29yIChlbGVtKSB7IHRoaXMuX2N1cnNvciA9IGVsZW07IH1cblxuICAgIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3g7IH1cblxuICAgIHNldCB4ICh4KSB7IHRoaXMuX3ggPSB4OyB9XG5cbiAgICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95OyB9XG5cbiAgICBzZXQgeSAoeSkgeyB0aGlzLl95ID0geTsgfVxuXG4gICAgZ2V0IG1vdmUgKCkgeyByZXR1cm4gdGhpcy5fbW92ZTsgfVxuXG4gICAgc2V0IG1vdmUgKG51bSkgeyB0aGlzLl9tb3ZlID0gbnVtOyB9XG5cbiAgICBnZXQgY29sb3VyICgpIHsgcmV0dXJuIHRoaXMuX2NvbG91cjsgfVxuXG4gICAgc2V0IGNvbG91ciAoc3RyKSB7IHRoaXMuX2NvbG91ciA9IHN0cjsgfVxuXG4gICAgZ2V0IGFjdGl2ZSAoKSB7IHJldHVybiB0aGlzLl9hY3RpdmU7IH1cblxuICAgIHNldCBhY3RpdmUgKGJvb2wpIHsgdGhpcy5fYWN0aXZlID0gYm9vbDsgfVxuXG4gICAgZ2V0IHBvaW50ZXIgKCkgeyByZXR1cm4gdGhpcy5fcG9pbnRlcjsgfVxuXG4gICAgc2V0IHBvaW50ZXIgKGJvb2wpIHsgdGhpcy5fcG9pbnRlciA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBLbmlnaHQgTWV0aG9kXG4gICAgICogXG4gICAgICogUmVtb3ZlcyB0aGUgS25pZ2h0IERPTSBFbGVtZW50IGZyb20gdGhlIHRpbGUuXG4gICAgICovXG4gICAgcmVtb3ZlS25pZ2h0ICgpIHsgXG4gICAgICAgIC8vIENsZWFyIERPTSBFbGVtZW50c1xuICAgICAgICB0aGlzLl9lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7IFxuICAgICAgICBcbiAgICAgICAgLy8gSWYgTnVtYmVyIHdhcyBvbiBUaWxlLCBLZWVwIGl0IE9uXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgdGhpcy5fbW92ZSA+IDApXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5fbW92ZTtcblxuICAgICAgICAvLyBJZiBDdXJzb3Igd2FzIG9uIFRpbGUsIEtlZXAgaXQgT25cbiAgICAgICAgaWYgKHRoaXMuX3BvaW50ZXIpXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2N1cnNvcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2UgS25pZ2h0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEFwcGVuZHMgdGhlIEtuaWdodCBET00gRWxlbWVudCB0byB0aGUgdGlsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGVsZW0gS25pZ2h0IERPTSBFbGVtZW50XG4gICAgICovXG4gICAgcGxhY2VLbmlnaHQgKGVsZW0pIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZSBDdXJzb3JcbiAgICAgKiBcbiAgICAgKiBQbGFjZSBvciBSZW1vdmUgdGhlIEN1cnNvciBvbiB0aGUgdGlsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uIFBsYWNlIG9yIFJlbW92ZVxuICAgICAqL1xuICAgIHBsYWNlQ3Vyc29yIChvbj10cnVlKSB7XG4gICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBUaWxlXG4gICAgICAgIGlmIChvbiAmJiAhdGhpcy5fcG9pbnRlcikge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jdXJzb3IpO1xuICAgICAgICAgICAgdGhpcy5fcG9pbnRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIEN1cnNvciBmcm9tIFRpbGVcbiAgICAgICAgaWYgKCFvbiAmJiB0aGlzLl9wb2ludGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2N1cnNvcik7XG4gICAgICAgICAgICB0aGlzLl9wb2ludGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOdW1iZXIgTWV0aG9kXG4gICAgICogXG4gICAgICogTnVtYmVyIHRoZSBUaWxlIHdpdGggYSBEZXNpcmVkIE51bWJlci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtIE51bWJlciBmb3IgVGlsZVxuICAgICAqIEBwYXJhbSB7Kn0ga25pZ2h0IEtuaWdodCBET00gRWxlbWVudFxuICAgICAqL1xuICAgIG51bWJlciAobnVtLCBrbmlnaHQpIHsgXG4gICAgICAgIHRoaXMuX21vdmUgPSBudW07XG4gICAgICAgIHRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQgPSBudW07IFxuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKGtuaWdodCk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fY3Vyc29yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWdobGlnaHQgTWV0aG9kXG4gICAgICogXG4gICAgICogSGlnaGxpZ2h0cyB0aGUgdGlsZSB3aGVuIGlmIHRoZSB0aWxlIGlzIGFjdGl2ZSBhbmQgaWYgdGhlIGtuaWdodCBsYW5kcyBcbiAgICAgKiBvbiB0aGUgdGlsZS5cbiAgICAgKi9cbiAgICBoaWdobGlnaHQgKCkge1xuICAgICAgICBpZiAodGhpcy5fYWN0aXZlICYmICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKVxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldHMgdGhlIGFjdGl2ZSB2YXJpYWJsZSB0byBiZSBvbiBvciBvZmYsIGRlcGVuZGluZyBvbiB3aGV0aGVyIG9yIG5vdCBcbiAgICAgKiB0aGVyZSBpcyBhIHB1enpsZSB0aGF0IHRoZSB1c2VyIGlzIGN1cnJlbnRseSBjb21wbGV0aW5nLlxuICAgICAqL1xuICAgIHRvZ2dsZSAoKSB7IHRoaXMuX2FjdGl2ZSA9ICF0aGlzLl9hY3RpdmU7IH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJlbW92ZXMgYW55IGluc3RhbmNlIG9mIHRoZSBUaWxlIGJlaW5nIGhpZ2hsaWdodGVkLlxuICAgICAqL1xuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgLy8gT25seSBSZXNldCBUaWxlcyB0aGF0IGFyZSBIaWdobGlnaHRlZFxuICAgICAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuX21vdmUgPSAwO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBcIi4vZ2FtZS1zdHlsaW5nLmNzc1wiO1xuaW1wb3J0IGNhdGVnb3JpZXMgZnJvbSBcIi4vZGF0YS9tZW51Lmpzb241XCI7XG5pbXBvcnQgR2FtZUludGVyZmFjZSBmcm9tIFwiLi4vZ2FtZS1jaGlwLW1vZHVsZS9nYW1lLWludGVyZmFjZS5qc1wiO1xuaW1wb3J0IEVycm9yQm94IGZyb20gXCIuL21haW4tbW9kdWxlL2Vycm9yLWJveC5qc1wiO1xuaW1wb3J0IEtuaWdodHNNYW5hZ2VyIGZyb20gXCIuL21haW4tbW9kdWxlL2tuaWdodHMtbWFuYWdlci5qc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbWFpbi1tb2R1bGUvbWVudS5qc1wiO1xuaW1wb3J0IEluZm9Cb3ggZnJvbSBcIi4vbWFpbi1tb2R1bGUvaW5mby1ib3guanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZ2h0c0dhbWUgZXh0ZW5kcyBHYW1lSW50ZXJmYWNlIHtcbiAgICAjc2hvd0NhbGxiYWNrO1xuICAgICN0YWtlRG93bkNhbGxiYWNrO1xuICAgICNkaW1lbnNpb25zQ2FsbGJhY2s7XG5cbiAgICAvKipcbiAgICAgKiBLbmlnaHQncyBHYW1lIEludGVyZmFjZSBDbGFzc1xuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIENvbnRyb2xsaW5nIHRoZSBNZW51IGFuZCBDaGVzc2JvYXJkIE1vZHVsZXMgd2l0aCB0aGUgR2FtZUNoaXAnc1xuICAgICAqIENvbnRyb2xsZXJzLCBhbmQgYWxzbyBmb3IgVXBkYXRpbmcgdGhlIERpc3BsYXkgd2l0aCB0aGUgcmVsZXZhbnQgRXJyb3IgXG4gICAgICogYW5kIEluZm9ybWF0aW9uIE1lc3NhZ2VzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBDcmVhdGUgS25pZ2h0J3MgTWFuYWdlclxuICAgICAgICB0aGlzLl9rbSA9IG5ldyBLbmlnaHRzTWFuYWdlcih0aGlzLmNvbXBsZXRlQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX21lbnUgPSBuZXcgTWVudShjYXRlZ29yaWVzKTtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBuZXcgRXJyb3JCb3goKTtcbiAgICAgICAgdGhpcy5faW5mbyA9IG5ldyBJbmZvQm94KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNjZW5lIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgU2hvdyBhbmQgR2V0IERpbWVuc2lvbnMgQ2FsbGJhY2sgTWV0aG9kIGZvciBVcGRhdGluZyB0aGUgR2FtZSBcbiAgICAgKiBDb25zb2xlIERpc3BsYXkuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHNob3dDYWxsYmFjayBTaG93IENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIHRha2VEb3duQ2FsbGJhY2sgVGFrZSBEb3duIENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIGRpbWVuc2lvbnNDYWxsYmFjayBHZXQgRGltZW5zaW9ucyBDYWxsYmFja1xuICAgICAqL1xuICAgIHNldFNjZW5lIChzaG93Q2FsbGJhY2ssIHRha2VEb3duQ2FsbGJhY2ssIGdldERpbWVuc2lvbnMpIHtcbiAgICAgICAgLy8gU2V0IENhbGxiYWNrIE1ldGhvZHNcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrID0gc2hvd0NhbGxiYWNrO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrID0gdGFrZURvd25DYWxsYmFjaztcbiAgICAgICAgdGhpcy4jZGltZW5zaW9uc0NhbGxiYWNrID0gZ2V0RGltZW5zaW9ucztcblxuICAgICAgICAvLyBTZXQgQm9hcmQgRGltZW5zaW9uc1xuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy4jZGltZW5zaW9uc0NhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuX2ttLnNldHVwKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fbWVudS5zZXREaW1lbnNpb25zKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdWJfbWVudTsgXG4gICAgICAgIHRoaXMuX2Vycm9yLnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9pbmZvLnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBCb2FyZCBvbiBEaXNwbGF5XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9rbS5tb2R1bGUpO1xuXG4gICAgICAgIC8vIFNob3cgSW5mb3JtYXRpb24gYWJvdXQgQ3VycmVudCBHYW1lXG4gICAgICAgIHRoaXMuX2luZm8uc2V0VGl0bGUodGhpcy5fa20uZ2FtZS5wdXp6bGVUaXRsZSgpKTtcbiAgICAgICAgdGhpcy5faW5mby5zZXRNZXNzYWdlKHRoaXMuX2ttLmdhbWUucHV6emxlSW5mbygpKTtcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXp6bGUgQ29tcGxldGUgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogV2hlbiB0aGUgUHV6emxlIGlzIENvbXBsZXRlLCB0aGUgVXNlciBzaG91bGQgYmUgaW5mb3JtZWQgd2l0aCB0aGUgcmVsZXZhbnQgXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgY29tcGxldGVDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIFNldCBQYXRoIFRha2VuXG4gICAgICAgIHRoaXMuX2ttLnBhdGggPSB0aGlzLl9rbS5ib2FyZC5wcmV2aW91cztcbiAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IHRydWU7XG5cbiAgICAgICAgLy8gUHV6emxlIENvbXBsZXRlLCBEaXNwbGF5IEluZm9cbiAgICAgICAgdGhpcy5faW5mby5zZXRUaXRsZSh0aGlzLl9rbS5nYW1lLnB1enpsZVRpdGxlKCkpO1xuICAgICAgICB0aGlzLl9pbmZvLnNldE1lc3NhZ2UodGhpcy5fa20uZ2FtZS5lbmRJbmZvKFxuICAgICAgICAgICAgdGhpcy5fa20uaHVtYW4sXG4gICAgICAgICAgICB0aGlzLl9rbS5odW1hbiA/IHRoaXMuX2ttLnN0ZXBzLmh1bWFuIDogdGhpcy5fa20uc3RlcHMuYWxnb3JpdGhtLFxuICAgICAgICAgICAgdGhpcy5fa20ucGF0aFxuICAgICAgICApKTtcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fa20ucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSaWdodCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgUmlnaHQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHJpZ2h0Q2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgQ2hlc3Nib2FyZCBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fa20uY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX2ttLmhvcml6b250YWxNb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGVmdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgTGVmdCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgbGVmdENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIENoZXNzYm9hcmQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9rbS5ob3Jpem9udGFsTW92ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXAgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFVwIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICB1cENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIENoZXNzYm9hcmQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9rbS52ZXJ0aWNhbE1vdmUoKTtcbiAgICAgICAgLy8gSGFuZGxlIE1lbnUgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX21lbnUuY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX21lbnUudmVydGljYWxNb3ZlKCk7XG4gICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fc3ViX3NldClcbiAgICAgICAgICAgIHRoaXMuX3N1Yl9tZW51LnZlcnRpY2FsTW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvd24gQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIERvd24gQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGRvd25DYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBDaGVzc2JvYXJkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9rbS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fa20udmVydGljYWxNb3ZlKGZhbHNlKTtcbiAgICAgICAgLy8gSGFuZGxlIE1lbnUgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX21lbnUuY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX21lbnUudmVydGljYWxNb3ZlKGZhbHNlKTtcbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9zdWJfc2V0KVxuICAgICAgICAgICAgdGhpcy5fc3ViX21lbnUudmVydGljYWxNb3ZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBBIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYUNhbGxiYWNrICgpIHsgXG4gICAgICAgIC8vIEhhbmRsZSBDaGVzc2JvYXJkIEFjdGlvblxuICAgICAgICBpZiAodGhpcy5faW5mby5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuX2luZm8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fa20uY29udHJvbGxlcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9rbS5hY2NlcHRBY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yLnNldE1lc3NhZ2UodGhpcy5fa20ubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2Vycm9yLm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIE1lbnUgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX21lbnUuY29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IFNlbGVjdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5fbWVudS5hY2NlcHRBY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yl9zZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yl9tZW51ID0gdGhpcy5fbWVudS5zZXRTdWJNZW51KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9zdWJfbWVudS5tb2R1bGUsIHRydWUpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC8vIEhhbmRsZSBSZXR1cm4gU2VsZWN0ZWRcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3N1Yl9zZXQpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBPcHRpb24gU2VsZWN0ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5hY2NlcHRBY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBHYW1lIFNldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiR2FtZVwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rbS5zZXRHYW1lKHRoaXMuX3N1Yl9tZW51LnNlbGVjdGVkLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgVGhlbWUgU2V0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N1Yl9tZW51LnNlbGVjdGVkLmtleSA9PT0gXCJUaGVtZVwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rbS5zZXRUaGVtZSh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBDbG9zZSBNZW51ICYgU3ViLU1lbnVcbiAgICAgICAgICAgICAgICB0aGlzLiNjbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSGFuZGxlIFJldHVybiBTZWxlY3RlZFxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICB0aGlzLiNtYWluUmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBCIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYkNhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIENoZXNzYm9hcmQgQWN0aW9uXG4gICAgICAgIGlmICh0aGlzLl9lcnJvci5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2luZm8uYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmZvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9rbS5kZWNsaW5lQWN0aW9uKCk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpIFxuICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdWJfc2V0KVxuICAgICAgICAgICAgdGhpcy4jbWFpblJldHVybigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHsgdGhpcy4jbWVudSgpOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFNlbGVjdCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzZWxlY3RDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIE9ubHkgSGFuZGxlIEdhbWVwbGF5IEV2ZW50c1xuICAgICAgICBpZiAodGhpcy5fa20uY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX2ttLnNlbGVjdEFjdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1haW4gUmV0dXJuIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybiB0byB0aGUgTWFpbiBNZW51IGZyb20gdGhlIFN1Yi1NZW51LlxuICAgICAqL1xuICAgICNtYWluUmV0dXJuICgpIHtcbiAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgTWV0aG9kXG4gICAgICogXG4gICAgICogT3V0c2lkZSBvZiBjbGlja2luZyB0aGUgU3RhcnQgYnV0dG9uLCBpZiB0aGUgVXNlciBpcyB1c2luZyB0aGUgTWVudSwgYW5kIFxuICAgICAqIHNlbGVjdHMgYW4gb3B0aW9uIHN1Y2ggdGhhdCB0aGUgbWVudSBzaG91bGQgY2xvc2UsIHRoaXMgbWV0aG9kIHdpbGwgXG4gICAgICogY29tcGxldGUgdGhhdCB0YXNrLlxuICAgICAqL1xuICAgICNjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuX3N1Yl9zZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVudSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGVuIHRoZSBTdGFydCBidXR0b24gaXMgcHJlc3NlZCwgZWl0aGVyIHRoZSBNZW51IHNob3VsZCBiZSBEaXNwbGF5ZWQgXG4gICAgICogKGkuZS4gZHVyaW5nIGdhbWVwbGF5KSwgb3IgdGhlIE1lbnUgc2hvdWxkIGJlIFRha2VuIERvd24gKGkuZS4gd2hpbGUgdGhlIFxuICAgICAqIE1lbnUgaXMgdXAgb24gdGhlIHNjcmVlbikuXG4gICAgICovXG4gICAgI21lbnUgKCkge1xuICAgICAgICAvLyBNZW51IHRvIGJlIERpc3BsYXllZFxuICAgICAgICBpZiAodGhpcy5fa20uY29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gU2V0IE1lbnUgdG8gYmUgQ29udHJvbGxlZFxuICAgICAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fbWVudS5jb250cm9sbGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgTWVudVxuICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX21lbnUubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vIE1lbnUgdG8gYmUgVGFrZW4gRG93blxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldCBLbmlnaHQgdG8gYmUgQ29udHJvbGxlZFxuICAgICAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gVGFrZSBEb3duIE1lbnUvU3ViLU1lbnVcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVudS5yZXNldFN1Yk1lbnVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQb3BVcCBmcm9tIFwiLi9wb3AtdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JCb3ggZXh0ZW5kcyBQb3BVcCB7XG4gICAgLyoqXG4gICAgICogRXJyb3IgQm94IENsYXNzXG4gICAgICogXG4gICAgICogVXNlZCBmb3IgdXBkYXRpbmcgdGhlIFVzZXIgd2l0aCB0aGUgY3VycmVudCBlcnJvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFwiRXJyb3JcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgTWVzc2FnZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItbWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX21lc3NhZ2UpO1xuXG4gICAgICAgIC8vIFNldCBBY3RpdmUgdG8gYmUgRmFsc2VcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UgKCkgeyByZXR1cm4gdGhpcy5fbWVzc2FnZTsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKGVsZW0pIHsgdGhpcy5fbWVzc2FnZSA9IGVsZW07IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBNZXNzYWdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgRXJyb3IgQm94IHdpdGggdGhlIG1vc3QgdXAgdG8gZGF0ZSBlcnJvci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHh0IEVycm9yIE1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRNZXNzYWdlICh0eHQpIHsgXG4gICAgICAgIHRoaXMuX21lc3NhZ2UudGV4dENvbnRlbnQgPSB0eHQ7IFxuICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgUG9wVXAgZnJvbSBcIi4vcG9wLXVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9Cb3ggZXh0ZW5kcyBQb3BVcCB7XG4gICAgLyoqXG4gICAgICogSW5mb3JtYXRpb24gQm94IENsYXNzXG4gICAgICogXG4gICAgICogVXNlZCBmb3IgdXBkYXRpbmcgdGhlIFVzZXIgd2l0aCBJbmZvcm1hdGlvbiByZWxhdGluZyB0byB0aGUgY3VycmVudCBHYW1lIFxuICAgICAqIGJlaW5nIHBsYXllZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFwiSW5mb3JtYXRpb25cIik7XG5cbiAgICAgICAgLy8gQnVpbGQgTWVzc2FnZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaW5mby1tZXNzYWdlXCIpO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fbWVzc2FnZSk7XG5cbiAgICAgICAgLy8gU2V0IEFjdGl2ZSB0byBiZSBGYWxzZVxuICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZSAoKSB7IHJldHVybiB0aGlzLl9tZXNzYWdlOyB9XG5cbiAgICBzZXQgbWVzc2FnZSAoZWxlbSkgeyB0aGlzLl9tZXNzYWdlID0gZWxlbTsgfVxuXG4gICAgZ2V0IGFjdGl2ZSAoKSB7IHJldHVybiB0aGlzLl9hY3RpdmU7IH1cblxuICAgIHNldCBhY3RpdmUgKGJvb2wpIHsgdGhpcy5fYWN0aXZlID0gYm9vbDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb21wb25lbnRzIG9mIHRoZSBQb3AtVXAgQm94LCB0aGUgd2lkdGggYW5kIGhlaWdodCBhcmUgdG8gYmUgc2V0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBTY3JlZW4gV2lkdGggKHBpeGVscylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFNjcmVlbiBIZWlnaHQgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIFNldCBDb250YWluZXIgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG5cbiAgICAgICAgLy8gU2V0IEJsdXJyZWQgQmFja2dvdW5kIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgQm94IERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgYm94VyA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjgpO1xuICAgICAgICBjb25zdCBib3hIID0gTWF0aC5mbG9vcihoZWlnaHQgKiAwLjgpO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUud2lkdGggPSBgJHtib3hXfXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmhlaWdodCA9IGAke2JveEh9cHhgO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgQm94IFBvc2l0aW9uXG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHdpZHRoICogMC4xKTtcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihoZWlnaHQgKiAwLjIpO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgVGl0bGUgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBUaXRsZSBvZiB0aGUgSW5mb3JtYXRpb24gQm94LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eHQgTmV3IFRpdGxlXG4gICAgICovXG4gICAgc2V0VGl0bGUgKHR4dCkgeyB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IHR4dDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IE1lc3NhZ2UgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBJbmZvcm1hdGlvbiBCb3ggd2l0aCB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gdGhlIFxuICAgICAqIGdhbWUgYmVpbmcgcGxheWVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eHQgSW5mb3JtYXRpb24gTWVzc2FnZVxuICAgICAqL1xuICAgIHNldE1lc3NhZ2UgKHR4dCkgeyBcbiAgICAgICAgdGhpcy5fbWVzc2FnZS50ZXh0Q29udGVudCA9IHR4dDsgXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi4vYm9hcmQtbW9kdWxlL2JvYXJkLmpzXCI7XG5pbXBvcnQgS25pZ2h0c1RvdXIgZnJvbSBcIi4uL3B1enpsZXMva25pZ2h0cy10b3VyLmpzXCI7XG5pbXBvcnQgU2hvcnRlc3RQYXRoIGZyb20gXCIuLi9wdXp6bGVzL3Nob3J0ZXN0LXBhdGguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZ2h0c01hbmFnZXIge1xuICAgICNHQU1FX1RZUEVTID0ge1xuICAgICAgICBcIlNQXCI6IG51bGwsXG4gICAgICAgIFwiS1RcIjogbnVsbCxcbiAgICB9O1xuICAgICNUSEVNRVMgPSBbXG4gICAgICAgIFwiTm9ybWFsXCIsXG4gICAgICAgIFwiUmV0cm9cIixcbiAgICAgICAgXCJGdXR1cmVcIixcbiAgICAgICAgXCJOZW9uXCIsXG4gICAgICAgIFwiVGVybWluYWxcIixcbiAgICAgICAgXCJGYW50YXN5XCJcbiAgICBdO1xuXG4gICAgLyoqXG4gICAgICogS25pZ2h0J3MgR2FtZSBNYW5hZ2VyIENsYXNzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBLbmlnaHQncyBHYW1lLCB0aGlzIE1hbmFnZXIgQ2xhc3Mgd2lsbCBIYW5kbGUgVUkgQ29tcG9uZW50cyBzdWNoXG4gICAgICogYXMgdGhlIEN1cnJlbnQgTW92ZSBDb3VudCwgdGhlIEdhbWUgYmVpbmcgUGxheWVkLCB0aGUgQ2hlc3Nib2FyZCBhbmQgaXRzXG4gICAgICogYXNzb2NpYXRlZCBlbGVtZW50cywgYW5kIHdoZXRoZXIgdGhlIFVzZXIgaXMgY29tcGxldGluZyB0aGUgUHV6emxlIG9yIHRoZVxuICAgICAqIEFsZ29yaXRobSBpcy4gSXQgbWFuYWdlcyB0aGUgQWN0aW9ucyBvbiB0aGUgQ2hlc3Nib2FyZCB3aXRoIHRoZSBwYXJlbnQgXG4gICAgICogR2FtZSBJbnRlcmZhY2UuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGNvbXBsZXRlQ2FsbGJhY2sgUHV6emxlIENvbXBsZXRlIENhbGxiYWNrXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgR2FtZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcImtuaWdodHMtZ2FtZS1tb2R1bGVcIik7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgSW5mbyBDb21wb25lbnQgRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5faW5mb3JtYXRpb24uY2xhc3NMaXN0LmFkZChcImluZm8tY29tcG9uZW50c1wiKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBQbGF5ZXIgSW5mbyBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9wbGF5ZXIuY2xhc3NMaXN0LmFkZChcInBsYXllci1pbmZvXCIpO1xuICAgICAgICB0aGlzLl9wbGF5ZXIudGV4dENvbnRlbnQgPSBcIkhcIjtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBTdGVwcyBUYWtlbiBJbmZvIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzdGVwcy10YWtlblwiKTtcbiAgICAgICAgdGhpcy5fY3VycmVudC50ZXh0Q29udGVudCA9IDA7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgR2FtZSBUeXBlIEluZm8gRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3R5cGUuY2xhc3NMaXN0LmFkZChcImdhbWUtdHlwZVwiKTtcbiAgICAgICAgdGhpcy5fdHlwZS50ZXh0Q29udGVudCA9IFwiU1BcIjtcblxuICAgICAgICAvLyBBcHBlbmQgSW5mbyBDb21wb25lbnRzIHRvIEluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3BsYXllcik7XG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uLmFwcGVuZENoaWxkKHRoaXMuX2N1cnJlbnQpO1xuICAgICAgICB0aGlzLl9pbmZvcm1hdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl90eXBlKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIE9iamVjdHNcbiAgICAgICAgdGhpcy5fYm9hcmQgPSBuZXcgQm9hcmQoY29tcGxldGVDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuI0dBTUVfVFlQRVNbXCJTUFwiXSA9IG5ldyBTaG9ydGVzdFBhdGgoXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5rbmlnaHQueCxcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkLmtuaWdodC55LFxuICAgICAgICAgICAgOFxuICAgICAgICApO1xuICAgICAgICB0aGlzLiNHQU1FX1RZUEVTW1wiS1RcIl0gPSBuZXcgS25pZ2h0c1RvdXIoXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5rbmlnaHQueCxcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkLmtuaWdodC55LFxuICAgICAgICAgICAgOFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEFwcGVuZCBBbGwgQ29tcG9uZW50cyB0byBNb2R1bGVcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2JvYXJkLm1vZHVsZSk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9pbmZvcm1hdGlvbik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2h1bWFuID0gdHJ1ZTsgLy8gRGVmYXVsdCBpcyBVc2VyIE1vdmVzXG4gICAgICAgIHRoaXMuX2dhbWUgPSB0aGlzLiNHQU1FX1RZUEVTW3RoaXMuX3R5cGUudGV4dENvbnRlbnRdO1xuICAgICAgICB0aGlzLl9wYXRoID0gW107XG4gICAgICAgIHRoaXMuX3N0ZXBzID0ge2h1bWFuOiAwLCBhbGdvcml0aG06IDB9O1xuICAgICAgICB0aGlzLl9tc2cgPSBcIlwiO1xuXG4gICAgICAgIC8vIFNldCB0aGUgRGVmYXVsdCBUaGVtZVxuICAgICAgICB0aGlzLnNldFRoZW1lKHRoaXMuI1RIRU1FU1swXSk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxuXG4gICAgZ2V0IGJvYXJkICgpIHsgcmV0dXJuIHRoaXMuX2JvYXJkOyB9XG5cbiAgICBzZXQgYm9hcmQgKG9iaikgeyB0aGlzLl9ib2FyZCA9IG9iajsgfVxuXG4gICAgZ2V0IGNvbnRyb2xsZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbGxlcjsgfVxuXG4gICAgc2V0IGNvbnRyb2xsZXIgKGJvb2wpIHsgdGhpcy5fY29udHJvbGxlciA9IGJvb2w7IH1cblxuICAgIGdldCBodW1hbiAoKSB7IHJldHVybiB0aGlzLl9odW1hbjsgfVxuXG4gICAgc2V0IGh1bWFuIChib29sKSB7IHRoaXMuX2h1bWFuID0gYm9vbDsgfVxuXG4gICAgZ2V0IGdhbWUgKCkgeyByZXR1cm4gdGhpcy5fZ2FtZTsgfVxuXG4gICAgc2V0IGdhbWUgKG9iaikgeyB0aGlzLl9nYW1lID0gb2JqOyB9XG5cbiAgICBnZXQgcGF0aCAoKSB7IHJldHVybiB0aGlzLl9wYXRoOyB9XG5cbiAgICBzZXQgcGF0aCAoYXJyKSB7IHRoaXMuX3BhdGggPSBhcnI7IH1cblxuICAgIGdldCBzdGVwcyAoKSB7IHJldHVybiB0aGlzLl9zdGVwczsgfVxuXG4gICAgc2V0IHN0ZXBzIChkaWN0KSB7IHRoaXMuX3N0ZXBzID0gZGljdDsgfVxuICAgIFxuICAgIGdldCBtZXNzYWdlICgpIHsgcmV0dXJuIHRoaXMuX21zZzsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKHN0cikgeyB0aGlzLl9tc2cgPSBzdHI7IH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldHMgdXAgdGhlIERpc3BsYXkgZm9yIHRoZSBHYW1lLCBpbmNsdWRpbmcgdGhlIGJvYXJkLCB0aGUgaW5mb3JtYXRpb24gXG4gICAgICogcGFuZWwgYW5kIHRoZSBzdWItbW9kdWxlcyBmb3IgdGhlIGdhbWUsIHN1Y2ggYXMgdGhlIFNob3J0ZXN0IFBhdGgsIHRoZSBcbiAgICAgKiBLbmlnaHQncyBUb3VyLCBhbmQgdGhlIFN0YXJ0IFNjcmVlbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0dXAgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gU2V0IEdhbWUgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICAvLyBTZXQgQm9hcmQgRGltZW5zaW9uc1xuICAgICAgICBjb25zdCBkaW0gPSBNYXRoLmZsb29yKE1hdGgubWluKHdpZHRoLCBoZWlnaHQpICogMC45KTtcbiAgICAgICAgdGhpcy5fYm9hcmQuc2V0RGltZW5zaW9ucyhkaW0pO1xuXG4gICAgICAgIC8vIFNldCBJbmZvcm1hdGlvbiBQYW5lbCBGb250IFNpemVcbiAgICAgICAgdGhpcy5faW5mb3JtYXRpb24uc3R5bGUuZm9udFNpemUgPSBNYXRoLmZsb29yKGRpbSAqIDAuMik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEdhbWUgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBHYW1lIHRoZSBVc2VyIGlzIFBsYXlpbmcuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdhbWUgR2FtZSBOYW1lXG4gICAgICovXG4gICAgc2V0R2FtZSAoZ2FtZSkge1xuICAgICAgICAvLyBIYW5kbGUgU2hvcnRlc3QgUGF0aCBQdXp6bGVcbiAgICAgICAgaWYgKGdhbWUgPT09IFwiU2hvcnRlc3QtUGF0aFwiKSB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lID0gdGhpcy4jR0FNRV9UWVBFU1tcIlNQXCJdO1xuICAgICAgICAgICAgdGhpcy5fdHlwZS50ZXh0Q29udGVudCA9IFwiU1BcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgS25pZ2h0J3MgVG91ciBQdXp6bGVcbiAgICAgICAgaWYgKGdhbWUgPT09IFwiS25pZ2h0cy1Ub3VyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWUgPSB0aGlzLiNHQU1FX1RZUEVTW1wiS1RcIl07XG4gICAgICAgICAgICB0aGlzLl90eXBlLnRleHRDb250ZW50ID0gXCJLVFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFRoZW1lIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgU3R5bGluZyB0byBSZWZsZWN0IHRoZSBUaGVtZSBTZWxlY3RlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGhlbWUgVGhlbWUgTmFtZVxuICAgICAqL1xuICAgIHNldFRoZW1lICh0aGVtZSkge1xuICAgICAgICAvLyBHZXQgUm9vdCBFbGVtZW50XG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJvb3QuY2xhc3NOYW1lID0gdGhlbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBVcGRhdGUgS25pZ2h0J3MgSWNvblxuICAgICAgICB0aGlzLl9ib2FyZC5zZXRUaGVtZSh0aGVtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgYWxsIHZhcmlhYmxlcyB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZXMsIGFuZCBzZXQgdGhlIGJvYXJkIHNvIHRoYXQgdGhlIFxuICAgICAqIHRpbGVzIGFyZW4ndCBoaWdobGlnaHRlZC5cbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICAgIC8vIFJlc2V0IFZhbHVlcyBvbiBEaXNwbGF5XG4gICAgICAgIHRoaXMuX3BsYXllci50ZXh0Q29udGVudCA9IFwiSFwiO1xuICAgICAgICB0aGlzLl9jdXJyZW50LnRleHRDb250ZW50ID0gMDtcblxuICAgICAgICAvLyBSZXNldCBTdGVwcyBUYWtlblxuICAgICAgICB0aGlzLl9zdGVwcy5odW1hbiA9IDA7XG4gICAgICAgIHRoaXMuX3N0ZXBzLmFsZ29yaXRobSA9IDA7XG4gICAgICAgIHRoaXMuX3BhdGggPSBbXTtcblxuICAgICAgICAvLyBSZXNldCBUaWxlc1xuICAgICAgICB0aGlzLl9ib2FyZC5yZXNldCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhvcml6b250YWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZpbmcgdGhlIEN1cnNvciBSaWdodCBvciBMZWZ0IG9uIHRoZSBDaGVzc2JvYXJkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmlnaHQgRGVmYXVsdCBBY3Rpb24gaXMgUmlnaHR3YXJkc1xuICAgICAqL1xuICAgIGhvcml6b250YWxNb3ZlIChyaWdodD10cnVlKSB7IHRoaXMuX2JvYXJkLmhvcml6b250YWxNb3ZlKHJpZ2h0KTsgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZpbmcgdGhlIEN1cnNvciBVcCBvciBEb3duIG9uIHRoZSBDaGVzc2JvYXJkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXAgRGVmYXVsdCBBY3Rpb24gaXMgVXB3YXJkc1xuICAgICAqL1xuICAgIHZlcnRpY2FsTW92ZSAodXA9dHJ1ZSkgeyB0aGlzLl9ib2FyZC52ZXJ0aWNhbE1vdmUodXApOyB9XG5cbiAgICAvKipcbiAgICAgKiBBY2NlcHQgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIER1cmluZyB0aGUgZ2FtZSwgaWYgYW4gZXJyb3Igb2NjdXJzLCBzYXkgd2hlbiBhbiBpbGxlZ2FsIG1vdmUgaXMgbWFkZSwgXG4gICAgICogdGhlbiBhIG1lc3NhZ2Ugc2hvdWxkIGJlIGFibGUgdG8gYmUgdmlld2VkIGJ5IHRoZSB1c2VyLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlcmUgYXJlIG5vIEVycm9yc1xuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLl9ib2FyZC5hY2NlcHRBY3Rpb24oKTtcbiAgICAgICAgaWYgKG1lc3NhZ2UgIT09IFwiXCIpIHsgXG4gICAgICAgICAgICAvLyBTZXQgRXJyb3IgTWVzc2FnZVxuICAgICAgICAgICAgdGhpcy5fbXNnID0gbWVzc2FnZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVXBkYXRlIHdpdGggRXJyb3IgTWVzc2FnZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5jcmVtZW50IFN0ZXBzIGlmIFB1enpsZSBoYXMgQ29tbWVuY2VkXG4gICAgICAgIGlmICh0aGlzLl9ib2FyZC5wdXp6bGluZykge1xuICAgICAgICAgICAgdGhpcy5fc3RlcHMuaHVtYW4gKz0gMTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQudGV4dENvbnRlbnQgPSB0aGlzLl9zdGVwcy5odW1hbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB3aXRoIG5vIEVycm9yIE1lc3NhZ2VcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjbGluZSBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogV2hpbGUgU29sdmluZyB0aGUgUHV6emxlLCB0aGUgVXNlciBjYW4gdXNlIHRoZSBCIEJ1dHRvbiBhcyBhbiBVbmRvIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBkZWNsaW5lQWN0aW9uICgpIHsgdGhpcy5fYm9hcmQuZGVjbGluZUFjdGlvbigpOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3Rpb24gQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIER1cmluZyB0aGUgR2FtZSwgaWYgdGhlIFVzZXIgcHJlc3NlcyBTZWxlY3QsIHRoZW4gZWl0aGVyIHRoZSBVc2VyIGlzIFxuICAgICAqIHNlbGVjdGluZyBhbiBJbml0aWFsIFBvc2l0aW9uIGZvciB0aGUgS25pZ2h0LCBvciB0aGV5IGFyZSByZXF1ZXN0aW5nIGEgXG4gICAgICogU29sdXRpb24gZm9yIHRoZSBQdXp6bGUuXG4gICAgICovXG4gICAgc2VsZWN0QWN0aW9uICgpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgS25pZ2h0J3MgVG91ciBpcyB0aGUgU2VsZWN0ZWQgUHV6emxlXG4gICAgICAgIGxldCBjaGVjayA9IHRoaXMuX3R5cGUudGV4dENvbnRlbnQgPT09IFwiS1RcIjtcblxuICAgICAgICAvLyBIYW5kbGUgUmVxdWVzdCBmb3IgU29sdXRpb25cbiAgICAgICAgaWYgKHRoaXMuX2dhbWUuZ2VuZXJhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5zZWxlY3RBY3Rpb24oXG4gICAgICAgICAgICAgICAgY2hlY2ssIFxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWUuYWxnb3JpdGhtLCBcbiAgICAgICAgICAgICAgICB0aGlzLiNtb3ZlQ2FsbGJhY2suYmluZCh0aGlzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuX2h1bWFuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIudGV4dENvbnRlbnQgPSBcIkFcIjtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBTZWxlY3RpbmcgSW5pdGlhbCBQb3NpdGlvblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkLnNlbGVjdEFjdGlvbihjaGVjaywgW10sIHRoaXMuI21vdmVDYWxsYmFjay5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgUHV6emxlXG4gICAgICAgICAgICBjb25zdCByb290ID0gdGhpcy5fYm9hcmQuZ2V0Um9vdCgpO1xuICAgICAgICAgICAgY29uc3QgZ3JhcGggPSB0aGlzLl9ib2FyZC5nZXRHcmFwaCgpO1xuICAgICAgICAgICAgdGhpcy5fZ2FtZS5nZW5lcmF0ZShyb290LngsIHJvb3QueSwgZ3JhcGgpO1xuXG4gICAgICAgICAgICAvLyBJZiBTaG9ydGVzdCBQYXRoLCBVcGRhdGUgR29hbCBUaWxlXG4gICAgICAgICAgICBpZiAoIWNoZWNrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ29hbCA9IHRoaXMuX2dhbWUuZ29hbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9ib2FyZC5zZXRHb2FsKGdvYWwueCwgZ29hbC55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogVXNlZCBmb3IgTW92aW5nIHRoZSBLbmlnaHQgZHVyaW5nIHByb21wdGluZywgdGhlIG1ldGhvZCB3aWxsIGFsc28gXG4gICAgICogaW5jcmVtZW50IHRoZSBzdGVwcyBvbiB0aGUgVUkuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggTmV4dCBYLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgTmV4dCBZLVBvc2l0aW9uXG4gICAgICovXG4gICAgI21vdmVDYWxsYmFjayAoeCwgeSkge1xuICAgICAgICAvLyBVcGRhdGUgVUkgTW92ZSBDb3VudCBFbGVtZW50XG4gICAgICAgIHRoaXMuX3N0ZXBzLmFsZ29yaXRobSArPSAxO1xuICAgICAgICB0aGlzLl9jdXJyZW50LnRleHRDb250ZW50ID0gdGhpcy5fc3RlcHMuYWxnb3JpdGhtO1xuXG4gICAgICAgIC8vIE1vdmUgS25pZ2h0IHRvIERlc2lyZWQgQ29vcmRpbmF0ZVxuICAgICAgICB0aGlzLl9ib2FyZC5tb3ZlKHgsIHkpO1xuICAgIH1cbn0iLCJpbXBvcnQgUG9wVXAgZnJvbSBcIi4vcG9wLXVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVCYXNlIGV4dGVuZHMgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIE1lbnUgQmFzZSBDbGFzc1xuICAgICAqIFxuICAgICAqIEJhc2UgQ2xhc3MgZm9yIE1haW4gTWVudXMgb3IgU3ViLU1lbnVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYXRlZ29yaWVzIENhdGVnb3JpZXMgZm9yIE1lbnVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY2F0ZWdvcmllcykge1xuICAgICAgICBzdXBlcihcIk1lbnVcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgT3B0aW9uIERPTSBFbGVtZW50c1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgICAgIGNhdGVnb3JpZXMuc3Vicy5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgb3B0aW9uLmlkID0gYCR7c3ViLmtleS50b0xvd2VyQ2FzZSgpfS1vcHRpb25gO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gc3ViLmtleTtcbiAgICAgICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJ1aWxkIFJldHVybiBPcHRpb24gRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fcmV0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5hZGQoXCJyZXR1cm4tb3B0aW9uXCIpO1xuICAgICAgICB0aGlzLl9yZXR1cm4udGV4dENvbnRlbnQgPSBcIlJldHVyblwiO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fcmV0dXJuKTtcblxuICAgICAgICAvLyBTZXR1cCBDdXJzb3JcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fbmFtZSA9IGNhdGVnb3JpZXMua2V5O1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHtcbiAgICAgICAgICAgIGtleTogdGhpcy5fbmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBcIlwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IG9wdGlvbnMgKCkgeyByZXR1cm4gdGhpcy5fb3B0aW9uczsgfVxuXG4gICAgc2V0IG9wdGlvbnMgKGFycikgeyB0aGlzLl9vcHRpb25zID0gYXJyOyB9XG5cbiAgICBnZXQgcmV0dXJuICgpIHsgcmV0dXJuIHRoaXMuX3JldHVybjsgfVxuXG4gICAgc2V0IHJldHVybiAoZWxlbSkgeyB0aGlzLl9yZXR1cm4gPSBlbGVtOyB9XG5cbiAgICBnZXQgbmFtZSAoKSB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG5cbiAgICBzZXQgbmFtZSAoc3RyKSB7IHRoaXMuX25hbWUgPSBzdHI7IH1cblxuICAgIGdldCBzZWxlY3RlZCAoKSB7IHJldHVybiB0aGlzLl9zZWxlY3RlZDsgfVxuXG4gICAgc2V0IHNlbGVjdGVkIChkaWN0KSB7IHRoaXMuX3NlbGVjdGVkID0gZGljdDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb21wb25lbnRzIG9mIHRoZSBNZW51IEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBzdXBlci5zZXREaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBPcHRpb25zIFdpZHRoXG4gICAgICAgIGNvbnN0IGJveFcgPSBNYXRoLmZsb29yKHdpZHRoICogMC42KTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICBvcHRpb24uc3R5bGUud2lkdGggPSBgJHtib3hXfXB4YDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JldHVybi5zdHlsZS53aWR0aCA9IGAke2JveFd9cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBDdXJzb3IgTWV0aG9kXG4gICAgICogXG4gICAgICogV2hpbGUgY3ljbGluZyB0aHJvdWdoIHRoZSBNZW51IE9wdGlvbnMsIGlmIHRoZSBjdXJzb3IgaXMgb24gYW4gb3B0aW9uLCBcbiAgICAgKiB0aGVuIHRoZSBvcHRpb24gc2hvdWxkIGJlIGhpZ2hsaWdodGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb24gQ3Vyc29yIG9uIE9wdGlvblxuICAgICAqL1xuICAgIHNldEN1cnNvciAob249dHJ1ZSkge1xuICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIE9wdGlvblxuICAgICAgICBpZiAodGhpcy5fY3VycmVudCA9PT0gdGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5jb250YWlucyhcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmIChvbiAmJiAhY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3JcIik7XG4gICAgICAgICAgICBpZiAoIW9uICYmIGNoZWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuX3JldHVybi5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yXCIpO1xuICAgICAgICB9IFxuICAgICAgICAvLyBIYW5kbGUgT3RoZXIgT3B0aW9uc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QuY29udGFpbnMoXCJjdXJzb3JcIik7XG4gICAgICAgICAgICBpZiAob24gJiYgIWNoZWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmICghb24gJiYgY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZpbmcgdGhlIEN1cnNvciBVcCBvciBEb3duIG9uIHRoZSBNZW51LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXAgRGVmYXVsdCBBY3Rpb24gaXMgVXB3YXJkc1xuICAgICAqL1xuICAgIHZlcnRpY2FsTW92ZSAodXA9dHJ1ZSkge1xuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudCArICh1cCA/IC0xIDogMSk7XG4gICAgICAgIGlmIChjdXJyIDw9IHRoaXMuX29wdGlvbnMubGVuZ3RoICYmIGN1cnIgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJzb3IoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IGN1cnI7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXB0IEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaG9vc2VzIHRoZSBPcHRpb24gb24gdGhlIE1lbnUgdGhhdCB0aGUgVXNlciBoYXMgc2VsZWN0ZWQsIHJldHVybmluZyB0cnVlIFxuICAgICAqIGltcGxpZXMgdGhhdCBhbiBvcHRpb24gd2FzIHNlbGVjY3RlZCwgZmFsc2UgaW1wbGllcyB0aGF0IHRoZSByZXR1cm4gb3B0aW9uIFxuICAgICAqIHdhcyBzZWxlY3RlZC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUcnVlIGZvciBhbiBPcHRpb24sIEZhbHNlIGZvciBSZXR1cm5cbiAgICAgKi9cbiAgICBhY2NlcHRBY3Rpb24gKCkge1xuICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIFNlbGVjdFxuICAgICAgICBpZiAodGhpcy5fY3VycmVudCA9PT0gdGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBPcHRpb25zIFNlbGVjdFxuICAgICAgICB0aGlzLl9zZWxlY3RlZC52YWx1ZSA9IHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0udGV4dENvbnRlbnQ7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgTWVudUJhc2UgZnJvbSBcIi4vbWVudS1iYXNlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBNZW51QmFzZSB7XG4gICAgLyoqXG4gICAgICogTWVudSBDbGFzc1xuICAgICAqIFxuICAgICAqIEZvciB0aGUgZ2l2ZW4gQ2F0ZWdvcmllcyBmb3IgdGhlIE1lbnUsIGEgZGlzcGxheSB3aWxsIGJlIHByZXNlbnRlZCB0byBcbiAgICAgKiB0aGUgVXNlciBmb3IgdGhlbSB0byBTZWxlY3QuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhdGVnb3JpZXMgSlNPTiBPYmplY3Qgb2YgTWVudSBDYXRlZ29yaWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgc3VwZXIoY2F0ZWdvcmllcyk7XG5cbiAgICAgICAgLy8gQnVpbGQgU3ViLU1lbnVzXG4gICAgICAgIHRoaXMuX3N1YnMgPSBbXTtcbiAgICAgICAgY2F0ZWdvcmllcy5zdWJzLmZvckVhY2goc3ViID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgQ3JlYXRlIFN1Yi1NZW51IGlmIE5lY2Vzc2FyeVxuICAgICAgICAgICAgaWYgKHN1Yi5zdWJzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgdGhpcy5fc3Vicy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBzdWIua2V5LFxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWVudTogbmV3IE1lbnUoc3ViKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgc3VicyAoKSB7IHJldHVybiB0aGlzLl9zdWJzOyB9XG5cbiAgICBzZXQgc3VicyAoYXJyKSB7IHRoaXMuX3N1YnMgPSBhcnI7IH1cblxuICAgIGdldCBjb250cm9sbGVyICgpIHsgcmV0dXJuIHRoaXMuX2NvbnRyb2xsZXI7IH1cblxuICAgIHNldCBjb250cm9sbGVyIChib29sKSB7IHRoaXMuX2NvbnRyb2xsZXIgPSBib29sOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgRGltZW5zaW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIENvbXBvbmVudHMgb2YgdGhlIE1lbnUgQm94LCB0aGUgd2lkdGggYW5kIGhlaWdodCBhcmUgdG8gYmUgc2V0LiBcbiAgICAgKiBBZGRpdGlvbmFsbHksIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBTdWItTWVudSBDb21wb25lbnRzIGFyZSB0byBiZSBcbiAgICAgKiBzZXQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFNjcmVlbiBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgU2NyZWVuIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gSGFuZGxlIE1lbnUgRGltZW5zaW9uc1xuICAgICAgICBzdXBlci5zZXREaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX3N1YnMuZm9yRWFjaChzdWIgPT4geyBzdWIubWVudS5zZXREaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpOyB9KTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogU2V0IFN1Yi1NZW51IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldHMgdGhlIFN1Yi1NZW51IFNlbGVjdGVkIGJ5IHRoZSBVc2VyIHRvIGJlIG9uIERpc3BsYXkuXG4gICAgICogXG4gICAgICogQHJldHVybnMgU3ViLU1lbnUgRE9NIEVsZW1lbnRcbiAgICAgKi9cbiAgICBzZXRTdWJNZW51ICgpIHtcbiAgICAgICAgdGhpcy5fc3Vic1t0aGlzLl9jdXJyZW50XS5jb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNbdGhpcy5fY3VycmVudF0ubWVudTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBTdWItTWVudXMgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0cyB0aGUgTWFpbiBNZW51IHRvIGJlIG9uIERpc3BsYXkuXG4gICAgICovXG4gICAgcmVzZXRTdWJNZW51cyAoKSB7IHRoaXMuX3N1YnMuZm9yRWFjaChzdWIgPT4geyBzdWIuY29udHJvbGxlciA9IGZhbHNlOyB9KTsgfVxufSIsImltcG9ydCBcIi4vcG9wLXVwLXN0eWxpbmcuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwIHtcbiAgICAvKipcbiAgICAgKiBQb3AtVXAgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBTZXZlcmFsIENvbXBvbmVudHMgdG8gdGhlIEdhbWUgcmVxdWlyZSBhIFBvcC1VcCBCb3gsIGFuZCB0aGlzIENsYXNzIFxuICAgICAqIFJlcHJlc2VudHMgdGhhdCBCb3guXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBmb3IgUG9wLVVwXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgLy8gQnVpbGQgUG9wLVVwIENvbnRhaW5lciBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChgJHtuYW1lLnRvTG93ZXJDYXNlKCl9LWNvbnRhaW5lcmApO1xuICAgICAgICBcbiAgICAgICAgLy8gQnVpbGQgUG9wLVVwIEJveCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9ib3guY2xhc3NMaXN0LmFkZChgJHtuYW1lLnRvTG93ZXJDYXNlKCl9LWJveGApO1xuXG4gICAgICAgIC8vIEJ1aWxkIFRpdGxlIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fdGl0bGUuY2xhc3NMaXN0LmFkZChgJHtuYW1lLnRvTG93ZXJDYXNlKCl9LXRpdGxlYCk7XG4gICAgICAgIHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX3RpdGxlKTtcblxuICAgICAgICAvLyBCdWlsZCBCbHVycmVkIEJhY2tncm91bmQgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fYmx1cnJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2JsdXJyZWQuY2xhc3NMaXN0LmFkZChcImJsdXJyZWQtYmFja2dyb3VuZFwiKTtcblxuICAgICAgICAvLyBBcHBlbmQgQ29tcG9uZW50cyB0byBNb2R1bGVcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2JsdXJyZWQpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fYm94KTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgRGltZW5zaW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIENvbXBvbmVudHMgb2YgdGhlIFBvcC1VcCBCb3gsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSB0byBiZSBzZXQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFNjcmVlbiBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgU2NyZWVuIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gU2V0IENvbnRhaW5lciBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGBcblxuICAgICAgICAvLyBTZXQgQmx1cnJlZCBCYWNrZ291bmQgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9ibHVycmVkLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9ibHVycmVkLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG5cbiAgICAgICAgLy8gU2V0IFBvcC1VcCBCb3ggRGltZW5zaW9uc1xuICAgICAgICBjb25zdCBib3hXID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuNik7XG4gICAgICAgIGNvbnN0IGJveEggPSBNYXRoLmZsb29yKGhlaWdodCAqIDAuNik7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS53aWR0aCA9IGAke2JveFd9cHhgO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUuaGVpZ2h0ID0gYCR7Ym94SH1weGA7XG5cbiAgICAgICAgLy8gU2V0IFBvcC1VcCBCb3ggUG9zaXRpb25cbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjIpO1xuICAgICAgICBjb25zdCB0b3AgPSBNYXRoLmZsb29yKGhlaWdodCAqIDAuMik7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xuICAgIH1cbn0iLCJpbXBvcnQgUHV6emxlTW9kdWxlIGZyb20gXCIuL3B1enpsZS1tb2R1bGUuanNcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi4vLi4vZGF0YS1zdHJ1Y3R1cmVzL2dyYXBoLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtuaWdodHNUb3VyIGV4dGVuZHMgUHV6emxlTW9kdWxlIHtcbiAgICAvKipcbiAgICAgKiBLbmlnaHQncyBUb3VyIFB1enpsZVxuICAgICAqIFxuICAgICAqIFV0aWxpc2luZyBXYXJuc2RvcmZmJ3MgQWxnb3JpdGhtLCB0aGlzIFB1enpsZSBDbGFzcyBkb2VzIG5vdCBmaW5kIGEgZ29hbFxuICAgICAqIHZlcnRleCB0aGF0IHRoZSBVc2VyIG11c3QgbmF2aWdhdGUgdG8sIGJ1dCBpbnN0ZWFkLCB0aGUgVXNlciBtdXN0IG5hdmlnYXRlXG4gICAgICogYXJvdW5kIHRoZSBDaGVzc2JvYXJkLCBleHBsb3JpbmcgZXZlcnkgc2luZ2xlIHRpbGUgZXhhY3RseSBvbmNlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEluaXRpYWwgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IEluaXRpYWwgWS1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIENoZXNzYm9hcmQgU2l6ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5LCBzaXplKSB7XG4gICAgICAgIHN1cGVyKHgsIHksIHNpemUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1enpsZSBUaXRsZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBUaXRsZSBvZiB0aGUgUHV6emxlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFB1enpsZSBUaXRsZVxuICAgICAqL1xuICAgIHB1enpsZVRpdGxlICgpIHsgcmV0dXJuIFwiS25pZ2h0J3MgVG91clwiOyB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHV6emxlIEluZm9ybWF0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1lc3NhZ2UgYWJvdXQgdGhlIFB1enpsZXMgSW5mb3JtYXRpb24uXG4gICAgICogXG4gICAgICogQHJldHVybnMgUHV6emxlIEluZm9ybWF0aW9uXG4gICAgICovXG4gICAgcHV6emxlSW5mbyAoKSB7IFxuICAgICAgICByZXR1cm4gXCJHaXZlbiB0aGUgOCBieSA4IGJvYXJkLCB1c2UgdGhlIFNlbGVjdCBcIiArXG4gICAgICAgICAgICBcIkJ1dHRvbiB0byBjaG9vc2UgeW91ciBJbml0aWFsIFRpbGUuIFRoZW4geW91IFwiICtcbiAgICAgICAgICAgIFwid2lsbCBuZWVkIHRvIG1vdmUgdGhlIEtuaWdodCwgYWNjb3JkaW5nIHRvIHRoZSBcIiArXG4gICAgICAgICAgICBcInJ1bGVzIG9mIGNoZXNzLCBzdWNoIHRoYXQgaXQgdmlzaXRzIGV2ZXJ5IHRpbGUgXCIgK1xuICAgICAgICAgICAgXCJvbiB0aGUgY2hlc3Nib2FyZCBleGFjdGx5IG9uY2UuXFxuQnkgY2xpY2tpbmcgXCIgK1xuICAgICAgICAgICAgXCJ0aGUgU2VsZWN0IGJ1dHRvbiBhZ2FpbiwgdGhlIGtuaWdodCB3aWxsIGF1dG9tYXRpY2FsbHkgXCIgK1xuICAgICAgICAgICAgXCJtb3ZlIGFuZCB2aXNpdCBlYWNoIHRpbGUgZXhhY3RseSBvbmNlLlxcblwiICtcbiAgICAgICAgICAgIFwiVG8gcmVzZXQsIHByZXNzIHN0YXJ0IGFuZCBzZWxlY3QgdGhlIFNob3J0ZXN0IFBhdGggcHV6emxlLlwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuZCBvZiBQdXp6bGUgSW5mb3JtYXRpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogV2hlbiB0aGUgUHV6emxlIGhhcyBiZWVuIGNvbXBsZXRlZCwgZWl0aGVyIGJ5IHRoZSBVc2VyIG9yIGJ5IHRoZSBBbGdvcml0aG0sIFxuICAgICAqIHRoZW4gYSBtZXNzYWdlIHNob3VsZCBiZSBwcmVzZW50ZWQgdG8gdGhlIFVzZXIgYWJvdXQgaG93IHdlbGwgdGhlIHB1enpsZSBcbiAgICAgKiB3YXMgY29tcGxldGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaHVtYW4gSHVtYW4gb3IgQWxnb3JpdGhtXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBzIE51bWJlciBvZiBTdGVwcyB0byBDb21wbGV0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGggUGF0aCB0YWtlblxuICAgICAqIEByZXR1cm5zIEVuZCBvZiBQdXp6bGUgSW5mb3JhbXRpb25cbiAgICAgKi9cbiAgICBlbmRJbmZvIChodW1hbiwgc3RlcHMsIHBhdGgpIHsgXG4gICAgICAgIC8vIFRvZ2dsZSBHZW5lcmF0ZWRcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgTWFpbiBNZXNzYWdlXG4gICAgICAgIGxldCBtc2cgPSBodW1hbiA/IFxuICAgICAgICAgICAgYENvbmdyYXR1bGF0aW9ucyEgWW91IGNvbXBsZXRlZCB0aGUgcHV6emxlIGAgK1xuICAgICAgICAgICAgYGluICR7c3RlcHN9IHN0ZXBzIVxcblRoZSBBbGdvcml0aG0ncyBiZXN0IGAgK1xuICAgICAgICAgICAgYHdhcyAke3RoaXMuX2FsZ29yaXRobV9wYXRoLmxlbmd0aH0gc3RlcHMuYCA6IFxuICAgICAgICAgICAgYFdhcm5zZG9yZmYncyBBbGdvcml0aG0gZm91bmQgYSBwYXRoIGluIGAgK1xuICAgICAgICAgICAgYCR7c3RlcHN9IHN0ZXBzLmA7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIG1zZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEtuaWdodCdzIFRvdXIgUHV6emxlLCBXYXJuc2RvcmZmJ3MgQWxnb3JpdGhtIGlzIGltcGxlbWVudGVkIHRvIFxuICAgICAqIGZpbmQgYSBmdWxsIHRvdXIgb2YgdGhlIENoZXNzYm9hcmQsIHRoZSBhbGdvcml0aG0gY2FuIGJlIGJyb2tlbiBkb3duIFxuICAgICAqIHVzaW5nIFdhcm5zZG9yZmYncyBSdWxlOlxuICAgICAqICAxLiBTdGFydCBmcm9tIGFueSBpbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBLbmlnaHQgb24gdGhlIGJvYXJkLlxuICAgICAqICAyLiBBbHdheXMgbW92ZSB0byBhbiBhZGphY2VudCwgdW52aXNpdGVkIHRpbGUgd2l0aCBtaW5pbWFsIGRlZ3JlZSAoaS5lLlxuICAgICAqICAgICBtaW5pbXVtIG51bWJlciBvZiB1bnZpc2l0ZWQgYWRqYWNlbnQgdGlsZXMpLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFJvb3QgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFJvb3QgWS1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7R3JhcGh9IGdyYXBoIEdyYXBoIG9mIENoZXNzYm9hcmRcbiAgICAgKi9cbiAgICBnZW5lcmF0ZSAoeCwgeSwgZ3JhcGgpIHtcbiAgICAgICAgLy8gR2V0IFJvb3QgVmVydGV4XG4gICAgICAgIGNvbnN0IHJvb3QgPSBncmFwaC5nZXRWZXJ0ZXgoeCwgeSk7XG5cbiAgICAgICAgLy8gU2V0IEFsbCBWZXJ0aWNlcyBNb3ZlIHRvIGJlIDBcbiAgICAgICAgZm9yIChsZXQgdiBvZiBncmFwaC52ZXJ0aWNlcygpKSB7XG4gICAgICAgICAgICB2Lm1vdmUgPSAwO1xuICAgICAgICAgICAgdi52aXNpdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgUm9vdCB0byBiZSAxc3QgTW92ZVxuICAgICAgICByb290Lm1vdmUgPSAxO1xuICAgICAgICByb290LnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIEJ1aWxkIFJldmVyc2UgUGF0aFxuICAgICAgICBsZXQgYmFja3dhcmRzID0gW3Jvb3RdO1xuXG4gICAgICAgIC8vIFNldHVwIFZlcnRleCB0byBDeWNsZSB0aHJvdWdoIFZlcnRpY2VzXG4gICAgICAgIGxldCBsYXN0ID0gcm9vdC5tb3ZlO1xuICAgICAgICBsZXQgYXV4ID0gcm9vdDtcbiAgICAgICAgd2hpbGUgKGF1eC5tb3ZlICE9PSBNYXRoLnBvdyh0aGlzLl9zaXplLCAyKSkge1xuICAgICAgICAgICAgLy8gRmluZCBOZWlnaGJvdXIgd2l0aCBGZXdlc3QgTmVpZ2JvdXJzXG4gICAgICAgICAgICBsZXQgbWluID0gMTAwMDAwMDtcbiAgICAgICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXV4Lm5laWdoYm91cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gTmVpZ2hib3VyXG4gICAgICAgICAgICAgICAgbGV0IG5laWdoYm91ciA9IGdyYXBoLmdldFZlcnRleChcbiAgICAgICAgICAgICAgICAgICAgYXV4Lm5laWdoYm91cnNbaV0ueCwgXG4gICAgICAgICAgICAgICAgICAgIGF1eC5uZWlnaGJvdXJzW2ldLnlcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gQ291bnQgTnVtYmVyIG9mIFVudmlzaXRlZCBOZWlnaGJvdXJzXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuIG9mIG5laWdoYm91ci5uZWlnaGJvdXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbi52aXNpdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gTGVhc3QgQWNjZXNzaWJsZSBOZWlnaGJvdXRcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPCBtaW4gJiYgIW5laWdoYm91ci52aXNpdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNvdW50O1xuICAgICAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IExlYXN0IEFjY2Vzc2libGUgVmVydGV4IHRvIGJlIE5leHQgTW92ZVxuICAgICAgICAgICAgYXV4ID0gYXV4Lm5laWdoYm91cnNbaWR4XTtcbiAgICAgICAgICAgIGF1eC52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGF1eC5tb3ZlID0gbGFzdCArIDE7XG4gICAgICAgICAgICBsYXN0ID0gYXV4Lm1vdmU7XG4gICAgICAgICAgICBiYWNrd2FyZHMucHVzaChhdXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV2ZXJzZSBCYWNrd2FyZHMgUGF0aFxuICAgICAgICB3aGlsZSAoYmFja3dhcmRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB0aGlzLl9hbGdvcml0aG1fcGF0aC5wdXNoKGJhY2t3YXJkcy5wb3AoKSk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIEdlbmVyYXRlZFxuICAgICAgICB0aGlzLl9nZW5lcmF0ZWQgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgR3JhcGggZnJvbSBcIi4uLy4uL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXp6bGVNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIFB1enpsZSBNb2R1bGVcbiAgICAgKiBcbiAgICAgKiBCYXNlIENsYXNzIGZvciB0aGUgU2hvcnRlc3QgUGF0aCBhbmQgS25pZ2h0J3MgVG91ciBQdXp6bGVzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEluaXRpYWwgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IEluaXRpYWwgWS1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFNpemUgb2YgQm9hcmRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSwgc2l6ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlcztcbiAgICAgICAgdGhpcy5fcm9vdCA9IHt4OiB4LCB5OiB5fTtcbiAgICAgICAgdGhpcy5fc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuX3N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3VzZXJfcGF0aCA9IFtdO1xuICAgICAgICB0aGlzLl9hbGdvcml0aG1fcGF0aCA9IFtdO1xuICAgIH1cblxuICAgIGdldCByb290ICgpIHsgcmV0dXJuIHRoaXMuX3Jvb3Q7IH1cblxuICAgIHNldCByb290IChkaWN0KSB7IHRoaXMuX3Jvb3QgPSBkaWN0OyB9XG5cbiAgICBnZXQgc3RhcnRlZCAoKSB7IHJldHVybiB0aGlzLl9zdGFydGVkOyB9XG5cbiAgICBzZXQgc3RhcnRlZCAoYm9vbCkgeyB0aGlzLl9zdGFydGVkID0gYm9vbDsgfVxuICAgIFxuICAgIGdldCBnZW5lcmF0ZWQgKCkgeyByZXR1cm4gdGhpcy5fZ2VuZXJhdGVkOyB9XG5cbiAgICBzZXQgZ2VuZXJhdGVkIChib29sKSB7IHRoaXMuX2dlbmVyYXRlZCA9IGJvb2w7IH1cbiAgICBcbiAgICBnZXQgdXNlciAoKSB7IHJldHVybiB0aGlzLl91c2VyX3BhdGg7IH1cblxuICAgIHNldCB1c2VyIChhcnIpIHsgdGhpcy5fdXNlcl9wYXRoID0gYXJyOyB9XG5cbiAgICBnZXQgYWxnb3JpdGhtICgpIHsgcmV0dXJuIHRoaXMuX2FsZ29yaXRobV9wYXRoOyB9XG5cbiAgICBzZXQgYWxnb3JpdGhtIChhcnIpIHsgdGhpcy5fYWxnb3JpdGhtX3BhdGggPSBhcnI7IH1cblxuICAgIC8qKlxuICAgICAqIFB1enpsZSBUaXRsZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBUaXRsZSBvZiB0aGUgUHV6emxlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFB1enpsZSBUaXRsZVxuICAgICAqL1xuICAgIHB1enpsZVRpdGxlICgpIHsgcmV0dXJuIFwiXCI7IH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdXp6bGUgSW5mb3JtYXRpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogTWVzc2FnZSBhYm91dCB0aGUgUHV6emxlcyBJbmZvcm1hdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBQdXp6bGUgSW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBwdXp6bGVJbmZvICgpIHsgcmV0dXJuIFwiXCI7IH1cblxuICAgIC8qKlxuICAgICAqIEVuZCBvZiBQdXp6bGUgSW5mb3JtYXRpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogV2hlbiB0aGUgUHV6emxlIGhhcyBiZWVuIGNvbXBsZXRlZCwgZWl0aGVyIGJ5IHRoZSBVc2VyIG9yIGJ5IHRoZSBBbGdvcml0aG0sIFxuICAgICAqIHRoZW4gYSBtZXNzYWdlIHNob3VsZCBiZSBwcmVzZW50ZWQgdG8gdGhlIFVzZXIgYWJvdXQgaG93IHdlbGwgdGhlIHB1enpsZSBcbiAgICAgKiB3YXMgY29tcGxldGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaHVtYW4gSHVtYW4gb3IgQWxnb3JpdGhtXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBzIE51bWJlciBvZiBTdGVwcyB0byBDb21wbGV0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGggUGF0aCB0YWtlblxuICAgICAqIEByZXR1cm5zIEVuZCBvZiBQdXp6bGUgSW5mb3JhbXRpb25cbiAgICAgKi9cbiAgICBlbmRJbmZvIChodW1hbiwgc3RlcHMsIHBhdGgpIHsgcmV0dXJuIFwiXCI7IH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgZ2l2ZW4gUHV6emxlIFR5cGUsIHRoZSBBbGdvcml0aG0gdXNlZCBmb3Igc29sdmluZyB0aGUgUHV6emxlIHdpbGwgXG4gICAgICogYmUgaW1wbGVtZW50ZWQgdG8gY3JlYXRlIHRoZSBQYXRoIHJlcXVpcmVkIGZvciB0aGUgS25pZ2h0IHRvIGNvbXBsZXRlIHRoZSBcbiAgICAgKiBQdXp6bGUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggUm9vdCBYLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgUm9vdCBZLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtHcmFwaH0gZ3JhcGggR3JhcGggb2YgQ2hlc3Nib2FyZFxuICAgICAqL1xuICAgIGdlbmVyYXRlICh4LCB5LCBncmFwaCkge31cbn0iLCJpbXBvcnQgUHV6emxlTW9kdWxlIGZyb20gXCIuL3B1enpsZS1tb2R1bGUuanNcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi4vLi4vZGF0YS1zdHJ1Y3R1cmVzL2dyYXBoLmpzXCI7XG5pbXBvcnQgUXVldWUgZnJvbSBcIi4uLy4uL2RhdGEtc3RydWN0dXJlcy9xdWV1ZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9ydGVzdFBhdGggZXh0ZW5kcyBQdXp6bGVNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIFNob3J0ZXN0IFBhdGggUHV6emxlXG4gICAgICogXG4gICAgICogVXRpbGlzaW5nIGEgbW9kaWZpZWQgQnJlYWR0aC1GaXJzdCBTZWFyY2ggQWxnb3JpdGhtLCB0aGlzIHB1enpsZSB3aWxsXG4gICAgICogaW5pdGlhbGx5IHJhbmRvbWx5IGdlbmVyYXRlIGEgR29hbCBQb3NpdGlvbiB3aGVyZSB0aGUgVXNlciBtdXN0IGF0dGVtcHRcbiAgICAgKiB0byBmaW5kIHRoZSBTaG9ydGVzdCBQYXRoIHRvLCBvciB1c2UgdGhlIEFsZ29yaXRobSdzIEdlbmVyYXRlZCBTaG9ydGVzdFxuICAgICAqIFBhdGggdG8gdGhlIEdvYWwgUG9zaXRpb24uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggSW5pdGlhbCBYLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgSW5pdGlhbCBZLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgQ2hlc3Nib2FyZCBTaXplXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHksIHNpemUpIHsgc3VwZXIoeCwgeSwgc2l6ZSk7IH1cblxuICAgIGdldCBnb2FsICgpIHsgcmV0dXJuIHRoaXMuX2dvYWw7IH1cblxuICAgIHNldCBnb2FsIChkaWN0KSB7IHRoaXMuX2dvYWwgPSBkaWN0OyB9XG5cbiAgICAvKipcbiAgICAgKiBQdXp6bGUgVGl0bGUgTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgVGl0bGUgb2YgdGhlIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBQdXp6bGUgVGl0bGVcbiAgICAgKi9cbiAgICBwdXp6bGVUaXRsZSAoKSB7IHJldHVybiBcIlNob3J0ZXN0IFBhdGhcIjsgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1enpsZSBJbmZvcm1hdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNZXNzYWdlIGFib3V0IHRoZSBQdXp6bGVzIEluZm9ybWF0aW9uLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFB1enpsZSBJbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHB1enpsZUluZm8gKCkgeyBcbiAgICAgICAgcmV0dXJuIFwiVXNlIHRoZSBTZWxlY3QgQnV0dG9uIHRvIGNob29zZSB5b3VyIFwiICtcbiAgICAgICAgICAgIFwiaW5pdGlhbCBUaWxlLiBPbmNlIHNlbGVjdGVkLCBhIEdvYWwgdGlsZSB3aWxsIFwiICtcbiAgICAgICAgICAgIFwiYmVjb21lIGhpZ2hsaWdodGVkLCBhbmQgeW91IGhhdmUgdG8gdHJ5IHRvIHJlYWNoIFwiICtcbiAgICAgICAgICAgIFwidGhhdCB0aWxlIGluIGFzIGZldyBtb3ZlcyBhcyBwb3NzaWJsZS5cXG5CeSBjbGlja2luZyBcIiArXG4gICAgICAgICAgICBcInRoZSBTZWxlY3QgYnV0dG9uIGFnYWluLCB0aGUga25pZ2h0IHdpbGwgYXV0b21hdGljYWxseSBcIiArXG4gICAgICAgICAgICBcIm1vdmUgdG8gdGhlIEdvYWwgdGlsZSBpbiB0aGUgZmV3ZXN0IHBvc3NpYmxlIG1vdmVzLlxcblwiICtcbiAgICAgICAgICAgIFwiVG8gcmVzZXQsIHByZXNzIHN0YXJ0IGFuZCBzZWxlY3QgdGhlIFNob3J0ZXN0IFBhdGggcHV6emxlLlwiOyBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmQgb2YgUHV6emxlIEluZm9ybWF0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIFB1enpsZSBoYXMgYmVlbiBjb21wbGV0ZWQsIGVpdGhlciBieSB0aGUgVXNlciBvciBieSB0aGUgQWxnb3JpdGhtLCBcbiAgICAgKiB0aGVuIGEgbWVzc2FnZSBzaG91bGQgYmUgcHJlc2VudGVkIHRvIHRoZSBVc2VyIGFib3V0IGhvdyB3ZWxsIHRoZSBwdXp6bGUgXG4gICAgICogd2FzIGNvbXBsZXRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGh1bWFuIEh1bWFuIG9yIEFsZ29yaXRobVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGVwcyBOdW1iZXIgb2YgU3RlcHMgdG8gQ29tcGxldGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoIFBhdGggdGFrZW5cbiAgICAgKiBAcmV0dXJucyBFbmQgb2YgUHV6emxlIEluZm9yYW10aW9uXG4gICAgICovXG4gICAgZW5kSW5mbyAoaHVtYW4sIHN0ZXBzLCBwYXRoKSB7IFxuICAgICAgICAvLyBUb2dnbGUgR2VuZXJhdGVkXG4gICAgICAgIHRoaXMuX2dlbmVyYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIE1haW4gTWVzc2FnZVxuICAgICAgICBsZXQgbXNnID0gaHVtYW4gPyBcbiAgICAgICAgICAgIGBDb25ncmF0dWxhdGlvbnMhIFlvdSBjb21wbGV0ZWQgdGhlIHB1enpsZSBgICtcbiAgICAgICAgICAgIGBpbiAke3N0ZXBzfSBzdGVwcyFcXG5UaGUgQWxnb3JpdGhtJ3MgYmVzdCBgICtcbiAgICAgICAgICAgIGB3YXMgJHt0aGlzLl9hbGdvcml0aG1fcGF0aC5sZW5ndGh9IHN0ZXBzLlxcbmAgK1xuICAgICAgICAgICAgYEhlcmUncyB5b3VyIHBhdGg6XFxuYCA6IFxuICAgICAgICAgICAgYFRoZSBCcmVhZHRoLUZpcnN0IFNlYXJjaCBBbGdvcml0aG0gZm91bmQgYSBgICtcbiAgICAgICAgICAgIGBwYXRoIGluICR7c3RlcHN9IHN0ZXBzLlxcbkhlcmUncyBpdHMgcGF0aDpcXG5gO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIFBhdGggdGFrZW4gdG8gTWVzc2FnZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1zZyArPSBgKCR7cGF0aFtpXS55fSwgJHtwYXRoW2ldLnh9KWA7XG4gICAgICAgICAgICBpZiAoaSA8IHBhdGgubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBtc2cgKz0gXCI9PlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtc2c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBTaG9ydGVzdCBQYXRoIFB1enpsZSwgYSBtb2RpZmllZCB2ZXJzaW9uIG9mIHRoZSBCcmVhZHRoLUZpcnN0IFxuICAgICAqIFNlYXJjaCBBbGdvcml0aG0gaXMgdXRpbGlzZWQgZm9yIGZpbmRpbmcgdGhlIHNob3J0ZXN0IHBhdGggZnJvbSB0aGUgUm9vdCBcbiAgICAgKiBWZXJ0ZXggdG8gdGhlIEdvYWwgVmVydGV4LCB0aGUgbGF0dGVyIG9mIHdoaWNoIGlzIHJhbmRvbWx5IGdlbmVyYXRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBSb290IFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBSb290IFktUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge0dyYXBofSBncmFwaCBHcmFwaCBvZiBDaGVzc2JvYXJkXG4gICAgICovXG4gICAgZ2VuZXJhdGUgKHgsIHksIGdyYXBoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgUm9vdCAmIEdvYWwgVmVydGV4XG4gICAgICAgIHRoaXMuX3Jvb3QgPSB7eDogeCwgeTogeX07XG4gICAgICAgIHRoaXMuX2dvYWwgPSB7eDogMCwgeTogMH07XG5cbiAgICAgICAgLy8gRW5zdXJlIEdvYWwgaXMgbm90IHRoZSBSb290IFZlcnRleFxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgLy8gR2VuZXJhdGUgUmFuZG9tIE51bWJlcnMgZm9yIEJvdGggQ29vcmRpbmF0ZXNcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2dvYWwpLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2dvYWxbY29vcmRdID0gdGhpcy4jcmFuZG9tKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVqZWN0IFBvc2l0aW9ucyB0aGF0IGFyZSBSb290XG4gICAgICAgICAgICBpZiAodGhpcy5fZ29hbC54ICE9PSB4ICYmIHRoaXMuX2dvYWwueSAhPT0geSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBHcmFwaCBzbyBBbGwgVmVydGljZXMgYXJlIFVudmlzaXRlZFxuICAgICAgICBmb3IgKGxldCB2IG9mIGdyYXBoLnZlcnRpY2VzKCkpXG4gICAgICAgICAgICB2LnZpc2l0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTZXR1cCBSb290IGFuZCBHb2FsIFZlcnRleCBWYXJpYWJsZXNcbiAgICAgICAgY29uc3Qgcm9vdCA9IGdyYXBoLmdldFZlcnRleCh4LCB5KTtcbiAgICAgICAgY29uc3QgZ29hbCA9IGdyYXBoLmdldFZlcnRleCh0aGlzLl9nb2FsLngsIHRoaXMuX2dvYWwueSk7XG4gICAgICAgIHJvb3QudmlzaXRlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gU2V0dXAgUGFyZW50cyBBcnJheSBhbmQgUXVldWVcbiAgICAgICAgbGV0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgY29uc3QgcXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICAgICAgcXVldWUuZW5xdWV1ZShyb290KTtcblxuICAgICAgICAvLyBWaXNpdCBBbGwgTmVpZ2hib3Vyc1xuICAgICAgICB3aGlsZSAoIXF1ZXVlLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgbGV0IHZlcnRleCA9IHF1ZXVlLmRlcXVldWUoKTtcblxuICAgICAgICAgICAgLy8gQnJlYWsgb3V0IGlmIEdvYWwgaXMgRm91bmRcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXguc2FtZVZlcnRleChnb2FsKSlcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIEVucXVldWUgTmVpZ2hib3Vyc1xuICAgICAgICAgICAgdmVydGV4Lm5laWdoYm91cnMuZm9yRWFjaChuZWlnaGJvdXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghbmVpZ2hib3VyLnZpc2l0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3VyLnZpc2l0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFB1c2ggUGFyZW50IGludG8gQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKHt2ZXJ0ZXg6IG5laWdoYm91ciwgcGFyZW50OiB2ZXJ0ZXh9KTtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUuZW5xdWV1ZShuZWlnaGJvdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgU2hvcnRlc3QgUGF0aFxuICAgICAgICB0aGlzLl9hbGdvcml0aG1fcGF0aC5wdXNoKGdvYWwpO1xuICAgICAgICBsZXQgY3VycmVudCA9IGdvYWw7XG5cbiAgICAgICAgLy8gR2V0IFByZXZpb3VzIFZlcnRpY2VzXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAvLyBTZWFyY2ggUGFyZW50cyBmb3IgUHJldmlvdXMgVmVydGljZXNcbiAgICAgICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRzW2ldLnZlcnRleC5zYW1lVmVydGV4KGN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIFBhcmVudCB0byBQYXRoXG4gICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50c1tpZHhdLnBhcmVudDtcblxuICAgICAgICAgICAgLy8gQnJlYWsgb3V0IGlmIFJvb3QgRm91bmRcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnNhbWVWZXJ0ZXgocm9vdCkpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgdG8gUGF0aFxuICAgICAgICAgICAgdGhpcy5fYWxnb3JpdGhtX3BhdGgucHVzaChjdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvZ2dsZSBHZW5lcmF0ZWRcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSYW5kb20gTWV0aG9kXG4gICAgICogXG4gICAgICogR2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIHRoZSBzaXplIG9mIHRoZSBDaGVzc2JvYXJkLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFJhbmRvbSBOdW1iZXIgYmV0d2VlbiAwIGFuZCBCb2FyZCBTaXplXG4gICAgICovXG4gICAgI3JhbmRvbSAoKSB7IHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9zaXplKTsgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==