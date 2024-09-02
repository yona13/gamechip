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
     * TODO: Write Description
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLHlCQUF5QixNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyx1QkFBdUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLHVCQUF1Qix3QkFBd0IsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyx1QkFBdUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLHlCQUF5QiwwQkFBMEIsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLG1DQUFtQztBQUM3RTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnNvbGUtc3R5bGluZy5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29uc29sZS1zdHlsaW5nLmNzcz8xZWZmIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9jb250cm9sbGVyLW1vZHVsZXMvYWN0aW9uLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnRyb2xsZXItbW9kdWxlcy9kLXBhZC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnRyb2xsZXItbW9kdWxlcy9kaXJlY3Rpb24tYnV0dG9uLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29udHJvbGxlci1tb2R1bGVzL3VzZXItYnV0dG9uLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9nYW1lLWNoaXAuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9nYW1lLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2luaXRhaWxpc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9NZXJvbVNhbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9kb2dpY2EudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTWVyb20gU2Fuc1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJEb2dpY2FcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLmdhbWVjaGlwIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiTWVyb20gU2Fuc1wiO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmFkMjY7XG59XG5cbi5nYW1lY2hpcC1iYWNrZ3JvdW5kIHsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjAxMDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWVjaGlwLWRpc3BsYXkgeyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbn1cblxuLmdhbWVjaGlwLWRpc3BsYXksIC5pbml0aWFsLXNjcmVlbiB7IGJhY2tncm91bmQtY29sb3I6ICNlOWY3YzI7IH1cblxuLmdhbWVjaGlwLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxcHg7XG59XG5cbi5nYW1lY2hpcC10aXRsZSwgLmluaXRpYWxpc2UtdGl0bGUge1xuICAgIGNvbG9yOiAjMzYzYjk3O1xuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluaXRpYWwtc2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmluaXRpYWxpc2UtdGl0bGUucm9sbC1kb3duIHtcbiAgICBhbmltYXRpb24tbmFtZTogcm9sbGRvd247XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbn1cblxuLmluaXRpYWxpc2UtdGl0bGUucm9sbC11cCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvbGx1cDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xufVxuXG4uaW5pdGlhbC1zY3JlZW4ucmVhZHkgeyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IFxuICAgIGdhcDogMXJlbTtcbn1cblxuLmF2YWlsYWJsZS1nYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgZ2FwOiAwLjVyZW07XG59XG5cbi5hdmFpbGFibGUtZ2FtZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvZ2ljYVwiO1xuICAgIGNvbG9yOiAjMGYzODBmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4uaW5pdGlhbC1jdXJzb3IuYWN0aXZlIHsgYW5pbWF0aW9uOiBibGluayAwLjhzIGluZmluaXRlOyB9XG5cbi5nYW1lY2hpcC1jb250cm9sbGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uZGlyZWN0aW9uLXBhZCB7XG4gICAgZ3JpZC1hcmVhOiBkLXBhZDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwiLiB1cCAuXCJcbiAgICAgICAgXCJsZWZ0IGNlbnRyYWwgcmlnaHRcIlxuICAgICAgICBcIi4gZG93biAuXCI7XG59XG5cbltpZCo9XCItYnRuXCJdLCAjY2VudHJhbC1wYWQgeyBcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRkNTA2MTsgXG59XG5cbi5kaXJlY3Rpb24tYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiN1cC1idG4geyBcbiAgICBncmlkLWFyZWE6IHVwOyBcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjJyZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMnJlbTtcbn1cblxuI3VwLWFycm93IHtcbiAgICB3aWR0aDogMDsgXG4gICAgaGVpZ2h0OiAwOyBcbiAgICBib3JkZXItbGVmdDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xufVxuXG4jcmlnaHQtYnRuIHsgXG4gICAgZ3JpZC1hcmVhOiByaWdodDsgXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMnJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xufVxuXG4uaW5pdGlhbC1jdXJzb3IuYWN0aXZlLCAjcmlnaHQtYXJyb3cge1xuICAgIHdpZHRoOiAwOyBcbiAgICBoZWlnaHQ6IDA7IFxuICAgIGJvcmRlci10b3A6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xufVxuXG4jZG93bi1idG4geyBcbiAgICBncmlkLWFyZWE6IGRvd247IFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMnJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xufVxuXG4jZG93bi1hcnJvdyB7XG4gICAgd2lkdGg6IDA7IFxuICAgIGhlaWdodDogMDsgXG4gICAgYm9yZGVyLWxlZnQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiAwLjZyZW0gc29saWQgIzJhMmUzZDtcbn1cblxuI2xlZnQtYnRuIHsgXG4gICAgZ3JpZC1hcmVhOiBsZWZ0OyBcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjJyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4ycmVtO1xufVxuXG4jbGVmdC1hcnJvdyB7XG4gICAgd2lkdGg6IDA7IFxuICAgIGhlaWdodDogMDsgXG4gICAgYm9yZGVyLXRvcDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xufVxuXG4jY2VudHJhbC1wYWQgeyBncmlkLWFyZWE6IGNlbnRyYWw7IH1cblxuLmFjdGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuXG4jYS1idG4geyBncmlkLWFyZWE6IGEtYnRuOyB9XG5cbiNiLWJ0biB7IGdyaWQtYXJlYTogYi1idG47IH1cblxuLnVzZXItYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuXG4udXNlci1idXR0b24gPiBbY2xhc3MqPVwibGFiZWxcIl0geyBjb2xvcjogI2YwOGQwMDsgfVxuXG4udXNlci1idXR0b24gPiBidXR0b24ge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbiNzdGFydC1jb250YWluZXIgeyBncmlkLWFyZWE6IHN0YXJ0OyB9XG5cbiNzZWxlY3QtY29udGFpbmVyIHsgZ3JpZC1hcmVhOiBzZWxlY3Q7IH1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAuZ2FtZWNoaXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmdhbWVjaGlwLWJhY2tncm91bmQge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgaGVpZ2h0OiA0NXZoO1xuICAgIH1cblxuICAgIC5nYW1lY2hpcC1jb250cm9sbGVyIHtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgIGhlaWdodDogMzV2aDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwiZC1wYWQgZC1wYWQgZC1wYWQgZC1wYWQgLiBiLWJ0blwiXG4gICAgICAgICAgICBcImQtcGFkIGQtcGFkIGQtcGFkIGQtcGFkIGEtYnRuIC5cIlxuICAgICAgICAgICAgXCJkLXBhZCBkLXBhZCBkLXBhZCBkLXBhZCAuIC5cIlxuICAgICAgICAgICAgXCIuIC4gLiBzdGFydCBzZWxlY3QgLlwiO1xuICAgIH1cblxuICAgIC5kaXJlY3Rpb24tcGFkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgLmdhbWVjaGlwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC5nYW1lY2hpcC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xuICAgICAgICBsZWZ0OiAyNXZ3O1xuICAgICAgICB0b3A6IDV2aDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuZ2FtZWNoaXAtY29udHJvbGxlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyLjV2aDtcbiAgICAgICAgbGVmdDogMi41dnc7XG4gICAgICAgIHdpZHRoOiA5NXZ3O1xuICAgICAgICBoZWlnaHQ6IDk1dmg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcIi4gLiAuIC4gLiAuIC4gLiAuIC5cIlxuICAgICAgICAgICAgXCJkLXBhZCBkLXBhZCAuIC4gLiAuIC4gLiAuIC5cIlxuICAgICAgICAgICAgXCJkLXBhZCBkLXBhZCAuIC4gLiAuIC4gLiAuIGEtYnRuXCJcbiAgICAgICAgICAgIFwiLiAuIC4gLiAuIC4gLiAuIC4gLlwiXG4gICAgICAgICAgICBcInN0YXJ0IC4gLiAuIC4gLiAuIC4gLiBiLWJ0blwiXG4gICAgICAgICAgICBcInNlbGVjdCAuIC4gLiAuIC4gLiAuIC4gLlwiO1xuICAgIH1cblxuICAgIC5kaXJlY3Rpb24tcGFkIHtcbiAgICAgICAgd2lkdGg6IDlyZW07XG4gICAgICAgIGhlaWdodDogOXJlbTtcbiAgICB9XG5cbiAgICAuZGlyZWN0aW9uLWJ1dHRvbiwgI2NlbnRyYWwtcGFkIHtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcm9sbGRvd24ge1xuICAgIDAlIHsgdHJhbnNsYXRlOiAwOyB9XG4gICAgMTAwJSB7IHRyYW5zbGF0ZTogMCA0MDAlOyB9XG59XG5cbkBrZXlmcmFtZXMgcm9sbHVwIHtcbiAgICAwJSB7IHRyYW5zbGF0ZTogMCA0MDAlOyB9XG4gICAgMTAwJSB7IHRyYW5zbGF0ZTogMDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICA1MCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnNvbGUtc3R5bGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQTBDO0FBQzlDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUErQjtBQUNuQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUEscUNBQXFDLHlCQUF5QixFQUFFOztBQUVoRTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLDZFQUE2RTtJQUM3RSxr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QUFFQTtJQUNJLEtBQUssaUJBQWlCLEVBQUU7SUFDeEIsT0FBTyxZQUFZLEVBQUU7QUFDekI7O0FBRUE7SUFDSSxLQUFLLFVBQVUsRUFBRTtJQUNqQixNQUFNLFVBQVUsRUFBRTtJQUNsQixPQUFPLFVBQVUsRUFBRTtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNZXJvbSBTYW5zXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL01lcm9tU2Fucy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEb2dpY2FcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvZG9naWNhLnR0ZlxcXCIpO1xcbn1cXG5cXG4uZ2FtZWNoaXAge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNZXJvbSBTYW5zXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyYWQyNjtcXG59XFxuXFxuLmdhbWVjaGlwLWJhY2tncm91bmQgeyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjAxMDA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZWNoaXAtZGlzcGxheSB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5nYW1lY2hpcC1kaXNwbGF5LCAuaW5pdGlhbC1zY3JlZW4geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmN2MyOyB9XFxuXFxuLmdhbWVjaGlwLXRpdGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxcHg7XFxufVxcblxcbi5nYW1lY2hpcC10aXRsZSwgLmluaXRpYWxpc2UtdGl0bGUge1xcbiAgICBjb2xvcjogIzM2M2I5NztcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pbml0aWFsLXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbml0aWFsaXNlLXRpdGxlLnJvbGwtZG93biB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb2xsZG93bjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcXG59XFxuXFxuLmluaXRpYWxpc2UtdGl0bGUucm9sbC11cCB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByb2xsdXA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxufVxcblxcbi5pbml0aWFsLXNjcmVlbi5yZWFkeSB7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IFxcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5hdmFpbGFibGUtZ2FtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmF2YWlsYWJsZS1nYW1lLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIkRvZ2ljYVxcXCI7XFxuICAgIGNvbG9yOiAjMGYzODBmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbi5pbml0aWFsLWN1cnNvci5hY3RpdmUgeyBhbmltYXRpb246IGJsaW5rIDAuOHMgaW5maW5pdGU7IH1cXG5cXG4uZ2FtZWNoaXAtY29udHJvbGxlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5kaXJlY3Rpb24tcGFkIHtcXG4gICAgZ3JpZC1hcmVhOiBkLXBhZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCIuIHVwIC5cXFwiXFxuICAgICAgICBcXFwibGVmdCBjZW50cmFsIHJpZ2h0XFxcIlxcbiAgICAgICAgXFxcIi4gZG93biAuXFxcIjtcXG59XFxuXFxuW2lkKj1cXFwiLWJ0blxcXCJdLCAjY2VudHJhbC1wYWQgeyBcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ1MDYxOyBcXG59XFxuXFxuLmRpcmVjdGlvbi1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3VwLWJ0biB7IFxcbiAgICBncmlkLWFyZWE6IHVwOyBcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4ycmVtO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4jdXAtYXJyb3cge1xcbiAgICB3aWR0aDogMDsgXFxuICAgIGhlaWdodDogMDsgXFxuICAgIGJvcmRlci1sZWZ0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAwLjZyZW0gc29saWQgIzJhMmUzZDtcXG59XFxuXFxuI3JpZ2h0LWJ0biB7IFxcbiAgICBncmlkLWFyZWE6IHJpZ2h0OyBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuLmluaXRpYWwtY3Vyc29yLmFjdGl2ZSwgI3JpZ2h0LWFycm93IHtcXG4gICAgd2lkdGg6IDA7IFxcbiAgICBoZWlnaHQ6IDA7IFxcbiAgICBib3JkZXItdG9wOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xcbn1cXG5cXG4jZG93bi1idG4geyBcXG4gICAgZ3JpZC1hcmVhOiBkb3duOyBcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4ycmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4jZG93bi1hcnJvdyB7XFxuICAgIHdpZHRoOiAwOyBcXG4gICAgaGVpZ2h0OiAwOyBcXG4gICAgYm9yZGVyLWxlZnQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3A6IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xcbn1cXG5cXG4jbGVmdC1idG4geyBcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0OyBcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4ycmVtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbiNsZWZ0LWFycm93IHtcXG4gICAgd2lkdGg6IDA7IFxcbiAgICBoZWlnaHQ6IDA7IFxcbiAgICBib3JkZXItdG9wOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjZyZW0gc29saWQgIzJhMmUzZDtcXG59XFxuXFxuI2NlbnRyYWwtcGFkIHsgZ3JpZC1hcmVhOiBjZW50cmFsOyB9XFxuXFxuLmFjdGlvbi1idXR0b24ge1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4jYS1idG4geyBncmlkLWFyZWE6IGEtYnRuOyB9XFxuXFxuI2ItYnRuIHsgZ3JpZC1hcmVhOiBiLWJ0bjsgfVxcblxcbi51c2VyLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4udXNlci1idXR0b24gPiBbY2xhc3MqPVxcXCJsYWJlbFxcXCJdIHsgY29sb3I6ICNmMDhkMDA7IH1cXG5cXG4udXNlci1idXR0b24gPiBidXR0b24ge1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbiNzdGFydC1jb250YWluZXIgeyBncmlkLWFyZWE6IHN0YXJ0OyB9XFxuXFxuI3NlbGVjdC1jb250YWluZXIgeyBncmlkLWFyZWE6IHNlbGVjdDsgfVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICAgIC5nYW1lY2hpcCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmdhbWVjaGlwLWJhY2tncm91bmQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA0NXZoO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lY2hpcC1jb250cm9sbGVyIHtcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcImQtcGFkIGQtcGFkIGQtcGFkIGQtcGFkIC4gYi1idG5cXFwiXFxuICAgICAgICAgICAgXFxcImQtcGFkIGQtcGFkIGQtcGFkIGQtcGFkIGEtYnRuIC5cXFwiXFxuICAgICAgICAgICAgXFxcImQtcGFkIGQtcGFkIGQtcGFkIGQtcGFkIC4gLlxcXCJcXG4gICAgICAgICAgICBcXFwiLiAuIC4gc3RhcnQgc2VsZWN0IC5cXFwiO1xcbiAgICB9XFxuXFxuICAgIC5kaXJlY3Rpb24tcGFkIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAgIC5nYW1lY2hpcCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIH1cXG5cXG4gICAgLmdhbWVjaGlwLWJhY2tncm91bmQge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgd2lkdGg6IDUwdnc7XFxuICAgICAgICBoZWlnaHQ6IDkwdmg7XFxuICAgICAgICBsZWZ0OiAyNXZ3O1xcbiAgICAgICAgdG9wOiA1dmg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lY2hpcC1jb250cm9sbGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMi41dmg7XFxuICAgICAgICBsZWZ0OiAyLjV2dztcXG4gICAgICAgIHdpZHRoOiA5NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiA5NXZoO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCIuIC4gLiAuIC4gLiAuIC4gLiAuXFxcIlxcbiAgICAgICAgICAgIFxcXCJkLXBhZCBkLXBhZCAuIC4gLiAuIC4gLiAuIC5cXFwiXFxuICAgICAgICAgICAgXFxcImQtcGFkIGQtcGFkIC4gLiAuIC4gLiAuIC4gYS1idG5cXFwiXFxuICAgICAgICAgICAgXFxcIi4gLiAuIC4gLiAuIC4gLiAuIC5cXFwiXFxuICAgICAgICAgICAgXFxcInN0YXJ0IC4gLiAuIC4gLiAuIC4gLiBiLWJ0blxcXCJcXG4gICAgICAgICAgICBcXFwic2VsZWN0IC4gLiAuIC4gLiAuIC4gLiAuXFxcIjtcXG4gICAgfVxcblxcbiAgICAuZGlyZWN0aW9uLXBhZCB7XFxuICAgICAgICB3aWR0aDogOXJlbTtcXG4gICAgICAgIGhlaWdodDogOXJlbTtcXG4gICAgfVxcblxcbiAgICAuZGlyZWN0aW9uLWJ1dHRvbiwgI2NlbnRyYWwtcGFkIHtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcm9sbGRvd24ge1xcbiAgICAwJSB7IHRyYW5zbGF0ZTogMDsgfVxcbiAgICAxMDAlIHsgdHJhbnNsYXRlOiAwIDQwMCU7IH1cXG59XFxuXFxuQGtleWZyYW1lcyByb2xsdXAge1xcbiAgICAwJSB7IHRyYW5zbGF0ZTogMCA0MDAlOyB9XFxuICAgIDEwMCUgeyB0cmFuc2xhdGU6IDA7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgICA1MCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb25zb2xlLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29uc29sZS1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQnV0dG9uIHtcbiAgICAjY2FsbGJhY2s7XG5cbiAgICAvKipcbiAgICAgKiBBY3Rpb24gQnV0dG9uIENsYXNzXG4gICAgICogXG4gICAgICogR292ZXJucyB0aGUgQSBvciBCIEJ1dHRvbnMgZm9yIHRoZSBHYW1lQ2hpcC5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgY2xpY2tDYWxsYmFjayBDbGljayBCdXR0b24gQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJ0blR5cGUgVXNlciBCdXR0b24gVHlwZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IFByZXNzIGZvciBCdXR0b25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY2xpY2tDYWxsYmFjaywgYnRuVHlwZSwga2V5KSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIEFjdGlvbiBCdXR0b24gRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb24tYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9idXR0b24uaWQgPSBidG5UeXBlLnRvTG93ZXJDYXNlKCkgKyBcIi1idG5cIjtcbiAgICAgICAgdGhpcy5fYnV0dG9uLnRleHRDb250ZW50ID0gYnRuVHlwZTtcblxuICAgICAgICAvLyBTZXQgRGVmYXVsdCBDYWxsYmFja1xuICAgICAgICB0aGlzLiNjYWxsYmFjayA9IGNsaWNrQ2FsbGJhY2s7XG5cbiAgICAgICAgLy8gQWRkIENsaWNrIEV2ZW50IExpc3RlbmVyIHRvIEJ1dHRvblxuICAgICAgICB0aGlzLl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IHRoaXMuI2NhbGxiYWNrKCk7IH0pXG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgS2V5IERvd24gRXZlbnQgTGlzdGVuZXIgdG8gV2luZG93XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBrZXkpXG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGJ1dHRvbiAoKSB7IHJldHVybiB0aGlzLl9idXR0b247IH1cblxuICAgIHNldCBidXR0b24gKGJ0bikgeyB0aGlzLl9idXR0b24gPSBidG47IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgdGhlIENhbGxiYWNrIGZvciB0aGUgQnV0dG9uIHRvIGJlIGEgZGlmZmVyZW50IENhbGxiYWNrIE1ldGhvZC5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgY2xpY2tDYWxsYmFjayBDbGljayBCdXR0b24gQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgc2V0Q2FsbGJhY2sgKGNsaWNrQ2FsbGJhY2spIHsgdGhpcy4jY2FsbGJhY2sgPSBjbGlja0NhbGxiYWNrOyB9XG59IiwiaW1wb3J0IERpcmVjdGlvbkJ1dHRvbiBmcm9tIFwiLi9kaXJlY3Rpb24tYnV0dG9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGlvblBhZCB7XG4gICAgLyoqXG4gICAgICogRGlyZWN0aW9uIFBhZCBDbGFzc1xuICAgICAqIFxuICAgICAqIEdvdmVybnMgdGhlIERpcmVjdGlvbmFsIEJ1dHRvbnMgZm9yIHRoZSBHYW1lQ2hpcC5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgdXBDYWxsYmFjayBVcCBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgcmlnaHRDYWxsYmFjayBSaWdodCBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgZG93bkNhbGxiYWNrIERvd24gQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIGxlZnRDYWxsYmFjayBMZWZ0IENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICh1cENhbGxiYWNrLCByaWdodENhbGxiYWNrLCBkb3duQ2FsbGJhY2ssIGxlZnRDYWxsYmFjaykge1xuICAgICAgICAvLyBHZW5lcmF0ZSBQYWQgRE9NIEVsZW1lbnQ7ICAgIFxuICAgICAgICB0aGlzLl9wYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9wYWQuY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvbi1wYWRcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIERpcmVjdGlvbmFsIEJ1dHRvbnNcbiAgICAgICAgdGhpcy5fdXAgPSBuZXcgRGlyZWN0aW9uQnV0dG9uKHVwQ2FsbGJhY2ssIFwidXBcIiwgXCJ3XCIpO1xuICAgICAgICB0aGlzLl9yaWdodCA9IG5ldyBEaXJlY3Rpb25CdXR0b24ocmlnaHRDYWxsYmFjaywgXCJyaWdodFwiLCBcImRcIik7XG4gICAgICAgIHRoaXMuX2Rvd24gPSBuZXcgRGlyZWN0aW9uQnV0dG9uKGRvd25DYWxsYmFjaywgXCJkb3duXCIsIFwic1wiKTtcbiAgICAgICAgdGhpcy5fbGVmdCA9IG5ldyBEaXJlY3Rpb25CdXR0b24obGVmdENhbGxiYWNrLCBcImxlZnRcIiwgXCJhXCIpO1xuICAgICAgICBjb25zdCBjZW50cmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VudHJhbC5pZCA9IChcImNlbnRyYWwtcGFkXCIpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBEaXJlY3Rpb25hbCBCdXR0b25zIHRvIFBhZFxuICAgICAgICB0aGlzLl9wYWQuYXBwZW5kQ2hpbGQodGhpcy5fdXAuYnV0dG9uKTtcbiAgICAgICAgdGhpcy5fcGFkLmFwcGVuZENoaWxkKHRoaXMuX3JpZ2h0LmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX3BhZC5hcHBlbmRDaGlsZCh0aGlzLl9kb3duLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX3BhZC5hcHBlbmRDaGlsZCh0aGlzLl9sZWZ0LmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX3BhZC5hcHBlbmRDaGlsZChjZW50cmFsKTtcbiAgICB9XG5cbiAgICBnZXQgcGFkICgpIHsgcmV0dXJuIHRoaXMuX3BhZDsgfVxuXG4gICAgc2V0IHBhZCAoZWxlbSkgeyB0aGlzLl9wYWQgPSBlbGVtOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgQ2FsbGJhY2tzIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEZvciB0aGUgRGlyZWN0aW9uIFBhZCBCdXR0b25zLCBzZXQgdGhlIGRpZmZlcmVudCBDYWxsYmFjayBNZXRob2RzLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayB1cENhbGxiYWNrIFVwIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayByaWdodENhbGxiYWNrIFJpZ2h0IENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBkb3duQ2FsbGJhY2sgRG93biBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgbGVmdENhbGxiYWNrIExlZnQgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgc2V0Q2FsbGJhY2tzICh1cENhbGxiYWNrLCByaWdodENhbGxiYWNrLCBkb3duQ2FsbGJhY2ssIGxlZnRDYWxsYmFjaykge1xuICAgICAgICB0aGlzLl91cC5zZXRDYWxsYmFjayh1cENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5fcmlnaHQuc2V0Q2FsbGJhY2socmlnaHRDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuX2Rvd24uc2V0Q2FsbGJhY2soZG93bkNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5fbGVmdC5zZXRDYWxsYmFjayhsZWZ0Q2FsbGJhY2spO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3Rpb25CdXR0b24ge1xuICAgICNjYWxsYmFjaztcblxuICAgIC8qKlxuICAgICAqIERpcmVjdGlvbiBCdXR0b24gQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBHb3Zlcm5zIGEgRGlyZWN0aW9uIEJ1dHRvbiBmb3IgdGhlIERpcmVjdGlvbiBQYWQgb24gdGhlIEdhbWVDaGlwLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjbGlja0NhbGxiYWNrIENsaWNrIEJ1dHRvbiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnRuVHlwZSBVc2VyIEJ1dHRvbiBUeXBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgUHJlc3MgZm9yIEJ1dHRvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjbGlja0NhbGxiYWNrLCBidG5UeXBlLCBrZXkpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgRGlyZWN0aW9uIEJ1dHRvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9idXR0b24uY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvbi1idXR0b25cIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5pZCA9IGJ0blR5cGUgKyBcIi1idG5cIjtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBBcnJvdyBET00gRWxlbWVudFxuICAgICAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFycm93LmlkID0gYnRuVHlwZSArIFwiLWFycm93XCI7XG5cbiAgICAgICAgLy8gQXBwZW5kIEFycm93IHRvIEJ1dHRvblxuICAgICAgICB0aGlzLl9idXR0b24uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuXG4gICAgICAgIC8vIFNldCBEZWZhdWx0IENhbGxiYWNrXG4gICAgICAgIHRoaXMuI2NhbGxiYWNrID0gY2xpY2tDYWxsYmFjaztcblxuICAgICAgICAvLyBBZGQgQ2xpY2sgRXZlbnQgTGlzdGVuZXIgdG8gQnV0dG9uXG4gICAgICAgIHRoaXMuX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgdGhpcy4jY2FsbGJhY2soKTsgfSlcblxuICAgICAgICAvLyBBZGQgS2V5IERvd24gRXZlbnQgTGlzdGVuZXIgdG8gV2luZG93XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBrZXkpXG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGJ1dHRvbiAoKSB7IHJldHVybiB0aGlzLl9idXR0b247IH1cblxuICAgIHNldCBidXR0b24gKGJ0bikgeyB0aGlzLl9idXR0b24gPSBidG47IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBTZXQgdGhlIENhbGxiYWNrIGZvciB0aGUgQnV0dG9uIHRvIGJlIGEgZGlmZmVyZW50IENhbGxiYWNrIE1ldGhvZC5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgY2xpY2tDYWxsYmFjayBDbGljayBCdXR0b24gQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgc2V0Q2FsbGJhY2sgKGNsaWNrQ2FsbGJhY2spIHsgdGhpcy4jY2FsbGJhY2sgPSBjbGlja0NhbGxiYWNrOyB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckJ1dHRvbiB7XG4gICAgI2NhbGxiYWNrO1xuXG4gICAgLyoqXG4gICAgICogVXNlciBCdXR0b24gQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBHb3Zlcm5zIHRoZSBTdGFydCBvciBTZWxlY3QgQnV0dG9ucyBmb3IgdGhlIEdhbWVDaGlwLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjbGlja0NhbGxiYWNrIENsaWNrIEJ1dHRvbiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnRuVHlwZSBVc2VyIEJ1dHRvbiBUeXBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgUHJlc3MgZm9yIEJ1dHRvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjbGlja0NhbGxiYWNrLCBidG5UeXBlLCBrZXkpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgQ29udGFpbmVyIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidXNlci1idXR0b25cIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5pZCA9IGJ0blR5cGUudG9Mb3dlckNhc2UoKSArIFwiLWNvbnRhaW5lclwiO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIExhYmVsIERPTSBFbGVtZW50XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInVzZXItYnV0dG9uLWxhYmVsXCIpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGJ0blR5cGUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBCdXR0b24gRE9NIEVsZW1lbnRcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLmlkID0gYnRuVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItYnRuXCI7XG5cbiAgICAgICAgLy8gU2V0IERlZmF1bHQgQ2FsbGJhY2tcbiAgICAgICAgdGhpcy4jY2FsbGJhY2sgPSBjbGlja0NhbGxiYWNrO1xuXG4gICAgICAgIC8vIEFkZCBDbGljayBFdmVudCBMaXN0ZW5lciB0byBCdXR0b25cbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyB0aGlzLiNjYWxsYmFjaygpOyB9KTtcblxuICAgICAgICAvLyBBZGQgS2V5IERvd24gRXZlbnQgTGlzdGVuZXIgdG8gV2luZG93XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBrZXkpXG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIE9iamVjdHMgdG8gQ29udGFpbmVyXG4gICAgICAgIHRoaXMuX2J1dHRvbi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cblxuICAgIGdldCBidXR0b24gKCkgeyByZXR1cm4gdGhpcy5fYnV0dG9uOyB9XG5cbiAgICBzZXQgYnV0dG9uIChidG4pIHsgdGhpcy5fYnV0dG9uID0gYnRuOyB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogU2V0IHRoZSBDYWxsYmFjayBmb3IgdGhlIEJ1dHRvbiB0byBiZSBhIGRpZmZlcmVudCBDYWxsYmFjayBNZXRob2QuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGNsaWNrQ2FsbGJhY2sgQ2xpY2sgQnV0dG9uIENhbGxiYWNrIE1ldGhvZFxuICAgICAqL1xuICAgIHNldENhbGxiYWNrIChjbGlja0NhbGxiYWNrKSB7IHRoaXMuI2NhbGxiYWNrID0gY2xpY2tDYWxsYmFjazsgfVxufSIsImltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIi4vY29udHJvbGxlci1tb2R1bGVzL2FjdGlvbi1idXR0b24uanNcIjtcbmltcG9ydCBEaXJlY3Rpb25QYWQgZnJvbSBcIi4vY29udHJvbGxlci1tb2R1bGVzL2QtcGFkLmpzXCI7XG5pbXBvcnQgVXNlckJ1dHRvbiBmcm9tIFwiLi9jb250cm9sbGVyLW1vZHVsZXMvdXNlci1idXR0b24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgLyoqXG4gICAgICogQ29udHJvbGxlciBDbGFzc1xuICAgICAqIFxuICAgICAqIEdvdmVybnMgdGhlIEdhbWVDaGlwIENvbnRyb2xsZXIuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHVwQ2FsbGJhY2sgVXAgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIHJpZ2h0Q2FsbGJhY2sgUmlnaHQgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIGRvd25DYWxsYmFjayBEb3duIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBsZWZ0Q2FsbGJhY2sgTGVmdCBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgYUNhbGxiYWNrIEEgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIGJDYWxsYmFjayBCIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBzdGFydENhbGxiYWNrIFN0YXJ0IENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBzZWxlY3RDYWxsYmFjayBTZWxlY3QgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICB1cENhbGxiYWNrLCBcbiAgICAgICAgcmlnaHRDYWxsYmFjaywgXG4gICAgICAgIGRvd25DYWxsYmFjaywgXG4gICAgICAgIGxlZnRDYWxsYmFjaywgXG4gICAgICAgIGFDYWxsYmFjaywgXG4gICAgICAgIGJDYWxsYmFjaywgXG4gICAgICAgIHN0YXJ0Q2FsbGJhY2ssIFxuICAgICAgICBzZWxlY3RDYWxsYmFja1xuICAgICkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBNb2R1bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJnYW1lY2hpcC1jb250cm9sbGVyXCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgRGlyZWN0aW9uIFBhZFxuICAgICAgICB0aGlzLl9kUGFkID0gbmV3IERpcmVjdGlvblBhZCh1cENhbGxiYWNrLCByaWdodENhbGxiYWNrLCBkb3duQ2FsbGJhY2ssIGxlZnRDYWxsYmFjayk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIEEgJiBCIEJ1dHRvbnNcbiAgICAgICAgdGhpcy5fYUJ0biA9IG5ldyBBY3Rpb25CdXR0b24oYUNhbGxiYWNrLCBcIkFcIiwgXCJrXCIpO1xuICAgICAgICB0aGlzLl9iQnRuID0gbmV3IEFjdGlvbkJ1dHRvbihiQ2FsbGJhY2ssIFwiQlwiLCBcIm9cIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFN0YXJ0ICYgU2VsZWN0IEJ1dHRvbnNcbiAgICAgICAgdGhpcy5fc3RhcnRCdG4gPSBuZXcgVXNlckJ1dHRvbihzdGFydENhbGxiYWNrLCBcIlN0YXJ0XCIsIFwiIFwiKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0QnRuID0gbmV3IFVzZXJCdXR0b24oc2VsZWN0Q2FsbGJhY2ssIFwiU2VsZWN0XCIsIFwiU2hpZnRcIik7XG5cbiAgICAgICAgLy8gQXBwZW5kIE9iamVjdHMgdG8gTW9kdWxlXG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9kUGFkLnBhZCk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9hQnRuLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9iQnRuLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9zdGFydEJ0bi5idXR0b24pO1xuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fc2VsZWN0QnRuLmJ1dHRvbik7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxuXG4gICAgLyoqXG4gICAgICogQ29udHJvbGxlciBDbGFzc1xuICAgICAqIFxuICAgICAqIEZvciB0aGUgQ29udHJvbGxlciBCdXR0b25zLCBzZXQgdGhlIGRpZmZlcmVudCBDYWxsYmFjayBNZXRob2RzLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayB1cENhbGxiYWNrIFVwIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayByaWdodENhbGxiYWNrIFJpZ2h0IENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBkb3duQ2FsbGJhY2sgRG93biBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgbGVmdENhbGxiYWNrIExlZnQgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIGFDYWxsYmFjayBBIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBiQ2FsbGJhY2sgQiBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgc3RhcnRDYWxsYmFjayBTdGFydCBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgc2VsZWN0Q2FsbGJhY2sgU2VsZWN0IENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqL1xuICAgIHNldENhbGxiYWNrcyAoXG4gICAgICAgIHVwQ2FsbGJhY2ssIFxuICAgICAgICByaWdodENhbGxiYWNrLCBcbiAgICAgICAgZG93bkNhbGxiYWNrLCBcbiAgICAgICAgbGVmdENhbGxiYWNrLCBcbiAgICAgICAgYUNhbGxiYWNrLCBcbiAgICAgICAgYkNhbGxiYWNrLCBcbiAgICAgICAgc3RhcnRDYWxsYmFjaywgXG4gICAgICAgIHNlbGVjdENhbGxiYWNrXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2RQYWQuc2V0Q2FsbGJhY2tzKHVwQ2FsbGJhY2ssIHJpZ2h0Q2FsbGJhY2ssIGRvd25DYWxsYmFjaywgbGVmdENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5fYUJ0bi5zZXRDYWxsYmFjayhhQ2FsbGJhY2spO1xuICAgICAgICB0aGlzLl9iQnRuLnNldENhbGxiYWNrKGJDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuX3N0YXJ0QnRuLnNldENhbGxiYWNrKHN0YXJ0Q2FsbGJhY2spO1xuICAgICAgICB0aGlzLl9zZWxlY3RCdG4uc2V0Q2FsbGJhY2soc2VsZWN0Q2FsbGJhY2spO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IENsYXNzXG4gICAgICogXG4gICAgICogR292ZXJucyB0aGUgR2FtZUNoaXAgRGlzcGxheS5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIEJhY2tncm91bmQgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImdhbWVjaGlwLWJhY2tncm91bmRcIik7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgRGlzcGxheSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcImdhbWVjaGlwLWRpc3BsYXlcIik7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgVGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZWNoaXAtdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJHQU1FQ0hJUCBcXHUwMEE5XCI7XG5cbiAgICAgICAgLy8gQWRkIERpc3BsYXkgdG8gQmFja2dyb3VuZFxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHRoaXMuX21vZHVsZSk7XG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIH1cblxuICAgIGdldCBiYWNrZ3JvdW5kICgpIHsgcmV0dXJuIHRoaXMuX2JhY2tncm91bmQ7IH1cblxuICAgIHNldCBiYWNrZ3JvdW5kIChlbGVtKSB7IHRoaXMuX2JhY2tncm91bmQgPSBlbGVtOyB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgRGlzcGxheSB0byBTaG93IHRoZSBEZXNpcmVkIEVsZW1lbnQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHsqfSBlbGVtIEVsZW1lbnQgdG8gRGlzcGxheVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3ZlcmxheSBEZWZhdWx0IGlzIEZhbHNlXG4gICAgICovXG4gICAgc2hvdyAoZWxlbSwgb3ZlcmxheT1mYWxzZSkge1xuICAgICAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX21vZHVsZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5fbWFpbiA9IGVsZW07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRha2UgRG93biBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBVcGRhdGUgdGhlIERpc3BsYXkgdG8gcmVtb3ZlIGFueSBvdmVybGF5ZWQgZWxlbWVudC5cbiAgICAgKi9cbiAgICB0YWtlRG93biAoKSB7XG4gICAgICAgIHRoaXMuX21vZHVsZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQodGhpcy5fbWFpbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IERpbWVuc2lvbnMgTWV0aG9kXG4gICAgICogXG4gICAgICogUmV0cmlldmVzIHRoZSBTY3JlZW4gV2lkdGggYW5kIEhlaWdodCBmb3IgdGhlIEdhbWUuXG4gICAgICogXG4gICAgICogQHJldHVybnMgRGljdGlvbmFyeSBvZiBTY3JlZW4gV2lkdGggYW5kIEhlaWdodFxuICAgICAqL1xuICAgIGdldERpbWVuc2lvbnMgKCkgeyByZXR1cm4ge1xuICAgICAgICB3aWR0aDogdGhpcy5fbW9kdWxlLmNsaWVudFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuX21vZHVsZS5jbGllbnRIZWlnaHRcbiAgICB9OyB9XG59IiwiaW1wb3J0IFwiLi9jb25zb2xlLXN0eWxpbmcuY3NzXCI7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9kaXNwbGF5LmpzXCI7XG5pbXBvcnQgR2FtZUludGVyZmFjZSBmcm9tIFwiLi9nYW1lLWludGVyZmFjZS5qc1wiO1xuaW1wb3J0IEluaXRpYWxpc2VyIGZyb20gXCIuL2luaXRhaWxpc2VyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDaGlwIHtcbiAgICAvKipcbiAgICAgKiBHYW1lQ2hpcCBDbGFzc1xuICAgICAqIFxuICAgICAqIENvbnNvbGUgb24gd2hpY2ggYSBHYW1lIGNhbiBiZSBQbGF5ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtBcnJheX0gZ2FtZXMgR2FtZXMgTGlzdFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChnYW1lcykge1xuICAgICAgICAvLyBDcmVhdGUgR2FtZUNoaXAgTW9kdWxlIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX21vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZWNoaXBcIik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBHYW1lIFZhcmlhYmxlXG4gICAgICAgIHRoaXMuX2dhbWVzID0gZ2FtZXM7XG5cbiAgICAgICAgLy8gQ3JlYXRlIEdhbWUgRGlzcGxheVxuICAgICAgICB0aGlzLl9kaXNwbGF5ID0gbmV3IERpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZXIgPSBuZXcgSW5pdGlhbGlzZXIoZ2FtZXMsIHRoaXMuI2luaXRpYWxpc2VDYWxsYmFjay5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBDcmVhdGUgQ29udHJvbGxlclxuICAgICAgICB0aGlzLl9jb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXNlci51cENhbGxiYWNrLmJpbmQodGhpcy5faW5pdGlhbGlzZXIpLFxuICAgICAgICAgICAgdGhpcy5faW5pdGlhbGlzZXIucmlnaHRDYWxsYmFjay5iaW5kKHRoaXMuX2luaXRpYWxpc2VyKSxcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpc2VyLmRvd25DYWxsYmFjay5iaW5kKHRoaXMuX2luaXRpYWxpc2VyKSxcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpc2VyLmxlZnRDYWxsYmFjay5iaW5kKHRoaXMuX2luaXRpYWxpc2VyKSxcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpc2VyLmFDYWxsYmFjay5iaW5kKHRoaXMuX2luaXRpYWxpc2VyKSxcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpc2VyLmJDYWxsYmFjay5iaW5kKHRoaXMuX2luaXRpYWxpc2VyKSxcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpc2VyLnN0YXJ0Q2FsbGJhY2suYmluZCh0aGlzLl9pbml0aWFsaXNlciksXG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXNlci5zZWxlY3RDYWxsYmFjay5iaW5kKHRoaXMuX2luaXRpYWxpc2VyKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEFwcGVuZCBPYmplY3RzIHRvIENvbnNvbGVcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2Rpc3BsYXkuYmFja2dyb3VuZCk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9jb250cm9sbGVyLm1vZHVsZSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5faW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTZXR1cCBTY3JlZW4gRXZlbnQgTGlzdGVuZXJzXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5pdGlhbGlzZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KHRoaXMuX2dhbWUpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgZ2FtZSAoKSB7IHJldHVybiB0aGlzLl9nYW1lOyB9XG5cbiAgICBzZXQgZ2FtZSAoZ2FtZSkgeyB0aGlzLl9nYW1lID0gZ2FtZTsgfVxuXG4gICAgZ2V0IGdhbWVzICgpIHsgcmV0dXJuIHRoaXMuX2dhbWVzOyB9XG5cbiAgICBzZXQgZ2FtZXMgKGFycikgeyB0aGlzLl9nYW1lcyA9IGFycjsgfVxuXG4gICAgLyoqXG4gICAgICogUGxheSBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBBbGxvdyBVc2VyIHRvIFBsYXkgc2VsZWN0ZWQgR2FtZS5cbiAgICAgKi9cbiAgICBwbGF5ICgpIHtcbiAgICAgICAgLy8gU2V0IHRoZSBTY2VuZSBmb3IgdGhlIEdhbWVcbiAgICAgICAgdGhpcy5fZ2FtZS5zZXRTY2VuZShcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXkuc2hvdy5iaW5kKHRoaXMuX2Rpc3BsYXkpLFxuICAgICAgICAgICAgdGhpcy5fZGlzcGxheS50YWtlRG93bi5iaW5kKHRoaXMuX2Rpc3BsYXkpLFxuICAgICAgICAgICAgdGhpcy5fZGlzcGxheS5nZXREaW1lbnNpb25zLmJpbmQodGhpcy5fZGlzcGxheSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEluaXRpYWxpc2UgR2FtZUNoaXAuXG4gICAgICovXG4gICAgaW5pdGlhbGlzZSAoKSB7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpc2VyLnNldFNjZW5lKFxuICAgICAgICAgICAgdGhpcy5fZGlzcGxheS5zaG93LmJpbmQodGhpcy5fZGlzcGxheSksXG4gICAgICAgICAgICB0aGlzLl9kaXNwbGF5LnRha2VEb3duLmJpbmQodGhpcy5fZGlzcGxheSksXG4gICAgICAgICAgICB0aGlzLl9kaXNwbGF5LmdldERpbWVuc2lvbnMuYmluZCh0aGlzLl9kaXNwbGF5KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogVXNlZCBieSB0aGUgSW5pdGlhbGlzZXIgQ2xhc3MgZm9yIFNlbGVjdGluZyB0aGUgR2FtZSB0aGF0IHRoZSBVc2VyIHdhbnRzXG4gICAgICogdG8gcGxheS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0dhbWVJbnRlcmZhY2V9IGdhbWUgR2FtZSBTZWxlY3RlZFxuICAgICAqL1xuICAgICNpbml0aWFsaXNlQ2FsbGJhY2sgKGdhbWUpIHtcbiAgICAgICAgLy8gU2V0IEdhbWUgVmFyaWFibGVcbiAgICAgICAgdGhpcy5fZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpc2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBTZXQgQ29udHJvbGxlciBDYWxsYmFja3NcbiAgICAgICAgdGhpcy5fY29udHJvbGxlci5zZXRDYWxsYmFja3MoXG4gICAgICAgICAgICB0aGlzLl9nYW1lLnVwQ2FsbGJhY2suYmluZCh0aGlzLl9nYW1lKSxcbiAgICAgICAgICAgIHRoaXMuX2dhbWUucmlnaHRDYWxsYmFjay5iaW5kKHRoaXMuX2dhbWUpLFxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5kb3duQ2FsbGJhY2suYmluZCh0aGlzLl9nYW1lKSxcbiAgICAgICAgICAgIHRoaXMuX2dhbWUubGVmdENhbGxiYWNrLmJpbmQodGhpcy5fZ2FtZSksXG4gICAgICAgICAgICB0aGlzLl9nYW1lLmFDYWxsYmFjay5iaW5kKHRoaXMuX2dhbWUpLFxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5iQ2FsbGJhY2suYmluZCh0aGlzLl9nYW1lKSxcbiAgICAgICAgICAgIHRoaXMuX2dhbWUuc3RhcnRDYWxsYmFjay5iaW5kKHRoaXMuX2dhbWUpLFxuICAgICAgICAgICAgdGhpcy5fZ2FtZS5zZWxlY3RDYWxsYmFjay5iaW5kKHRoaXMuX2dhbWUpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVJbnRlcmZhY2Uge1xuICAgIC8qKlxuICAgICAqIEdhbWUgSW50ZXJmYWNlIENsYXNzXG4gICAgICogXG4gICAgICogQmFzZSBHYW1lIENsYXNzIHRoYXQgc2hvdWxkIGJlIEluaGVyaXRlZCBieSBPdGhlciBHYW1lcyB0byBiZSBQbGF5ZWQgb24gXG4gICAgICogdGhlIEdhbWVDaGlwLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBOYW1lIG9mIHRoZSBHYW1lXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHRpdGxlKSB7IHRoaXMuX3RpdGxlID0gdGl0bGU7IH1cblxuICAgIGdldCB0aXRsZSAoKSB7IHJldHVybiB0aGlzLl90aXRsZTsgfVxuXG4gICAgc2V0IHRpdGxlIChzdHIpIHsgdGhpcy5fdGl0bGU7IH1cblxuICAgIC8qKlxuICAgICAqIFNldCBTaG93IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgU2hvdyBDYWxsYmFjayBNZXRob2QgZm9yIFVwZGF0aW5nIHRoZSBHYW1lQ2hpcCBEaXNwbGF5XG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHNob3dDYWxsYmFjayBTaG93IENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIHRha2VEb3duQ2FsbGJhY2sgVGFrZSBEb3duIENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIGRpbWVuc2lvbnNDYWxsYmFjayBHZXQgRGltZW5zaW9ucyBDYWxsYmFja1xuICAgICAqL1xuICAgIHNldFNjZW5lIChzaG93Q2FsbGJhY2ssIHRha2VEb3duQ2FsbGJhY2ssIGdldERpbWVuc2lvbnMpIHt9XG5cbiAgICAvKipcbiAgICAgKiBVcCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgVXAgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHVwQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFJpZ2h0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBSaWdodCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgcmlnaHRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogRG93biBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgRG93biBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgZG93bkNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBMZWZ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBMZWZ0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBsZWZ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEEgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEEgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBhQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFNlbGVjdCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzZWxlY3RDYWxsYmFjayAoKSB7fVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRpYWxpc2VyIHtcbiAgICAjaW5pdGlhbGlzZUNhbGxiYWNrO1xuICAgICNzaG93Q2FsbGJhY2s7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlciBDbGFzc1xuICAgICAqIFxuICAgICAqIFRPRE86IFdyaXRlIERlc2NyaXB0aW9uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtBcnJheX0gZ2FtZXMgTGlzdCBvZiBHYW1lc1xuICAgICAqIEBjYWxsYmFjayBpbml0aWFsaXNlQ2FsbGJhY2sgSW5pdGlhbGlzZSBDYWxsYmFjayBNZXRob2RcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoZ2FtZXMsIGluaXRpYWxpc2VDYWxsYmFjaykge1xuICAgICAgICAvLyBCdWlsZCBJbml0aWFsIFNjcmVlbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9zY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9zY3JlZW4uY2xhc3NMaXN0LmFkZChcImluaXRpYWwtc2NyZWVuXCIpO1xuXG4gICAgICAgIC8vIEJ1aWxkIFRpdGxlIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fdGl0bGUuY2xhc3NMaXN0LmFkZChcImluaXRpYWxpc2UtdGl0bGVcIik7XG4gICAgICAgIHRoaXMuX3RpdGxlLnRleHRDb250ZW50ID0gXCJHQU1FQ0hJUFwiO1xuICAgICAgICB0aGlzLl9zY3JlZW4uYXBwZW5kQ2hpbGQodGhpcy5fdGl0bGUpO1xuICAgICAgICB0aGlzLl90aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNoYW5kbGVBbmltYXRpb25FbmQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBWYXJpYWJsZXNcbiAgICAgICAgdGhpcy5fZ2FtZXMgPSBnYW1lcztcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLl9hcnJvd3MgPSBbXTtcbiAgICAgICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IDA7XG5cbiAgICAgICAgLy8gU2V0dXAgT3B0aW9ucyBmb3IgR2FtZSBTZWxlY3Rpb25cbiAgICAgICAgdGhpcy5fZ2FtZXMuZm9yRWFjaChnYW1lID0+IHtcbiAgICAgICAgICAgIC8vIEJ1aWxkIE9wdGlvbiBET00gRWxlbWVudFxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwiYXZhaWxhYmxlLWdhbWVcIik7XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIEN1cnNvciBBcnJvdyBET00gRWxlbWVudFxuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcImluaXRpYWwtY3Vyc29yXCIpO1xuXG4gICAgICAgICAgICAvLyBCdWlsZCBHYW1lIFRpdGxlIERPTSBFbGVtZW50XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiYXZhaWxhYmxlLWdhbWUtdGl0bGVcIilcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gZ2FtZS50aXRsZTtcblxuICAgICAgICAgICAgLy8gQWRkIENvbXBvbmVudHMgdG8gT3B0aW9uXG4gICAgICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuICAgICAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICAgICAgLy8gQWRkIENvbXBvbmV0cyB0byBDb3JyZXNwb25kaW5nIExpc3RzXG4gICAgICAgICAgICB0aGlzLl9hcnJvd3MucHVzaChhcnJvdyk7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IENhbGxiYWNrIE1ldGhvZFxuICAgICAgICB0aGlzLiNpbml0aWFsaXNlQ2FsbGJhY2sgPSBpbml0aWFsaXNlQ2FsbGJhY2s7XG5cbiAgICAgICAgLy8gUm9sbCBEb3duIFRpdGxlXG4gICAgICAgIHRoaXMuI2Rpc3BsYXlUaXRsZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBTaG93IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgU2hvdyBDYWxsYmFjayBNZXRob2QgZm9yIFVwZGF0aW5nIHRoZSBHYW1lQ2hpcCBEaXNwbGF5LlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBzaG93Q2FsbGJhY2sgU2hvdyBDYWxsYmFja1xuICAgICAqIEBjYWxsYmFjayB0YWtlRG93bkNhbGxiYWNrIFRha2UgRG93biBDYWxsYmFja1xuICAgICAqIEBjYWxsYmFjayBkaW1lbnNpb25zQ2FsbGJhY2sgR2V0IERpbWVuc2lvbnMgQ2FsbGJhY2tcbiAgICAgKi9cbiAgICBzZXRTY2VuZSAoc2hvd0NhbGxiYWNrLCB0YWtlRG93bkNhbGxiYWNrLCBnZXREaW1lbnNpb25zKSB7XG4gICAgICAgIC8vIFNldCBDYWxsYmFjayBNZXRob2RcbiAgICAgICAgdGhpcy4jc2hvd0NhbGxiYWNrID0gc2hvd0NhbGxiYWNrO1xuXG4gICAgICAgIC8vIFNldCBJbml0aWFsIFNjcmVlbiBEaW1lbnNpb25zXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBnZXREaW1lbnNpb25zKCk7XG4gICAgICAgIHRoaXMuX3NjcmVlbi5zdHlsZS53aWR0aCA9IGAke2RpbWVuc2lvbnMud2lkdGh9cHhgO1xuICAgICAgICB0aGlzLl9zY3JlZW4uc3R5bGUuaGVpZ2h0ID0gYCR7ZGltZW5zaW9ucy5oZWlnaHR9cHhgO1xuXG4gICAgICAgIC8vIFNldCBUaXRsZSBGb250IFNpemVcbiAgICAgICAgY29uc3Qgc2l6ZSA9IE1hdGguZmxvb3IoTWF0aC5taW4oZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpICogMC4xKTtcbiAgICAgICAgdGhpcy5fdGl0bGUuc3R5bGUuZm9udFNpemUgPSBgJHtzaXplfXB4YDtcblxuICAgICAgICAvLyBTZXQgSW5pdGlhbCBTY3JlZW4gb24gRGlwbHNheVxuICAgICAgICB0aGlzLiNzaG93Q2FsbGJhY2sodGhpcy5fc2NyZWVuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgVXAgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHVwQ2FsbGJhY2sgKCkgeyB0aGlzLiN2ZXJ0aWNhbE1vdmUoKTsgfVxuXG4gICAgLyoqXG4gICAgICogUmlnaHQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFJpZ2h0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICByaWdodENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBEb3duIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBEb3duIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBkb3duQ2FsbGJhY2sgKCkgeyB0aGlzLiN2ZXJ0aWNhbE1vdmUoZmFsc2UpOyB9XG5cbiAgICAvKipcbiAgICAgKiBMZWZ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBMZWZ0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBsZWZ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEEgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEEgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBhQ2FsbGJhY2sgKCkgeyBcbiAgICAgICAgaWYgKHRoaXMuX3JlYWR5KVxuICAgICAgICAgICAgdGhpcy4jaW5pdGlhbGlzZUNhbGxiYWNrKHRoaXMuX2dhbWVzW3RoaXMuX2N1cnJlbnRdKTsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgQiBBY3Rpb24gQnV0dG9uLlxuICAgICAqL1xuICAgIGJDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFN0YXJ0IFVzZXIgQnV0dG9uLlxuICAgICAqL1xuICAgIHN0YXJ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgU2VsZWN0IFVzZXIgQnV0dG9uLlxuICAgICAqL1xuICAgIHNlbGVjdENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBWZXJ0aWNhbCBNb3ZlIEZ1bmN0aW9uXG4gICAgICogXG4gICAgICogTW92ZSB0aGUgQ3Vyc29yIGRvd24gb3IgdXAgYWxvbmcgZ2FtZSBvcHRpb25zLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG93biBEZWZhdWx0IGlzIERvd253YXJkc1xuICAgICAqL1xuICAgICN2ZXJ0aWNhbE1vdmUgKGRvd249dHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5fcmVhZHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnIgPSB0aGlzLl9jdXJyZW50ICsgKGRvd24gPyAtMSA6IDEpO1xuICAgICAgICAgICAgaWYgKGN1cnIgPCB0aGlzLl9nYW1lcy5sZW5ndGggJiYgY3VyciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXJyb3dzW3RoaXMuX2N1cnJlbnRdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IGN1cnI7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXJyb3dzW3RoaXMuX2N1cnJlbnRdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgQW5pbWFpdGlvbiBFbmQgTWV0aG9kXG4gICAgICogXG4gICAgICogRm9yIHRoZSBFbmRzIG9mIEFuaW1pYXRpb25zLCBkZXBlbmluZyBvbiB0aGUgYW5pbWF0aW9uIHR5cGUsIHRoaXMgbWV0aG9kXG4gICAgICogd2lsbCBoYW5kbGUgd2hhdCBzaG91bGQgaGFwcGVuIG5leHQuXG4gICAgICovXG4gICAgI2hhbmRsZUFuaW1hdGlvbkVuZCAoKSB7XG4gICAgICAgIC8vIEhhbmRsZSBSb2xsLURvd24gQW5pbWF0aW9uIENvbXBsZXRlXG4gICAgICAgIGlmICh0aGlzLl90aXRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyb2xsLWRvd25cIikpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJyb2xsLWRvd25cIik7XG4gICAgICAgICAgICB0aGlzLl90aXRsZS5jbGFzc0xpc3QuYWRkKFwicm9sbC11cFwiKTtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gSGFuZGxlIFJvbGwtVXAgQW5pbWF0aW9uIENvbXBsZXRlXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3RpdGxlLmNsYXNzTGlzdC5jb250YWlucyhcInJvbGwtdXBcIikpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJyb2xsLXVwXCIpO1xuICAgICAgICAgICAgdGhpcy4jZGlzcGxheUdhbWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwbGF5IFRpdGxlIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEluaXRpYWxpc2UgVGl0bGUgUm9sbCBEb3duIERpc3BsYXkuXG4gICAgICovXG4gICAgI2Rpc3BsYXlUaXRsZSAoKSB7IHRoaXMuX3RpdGxlLmNsYXNzTGlzdC5hZGQoXCJyb2xsLWRvd25cIik7IH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgR2FtZXMgTWV0aG9kXG4gICAgICogXG4gICAgICogR2FtZXMgRGlzcGxheSBpcyBSZWFkeS5cbiAgICAgKi9cbiAgICAjZGlzcGxheUdhbWVzICgpIHtcbiAgICAgICAgLy8gU2V0IFZhcmlhYmxlcyB0byBSZWFkeVxuICAgICAgICB0aGlzLl9yZWFkeSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3NjcmVlbi5jbGFzc0xpc3QuYWRkKFwicmVhZHlcIik7XG5cbiAgICAgICAgLy8gRGlzcGxheSBHYW1lcyBhbmQgSW5pdGlhbGlzZSBDdXJzb3JcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7IHRoaXMuX3NjcmVlbi5hcHBlbmRDaGlsZChvcHRpb24pOyB9KTtcbiAgICAgICAgdGhpcy5fYXJyb3dzWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==