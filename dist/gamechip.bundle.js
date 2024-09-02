"use strict";
(self["webpackChunkgamechip"] = self["webpackChunkgamechip"] || []).push([["gamechip"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/game-chip-module/console-styling.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/game-chip-module/console-styling.css ***!
  \****************************************************************************************/
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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Merom Sans";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: "Dogica";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.gamechip {
    width: 100vw;
    height: 100vh;
    border-radius: 1.5rem;
    font-family: "Merom Sans";
    background-color: #f2ad26;
}

.gamechip-background { 
    display: flex;
    position: relative;
    padding: 0.3rem;
    background-color: #020100;
    justify-content: center;
    align-items: center;
}

.gamechip-display { 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
}

.gamechip-display, .initial-screen { background-color: #e9f7c2; }

.gamechip-title {
    display: block;
    position: absolute;
    bottom: 1px;
}

.gamechip-title, .initialise-title {
    color: #363b97;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: italic;
    font-weight: bold;
}

.initial-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.initialise-title.roll-down {
    animation-name: rolldown;
    animation-duration: 5s;
}

.initialise-title.roll-up {
    animation-name: rollup;
    animation-duration: 2s;
}

.initial-screen.ready { 
    justify-content: flex-start; 
    gap: 1rem;
}

.available-game {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 0.5rem;
}

.available-game-title {
    font-size: 1rem;
    font-family: "Dogica";
    color: #0f380f;
    text-align: center;
    width: 70%;
}

.initial-cursor.active { animation: blink 0.8s infinite; }

.gamechip-controller {
    margin-bottom: 2rem;
}

.direction-pad {
    grid-area: d-pad;
    display: grid;
    grid-template-areas:
        ". up ."
        "left central right"
        ". down .";
}

[id*="-btn"], #central-pad { 
    border: none;
    background-color: #4d5061; 
}

.direction-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

#up-btn { 
    grid-area: up; 
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
}

#up-arrow {
    width: 0; 
    height: 0; 
    border-left: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    border-bottom: 0.6rem solid #2a2e3d;
}

#right-btn { 
    grid-area: right; 
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
}

.initial-cursor.active, #right-arrow {
    width: 0; 
    height: 0; 
    border-top: 0.6rem solid transparent;
    border-bottom: 0.6rem solid transparent;
    border-left: 0.6rem solid #2a2e3d;
}

#down-btn { 
    grid-area: down; 
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
}

#down-arrow {
    width: 0; 
    height: 0; 
    border-left: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    border-top: 0.6rem solid #2a2e3d;
}

#left-btn { 
    grid-area: left; 
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
}

#left-arrow {
    width: 0; 
    height: 0; 
    border-top: 0.6rem solid transparent;
    border-bottom: 0.6rem solid transparent;
    border-right: 0.6rem solid #2a2e3d;
}

#central-pad { grid-area: central; }

.action-button {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
}

#a-btn { grid-area: a-btn; }

#b-btn { grid-area: b-btn; }

.user-button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
}

