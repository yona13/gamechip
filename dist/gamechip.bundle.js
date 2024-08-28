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

.game-console {
    width: 100vw;
    height: 100vh;
    border-radius: 1.5rem;
    font-family: "Merom Sans";
    background-color: #f2ad26;
}

.game-console-display { 
    display: flex;
    padding: 0.3rem;
    background-color: #020100;
    justify-content: center;
    align-items: center;
}

.game-console-controller {
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
    .game-console {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .game-console-display {
        margin-top: 2rem;
        width: 90vw;
        height: 45vh;
    }

    .game-console-controller {
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
    .game-console {
        position: absolute;
    }

    .game-console-display {
        position: relative;
        width: 50vw;
        height: 90vh;
        left: 25vw;
        top: 5vh;
        z-index: 1;
    }

    .game-console-controller {
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
}`, "",{"version":3,"sources":["webpack://./src/game-chip-module/console-styling.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,yBAAyB;IACzB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb;;;kBAGc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,qCAAqC;IACrC,sCAAsC;IACtC,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;IAChB,+BAA+B;IAC/B,kCAAkC;AACtC;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,oCAAoC;IACpC,uCAAuC;IACvC,iCAAiC;AACrC;;AAEA;IACI,eAAe;IACf,iCAAiC;IACjC,kCAAkC;AACtC;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,qCAAqC;IACrC,sCAAsC;IACtC,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,oCAAoC;IACpC,uCAAuC;IACvC,kCAAkC;AACtC;;AAEA,eAAe,kBAAkB,EAAE;;AAEnC;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA,SAAS,gBAAgB,EAAE;;AAE3B,SAAS,gBAAgB,EAAE;;AAE3B;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;AAChB;;AAEA,kCAAkC,cAAc,EAAE;;AAElD;IACI,WAAW;IACX,YAAY;IACZ,qBAAqB;AACzB;;AAEA,mBAAmB,gBAAgB,EAAE;;AAErC,oBAAoB,iBAAiB,EAAE;;AAEvC;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,8BAA8B;QAC9B,mBAAmB;IACvB;;IAEA;QACI,gBAAgB;QAChB,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;QACZ,aAAa;QACb;;;;kCAI0B;IAC9B;;IAEA;QACI,kBAAkB;QAClB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;QAClB,WAAW;QACX,YAAY;QACZ,UAAU;QACV,QAAQ;QACR,UAAU;IACd;;IAEA;QACI,kBAAkB;QAClB,UAAU;QACV,WAAW;QACX,WAAW;QACX,YAAY;QACZ,UAAU;QACV,aAAa;QACb;;;;;;sCAM8B;IAClC;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;AACJ","sourcesContent":["@font-face {\n    font-family: \"Merom Sans\";\n    src: url(\"../fonts/MeromSans-Regular.ttf\");\n}\n\n.game-console {\n    width: 100vw;\n    height: 100vh;\n    border-radius: 1.5rem;\n    font-family: \"Merom Sans\";\n    background-color: #f2ad26;\n}\n\n.game-console-display { \n    display: flex;\n    padding: 0.3rem;\n    background-color: #020100;\n    justify-content: center;\n    align-items: center;\n}\n\n.game-console-controller {\n    margin-bottom: 2rem;\n}\n\n.direction-pad {\n    grid-area: d-pad;\n    display: grid;\n    grid-template-areas:\n        \". up .\"\n        \"left central right\"\n        \". down .\";\n}\n\n[id*=\"-btn\"], #central-pad { \n    border: none;\n    background-color: #4d5061; \n}\n\n.direction-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#up-btn { \n    grid-area: up; \n    border-top-left-radius: 0.2rem;\n    border-top-right-radius: 0.2rem;\n}\n\n#up-arrow {\n    width: 0; \n    height: 0; \n    border-left: 0.6rem solid transparent;\n    border-right: 0.6rem solid transparent;\n    border-bottom: 0.6rem solid #2a2e3d;\n}\n\n#right-btn { \n    grid-area: right; \n    border-top-right-radius: 0.2rem;\n    border-bottom-right-radius: 0.2rem;\n}\n\n#right-arrow {\n    width: 0; \n    height: 0; \n    border-top: 0.6rem solid transparent;\n    border-bottom: 0.6rem solid transparent;\n    border-left: 0.6rem solid #2a2e3d;\n}\n\n#down-btn { \n    grid-area: down; \n    border-bottom-left-radius: 0.2rem;\n    border-bottom-right-radius: 0.2rem;\n}\n\n#down-arrow {\n    width: 0; \n    height: 0; \n    border-left: 0.6rem solid transparent;\n    border-right: 0.6rem solid transparent;\n    border-top: 0.6rem solid #2a2e3d;\n}\n\n#left-btn { \n    grid-area: left; \n    border-top-left-radius: 0.2rem;\n    border-bottom-left-radius: 0.2rem;\n}\n\n#left-arrow {\n    width: 0; \n    height: 0; \n    border-top: 0.6rem solid transparent;\n    border-bottom: 0.6rem solid transparent;\n    border-right: 0.6rem solid #2a2e3d;\n}\n\n#central-pad { grid-area: central; }\n\n.action-button {\n    width: 4rem;\n    height: 4rem;\n    border-radius: 2rem;\n}\n\n#a-btn { grid-area: a-btn; }\n\n#b-btn { grid-area: b-btn; }\n\n.user-button {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    height: 2rem;\n}\n\n.user-button > [class*=\"label\"] { color: #f08d00; }\n\n.user-button > button {\n    width: 3rem;\n    height: 1rem;\n    border-radius: 0.5rem;\n}\n\n#start-container { grid-area: start; }\n\n#select-container { grid-area: select; }\n\n@media (orientation: portrait) {\n    .game-console {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    .game-console-display {\n        margin-top: 2rem;\n        width: 90vw;\n        height: 45vh;\n    }\n\n    .game-console-controller {\n        width: 90vw;\n        height: 35vh;\n        display: grid;\n        grid-template-areas:\n            \"d-pad d-pad d-pad d-pad . b-btn\"\n            \"d-pad d-pad d-pad d-pad a-btn .\"\n            \"d-pad d-pad d-pad d-pad . .\"\n            \". . . start select .\";\n    }\n\n    .direction-pad {\n        margin-right: 2rem;\n        margin-bottom: 2rem;\n    }\n}\n\n@media (orientation: landscape) {\n    .game-console {\n        position: absolute;\n    }\n\n    .game-console-display {\n        position: relative;\n        width: 50vw;\n        height: 90vh;\n        left: 25vw;\n        top: 5vh;\n        z-index: 1;\n    }\n\n    .game-console-controller {\n        position: absolute;\n        top: 2.5vh;\n        left: 2.5vw;\n        width: 95vw;\n        height: 95vh;\n        z-index: 0;\n        display: grid;\n        grid-template-areas:\n            \". . . . . . . . . .\"\n            \"d-pad d-pad . . . . . . . .\"\n            \"d-pad d-pad . . . . . . . a-btn\"\n            \". . . . . . . . . .\"\n            \"start . . . . . . . . b-btn\"\n            \"select . . . . . . . . .\";\n    }\n\n    .direction-pad {\n        width: 9rem;\n        height: 9rem;\n    }\n\n    .direction-button, #central-pad {\n        width: 3rem;\n        height: 3rem;\n    }\n}"],"sourceRoot":""}]);
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
     * Governs the A or B Buttons for the Game Console.
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
     * Governs the Directional Buttons for the Game Console.
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
     * Governs a Direction Button for the Direction Pad on the Game Console.
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
     * Governs the Start or Select Buttons for the Game Console.
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
     * Governs the Game Console Controller.
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
        this._module.classList.add("game-console-controller");

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
     * Governs the Game Console Display.
     */
    constructor () {
        // Generate Display DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("game-console-display");
    }

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
        // Create Game Console Module DOM Element
        this._module = document.createElement("div");
        this._module.classList.add("game-console");

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
        this._module.appendChild(this._display.module);
        this._module.appendChild(controller.module);
    }

    get module () { return this._module; }

    set module (elem) { this._module = elem; }

    get game () { return this._game; }

    set game (game) { this._game = game; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVwQix3QkFBd0I7O0FBRXhCLGtCQUFrQjs7QUFFbEIsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlEZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnNvbGUtc3R5bGluZy5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29uc29sZS1zdHlsaW5nLmNzcz8xZWZmIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9jb250cm9sbGVyLW1vZHVsZXMvYWN0aW9uLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnRyb2xsZXItbW9kdWxlcy9kLXBhZC5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnRyb2xsZXItbW9kdWxlcy9kaXJlY3Rpb24tYnV0dG9uLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29udHJvbGxlci1tb2R1bGVzL3VzZXItYnV0dG9uLmpzIiwid2VicGFjazovL2dhbWVjaGlwLy4vc3JjL2dhbWUtY2hpcC1tb2R1bGUvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9nYW1lY2hpcC8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9nYW1lLWNoaXAuanMiLCJ3ZWJwYWNrOi8vZ2FtZWNoaXAvLi9zcmMvZ2FtZS1jaGlwLW1vZHVsZS9nYW1lLWludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTWVyb21TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJNZXJvbSBTYW5zXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5nYW1lLWNvbnNvbGUge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogXCJNZXJvbSBTYW5zXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyYWQyNjtcbn1cblxuLmdhbWUtY29uc29sZS1kaXNwbGF5IHsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDEwMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS1jb25zb2xlLWNvbnRyb2xsZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5kaXJlY3Rpb24tcGFkIHtcbiAgICBncmlkLWFyZWE6IGQtcGFkO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCIuIHVwIC5cIlxuICAgICAgICBcImxlZnQgY2VudHJhbCByaWdodFwiXG4gICAgICAgIFwiLiBkb3duIC5cIjtcbn1cblxuW2lkKj1cIi1idG5cIl0sICNjZW50cmFsLXBhZCB7IFxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ1MDYxOyBcbn1cblxuLmRpcmVjdGlvbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3VwLWJ0biB7IFxuICAgIGdyaWQtYXJlYTogdXA7IFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMnJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xufVxuXG4jdXAtYXJyb3cge1xuICAgIHdpZHRoOiAwOyBcbiAgICBoZWlnaHQ6IDA7IFxuICAgIGJvcmRlci1sZWZ0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMC42cmVtIHNvbGlkICMyYTJlM2Q7XG59XG5cbiNyaWdodC1idG4geyBcbiAgICBncmlkLWFyZWE6IHJpZ2h0OyBcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjJyZW07XG59XG5cbiNyaWdodC1hcnJvdyB7XG4gICAgd2lkdGg6IDA7IFxuICAgIGhlaWdodDogMDsgXG4gICAgYm9yZGVyLXRvcDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMC42cmVtIHNvbGlkICMyYTJlM2Q7XG59XG5cbiNkb3duLWJ0biB7IFxuICAgIGdyaWQtYXJlYTogZG93bjsgXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4ycmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjJyZW07XG59XG5cbiNkb3duLWFycm93IHtcbiAgICB3aWR0aDogMDsgXG4gICAgaGVpZ2h0OiAwOyBcbiAgICBib3JkZXItbGVmdDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xufVxuXG4jbGVmdC1idG4geyBcbiAgICBncmlkLWFyZWE6IGxlZnQ7IFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMnJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjJyZW07XG59XG5cbiNsZWZ0LWFycm93IHtcbiAgICB3aWR0aDogMDsgXG4gICAgaGVpZ2h0OiAwOyBcbiAgICBib3JkZXItdG9wOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMC42cmVtIHNvbGlkICMyYTJlM2Q7XG59XG5cbiNjZW50cmFsLXBhZCB7IGdyaWQtYXJlYTogY2VudHJhbDsgfVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbiNhLWJ0biB7IGdyaWQtYXJlYTogYS1idG47IH1cblxuI2ItYnRuIHsgZ3JpZC1hcmVhOiBiLWJ0bjsgfVxuXG4udXNlci1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDJyZW07XG59XG5cbi51c2VyLWJ1dHRvbiA+IFtjbGFzcyo9XCJsYWJlbFwiXSB7IGNvbG9yOiAjZjA4ZDAwOyB9XG5cbi51c2VyLWJ1dHRvbiA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuI3N0YXJ0LWNvbnRhaW5lciB7IGdyaWQtYXJlYTogc3RhcnQ7IH1cblxuI3NlbGVjdC1jb250YWluZXIgeyBncmlkLWFyZWE6IHNlbGVjdDsgfVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIC5nYW1lLWNvbnNvbGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmdhbWUtY29uc29sZS1kaXNwbGF5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgIGhlaWdodDogNDV2aDtcbiAgICB9XG5cbiAgICAuZ2FtZS1jb25zb2xlLWNvbnRyb2xsZXIge1xuICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgXCJkLXBhZCBkLXBhZCBkLXBhZCBkLXBhZCAuIGItYnRuXCJcbiAgICAgICAgICAgIFwiZC1wYWQgZC1wYWQgZC1wYWQgZC1wYWQgYS1idG4gLlwiXG4gICAgICAgICAgICBcImQtcGFkIGQtcGFkIGQtcGFkIGQtcGFkIC4gLlwiXG4gICAgICAgICAgICBcIi4gLiAuIHN0YXJ0IHNlbGVjdCAuXCI7XG4gICAgfVxuXG4gICAgLmRpcmVjdGlvbi1wYWQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAuZ2FtZS1jb25zb2xlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC5nYW1lLWNvbnNvbGUtZGlzcGxheSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgICAgbGVmdDogMjV2dztcbiAgICAgICAgdG9wOiA1dmg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLmdhbWUtY29uc29sZS1jb250cm9sbGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIuNXZoO1xuICAgICAgICBsZWZ0OiAyLjV2dztcbiAgICAgICAgd2lkdGg6IDk1dnc7XG4gICAgICAgIGhlaWdodDogOTV2aDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgIFwiLiAuIC4gLiAuIC4gLiAuIC4gLlwiXG4gICAgICAgICAgICBcImQtcGFkIGQtcGFkIC4gLiAuIC4gLiAuIC4gLlwiXG4gICAgICAgICAgICBcImQtcGFkIGQtcGFkIC4gLiAuIC4gLiAuIC4gYS1idG5cIlxuICAgICAgICAgICAgXCIuIC4gLiAuIC4gLiAuIC4gLiAuXCJcbiAgICAgICAgICAgIFwic3RhcnQgLiAuIC4gLiAuIC4gLiAuIGItYnRuXCJcbiAgICAgICAgICAgIFwic2VsZWN0IC4gLiAuIC4gLiAuIC4gLiAuXCI7XG4gICAgfVxuXG4gICAgLmRpcmVjdGlvbi1wYWQge1xuICAgICAgICB3aWR0aDogOXJlbTtcbiAgICAgICAgaGVpZ2h0OiA5cmVtO1xuICAgIH1cblxuICAgIC5kaXJlY3Rpb24tYnV0dG9uLCAjY2VudHJhbC1wYWQge1xuICAgICAgICB3aWR0aDogM3JlbTtcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nYW1lLWNoaXAtbW9kdWxlL2NvbnNvbGUtc3R5bGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiOzs7a0JBR2M7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0QyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLHVDQUF1QztJQUN2QyxrQ0FBa0M7QUFDdEM7O0FBRUEsZUFBZSxrQkFBa0IsRUFBRTs7QUFFbkM7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQSxTQUFTLGdCQUFnQixFQUFFOztBQUUzQixTQUFTLGdCQUFnQixFQUFFOztBQUUzQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBLGtDQUFrQyxjQUFjLEVBQUU7O0FBRWxEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUEsbUJBQW1CLGdCQUFnQixFQUFFOztBQUVyQyxvQkFBb0IsaUJBQWlCLEVBQUU7O0FBRXZDO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYjs7OztrQ0FJMEI7SUFDOUI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixRQUFRO1FBQ1IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVO1FBQ1YsYUFBYTtRQUNiOzs7Ozs7c0NBTThCO0lBQ2xDOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1lcm9tIFNhbnNcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi4vZm9udHMvTWVyb21TYW5zLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbi5nYW1lLWNvbnNvbGUge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNZXJvbSBTYW5zXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyYWQyNjtcXG59XFxuXFxuLmdhbWUtY29uc29sZS1kaXNwbGF5IHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDEwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWNvbnNvbGUtY29udHJvbGxlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5kaXJlY3Rpb24tcGFkIHtcXG4gICAgZ3JpZC1hcmVhOiBkLXBhZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCIuIHVwIC5cXFwiXFxuICAgICAgICBcXFwibGVmdCBjZW50cmFsIHJpZ2h0XFxcIlxcbiAgICAgICAgXFxcIi4gZG93biAuXFxcIjtcXG59XFxuXFxuW2lkKj1cXFwiLWJ0blxcXCJdLCAjY2VudHJhbC1wYWQgeyBcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ1MDYxOyBcXG59XFxuXFxuLmRpcmVjdGlvbi1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3VwLWJ0biB7IFxcbiAgICBncmlkLWFyZWE6IHVwOyBcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4ycmVtO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4jdXAtYXJyb3cge1xcbiAgICB3aWR0aDogMDsgXFxuICAgIGhlaWdodDogMDsgXFxuICAgIGJvcmRlci1sZWZ0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogMC42cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAwLjZyZW0gc29saWQgIzJhMmUzZDtcXG59XFxuXFxuI3JpZ2h0LWJ0biB7IFxcbiAgICBncmlkLWFyZWE6IHJpZ2h0OyBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuI3JpZ2h0LWFycm93IHtcXG4gICAgd2lkdGg6IDA7IFxcbiAgICBoZWlnaHQ6IDA7IFxcbiAgICBib3JkZXItdG9wOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xcbn1cXG5cXG4jZG93bi1idG4geyBcXG4gICAgZ3JpZC1hcmVhOiBkb3duOyBcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4ycmVtO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4jZG93bi1hcnJvdyB7XFxuICAgIHdpZHRoOiAwOyBcXG4gICAgaGVpZ2h0OiAwOyBcXG4gICAgYm9yZGVyLWxlZnQ6IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3A6IDAuNnJlbSBzb2xpZCAjMmEyZTNkO1xcbn1cXG5cXG4jbGVmdC1idG4geyBcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0OyBcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4ycmVtO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbiNsZWZ0LWFycm93IHtcXG4gICAgd2lkdGg6IDA7IFxcbiAgICBoZWlnaHQ6IDA7IFxcbiAgICBib3JkZXItdG9wOiAwLjZyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDAuNnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjZyZW0gc29saWQgIzJhMmUzZDtcXG59XFxuXFxuI2NlbnRyYWwtcGFkIHsgZ3JpZC1hcmVhOiBjZW50cmFsOyB9XFxuXFxuLmFjdGlvbi1idXR0b24ge1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4jYS1idG4geyBncmlkLWFyZWE6IGEtYnRuOyB9XFxuXFxuI2ItYnRuIHsgZ3JpZC1hcmVhOiBiLWJ0bjsgfVxcblxcbi51c2VyLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4udXNlci1idXR0b24gPiBbY2xhc3MqPVxcXCJsYWJlbFxcXCJdIHsgY29sb3I6ICNmMDhkMDA7IH1cXG5cXG4udXNlci1idXR0b24gPiBidXR0b24ge1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbiNzdGFydC1jb250YWluZXIgeyBncmlkLWFyZWE6IHN0YXJ0OyB9XFxuXFxuI3NlbGVjdC1jb250YWluZXIgeyBncmlkLWFyZWE6IHNlbGVjdDsgfVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICAgIC5nYW1lLWNvbnNvbGUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lLWNvbnNvbGUtZGlzcGxheSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxuICAgICAgICBoZWlnaHQ6IDQ1dmg7XFxuICAgIH1cXG5cXG4gICAgLmdhbWUtY29uc29sZS1jb250cm9sbGVyIHtcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcImQtcGFkIGQtcGFkIGQtcGFkIGQtcGFkIC4gYi1idG5cXFwiXFxuICAgICAgICAgICAgXFxcImQtcGFkIGQtcGFkIGQtcGFkIGQtcGFkIGEtYnRuIC5cXFwiXFxuICAgICAgICAgICAgXFxcImQtcGFkIGQtcGFkIGQtcGFkIGQtcGFkIC4gLlxcXCJcXG4gICAgICAgICAgICBcXFwiLiAuIC4gc3RhcnQgc2VsZWN0IC5cXFwiO1xcbiAgICB9XFxuXFxuICAgIC5kaXJlY3Rpb24tcGFkIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAgIC5nYW1lLWNvbnNvbGUge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lLWNvbnNvbGUtZGlzcGxheSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogNTB2dztcXG4gICAgICAgIGhlaWdodDogOTB2aDtcXG4gICAgICAgIGxlZnQ6IDI1dnc7XFxuICAgICAgICB0b3A6IDV2aDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgLmdhbWUtY29uc29sZS1jb250cm9sbGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMi41dmg7XFxuICAgICAgICBsZWZ0OiAyLjV2dztcXG4gICAgICAgIHdpZHRoOiA5NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiA5NXZoO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCIuIC4gLiAuIC4gLiAuIC4gLiAuXFxcIlxcbiAgICAgICAgICAgIFxcXCJkLXBhZCBkLXBhZCAuIC4gLiAuIC4gLiAuIC5cXFwiXFxuICAgICAgICAgICAgXFxcImQtcGFkIGQtcGFkIC4gLiAuIC4gLiAuIC4gYS1idG5cXFwiXFxuICAgICAgICAgICAgXFxcIi4gLiAuIC4gLiAuIC4gLiAuIC5cXFwiXFxuICAgICAgICAgICAgXFxcInN0YXJ0IC4gLiAuIC4gLiAuIC4gLiBiLWJ0blxcXCJcXG4gICAgICAgICAgICBcXFwic2VsZWN0IC4gLiAuIC4gLiAuIC4gLiAuXFxcIjtcXG4gICAgfVxcblxcbiAgICAuZGlyZWN0aW9uLXBhZCB7XFxuICAgICAgICB3aWR0aDogOXJlbTtcXG4gICAgICAgIGhlaWdodDogOXJlbTtcXG4gICAgfVxcblxcbiAgICAuZGlyZWN0aW9uLWJ1dHRvbiwgI2NlbnRyYWwtcGFkIHtcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb25zb2xlLXN0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29uc29sZS1zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQnV0dG9uIHtcbiAgICAvKipcbiAgICAgKiBBY3Rpb24gQnV0dG9uIENsYXNzXG4gICAgICogXG4gICAgICogR292ZXJucyB0aGUgQSBvciBCIEJ1dHRvbnMgZm9yIHRoZSBHYW1lIENvbnNvbGUuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIGNsaWNrQ2FsbGJhY2sgQ2xpY2sgQnV0dG9uIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidG5UeXBlIFVzZXIgQnV0dG9uIFR5cGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciAoY2xpY2tDYWxsYmFjaywgYnRuVHlwZSkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBBY3Rpb24gQnV0dG9uIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uLWJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5fYnV0dG9uLmlkID0gYnRuVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItYnRuXCI7XG4gICAgICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9IGJ0blR5cGU7XG5cbiAgICAgICAgLy8gQWRkIENsaWNrIEV2ZW50IExpc3RlbmVyIHRvIEJ1dHRvblxuICAgICAgICB0aGlzLl9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IGNsaWNrQ2FsbGJhY2soKTsgfSlcbiAgICB9XG5cbiAgICBnZXQgYnV0dG9uICgpIHsgcmV0dXJuIHRoaXMuX2J1dHRvbjsgfVxuXG4gICAgc2V0IGJ1dHRvbiAoYnRuKSB7IHRoaXMuX2J1dHRvbiA9IGJ0bjsgfVxufSIsImltcG9ydCBEaXJlY3Rpb25CdXR0b24gZnJvbSBcIi4vZGlyZWN0aW9uLWJ1dHRvbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3Rpb25QYWQge1xuICAgIC8qKlxuICAgICAqIERpcmVjdGlvbiBQYWQgQ2xhc3NcbiAgICAgKiBcbiAgICAgKiBHb3Zlcm5zIHRoZSBEaXJlY3Rpb25hbCBCdXR0b25zIGZvciB0aGUgR2FtZSBDb25zb2xlLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayB1cENhbGxiYWNrIFVwIENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayByaWdodENhbGxiYWNrIFJpZ2h0IENsaWNrIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIEBjYWxsYmFjayBkb3duQ2FsbGJhY2sgRG93biBDbGljayBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAY2FsbGJhY2sgbGVmdENhbGxiYWNrIExlZnQgQ2xpY2sgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKHVwQ2FsbGJhY2ssIHJpZ2h0Q2FsbGJhY2ssIGRvd25DYWxsYmFjaywgbGVmdENhbGxiYWNrKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIFBhZCBET00gRWxlbWVudDsgICAgXG4gICAgICAgIHRoaXMuX3BhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX3BhZC5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9uLXBhZFwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgRGlyZWN0aW9uYWwgQnV0dG9uc1xuICAgICAgICBjb25zdCB1cCA9IG5ldyBEaXJlY3Rpb25CdXR0b24odXBDYWxsYmFjaywgXCJ1cFwiKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBuZXcgRGlyZWN0aW9uQnV0dG9uKHJpZ2h0Q2FsbGJhY2ssIFwicmlnaHRcIik7XG4gICAgICAgIGNvbnN0IGRvd24gPSBuZXcgRGlyZWN0aW9uQnV0dG9uKGRvd25DYWxsYmFjaywgXCJkb3duXCIpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gbmV3IERpcmVjdGlvbkJ1dHRvbihsZWZ0Q2FsbGJhY2ssIFwibGVmdFwiKTtcbiAgICAgICAgY29uc3QgY2VudHJhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNlbnRyYWwuaWQgPSAoXCJjZW50cmFsLXBhZFwiKTtcblxuICAgICAgICAvLyBBcHBlbmQgRGlyZWN0aW9uYWwgQnV0dG9ucyB0byBQYWRcbiAgICAgICAgdGhpcy5fcGFkLmFwcGVuZENoaWxkKHVwLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX3BhZC5hcHBlbmRDaGlsZChyaWdodC5idXR0b24pO1xuICAgICAgICB0aGlzLl9wYWQuYXBwZW5kQ2hpbGQoZG93bi5idXR0b24pO1xuICAgICAgICB0aGlzLl9wYWQuYXBwZW5kQ2hpbGQobGVmdC5idXR0b24pO1xuICAgICAgICB0aGlzLl9wYWQuYXBwZW5kQ2hpbGQoY2VudHJhbCk7XG4gICAgfVxuXG4gICAgZ2V0IHBhZCAoKSB7IHJldHVybiB0aGlzLl9wYWQ7IH1cblxuICAgIHNldCBwYWQgKGVsZW0pIHsgdGhpcy5fcGFkID0gZWxlbTsgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGlvbkJ1dHRvbiB7XG4gICAgLyoqXG4gICAgICogRGlyZWN0aW9uIEJ1dHRvbiBDbGFzc1xuICAgICAqIFxuICAgICAqIEdvdmVybnMgYSBEaXJlY3Rpb24gQnV0dG9uIGZvciB0aGUgRGlyZWN0aW9uIFBhZCBvbiB0aGUgR2FtZSBDb25zb2xlLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjbGlja0NhbGxiYWNrIENsaWNrIEJ1dHRvbiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnRuVHlwZSBVc2VyIEJ1dHRvbiBUeXBlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNsaWNrQ2FsbGJhY2ssIGJ0blR5cGUpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgRGlyZWN0aW9uIEJ1dHRvbiBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9idXR0b24uY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvbi1idXR0b25cIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5pZCA9IGJ0blR5cGUgKyBcIi1idG5cIjtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBBcnJvdyBET00gRWxlbWVudFxuICAgICAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFycm93LmlkID0gYnRuVHlwZSArIFwiLWFycm93XCI7XG5cbiAgICAgICAgLy8gQXBwZW5kIEFycm93IHRvIEJ1dHRvblxuICAgICAgICB0aGlzLl9idXR0b24uYXBwZW5kQ2hpbGQoYXJyb3cpO1xuXG4gICAgICAgIC8vIEFkZCBDbGljayBFdmVudCBMaXN0ZW5lciB0byBCdXR0b25cbiAgICAgICAgdGhpcy5fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4geyBjbGlja0NhbGxiYWNrKCk7IH0pXG4gICAgfVxuXG4gICAgZ2V0IGJ1dHRvbiAoKSB7IHJldHVybiB0aGlzLl9idXR0b247IH1cblxuICAgIHNldCBidXR0b24gKGJ0bikgeyB0aGlzLl9idXR0b24gPSBidG47IH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQnV0dG9uIHtcbiAgICAvKipcbiAgICAgKiBVc2VyIEJ1dHRvbiBDbGFzc1xuICAgICAqIFxuICAgICAqIEdvdmVybnMgdGhlIFN0YXJ0IG9yIFNlbGVjdCBCdXR0b25zIGZvciB0aGUgR2FtZSBDb25zb2xlLlxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBjbGlja0NhbGxiYWNrIENsaWNrIEJ1dHRvbiBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnRuVHlwZSBVc2VyIEJ1dHRvbiBUeXBlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGNsaWNrQ2FsbGJhY2ssIGJ0blR5cGUpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgQ29udGFpbmVyIERPTSBFbGVtZW50XG4gICAgICAgIHRoaXMuX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidXNlci1idXR0b25cIik7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5pZCA9IGJ0blR5cGUudG9Mb3dlckNhc2UoKSArIFwiLWNvbnRhaW5lclwiO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIExhYmVsIERPTSBFbGVtZW50XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInVzZXItYnV0dG9uLWxhYmVsXCIpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGJ0blR5cGUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBCdXR0b24gRE9NIEVsZW1lbnRcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLmlkID0gYnRuVHlwZS50b0xvd2VyQ2FzZSgpICsgXCItYnRuXCI7XG5cbiAgICAgICAgLy8gQWRkIENsaWNrIEV2ZW50IExpc3RlbmVyIHRvIEJ1dHRvblxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IGNsaWNrQ2FsbGJhY2soKTsgfSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIE9iamVjdHMgdG8gQ29udGFpbmVyXG4gICAgICAgIHRoaXMuX2J1dHRvbi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIHRoaXMuX2J1dHRvbi5hcHBlbmRDaGlsZChidG4pO1xuICAgIH1cblxuICAgIGdldCBidXR0b24gKCkgeyByZXR1cm4gdGhpcy5fYnV0dG9uOyB9XG5cbiAgICBzZXQgYnV0dG9uIChidG4pIHsgdGhpcy5fYnV0dG9uID0gYnRuOyB9XG59IiwiaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwiLi9jb250cm9sbGVyLW1vZHVsZXMvYWN0aW9uLWJ1dHRvbi5qc1wiO1xuaW1wb3J0IERpcmVjdGlvblBhZCBmcm9tIFwiLi9jb250cm9sbGVyLW1vZHVsZXMvZC1wYWQuanNcIjtcbmltcG9ydCBVc2VyQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xsZXItbW9kdWxlcy91c2VyLWJ1dHRvbi5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiBDb250cm9sbGVyIENsYXNzXG4gICAgICogXG4gICAgICogR292ZXJucyB0aGUgR2FtZSBDb25zb2xlIENvbnRyb2xsZXIuXG4gICAgICogXG4gICAgICogQGNhbGxiYWNrIHVwQ2FsbGJhY2sgXG4gICAgICogQGNhbGxiYWNrIHJpZ2h0Q2FsbGJhY2sgXG4gICAgICogQGNhbGxiYWNrIGRvd25DYWxsYmFjayBcbiAgICAgKiBAY2FsbGJhY2sgbGVmdENhbGxiYWNrIFxuICAgICAqIEBjYWxsYmFjayBhQ2FsbGJhY2sgXG4gICAgICogQGNhbGxiYWNrIGJDYWxsYmFjayBcbiAgICAgKiBAY2FsbGJhY2sgc3RhcnRDYWxsYmFjayBcbiAgICAgKiBAY2FsbGJhY2sgc2VsZWN0Q2FsbGJhY2sgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICB1cENhbGxiYWNrLCBcbiAgICAgICAgcmlnaHRDYWxsYmFjaywgXG4gICAgICAgIGRvd25DYWxsYmFjaywgXG4gICAgICAgIGxlZnRDYWxsYmFjaywgXG4gICAgICAgIGFDYWxsYmFjaywgXG4gICAgICAgIGJDYWxsYmFjaywgXG4gICAgICAgIHN0YXJ0Q2FsbGJhY2ssIFxuICAgICAgICBzZWxlY3RDYWxsYmFja1xuICAgICkge1xuICAgICAgICAvLyBHZW5lcmF0ZSBNb2R1bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJnYW1lLWNvbnNvbGUtY29udHJvbGxlclwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIERpcmVjdGlvbiBQYWRcbiAgICAgICAgY29uc3QgZFBhZCA9IG5ldyBEaXJlY3Rpb25QYWQodXBDYWxsYmFjaywgcmlnaHRDYWxsYmFjaywgZG93bkNhbGxiYWNrLCBsZWZ0Q2FsbGJhY2spO1xuXG4gICAgICAgIC8vIENyZWF0ZSBBICYgQiBCdXR0b25zXG4gICAgICAgIGNvbnN0IGFCdG4gPSBuZXcgQWN0aW9uQnV0dG9uKGFDYWxsYmFjaywgXCJBXCIpO1xuICAgICAgICBjb25zdCBiQnRuID0gbmV3IEFjdGlvbkJ1dHRvbihiQ2FsbGJhY2ssIFwiQlwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgU3RhcnQgJiBTZWxlY3QgQnV0dG9uc1xuICAgICAgICBjb25zdCBzdGFydEJ0biA9IG5ldyBVc2VyQnV0dG9uKHN0YXJ0Q2FsbGJhY2ssIFwiU3RhcnRcIik7XG4gICAgICAgIGNvbnN0IHNlbGVjdEJ0biA9IG5ldyBVc2VyQnV0dG9uKHNlbGVjdENhbGxiYWNrLCBcIlNlbGVjdFwiKTtcblxuICAgICAgICAvLyBBcHBlbmQgT2JqZWN0cyB0byBNb2R1bGVcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKGRQYWQucGFkKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKGFCdG4uYnV0dG9uKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKGJCdG4uYnV0dG9uKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHN0YXJ0QnRuLmJ1dHRvbik7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZChzZWxlY3RCdG4uYnV0dG9uKTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XG4gICAgLyoqXG4gICAgICogRGlzcGxheSBDbGFzc1xuICAgICAqIFxuICAgICAqIEdvdmVybnMgdGhlIEdhbWUgQ29uc29sZSBEaXNwbGF5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgRGlzcGxheSBET00gRWxlbWVudFxuICAgICAgICB0aGlzLl9tb2R1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLl9tb2R1bGUuY2xhc3NMaXN0LmFkZChcImdhbWUtY29uc29sZS1kaXNwbGF5XCIpO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUgKCkgeyByZXR1cm4gdGhpcy5fbW9kdWxlOyB9XG5cbiAgICBzZXQgbW9kdWxlIChlbGVtKSB7IHRoaXMuX21vZHVsZSA9IGVsZW07IH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgTWV0aG9kXG4gICAgICogXG4gICAgICogVXBkYXRlIHRoZSBEaXNwbGF5IHRvIFNob3cgdGhlIERlc2lyZWQgRWxlbWVudC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IGVsZW0gRWxlbWVudCB0byBEaXNwbGF5XG4gICAgICogQHBhcmFtIHtib29sZWFufSBvdmVybGF5IERlZmF1bHQgaXMgRmFsc2VcbiAgICAgKi9cbiAgICBzaG93IChlbGVtLCBvdmVybGF5PWZhbHNlKSB7XG4gICAgICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgICAgICAgdGhpcy5fbW9kdWxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLl9tYWluID0gZWxlbTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tb2R1bGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGFrZSBEb3duIE1ldGhvZFxuICAgICAqIFxuICAgICAqIFVwZGF0ZSB0aGUgRGlzcGxheSB0byByZW1vdmUgYW55IG92ZXJsYXllZCBlbGVtZW50LlxuICAgICAqL1xuICAgIHRha2VEb3duICgpIHtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX21vZHVsZS5hcHBlbmRDaGlsZCh0aGlzLl9tYWluKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgRGltZW5zaW9ucyBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIFNjcmVlbiBXaWR0aCBhbmQgSGVpZ2h0IGZvciB0aGUgR2FtZS5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBEaWN0aW9uYXJ5IG9mIFNjcmVlbiBXaWR0aCBhbmQgSGVpZ2h0XG4gICAgICovXG4gICAgZ2V0RGltZW5zaW9ucyAoKSB7IHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLl9tb2R1bGUuY2xpZW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5fbW9kdWxlLmNsaWVudEhlaWdodFxuICAgIH07IH1cbn0iLCJpbXBvcnQgXCIuL2NvbnNvbGUtc3R5bGluZy5jc3NcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBEaXNwbGF5IGZyb20gXCIuL2Rpc3BsYXkuanNcIjtcbmltcG9ydCBHYW1lSW50ZXJmYWNlIGZyb20gXCIuL2dhbWUtaW50ZXJmYWNlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDaGlwIHtcbiAgICAvKipcbiAgICAgKiBHYW1lQ2hpcCBDbGFzc1xuICAgICAqIFxuICAgICAqIENvbnNvbGUgb24gd2hpY2ggYSBHYW1lIGNhbiBiZSBQbGF5ZWQuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtHYW1lSW50ZXJmYWNlfSBnYW1lIEdhbWUgdG8gYmUgUGxheWVkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGdhbWUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIEdhbWUgQ29uc29sZSBNb2R1bGUgRE9NIEVsZW1lbnRcbiAgICAgICAgdGhpcy5fbW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmNsYXNzTGlzdC5hZGQoXCJnYW1lLWNvbnNvbGVcIik7XG5cbiAgICAgICAgLy8gSW5pdGlhbGlzZSBHYW1lIFZhcmlhYmxlXG4gICAgICAgIHRoaXMuX2dhbWUgPSBnYW1lO1xuXG4gICAgICAgIC8vIENyZWF0ZSBHYW1lIERpc3BsYXlcbiAgICAgICAgdGhpcy5fZGlzcGxheSA9IG5ldyBEaXNwbGF5KCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIENvbnRyb2xsZXJcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKFxuICAgICAgICAgICAgZ2FtZS51cENhbGxiYWNrLmJpbmQoZ2FtZSksXG4gICAgICAgICAgICBnYW1lLnJpZ2h0Q2FsbGJhY2suYmluZChnYW1lKSxcbiAgICAgICAgICAgIGdhbWUuZG93bkNhbGxiYWNrLmJpbmQoZ2FtZSksXG4gICAgICAgICAgICBnYW1lLmxlZnRDYWxsYmFjay5iaW5kKGdhbWUpLFxuICAgICAgICAgICAgZ2FtZS5hQ2FsbGJhY2suYmluZChnYW1lKSxcbiAgICAgICAgICAgIGdhbWUuYkNhbGxiYWNrLmJpbmQoZ2FtZSksXG4gICAgICAgICAgICBnYW1lLnN0YXJ0Q2FsbGJhY2suYmluZChnYW1lKSxcbiAgICAgICAgICAgIGdhbWUuc2VsZWN0Q2FsbGJhY2suYmluZChnYW1lKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEFwcGVuZCBPYmplY3RzIHRvIENvbnNvbGVcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKHRoaXMuX2Rpc3BsYXkubW9kdWxlKTtcbiAgICAgICAgdGhpcy5fbW9kdWxlLmFwcGVuZENoaWxkKGNvbnRyb2xsZXIubW9kdWxlKTtcbiAgICB9XG5cbiAgICBnZXQgbW9kdWxlICgpIHsgcmV0dXJuIHRoaXMuX21vZHVsZTsgfVxuXG4gICAgc2V0IG1vZHVsZSAoZWxlbSkgeyB0aGlzLl9tb2R1bGUgPSBlbGVtOyB9XG5cbiAgICBnZXQgZ2FtZSAoKSB7IHJldHVybiB0aGlzLl9nYW1lOyB9XG5cbiAgICBzZXQgZ2FtZSAoZ2FtZSkgeyB0aGlzLl9nYW1lID0gZ2FtZTsgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgTWV0aG9kXG4gICAgICogXG4gICAgICogU3RhcnQgdGhlIEdhbWUuXG4gICAgICovXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBTZXQgdGhlIFNjZW5lIGZvciB0aGUgR2FtZVxuICAgICAgICB0aGlzLl9nYW1lLnNldFNjZW5lKFxuICAgICAgICAgICAgdGhpcy5fZGlzcGxheS5zaG93LmJpbmQodGhpcy5fZGlzcGxheSksXG4gICAgICAgICAgICB0aGlzLl9kaXNwbGF5LnRha2VEb3duLmJpbmQodGhpcy5fZGlzcGxheSksXG4gICAgICAgICAgICB0aGlzLl9kaXNwbGF5LmdldERpbWVuc2lvbnMuYmluZCh0aGlzLl9kaXNwbGF5KVxuICAgICAgICApO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lSW50ZXJmYWNlIHtcbiAgICAvKipcbiAgICAgKiBHYW1lIEludGVyZmFjZSBDbGFzc1xuICAgICAqIFxuICAgICAqIEJhc2UgR2FtZSBDbGFzcyB0aGF0IHNob3VsZCBiZSBJbmhlcml0ZWQgYnkgT3RoZXIgR2FtZXMgdG8gYmUgUGxheWVkIG9uIFxuICAgICAqIHRoZSBHYW1lIENvbnNvbGUuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKCkge31cblxuICAgIC8qKlxuICAgICAqIFNldCBTaG93IE1ldGhvZFxuICAgICAqIFxuICAgICAqIFNldCB0aGUgU2hvdyBDYWxsYmFjayBNZXRob2QgZm9yIFVwZGF0aW5nIHRoZSBHYW1lIENvbnNvbGUgRGlzcGxheVxuICAgICAqIFxuICAgICAqIEBjYWxsYmFjayBzaG93Q2FsbGJhY2sgU2hvdyBDYWxsYmFja1xuICAgICAqIEBjYWxsYmFjayBkaW1lbnNpb25zQ2FsbGJhY2sgR2V0IERpbWVuc2lvbnMgQ2FsbGJhY2tcbiAgICAgKi9cbiAgICBzZXRTY2VuZSAoc2hvd0NhbGxiYWNrLCBnZXREaW1lbnNpb25zKSB7fVxuXG4gICAgLyoqXG4gICAgICogVXAgQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIFVwIEJ1dHRvbiBvbiB0aGUgRGlyZWN0aW9uIFBhZC5cbiAgICAgKi9cbiAgICB1cENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBSaWdodCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgUmlnaHQgQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIHJpZ2h0Q2FsbGJhY2sgKCkge31cblxuICAgIC8qKlxuICAgICAqIERvd24gQ2FsbGJhY2sgTWV0aG9kXG4gICAgICogXG4gICAgICogSGFuZGxlcyB0aGUgQ2xpY2sgb2YgdGhlIERvd24gQnV0dG9uIG9uIHRoZSBEaXJlY3Rpb24gUGFkLlxuICAgICAqL1xuICAgIGRvd25DYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogTGVmdCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgTGVmdCBCdXR0b24gb24gdGhlIERpcmVjdGlvbiBQYWQuXG4gICAgICovXG4gICAgbGVmdENhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBBIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBBIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYUNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBCIENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBCIEFjdGlvbiBCdXR0b24uXG4gICAgICovXG4gICAgYkNhbGxiYWNrICgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCBDYWxsYmFjayBNZXRob2RcbiAgICAgKiBcbiAgICAgKiBIYW5kbGVzIHRoZSBDbGljayBvZiB0aGUgU3RhcnQgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc3RhcnRDYWxsYmFjayAoKSB7fVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IENhbGxiYWNrIE1ldGhvZFxuICAgICAqIFxuICAgICAqIEhhbmRsZXMgdGhlIENsaWNrIG9mIHRoZSBTZWxlY3QgVXNlciBCdXR0b24uXG4gICAgICovXG4gICAgc2VsZWN0Q2FsbGJhY2sgKCkge31cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=