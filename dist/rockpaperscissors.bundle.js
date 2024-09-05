"use strict";
(self["webpackChunkgamechip"] = self["webpackChunkgamechip"] || []).push([["rockpaperscissors"],{

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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/rock-paper-scissors-module/game-styling.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/rock-paper-scissors-module/game-styling.css ***!
  \***********************************************************************************************/
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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Gothica-Book.ttf */ "./src/fonts/Gothica-Book.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/dogica.ttf */ "./src/fonts/dogica.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Beon-Regular.otf */ "./src/fonts/Beon-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Merom Sans";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: "Gothica";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: "Dogica";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
    font-family: "Beon";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

:root {
    --white: #fdfffc;
    --black: #020100;
}

:root.normal {
    --font: "Merom Sans";
    --screen: #e7e6f7;
    --error-screen: #e3d0d8;
    --border-colour: #827081;
    --background-colour: #c6d2ed;
    --cursor: #aea3b0;
    --text-colour: #020100;
}

:root.monotone {
    --font: "Gothica";
    --screen: #9f9e9d;
    --error-screen: #565655;
    --border-colour: #020100;
    --background-colour: #dad9d9;
    --cursor: #7d7c7b;
    --text-colour: #020100;
}

:root.neon {
    --font: "Beon";
    --screen: #091833;
    --error-screen: #f23ca6;
    --border-colour: #711c91;
    --background-colour: #711c91;
    --cursor: #0abdc6;
    --text-colour: #fbff36;
}

:root.terminal {
    --font: "Dogica";
    --screen: black;
    --error-screen: red;
    --border-colour: black;
    --background-colour: black;
    --cursor: green;
    --text-colour: green;
}

.rock-paper-scissors-game-module {
    position: absolute;
    color: var(--text-colour);
    background-color: var(--screen);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.rps-display {
    background-color: var(--background-colour);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.rps-human-move,
.rps-algorithm-move {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.rps-button-container {
    background-color: var(--background-colour);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

[class*="-sign-button"] { position: relative; }

[class*="-sign-button"] > img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}

#cursor-button {
    background-color: var(--cursor);
    position: absolute;
    top: 0;
    left: 0;
    animation: blink 1.5s infinite;
    animation-fill-mode: both;
}

.information-container { font-size: 1.5rem; }

.info-message { font-size: 1rem; }

@keyframes blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}`, "",{"version":3,"sources":["webpack://./src/rock-paper-scissors-module/game-styling.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAA0C;AAC9C;;AAEA;IACI,sBAAsB;IACtB,4CAAqC;AACzC;;AAEA;IACI,qBAAqB;IACrB,4CAA+B;AACnC;;AAEA;IACI,mBAAmB;IACnB,4CAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,4BAA4B;IAC5B,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,4BAA4B;IAC5B,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,4BAA4B;IAC5B,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,sBAAsB;IACtB,0BAA0B;IAC1B,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA,0BAA0B,kBAAkB,EAAE;;AAE9C;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,UAAU;AACd;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA,yBAAyB,iBAAiB,EAAE;;AAE5C,gBAAgB,eAAe,EAAE;;AAEjC;IACI,KAAK,UAAU,EAAE;IACjB,MAAM,UAAU,EAAE;IAClB,OAAO,UAAU,EAAE;AACvB","sourcesContent":["@font-face {\n    font-family: \"Merom Sans\";\n    src: url(\"../fonts/MeromSans-Regular.ttf\");\n}\n\n@font-face {\n    font-family: \"Gothica\";\n    src: url(\"../fonts/Gothica-Book.ttf\");\n}\n\n@font-face {\n    font-family: \"Dogica\";\n    src: url(\"../fonts/dogica.ttf\");\n}\n\n@font-face {\n    font-family: \"Beon\";\n    src: url(\"../fonts/Beon-Regular.otf\");\n}\n\n:root {\n    --white: #fdfffc;\n    --black: #020100;\n}\n\n:root.normal {\n    --font: \"Merom Sans\";\n    --screen: #e7e6f7;\n    --error-screen: #e3d0d8;\n    --border-colour: #827081;\n    --background-colour: #c6d2ed;\n    --cursor: #aea3b0;\n    --text-colour: #020100;\n}\n\n:root.monotone {\n    --font: \"Gothica\";\n    --screen: #9f9e9d;\n    --error-screen: #565655;\n    --border-colour: #020100;\n    --background-colour: #dad9d9;\n    --cursor: #7d7c7b;\n    --text-colour: #020100;\n}\n\n:root.neon {\n    --font: \"Beon\";\n    --screen: #091833;\n    --error-screen: #f23ca6;\n    --border-colour: #711c91;\n    --background-colour: #711c91;\n    --cursor: #0abdc6;\n    --text-colour: #fbff36;\n}\n\n:root.terminal {\n    --font: \"Dogica\";\n    --screen: black;\n    --error-screen: red;\n    --border-colour: black;\n    --background-colour: black;\n    --cursor: green;\n    --text-colour: green;\n}\n\n.rock-paper-scissors-game-module {\n    position: absolute;\n    color: var(--text-colour);\n    background-color: var(--screen);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.rps-display {\n    background-color: var(--background-colour);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.rps-human-move,\n.rps-algorithm-move {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.rps-button-container {\n    background-color: var(--background-colour);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n[class*=\"-sign-button\"] { position: relative; }\n\n[class*=\"-sign-button\"] > img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n}\n\n#cursor-button {\n    background-color: var(--cursor);\n    position: absolute;\n    top: 0;\n    left: 0;\n    animation: blink 1.5s infinite;\n    animation-fill-mode: both;\n}\n\n.information-container { font-size: 1.5rem; }\n\n.info-message { font-size: 1rem; }\n\n@keyframes blink {\n    0% { opacity: 0; }\n    50% { opacity: 1; }\n    100% { opacity: 0; }\n}"],"sourceRoot":""}]);
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

/***/ "./src/rock-paper-scissors-module/game-styling.css":
/*!*********************************************************!*\
  !*** ./src/rock-paper-scissors-module/game-styling.css ***!
  \*********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./game-styling.css */ "./node_modules/css-loader/dist/cjs.js!./src/rock-paper-scissors-module/game-styling.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_game_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/rock-paper-scissors-module/game-module/game.js":
/*!************************************************************!*\
  !*** ./src/rock-paper-scissors-module/game-module/game.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _levels_easy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels/easy.js */ "./src/rock-paper-scissors-module/game-module/levels/easy.js");
/* harmony import */ var _levels_medium_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/medium.js */ "./src/rock-paper-scissors-module/game-module/levels/medium.js");
/* harmony import */ var _levels_hard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./levels/hard.js */ "./src/rock-paper-scissors-module/game-module/levels/hard.js");
/* harmony import */ var _sign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign.js */ "./src/rock-paper-scissors-module/game-module/sign.js");





class Game {
    #LEVELS = {easy: null, medium: null, hard: null};

    constructor () {
        // Initialise Variables
        this._signs = [
            new _sign_js__WEBPACK_IMPORTED_MODULE_3__["default"]("rock"),
            new _sign_js__WEBPACK_IMPORTED_MODULE_3__["default"]("paper"),
            new _sign_js__WEBPACK_IMPORTED_MODULE_3__["default"]("scissors")
        ];
        this.#LEVELS.easy = new _levels_easy_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._signs);
        this.#LEVELS.medium = new _levels_medium_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._signs);
        this.#LEVELS.hard = new _levels_hard_js__WEBPACK_IMPORTED_MODULE_2__["default"](this._signs);
        
        // Set Default Algorithm to be Easy
        this._algorithm = this.#LEVELS.easy;
    }

    get signs () { return this._signs; }

    set signs (arr) { this._signs = arr; }

    get algorithm () { return this._algorithm; }

    set algorithm (obj) { this._algorithm = obj; }

    /**
     * Set Level Method
     * 
     * Difficulty Level is Set with this Method.
     * 
     * @param {string} level Algorithm Difficulty
     */
    setLevel (level) { this._algorithm = this.#LEVELS[level]; }

    /**
     * Algorithm Select Method
     * 
     * Algorithm must make a blind selection of it's next move.
     * 
     * @returns Alogrithms' Selected Sign
     */
    algorithmSelect () { 
        console.log(this._algorithm);
        return this._algorithm.play(); }

    /**
     * Play Method
     * 
     * TODO: Write Description
     * 
     * @param {string} hStr String representation for Human Sign Selection
     * @param {string} aStr String representation for Algorithm Sign Selection
     * @returns 1 for a Win, 0 for a Draw, -1 for a Loss
     */
    play (hStr, aStr) { 
        console.log(`My Sign: ${hStr}; AI Sign: ${aStr};`);
        // Find the Signs that Represent Signs Selected
        let hSign;
        let aSign;
        this._signs.forEach(sign => {
            if (sign.name === hStr)
                hSign = sign;
            if (sign.name === aStr)
                aSign = sign;
        });

        // Get Matchup Results and Update Algorithm
        const result = hSign.matchup(aSign);
        this._algorithm.update(hSign, result);

        return result;
    }
}

/***/ }),

/***/ "./src/rock-paper-scissors-module/game-module/levels/easy.js":
/*!*******************************************************************!*\
  !*** ./src/rock-paper-scissors-module/game-module/levels/easy.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Easy)
/* harmony export */ });
/* harmony import */ var _sign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sign.js */ "./src/rock-paper-scissors-module/game-module/sign.js");
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level.js */ "./src/rock-paper-scissors-module/game-module/levels/level.js");



class Easy extends _level_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Easy Level Class
     * 
     * For the Rock, Paper, Scissors Game, the Easy Level will only play Rock.
     * 
     * @param {Sign[]} signs Available Signs
     */
    constructor (signs) { super(signs, "easy"); }
}

/***/ }),

/***/ "./src/rock-paper-scissors-module/game-module/levels/hard.js":
/*!*******************************************************************!*\
  !*** ./src/rock-paper-scissors-module/game-module/levels/hard.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hard)
/* harmony export */ });
/* harmony import */ var _sign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sign.js */ "./src/rock-paper-scissors-module/game-module/sign.js");
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level.js */ "./src/rock-paper-scissors-module/game-module/levels/level.js");



class Hard extends _level_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    // Key, Values of Wins, Draws, and Losses Scores
    #SCORES = {
        WIN: { value: 1 },
        DRAW: { value: 0 },
        LOSE: { value: -1 }
    };
    // Key, Index of Signs
    #SIGNS = [{sign: "rock"}, {sign: "paper"}, {sign: "scissors"}];
    // Frequency Distributions of Human's Choices
    #FREQUENCY_DISTRIBUTIONS = {
        WIN: {
            ROCKROCK: 1, ROCKPAPER: 1, ROCKSCISSORS: 1,
            PAPERROCK: 1, PAPERPAPER: 1, PAPERSCISSORS: 1,
            SCISSORSROCK: 1, SCISSORSPAPER: 1, SCISSORSSCISSORS: 1
        },
        DRAW: {
            ROCKROCK: 1, ROCKPAPER: 1, ROCKSCISSORS: 1,
            PAPERROCK: 1, PAPERPAPER: 1, PAPERSCISSORS: 1,
            SCISSORSROCK: 1, SCISSORSPAPER: 1, SCISSORSSCISSORS: 1
        },
        LOSE: {
            ROCKROCK: 1, ROCKPAPER: 1, ROCKSCISSORS: 1,
            PAPERROCK: 1, PAPERPAPER: 1, PAPERSCISSORS: 1,
            SCISSORSROCK: 1, SCISSORSPAPER: 1, SCISSORSSCISSORS: 1
        }
    };
    // Transition Probabilities of States
    #TRANSITION_TABLES = {
        WIN: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        DRAW: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        LOSE: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
    };

    /**
     * Hard Level Class
     * 
     * For the Rock, Paper, Scissors Game, the Hard Level uses a Markov Chain 
     * to make a Best Guess for it's next move. Initially, it will choose a 
     * random Sign, but all subsequent moves will predict the Human's next move
     * and select a Sign that would ensure the Algorithm's success.
     * 
     * @param {Sign[]} signs List of Available Signs
     */
    constructor (signs) { 
        super(signs, "hard"); 
        
        // Initialise Variables
        this._scores = { WIN: 0, DRAW: 0, LOSE: 0 };
        this._results = [];
        this._human = [];
        this._round = 0;
    }

    /**
     * Play Method
     * 
     * Using a Markov Chain, the method will find a Best Guess to Oppose the
     * Human's Selection.
     * 
     * @returns String Representation of Sign to Play
     */
    play () {
        // Initialise Variables
        let probabilities;

        // First Round:
        if (this._round === 0)
            return this._signs[Math.floor(Math.random() * this._signs.length)];

        // Subsequent Rounds:
        else {
            // Get Previous Choice and Result
            let idx = this.#getSignIndex(this._human.slice(-1)[0]);
            let key = this.#getScoreKey(this._results.slice(-1)[0]);

            // Second Round, probabilities of Each Choice are Equal
            if (this._round === 1)
                probabilities = [1/3, 1/3, 1/3];

            // Subsequent Rouds, probabilities from Transition Matrices
            else 
                probabilities = this.#TRANSITION_TABLES[key][idx];

            // Predict Next Move
            let predicted;
            let max = -1;
            for (let i = 0; i < probabilities.length; i++) {
                if (probabilities[i] > max) {
                    max = probabilities[i];
                    predicted = i;
                }
            }
            return this.#bestBet(predicted);
        }
    }

    /**
     * Update Method
     * 
     * Algorithm Learning Method.
     * 
     * @param {Sign} hMove Human Move
     * @param {Sign} aMove Algorithm Move
     * @param {number} result Result of Matchup
     */
    update (hMove, result) {
        if (this._round > 0) {
            // Update Frequency Distributions and Transition Tables
            let prev = this._human.slice(-1)[0];
            let pResult = this._results.slice(-1)[0];
            this.#updateFrequencyDistributions(prev.name, hMove.name, pResult);
            this.#updateTransitionTables(pResult);
        }

        // Update Scores and Results
        this._scores[this.#getScoreKey(result)]++;
        this._results.push(result);

        // Update Human and Algorithm Moves
        this._human.push(hMove);
        this._round++;
    }

    /**
     * Update Frequency Distributions Method
     * 
     * Track the Humans Moves, dependant on their success rate.
     * 
     * @param {string} prev Previous Human Choice
     * @param {string} curr Current Human Choice
     * @param {number} result Previous Result (1: win, 0: draw, -1: loss)
     */
    #updateFrequencyDistributions (prev, curr, result) {
        // Get the Key for the Score
        const key = this.#getScoreKey(result);

        // Update Frequency for Previous and Current Move by User
        this.#FREQUENCY_DISTRIBUTIONS[key][
            prev.toUpperCase() + curr.toUpperCase()
        ]++;
    }

    /**
     * Update Transition Tables Method
     * 
     * Track the Probabilities of the Human using a Particular Move, based on 
     * previous results.
     * 
     * @param {number} result Previous Result (1: win, 0: draw, -1: loss)
     */
    #updateTransitionTables (result) {
        // Get the Sum of Frequnecies for Each Score type and Sign
        const frequencies = this.#getCurrentFrequencies();

        // Get the Score Key
        const key = this.#getScoreKey(result);

        // Iterate through appropriate Transition Matrix and Update
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Get the Appropriate Frequency for that Matrix
                let current_freq = this.#FREQUENCY_DISTRIBUTIONS[key][
                    this._signs[i].toUpperCase() + this._signs[j].toUpperCase()
                ];

                // Update the Probability of Choosing Rock
                if (i === 0)
                    this.#TRANSITION_TABLES[key][i][j] = current_freq / frequencies[key].ROCK;
                // Update the Probability of Choosing Paper
                if (i === 1)
                    this.#TRANSITION_TABLES[key][i][j] = current_freq / frequencies[key].PAPER;
                // Update the Probability of Choosing Scissors
                if (i === 2)
                    this.#TRANSITION_TABLES[key][i][j] = current_freq / frequencies[key].SCISSORS;
            }
        }
    }

    /**
     * Best Bet Method
     * 
     * For a given Index of a Sign, the method will return the Sign that will
     * outmatch that Sign.
     * 
     * @param {number} idx Index of Sign
     * @returns Winning Sign
     */
    #bestBet (idx) {
        // Paper beats Rock
        if (idx === 0)
            return "paper";
        // Scissors beats Paper
        else if (idx === 1)
            return "scissors";
        // Rock beats Scissors
        else if (idx === 2)
            return "rock";
    }

    /**
     * Get Score Key Method
     * 
     * For a given Score Value, the method will return the corresponding key.
     * 
     * @param {number} value Score Value
     * @returns Score Key
     */
    #getScoreKey (value) {
        // Find the Corresponding Key to the Score Value
        let key;
        Object.entries(this.#SCORES).forEach(([k, v]) => {
            if (v.value === value)
                key = k;
        });

        return key;
    }

    /**
     * Get Sign Index Method
     * 
     * For the Sign, get the Corresponding Index.
     * 
     * @param {Sign} sign Sign to get Index of
     * @returns 0 for Rock; 1 for Paper; 2 for Scissors;
     */
    #getSignIndex (sign) {
        let idx;
        for (let i = 0; i < this.#SIGNS.length; i++)
            if (this.#SIGNS[i].sign === sign.name)
                idx = i;
        return idx;
    }

    /**
     * Get Current Frequencies Method
     * 
     * Compilation of the Humans Past Moves.
     * 
     * @returns Dictionary of Current Frequencies
     */
    #getCurrentFrequencies () {
        return {
            WIN: {
                ROCK:
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.ROCKROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.ROCKPAPER + 
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.ROCKSCISSORS,
                PAPER: 
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.PAPERROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.PAPERPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.PAPERSCISSORS,
                SCISSORS:
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.SCISSORSROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.SCISSORSPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.WIN.SCISSORSSCISSORS
            },
            DRAW: {
                ROCK:
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.ROCKROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.ROCKPAPER + 
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.ROCKSCISSORS,
                PAPER: 
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.PAPERROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.PAPERPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.PAPERSCISSORS,
                SCISSORS:
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.SCISSORSROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.SCISSORSPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.DRAW.SCISSORSSCISSORS
            },
            LOSE: {
                ROCK:
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.ROCKROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.ROCKPAPER + 
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.ROCKSCISSORS,
                PAPER: 
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.PAPERROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.PAPERPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.PAPERSCISSORS,
                SCISSORS:
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.SCISSORSROCK +
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.SCISSORSPAPER +
                    this.#FREQUENCY_DISTRIBUTIONS.LOSE.SCISSORSSCISSORS
            },
        }
    }
}

/***/ }),

/***/ "./src/rock-paper-scissors-module/game-module/levels/level.js":
/*!********************************************************************!*\
  !*** ./src/rock-paper-scissors-module/game-module/levels/level.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Level)
/* harmony export */ });
/* harmony import */ var _sign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sign.js */ "./src/rock-paper-scissors-module/game-module/sign.js");


class Level {
    /**
     * Level Class
     * 
     * Base Class for the Difficulty Level of the Computer for the Rock, Paper, 
     * Scissors Game.
     * 
     * @param {Sign[]} signs Available Signs
     * @param {string} level Difficulty Level
     */
    constructor (signs, level) {
        // Intialise Variables
        this._signs = [];
        signs.forEach(sign => { this._signs.push(sign.name); });
        this._level = level; 
    }

    get level () { return this._level; }

    set level (str) { this._level = str; }

    /**
     * Play Method
     * 
     * The Method will choose a Sign to Play.
     * 
     * @returns String Representation of Sign to Play
     */
    play () { return this._signs[0]; }

    /**
     * Update Method
     * 
     * Algorithm Learning Method.
     * 
     * @param {Sign} hMove Human Move
     * @param {number} result Result of Matchup
     */
    update (hMove, result) {}
}

/***/ }),

/***/ "./src/rock-paper-scissors-module/game-module/levels/medium.js":
/*!*********************************************************************!*\
  !*** ./src/rock-paper-scissors-module/game-module/levels/medium.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Medium)
/* harmony export */ });
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.js */ "./src/rock-paper-scissors-module/game-module/levels/level.js");


class Medium extends _level_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Medium Level Class
     * 
     * For the Rock, Paper, Scissors Game, the Medium Level will randomly select
     * its next move, without any effort for minimising loss.
     * 
     * @param {Sign[]} signs Available Signs
     */
    constructor (signs) { super(signs, "medium"); }

    /**
     * Play Method
     * 
     * The Method will choose a random Sign to Play.
     * 
     * @returns String Representation of Sign to Play
     */
    play () { return this._signs[Math.floor(Math.random() * this._signs.length)]; }
}

/***/ }),

/***/ "./src/rock-paper-scissors-module/game-module/sign.js":
/*!************************************************************!*\
  !*** ./src/rock-paper-scissors-module/game-module/sign.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sign)
/* harmony export */ });
class Sign {
    /**
     * Sign Class
     * 
     * One of Three possible Signs available for the Traditional Rock, Paper, 
     * Scissors Game, this class will handle how each fair against each other
     * in the Game.
     * 
     * @param {string} name Name of Sign
     */
    constructor (name) { this._name = name; }

    get name () { return this._name; }

    set name (str) { this._name = str; }

    /**
     * Matchup Method
     * 
     * For a given Opposing Sign, the method will return how this sign would 
     * fair, whether it returns a win, draw or loss (represented numerically).
     * 
     * @param {Sign} sign Opposing Sign
     * @returns 1 for a Win, 0 for a Draw, -1 for a Loss
     */
    matchup (sign) {
        console.log(`My Sign: ${this._name}; Opposing Sign: ${sign.name};`);
        // This is Rock
        if (this._name === "rock") {
            // Opposing Rock
            if (sign.name === "rock") return 0;

            // Opposing Papper
            if (sign.name === "paper") return -1;

            // Opposing Scissors
            if (sign.name === "scissors") return 1;
        }

        // This is Paper
        if (this._name === "paper") {
            // Opposing Rock
            if (sign.name === "rock") return 1;

            // Opposing Papper
            if (sign.name === "paper") return 0;

            // Opposing Scissors
            if (sign.name === "scissors") return -1;
        }

        // This is Scissors
        if (this._name === "scissors") {
            // Opposing Rock
            if (sign.name === "rock") return -1;

            // Opposing Papper
            if (sign.name === "paper") return 1;

            // Opposing Scissors
            if (sign.name === "scissors") return 0;
        }
    }
}

/***/ }),

/***/ "./src/rock-paper-scissors-module/main-module/rps-manager.js":
/*!*******************************************************************!*\
  !*** ./src/rock-paper-scissors-module/main-module/rps-manager.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RPSManager)
/* harmony export */ });
/* harmony import */ var _images_rock_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/rock.png */ "./src/rock-paper-scissors-module/images/rock.png");
/* harmony import */ var _images_rock_hand_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/rock-hand.png */ "./src/rock-paper-scissors-module/images/rock-hand.png");
/* harmony import */ var _images_neon_rock_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/neon-rock.png */ "./src/rock-paper-scissors-module/images/neon-rock.png");
/* harmony import */ var _images_rock_terminal_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/rock-terminal.png */ "./src/rock-paper-scissors-module/images/rock-terminal.png");
/* harmony import */ var _images_paper_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/paper.png */ "./src/rock-paper-scissors-module/images/paper.png");
/* harmony import */ var _images_paper_hand_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/paper-hand.png */ "./src/rock-paper-scissors-module/images/paper-hand.png");
/* harmony import */ var _images_neon_paper_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/neon-paper.png */ "./src/rock-paper-scissors-module/images/neon-paper.png");
/* harmony import */ var _images_paper_terminal_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/paper-terminal.png */ "./src/rock-paper-scissors-module/images/paper-terminal.png");
/* harmony import */ var _images_scissors_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/scissors.png */ "./src/rock-paper-scissors-module/images/scissors.png");
/* harmony import */ var _images_scissors_hand_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/scissors-hand.png */ "./src/rock-paper-scissors-module/images/scissors-hand.png");
/* harmony import */ var _images_neon_scissors_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/neon-scissors.png */ "./src/rock-paper-scissors-module/images/neon-scissors.png");
/* harmony import */ var _images_scissors_terminal_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/scissors-terminal.png */ "./src/rock-paper-scissors-module/images/scissors-terminal.png");
/* harmony import */ var _setting_module_rps_display__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../setting-module/rps-display */ "./src/rock-paper-scissors-module/setting-module/rps-display.js");
/* harmony import */ var _setting_module_sign_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../setting-module/sign-button */ "./src/rock-paper-scissors-module/setting-module/sign-button.js");
/* harmony import */ var _game_module_game__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../game-module/game */ "./src/rock-paper-scissors-module/game-module/game.js");
















class RPSManager {
    #THEMES = {
        normal: {
            rock: _images_rock_png__WEBPACK_IMPORTED_MODULE_0__,
            paper: _images_paper_png__WEBPACK_IMPORTED_MODULE_4__,
            scissors: _images_scissors_png__WEBPACK_IMPORTED_MODULE_8__
        },
        monotone: {
            rock: _images_rock_hand_png__WEBPACK_IMPORTED_MODULE_1__,
            paper: _images_paper_hand_png__WEBPACK_IMPORTED_MODULE_5__,
            scissors: _images_scissors_hand_png__WEBPACK_IMPORTED_MODULE_9__
        },
        neon: {
            rock: _images_neon_rock_png__WEBPACK_IMPORTED_MODULE_2__,
            paper: _images_neon_paper_png__WEBPACK_IMPORTED_MODULE_6__,
            scissors: _images_neon_scissors_png__WEBPACK_IMPORTED_MODULE_10__
        },
        terminal: {
            rock: _images_rock_terminal_png__WEBPACK_IMPORTED_MODULE_3__,
            paper: _images_paper_terminal_png__WEBPACK_IMPORTED_MODULE_7__,
            scissors: _images_scissors_terminal_png__WEBPACK_IMPORTED_MODULE_11__
        }
    }

    /**
     * Rock, Paper, Scissors Manager Class
     * 
     * For the Rock, Paper, Scissors Game, this Manager Class will Handle the UI
     * Components such as the Scores for Either Player, and the Display which 
     * will show both Players selected Signs. It also manages the Selection of
     * the Sign Buttons and the Actions with the parent Game Interface.
     */
    constructor () {
        // Build Game DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("rock-paper-scissors-game-module");

        // Build Display for the Game to take place in
        this._display = new _setting_module_rps_display__WEBPACK_IMPORTED_MODULE_12__["default"]();
        this._module.appendChild(this._display.module);

        // Build Container for Buttons DOM Element
        this._container = document.createElement("div");
        this._container.classList.add("rps-button-container");

        // Build Sign Button DOM Elements
        this._buttons = [];
        ["rock", "paper", "scissors"].forEach(sign => {
            const btn = new _setting_module_sign_button__WEBPACK_IMPORTED_MODULE_13__["default"](sign);
            this._container.appendChild(btn.module);
            this._buttons.push(btn);
        });
        this._module.appendChild(this._container);

        // Initialise Variables
        this._controller = true;
        this._game = new _game_module_game__WEBPACK_IMPORTED_MODULE_14__["default"]();
        this._scores = {human: 0, algorithm: 0};
        this._current = 0;
        this._theme = "normal";

        // Set the Default Theme
        this.setTheme(this._theme);

        // Set Cursor on Rock
        this._buttons[0].placeCursor();
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get controller () { return this._controller; }

    set controller (bool) { this._controller = bool; }

    get game () { return this._game; }

    set game (obj) { this._game = obj; }

    /**
     * Set Dimensions Method
     * 
     * Set the Display Dimensions for the Game.
     * 
     * @param {number} width Screen Width (pixels)
     * @param {number} height Screen Height (pixels)
     */
    setDimensions (width, height) {
        // Set Dimensions of Game Module
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`;

        // Set Display Dimensions
        const dWidth = Math.floor(width * 0.9);
        const dHeight = Math.floor(dWidth * 0.45);
        this._display.setDimensions(dWidth, dHeight);

        // Set Button Dimensions
        const dim = Math.floor(width * 0.25);
        const cHeight = Math.floor(height * 0.5);
        this._container.style.width = `${dWidth}px`;
        this._container.style.height = `${cHeight}px`;
        this._buttons.forEach(btn => { btn.setDimensions(dim); });
    }

    /**
     * Set Level Method
     * 
     * Set the Difficulty Level of the Game.
     * 
     * @param {string} level Selected Level
     */
    setLevel (level) { this._game.setLevel(level.toLowerCase()); }

    /**
     * Set Theme Method
     * 
     * Update the Styling for the Game.
     * 
     * @param {string} theme Theme Name
     */
    setTheme (theme) {
        // Update Theme Variable
        this._theme = theme.toLowerCase(); 

        // Get Root Element
        const root = document.documentElement;
        root.className = theme.toLowerCase();

        // Set Theme for Buttons
        this._buttons.forEach(btn => {
            // Handle Rock Button
            if (btn.sign === "rock")
                btn.setIcon(this.#THEMES[theme.toLowerCase()].rock);
            // Handle Paper Button
            if (btn.sign === "paper")
                btn.setIcon(this.#THEMES[theme.toLowerCase()].paper);
            // Handle Scissors Button
            if (btn.sign === "scissors")
                btn.setIcon(this.#THEMES[theme.toLowerCase()].scissors);
        });
    }

    /**
     * Horizontal Move Method
     * 
     * Move the Cursor Horizontally across Container.
     * 
     * @param {boolean} right Default Action is Rightwards
     */
    horizontalMove (right=true) {
        // Ensure Horizontal Move is Still in Container
        const curr = this._current + (right ? 1 : -1);
        if (curr < 3 && curr >= 0) {
            // Remove Cursor from Current Button
            this._buttons[this._current].placeCursor(false);

            // Update Current Pointer
            this._current = curr;
            
            // Place Cursor on Button
            this._buttons[this._current].placeCursor();
        }
    }

    /**
     * Accepet Action Method
     * 
     * When the User Makes a Move, the Display should update with their selected
     * Icon, but the Algorithm must Also Make a Move, and update the display with
     * its selected Move.
     * 
     * @returns Message indicating User's Success or Failure
     */
    acceptAction () {
        // Play Human Move
        const hMove = this._buttons[this._current].sign;

        // Get Algorithm move
        const aMove = this._game.algorithmSelect();

        // Update the Display
        this._display.setIcons(
            this.#THEMES[this._theme][hMove],
            this.#THEMES[this._theme][aMove]
        );

        // Update Scores
        const results = this._game.play(hMove, aMove);
        console.log(results);

        // TODO: in the following conditions, update algorithm with results

        // Handle Win
        if (results === 1) {
            this._scores.human += 1;
            this._display.updateScore(this._scores.human, true);
            return "WIN";
        }

        // Handle Draw
        else if (results === 0) {
            return "DRAW";
        }

        // Handle Loss
        else {
            this._scores.algorithm += 1;
            this._display.updateScore(this._scores.algorithm, false);
            return "LOSE";
        }
    }
}

/***/ }),

/***/ "./src/rock-paper-scissors-module/rps-game.js":
/*!****************************************************!*\
  !*** ./src/rock-paper-scissors-module/rps-game.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RPSGame)
/* harmony export */ });
/* harmony import */ var _game_styling_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-styling.css */ "./src/rock-paper-scissors-module/game-styling.css");
/* harmony import */ var _data_menu_json5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/menu.json5 */ "./src/rock-paper-scissors-module/data/menu.json5");
/* harmony import */ var _data_select_json5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/select.json5 */ "./src/rock-paper-scissors-module/data/select.json5");
/* harmony import */ var _game_chip_module_game_interface_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-chip-module/game-interface.js */ "./src/game-chip-module/game-interface.js");
/* harmony import */ var _main_module_rps_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-module/rps-manager.js */ "./src/rock-paper-scissors-module/main-module/rps-manager.js");
/* harmony import */ var _pop_up_module_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pop-up-module/menu.js */ "./src/pop-up-module/menu.js");
/* harmony import */ var _pop_up_module_info_box_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pop-up-module/info-box.js */ "./src/pop-up-module/info-box.js");
/* harmony import */ var _pop_up_module_select_box_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pop-up-module/select-box.js */ "./src/pop-up-module/select-box.js");