.user-button > [class*="label"] { color: #f08d00; }

.user-button > button {
    width: 3rem;
    height: 1rem;
    border-radius: 0.5rem;
}

#start-container { grid-area: start; }

#select-container { grid-area: select; }

@media (orientation: portrait) {
    .gamechip {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .gamechip-background {
        margin-top: 2rem;
        width: 90vw;
        height: 45vh;
    }

    .gamechip-controller {
        width: 90vw;
        height: 35vh;
        display: grid;
        grid-template-areas:
            "d-pad d-pad d-pad d-pad . b-btn"
            "d-pad d-pad d-pad d-pad a-btn ."
            "d-pad d-pad d-pad d-pad . ."
            ". . . start select .";
    }

    .direction-pad {
        margin-right: 2rem;
        margin-bottom: 2rem;
    }
}

@media (orientation: landscape) {
    .gamechip {
        position: absolute;
    }

    .gamechip-background {
        position: relative;
        width: 50vw;
        height: 90vh;
        left: 25vw;
        top: 5vh;
        z-index: 1;
    }

    .gamechip-controller {
        position: absolute;
        top: 2.5vh;
        left: 2.5vw;
        width: 95vw;
        height: 95vh;
        z-index: 0;
        display: grid;
        grid-template-areas:
            ". . . . . . . . . ."
            "d-pad d-pad . . . . . . . ."
            "d-pad d-pad . . . . . . . a-btn"
            ". . . . . . . . . ."
            "start . . . . . . . . b-btn"
            "select . . . . . . . . .";
    }

    .direction-pad {
        width: 9rem;
        height: 9rem;
    }

    .direction-button, #central-pad {
        width: 3rem;
        height: 3rem;
    }
}

@keyframes rolldown {
    0% { translate: 0; }
    100% { translate: 0 400%; }
}

@keyframes rollup {
    0% { translate: 0 400%; }
    100% { translate: 0; }
}

@keyframes blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}`, "",{"version":3,"sources":["webpack://./src/game-chip-module/console-styling.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"Merom Sans\";\n    src: url(\"../fonts/MeromSans-Regular.ttf\");\n}\n\n@font-face {\n    font-family: \"Dogica\";\n    src: url(\"../fonts/dogica.ttf\");\n}\n\n.gamechip {\n    width: 100vw;\n    height: 100vh;\n    border-radius: 1.5rem;\n    font-family: \"Merom Sans\";\n    background-color: #f2ad26;\n}\n\n.gamechip-background { \n    display: flex;\n    position: relative;\n    padding: 0.3rem;\n    background-color: #020100;\n    justify-content: center;\n    align-items: center;\n}\n\n.gamechip-display { \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    height: 90%;\n}\n\n.gamechip-display, .initial-screen { background-color: #e9f7c2; }\n\n.gamechip-title {\n    display: block;\n    position: absolute;\n    bottom: 1px;\n}\n\n.gamechip-title, .initialise-title {\n    color: #363b97;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-style: italic;\n    font-weight: bold;\n}\n\n.initial-screen {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.initialise-title.roll-down {\n    animation-name: rolldown;\n    animation-duration: 5s;\n}\n\n.initialise-title.roll-up {\n    animation-name: rollup;\n    animation-duration: 2s;\n}\n\n.initial-screen.ready { \n    justify-content: flex-start; \n    gap: 1rem;\n}\n\n.available-game {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    gap: 0.5rem;\n}\n\n.available-game-title {\n    font-size: 1rem;\n    font-family: \"Dogica\";\n    color: #0f380f;\n    text-align: center;\n    width: 70%;\n}\n\n.initial-cursor.active { animation: blink 0.8s infinite; }\n\n.gamechip-controller {\n    margin-bottom: 2rem;\n}\n\n.direction-pad {\n    grid-area: d-pad;\n    display: grid;\n    grid-template-areas:\n        \". up .\"\n        \"left central right\"\n        \". down .\";\n}\n\n[id*=\"-btn\"], #central-pad { \n    border: none;\n    background-color: #4d5061; \n}\n\n.direction-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#up-btn { \n    grid-area: up; \n    border-top-left-radius: 0.2rem;\n    border-top-right-radius: 0.2rem;\n}\n\n#up-arrow {\n    width: 0; \n    height: 0; \n    border-left: 0.6rem solid transparent;\n    border-right: 0.6rem solid transparent;\n    border-bottom: 0.6rem solid #2a2e3d;\n}\n\n#right-btn { \n    grid-area: right; \n    border-top-right-radius: 0.2rem;\n    border-bottom-right-radius: 0.2rem;\n}\n\n.initial-cursor.active, #right-arrow {\n    width: 0; \n    height: 0; \n    border-top: 0.6rem solid transparent;\n    border-bottom: 0.6rem solid transparent;\n    border-left: 0.6rem solid #2a2e3d;\n}\n\n#down-btn { \n    grid-area: down; \n    border-bottom-left-radius: 0.2rem;\n    border-bottom-right-radius: 0.2rem;\n}\n\n#down-arrow {\n    width: 0; \n    height: 0; \n    border-left: 0.6rem solid transparent;\n    border-right: 0.6rem solid transparent;\n    border-top: 0.6rem solid #2a2e3d;\n}\n\n#left-btn { \n    grid-area: left; \n    border-top-left-radius: 0.2rem;\n    border-bottom-left-radius: 0.2rem;\n}\n\n#left-arrow {\n    width: 0; \n    height: 0; \n    border-top: 0.6rem solid transparent;\n    border-bottom: 0.6rem solid transparent;\n    border-right: 0.6rem solid #2a2e3d;\n}\n\n#central-pad { grid-area: central; }\n\n.action-button {\n    width: 4rem;\n    height: 4rem;\n    border-radius: 2rem;\n}\n\n#a-btn { grid-area: a-btn; }\n\n#b-btn { grid-area: b-btn; }\n\n.user-button {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    height: 2rem;\n}\n\n.user-button > [class*=\"label\"] { color: #f08d00; }\n\n.user-button > button {\n    width: 3rem;\n    height: 1rem;\n    border-radius: 0.5rem;\n}\n\n#start-container { grid-area: start; }\n\n#select-container { grid-area: select; }\n\n@media (orientation: portrait) {\n    .gamechip {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    .gamechip-background {\n        margin-top: 2rem;\n        width: 90vw;\n        height: 45vh;\n    }\n\n    .gamechip-controller {\n        width: 90vw;\n        height: 35vh;\n        display: grid;\n        grid-template-areas:\n            \"d-pad d-pad d-pad d-pad . b-btn\"\n            \"d-pad d-pad d-pad d-pad a-btn .\"\n            \"d-pad d-pad d-pad d-pad . .\"\n            \". . . start select .\";\n    }\n\n    .direction-pad {\n        margin-right: 2rem;\n        margin-bottom: 2rem;\n    }\n}\n\n@media (orientation: landscape) {\n    .gamechip {\n        position: absolute;\n    }\n\n    .gamechip-background {\n        position: relative;\n        width: 50vw;\n        height: 90vh;\n        left: 25vw;\n        top: 5vh;\n        z-index: 1;\n    }\n\n    .gamechip-controller {\n        position: absolute;\n        top: 2.5vh;\n        left: 2.5vw;\n        width: 95vw;\n        height: 95vh;\n        z-index: 0;\n        display: grid;\n        grid-template-areas:\n            \". . . . . . . . . .\"\n            \"d-pad d-pad . . . . . . . .\"\n            \"d-pad d-pad . . . . . . . a-btn\"\n            \". . . . . . . . . .\"\n            \"start . . . . . . . . b-btn\"\n            \"select . . . . . . . . .\";\n    }\n\n    .direction-pad {\n        width: 9rem;\n        height: 9rem;\n    }\n\n    .direction-button, #central-pad {\n        width: 3rem;\n        height: 3rem;\n    }\n}\n\n@keyframes rolldown {\n    0% { translate: 0; }\n    100% { translate: 0 400%; }\n}\n\n@keyframes rollup {\n    0% { translate: 0 400%; }\n    100% { translate: 0; }\n}\n\n@keyframes blink {\n    0% { opacity: 0; }\n    50% { opacity: 1; }\n    100% { opacity: 0; }\n}"],"sourceRoot":""}]);
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

/***/ "./src/game-chip-module/console-styling.css":
/*!**************************************************!*\
  !*** ./src/game-chip-module/console-styling.css ***!
  \**************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_console_styling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./console-styling.css */ "./node_modules/css-loader/dist/cjs.js!./src/game-chip-module/console-styling.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_console_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_console_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_console_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_console_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/game-chip-module/controller-modules/action-button.js":
/*!******************************************************************!*\
  !*** ./src/game-chip-module/controller-modules/action-button.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionButton)
/* harmony export */ });
class ActionButton {
    #callback;

    /**
     * Action Button Class
     * 
     * Governs the A or B Buttons for the GameChip.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     * @param {string} key Key Press for Button
     */
    constructor (clickCallback, btnType, key) {
        // Generate Action Button DOM Element
        this._button = document.createElement("button");
        this._button.classList.add("action-button");
        this._button.id = btnType.toLowerCase() + "-btn";
        this._button.textContent = btnType;

        // Set Default Callback
        this.#callback = clickCallback;

        // Add Click Event Listener to Button
        this._button.addEventListener("click", (e) => { this.#callback(); })
        
        // Add Key Down Event Listener to Window
        window.addEventListener("keydown", (e) => {
            if (e.key === key)
                this.#callback();
        });
    }

    get button () { return this._button; }

    set button (btn) { this._button = btn; }

    /**
     * Set Callback Method
     * 
     * Set the Callback for the Button to be a different Callback Method.
     * 
     * @callback clickCallback Click Button Callback Method
     */
    setCallback (clickCallback) { this.#callback = clickCallback; }
}

/***/ }),

/***/ "./src/game-chip-module/controller-modules/d-pad.js":
/*!**********************************************************!*\
  !*** ./src/game-chip-module/controller-modules/d-pad.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DirectionPad)
/* harmony export */ });
/* harmony import */ var _direction_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./direction-button.js */ "./src/game-chip-module/controller-modules/direction-button.js");


class DirectionPad {
    /**
     * Direction Pad Class
     * 
     * Governs the Directional Buttons for the GameChip.
     * 
     * @callback upCallback Up Click Callback Method
     * @callback rightCallback Right Click Callback Method
     * @callback downCallback Down Click Callback Method
     * @callback leftCallback Left Click Callback Method
     */
    constructor (upCallback, rightCallback, downCallback, leftCallback) {
        // Generate Pad DOM Element;    
        this._pad = document.createElement("div");
        this._pad.classList.add("direction-pad");

        // Create Directional Buttons
        this._up = new _direction_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](upCallback, "up", "w");
        this._right = new _direction_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](rightCallback, "right", "d");
        this._down = new _direction_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](downCallback, "down", "s");
        this._left = new _direction_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](leftCallback, "left", "a");
        const central = document.createElement("div");
        central.id = ("central-pad");

        // Append Directional Buttons to Pad
        this._pad.appendChild(this._up.button);
        this._pad.appendChild(this._right.button);
        this._pad.appendChild(this._down.button);
        this._pad.appendChild(this._left.button);
        this._pad.appendChild(central);
    }

    get pad () { return this._pad; }

    set pad (elem) { this._pad = elem; }

    /**
     * Set Callbacks Method
     * 
     * For the Direction Pad Buttons, set the different Callback Methods.
     * 
     * @callback upCallback Up Click Callback Method
     * @callback rightCallback Right Click Callback Method
     * @callback downCallback Down Click Callback Method
     * @callback leftCallback Left Click Callback Method
     */
    setCallbacks (upCallback, rightCallback, downCallback, leftCallback) {
        this._up.setCallback(upCallback);
        this._right.setCallback(rightCallback);
        this._down.setCallback(downCallback);
        this._left.setCallback(leftCallback);
    }
}

/***/ }),

/***/ "./src/game-chip-module/controller-modules/direction-button.js":
/*!*********************************************************************!*\
  !*** ./src/game-chip-module/controller-modules/direction-button.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DirectionButton)
/* harmony export */ });
class DirectionButton {
    #callback;

    /**
     * Direction Button Class
     * 
     * Governs a Direction Button for the Direction Pad on the GameChip.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     * @param {string} key Key Press for Button
     */
    constructor (clickCallback, btnType, key) {
        // Generate Direction Button DOM Element
        this._button = document.createElement("button");
        this._button.classList.add("direction-button");
        this._button.id = btnType + "-btn";

        // Generate Arrow DOM Element
        const arrow = document.createElement("div");
        arrow.id = btnType + "-arrow";

        // Append Arrow to Button
        this._button.appendChild(arrow);

        // Set Default Callback
        this.#callback = clickCallback;

        // Add Click Event Listener to Button
        this._button.addEventListener("click", (e) => { this.#callback(); })

        // Add Key Down Event Listener to Window
        window.addEventListener("keydown", (e) => {
            if (e.key === key)
                this.#callback();
        });
    }

    get button () { return this._button; }

    set button (btn) { this._button = btn; }

    /**
     * Set Callback Method
     * 
     * Set the Callback for the Button to be a different Callback Method.
     * 
     * @callback clickCallback Click Button Callback Method
     */
    setCallback (clickCallback) { this.#callback = clickCallback; }
}

/***/ }),

/***/ "./src/game-chip-module/controller-modules/user-button.js":
/*!****************************************************************!*\
  !*** ./src/game-chip-module/controller-modules/user-button.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserButton)
/* harmony export */ });
class UserButton {
    #callback;

    /**
     * User Button Class
     * 
     * Governs the Start or Select Buttons for the GameChip.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     * @param {string} key Key Press for Button
     */
    constructor (clickCallback, btnType, key) {
        // Generate Container DOM Element
        this._button = document.createElement("div");
        this._button.classList.add("user-button");
        this._button.id = btnType.toLowerCase() + "-container";

        // Generate Label DOM Element
        const label = document.createElement("div");
        label.classList.add("user-button-label");
        label.textContent = btnType.toUpperCase();

        // Generate Button DOM Element
        const btn = document.createElement("button");
        btn.id = btnType.toLowerCase() + "-btn";

        // Set Default Callback
        this.#callback = clickCallback;

        // Add Click Event Listener to Button
        btn.addEventListener("click", (e) => { this.#callback(); });

        // Add Key Down Event Listener to Window
        window.addEventListener("keydown", (e) => {
            if (e.key === key)
                this.#callback();
        });

        // Append Objects to Container
        this._button.appendChild(label);
        this._button.appendChild(btn);
    }

    get button () { return this._button; }

    set button (btn) { this._button = btn; }

    /**
     * Set Callback Method
     * 
     * Set the Callback for the Button to be a different Callback Method.
     * 
     * @callback clickCallback Click Button Callback Method
     */
    setCallback (clickCallback) { this.#callback = clickCallback; }
}

/***/ }),

/***/ "./src/game-chip-module/controller.js":
/*!********************************************!*\
  !*** ./src/game-chip-module/controller.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _controller_modules_action_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller-modules/action-button.js */ "./src/game-chip-module/controller-modules/action-button.js");
/* harmony import */ var _controller_modules_d_pad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller-modules/d-pad.js */ "./src/game-chip-module/controller-modules/d-pad.js");
/* harmony import */ var _controller_modules_user_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller-modules/user-button.js */ "./src/game-chip-module/controller-modules/user-button.js");




class Controller {
    /**
     * Controller Class
     * 
     * Governs the GameChip Controller.
     * 
     * @callback upCallback Up Click Callback Method
     * @callback rightCallback Right Click Callback Method
     * @callback downCallback Down Click Callback Method
     * @callback leftCallback Left Click Callback Method
     * @callback aCallback A Click Callback Method
     * @callback bCallback B Click Callback Method
     * @callback startCallback Start Click Callback Method
     * @callback selectCallback Select Click Callback Method
     */
    constructor (
        upCallback, 
        rightCallback, 
        downCallback, 
        leftCallback, 
        aCallback, 
        bCallback, 
        startCallback, 
        selectCallback
    ) {
        // Generate Module DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("gamechip-controller");

        // Create the Direction Pad
        this._dPad = new _controller_modules_d_pad_js__WEBPACK_IMPORTED_MODULE_1__["default"](upCallback, rightCallback, downCallback, leftCallback);

        // Create A & B Buttons
        this._aBtn = new _controller_modules_action_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](aCallback, "A", "k");
        this._bBtn = new _controller_modules_action_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](bCallback, "B", "o");

        // Create Start & Select Buttons
        this._startBtn = new _controller_modules_user_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](startCallback, "Start", " ");
        this._selectBtn = new _controller_modules_user_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](selectCallback, "Select", "Shift");

        // Append Objects to Module
        this._module.appendChild(this._dPad.pad);
        this._module.appendChild(this._aBtn.button);
        this._module.appendChild(this._bBtn.button);
        this._module.appendChild(this._startBtn.button);
        this._module.appendChild(this._selectBtn.button);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Controller Class
     * 
     * For the Controller Buttons, set the different Callback Methods.
     * 
     * @callback upCallback Up Click Callback Method
     * @callback rightCallback Right Click Callback Method
     * @callback downCallback Down Click Callback Method
     * @callback leftCallback Left Click Callback Method
     * @callback aCallback A Click Callback Method
     * @callback bCallback B Click Callback Method
     * @callback startCallback Start Click Callback Method
     * @callback selectCallback Select Click Callback Method
     */
    setCallbacks (
        upCallback, 
        rightCallback, 
        downCallback, 
        leftCallback, 
        aCallback, 
        bCallback, 
        startCallback, 
        selectCallback
    ) {
        this._dPad.setCallbacks(upCallback, rightCallback, downCallback, leftCallback);
        this._aBtn.setCallback(aCallback);
        this._bBtn.setCallback(bCallback);
        this._startBtn.setCallback(startCallback);
        this._selectBtn.setCallback(selectCallback);
    }
}

/***/ }),

/***/ "./src/game-chip-module/display.js":
/*!*****************************************!*\
  !*** ./src/game-chip-module/display.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Display)
/* harmony export */ });
class Display {
    /**
     * Display Class
     * 
     * Governs the GameChip Display.
     */
    constructor () {
        // Generate Background DOM Element
        this._background = document.createElement("div");
        this._background.classList.add("gamechip-background");

        // Generate Display DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("gamechip-display");

        // Generate Title
        const title = document.createElement("div");
        title.classList.add("gamechip-title");
        title.textContent = "GAMECHIP \u00A9";

        // Add Display to Background
        this._background.appendChild(this._module);
        this._background.appendChild(title);
    }

    get background () { return this._background; }

    set background (elem) { this._background = elem; }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    /**
     * Show Method
     * 
     * Update the Display to Show the Desired Element.
     * 
     * @param {*} elem Element to Display
     * @param {boolean} overlay Default is False
     */
    show (elem, overlay=false) {
        if (!overlay) {
            this._module.innerHTML = "";
            this._main = elem;
        }
        this._module.appendChild(elem);
    }

    /**
     * Take Down Method
     * 
     * Update the Display to remove any overlayed element.
     */
    takeDown () {
        this._module.innerHTML = "";
        this._module.appendChild(this._main);
    }

    /**
     * Get Dimensions Method
     * 
     * Retrieves the Screen Width and Height for the Game.
     * 
     * @returns Dictionary of Screen Width and Height
     */
    getDimensions () { return {
        width: this._module.clientWidth,
        height: this._module.clientHeight
    }; }
}

/***/ }),

/***/ "./src/game-chip-module/game-chip.js":
/*!*******************************************!*\
  !*** ./src/game-chip-module/game-chip.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameChip)
/* harmony export */ });
/* harmony import */ var _console_styling_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console-styling.css */ "./src/game-chip-module/console-styling.css");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/game-chip-module/controller.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/game-chip-module/display.js");
/* harmony import */ var _game_interface_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-interface.js */ "./src/game-chip-module/game-interface.js");
/* harmony import */ var _initailiser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initailiser.js */ "./src/game-chip-module/initailiser.js");






class GameChip {
    /**
     * GameChip Class
     * 
     * Console on which a Game can be Played.
     * 
     * @param {Array} games Games List
     */
    constructor (games) {
        // Create GameChip Module DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("gamechip");

        // Initialise Game Variable
        this._games = games;

        // Create Game Display
        this._display = new _display_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this._initialiser = new _initailiser_js__WEBPACK_IMPORTED_MODULE_4__["default"](games, this.#initialiseCallback.bind(this));

        // Create Controller
        this._controller = new _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"](
            this._initialiser.upCallback.bind(this._initialiser),
            this._initialiser.rightCallback.bind(this._initialiser),
            this._initialiser.downCallback.bind(this._initialiser),
            this._initialiser.leftCallback.bind(this._initialiser),
            this._initialiser.aCallback.bind(this._initialiser),
            this._initialiser.bCallback.bind(this._initialiser),
            this._initialiser.startCallback.bind(this._initialiser),
            this._initialiser.selectCallback.bind(this._initialiser)
        );

        // Append Objects to Console
        this._module.appendChild(this._display.background);
        this._module.appendChild(this._controller.module);

        // Initialise Variables
        this._initialised = false;

        // Setup Screen Event Listeners
        window.addEventListener("resize", (e) => {
            if (this._initialised)
                this.play(this._game);
            else
                this.initialise();
        });
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get game () { return this._game; }

    set game (game) { this._game = game; }

    get games () { return this._games; }

    set games (arr) { this._games = arr; }

    /**
     * Play Method
     * 
     * Allow User to Play selected Game.
     */
    play () {
        // Set the Scene for the Game
        this._game.setScene(
            this._display.show.bind(this._display),
            this._display.takeDown.bind(this._display),
            this._display.getDimensions.bind(this._display)
        );
    }

    /**
     * Initialise Method
     * 
     * Initialise GameChip.
     */
    initialise () {
        this._initialiser.setScene(
            this._display.show.bind(this._display),
            this._display.takeDown.bind(this._display),
            this._display.getDimensions.bind(this._display)
        );
    }

    /**
     * Initialise Callback Method
     * 
     * Used by the Initialiser Class for Selecting the Game that the User wants
     * to play.
     * 
     * @param {GameInterface} game Game Selected
     */
    #initialiseCallback (game) {
        // Set Game Variable
        this._game = game;
        this._initialised = true;

        // Set Controller Callbacks
        this._controller.setCallbacks(
            this._game.upCallback.bind(this._game),
            this._game.rightCallback.bind(this._game),
            this._game.downCallback.bind(this._game),
            this._game.leftCallback.bind(this._game),
            this._game.aCallback.bind(this._game),
            this._game.bCallback.bind(this._game),
            this._game.startCallback.bind(this._game),
            this._game.selectCallback.bind(this._game)
        );

        this.play();
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

/***/ "./src/game-chip-module/initailiser.js":
/*!*********************************************!*\
  !*** ./src/game-chip-module/initailiser.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialiser)
/* harmony export */ });
class Initialiser {
    #initialiseCallback;
    #showCallback;

    /**
     * Initialiser Class
     * 
     * The use case for this class is for selecting the game that the user 
     * wants to play.
     * 
     * @param {Array} games List of Games
     * @callback initialiseCallback Initialise Callback Method
     */
    constructor (games, initialiseCallback) {
        // Build Initial Screen DOM Element
        this._screen = document.createElement("div");
        this._screen.classList.add("initial-screen");

        // Build Title DOM Element
        this._title = document.createElement("div");
        this._title.classList.add("initialise-title");
        this._title.textContent = "GAMECHIP";
        this._screen.appendChild(this._title);
        this._title.addEventListener("animationend", (e) => {
            this.#handleAnimationEnd();
        });

        // Initialise Variables
        this._games = games;
        this._options = [];
        this._arrows = [];
        this._ready = false;
        this._current = 0;

        // Setup Options for Game Selection
        this._games.forEach(game => {
            // Build Option DOM Element
            const option = document.createElement("div");
            option.classList.add("available-game");

            // Build Cursor Arrow DOM Element
            const arrow = document.createElement("div");
            arrow.classList.add("initial-cursor");

            // Build Game Title DOM Element
            const label = document.createElement("div");
            label.classList.add("available-game-title")
            label.textContent = game.title;

            // Add Components to Option
            option.appendChild(arrow);
            option.appendChild(label);

            // Add Componets to Corresponding Lists
            this._arrows.push(arrow);
            this._options.push(option);
        });

        // Set Callback Method
        this.#initialiseCallback = initialiseCallback;

        // Roll Down Title
        this.#displayTitle();
    }

    /**
     * Set Show Method
     * 
     * Set the Show Callback Method for Updating the GameChip Display.
     * 
     * @callback showCallback Show Callback
     * @callback takeDownCallback Take Down Callback
     * @callback dimensionsCallback Get Dimensions Callback
     */
    setScene (showCallback, takeDownCallback, getDimensions) {
        // Set Callback Method
        this.#showCallback = showCallback;

        // Set Initial Screen Dimensions
        const dimensions = getDimensions();
        this._screen.style.width = `${dimensions.width}px`;
        this._screen.style.height = `${dimensions.height}px`;

        // Set Title Font Size
        const size = Math.floor(Math.min(dimensions.width, dimensions.height) * 0.1);
        this._title.style.fontSize = `${size}px`;

        // Set Initial Screen on Diplsay
        this.#showCallback(this._screen);
    }

    /**
     * Up Callback Method
     * 
     * Handles the Click of the Up Button on the Direction Pad.
     */
    upCallback () { this.#verticalMove(); }

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
    downCallback () { this.#verticalMove(false); }

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
    aCallback () { 
        if (this._ready)
            this.#initialiseCallback(this._games[this._current]); 
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

    /**
     * Vertical Move Function
     * 
     * Move the Cursor down or up along game options.
     * 
     * @param {boolean} down Default is Downwards
     */
    #verticalMove (down=true) {
        if (this._ready) {
            const curr = this._current + (down ? -1 : 1);
            if (curr < this._games.length && curr >= 0) {
                this._arrows[this._current].classList.remove("active");
                this._current = curr;
                this._arrows[this._current].classList.add("active");
            }
        }
    }

    /**
     * Handle Animaition End Method
     * 
     * For the Ends of Animiations, depening on the animation type, this method
     * will handle what should happen next.
     */
    #handleAnimationEnd () {
        // Handle Roll-Down Animation Complete
        if (this._title.classList.contains("roll-down")) {
            this._title.classList.remove("roll-down");
            this._title.classList.add("roll-up");
        } 
        // Handle Roll-Up Animation Complete
        else if (this._title.classList.contains("roll-up")) {
            this._title.classList.remove("roll-up");
            this.#displayGames();
        }
    }

    /**
     * Display Title Method
     * 
     * Initialise Title Roll Down Display.
     */
    #displayTitle () { this._title.classList.add("roll-down"); }

    /**
     * Display Games Method
     * 
     * Games Display is Ready.
     */
    #displayGames () {
        // Set Variables to Ready
        this._ready = true;
        this._screen.classList.add("ready");

        // Display Games and Initialise Cursor
        this._options.forEach(option => { this._screen.appendChild(option); });
        this._arrows[0].classList.add("active");
    }
}

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/game-chip-module/game-chip.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLHlCQUF5QixNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyx1QkFBdUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLHVCQUF1Qix3QkFBd0IsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyx1QkFBdUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLHlCQUF5QiwwQkFBMEIsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsbUNBQW1DO0FBQzdFO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29uc29sZS1zdHlsaW5nLmNzcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9jb25zb2xlLXN0eWxpbmcuY3NzPzFlZmYiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnRyb2xsZXItbW9kdWxlcy9hY3Rpb24tYnV0dG9uLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29udHJvbGxlci1tb2R1bGVzL2QtcGFkLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29udHJvbGxlci1tb2R1bGVzL2RpcmVjdGlvbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9jb250cm9sbGVyLW1vZHVsZXMvdXNlci1idXR0b24uanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2dhbWUtY2hpcC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2dhbWUtaW50ZXJmYWNlLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvaW5pdGFpbGlzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL01lcm9tU2Fucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2RvZ2ljYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNZXJvbSBTYW5zXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4uZ2FtZWNoaXAge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogXCJNZXJvbSBTYW5zXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyYWQyNjtcbn1cblxuLmdhbWVjaGlwLWJhY2tncm91bmQgeyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDEwMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZWNoaXAtZGlzcGxheSB7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xufVxuXG4uZ2FtZWNoaXAtZGlzcGxheSwgLmluaXRpYWwtc2NyZWVuIHsgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjdjMjsgfVxuXG4uZ2FtZWNoaXAtdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFweDtcbn1cblxuLmdhbWVjaGlwLXRpdGxlLCAuaW5pdGlhbGlzZS10aXRsZSB7XG4gICAgY29sb3I6ICMzNjNiOTc7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5pdGlhbC1zY3JlZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5pdGlhbGlzZS10aXRsZS5yb2xsLWRvd24ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiByb2xsZG93bjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xufVxuXG4uaW5pdGlhbGlzZS10aXRsZS5yb2xsLXVwIHtcbiAgICBhbmltYXRpb24tbmFtZTogcm9sbHVwO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG59XG5cbi5pbml0aWFsLXNjcmVlbi5yZWFkeSB7IFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgXG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uYXZhaWxhYmxlLWdhbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLmF2YWlsYWJsZS1nYW1lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiRG9naWNhXCI7XG4gICAgY29sb3I6ICMwZjM4MGY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbi5pbml0aWFsLWN1cnNvci5hY3RpdmUgeyBhbmltYXRpb246IGJsaW5rIDAuOHMgaW5maW5pdGU7IH1cblxuLmdhbWVjaGlwLWNvbnRyb2xsZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5kaXJlY3Rpb24tcGFkIHtcbiAgICBncmlkLWFyZWE6IGQtcGFkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCIuIHVwIC5cIlxuICAgICAgICBcImxlZnQgY2VudHJhbCByaWdodFwiXG4gICAgICAgIFwiLiBkb3duIC5cIjtcbn1cblxuW2lkKj1cIi1idG5cIl0sICNjZW50cmFsLXBhZCB7IFxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ1MDYxOyBcbn1cblxuLmRpcmVjdGlvbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3VwLWJ0biB7IFxuICAgIGdyaWQtYXJlYTogdXA7IFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMnJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xufVxuXG4jdXAtYXJyb3cge1xuICAgIHdpZHRoOiAwOyBcbiAgICBoZWlnaHQ6IDA7IFxuICAgIGJvcmRlci1sZWZ0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMC42cmVtIHNvbGlkICMyYTJlM2Q7XG59XG5cbiNyaWdodC1idG4geyBcbiAgICBncmlkLWFyZWE6IHJpZ2h0OyBcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjJyZW07XG59XG5cbi5pbml0aWFsLWN1cnNvci5hY3RpdmUsICNyaWdodC1hcnJvdyB7XG4gICAgd2lkdGg6IDA7IFxuICAgIGhlaWdodDogMDsgXG4gICAgYm9yZGVyLXRvcDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMC42cmVtIHNvbGlkICMyYTJlM2Q7XG59XG5cbiNkb3duLWJ0biB7IFxuICAgIGdyaWQtYXJlYTogZG93bjsgXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4ycmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjJyZW07XG59XG5cbiNkb3duLWFycm93IHtcbiAgICB3aWR0aDogMDsgXG4gICAgaGVpZ2h0OiAwOyBcbiAgICBib3JkZXItbGVmdDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xufVxuXG4jbGVmdC1idG4geyBcbiAgICBncmlkLWFyZWE6IGxlZnQ7IFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMnJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjJyZW07XG59XG5cbiNsZWZ0LWFycm93IHtcbiAgICB3aWR0aDogMDsgXG4gICAgaGVpZ2h0OiAwOyBcbiAgICBib3JkZXItdG9wOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMC42cmVtIHNvbGlkICMyYTJlM2Q7XG59XG5cbiNjZW50cmFsLXBhZCB7IGdyaWQtYXJlYTogY2VudHJhbDsgfVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbiNhLWJ0biB7IGdyaWQtYXJlYTogYS1idG47IH1cblxuI2ItYnRuIHsgZ3JpZC1hcmVhOiBiLWJ0bjsgfVxuXG4udXNlci1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDJyZW07XG59XG5cbi51c2VyLWJ1dHRvbiA+IFtjbGFzcyo9XCJsYWJlbFwiXSB7IGNvbG9yOiAjZjA4ZDAwOyB9XG5cbi51c2VyLWJ1dHRvbiA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuI3N0YXJ0LWNvbnRhaW5lciB7IGdyaWQtYXJlYTogc3RhcnQ7IH1cblxuI3NlbGVjdC1jb250YWluZXIgeyBncmlkLWFyZWE6IHNlbGVjdDsgfVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIC5nYW1lY2hpcCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZ2FtZWNoaXAtYmFja2dyb3VuZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICBoZWlnaHQ6IDQ1dmg7XG4gICAgfVxuXG4gICAgLmdhbWVjaGlwLWNvbnRyb2xsZXIge1xuICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJkLXBhZCBkLXBhZCBkLXBhZCBkLXBhZCAuIGItYnRuXCJcbiAgICAgICAgICAgIFwiZC1wYWQgZC1wYWQgZC1wYWQgZC1wYWQgYS1idG4gLlwiXG4gICAgICAgICAgICBcImQtcGFkIGQtcGFkIGQtcGFkIGQtcGFkIC4gLlwiXG4gICAgICAgICAgICBcIi4gLiAuIHN0YXJ0IHNlbGVjdCAuXCI7XG4gICAgfVxuXG4gICAgLmRpcmVjdGlvbi1wYWQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAuZ2FtZWNoaXAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgLmdhbWVjaGlwLWJhY2tncm91bmQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA1MHZ3O1xuICAgICAgICBoZWlnaHQ6IDkwdmg7XG4gICAgICAgIGxlZnQ6IDI1dnc7XG4gICAgICAgIHRvcDogNXZoO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5nYW1lY2hpcC1jb250cm9sbGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIuNXZoO1xuICAgICAgICBsZWZ0OiAyLjV2dztcbiAgICAgICAgd2lkdGg6IDk1dnc7XG4gICAgICAgIGhlaWdodDogOTV2aDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwiLiAuIC4gLiAuIC4gLiAuIC4gLlwiXG4gICAgICAgICAgICBcImQtcGFkIGQtcGFkIC4gLiAuIC4gLiAuIC4gLlwiXG4gICAgICAgICAgICBcImQtcGFkIGQtcGFkIC4gLiAuIC4gLiAuIC4gYS1idG5cIlxuICAgICAgICAgICAgXCIuIC4gLiAuIC4gLiAuIC4gLiAuXCJcbiAgICAgICAgICAgIFwic3RhcnQgLiAuIC4gLiAuIC4gLiAuIGItYnRuXCJcbiAgICAgICAgICAgIFwic2VsZWN0IC4gLiAuIC4gLiAuIC4gLiAuXCI7XG4gICAgfVxuXG4gICAgLmRpcmVjdGlvbi1wYWQge1xuICAgICAgICB3aWR0aDogOXJlbTtcbiAgICAgICAgaGVpZ2h0OiA5cmVtO1xuICAgIH1cblxuICAgIC5kaXJlY3Rpb24tYnV0dG9uLCAjY2VudHJhbC1wYWQge1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyByb2xsZG93biB7XG4gICAgMCUgeyB0cmFuc2xhdGU6IDA7IH1cbiAgICAxMDAlIHsgdHJhbnNsYXRlOiAwIDQwMCU7IH1cbn1cblxuQGtleWZyYW1lcyByb2xsdXAge1xuICAgIDAlIHsgdHJhbnNsYXRlOiAwIDQwMCU7IH1cbiAgICAxMDAlIHsgdHJhbnNsYXRlOiAwOyB9XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDUwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMDsgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29uc29sZS1zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQSxxQ0FBcUMseUJBQXlCLEVBQUU7O0FBRWhFO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkVBQTZFO0lBQzdFLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUEseUJBQXlCLDhCQUE4QixFQUFFOztBQUV6RDtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2I7OztrQkFHYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsc0NBQXNDO0lBQ3RDLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsdUNBQXVDO0lBQ3ZDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxxQ0FBcUM7SUFDckMsc0NBQXNDO0lBQ3RDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsdUNBQXVDO0lBQ3ZDLGtDQUFrQztBQUN0Qzs7QUFFQSxlQUFlLGtCQUFrQixFQUFFOztBQUVuQztJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBLFNBQVMsZ0JBQWdCLEVBQUU7O0FBRTNCLFNBQVMsZ0JBQWdCLEVBQUU7O0FBRTNCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUEsa0NBQWtDLGNBQWMsRUFBRTs7QUFFbEQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQSxtQkFBbUIsZ0JBQWdCLEVBQUU7O0FBRXJDLG9CQUFvQixpQkFBaUIsRUFBRTs7QUFFdkM7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsOEJBQThCO1FBQzlCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiOzs7O2tDQUkwQjtJQUM5Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLFFBQVE7UUFDUixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixhQUFhO1FBQ2I7Ozs7OztzQ0FNOEI7SUFDbEM7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxLQUFLLFlBQVksRUFBRTtJQUNuQixPQUFPLGlCQUFpQixFQUFFO0FBQzlCOztBQUVBO0lBQ0ksS0FBSyxpQkFBaUIsRUFBRTtJQUN4QixPQUFPLFlBQVksRUFBRTtBQUN6Qjs7QUFFQTtJQUNJLEtBQUssVUFBVSxFQUFFO0lBQ2pCLE1BQU0sVUFBVSxFQUFFO0lBQ2xCLE9BQU8sVUFBVSxFQUFFO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1lcm9tIFNhbnNcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvTWVyb21TYW5zLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRvZ2ljYVxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuLi9mb250cy9kb2dpY2EudHRmXFxcIik7XFxufVxcblxcbi5nYW1lY2hpcCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIk1lcm9tIFNhbnNcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJhZDI2O1xcbn1cXG5cXG4uZ2FtZWNoaXAtYmFja2dyb3VuZCB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDEwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lY2hpcC1kaXNwbGF5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuLmdhbWVjaGlwLWRpc3BsYXksIC5pbml0aWFsLXNjcmVlbiB7IGJhY2tncm91bmQtY29sb3I6ICNlOWY3YzI7IH1cXG5cXG4uZ2FtZWNoaXAtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDFweDtcXG59XFxuXFxuLmdhbWVjaGlwLXRpdGxlLCAuaW5pdGlhbGlzZS10aXRsZSB7XFxuICAgIGNvbG9yOiAjMzYzYjk3O1xcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmluaXRpYWwtc2NyZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluaXRpYWxpc2UtdGl0bGUucm9sbC1kb3duIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxkb3duO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzO1xcbn1cXG5cXG4uaW5pdGlhbGlzZS10aXRsZS5yb2xsLXVwIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvbGx1cDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG59XFxuXFxuLmluaXRpYWwtc2NyZWVuLnJlYWR5IHsgXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgXFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmF2YWlsYWJsZS1nYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4uYXZhaWxhYmxlLWdhbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRG9naWNhXFxcIjtcXG4gICAgY29sb3I6ICMwZjM4MGY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmluaXRpYWwtY3Vyc29yLmFjdGl2ZSB7IGFuaW1hdGlvbjogYmxpbmsgMC44cyBpbmZpbml0ZTsgfVxcblxcbi5nYW1lY2hpcC1jb250cm9sbGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmRpcmVjdGlvbi1wYWQge1xcbiAgICBncmlkLWFyZWE6IGQtcGFkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcIi4gdXAgLlxcXCJcXG4gICAgICAgIFxcXCJsZWZ0IGNlbnRyYWwgcmlnaHRcXFwiXFxuICAgICAgICBcXFwiLiBkb3duIC5cXFwiO1xcbn1cXG5cXG5baWQqPVxcXCItYnRuXFxcIl0sICNjZW50cmFsLXBhZCB7IFxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDUwNjE7IFxcbn1cXG5cXG4uZGlyZWN0aW9uLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdXAtYnRuIHsgXFxuICAgIGdyaWQtYXJlYTogdXA7IFxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjJyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbiN1cC1hcnJvdyB7XFxuICAgIHdpZHRoOiAwOyBcXG4gICAgaGVpZ2h0OiAwOyBcXG4gICAgYm9yZGVyLWxlZnQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xcbn1cXG5cXG4jcmlnaHQtYnRuIHsgXFxuICAgIGdyaWQtYXJlYTogcmlnaHQ7IFxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4uaW5pdGlhbC1jdXJzb3IuYWN0aXZlLCAjcmlnaHQtYXJyb3cge1xcbiAgICB3aWR0aDogMDsgXFxuICAgIGhlaWdodDogMDsgXFxuICAgIGJvcmRlci10b3A6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMC42cmVtIHNvbGlkICMyYTJlM2Q7XFxufVxcblxcbiNkb3duLWJ0biB7IFxcbiAgICBncmlkLWFyZWE6IGRvd247IFxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjJyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbiNkb3duLWFycm93IHtcXG4gICAgd2lkdGg6IDA7IFxcbiAgICBoZWlnaHQ6IDA7IFxcbiAgICBib3JkZXItbGVmdDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXRvcDogMC42cmVtIHNvbGlkICMyYTJlM2Q7XFxufVxcblxcbiNsZWZ0LWJ0biB7IFxcbiAgICBncmlkLWFyZWE6IGxlZnQ7IFxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjJyZW07XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuI2xlZnQtYXJyb3cge1xcbiAgICB3aWR0aDogMDsgXFxuICAgIGhlaWdodDogMDsgXFxuICAgIGJvcmRlci10b3A6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xcbn1cXG5cXG4jY2VudHJhbC1wYWQgeyBncmlkLWFyZWE6IGNlbnRyYWw7IH1cXG5cXG4uYWN0aW9uLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbiNhLWJ0biB7IGdyaWQtYXJlYTogYS1idG47IH1cXG5cXG4jYi1idG4geyBncmlkLWFyZWE6IGItYnRuOyB9XFxuXFxuLnVzZXItYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi51c2VyLWJ1dHRvbiA+IFtjbGFzcyo9XFxcImxhYmVsXFxcIl0geyBjb2xvcjogI2YwOGQwMDsgfVxcblxcbi51c2VyLWJ1dHRvbiA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuI3N0YXJ0LWNvbnRhaW5lciB7IGdyaWQtYXJlYTogc3RhcnQ7IH1cXG5cXG4jc2VsZWN0LWNvbnRhaW5lciB7IGdyaWQtYXJlYTogc2VsZWN0OyB9XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcXG4gICAgLmdhbWVjaGlwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAuZ2FtZWNoaXAtYmFja2dyb3VuZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgICAgICBoZWlnaHQ6IDQ1dmg7XFxuICAgIH1cXG5cXG4gICAgLmdhbWVjaGlwLWNvbnRyb2xsZXIge1xcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgICAgICBoZWlnaHQ6IDM1dmg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiZC1wYWQgZC1wYWQgZC1wYWQgZC1wYWQgLiBiLWJ0blxcXCJcXG4gICAgICAgICAgICBcXFwiZC1wYWQgZC1wYWQgZC1wYWQgZC1wYWQgYS1idG4gLlxcXCJcXG4gICAgICAgICAgICBcXFwiZC1wYWQgZC1wYWQgZC1wYWQgZC1wYWQgLiAuXFxcIlxcbiAgICAgICAgICAgIFxcXCIuIC4gLiBzdGFydCBzZWxlY3QgLlxcXCI7XFxuICAgIH1cXG5cXG4gICAgLmRpcmVjdGlvbi1wYWQge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gICAgLmdhbWVjaGlwIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcblxcbiAgICAuZ2FtZWNoaXAtYmFja2dyb3VuZCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogNTB2dztcXG4gICAgICAgIGhlaWdodDogOTB2aDtcXG4gICAgICAgIGxlZnQ6IDI1dnc7XFxuICAgICAgICB0b3A6IDV2aDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgLmdhbWVjaGlwLWNvbnRyb2xsZXIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAyLjV2aDtcXG4gICAgICAgIGxlZnQ6IDIuNXZ3O1xcbiAgICAgICAgd2lkdGg6IDk1dnc7XFxuICAgICAgICBoZWlnaHQ6IDk1dmg7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcIi4gLiAuIC4gLiAuIC4gLiAuIC5cXFwiXFxuICAgICAgICAgICAgXFxcImQtcGFkIGQtcGFkIC4gLiAuIC4gLiAuIC4gLlxcXCJcXG4gICAgICAgICAgICBcXFwiZC1wYWQgZC1wYWQgLiAuIC4gLiAuIC4gLiBhLWJ0blxcXCJcXG4gICAgICAgICAgICBcXFwiLiAuIC4gLiAuIC4gLiAuIC4gLlxcXCJcXG4gICAgICAgICAgICBcXFwic3RhcnQgLiAuIC4gLiAuIC4gLiAuIGItYnRuXFxcIlxcbiAgICAgICAgICAgIFxcXCJzZWxlY3QgLiAuIC4gLiAuIC4gLiAuIC5cXFwiO1xcbiAgICB9XFxuXFxuICAgIC5kaXJlY3Rpb24tcGFkIHtcXG4gICAgICAgIHdpZHRoOiA5cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA5cmVtO1xcbiAgICB9XFxuXFxuICAgIC5kaXJlY3Rpb24tYnV0dG9uLCAjY2VudHJhbC1wYWQge1xcbiAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb2xsZG93biB7XFxuICAgIDAlIHsgdHJhbnNsYXRlOiAwOyB9XFxuICAgIDEwMCUgeyB0cmFuc2xhdGU6IDAgNDAwJTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvbGx1cCB7XFxuICAgIDAlIHsgdHJhbnNsYXRlOiAwIDQwMCU7IH1cXG4gICAgMTAwJSB7IHRyYW5zbGF0ZTogMDsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgIDUwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnNvbGUtc3R5bGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb25zb2xlLXN0eWxpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25CdXR0b24ge1xuICAgICNjYWxsYmFjaztcblxuICAgIC8qKlxuICAgICAqIEFjdGlvbiBCdXR0b24gQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBHb3Zlcm5zIHRoZSBBIG9yIEIgQnV0dG9ucyBmb3IgdGhlIEdhbWVDaGlwLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjbGlja0NhbGxiYWNrIENsaWNrIEJ1dHRvbiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnRuVHlwZSBVc2VyIEJ1dHRvbiBUeXBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgUHJlc3MgZm9yIEJ1dHRvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjbGlja0NhbGxiYWNrLCBidG5UeXBlLCBrZXkpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgQWN0aW9uIEJ1dHRvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9idXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGlvbi1idXR0b25cIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5pZCA9IGJ0blR5cGUudG9Mb3dlckNhc2UoKSArIFwiLWJ0blwiO1xuICAgICAgICB0aGlzLl9idXR0b24udGV4dENvbnRlbnQgPSBidG5UeXBlO1xuXG4gICAgICAgIC8vIFNldCBEZWZhdWx0IENhbGxiYWNrXG4gICAgICAgIHRoaXMuI2NhbGxiYWNrID0gY2xpY2tDYWxsYmFjaztcblxuICAgICAgICAvLyBBZGQgQ2xpY2sgRXZlbnQgTGlzdGVuZXIgdG8gQnV0dG9uXG4gICAgICAgIHRoaXMuX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy4jY2FsbGJhY2soKTsgfSlcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBLZXkgRG93biBFdmVudCBMaXN0ZW5lciB0byBXaW5kb3dcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IGtleSlcbiAgICAgICAgICAgICAgICB0aGlzLiNjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgYnV0dG9uICgpIHsgcmV0dXJuIHRoaXMuX2J1dHRvbjsgfVxuXG4gICAgc2V0IGJ1dHRvbiAoYnRuKSB7IHRoaXMuX2J1dHRvbiA9IGJ0bjsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgQ2FsbGJhY2sgZm9yIHRoZSBCdXR0b24gdG8gYmUgYSBkaWZmZXJlbnQgQ2FsbGJhY2sgTWV0aG9kLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjbGlja0NhbGxiYWNrIENsaWNrIEJ1dHRvbiBDYWxsYmFjayBNZXRob2RcbiAgICAgKi9cbiAgICBzZXRDYWxsYmFjayAoY2xpY2tDYWxsYmFjaykgeyB0aGlzLiNjYWxsYmFjayA9IGNsaWNrQ2FsbGJhY2s7IH1cbn0iLCJpbXBvcnQgRGlyZWN0aW9uQnV0dG9uIGZyb20gXCIuL2RpcmVjdGlvbi1idXR0b24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0aW9uUGFkIHtcbiAgICAvKipcbiAgICAgKiBEaXJlY3Rpb24gUGFkIENsYXNzXG4gICAgICogXG4gICAgICogR292ZXJucyB0aGUgRGlyZWN0aW9uYWwgQnV0dG9ucyBmb3IgdGhlIEdhbWVDaGlwLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayB1cENhbGxiYWNrIFVwIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayByaWdodENhbGxiYWNrIFJpZ2h0IENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBkb3duQ2FsbGJhY2sgRG93biBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgbGVmdENhbGxiYWNrIExlZnQgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHVwQ2FsbGJhY2ssIHJpZ2h0Q2FsbGJhY2ssIGRvd25DYWxsYmFjaywgbGVmdENhbGxiYWNrKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIFBhZCBET00gRWxlbWVudDsgICAgXG4gICAgICAgIHRoaXMuX3BhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3BhZC5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9uLXBhZFwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgRGlyZWN0aW9uYWwgQnV0dG9uc1xuICAgICAgICB0aGlzLl91cCA9IG5ldyBEaXJlY3Rpb25CdXR0b24odXBDYWxsYmFjaywgXCJ1cFwiLCBcIndcIik7XG4gICAgICAgIHRoaXMuX3JpZ2h0ID0gbmV3IERpcmVjdGlvbkJ1dHRvbihyaWdodENhbGxiYWNrLCBcInJpZ2h0XCIsIFwiZFwiKTtcbiAgICAgICAgdGhpcy5fZG93biA9IG5ldyBEaXJlY3Rpb25CdXR0b24oZG93bkNhbGxiYWNrLCBcImRvd25cIiwgXCJzXCIpO1xuICAgICAgICB0aGlzLl9sZWZ0ID0gbmV3IERpcmVjdGlvbkJ1dHRvbihsZWZ0Q2FsbGJhY2ssIFwibGVmdFwiLCBcImFcIik7XG4gICAgICAgIGNvbnN0IGNlbnRyYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZW50cmFsLmlkID0gKFwiY2VudHJhbC1wYWRcIik7XG5cbiAgICAgICAgLy8gQXBwZW5kIERpcmVjdGlvbmFsIEJ1dHRvbnMgdG8gUGFkXG4gICAgICAgIHRoaXMuX3BhZC5hcHBlbmRDaGlsZCh0aGlzLl91cC5idXR0b24pO1xuICAgICAgICB0aGlzLl9wYWQuYXBwZW5kQ2hpbGQodGhpcy5fcmlnaHQuYnV0dG9uKTtcbiAgICAgICAgdGhpcy5fcGFkLmFwcGVuZENoaWxkKHRoaXMuX2Rvd24uYnV0dG9uKTtcbiAgICAgICAgdGhpcy5fcGFkLmFwcGVuZENoaWxkKHRoaXMuX2xlZnQuYnV0dG9uKTtcbiAgICAgICAgdGhpcy5fcGFkLmFwcGVuZENoaWxkKGNlbnRyYWwpO1xuICAgIH1cblxuICAgIGdldCBwYWQgKCkgeyByZXR1cm4gdGhpcy5fcGFkOyB9XG5cbiAgICBzZXQgcGFkIChlbGVtKSB7IHRoaXMuX3BhZCA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBDYWxsYmFja3MgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBEaXJlY3Rpb24gUGFkIEJ1dHRvbnMsIHNldCB0aGUgZGlmZmVyZW50IENhbGxiYWNrIE1ldGhvZHMuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHVwQ2FsbGJhY2sgVXAgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIHJpZ2h0Q2FsbGJhY2sgUmlnaHQgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIGRvd25DYWxsYmFjayBEb3duIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBsZWZ0Q2FsbGJhY2sgTGVmdCBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKi9cbiAgICBzZXRDYWxsYmFja3MgKHVwQ2FsbGJhY2ssIHJpZ2h0Q2FsbGJhY2ssIGRvd25DYWxsYmFjaywgbGVmdENhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX3VwLnNldENhbGxiYWNrKHVwQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLl9yaWdodC5zZXRDYWxsYmFjayhyaWdodENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5fZG93bi5zZXRDYWxsYmFjayhkb3duQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLl9sZWZ0LnNldENhbGxiYWNrKGxlZnRDYWxsYmFjayk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGlvbkJ1dHRvbiB7XG4gICAgI2NhbGxiYWNrO1xuXG4gICAgLyoqXG4gICAgICogRGlyZWN0aW9uIEJ1dHRvbiBDbGFzc1xuICAgICAqIFxuICAgICAqIEdvdmVybnMgYSBEaXJlY3Rpb24gQnV0dG9uIGZvciB0aGUgRGlyZWN0aW9uIFBhZCBvbiB0aGUgR2FtZUNoaXAuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGNsaWNrQ2FsbGJhY2sgQ2xpY2sgQnV0dG9uIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidG5UeXBlIFVzZXIgQnV0dG9uIFR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBQcmVzcyBmb3IgQnV0dG9uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNsaWNrQ2FsbGJhY2ssIGJ0blR5cGUsIGtleSkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBEaXJlY3Rpb24gQnV0dG9uIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9uLWJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uLmlkID0gYnRuVHlwZSArIFwiLWJ0blwiO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIEFycm93IERPTSBFbGVtZW50XG4gICAgICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYXJyb3cuaWQgPSBidG5UeXBlICsgXCItYXJyb3dcIjtcblxuICAgICAgICAvLyBBcHBlbmQgQXJyb3cgdG8gQnV0dG9uXG4gICAgICAgIHRoaXMuX2J1dHRvbi5hcHBlbmRDaGlsZChhcnJvdyk7XG5cbiAgICAgICAgLy8gU2V0IERlZmF1bHQgQ2FsbGJhY2tcbiAgICAgICAgdGhpcy4jY2FsbGJhY2sgPSBjbGlja0NhbGxiYWNrO1xuXG4gICAgICAgIC8vIEFkZCBDbGljayBFdmVudCBMaXN0ZW5lciB0byBCdXR0b25cbiAgICAgICAgdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLiNjYWxsYmFjaygpOyB9KVxuXG4gICAgICAgIC8vIEFkZCBLZXkgRG93biBFdmVudCBMaXN0ZW5lciB0byBXaW5kb3dcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IGtleSlcbiAgICAgICAgICAgICAgICB0aGlzLiNjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgYnV0dG9uICgpIHsgcmV0dXJuIHRoaXMuX2J1dHRvbjsgfVxuXG4gICAgc2V0IGJ1dHRvbiAoYnRuKSB7IHRoaXMuX2J1dHRvbiA9IGJ0bjsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgQ2FsbGJhY2sgZm9yIHRoZSBCdXR0b24gdG8gYmUgYSBkaWZmZXJlbnQgQ2FsbGJhY2sgTWV0aG9kLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjbGlja0NhbGxiYWNrIENsaWNrIEJ1dHRvbiBDYWxsYmFjayBNZXRob2RcbiAgICAgKi9cbiAgICBzZXRDYWxsYmFjayAoY2xpY2tDYWxsYmFjaykgeyB0aGlzLiNjYWxsYmFjayA9IGNsaWNrQ2FsbGJhY2s7IH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQnV0dG9uIHtcbiAgICAjY2FsbGJhY2s7XG5cbiAgICAvKipcbiAgICAgKiBVc2VyIEJ1dHRvbiBDbGFzc1xuICAgICAqIFxuICAgICAqIEdvdmVybnMgdGhlIFN0YXJ0IG9yIFNlbGVjdCBCdXR0b25zIGZvciB0aGUgR2FtZUNoaXAuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGNsaWNrQ2FsbGJhY2sgQ2xpY2sgQnV0dG9uIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidG5UeXBlIFVzZXIgQnV0dG9uIFR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBQcmVzcyBmb3IgQnV0dG9uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNsaWNrQ2FsbGJhY2ssIGJ0blR5cGUsIGtleSkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBDb250YWluZXIgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ1c2VyLWJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uLmlkID0gYnRuVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItY29udGFpbmVyXCI7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgTGFiZWwgRE9NIEVsZW1lbnRcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwidXNlci1idXR0b24tbGFiZWxcIik7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gYnRuVHlwZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIEJ1dHRvbiBET00gRWxlbWVudFxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidG4uaWQgPSBidG5UeXBlLnRvTG93ZXJDYXNlKCkgKyBcIi1idG5cIjtcblxuICAgICAgICAvLyBTZXQgRGVmYXVsdCBDYWxsYmFja1xuICAgICAgICB0aGlzLiNjYWxsYmFjayA9IGNsaWNrQ2FsbGJhY2s7XG5cbiAgICAgICAgLy8gQWRkIENsaWNrIEV2ZW50IExpc3RlbmVyIHRvIEJ1dHRvblxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuI2NhbGxiYWNrKCk7IH0pO1xuXG4gICAgICAgIC8vIEFkZCBLZXkgRG93biBFdmVudCBMaXN0ZW5lciB0byBXaW5kb3dcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IGtleSlcbiAgICAgICAgICAgICAgICB0aGlzLiNjYWxsYmFjaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBcHBlbmQgT2JqZWN0cyB0byBDb250YWluZXJcbiAgICAgICAgdGhpcy5fYnV0dG9uLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgfVxuXG4gICAgZ2V0IGJ1dHRvbiAoKSB7IHJldHVybiB0aGlzLl9idXR0b247IH1cblxuICAgIHNldCBidXR0b24gKGJ0bikgeyB0aGlzLl9idXR0b24gPSBidG47IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgdGhlIENhbGxiYWNrIGZvciB0aGUgQnV0dG9uIHRvIGJlIGEgZGlmZmVyZW50IENhbGxiYWNrIE1ldGhvZC5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgY2xpY2tDYWxsYmFjayBDbGljayBCdXR0b24gQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgc2V0Q2FsbGJhY2sgKGNsaWNrQ2FsbGJhY2spIHsgdGhpcy4jY2FsbGJhY2sgPSBjbGlja0NhbGxiYWNrOyB9XG59IiwiaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwiLi9jb250cm9sbGVyLW1vZHVsZXMvYWN0aW9uLWJ1dHRvbi5qc1wiO1xuaW1wb3J0IERpcmVjdGlvblBhZCBmcm9tIFwiLi9jb250cm9sbGVyLW1vZHVsZXMvZC1wYWQuanNcIjtcbmltcG9ydCBVc2VyQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xsZXItbW9kdWxlcy91c2VyLWJ1dHRvbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiBDb250cm9sbGVyIENsYXNzXG4gICAgICogXG4gICAgICogR292ZXJucyB0aGUgR2FtZUNoaXAgQ29udHJvbGxlci5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgdXBDYWxsYmFjayBVcCBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgcmlnaHRDYWxsYmFjayBSaWdodCBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgZG93bkNhbGxiYWNrIERvd24gQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIGxlZnRDYWxsYmFjayBMZWZ0IENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBhQ2FsbGJhY2sgQSBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgYkNhbGxiYWNrIEIgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIHN0YXJ0Q2FsbGJhY2sgU3RhcnQgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIHNlbGVjdENhbGxiYWNrIFNlbGVjdCBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHVwQ2FsbGJhY2ssIFxuICAgICAgICByaWdodENhbGxiYWNrLCBcbiAgICAgICAgZG93bkNhbGxiYWNrLCBcbiAgICAgICAgbGVmdENhbGxiYWNrLCBcbiAgICAgICAgYUNhbGxiYWNrLCBcbiAgICAgICAgYkNhbGxiYWNrLCBcbiAgICAgICAgc3RhcnRDYWxsYmFjaywgXG4gICAgICAgIHNlbGVjdENhbGxiYWNrXG4gICAgKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIE1vZHVsZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcImdhbWVjaGlwLWNvbnRyb2xsZXJcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBEaXJlY3Rpb24gUGFkXG4gICAgICAgIHRoaXMuX2RQYWQgPSBuZXcgRGlyZWN0aW9uUGFkKHVwQ2FsbGJhY2ssIHJpZ2h0Q2FsbGJhY2ssIGRvd25DYWxsYmFjaywgbGVmdENhbGxiYWNrKTtcblxuICAgICAgICAvLyBDcmVhdGUgQSAmIEIgQnV0dG9uc1xuICAgICAgICB0aGlzLl9hQnRuID0gbmV3IEFjdGlvbkJ1dHRvbihhQ2FsbGJhY2ssIFwiQVwiLCBcImtcIik7XG4gICAgICAgIHRoaXMuX2JCdG4gPSBuZXcgQWN0aW9uQnV0dG9uKGJDYWxsYmFjaywgXCJCXCIsIFwib1wiKTtcblxuICAgICAgICAvLyBDcmVhdGUgU3RhcnQgJiBTZWxlY3QgQnV0dG9uc1xuICAgICAgICB0aGlzLl9zdGFydEJ0biA9IG5ldyBVc2VyQnV0dG9uKHN0YXJ0Q2FsbGJhY2ssIFwiU3RhcnRcIiwgXCIgXCIpO1xuICAgICAgICB0aGlzLl9zZWxlY3RCdG4gPSBuZXcgVXNlckJ1dHRvbihzZWxlY3RDYWxsYmFjaywgXCJTZWxlY3RcIiwgXCJTaGlmdFwiKTtcblxuICAgICAgICAvLyBBcHBlbmQgT2JqZWN0cyB0byBNb2R1bGVcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2RQYWQucGFkKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2FCdG4uYnV0dG9uKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2JCdG4uYnV0dG9uKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX3N0YXJ0QnRuLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9zZWxlY3RCdG4uYnV0dG9uKTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9sbGVyIENsYXNzXG4gICAgICogXG4gICAgICogRm9yIHRoZSBDb250cm9sbGVyIEJ1dHRvbnMsIHNldCB0aGUgZGlmZmVyZW50IENhbGxiYWNrIE1ldGhvZHMuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHVwQ2FsbGJhY2sgVXAgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIHJpZ2h0Q2FsbGJhY2sgUmlnaHQgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIGRvd25DYWxsYmFjayBEb3duIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBsZWZ0Q2FsbGJhY2sgTGVmdCBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgYUNhbGxiYWNrIEEgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIGJDYWxsYmFjayBCIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBzdGFydENhbGxiYWNrIFN0YXJ0IENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBzZWxlY3RDYWxsYmFjayBTZWxlY3QgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgc2V0Q2FsbGJhY2tzIChcbiAgICAgICAgdXBDYWxsYmFjaywgXG4gICAgICAgIHJpZ2h0Q2FsbGJhY2ssIFxuICAgICAgICBkb3duQ2FsbGJhY2ssIFxuICAgICAgICBsZWZ0Q2FsbGJhY2ssIFxuICAgICAgICBhQ2FsbGJhY2ssIFxuICAgICAgICBiQ2FsbGJhY2ssIFxuICAgICAgICBzdGFydENhbGxiYWNrLCBcbiAgICAgICAgc2VsZWN0Q2FsbGJhY2tcbiAgICApIHtcbiAgICAgICAgdGhpcy5fZFBhZC5zZXRDYWxsYmFja3ModXBDYWxsYmFjaywgcmlnaHRDYWxsYmFjaywgZG93bkNhbGxiYWNrLCBsZWZ0Q2FsbGJhY2spO1xuICAgICAgICB0aGlzLl9hQnRuLnNldENhbGxiYWNrKGFDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuX2JCdG4uc2V0Q2FsbGJhY2soYkNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5fc3RhcnRCdG4uc2V0Q2FsbGJhY2soc3RhcnRDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuX3NlbGVjdEJ0bi5zZXRDYWxsYmFjayhzZWxlY3RDYWxsYmFjayk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xuICAgIC8qKlxuICAgICAqIERpc3BsYXkgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBHb3Zlcm5zIHRoZSBHYW1lQ2hpcCBEaXNwbGF5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgQmFja2dyb3VuZCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWNoaXAtYmFja2dyb3VuZFwiKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBEaXNwbGF5IERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX21vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZWNoaXAtZGlzcGxheVwiKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBUaXRsZVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJnYW1lY2hpcC10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkdBTUVDSElQIFxcdTAwQTlcIjtcblxuICAgICAgICAvLyBBZGQgRGlzcGxheSB0byBCYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQuYXBwZW5kQ2hpbGQodGhpcy5fbW9kdWxlKTtcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgfVxuXG4gICAgZ2V0IGJhY2tncm91bmQgKCkgeyByZXR1cm4gdGhpcy5fYmFja2dyb3VuZDsgfVxuXG4gICAgc2V0IGJhY2tncm91bmQgKGVsZW0pIHsgdGhpcy5fYmFja2dyb3VuZCA9IGVsZW07IH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBEaXNwbGF5IHRvIFNob3cgdGhlIERlc2lyZWQgRWxlbWVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGVsZW0gRWxlbWVudCB0byBEaXNwbGF5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBvdmVybGF5IERlZmF1bHQgaXMgRmFsc2VcbiAgICAgKi9cbiAgICBzaG93IChlbGVtLCBvdmVybGF5PWZhbHNlKSB7XG4gICAgICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgICAgICAgdGhpcy5fbW9kdWxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLl9tYWluID0gZWxlbTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZSBEb3duIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgRGlzcGxheSB0byByZW1vdmUgYW55IG92ZXJsYXllZCBlbGVtZW50LlxuICAgICAqL1xuICAgIHRha2VEb3duICgpIHtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9tYWluKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgRGltZW5zaW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIFNjcmVlbiBXaWR0aCBhbmQgSGVpZ2h0IGZvciB0aGUgR2FtZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBEaWN0aW9uYXJ5IG9mIFNjcmVlbiBXaWR0aCBhbmQgSGVpZ2h0XG4gICAgICovXG4gICAgZ2V0RGltZW5zaW9ucyAoKSB7IHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLl9tb2R1bGUuY2xpZW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5fbW9kdWxlLmNsaWVudEhlaWdodFxuICAgIH07IH1cbn0iLCJpbXBvcnQgXCIuL2NvbnNvbGUtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBEaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXkuanNcIjtcbmltcG9ydCBHYW1lSW50ZXJmYWNlIGZyb20gXCIuL2dhbWUtaW50ZXJmYWNlLmpzXCI7XG5pbXBvcnQgSW5pdGlhbGlzZXIgZnJvbSBcIi4vaW5pdGFpbGlzZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNoaXAge1xuICAgIC8qKlxuICAgICAqIEdhbWVDaGlwIENsYXNzXG4gICAgICogXG4gICAgICogQ29uc29sZSBvbiB3aGljaCBhIEdhbWUgY2FuIGJlIFBsYXllZC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBnYW1lcyBHYW1lcyBMaXN0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGdhbWVzKSB7XG4gICAgICAgIC8vIENyZWF0ZSBHYW1lQ2hpcCBNb2R1bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJnYW1lY2hpcFwiKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIEdhbWUgVmFyaWFibGVcbiAgICAgICAgdGhpcy5fZ2FtZXMgPSBnYW1lcztcblxuICAgICAgICAvLyBDcmVhdGUgR2FtZSBEaXNwbGF5XG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXNlciA9IG5ldyBJbml0aWFsaXNlcihnYW1lcywgdGhpcy4jaW5pdGlhbGlzZUNhbGxiYWNrLmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBDb250cm9sbGVyXG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpc2VyLnVwQ2FsbGJhY2suYmluZCh0aGlzLl9pbml0aWFsaXNlciksXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXNlci5yaWdodENhbGxiYWNrLmJpbmQodGhpcy5faW5pdGlhbGlzZXIpLFxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGlzZXIuZG93bkNhbGxiYWNrLmJpbmQodGhpcy5faW5pdGlhbGlzZXIpLFxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGlzZXIubGVmdENhbGxiYWNrLmJpbmQodGhpcy5faW5pdGlhbGlzZXIpLFxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGlzZXIuYUNhbGxiYWNrLmJpbmQodGhpcy5faW5pdGlhbGlzZXIpLFxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGlzZXIuYkNhbGxiYWNrLmJpbmQodGhpcy5faW5pdGlhbGlzZXIpLFxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGlzZXIuc3RhcnRDYWxsYmFjay5iaW5kKHRoaXMuX2luaXRpYWxpc2VyKSxcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpc2VyLnNlbGVjdENhbGxiYWNrLmJpbmQodGhpcy5faW5pdGlhbGlzZXIpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQXBwZW5kIE9iamVjdHMgdG8gQ29uc29sZVxuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fZGlzcGxheS5iYWNrZ3JvdW5kKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2NvbnRyb2xsZXIubW9kdWxlKTtcblxuICAgICAgICAvLyBJbml0aWFsaXNlIFZhcmlhYmxlc1xuICAgICAgICB0aGlzLl9pbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNldHVwIFNjcmVlbiBFdmVudCBMaXN0ZW5lcnNcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbml0aWFsaXNlZClcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXkodGhpcy5fZ2FtZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIGdldCBnYW1lICgpIHsgcmV0dXJuIHRoaXMuX2dhbWU7IH1cblxuICAgIHNldCBnYW1lIChnYW1lKSB7IHRoaXMuX2dhbWUgPSBnYW1lOyB9XG5cbiAgICBnZXQgZ2FtZXMgKCkgeyByZXR1cm4gdGhpcy5fZ2FtZXM7IH1cblxuICAgIHNldCBnYW1lcyAoYXJyKSB7IHRoaXMuX2dhbWVzID0gYXJyOyB9XG5cbiAgICAvKipcbiAgICAgKiBQbGF5IE1ldGhvZFxuICAgICAqIFxuICAgICAqIEFsbG93IFVzZXIgdG8gUGxheSBzZWxlY3RlZCBHYW1lLlxuICAgICAqL1xuICAgIHBsYXkgKCkge1xuICAgICAgICAvLyBTZXQgdGhlIFNjZW5lIGZvciB0aGUgR2FtZVxuICAgICAgICB0aGlzLl9nYW1lLnNldFNjZW5lKFxuICAgICAgICAgICAgdGhpcy5fZGlzcGxheS5zaG93LmJpbmQodGhpcy5fZGlzcGxheSksXG4gICAgICAgICAgICB0aGlzLl9kaXNwbGF5LnRha2VEb3duLmJpbmQodGhpcy5fZGlzcGxheSksXG4gICAgICAgICAgICB0aGlzLl9kaXNwbGF5LmdldERpbWVuc2lvbnMuYmluZCh0aGlzLl9kaXNwbGF5KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgTWV0aG9kXG4gICAgICogXG4gICAgICogSW5pdGlhbGlzZSBHYW1lQ2hpcC5cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlICgpIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZXIuc2V0U2NlbmUoXG4gICAgICAgICAgICB0aGlzLl9kaXNwbGF5LnNob3cuYmluZCh0aGlzLl9kaXNwbGF5KSxcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXkudGFrZURvd24uYmluZCh0aGlzLl9kaXNwbGF5KSxcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXkuZ2V0RGltZW5zaW9ucy5iaW5kKHRoaXMuX2Rpc3BsYXkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZSBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVc2VkIGJ5IHRoZSBJbml0aWFsaXNlciBDbGFzcyBmb3IgU2VsZWN0aW5nIHRoZSBHYW1lIHRoYXQgdGhlIFVzZXIgd2FudHNcbiAgICAgKiB0byBwbGF5LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7R2FtZUludGVyZmFjZX0gZ2FtZSBHYW1lIFNlbGVjdGVkXG4gICAgICovXG4gICAgI2luaXRpYWxpc2VDYWxsYmFjayAoZ2FtZSkge1xuICAgICAgICAvLyBTZXQgR2FtZSBWYXJpYWJsZVxuICAgICAgICB0aGlzLl9nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIFNldCBDb250cm9sbGVyIENhbGxiYWNrc1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyLnNldENhbGxiYWNrcyhcbiAgICAgICAgICAgIHRoaXMuX2dhbWUudXBDYWxsYmFjay5iaW5kKHRoaXMuX2dhbWUpLFxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5yaWdodENhbGxiYWNrLmJpbmQodGhpcy5fZ2FtZSksXG4gICAgICAgICAgICB0aGlzLl9nYW1lLmRvd25DYWxsYmFjay5iaW5kKHRoaXMuX2dhbWUpLFxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5sZWZ0Q2FsbGJhY2suYmluZCh0aGlzLl9nYW1lKSxcbiAgICAgICAgICAgIHRoaXMuX2dhbWUuYUNhbGxiYWNrLmJpbmQodGhpcy5fZ2FtZSksXG4gICAgICAgICAgICB0aGlzLl9nYW1lLmJDYWxsYmFjay5iaW5kKHRoaXMuX2dhbWUpLFxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5zdGFydENhbGxiYWNrLmJpbmQodGhpcy5fZ2FtZSksXG4gICAgICAgICAgICB0aGlzLl9nYW1lLnNlbGVjdENhbGxiYWNrLmJpbmQodGhpcy5fZ2FtZSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUludGVyZmFjZSB7XG4gICAgLyoqXG4gICAgICogR2FtZSBJbnRlcmZhY2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBCYXNlIEdhbWUgQ2xhc3MgdGhhdCBzaG91bGQgYmUgSW5oZXJpdGVkIGJ5IE90aGVyIEdhbWVzIHRvIGJlIFBsYXllZCBvbiBcbiAgICAgKiB0aGUgR2FtZUNoaXAuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIE5hbWUgb2YgdGhlIEdhbWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHsgdGhpcy5fdGl0bGUgPSB0aXRsZTsgfVxuXG4gICAgZ2V0IHRpdGxlICgpIHsgcmV0dXJuIHRoaXMuX3RpdGxlOyB9XG5cbiAgICBzZXQgdGl0bGUgKHN0cikgeyB0aGlzLl90aXRsZTsgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IFNob3cgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBTaG93IENhbGxiYWNrIE1ldGhvZCBmb3IgVXBkYXRpbmcgdGhlIEdhbWVDaGlwIERpc3BsYXlcbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgc2hvd0NhbGxiYWNrIFNob3cgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgdGFrZURvd25DYWxsYmFjayBUYWtlIERvd24gQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgZGltZW5zaW9uc0NhbGxiYWNrIEdldCBEaW1lbnNpb25zIENhbGxiYWNrXG4gICAgICovXG4gICAgc2V0U2NlbmUgKHNob3dDYWxsYmFjaywgdGFrZURvd25DYWxsYmFjaywgZ2V0RGltZW5zaW9ucykge31cblxuICAgIC8qKlxuICAgICAqIFVwIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBVcCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgdXBDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogUmlnaHQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFJpZ2h0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICByaWdodENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBEb3duIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBEb3duIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBkb3duQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIExlZnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIExlZnQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGxlZnRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQSBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQSBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGFDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQiBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGJDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFN0YXJ0IFVzZXIgQnV0dG9uLlxuICAgICAqL1xuICAgIHN0YXJ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgU2VsZWN0IFVzZXIgQnV0dG9uLlxuICAgICAqL1xuICAgIHNlbGVjdENhbGxiYWNrICgpIHt9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdGlhbGlzZXIge1xuICAgICNpbml0aWFsaXNlQ2FsbGJhY2s7XG4gICAgI3Nob3dDYWxsYmFjaztcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VyIENsYXNzXG4gICAgICogXG4gICAgICogVGhlIHVzZSBjYXNlIGZvciB0aGlzIGNsYXNzIGlzIGZvciBzZWxlY3RpbmcgdGhlIGdhbWUgdGhhdCB0aGUgdXNlciBcbiAgICAgKiB3YW50cyB0byBwbGF5LlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGdhbWVzIExpc3Qgb2YgR2FtZXNcbiAgICAgKiBAY2FsbGJhY2sgaW5pdGlhbGlzZUNhbGxiYWNrIEluaXRpYWxpc2UgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGdhbWVzLCBpbml0aWFsaXNlQ2FsbGJhY2spIHtcbiAgICAgICAgLy8gQnVpbGQgSW5pdGlhbCBTY3JlZW4gRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fc2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJpbml0aWFsLXNjcmVlblwiKTtcblxuICAgICAgICAvLyBCdWlsZCBUaXRsZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3RpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbml0aWFsaXNlLXRpdGxlXCIpO1xuICAgICAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IFwiR0FNRUNISVBcIjtcbiAgICAgICAgdGhpcy5fc2NyZWVuLmFwcGVuZENoaWxkKHRoaXMuX3RpdGxlKTtcbiAgICAgICAgdGhpcy5fdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jaGFuZGxlQW5pbWF0aW9uRW5kKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX2dhbWVzID0gZ2FtZXM7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5fYXJyb3dzID0gW107XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSAwO1xuXG4gICAgICAgIC8vIFNldHVwIE9wdGlvbnMgZm9yIEdhbWUgU2VsZWN0aW9uXG4gICAgICAgIHRoaXMuX2dhbWVzLmZvckVhY2goZ2FtZSA9PiB7XG4gICAgICAgICAgICAvLyBCdWlsZCBPcHRpb24gRE9NIEVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcImF2YWlsYWJsZS1nYW1lXCIpO1xuXG4gICAgICAgICAgICAvLyBCdWlsZCBDdXJzb3IgQXJyb3cgRE9NIEVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoXCJpbml0aWFsLWN1cnNvclwiKTtcblxuICAgICAgICAgICAgLy8gQnVpbGQgR2FtZSBUaXRsZSBET00gRWxlbWVudFxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImF2YWlsYWJsZS1nYW1lLXRpdGxlXCIpXG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGdhbWUudGl0bGU7XG5cbiAgICAgICAgICAgIC8vIEFkZCBDb21wb25lbnRzIHRvIE9wdGlvblxuICAgICAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKGFycm93KTtcbiAgICAgICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBDb21wb25ldHMgdG8gQ29ycmVzcG9uZGluZyBMaXN0c1xuICAgICAgICAgICAgdGhpcy5fYXJyb3dzLnB1c2goYXJyb3cpO1xuICAgICAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBDYWxsYmFjayBNZXRob2RcbiAgICAgICAgdGhpcy4jaW5pdGlhbGlzZUNhbGxiYWNrID0gaW5pdGlhbGlzZUNhbGxiYWNrO1xuXG4gICAgICAgIC8vIFJvbGwgRG93biBUaXRsZVxuICAgICAgICB0aGlzLiNkaXNwbGF5VGl0bGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgU2hvdyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgdGhlIFNob3cgQ2FsbGJhY2sgTWV0aG9kIGZvciBVcGRhdGluZyB0aGUgR2FtZUNoaXAgRGlzcGxheS5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgc2hvd0NhbGxiYWNrIFNob3cgQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgdGFrZURvd25DYWxsYmFjayBUYWtlIERvd24gQ2FsbGJhY2tcbiAgICAgKiBAY2FsbGJhY2sgZGltZW5zaW9uc0NhbGxiYWNrIEdldCBEaW1lbnNpb25zIENhbGxiYWNrXG4gICAgICovXG4gICAgc2V0U2NlbmUgKHNob3dDYWxsYmFjaywgdGFrZURvd25DYWxsYmFjaywgZ2V0RGltZW5zaW9ucykge1xuICAgICAgICAvLyBTZXQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICAgIHRoaXMuI3Nob3dDYWxsYmFjayA9IHNob3dDYWxsYmFjaztcblxuICAgICAgICAvLyBTZXQgSW5pdGlhbCBTY3JlZW4gRGltZW5zaW9uc1xuICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gZ2V0RGltZW5zaW9ucygpO1xuICAgICAgICB0aGlzLl9zY3JlZW4uc3R5bGUud2lkdGggPSBgJHtkaW1lbnNpb25zLndpZHRofXB4YDtcbiAgICAgICAgdGhpcy5fc2NyZWVuLnN0eWxlLmhlaWdodCA9IGAke2RpbWVuc2lvbnMuaGVpZ2h0fXB4YDtcblxuICAgICAgICAvLyBTZXQgVGl0bGUgRm9udCBTaXplXG4gICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLmZsb29yKE1hdGgubWluKGRpbWVuc2lvbnMud2lkdGgsIGRpbWVuc2lvbnMuaGVpZ2h0KSAqIDAuMSk7XG4gICAgICAgIHRoaXMuX3RpdGxlLnN0eWxlLmZvbnRTaXplID0gYCR7c2l6ZX1weGA7XG5cbiAgICAgICAgLy8gU2V0IEluaXRpYWwgU2NyZWVuIG9uIERpcGxzYXlcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrKHRoaXMuX3NjcmVlbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXAgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFVwIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICB1cENhbGxiYWNrICgpIHsgdGhpcy4jdmVydGljYWxNb3ZlKCk7IH1cblxuICAgIC8qKlxuICAgICAqIFJpZ2h0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBSaWdodCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgcmlnaHRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogRG93biBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgRG93biBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgZG93bkNhbGxiYWNrICgpIHsgdGhpcy4jdmVydGljYWxNb3ZlKGZhbHNlKTsgfVxuXG4gICAgLyoqXG4gICAgICogTGVmdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgTGVmdCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgbGVmdENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBBIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYUNhbGxiYWNrICgpIHsgXG4gICAgICAgIGlmICh0aGlzLl9yZWFkeSlcbiAgICAgICAgICAgIHRoaXMuI2luaXRpYWxpc2VDYWxsYmFjayh0aGlzLl9nYW1lc1t0aGlzLl9jdXJyZW50XSk7IFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFNlbGVjdCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzZWxlY3RDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogVmVydGljYWwgTW92ZSBGdW5jdGlvblxuICAgICAqIFxuICAgICAqIE1vdmUgdGhlIEN1cnNvciBkb3duIG9yIHVwIGFsb25nIGdhbWUgb3B0aW9ucy5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvd24gRGVmYXVsdCBpcyBEb3dud2FyZHNcbiAgICAgKi9cbiAgICAjdmVydGljYWxNb3ZlIChkb3duPXRydWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3JlYWR5KSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyID0gdGhpcy5fY3VycmVudCArIChkb3duID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGlmIChjdXJyIDwgdGhpcy5fZ2FtZXMubGVuZ3RoICYmIGN1cnIgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Fycm93c1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSBjdXJyO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Fycm93c1t0aGlzLl9jdXJyZW50XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIEFuaW1haXRpb24gRW5kIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgRW5kcyBvZiBBbmltaWF0aW9ucywgZGVwZW5pbmcgb24gdGhlIGFuaW1hdGlvbiB0eXBlLCB0aGlzIG1ldGhvZFxuICAgICAqIHdpbGwgaGFuZGxlIHdoYXQgc2hvdWxkIGhhcHBlbiBuZXh0LlxuICAgICAqL1xuICAgICNoYW5kbGVBbmltYXRpb25FbmQgKCkge1xuICAgICAgICAvLyBIYW5kbGUgUm9sbC1Eb3duIEFuaW1hdGlvbiBDb21wbGV0ZVxuICAgICAgICBpZiAodGhpcy5fdGl0bGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicm9sbC1kb3duXCIpKSB7XG4gICAgICAgICAgICB0aGlzLl90aXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwicm9sbC1kb3duXCIpO1xuICAgICAgICAgICAgdGhpcy5fdGl0bGUuY2xhc3NMaXN0LmFkZChcInJvbGwtdXBcIik7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIEhhbmRsZSBSb2xsLVVwIEFuaW1hdGlvbiBDb21wbGV0ZVxuICAgICAgICBlbHNlIGlmICh0aGlzLl90aXRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyb2xsLXVwXCIpKSB7XG4gICAgICAgICAgICB0aGlzLl90aXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwicm9sbC11cFwiKTtcbiAgICAgICAgICAgIHRoaXMuI2Rpc3BsYXlHYW1lcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBUaXRsZSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBJbml0aWFsaXNlIFRpdGxlIFJvbGwgRG93biBEaXNwbGF5LlxuICAgICAqL1xuICAgICNkaXNwbGF5VGl0bGUgKCkgeyB0aGlzLl90aXRsZS5jbGFzc0xpc3QuYWRkKFwicm9sbC1kb3duXCIpOyB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IEdhbWVzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEdhbWVzIERpc3BsYXkgaXMgUmVhZHkuXG4gICAgICovXG4gICAgI2Rpc3BsYXlHYW1lcyAoKSB7XG4gICAgICAgIC8vIFNldCBWYXJpYWJsZXMgdG8gUmVhZHlcbiAgICAgICAgdGhpcy5fcmVhZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zY3JlZW4uY2xhc3NMaXN0LmFkZChcInJlYWR5XCIpO1xuXG4gICAgICAgIC8vIERpc3BsYXkgR2FtZXMgYW5kIEluaXRpYWxpc2UgQ3Vyc29yXG4gICAgICAgIHRoaXMuX29wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4geyB0aGlzLl9zY3JlZW4uYXBwZW5kQ2hpbGQob3B0aW9uKTsgfSk7XG4gICAgICAgIHRoaXMuX2Fycm93c1swXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=