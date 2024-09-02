"use strict";
(self["webpackChunkgamechip"] = self["webpackChunkgamechip"] || []).push([["tictactoe"],{

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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
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
    background-color: var(--cursor);
    border: 3px solid var(--border-colour);
}

.scorecard > [class*="-scorecard"] {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


@keyframes blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}`, "",{"version":3,"sources":["webpack://./src/tic-tac-toe-module/game-styling.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAA0C;AAC9C;;AAEA;IACI,qBAAqB;IACrB,4CAA+B;AACnC;;AAEA;IACI,sBAAsB;IACtB,4CAAqC;AACzC;;AAEA;IACI,yBAAyB;IACzB;AACJ;;AAEA;IACI,yBAAyB;IACzB,4CAAkC;AACtC;;AAEA;IACI,yBAAyB;IACzB,4CAAsC;AAC1C;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,2BAA2B;IAC3B,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;IACpB,2BAA2B;IAC3B,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,+BAA+B;IAC/B,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;AACvB;;;AAGA;IACI,KAAK,UAAU,EAAE;IACjB,MAAM,UAAU,EAAE;IAClB,OAAO,UAAU,EAAE;AACvB","sourcesContent":["@font-face {\n    font-family: \"Merom Sans\";\n    src: url(\"../fonts/MeromSans-Regular.ttf\");\n}\n\n@font-face {\n    font-family: \"Dogica\";\n    src: url(\"../fonts/dogica.ttf\");\n}\n\n@font-face {\n    font-family: \"Gothica\";\n    src: url(\"../fonts/Gothica-Book.ttf\");\n}\n\n@font-face {\n    font-family: \"Alex Brush\";\n    src: url(\"../fonts/AlexBrush-Regular-OTF.otf\")\n}\n\n@font-face {\n    font-family: \"Free Metto\";\n    src: url(\"../fonts/freemetto.ttf\");\n}\n\n@font-face {\n    font-family: \"Rich Eatin\";\n    src: url(\"../fonts/Rich\\ Eatin\\'.otf\");\n}\n\n:root {\n    --white: #fdfffc;\n    --black: #020100;\n}\n\n:root.normal {\n    --font: \"Merom Sans\";\n    --marker-font: \"Free Metto\";\n    --white: #ffecd1;\n    --black: #001524;\n    --screen: #15616d;\n    --error-screen: #78290f;\n    --border-colour: #ff7d00;\n    --cursor: #36bce1;\n    --text-colour: #001524;\n}\n\n:root.retro {\n    --font: \"Dogica\";\n    --marker-font: \"Dogica\";\n    --white: #aaaaaa;\n    --black: #0f380f;\n    --screen: #9bbc0f;\n    --error-screen: #f69493;\n    --border-colour: #b5af42;\n    --cursor: #8bac0f;\n    --text-colour: #0f380f;\n}\n\n:root.fancy {\n    --font: \"Gothica\";\n    --marker-font: \"Alex Brush\";\n    --white: #efefe9;\n    --black: #223030;\n    --screen: #e8d9cd;\n    --error-screen: #d7504d;\n    --border-colour: #523d35;\n    --cursor: #bba584;\n    --text-colour: #223030;\n}\n\n:root.scruffy {\n    --font: \"Rich Eatin\";\n    --marker-font: \"Rich Eatin\";\n    --white: #f7f7f7;\n    --black: #170f11;\n    --screen: #21c5b0;\n    --error-screen: #7a0a0a;\n    --border-colour: #dfcc16;\n    --cursor: #12a365;\n    --text-colour: #170f11;\n}\n\n.tic-tac-toe-game-module {\n    position: absolute;\n    color: var(--text-colour);\n    background-color: var(--screen);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.scorecard {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n    background-color: var(--cursor);\n    border: 3px solid var(--border-colour);\n}\n\n.scorecard > [class*=\"-scorecard\"] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n\n@keyframes blink {\n    0% { opacity: 0; }\n    50% { opacity: 1; }\n    100% { opacity: 0; }\n}"],"sourceRoot":""}]);
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
    border: 2px solid var(--black);
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
}`, "",{"version":3,"sources":["webpack://./src/tic-tac-toe-module/grid-module/grid-styling.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,8BAA8B;IAC9B,yBAAyB;AAC7B","sourcesContent":[".tic-tac-toe-grid {\n    font-family: var(--font);\n    display: grid;\n}\n\n.cell {\n    position: relative;\n    background-color: var(--white);\n    border: 2px solid var(--black);\n    color: var(--text-colour);\n}\n\n.cell > div { \n    font-family: var(--marker-font);\n    text-align: center;\n}\n\n#cursor-cell {\n    background-color: var(--cursor);\n    position: absolute;\n    top: 0;\n    left: 0;\n    animation: blink 1.5s infinite;\n    animation-fill-mode: both;\n}"],"sourceRoot":""}]);
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
        
        // Set Default Algorithm to be Easy
        this._algorithm = this.#LEVELS.hard;
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
        }
        // Otherwise, Update Players, if required
        else if (this._players[0].marker !== nought) {
            // Update Player Markers
            this._players[0].marker = nought;
            this._players[1].marker = (nought === "o" ? "x" : "o");

            // Reset Player Scores
            this._players[0].reset();
            this._players[1].reset();
        }

        // Reset Grid
        for (let i = 0; i < this.#SIZE; i++) 
            for (let j = 0; j < this.#SIZE; j++)
                this._grid[i][j] = "";
    }

    /**
     * Set Level Method
     * 
     * Difficulty Level is set with this Method.
     * 
     * @param {string} level Algorithm Difficulty
     */
    setLevel (level) { this._algorithm = this.#LEVELS[level]; }

    /**
     * Get Marker Method
     * 
     * For the Current Turn, the method returns the Marker of the Player.
     * 
     * @returns True, if Current Turn is Nought
     */
    getMarker () { return this._players[this.#TURN].marker === "o" ? true : false; }

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
        this.#minimax(grid, 0, true, this._marker);
        console.log(this._move);
        return this._move; 
    }

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
        // let value;
        // const moves = this.#availableMoves(grid);
        // const next = this.#nextTurn(grid, marker);

        // // Handle Maximising Player
        // if (maximising) {
        //     value = -1 * this.#INFINITY;
        //     moves.forEach(move => {
        //         const newState = this.#simulate(grid, move.x, move.y, next);
        //         value = Math.max(value, this.#minimax(newState, depth + 1, false));
        //     });

        //     return value;
        // }

        // // Handle Minimising Player
        // else {
        //     value = this.#INFINITY;
        //     moves.forEach(move => {
        //         const newState = this.#simulate(grid, move.x, move.y, next);
        //         value = Math.min(value, this.#minimax(newState, depth + 1, true));
        //     });

        //     return value;
        // }
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
                if (grid[j][i] === players.p1.marker)
                    players.p1.play(j, i);
                // Check for Second Player
                else if (grid[j][i] === players.p2.marker)
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
                if (grid[j][i] === "")
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
                    newState[i].push(grid[j][i]);
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
     * TODO: Write Description
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
     * TODO: Write Description
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
     * TODO: Write Description
     * 
     * @param {boolean} nought Nought or Cross
     * @returns Error Message, if required
     */
    acceptAction (nought) { nought ? this._current.placeNought() : this._current.placeCross(); }

    /**
     * Decline Action Method
     * 
     * TODO: Write Description
     */
    declineAction () { /* TODO: Implement */ }
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
        const humanLabel = document.createElement("div");
        humanLabel.classList.add("human-label");
        humanLabel.textContent = "H: ";

        // Build Human Score DOM Element
        this._human = document.createElement("div");
        this._human.classList.add("human-score");
        this._human.textContent = 0;

        // Add Components to Human Scorecard
        humanScorecard.appendChild(humanLabel);
        humanScorecard.appendChild(this._human);

        // Build Algorithm Scorecard DOM Components
        const algorithmScorecard = document.createElement("div");
        algorithmScorecard.classList.add("algorithm-scorecard");

        // Build Algorithm Label DOM Element
        const algorithmLabel = document.createElement("div");
        algorithmLabel.classList.add("algorithm-label");
        algorithmLabel.textContent = "A: ";

        // Build Algorithm Score DOM Element
        this._algorithm = document.createElement("div");
        this._algorithm.classList.add("algorithm-score");
        this._algorithm.textContent = 0;

        // Add Components to Algorithm Scorecard
        algorithmScorecard.appendChild(algorithmLabel);
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
        this._msg = "";

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

    get message () { return this._msg; }

    set message (str) { this._msg = str; }

    /**
     * Setup Method
     * 
     * TODO: Write Description
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
        this._grid.algorithmSelect(move);

        // Return Message resulting from Move
        return this._game.attempt(move.x, move.y);
    }

    /**
     * Reset Method
     * 
     * TODO: Write Description
     */
    reset () {
        this._end = false;
    }

    /**
     * Horizontal Move Method
     * 
     * TODO: Write Description
     */
    horizontalMove (right=true) { this._grid.horizontalMove(right); }

    /**
     * Vertical Move Method
     * 
     * TODO: Write Description
     */
    verticalMove (up=true) { this._grid.verticalMove(up); }

    /**
     * Accept Action Method
     * 
     * TODO: Write Description
     */
    acceptAction () {
        // Check that the Attempt is Valid
        const turn = this._game.getMarker();
        this._msg = this._game.attempt(this._grid.current.x, this._grid.current.y);
        
        // Check if Attempt was Illegal
        if (this._msg.includes("Illegal Move!"))
            return false;

        // Check if User has Won
        if (this._msg === this._user) {
            this._end = true;
            this._msg = "Congratulations, you won!";
        } 
        // Check if there is a Draw
        else if (this._msg === "Draw!")
            this._end = true;
        
        // Make the Move on the Grid
        this._grid.acceptAction(turn);

        // Don't allow Algorithm to Move if Game is Over
        if (this._end)
            return true;

        // Prompt Algorithm to Move
        console.log(this._game.grid);
        setTimeout(() => {
            this._msg  = this.playAlgorithmMove();
        }, 1000);

        // Chek if Algorithm has Won
        if (this._msg === (this._user === "o" ? "x" : "o")) {
            this._end = true;
            this._msg = "Bad luck, the Algorithm has won!";
        } 
        // Check if there is a Draw
        else if (this._msg === "Draw!")
            this._end = true;
        
        return true;
    }

    /**
     * Decline Action Method
     * 
     * TODO: Write Description
     */
    declineAction () {}

    /**
     * Selection Action Method
     * 
     * TODO: Write Description
     */
    selectAction () {}
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
/* harmony import */ var _game_chip_module_game_interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-chip-module/game-interface.js */ "./src/game-chip-module/game-interface.js");
/* harmony import */ var _main_module_ttt_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-module/ttt-manager.js */ "./src/tic-tac-toe-module/main-module/ttt-manager.js");




class TTTGame extends _game_chip_module_game_interface_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
    #showCallback;
    #takeDownCallback;

    constructor (title) {
        super(title);

        // Initialise Objects for the Tic-Tac-Toe Game
        this._tm = new _main_module_ttt_manager_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
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

        // Set Grid on Display
        this.#showCallback(this._tm.module);

        // Show Information about the Tic-Tac-Toe Game
        this._tm.setMarker("o"); // TODO: Replace with info where user can select marker
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
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.verticalMove();
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
     * Down Callback Method
     * 
     * Handles the Click of the Down Button on the Direction Pad.
     */
    downCallback () {
        // Handle Grid Movement
        if (this._tm.controller)
            this._tm.verticalMove(false);
    }

    /**
     * A Callback Method
     * 
     * Handles the Click of the A Action Button.
     */
    aCallback () {
        // Handle Grid Action
        if (this._tm.controller) {
            // Check if Game is Over
            if (this._tm.acceptAction() && this._tm.end) { 
                console.log("Game Over!");
                console.log(this._tm.message);
                /* TODO: Raise Information about Outcome of Game */ 
            }

            // Handle Error Message
            else { /* TODO: Raise Error in Popup */ }
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
    startCallback () {}

    /**
     * Select Callback Method
     * 
     * Handles the Click of the Select User Button.
     */
    selectCallback () {}
}

/***/ }),

/***/ "./src/fonts/AlexBrush-Regular-OTF.otf":
/*!*********************************************!*\
  !*** ./src/fonts/AlexBrush-Regular-OTF.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ca08e2cd78827b13dd2.otf";

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tic-tac-toe-module/ttt-game.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dhbWUtc3R5bGluZy5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dyaWQtbW9kdWxlL2dyaWQtc3R5bGluZy5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzPzM5MTMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dyaWQtbW9kdWxlL2dyaWQtc3R5bGluZy5jc3M/MDkwNyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvZ2FtZS1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dhbWUtbW9kdWxlL2dhbWUuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dhbWUtbW9kdWxlL2xldmVscy9lYXN5LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLW1vZHVsZS9sZXZlbHMvaGFyZC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy90aWMtdGFjLXRvZS1tb2R1bGUvZ2FtZS1tb2R1bGUvbGV2ZWxzL2xldmVsLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLW1vZHVsZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dyaWQtbW9kdWxlL2NlbGwuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dyaWQtbW9kdWxlL2dyaWQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL21haW4tbW9kdWxlL3R0dC1tYW5hZ2VyLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS90dHQtZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTWVyb21TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvZG9naWNhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0dvdGhpY2EtQm9vay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9BbGV4QnJ1c2gtUmVndWxhci1PVEYub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvZnJlZW1ldHRvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JpY2ggRWF0aW4nLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNZXJvbSBTYW5zXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJHb3RoaWNhXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkFsZXggQnJ1c2hcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KVxufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJGcmVlIE1ldHRvXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJpY2ggRWF0aW5cIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbn1cblxuOnJvb3Qge1xuICAgIC0td2hpdGU6ICNmZGZmZmM7XG4gICAgLS1ibGFjazogIzAyMDEwMDtcbn1cblxuOnJvb3Qubm9ybWFsIHtcbiAgICAtLWZvbnQ6IFwiTWVyb20gU2Fuc1wiO1xuICAgIC0tbWFya2VyLWZvbnQ6IFwiRnJlZSBNZXR0b1wiO1xuICAgIC0td2hpdGU6ICNmZmVjZDE7XG4gICAgLS1ibGFjazogIzAwMTUyNDtcbiAgICAtLXNjcmVlbjogIzE1NjE2ZDtcbiAgICAtLWVycm9yLXNjcmVlbjogIzc4MjkwZjtcbiAgICAtLWJvcmRlci1jb2xvdXI6ICNmZjdkMDA7XG4gICAgLS1jdXJzb3I6ICMzNmJjZTE7XG4gICAgLS10ZXh0LWNvbG91cjogIzAwMTUyNDtcbn1cblxuOnJvb3QucmV0cm8ge1xuICAgIC0tZm9udDogXCJEb2dpY2FcIjtcbiAgICAtLW1hcmtlci1mb250OiBcIkRvZ2ljYVwiO1xuICAgIC0td2hpdGU6ICNhYWFhYWE7XG4gICAgLS1ibGFjazogIzBmMzgwZjtcbiAgICAtLXNjcmVlbjogIzliYmMwZjtcbiAgICAtLWVycm9yLXNjcmVlbjogI2Y2OTQ5MztcbiAgICAtLWJvcmRlci1jb2xvdXI6ICNiNWFmNDI7XG4gICAgLS1jdXJzb3I6ICM4YmFjMGY7XG4gICAgLS10ZXh0LWNvbG91cjogIzBmMzgwZjtcbn1cblxuOnJvb3QuZmFuY3kge1xuICAgIC0tZm9udDogXCJHb3RoaWNhXCI7XG4gICAgLS1tYXJrZXItZm9udDogXCJBbGV4IEJydXNoXCI7XG4gICAgLS13aGl0ZTogI2VmZWZlOTtcbiAgICAtLWJsYWNrOiAjMjIzMDMwO1xuICAgIC0tc2NyZWVuOiAjZThkOWNkO1xuICAgIC0tZXJyb3Itc2NyZWVuOiAjZDc1MDRkO1xuICAgIC0tYm9yZGVyLWNvbG91cjogIzUyM2QzNTtcbiAgICAtLWN1cnNvcjogI2JiYTU4NDtcbiAgICAtLXRleHQtY29sb3VyOiAjMjIzMDMwO1xufVxuXG46cm9vdC5zY3J1ZmZ5IHtcbiAgICAtLWZvbnQ6IFwiUmljaCBFYXRpblwiO1xuICAgIC0tbWFya2VyLWZvbnQ6IFwiUmljaCBFYXRpblwiO1xuICAgIC0td2hpdGU6ICNmN2Y3Zjc7XG4gICAgLS1ibGFjazogIzE3MGYxMTtcbiAgICAtLXNjcmVlbjogIzIxYzViMDtcbiAgICAtLWVycm9yLXNjcmVlbjogIzdhMGEwYTtcbiAgICAtLWJvcmRlci1jb2xvdXI6ICNkZmNjMTY7XG4gICAgLS1jdXJzb3I6ICMxMmEzNjU7XG4gICAgLS10ZXh0LWNvbG91cjogIzE3MGYxMTtcbn1cblxuLnRpYy10YWMtdG9lLWdhbWUtbW9kdWxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zY3JlZW4pO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2NvcmVjYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1cnNvcik7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG91cik7XG59XG5cbi5zY29yZWNhcmQgPiBbY2xhc3MqPVwiLXNjb3JlY2FyZFwiXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDUwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RpYy10YWMtdG9lLW1vZHVsZS9nYW1lLXN0eWxpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBK0I7QUFDbkM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQXFDO0FBQ3pDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQWtDO0FBQ3RDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxLQUFLLFVBQVUsRUFBRTtJQUNqQixNQUFNLFVBQVUsRUFBRTtJQUNsQixPQUFPLFVBQVUsRUFBRTtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNZXJvbSBTYW5zXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL01lcm9tU2Fucy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvZG9naWNhLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHb3RoaWNhXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0dvdGhpY2EtQm9vay50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQWxleCBCcnVzaFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9BbGV4QnJ1c2gtUmVndWxhci1PVEYub3RmXFxcIilcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRnJlZSBNZXR0b1xcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9mcmVlbWV0dG8udHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlJpY2ggRWF0aW5cXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvUmljaFxcXFwgRWF0aW5cXFxcJy5vdGZcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXdoaXRlOiAjZmRmZmZjO1xcbiAgICAtLWJsYWNrOiAjMDIwMTAwO1xcbn1cXG5cXG46cm9vdC5ub3JtYWwge1xcbiAgICAtLWZvbnQ6IFxcXCJNZXJvbSBTYW5zXFxcIjtcXG4gICAgLS1tYXJrZXItZm9udDogXFxcIkZyZWUgTWV0dG9cXFwiO1xcbiAgICAtLXdoaXRlOiAjZmZlY2QxO1xcbiAgICAtLWJsYWNrOiAjMDAxNTI0O1xcbiAgICAtLXNjcmVlbjogIzE1NjE2ZDtcXG4gICAgLS1lcnJvci1zY3JlZW46ICM3ODI5MGY7XFxuICAgIC0tYm9yZGVyLWNvbG91cjogI2ZmN2QwMDtcXG4gICAgLS1jdXJzb3I6ICMzNmJjZTE7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMwMDE1MjQ7XFxufVxcblxcbjpyb290LnJldHJvIHtcXG4gICAgLS1mb250OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgLS1tYXJrZXItZm9udDogXFxcIkRvZ2ljYVxcXCI7XFxuICAgIC0td2hpdGU6ICNhYWFhYWE7XFxuICAgIC0tYmxhY2s6ICMwZjM4MGY7XFxuICAgIC0tc2NyZWVuOiAjOWJiYzBmO1xcbiAgICAtLWVycm9yLXNjcmVlbjogI2Y2OTQ5MztcXG4gICAgLS1ib3JkZXItY29sb3VyOiAjYjVhZjQyO1xcbiAgICAtLWN1cnNvcjogIzhiYWMwZjtcXG4gICAgLS10ZXh0LWNvbG91cjogIzBmMzgwZjtcXG59XFxuXFxuOnJvb3QuZmFuY3kge1xcbiAgICAtLWZvbnQ6IFxcXCJHb3RoaWNhXFxcIjtcXG4gICAgLS1tYXJrZXItZm9udDogXFxcIkFsZXggQnJ1c2hcXFwiO1xcbiAgICAtLXdoaXRlOiAjZWZlZmU5O1xcbiAgICAtLWJsYWNrOiAjMjIzMDMwO1xcbiAgICAtLXNjcmVlbjogI2U4ZDljZDtcXG4gICAgLS1lcnJvci1zY3JlZW46ICNkNzUwNGQ7XFxuICAgIC0tYm9yZGVyLWNvbG91cjogIzUyM2QzNTtcXG4gICAgLS1jdXJzb3I6ICNiYmE1ODQ7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMyMjMwMzA7XFxufVxcblxcbjpyb290LnNjcnVmZnkge1xcbiAgICAtLWZvbnQ6IFxcXCJSaWNoIEVhdGluXFxcIjtcXG4gICAgLS1tYXJrZXItZm9udDogXFxcIlJpY2ggRWF0aW5cXFwiO1xcbiAgICAtLXdoaXRlOiAjZjdmN2Y3O1xcbiAgICAtLWJsYWNrOiAjMTcwZjExO1xcbiAgICAtLXNjcmVlbjogIzIxYzViMDtcXG4gICAgLS1lcnJvci1zY3JlZW46ICM3YTBhMGE7XFxuICAgIC0tYm9yZGVyLWNvbG91cjogI2RmY2MxNjtcXG4gICAgLS1jdXJzb3I6ICMxMmEzNjU7XFxuICAgIC0tdGV4dC1jb2xvdXI6ICMxNzBmMTE7XFxufVxcblxcbi50aWMtdGFjLXRvZS1nYW1lLW1vZHVsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3VyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2NyZWVuKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zY29yZWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG91cik7XFxufVxcblxcbi5zY29yZWNhcmQgPiBbY2xhc3MqPVxcXCItc2NvcmVjYXJkXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgNTAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50aWMtdGFjLXRvZS1ncmlkIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmNlbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG91cik7XG59XG5cbi5jZWxsID4gZGl2IHsgXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1hcmtlci1mb250KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjdXJzb3ItY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3Vyc29yKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYW5pbWF0aW9uOiBibGluayAxLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdGljLXRhYy10b2UtbW9kdWxlL2dyaWQtbW9kdWxlL2dyaWQtc3R5bGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGljLXRhYy10b2UtZ3JpZCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvdXIpO1xcbn1cXG5cXG4uY2VsbCA+IGRpdiB7IFxcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFya2VyLWZvbnQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjdXJzb3ItY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1cnNvcik7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBhbmltYXRpb246IGJsaW5rIDEuNXMgaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ncmlkLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ3JpZC1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUludGVyZmFjZSB7XG4gICAgLyoqXG4gICAgICogR2FtZSBJbnRlcmZhY2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBCYXNlIEdhbWUgQ2xhc3MgdGhhdCBzaG91bGQgYmUgSW5oZXJpdGVkIGJ5IE90aGVyIEdhbWVzIHRvIGJlIFBsYXllZCBvbiBcbiAgICAgKiB0aGUgR2FtZUNoaXAuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIE5hbWUgb2YgdGhlIEdhbWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHsgdGhpcy5fdGl0bGUgPSB0aXRsZTsgfVxuXG4gICAgZ2V0IHRpdGxlICgpIHsgcmV0dXJuIHRoaXMuX3RpdGxlOyB9XG5cbiAgICBzZXQgdGl0bGUgKHN0cikgeyB0aGlzLl90aXRsZTsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNob3cgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBTaG93IENhbGxiYWNrIE1ldGhvZCBmb3IgVXBkYXRpbmcgdGhlIEdhbWVDaGlwIERpc3BsYXlcbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgc2hvd0NhbGxiYWNrIFNob3cgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgdGFrZURvd25DYWxsYmFjayBUYWtlIERvd24gQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgZGltZW5zaW9uc0NhbGxiYWNrIEdldCBEaW1lbnNpb25zIENhbGxiYWNrXG4gICAgICovXG4gICAgc2V0U2NlbmUgKHNob3dDYWxsYmFjaywgdGFrZURvd25DYWxsYmFjaywgZ2V0RGltZW5zaW9ucykge31cblxuICAgIC8qKlxuICAgICAqIFVwIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBVcCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgdXBDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogUmlnaHQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFJpZ2h0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICByaWdodENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBEb3duIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBEb3duIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBkb3duQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIExlZnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIExlZnQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGxlZnRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQSBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQSBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGFDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQiBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGJDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFN0YXJ0IFVzZXIgQnV0dG9uLlxuICAgICAqL1xuICAgIHN0YXJ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgU2VsZWN0IFVzZXIgQnV0dG9uLlxuICAgICAqL1xuICAgIHNlbGVjdENhbGxiYWNrICgpIHt9XG59IiwiaW1wb3J0IEVhc3kgZnJvbSBcIi4vbGV2ZWxzL2Vhc3kuanNcIjtcbmltcG9ydCBIYXJkIGZyb20gXCIuL2xldmVscy9oYXJkLmpzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICAjVFVSTjtcbiAgICAjU0laRTtcbiAgICAjTEVWRUxTID0ge2Vhc3k6IG51bGwsIGhhcmQ6IG51bGx9O1xuXG4gICAgLyoqXG4gICAgICogR2FtZSBDbGFzc1xuICAgICAqIFxuICAgICAqIE9iamVjdCBmb3IgdHJhY2tpbmcgdGhlIGN1cnJlbnQgZ2FtZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBTaXplIG9mIEdyaWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoc2l6ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9ncmlkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKVxuICAgICAgICAgICAgdGhpcy5fZ3JpZC5wdXNoKFtdKTtcbiAgICAgICAgdGhpcy5fcGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLiNUVVJOID0gMDtcbiAgICAgICAgdGhpcy4jU0laRSA9IHNpemU7XG4gICAgICAgIHRoaXMuI0xFVkVMUy5lYXN5ID0gbmV3IEVhc3koKTtcbiAgICAgICAgdGhpcy4jTEVWRUxTLmhhcmQgPSBuZXcgSGFyZChcInhcIiwgdGhpcy4jU0laRSk7XG4gICAgICAgIFxuICAgICAgICAvLyBTZXQgRGVmYXVsdCBBbGdvcml0aG0gdG8gYmUgRWFzeVxuICAgICAgICB0aGlzLl9hbGdvcml0aG0gPSB0aGlzLiNMRVZFTFMuaGFyZDtcbiAgICB9XG5cbiAgICBnZXQgZ3JpZCAoKSB7IHJldHVybiB0aGlzLl9ncmlkOyB9XG5cbiAgICBzZXQgZ3JpZCAoYXJyKSB7IHRoaXMuX2dyaWQgPSBhcnI7IH1cblxuICAgIGdldCBwbGF5ZXJzICgpIHsgcmV0dXJuIHRoaXMuX3BsYXllcnM7IH1cblxuICAgIHNldCBwbGF5ZXJzIChhcnIpIHsgdGhpcy5fcGxheWVycyA9IGFycjsgfVxuXG4gICAgZ2V0IGFsZ29yaXRobSAoKSB7IHJldHVybiB0aGlzLl9hbGdvcml0aG07IH1cblxuICAgIHNldCBhbGdvcml0aG0gKG9iaikgeyB0aGlzLl9sZXZlbCA9IG9iajsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgTWV0aG9kXG4gICAgICogXG4gICAgICogQ3JlYXRlIFBsYXllciBPYmplY3RzIGZvciB0aGUgVXBjb21pbmcgR2FtZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbm91Z2h0IFBsYXllciAxIE5vdWdodCBvciBDcm9zc1xuICAgICAqL1xuICAgIHNldHVwIChub3VnaHQpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgUGxheWVycyBoYXZlIGFscmVhZHkgYmVlbiBpbml0aWFsaXNlZFxuICAgICAgICBpZiAodGhpcy5fcGxheWVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnMucHVzaChuZXcgUGxheWVyKG5vdWdodCwgdGhpcy4jU0laRSkpO1xuICAgICAgICAgICAgdGhpcy5fcGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoKG5vdWdodCA9PT0gXCJvXCIgPyBcInhcIiA6IFwib1wiKSwgdGhpcy4jU0laRSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgVXBkYXRlIFBsYXllcnMsIGlmIHJlcXVpcmVkXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3BsYXllcnNbMF0ubWFya2VyICE9PSBub3VnaHQpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBQbGF5ZXIgTWFya2Vyc1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyc1swXS5tYXJrZXIgPSBub3VnaHQ7XG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJzWzFdLm1hcmtlciA9IChub3VnaHQgPT09IFwib1wiID8gXCJ4XCIgOiBcIm9cIik7XG5cbiAgICAgICAgICAgIC8vIFJlc2V0IFBsYXllciBTY29yZXNcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnNbMF0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuX3BsYXllcnNbMV0ucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IEdyaWRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNTSVpFOyBpKyspIFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNTSVpFOyBqKyspXG4gICAgICAgICAgICAgICAgdGhpcy5fZ3JpZFtpXVtqXSA9IFwiXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IExldmVsIE1ldGhvZFxuICAgICAqIFxuICAgICAqIERpZmZpY3VsdHkgTGV2ZWwgaXMgc2V0IHdpdGggdGhpcyBNZXRob2QuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIEFsZ29yaXRobSBEaWZmaWN1bHR5XG4gICAgICovXG4gICAgc2V0TGV2ZWwgKGxldmVsKSB7IHRoaXMuX2FsZ29yaXRobSA9IHRoaXMuI0xFVkVMU1tsZXZlbF07IH1cblxuICAgIC8qKlxuICAgICAqIEdldCBNYXJrZXIgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDdXJyZW50IFR1cm4sIHRoZSBtZXRob2QgcmV0dXJucyB0aGUgTWFya2VyIG9mIHRoZSBQbGF5ZXIuXG4gICAgICogXG4gICAgICogQHJldHVybnMgVHJ1ZSwgaWYgQ3VycmVudCBUdXJuIGlzIE5vdWdodFxuICAgICAqL1xuICAgIGdldE1hcmtlciAoKSB7IHJldHVybiB0aGlzLl9wbGF5ZXJzW3RoaXMuI1RVUk5dLm1hcmtlciA9PT0gXCJvXCIgPyB0cnVlIDogZmFsc2U7IH1cblxuICAgIC8qKlxuICAgICAqIEF0dGVtcHQgTWV0aG9kXG4gICAgICogXG4gICAgICogV2hlbiB0aGUgUGxheWVyIEF0dGVtcHRzIHRvIG1ha2UgYSBtb3ZlLCB0aGUgbWV0aG9kIHdpbGwgZW5zdXJlIHRoYXQgdGhlXG4gICAgICogbW92ZSB3YXMgYSBsZWdhbCBvbmUgb3Igbm90LCBhbmQgYWxzbyBjaGVjayBpZiB0aGUgcmVzdWx0aW5nIG1vdmUgaGFzIGxlZFxuICAgICAqIHRvIHRoZSBlbmQgb2YgdGhlIEdhbWUsIHdoZXRoZXIgdGhhdCBwbGF5ZXIgaGFzIHdvbiwgb3IgaWYgaXQgcmVzdWx0ZWQgaW5cbiAgICAgKiBhIGRyYXcuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggQXR0ZW1wdCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBBdHRlbXB0IFktQ29vcmRpbmF0ZVxuICAgICAqIEByZXR1cm5zIE1lc3NhZ2UgaW5kaWNhdGluZyBBdHRlbXB0J3MgUmVzdWx0XG4gICAgICovXG4gICAgYXR0ZW1wdCAoeCwgeSkge1xuICAgICAgICAvLyBSZWplY3QgQXR0ZW1wdHMgdGhhdCBhcmUgYmV5b25kIEdyaWQgQm91bmRzXG4gICAgICAgIGlmICh4IDwgMyAmJiB4ID49IDAgJiYgeSA8IDMgJiYgeSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBBdHRlbXB0IGlzbid0IG9uIGFuIE9jY3VwaWVkIENlbGxcbiAgICAgICAgICAgIGlmICh0aGlzLiNsZWdhbCh4LCB5KSkge1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBQbGF5ZXJcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXJzW3RoaXMuI1RVUk5dLnBsYXkoeCwgeSk7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgR3JpZFxuICAgICAgICAgICAgICAgIHRoaXMuX2dyaWRbeV1beF0gPSB0aGlzLl9wbGF5ZXJzW3RoaXMuI1RVUk5dLm1hcmtlcjtcblxuICAgICAgICAgICAgICAgIC8vIENoY2VrIGlmIFBsYXllciBoYXMgV29uXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BsYXllcnNbdGhpcy4jVFVSTl0uaGFzV29uKCkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wbGF5ZXJzW3RoaXMuI1RVUk5dLm1hcmtlcjtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBhIERyYXdcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jZmlsbGVkKCkpIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJEcmF3IVwiO1xuXG4gICAgICAgICAgICAgICAgLy8gTmV4dCBUdXJuXG4gICAgICAgICAgICAgICAgdGhpcy4jVFVSTiA9IHRoaXMuI1RVUk4gPT09IDAgPyAxIDogMDtcblxuICAgICAgICAgICAgICAgIC8vIEdhbWUgc2hvdWxkIFJlc3VtZVxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYElsbGVnYWwgTW92ZSEgKCR7eH0sICR7eX0pIGlzIGFscmVhZHkgb2NjdXBpZWQhYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBgSWxsZWdhbCBNb3ZlISAoJHt4fSwgJHt5fSkgaXMgb3V0IG9mIGJvdW5kcyFgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExlZ2FsIE1ldGhvZFxuICAgICAqIFxuICAgICAqIENoZWNrcyBpZiB0aGUgQXR0ZW1wdCBpcyBMZWdhbC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBBdHRlbXAgWC1Db29yZGluYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgQXR0ZW1wdCBZLUNvb3JkaW5hdGVcbiAgICAgKiBAcmV0dXJucyBUcnVlLCBpZiBBdHRlbXB0IGlzIExlZ2FsXG4gICAgICovXG4gICAgI2xlZ2FsICh4LCB5KSB7IHJldHVybiB0aGlzLl9ncmlkW3ldW3hdID09PSBcIlwiOyB9XG5cbiAgICAvKipcbiAgICAgKiBGaWxsZWQgTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIGlmIGFsbCB0aGUgY2VsbHMgaW4gdGhlIGdyaWQgaGF2ZSBiZWVuIG1hcmtlZC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIEdyaWQgaXMgRnVsbHkgTWFya2VkXG4gICAgICovXG4gICAgI2ZpbGxlZCAoKSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBHcmlkIGFuZCBTZWFyY2ggZm9yIFVubWFya2VkIENlbGxcbiAgICAgICAgbGV0IGZpbGxlZCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jU0laRTsgaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMuX2dyaWRbaV0uaW5jbHVkZXMoXCJcIikpIHtcbiAgICAgICAgICAgICAgICBmaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsbGVkO1xuICAgIH1cbn0iLCJpbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWFzeSBleHRlbmRzIExldmVsIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7IHN1cGVyKFwiZWFzeVwiKTsgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgdGhlIEN1cnJlbnQgR3JpZCwgdGhlIG1ldGhvZCB3aWxsIHJhbmRvbWx5IHNlbGVjdCBhbiB1bm9jY3VwaWVkIGNlbGxcbiAgICAgKiBhcyB0aGUgU2VsZWN0ZWQgTW92ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdW119IGdyaWQgQ3VycmVudCBHcmlkXG4gICAgICogQHJldHVybnMgU2VsZWN0ZWQgTW92ZVxuICAgICAqL1xuICAgIHBsYXkgKGdyaWQpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBBdmFpbGFibGUgQXJyYXlcbiAgICAgICAgbGV0IGF2YWlsYWJsZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIEdyaWQgdG8gRmluZCBBdmFpbGFibGUgQ2VsbHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IFB1c2ggQXZhaWFibGUgQ2VsbHMgaW50byBBcnJheVxuICAgICAgICAgICAgICAgIGlmIChncmlkW2pdW2ldID09PSBcIlwiKVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUucHVzaCh7eDogaiwgeTogaX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIGEgUmFuZG9tIFNlbGVjdGlvbiBvZiBBdmFpbGFibGUgU3F1YXJlc1xuICAgICAgICByZXR1cm4gYXZhaWxhYmxlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZS5sZW5ndGgpXTtcbiAgICB9XG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vbGV2ZWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFyZCBleHRlbmRzIExldmVsIHtcbiAgICAjSU5GSU5JVFkgPSAxMDAwO1xuXG4gICAgY29uc3RydWN0b3IgKG1hcmtlciwgc2l6ZSkgeyBcbiAgICAgICAgc3VwZXIoXCJoYXJkXCIpOyBcbiAgICAgICAgdGhpcy5fbWFya2VyID0gbWFya2VyO1xuICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5fbW92ZSA9IHt4OiAtMSwgeTogLTF9O1xuICAgIH1cblxuICAgIGdldCBtYXJrZXIgKCkgeyByZXR1cm4gdGhpcy5fbWFya2VyOyB9XG5cbiAgICBzZXQgbWFya2VyIChzdHIpIHsgdGhpcy5fbWFya2VyID0gc3RyOyB9XG5cbiAgICBnZXQgc2l6ZSAoKSB7IHJldHVybiB0aGlzLl9zaXplOyB9XG5cbiAgICBzZXQgc2l6ZSAobnVtKSB7IHRoaXMuX3NpemUgPSBudW07IH1cblxuICAgIGdldCBtb3ZlICgpIHsgcmV0dXJuIHRoaXMuX21vdmU7IH1cblxuICAgIHNldCBtb3ZlIChkaWN0KSB7IHRoaXMuX21vdmUgPSBkaWN0OyB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ3VycmVudCBHcmlkLCB0aGUgbWV0aG9kIHdpbGwgc2VsZWN0IHRoZSBuZXh0IG1vdmUgdXNpbmcgdGhlIFxuICAgICAqIE1pbmltYXggQWxnb3JpdGhtLCB3aGljaCBhaW1zIHRvIG1pbmltaXNlIHRoZSBwb3NzaWJsZSBsb3NzZXMgZm9yIGFueSBcbiAgICAgKiBnaXZlbiBtb3ZlIGZvciB0aGUgd29yc3QgcG9zc2libGUgbW92ZSB0aGUgVXNlciB3aWxsIG1ha2UgKGZyb20gdGhlIFxuICAgICAqIGNvbXB1dGVyJ3MgcGVyc3BlY3RpdmUpLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW11bXX0gZ3JpZCBDdXJyZW50IEdyaWRcbiAgICAgKiBAcmV0dXJucyBTZWxlY3RlZCBNb3ZlXG4gICAgICovXG4gICAgcGxheSAoZ3JpZCkge1xuICAgICAgICB0aGlzLiNtaW5pbWF4KGdyaWQsIDAsIHRydWUsIHRoaXMuX21hcmtlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX21vdmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbW92ZTsgXG4gICAgfVxuXG4gICAgI21pbmltYXggKGdyaWQsIGRlcHRoPTAsIG1heGltaXNpbmc9dHJ1ZSwgbWFya2VyPVwiXCIpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgR2FtZSBpcyBDb21wbGV0ZVxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuI2lzQ29tcGxldGUoZ3JpZCk7XG5cbiAgICAgICAgLy8gUmV0dXJuIEhldXJpc3RpYyBmb3IgU3RhdGVcbiAgICAgICAgaWYgKHN0YXRlID09PSB0aGlzLl9tYXJrZXIpXG4gICAgICAgICAgICByZXR1cm4gMTA7XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlID09PSAodGhpcy5fbWFya2VyID09PSBcIm9cIiA/IFwieFwiIDogXCJvXCIpKVxuICAgICAgICAgICAgcmV0dXJuIC0xMDtcbiAgICAgICAgZWxzZSBpZiAoc3RhdGUgPT09IFwiRFJBV1wiKVxuICAgICAgICAgICAgcmV0dXJuIDA7XG5cbiAgICAgICAgLy8gU2V0dXAgZm9yIE1pbmltYXggQWxnb3JpdGhtXG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IGlkeDtcbiAgICAgICAgY29uc3QgbW92ZXMgPSB0aGlzLiNhdmFpbGFibGVNb3ZlcyhncmlkKTtcbiAgICAgICAgY29uc3QgbmV4dCA9IG1hcmtlciA9PT0gXCJvXCIgPyBcInhcIiA6IFwib1wiO1xuXG4gICAgICAgIC8vIEhhbmRsZSBNYXhpbWlzaW5nIFBsYXllclxuICAgICAgICBpZiAobWF4aW1pc2luZykge1xuICAgICAgICAgICAgdmFsdWUgPSAtMSAqIHRoaXMuI0lORklOSVRZO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBtb3Zlc1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHRoaXMuI3NpbXVsYXRlKGdyaWQsIG1vdmUueCwgbW92ZS55LCBuZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuI21pbmltYXgobmV3U3RhdGUsIGRlcHRoICsgMSwgZmFsc2UsIG5leHQpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA+IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlIE1vdmVcbiAgICAgICAgICAgIHRoaXMuX21vdmUgPSBtb3Zlc1tpZHhdO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgTWluaW1pc2luZyBQbGF5ZXJcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuI0lORklOSVRZO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmUgPSBtb3Zlc1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHRoaXMuI3NpbXVsYXRlKGdyaWQsIG1vdmUueCwgbW92ZS55LCBuZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuI21pbmltYXgobmV3U3RhdGUsIGRlcHRoIC0gMSwgdHJ1ZSwgbmV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgTW92ZVxuICAgICAgICAgICAgdGhpcy5fbW92ZSA9IG1vdmVzW2lkeF07XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgdmFsdWU7XG4gICAgICAgIC8vIGNvbnN0IG1vdmVzID0gdGhpcy4jYXZhaWxhYmxlTW92ZXMoZ3JpZCk7XG4gICAgICAgIC8vIGNvbnN0IG5leHQgPSB0aGlzLiNuZXh0VHVybihncmlkLCBtYXJrZXIpO1xuXG4gICAgICAgIC8vIC8vIEhhbmRsZSBNYXhpbWlzaW5nIFBsYXllclxuICAgICAgICAvLyBpZiAobWF4aW1pc2luZykge1xuICAgICAgICAvLyAgICAgdmFsdWUgPSAtMSAqIHRoaXMuI0lORklOSVRZO1xuICAgICAgICAvLyAgICAgbW92ZXMuZm9yRWFjaChtb3ZlID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHRoaXMuI3NpbXVsYXRlKGdyaWQsIG1vdmUueCwgbW92ZS55LCBuZXh0KTtcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHZhbHVlLCB0aGlzLiNtaW5pbWF4KG5ld1N0YXRlLCBkZXB0aCArIDEsIGZhbHNlKSk7XG4gICAgICAgIC8vICAgICB9KTtcblxuICAgICAgICAvLyAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gLy8gSGFuZGxlIE1pbmltaXNpbmcgUGxheWVyXG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgdmFsdWUgPSB0aGlzLiNJTkZJTklUWTtcbiAgICAgICAgLy8gICAgIG1vdmVzLmZvckVhY2gobW92ZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB0aGlzLiNzaW11bGF0ZShncmlkLCBtb3ZlLngsIG1vdmUueSwgbmV4dCk7XG4gICAgICAgIC8vICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbih2YWx1ZSwgdGhpcy4jbWluaW1heChuZXdTdGF0ZSwgZGVwdGggKyAxLCB0cnVlKSk7XG4gICAgICAgIC8vICAgICB9KTtcblxuICAgICAgICAvLyAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgQ29tcGxldGUgTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2sgaWYgYSBHaXZlbiBHcmlkIGlzIENvbXBsZXRlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nW11bXX0gZ3JpZCBDdXJyZW50IEdyaWRcbiAgICAgKiBAcmV0dXJucyBTdGF0ZSBvZiBHcmlkXG4gICAgICovXG4gICAgI2lzQ29tcGxldGUgKGdyaWQpIHtcbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgbGV0IHBsYXllcnMgPSB7XG4gICAgICAgICAgICBwMTogbmV3IFBsYXllcigodGhpcy5fbWFya2VyID09PSBcIm9cIiA/IFwieFwiOiBcIm9cIiksIHRoaXMuX3NpemUpLFxuICAgICAgICAgICAgcDI6IG5ldyBQbGF5ZXIodGhpcy5fbWFya2VyLCB0aGlzLl9zaXplKVxuICAgICAgICB9O1xuICAgICAgICBsZXQgZmlsbGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggRGVzaXJlZCBHcmlkXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIEZpcnN0IFBsYXllclxuICAgICAgICAgICAgICAgIGlmIChncmlkW2pdW2ldID09PSBwbGF5ZXJzLnAxLm1hcmtlcilcbiAgICAgICAgICAgICAgICAgICAgcGxheWVycy5wMS5wbGF5KGosIGkpO1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBTZWNvbmQgUGxheWVyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZ3JpZFtqXVtpXSA9PT0gcGxheWVycy5wMi5tYXJrZXIpXG4gICAgICAgICAgICAgICAgICAgIHBsYXllcnMucDIucGxheShqLCBpKTtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgVW5wbGF5ZWQgQ2VsbFxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgZmlsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVycy5wMS5oYXNXb24oKSlcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJzLnAxLm1hcmtlcjtcbiAgICAgICAgZWxzZSBpZiAocGxheWVycy5wMi5oYXNXb24oKSlcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJzLnAyLm1hcmtlcjtcbiAgICAgICAgZWxzZSBpZiAoZmlsbGVkKVxuICAgICAgICAgICAgcmV0dXJuIFwiRFJBV1wiO1xuICAgICAgICByZXR1cm4gXCJJTkNPTVBMRVRFXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXZhaWxhYmxlIE1vdmVzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciBhIEN1cnJlbnQgU3RhdGUsIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIEF2YWlsYWJsZSBNb3Zlcy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdW119IGdyaWQgQ3VycmVudCBTdGF0ZSBvZiBHYW1lXG4gICAgICogQHJldHVybnMgQXZhaWxhYmxlIE1vdmVzIGZvciBDdXJyZW50IFN0YXRlXG4gICAgICovXG4gICAgI2F2YWlsYWJsZU1vdmVzIChncmlkKSB7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgTW92ZXMgQXJyYXlcbiAgICAgICAgY29uc3QgbW92ZXMgPSBbXTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggR3JpZCBhbmQgZmluZCBBdmFpbGFibGUgQ2VsbHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdyaWRbal1baV0gPT09IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIG1vdmVzLnB1c2goe3g6IGosIHk6IGl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW11bGF0ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBGb3IgYSBnaXZlbiBtb3ZlLCByZXR1cm4gYSBOZXcgR2FtZSBTdGF0ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdW119IGdyaWQgQ3VycmVudCBHcmlkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggTW92ZSBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBNb3ZlIFktQ29vcmRpbmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXJrZXIgTWFya2VyIGZvciBNb3ZlXG4gICAgICogQHJldHVybnMgTmV3IEdhbWUgU3RhdGVcbiAgICAgKi9cbiAgICAjc2ltdWxhdGUgKGdyaWQsIHgsIHksIG1hcmtlcikge1xuICAgICAgICAvLyBJbml0aWFsaXNlIE5ldyBTdGF0ZVxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIG5ld1N0YXRlLnB1c2goW10pO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBNYXRyaXhcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fc2l6ZTsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIE1hcmtlciB0byBDZWxsXG4gICAgICAgICAgICAgICAgaWYgKGogPT09IHggJiYgaSA9PT0geSlcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhdGVbaV0ucHVzaChtYXJrZXIpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBDdXJyZW50IE1hcmtlciBPdGhlcndpc2VcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXRlW2ldLnB1c2goZ3JpZFtqXVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcbiAgICAvKipcbiAgICAgKiBMZXZlbCBDbGFzc1xuICAgICAqIFxuICAgICAqIEJhc2UgQ2xhc3MgZm9yIHRoZSBEaWZmaWN1bHR5IExldmVsIG9mIHRoZSBDb21wdXRlciBmb3IgdGhlIFRpYy1UYWMtVG9lXG4gICAgICogR2FtZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgRGlmZmljdWx0eSBMZXZlbFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChsZXZlbCkgeyB0aGlzLl9sZXZlbCA9IGxldmVsOyB9XG5cbiAgICBnZXQgbGV2ZWwgKCkgeyByZXR1cm4gdGhpcy5fbGV2ZWw7IH1cblxuICAgIHNldCBsZXZlbCAoc3RyKSB7IHRoaXMuX2xldmVsID0gc3RyOyB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ3VycmVudCBHcmlkLCB0aGUgbWV0aG9kIHdpbGwgc2VsZWN0IHRoZSBuZXh0IG1vdmUuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXVtdfSBncmlkIEN1cnJlbnQgR3JpZFxuICAgICAqIEByZXR1cm5zIFNlbGVjdGVkIE1vdmVcbiAgICAgKi9cbiAgICBwbGF5IChncmlkKSB7IHJldHVybiB7eDogLTEsIHk6IC0xfTsgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgLyoqXG4gICAgICogUGxheWVyIENsYXNzXG4gICAgICogXG4gICAgICogTWFuYWdhZXMgdGhlIFBsYXllcidzIE1hcmtlciAoaS5lLiBub3VnaHQgb3IgY3Jvc3MpIGFuZCBhbHNvIHRoZSBwbGF5ZXInc1xuICAgICAqIHNjb3JlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBub3VnaHQgTm91Z2h0IG9yIENyb3NzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKG5vdWdodCwgc2l6ZSkge1xuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9tYXJrZXIgPSBub3VnaHQ7XG4gICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xuICAgICAgICB0aGlzLl9zY29yZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoc2l6ZSAqIDIgKyAyKTsgaSsrKVxuICAgICAgICAgICAgdGhpcy5fc2NvcmVzLnB1c2goMCk7XG4gICAgfVxuICAgIFxuICAgIGdldCBtYXJrZXIgKCkgeyByZXR1cm4gdGhpcy5fbWFya2VyOyB9XG5cbiAgICBzZXQgbWFya2VyIChzdHIpIHsgdGhpcy5fbWFya2VyID0gc3RyOyB9XG5cbiAgICBnZXQgc2NvcmVzICgpIHsgcmV0dXJuIHRoaXMuX3Njb3JlczsgfVxuXG4gICAgc2V0IHNjb3JlcyAoYXJyKSB7IHRoaXMuX3Njb3JlcyA9IGFycjsgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IGFsbCBzY29yZSB2YWx1ZXMgdG8gYmUgemVyby5cbiAgICAgKi9cbiAgICByZXNldCAoKSB7IHRoaXMuX3Njb3Jlcy5mb3JFYWNoKGUgPT4geyBlID0gMDsgfSk7IH1cblxuICAgIC8qKlxuICAgICAqIFBsYXkgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlcyB0aGUgUGxheWVyJ3MgU2NvcmUgQXJyYXkuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggTW92ZSBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBNb3ZlIFktQ29vcmRpbmF0ZVxuICAgICAqL1xuICAgIHBsYXkgKHgsIHkpIHtcbiAgICAgICAgLy8gVXBkYXRlIENvbHVtbiBTY29yZVxuICAgICAgICB0aGlzLl9zY29yZXNbeF0gKz0gMTtcbiAgICAgICAgLy8gVXBkYXRlIFJvdyBTY29yZVxuICAgICAgICB0aGlzLl9zY29yZXNbeSArIHRoaXMuX3NpemVdICs9IDE7XG4gICAgICAgIC8vIFVwZGF0ZSBOZWdhdGl2ZSBEaWFnb25hbCBTY29yZVxuICAgICAgICB0aGlzLl9zY29yZXNbdGhpcy5fc2NvcmVzLmxlbmd0aCAtIDJdICs9ICh4ID09PSB5ID8gMSA6IDApO1xuICAgICAgICAvLyBVcGRhdGUgUG9zaXRpdmUgRGlhZ29uYWwgU2NvcmVcbiAgICAgICAgdGhpcy5fc2NvcmVzW3RoaXMuX3Njb3Jlcy5sZW5ndGggLSAxXSArPSAoeCArIHkgPT09IHRoaXMuX3NpemUgLSAxID8gMSA6IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhcyBXb24gTWV0aG9kXG4gICAgICogXG4gICAgICogQ2hlY2tzIHRoZSBQbGF5ZXJzIFNjb3JlcyBmb3IgYSAzLCBpbXBseWluZyB0aGV5IGhhdmUgYWNoaWV2ZWQgdGhlIHJlcXVpcmVkXG4gICAgICogMyBpbiBhIHJvdy5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBUcnVlLCBpZiBQbGF5ZXIgaGFzIDMgaW4gYSBSb3dcbiAgICAgKi9cbiAgICBoYXNXb24gKCkgeyByZXR1cm4gdGhpcy5fc2NvcmVzLmluY2x1ZGVzKDMpOyB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XG4gICAgLyoqXG4gICAgICogQ2VsbCBDbGFzc1xuICAgICAqIFxuICAgICAqIFRpYy1UYWMtVG9lIENlbGwgRWxlbWVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBYLUNvb3JkaW5hdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBZLUNvb3JkaW5hdGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoeCwgeSkge1xuICAgICAgICAvLyBCdWlsZCBDZWxsIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmlkID0gYCR7eH0tJHt5fS1jZWxsYDtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgIFwiZ3JpZC1hcmVhXCIsIGBjZWxsLSR7eH0ke3l9YFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEJ1aWxkIEN1cnNvciBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jdXJzb3IuaWQgPSBcImN1cnNvci1jZWxsXCI7XG5cbiAgICAgICAgLy8gQnVpbGQgTm91Z2h0IERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX25vdWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX25vdWdodC5pZCA9IGBub3VnaHQtJHt4fS0ke3l9YDtcbiAgICAgICAgdGhpcy5fbm91Z2h0LnRleHRDb250ZW50ID0gXCJPXCI7XG5cbiAgICAgICAgLy8gQnVpbGQgQ3Jvc3MgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fY3Jvc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9jcm9zcy5pZCA9IGBjcm9zcy0ke3h9LSR7eX1gO1xuICAgICAgICB0aGlzLl9jcm9zcy50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX3ggPSB4O1xuICAgICAgICB0aGlzLl95ID0geTtcbiAgICAgICAgdGhpcy5fcG9pbnRlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBlbGVtZW50ICgpIHsgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7IH1cblxuICAgIHNldCBlbGVtZW50IChlbGVtKSB7IHRoaXMuX2VsZW1lbnQgPSBlbGVtOyB9XG5cbiAgICBnZXQgY3Vyc29yICgpIHsgcmV0dXJuIHRoaXMuX2N1cnNvcjsgfVxuXG4gICAgc2V0IGN1cnNvciAoZWxlbSkgeyB0aGlzLl9jdXJzb3IgPSBlbGVtOyB9XG5cbiAgICBnZXQgbm91Z2h0ICgpIHsgcmV0dXJuIHRoaXMuX25vdWdodDsgfVxuXG4gICAgc2V0IG5vdWdodCAoZWxlbSkgeyB0aGlzLl9ub3VnaHQgPSBlbGVtOyB9XG5cbiAgICBnZXQgY3Jvc3MgKCkgeyByZXR1cm4gdGhpcy5fY3Jvc3M7IH1cblxuICAgIHNldCBjcm9zcyAoZWxlbSkgeyB0aGlzLl9jcm9zcyA9IGVsZW07IH1cblxuICAgIGdldCB4ICgpIHsgcmV0dXJuIHRoaXMuX3g7IH1cblxuICAgIHNldCB4ICh4KSB7IHRoaXMuX3ggPSB4OyB9XG5cbiAgICBnZXQgeSAoKSB7IHJldHVybiB0aGlzLl95OyB9XG5cbiAgICBzZXQgeSAoeSkgeyB0aGlzLl95ID0geTsgfVxuXG4gICAgZ2V0IHBvaW50ZXIgKCkgeyByZXR1cm4gdGhpcy5fcG9pbnRlcjsgfVxuXG4gICAgc2V0IHBvaW50ZXIgKGJvb2wpIHsgdGhpcy5fcG9pbnRlciA9IGJvb2w7IH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIEN1cnNvciBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBQbGFjZSBvciBSZW1vdmUgdGhlIEN1cnNvciBvbiB0aGUgQ2VsbC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uIFBsYWNlIG9yIFJlbW92ZVxuICAgICAqL1xuICAgIHBsYWNlQ3Vyc29yIChvbj10cnVlKSB7XG4gICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBDZWxsXG4gICAgICAgIGlmIChvbiAmJiAhdGhpcy5fcG9pbnRlcikge1xuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jdXJzb3IpO1xuICAgICAgICAgICAgdGhpcy5fcG9pbnRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIEN1cnNvciBmcm9tIENlbGxcbiAgICAgICAgaWYgKCFvbiAmJiB0aGlzLl9wb2ludGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2N1cnNvcik7XG4gICAgICAgICAgICB0aGlzLl9wb2ludGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZSBOb3VnaHQgTWV0aG9kXG4gICAgICogXG4gICAgICogUGxhY2Ugb3IgUmVtb3ZlIHRoZSBOb3VnaHQgaW4gdGhlIENlbGwuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbiBQbGFjZSBvciBSZW1vdmVcbiAgICAgKi9cbiAgICBwbGFjZU5vdWdodCAob249dHJ1ZSkge1xuICAgICAgICAvLyBQbGFjZSBOb3VnaHQgaW4gQ2VsbFxuICAgICAgICBpZiAob24gJiYgIXRoaXMuX2VsZW1lbnQuY29udGFpbnModGhpcy5fbm91Z2h0KSkgXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX25vdWdodCk7XG4gICAgICAgIC8vIFJlbW92ZSBOb3VnaHQgZnJvbSBDZWxsXG4gICAgICAgIGlmICghb24gJiYgdGhpcy5fZWxlbWVudC5jb250YWlucyh0aGlzLl9ub3VnaHQpKVxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9ub3VnaHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIENyb3NzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFBsYWNlIG9yIFJlbW92ZSB0aGUgQ3Jvc3MgaW4gdGhlIENlbGwuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbiBQbGFjZSBvciBSZW1vdmVcbiAgICAgKi9cbiAgICBwbGFjZUNyb3NzIChvbj10cnVlKSB7XG4gICAgICAgIC8vIFBsYWNlIENyb3NzIGluIENlbGxcbiAgICAgICAgaWYgKG9uICYmICF0aGlzLl9lbGVtZW50LmNvbnRhaW5zKHRoaXMuX2Nyb3NzKSlcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fY3Jvc3MpO1xuICAgICAgICAvLyBSZW1vdmUgQ3Jvc3MgZnJvbSBDZWxsXG4gICAgICAgIGlmICghb24gJiYgdGhpcy5fZWxlbWVudC5jb250YWlucyh0aGlzLl9jcm9zcykpXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2Nyb3NzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZW1vdmVzIGN1cnNvciwgbm91Z2h0IGFuZCBjcm9zcyBmcm9tIGNlbGwuXG4gICAgICovXG4gICAgcmVzZXQgKCkge1xuICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yLCBpZiBuZWVkZWRcbiAgICAgICAgaWYgKHRoaXMuX3BvaW50ZXIpXG4gICAgICAgICAgICB0aGlzLnBsYWNlQ3Vyc29yKGZhbHNlKTtcblxuICAgICAgICAvLyBSZW1vdmUgTm91Z2h0XG4gICAgICAgIHRoaXMucGxhY2VOb3VnaHQoZmFsc2UpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBDcm9zc1xuICAgICAgICB0aGlzLnBsYWNlQ3Jvc3MoZmFsc2UpO1xuICAgIH1cbn0iLCJpbXBvcnQgXCIuL2dyaWQtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL2NlbGwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgI0dSSUQ7XG4gICAgI0RFRkFVTFRfUE9TID0ge3g6IDEsIHk6IDF9O1xuXG4gICAgLyoqXG4gICAgICogR3JpZCBDbGFzc1xuICAgICAqIFxuICAgICAqIFRpYy1UYWMtVG9lIEdyaWQgdGhhdCBpcyByZXNwb25zaWJsZSBmb3Igc2V0dGluZyB1cCBhbGwgQ2VsbHMgYW5kIHRoZVxuICAgICAqIGNvbnRyb2wgb2YgdGhvc2UgQ2VsbHMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHNpemUpIHtcbiAgICAgICAgLy8gQnVpbGQgdGhlIEdyaWQgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJ0aWMtdGFjLXRvZS1ncmlkXCIpO1xuXG4gICAgICAgIC8vIEFkZCBHcmlkIFRlbXBsYXRlIEFyZWFzIHRvIHRoZSBHcmlkIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuI0dSSUQgPSBzaXplO1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0dSSUQ7IGkrKykge1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gdGhpcy4jR1JJRCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI0dSSUQ7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChqID09PSAwKVxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSArPSBgXCJjZWxsLSR7an0ke2l9IGA7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaiA9PT0gdGhpcy4jR1JJRCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGBjZWxsLSR7an0ke2l9XCIke2kgPT09IDAgPyBcIlwiIDogXCIgXCJ9YDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlICs9IGBjZWxsLSR7an0ke2l9IGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLnNldFByb3BlcnR5KFwiZ3JpZC10ZW1wbGF0ZS1hcmVhc1wiLCB0ZW1wbGF0ZSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBDZWxsc1xuICAgICAgICB0aGlzLl9jZWxscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI0dSSUQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNHUklEOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gbmV3IENlbGwoaiwgaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2VsbHMucHVzaChjZWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQoY2VsbC5lbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBEZWZhdWx0IEluaXRpYWwgQ3Vyc29yXG4gICAgICAgICAgICAgICAgaWYgKGNlbGwueCA9PT0gdGhpcy4jREVGQVVMVF9QT1MueCAmJiBjZWxsLnkgPT09IHRoaXMuI0RFRkFVTFRfUE9TLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IGNlbGw7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwucGxhY2VDdXJzb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgY3VycmVudCAoKSB7IHJldHVybiB0aGlzLl9jdXJyZW50OyB9XG5cbiAgICBzZXQgY3VycmVudCAoY2VsbCkgeyB0aGlzLl9jdXJyZW50ID0gY2VsbDsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBHcmlkLCB0aGUgV2lkdGggYW5kIEhlaWdodCBhcmUgZGVwZW5kZW50IG9uIHRoZSBTY3JlZW4gU2l6ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGltZW5zaW9uIEdyaWQgU2l6ZSAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldERpbWVuc2lvbnMgKGRpbWVuc2lvbikge1xuICAgICAgICAvLyBTZXQgR3JpZCBEaW1lbnNpb25zXG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS53aWR0aCA9IGAke2RpbWVuc2lvbn1weGA7XG4gICAgICAgIHRoaXMuX21vZHVsZS5zdHlsZS5oZWlnaHQgPSBgJHtkaW1lbnNpb259cHhgO1xuXG4gICAgICAgIC8vIFNldCBDZWxsIERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgY2VsbERpbSA9IE1hdGguZmxvb3IoZGltZW5zaW9uIC8gdGhpcy4jR1JJRCk7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gTWF0aC5mbG9vcihjZWxsRGltICogMC44KTtcbiAgICAgICAgdGhpcy5fY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNlbGwuZWxlbWVudC5zdHlsZS53aWR0aCA9IGAke2NlbGxEaW19cHhgO1xuICAgICAgICAgICAgY2VsbC5lbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2NlbGxEaW19cHhgO1xuICAgICAgICAgICAgY2VsbC5jdXJzb3Iuc3R5bGUud2lkdGggPSBgJHtjZWxsRGltfXB4YDtcbiAgICAgICAgICAgIGNlbGwuY3Vyc29yLnN0eWxlLmhlaWdodCA9IGAke2NlbGxEaW19cHhgO1xuICAgICAgICAgICAgY2VsbC5ub3VnaHQuc3R5bGUuZm9udFNpemUgPSBgJHtmb250U2l6ZX1weGA7XG4gICAgICAgICAgICBjZWxsLmNyb3NzLnN0eWxlLmZvbnRTaXplID0gYCR7Zm9udFNpemV9cHhgO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGdvcml0aG0gU2VsZWN0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgQWxnb3JpdGhtJ3MgU2VsZWN0ZWQgTW92ZSwgdGhlIEdyaWQgb24gRGlzcGxheSBtdXN0IFVwZGF0ZSB3aXRoXG4gICAgICogdGhlIGFwcHJvcHJpYXRlIFZhbHVlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtb3ZlIFggYW5kIFkgQ29vcmRpbmF0ZXNcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5vdWdodCBOb3VnaHQgb3IgQ3Jvc3NcbiAgICAgKi9cbiAgICBhbGdvcml0aG1TZWxlY3QgKG1vdmUsIG5vdWdodCkge1xuICAgICAgICAvLyBGaW5kIENlbGwgYW5kIFVwZGF0ZSB3aXRoIEFsZ29yaXRobSdzIE1hcmtlclxuICAgICAgICB0aGlzLl9jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgaWYgKGNlbGwueCA9PT0gbW92ZS54ICYmIGNlbGwueSA9PT0gbW92ZS55KVxuICAgICAgICAgICAgICAgIG5vdWdodCA/IGNlbGwucGxhY2VOb3VnaHQoKSA6IGNlbGwucGxhY2VDcm9zcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIb3Jpem9udGFsIE1vdmUgTWV0aG9kXG4gICAgICogXG4gICAgICogVE9ETzogV3JpdGUgRGVzY3JpcHRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJpZ2h0IERlZmF1bHQgQWN0aW9uIGlzIFJpZ2h0d2FyZHNcbiAgICAgKi9cbiAgICBob3Jpem9udGFsTW92ZSAocmlnaHQ9dHJ1ZSkge1xuICAgICAgICAvLyBFbnN1cmUgSG9yaXpvbnRhbCBNb3ZlIGlzIHN0aWxsIG9uIEdyaWRcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuX2N1cnJlbnQueCArIChyaWdodCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChjdXJyIDwgdGhpcy4jR1JJRCAmJiBjdXJyID49IDApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBDdXJzb3IgZnJvbSBDZWxsXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSBhbmQgRmluZCBOZXcgQ2VsbCBmb3IgQ3Vyc29yXG4gICAgICAgICAgICB0aGlzLl9jZWxscy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLnggPT09IGN1cnIgJiYgY2VsbC55ID09PSB0aGlzLl9jdXJyZW50LnkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSBjZWxsO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFBsYWNlIEN1cnNvciBvbiBDZWxsXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50LnBsYWNlQ3Vyc29yKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBUT0RPOiBXcml0ZSBEZXNjcmlwdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXAgRGVmYXVsdCBBY3Rpb24gaXMgVXB3YXJkc1xuICAgICAqL1xuICAgIHZlcnRpY2FsTW92ZSAodXA9dHJ1ZSkge1xuICAgICAgICAvLyBFbnN1cmUgVmVydGljYWwgTW92ZSBpcyBzdGlsbCBvbiBHcmlkXG4gICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50LnkgKyAodXAgPyAtMSA6IDEpO1xuICAgICAgICBpZiAoY3VyciA8IHRoaXMuI0dSSUQgJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgQ3Vyc29yIGZyb20gQ2VsbFxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcihmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgYW5kIEZpbmQgTmV3IENlbGwgZm9yIEN1cnNvclxuICAgICAgICAgICAgdGhpcy5fY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC54ID09PSB0aGlzLl9jdXJyZW50LnggJiYgY2VsbC55ID09PSBjdXJyKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gY2VsbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBQbGFjZSBDdXJzb3Igb24gQ2VsbFxuICAgICAgICAgICAgdGhpcy5fY3VycmVudC5wbGFjZUN1cnNvcih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjY2VwdCBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogVE9ETzogV3JpdGUgRGVzY3JpcHRpb25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5vdWdodCBOb3VnaHQgb3IgQ3Jvc3NcbiAgICAgKiBAcmV0dXJucyBFcnJvciBNZXNzYWdlLCBpZiByZXF1aXJlZFxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAobm91Z2h0KSB7IG5vdWdodCA/IHRoaXMuX2N1cnJlbnQucGxhY2VOb3VnaHQoKSA6IHRoaXMuX2N1cnJlbnQucGxhY2VDcm9zcygpOyB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNsaW5lIEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBUT0RPOiBXcml0ZSBEZXNjcmlwdGlvblxuICAgICAqL1xuICAgIGRlY2xpbmVBY3Rpb24gKCkgeyAvKiBUT0RPOiBJbXBsZW1lbnQgKi8gfVxufSIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9nYW1lLW1vZHVsZS9nYW1lXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi4vZ3JpZC1tb2R1bGUvZ3JpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUVFRNYW5hZ2VyIHtcbiAgICAjREVGQVVMVF9HUklEID0gMztcbiAgICAjVEhFTUVTID0gW1xuICAgICAgICBcIk5vcm1hbFwiLFxuICAgICAgICBcIlJldHJvXCIsXG4gICAgICAgIFwiRmFuY3lcIixcbiAgICAgICAgXCJTY3J1ZmZ5XCJcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvLyBCdWlsZCBHYW1lIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX21vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5jbGFzc0xpc3QuYWRkKFwidGljLXRhYy10b2UtZ2FtZS1tb2R1bGVcIik7XG5cbiAgICAgICAgLy8gQnVpbGQgU2NvcmluZyBET00gQ29tcG9uZW50c1xuICAgICAgICB0aGlzLl9zY29yZWNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9zY29yZWNhcmQuY2xhc3NMaXN0LmFkZChcInNjb3JlY2FyZFwiKTtcblxuICAgICAgICAvLyBCdWlsZCBIdW1hbiBTY29yZWNhcmQgRE9NIENvbXBvbmVudHNcbiAgICAgICAgY29uc3QgaHVtYW5TY29yZWNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBodW1hblNjb3JlY2FyZC5jbGFzc0xpc3QuYWRkKFwiaHVtYW4tc2NvcmVjYXJkXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIEh1bWFuIExhYmVsIERPTSBFbGVtZW50XG4gICAgICAgIGNvbnN0IGh1bWFuTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBodW1hbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJodW1hbi1sYWJlbFwiKTtcbiAgICAgICAgaHVtYW5MYWJlbC50ZXh0Q29udGVudCA9IFwiSDogXCI7XG5cbiAgICAgICAgLy8gQnVpbGQgSHVtYW4gU2NvcmUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5faHVtYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9odW1hbi5jbGFzc0xpc3QuYWRkKFwiaHVtYW4tc2NvcmVcIik7XG4gICAgICAgIHRoaXMuX2h1bWFuLnRleHRDb250ZW50ID0gMDtcblxuICAgICAgICAvLyBBZGQgQ29tcG9uZW50cyB0byBIdW1hbiBTY29yZWNhcmRcbiAgICAgICAgaHVtYW5TY29yZWNhcmQuYXBwZW5kQ2hpbGQoaHVtYW5MYWJlbCk7XG4gICAgICAgIGh1bWFuU2NvcmVjYXJkLmFwcGVuZENoaWxkKHRoaXMuX2h1bWFuKTtcblxuICAgICAgICAvLyBCdWlsZCBBbGdvcml0aG0gU2NvcmVjYXJkIERPTSBDb21wb25lbnRzXG4gICAgICAgIGNvbnN0IGFsZ29yaXRobVNjb3JlY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFsZ29yaXRobVNjb3JlY2FyZC5jbGFzc0xpc3QuYWRkKFwiYWxnb3JpdGhtLXNjb3JlY2FyZFwiKTtcblxuICAgICAgICAvLyBCdWlsZCBBbGdvcml0aG0gTGFiZWwgRE9NIEVsZW1lbnRcbiAgICAgICAgY29uc3QgYWxnb3JpdGhtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhbGdvcml0aG1MYWJlbC5jbGFzc0xpc3QuYWRkKFwiYWxnb3JpdGhtLWxhYmVsXCIpO1xuICAgICAgICBhbGdvcml0aG1MYWJlbC50ZXh0Q29udGVudCA9IFwiQTogXCI7XG5cbiAgICAgICAgLy8gQnVpbGQgQWxnb3JpdGhtIFNjb3JlIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2FsZ29yaXRobS5jbGFzc0xpc3QuYWRkKFwiYWxnb3JpdGhtLXNjb3JlXCIpO1xuICAgICAgICB0aGlzLl9hbGdvcml0aG0udGV4dENvbnRlbnQgPSAwO1xuXG4gICAgICAgIC8vIEFkZCBDb21wb25lbnRzIHRvIEFsZ29yaXRobSBTY29yZWNhcmRcbiAgICAgICAgYWxnb3JpdGhtU2NvcmVjYXJkLmFwcGVuZENoaWxkKGFsZ29yaXRobUxhYmVsKTtcbiAgICAgICAgYWxnb3JpdGhtU2NvcmVjYXJkLmFwcGVuZENoaWxkKHRoaXMuX2FsZ29yaXRobSk7XG5cbiAgICAgICAgLy8gQnVpbGQgVmVyc3VzIExhYmVsIERPTSBFbGVtZW50XG4gICAgICAgIGNvbnN0IHZzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2c0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJ2ZXJzdXMtbGFiZWxcIik7XG4gICAgICAgIHZzTGFiZWwudGV4dENvbnRlbnQgPSBcIlZTXCI7XG5cbiAgICAgICAgLy8gQWRkIENvbXBvbmVudHMgdG8gU2NvcmVjYXJkXG4gICAgICAgIHRoaXMuX3Njb3JlY2FyZC5hcHBlbmRDaGlsZChodW1hblNjb3JlY2FyZCk7XG4gICAgICAgIHRoaXMuX3Njb3JlY2FyZC5hcHBlbmRDaGlsZCh2c0xhYmVsKTtcbiAgICAgICAgdGhpcy5fc2NvcmVjYXJkLmFwcGVuZENoaWxkKGFsZ29yaXRobVNjb3JlY2FyZCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBHcmlkIE9iamVjdFxuICAgICAgICB0aGlzLl9ncmlkID0gbmV3IEdyaWQodGhpcy4jREVGQVVMVF9HUklEKTtcblxuICAgICAgICAvLyBBcHBlbmQgQWxsIENvbXBvbmVudHMgdG8gTW9kdWxlXG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9ncmlkLm1vZHVsZSk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9zY29yZWNhcmQpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLl91c2VyID0gXCJvXCI7XG4gICAgICAgIHRoaXMuX2dhbWUgPSBuZXcgR2FtZSh0aGlzLiNERUZBVUxUX0dSSUQpO1xuICAgICAgICB0aGlzLl9zY29yZXMgPSB7aHVtYW46IDAsIGFsZ29yaXRobTogMH07XG4gICAgICAgIHRoaXMuX2VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tc2cgPSBcIlwiO1xuXG4gICAgICAgIC8vIFNldCB0aGUgRGVmYXVsdCBUaGVtZVxuICAgICAgICB0aGlzLnNldFRoZW1lKHRoaXMuI1RIRU1FU1swXSk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxuXG4gICAgZ2V0IGdyaWQgKCkgeyByZXR1cm4gdGhpcy5fZ3JpZDsgfVxuXG4gICAgc2V0IGdyaWQgKG9iaikgeyB0aGlzLl9ncmlkID0gb2JqOyB9XG5cbiAgICBnZXQgY29udHJvbGxlciAoKSB7IHJldHVybiB0aGlzLl9jb250cm9sbGVyOyB9XG5cbiAgICBzZXQgY29udHJvbGxlciAoYm9vbCkgeyB0aGlzLl9jb250cm9sbGVyID0gYm9vbDsgfVxuXG4gICAgZ2V0IHVzZXIgKCkgeyByZXR1cm4gdGhpcy5fdXNlcjsgfVxuXG4gICAgc2V0IHVzZXIgKHN0cikgeyB0aGlzLl91c2VyID0gc3RyOyB9XG5cbiAgICBnZXQgZ2FtZSAoKSB7IHJldHVybiB0aGlzLl9nYW1lOyB9XG5cbiAgICBzZXQgZ2FtZSAob2JqKSB7IHRoaXMuX2dhbWUgPSBvYmo7IH1cblxuICAgIGdldCBzY29yZXMgKCkgeyByZXR1cm4gdGhpcy5fc2NvcmVzOyB9XG5cbiAgICBzZXQgc2NvcmVzIChkaWN0KSB7IHRoaXMuX3Njb3JlcyA9IGRpY3Q7IH1cblxuICAgIGdldCBlbmQgKCkgeyByZXR1cm4gdGhpcy5fZW5kOyB9XG5cbiAgICBzZXQgZW5kIChib29sKSB7IHRoaXMuX2VuZCA9IGJvb2w7IH1cblxuICAgIGdldCBtZXNzYWdlICgpIHsgcmV0dXJuIHRoaXMuX21zZzsgfVxuXG4gICAgc2V0IG1lc3NhZ2UgKHN0cikgeyB0aGlzLl9tc2cgPSBzdHI7IH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFRPRE86IFdyaXRlIERlc2NyaXB0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFNjcmVlbiBXaWR0aCAocGl4ZWxzKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgU2NyZWVuIEhlaWdodCAocGl4ZWxzKVxuICAgICAqL1xuICAgIHNldHVwICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIC8vIFNldCBHYW1lIERpbWVuc2lvbnNcbiAgICAgICAgdGhpcy5fbW9kdWxlLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9tb2R1bGUuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgR3JpZCBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGRpbSA9IE1hdGguZmxvb3IoTWF0aC5taW4od2lkdGgsIGhlaWdodCkgKiAwLjgpO1xuICAgICAgICB0aGlzLl9ncmlkLnNldERpbWVuc2lvbnMoZGltKTtcblxuICAgICAgICAvLyBTZXQgU2NvcmVjYXJkIEZvbnQgU2l6ZVxuICAgICAgICB0aGlzLl9zY29yZWNhcmQuc3R5bGUuZm9udFNpemUgPSBgJHtNYXRoLmZsb29yKGRpbSAqIDAuMDcpfXB4YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgTWFya2VyIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEJlZm9yZSB0aGUgR2FtZSBiZWdpbnMsIHRoZSBVc2VyIG11c3Qgc2VsZWN0IHRoZSBtYXJrZXIgdGhleWIgd2FudCB0byBcbiAgICAgKiBwbGF5IHdpdGguXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5vdWdodCBOb3VnaHQgb3IgQ3Jvc3NcbiAgICAgKi9cbiAgICBzZXRNYXJrZXIgKG5vdWdodCkgeyBcbiAgICAgICAgdGhpcy5fdXNlciA9IG5vdWdodDtcbiAgICAgICAgdGhpcy5fZ2FtZS5zZXR1cChub3VnaHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBUaGVtZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIFN0eWxpbmcgdG8gUmVmbGVjdCB0aGUgVGhlbWUgU2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIFRoZW1lIE5hbWVcbiAgICAgKi9cbiAgICBzZXRUaGVtZSAodGhlbWUpIHtcbiAgICAgICAgLy8gR2V0IFJvb3QgRWxlbWVudFxuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LmNsYXNzTmFtZSA9IHRoZW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBBbGdvcml0aG0gTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBQbGF5IFNlbGVjdGVkIEFsZ29yaXRobSdzIE5ldyBNb3ZlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIE1lc3NhZ2UgZm9yIEFsZ29yaXRobSdzIE1vdmVcbiAgICAgKi9cbiAgICBwbGF5QWxnb3JpdGhtTW92ZSAoKSB7XG4gICAgICAgIC8vIEdldCBOZXh0IE1vdmVcbiAgICAgICAgY29uc3QgbW92ZSA9IHRoaXMuX2dhbWUuYWxnb3JpdGhtLnBsYXkodGhpcy5fZ2FtZS5ncmlkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSBEaXNwbGF5XG4gICAgICAgIHRoaXMuX2dyaWQuYWxnb3JpdGhtU2VsZWN0KG1vdmUpO1xuXG4gICAgICAgIC8vIFJldHVybiBNZXNzYWdlIHJlc3VsdGluZyBmcm9tIE1vdmVcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWUuYXR0ZW1wdChtb3ZlLngsIG1vdmUueSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgTWV0aG9kXG4gICAgICogXG4gICAgICogVE9ETzogV3JpdGUgRGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZXNldCAoKSB7XG4gICAgICAgIHRoaXMuX2VuZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhvcml6b250YWwgTW92ZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBUT0RPOiBXcml0ZSBEZXNjcmlwdGlvblxuICAgICAqL1xuICAgIGhvcml6b250YWxNb3ZlIChyaWdodD10cnVlKSB7IHRoaXMuX2dyaWQuaG9yaXpvbnRhbE1vdmUocmlnaHQpOyB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJ0aWNhbCBNb3ZlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFRPRE86IFdyaXRlIERlc2NyaXB0aW9uXG4gICAgICovXG4gICAgdmVydGljYWxNb3ZlICh1cD10cnVlKSB7IHRoaXMuX2dyaWQudmVydGljYWxNb3ZlKHVwKTsgfVxuXG4gICAgLyoqXG4gICAgICogQWNjZXB0IEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBUT0RPOiBXcml0ZSBEZXNjcmlwdGlvblxuICAgICAqL1xuICAgIGFjY2VwdEFjdGlvbiAoKSB7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIEF0dGVtcHQgaXMgVmFsaWRcbiAgICAgICAgY29uc3QgdHVybiA9IHRoaXMuX2dhbWUuZ2V0TWFya2VyKCk7XG4gICAgICAgIHRoaXMuX21zZyA9IHRoaXMuX2dhbWUuYXR0ZW1wdCh0aGlzLl9ncmlkLmN1cnJlbnQueCwgdGhpcy5fZ3JpZC5jdXJyZW50LnkpO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgQXR0ZW1wdCB3YXMgSWxsZWdhbFxuICAgICAgICBpZiAodGhpcy5fbXNnLmluY2x1ZGVzKFwiSWxsZWdhbCBNb3ZlIVwiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBVc2VyIGhhcyBXb25cbiAgICAgICAgaWYgKHRoaXMuX21zZyA9PT0gdGhpcy5fdXNlcikge1xuICAgICAgICAgICAgdGhpcy5fZW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21zZyA9IFwiQ29uZ3JhdHVsYXRpb25zLCB5b3Ugd29uIVwiO1xuICAgICAgICB9IFxuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIERyYXdcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fbXNnID09PSBcIkRyYXchXCIpXG4gICAgICAgICAgICB0aGlzLl9lbmQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgLy8gTWFrZSB0aGUgTW92ZSBvbiB0aGUgR3JpZFxuICAgICAgICB0aGlzLl9ncmlkLmFjY2VwdEFjdGlvbih0dXJuKTtcblxuICAgICAgICAvLyBEb24ndCBhbGxvdyBBbGdvcml0aG0gdG8gTW92ZSBpZiBHYW1lIGlzIE92ZXJcbiAgICAgICAgaWYgKHRoaXMuX2VuZClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIC8vIFByb21wdCBBbGdvcml0aG0gdG8gTW92ZVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9nYW1lLmdyaWQpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21zZyAgPSB0aGlzLnBsYXlBbGdvcml0aG1Nb3ZlKCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIC8vIENoZWsgaWYgQWxnb3JpdGhtIGhhcyBXb25cbiAgICAgICAgaWYgKHRoaXMuX21zZyA9PT0gKHRoaXMuX3VzZXIgPT09IFwib1wiID8gXCJ4XCIgOiBcIm9cIikpIHtcbiAgICAgICAgICAgIHRoaXMuX2VuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tc2cgPSBcIkJhZCBsdWNrLCB0aGUgQWxnb3JpdGhtIGhhcyB3b24hXCI7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgRHJhd1xuICAgICAgICBlbHNlIGlmICh0aGlzLl9tc2cgPT09IFwiRHJhdyFcIilcbiAgICAgICAgICAgIHRoaXMuX2VuZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNsaW5lIEFjdGlvbiBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBUT0RPOiBXcml0ZSBEZXNjcmlwdGlvblxuICAgICAqL1xuICAgIGRlY2xpbmVBY3Rpb24gKCkge31cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdGlvbiBBY3Rpb24gTWV0aG9kXG4gICAgICogXG4gICAgICogVE9ETzogV3JpdGUgRGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBzZWxlY3RBY3Rpb24gKCkge31cbn0iLCJpbXBvcnQgXCIuL2dhbWUtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBHYW1lSW50ZXJmYWNlIGZyb20gXCIuLi9nYW1lLWNoaXAtbW9kdWxlL2dhbWUtaW50ZXJmYWNlLmpzXCI7XG5pbXBvcnQgVFRUTWFuYWdlciBmcm9tIFwiLi9tYWluLW1vZHVsZS90dHQtbWFuYWdlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUVFRHYW1lIGV4dGVuZHMgR2FtZUludGVyZmFjZSB7XG4gICAgI3Nob3dDYWxsYmFjaztcbiAgICAjdGFrZURvd25DYWxsYmFjaztcblxuICAgIGNvbnN0cnVjdG9yICh0aXRsZSkge1xuICAgICAgICBzdXBlcih0aXRsZSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBPYmplY3RzIGZvciB0aGUgVGljLVRhYy1Ub2UgR2FtZVxuICAgICAgICB0aGlzLl90bSA9IG5ldyBUVFRNYW5hZ2VyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNob3cgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBDYWxsYmFjayBNZXRob2RzIGZvciBVcGRhdGluZyB0aGUgR2FtZUNoaXAgRGlzcGxheS5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgc2hvd0NhbGxiYWNrIFNob3cgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgdGFrZURvd25DYWxsYmFjayBUYWtlIERvd24gQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgZGltZW5zaW9uc0NhbGxiYWNrIEdldCBEaW1lbnNpb25zIENhbGxiYWNrXG4gICAgICovXG4gICAgc2V0U2NlbmUgKHNob3dDYWxsYmFjaywgdGFrZURvd25DYWxsYmFjaywgZ2V0RGltZW5zaW9ucykge1xuICAgICAgICAvLyBTZXQgQ2FsbGJhY2sgTWV0aG9kc1xuICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sgPSBzaG93Q2FsbGJhY2s7XG4gICAgICAgIHRoaXMuI3Rha2VEb3duQ2FsbGJhY2sgPSB0YWtlRG93bkNhbGxiYWNrO1xuXG4gICAgICAgIC8vIFNldCBHcmlkIERpbWVuc2lvbnNcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IGdldERpbWVuc2lvbnMoKTtcbiAgICAgICAgdGhpcy5fdG0uc2V0dXAoZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFNldCBHcmlkIG9uIERpc3BsYXlcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX3RtLm1vZHVsZSk7XG5cbiAgICAgICAgLy8gU2hvdyBJbmZvcm1hdGlvbiBhYm91dCB0aGUgVGljLVRhYy1Ub2UgR2FtZVxuICAgICAgICB0aGlzLl90bS5zZXRNYXJrZXIoXCJvXCIpOyAvLyBUT0RPOiBSZXBsYWNlIHdpdGggaW5mbyB3aGVyZSB1c2VyIGNhbiBzZWxlY3QgbWFya2VyXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmlnaHQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFJpZ2h0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICByaWdodENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIEdyaWQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3RtLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl90bS5ob3Jpem9udGFsTW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBVcCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgdXBDYWxsYmFjayAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBHcmlkIE1vdmVtZW50XG4gICAgICAgIGlmICh0aGlzLl90bS5jb250cm9sbGVyKVxuICAgICAgICAgICAgdGhpcy5fdG0udmVydGljYWxNb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGVmdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgTGVmdCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgbGVmdENhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIEdyaWQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3RtLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl90bS5ob3Jpem9udGFsTW92ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG93biBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgRG93biBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgZG93bkNhbGxiYWNrICgpIHtcbiAgICAgICAgLy8gSGFuZGxlIEdyaWQgTW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuX3RtLmNvbnRyb2xsZXIpXG4gICAgICAgICAgICB0aGlzLl90bS52ZXJ0aWNhbE1vdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEEgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBhQ2FsbGJhY2sgKCkge1xuICAgICAgICAvLyBIYW5kbGUgR3JpZCBBY3Rpb25cbiAgICAgICAgaWYgKHRoaXMuX3RtLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIEdhbWUgaXMgT3ZlclxuICAgICAgICAgICAgaWYgKHRoaXMuX3RtLmFjY2VwdEFjdGlvbigpICYmIHRoaXMuX3RtLmVuZCkgeyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgT3ZlciFcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fdG0ubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgLyogVE9ETzogUmFpc2UgSW5mb3JtYXRpb24gYWJvdXQgT3V0Y29tZSBvZiBHYW1lICovIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIYW5kbGUgRXJyb3IgTWVzc2FnZVxuICAgICAgICAgICAgZWxzZSB7IC8qIFRPRE86IFJhaXNlIEVycm9yIGluIFBvcHVwICovIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFNlbGVjdCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzZWxlY3RDYWxsYmFjayAoKSB7fVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==