class RPSGame extends _game_chip_module_game_interface_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
    #showCallback;
    #takeDownCallback;

    /**
     * Rock, Paper, Scissors Interface Class
     * 
     * Userd for Controlling the Menu and the Display Modules with the GameChip's
     * Controllers, and also for Updating the Display with the relevant 
     * Information Messages.
     * 
     * @param {string} title Title of the Game
     */
    constructor (title) {
        super(title);

        // Initialise Objects for the Rock, Paper, Scissors Game
        this._rm = new _main_module_rps_manager_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this._menu = new _pop_up_module_menu_js__WEBPACK_IMPORTED_MODULE_5__["default"](_data_menu_json5__WEBPACK_IMPORTED_MODULE_1__);
        this._info = new _pop_up_module_info_box_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this._select = new _pop_up_module_select_box_js__WEBPACK_IMPORTED_MODULE_7__["default"](
            _data_select_json5__WEBPACK_IMPORTED_MODULE_2__.difficulty.description,
            _data_select_json5__WEBPACK_IMPORTED_MODULE_2__.difficulty.categories
        );

        // Intialise Variable
        this._difficulty_selected = false;
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

        // Set Display Dimensions
        const dimensions = getDimensions();
        this._rm.setDimensions(dimensions.width, dimensions.height);

        // Set Pop-Up Dimentiosn
        this._menu.setDimensions(dimensions.width, dimensions.height);
        this._sub_set = false;
        this._sub_menu;
        this._info.setDimensions(dimensions.width, dimensions.height);
        this._select.setDimensions(dimensions.width, dimensions.height);

        // Set Game Display
        this.#showCallback(this._rm.module);

        // Show Difficulty Selection
        this._select.active = true;
        this._rm.controller = false;
        this.#showCallback(this._select.module, true);
    }

    /**
     * Right Callback Method
     * 
     * Handles the Click of the Right Button on the Direction Pad.
     */
    rightCallback () {
        // Handle RPS Movement
        if (this._rm.controller)
            this._rm.horizontalMove();
    }

    /**
     * Left Callback Method
     * 
     * Handles the Click of the Left Button on the Direction Pad.
     */
    leftCallback () {
        // Handle RPS Movement
        if (this._rm.controller)
            this._rm.horizontalMove(false);
    }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () {
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
            this._rm.setLevel(this._select.acceptAction());
            this._difficulty_selected = true;

            // Take down Select Box
            this.#takeDownCallback();
            this._select.active = false;
            this._rm.controller = true;
        }
        // Handle Info Action
        else if (this._info.active) {
            this.#takeDownCallback();
            this._rm.controller = true;
            this._info.active = false;
        }
        // Handle Game Action
        else if (this._rm.controller) {
            const msg = this._rm.acceptAction();
            console.log(`You ${msg}!`); // TODO: Handle better
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
                    this._rm.setLevel(this._sub_menu.selected.value);
                    // this._km.setGame(this._sub_menu.selected.value);
                    this.#close();
                }
                
                // Handle Theme Set
                if (this._sub_menu.selected.key === "Theme") {
                    this._rm.setTheme(this._sub_menu.selected.value);
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
    bCallback () {}

    /**
     * Start Callback Method
     * 
     * Handles the Click of the Start User Button.
     */
    startCallback () {
        // Menu to be Displayed
        if (this._rm.controller) {
            // Set Menu to be Controlled
            this._rm.controller = false;
            this._menu.controller = true;
            
            // Display the Menu
            this.#showCallback(this._menu.module, true);
        }

        // Menu to be Taken Down
        else {
            // Set Rock, Paper, Scissors to be Controlled
            this._rm.controller = true;
            this._menu.controller = true;
            
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
    selectCallback () { /* TODO: Implement Method */ }

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
        this._rm.controller = true;
        this._menu.controller = false;
        this.#takeDownCallback();
    }
}

/***/ }),

/***/ "./src/rock-paper-scissors-module/setting-module/rps-display.js":
/*!**********************************************************************!*\
  !*** ./src/rock-paper-scissors-module/setting-module/rps-display.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RPSDisplay)
/* harmony export */ });
class RPSDisplay {
    /**
     * Rock, Paper, Scissors Display Class
     * 
     * The Game is Displayed using this Class, including showing the User with
     * the selected Signs, both by them and the Algorithm, but also shows the
     * User the current running score for the Game.
     */
    constructor () {
        // Build Display DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("rps-display");

        // Build Human Move DOM Element
        this._human = document.createElement("div");
        this._human.classList.add("rps-human-move");

        // Build Human Label DOM Element
        this._hLabel = document.createElement("div");
        this._hLabel.classList.add("rps-human-label");
        this._hLabel.textContent = "Human: 0";

        // Build Human Icon DOM Element
        this._hIcon = new Image();

        // Add Components to Human Move
        this._human.appendChild(this._hLabel);
        this._human.appendChild(this._hIcon);

        // Build Algorithm Move DOM Element
        this._algorithm = document.createElement("div");
        this._algorithm.classList.add("rps-algorithm-move");

        // Build Algorithm Label DOM Element
        this._aLabel = document.createElement("div");
        this._aLabel.classList.add("rps-algorithm-label");
        this._aLabel.textContent = "Algorithm: 0";

        // Build Algorithm Icon DOM Element
        this._aIcon = new Image();

        // Add Components to Algorithm Move
        this._algorithm.appendChild(this._aLabel);
        this._algorithm.appendChild(this._aIcon);

        // Add Moves to Module
        this._module.appendChild(this._human);
        this._module.appendChild(this._algorithm);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Set Dimensions Method
     * 
     * For the Display, the Module Height should be about 40% of the Width.
     * 
     * @param {number} width Module Width (pixels)
     * @param {number} height Module Height (pixels)
     */
    setDimensions (width, height) {
        // Set Module Dimensions
        this._module.style.width = `${width}px`;
        this._module.style.height = `${height}px`;

        // Set Icon Dimensions
        const dim = Math.floor(height * 0.6);
        this._hIcon.style.width = `${dim}px`;
        this._hIcon.style.height = `${dim}px`;
        this._aIcon.style.width = `${dim}px`;
        this._aIcon.style.height = `${dim}px`;
    }

    /**
     * Set Icons Method
     * 
     * For the Human and Algorithm Selections, the Display should Update to 
     * represent their Current Selections.
     * 
     * @param {string} hSrc Source for Human Icon
     * @param {string} aSrc Source for Algorithm Icon
     */
    setIcons (hSrc, aSrc) {
        // Handle Human Icon
        this._human.innerHTML = "";
        this._hIcon.src = hSrc;
        this._human.appendChild(this._hLabel);
        this._human.appendChild(this._hIcon);

        // Handle Algorithm Icon
        this._algorithm.innerHTML = "";
        this._aIcon.src = aSrc;
        this._algorithm.appendChild(this._aLabel);
        this._algorithm.appendChild(this._aIcon);
    }

    /**
     * Update Score Method
     * 
     * Depending on whether it is the Human or the Algorithm that won, the score
     * is updated using this Function.
     * 
     * @param {number} score Score to Update
     * @param {boolean} human Human Score to Update or Algorithm Score to Update
     */
    updateScore (score, human=true) {
        // Update Human Score
        if (human)
            this._hLabel.textContent = `Human: ${score}`;
        // Update Algorithm Score
        else
            this._aLabel.textContent = `Algorithm: ${score}`;
    }
}

/***/ }),

