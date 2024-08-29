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
        console.log(dimensions);
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
        const boxW = Math.floor(width * 0.9);
        const boxH = Math.floor(height * 0.9);
        this._box.style.width = `${boxW}px`;
        this._box.style.height = `${boxH}px`;

        // Set Pop-Up Box Position
        const left = Math.floor(width * 0.1);
        const top = Math.floor(height * 0.1);
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
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDclNnQzs7QUFFakIsdUJBQXVCLGtEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGlFQUFLO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0Msa0NBQWtDO0FBQ3BFO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9ib2FyZC1tb2R1bGUvYm9hcmQtc3R5bGluZy5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvZ2FtZS1zdHlsaW5nLmNzcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9wb3AtdXAtc3R5bGluZy5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS9ib2FyZC1zdHlsaW5nLmNzcz8xNzI0Iiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2dhbWUtc3R5bGluZy5jc3M/ZDM0MiIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9wb3AtdXAtc3R5bGluZy5jc3M/NTQyOCIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9lZGdlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2RhdGEtc3RydWN0dXJlcy9ncmFwaC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9kYXRhLXN0cnVjdHVyZXMvcXVldWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZGF0YS1zdHJ1Y3R1cmVzL3ZlcnRleC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2dhbWUtaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS9ib2FyZC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9ib2FyZC1tb2R1bGUva25pZ2h0LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS90aWxlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL2tuaWdodHMtZ2FtZS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9lcnJvci1ib3guanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvbWFpbi1tb2R1bGUvaW5mby1ib3guanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvbWFpbi1tb2R1bGUva25pZ2h0cy1tYW5hZ2VyLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL21haW4tbW9kdWxlL21lbnUtYmFzZS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9tYWluLW1vZHVsZS9tZW51LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2tuaWdodHMtbW9kdWxlL21haW4tbW9kdWxlL3BvcC11cC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9wdXp6bGVzL2tuaWdodHMtdG91ci5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9rbmlnaHRzLW1vZHVsZS9wdXp6bGVzL3B1enpsZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMva25pZ2h0cy1tb2R1bGUvcHV6emxlcy9zaG9ydGVzdC1wYXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY2hlc3Nib2FyZCB7IFxuICAgIGZvbnQtZmFtaWx5OiBcIkdvdGhpY2FcIjtcbiAgICBkaXNwbGF5OiBncmlkOyBcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1udW0tY29sb3VyKTtcbn1cblxuW2NsYXNzKj1cIi10aWxlXCJdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHZhcigtLW51bS1jb2xvdXIpO1xufVxuXG5bY2xhc3MqPVwiLXRpbGVcIl0gPiAua25pZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjtcbn1cblxuI2N1cnNvci10aWxlIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGFuaW1hdGlvbjogYmxpbmsgMS41cyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uYmxhY2stdGlsZSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTsgfVxuXG4uYmxhY2stdGlsZS5zZWxlY3RlZCB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLXNlbGVjdGVkKTsgfVxuXG4ud2hpdGUtdGlsZSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxuXG4ud2hpdGUtdGlsZS5zZWxlY3RlZCB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLXNlbGVjdGVkKTsgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2tuaWdodHMtbW9kdWxlL2JvYXJkLW1vZHVsZS9ib2FyZC1zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7QUFDZDs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCw4QkFBOEI7SUFDOUIseUJBQXlCO0FBQzdCOztBQUVBLGNBQWMsOEJBQThCLEVBQUU7O0FBRTlDLHVCQUF1Qix1Q0FBdUMsRUFBRTs7QUFFaEUsY0FBYyw4QkFBOEIsRUFBRTs7QUFFOUMsdUJBQXVCLHVDQUF1QyxFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jaGVzc2JvYXJkIHsgXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiR290aGljYVxcXCI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1udW0tY29sb3VyKTtcXG59XFxuXFxuW2NsYXNzKj1cXFwiLXRpbGVcXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6IHZhcigtLW51bS1jb2xvdXIpO1xcbn1cXG5cXG5bY2xhc3MqPVxcXCItdGlsZVxcXCJdID4gLmtuaWdodCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jY3Vyc29yLXRpbGUgeyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTsgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBhbmltYXRpb246IGJsaW5rIDEuNXMgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5ibGFjay10aWxlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spOyB9XFxuXFxuLmJsYWNrLXRpbGUuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1zZWxlY3RlZCk7IH1cXG5cXG4ud2hpdGUtdGlsZSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTsgfVxcblxcbi53aGl0ZS10aWxlLnNlbGVjdGVkIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtc2VsZWN0ZWQpOyB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Hb3RoaWNhLUJvb2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvZG9naWNhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2RvZ2ljYWJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXdoaXRlOiAjZmRmZmZjO1xuICAgIC0tYmxhY2s6ICMwMjAxMDA7XG59XG5cbjpyb290Lm5vcm1hbCB7XG4gICAgLS13aGl0ZS1zZWxlY3RlZDogIzg3ZDNlZDtcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiAjMjI3N2E5O1xuICAgIC0tc2NyZWVuOiAjMjM1Nzg5O1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjZjY5NDkzO1xuICAgIC0tY3Vyc29yOiAjZThjNTQ3O1xuICAgIC0tbnVtLWNvbG91cjogI2U1YjgwYjtcbiAgICAtLXRleHQtY29sb3VyOiAjMDIwMTAwO1xufVxuXG46cm9vdC5yZXRybyB7XG4gICAgLS13aGl0ZTogI2FhYWFhYTtcbiAgICAtLWJsYWNrOiAjMGYzODBmO1xuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICM5YmJjMGY7XG4gICAgLS1ibGFjay1zZWxlY3RlZDogIzMwNjIzMDtcbiAgICAtLXNjcmVlbjogI2FhYWFhYTtcbiAgICAtLWVycm9yLXNjcmVlbjogI2Y2OTQ5MztcbiAgICAtLWN1cnNvcjogIzhiYWMwZjtcbiAgICAtLW51bS1jb2xvdXI6ICNhYWFhYWE7XG4gICAgLS10ZXh0LWNvbG91cjogIzBmMzgwZjtcbn1cblxuOnJvb3QuZnV0dXJlIHtcbiAgICAtLXdoaXRlOiAjZDFlOGUyO1xuICAgIC0tYmxhY2s6ICMyYzM1MzE7XG4gICAgLS13aGl0ZS1zZWxlY3RlZDogI2ZmY2I5YTsgXG4gICAgLS1ibGFjay1zZWxlY3Q6ICNiZDVlMjc7XG4gICAgLS1zY3JlZW46ICMxMTY0NjY7XG4gICAgLS1lcnJvci1zY3JlZW46ICNmZjk5MDA7XG4gICAgLS1jdXJzb3I6ICNmZmNiOWE7XG4gICAgLS1udW0tY29sb3VyOiAjMTE2NDY2O1xuICAgIC0tdGV4dC1jb2xvdXI6ICMyYzM1MzE7XG59XG5cbjpyb290Lm5lb24ge1xuICAgIC0td2hpdGU6ICMwYWJkYzY7XG4gICAgLS1ibGFjazogIzEzM2U3YztcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjMDA3OTdlOyBcbiAgICAtLWJsYWNrLXNlbGVjdDogIzMwN2NiZjtcbiAgICAtLXNjcmVlbjogIzA5MTgzMztcbiAgICAtLWVycm9yLXNjcmVlbjogI2U3ZWU0ZjtcbiAgICAtLWN1cnNvcjogI2VhMDBkOTtcbiAgICAtLW51bS1jb2xvdXI6ICM3MTFjOTE7XG4gICAgLS10ZXh0LWNvbG91cjogI2VhMDBkOTtcbn1cblxuOnJvb3QudGVybWluYWwge1xuICAgIC0td2hpdGU6IGN5YW47XG4gICAgLS1ibGFjazogYmxhY2s7XG4gICAgLS1ibGFjay1zZWxlY3RlZDogYmxhY2s7XG4gICAgLS13aGl0ZS1zZWxlY3RlZDogY3lhbjtcbiAgICAtLXNjcmVlbjogYmxhY2s7XG4gICAgLS1lcnJvci1zY3JlZW46IGJsdWU7XG4gICAgLS1jdXJzb3I6IGdyZWVuO1xuICAgIC0tbnVtLWNvbG91cjogZ3JlZW47XG4gICAgLS10ZXh0LWNvbG91cjogZ3JlZW47XG59XG5cbjpyb290LmZhbnRhc3kge1xuICAgIC0td2hpdGU6ICNlNDkzNGM7XG4gICAgLS1ibGFjazogIzU0MmIyOTtcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjZjFiODcyOyBcbiAgICAtLWJsYWNrLXNlbGVjdDogIzQzMWUxZjtcbiAgICAtLXNjcmVlbjogIzlhOWE4ZTtcbiAgICAtLWVycm9yLXNjcmVlbjogIzk2MDAxODtcbiAgICAtLWN1cnNvcjogIzljNmI2NTtcbiAgICAtLW51bS1jb2xvdXI6ICM3YzE0MmM7XG4gICAgLS10ZXh0LWNvbG91cjogIzBhMTU4Mztcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR290aGljYVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJEb2dpY2FcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhIEJvbGRcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLmtuaWdodHMtZ2FtZS1tb2R1bGUgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDUwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUge1xuICAgIDAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTsgfVxuICAgIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1cnNvcik7IH1cbiAgICAxMDAlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTsgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2tuaWdodHMtbW9kdWxlL2dhbWUtc3R5bGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBcUM7QUFDekM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQStCO0FBQ25DOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDRDQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLEtBQUssVUFBVSxFQUFFO0lBQ2pCLE1BQU0sVUFBVSxFQUFFO0lBQ2xCLE9BQU8sVUFBVSxFQUFFO0FBQ3ZCOztBQUVBO0lBQ0ksS0FBSywrQkFBK0IsRUFBRTtJQUN0QyxNQUFNLCtCQUErQixFQUFFO0lBQ3ZDLE9BQU8sK0JBQStCLEVBQUU7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXdoaXRlOiAjZmRmZmZjO1xcbiAgICAtLWJsYWNrOiAjMDIwMTAwO1xcbn1cXG5cXG46cm9vdC5ub3JtYWwge1xcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjODdkM2VkO1xcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiAjMjI3N2E5O1xcbiAgICAtLXNjcmVlbjogIzIzNTc4OTtcXG4gICAgLS1lcnJvci1zY3JlZW46ICNmNjk0OTM7XFxuICAgIC0tY3Vyc29yOiAjZThjNTQ3O1xcbiAgICAtLW51bS1jb2xvdXI6ICNlNWI4MGI7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMwMjAxMDA7XFxufVxcblxcbjpyb290LnJldHJvIHtcXG4gICAgLS13aGl0ZTogI2FhYWFhYTtcXG4gICAgLS1ibGFjazogIzBmMzgwZjtcXG4gICAgLS13aGl0ZS1zZWxlY3RlZDogIzliYmMwZjtcXG4gICAgLS1ibGFjay1zZWxlY3RlZDogIzMwNjIzMDtcXG4gICAgLS1zY3JlZW46ICNhYWFhYWE7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjZjY5NDkzO1xcbiAgICAtLWN1cnNvcjogIzhiYWMwZjtcXG4gICAgLS1udW0tY29sb3VyOiAjYWFhYWFhO1xcbiAgICAtLXRleHQtY29sb3VyOiAjMGYzODBmO1xcbn1cXG5cXG46cm9vdC5mdXR1cmUge1xcbiAgICAtLXdoaXRlOiAjZDFlOGUyO1xcbiAgICAtLWJsYWNrOiAjMmMzNTMxO1xcbiAgICAtLXdoaXRlLXNlbGVjdGVkOiAjZmZjYjlhOyBcXG4gICAgLS1ibGFjay1zZWxlY3Q6ICNiZDVlMjc7XFxuICAgIC0tc2NyZWVuOiAjMTE2NDY2O1xcbiAgICAtLWVycm9yLXNjcmVlbjogI2ZmOTkwMDtcXG4gICAgLS1jdXJzb3I6ICNmZmNiOWE7XFxuICAgIC0tbnVtLWNvbG91cjogIzExNjQ2NjtcXG4gICAgLS10ZXh0LWNvbG91cjogIzJjMzUzMTtcXG59XFxuXFxuOnJvb3QubmVvbiB7XFxuICAgIC0td2hpdGU6ICMwYWJkYzY7XFxuICAgIC0tYmxhY2s6ICMxMzNlN2M7XFxuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICMwMDc5N2U7IFxcbiAgICAtLWJsYWNrLXNlbGVjdDogIzMwN2NiZjtcXG4gICAgLS1zY3JlZW46ICMwOTE4MzM7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjZTdlZTRmO1xcbiAgICAtLWN1cnNvcjogI2VhMDBkOTtcXG4gICAgLS1udW0tY29sb3VyOiAjNzExYzkxO1xcbiAgICAtLXRleHQtY29sb3VyOiAjZWEwMGQ5O1xcbn1cXG5cXG46cm9vdC50ZXJtaW5hbCB7XFxuICAgIC0td2hpdGU6IGN5YW47XFxuICAgIC0tYmxhY2s6IGJsYWNrO1xcbiAgICAtLWJsYWNrLXNlbGVjdGVkOiBibGFjaztcXG4gICAgLS13aGl0ZS1zZWxlY3RlZDogY3lhbjtcXG4gICAgLS1zY3JlZW46IGJsYWNrO1xcbiAgICAtLWVycm9yLXNjcmVlbjogYmx1ZTtcXG4gICAgLS1jdXJzb3I6IGdyZWVuO1xcbiAgICAtLW51bS1jb2xvdXI6IGdyZWVuO1xcbiAgICAtLXRleHQtY29sb3VyOiBncmVlbjtcXG59XFxuXFxuOnJvb3QuZmFudGFzeSB7XFxuICAgIC0td2hpdGU6ICNlNDkzNGM7XFxuICAgIC0tYmxhY2s6ICM1NDJiMjk7XFxuICAgIC0td2hpdGUtc2VsZWN0ZWQ6ICNmMWI4NzI7IFxcbiAgICAtLWJsYWNrLXNlbGVjdDogIzQzMWUxZjtcXG4gICAgLS1zY3JlZW46ICM5YTlhOGU7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjOTYwMDE4O1xcbiAgICAtLWN1cnNvcjogIzljNmI2NTtcXG4gICAgLS1udW0tY29sb3VyOiAjN2MxNDJjO1xcbiAgICAtLXRleHQtY29sb3VyOiAjMGExNTgzO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHb3RoaWNhXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0dvdGhpY2EtQm9vay50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL2RvZ2ljYS50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhIEJvbGRcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvZG9naWNhYm9sZC50dGZcXFwiKTtcXG59XFxuXFxuLmtuaWdodHMtZ2FtZS1tb2R1bGUgeyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgIDUwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gICAgMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pOyB9XFxuICAgIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1cnNvcik7IH1cXG4gICAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7IH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaW5mby1jb21wb25lbnRzIHtcbiAgICBmb250LWZhbWlseTogXCJEb2dpY2FcIjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcbn1cblxuLmluZm8tY29tcG9uZW50cyA+IGRpdiB7IGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7IH1cblxuLm1lbnUtY29udGFpbmVyLFxuLmluZm9ybWF0aW9uLWNvbnRhaW5lciB7IGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiOyB9XG5cbi5tZW51LWJveCxcbi5pbmZvcm1hdGlvbi1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmluZm9ybWF0aW9uLWJveCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDAuNnJlbTsgfVxuXG4ubWVudS10aXRsZSxcbi5pbmZvcm1hdGlvbi10aXRsZSxcbi5lcnJvci10aXRsZSB7IGZvbnQtZmFtaWx5OiBcIkRvZ2ljYSBCb2xkXCI7IH1cblxuLm1lbnUtYm94ID4gZGl2LFxuLmluZm9ybWF0aW9uLWJveCA+IGRpdiB7IHRleHQtYWxpZ246IHN0YXJ0OyB9XG5cbi5tZW51LWJveCA+IGRpdi5jdXJzb3Ige1xuICAgIGFuaW1hdGlvbjogZmFkZSAxLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5lcnJvci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVycm9yLWJveCxcbi5pbmZvcm1hdGlvbi1ib3gsXG4ubWVudS1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIGJvcmRlcjogM3B4IHZhcigtLXRleHQtY29sb3VyKSBzb2xpZDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5lcnJvci1ib3gge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYSBCb2xkXCI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1zY3JlZW4pO1xufVxuXG4uYmx1cnJlZC1iYWNrZ3JvdW5kIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgICBvcGFjaXR5OiAwLjc7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMva25pZ2h0cy1tb2R1bGUvbWFpbi1tb2R1bGUvcG9wLXVwLXN0eWxpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUEseUJBQXlCLHFDQUFxQyxFQUFFOztBQUVoRTt5QkFDeUIscUJBQXFCLEVBQUU7O0FBRWhEOztJQUVJLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUEsZ0JBQWdCLGlCQUFpQixFQUFFOztBQUVuQzs7ZUFFZSwwQkFBMEIsRUFBRTs7QUFFM0M7eUJBQ3lCLGlCQUFpQixFQUFFOztBQUU1QztJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW5mby1jb21wb25lbnRzIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxufVxcblxcbi5pbmZvLWNvbXBvbmVudHMgPiBkaXYgeyBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmxhY2spOyB9XFxuXFxuLm1lbnUtY29udGFpbmVyLFxcbi5pbmZvcm1hdGlvbi1jb250YWluZXIgeyBmb250LWZhbWlseTogXFxcIkRvZ2ljYVxcXCI7IH1cXG5cXG4ubWVudS1ib3gsXFxuLmluZm9ybWF0aW9uLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uaW5mb3JtYXRpb24tYm94IHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuXFxuLmluZm8tbWVzc2FnZSB7IGZvbnQtc2l6ZTogMC42cmVtOyB9XFxuXFxuLm1lbnUtdGl0bGUsXFxuLmluZm9ybWF0aW9uLXRpdGxlLFxcbi5lcnJvci10aXRsZSB7IGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhIEJvbGRcXFwiOyB9XFxuXFxuLm1lbnUtYm94ID4gZGl2LFxcbi5pbmZvcm1hdGlvbi1ib3ggPiBkaXYgeyB0ZXh0LWFsaWduOiBzdGFydDsgfVxcblxcbi5tZW51LWJveCA+IGRpdi5jdXJzb3Ige1xcbiAgICBhbmltYXRpb246IGZhZGUgMS41cyBpbmZpbml0ZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuXFxuLmVycm9yLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmVycm9yLWJveCxcXG4uaW5mb3JtYXRpb24tYm94LFxcbi5tZW51LWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogNDtcXG4gICAgYm9yZGVyOiAzcHggdmFyKC0tdGV4dC1jb2xvdXIpIHNvbGlkO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lcnJvci1ib3gge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRvZ2ljYSBCb2xkXFxcIjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLXNjcmVlbik7XFxufVxcblxcbi5ibHVycmVkLWJhY2tncm91bmQge1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvYXJkLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQtc3R5bGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1zdHlsaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUtc3R5bGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wLXVwLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wLXVwLXN0eWxpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgICAvKipcbiAgICAgKiBFZGdlIENsYXNzXG4gICAgICogXG4gICAgICogRGF0YSBzdHJ1Y3R1cmUgdGhhdCBjb25uZWN0cyB0d28gVmVydGljZXMgb2YgdGhlIEdyYXBoIERhdGEgU3RydWN0dXJlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB1IFN0YXJ0aW5nIFZlcnRleFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2IEVuZGluZyBWZXJ0ZXhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAodSwgdikge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XG4gICAgICAgIHRoaXMudmVydGljZXMucHVzaCh1KTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHYpO1xuICAgIH1cblxuICAgIGdldCB2ZXJ0aWNlcyAoKSB7IHJldHVybiB0aGlzLl92ZXJ0aWNlczsgfVxuXG4gICAgc2V0IHZlcnRpY2VzIChhcnIpIHsgdGhpcy5fdmVydGljZXMgPSBhcnI7IH1cblxuICAgIC8qKlxuICAgICAqIFNhbWUgRWRnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIEVkZ2UgaXMgdGhlIHNhbWUgZWRnZSBhcyB0aGlzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7RWRnZX0gZSBFZGdlXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGV5IGFyZSB0aGUgU2FtZSBFZGdlXG4gICAgICovXG4gICAgc2FtZUVkZ2UgKGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBib3RoIFZlcnRpY2VzIGFyZSBJZGVudGljYWxcbiAgICAgICAgbGV0IGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIGxldCBzZWNvbmQgPSBmYWxzZTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggVmVydGljZXMgb24gRWRnZVxuICAgICAgICBlLnZlcnRpY2VzLmZvckVhY2godSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1swXS5zYW1lVmVydGV4KHUpIHx8IFxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXNbMV0uc2FtZVZlcnRleCh1KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmaXJzdClcbiAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYXMgVmVydGV4IE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiBvbmUgb2YgdGhlIFZlcnRpY2VzIHRoYXQgbWFrZXMgdXAgdGhlIEVkZ2UgY29udGFpbnMgdGhlIGRlc2lyZWQgXG4gICAgICogVmVydGV4LCBhbmQgcmV0dXJucyB0cnVlIGlmIGl0IGRvZXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgVmVydGV4XG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBFZGdlIENvbm5lY3RzIFZlcnRleFxuICAgICAqL1xuICAgIGhhc1ZlcnRleCAodikge1xuICAgICAgICAvLyBDaGVjayBCb3RoIFZlcnRpY2VzIG9uIEVkZ2VcbiAgICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCh2ZXJ0ZXggPT4ge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgVmVydGV4IGlzIGEgTWF0Y2hcbiAgICAgICAgICAgIGlmICh2LnNhbWVWZXJ0ZXgodmVydGV4KSlcbiAgICAgICAgICAgICAgICBjaGVjayA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYXMgVmVydGljZXMgTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIHRoZSBwYWlyIG9mIGdpdmVuIFZlcnRpY2VzIGFyZSBjb25uZWN0ZWQgIGJ5IHRoZSBFZGdlLCBhbmQgXG4gICAgICogcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB1IE9uZSBWZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBPdGhlciBWZXJ0ZXhcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIGJvdGggVmVydGljZXMgYXJlIGNvbm5lY3RlZCBieSBFZGdlXG4gICAgICovXG4gICAgaGFzVmVydGljZXMgKHUsIHYpIHtcbiAgICAgICAgLy8gQ2hlY2sgQm90aCBWZXJ0aWNlcyBvbiBFZGVnZVxuICAgICAgICBsZXQgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNlY29uZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2godmVydGV4ID0+IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBCb3RoIGFyZSBBY2NvdW50ZWQgRm9yXG4gICAgICAgICAgICBpZiAodS5zYW1lVmVydGV4KHZlcnRleCkpXG4gICAgICAgICAgICAgICAgZmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHYuc2FtZVZlcnRleCh2ZXJ0ZXgpKVxuICAgICAgICAgICAgICAgIHNlY29uZCA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmaXJzdCAmJiBzZWNvbmQ7XG4gICAgfVxufSIsImltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2UuanNcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIHtcbiAgICAvKipcbiAgICAgKiBHcmFwaCBDbGFzc1xuICAgICAqIFxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBHcmFwaCBEYXRhIFN0cnVjdHVyZSwgd2hpY2ggdXRpbGlzZXMgdGhlIFZlcnRleCBhbmRcbiAgICAgKiBFZGdlIENsYXNzZXMgdGhhdCBhcmUgdXNlZCB0byByZXByZXNlbnQgdGhlIGRhdGEsIGFuZCB0byBjb25uZWN0IHRoZSBkYXRhXG4gICAgICogdG8gb25lIGFub3RoZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl92ZXJ0aWNlcyA9IFtdOyBcbiAgICAgICAgdGhpcy5fZWRnZXMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJ0aWNlcyBJdGVyYXRvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNZXRob2QgdGhhdCBjYW4gYmUgdXNlZCBpbiBsb29wcyB0byBpdGVyYXRlIHRocm91Z2ggdGhlIEdyYXBoJ3MgVmVydGljZXMuXG4gICAgICogXG4gICAgICogQHJldHVybnMgSXRlcmF0b3Igb2YgVmVydGljZXNcbiAgICAgKi9cbiAgICB2ZXJ0aWNlcyAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl92ZXJ0aWNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB0aGlzLl92ZXJ0aWNlc1tpKytdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWRnZXMgSXRlcmF0b3IgTWV0aG9kXG4gICAgICogXG4gICAgICogTWV0aG9kIHRoYXQgY2FuIGJlIHVzZWQgaW4gbG9vcHMgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBHcmFwaCdzIEVkZ2VzLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIEl0ZXJhdG9yIG9mIEVkZ2VzXG4gICAgICovXG4gICAgZWRnZXMgKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl06ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5fZWRnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdGhpcy5fZWRnZXNbaSsrXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBWZXJ0aWNlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBHZXQgdGhlIE51bWJlciBvZiBWZXJ0aWNlcyB3aXRoaW4gdGhlIEdyYXBoLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIE51bWJlciBvZiBWZXJ0aWNlc1xuICAgICAqL1xuICAgIG51bVZlcnRpY2VzICgpIHsgcmV0dXJuIHRoaXMuX3ZlcnRpY2VzLmxlbmd0aDsgfVxuXG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIEVkZ2VzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEdldCB0aGUgTnVtYmVyIG9mIEVkZ2VzIHdpdGhpbiB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHJldHVybnMgTnVtYmVyIG9mIEVkZ2VzXG4gICAgICovXG4gICAgbnVtRWRnZXMgKCkgeyByZXR1cm4gdGhpcy5fZWRnZXMubGVuZ3RoOyB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgVmVydGV4IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciBhIGdpdmVuICh4LCB5KSBjb29yZGluYXRlLCB0aGlzIG1ldGhvZCB3aWxsIGNyZWF0ZSBhIG5ldyBWZXJ0ZXggZm9yXG4gICAgICogdGhlIEdyYXBoLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIGluc2VydFZlcnRleCAoeCwgeSkgeyB0aGlzLl92ZXJ0aWNlcy5wdXNoKG5ldyBWZXJ0ZXgoeCwgeSkpOyB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgVmVydGV4IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciBhIGdpdmVuIFZlcnRleCwgaWYgaXQgaXMgaW4gdGhlIEdyYXBoLCBhbmQgaWYgaXQgaGFzIGFueSBFZGdlcyBcbiAgICAgKiBhc3NvY2lhdGVkIHdpdGggaXQsIHRoZW4gdGhvc2UgRWRnZXMgd291bGQgYmUgcmVtb3ZlZCwgYW5kIGZpbmFsbHkgdGhlIFxuICAgICAqIFZlcnRleCB3b3VsZCB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgVmVydGV4XG4gICAgICovXG4gICAgcmVtb3ZlVmVydGV4ICh2KSB7XG4gICAgICAgIC8vIENoZWNrIGlmIFZlcnRleCBpcyBDb25uZWN0ZWQgdG8gT3RoZXIgVmVydGljZXNcbiAgICAgICAgZm9yIChsZXQgZWRnZSBvZiB0aGlzLmVkZ2VzKCkpIHtcbiAgICAgICAgICAgIGlmIChlZGdlLmhhc1ZlcnRleCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBOZWlnaGJvdXIgUmVmZXJlbmNlcyBmb3IgVmVydGlpY2VzXG4gICAgICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1swXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1sxXSk7XG4gICAgICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1sxXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1swXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgRWRnZVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRWRnZShlZGdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgVmVydGV4IGluIEFycmF5XG4gICAgICAgIGlkeCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3ZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodi5zYW1lVmVydGV4KHRoaXMuX3ZlcnRpY2VzW2ldKSlcbiAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIFZlcnRleCBpZiBGb3VuZFxuICAgICAgICBpZiAoaWR4ID49IDApXG4gICAgICAgICAgICB0aGlzLl92ZXJ0aWNlcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBWZXJ0aWNlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDbGVhcnMgYWxsIHZlcnRpY2VzIGluIHRoZSBHcmFwaC5cbiAgICAgKi9cbiAgICBjbGVhclZlcnRpY2VzICgpIHtcbiAgICAgICAgZG8geyB0aGlzLl92ZXJ0aWNlcy5wb3AoKSB9IHdoaWxlICh0aGlzLl92ZXJ0aWNlcy5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgVmVydGV4IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciBhIGdpdmVuICh4LCB5KSBjb29yZGluYXRlLCB0aGlzIG1ldGhvZCB3aWxsIHNlYXJjaCBpdHMga25vd24gdmVydGljZXNcbiAgICAgKiBhbmQgcmV0dXJuIHRoZSB2ZXJ0ZXggdGhhdCBjb3JyZXNwb25kcyB3aXRoIHRoZSBjb29yZGluYXRlLCBvciBudWxsIGlmIGl0XG4gICAgICogZG9lcyBub3QgZXhpc3QuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICogQHJldHVybnMgQ29ycmVzcG9uZGluZyBWZXJ0ZXhcbiAgICAgKi9cbiAgICBnZXRWZXJ0ZXggKHgsIHkpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIFZlcnRpY2VzXG4gICAgICAgIGxldCB1ID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgdmVydGV4IG9mIHRoaXMudmVydGljZXMoKSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCBWZXJ0ZXggQ29vcmRpbmF0ZXMgbWF0Y2ggRGVzaXJlZFxuICAgICAgICAgICAgaWYgKHZlcnRleC54ID09PSB4ICYmIHZlcnRleC55ID09PSB5KVxuICAgICAgICAgICAgICAgIHUgPSB2ZXJ0ZXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgRWRnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgYSBnaXZlbiBwYWlyIG9mIFZlcnRpY2VzLCB0aGlzIG1ldGhvZCB3aWxsIGNyZWF0ZSBhIG5ldyBFZGdlIGZvciB0aGUgXG4gICAgICogcGFpciwgaWYgdGhlcmUgaXNuJ3Qgb25lIGFscmVhZHkuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHUgU3RhcnRpbmcgVmVydGV4XG4gICAgICogQHBhcmFtIHtWZXJ0ZXh9IHYgRW5kaW5nIFZlcnRleFxuICAgICAqL1xuICAgIGluc2VydEVkZ2UgKHUsIHYpIHtcbiAgICAgICAgLy8gRW5zdXJlIG5vIEVkZ2Ugd2l0aCBWZXJ0aWNlcyBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBpZiAodGhpcy5nZXRFZGdlKHUsIHYpID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBOZXcgRWRnZSBmb3IgVmVydGljZXNcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UgPSBuZXcgRWRnZSh1LCB2KTtcbiAgICAgICAgICAgIHUuaW5zZXJ0TmVpZ2hib3VyKHYpO1xuICAgICAgICAgICAgdi5pbnNlcnROZWlnaGJvdXIodSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0byBFZGdlcyBBcnJheVxuICAgICAgICAgICAgdGhpcy5fZWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFZGdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciBhIGdpdmVuIEVkZ2UsIGlmIGl0IGlzIGluIHRoZSBHcmFwaCwgdGhlIEVkZ2Ugd291bGQgdGhlbiBiZSByZW1vdmVkXG4gICAgICogZnJvbSB0aGUgR3JhcGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtFZGdlfSBlIEVkZ2VcbiAgICAgKi9cbiAgICByZW1vdmVFZGdlIChlKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIEVkZ2UgZXhpc3RzIGluIEdyYXBoXG4gICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9lZGdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2VkZ2VzW2ldLnNhbWVFZGdlKGUpKVxuICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgaWYgRWRnZSBleGlzdHNcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgTmVpZ2hib3VyIFJlZmVyZW5jZXMgZm9yIFZlcnRpY2VzXG4gICAgICAgICAgICBsZXQgZWRnZSA9IHRoaXMuX2VkZ2VzW2lkeF07XG4gICAgICAgICAgICBlZGdlLnZlcnRpY2VzWzBdLnJlbW92ZU5laWdoYm91cihlZGdlLnZlcnRpY2VzWzFdKTtcbiAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMV0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMF0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgRWRnZVxuICAgICAgICAgICAgdGhpcy5fZWRnZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBFZGdlc1xuICAgICAqIFxuICAgICAqIFJlbW92ZXMgYWxsIGVkZ2VzIGluIHRoZSBHcmFwaC5cbiAgICAgKi9cbiAgICBjbGVhckVkZ2VzICgpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVkZ2VzXG4gICAgICAgIGZvciAobGV0IGVkZ2Ugb2YgdGhpcy5lZGdlcygpKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgUmVmZXJlbmNlcyB0byBOZWlnaGJvdXIgVmVydGljZXNcbiAgICAgICAgICAgIGVkZ2UudmVydGljZXNbMF0ucmVtb3ZlTmVpZ2hib3VyKGVkZ2UudmVydGljZXNbMV0pO1xuICAgICAgICAgICAgZWRnZS52ZXJ0aWNlc1sxXS5yZW1vdmVOZWlnaGJvdXIoZWRnZS52ZXJ0aWNlc1swXSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2VkZ2VzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEVkZ2UgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBnaXZlbiBwYWlyIG9mIFZlcnRpY2VzLCB0aGUgbWV0aG9kIHdpbGwgaXRlcmF0ZSB0aHJvdWdoIHRoZSBrbm93blxuICAgICAqIEVkZ2VzIG9mIHRoZSBHcmFwaCBhbmQgcmV0dXJuIHRoZSBFZGdlIHRoYXQgY29ubmVjdHMgdGhlbSwgb3IgcmV0dXJucyBcbiAgICAgKiBudWxsLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB1IE9uZSBWZXJ0ZXhcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBPdGhlciBWZXJ0ZXhcbiAgICAgKiBAcmV0dXJucyBFZGdlIHRoYXQgQ29ubmVjdHMgdGhlIHR3byBWZXJ0aWNlc1xuICAgICAqL1xuICAgIGdldEVkZ2UgKHUsIHYpIHtcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIEVkZ2VzXG4gICAgICAgIGxldCBlID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgZWRnZSBvZiB0aGlzLmVkZ2VzKCkpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIEVkZ2UgaGFzIGJvdGggVmVydGljZXNcbiAgICAgICAgICAgIGlmIChlZGdlLmhhc1ZlcnRpY2VzKHUsIHYpKVxuICAgICAgICAgICAgICAgIGUgPSBlZGdlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcbiAgICAvKipcbiAgICAgKiBRdWV1ZSBDbGFzc1xuICAgICAqIFxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBRdWV1ZSBEYXRhIFN0cnVjdHVyZS4gVGhlIFF1ZXVlIERhdGEgU3RydWN0dXJlXG4gICAgICogdXRpbGlzZXMgdGhlIEZpcnN0LUluLCBGaXJzdC1PdXQgcHJpbmNpcGxlLCBlbGVtZW50cyBhZGRlZCB0byB0aGUgUXVldWUgXG4gICAgICogd2lsbCBiZSBwdXNoZWQgdG8gdGhlIGJhY2sgb2YgdGhlIEFycmF5LCBhbmQgb25seSB0aGUgZmlyc3QgZWxlbWVudCB3aWxsXG4gICAgICogYmUgcmVtb3ZlZCBlYWNoIHRpbWUgZGVxdWV1ZSBpcyBjYWxsZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpemUgTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBRdWV1ZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBTaXplIG9mIHRoZSBRdWV1ZVxuICAgICAqL1xuICAgIHNpemUgKCkgeyByZXR1cm4gdGhpcy5fcXVldWUubGVuZ3RoOyB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBFbXB0eSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBJZiB0aGVyZSBhcmUgbm8gRWxlbWVudHMgaW4gdGhlIFF1ZXVlLCB0aGUgbWV0aG9kIHJldHVybnMgdHJ1ZSwgYW5kIHdpbGxcbiAgICAgKiByZXR1cm4gZmFsc2UgaW4gYWxsIG90aGVyIGNhc2VzLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlcmUgYXJlIG5vIEVsZW1lbnRzIGluIHRoZSBRdWV1ZVxuICAgICAqL1xuICAgIGlzRW1wdHkgKCkgeyByZXR1cm4gdGhpcy5fcXVldWUubGVuZ3RoID09PSAwOyB9XG5cbiAgICAvKipcbiAgICAgKiBFbnF1ZXVlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEFkZHMgYSBuZXcgRWxlbWVudCB0byB0aGUgUXVldWUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHsqfSBlIE5ldyBFbGVtZW50IGZvciBRdWV1ZVxuICAgICAqL1xuICAgIGVucXVldWUgKGUpIHsgdGhpcy5fcXVldWUucHVzaChlKTsgfVxuXG4gICAgLyoqXG4gICAgICogRmlyc3QgTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgRmlyc3QgRWxlbWVudCBvZiB0aGUgUXVldWUsIHdpdGhvdXQgZGVxdWV1aW5nIGl0LlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRoZSBGaXJzdCBFbGVtZW50IG9mIHRoZSBRdWV1ZVxuICAgICAqL1xuICAgIGZpcnN0ICgpIHsgcmV0dXJuIHRoaXMuX3F1ZXVlWzBdOyB9XG5cbiAgICAvKipcbiAgICAgKiBEZXF1ZXVlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJlbW92ZXMgdGhlIEZpcnN0IEVsZW1lbnQgb2YgdGhlIFF1ZXVlLCBhbmQgcmVtb3ZlcyBpdCBpbiB0aGUgcHJvY2Vzcy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUaGUgRmlyc3QgRWxlbWVudCBvZiB0aGUgUXVldWVcbiAgICAgKi9cbiAgICBkZXF1ZXVlICgpIHtcbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLl9xdWV1ZVswXTtcbiAgICAgICAgdGhpcy5fcXVldWUuc3BsaWNlKDAsIDEpO1xuXG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xuICAgIC8qKlxuICAgICAqIFZlcnRleCBDbGFzc1xuICAgICAqIFxuICAgICAqIERhdGEgc3RydWN0dXJlIHRoYXQgc3RvcmUgdGhlIGRhdGEgd2l0aGluIHRoZSBHcmFwaCwgaW4gdGhpcyBjYXNlLCBzdG9yZXNcbiAgICAgKiAoeCwgeSkgY29vcmRpbmF0ZXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgWS1Db29yZGluYXRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHkpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy52aXNpdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW92ZSA9IDA7XG4gICAgICAgIHRoaXMubmVpZ2hib3VycyA9IFtdO1xuICAgIH1cblxuICAgIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3g7IH1cblxuICAgIHNldCB4ICh4KSB7IHRoaXMuX3ggPSB4OyB9XG5cbiAgICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95OyB9XG5cbiAgICBzZXQgeSAoeSkgeyB0aGlzLl95ID0geTsgfVxuXG4gICAgZ2V0IHZpc2l0ZWQgKCkgeyByZXR1cm4gdGhpcy5fdmlzaXRlZDsgfVxuXG4gICAgc2V0IHZpc2l0ZWQgKGJvb2wpIHsgdGhpcy5fdmlzaXRlZCA9IGJvb2w7IH1cblxuICAgIGdldCBtb3ZlICgpIHsgcmV0dXJuIHRoaXMuX21vdmU7IH1cblxuICAgIHNldCBtb3ZlIChudW0pIHsgdGhpcy5fbW92ZSA9IG51bTsgfVxuXG4gICAgZ2V0IG5laWdoYm91cnMgKCkgeyByZXR1cm4gdGhpcy5fbmVpZ2hib3VyczsgfVxuXG4gICAgc2V0IG5laWdoYm91cnMgKGFycikgeyB0aGlzLl9uZWlnaGJvdXJzID0gYXJyOyB9XG5cbiAgICAvKipcbiAgICAgKiBTYW1lIFZlcnRleCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIFZlcnRleCBpcyB0aGUgc2FtZSBvbmUgYXMgdGhpcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdiBWZXJ0ZXhcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBTYW1lIFZlcnRleFxuICAgICAqL1xuICAgIHNhbWVWZXJ0ZXggKHYpIHsgcmV0dXJuIHYueCA9PT0gdGhpcy54ICYmIHYueSA9PT0gdGhpcy55OyB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgTmVpZ2hib3VyIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEFkZHMgYSBuZXcgVmVydGV4IHRoYXQgaXMgTmVpZ2hib3VyIHRoaXMgVmVydGV4IGluIHRoZSBHcmFwaC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1ZlcnRleH0gdmVydGV4IFZlcnRleFxuICAgICAqL1xuICAgIGluc2VydE5laWdoYm91ciAodmVydGV4KSB7IHRoaXMubmVpZ2hib3Vycy5wdXNoKHZlcnRleCk7IH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBOZWlnaGJvdXIgTWV0aG9kXG4gICAgICogXG4gICAgICogUmVtb3ZlcyBhIE5laWdoYm91ciBWZXJ0ZXgsIGlmIGl0IGV4aXN0cyBmcm9tIHRoZSBWZXJ0ZXgncyBOZWlnaGJvdXJzLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VmVydGV4fSB2ZXJ0ZXggTmVpZ2hib3VyIHRvIFJlbW92ZVxuICAgICAqL1xuICAgIHJlbW92ZU5laWdoYm91ciAodmVydGV4KSB7XG4gICAgICAgIC8vIEZpbmQgVmVydGV4IGlmIFByZXNlbnQgaW4gbmVpZ2hib3VycyBBcnJheVxuICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uZWlnaGJvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZWlnaGJvdXJzW2ldLnNhbWVWZXJ0ZXgodmVydGV4KSlcbiAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gbmVpZ2hib3VycyBpZiBQcmVzZW50XG4gICAgICAgIGlmIChpZHggPj0gMClcbiAgICAgICAgICAgIHRoaXMubmVpZ2hib3Vycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUludGVyZmFjZSB7XG4gICAgLyoqXG4gICAgICogR2FtZSBJbnRlcmZhY2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBCYXNlIEdhbWUgQ2xhc3MgdGhhdCBzaG91bGQgYmUgSW5oZXJpdGVkIGJ5IE90aGVyIEdhbWVzIHRvIGJlIFBsYXllZCBvbiBcbiAgICAgKiB0aGUgR2FtZUNoaXAuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge31cblxuICAgIC8qKlxuICAgICAqIFNldCBTaG93IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgU2hvdyBDYWxsYmFjayBNZXRob2QgZm9yIFVwZGF0aW5nIHRoZSBHYW1lQ2hpcCBEaXNwbGF5XG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHNob3dDYWxsYmFjayBTaG93IENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIGRpbWVuc2lvbnNDYWxsYmFjayBHZXQgRGltZW5zaW9ucyBDYWxsYmFja1xuICAgICAqL1xuICAgIHNldFNjZW5lIChzaG93Q2FsbGJhY2ssIGdldERpbWVuc2lvbnMpIHt9XG5cbiAgICAvKipcbiAgICAgKiBVcCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgVXAgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHVwQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFJpZ2h0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBSaWdodCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgcmlnaHRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogRG93biBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgRG93biBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgZG93bkNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBMZWZ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBMZWZ0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBsZWZ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEEgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEEgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBhQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFNlbGVjdCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzZWxlY3RDYWxsYmFjayAoKSB7fVxufSIsImltcG9ydCBcIi4vYm9hcmQtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBLbmlnaHQgZnJvbSBcIi4va25pZ2h0LmpzXCI7XG5pbXBvcnQgVGlsZSBmcm9tIFwiLi90aWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkIHtcbiAgICAjQk9BUkQgPSA4O1xuICAgICNERUZBVUxUX1BPUyA9IHt4OiAzLCB5OjN9O1xuICAgICNjb21wbGV0ZUNhbGxiYWNrO1xuXG4gICAgLyoqXG4gICAgICogQm9hcmQgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBDaGVzc2JvYXJkIENsYXNzIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHNldHRpbmcgdXAgYWxsIFRpbGVzIGFuZCB0aGUgXG4gICAgICogS25pZ2h0LCBpbiBhZGRpdGlvbiB0byBtYW5hZ2luZyB0aGUgY29udHJvbHMgZm9yIHRoZSB0aGUgS25pZ2h0LlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjb21wbGV0ZUNhbGxiYWNrIFB1enpsZSBDb21wbGV0ZSBDYWxsYmFja1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBCb2FyZCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcImNoZXNzYm9hcmRcIik7XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgR3JpZCBUZW1wbGF0ZSBBcmVhcyB0byB0aGUgQm9hcmQgRE9NIEVsZW1lbnRcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuI0JPQVJEIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jQk9BUkQ7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChqID09PSAwKVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgXCJ0aWxlLSR7aX0ke2p9IGBcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChqID09PSB0aGlzLiNCT0FSRCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGB0aWxlLSR7aX0ke2p9XCIke2kgPT09IDAgPyBcIlwiIDogXCIgXCJ9YDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGB0aWxlLSR7aX0ke2p9IGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuc2V0UHJvcGVydHkoXCJncmlkLXRlbXBsYXRlLWFyZWFzXCIsIHRlbXBsYXRlKTtcblxuICAgICAgICAvLyBJbml0YWlsaXNlIFRpbGVzXG4gICAgICAgIHRoaXMuX3RpbGVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jQk9BUkQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNCT0FSRDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IG5ldyBUaWxlKFxuICAgICAgICAgICAgICAgICAgICBpLCBcbiAgICAgICAgICAgICAgICAgICAgaiwgXG4gICAgICAgICAgICAgICAgICAgIGogJSAyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgaSAlIDIgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgJSAyID8gXCJ3aGl0ZVwiIDogXCJibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbGVzLnB1c2godGlsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRpbGUuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0aWFsaXNlIEtuaWdodFxuICAgICAgICB0aGlzLl9rbmlnaHQgPSBuZXcgS25pZ2h0KFxuICAgICAgICAgICAgdGhpcy4jREVGQVVMVF9QT1MueCwgXG4gICAgICAgICAgICB0aGlzLiNERUZBVUxUX1BPUy55LCB0aGlzLiNCT0FSRCwgXG4gICAgICAgICAgICB0aGlzLl90aWxlc1xuICAgICAgICApO1xuXG4gICAgICAgIC8vIFBsYWNlIEtuaWdodCBhbmQgQ3Vyc29yIG9uIEluaXRpYWwgVGlsZVxuICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRpbGUueCA9PT0gdGhpcy4jREVGQVVMVF9QT1MueCAmJiBcbiAgICAgICAgICAgICAgICB0aWxlLnkgPT09IHRoaXMuI0RFRkFVTFRfUE9TLnlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRpbGUucGxhY2VLbmlnaHQodGhpcy5fa25pZ2h0LmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSB0aWxlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQucGxhY2VDdXJzb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBDYWxsYmFjayBhbmQgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuI2NvbXBsZXRlQ2FsbGJhY2sgPSBjb21wbGV0ZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLl9sYXN0O1xuICAgICAgICB0aGlzLl9wcmV2aW91cyA9IFtdO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3B1enpsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9nb2FsID0ge3g6IC0xLCB5OiAtMX07XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxuXG4gICAgZ2V0IGtuaWdodCAoKSB7IHJldHVybiB0aGlzLl9rbmlnaHQ7IH1cblxuICAgIHNldCBrbmlnaHQgKG9iaikgeyB0aGlzLl9rbmlnaHQgPSBvYmo7IH1cblxuICAgIGdldCBwcmV2aW91cyAoKSB7IHJldHVybiB0aGlzLl9wcmV2aW91czsgfVxuXG4gICAgc2V0IHByZXZpb3VzIChhcnIpIHsgdGhpcy5fcHJldmlvdXMgPSBhcnI7IH1cblxuICAgIGdldCBwdXp6bGluZyAoKSB7IHJldHVybiB0aGlzLl9wdXp6bGluZzsgfVxuXG4gICAgc2V0IHB1enpsaW5nIChib29sKSB7IHRoaXMuX3B1enpsaW5nID0gYm9vbDsgfVxuXG4gICAgZ2V0IGdvYWwgKCkgeyByZXR1cm4gdGhpcy5fZ29hbDsgfVxuXG4gICAgc2V0IGdvYWwgKGRpY3QpIHsgdGhpcy5fZ29hbCA9IGRpY3Q7IH1cblxuICAgIC8qKlxuICAgICAqIEdldCBSb290IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybnMgdGhlIFNlbGVjdGVkIFJvb3QgUG9zaXRpb24gb2YgdGhlIEtuaWdodCBmb3IgdGhlIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBSb290IFBvc2l0aW9uXG4gICAgICovXG4gICAgZ2V0Um9vdCAoKSB7IHJldHVybiB7IHg6IHRoaXMuX2tuaWdodC54LCB5OiB0aGlzLl9rbmlnaHQueSB9OyB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgR3JhcGggTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0dXJucyB0aGUgR3JhcGggR2VuZXJhdGVkIGJ5IHRoZSBLbmlnaHQgY29ubmVjdGluZyBhbGwgdGhlIFRpbGVzIHRvIFxuICAgICAqIGVhY2ggb3RoZXIgYnkgdGhlIGxlZ2FsbHkgYWxsb3dlZCBtb3ZlcyBvZiB0aGUgS25pZ2h0LlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIEdyYXBoIG9mIENoZXNzYm9hcmRcbiAgICAgKi9cbiAgICBnZXRHcmFwaCAoKSB7IHJldHVybiB0aGlzLl9rbmlnaHQuZ3JhcGg7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQm9hcmQsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBkZXBlbmRlbnQgb24gdGhlIHNjcmVlbiBzaXplLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkaW1lbnNpb24gQm9hcmQgU2l6ZSAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKGRpbWVuc2lvbikge1xuICAgICAgICAvLyBTZXQgQm9hcmQgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUud2lkdGggPSBgJHtkaW1lbnNpb259cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7ZGltZW5zaW9ufXB4YDtcblxuICAgICAgICAvLyBTZXQgVGlsZSBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IHRpbGVEaW0gPSBNYXRoLmZsb29yKGRpbWVuc2lvbiAvIHRoaXMuI0JPQVJEKTtcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSBNYXRoLmZsb29yKHRpbGVEaW0gKiAwLjgpO1xuICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgdGlsZS5lbGVtZW50LnN0eWxlLndpZHRoID0gYCR7dGlsZURpbX1weGA7XG4gICAgICAgICAgICB0aWxlLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7dGlsZURpbX1weGA7XG4gICAgICAgICAgICB0aWxlLmVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSBgJHtmb250U2l6ZX1weGA7XG4gICAgICAgICAgICB0aWxlLmN1cnNvci5zdHlsZS53aWR0aCA9IGAke3RpbGVEaW19cHhgO1xuICAgICAgICAgICAgdGlsZS5jdXJzb3Iuc3R5bGUuaGVpZ2h0ID0gYCR7dGlsZURpbX1weGA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBLbmlnaHQgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9rbmlnaHQuaWNvbi5zdHlsZS53aWR0aCA9IGAke3RpbGVEaW19cHhgO1xuICAgICAgICB0aGlzLl9rbmlnaHQuaWNvbi5zdHlsZS5oZWlnaHQgPSBgJHt0aWxlRGltfXB4YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgVGhlbWUgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBLbmlnaHQncyBJY29uLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aGVtZSBUaGVtZSBOYW1lXG4gICAgICovXG4gICAgc2V0VGhlbWUgKHRoZW1lKSB7IHRoaXMuX2tuaWdodC5jaGFuZ2VJY29uKHRoZW1lKTsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEdvYWwgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IEdvYWwgVGlsZSBmb3IgU2hvcnRlc3QgUGF0aCBQdXp6bGUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggR29hbCBYLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgR29hbCBZLVBvc2l0aW9uXG4gICAgICovXG4gICAgc2V0R29hbCAoeCwgeSkge1xuICAgICAgICAvLyBGaW5kIEdvYWwgVGlsZVxuICAgICAgICBsZXQgYXV4O1xuICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgaWYgKHRpbGUueCA9PT0geCAmJiB0aWxlLnkgPT09IHkpXG4gICAgICAgICAgICAgICAgYXV4ID0gdGlsZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IEdvYWwgVmFyaWFibGVcbiAgICAgICAgdGhpcy5fZ29hbC54ID0geDtcbiAgICAgICAgdGhpcy5fZ29hbC55ID0geTtcblxuICAgICAgICAvLyBIaWdobGlnaHQgR29hbCBUaWxlXG4gICAgICAgIGF1eC5oaWdobGlnaHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBDb21wbGV0ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIGdpdmVuIFB1enpsZSwgdGhlIG1ldGhvZCB3aWxsIGNoZWNrIGlmIGl0IGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUcnVlLCBpZiBQdXp6bGUgaXMgQ29tcGxldGVcbiAgICAgKi9cbiAgICBpc0NvbXBsZXRlICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIFNob3J0ZXN0IFBhdGggUHV6emxlXG4gICAgICAgIGlmICh0aGlzLl9nb2FsLnggIT09IC0xICYmIHRoaXMuX2dvYWwueSAhPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQueCA9PT0gdGhpcy5fZ29hbC54ICYmIFxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQueSA9PT0gdGhpcy5fZ29hbC55XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIC8vIEhhbmRsZSBLbmlnaHQncyBUb3VyIFB1enpsZVxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3RpbGVzW2ldLm1vdmUgPT09IHRoaXMuX3RpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVc2VkIGZvciBNb3ZpbmcgdGhlIEtuaWdodCB0byB0aGUgTmV4dCBQb3NpdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBOZXh0IFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBOZXh0IFktUG9zaXRpb25cbiAgICAgKi9cbiAgICBtb3ZlICh4LCB5KSB7XG4gICAgICAgIC8vIEZpbmQgVGlsZSB0aGF0IENvcnJlc3BvbmQgdG8gTmV4dCBQb3NpdGlvblxuICAgICAgICBsZXQgdGlsZTtcbiAgICAgICAgdGhpcy5fdGlsZXMuZm9yRWFjaCh0ID0+IHtcbiAgICAgICAgICAgIGlmICh0LnggPT09IHggJiYgdC55ID09PSB5KVxuICAgICAgICAgICAgICAgIHRpbGUgPSB0O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQbGFjZSBDdXJzb3IgYW5kIEtuaWdodCBvbiBUaWxlXG4gICAgICAgIHRoaXMuX2N1cnJlbnQucGxhY2VDdXJzb3IoZmFsc2UpO1xuICAgICAgICB0aGlzLiNwbGFjZUtuaWdodCh0aWxlKTtcbiAgICAgICAgdGhpcy5fa25pZ2h0LnVwZGF0ZSh0aWxlLngsIHRpbGUueSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQucGxhY2VDdXJzb3IoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXNldCB0aGUgQm9hcmQncyBUaWxlcyB0byByZW1vdmUgYW55IGhpZ2hsaWdodHMuXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgICAvLyBSZXNldCBUaWxlc1xuICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgdGlsZS5yZXNldCgpO1xuICAgICAgICAgICAgdGlsZS50b2dnbGUoKTtcblxuICAgICAgICAgICAgLy8gRW5zdXJlIEtuaWdodCBhbmQgQ3Vyc29yIFJlbWFpbiBvbiB0aGVpciBUaWxlXG4gICAgICAgICAgICBpZiAodGlsZS54ID09PSB0aGlzLl9rbmlnaHQueCAmJiB0aWxlLnkgPT09IHRoaXMuX2tuaWdodC55KSB7XG4gICAgICAgICAgICAgICAgdGlsZS5wbGFjZUtuaWdodCh0aGlzLl9rbmlnaHQuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGlsZS5wb2ludGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGlsZS5wbGFjZUN1cnNvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNldCBPdGhlciBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fcHJldmlvdXMgPSBbXTtcbiAgICAgICAgdGhpcy5fZ29hbC54ID0gLTE7XG4gICAgICAgIHRoaXMuX2dvYWwueSA9IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhvcml6b250YWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZlIHRoZSBDdXJzb3IgSG9yaXpvbnRhbGx5IGFyb3VuZCB0aGUgQm9hcmQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSByaWdodCBEZWZhdWx0IEFjdGlvbiBpcyBSaWdodHdhcmRzXG4gICAgICovXG4gICAgaG9yaXpvbnRhbE1vdmUgKHJpZ2h0PXRydWUpIHtcbiAgICAgICAgLy8gRW5zdXJlIEhvcml6b250YWwgTW92ZSBpcyBzdGlsbCBvbiBCb2FyZFxuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudC55ICsgKHJpZ2h0ID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKGN1cnIgPCB0aGlzLiNCT0FSRCAmJiBjdXJyID49IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBDdXJzb3IgZnJvbSBUaWxlXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbmQgRmluZCBOZXcgVGlsZSBmb3IgQ3Vyc29yXG4gICAgICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aWxlLnkgPT09IGN1cnIgJiYgdGlsZS54ID09PSB0aGlzLl9jdXJyZW50LngpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSB0aWxlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBUaWxlXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZlIHRoZSBDdXJzb3IgdXAgb3IgZG93biBhcm91bmQgdGhlIEJvYXJkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXAgRGVmYXVsdCBBY3Rpb24gaXMgVXB3YXJkc1xuICAgICAqL1xuICAgIHZlcnRpY2FsTW92ZSAodXA9dHJ1ZSkge1xuICAgICAgICAvLyBFbnN1cmUgVmVydGljYWwgTW92ZSBpcyBzdGlsbCBvbiBCb2FyZFxuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudC54ICsgKHVwID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKGN1cnIgPCB0aGlzLiNCT0FSRCAmJiBjdXJyID49IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBDdXJzb3IgZnJvbSBUaWxlXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbmQgRmluZCBOZXcgVGlsZSBmb3IgQ3Vyc29yXG4gICAgICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aWxlLnkgPT09IHRoaXMuX2N1cnJlbnQueSAmJiB0aWxlLnggPT09IGN1cnIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSB0aWxlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBUaWxlXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXB0IEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBJZiBtb3ZlIGlzIGxlZ2FsLCBLbmlnaHQgaXMgUGxhY2VkIGFuZCBubyBlcnJvciBpcyByYXNpZWQuIE9uIHRoZSBvdGhlciBcbiAgICAgKiBoYW5kLCBpZiB0aGUgbW92ZSBpcyBpbGxlZ2FsLCB0aGVuIG5vIGFjdGlvbiBpcyB0YWtlbiBhbmQgZXJyb3Igc2hvdWxkIFxuICAgICAqIGJlIHJhaXNlZC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBFcnJvciBNZXNzYWdlLCBpZiByZXF1aXJlZFxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoKSB7XG4gICAgICAgIC8vIEZpbmQgQ3VycmVudCBUaWxlXG4gICAgICAgIGxldCBhdXg7XG4gICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICBpZiAodGlsZS5wb2ludGVyKVxuICAgICAgICAgICAgICAgIGF1eCA9IHRpbGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEVuc3VyZSBNb3ZlIGlzIExlZ2FsXG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXNlIHx8IHRoaXMuX2tuaWdodC5pc0xlZ2FsKGF1eC54LCBhdXgueSkpIHtcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRydWU7XG4gICAgICAgICAgICAvLyBTdG9yZSBUaWxlIGlmIFNvbHZpbmcgUHV6emxlXG4gICAgICAgICAgICBpZiAodGhpcy5fcHV6emxpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91cy5wdXNoKGF1eCk7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgVG91cmluZywgQ29uZmlybSBObyBSZXBlYXRlZCBUaWxlc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9nb2FsLnggPT09IC0xICYmIHRoaXMuX2dvYWwueSA9PT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gYXV4Lm1vdmUgPT09IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBQdXp6bGUgaXMgQ29tcGxldGVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbXBsZXRlKCkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2NvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIEN1cnJlbnQgVGlsZVxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3QgPSB0aGlzLl9jdXJyZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuI3BsYWNlS25pZ2h0KGF1eCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fa25pZ2h0LnVwZGF0ZShhdXgueCwgYXV4LnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpc2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIE51bWJlciBUaWxlLCBpZiBUb3VyaW5nXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dvYWwueCA9PT0gLTEgJiYgdGhpcy5fZ29hbC55ID09PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudC5udW1iZXIodGhpcy5fcHJldmlvdXMubGVuZ3RoLCB0aGlzLl9rbmlnaHQuZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgd2l0aG91dCBFcnJvclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91cy5wb3AoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYE1vdmUgdG8gKCR7YXV4Lnl9LCAke2F1eC54fSkgaGFzIGFscmVhZHkgYmVlbiBtYWRlIWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgd2l0aCBFcnJvclxuICAgICAgICByZXR1cm4gYE1vdmUgdG8gKCR7YXV4Lnl9LCAke2F1eC54fSkgaXMgaWxsZWdhbCFgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY2xpbmUgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIElmIHdoaWxlIHNvbHZpbmcgdGhlIFB1enpsZSB0aGUgVXNlciBmaW5kcyB0aGV5IHdhbnQgdG8gdW5kbyB0aGVpciBsYXN0IFxuICAgICAqIG1vdmUsIHRoZW4gdGhlIHByZXZpb3VzIG1vdmUgd2lsbCByZXBsYWNlIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgICAqL1xuICAgIGRlY2xpbmVBY3Rpb24gKCkge1xuICAgICAgICAvLyBIYW5kbGUgb25seSBpZiBTb2x2aW5nIFB1enpsZVxuICAgICAgICBpZiAodGhpcy5fcHV6emxpbmcgJiYgIXRoaXMuX2FsZ29yaXRobSAmJiB0aGlzLl9wcmV2aW91cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLl9wcmV2aW91c1t0aGlzLl9wcmV2aW91cy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIE1vdmUgaWYgTGFzdCBNb3ZlIGlzIHRoZSBTYW1lIGFzIExhc3QgaW4gTGlzdFxuICAgICAgICAgICAgaWYgKGNoZWNrLnggPT09IHRoaXMuX2xhc3QueCAmJiBjaGVjay55ID09PSB0aGlzLl9sYXN0LnkpXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXMucG9wKCk7XG5cbiAgICAgICAgICAgIC8vIFNldCBMYXN0IE1vdmUgaW4gTGlzdCBhcyBDdXJyZW50IE1vdmVcbiAgICAgICAgICAgIGxldCBhdXggPSB0aGlzLl9wcmV2aW91cy5wb3AoKTtcbiAgICAgICAgICAgIHRoaXMuI3BsYWNlS25pZ2h0KGF1eCwgdGhpcy5fY3VycmVudCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl9rbmlnaHQudXBkYXRlKGF1eC54LCBhdXgueSk7XG4gICAgICAgICAgICB0aGlzLl9sYXN0ID0gdGhpcy5fY3VycmVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogRWl0aGVyIHVzZWQgZm9yIFNlbGVjdGluZyB0aGUgSW5pdGlhbCBQb3NpdGlvbiBvZiB0aGUgS25pZ2h0IGZvciBcbiAgICAgKiBjb21wbGV0aW5nIHRoZSBQdXp6bGUsIG9yIGZvciB1c2luZyB0aGUgQWxnb3JpdGhtIHRvIHNob3cgYSBTb2x1dGlvbiBmb3JcbiAgICAgKiB0aGUgUHV6emxlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdG91ciBLbmlnaHQncyBUb3VyIG9yIE5vdFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGggUGF0aCBHZW5lcmF0ZWQgYnkgQWxnb3JpdGhtXG4gICAgICogQGNhbGxiYWNrIG1vdmVDYWxsYmFjayBNb3ZlIENhbGxiYWNrIE1ldGhvZFxuICAgICAqL1xuICAgIHNlbGVjdEFjdGlvbiAodG91cj1mYWxzZSwgcGF0aD1bXSwgbW92ZUNhbGxiYWNrKSB7XG4gICAgICAgIC8vIFNlbGVjdCBJbml0aWFsIFBvc2l0aW9uIGZvciBLbmlnaHRcbiAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBDdXJyZW50IFRpbGVcbiAgICAgICAgICAgIGxldCBhdXg7XG4gICAgICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aWxlLnBvaW50ZXIpXG4gICAgICAgICAgICAgICAgICAgIGF1eCA9IHRpbGU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIEN1cnJlbnQgVGlsZVxuICAgICAgICAgICAgdGhpcy4jcGxhY2VLbmlnaHQoYXV4KTtcbiAgICAgICAgICAgIHRoaXMuX2tuaWdodC51cGRhdGUoYXV4LngsIGF1eC55KTtcblxuICAgICAgICAgICAgLy8gU2V0dXAgUHV6emxpbmcgVmFyaWFibGVzXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91cy5wdXNoKGF1eCk7XG4gICAgICAgICAgICB0aGlzLl9wdXp6bGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGlsZS5hY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgIHRpbGUudG9nZ2xlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQuaGlnaGxpZ2h0KCk7XG5cblxuICAgICAgICAgICAgLy8gSWYgY29tcGxldGluZyBhIEtuaWdodCdzIFRvdXIsIE51bWJlciBUaWxlXG4gICAgICAgICAgICBpZiAodG91cikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQubnVtYmVyKDEsIHRoaXMuX2tuaWdodC5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vIFByb21wdCBLbmlnaHQgdG8gVXNlIEFsZ29yaXRobSdzIFBhdGhcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgVmFyaWFibGVzIGZvciBUaW1pbmcgSW50ZXJ2YWxcbiAgICAgICAgICAgIHRoaXMuX2FsZ29yaXRobSA9IHRydWU7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIFNldHVwIDFzIFRpbWluZyBJbnRlcnZhbFxuICAgICAgICAgICAgdmFyIHggPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IFZlcnRleCB0byBiZSBMYXN0IEVsZW1lbnQgaW4gUGF0aFxuICAgICAgICAgICAgICAgIGxldCB2ZXJ0ZXg7XG4gICAgICAgICAgICAgICAgdmVydGV4ID0gcGF0aC5wb3AoKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBWZXJ0ZXggdG8gUHJldmlvdXMgU3RlcHNcbiAgICAgICAgICAgICAgICBzZWxmLnByZXZpb3VzLnB1c2godmVydGV4KTtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBLbmlnaHQncyBUb3VyLCBOdW1iZXIgdGhlIFRpbGVzXG4gICAgICAgICAgICAgICAgaWYgKHRvdXIpXG4gICAgICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBUaWxlc1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl90aWxlcy5mb3JFYWNoKHRpbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTnVtYmVyIFRpbGUgdGhhdCBLbmlnaHQgaXMgT25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZXJ0ZXgueCA9PT0gdGlsZS54ICYmIHZlcnRleC55ID09PSB0aWxlLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5udW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucHJldmlvdXMubGVuZ3RoIC0gMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYua25pZ2h0LmVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBHYW1lIEludGVyZmFjZVxuICAgICAgICAgICAgICAgIG1vdmVDYWxsYmFjayh2ZXJ0ZXgueCwgdmVydGV4LnkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgUHV6emxlIGlzIENvbXBsZXRlXG4gICAgICAgICAgICAgICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIFRpbWluZyBJbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFB1enpsZSBDb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICBzZWxmLiNjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZSBLbmlnaHQgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBnaXZlbiB0aWxlLCBQbGFjZSB0aGUgS25pZ2h0IHRoZXJlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7VGlsZX0gdGlsZSBEZXNpcmVkIFRpbGVcbiAgICAgKiBAcGFyYW0ge1RpbGV9IHByZXYgUHJldmlvdXMgVGlsZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdW5kbyBVbmRvLCBkZWZhdWx0IEZhbHNlXG4gICAgICovXG4gICAgI3BsYWNlS25pZ2h0ICh0aWxlLCBwcmV2LCB1bmRvPWZhbHNlKSB7XG4gICAgICAgIC8vIFJlbW92ZSBLbmlnaHQgZnJvbSBDdXJyZW50IFRpbGVcbiAgICAgICAgdGhpcy5fY3VycmVudC5yZW1vdmVLbmlnaHQoKTtcblxuICAgICAgICAvLyBGb3IgVW5kb2luZyBQbGFjZW1lbnQsIFVwZGF0ZSBUaWxlc1xuICAgICAgICBpZiAodW5kbykge1xuICAgICAgICAgICAgcHJldi5wbGFjZUN1cnNvcihmYWxzZSk7XG4gICAgICAgICAgICBwcmV2LnJlc2V0KCk7XG4gICAgICAgICAgICB0aWxlLnBsYWNlQ3Vyc29yKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgQ3VycmVudCBUaWxlXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSB0aWxlO1xuICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlS25pZ2h0KHRoaXMuX2tuaWdodC5lbGVtZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IEdyYXBoIGZyb20gXCIuLi8uLi9kYXRhLXN0cnVjdHVyZXMvZ3JhcGguanNcIjtcbmltcG9ydCBLbmlnaHROb3JtYWwgZnJvbSBcIi4uL2ltYWdlcy9rbmlnaHQucG5nXCI7XG5pbXBvcnQgS25pZ2h0UmV0cm8gZnJvbSBcIi4uL2ltYWdlcy9rbmlnaHQtcmV0cm8ucG5nXCI7XG5pbXBvcnQgS25pZ2h0RnV0dXJlIGZyb20gXCIuLi9pbWFnZXMva25pZ2h0LWZ1dHVyZS5wbmdcIjtcbmltcG9ydCBLbmlnaHROZW9uIGZyb20gXCIuLi9pbWFnZXMva25pZ2h0LW5lb24ucG5nXCI7XG5pbXBvcnQgS25pZ2h0VGVybWluYWwgZnJvbSBcIi4uL2ltYWdlcy9rbmlnaHQtdGVybWluYWwucG5nXCI7XG5pbXBvcnQgS25pZ2h0RmFudGFzeSBmcm9tIFwiLi4vaW1hZ2VzL2tuaWdodC1mYW50YXN5LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLbmlnaHQge1xuICAgICNCT0FSRDtcbiAgICAjVEhFTUVTID0ge1xuICAgICAgICBcIm5vcm1hbFwiOiBLbmlnaHROb3JtYWwsXG4gICAgICAgIFwicmV0cm9cIjogS25pZ2h0UmV0cm8sXG4gICAgICAgIFwiZnV0dXJlXCI6IEtuaWdodEZ1dHVyZSxcbiAgICAgICAgXCJuZW9uXCI6IEtuaWdodE5lb24sXG4gICAgICAgIFwidGVybWluYWxcIjogS25pZ2h0VGVybWluYWwsXG4gICAgICAgIFwiZmFudGFzeVwiOiBLbmlnaHRGYW50YXN5LFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBLbmlnaHQgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBDbGFzcyB0aGF0IEdlbmVyYXRlcyB0aGUgRE9NIGVsZW1lbnQgdGhhdCByZXByZXNlbnRzIHRoZSBLbmlnaHQgT2JqZWN0LCBcbiAgICAgKiBhbmQgYWxzbyBjb250cm9scyB0aGUgS25pZ2h0IGFzIGl0IG1vdmVzIGFjcm9zcyB0aGUgQ2hlc3Nib2FyZCwgZWl0aGVyIFxuICAgICAqIGJ5IHRoZSBVc2VyIG9yIGJ5IHRoZSBTZWFyY2ggQWxnb3JpdGhtLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib2FyZCBDaGVzc2JvYXJkIFNpemVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB0aWxlcyBBcnJheSBvZiBDaGVzc2JvYXJkIFRpbGVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHksIGJvYXJkLCB0aWxlcykge1xuICAgICAgICAvLyBHZW5lcmF0ZSBLbmlnaHQgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5faWNvbi5zcmM9IEtuaWdodE5vcm1hbDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9pY29uKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwia25pZ2h0XCIpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB0aGlzLl95ID0geTtcbiAgICAgICAgdGhpcy4jQk9BUkQgPSBib2FyZDtcbiAgICAgICAgdGhpcy5fdGlsZXMgPSB0aWxlcztcbiAgICAgICAgdGhpcy5fbGVnYWwgPSBbXTtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFtdO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIEdyYXBoIGZvciBUaWxlc1xuICAgICAgICB0aGlzLl9ncmFwaCA9IG5ldyBHcmFwaCgpO1xuICAgICAgICB0aGlzLmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxNb3ZlcygpO1xuICAgIH1cblxuICAgIGdldCBlbGVtZW50ICgpIHsgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7IH1cblxuICAgIHNldCBlbGVtZW50IChlbGVtKSB7IHRoaXMuX2VsZW1lbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgaWNvbiAoKSB7IHJldHVybiB0aGlzLl9pY29uOyB9XG5cbiAgICBzZXQgaWNvbiAoaW1nKSB7IHRoaXMuX2ljb24gPSBpbWc7IH1cblxuICAgIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3g7IH1cblxuICAgIHNldCB4ICh4KSB7IHRoaXMuX3ggPSB4OyB9XG5cbiAgICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95OyB9XG5cbiAgICBzZXQgeSAoeSkgeyB0aGlzLl95ID0geTsgfVxuXG4gICAgZ2V0IGxlZ2FsICgpIHsgcmV0dXJuIHRoaXMuX2xlZ2FsOyB9XG5cbiAgICBzZXQgbGVnYWwgKGFycikgeyB0aGlzLl9sZWdhbCA9IGFycjsgfVxuXG4gICAgZ2V0IHRpbGVzICgpIHsgcmV0dXJuIHRoaXMuX3RpbGVzOyB9XG5cbiAgICBzZXQgdGlsZXMgKGFycikgeyB0aGlzLl90aWxlcyA9IGFycjsgfVxuXG4gICAgZ2V0IGdyYXBoICgpIHsgcmV0dXJuIHRoaXMuX2dyYXBoOyB9XG5cbiAgICBzZXQgZ3JhcGggKGdyYXBoKSB7IHRoaXMuX2dyYXBoID0gZ3JhcGg7IH1cblxuICAgIGdldCBwYXRoICgpIHsgcmV0dXJuIHRoaXMuX3BhdGg7IH1cblxuICAgIHNldCBwYXRoIChhcnIpIHsgdGhpcy5fcGF0aCA9IGFycjsgfVxuXG4gICAgZ2V0IHN0ZXBzICgpIHsgcmV0dXJuIHRoaXMuX3N0ZXBzOyB9XG5cbiAgICBzZXQgc3RlcHMgKG51bSkgeyB0aGlzLl9zdGVwcyA9IG51bTsgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIEljb24gTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBOZXcgSWNvbiBmb3IgdGhlIGdpdmVuIFRoZW1lLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aGVtZSBOZXcgVGhlbWVcbiAgICAgKi9cbiAgICBjaGFuZ2VJY29uICh0aGVtZSkge1xuICAgICAgICAvLyBFbnN1cmUgVGhlbWUgRXhpc3RzXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLiNUSEVNRVMpLmluY2x1ZGVzKHRoZW1lKSkge1xuICAgICAgICAgICAgLy8gUmVwbGFjZSBJY29uXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLl9pY29uLnNyYyA9IHRoaXMuI1RIRU1FU1t0aGVtZV07XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2ljb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlsbCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBCYXNlZCBvbiB0aGUgTGVnYWwgTW92ZXMgdGhhdCBhIEtuaWdodCBjYW4gbWFrZSBvbiBhIENoZXNzYm9hcmQsIHRoaXMgXG4gICAgICogbWV0aG9kIHdpbGwgZmlsbCB1cCB0aGUgZ3JhcGggd2l0aCBlZGdlcyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlIGxlZ2FsIFxuICAgICAqIG1vdmVtZW50cyBhIGtuaWdodCBjYW4gbWFrZSBhdCBlYWNoIHNxdWFyZSBvbiB0aGUgYm9hcmQuXG4gICAgICovXG4gICAgZmlsbCAoKSB7XG4gICAgICAgIC8vIEFkZCBhIFZlcnRleCBmb3IgZWFjaCBUaWxlXG4gICAgICAgIHRoaXMuX3RpbGVzLmZvckVhY2godGlsZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRWZXJ0ZXgodGlsZS54LCB0aWxlLnkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgYW4gRWRnZSBmb3IgVHJhdmVyc2luZyB3aXRoIEtuaWdodFxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuI0JPQVJEOyB4KyspXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuI0JPQVJEOyB5KyspXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRMZWdhbE1vdmVzKHgsIHkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgTGVnYWwgTW92ZXMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBjdXJyZW50IHBvc2l0aW9uIHRoZSBrbmlnaHQgaXMgaW4gb24gdGhlIENoZXNzYm9hcmQsIHRoaXMgbWV0aG9kIFxuICAgICAqIHdpbGwgZmlsbCB1cCB0aGUgbGVnYWwgbW92ZXMgYXJyYXkgd2l0aCB0aGUgY3VycmVudGx5IGF2YWlsYWJsZSBsZWdhbCBcbiAgICAgKiBtb3Zlcy5cbiAgICAgKi9cbiAgICBjdXJyZW50TGVnYWxNb3ZlcyAoKSB7XG4gICAgICAgIC8vIEdldCBWZXJ0ZXggZm9yIEN1cnJlbnQgTG9jYXRpb24gZnJvbSBHcmFwaFxuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHRoaXMueCwgdGhpcy55KTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggTmVpZ2hib3VycywgYWRkaW5nIHRoZW0gdG8gTGVnYWwgTW92ZXMgQXJyYXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50Lm5laWdoYm91cnMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB0aGlzLl9sZWdhbC5wdXNoKGN1cnJlbnQubmVpZ2hib3Vyc1tpXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgUG9zaXRpb24gb2YgdGhlIEtuaWdodCwgYW5kIHJldHJpZXZlIG5ldyBsZWdhbCBtb3Zlcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICB1cGRhdGUgKHgsIHkpIHtcbiAgICAgICAgdGhpcy5feCA9IHg7XG4gICAgICAgIHRoaXMuX3kgPSB5O1xuICAgICAgICB0aGlzLl9sZWdhbCA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgTGVnYWwgTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIHRoZSBNb3ZlIHNlbGVjdGVkIGlzIGEgbGVnYWwgb25lLCBnaXZlbiB0aGUgcmVzdHJpY3Rpb25zIG9mIHRoZVxuICAgICAqIEtuaWdodCdzIG1vdmVtZW50IG9uIGEgY2hlc3Nib2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIE1vdmUgaXMgTGVnYWxcbiAgICAgKi9cbiAgICBpc0xlZ2FsICh4LCB5KSB7XG4gICAgICAgIC8vIEZpbmQgaWYgQ29vcmRpbmF0ZSBpcyBhIExlZ2FsIFZlcnRleFxuICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGVnYWwubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBDb29yZGluYXRlIE1hdGNoZXMgTGVnYWwgVmVydGV4XG4gICAgICAgICAgICBpZiAodGhpcy5fbGVnYWxbaV0ueCA9PT0geCAmJiB0aGlzLl9sZWdhbFtpXS55ID09PSB5KVxuICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaWR4ID49IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IExlZ2FsIE1vdmVzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgR2l2ZW4gUG9zaXRpb24sIHRoZSBtZXRob2Qgd2lsbCBnZW5lcmF0ZSB0aGUgZWRnZXMgdG93YXJkcyB0aGUgXG4gICAgICogbGVnYWwgcG9zaXRpb25zLCBnaXZlbiB0aGUga25pZ2h0cyByZXN0cmljdGVkIG1vdmVzIG9uIGEgY2hlc3Nib2FyZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBnZXRMZWdhbE1vdmVzICh4LCB5KSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHgsIHkpO1xuICAgICAgICAvLyBUb3AgTW92ZXNcbiAgICAgICAgaWYgKHkgKyAyIDwgdGhpcy4jQk9BUkQpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIFRvcC1SaWdodCBpcyBMZWdhbFxuICAgICAgICAgICAgaWYgKHggKyAxIDwgdGhpcy4jQk9BUkQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9wUmlnaHQgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCArIDEsIHkgKyAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIHRvcFJpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIFRvcC1MZWZ0IGlzIExlZ2VsXG4gICAgICAgICAgICBpZiAoeCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgIGxldCB0b3BMZWZ0ID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggLSAxLCB5ICsgMik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCB0b3BMZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSaWdodCBNb3Zlc1xuICAgICAgICBpZiAoeCArIDIgPCB0aGlzLiNCT0FSRCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgUmlnaHQtVG9wIGlzIExlZ2FsXG4gICAgICAgICAgICBpZiAoeSArIDEgPCB0aGlzLiNCT0FSRCkge1xuICAgICAgICAgICAgICAgIGxldCByaWdodFRvcCA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4ICsgMiwgeSArIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgcmlnaHRUb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgUmlnaHQtQm90dG9tIGlzIExlZ2FsXG4gICAgICAgICAgICBpZiAoeSAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgIGxldCByaWdodEJvdHRvbSA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4ICsgMiwgeSAtIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgcmlnaHRCb3R0b20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEJvdHRvbSBNb3Zlc1xuICAgICAgICBpZiAoeSAtIDIgPj0gMCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgQm90dG9tLVJpZ2h0IGlzIExlZ2FsXG4gICAgICAgICAgICBpZiAoeCArIDEgPCB0aGlzLiNCT0FSRCkge1xuICAgICAgICAgICAgICAgIGxldCBib3R0b21SaWdodCA9IHRoaXMuX2dyYXBoLmdldFZlcnRleCh4ICsgMSwgeSAtIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dyYXBoLmluc2VydEVkZ2UoY3VycmVudCwgYm90dG9tUmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgQm90dG9tLUxlZnQgaXMgTGVnYWxcbiAgICAgICAgICAgIGlmICh4IC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvdHRvbUxlZnQgPSB0aGlzLl9ncmFwaC5nZXRWZXJ0ZXgoeCAtIDEsIHkgLSAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaC5pbnNlcnRFZGdlKGN1cnJlbnQsIGJvdHRvbUxlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIExlZnQgTW92ZXNcbiAgICAgICAgaWYgKHggLSAyID49IDApIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIExlZnQtVG9wIGlzIExlZ2FsXG4gICAgICAgICAgICBpZiAoeSArIDEgPCB0aGlzLiNCT0FSRCkge1xuICAgICAgICAgICAgICAgIGxldCBsZWZ0VG9wID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggLSAyLCB5ICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCBsZWZ0VG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIExlZnQtQm90dG9tIGlzIExlZ2FsXG4gICAgICAgICAgICBpZiAoeSAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBsZWZ0Qm90dG9tID0gdGhpcy5fZ3JhcGguZ2V0VmVydGV4KHggLSAyLCB5IC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGguaW5zZXJ0RWRnZShjdXJyZW50LCBsZWZ0Qm90dG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlIHtcbiAgICAvKipcbiAgICAgKiBUaWxlIENsYXNzXG4gICAgICogXG4gICAgICogQ2hlc3MgQm9hcmQgVGlsZSBFbGVtZW50LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFgtQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFktQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvdXIgXCJibGFja1wiIG9yIFwid2hpdGVcIlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5LCBjb2xvdXI9XCJ3aGl0ZVwiKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIFRpbGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjb2xvdXJ9LXRpbGVgKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5pZCA9IGAke3h9LSR7eX0tdGlsZWA7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICBcImdyaWQtYXJlYVwiLCBgdGlsZS0ke3h9JHt5fWBcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBDdXJzb3IgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fY3Vyc29yLmlkID0gXCJjdXJzb3ItdGlsZVwiO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB0aGlzLl95ID0geTtcbiAgICAgICAgdGhpcy5fbW92ZSA9IDA7XG4gICAgICAgIHRoaXMuX2NvbG91ciA9IGNvbG91cjtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BvaW50ZXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgZWxlbWVudCAoKSB7IHJldHVybiB0aGlzLl9lbGVtZW50OyB9XG5cbiAgICBzZXQgZWxlbWVudCAoZWxlbSkgeyB0aGlzLl9lbGVtZW50ID0gZWxlbTsgfVxuXG4gICAgZ2V0IGN1cnNvciAoKSB7IHJldHVybiB0aGlzLl9jdXJzb3I7IH1cblxuICAgIHNldCBjdXJzb3IgKGVsZW0pIHsgdGhpcy5fY3Vyc29yID0gZWxlbTsgfVxuXG4gICAgZ2V0IHggKCkgeyByZXR1cm4gdGhpcy5feDsgfVxuXG4gICAgc2V0IHggKHgpIHsgdGhpcy5feCA9IHg7IH1cblxuICAgIGdldCB5ICgpIHsgcmV0dXJuIHRoaXMuX3k7IH1cblxuICAgIHNldCB5ICh5KSB7IHRoaXMuX3kgPSB5OyB9XG5cbiAgICBnZXQgbW92ZSAoKSB7IHJldHVybiB0aGlzLl9tb3ZlOyB9XG5cbiAgICBzZXQgbW92ZSAobnVtKSB7IHRoaXMuX21vdmUgPSBudW07IH1cblxuICAgIGdldCBjb2xvdXIgKCkgeyByZXR1cm4gdGhpcy5fY29sb3VyOyB9XG5cbiAgICBzZXQgY29sb3VyIChzdHIpIHsgdGhpcy5fY29sb3VyID0gc3RyOyB9XG5cbiAgICBnZXQgYWN0aXZlICgpIHsgcmV0dXJuIHRoaXMuX2FjdGl2ZTsgfVxuXG4gICAgc2V0IGFjdGl2ZSAoYm9vbCkgeyB0aGlzLl9hY3RpdmUgPSBib29sOyB9XG5cbiAgICBnZXQgcG9pbnRlciAoKSB7IHJldHVybiB0aGlzLl9wb2ludGVyOyB9XG5cbiAgICBzZXQgcG9pbnRlciAoYm9vbCkgeyB0aGlzLl9wb2ludGVyID0gYm9vbDsgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEtuaWdodCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZW1vdmVzIHRoZSBLbmlnaHQgRE9NIEVsZW1lbnQgZnJvbSB0aGUgdGlsZS5cbiAgICAgKi9cbiAgICByZW1vdmVLbmlnaHQgKCkgeyBcbiAgICAgICAgLy8gQ2xlYXIgRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjsgXG4gICAgICAgIFxuICAgICAgICAvLyBJZiBOdW1iZXIgd2FzIG9uIFRpbGUsIEtlZXAgaXQgT25cbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSAmJiB0aGlzLl9tb3ZlID4gMClcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl9tb3ZlO1xuXG4gICAgICAgIC8vIElmIEN1cnNvciB3YXMgb24gVGlsZSwgS2VlcCBpdCBPblxuICAgICAgICBpZiAodGhpcy5fcG9pbnRlcilcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fY3Vyc29yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZSBLbmlnaHQgTWV0aG9kXG4gICAgICogXG4gICAgICogQXBwZW5kcyB0aGUgS25pZ2h0IERPTSBFbGVtZW50IHRvIHRoZSB0aWxlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gZWxlbSBLbmlnaHQgRE9NIEVsZW1lbnRcbiAgICAgKi9cbiAgICBwbGFjZUtuaWdodCAoZWxlbSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIEN1cnNvclxuICAgICAqIFxuICAgICAqIFBsYWNlIG9yIFJlbW92ZSB0aGUgQ3Vyc29yIG9uIHRoZSB0aWxlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb24gUGxhY2Ugb3IgUmVtb3ZlXG4gICAgICovXG4gICAgcGxhY2VDdXJzb3IgKG9uPXRydWUpIHtcbiAgICAgICAgLy8gUGxhY2UgQ3Vyc29yIG9uIFRpbGVcbiAgICAgICAgaWYgKG9uICYmICF0aGlzLl9wb2ludGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2N1cnNvcik7XG4gICAgICAgICAgICB0aGlzLl9wb2ludGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yIGZyb20gVGlsZVxuICAgICAgICBpZiAoIW9uICYmIHRoaXMuX3BvaW50ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fY3Vyc29yKTtcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE51bWJlciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBOdW1iZXIgdGhlIFRpbGUgd2l0aCBhIERlc2lyZWQgTnVtYmVyLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW0gTnVtYmVyIGZvciBUaWxlXG4gICAgICogQHBhcmFtIHsqfSBrbmlnaHQgS25pZ2h0IERPTSBFbGVtZW50XG4gICAgICovXG4gICAgbnVtYmVyIChudW0sIGtuaWdodCkgeyBcbiAgICAgICAgdGhpcy5fbW92ZSA9IG51bTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCA9IG51bTsgXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQoa25pZ2h0KTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jdXJzb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZ2hsaWdodCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIaWdobGlnaHRzIHRoZSB0aWxlIHdoZW4gaWYgdGhlIHRpbGUgaXMgYWN0aXZlIGFuZCBpZiB0aGUga25pZ2h0IGxhbmRzIFxuICAgICAqIG9uIHRoZSB0aWxlLlxuICAgICAqL1xuICAgIGhpZ2hsaWdodCAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0cyB0aGUgYWN0aXZlIHZhcmlhYmxlIHRvIGJlIG9uIG9yIG9mZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgb3Igbm90IFxuICAgICAqIHRoZXJlIGlzIGEgcHV6emxlIHRoYXQgdGhlIHVzZXIgaXMgY3VycmVudGx5IGNvbXBsZXRpbmcuXG4gICAgICovXG4gICAgdG9nZ2xlICgpIHsgdGhpcy5fYWN0aXZlID0gIXRoaXMuX2FjdGl2ZTsgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgTWV0aG9kXG4gICAgICogXG4gICAgICogUmVtb3ZlcyBhbnkgaW5zdGFuY2Ugb2YgdGhlIFRpbGUgYmVpbmcgaGlnaGxpZ2h0ZWQuXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgICAvLyBPbmx5IFJlc2V0IFRpbGVzIHRoYXQgYXJlIEhpZ2hsaWdodGVkXG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5fbW92ZSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFwiLi9nYW1lLXN0eWxpbmcuY3NzXCI7XG5pbXBvcnQgY2F0ZWdvcmllcyBmcm9tIFwiLi9kYXRhL21lbnUuanNvbjVcIjtcbmltcG9ydCBHYW1lSW50ZXJmYWNlIGZyb20gXCIuLi9nYW1lLWNoaXAtbW9kdWxlL2dhbWUtaW50ZXJmYWNlLmpzXCI7XG5pbXBvcnQgRXJyb3JCb3ggZnJvbSBcIi4vbWFpbi1tb2R1bGUvZXJyb3ItYm94LmpzXCI7XG5pbXBvcnQgS25pZ2h0c01hbmFnZXIgZnJvbSBcIi4vbWFpbi1tb2R1bGUva25pZ2h0cy1tYW5hZ2VyLmpzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tYWluLW1vZHVsZS9tZW51LmpzXCI7XG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiLi9tYWluLW1vZHVsZS9pbmZvLWJveC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLbmlnaHRzR2FtZSBleHRlbmRzIEdhbWVJbnRlcmZhY2Uge1xuICAgICNzaG93Q2FsbGJhY2s7XG4gICAgI3Rha2VEb3duQ2FsbGJhY2s7XG4gICAgI2RpbWVuc2lvbnNDYWxsYmFjaztcblxuICAgIC8qKlxuICAgICAqIEtuaWdodCdzIEdhbWUgSW50ZXJmYWNlIENsYXNzXG4gICAgICogXG4gICAgICogVXNlZCBmb3IgQ29udHJvbGxpbmcgdGhlIE1lbnUgYW5kIENoZXNzYm9hcmQgTW9kdWxlcyB3aXRoIHRoZSBHYW1lQ2hpcCdzXG4gICAgICogQ29udHJvbGxlcnMsIGFuZCBhbHNvIGZvciBVcGRhdGluZyB0aGUgRGlzcGxheSB3aXRoIHRoZSByZWxldmFudCBFcnJvciBcbiAgICAgKiBhbmQgSW5mb3JtYXRpb24gTWVzc2FnZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBLbmlnaHQncyBNYW5hZ2VyXG4gICAgICAgIHRoaXMuX2ttID0gbmV3IEtuaWdodHNNYW5hZ2VyKHRoaXMuY29tcGxldGVDYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fbWVudSA9IG5ldyBNZW51KGNhdGVnb3JpZXMpO1xuICAgICAgICB0aGlzLl9lcnJvciA9IG5ldyBFcnJvckJveCgpO1xuICAgICAgICB0aGlzLl9pbmZvID0gbmV3IEluZm9Cb3goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgU2NlbmUgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBTaG93IGFuZCBHZXQgRGltZW5zaW9ucyBDYWxsYmFjayBNZXRob2QgZm9yIFVwZGF0aW5nIHRoZSBHYW1lIFxuICAgICAqIENvbnNvbGUgRGlzcGxheS5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgc2hvd0NhbGxiYWNrIFNob3cgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgdGFrZURvd25DYWxsYmFjayBUYWtlIERvd24gQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgZGltZW5zaW9uc0NhbGxiYWNrIEdldCBEaW1lbnNpb25zIENhbGxiYWNrXG4gICAgICovXG4gICAgc2V0U2NlbmUgKHNob3dDYWxsYmFjaywgdGFrZURvd25DYWxsYmFjaywgZ2V0RGltZW5zaW9ucykge1xuICAgICAgICAvLyBTZXQgQ2FsbGJhY2sgTWV0aG9kc1xuICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sgPSBzaG93Q2FsbGJhY2s7XG4gICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2sgPSB0YWtlRG93bkNhbGxiYWNrO1xuICAgICAgICB0aGlzLiNkaW1lbnNpb25zQ2FsbGJhY2sgPSBnZXREaW1lbnNpb25zO1xuXG4gICAgICAgIC8vIFNldCBCb2FyZCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLiNkaW1lbnNpb25zQ2FsbGJhY2soKTtcbiAgICAgICAgY29uc29sZS5sb2coZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMuX2ttLnNldHVwKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fbWVudS5zZXREaW1lbnNpb25zKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdWJfbWVudTsgXG4gICAgICAgIHRoaXMuX2Vycm9yLnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9pbmZvLnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBCb2FyZCBvbiBEaXNwbGF5XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9rbS5tb2R1bGUpO1xuXG4gICAgICAgIC8vIFNob3cgSW5mb3JtYXRpb24gYWJvdXQgQ3VycmVudCBHYW1lXG4gICAgICAgIHRoaXMuX2luZm8uc2V0VGl0bGUodGhpcy5fa20uZ2FtZS5wdXp6bGVUaXRsZSgpKTtcbiAgICAgICAgdGhpcy5faW5mby5zZXRNZXNzYWdlKHRoaXMuX2ttLmdhbWUucHV6emxlSW5mbygpKTtcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXp6bGUgQ29tcGxldGUgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogV2hlbiB0aGUgUHV6emxlIGlzIENvbXBsZXRlLCB0aGUgVXNlciBzaG91bGQgYmUgaW5mb3JtZWQgd2l0aCB0aGUgcmVsZXZhbnQgXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgY29tcGxldGVDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIFNldCBQYXRoIFRha2VuXG4gICAgICAgIHRoaXMuX2ttLnBhdGggPSB0aGlzLl9rbS5ib2FyZC5wcmV2aW91cztcbiAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IHRydWU7XG5cbiAgICAgICAgLy8gUHV6emxlIENvbXBsZXRlLCBEaXNwbGF5IEluZm9cbiAgICAgICAgdGhpcy5faW5mby5zZXRUaXRsZSh0aGlzLl9rbS5nYW1lLnB1enpsZVRpdGxlKCkpO1xuICAgICAgICB0aGlzLl9pbmZvLnNldE1lc3NhZ2UodGhpcy5fa20uZ2FtZS5lbmRJbmZvKFxuICAgICAgICAgICAgdGhpcy5fa20uaHVtYW4sXG4gICAgICAgICAgICB0aGlzLl9rbS5odW1hbiA/IHRoaXMuX2ttLnN0ZXBzLmh1bWFuIDogdGhpcy5fa20uc3RlcHMuYWxnb3JpdGhtLFxuICAgICAgICAgICAgdGhpcy5fa20ucGF0aFxuICAgICAgICApKTtcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fa20ucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSaWdodCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgUmlnaHQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHJpZ2h0Q2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgQ2hlc3Nib2FyZCBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fa20uY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX2ttLmhvcml6b250YWxNb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGVmdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgTGVmdCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgbGVmdENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIENoZXNzYm9hcmQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9rbS5ob3Jpem9udGFsTW92ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXAgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFVwIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICB1cENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIENoZXNzYm9hcmQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9rbS52ZXJ0aWNhbE1vdmUoKTtcbiAgICAgICAgLy8gSGFuZGxlIE1lbnUgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX21lbnUuY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX21lbnUudmVydGljYWxNb3ZlKCk7XG4gICAgICAgIC8vIEhhbmRsZSBTdWItTWVudSBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fc3ViX3NldClcbiAgICAgICAgICAgIHRoaXMuX3N1Yl9tZW51LnZlcnRpY2FsTW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvd24gQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIERvd24gQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGRvd25DYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBDaGVzc2JvYXJkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9rbS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fa20udmVydGljYWxNb3ZlKGZhbHNlKTtcbiAgICAgICAgLy8gSGFuZGxlIE1lbnUgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX21lbnUuY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX21lbnUudmVydGljYWxNb3ZlKGZhbHNlKTtcbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9zdWJfc2V0KVxuICAgICAgICAgICAgdGhpcy5fc3ViX21lbnUudmVydGljYWxNb3ZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBBIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYUNhbGxiYWNrICgpIHsgXG4gICAgICAgIC8vIEhhbmRsZSBDaGVzc2JvYXJkIEFjdGlvblxuICAgICAgICBpZiAodGhpcy5faW5mby5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuX2luZm8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fa20uY29udHJvbGxlcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9rbS5hY2NlcHRBY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yLnNldE1lc3NhZ2UodGhpcy5fa20ubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2Vycm9yLm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIE1lbnUgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX21lbnUuY29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IFNlbGVjdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5fbWVudS5hY2NlcHRBY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yl9zZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1Yl9tZW51ID0gdGhpcy5fbWVudS5zZXRTdWJNZW51KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9zdWJfbWVudS5tb2R1bGUsIHRydWUpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC8vIEhhbmRsZSBSZXR1cm4gU2VsZWN0ZWRcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3N1Yl9zZXQpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBPcHRpb24gU2VsZWN0ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5hY2NlcHRBY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBHYW1lIFNldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiR2FtZVwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rbS5zZXRHYW1lKHRoaXMuX3N1Yl9tZW51LnNlbGVjdGVkLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgVGhlbWUgU2V0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N1Yl9tZW51LnNlbGVjdGVkLmtleSA9PT0gXCJUaGVtZVwiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rbS5zZXRUaGVtZSh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBDbG9zZSBNZW51ICYgU3ViLU1lbnVcbiAgICAgICAgICAgICAgICB0aGlzLiNjbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSGFuZGxlIFJldHVybiBTZWxlY3RlZFxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICB0aGlzLiNtYWluUmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBCIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYkNhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIENoZXNzYm9hcmQgQWN0aW9uXG4gICAgICAgIGlmICh0aGlzLl9lcnJvci5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2luZm8uYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmZvLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2ttLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9rbS5kZWNsaW5lQWN0aW9uKCk7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpIFxuICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdWJfc2V0KVxuICAgICAgICAgICAgdGhpcy4jbWFpblJldHVybigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHsgdGhpcy4jbWVudSgpOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFNlbGVjdCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzZWxlY3RDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIE9ubHkgSGFuZGxlIEdhbWVwbGF5IEV2ZW50c1xuICAgICAgICBpZiAodGhpcy5fa20uY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuX2ttLnNlbGVjdEFjdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1haW4gUmV0dXJuIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybiB0byB0aGUgTWFpbiBNZW51IGZyb20gdGhlIFN1Yi1NZW51LlxuICAgICAqL1xuICAgICNtYWluUmV0dXJuICgpIHtcbiAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgTWV0aG9kXG4gICAgICogXG4gICAgICogT3V0c2lkZSBvZiBjbGlja2luZyB0aGUgU3RhcnQgYnV0dG9uLCBpZiB0aGUgVXNlciBpcyB1c2luZyB0aGUgTWVudSwgYW5kIFxuICAgICAqIHNlbGVjdHMgYW4gb3B0aW9uIHN1Y2ggdGhhdCB0aGUgbWVudSBzaG91bGQgY2xvc2UsIHRoaXMgbWV0aG9kIHdpbGwgXG4gICAgICogY29tcGxldGUgdGhhdCB0YXNrLlxuICAgICAqL1xuICAgICNjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuX3N1Yl9zZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVudSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGVuIHRoZSBTdGFydCBidXR0b24gaXMgcHJlc3NlZCwgZWl0aGVyIHRoZSBNZW51IHNob3VsZCBiZSBEaXNwbGF5ZWQgXG4gICAgICogKGkuZS4gZHVyaW5nIGdhbWVwbGF5KSwgb3IgdGhlIE1lbnUgc2hvdWxkIGJlIFRha2VuIERvd24gKGkuZS4gd2hpbGUgdGhlIFxuICAgICAqIE1lbnUgaXMgdXAgb24gdGhlIHNjcmVlbikuXG4gICAgICovXG4gICAgI21lbnUgKCkge1xuICAgICAgICAvLyBNZW51IHRvIGJlIERpc3BsYXllZFxuICAgICAgICBpZiAodGhpcy5fa20uY29udHJvbGxlcikge1xuICAgICAgICAgICAgLy8gU2V0IE1lbnUgdG8gYmUgQ29udHJvbGxlZFxuICAgICAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fbWVudS5jb250cm9sbGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgTWVudVxuICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX21lbnUubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vIE1lbnUgdG8gYmUgVGFrZW4gRG93blxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNldCBLbmlnaHQgdG8gYmUgQ29udHJvbGxlZFxuICAgICAgICAgICAgdGhpcy5fa20uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gVGFrZSBEb3duIE1lbnUvU3ViLU1lbnVcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVudS5yZXNldFN1Yk1lbnVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQb3BVcCBmcm9tIFwiLi9wb3AtdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JCb3ggZXh0ZW5kcyBQb3BVcCB7XG4gICAgLyoqXG4gICAgICogRXJyb3IgQm94IENsYXNzXG4gICAgICogXG4gICAgICogVXNlZCBmb3IgdXBkYXRpbmcgdGhlIFVzZXIgd2l0aCB0aGUgY3VycmVudCBlcnJvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFwiRXJyb3JcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgTWVzc2FnZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItbWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX21lc3NhZ2UpO1xuXG4gICAgICAgIC8vIFNldCBBY3RpdmUgdG8gYmUgRmFsc2VcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UgKCkgeyByZXR1cm4gdGhpcy5fbWVzc2FnZTsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKGVsZW0pIHsgdGhpcy5fbWVzc2FnZSA9IGVsZW07IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBNZXNzYWdlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgRXJyb3IgQm94IHdpdGggdGhlIG1vc3QgdXAgdG8gZGF0ZSBlcnJvci5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHh0IEVycm9yIE1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRNZXNzYWdlICh0eHQpIHsgXG4gICAgICAgIHRoaXMuX21lc3NhZ2UudGV4dENvbnRlbnQgPSB0eHQ7IFxuICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgUG9wVXAgZnJvbSBcIi4vcG9wLXVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9Cb3ggZXh0ZW5kcyBQb3BVcCB7XG4gICAgLyoqXG4gICAgICogSW5mb3JtYXRpb24gQm94IENsYXNzXG4gICAgICogXG4gICAgICogVXNlZCBmb3IgdXBkYXRpbmcgdGhlIFVzZXIgd2l0aCBJbmZvcm1hdGlvbiByZWxhdGluZyB0byB0aGUgY3VycmVudCBHYW1lIFxuICAgICAqIGJlaW5nIHBsYXllZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFwiSW5mb3JtYXRpb25cIik7XG5cbiAgICAgICAgLy8gQnVpbGQgTWVzc2FnZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwiaW5mby1tZXNzYWdlXCIpO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fbWVzc2FnZSk7XG5cbiAgICAgICAgLy8gU2V0IEFjdGl2ZSB0byBiZSBGYWxzZVxuICAgICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZSAoKSB7IHJldHVybiB0aGlzLl9tZXNzYWdlOyB9XG5cbiAgICBzZXQgbWVzc2FnZSAoZWxlbSkgeyB0aGlzLl9tZXNzYWdlID0gZWxlbTsgfVxuXG4gICAgZ2V0IGFjdGl2ZSAoKSB7IHJldHVybiB0aGlzLl9hY3RpdmU7IH1cblxuICAgIHNldCBhY3RpdmUgKGJvb2wpIHsgdGhpcy5fYWN0aXZlID0gYm9vbDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb21wb25lbnRzIG9mIHRoZSBQb3AtVXAgQm94LCB0aGUgd2lkdGggYW5kIGhlaWdodCBhcmUgdG8gYmUgc2V0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBTY3JlZW4gV2lkdGggKHBpeGVscylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFNjcmVlbiBIZWlnaHQgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIFNldCBDb250YWluZXIgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgXG5cbiAgICAgICAgLy8gU2V0IEJsdXJyZWQgQmFja2dvdW5kIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgQm94IERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgYm94VyA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjkpO1xuICAgICAgICBjb25zdCBib3hIID0gTWF0aC5mbG9vcihoZWlnaHQgKiAwLjkpO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUud2lkdGggPSBgJHtib3hXfXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmhlaWdodCA9IGAke2JveEh9cHhgO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgQm94IFBvc2l0aW9uXG4gICAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLmZsb29yKHdpZHRoICogMC4xKTtcbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihoZWlnaHQgKiAwLjEpO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgICB0aGlzLl9ib3guc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgVGl0bGUgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBUaXRsZSBvZiB0aGUgSW5mb3JtYXRpb24gQm94LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eHQgTmV3IFRpdGxlXG4gICAgICovXG4gICAgc2V0VGl0bGUgKHR4dCkgeyB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IHR4dDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IE1lc3NhZ2UgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBJbmZvcm1hdGlvbiBCb3ggd2l0aCB0aGUgbmVjZXNzYXJ5IGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gdGhlIFxuICAgICAqIGdhbWUgYmVpbmcgcGxheWVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eHQgSW5mb3JtYXRpb24gTWVzc2FnZVxuICAgICAqL1xuICAgIHNldE1lc3NhZ2UgKHR4dCkgeyBcbiAgICAgICAgdGhpcy5fbWVzc2FnZS50ZXh0Q29udGVudCA9IHR4dDsgXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi4vYm9hcmQtbW9kdWxlL2JvYXJkLmpzXCI7XG5pbXBvcnQgS25pZ2h0c1RvdXIgZnJvbSBcIi4uL3B1enpsZXMva25pZ2h0cy10b3VyLmpzXCI7XG5pbXBvcnQgU2hvcnRlc3RQYXRoIGZyb20gXCIuLi9wdXp6bGVzL3Nob3J0ZXN0LXBhdGguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZ2h0c01hbmFnZXIge1xuICAgICNHQU1FX1RZUEVTID0ge1xuICAgICAgICBcIlNQXCI6IG51bGwsXG4gICAgICAgIFwiS1RcIjogbnVsbCxcbiAgICB9O1xuICAgICNUSEVNRVMgPSBbXG4gICAgICAgIFwiTm9ybWFsXCIsXG4gICAgICAgIFwiUmV0cm9cIixcbiAgICAgICAgXCJGdXR1cmVcIixcbiAgICAgICAgXCJOZW9uXCIsXG4gICAgICAgIFwiVGVybWluYWxcIixcbiAgICAgICAgXCJGYW50YXN5XCJcbiAgICBdO1xuXG4gICAgLyoqXG4gICAgICogS25pZ2h0J3MgR2FtZSBNYW5hZ2VyIENsYXNzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBLbmlnaHQncyBHYW1lLCB0aGlzIE1hbmFnZXIgQ2xhc3Mgd2lsbCBIYW5kbGUgVUkgQ29tcG9uZW50cyBzdWNoXG4gICAgICogYXMgdGhlIEN1cnJlbnQgTW92ZSBDb3VudCwgdGhlIEdhbWUgYmVpbmcgUGxheWVkLCB0aGUgQ2hlc3Nib2FyZCBhbmQgaXRzXG4gICAgICogYXNzb2NpYXRlZCBlbGVtZW50cywgYW5kIHdoZXRoZXIgdGhlIFVzZXIgaXMgY29tcGxldGluZyB0aGUgUHV6emxlIG9yIHRoZVxuICAgICAqIEFsZ29yaXRobSBpcy4gSXQgbWFuYWdlcyB0aGUgQWN0aW9ucyBvbiB0aGUgQ2hlc3Nib2FyZCB3aXRoIHRoZSBwYXJlbnQgXG4gICAgICogR2FtZSBJbnRlcmZhY2UuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGNvbXBsZXRlQ2FsbGJhY2sgUHV6emxlIENvbXBsZXRlIENhbGxiYWNrXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgR2FtZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcImtuaWdodHMtZ2FtZS1tb2R1bGVcIik7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgSW5mbyBDb21wb25lbnQgRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5faW5mb3JtYXRpb24uY2xhc3NMaXN0LmFkZChcImluZm8tY29tcG9uZW50c1wiKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBQbGF5ZXIgSW5mbyBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9wbGF5ZXIuY2xhc3NMaXN0LmFkZChcInBsYXllci1pbmZvXCIpO1xuICAgICAgICB0aGlzLl9wbGF5ZXIudGV4dENvbnRlbnQgPSBcIkhcIjtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBTdGVwcyBUYWtlbiBJbmZvIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJzdGVwcy10YWtlblwiKTtcbiAgICAgICAgdGhpcy5fY3VycmVudC50ZXh0Q29udGVudCA9IDA7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgR2FtZSBUeXBlIEluZm8gRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fdHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3R5cGUuY2xhc3NMaXN0LmFkZChcImdhbWUtdHlwZVwiKTtcbiAgICAgICAgdGhpcy5fdHlwZS50ZXh0Q29udGVudCA9IFwiU1BcIjtcblxuICAgICAgICAvLyBBcHBlbmQgSW5mbyBDb21wb25lbnRzIHRvIEluZm9ybWF0aW9uXG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uLmFwcGVuZENoaWxkKHRoaXMuX3BsYXllcik7XG4gICAgICAgIHRoaXMuX2luZm9ybWF0aW9uLmFwcGVuZENoaWxkKHRoaXMuX2N1cnJlbnQpO1xuICAgICAgICB0aGlzLl9pbmZvcm1hdGlvbi5hcHBlbmRDaGlsZCh0aGlzLl90eXBlKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIE9iamVjdHNcbiAgICAgICAgdGhpcy5fYm9hcmQgPSBuZXcgQm9hcmQoY29tcGxldGVDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuI0dBTUVfVFlQRVNbXCJTUFwiXSA9IG5ldyBTaG9ydGVzdFBhdGgoXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5rbmlnaHQueCxcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkLmtuaWdodC55LFxuICAgICAgICAgICAgOFxuICAgICAgICApO1xuICAgICAgICB0aGlzLiNHQU1FX1RZUEVTW1wiS1RcIl0gPSBuZXcgS25pZ2h0c1RvdXIoXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5rbmlnaHQueCxcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkLmtuaWdodC55LFxuICAgICAgICAgICAgOFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEFwcGVuZCBBbGwgQ29tcG9uZW50cyB0byBNb2R1bGVcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2JvYXJkLm1vZHVsZSk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9pbmZvcm1hdGlvbik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2h1bWFuID0gdHJ1ZTsgLy8gRGVmYXVsdCBpcyBVc2VyIE1vdmVzXG4gICAgICAgIHRoaXMuX2dhbWUgPSB0aGlzLiNHQU1FX1RZUEVTW3RoaXMuX3R5cGUudGV4dENvbnRlbnRdO1xuICAgICAgICB0aGlzLl9wYXRoID0gW107XG4gICAgICAgIHRoaXMuX3N0ZXBzID0ge2h1bWFuOiAwLCBhbGdvcml0aG06IDB9O1xuICAgICAgICB0aGlzLl9tc2cgPSBcIlwiO1xuXG4gICAgICAgIC8vIFNldCB0aGUgRGVmYXVsdCBUaGVtZVxuICAgICAgICB0aGlzLnNldFRoZW1lKHRoaXMuI1RIRU1FU1swXSk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxuXG4gICAgZ2V0IGJvYXJkICgpIHsgcmV0dXJuIHRoaXMuX2JvYXJkOyB9XG5cbiAgICBzZXQgYm9hcmQgKG9iaikgeyB0aGlzLl9ib2FyZCA9IG9iajsgfVxuXG4gICAgZ2V0IGNvbnRyb2xsZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbGxlcjsgfVxuXG4gICAgc2V0IGNvbnRyb2xsZXIgKGJvb2wpIHsgdGhpcy5fY29udHJvbGxlciA9IGJvb2w7IH1cblxuICAgIGdldCBodW1hbiAoKSB7IHJldHVybiB0aGlzLl9odW1hbjsgfVxuXG4gICAgc2V0IGh1bWFuIChib29sKSB7IHRoaXMuX2h1bWFuID0gYm9vbDsgfVxuXG4gICAgZ2V0IGdhbWUgKCkgeyByZXR1cm4gdGhpcy5fZ2FtZTsgfVxuXG4gICAgc2V0IGdhbWUgKG9iaikgeyB0aGlzLl9nYW1lID0gb2JqOyB9XG5cbiAgICBnZXQgcGF0aCAoKSB7IHJldHVybiB0aGlzLl9wYXRoOyB9XG5cbiAgICBzZXQgcGF0aCAoYXJyKSB7IHRoaXMuX3BhdGggPSBhcnI7IH1cblxuICAgIGdldCBzdGVwcyAoKSB7IHJldHVybiB0aGlzLl9zdGVwczsgfVxuXG4gICAgc2V0IHN0ZXBzIChkaWN0KSB7IHRoaXMuX3N0ZXBzID0gZGljdDsgfVxuICAgIFxuICAgIGdldCBtZXNzYWdlICgpIHsgcmV0dXJuIHRoaXMuX21zZzsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKHN0cikgeyB0aGlzLl9tc2cgPSBzdHI7IH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldHMgdXAgdGhlIERpc3BsYXkgZm9yIHRoZSBHYW1lLCBpbmNsdWRpbmcgdGhlIGJvYXJkLCB0aGUgaW5mb3JtYXRpb24gXG4gICAgICogcGFuZWwgYW5kIHRoZSBzdWItbW9kdWxlcyBmb3IgdGhlIGdhbWUsIHN1Y2ggYXMgdGhlIFNob3J0ZXN0IFBhdGgsIHRoZSBcbiAgICAgKiBLbmlnaHQncyBUb3VyLCBhbmQgdGhlIFN0YXJ0IFNjcmVlbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0dXAgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gU2V0IEdhbWUgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuXG4gICAgICAgIC8vIFNldCBCb2FyZCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGRpbSA9IE1hdGguZmxvb3IoTWF0aC5taW4od2lkdGgsIGhlaWdodCkgKiAwLjkpO1xuICAgICAgICB0aGlzLl9ib2FyZC5zZXREaW1lbnNpb25zKGRpbSk7XG5cbiAgICAgICAgLy8gU2V0IEluZm9ybWF0aW9uIFBhbmVsIEZvbnQgU2l6ZVxuICAgICAgICB0aGlzLl9pbmZvcm1hdGlvbi5zdHlsZS5mb250U2l6ZSA9IE1hdGguZmxvb3IoZGltICogMC4yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgR2FtZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIEdhbWUgdGhlIFVzZXIgaXMgUGxheWluZy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ2FtZSBHYW1lIE5hbWVcbiAgICAgKi9cbiAgICBzZXRHYW1lIChnYW1lKSB7XG4gICAgICAgIC8vIEhhbmRsZSBTaG9ydGVzdCBQYXRoIFB1enpsZVxuICAgICAgICBpZiAoZ2FtZSA9PT0gXCJTaG9ydGVzdC1QYXRoXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2dhbWUgPSB0aGlzLiNHQU1FX1RZUEVTW1wiU1BcIl07XG4gICAgICAgICAgICB0aGlzLl90eXBlLnRleHRDb250ZW50ID0gXCJTUFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBLbmlnaHQncyBUb3VyIFB1enpsZVxuICAgICAgICBpZiAoZ2FtZSA9PT0gXCJLbmlnaHRzLVRvdXJcIikge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZSA9IHRoaXMuI0dBTUVfVFlQRVNbXCJLVFwiXTtcbiAgICAgICAgICAgIHRoaXMuX3R5cGUudGV4dENvbnRlbnQgPSBcIktUXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgVGhlbWUgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBTdHlsaW5nIHRvIFJlZmxlY3QgdGhlIFRoZW1lIFNlbGVjdGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aGVtZSBUaGVtZSBOYW1lXG4gICAgICovXG4gICAgc2V0VGhlbWUgKHRoZW1lKSB7XG4gICAgICAgIC8vIEdldCBSb290IEVsZW1lbnRcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcm9vdC5jbGFzc05hbWUgPSB0aGVtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBLbmlnaHQncyBJY29uXG4gICAgICAgIHRoaXMuX2JvYXJkLnNldFRoZW1lKHRoZW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCBhbGwgdmFyaWFibGVzIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcywgYW5kIHNldCB0aGUgYm9hcmQgc28gdGhhdCB0aGUgXG4gICAgICogdGlsZXMgYXJlbid0IGhpZ2hsaWdodGVkLlxuICAgICAqL1xuICAgIHJlc2V0ICgpIHtcbiAgICAgICAgLy8gUmVzZXQgVmFsdWVzIG9uIERpc3BsYXlcbiAgICAgICAgdGhpcy5fcGxheWVyLnRleHRDb250ZW50ID0gXCJIXCI7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQudGV4dENvbnRlbnQgPSAwO1xuXG4gICAgICAgIC8vIFJlc2V0IFN0ZXBzIFRha2VuXG4gICAgICAgIHRoaXMuX3N0ZXBzLmh1bWFuID0gMDtcbiAgICAgICAgdGhpcy5fc3RlcHMuYWxnb3JpdGhtID0gMDtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFtdO1xuXG4gICAgICAgIC8vIFJlc2V0IFRpbGVzXG4gICAgICAgIHRoaXMuX2JvYXJkLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSG9yaXpvbnRhbCBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1vdmluZyB0aGUgQ3Vyc29yIFJpZ2h0IG9yIExlZnQgb24gdGhlIENoZXNzYm9hcmQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSByaWdodCBEZWZhdWx0IEFjdGlvbiBpcyBSaWdodHdhcmRzXG4gICAgICovXG4gICAgaG9yaXpvbnRhbE1vdmUgKHJpZ2h0PXRydWUpIHsgdGhpcy5fYm9hcmQuaG9yaXpvbnRhbE1vdmUocmlnaHQpOyB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJ0aWNhbCBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1vdmluZyB0aGUgQ3Vyc29yIFVwIG9yIERvd24gb24gdGhlIENoZXNzYm9hcmQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1cCBEZWZhdWx0IEFjdGlvbiBpcyBVcHdhcmRzXG4gICAgICovXG4gICAgdmVydGljYWxNb3ZlICh1cD10cnVlKSB7IHRoaXMuX2JvYXJkLnZlcnRpY2FsTW92ZSh1cCk7IH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VwdCBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogRHVyaW5nIHRoZSBnYW1lLCBpZiBhbiBlcnJvciBvY2N1cnMsIHNheSB3aGVuIGFuIGlsbGVnYWwgbW92ZSBpcyBtYWRlLCBcbiAgICAgKiB0aGVuIGEgbWVzc2FnZSBzaG91bGQgYmUgYWJsZSB0byBiZSB2aWV3ZWQgYnkgdGhlIHVzZXIuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGVyZSBhcmUgbm8gRXJyb3JzXG4gICAgICovXG4gICAgYWNjZXB0QWN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuX2JvYXJkLmFjY2VwdEFjdGlvbigpO1xuICAgICAgICBpZiAobWVzc2FnZSAhPT0gXCJcIikgeyBcbiAgICAgICAgICAgIC8vIFNldCBFcnJvciBNZXNzYWdlXG4gICAgICAgICAgICB0aGlzLl9tc2cgPSBtZXNzYWdlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgd2l0aCBFcnJvciBNZXNzYWdlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbmNyZW1lbnQgU3RlcHMgaWYgUHV6emxlIGhhcyBDb21tZW5jZWRcbiAgICAgICAgaWYgKHRoaXMuX2JvYXJkLnB1enpsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9zdGVwcy5odW1hbiArPSAxO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudC50ZXh0Q29udGVudCA9IHRoaXMuX3N0ZXBzLmh1bWFuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHdpdGggbm8gRXJyb3IgTWVzc2FnZVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNsaW5lIEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGlsZSBTb2x2aW5nIHRoZSBQdXp6bGUsIHRoZSBVc2VyIGNhbiB1c2UgdGhlIEIgQnV0dG9uIGFzIGFuIFVuZG8gYnV0dG9uLlxuICAgICAqL1xuICAgIGRlY2xpbmVBY3Rpb24gKCkgeyB0aGlzLl9ib2FyZC5kZWNsaW5lQWN0aW9uKCk7IH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdGlvbiBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogRHVyaW5nIHRoZSBHYW1lLCBpZiB0aGUgVXNlciBwcmVzc2VzIFNlbGVjdCwgdGhlbiBlaXRoZXIgdGhlIFVzZXIgaXMgXG4gICAgICogc2VsZWN0aW5nIGFuIEluaXRpYWwgUG9zaXRpb24gZm9yIHRoZSBLbmlnaHQsIG9yIHRoZXkgYXJlIHJlcXVlc3RpbmcgYSBcbiAgICAgKiBTb2x1dGlvbiBmb3IgdGhlIFB1enpsZS5cbiAgICAgKi9cbiAgICBzZWxlY3RBY3Rpb24gKCkge1xuICAgICAgICAvLyBDaGVjayBpZiBLbmlnaHQncyBUb3VyIGlzIHRoZSBTZWxlY3RlZCBQdXp6bGVcbiAgICAgICAgbGV0IGNoZWNrID0gdGhpcy5fdHlwZS50ZXh0Q29udGVudCA9PT0gXCJLVFwiO1xuXG4gICAgICAgIC8vIEhhbmRsZSBSZXF1ZXN0IGZvciBTb2x1dGlvblxuICAgICAgICBpZiAodGhpcy5fZ2FtZS5nZW5lcmF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkLnNlbGVjdEFjdGlvbihcbiAgICAgICAgICAgICAgICBjaGVjaywgXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZS5hbGdvcml0aG0sIFxuICAgICAgICAgICAgICAgIHRoaXMuI21vdmVDYWxsYmFjay5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5faHVtYW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci50ZXh0Q29udGVudCA9IFwiQVwiO1xuICAgICAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIFNlbGVjdGluZyBJbml0aWFsIFBvc2l0aW9uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYm9hcmQuc2VsZWN0QWN0aW9uKGNoZWNrLCBbXSwgdGhpcy4jbW92ZUNhbGxiYWNrLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBQdXp6bGVcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9ib2FyZC5nZXRSb290KCk7XG4gICAgICAgICAgICBjb25zdCBncmFwaCA9IHRoaXMuX2JvYXJkLmdldEdyYXBoKCk7XG4gICAgICAgICAgICB0aGlzLl9nYW1lLmdlbmVyYXRlKHJvb3QueCwgcm9vdC55LCBncmFwaCk7XG5cbiAgICAgICAgICAgIC8vIElmIFNob3J0ZXN0IFBhdGgsIFVwZGF0ZSBHb2FsIFRpbGVcbiAgICAgICAgICAgIGlmICghY2hlY2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBnb2FsID0gdGhpcy5fZ2FtZS5nb2FsO1xuICAgICAgICAgICAgICAgIHRoaXMuX2JvYXJkLnNldEdvYWwoZ29hbC54LCBnb2FsLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVc2VkIGZvciBNb3ZpbmcgdGhlIEtuaWdodCBkdXJpbmcgcHJvbXB0aW5nLCB0aGUgbWV0aG9kIHdpbGwgYWxzbyBcbiAgICAgKiBpbmNyZW1lbnQgdGhlIHN0ZXBzIG9uIHRoZSBVSS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBOZXh0IFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBOZXh0IFktUG9zaXRpb25cbiAgICAgKi9cbiAgICAjbW92ZUNhbGxiYWNrICh4LCB5KSB7XG4gICAgICAgIC8vIFVwZGF0ZSBVSSBNb3ZlIENvdW50IEVsZW1lbnRcbiAgICAgICAgdGhpcy5fc3RlcHMuYWxnb3JpdGhtICs9IDE7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQudGV4dENvbnRlbnQgPSB0aGlzLl9zdGVwcy5hbGdvcml0aG07XG5cbiAgICAgICAgLy8gTW92ZSBLbmlnaHQgdG8gRGVzaXJlZCBDb29yZGluYXRlXG4gICAgICAgIHRoaXMuX2JvYXJkLm1vdmUoeCwgeSk7XG4gICAgfVxufSIsImltcG9ydCBQb3BVcCBmcm9tIFwiLi9wb3AtdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUJhc2UgZXh0ZW5kcyBQb3BVcCB7XG4gICAgLyoqXG4gICAgICogTWVudSBCYXNlIENsYXNzXG4gICAgICogXG4gICAgICogQmFzZSBDbGFzcyBmb3IgTWFpbiBNZW51cyBvciBTdWItTWVudXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhdGVnb3JpZXMgQ2F0ZWdvcmllcyBmb3IgTWVudVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjYXRlZ29yaWVzKSB7XG4gICAgICAgIHN1cGVyKFwiTWVudVwiKTtcblxuICAgICAgICAvLyBCdWlsZCBPcHRpb24gRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgY2F0ZWdvcmllcy5zdWJzLmZvckVhY2goc3ViID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBvcHRpb24uaWQgPSBgJHtzdWIua2V5LnRvTG93ZXJDYXNlKCl9LW9wdGlvbmA7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBzdWIua2V5O1xuICAgICAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQnVpbGQgUmV0dXJuIE9wdGlvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9yZXR1cm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9yZXR1cm4uY2xhc3NMaXN0LmFkZChcInJldHVybi1vcHRpb25cIik7XG4gICAgICAgIHRoaXMuX3JldHVybi50ZXh0Q29udGVudCA9IFwiUmV0dXJuXCI7XG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl9yZXR1cm4pO1xuXG4gICAgICAgIC8vIFNldHVwIEN1cnNvclxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5zZXRDdXJzb3IoKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9uYW1lID0gY2F0ZWdvcmllcy5rZXk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0ge1xuICAgICAgICAgICAga2V5OiB0aGlzLl9uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgb3B0aW9ucyAoKSB7IHJldHVybiB0aGlzLl9vcHRpb25zOyB9XG5cbiAgICBzZXQgb3B0aW9ucyAoYXJyKSB7IHRoaXMuX29wdGlvbnMgPSBhcnI7IH1cblxuICAgIGdldCByZXR1cm4gKCkgeyByZXR1cm4gdGhpcy5fcmV0dXJuOyB9XG5cbiAgICBzZXQgcmV0dXJuIChlbGVtKSB7IHRoaXMuX3JldHVybiA9IGVsZW07IH1cblxuICAgIGdldCBuYW1lICgpIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cblxuICAgIHNldCBuYW1lIChzdHIpIHsgdGhpcy5fbmFtZSA9IHN0cjsgfVxuXG4gICAgZ2V0IHNlbGVjdGVkICgpIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkOyB9XG5cbiAgICBzZXQgc2VsZWN0ZWQgKGRpY3QpIHsgdGhpcy5fc2VsZWN0ZWQgPSBkaWN0OyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgRGltZW5zaW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIENvbXBvbmVudHMgb2YgdGhlIE1lbnUgQm94LCB0aGUgd2lkdGggYW5kIGhlaWdodCBhcmUgdG8gYmUgc2V0LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBTY3JlZW4gV2lkdGggKHBpeGVscylcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFNjcmVlbiBIZWlnaHQgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHN1cGVyLnNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgLy8gU2V0IE9wdGlvbnMgV2lkdGhcbiAgICAgICAgY29uc3QgYm94VyA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjYpO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5zdHlsZS53aWR0aCA9IGAke2JveFd9cHhgO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmV0dXJuLnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEN1cnNvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGlsZSBjeWNsaW5nIHRocm91Z2ggdGhlIE1lbnUgT3B0aW9ucywgaWYgdGhlIGN1cnNvciBpcyBvbiBhbiBvcHRpb24sIFxuICAgICAqIHRoZW4gdGhlIG9wdGlvbiBzaG91bGQgYmUgaGlnaGxpZ2h0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbiBDdXJzb3Igb24gT3B0aW9uXG4gICAgICovXG4gICAgc2V0Q3Vyc29yIChvbj10cnVlKSB7XG4gICAgICAgIC8vIEhhbmRsZSBSZXR1cm4gT3B0aW9uXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50ID09PSB0aGlzLl9vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSB0aGlzLl9yZXR1cm4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY3Vyc29yXCIpO1xuICAgICAgICAgICAgaWYgKG9uICYmICFjaGVjaylcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXR1cm4uY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmICghb24gJiYgY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3JcIik7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIEhhbmRsZSBPdGhlciBPcHRpb25zXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLmNsYXNzTGlzdC5jb250YWlucyhcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmIChvbiAmJiAhY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yXCIpO1xuICAgICAgICAgICAgaWYgKCFvbiAmJiBjaGVjaylcbiAgICAgICAgICAgICAgICB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3JcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJ0aWNhbCBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1vdmluZyB0aGUgQ3Vyc29yIFVwIG9yIERvd24gb24gdGhlIE1lbnUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1cCBEZWZhdWx0IEFjdGlvbiBpcyBVcHdhcmRzXG4gICAgICovXG4gICAgdmVydGljYWxNb3ZlICh1cD10cnVlKSB7XG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50ICsgKHVwID8gLTEgOiAxKTtcbiAgICAgICAgaWYgKGN1cnIgPD0gdGhpcy5fb3B0aW9ucy5sZW5ndGggJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gY3VycjtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2NlcHQgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENob29zZXMgdGhlIE9wdGlvbiBvbiB0aGUgTWVudSB0aGF0IHRoZSBVc2VyIGhhcyBzZWxlY3RlZCwgcmV0dXJuaW5nIHRydWUgXG4gICAgICogaW1wbGllcyB0aGF0IGFuIG9wdGlvbiB3YXMgc2VsZWNjdGVkLCBmYWxzZSBpbXBsaWVzIHRoYXQgdGhlIHJldHVybiBvcHRpb24gXG4gICAgICogd2FzIHNlbGVjdGVkLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRydWUgZm9yIGFuIE9wdGlvbiwgRmFsc2UgZm9yIFJldHVyblxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBSZXR1cm4gU2VsZWN0XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50ID09PSB0aGlzLl9vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIE9wdGlvbnMgU2VsZWN0XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkLnZhbHVlID0gdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSIsImltcG9ydCBNZW51QmFzZSBmcm9tIFwiLi9tZW51LWJhc2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIE1lbnVCYXNlIHtcbiAgICAvKipcbiAgICAgKiBNZW51IENsYXNzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBnaXZlbiBDYXRlZ29yaWVzIGZvciB0aGUgTWVudSwgYSBkaXNwbGF5IHdpbGwgYmUgcHJlc2VudGVkIHRvIFxuICAgICAqIHRoZSBVc2VyIGZvciB0aGVtIHRvIFNlbGVjdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2F0ZWdvcmllcyBKU09OIE9iamVjdCBvZiBNZW51IENhdGVnb3JpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY2F0ZWdvcmllcykge1xuICAgICAgICBzdXBlcihjYXRlZ29yaWVzKTtcblxuICAgICAgICAvLyBCdWlsZCBTdWItTWVudXNcbiAgICAgICAgdGhpcy5fc3VicyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBDcmVhdGUgU3ViLU1lbnUgaWYgTmVjZXNzYXJ5XG4gICAgICAgICAgICBpZiAoc3ViLnN1YnMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHN1Yi5rZXksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZW51OiBuZXcgTWVudShzdWIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBzdWJzICgpIHsgcmV0dXJuIHRoaXMuX3N1YnM7IH1cblxuICAgIHNldCBzdWJzIChhcnIpIHsgdGhpcy5fc3VicyA9IGFycjsgfVxuXG4gICAgZ2V0IGNvbnRyb2xsZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbGxlcjsgfVxuXG4gICAgc2V0IGNvbnRyb2xsZXIgKGJvb2wpIHsgdGhpcy5fY29udHJvbGxlciA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgTWVudSBCb3gsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSB0byBiZSBzZXQuIFxuICAgICAqIEFkZGl0aW9uYWxseSwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIFN1Yi1NZW51IENvbXBvbmVudHMgYXJlIHRvIGJlIFxuICAgICAqIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBIYW5kbGUgTWVudSBEaW1lbnNpb25zXG4gICAgICAgIHN1cGVyLnNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fc3Vicy5mb3JFYWNoKHN1YiA9PiB7IHN1Yi5tZW51LnNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCk7IH0pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgU3ViLU1lbnUgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0cyB0aGUgU3ViLU1lbnUgU2VsZWN0ZWQgYnkgdGhlIFVzZXIgdG8gYmUgb24gRGlzcGxheS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBTdWItTWVudSBET00gRWxlbWVudFxuICAgICAqL1xuICAgIHNldFN1Yk1lbnUgKCkge1xuICAgICAgICB0aGlzLl9zdWJzW3RoaXMuX2N1cnJlbnRdLmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3Vic1t0aGlzLl9jdXJyZW50XS5tZW51O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IFN1Yi1NZW51cyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXRzIHRoZSBNYWluIE1lbnUgdG8gYmUgb24gRGlzcGxheS5cbiAgICAgKi9cbiAgICByZXNldFN1Yk1lbnVzICgpIHsgdGhpcy5fc3Vicy5mb3JFYWNoKHN1YiA9PiB7IHN1Yi5jb250cm9sbGVyID0gZmFsc2U7IH0pOyB9XG59IiwiaW1wb3J0IFwiLi9wb3AtdXAtc3R5bGluZy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIFBvcC1VcCBDbGFzc1xuICAgICAqIFxuICAgICAqIFNldmVyYWwgQ29tcG9uZW50cyB0byB0aGUgR2FtZSByZXF1aXJlIGEgUG9wLVVwIEJveCwgYW5kIHRoaXMgQ2xhc3MgXG4gICAgICogUmVwcmVzZW50cyB0aGF0IEJveC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIGZvciBQb3AtVXBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICAvLyBCdWlsZCBQb3AtVXAgQ29udGFpbmVyIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX21vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tY29udGFpbmVyYCk7XG4gICAgICAgIFxuICAgICAgICAvLyBCdWlsZCBQb3AtVXAgQm94IERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2JveC5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tYm94YCk7XG5cbiAgICAgICAgLy8gQnVpbGQgVGl0bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl90aXRsZS5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tdGl0bGVgKTtcbiAgICAgICAgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fdGl0bGUpO1xuXG4gICAgICAgIC8vIEJ1aWxkIEJsdXJyZWQgQmFja2dyb3VuZCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9ibHVycmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5jbGFzc0xpc3QuYWRkKFwiYmx1cnJlZC1iYWNrZ3JvdW5kXCIpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBDb21wb25lbnRzIHRvIE1vZHVsZVxuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fYmx1cnJlZCk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9ib3gpO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgUG9wLVVwIEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBTZXQgQ29udGFpbmVyIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuXG4gICAgICAgIC8vIFNldCBCbHVycmVkIEJhY2tnb3VuZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGJveFcgPSBNYXRoLmZsb29yKHdpZHRoICogMC42KTtcbiAgICAgICAgY29uc3QgYm94SCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC42KTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5oZWlnaHQgPSBgJHtib3hIfXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBQb3NpdGlvblxuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuMik7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC4yKTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgfVxufSIsImltcG9ydCBQdXp6bGVNb2R1bGUgZnJvbSBcIi4vcHV6emxlLW1vZHVsZS5qc1wiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuLi8uLi9kYXRhLXN0cnVjdHVyZXMvZ3JhcGguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS25pZ2h0c1RvdXIgZXh0ZW5kcyBQdXp6bGVNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIEtuaWdodCdzIFRvdXIgUHV6emxlXG4gICAgICogXG4gICAgICogVXRpbGlzaW5nIFdhcm5zZG9yZmYncyBBbGdvcml0aG0sIHRoaXMgUHV6emxlIENsYXNzIGRvZXMgbm90IGZpbmQgYSBnb2FsXG4gICAgICogdmVydGV4IHRoYXQgdGhlIFVzZXIgbXVzdCBuYXZpZ2F0ZSB0bywgYnV0IGluc3RlYWQsIHRoZSBVc2VyIG11c3QgbmF2aWdhdGVcbiAgICAgKiBhcm91bmQgdGhlIENoZXNzYm9hcmQsIGV4cGxvcmluZyBldmVyeSBzaW5nbGUgdGlsZSBleGFjdGx5IG9uY2UuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggSW5pdGlhbCBYLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgSW5pdGlhbCBZLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgQ2hlc3Nib2FyZCBTaXplXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHgsIHksIHNpemUpIHtcbiAgICAgICAgc3VwZXIoeCwgeSwgc2l6ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHV6emxlIFRpdGxlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybnMgdGhlIFRpdGxlIG9mIHRoZSBQdXp6bGUuXG4gICAgICogXG4gICAgICogQHJldHVybnMgUHV6emxlIFRpdGxlXG4gICAgICovXG4gICAgcHV6emxlVGl0bGUgKCkgeyByZXR1cm4gXCJLbmlnaHQncyBUb3VyXCI7IH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBQdXp6bGUgSW5mb3JtYXRpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogTWVzc2FnZSBhYm91dCB0aGUgUHV6emxlcyBJbmZvcm1hdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBQdXp6bGUgSW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBwdXp6bGVJbmZvICgpIHsgXG4gICAgICAgIHJldHVybiBcIkdpdmVuIHRoZSA4IGJ5IDggYm9hcmQsIHVzZSB0aGUgU2VsZWN0IFwiICtcbiAgICAgICAgICAgIFwiQnV0dG9uIHRvIGNob29zZSB5b3VyIEluaXRpYWwgVGlsZS4gVGhlbiB5b3UgXCIgK1xuICAgICAgICAgICAgXCJ3aWxsIG5lZWQgdG8gbW92ZSB0aGUgS25pZ2h0LCBhY2NvcmRpbmcgdG8gdGhlIFwiICtcbiAgICAgICAgICAgIFwicnVsZXMgb2YgY2hlc3MsIHN1Y2ggdGhhdCBpdCB2aXNpdHMgZXZlcnkgdGlsZSBcIiArXG4gICAgICAgICAgICBcIm9uIHRoZSBjaGVzc2JvYXJkIGV4YWN0bHkgb25jZS5cXG5CeSBjbGlja2luZyBcIiArXG4gICAgICAgICAgICBcInRoZSBTZWxlY3QgYnV0dG9uIGFnYWluLCB0aGUga25pZ2h0IHdpbGwgYXV0b21hdGljYWxseSBcIiArXG4gICAgICAgICAgICBcIm1vdmUgYW5kIHZpc2l0IGVhY2ggdGlsZSBleGFjdGx5IG9uY2UuXFxuXCIgK1xuICAgICAgICAgICAgXCJUbyByZXNldCwgcHJlc3Mgc3RhcnQgYW5kIHNlbGVjdCB0aGUgU2hvcnRlc3QgUGF0aCBwdXp6bGUuXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5kIG9mIFB1enpsZSBJbmZvcm1hdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGVuIHRoZSBQdXp6bGUgaGFzIGJlZW4gY29tcGxldGVkLCBlaXRoZXIgYnkgdGhlIFVzZXIgb3IgYnkgdGhlIEFsZ29yaXRobSwgXG4gICAgICogdGhlbiBhIG1lc3NhZ2Ugc2hvdWxkIGJlIHByZXNlbnRlZCB0byB0aGUgVXNlciBhYm91dCBob3cgd2VsbCB0aGUgcHV6emxlIFxuICAgICAqIHdhcyBjb21wbGV0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBodW1hbiBIdW1hbiBvciBBbGdvcml0aG1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RlcHMgTnVtYmVyIG9mIFN0ZXBzIHRvIENvbXBsZXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aCBQYXRoIHRha2VuXG4gICAgICogQHJldHVybnMgRW5kIG9mIFB1enpsZSBJbmZvcmFtdGlvblxuICAgICAqL1xuICAgIGVuZEluZm8gKGh1bWFuLCBzdGVwcywgcGF0aCkgeyBcbiAgICAgICAgLy8gVG9nZ2xlIEdlbmVyYXRlZFxuICAgICAgICB0aGlzLl9nZW5lcmF0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBNYWluIE1lc3NhZ2VcbiAgICAgICAgbGV0IG1zZyA9IGh1bWFuID8gXG4gICAgICAgICAgICBgQ29uZ3JhdHVsYXRpb25zISBZb3UgY29tcGxldGVkIHRoZSBwdXp6bGUgYCArXG4gICAgICAgICAgICBgaW4gJHtzdGVwc30gc3RlcHMhXFxuVGhlIEFsZ29yaXRobSdzIGJlc3QgYCArXG4gICAgICAgICAgICBgd2FzICR7dGhpcy5fYWxnb3JpdGhtX3BhdGgubGVuZ3RofSBzdGVwcy5gIDogXG4gICAgICAgICAgICBgV2FybnNkb3JmZidzIEFsZ29yaXRobSBmb3VuZCBhIHBhdGggaW4gYCArXG4gICAgICAgICAgICBgJHtzdGVwc30gc3RlcHMuYDtcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gbXNnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgS25pZ2h0J3MgVG91ciBQdXp6bGUsIFdhcm5zZG9yZmYncyBBbGdvcml0aG0gaXMgaW1wbGVtZW50ZWQgdG8gXG4gICAgICogZmluZCBhIGZ1bGwgdG91ciBvZiB0aGUgQ2hlc3Nib2FyZCwgdGhlIGFsZ29yaXRobSBjYW4gYmUgYnJva2VuIGRvd24gXG4gICAgICogdXNpbmcgV2FybnNkb3JmZidzIFJ1bGU6XG4gICAgICogIDEuIFN0YXJ0IGZyb20gYW55IGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIEtuaWdodCBvbiB0aGUgYm9hcmQuXG4gICAgICogIDIuIEFsd2F5cyBtb3ZlIHRvIGFuIGFkamFjZW50LCB1bnZpc2l0ZWQgdGlsZSB3aXRoIG1pbmltYWwgZGVncmVlIChpLmUuXG4gICAgICogICAgIG1pbmltdW0gbnVtYmVyIG9mIHVudmlzaXRlZCBhZGphY2VudCB0aWxlcykuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggUm9vdCBYLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgUm9vdCBZLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtHcmFwaH0gZ3JhcGggR3JhcGggb2YgQ2hlc3Nib2FyZFxuICAgICAqL1xuICAgIGdlbmVyYXRlICh4LCB5LCBncmFwaCkge1xuICAgICAgICAvLyBHZXQgUm9vdCBWZXJ0ZXhcbiAgICAgICAgY29uc3Qgcm9vdCA9IGdyYXBoLmdldFZlcnRleCh4LCB5KTtcblxuICAgICAgICAvLyBTZXQgQWxsIFZlcnRpY2VzIE1vdmUgdG8gYmUgMFxuICAgICAgICBmb3IgKGxldCB2IG9mIGdyYXBoLnZlcnRpY2VzKCkpIHtcbiAgICAgICAgICAgIHYubW92ZSA9IDA7XG4gICAgICAgICAgICB2LnZpc2l0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBSb290IHRvIGJlIDFzdCBNb3ZlXG4gICAgICAgIHJvb3QubW92ZSA9IDE7XG4gICAgICAgIHJvb3QudmlzaXRlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gQnVpbGQgUmV2ZXJzZSBQYXRoXG4gICAgICAgIGxldCBiYWNrd2FyZHMgPSBbcm9vdF07XG5cbiAgICAgICAgLy8gU2V0dXAgVmVydGV4IHRvIEN5Y2xlIHRocm91Z2ggVmVydGljZXNcbiAgICAgICAgbGV0IGxhc3QgPSByb290Lm1vdmU7XG4gICAgICAgIGxldCBhdXggPSByb290O1xuICAgICAgICB3aGlsZSAoYXV4Lm1vdmUgIT09IE1hdGgucG93KHRoaXMuX3NpemUsIDIpKSB7XG4gICAgICAgICAgICAvLyBGaW5kIE5laWdoYm91ciB3aXRoIEZld2VzdCBOZWlnYm91cnNcbiAgICAgICAgICAgIGxldCBtaW4gPSAxMDAwMDAwO1xuICAgICAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdXgubmVpZ2hib3Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBOZWlnaGJvdXJcbiAgICAgICAgICAgICAgICBsZXQgbmVpZ2hib3VyID0gZ3JhcGguZ2V0VmVydGV4KFxuICAgICAgICAgICAgICAgICAgICBhdXgubmVpZ2hib3Vyc1tpXS54LCBcbiAgICAgICAgICAgICAgICAgICAgYXV4Lm5laWdoYm91cnNbaV0ueVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBDb3VudCBOdW1iZXIgb2YgVW52aXNpdGVkIE5laWdoYm91cnNcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG4gb2YgbmVpZ2hib3VyLm5laWdoYm91cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuLnZpc2l0ZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBMZWFzdCBBY2Nlc3NpYmxlIE5laWdoYm91dFxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA8IG1pbiAmJiAhbmVpZ2hib3VyLnZpc2l0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgTGVhc3QgQWNjZXNzaWJsZSBWZXJ0ZXggdG8gYmUgTmV4dCBNb3ZlXG4gICAgICAgICAgICBhdXggPSBhdXgubmVpZ2hib3Vyc1tpZHhdO1xuICAgICAgICAgICAgYXV4LnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgYXV4Lm1vdmUgPSBsYXN0ICsgMTtcbiAgICAgICAgICAgIGxhc3QgPSBhdXgubW92ZTtcbiAgICAgICAgICAgIGJhY2t3YXJkcy5wdXNoKGF1eCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXZlcnNlIEJhY2t3YXJkcyBQYXRoXG4gICAgICAgIHdoaWxlIChiYWNrd2FyZHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHRoaXMuX2FsZ29yaXRobV9wYXRoLnB1c2goYmFja3dhcmRzLnBvcCgpKTtcblxuICAgICAgICAvLyBUb2dnbGUgR2VuZXJhdGVkXG4gICAgICAgIHRoaXMuX2dlbmVyYXRlZCA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCBHcmFwaCBmcm9tIFwiLi4vLi4vZGF0YS1zdHJ1Y3R1cmVzL2dyYXBoLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1enpsZU1vZHVsZSB7XG4gICAgLyoqXG4gICAgICogUHV6emxlIE1vZHVsZVxuICAgICAqIFxuICAgICAqIEJhc2UgQ2xhc3MgZm9yIHRoZSBTaG9ydGVzdCBQYXRoIGFuZCBLbmlnaHQncyBUb3VyIFB1enpsZXMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggSW5pdGlhbCBYLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgSW5pdGlhbCBZLVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgU2l6ZSBvZiBCb2FyZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh4LCB5LCBzaXplKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzO1xuICAgICAgICB0aGlzLl9yb290ID0ge3g6IHgsIHk6IHl9O1xuICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5fc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9nZW5lcmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdXNlcl9wYXRoID0gW107XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobV9wYXRoID0gW107XG4gICAgfVxuXG4gICAgZ2V0IHJvb3QgKCkgeyByZXR1cm4gdGhpcy5fcm9vdDsgfVxuXG4gICAgc2V0IHJvb3QgKGRpY3QpIHsgdGhpcy5fcm9vdCA9IGRpY3Q7IH1cblxuICAgIGdldCBzdGFydGVkICgpIHsgcmV0dXJuIHRoaXMuX3N0YXJ0ZWQ7IH1cblxuICAgIHNldCBzdGFydGVkIChib29sKSB7IHRoaXMuX3N0YXJ0ZWQgPSBib29sOyB9XG4gICAgXG4gICAgZ2V0IGdlbmVyYXRlZCAoKSB7IHJldHVybiB0aGlzLl9nZW5lcmF0ZWQ7IH1cblxuICAgIHNldCBnZW5lcmF0ZWQgKGJvb2wpIHsgdGhpcy5fZ2VuZXJhdGVkID0gYm9vbDsgfVxuICAgIFxuICAgIGdldCB1c2VyICgpIHsgcmV0dXJuIHRoaXMuX3VzZXJfcGF0aDsgfVxuXG4gICAgc2V0IHVzZXIgKGFycikgeyB0aGlzLl91c2VyX3BhdGggPSBhcnI7IH1cblxuICAgIGdldCBhbGdvcml0aG0gKCkgeyByZXR1cm4gdGhpcy5fYWxnb3JpdGhtX3BhdGg7IH1cblxuICAgIHNldCBhbGdvcml0aG0gKGFycikgeyB0aGlzLl9hbGdvcml0aG1fcGF0aCA9IGFycjsgfVxuXG4gICAgLyoqXG4gICAgICogUHV6emxlIFRpdGxlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybnMgdGhlIFRpdGxlIG9mIHRoZSBQdXp6bGUuXG4gICAgICogXG4gICAgICogQHJldHVybnMgUHV6emxlIFRpdGxlXG4gICAgICovXG4gICAgcHV6emxlVGl0bGUgKCkgeyByZXR1cm4gXCJcIjsgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFB1enpsZSBJbmZvcm1hdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNZXNzYWdlIGFib3V0IHRoZSBQdXp6bGVzIEluZm9ybWF0aW9uLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFB1enpsZSBJbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHB1enpsZUluZm8gKCkgeyByZXR1cm4gXCJcIjsgfVxuXG4gICAgLyoqXG4gICAgICogRW5kIG9mIFB1enpsZSBJbmZvcm1hdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGVuIHRoZSBQdXp6bGUgaGFzIGJlZW4gY29tcGxldGVkLCBlaXRoZXIgYnkgdGhlIFVzZXIgb3IgYnkgdGhlIEFsZ29yaXRobSwgXG4gICAgICogdGhlbiBhIG1lc3NhZ2Ugc2hvdWxkIGJlIHByZXNlbnRlZCB0byB0aGUgVXNlciBhYm91dCBob3cgd2VsbCB0aGUgcHV6emxlIFxuICAgICAqIHdhcyBjb21wbGV0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBodW1hbiBIdW1hbiBvciBBbGdvcml0aG1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RlcHMgTnVtYmVyIG9mIFN0ZXBzIHRvIENvbXBsZXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aCBQYXRoIHRha2VuXG4gICAgICogQHJldHVybnMgRW5kIG9mIFB1enpsZSBJbmZvcmFtdGlvblxuICAgICAqL1xuICAgIGVuZEluZm8gKGh1bWFuLCBzdGVwcywgcGF0aCkgeyByZXR1cm4gXCJcIjsgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBnaXZlbiBQdXp6bGUgVHlwZSwgdGhlIEFsZ29yaXRobSB1c2VkIGZvciBzb2x2aW5nIHRoZSBQdXp6bGUgd2lsbCBcbiAgICAgKiBiZSBpbXBsZW1lbnRlZCB0byBjcmVhdGUgdGhlIFBhdGggcmVxdWlyZWQgZm9yIHRoZSBLbmlnaHQgdG8gY29tcGxldGUgdGhlIFxuICAgICAqIFB1enpsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBSb290IFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBSb290IFktUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge0dyYXBofSBncmFwaCBHcmFwaCBvZiBDaGVzc2JvYXJkXG4gICAgICovXG4gICAgZ2VuZXJhdGUgKHgsIHksIGdyYXBoKSB7fVxufSIsImltcG9ydCBQdXp6bGVNb2R1bGUgZnJvbSBcIi4vcHV6emxlLW1vZHVsZS5qc1wiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuLi8uLi9kYXRhLXN0cnVjdHVyZXMvZ3JhcGguanNcIjtcbmltcG9ydCBRdWV1ZSBmcm9tIFwiLi4vLi4vZGF0YS1zdHJ1Y3R1cmVzL3F1ZXVlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3J0ZXN0UGF0aCBleHRlbmRzIFB1enpsZU1vZHVsZSB7XG4gICAgLyoqXG4gICAgICogU2hvcnRlc3QgUGF0aCBQdXp6bGVcbiAgICAgKiBcbiAgICAgKiBVdGlsaXNpbmcgYSBtb2RpZmllZCBCcmVhZHRoLUZpcnN0IFNlYXJjaCBBbGdvcml0aG0sIHRoaXMgcHV6emxlIHdpbGxcbiAgICAgKiBpbml0aWFsbHkgcmFuZG9tbHkgZ2VuZXJhdGUgYSBHb2FsIFBvc2l0aW9uIHdoZXJlIHRoZSBVc2VyIG11c3QgYXR0ZW1wdFxuICAgICAqIHRvIGZpbmQgdGhlIFNob3J0ZXN0IFBhdGggdG8sIG9yIHVzZSB0aGUgQWxnb3JpdGhtJ3MgR2VuZXJhdGVkIFNob3J0ZXN0XG4gICAgICogUGF0aCB0byB0aGUgR29hbCBQb3NpdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBJbml0aWFsIFgtUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBJbml0aWFsIFktUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBDaGVzc2JvYXJkIFNpemVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSwgc2l6ZSkgeyBzdXBlcih4LCB5LCBzaXplKTsgfVxuXG4gICAgZ2V0IGdvYWwgKCkgeyByZXR1cm4gdGhpcy5fZ29hbDsgfVxuXG4gICAgc2V0IGdvYWwgKGRpY3QpIHsgdGhpcy5fZ29hbCA9IGRpY3Q7IH1cblxuICAgIC8qKlxuICAgICAqIFB1enpsZSBUaXRsZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXR1cm5zIHRoZSBUaXRsZSBvZiB0aGUgUHV6emxlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFB1enpsZSBUaXRsZVxuICAgICAqL1xuICAgIHB1enpsZVRpdGxlICgpIHsgcmV0dXJuIFwiU2hvcnRlc3QgUGF0aFwiOyB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUHV6emxlIEluZm9ybWF0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIE1lc3NhZ2UgYWJvdXQgdGhlIFB1enpsZXMgSW5mb3JtYXRpb24uXG4gICAgICogXG4gICAgICogQHJldHVybnMgUHV6emxlIEluZm9ybWF0aW9uXG4gICAgICovXG4gICAgcHV6emxlSW5mbyAoKSB7IFxuICAgICAgICByZXR1cm4gXCJVc2UgdGhlIFNlbGVjdCBCdXR0b24gdG8gY2hvb3NlIHlvdXIgXCIgK1xuICAgICAgICAgICAgXCJpbml0aWFsIFRpbGUuIE9uY2Ugc2VsZWN0ZWQsIGEgR29hbCB0aWxlIHdpbGwgXCIgK1xuICAgICAgICAgICAgXCJiZWNvbWUgaGlnaGxpZ2h0ZWQsIGFuZCB5b3UgaGF2ZSB0byB0cnkgdG8gcmVhY2ggXCIgK1xuICAgICAgICAgICAgXCJ0aGF0IHRpbGUgaW4gYXMgZmV3IG1vdmVzIGFzIHBvc3NpYmxlLlxcbkJ5IGNsaWNraW5nIFwiICtcbiAgICAgICAgICAgIFwidGhlIFNlbGVjdCBidXR0b24gYWdhaW4sIHRoZSBrbmlnaHQgd2lsbCBhdXRvbWF0aWNhbGx5IFwiICtcbiAgICAgICAgICAgIFwibW92ZSB0byB0aGUgR29hbCB0aWxlIGluIHRoZSBmZXdlc3QgcG9zc2libGUgbW92ZXMuXFxuXCIgK1xuICAgICAgICAgICAgXCJUbyByZXNldCwgcHJlc3Mgc3RhcnQgYW5kIHNlbGVjdCB0aGUgU2hvcnRlc3QgUGF0aCBwdXp6bGUuXCI7IFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuZCBvZiBQdXp6bGUgSW5mb3JtYXRpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogV2hlbiB0aGUgUHV6emxlIGhhcyBiZWVuIGNvbXBsZXRlZCwgZWl0aGVyIGJ5IHRoZSBVc2VyIG9yIGJ5IHRoZSBBbGdvcml0aG0sIFxuICAgICAqIHRoZW4gYSBtZXNzYWdlIHNob3VsZCBiZSBwcmVzZW50ZWQgdG8gdGhlIFVzZXIgYWJvdXQgaG93IHdlbGwgdGhlIHB1enpsZSBcbiAgICAgKiB3YXMgY29tcGxldGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaHVtYW4gSHVtYW4gb3IgQWxnb3JpdGhtXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBzIE51bWJlciBvZiBTdGVwcyB0byBDb21wbGV0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGggUGF0aCB0YWtlblxuICAgICAqIEByZXR1cm5zIEVuZCBvZiBQdXp6bGUgSW5mb3JhbXRpb25cbiAgICAgKi9cbiAgICBlbmRJbmZvIChodW1hbiwgc3RlcHMsIHBhdGgpIHsgXG4gICAgICAgIC8vIFRvZ2dsZSBHZW5lcmF0ZWRcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgTWFpbiBNZXNzYWdlXG4gICAgICAgIGxldCBtc2cgPSBodW1hbiA/IFxuICAgICAgICAgICAgYENvbmdyYXR1bGF0aW9ucyEgWW91IGNvbXBsZXRlZCB0aGUgcHV6emxlIGAgK1xuICAgICAgICAgICAgYGluICR7c3RlcHN9IHN0ZXBzIVxcblRoZSBBbGdvcml0aG0ncyBiZXN0IGAgK1xuICAgICAgICAgICAgYHdhcyAke3RoaXMuX2FsZ29yaXRobV9wYXRoLmxlbmd0aH0gc3RlcHMuXFxuYCArXG4gICAgICAgICAgICBgSGVyZSdzIHlvdXIgcGF0aDpcXG5gIDogXG4gICAgICAgICAgICBgVGhlIEJyZWFkdGgtRmlyc3QgU2VhcmNoIEFsZ29yaXRobSBmb3VuZCBhIGAgK1xuICAgICAgICAgICAgYHBhdGggaW4gJHtzdGVwc30gc3RlcHMuXFxuSGVyZSdzIGl0cyBwYXRoOlxcbmA7XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgUGF0aCB0YWtlbiB0byBNZXNzYWdlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbXNnICs9IGAoJHtwYXRoW2ldLnl9LCAke3BhdGhbaV0ueH0pYDtcbiAgICAgICAgICAgIGlmIChpIDwgcGF0aC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIG1zZyArPSBcIj0+XCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1zZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIFNob3J0ZXN0IFBhdGggUHV6emxlLCBhIG1vZGlmaWVkIHZlcnNpb24gb2YgdGhlIEJyZWFkdGgtRmlyc3QgXG4gICAgICogU2VhcmNoIEFsZ29yaXRobSBpcyB1dGlsaXNlZCBmb3IgZmluZGluZyB0aGUgc2hvcnRlc3QgcGF0aCBmcm9tIHRoZSBSb290IFxuICAgICAqIFZlcnRleCB0byB0aGUgR29hbCBWZXJ0ZXgsIHRoZSBsYXR0ZXIgb2Ygd2hpY2ggaXMgcmFuZG9tbHkgZ2VuZXJhdGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFJvb3QgWC1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFJvb3QgWS1Qb3NpdGlvblxuICAgICAqIEBwYXJhbSB7R3JhcGh9IGdyYXBoIEdyYXBoIG9mIENoZXNzYm9hcmRcbiAgICAgKi9cbiAgICBnZW5lcmF0ZSAoeCwgeSwgZ3JhcGgpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBSb290ICYgR29hbCBWZXJ0ZXhcbiAgICAgICAgdGhpcy5fcm9vdCA9IHt4OiB4LCB5OiB5fTtcbiAgICAgICAgdGhpcy5fZ29hbCA9IHt4OiAwLCB5OiAwfTtcblxuICAgICAgICAvLyBFbnN1cmUgR29hbCBpcyBub3QgdGhlIFJvb3QgVmVydGV4XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBSYW5kb20gTnVtYmVycyBmb3IgQm90aCBDb29yZGluYXRlc1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5fZ29hbCkuZm9yRWFjaChjb29yZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ29hbFtjb29yZF0gPSB0aGlzLiNyYW5kb20oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZWplY3QgUG9zaXRpb25zIHRoYXQgYXJlIFJvb3RcbiAgICAgICAgICAgIGlmICh0aGlzLl9nb2FsLnggIT09IHggJiYgdGhpcy5fZ29hbC55ICE9PSB5KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEdyYXBoIHNvIEFsbCBWZXJ0aWNlcyBhcmUgVW52aXNpdGVkXG4gICAgICAgIGZvciAobGV0IHYgb2YgZ3JhcGgudmVydGljZXMoKSlcbiAgICAgICAgICAgIHYudmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNldHVwIFJvb3QgYW5kIEdvYWwgVmVydGV4IFZhcmlhYmxlc1xuICAgICAgICBjb25zdCByb290ID0gZ3JhcGguZ2V0VmVydGV4KHgsIHkpO1xuICAgICAgICBjb25zdCBnb2FsID0gZ3JhcGguZ2V0VmVydGV4KHRoaXMuX2dvYWwueCwgdGhpcy5fZ29hbC55KTtcbiAgICAgICAgcm9vdC52aXNpdGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBTZXR1cCBQYXJlbnRzIEFycmF5IGFuZCBRdWV1ZVxuICAgICAgICBsZXQgcGFyZW50cyA9IFtdO1xuICAgICAgICBjb25zdCBxdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuICAgICAgICBxdWV1ZS5lbnF1ZXVlKHJvb3QpO1xuXG4gICAgICAgIC8vIFZpc2l0IEFsbCBOZWlnaGJvdXJzXG4gICAgICAgIHdoaWxlICghcXVldWUuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICBsZXQgdmVydGV4ID0gcXVldWUuZGVxdWV1ZSgpO1xuXG4gICAgICAgICAgICAvLyBCcmVhayBvdXQgaWYgR29hbCBpcyBGb3VuZFxuICAgICAgICAgICAgaWYgKHZlcnRleC5zYW1lVmVydGV4KGdvYWwpKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgRW5xdWV1ZSBOZWlnaGJvdXJzXG4gICAgICAgICAgICB2ZXJ0ZXgubmVpZ2hib3Vycy5mb3JFYWNoKG5laWdoYm91ciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZWlnaGJvdXIudmlzaXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXIudmlzaXRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHVzaCBQYXJlbnQgaW50byBBcnJheVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goe3ZlcnRleDogbmVpZ2hib3VyLCBwYXJlbnQ6IHZlcnRleH0pO1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5lbnF1ZXVlKG5laWdoYm91cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZW5lcmF0ZSBTaG9ydGVzdCBQYXRoXG4gICAgICAgIHRoaXMuX2FsZ29yaXRobV9wYXRoLnB1c2goZ29hbCk7XG4gICAgICAgIGxldCBjdXJyZW50ID0gZ29hbDtcblxuICAgICAgICAvLyBHZXQgUHJldmlvdXMgVmVydGljZXNcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIC8vIFNlYXJjaCBQYXJlbnRzIGZvciBQcmV2aW91cyBWZXJ0aWNlc1xuICAgICAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudHNbaV0udmVydGV4LnNhbWVWZXJ0ZXgoY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgUGFyZW50IHRvIFBhdGhcbiAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzW2lkeF0ucGFyZW50O1xuXG4gICAgICAgICAgICAvLyBCcmVhayBvdXQgaWYgUm9vdCBGb3VuZFxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuc2FtZVZlcnRleChyb290KSlcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCB0byBQYXRoXG4gICAgICAgICAgICB0aGlzLl9hbGdvcml0aG1fcGF0aC5wdXNoKGN1cnJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG9nZ2xlIEdlbmVyYXRlZFxuICAgICAgICB0aGlzLl9nZW5lcmF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJhbmRvbSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBHZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgdGhlIHNpemUgb2YgdGhlIENoZXNzYm9hcmQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgUmFuZG9tIE51bWJlciBiZXR3ZWVuIDAgYW5kIEJvYXJkIFNpemVcbiAgICAgKi9cbiAgICAjcmFuZG9tICgpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX3NpemUpOyB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9