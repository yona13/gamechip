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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Merom Sans";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
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
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
}

.gamechip-display { 
    display: flex;
    background-color: #e9f7c2;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
}

.gamechip-title {
    display: block;
    position: absolute;
    color: #363b97;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: italic;
    font-weight: bold;
    bottom: 1px;
}

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

#right-arrow {
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
}`, "",{"version":3,"sources":["webpack://./src/game-chip-module/console-styling.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,4BAA4B;IAC5B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,cAAc;IACd,6EAA6E;IAC7E,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb;;;kBAGc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,qCAAqC;IACrC,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,+BAA+B;IAC/B,kCAAkC;AACtC;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,oCAAoC;IACpC,uCAAuC;IACvC,iCAAiC;AACrC;;AAEA;IACI,eAAe;IACf,iCAAiC;IACjC,kCAAkC;AACtC;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,qCAAqC;IACrC,sCAAsC;IACtC,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,oCAAoC;IACpC,uCAAuC;IACvC,kCAAkC;AACtC;;AAEA,eAAe,kBAAkB,EAAE;;AAEnC;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA,SAAS,gBAAgB,EAAE;;AAE3B,SAAS,gBAAgB,EAAE;;AAE3B;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;AAChB;;AAEA,kCAAkC,cAAc,EAAE;;AAElD;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;AACzB;;AAEA,mBAAmB,gBAAgB,EAAE;;AAErC,oBAAoB,iBAAiB,EAAE;;AAEvC;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,8BAA8B;QAC9B,mBAAmB;IACvB;;IAEA;QACI,gBAAgB;QAChB,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,aAAa;QACb;;;;kCAI0B;IAC9B;;IAEA;QACI,kBAAkB;QAClB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;QAClB,WAAW;QACX,YAAY;QACZ,UAAU;QACV,QAAQ;QACR,UAAU;IACd;;IAEA;QACI,kBAAkB;QAClB,UAAU;QACV,WAAW;QACX,WAAW;QACX,YAAY;QACZ,UAAU;QACV,aAAa;QACb;;;;;;sCAM8B;IAClC;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;AACJ","sourcesContent":["@font-face {\n    font-family: \"Merom Sans\";\n    src: url(\"../fonts/MeromSans-Regular.ttf\");\n}\n\n.gamechip {\n    width: 100vw;\n    height: 100vh;\n    border-radius: 1.5rem;\n    font-family: \"Merom Sans\";\n    background-color: #f2ad26;\n}\n\n.gamechip-background { \n    display: flex;\n    position: relative;\n    padding: 0.3rem;\n    background-color: #020100;\n    /* flex-direction: column; */\n    justify-content: center;\n    align-items: center;\n}\n\n.gamechip-display { \n    display: flex;\n    background-color: #e9f7c2;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    height: 90%;\n}\n\n.gamechip-title {\n    display: block;\n    position: absolute;\n    color: #363b97;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-style: italic;\n    font-weight: bold;\n    bottom: 1px;\n}\n\n.gamechip-controller {\n    margin-bottom: 2rem;\n}\n\n.direction-pad {\n    grid-area: d-pad;\n    display: grid;\n    grid-template-areas:\n        \". up .\"\n        \"left central right\"\n        \". down .\";\n}\n\n[id*=\"-btn\"], #central-pad { \n    border: none;\n    background-color: #4d5061; \n}\n\n.direction-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#up-btn { \n    grid-area: up; \n    border-top-left-radius: 0.2rem;\n    border-top-right-radius: 0.2rem;\n}\n\n#up-arrow {\n    width: 0; \n    height: 0; \n    border-left: 0.6rem solid transparent;\n    border-right: 0.6rem solid transparent;\n    border-bottom: 0.6rem solid #2a2e3d;\n}\n\n#right-btn { \n    grid-area: right; \n    border-top-right-radius: 0.2rem;\n    border-bottom-right-radius: 0.2rem;\n}\n\n#right-arrow {\n    width: 0; \n    height: 0; \n    border-top: 0.6rem solid transparent;\n    border-bottom: 0.6rem solid transparent;\n    border-left: 0.6rem solid #2a2e3d;\n}\n\n#down-btn { \n    grid-area: down; \n    border-bottom-left-radius: 0.2rem;\n    border-bottom-right-radius: 0.2rem;\n}\n\n#down-arrow {\n    width: 0; \n    height: 0; \n    border-left: 0.6rem solid transparent;\n    border-right: 0.6rem solid transparent;\n    border-top: 0.6rem solid #2a2e3d;\n}\n\n#left-btn { \n    grid-area: left; \n    border-top-left-radius: 0.2rem;\n    border-bottom-left-radius: 0.2rem;\n}\n\n#left-arrow {\n    width: 0; \n    height: 0; \n    border-top: 0.6rem solid transparent;\n    border-bottom: 0.6rem solid transparent;\n    border-right: 0.6rem solid #2a2e3d;\n}\n\n#central-pad { grid-area: central; }\n\n.action-button {\n    width: 4rem;\n    height: 4rem;\n    border-radius: 2rem;\n}\n\n#a-btn { grid-area: a-btn; }\n\n#b-btn { grid-area: b-btn; }\n\n.user-button {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    height: 2rem;\n}\n\n.user-button > [class*=\"label\"] { color: #f08d00; }\n\n.user-button > button {\n    width: 3rem;\n    height: 1rem;\n    border-radius: 0.5rem;\n}\n\n#start-container { grid-area: start; }\n\n#select-container { grid-area: select; }\n\n@media (orientation: portrait) {\n    .gamechip {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    .gamechip-background {\n        margin-top: 2rem;\n        width: 90vw;\n        height: 45vh;\n    }\n\n    .gamechip-controller {\n        width: 90vw;\n        height: 35vh;\n        display: grid;\n        grid-template-areas:\n            \"d-pad d-pad d-pad d-pad . b-btn\"\n            \"d-pad d-pad d-pad d-pad a-btn .\"\n            \"d-pad d-pad d-pad d-pad . .\"\n            \". . . start select .\";\n    }\n\n    .direction-pad {\n        margin-right: 2rem;\n        margin-bottom: 2rem;\n    }\n}\n\n@media (orientation: landscape) {\n    .gamechip {\n        position: absolute;\n    }\n\n    .gamechip-background {\n        position: relative;\n        width: 50vw;\n        height: 90vh;\n        left: 25vw;\n        top: 5vh;\n        z-index: 1;\n    }\n\n    .gamechip-controller {\n        position: absolute;\n        top: 2.5vh;\n        left: 2.5vw;\n        width: 95vw;\n        height: 95vh;\n        z-index: 0;\n        display: grid;\n        grid-template-areas:\n            \". . . . . . . . . .\"\n            \"d-pad d-pad . . . . . . . .\"\n            \"d-pad d-pad . . . . . . . a-btn\"\n            \". . . . . . . . . .\"\n            \"start . . . . . . . . b-btn\"\n            \"select . . . . . . . . .\";\n    }\n\n    .direction-pad {\n        width: 9rem;\n        height: 9rem;\n    }\n\n    .direction-button, #central-pad {\n        width: 3rem;\n        height: 3rem;\n    }\n}"],"sourceRoot":""}]);
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
    /**
     * Action Button Class
     * 
     * Governs the A or B Buttons for the GameChip.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     */
    constructor (clickCallback, btnType) {
        // Generate Action Button DOM Element
        this._button = document.createElement("button");
        this._button.classList.add("action-button");
        this._button.id = btnType.toLowerCase() + "-btn";
        this._button.textContent = btnType;

        // Add Click Event Listener to Button
        this._button.addEventListener("click", (e) => { clickCallback(); })
    }

    get button () { return this._button; }

    set button (btn) { this._button = btn; }
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
        const up = new _direction_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](upCallback, "up");
        const right = new _direction_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](rightCallback, "right");
        const down = new _direction_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](downCallback, "down");
        const left = new _direction_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](leftCallback, "left");
        const central = document.createElement("div");
        central.id = ("central-pad");

        // Append Directional Buttons to Pad
        this._pad.appendChild(up.button);
        this._pad.appendChild(right.button);
        this._pad.appendChild(down.button);
        this._pad.appendChild(left.button);
        this._pad.appendChild(central);
    }

    get pad () { return this._pad; }

    set pad (elem) { this._pad = elem; }
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
    /**
     * Direction Button Class
     * 
     * Governs a Direction Button for the Direction Pad on the GameChip.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     */
    constructor (clickCallback, btnType) {
        // Generate Direction Button DOM Element
        this._button = document.createElement("button");
        this._button.classList.add("direction-button");
        this._button.id = btnType + "-btn";

        // Generate Arrow DOM Element
        const arrow = document.createElement("div");
        arrow.id = btnType + "-arrow";

        // Append Arrow to Button
        this._button.appendChild(arrow);

        // Add Click Event Listener to Button
        this._button.addEventListener("click", (e) => { clickCallback(); })
    }

    get button () { return this._button; }

    set button (btn) { this._button = btn; }
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
    /**
     * User Button Class
     * 
     * Governs the Start or Select Buttons for the GameChip.
     * 
     * @callback clickCallback Click Button Callback Method
     * @param {string} btnType User Button Type
     */
    constructor (clickCallback, btnType) {
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

        // Add Click Event Listener to Button
        btn.addEventListener("click", (e) => { clickCallback(); });

        // Append Objects to Container
        this._button.appendChild(label);
        this._button.appendChild(btn);
    }

    get button () { return this._button; }

    set button (btn) { this._button = btn; }
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
     * @callback upCallback 
     * @callback rightCallback 
     * @callback downCallback 
     * @callback leftCallback 
     * @callback aCallback 
     * @callback bCallback 
     * @callback startCallback 
     * @callback selectCallback 
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
        const dPad = new _controller_modules_d_pad_js__WEBPACK_IMPORTED_MODULE_1__["default"](upCallback, rightCallback, downCallback, leftCallback);

        // Create A & B Buttons
        const aBtn = new _controller_modules_action_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](aCallback, "A");
        const bBtn = new _controller_modules_action_button_js__WEBPACK_IMPORTED_MODULE_0__["default"](bCallback, "B");

        // Create Start & Select Buttons
        const startBtn = new _controller_modules_user_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](startCallback, "Start");
        const selectBtn = new _controller_modules_user_button_js__WEBPACK_IMPORTED_MODULE_2__["default"](selectCallback, "Select");

        // Append Objects to Module
        this._module.appendChild(dPad.pad);
        this._module.appendChild(aBtn.button);
        this._module.appendChild(bBtn.button);
        this._module.appendChild(startBtn.button);
        this._module.appendChild(selectBtn.button);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }
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





class GameChip {
    /**
     * GameChip Class
     * 
     * Console on which a Game can be Played.
     * 
     * @param {GameInterface} game Game to be Played
     */
    constructor (game) {
        // Create GameChip Module DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("gamechip");

        // Initialise Game Variable
        this._game = game;

        // Create Game Display
        this._display = new _display_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

        // Create Controller
        const controller = new _controller_js__WEBPACK_IMPORTED_MODULE_1__["default"](
            game.upCallback.bind(game),
            game.rightCallback.bind(game),
            game.downCallback.bind(game),
            game.leftCallback.bind(game),
            game.aCallback.bind(game),
            game.bCallback.bind(game),
            game.startCallback.bind(game),
            game.selectCallback.bind(game)
        );

        // Append Objects to Console
        this._module.appendChild(this._display.background);
        this._module.appendChild(controller.module);

        // Initialise Variables
        this._initialised = true;

        // Setup Screen Event Listeners
        window.addEventListener("resize", (e) => {
            this._game.setScene(
                this._display.show.bind(this._display),
                this._display.takeDown.bind(this._display),
                this._display.getDimensions.bind(this._display)
            );
        });
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get game () { return this._game; }

    set game (game) { this._game = game; }

    get games () { return this._games; }

    set games (arr) { this._games = arr; }

    /**
     * Start Method
     * 
     * Start the Game.
     */
    start () {
        // Set the Scene for the Game
        this._game.setScene(
            this._display.show.bind(this._display),
            this._display.takeDown.bind(this._display),
            this._display.getDimensions.bind(this._display)
        );
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

/***/ "./src/fonts/MeromSans-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/MeromSans-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e52d9502c4b9b0c64e77.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/game-chip-module/game-chip.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9jb25zb2xlLXN0eWxpbmcuY3NzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnNvbGUtc3R5bGluZy5jc3M/MWVmZiIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29udHJvbGxlci1tb2R1bGVzL2FjdGlvbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9jb250cm9sbGVyLW1vZHVsZXMvZC1wYWQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9jb250cm9sbGVyLW1vZHVsZXMvZGlyZWN0aW9uLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnRyb2xsZXItbW9kdWxlcy91c2VyLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9kaXNwbGF5LmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvZ2FtZS1jaGlwLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvZ2FtZS1pbnRlcmZhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL01lcm9tU2Fucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTWVyb20gU2Fuc1wiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4uZ2FtZWNoaXAge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogXCJNZXJvbSBTYW5zXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyYWQyNjtcbn1cblxuLmdhbWVjaGlwLWJhY2tncm91bmQgeyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDEwMDtcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lY2hpcC1kaXNwbGF5IHsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmN2MyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbn1cblxuLmdhbWVjaGlwLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICMzNjNiOTc7XG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvdHRvbTogMXB4O1xufVxuXG4uZ2FtZWNoaXAtY29udHJvbGxlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmRpcmVjdGlvbi1wYWQge1xuICAgIGdyaWQtYXJlYTogZC1wYWQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcIi4gdXAgLlwiXG4gICAgICAgIFwibGVmdCBjZW50cmFsIHJpZ2h0XCJcbiAgICAgICAgXCIuIGRvd24gLlwiO1xufVxuXG5baWQqPVwiLWJ0blwiXSwgI2NlbnRyYWwtcGFkIHsgXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDUwNjE7IFxufVxuXG4uZGlyZWN0aW9uLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jdXAtYnRuIHsgXG4gICAgZ3JpZC1hcmVhOiB1cDsgXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4ycmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjJyZW07XG59XG5cbiN1cC1hcnJvdyB7XG4gICAgd2lkdGg6IDA7IFxuICAgIGhlaWdodDogMDsgXG4gICAgYm9yZGVyLWxlZnQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAwLjZyZW0gc29saWQgIzJhMmUzZDtcbn1cblxuI3JpZ2h0LWJ0biB7IFxuICAgIGdyaWQtYXJlYTogcmlnaHQ7IFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjJyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMnJlbTtcbn1cblxuI3JpZ2h0LWFycm93IHtcbiAgICB3aWR0aDogMDsgXG4gICAgaGVpZ2h0OiAwOyBcbiAgICBib3JkZXItdG9wOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAwLjZyZW0gc29saWQgIzJhMmUzZDtcbn1cblxuI2Rvd24tYnRuIHsgXG4gICAgZ3JpZC1hcmVhOiBkb3duOyBcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjJyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMnJlbTtcbn1cblxuI2Rvd24tYXJyb3cge1xuICAgIHdpZHRoOiAwOyBcbiAgICBoZWlnaHQ6IDA7IFxuICAgIGJvcmRlci1sZWZ0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogMC42cmVtIHNvbGlkICMyYTJlM2Q7XG59XG5cbiNsZWZ0LWJ0biB7IFxuICAgIGdyaWQtYXJlYTogbGVmdDsgXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4ycmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMnJlbTtcbn1cblxuI2xlZnQtYXJyb3cge1xuICAgIHdpZHRoOiAwOyBcbiAgICBoZWlnaHQ6IDA7IFxuICAgIGJvcmRlci10b3A6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwLjZyZW0gc29saWQgIzJhMmUzZDtcbn1cblxuI2NlbnRyYWwtcGFkIHsgZ3JpZC1hcmVhOiBjZW50cmFsOyB9XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cblxuI2EtYnRuIHsgZ3JpZC1hcmVhOiBhLWJ0bjsgfVxuXG4jYi1idG4geyBncmlkLWFyZWE6IGItYnRuOyB9XG5cbi51c2VyLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMnJlbTtcbn1cblxuLnVzZXItYnV0dG9uID4gW2NsYXNzKj1cImxhYmVsXCJdIHsgY29sb3I6ICNmMDhkMDA7IH1cblxuLnVzZXItYnV0dG9uID4gYnV0dG9uIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4jc3RhcnQtY29udGFpbmVyIHsgZ3JpZC1hcmVhOiBzdGFydDsgfVxuXG4jc2VsZWN0LWNvbnRhaW5lciB7IGdyaWQtYXJlYTogc2VsZWN0OyB9XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgLmdhbWVjaGlwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5nYW1lY2hpcC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgIGhlaWdodDogNDV2aDtcbiAgICB9XG5cbiAgICAuZ2FtZWNoaXAtY29udHJvbGxlciB7XG4gICAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgICBoZWlnaHQ6IDM1dmg7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICBcImQtcGFkIGQtcGFkIGQtcGFkIGQtcGFkIC4gYi1idG5cIlxuICAgICAgICAgICAgXCJkLXBhZCBkLXBhZCBkLXBhZCBkLXBhZCBhLWJ0biAuXCJcbiAgICAgICAgICAgIFwiZC1wYWQgZC1wYWQgZC1wYWQgZC1wYWQgLiAuXCJcbiAgICAgICAgICAgIFwiLiAuIC4gc3RhcnQgc2VsZWN0IC5cIjtcbiAgICB9XG5cbiAgICAuZGlyZWN0aW9uLXBhZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC5nYW1lY2hpcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuZ2FtZWNoaXAtYmFja2dyb3VuZCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgICAgbGVmdDogMjV2dztcbiAgICAgICAgdG9wOiA1dmg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLmdhbWVjaGlwLWNvbnRyb2xsZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMi41dmg7XG4gICAgICAgIGxlZnQ6IDIuNXZ3O1xuICAgICAgICB3aWR0aDogOTV2dztcbiAgICAgICAgaGVpZ2h0OiA5NXZoO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCIuIC4gLiAuIC4gLiAuIC4gLiAuXCJcbiAgICAgICAgICAgIFwiZC1wYWQgZC1wYWQgLiAuIC4gLiAuIC4gLiAuXCJcbiAgICAgICAgICAgIFwiZC1wYWQgZC1wYWQgLiAuIC4gLiAuIC4gLiBhLWJ0blwiXG4gICAgICAgICAgICBcIi4gLiAuIC4gLiAuIC4gLiAuIC5cIlxuICAgICAgICAgICAgXCJzdGFydCAuIC4gLiAuIC4gLiAuIC4gYi1idG5cIlxuICAgICAgICAgICAgXCJzZWxlY3QgLiAuIC4gLiAuIC4gLiAuIC5cIjtcbiAgICB9XG5cbiAgICAuZGlyZWN0aW9uLXBhZCB7XG4gICAgICAgIHdpZHRoOiA5cmVtO1xuICAgICAgICBoZWlnaHQ6IDlyZW07XG4gICAgfVxuXG4gICAgLmRpcmVjdGlvbi1idXR0b24sICNjZW50cmFsLXBhZCB7XG4gICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29uc29sZS1zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw2RUFBNkU7SUFDN0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiOzs7a0JBR2M7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxrQ0FBa0M7QUFDdEM7O0FBRUEsZUFBZSxrQkFBa0IsRUFBRTs7QUFFbkM7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQSxTQUFTLGdCQUFnQixFQUFFOztBQUUzQixTQUFTLGdCQUFnQixFQUFFOztBQUUzQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBLGtDQUFrQyxjQUFjLEVBQUU7O0FBRWxEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUEsbUJBQW1CLGdCQUFnQixFQUFFOztBQUVyQyxvQkFBb0IsaUJBQWlCLEVBQUU7O0FBRXZDO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYjs7OztrQ0FJMEI7SUFDOUI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixRQUFRO1FBQ1IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsYUFBYTtRQUNiOzs7Ozs7c0NBTThCO0lBQ2xDOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1lcm9tIFNhbnNcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvTWVyb21TYW5zLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbi5nYW1lY2hpcCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIk1lcm9tIFNhbnNcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJhZDI2O1xcbn1cXG5cXG4uZ2FtZWNoaXAtYmFja2dyb3VuZCB7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDEwMDtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lY2hpcC1kaXNwbGF5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWY3YzI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuLmdhbWVjaGlwLXRpdGxlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6ICMzNjNiOTc7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3R0b206IDFweDtcXG59XFxuXFxuLmdhbWVjaGlwLWNvbnRyb2xsZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uZGlyZWN0aW9uLXBhZCB7XFxuICAgIGdyaWQtYXJlYTogZC1wYWQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiLiB1cCAuXFxcIlxcbiAgICAgICAgXFxcImxlZnQgY2VudHJhbCByaWdodFxcXCJcXG4gICAgICAgIFxcXCIuIGRvd24gLlxcXCI7XFxufVxcblxcbltpZCo9XFxcIi1idG5cXFwiXSwgI2NlbnRyYWwtcGFkIHsgXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRkNTA2MTsgXFxufVxcblxcbi5kaXJlY3Rpb24tYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiN1cC1idG4geyBcXG4gICAgZ3JpZC1hcmVhOiB1cDsgXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMnJlbTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuI3VwLWFycm93IHtcXG4gICAgd2lkdGg6IDA7IFxcbiAgICBoZWlnaHQ6IDA7IFxcbiAgICBib3JkZXItbGVmdDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC42cmVtIHNvbGlkICMyYTJlM2Q7XFxufVxcblxcbiNyaWdodC1idG4geyBcXG4gICAgZ3JpZC1hcmVhOiByaWdodDsgXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjJyZW07XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbiNyaWdodC1hcnJvdyB7XFxuICAgIHdpZHRoOiAwOyBcXG4gICAgaGVpZ2h0OiAwOyBcXG4gICAgYm9yZGVyLXRvcDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0OiAwLjZyZW0gc29saWQgIzJhMmUzZDtcXG59XFxuXFxuI2Rvd24tYnRuIHsgXFxuICAgIGdyaWQtYXJlYTogZG93bjsgXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuI2Rvd24tYXJyb3cge1xcbiAgICB3aWR0aDogMDsgXFxuICAgIGhlaWdodDogMDsgXFxuICAgIGJvcmRlci1sZWZ0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItdG9wOiAwLjZyZW0gc29saWQgIzJhMmUzZDtcXG59XFxuXFxuI2xlZnQtYnRuIHsgXFxuICAgIGdyaWQtYXJlYTogbGVmdDsgXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4jbGVmdC1hcnJvdyB7XFxuICAgIHdpZHRoOiAwOyBcXG4gICAgaGVpZ2h0OiAwOyBcXG4gICAgYm9yZGVyLXRvcDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMC42cmVtIHNvbGlkICMyYTJlM2Q7XFxufVxcblxcbiNjZW50cmFsLXBhZCB7IGdyaWQtYXJlYTogY2VudHJhbDsgfVxcblxcbi5hY3Rpb24tYnV0dG9uIHtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuI2EtYnRuIHsgZ3JpZC1hcmVhOiBhLWJ0bjsgfVxcblxcbiNiLWJ0biB7IGdyaWQtYXJlYTogYi1idG47IH1cXG5cXG4udXNlci1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLnVzZXItYnV0dG9uID4gW2NsYXNzKj1cXFwibGFiZWxcXFwiXSB7IGNvbG9yOiAjZjA4ZDAwOyB9XFxuXFxuLnVzZXItYnV0dG9uID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4jc3RhcnQtY29udGFpbmVyIHsgZ3JpZC1hcmVhOiBzdGFydDsgfVxcblxcbiNzZWxlY3QtY29udGFpbmVyIHsgZ3JpZC1hcmVhOiBzZWxlY3Q7IH1cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xcbiAgICAuZ2FtZWNoaXAge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lY2hpcC1iYWNrZ3JvdW5kIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgICAgIGhlaWdodDogNDV2aDtcXG4gICAgfVxcblxcbiAgICAuZ2FtZWNoaXAtY29udHJvbGxlciB7XFxuICAgICAgICB3aWR0aDogOTB2dztcXG4gICAgICAgIGhlaWdodDogMzV2aDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJkLXBhZCBkLXBhZCBkLXBhZCBkLXBhZCAuIGItYnRuXFxcIlxcbiAgICAgICAgICAgIFxcXCJkLXBhZCBkLXBhZCBkLXBhZCBkLXBhZCBhLWJ0biAuXFxcIlxcbiAgICAgICAgICAgIFxcXCJkLXBhZCBkLXBhZCBkLXBhZCBkLXBhZCAuIC5cXFwiXFxuICAgICAgICAgICAgXFxcIi4gLiAuIHN0YXJ0IHNlbGVjdCAuXFxcIjtcXG4gICAgfVxcblxcbiAgICAuZGlyZWN0aW9uLXBhZCB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgICAuZ2FtZWNoaXAge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lY2hpcC1iYWNrZ3JvdW5kIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOiA1MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA5MHZoO1xcbiAgICAgICAgbGVmdDogMjV2dztcXG4gICAgICAgIHRvcDogNXZoO1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAuZ2FtZWNoaXAtY29udHJvbGxlciB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDIuNXZoO1xcbiAgICAgICAgbGVmdDogMi41dnc7XFxuICAgICAgICB3aWR0aDogOTV2dztcXG4gICAgICAgIGhlaWdodDogOTV2aDtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiLiAuIC4gLiAuIC4gLiAuIC4gLlxcXCJcXG4gICAgICAgICAgICBcXFwiZC1wYWQgZC1wYWQgLiAuIC4gLiAuIC4gLiAuXFxcIlxcbiAgICAgICAgICAgIFxcXCJkLXBhZCBkLXBhZCAuIC4gLiAuIC4gLiAuIGEtYnRuXFxcIlxcbiAgICAgICAgICAgIFxcXCIuIC4gLiAuIC4gLiAuIC4gLiAuXFxcIlxcbiAgICAgICAgICAgIFxcXCJzdGFydCAuIC4gLiAuIC4gLiAuIC4gYi1idG5cXFwiXFxuICAgICAgICAgICAgXFxcInNlbGVjdCAuIC4gLiAuIC4gLiAuIC4gLlxcXCI7XFxuICAgIH1cXG5cXG4gICAgLmRpcmVjdGlvbi1wYWQge1xcbiAgICAgICAgd2lkdGg6IDlyZW07XFxuICAgICAgICBoZWlnaHQ6IDlyZW07XFxuICAgIH1cXG5cXG4gICAgLmRpcmVjdGlvbi1idXR0b24sICNjZW50cmFsLXBhZCB7XFxuICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29uc29sZS1zdHlsaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnNvbGUtc3R5bGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkJ1dHRvbiB7XG4gICAgLyoqXG4gICAgICogQWN0aW9uIEJ1dHRvbiBDbGFzc1xuICAgICAqIFxuICAgICAqIEdvdmVybnMgdGhlIEEgb3IgQiBCdXR0b25zIGZvciB0aGUgR2FtZUNoaXAuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGNsaWNrQ2FsbGJhY2sgQ2xpY2sgQnV0dG9uIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidG5UeXBlIFVzZXIgQnV0dG9uIFR5cGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY2xpY2tDYWxsYmFjaywgYnRuVHlwZSkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBBY3Rpb24gQnV0dG9uIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uLWJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uLmlkID0gYnRuVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItYnRuXCI7XG4gICAgICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9IGJ0blR5cGU7XG5cbiAgICAgICAgLy8gQWRkIENsaWNrIEV2ZW50IExpc3RlbmVyIHRvIEJ1dHRvblxuICAgICAgICB0aGlzLl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IGNsaWNrQ2FsbGJhY2soKTsgfSlcbiAgICB9XG5cbiAgICBnZXQgYnV0dG9uICgpIHsgcmV0dXJuIHRoaXMuX2J1dHRvbjsgfVxuXG4gICAgc2V0IGJ1dHRvbiAoYnRuKSB7IHRoaXMuX2J1dHRvbiA9IGJ0bjsgfVxufSIsImltcG9ydCBEaXJlY3Rpb25CdXR0b24gZnJvbSBcIi4vZGlyZWN0aW9uLWJ1dHRvbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3Rpb25QYWQge1xuICAgIC8qKlxuICAgICAqIERpcmVjdGlvbiBQYWQgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBHb3Zlcm5zIHRoZSBEaXJlY3Rpb25hbCBCdXR0b25zIGZvciB0aGUgR2FtZUNoaXAuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHVwQ2FsbGJhY2sgVXAgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIHJpZ2h0Q2FsbGJhY2sgUmlnaHQgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQGNhbGxiYWNrIGRvd25DYWxsYmFjayBEb3duIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBsZWZ0Q2FsbGJhY2sgTGVmdCBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAodXBDYWxsYmFjaywgcmlnaHRDYWxsYmFjaywgZG93bkNhbGxiYWNrLCBsZWZ0Q2FsbGJhY2spIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgUGFkIERPTSBFbGVtZW50OyAgICBcbiAgICAgICAgdGhpcy5fcGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fcGFkLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3Rpb24tcGFkXCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBEaXJlY3Rpb25hbCBCdXR0b25zXG4gICAgICAgIGNvbnN0IHVwID0gbmV3IERpcmVjdGlvbkJ1dHRvbih1cENhbGxiYWNrLCBcInVwXCIpO1xuICAgICAgICBjb25zdCByaWdodCA9IG5ldyBEaXJlY3Rpb25CdXR0b24ocmlnaHRDYWxsYmFjaywgXCJyaWdodFwiKTtcbiAgICAgICAgY29uc3QgZG93biA9IG5ldyBEaXJlY3Rpb25CdXR0b24oZG93bkNhbGxiYWNrLCBcImRvd25cIik7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBuZXcgRGlyZWN0aW9uQnV0dG9uKGxlZnRDYWxsYmFjaywgXCJsZWZ0XCIpO1xuICAgICAgICBjb25zdCBjZW50cmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VudHJhbC5pZCA9IChcImNlbnRyYWwtcGFkXCIpO1xuXG4gICAgICAgIC8vIEFwcGVuZCBEaXJlY3Rpb25hbCBCdXR0b25zIHRvIFBhZFxuICAgICAgICB0aGlzLl9wYWQuYXBwZW5kQ2hpbGQodXAuYnV0dG9uKTtcbiAgICAgICAgdGhpcy5fcGFkLmFwcGVuZENoaWxkKHJpZ2h0LmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX3BhZC5hcHBlbmRDaGlsZChkb3duLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX3BhZC5hcHBlbmRDaGlsZChsZWZ0LmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX3BhZC5hcHBlbmRDaGlsZChjZW50cmFsKTtcbiAgICB9XG5cbiAgICBnZXQgcGFkICgpIHsgcmV0dXJuIHRoaXMuX3BhZDsgfVxuXG4gICAgc2V0IHBhZCAoZWxlbSkgeyB0aGlzLl9wYWQgPSBlbGVtOyB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0aW9uQnV0dG9uIHtcbiAgICAvKipcbiAgICAgKiBEaXJlY3Rpb24gQnV0dG9uIENsYXNzXG4gICAgICogXG4gICAgICogR292ZXJucyBhIERpcmVjdGlvbiBCdXR0b24gZm9yIHRoZSBEaXJlY3Rpb24gUGFkIG9uIHRoZSBHYW1lQ2hpcC5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgY2xpY2tDYWxsYmFjayBDbGljayBCdXR0b24gQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJ0blR5cGUgVXNlciBCdXR0b24gVHlwZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChjbGlja0NhbGxiYWNrLCBidG5UeXBlKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIERpcmVjdGlvbiBCdXR0b24gRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3Rpb24tYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9idXR0b24uaWQgPSBidG5UeXBlICsgXCItYnRuXCI7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgQXJyb3cgRE9NIEVsZW1lbnRcbiAgICAgICAgY29uc3QgYXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhcnJvdy5pZCA9IGJ0blR5cGUgKyBcIi1hcnJvd1wiO1xuXG4gICAgICAgIC8vIEFwcGVuZCBBcnJvdyB0byBCdXR0b25cbiAgICAgICAgdGhpcy5fYnV0dG9uLmFwcGVuZENoaWxkKGFycm93KTtcblxuICAgICAgICAvLyBBZGQgQ2xpY2sgRXZlbnQgTGlzdGVuZXIgdG8gQnV0dG9uXG4gICAgICAgIHRoaXMuX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgY2xpY2tDYWxsYmFjaygpOyB9KVxuICAgIH1cblxuICAgIGdldCBidXR0b24gKCkgeyByZXR1cm4gdGhpcy5fYnV0dG9uOyB9XG5cbiAgICBzZXQgYnV0dG9uIChidG4pIHsgdGhpcy5fYnV0dG9uID0gYnRuOyB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckJ1dHRvbiB7XG4gICAgLyoqXG4gICAgICogVXNlciBCdXR0b24gQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBHb3Zlcm5zIHRoZSBTdGFydCBvciBTZWxlY3QgQnV0dG9ucyBmb3IgdGhlIEdhbWVDaGlwLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjbGlja0NhbGxiYWNrIENsaWNrIEJ1dHRvbiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnRuVHlwZSBVc2VyIEJ1dHRvbiBUeXBlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNsaWNrQ2FsbGJhY2ssIGJ0blR5cGUpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgQ29udGFpbmVyIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidXNlci1idXR0b25cIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5pZCA9IGJ0blR5cGUudG9Mb3dlckNhc2UoKSArIFwiLWNvbnRhaW5lclwiO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIExhYmVsIERPTSBFbGVtZW50XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInVzZXItYnV0dG9uLWxhYmVsXCIpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGJ0blR5cGUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBCdXR0b24gRE9NIEVsZW1lbnRcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLmlkID0gYnRuVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItYnRuXCI7XG5cbiAgICAgICAgLy8gQWRkIENsaWNrIEV2ZW50IExpc3RlbmVyIHRvIEJ1dHRvblxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IGNsaWNrQ2FsbGJhY2soKTsgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIE9iamVjdHMgdG8gQ29udGFpbmVyXG4gICAgICAgIHRoaXMuX2J1dHRvbi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cblxuICAgIGdldCBidXR0b24gKCkgeyByZXR1cm4gdGhpcy5fYnV0dG9uOyB9XG5cbiAgICBzZXQgYnV0dG9uIChidG4pIHsgdGhpcy5fYnV0dG9uID0gYnRuOyB9XG59IiwiaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwiLi9jb250cm9sbGVyLW1vZHVsZXMvYWN0aW9uLWJ1dHRvbi5qc1wiO1xuaW1wb3J0IERpcmVjdGlvblBhZCBmcm9tIFwiLi9jb250cm9sbGVyLW1vZHVsZXMvZC1wYWQuanNcIjtcbmltcG9ydCBVc2VyQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xsZXItbW9kdWxlcy91c2VyLWJ1dHRvbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiBDb250cm9sbGVyIENsYXNzXG4gICAgICogXG4gICAgICogR292ZXJucyB0aGUgR2FtZUNoaXAgQ29udHJvbGxlci5cbiAgICAgKiBcbiAgICAgKiBAY2FsbGJhY2sgdXBDYWxsYmFjayBcbiAgICAgKiBAY2FsbGJhY2sgcmlnaHRDYWxsYmFjayBcbiAgICAgKiBAY2FsbGJhY2sgZG93bkNhbGxiYWNrIFxuICAgICAqIEBjYWxsYmFjayBsZWZ0Q2FsbGJhY2sgXG4gICAgICogQGNhbGxiYWNrIGFDYWxsYmFjayBcbiAgICAgKiBAY2FsbGJhY2sgYkNhbGxiYWNrIFxuICAgICAqIEBjYWxsYmFjayBzdGFydENhbGxiYWNrIFxuICAgICAqIEBjYWxsYmFjayBzZWxlY3RDYWxsYmFjayBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHVwQ2FsbGJhY2ssIFxuICAgICAgICByaWdodENhbGxiYWNrLCBcbiAgICAgICAgZG93bkNhbGxiYWNrLCBcbiAgICAgICAgbGVmdENhbGxiYWNrLCBcbiAgICAgICAgYUNhbGxiYWNrLCBcbiAgICAgICAgYkNhbGxiYWNrLCBcbiAgICAgICAgc3RhcnRDYWxsYmFjaywgXG4gICAgICAgIHNlbGVjdENhbGxiYWNrXG4gICAgKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIE1vZHVsZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcImdhbWVjaGlwLWNvbnRyb2xsZXJcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBEaXJlY3Rpb24gUGFkXG4gICAgICAgIGNvbnN0IGRQYWQgPSBuZXcgRGlyZWN0aW9uUGFkKHVwQ2FsbGJhY2ssIHJpZ2h0Q2FsbGJhY2ssIGRvd25DYWxsYmFjaywgbGVmdENhbGxiYWNrKTtcblxuICAgICAgICAvLyBDcmVhdGUgQSAmIEIgQnV0dG9uc1xuICAgICAgICBjb25zdCBhQnRuID0gbmV3IEFjdGlvbkJ1dHRvbihhQ2FsbGJhY2ssIFwiQVwiKTtcbiAgICAgICAgY29uc3QgYkJ0biA9IG5ldyBBY3Rpb25CdXR0b24oYkNhbGxiYWNrLCBcIkJcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFN0YXJ0ICYgU2VsZWN0IEJ1dHRvbnNcbiAgICAgICAgY29uc3Qgc3RhcnRCdG4gPSBuZXcgVXNlckJ1dHRvbihzdGFydENhbGxiYWNrLCBcIlN0YXJ0XCIpO1xuICAgICAgICBjb25zdCBzZWxlY3RCdG4gPSBuZXcgVXNlckJ1dHRvbihzZWxlY3RDYWxsYmFjaywgXCJTZWxlY3RcIik7XG5cbiAgICAgICAgLy8gQXBwZW5kIE9iamVjdHMgdG8gTW9kdWxlXG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZChkUGFkLnBhZCk7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZChhQnRuLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZChiQnRuLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZChzdGFydEJ0bi5idXR0b24pO1xuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQoc2VsZWN0QnRuLmJ1dHRvbik7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXkge1xuICAgIC8qKlxuICAgICAqIERpc3BsYXkgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBHb3Zlcm5zIHRoZSBHYW1lQ2hpcCBEaXNwbGF5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgQmFja2dyb3VuZCBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWNoaXAtYmFja2dyb3VuZFwiKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBEaXNwbGF5IERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX21vZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZWNoaXAtZGlzcGxheVwiKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBUaXRsZVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJnYW1lY2hpcC10aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkdBTUVDSElQIFxcdTAwQTlcIjtcblxuICAgICAgICAvLyBBZGQgRGlzcGxheSB0byBCYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuX2JhY2tncm91bmQuYXBwZW5kQ2hpbGQodGhpcy5fbW9kdWxlKTtcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgfVxuXG4gICAgZ2V0IGJhY2tncm91bmQgKCkgeyByZXR1cm4gdGhpcy5fYmFja2dyb3VuZDsgfVxuXG4gICAgc2V0IGJhY2tncm91bmQgKGVsZW0pIHsgdGhpcy5fYmFja2dyb3VuZCA9IGVsZW07IH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBEaXNwbGF5IHRvIFNob3cgdGhlIERlc2lyZWQgRWxlbWVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGVsZW0gRWxlbWVudCB0byBEaXNwbGF5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBvdmVybGF5IERlZmF1bHQgaXMgRmFsc2VcbiAgICAgKi9cbiAgICBzaG93IChlbGVtLCBvdmVybGF5PWZhbHNlKSB7XG4gICAgICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgICAgICAgdGhpcy5fbW9kdWxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLl9tYWluID0gZWxlbTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZSBEb3duIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgRGlzcGxheSB0byByZW1vdmUgYW55IG92ZXJsYXllZCBlbGVtZW50LlxuICAgICAqL1xuICAgIHRha2VEb3duICgpIHtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9tYWluKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgRGltZW5zaW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIFNjcmVlbiBXaWR0aCBhbmQgSGVpZ2h0IGZvciB0aGUgR2FtZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBEaWN0aW9uYXJ5IG9mIFNjcmVlbiBXaWR0aCBhbmQgSGVpZ2h0XG4gICAgICovXG4gICAgZ2V0RGltZW5zaW9ucyAoKSB7IHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLl9tb2R1bGUuY2xpZW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5fbW9kdWxlLmNsaWVudEhlaWdodFxuICAgIH07IH1cbn0iLCJpbXBvcnQgXCIuL2NvbnNvbGUtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBEaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXkuanNcIjtcbmltcG9ydCBHYW1lSW50ZXJmYWNlIGZyb20gXCIuL2dhbWUtaW50ZXJmYWNlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDaGlwIHtcbiAgICAvKipcbiAgICAgKiBHYW1lQ2hpcCBDbGFzc1xuICAgICAqIFxuICAgICAqIENvbnNvbGUgb24gd2hpY2ggYSBHYW1lIGNhbiBiZSBQbGF5ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtHYW1lSW50ZXJmYWNlfSBnYW1lIEdhbWUgdG8gYmUgUGxheWVkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGdhbWUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIEdhbWVDaGlwIE1vZHVsZSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcImdhbWVjaGlwXCIpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgR2FtZSBWYXJpYWJsZVxuICAgICAgICB0aGlzLl9nYW1lID0gZ2FtZTtcblxuICAgICAgICAvLyBDcmVhdGUgR2FtZSBEaXNwbGF5XG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBDb250cm9sbGVyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihcbiAgICAgICAgICAgIGdhbWUudXBDYWxsYmFjay5iaW5kKGdhbWUpLFxuICAgICAgICAgICAgZ2FtZS5yaWdodENhbGxiYWNrLmJpbmQoZ2FtZSksXG4gICAgICAgICAgICBnYW1lLmRvd25DYWxsYmFjay5iaW5kKGdhbWUpLFxuICAgICAgICAgICAgZ2FtZS5sZWZ0Q2FsbGJhY2suYmluZChnYW1lKSxcbiAgICAgICAgICAgIGdhbWUuYUNhbGxiYWNrLmJpbmQoZ2FtZSksXG4gICAgICAgICAgICBnYW1lLmJDYWxsYmFjay5iaW5kKGdhbWUpLFxuICAgICAgICAgICAgZ2FtZS5zdGFydENhbGxiYWNrLmJpbmQoZ2FtZSksXG4gICAgICAgICAgICBnYW1lLnNlbGVjdENhbGxiYWNrLmJpbmQoZ2FtZSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBBcHBlbmQgT2JqZWN0cyB0byBDb25zb2xlXG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9kaXNwbGF5LmJhY2tncm91bmQpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQoY29udHJvbGxlci5tb2R1bGUpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpc2UgVmFyaWFibGVzXG4gICAgICAgIHRoaXMuX2luaXRpYWxpc2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBTZXR1cCBTY3JlZW4gRXZlbnQgTGlzdGVuZXJzXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9nYW1lLnNldFNjZW5lKFxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXkuc2hvdy5iaW5kKHRoaXMuX2Rpc3BsYXkpLFxuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXkudGFrZURvd24uYmluZCh0aGlzLl9kaXNwbGF5KSxcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNwbGF5LmdldERpbWVuc2lvbnMuYmluZCh0aGlzLl9kaXNwbGF5KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZHVsZSAoKSB7IHJldHVybiB0aGlzLl9tb2R1bGU7IH1cblxuICAgIHNldCBtb2R1bGUgKGVsZW0pIHsgdGhpcy5fbW9kdWxlID0gZWxlbTsgfVxuXG4gICAgZ2V0IGdhbWUgKCkgeyByZXR1cm4gdGhpcy5fZ2FtZTsgfVxuXG4gICAgc2V0IGdhbWUgKGdhbWUpIHsgdGhpcy5fZ2FtZSA9IGdhbWU7IH1cblxuICAgIGdldCBnYW1lcyAoKSB7IHJldHVybiB0aGlzLl9nYW1lczsgfVxuXG4gICAgc2V0IGdhbWVzIChhcnIpIHsgdGhpcy5fZ2FtZXMgPSBhcnI7IH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFN0YXJ0IHRoZSBHYW1lLlxuICAgICAqL1xuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gU2V0IHRoZSBTY2VuZSBmb3IgdGhlIEdhbWVcbiAgICAgICAgdGhpcy5fZ2FtZS5zZXRTY2VuZShcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BsYXkuc2hvdy5iaW5kKHRoaXMuX2Rpc3BsYXkpLFxuICAgICAgICAgICAgdGhpcy5fZGlzcGxheS50YWtlRG93bi5iaW5kKHRoaXMuX2Rpc3BsYXkpLFxuICAgICAgICAgICAgdGhpcy5fZGlzcGxheS5nZXREaW1lbnNpb25zLmJpbmQodGhpcy5fZGlzcGxheSlcbiAgICAgICAgKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUludGVyZmFjZSB7XG4gICAgLyoqXG4gICAgICogR2FtZSBJbnRlcmZhY2UgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBCYXNlIEdhbWUgQ2xhc3MgdGhhdCBzaG91bGQgYmUgSW5oZXJpdGVkIGJ5IE90aGVyIEdhbWVzIHRvIGJlIFBsYXllZCBvbiBcbiAgICAgKiB0aGUgR2FtZUNoaXAuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge31cblxuICAgIC8qKlxuICAgICAqIFNldCBTaG93IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgU2hvdyBDYWxsYmFjayBNZXRob2QgZm9yIFVwZGF0aW5nIHRoZSBHYW1lQ2hpcCBEaXNwbGF5XG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHNob3dDYWxsYmFjayBTaG93IENhbGxiYWNrXG4gICAgICogQGNhbGxiYWNrIGRpbWVuc2lvbnNDYWxsYmFjayBHZXQgRGltZW5zaW9ucyBDYWxsYmFja1xuICAgICAqL1xuICAgIHNldFNjZW5lIChzaG93Q2FsbGJhY2ssIGdldERpbWVuc2lvbnMpIHt9XG5cbiAgICAvKipcbiAgICAgKiBVcCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgVXAgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHVwQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFJpZ2h0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBSaWdodCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgcmlnaHRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogRG93biBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgRG93biBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgZG93bkNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBMZWZ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBMZWZ0IEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICBsZWZ0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEEgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEEgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBhQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIEIgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIEIgQWN0aW9uIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBiQ2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTdGFydCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzdGFydENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFNlbGVjdCBVc2VyIEJ1dHRvbi5cbiAgICAgKi9cbiAgICBzZWxlY3RDYWxsYmFjayAoKSB7fVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==