/***/ "./src/rock-paper-scissors-module/setting-module/sign-button.js":
/*!**********************************************************************!*\
  !*** ./src/rock-paper-scissors-module/setting-module/sign-button.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignButton)
/* harmony export */ });
class SignButton {
    /**
     * Sign Button Class
     * 
     * For each of the Signs in Rock, Paper, Scissors, the User needs to be 
     * able to select those signs to play their move, and this class allows the
     * User to do that.
     * 
     * @param {string} sign Name of Sign
     */
    constructor (sign) {
        // Build Sign Button DOM Element
        this._module = document.createElement("div");
        this._module.classList.add(`${sign.toLowerCase()}-sign-button`);

        // Build Cursor DOM Element
        this._cursor = document.createElement("div");
        this._cursor.id = "cursor-button";

        // Build Icon for Button
        this._icon = new Image();

        // Initialise Variables
        this._sign = sign;
        this._pointer = false;
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get cursor () { return this._cursor; }

    set cursor (elem) { this._cursor = elem; }

    get sign () { return this._sign; }

    set sign (str) { this._sign = str; }

    get pointer () { return this._pointer; }

    set pointer (bool) { this._pointer = bool; }

    /**
     * Set Dimensions Method
     * 
     * Set the Button and Icon Dimensions.
     * 
     * @param {number} dim Button Size (pixels)
     */
    setDimensions (dim) {
        // Set Module Dimensions
        this._module.style.width = `${dim}px`;
        this._module.style.height = `${dim}px`;

        // Set Cursor Dimensions
        this._cursor.style.width = `${dim}px`;
        this._cursor.style.height = `${dim}px`;

        // Set Icon Dimensions
        this._icon.style.width = `${dim}px`;
        this._icon.style.height = `${dim}px`;
    }

    /**
     * Set Icon Method
     * 
     * Set the Icon inside the Sign Button.
     * 
     * @param {string} src Source of Icon to Set
     */
    setIcon (src) {
        // Set Source of Icon
        this._module.innerHTML = "";
        this._icon.src = src;
        this._module.appendChild(this._icon);
        if (this._pointer)
            this._module.appendChild(this._cursor);
    }

    /**
     * Place Cursor Method
     * 
     * Place or Remove Cursor from the Button.
     * 
     * @param {boolean} on Place or Remove
     */
    placeCursor (on=true) {
        // Place Cursor on Button
        if (on && !this._pointer) {
            this._module.appendChild(this._cursor);
            this._pointer = true;
        }
        // Remove Cursor from Button
        if (!on && this._pointer) {
            this._module.removeChild(this._cursor);
            this._pointer = false;
        }
    }
}

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

/***/ "./src/fonts/dogica.ttf":
/*!******************************!*\
  !*** ./src/fonts/dogica.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "214cd23097c4c02eb9bd.ttf";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/neon-paper.png":
/*!**************************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/neon-paper.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1805bf708d79bc44e94.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/neon-rock.png":
/*!*************************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/neon-rock.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c17a6c58c8cf796b8f7.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/neon-scissors.png":
/*!*****************************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/neon-scissors.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "597a1ba40644c78a88cc.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/paper-hand.png":
/*!**************************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/paper-hand.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93c9129e97a27bb8c7ff.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/paper-terminal.png":
/*!******************************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/paper-terminal.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5230eb4aa083bdbedca7.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/paper.png":
/*!*********************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/paper.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef7dde119b1264f112fb.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/rock-hand.png":
/*!*************************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/rock-hand.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f888f46bc6ecd413e88d.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/rock-terminal.png":
/*!*****************************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/rock-terminal.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c83de7772e1171e93890.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/rock.png":
/*!********************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/rock.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d88226f7004489e70d69.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/scissors-hand.png":
/*!*****************************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/scissors-hand.png ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71e5e48358ef7b683ecb.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/scissors-terminal.png":
/*!*********************************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/scissors-terminal.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "385fc610c5ecbc0aeb3c.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/images/scissors.png":
/*!************************************************************!*\
  !*** ./src/rock-paper-scissors-module/images/scissors.png ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "314063155d06576a01ac.png";

/***/ }),

/***/ "./src/rock-paper-scissors-module/data/menu.json5":
/*!********************************************************!*\
  !*** ./src/rock-paper-scissors-module/data/menu.json5 ***!
  \********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"key":"Main","subs":[{"key":"Level","subs":[{"key":"Easy","subs":[]},{"key":"Medium","subs":[]},{"key":"Hard","subs":[]}]},{"key":"Theme","subs":[{"key":"Normal","subs":[]},{"key":"Monotone","subs":[]},{"key":"Neon","subs":[]},{"key":"Terminal","subs":[]}]},{"key":"Controls","subs":[{"key":"Information","subs":[]}]}]}');

/***/ }),

/***/ "./src/rock-paper-scissors-module/data/select.json5":
/*!**********************************************************!*\
  !*** ./src/rock-paper-scissors-module/data/select.json5 ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"difficulty":{"description":"Please choose a difficulty level.","categories":[{"key":"Easy"},{"key":"Medium"},{"key":"Hard"}]}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/rock-paper-scissors-module/rps-game.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixJQUFJLEtBQUs7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6UmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9COztBQUVwQix3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNO0FBQzVDLHVDQUF1QyxPQUFPOztBQUU5QztBQUNBO0FBQ0EscUNBQXFDLElBQUk7QUFDekMsc0NBQXNDLElBQUk7QUFDMUMscUNBQXFDLElBQUk7QUFDekMsc0NBQXNDLElBQUk7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxNQUFNO0FBQ3ZEO0FBQ0E7QUFDQSxxREFBcUQsTUFBTTtBQUMzRDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25IZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG1CQUFtQjs7QUFFekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9COztBQUVwQix3QkFBd0I7O0FBRXhCLG9CQUFvQjs7QUFFcEIsd0JBQXdCOztBQUV4QixrQkFBa0I7O0FBRWxCLHFCQUFxQjs7QUFFckIscUJBQXFCOztBQUVyQix5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLElBQUk7QUFDMUMsdUNBQXVDLElBQUk7O0FBRTNDO0FBQ0Esc0NBQXNDLElBQUk7QUFDMUMsdUNBQXVDLElBQUk7O0FBRTNDO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEMscUNBQXFDLElBQUk7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcG9wLXVwLW1vZHVsZS9wb3AtdXAtc3R5bGluZy5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcm9jay1wYXBlci1zY2lzc29ycy1tb2R1bGUvZ2FtZS1zdHlsaW5nLmNzcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcG9wLXVwLW1vZHVsZS9wb3AtdXAtc3R5bGluZy5jc3M/Zjc0NSIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9yb2NrLXBhcGVyLXNjaXNzb3JzLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzP2EzNWUiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2dhbWUtaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3BvcC11cC1tb2R1bGUvaW5mby1ib3guanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcG9wLXVwLW1vZHVsZS9tZW51LWJhc2UuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcG9wLXVwLW1vZHVsZS9tZW51LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3BvcC11cC1tb2R1bGUvcG9wLXVwLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3BvcC11cC1tb2R1bGUvc2VsZWN0LWJveC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9yb2NrLXBhcGVyLXNjaXNzb3JzLW1vZHVsZS9nYW1lLW1vZHVsZS9nYW1lLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3JvY2stcGFwZXItc2Npc3NvcnMtbW9kdWxlL2dhbWUtbW9kdWxlL2xldmVscy9lYXN5LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3JvY2stcGFwZXItc2Npc3NvcnMtbW9kdWxlL2dhbWUtbW9kdWxlL2xldmVscy9oYXJkLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3JvY2stcGFwZXItc2Npc3NvcnMtbW9kdWxlL2dhbWUtbW9kdWxlL2xldmVscy9sZXZlbC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9yb2NrLXBhcGVyLXNjaXNzb3JzLW1vZHVsZS9nYW1lLW1vZHVsZS9sZXZlbHMvbWVkaXVtLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3JvY2stcGFwZXItc2Npc3NvcnMtbW9kdWxlL2dhbWUtbW9kdWxlL3NpZ24uanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcm9jay1wYXBlci1zY2lzc29ycy1tb2R1bGUvbWFpbi1tb2R1bGUvcnBzLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcm9jay1wYXBlci1zY2lzc29ycy1tb2R1bGUvcnBzLWdhbWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcm9jay1wYXBlci1zY2lzc29ycy1tb2R1bGUvc2V0dGluZy1tb2R1bGUvcnBzLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvcm9jay1wYXBlci1zY2lzc29ycy1tb2R1bGUvc2V0dGluZy1tb2R1bGUvc2lnbi1idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pbmZvLWNvbXBvbmVudHMge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtO1xufVxuXG4uaW5mby1jb21wb25lbnRzID4gZGl2IHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTsgfVxuXG4ubWVudS1jb250YWluZXIsXG4uc2VsZWN0LWNvbnRhaW5lcixcbi5pbmZvcm1hdGlvbi1jb250YWluZXIgeyBmb250LWZhbWlseTogXCJEb2dpY2FcIjsgfVxuXG4ubWVudS1ib3gsXG4uc2VsZWN0LWJveCxcbi5pbmZvcm1hdGlvbi1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmluZm9ybWF0aW9uLWJveCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi8qIC5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDAuNHJlbTsgfSAqL1xuXG4ubWVudS10aXRsZSxcbi5zZWxlY3QtZGVzY3JpcHRpb24sXG4uaW5mb3JtYXRpb24tdGl0bGUsXG4uZXJyb3ItdGl0bGUgeyBmb250LWZhbWlseTogXCJEb2dpY2EgQm9sZFwiOyB9XG5cbi5tZW51LWJveCA+IGRpdixcbi5zZWxlY3QtYm94ID4gZGl2LFxuLmluZm9ybWF0aW9uLWJveCA+IGRpdiB7IHRleHQtYWxpZ246IHN0YXJ0OyB9XG5cbi5tZW51LWJveCA+IGRpdi5jdXJzb3IsXG4uc2VsZWN0LWJveCA+IGRpdi5jdXJzb3Ige1xuICAgIGFuaW1hdGlvbjogZmFkZSAxLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5lcnJvci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmVycm9yLWJveCxcbi5zZWxlY3QtYm94LFxuLmluZm9ybWF0aW9uLWJveCxcbi5tZW51LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDQ7XG4gICAgYm9yZGVyOiAzcHggdmFyKC0tdGV4dC1jb2xvdXIpIHNvbGlkO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVycm9yLWJveCB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhIEJvbGRcIjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLXNjcmVlbik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQge1xuICAgIHotaW5kZXg6IDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICAgIG9wYWNpdHk6IDAuNztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wb3AtdXAtbW9kdWxlL3BvcC11cC1zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBLHlCQUF5QixxQ0FBcUMsRUFBRTs7QUFFaEU7O3lCQUV5QixxQkFBcUIsRUFBRTs7QUFFaEQ7OztJQUdJLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUEseUNBQXlDOztBQUV6Qzs7O2VBR2UsMEJBQTBCLEVBQUU7O0FBRTNDOzt5QkFFeUIsaUJBQWlCLEVBQUU7O0FBRTVDOztJQUVJLDZCQUE2QjtJQUM3Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmluZm8tY29tcG9uZW50cyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uaW5mby1jb21wb25lbnRzID4gZGl2IHsgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTsgfVxcblxcbi5tZW51LWNvbnRhaW5lcixcXG4uc2VsZWN0LWNvbnRhaW5lcixcXG4uaW5mb3JtYXRpb24tY29udGFpbmVyIHsgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiOyB9XFxuXFxuLm1lbnUtYm94LFxcbi5zZWxlY3QtYm94LFxcbi5pbmZvcm1hdGlvbi1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLmluZm9ybWF0aW9uLWJveCB7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbi8qIC5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDAuNHJlbTsgfSAqL1xcblxcbi5tZW51LXRpdGxlLFxcbi5zZWxlY3QtZGVzY3JpcHRpb24sXFxuLmluZm9ybWF0aW9uLXRpdGxlLFxcbi5lcnJvci10aXRsZSB7IGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhIEJvbGRcXFwiOyB9XFxuXFxuLm1lbnUtYm94ID4gZGl2LFxcbi5zZWxlY3QtYm94ID4gZGl2LFxcbi5pbmZvcm1hdGlvbi1ib3ggPiBkaXYgeyB0ZXh0LWFsaWduOiBzdGFydDsgfVxcblxcbi5tZW51LWJveCA+IGRpdi5jdXJzb3IsXFxuLnNlbGVjdC1ib3ggPiBkaXYuY3Vyc29yIHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlIDEuNXMgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5lcnJvci1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5lcnJvci1ib3gsXFxuLnNlbGVjdC1ib3gsXFxuLmluZm9ybWF0aW9uLWJveCxcXG4ubWVudS1ib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIGJvcmRlcjogM3B4IHZhcigtLXRleHQtY29sb3VyKSBzb2xpZDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZXJyb3ItYm94IHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2EgQm9sZFxcXCI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1zY3JlZW4pO1xcbn1cXG5cXG4uYmx1cnJlZC1iYWNrZ3JvdW5kIHtcXG4gICAgei1pbmRleDogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTWVyb21TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvR290aGljYS1Cb29rLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2RvZ2ljYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9CZW9uLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNZXJvbSBTYW5zXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkdvdGhpY2FcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkJlb25cIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuOnJvb3Qge1xuICAgIC0td2hpdGU6ICNmZGZmZmM7XG4gICAgLS1ibGFjazogIzAyMDEwMDtcbn1cblxuOnJvb3Qubm9ybWFsIHtcbiAgICAtLWZvbnQ6IFwiTWVyb20gU2Fuc1wiO1xuICAgIC0tc2NyZWVuOiAjZTdlNmY3O1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjZTNkMGQ4O1xuICAgIC0tYm9yZGVyLWNvbG91cjogIzgyNzA4MTtcbiAgICAtLWJhY2tncm91bmQtY29sb3VyOiAjYzZkMmVkO1xuICAgIC0tY3Vyc29yOiAjYWVhM2IwO1xuICAgIC0tdGV4dC1jb2xvdXI6ICMwMjAxMDA7XG59XG5cbjpyb290Lm1vbm90b25lIHtcbiAgICAtLWZvbnQ6IFwiR290aGljYVwiO1xuICAgIC0tc2NyZWVuOiAjOWY5ZTlkO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjNTY1NjU1O1xuICAgIC0tYm9yZGVyLWNvbG91cjogIzAyMDEwMDtcbiAgICAtLWJhY2tncm91bmQtY29sb3VyOiAjZGFkOWQ5O1xuICAgIC0tY3Vyc29yOiAjN2Q3YzdiO1xuICAgIC0tdGV4dC1jb2xvdXI6ICMwMjAxMDA7XG59XG5cbjpyb290Lm5lb24ge1xuICAgIC0tZm9udDogXCJCZW9uXCI7XG4gICAgLS1zY3JlZW46ICMwOTE4MzM7XG4gICAgLS1lcnJvci1zY3JlZW46ICNmMjNjYTY7XG4gICAgLS1ib3JkZXItY29sb3VyOiAjNzExYzkxO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvdXI6ICM3MTFjOTE7XG4gICAgLS1jdXJzb3I6ICMwYWJkYzY7XG4gICAgLS10ZXh0LWNvbG91cjogI2ZiZmYzNjtcbn1cblxuOnJvb3QudGVybWluYWwge1xuICAgIC0tZm9udDogXCJEb2dpY2FcIjtcbiAgICAtLXNjcmVlbjogYmxhY2s7XG4gICAgLS1lcnJvci1zY3JlZW46IHJlZDtcbiAgICAtLWJvcmRlci1jb2xvdXI6IGJsYWNrO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvdXI6IGJsYWNrO1xuICAgIC0tY3Vyc29yOiBncmVlbjtcbiAgICAtLXRleHQtY29sb3VyOiBncmVlbjtcbn1cblxuLnJvY2stcGFwZXItc2Npc3NvcnMtZ2FtZS1tb2R1bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNjcmVlbik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ycHMtZGlzcGxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJwcy1odW1hbi1tb3ZlLFxuLnJwcy1hbGdvcml0aG0tbW92ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucnBzLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3VyKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuW2NsYXNzKj1cIi1zaWduLWJ1dHRvblwiXSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG5bY2xhc3MqPVwiLXNpZ24tYnV0dG9uXCJdID4gaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjtcbn1cblxuI2N1cnNvci1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1cnNvcik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGFuaW1hdGlvbjogYmxpbmsgMS41cyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uaW5mb3JtYXRpb24tY29udGFpbmVyIHsgZm9udC1zaXplOiAxLjVyZW07IH1cblxuLmluZm8tbWVzc2FnZSB7IGZvbnQtc2l6ZTogMXJlbTsgfVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICA1MCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yb2NrLXBhcGVyLXNjaXNzb3JzLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBcUM7QUFDekM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUEsMEJBQTBCLGtCQUFrQixFQUFFOztBQUU5QztJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7QUFDZDs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCw4QkFBOEI7SUFDOUIseUJBQXlCO0FBQzdCOztBQUVBLHlCQUF5QixpQkFBaUIsRUFBRTs7QUFFNUMsZ0JBQWdCLGVBQWUsRUFBRTs7QUFFakM7SUFDSSxLQUFLLFVBQVUsRUFBRTtJQUNqQixNQUFNLFVBQVUsRUFBRTtJQUNsQixPQUFPLFVBQVUsRUFBRTtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNZXJvbSBTYW5zXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL01lcm9tU2Fucy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHb3RoaWNhXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0dvdGhpY2EtQm9vay50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL2RvZ2ljYS50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQmVvblxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9CZW9uLVJlZ3VsYXIub3RmXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS13aGl0ZTogI2ZkZmZmYztcXG4gICAgLS1ibGFjazogIzAyMDEwMDtcXG59XFxuXFxuOnJvb3Qubm9ybWFsIHtcXG4gICAgLS1mb250OiBcXFwiTWVyb20gU2Fuc1xcXCI7XFxuICAgIC0tc2NyZWVuOiAjZTdlNmY3O1xcbiAgICAtLWVycm9yLXNjcmVlbjogI2UzZDBkODtcXG4gICAgLS1ib3JkZXItY29sb3VyOiAjODI3MDgxO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3VyOiAjYzZkMmVkO1xcbiAgICAtLWN1cnNvcjogI2FlYTNiMDtcXG4gICAgLS10ZXh0LWNvbG91cjogIzAyMDEwMDtcXG59XFxuXFxuOnJvb3QubW9ub3RvbmUge1xcbiAgICAtLWZvbnQ6IFxcXCJHb3RoaWNhXFxcIjtcXG4gICAgLS1zY3JlZW46ICM5ZjllOWQ7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiAjNTY1NjU1O1xcbiAgICAtLWJvcmRlci1jb2xvdXI6ICMwMjAxMDA7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvdXI6ICNkYWQ5ZDk7XFxuICAgIC0tY3Vyc29yOiAjN2Q3YzdiO1xcbiAgICAtLXRleHQtY29sb3VyOiAjMDIwMTAwO1xcbn1cXG5cXG46cm9vdC5uZW9uIHtcXG4gICAgLS1mb250OiBcXFwiQmVvblxcXCI7XFxuICAgIC0tc2NyZWVuOiAjMDkxODMzO1xcbiAgICAtLWVycm9yLXNjcmVlbjogI2YyM2NhNjtcXG4gICAgLS1ib3JkZXItY29sb3VyOiAjNzExYzkxO1xcbiAgICAtLWJhY2tncm91bmQtY29sb3VyOiAjNzExYzkxO1xcbiAgICAtLWN1cnNvcjogIzBhYmRjNjtcXG4gICAgLS10ZXh0LWNvbG91cjogI2ZiZmYzNjtcXG59XFxuXFxuOnJvb3QudGVybWluYWwge1xcbiAgICAtLWZvbnQ6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICAtLXNjcmVlbjogYmxhY2s7XFxuICAgIC0tZXJyb3Itc2NyZWVuOiByZWQ7XFxuICAgIC0tYm9yZGVyLWNvbG91cjogYmxhY2s7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvdXI6IGJsYWNrO1xcbiAgICAtLWN1cnNvcjogZ3JlZW47XFxuICAgIC0tdGV4dC1jb2xvdXI6IGdyZWVuO1xcbn1cXG5cXG4ucm9jay1wYXBlci1zY2lzc29ycy1nYW1lLW1vZHVsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ycHMtZGlzcGxheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3VyKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucnBzLWh1bWFuLW1vdmUsXFxuLnJwcy1hbGdvcml0aG0tbW92ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJwcy1idXR0b24tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvdXIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuW2NsYXNzKj1cXFwiLXNpZ24tYnV0dG9uXFxcIl0geyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG5bY2xhc3MqPVxcXCItc2lnbi1idXR0b25cXFwiXSA+IGltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jY3Vyc29yLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1cnNvcik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBhbmltYXRpb246IGJsaW5rIDEuNXMgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcblxcbi5pbmZvcm1hdGlvbi1jb250YWluZXIgeyBmb250LXNpemU6IDEuNXJlbTsgfVxcblxcbi5pbmZvLW1lc3NhZ2UgeyBmb250LXNpemU6IDFyZW07IH1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgIDUwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcC11cC1zdHlsaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcC11cC1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUludGVyZmFjZSB7XG4gICAgLyoqXG4gICAgICogR2FtZSBJbnRlcmZhY2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBCYXNlIEdhbWUgQ2xhc3MgdGhhdCBzaG91bGQgYmUgSW5oZXJpdGVkIGJ5IE90aGVyIEdhbWVzIHRvIGJlIFBsYXllZCBvbiBcbiAgICAgKiB0aGUgR2FtZUNoaXAuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIE5hbWUgb2YgdGhlIEdhbWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHsgdGhpcy5fdGl0bGUgPSB0aXRsZTsgfVxuXG4gICAgZ2V0IHRpdGxlICgpIHsgcmV0dXJuIHRoaXMuX3RpdGxlOyB9XG5cbiAgICBzZXQgdGl0bGUgKHN0cikgeyB0aGlzLl90aXRsZTsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNob3cgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBTaG93IENhbGxiYWNrIE1ldGhvZCBmb3IgVXBkYXRpbmcgdGhlIEdhbWVDaGlwIERpc3BsYXlcbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgc2hvd0NhbGxiYWNrIFNob3cgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgdGFrZURvd25DYWxsYmFjayBUYWtlIERvd24gQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgZGltZW5zaW9uc0NhbGxiYWNrIEdldCBEaW1lbnNpb25zIENhbGxiYWNrXG4gICAgICovXG4gICAgc2V0U2NlbmUgKHNob3dDYWxsYmFjaywgdGFrZURvd25DYWxsYmFjaywgZ2V0RGltZW5zaW9ucykge31cblxuICAgIC8qKlxuICAgICAqIFVwIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBVcCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgdXBDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogUmlnaHQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFJpZ2h0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICByaWdodENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBEb3duIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBEb3duIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBkb3duQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIExlZnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIExlZnQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGxlZnRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQSBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQSBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGFDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQiBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGJDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFN0YXJ0IFVzZXIgQnV0dG9uLlxuICAgICAqL1xuICAgIHN0YXJ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgU2VsZWN0IFVzZXIgQnV0dG9uLlxuICAgICAqL1xuICAgIHNlbGVjdENhbGxiYWNrICgpIHt9XG59IiwiaW1wb3J0IFBvcFVwIGZyb20gXCIuL3BvcC11cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvQm94IGV4dGVuZHMgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIEluZm9ybWF0aW9uIEJveCBDbGFzc1xuICAgICAqIFxuICAgICAqIFVzZWQgZm9yIHVwZGF0aW5nIHRoZSBVc2VyIHdpdGggSW5mb3JtYXRpb24gcmVsYXRpbmcgdG8gdGhlIGN1cnJlbnQgR2FtZSBcbiAgICAgKiBiZWluZyBwbGF5ZWQuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihcIkluZm9ybWF0aW9uXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE1lc3NhZ2UgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImluZm8tbWVzc2FnZVwiKTtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX21lc3NhZ2UpO1xuXG4gICAgICAgIC8vIFNldCBBY3RpdmUgdG8gYmUgRmFsc2VcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UgKCkgeyByZXR1cm4gdGhpcy5fbWVzc2FnZTsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKGVsZW0pIHsgdGhpcy5fbWVzc2FnZSA9IGVsZW07IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgUG9wLVVwIEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBTZXQgQ29udGFpbmVyIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuXG4gICAgICAgIC8vIFNldCBCbHVycmVkIEJhY2tnb3VuZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGJveFcgPSBNYXRoLmZsb29yKHdpZHRoICogMC45KTtcbiAgICAgICAgY29uc3QgYm94SCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC45KTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5oZWlnaHQgPSBgJHtib3hIfXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBQb3NpdGlvblxuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuMSk7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC4xKTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG5cbiAgICAgICAgLy8gU2V0IE1lc3NhZ2UgRm9udCBTaXplXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gTWF0aC5mbG9vcihNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAqIDAuMDQpO1xuICAgICAgICB0aGlzLl9tZXNzYWdlLnN0eWxlLmZvbnRTaXplID0gYCR7Zm9udFNpemV9cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBUaXRsZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIFRpdGxlIG9mIHRoZSBJbmZvcm1hdGlvbiBCb3guXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR4dCBOZXcgVGl0bGVcbiAgICAgKi9cbiAgICBzZXRUaXRsZSAodHh0KSB7IHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gdHh0OyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgTWVzc2FnZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIEluZm9ybWF0aW9uIEJveCB3aXRoIHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gcmVsYXRlZCB0byB0aGUgXG4gICAgICogZ2FtZSBiZWluZyBwbGF5ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR4dCBJbmZvcm1hdGlvbiBNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TWVzc2FnZSAodHh0KSB7IFxuICAgICAgICB0aGlzLl9tZXNzYWdlLnRleHRDb250ZW50ID0gdHh0OyBcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IFBvcFVwIGZyb20gXCIuL3BvcC11cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51QmFzZSBleHRlbmRzIFBvcFVwIHtcbiAgICAvKipcbiAgICAgKiBNZW51IEJhc2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBCYXNlIENsYXNzIGZvciBNYWluIE1lbnVzIG9yIFN1Yi1NZW51cy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2F0ZWdvcmllcyBDYXRlZ29yaWVzIGZvciBNZW51XG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNhdGVnb3JpZXMpIHtcbiAgICAgICAgc3VwZXIoXCJNZW51XCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIE9wdGlvbiBET00gRWxlbWVudHNcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5pZCA9IGAke3N1Yi5rZXkudG9Mb3dlckNhc2UoKX0tb3B0aW9uYDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHN1Yi5rZXk7XG4gICAgICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBCdWlsZCBSZXR1cm4gT3B0aW9uIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX3JldHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3JldHVybi5jbGFzc0xpc3QuYWRkKFwicmV0dXJuLW9wdGlvblwiKTtcbiAgICAgICAgdGhpcy5fcmV0dXJuLnRleHRDb250ZW50ID0gXCJSZXR1cm5cIjtcbiAgICAgICAgdGhpcy5fYm94LmFwcGVuZENoaWxkKHRoaXMuX3JldHVybik7XG5cbiAgICAgICAgLy8gU2V0dXAgQ3Vyc29yXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX25hbWUgPSBjYXRlZ29yaWVzLmtleTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgICBrZXk6IHRoaXMuX25hbWUsXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBvcHRpb25zICgpIHsgcmV0dXJuIHRoaXMuX29wdGlvbnM7IH1cblxuICAgIHNldCBvcHRpb25zIChhcnIpIHsgdGhpcy5fb3B0aW9ucyA9IGFycjsgfVxuXG4gICAgZ2V0IHJldHVybiAoKSB7IHJldHVybiB0aGlzLl9yZXR1cm47IH1cblxuICAgIHNldCByZXR1cm4gKGVsZW0pIHsgdGhpcy5fcmV0dXJuID0gZWxlbTsgfVxuXG4gICAgZ2V0IG5hbWUgKCkgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuXG4gICAgc2V0IG5hbWUgKHN0cikgeyB0aGlzLl9uYW1lID0gc3RyOyB9XG5cbiAgICBnZXQgc2VsZWN0ZWQgKCkgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7IH1cblxuICAgIHNldCBzZWxlY3RlZCAoZGljdCkgeyB0aGlzLl9zZWxlY3RlZCA9IGRpY3Q7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgTWVudSBCb3gsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSB0byBiZSBzZXQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFNjcmVlbiBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgU2NyZWVuIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgc3VwZXIuc2V0RGltZW5zaW9ucyh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvLyBTZXQgT3B0aW9ucyBXaWR0aFxuICAgICAgICBjb25zdCBib3hXID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuNik7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uc3R5bGUud2lkdGggPSBgJHtib3hXfXB4YDsgfSk7XG4gICAgICAgIHRoaXMuX3JldHVybi5zdHlsZS53aWR0aCA9IGAke2JveFd9cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBDdXJzb3IgTWV0aG9kXG4gICAgICogXG4gICAgICogV2hpbGUgY3ljbGluZyB0aHJvdWdoIHRoZSBNZW51IE9wdGlvbnMsIGlmIHRoZSBjdXJzb3IgaXMgb24gYW4gb3B0aW9uLCBcbiAgICAgKiB0aGVuIHRoZSBvcHRpb24gc2hvdWxkIGJlIGhpZ2hsaWdodGVkLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb24gQ3Vyc29yIG9uIE9wdGlvblxuICAgICAqL1xuICAgIHNldEN1cnNvciAob249dHJ1ZSkge1xuICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIE9wdGlvblxuICAgICAgICBpZiAodGhpcy5fY3VycmVudCA9PT0gdGhpcy5fb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5jb250YWlucyhcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmIChvbiAmJiAhY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fcmV0dXJuLmNsYXNzTGlzdC5hZGQoXCJjdXJzb3JcIik7XG4gICAgICAgICAgICBpZiAoIW9uICYmIGNoZWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuX3JldHVybi5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yXCIpO1xuICAgICAgICB9IFxuICAgICAgICAvLyBIYW5kbGUgT3RoZXIgT3B0aW9uc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QuY29udGFpbnMoXCJjdXJzb3JcIik7XG4gICAgICAgICAgICBpZiAob24gJiYgIWNoZWNrKVxuICAgICAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgICAgICAgICAgIGlmICghb24gJiYgY2hlY2spXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBNb3ZpbmcgdGhlIEN1cnNvciBVcCBvciBEb3duIG9uIHRoZSBNZW51LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXAgRGVmYXVsdCBBY3Rpb24gaXMgVXB3YXJkc1xuICAgICAqL1xuICAgIHZlcnRpY2FsTW92ZSAodXA9dHJ1ZSkge1xuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudCArICh1cCA/IC0xIDogMSk7XG4gICAgICAgIGlmIChjdXJyIDw9IHRoaXMuX29wdGlvbnMubGVuZ3RoICYmIGN1cnIgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJzb3IoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IGN1cnI7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXB0IEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBDaG9vc2VzIHRoZSBPcHRpb24gb24gdGhlIE1lbnUgdGhhdCB0aGUgVXNlciBoYXMgc2VsZWN0ZWQsIHJldHVybmluZyB0cnVlIFxuICAgICAqIGltcGxpZXMgdGhhdCBhbiBvcHRpb24gd2FzIHNlbGVjdGVkLCBmYWxzZSBpbXBsaWVzIHRoYXQgdGhlIHJldHVybiBvcHRpb24gXG4gICAgICogd2FzIHNlbGVjdGVkLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIFRydWUgZm9yIGFuIE9wdGlvbiwgRmFsc2UgZm9yIFJldHVyblxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBSZXR1cm4gU2VsZWN0XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50ID09PSB0aGlzLl9vcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIE9wdGlvbnMgU2VsZWN0XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkLnZhbHVlID0gdGhpcy5fb3B0aW9uc1t0aGlzLl9jdXJyZW50XS50ZXh0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSIsImltcG9ydCBNZW51QmFzZSBmcm9tIFwiLi9tZW51LWJhc2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIE1lbnVCYXNlIHtcbiAgICAvKipcbiAgICAgKiBNZW51IENsYXNzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBnaXZlbiBDYXRlZ29yaWVzIGZvciB0aGUgTWVudSwgYSBkaXNwbGF5IHdpbGwgYmUgcHJlc2VudGVkIHRvIFxuICAgICAqIHRoZSBVc2VyIGZvciB0aGVtIHRvIFNlbGVjdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2F0ZWdvcmllcyBKU09OIE9iamVjdCBvZiBNZW51IENhdGVnb3JpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY2F0ZWdvcmllcykge1xuICAgICAgICBzdXBlcihjYXRlZ29yaWVzKTtcblxuICAgICAgICAvLyBCdWlsZCBTdWItTWVudXNcbiAgICAgICAgdGhpcy5fc3VicyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgLy8gT25seSBDcmVhdGUgU3ViLU1lbnUgaWYgTmVjZXNzYXJ5XG4gICAgICAgICAgICBpZiAoc3ViLnN1YnMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHN1Yi5rZXksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtZW51OiBuZXcgTWVudShzdWIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVcbiAgICAgICAgdGhpcy5fY29udHJvbGxlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBzdWJzICgpIHsgcmV0dXJuIHRoaXMuX3N1YnM7IH1cblxuICAgIHNldCBzdWJzIChhcnIpIHsgdGhpcy5fc3VicyA9IGFycjsgfVxuXG4gICAgZ2V0IGNvbnRyb2xsZXIgKCkgeyByZXR1cm4gdGhpcy5fY29udHJvbGxlcjsgfVxuXG4gICAgc2V0IGNvbnRyb2xsZXIgKGJvb2wpIHsgdGhpcy5fY29udHJvbGxlciA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgTWVudSBCb3gsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGFyZSB0byBiZSBzZXQuIFxuICAgICAqIEFkZGl0aW9uYWxseSwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIFN1Yi1NZW51IENvbXBvbmVudHMgYXJlIHRvIGJlIFxuICAgICAqIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBIYW5kbGUgTWVudSBEaW1lbnNpb25zXG4gICAgICAgIHN1cGVyLnNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fc3Vicy5mb3JFYWNoKHN1YiA9PiB7IHN1Yi5tZW51LnNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCk7IH0pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBTZXQgU3ViLU1lbnUgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0cyB0aGUgU3ViLU1lbnUgU2VsZWN0ZWQgYnkgdGhlIFVzZXIgdG8gYmUgb24gRGlzcGxheS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBTdWItTWVudSBET00gRWxlbWVudFxuICAgICAqL1xuICAgIHNldFN1Yk1lbnUgKCkge1xuICAgICAgICB0aGlzLl9zdWJzW3RoaXMuX2N1cnJlbnRdLmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3Vic1t0aGlzLl9jdXJyZW50XS5tZW51O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IFN1Yi1NZW51cyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXRzIHRoZSBNYWluIE1lbnUgdG8gYmUgb24gRGlzcGxheS5cbiAgICAgKi9cbiAgICByZXNldFN1Yk1lbnVzICgpIHsgdGhpcy5fc3Vicy5mb3JFYWNoKHN1YiA9PiB7IHN1Yi5jb250cm9sbGVyID0gZmFsc2U7IH0pOyB9XG59IiwiaW1wb3J0IFwiLi9wb3AtdXAtc3R5bGluZy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wVXAge1xuICAgIC8qKlxuICAgICAqIFBvcC1VcCBDbGFzc1xuICAgICAqIFxuICAgICAqIFNldmVyYWwgQ29tcG9uZW50cyB0byB0aGUgR2FtZSByZXF1aXJlIGEgUG9wLVVwIEJveCwgYW5kIHRoaXMgQ2xhc3MgXG4gICAgICogUmVwcmVzZW50cyB0aGF0IEJveC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIGZvciBQb3AtVXBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICAvLyBCdWlsZCBQb3AtVXAgQ29udGFpbmVyIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX21vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tY29udGFpbmVyYCk7XG4gICAgICAgIFxuICAgICAgICAvLyBCdWlsZCBQb3AtVXAgQm94IERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2JveC5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tYm94YCk7XG5cbiAgICAgICAgLy8gQnVpbGQgVGl0bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl90aXRsZS5jbGFzc0xpc3QuYWRkKGAke25hbWUudG9Mb3dlckNhc2UoKX0tdGl0bGVgKTtcbiAgICAgICAgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQodGhpcy5fdGl0bGUpO1xuXG4gICAgICAgIC8vIEJ1aWxkIEJsdXJyZWQgQmFja2dyb3VuZCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9ibHVycmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYmx1cnJlZC5jbGFzc0xpc3QuYWRkKFwiYmx1cnJlZC1iYWNrZ3JvdW5kXCIpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBDb21wb25lbnRzIHRvIE1vZHVsZVxuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fYmx1cnJlZCk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9ib3gpO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgUG9wLVVwIEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAvLyBTZXQgQ29udGFpbmVyIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxuXG4gICAgICAgIC8vIFNldCBCbHVycmVkIEJhY2tnb3VuZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuX2JsdXJyZWQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGJveFcgPSBNYXRoLmZsb29yKHdpZHRoICogMC42KTtcbiAgICAgICAgY29uc3QgYm94SCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC42KTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLndpZHRoID0gYCR7Ym94V31weGA7XG4gICAgICAgIHRoaXMuX2JveC5zdHlsZS5oZWlnaHQgPSBgJHtib3hIfXB4YDtcblxuICAgICAgICAvLyBTZXQgUG9wLVVwIEJveCBQb3NpdGlvblxuICAgICAgICBjb25zdCBsZWZ0ID0gTWF0aC5mbG9vcih3aWR0aCAqIDAuMik7XG4gICAgICAgIGNvbnN0IHRvcCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC4yKTtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5fYm94LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gICAgfVxufSIsImltcG9ydCBQb3BVcCBmcm9tIFwiLi9wb3AtdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0Qm94IGV4dGVuZHMgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yIChkZXNjcmlwdGlvbiwgY2F0ZWdvcmllcykge1xuICAgICAgICBzdXBlcihcIlNlbGVjdFwiKTtcblxuICAgICAgICAvLyBSZW1vdmUgVGl0bGVcbiAgICAgICAgdGhpcy5fYm94LnJlbW92ZUNoaWxkKHRoaXMuX3RpdGxlKTtcblxuICAgICAgICAvLyBCdWlsZCBEZXNjcmlwdGlvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9kZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fZGVzYy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0aGlzLl9kZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZCh0aGlzLl9kZXNjKTtcblxuICAgICAgICAvLyBCdWlsZCBPcHRpb24gRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBvcHRpb24uaWQgPSBgJHtjYXRlZ29yeS5rZXkudG9Mb3dlckNhc2UoKX0tb3B0aW9uYDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNhdGVnb3J5LmtleTtcbiAgICAgICAgICAgIHRoaXMuX2JveC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldHVwIEN1cnNvclxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gMDtcbiAgICAgICAgdGhpcy5zZXRDdXJzb3IoKTtcblxuICAgICAgICAvLyBTZXQgQWN0aXZlIHRvIGJlIEZhbHNlXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kZXNjOyB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24gKHN0cikgeyB0aGlzLl9kZXNjID0gc3RyOyB9XG5cbiAgICBnZXQgb3B0aW9ucyAoKSB7IHJldHVybiB0aGlzLl9vcHRpb25zOyB9XG5cbiAgICBzZXQgb3B0aW9ucyAoYXJyKSB7IHRoaXMuX29wdGlvbnMgPSBhcnI7IH1cblxuICAgIGdldCBhY3RpdmUgKCkgeyByZXR1cm4gdGhpcy5fYWN0aXZlOyB9XG5cbiAgICBzZXQgYWN0aXZlIChib29sKSB7IHRoaXMuX2FjdGl2ZSA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29tcG9uZW50cyBvZiB0aGUgU2VsZWN0IEJveCwgdGhlIHdpZHRoIGFuZCBoZWlnaHQgYXJlIHRvIGJlIHNldC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggU2NyZWVuIFdpZHRoIChwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBTY3JlZW4gSGVpZ2h0IChwaXhlbHMpXG4gICAgICovXG4gICAgc2V0RGltZW5zaW9ucyAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBzdXBlci5zZXREaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBDb21wb25lbnQgV2lkdGhcbiAgICAgICAgdGhpcy5fYm94VyA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjYpO1xuICAgICAgICB0aGlzLl9kZXNjLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fYm94V31weGA7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4geyBvcHRpb24uc3R5bGUud2lkdGggPSBgJHt0aGlzLl9ib3hXfXB4YDsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEN1cnNvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBXaGlsZSBjeWNsaW5nIHRocm91Z2ggdGhlIFNlbGVjdCBPcHRpb25zLCBpZiB0aGUgY3Vyc29yIGlzIG9uIGFuIG9wdGlvbiwgXG4gICAgICogdGhlbiB0aGUgb3B0aW9uIHNob3VsZCBiZSBoaWdobGlnaHRlZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uIEN1cnNvciBvbiBPcHRpb25cbiAgICAgKi9cbiAgICBzZXRDdXJzb3IgKG9uPXRydWUpIHtcbiAgICAgICAgLy8gSGFuZGxlIE9wdGlvbnNcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLmNsYXNzTGlzdC5jb250YWlucyhcImN1cnNvclwiKTtcbiAgICAgICAgaWYgKG9uICYmICFjaGVjaylcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LmFkZChcImN1cnNvclwiKTtcbiAgICAgICAgaWYgKCFvbiAmJiBjaGVjaylcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNbdGhpcy5fY3VycmVudF0uY2xhc3NMaXN0LnJlbW92ZShcImN1cnNvclwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgU2VsZWN0aW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIE5ldyBTZWxlY3Rpb24sIHRoZSBtZXRob2Qgd2lsbCByZXNldCB0aGUgRE9NIEVsZW1lbnRzIGluIHRoZSBcbiAgICAgKiBTZWxlY3Rpb24gQm94LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjIE5ldyBEZXNjcmlwdGlvbiBmb3IgU2VsZWN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gY2F0ZWdvcmllcyBOZXcgTGlzdCBvZiBDYXRlZ29yaWVzXG4gICAgICovXG4gICAgc2V0U2VsZWN0aW9ucyAoZGVzYywgY2F0ZWdvcmllcykge1xuICAgICAgICAvLyBTZXQgRGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5fZGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG5cbiAgICAgICAgLy8gUmVtb3ZlIE9wdGlvbnMgZnJvbSBCb3hcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7IHRoaXMuX2JveC5yZW1vdmVDaGlsZChvcHRpb24pOyB9KTtcblxuICAgICAgICAvLyBTZXQgTmV3IE9wdGlvbnNcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5pZCA9IGAke2NhdGVnb3J5LmtleS50b0xvd2VyQ2FzZSgpfS1vcHRpb25gO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnkua2V5O1xuICAgICAgICAgICAgb3B0aW9uLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fYm94V31weGA7XG4gICAgICAgICAgICB0aGlzLl9ib3guYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgQ3Vyc29yXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuICAgICAgICB0aGlzLnNldEN1cnNvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcnRpY2FsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92aW5nIHRoZSBDdXJzb3IgVXAgb3IgRG93biBvbiB0aGUgU2VsZWN0IEJveC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVwIERlZmF1bHQgQWN0aW9uIGlzIFVwd2FyZHNcbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE1vdmUodXA9dHJ1ZSkge1xuICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudCArICh1cCA/IC0xIDogMSk7XG4gICAgICAgIGlmIChjdXJyIDwgdGhpcy5fb3B0aW9ucy5sZW5ndGggJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnNvcihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gY3VycjtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY2NlcHQgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENob29zZXMgdGhlIE9wdGlvbiBvbiB0aGUgU2VsZWN0IEJveCB0aGF0IHRoZSBVc2VyIGhhcyBzZWxlY3RlZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCByZXR1cm5zIHRoZSBzdHJpbmcgb2Ygd2hhdCB3YXMgc2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogQHJldHVybnMgU3RyaW5nIFJlcHJlc2VudGF0aW9uIG9mIFNlbGVjdGlvblxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoKSB7IHJldHVybiB0aGlzLl9vcHRpb25zW3RoaXMuX2N1cnJlbnRdLnRleHRDb250ZW50OyB9XG59IiwiaW1wb3J0IEVhc3kgZnJvbSBcIi4vbGV2ZWxzL2Vhc3kuanNcIjtcbmltcG9ydCBNZWRpdW0gZnJvbSBcIi4vbGV2ZWxzL21lZGl1bS5qc1wiO1xuaW1wb3J0IEhhcmQgZnJvbSBcIi4vbGV2ZWxzL2hhcmQuanNcIjtcbmltcG9ydCBTaWduIGZyb20gXCIuL3NpZ24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgI0xFVkVMUyA9IHtlYXN5OiBudWxsLCBtZWRpdW06IG51bGwsIGhhcmQ6IG51bGx9O1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9zaWducyA9IFtcbiAgICAgICAgICAgIG5ldyBTaWduKFwicm9ja1wiKSxcbiAgICAgICAgICAgIG5ldyBTaWduKFwicGFwZXJcIiksXG4gICAgICAgICAgICBuZXcgU2lnbihcInNjaXNzb3JzXCIpXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuI0xFVkVMUy5lYXN5ID0gbmV3IEVhc3kodGhpcy5fc2lnbnMpO1xuICAgICAgICB0aGlzLiNMRVZFTFMubWVkaXVtID0gbmV3IE1lZGl1bSh0aGlzLl9zaWducyk7XG4gICAgICAgIHRoaXMuI0xFVkVMUy5oYXJkID0gbmV3IEhhcmQodGhpcy5fc2lnbnMpO1xuICAgICAgICBcbiAgICAgICAgLy8gU2V0IERlZmF1bHQgQWxnb3JpdGhtIHRvIGJlIEVhc3lcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtID0gdGhpcy4jTEVWRUxTLmVhc3k7XG4gICAgfVxuXG4gICAgZ2V0IHNpZ25zICgpIHsgcmV0dXJuIHRoaXMuX3NpZ25zOyB9XG5cbiAgICBzZXQgc2lnbnMgKGFycikgeyB0aGlzLl9zaWducyA9IGFycjsgfVxuXG4gICAgZ2V0IGFsZ29yaXRobSAoKSB7IHJldHVybiB0aGlzLl9hbGdvcml0aG07IH1cblxuICAgIHNldCBhbGdvcml0aG0gKG9iaikgeyB0aGlzLl9hbGdvcml0aG0gPSBvYmo7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBMZXZlbCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBEaWZmaWN1bHR5IExldmVsIGlzIFNldCB3aXRoIHRoaXMgTWV0aG9kLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCBBbGdvcml0aG0gRGlmZmljdWx0eVxuICAgICAqL1xuICAgIHNldExldmVsIChsZXZlbCkgeyB0aGlzLl9hbGdvcml0aG0gPSB0aGlzLiNMRVZFTFNbbGV2ZWxdOyB9XG5cbiAgICAvKipcbiAgICAgKiBBbGdvcml0aG0gU2VsZWN0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEFsZ29yaXRobSBtdXN0IG1ha2UgYSBibGluZCBzZWxlY3Rpb24gb2YgaXQncyBuZXh0IG1vdmUuXG4gICAgICogXG4gICAgICogQHJldHVybnMgQWxvZ3JpdGhtcycgU2VsZWN0ZWQgU2lnblxuICAgICAqL1xuICAgIGFsZ29yaXRobVNlbGVjdCAoKSB7IFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9hbGdvcml0aG0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fYWxnb3JpdGhtLnBsYXkoKTsgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBUT0RPOiBXcml0ZSBEZXNjcmlwdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoU3RyIFN0cmluZyByZXByZXNlbnRhdGlvbiBmb3IgSHVtYW4gU2lnbiBTZWxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYVN0ciBTdHJpbmcgcmVwcmVzZW50YXRpb24gZm9yIEFsZ29yaXRobSBTaWduIFNlbGVjdGlvblxuICAgICAqIEByZXR1cm5zIDEgZm9yIGEgV2luLCAwIGZvciBhIERyYXcsIC0xIGZvciBhIExvc3NcbiAgICAgKi9cbiAgICBwbGF5IChoU3RyLCBhU3RyKSB7IFxuICAgICAgICBjb25zb2xlLmxvZyhgTXkgU2lnbjogJHtoU3RyfTsgQUkgU2lnbjogJHthU3RyfTtgKTtcbiAgICAgICAgLy8gRmluZCB0aGUgU2lnbnMgdGhhdCBSZXByZXNlbnQgU2lnbnMgU2VsZWN0ZWRcbiAgICAgICAgbGV0IGhTaWduO1xuICAgICAgICBsZXQgYVNpZ247XG4gICAgICAgIHRoaXMuX3NpZ25zLmZvckVhY2goc2lnbiA9PiB7XG4gICAgICAgICAgICBpZiAoc2lnbi5uYW1lID09PSBoU3RyKVxuICAgICAgICAgICAgICAgIGhTaWduID0gc2lnbjtcbiAgICAgICAgICAgIGlmIChzaWduLm5hbWUgPT09IGFTdHIpXG4gICAgICAgICAgICAgICAgYVNpZ24gPSBzaWduO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBHZXQgTWF0Y2h1cCBSZXN1bHRzIGFuZCBVcGRhdGUgQWxnb3JpdGhtXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGhTaWduLm1hdGNodXAoYVNpZ24pO1xuICAgICAgICB0aGlzLl9hbGdvcml0aG0udXBkYXRlKGhTaWduLCByZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBTaWduIGZyb20gXCIuLi9zaWduLmpzXCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWFzeSBleHRlbmRzIExldmVsIHtcbiAgICAvKipcbiAgICAgKiBFYXN5IExldmVsIENsYXNzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBSb2NrLCBQYXBlciwgU2Npc3NvcnMgR2FtZSwgdGhlIEVhc3kgTGV2ZWwgd2lsbCBvbmx5IHBsYXkgUm9jay5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1NpZ25bXX0gc2lnbnMgQXZhaWxhYmxlIFNpZ25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHNpZ25zKSB7IHN1cGVyKHNpZ25zLCBcImVhc3lcIik7IH1cbn0iLCJpbXBvcnQgU2lnbiBmcm9tIFwiLi4vc2lnbi5qc1wiO1xuaW1wb3J0IExldmVsIGZyb20gXCIuL2xldmVsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmQgZXh0ZW5kcyBMZXZlbCB7XG4gICAgLy8gS2V5LCBWYWx1ZXMgb2YgV2lucywgRHJhd3MsIGFuZCBMb3NzZXMgU2NvcmVzXG4gICAgI1NDT1JFUyA9IHtcbiAgICAgICAgV0lOOiB7IHZhbHVlOiAxIH0sXG4gICAgICAgIERSQVc6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgTE9TRTogeyB2YWx1ZTogLTEgfVxuICAgIH07XG4gICAgLy8gS2V5LCBJbmRleCBvZiBTaWduc1xuICAgICNTSUdOUyA9IFt7c2lnbjogXCJyb2NrXCJ9LCB7c2lnbjogXCJwYXBlclwifSwge3NpZ246IFwic2Npc3NvcnNcIn1dO1xuICAgIC8vIEZyZXF1ZW5jeSBEaXN0cmlidXRpb25zIG9mIEh1bWFuJ3MgQ2hvaWNlc1xuICAgICNGUkVRVUVOQ1lfRElTVFJJQlVUSU9OUyA9IHtcbiAgICAgICAgV0lOOiB7XG4gICAgICAgICAgICBST0NLUk9DSzogMSwgUk9DS1BBUEVSOiAxLCBST0NLU0NJU1NPUlM6IDEsXG4gICAgICAgICAgICBQQVBFUlJPQ0s6IDEsIFBBUEVSUEFQRVI6IDEsIFBBUEVSU0NJU1NPUlM6IDEsXG4gICAgICAgICAgICBTQ0lTU09SU1JPQ0s6IDEsIFNDSVNTT1JTUEFQRVI6IDEsIFNDSVNTT1JTU0NJU1NPUlM6IDFcbiAgICAgICAgfSxcbiAgICAgICAgRFJBVzoge1xuICAgICAgICAgICAgUk9DS1JPQ0s6IDEsIFJPQ0tQQVBFUjogMSwgUk9DS1NDSVNTT1JTOiAxLFxuICAgICAgICAgICAgUEFQRVJST0NLOiAxLCBQQVBFUlBBUEVSOiAxLCBQQVBFUlNDSVNTT1JTOiAxLFxuICAgICAgICAgICAgU0NJU1NPUlNST0NLOiAxLCBTQ0lTU09SU1BBUEVSOiAxLCBTQ0lTU09SU1NDSVNTT1JTOiAxXG4gICAgICAgIH0sXG4gICAgICAgIExPU0U6IHtcbiAgICAgICAgICAgIFJPQ0tST0NLOiAxLCBST0NLUEFQRVI6IDEsIFJPQ0tTQ0lTU09SUzogMSxcbiAgICAgICAgICAgIFBBUEVSUk9DSzogMSwgUEFQRVJQQVBFUjogMSwgUEFQRVJTQ0lTU09SUzogMSxcbiAgICAgICAgICAgIFNDSVNTT1JTUk9DSzogMSwgU0NJU1NPUlNQQVBFUjogMSwgU0NJU1NPUlNTQ0lTU09SUzogMVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBUcmFuc2l0aW9uIFByb2JhYmlsaXRpZXMgb2YgU3RhdGVzXG4gICAgI1RSQU5TSVRJT05fVEFCTEVTID0ge1xuICAgICAgICBXSU46IFtcbiAgICAgICAgICAgIFswLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAwXVxuICAgICAgICBdLFxuICAgICAgICBEUkFXOiBbXG4gICAgICAgICAgICBbMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMF0sXG4gICAgICAgICAgICBbMCwgMCwgMF1cbiAgICAgICAgXSxcbiAgICAgICAgTE9TRTogW1xuICAgICAgICAgICAgWzAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDBdLFxuICAgICAgICAgICAgWzAsIDAsIDBdXG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFyZCBMZXZlbCBDbGFzc1xuICAgICAqIFxuICAgICAqIEZvciB0aGUgUm9jaywgUGFwZXIsIFNjaXNzb3JzIEdhbWUsIHRoZSBIYXJkIExldmVsIHVzZXMgYSBNYXJrb3YgQ2hhaW4gXG4gICAgICogdG8gbWFrZSBhIEJlc3QgR3Vlc3MgZm9yIGl0J3MgbmV4dCBtb3ZlLiBJbml0aWFsbHksIGl0IHdpbGwgY2hvb3NlIGEgXG4gICAgICogcmFuZG9tIFNpZ24sIGJ1dCBhbGwgc3Vic2VxdWVudCBtb3ZlcyB3aWxsIHByZWRpY3QgdGhlIEh1bWFuJ3MgbmV4dCBtb3ZlXG4gICAgICogYW5kIHNlbGVjdCBhIFNpZ24gdGhhdCB3b3VsZCBlbnN1cmUgdGhlIEFsZ29yaXRobSdzIHN1Y2Nlc3MuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTaWduW119IHNpZ25zIExpc3Qgb2YgQXZhaWxhYmxlIFNpZ25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHNpZ25zKSB7IFxuICAgICAgICBzdXBlcihzaWducywgXCJoYXJkXCIpOyBcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3Njb3JlcyA9IHsgV0lOOiAwLCBEUkFXOiAwLCBMT1NFOiAwIH07XG4gICAgICAgIHRoaXMuX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5faHVtYW4gPSBbXTtcbiAgICAgICAgdGhpcy5fcm91bmQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYXkgTWV0aG9kXG4gICAgICogXG4gICAgICogVXNpbmcgYSBNYXJrb3YgQ2hhaW4sIHRoZSBtZXRob2Qgd2lsbCBmaW5kIGEgQmVzdCBHdWVzcyB0byBPcHBvc2UgdGhlXG4gICAgICogSHVtYW4ncyBTZWxlY3Rpb24uXG4gICAgICogXG4gICAgICogQHJldHVybnMgU3RyaW5nIFJlcHJlc2VudGF0aW9uIG9mIFNpZ24gdG8gUGxheVxuICAgICAqL1xuICAgIHBsYXkgKCkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICBsZXQgcHJvYmFiaWxpdGllcztcblxuICAgICAgICAvLyBGaXJzdCBSb3VuZDpcbiAgICAgICAgaWYgKHRoaXMuX3JvdW5kID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX3NpZ25zLmxlbmd0aCldO1xuXG4gICAgICAgIC8vIFN1YnNlcXVlbnQgUm91bmRzOlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEdldCBQcmV2aW91cyBDaG9pY2UgYW5kIFJlc3VsdFxuICAgICAgICAgICAgbGV0IGlkeCA9IHRoaXMuI2dldFNpZ25JbmRleCh0aGlzLl9odW1hbi5zbGljZSgtMSlbMF0pO1xuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuI2dldFNjb3JlS2V5KHRoaXMuX3Jlc3VsdHMuc2xpY2UoLTEpWzBdKTtcblxuICAgICAgICAgICAgLy8gU2Vjb25kIFJvdW5kLCBwcm9iYWJpbGl0aWVzIG9mIEVhY2ggQ2hvaWNlIGFyZSBFcXVhbFxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvdW5kID09PSAxKVxuICAgICAgICAgICAgICAgIHByb2JhYmlsaXRpZXMgPSBbMS8zLCAxLzMsIDEvM107XG5cbiAgICAgICAgICAgIC8vIFN1YnNlcXVlbnQgUm91ZHMsIHByb2JhYmlsaXRpZXMgZnJvbSBUcmFuc2l0aW9uIE1hdHJpY2VzXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHByb2JhYmlsaXRpZXMgPSB0aGlzLiNUUkFOU0lUSU9OX1RBQkxFU1trZXldW2lkeF07XG5cbiAgICAgICAgICAgIC8vIFByZWRpY3QgTmV4dCBNb3ZlXG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkO1xuICAgICAgICAgICAgbGV0IG1heCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9iYWJpbGl0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2JhYmlsaXRpZXNbaV0gPiBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gcHJvYmFiaWxpdGllc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgcHJlZGljdGVkID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4jYmVzdEJldChwcmVkaWN0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEFsZ29yaXRobSBMZWFybmluZyBNZXRob2QuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTaWdufSBoTW92ZSBIdW1hbiBNb3ZlXG4gICAgICogQHBhcmFtIHtTaWdufSBhTW92ZSBBbGdvcml0aG0gTW92ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByZXN1bHQgUmVzdWx0IG9mIE1hdGNodXBcbiAgICAgKi9cbiAgICB1cGRhdGUgKGhNb3ZlLCByZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JvdW5kID4gMCkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIEZyZXF1ZW5jeSBEaXN0cmlidXRpb25zIGFuZCBUcmFuc2l0aW9uIFRhYmxlc1xuICAgICAgICAgICAgbGV0IHByZXYgPSB0aGlzLl9odW1hbi5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICBsZXQgcFJlc3VsdCA9IHRoaXMuX3Jlc3VsdHMuc2xpY2UoLTEpWzBdO1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlRnJlcXVlbmN5RGlzdHJpYnV0aW9ucyhwcmV2Lm5hbWUsIGhNb3ZlLm5hbWUsIHBSZXN1bHQpO1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlVHJhbnNpdGlvblRhYmxlcyhwUmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBTY29yZXMgYW5kIFJlc3VsdHNcbiAgICAgICAgdGhpcy5fc2NvcmVzW3RoaXMuI2dldFNjb3JlS2V5KHJlc3VsdCldKys7XG4gICAgICAgIHRoaXMuX3Jlc3VsdHMucHVzaChyZXN1bHQpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBIdW1hbiBhbmQgQWxnb3JpdGhtIE1vdmVzXG4gICAgICAgIHRoaXMuX2h1bWFuLnB1c2goaE1vdmUpO1xuICAgICAgICB0aGlzLl9yb3VuZCsrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBGcmVxdWVuY3kgRGlzdHJpYnV0aW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBUcmFjayB0aGUgSHVtYW5zIE1vdmVzLCBkZXBlbmRhbnQgb24gdGhlaXIgc3VjY2VzcyByYXRlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmV2IFByZXZpb3VzIEh1bWFuIENob2ljZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyIEN1cnJlbnQgSHVtYW4gQ2hvaWNlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc3VsdCBQcmV2aW91cyBSZXN1bHQgKDE6IHdpbiwgMDogZHJhdywgLTE6IGxvc3MpXG4gICAgICovXG4gICAgI3VwZGF0ZUZyZXF1ZW5jeURpc3RyaWJ1dGlvbnMgKHByZXYsIGN1cnIsIHJlc3VsdCkge1xuICAgICAgICAvLyBHZXQgdGhlIEtleSBmb3IgdGhlIFNjb3JlXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuI2dldFNjb3JlS2V5KHJlc3VsdCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIEZyZXF1ZW5jeSBmb3IgUHJldmlvdXMgYW5kIEN1cnJlbnQgTW92ZSBieSBVc2VyXG4gICAgICAgIHRoaXMuI0ZSRVFVRU5DWV9ESVNUUklCVVRJT05TW2tleV1bXG4gICAgICAgICAgICBwcmV2LnRvVXBwZXJDYXNlKCkgKyBjdXJyLnRvVXBwZXJDYXNlKClcbiAgICAgICAgXSsrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBUcmFuc2l0aW9uIFRhYmxlcyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBUcmFjayB0aGUgUHJvYmFiaWxpdGllcyBvZiB0aGUgSHVtYW4gdXNpbmcgYSBQYXJ0aWN1bGFyIE1vdmUsIGJhc2VkIG9uIFxuICAgICAqIHByZXZpb3VzIHJlc3VsdHMuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc3VsdCBQcmV2aW91cyBSZXN1bHQgKDE6IHdpbiwgMDogZHJhdywgLTE6IGxvc3MpXG4gICAgICovXG4gICAgI3VwZGF0ZVRyYW5zaXRpb25UYWJsZXMgKHJlc3VsdCkge1xuICAgICAgICAvLyBHZXQgdGhlIFN1bSBvZiBGcmVxdW5lY2llcyBmb3IgRWFjaCBTY29yZSB0eXBlIGFuZCBTaWduXG4gICAgICAgIGNvbnN0IGZyZXF1ZW5jaWVzID0gdGhpcy4jZ2V0Q3VycmVudEZyZXF1ZW5jaWVzKCk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBTY29yZSBLZXlcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy4jZ2V0U2NvcmVLZXkocmVzdWx0KTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggYXBwcm9wcmlhdGUgVHJhbnNpdGlvbiBNYXRyaXggYW5kIFVwZGF0ZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIEFwcHJvcHJpYXRlIEZyZXF1ZW5jeSBmb3IgdGhhdCBNYXRyaXhcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9mcmVxID0gdGhpcy4jRlJFUVVFTkNZX0RJU1RSSUJVVElPTlNba2V5XVtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2lnbnNbaV0udG9VcHBlckNhc2UoKSArIHRoaXMuX3NpZ25zW2pdLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBQcm9iYWJpbGl0eSBvZiBDaG9vc2luZyBSb2NrXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI1RSQU5TSVRJT05fVEFCTEVTW2tleV1baV1bal0gPSBjdXJyZW50X2ZyZXEgLyBmcmVxdWVuY2llc1trZXldLlJPQ0s7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBQcm9iYWJpbGl0eSBvZiBDaG9vc2luZyBQYXBlclxuICAgICAgICAgICAgICAgIGlmIChpID09PSAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNUUkFOU0lUSU9OX1RBQkxFU1trZXldW2ldW2pdID0gY3VycmVudF9mcmVxIC8gZnJlcXVlbmNpZXNba2V5XS5QQVBFUjtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIFByb2JhYmlsaXR5IG9mIENob29zaW5nIFNjaXNzb3JzXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI1RSQU5TSVRJT05fVEFCTEVTW2tleV1baV1bal0gPSBjdXJyZW50X2ZyZXEgLyBmcmVxdWVuY2llc1trZXldLlNDSVNTT1JTO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmVzdCBCZXQgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gSW5kZXggb2YgYSBTaWduLCB0aGUgbWV0aG9kIHdpbGwgcmV0dXJuIHRoZSBTaWduIHRoYXQgd2lsbFxuICAgICAqIG91dG1hdGNoIHRoYXQgU2lnbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWR4IEluZGV4IG9mIFNpZ25cbiAgICAgKiBAcmV0dXJucyBXaW5uaW5nIFNpZ25cbiAgICAgKi9cbiAgICAjYmVzdEJldCAoaWR4KSB7XG4gICAgICAgIC8vIFBhcGVyIGJlYXRzIFJvY2tcbiAgICAgICAgaWYgKGlkeCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBcInBhcGVyXCI7XG4gICAgICAgIC8vIFNjaXNzb3JzIGJlYXRzIFBhcGVyXG4gICAgICAgIGVsc2UgaWYgKGlkeCA9PT0gMSlcbiAgICAgICAgICAgIHJldHVybiBcInNjaXNzb3JzXCI7XG4gICAgICAgIC8vIFJvY2sgYmVhdHMgU2Npc3NvcnNcbiAgICAgICAgZWxzZSBpZiAoaWR4ID09PSAyKVxuICAgICAgICAgICAgcmV0dXJuIFwicm9ja1wiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBTY29yZSBLZXkgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIGEgZ2l2ZW4gU2NvcmUgVmFsdWUsIHRoZSBtZXRob2Qgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcga2V5LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBTY29yZSBWYWx1ZVxuICAgICAqIEByZXR1cm5zIFNjb3JlIEtleVxuICAgICAqL1xuICAgICNnZXRTY29yZUtleSAodmFsdWUpIHtcbiAgICAgICAgLy8gRmluZCB0aGUgQ29ycmVzcG9uZGluZyBLZXkgdG8gdGhlIFNjb3JlIFZhbHVlXG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuI1NDT1JFUykuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgICAgICAgICBpZiAodi52YWx1ZSA9PT0gdmFsdWUpXG4gICAgICAgICAgICAgICAga2V5ID0gaztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgU2lnbiBJbmRleCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIFNpZ24sIGdldCB0aGUgQ29ycmVzcG9uZGluZyBJbmRleC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1NpZ259IHNpZ24gU2lnbiB0byBnZXQgSW5kZXggb2ZcbiAgICAgKiBAcmV0dXJucyAwIGZvciBSb2NrOyAxIGZvciBQYXBlcjsgMiBmb3IgU2Npc3NvcnM7XG4gICAgICovXG4gICAgI2dldFNpZ25JbmRleCAoc2lnbikge1xuICAgICAgICBsZXQgaWR4O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI1NJR05TLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMuI1NJR05TW2ldLnNpZ24gPT09IHNpZ24ubmFtZSlcbiAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICByZXR1cm4gaWR4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBDdXJyZW50IEZyZXF1ZW5jaWVzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENvbXBpbGF0aW9uIG9mIHRoZSBIdW1hbnMgUGFzdCBNb3Zlcy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBEaWN0aW9uYXJ5IG9mIEN1cnJlbnQgRnJlcXVlbmNpZXNcbiAgICAgKi9cbiAgICAjZ2V0Q3VycmVudEZyZXF1ZW5jaWVzICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFdJTjoge1xuICAgICAgICAgICAgICAgIFJPQ0s6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI0ZSRVFVRU5DWV9ESVNUUklCVVRJT05TLldJTi5ST0NLUk9DSyArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI0ZSRVFVRU5DWV9ESVNUUklCVVRJT05TLldJTi5ST0NLUEFQRVIgKyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jRlJFUVVFTkNZX0RJU1RSSUJVVElPTlMuV0lOLlJPQ0tTQ0lTU09SUyxcbiAgICAgICAgICAgICAgICBQQVBFUjogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI0ZSRVFVRU5DWV9ESVNUUklCVVRJT05TLldJTi5QQVBFUlJPQ0sgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNGUkVRVUVOQ1lfRElTVFJJQlVUSU9OUy5XSU4uUEFQRVJQQVBFUiArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI0ZSRVFVRU5DWV9ESVNUUklCVVRJT05TLldJTi5QQVBFUlNDSVNTT1JTLFxuICAgICAgICAgICAgICAgIFNDSVNTT1JTOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNGUkVRVUVOQ1lfRElTVFJJQlVUSU9OUy5XSU4uU0NJU1NPUlNST0NLICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jRlJFUVVFTkNZX0RJU1RSSUJVVElPTlMuV0lOLlNDSVNTT1JTUEFQRVIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNGUkVRVUVOQ1lfRElTVFJJQlVUSU9OUy5XSU4uU0NJU1NPUlNTQ0lTU09SU1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIERSQVc6IHtcbiAgICAgICAgICAgICAgICBST0NLOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNGUkVRVUVOQ1lfRElTVFJJQlVUSU9OUy5EUkFXLlJPQ0tST0NLICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jRlJFUVVFTkNZX0RJU1RSSUJVVElPTlMuRFJBVy5ST0NLUEFQRVIgKyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jRlJFUVVFTkNZX0RJU1RSSUJVVElPTlMuRFJBVy5ST0NLU0NJU1NPUlMsXG4gICAgICAgICAgICAgICAgUEFQRVI6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNGUkVRVUVOQ1lfRElTVFJJQlVUSU9OUy5EUkFXLlBBUEVSUk9DSyArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI0ZSRVFVRU5DWV9ESVNUUklCVVRJT05TLkRSQVcuUEFQRVJQQVBFUiArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI0ZSRVFVRU5DWV9ESVNUUklCVVRJT05TLkRSQVcuUEFQRVJTQ0lTU09SUyxcbiAgICAgICAgICAgICAgICBTQ0lTU09SUzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jRlJFUVVFTkNZX0RJU1RSSUJVVElPTlMuRFJBVy5TQ0lTU09SU1JPQ0sgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNGUkVRVUVOQ1lfRElTVFJJQlVUSU9OUy5EUkFXLlNDSVNTT1JTUEFQRVIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNGUkVRVUVOQ1lfRElTVFJJQlVUSU9OUy5EUkFXLlNDSVNTT1JTU0NJU1NPUlNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMT1NFOiB7XG4gICAgICAgICAgICAgICAgUk9DSzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jRlJFUVVFTkNZX0RJU1RSSUJVVElPTlMuTE9TRS5ST0NLUk9DSyArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI0ZSRVFVRU5DWV9ESVNUUklCVVRJT05TLkxPU0UuUk9DS1BBUEVSICsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI0ZSRVFVRU5DWV9ESVNUUklCVVRJT05TLkxPU0UuUk9DS1NDSVNTT1JTLFxuICAgICAgICAgICAgICAgIFBBUEVSOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jRlJFUVVFTkNZX0RJU1RSSUJVVElPTlMuTE9TRS5QQVBFUlJPQ0sgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNGUkVRVUVOQ1lfRElTVFJJQlVUSU9OUy5MT1NFLlBBUEVSUEFQRVIgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNGUkVRVUVOQ1lfRElTVFJJQlVUSU9OUy5MT1NFLlBBUEVSU0NJU1NPUlMsXG4gICAgICAgICAgICAgICAgU0NJU1NPUlM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI0ZSRVFVRU5DWV9ESVNUUklCVVRJT05TLkxPU0UuU0NJU1NPUlNST0NLICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jRlJFUVVFTkNZX0RJU1RSSUJVVElPTlMuTE9TRS5TQ0lTU09SU1BBUEVSICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jRlJFUVVFTkNZX0RJU1RSSUJVVElPTlMuTE9TRS5TQ0lTU09SU1NDSVNTT1JTXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBTaWduIGZyb20gXCIuLi9zaWduLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcbiAgICAvKipcbiAgICAgKiBMZXZlbCBDbGFzc1xuICAgICAqIFxuICAgICAqIEJhc2UgQ2xhc3MgZm9yIHRoZSBEaWZmaWN1bHR5IExldmVsIG9mIHRoZSBDb21wdXRlciBmb3IgdGhlIFJvY2ssIFBhcGVyLCBcbiAgICAgKiBTY2lzc29ycyBHYW1lLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7U2lnbltdfSBzaWducyBBdmFpbGFibGUgU2lnbnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgRGlmZmljdWx0eSBMZXZlbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChzaWducywgbGV2ZWwpIHtcbiAgICAgICAgLy8gSW50aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9zaWducyA9IFtdO1xuICAgICAgICBzaWducy5mb3JFYWNoKHNpZ24gPT4geyB0aGlzLl9zaWducy5wdXNoKHNpZ24ubmFtZSk7IH0pO1xuICAgICAgICB0aGlzLl9sZXZlbCA9IGxldmVsOyBcbiAgICB9XG5cbiAgICBnZXQgbGV2ZWwgKCkgeyByZXR1cm4gdGhpcy5fbGV2ZWw7IH1cblxuICAgIHNldCBsZXZlbCAoc3RyKSB7IHRoaXMuX2xldmVsID0gc3RyOyB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFRoZSBNZXRob2Qgd2lsbCBjaG9vc2UgYSBTaWduIHRvIFBsYXkuXG4gICAgICogXG4gICAgICogQHJldHVybnMgU3RyaW5nIFJlcHJlc2VudGF0aW9uIG9mIFNpZ24gdG8gUGxheVxuICAgICAqL1xuICAgIHBsYXkgKCkgeyByZXR1cm4gdGhpcy5fc2lnbnNbMF07IH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBBbGdvcml0aG0gTGVhcm5pbmcgTWV0aG9kLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7U2lnbn0gaE1vdmUgSHVtYW4gTW92ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByZXN1bHQgUmVzdWx0IG9mIE1hdGNodXBcbiAgICAgKi9cbiAgICB1cGRhdGUgKGhNb3ZlLCByZXN1bHQpIHt9XG59IiwiaW1wb3J0IExldmVsIGZyb20gXCIuL2xldmVsLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGl1bSBleHRlbmRzIExldmVsIHtcbiAgICAvKipcbiAgICAgKiBNZWRpdW0gTGV2ZWwgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIFJvY2ssIFBhcGVyLCBTY2lzc29ycyBHYW1lLCB0aGUgTWVkaXVtIExldmVsIHdpbGwgcmFuZG9tbHkgc2VsZWN0XG4gICAgICogaXRzIG5leHQgbW92ZSwgd2l0aG91dCBhbnkgZWZmb3J0IGZvciBtaW5pbWlzaW5nIGxvc3MuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtTaWduW119IHNpZ25zIEF2YWlsYWJsZSBTaWduc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChzaWducykgeyBzdXBlcihzaWducywgXCJtZWRpdW1cIik7IH1cblxuICAgIC8qKlxuICAgICAqIFBsYXkgTWV0aG9kXG4gICAgICogXG4gICAgICogVGhlIE1ldGhvZCB3aWxsIGNob29zZSBhIHJhbmRvbSBTaWduIHRvIFBsYXkuXG4gICAgICogXG4gICAgICogQHJldHVybnMgU3RyaW5nIFJlcHJlc2VudGF0aW9uIG9mIFNpZ24gdG8gUGxheVxuICAgICAqL1xuICAgIHBsYXkgKCkgeyByZXR1cm4gdGhpcy5fc2lnbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fc2lnbnMubGVuZ3RoKV07IH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduIHtcbiAgICAvKipcbiAgICAgKiBTaWduIENsYXNzXG4gICAgICogXG4gICAgICogT25lIG9mIFRocmVlIHBvc3NpYmxlIFNpZ25zIGF2YWlsYWJsZSBmb3IgdGhlIFRyYWRpdGlvbmFsIFJvY2ssIFBhcGVyLCBcbiAgICAgKiBTY2lzc29ycyBHYW1lLCB0aGlzIGNsYXNzIHdpbGwgaGFuZGxlIGhvdyBlYWNoIGZhaXIgYWdhaW5zdCBlYWNoIG90aGVyXG4gICAgICogaW4gdGhlIEdhbWUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiBTaWduXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHsgdGhpcy5fbmFtZSA9IG5hbWU7IH1cblxuICAgIGdldCBuYW1lICgpIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cblxuICAgIHNldCBuYW1lIChzdHIpIHsgdGhpcy5fbmFtZSA9IHN0cjsgfVxuXG4gICAgLyoqXG4gICAgICogTWF0Y2h1cCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgYSBnaXZlbiBPcHBvc2luZyBTaWduLCB0aGUgbWV0aG9kIHdpbGwgcmV0dXJuIGhvdyB0aGlzIHNpZ24gd291bGQgXG4gICAgICogZmFpciwgd2hldGhlciBpdCByZXR1cm5zIGEgd2luLCBkcmF3IG9yIGxvc3MgKHJlcHJlc2VudGVkIG51bWVyaWNhbGx5KS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1NpZ259IHNpZ24gT3Bwb3NpbmcgU2lnblxuICAgICAqIEByZXR1cm5zIDEgZm9yIGEgV2luLCAwIGZvciBhIERyYXcsIC0xIGZvciBhIExvc3NcbiAgICAgKi9cbiAgICBtYXRjaHVwIChzaWduKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBNeSBTaWduOiAke3RoaXMuX25hbWV9OyBPcHBvc2luZyBTaWduOiAke3NpZ24ubmFtZX07YCk7XG4gICAgICAgIC8vIFRoaXMgaXMgUm9ja1xuICAgICAgICBpZiAodGhpcy5fbmFtZSA9PT0gXCJyb2NrXCIpIHtcbiAgICAgICAgICAgIC8vIE9wcG9zaW5nIFJvY2tcbiAgICAgICAgICAgIGlmIChzaWduLm5hbWUgPT09IFwicm9ja1wiKSByZXR1cm4gMDtcblxuICAgICAgICAgICAgLy8gT3Bwb3NpbmcgUGFwcGVyXG4gICAgICAgICAgICBpZiAoc2lnbi5uYW1lID09PSBcInBhcGVyXCIpIHJldHVybiAtMTtcblxuICAgICAgICAgICAgLy8gT3Bwb3NpbmcgU2Npc3NvcnNcbiAgICAgICAgICAgIGlmIChzaWduLm5hbWUgPT09IFwic2Npc3NvcnNcIikgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIGlzIFBhcGVyXG4gICAgICAgIGlmICh0aGlzLl9uYW1lID09PSBcInBhcGVyXCIpIHtcbiAgICAgICAgICAgIC8vIE9wcG9zaW5nIFJvY2tcbiAgICAgICAgICAgIGlmIChzaWduLm5hbWUgPT09IFwicm9ja1wiKSByZXR1cm4gMTtcblxuICAgICAgICAgICAgLy8gT3Bwb3NpbmcgUGFwcGVyXG4gICAgICAgICAgICBpZiAoc2lnbi5uYW1lID09PSBcInBhcGVyXCIpIHJldHVybiAwO1xuXG4gICAgICAgICAgICAvLyBPcHBvc2luZyBTY2lzc29yc1xuICAgICAgICAgICAgaWYgKHNpZ24ubmFtZSA9PT0gXCJzY2lzc29yc1wiKSByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIGlzIFNjaXNzb3JzXG4gICAgICAgIGlmICh0aGlzLl9uYW1lID09PSBcInNjaXNzb3JzXCIpIHtcbiAgICAgICAgICAgIC8vIE9wcG9zaW5nIFJvY2tcbiAgICAgICAgICAgIGlmIChzaWduLm5hbWUgPT09IFwicm9ja1wiKSByZXR1cm4gLTE7XG5cbiAgICAgICAgICAgIC8vIE9wcG9zaW5nIFBhcHBlclxuICAgICAgICAgICAgaWYgKHNpZ24ubmFtZSA9PT0gXCJwYXBlclwiKSByZXR1cm4gMTtcblxuICAgICAgICAgICAgLy8gT3Bwb3NpbmcgU2Npc3NvcnNcbiAgICAgICAgICAgIGlmIChzaWduLm5hbWUgPT09IFwic2Npc3NvcnNcIikgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFJvY2tOb3JtYWwgZnJvbSBcIi4uL2ltYWdlcy9yb2NrLnBuZ1wiO1xuaW1wb3J0IFJvY2tNb25vdG9uZSBmcm9tIFwiLi4vaW1hZ2VzL3JvY2staGFuZC5wbmdcIjtcbmltcG9ydCBSb2NrTmVvbiBmcm9tIFwiLi4vaW1hZ2VzL25lb24tcm9jay5wbmdcIjtcbmltcG9ydCBSb2NrVGVybWluYWwgZnJvbSBcIi4uL2ltYWdlcy9yb2NrLXRlcm1pbmFsLnBuZ1wiO1xuaW1wb3J0IFBhcGVyTm9ybWFsIGZyb20gXCIuLi9pbWFnZXMvcGFwZXIucG5nXCI7XG5pbXBvcnQgUGFwZXJNb25vdG9uZSBmcm9tIFwiLi4vaW1hZ2VzL3BhcGVyLWhhbmQucG5nXCI7XG5pbXBvcnQgUGFwZXJOZW9uIGZyb20gXCIuLi9pbWFnZXMvbmVvbi1wYXBlci5wbmdcIjtcbmltcG9ydCBQYXBlclRlcm1pbmFsIGZyb20gXCIuLi9pbWFnZXMvcGFwZXItdGVybWluYWwucG5nXCI7XG5pbXBvcnQgU2Npc3NvcnNOb3JtYWwgZnJvbSBcIi4uL2ltYWdlcy9zY2lzc29ycy5wbmdcIjtcbmltcG9ydCBTY2lzc29yc01vbm90b25lIGZyb20gXCIuLi9pbWFnZXMvc2Npc3NvcnMtaGFuZC5wbmdcIjtcbmltcG9ydCBTY2lzc29yc05lb24gZnJvbSBcIi4uL2ltYWdlcy9uZW9uLXNjaXNzb3JzLnBuZ1wiO1xuaW1wb3J0IFNjaXNzb3JzVGVybWluYWwgZnJvbSBcIi4uL2ltYWdlcy9zY2lzc29ycy10ZXJtaW5hbC5wbmdcIjtcbmltcG9ydCBSUFNEaXNwbGF5IGZyb20gXCIuLi9zZXR0aW5nLW1vZHVsZS9ycHMtZGlzcGxheVwiO1xuaW1wb3J0IFNpZ25CdXR0b24gZnJvbSBcIi4uL3NldHRpbmctbW9kdWxlL3NpZ24tYnV0dG9uXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vZ2FtZS1tb2R1bGUvZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSUFNNYW5hZ2VyIHtcbiAgICAjVEhFTUVTID0ge1xuICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgIHJvY2s6IFJvY2tOb3JtYWwsXG4gICAgICAgICAgICBwYXBlcjogUGFwZXJOb3JtYWwsXG4gICAgICAgICAgICBzY2lzc29yczogU2Npc3NvcnNOb3JtYWxcbiAgICAgICAgfSxcbiAgICAgICAgbW9ub3RvbmU6IHtcbiAgICAgICAgICAgIHJvY2s6IFJvY2tNb25vdG9uZSxcbiAgICAgICAgICAgIHBhcGVyOiBQYXBlck1vbm90b25lLFxuICAgICAgICAgICAgc2Npc3NvcnM6IFNjaXNzb3JzTW9ub3RvbmVcbiAgICAgICAgfSxcbiAgICAgICAgbmVvbjoge1xuICAgICAgICAgICAgcm9jazogUm9ja05lb24sXG4gICAgICAgICAgICBwYXBlcjogUGFwZXJOZW9uLFxuICAgICAgICAgICAgc2Npc3NvcnM6IFNjaXNzb3JzTmVvblxuICAgICAgICB9LFxuICAgICAgICB0ZXJtaW5hbDoge1xuICAgICAgICAgICAgcm9jazogUm9ja1Rlcm1pbmFsLFxuICAgICAgICAgICAgcGFwZXI6IFBhcGVyVGVybWluYWwsXG4gICAgICAgICAgICBzY2lzc29yczogU2Npc3NvcnNUZXJtaW5hbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUm9jaywgUGFwZXIsIFNjaXNzb3JzIE1hbmFnZXIgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIFJvY2ssIFBhcGVyLCBTY2lzc29ycyBHYW1lLCB0aGlzIE1hbmFnZXIgQ2xhc3Mgd2lsbCBIYW5kbGUgdGhlIFVJXG4gICAgICogQ29tcG9uZW50cyBzdWNoIGFzIHRoZSBTY29yZXMgZm9yIEVpdGhlciBQbGF5ZXIsIGFuZCB0aGUgRGlzcGxheSB3aGljaCBcbiAgICAgKiB3aWxsIHNob3cgYm90aCBQbGF5ZXJzIHNlbGVjdGVkIFNpZ25zLiBJdCBhbHNvIG1hbmFnZXMgdGhlIFNlbGVjdGlvbiBvZlxuICAgICAqIHRoZSBTaWduIEJ1dHRvbnMgYW5kIHRoZSBBY3Rpb25zIHdpdGggdGhlIHBhcmVudCBHYW1lIEludGVyZmFjZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIEJ1aWxkIEdhbWUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJyb2NrLXBhcGVyLXNjaXNzb3JzLWdhbWUtbW9kdWxlXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIERpc3BsYXkgZm9yIHRoZSBHYW1lIHRvIHRha2UgcGxhY2UgaW5cbiAgICAgICAgdGhpcy5fZGlzcGxheSA9IG5ldyBSUFNEaXNwbGF5KCk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9kaXNwbGF5Lm1vZHVsZSk7XG5cbiAgICAgICAgLy8gQnVpbGQgQ29udGFpbmVyIGZvciBCdXR0b25zIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicnBzLWJ1dHRvbi1jb250YWluZXJcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgU2lnbiBCdXR0b24gRE9NIEVsZW1lbnRzXG4gICAgICAgIHRoaXMuX2J1dHRvbnMgPSBbXTtcbiAgICAgICAgW1wicm9ja1wiLCBcInBhcGVyXCIsIFwic2Npc3NvcnNcIl0uZm9yRWFjaChzaWduID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IG5ldyBTaWduQnV0dG9uKHNpZ24pO1xuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bi5tb2R1bGUpO1xuICAgICAgICAgICAgdGhpcy5fYnV0dG9ucy5wdXNoKGJ0bik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fY29udGFpbmVyKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgICAgIHRoaXMuX3Njb3JlcyA9IHtodW1hbjogMCwgYWxnb3JpdGhtOiAwfTtcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMuX3RoZW1lID0gXCJub3JtYWxcIjtcblxuICAgICAgICAvLyBTZXQgdGhlIERlZmF1bHQgVGhlbWVcbiAgICAgICAgdGhpcy5zZXRUaGVtZSh0aGlzLl90aGVtZSk7XG5cbiAgICAgICAgLy8gU2V0IEN1cnNvciBvbiBSb2NrXG4gICAgICAgIHRoaXMuX2J1dHRvbnNbMF0ucGxhY2VDdXJzb3IoKTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgY29udHJvbGxlciAoKSB7IHJldHVybiB0aGlzLl9jb250cm9sbGVyOyB9XG5cbiAgICBzZXQgY29udHJvbGxlciAoYm9vbCkgeyB0aGlzLl9jb250cm9sbGVyID0gYm9vbDsgfVxuXG4gICAgZ2V0IGdhbWUgKCkgeyByZXR1cm4gdGhpcy5fZ2FtZTsgfVxuXG4gICAgc2V0IGdhbWUgKG9iaikgeyB0aGlzLl9nYW1lID0gb2JqOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgRGltZW5zaW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgdGhlIERpc3BsYXkgRGltZW5zaW9ucyBmb3IgdGhlIEdhbWUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFNjcmVlbiBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgU2NyZWVuIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gU2V0IERpbWVuc2lvbnMgb2YgR2FtZSBNb2R1bGVcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgRGlzcGxheSBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGRXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjkpO1xuICAgICAgICBjb25zdCBkSGVpZ2h0ID0gTWF0aC5mbG9vcihkV2lkdGggKiAwLjQ1KTtcbiAgICAgICAgdGhpcy5fZGlzcGxheS5zZXREaW1lbnNpb25zKGRXaWR0aCwgZEhlaWdodCk7XG5cbiAgICAgICAgLy8gU2V0IEJ1dHRvbiBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGRpbSA9IE1hdGguZmxvb3Iod2lkdGggKiAwLjI1KTtcbiAgICAgICAgY29uc3QgY0hlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogMC41KTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7ZFdpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke2NIZWlnaHR9cHhgO1xuICAgICAgICB0aGlzLl9idXR0b25zLmZvckVhY2goYnRuID0+IHsgYnRuLnNldERpbWVuc2lvbnMoZGltKTsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IExldmVsIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgRGlmZmljdWx0eSBMZXZlbCBvZiB0aGUgR2FtZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgU2VsZWN0ZWQgTGV2ZWxcbiAgICAgKi9cbiAgICBzZXRMZXZlbCAobGV2ZWwpIHsgdGhpcy5fZ2FtZS5zZXRMZXZlbChsZXZlbC50b0xvd2VyQ2FzZSgpKTsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFRoZW1lIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgU3R5bGluZyBmb3IgdGhlIEdhbWUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIFRoZW1lIE5hbWVcbiAgICAgKi9cbiAgICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICAgICAgLy8gVXBkYXRlIFRoZW1lIFZhcmlhYmxlXG4gICAgICAgIHRoaXMuX3RoZW1lID0gdGhlbWUudG9Mb3dlckNhc2UoKTsgXG5cbiAgICAgICAgLy8gR2V0IFJvb3QgRWxlbWVudFxuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LmNsYXNzTmFtZSA9IHRoZW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gU2V0IFRoZW1lIGZvciBCdXR0b25zXG4gICAgICAgIHRoaXMuX2J1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgLy8gSGFuZGxlIFJvY2sgQnV0dG9uXG4gICAgICAgICAgICBpZiAoYnRuLnNpZ24gPT09IFwicm9ja1wiKVxuICAgICAgICAgICAgICAgIGJ0bi5zZXRJY29uKHRoaXMuI1RIRU1FU1t0aGVtZS50b0xvd2VyQ2FzZSgpXS5yb2NrKTtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBQYXBlciBCdXR0b25cbiAgICAgICAgICAgIGlmIChidG4uc2lnbiA9PT0gXCJwYXBlclwiKVxuICAgICAgICAgICAgICAgIGJ0bi5zZXRJY29uKHRoaXMuI1RIRU1FU1t0aGVtZS50b0xvd2VyQ2FzZSgpXS5wYXBlcik7XG4gICAgICAgICAgICAvLyBIYW5kbGUgU2Npc3NvcnMgQnV0dG9uXG4gICAgICAgICAgICBpZiAoYnRuLnNpZ24gPT09IFwic2Npc3NvcnNcIilcbiAgICAgICAgICAgICAgICBidG4uc2V0SWNvbih0aGlzLiNUSEVNRVNbdGhlbWUudG9Mb3dlckNhc2UoKV0uc2Npc3NvcnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIb3Jpem9udGFsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogTW92ZSB0aGUgQ3Vyc29yIEhvcml6b250YWxseSBhY3Jvc3MgQ29udGFpbmVyLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmlnaHQgRGVmYXVsdCBBY3Rpb24gaXMgUmlnaHR3YXJkc1xuICAgICAqL1xuICAgIGhvcml6b250YWxNb3ZlIChyaWdodD10cnVlKSB7XG4gICAgICAgIC8vIEVuc3VyZSBIb3Jpem9udGFsIE1vdmUgaXMgU3RpbGwgaW4gQ29udGFpbmVyXG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50ICsgKHJpZ2h0ID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKGN1cnIgPCAzICYmIGN1cnIgPj0gMCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIEN1cnNvciBmcm9tIEN1cnJlbnQgQnV0dG9uXG4gICAgICAgICAgICB0aGlzLl9idXR0b25zW3RoaXMuX2N1cnJlbnRdLnBsYWNlQ3Vyc29yKGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIEN1cnJlbnQgUG9pbnRlclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IGN1cnI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBCdXR0b25cbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbnNbdGhpcy5fY3VycmVudF0ucGxhY2VDdXJzb3IoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VwZXQgQWN0aW9uIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIFVzZXIgTWFrZXMgYSBNb3ZlLCB0aGUgRGlzcGxheSBzaG91bGQgdXBkYXRlIHdpdGggdGhlaXIgc2VsZWN0ZWRcbiAgICAgKiBJY29uLCBidXQgdGhlIEFsZ29yaXRobSBtdXN0IEFsc28gTWFrZSBhIE1vdmUsIGFuZCB1cGRhdGUgdGhlIGRpc3BsYXkgd2l0aFxuICAgICAqIGl0cyBzZWxlY3RlZCBNb3ZlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIE1lc3NhZ2UgaW5kaWNhdGluZyBVc2VyJ3MgU3VjY2VzcyBvciBGYWlsdXJlXG4gICAgICovXG4gICAgYWNjZXB0QWN0aW9uICgpIHtcbiAgICAgICAgLy8gUGxheSBIdW1hbiBNb3ZlXG4gICAgICAgIGNvbnN0IGhNb3ZlID0gdGhpcy5fYnV0dG9uc1t0aGlzLl9jdXJyZW50XS5zaWduO1xuXG4gICAgICAgIC8vIEdldCBBbGdvcml0aG0gbW92ZVxuICAgICAgICBjb25zdCBhTW92ZSA9IHRoaXMuX2dhbWUuYWxnb3JpdGhtU2VsZWN0KCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBEaXNwbGF5XG4gICAgICAgIHRoaXMuX2Rpc3BsYXkuc2V0SWNvbnMoXG4gICAgICAgICAgICB0aGlzLiNUSEVNRVNbdGhpcy5fdGhlbWVdW2hNb3ZlXSxcbiAgICAgICAgICAgIHRoaXMuI1RIRU1FU1t0aGlzLl90aGVtZV1bYU1vdmVdXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFNjb3Jlc1xuICAgICAgICBjb25zdCByZXN1bHRzID0gdGhpcy5fZ2FtZS5wbGF5KGhNb3ZlLCBhTW92ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuXG4gICAgICAgIC8vIFRPRE86IGluIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucywgdXBkYXRlIGFsZ29yaXRobSB3aXRoIHJlc3VsdHNcblxuICAgICAgICAvLyBIYW5kbGUgV2luXG4gICAgICAgIGlmIChyZXN1bHRzID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9zY29yZXMuaHVtYW4gKz0gMTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXkudXBkYXRlU2NvcmUodGhpcy5fc2NvcmVzLmh1bWFuLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBcIldJTlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIERyYXdcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0cyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiRFJBV1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIExvc3NcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zY29yZXMuYWxnb3JpdGhtICs9IDE7XG4gICAgICAgICAgICB0aGlzLl9kaXNwbGF5LnVwZGF0ZVNjb3JlKHRoaXMuX3Njb3Jlcy5hbGdvcml0aG0sIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBcIkxPU0VcIjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgXCIuL2dhbWUtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gXCIuL2RhdGEvbWVudS5qc29uNVwiO1xuaW1wb3J0IHNlbGVjdGlvbiBmcm9tIFwiLi9kYXRhL3NlbGVjdC5qc29uNVwiO1xuaW1wb3J0IEdhbWVJbnRlcmZhY2UgZnJvbSBcIi4uL2dhbWUtY2hpcC1tb2R1bGUvZ2FtZS1pbnRlcmZhY2UuanNcIjtcbmltcG9ydCBSUFNNYW5hZ2VyIGZyb20gXCIuL21haW4tbW9kdWxlL3Jwcy1tYW5hZ2VyLmpzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vcG9wLXVwLW1vZHVsZS9tZW51LmpzXCI7XG5pbXBvcnQgSW5mb0JveCBmcm9tIFwiLi4vcG9wLXVwLW1vZHVsZS9pbmZvLWJveC5qc1wiO1xuaW1wb3J0IFNlbGVjdEJveCBmcm9tIFwiLi4vcG9wLXVwLW1vZHVsZS9zZWxlY3QtYm94LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJQU0dhbWUgZXh0ZW5kcyBHYW1lSW50ZXJmYWNlIHtcbiAgICAjc2hvd0NhbGxiYWNrO1xuICAgICN0YWtlRG93bkNhbGxiYWNrO1xuXG4gICAgLyoqXG4gICAgICogUm9jaywgUGFwZXIsIFNjaXNzb3JzIEludGVyZmFjZSBDbGFzc1xuICAgICAqIFxuICAgICAqIFVzZXJkIGZvciBDb250cm9sbGluZyB0aGUgTWVudSBhbmQgdGhlIERpc3BsYXkgTW9kdWxlcyB3aXRoIHRoZSBHYW1lQ2hpcCdzXG4gICAgICogQ29udHJvbGxlcnMsIGFuZCBhbHNvIGZvciBVcGRhdGluZyB0aGUgRGlzcGxheSB3aXRoIHRoZSByZWxldmFudCBcbiAgICAgKiBJbmZvcm1hdGlvbiBNZXNzYWdlcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgVGl0bGUgb2YgdGhlIEdhbWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcbiAgICAgICAgc3VwZXIodGl0bGUpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgT2JqZWN0cyBmb3IgdGhlIFJvY2ssIFBhcGVyLCBTY2lzc29ycyBHYW1lXG4gICAgICAgIHRoaXMuX3JtID0gbmV3IFJQU01hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5fbWVudSA9IG5ldyBNZW51KGNhdGVnb3JpZXMpO1xuICAgICAgICB0aGlzLl9pbmZvID0gbmV3IEluZm9Cb3goKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ID0gbmV3IFNlbGVjdEJveChcbiAgICAgICAgICAgIHNlbGVjdGlvbi5kaWZmaWN1bHR5LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgc2VsZWN0aW9uLmRpZmZpY3VsdHkuY2F0ZWdvcmllc1xuICAgICAgICApO1xuXG4gICAgICAgIC8vIEludGlhbGlzZSBWYXJpYWJsZVxuICAgICAgICB0aGlzLl9kaWZmaWN1bHR5X3NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNjZW5lIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgU2hvdyBhbmQgR2V0IERpbWVuc2lvbnMgQ2FsbGJhY2sgTWV0aG9kIGZvciBVcGRhdGluZyB0aGUgR2FtZSBcbiAgICAgKiBDb25zb2xlIERpc3BsYXkuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHNob3dDYWxsYmFjayBTaG93IENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIHRha2VEb3duQ2FsbGJhY2sgVGFrZSBEb3duIENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIGRpbWVuc2lvbnNDYWxsYmFjayBHZXQgRGltZW5zaW9ucyBDYWxsYmFja1xuICAgICAqL1xuICAgIHNldFNjZW5lIChzaG93Q2FsbGJhY2ssIHRha2VEb3duQ2FsbGJhY2ssIGdldERpbWVuc2lvbnMpIHtcbiAgICAgICAgLy8gU2V0IENhbGxiYWNrIE1ldGhvZHNcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrID0gc2hvd0NhbGxiYWNrO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrID0gdGFrZURvd25DYWxsYmFjaztcblxuICAgICAgICAvLyBTZXQgRGlzcGxheSBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBnZXREaW1lbnNpb25zKCk7XG4gICAgICAgIHRoaXMuX3JtLnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBQb3AtVXAgRGltZW50aW9zblxuICAgICAgICB0aGlzLl9tZW51LnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9zdWJfc2V0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3N1Yl9tZW51O1xuICAgICAgICB0aGlzLl9pbmZvLnNldERpbWVuc2lvbnMoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgICB0aGlzLl9zZWxlY3Quc2V0RGltZW5zaW9ucyhkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICAgICAgLy8gU2V0IEdhbWUgRGlzcGxheVxuICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sodGhpcy5fcm0ubW9kdWxlKTtcblxuICAgICAgICAvLyBTaG93IERpZmZpY3VsdHkgU2VsZWN0aW9uXG4gICAgICAgIHRoaXMuX3NlbGVjdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9ybS5jb250cm9sbGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9zZWxlY3QubW9kdWxlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSaWdodCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgUmlnaHQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHJpZ2h0Q2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgUlBTIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9ybS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fcm0uaG9yaXpvbnRhbE1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMZWZ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBMZWZ0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBsZWZ0Q2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgUlBTIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9ybS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fcm0uaG9yaXpvbnRhbE1vdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBVcCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgdXBDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBNZW51IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9tZW51LmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl9tZW51LnZlcnRpY2FsTW92ZSgpO1xuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3N1Yl9zZXQpXG4gICAgICAgICAgICB0aGlzLl9zdWJfbWVudS52ZXJ0aWNhbE1vdmUoKTtcbiAgICAgICAgLy8gSGFuZGxlIFNlbGVjdCBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0LmFjdGl2ZSlcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdC52ZXJ0aWNhbE1vdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEb3duIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBEb3duIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBkb3duQ2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgTWVudSBNb3ZlbWVudFxuICAgICAgICBpZiAodGhpcy5fbWVudS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fbWVudS52ZXJ0aWNhbE1vdmUoZmFsc2UpO1xuICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3N1Yl9zZXQpXG4gICAgICAgICAgICB0aGlzLl9zdWJfbWVudS52ZXJ0aWNhbE1vdmUoZmFsc2UpO1xuICAgICAgICAvLyBIYW5kbGUgU2VsZWN0IE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3QuYWN0aXZlKVxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0LnZlcnRpY2FsTW92ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQSBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGFDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBTZWxlY3QgQWN0aW9uXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3QuYWN0aXZlICYmICF0aGlzLl9kaWZmaWN1bHR5X3NlbGVjdGVkKSB7XG4gICAgICAgICAgICAvLyBTZXQgRGlmZmljdWx0eSBMZXZlbFxuICAgICAgICAgICAgdGhpcy5fcm0uc2V0TGV2ZWwodGhpcy5fc2VsZWN0LmFjY2VwdEFjdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMuX2RpZmZpY3VsdHlfc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBUYWtlIGRvd24gU2VsZWN0IEJveFxuICAgICAgICAgICAgdGhpcy4jdGFrZURvd25DYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fcm0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIEluZm8gQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2luZm8uYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgICAgICB0aGlzLl9ybS5jb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2luZm8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIEdhbWUgQWN0aW9uXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3JtLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IHRoaXMuX3JtLmFjY2VwdEFjdGlvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSAke21zZ30hYCk7IC8vIFRPRE86IEhhbmRsZSBiZXR0ZXJcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgTWVudSBBY3Rpb25cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fbWVudS5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgU3ViLU1lbnUgU2VsZWN0ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLl9tZW51LmFjY2VwdEFjdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViX3NldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVudS5jb250cm9sbGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViX21lbnUgPSB0aGlzLl9tZW51LnNldFN1Yk1lbnUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX3N1Yl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIFNlbGVjdGVkXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHRoaXMuI2Nsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIFN1Yi1NZW51IEFjdGlvblxuICAgICAgICBlbHNlIGlmICh0aGlzLl9zdWJfc2V0KSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgT3B0aW9uIFNlbGVjdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5fc3ViX21lbnUuYWNjZXB0QWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgR2FtZSBTZXRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3ViX21lbnUuc2VsZWN0ZWQua2V5ID09PSBcIkxldmVsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm0uc2V0TGV2ZWwodGhpcy5fc3ViX21lbnUuc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9rbS5zZXRHYW1lKHRoaXMuX3N1Yl9tZW51LnNlbGVjdGVkLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIFRoZW1lIFNldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiVGhlbWVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ybS5zZXRUaGVtZSh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2Nsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIENvbnRyb2xzIEluZm9ybWF0aW9uIEdldFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfbWVudS5zZWxlY3RlZC5rZXkgPT09IFwiQ29udHJvbHNcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmZvLnNldFRpdGxlKFwiQ29udHJvbGxlciBJbmZvcm1hdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5mby5zZXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXIC0gU2FtZSBhcyBVcC1CdXR0b25cXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkQgLSBTYW1lIGFzIFJpZ2h0LUJ1dHRvblxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUyAtIFNhbWUgYXMgRG93bi1CdXR0b25cXG5cIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBIC0gU2FtZSBhcyBMZWZ0LUJ1dHRvblxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTyAtIFNhbWUgYXMgQi1CdXR0b25cXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIksgLSBTYW1lIGFzIEEtQnV0dG9uXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTcGFjZSAtIFNhbWUgYXMgU3RhcnRcXG5cIiArIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTaGlmdCAtIFNhbWUgYXMgU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX2luZm8ubW9kdWxlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIYW5kbGUgUmV0dXJuIFNlbGVjdGVkXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHRoaXMuI21haW5SZXR1cm4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gTWVudSB0byBiZSBEaXNwbGF5ZWRcbiAgICAgICAgaWYgKHRoaXMuX3JtLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIFNldCBNZW51IHRvIGJlIENvbnRyb2xsZWRcbiAgICAgICAgICAgIHRoaXMuX3JtLmNvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIE1lbnVcbiAgICAgICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNZW51IHRvIGJlIFRha2VuIERvd25cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgUm9jaywgUGFwZXIsIFNjaXNzb3JzIHRvIGJlIENvbnRyb2xsZWRcbiAgICAgICAgICAgIHRoaXMuX3JtLmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbWVudS5jb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGFrZSBEb3duIE1lbnUvU3ViLU1lbnVcbiAgICAgICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdWJfc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWVudS5yZXNldFN1Yk1lbnVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTZWxlY3QgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc2VsZWN0Q2FsbGJhY2sgKCkgeyAvKiBUT0RPOiBJbXBsZW1lbnQgTWV0aG9kICovIH1cblxuICAgIC8qKlxuICAgICAqIE1haW4gUmV0dXJuIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFJldHVybiB0byB0aGUgTWFpbiBNZW51IGZyb20gdGhlIFN1Yi1NZW51LlxuICAgICAqL1xuICAgICNtYWluUmV0dXJuICgpIHtcbiAgICAgICAgdGhpcy5fc3ViX3NldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tZW51LmNvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayh0aGlzLl9tZW51Lm1vZHVsZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgTWV0aG9kXG4gICAgICogXG4gICAgICogT3V0c2lkZSBvZiBjbGlja2luZyB0aGUgU3RhcnQgYnV0dG9uLCBpZiB0aGUgVXNlciBpcyB1c2luZyB0aGUgTWVudSwgYW5kIFxuICAgICAqIHNlbGVjdHMgYW4gb3B0aW9uIHN1Y2ggdGhhdCB0aGUgbWVudSBzaG91bGQgY2xvc2UsIHRoaXMgbWV0aG9kIHdpbGwgXG4gICAgICogY29tcGxldGUgdGhhdCB0YXNrLlxuICAgICAqL1xuICAgICNjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMuX3N1Yl9zZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcm0uY29udHJvbGxlciA9IHRydWU7XG4gICAgICAgIHRoaXMuX21lbnUuY29udHJvbGxlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLiN0YWtlRG93bkNhbGxiYWNrKCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJQU0Rpc3BsYXkge1xuICAgIC8qKlxuICAgICAqIFJvY2ssIFBhcGVyLCBTY2lzc29ycyBEaXNwbGF5IENsYXNzXG4gICAgICogXG4gICAgICogVGhlIEdhbWUgaXMgRGlzcGxheWVkIHVzaW5nIHRoaXMgQ2xhc3MsIGluY2x1ZGluZyBzaG93aW5nIHRoZSBVc2VyIHdpdGhcbiAgICAgKiB0aGUgc2VsZWN0ZWQgU2lnbnMsIGJvdGggYnkgdGhlbSBhbmQgdGhlIEFsZ29yaXRobSwgYnV0IGFsc28gc2hvd3MgdGhlXG4gICAgICogVXNlciB0aGUgY3VycmVudCBydW5uaW5nIHNjb3JlIGZvciB0aGUgR2FtZS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIEJ1aWxkIERpc3BsYXkgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJycHMtZGlzcGxheVwiKTtcblxuICAgICAgICAvLyBCdWlsZCBIdW1hbiBNb3ZlIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2h1bWFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5faHVtYW4uY2xhc3NMaXN0LmFkZChcInJwcy1odW1hbi1tb3ZlXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIEh1bWFuIExhYmVsIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2hMYWJlbC5jbGFzc0xpc3QuYWRkKFwicnBzLWh1bWFuLWxhYmVsXCIpO1xuICAgICAgICB0aGlzLl9oTGFiZWwudGV4dENvbnRlbnQgPSBcIkh1bWFuOiAwXCI7XG5cbiAgICAgICAgLy8gQnVpbGQgSHVtYW4gSWNvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9oSWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIC8vIEFkZCBDb21wb25lbnRzIHRvIEh1bWFuIE1vdmVcbiAgICAgICAgdGhpcy5faHVtYW4uYXBwZW5kQ2hpbGQodGhpcy5faExhYmVsKTtcbiAgICAgICAgdGhpcy5faHVtYW4uYXBwZW5kQ2hpbGQodGhpcy5faEljb24pO1xuXG4gICAgICAgIC8vIEJ1aWxkIEFsZ29yaXRobSBNb3ZlIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobS5jbGFzc0xpc3QuYWRkKFwicnBzLWFsZ29yaXRobS1tb3ZlXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIEFsZ29yaXRobSBMYWJlbCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9hTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9hTGFiZWwuY2xhc3NMaXN0LmFkZChcInJwcy1hbGdvcml0aG0tbGFiZWxcIik7XG4gICAgICAgIHRoaXMuX2FMYWJlbC50ZXh0Q29udGVudCA9IFwiQWxnb3JpdGhtOiAwXCI7XG5cbiAgICAgICAgLy8gQnVpbGQgQWxnb3JpdGhtIEljb24gRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fYUljb24gPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAvLyBBZGQgQ29tcG9uZW50cyB0byBBbGdvcml0aG0gTW92ZVxuICAgICAgICB0aGlzLl9hbGdvcml0aG0uYXBwZW5kQ2hpbGQodGhpcy5fYUxhYmVsKTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtLmFwcGVuZENoaWxkKHRoaXMuX2FJY29uKTtcblxuICAgICAgICAvLyBBZGQgTW92ZXMgdG8gTW9kdWxlXG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9odW1hbik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9hbGdvcml0aG0pO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBEaW1lbnNpb25zIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgRGlzcGxheSwgdGhlIE1vZHVsZSBIZWlnaHQgc2hvdWxkIGJlIGFib3V0IDQwJSBvZiB0aGUgV2lkdGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIE1vZHVsZSBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgTW9kdWxlIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgLy8gU2V0IE1vZHVsZSBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG5cbiAgICAgICAgLy8gU2V0IEljb24gRGltZW5zaW9uc1xuICAgICAgICBjb25zdCBkaW0gPSBNYXRoLmZsb29yKGhlaWdodCAqIDAuNik7XG4gICAgICAgIHRoaXMuX2hJY29uLnN0eWxlLndpZHRoID0gYCR7ZGltfXB4YDtcbiAgICAgICAgdGhpcy5faEljb24uc3R5bGUuaGVpZ2h0ID0gYCR7ZGltfXB4YDtcbiAgICAgICAgdGhpcy5fYUljb24uc3R5bGUud2lkdGggPSBgJHtkaW19cHhgO1xuICAgICAgICB0aGlzLl9hSWNvbi5zdHlsZS5oZWlnaHQgPSBgJHtkaW19cHhgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBJY29ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEh1bWFuIGFuZCBBbGdvcml0aG0gU2VsZWN0aW9ucywgdGhlIERpc3BsYXkgc2hvdWxkIFVwZGF0ZSB0byBcbiAgICAgKiByZXByZXNlbnQgdGhlaXIgQ3VycmVudCBTZWxlY3Rpb25zLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoU3JjIFNvdXJjZSBmb3IgSHVtYW4gSWNvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhU3JjIFNvdXJjZSBmb3IgQWxnb3JpdGhtIEljb25cbiAgICAgKi9cbiAgICBzZXRJY29ucyAoaFNyYywgYVNyYykge1xuICAgICAgICAvLyBIYW5kbGUgSHVtYW4gSWNvblxuICAgICAgICB0aGlzLl9odW1hbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLl9oSWNvbi5zcmMgPSBoU3JjO1xuICAgICAgICB0aGlzLl9odW1hbi5hcHBlbmRDaGlsZCh0aGlzLl9oTGFiZWwpO1xuICAgICAgICB0aGlzLl9odW1hbi5hcHBlbmRDaGlsZCh0aGlzLl9oSWNvbik7XG5cbiAgICAgICAgLy8gSGFuZGxlIEFsZ29yaXRobSBJY29uXG4gICAgICAgIHRoaXMuX2FsZ29yaXRobS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLl9hSWNvbi5zcmMgPSBhU3JjO1xuICAgICAgICB0aGlzLl9hbGdvcml0aG0uYXBwZW5kQ2hpbGQodGhpcy5fYUxhYmVsKTtcbiAgICAgICAgdGhpcy5fYWxnb3JpdGhtLmFwcGVuZENoaWxkKHRoaXMuX2FJY29uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgU2NvcmUgTWV0aG9kXG4gICAgICogXG4gICAgICogRGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgdGhlIEh1bWFuIG9yIHRoZSBBbGdvcml0aG0gdGhhdCB3b24sIHRoZSBzY29yZVxuICAgICAqIGlzIHVwZGF0ZWQgdXNpbmcgdGhpcyBGdW5jdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NvcmUgU2NvcmUgdG8gVXBkYXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBodW1hbiBIdW1hbiBTY29yZSB0byBVcGRhdGUgb3IgQWxnb3JpdGhtIFNjb3JlIHRvIFVwZGF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZVNjb3JlIChzY29yZSwgaHVtYW49dHJ1ZSkge1xuICAgICAgICAvLyBVcGRhdGUgSHVtYW4gU2NvcmVcbiAgICAgICAgaWYgKGh1bWFuKVxuICAgICAgICAgICAgdGhpcy5faExhYmVsLnRleHRDb250ZW50ID0gYEh1bWFuOiAke3Njb3JlfWA7XG4gICAgICAgIC8vIFVwZGF0ZSBBbGdvcml0aG0gU2NvcmVcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5fYUxhYmVsLnRleHRDb250ZW50ID0gYEFsZ29yaXRobTogJHtzY29yZX1gO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduQnV0dG9uIHtcbiAgICAvKipcbiAgICAgKiBTaWduIEJ1dHRvbiBDbGFzc1xuICAgICAqIFxuICAgICAqIEZvciBlYWNoIG9mIHRoZSBTaWducyBpbiBSb2NrLCBQYXBlciwgU2Npc3NvcnMsIHRoZSBVc2VyIG5lZWRzIHRvIGJlIFxuICAgICAqIGFibGUgdG8gc2VsZWN0IHRob3NlIHNpZ25zIHRvIHBsYXkgdGhlaXIgbW92ZSwgYW5kIHRoaXMgY2xhc3MgYWxsb3dzIHRoZVxuICAgICAqIFVzZXIgdG8gZG8gdGhhdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2lnbiBOYW1lIG9mIFNpZ25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoc2lnbikge1xuICAgICAgICAvLyBCdWlsZCBTaWduIEJ1dHRvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChgJHtzaWduLnRvTG93ZXJDYXNlKCl9LXNpZ24tYnV0dG9uYCk7XG5cbiAgICAgICAgLy8gQnVpbGQgQ3Vyc29yIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2N1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2N1cnNvci5pZCA9IFwiY3Vyc29yLWJ1dHRvblwiO1xuXG4gICAgICAgIC8vIEJ1aWxkIEljb24gZm9yIEJ1dHRvblxuICAgICAgICB0aGlzLl9pY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fc2lnbiA9IHNpZ247XG4gICAgICAgIHRoaXMuX3BvaW50ZXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgY3Vyc29yICgpIHsgcmV0dXJuIHRoaXMuX2N1cnNvcjsgfVxuXG4gICAgc2V0IGN1cnNvciAoZWxlbSkgeyB0aGlzLl9jdXJzb3IgPSBlbGVtOyB9XG5cbiAgICBnZXQgc2lnbiAoKSB7IHJldHVybiB0aGlzLl9zaWduOyB9XG5cbiAgICBzZXQgc2lnbiAoc3RyKSB7IHRoaXMuX3NpZ24gPSBzdHI7IH1cblxuICAgIGdldCBwb2ludGVyICgpIHsgcmV0dXJuIHRoaXMuX3BvaW50ZXI7IH1cblxuICAgIHNldCBwb2ludGVyIChib29sKSB7IHRoaXMuX3BvaW50ZXIgPSBib29sOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgRGltZW5zaW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgdGhlIEJ1dHRvbiBhbmQgSWNvbiBEaW1lbnNpb25zLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkaW0gQnV0dG9uIFNpemUgKHBpeGVscylcbiAgICAgKi9cbiAgICBzZXREaW1lbnNpb25zIChkaW0pIHtcbiAgICAgICAgLy8gU2V0IE1vZHVsZSBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS53aWR0aCA9IGAke2RpbX1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtkaW19cHhgO1xuXG4gICAgICAgIC8vIFNldCBDdXJzb3IgRGltZW5zaW9uc1xuICAgICAgICB0aGlzLl9jdXJzb3Iuc3R5bGUud2lkdGggPSBgJHtkaW19cHhgO1xuICAgICAgICB0aGlzLl9jdXJzb3Iuc3R5bGUuaGVpZ2h0ID0gYCR7ZGltfXB4YDtcblxuICAgICAgICAvLyBTZXQgSWNvbiBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX2ljb24uc3R5bGUud2lkdGggPSBgJHtkaW19cHhgO1xuICAgICAgICB0aGlzLl9pY29uLnN0eWxlLmhlaWdodCA9IGAke2RpbX1weGA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEljb24gTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBJY29uIGluc2lkZSB0aGUgU2lnbiBCdXR0b24uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBTb3VyY2Ugb2YgSWNvbiB0byBTZXRcbiAgICAgKi9cbiAgICBzZXRJY29uIChzcmMpIHtcbiAgICAgICAgLy8gU2V0IFNvdXJjZSBvZiBJY29uXG4gICAgICAgIHRoaXMuX21vZHVsZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLl9pY29uLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2ljb24pO1xuICAgICAgICBpZiAodGhpcy5fcG9pbnRlcilcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9jdXJzb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIEN1cnNvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBQbGFjZSBvciBSZW1vdmUgQ3Vyc29yIGZyb20gdGhlIEJ1dHRvbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uIFBsYWNlIG9yIFJlbW92ZVxuICAgICAqL1xuICAgIHBsYWNlQ3Vyc29yIChvbj10cnVlKSB7XG4gICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBCdXR0b25cbiAgICAgICAgaWYgKG9uICYmICF0aGlzLl9wb2ludGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fY3Vyc29yKTtcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBDdXJzb3IgZnJvbSBCdXR0b25cbiAgICAgICAgaWYgKCFvbiAmJiB0aGlzLl9wb2ludGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9tb2R1bGUucmVtb3ZlQ2hpbGQodGhpcy5fY3Vyc29yKTtcbiAgICAgICAgICAgIHRoaXMuX3BvaW50ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=