/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \**********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap;\\n  gap: 10px; }\\n\\n.btn {\\n  width: 100px;\\n  height: 100px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n  font-size: 30px;\\n  background: gray; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/render */ \"./src/utils/render.js\");\n/* harmony import */ var _utils_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/key */ \"./src/utils/key.js\");\n/* harmony import */ var _langs_langs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./langs/langs */ \"./src/langs/langs.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n// render(elem, [classList], [child], parent = null, ...attributes)\r\n\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/langs/eng.js":
/*!**************************!*\
  !*** ./src/langs/eng.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n        small: '`',\r\n        shift: '~',\r\n        code: 'Backquote',\r\n    },\r\n    {\r\n        small: '1',\r\n        shift: '!',\r\n        code: 'Digit1',\r\n    },\r\n    {\r\n        small: '2',\r\n        shift: '@',\r\n        code: 'Digit2',\r\n    },\r\n    {\r\n        small: '3',\r\n        shift: '#',\r\n        code: 'Digit3',\r\n    },\r\n    {\r\n        small: '4',\r\n        shift: '$',\r\n        code: 'Digit4',\r\n    },\r\n    {\r\n        small: '5',\r\n        shift: '%',\r\n        code: 'Digit5',\r\n    },\r\n    {\r\n        small: '6',\r\n        shift: '^',\r\n        code: 'Digit6',\r\n    },\r\n    {\r\n        small: '7',\r\n        shift: '&',\r\n        code: 'Digit7',\r\n    },\r\n    {\r\n        small: '8',\r\n        shift: '*',\r\n        code: 'Digit8',\r\n    },\r\n    {\r\n        small: '9',\r\n        shift: '(',\r\n        code: 'Digit9',\r\n    },\r\n    {\r\n        small: '0',\r\n        shift: ')',\r\n        code: 'Digit0',\r\n    },\r\n    {\r\n        small: '-',\r\n        shift: '_',\r\n        code: 'Minus',\r\n    },\r\n    {\r\n        small: '=',\r\n        shift: '+',\r\n        code: 'Equal',\r\n    },\r\n    {\r\n        small: 'Backspace',\r\n        shift: '',\r\n        code: 'Backspace',\r\n    },\r\n    {\r\n        small: 'Tab',\r\n        shift: 'null',\r\n        code: 'Tab',\r\n    },\r\n    {\r\n        small: 'q',\r\n        shift: 'Q',\r\n        code: 'KeyQ',\r\n    },\r\n    {\r\n        small: 'w',\r\n        shift: 'W',\r\n        code: 'KeyW',\r\n    },\r\n    {\r\n        small: 'e',\r\n        shift: 'E',\r\n        code: 'KeyE',\r\n    },\r\n    {\r\n        small: 'r',\r\n        shift: 'R',\r\n        code: 'KeyR',\r\n    },\r\n    {\r\n        small: 't',\r\n        shift: 'T',\r\n        code: 'KeyT',\r\n    },\r\n    {\r\n        small: 'y',\r\n        shift: 'Y',\r\n        code: 'KeyY',\r\n    },\r\n    {\r\n        small: 'u',\r\n        shift: 'U',\r\n        code: 'KeyU',\r\n    },\r\n    {\r\n        small: 'i',\r\n        shift: 'I',\r\n        code: 'KeyI',\r\n    },\r\n    {\r\n        small: 'o',\r\n        shift: 'O',\r\n        code: 'KeyO',\r\n    },\r\n    {\r\n        small: 'p',\r\n        shift: 'P',\r\n        code: 'KeyP',\r\n    },\r\n    {\r\n        small: '[',\r\n        shift: '{',\r\n        code: 'BracketLeft',\r\n    },\r\n    {\r\n        small: ']',\r\n        shift: '}',\r\n        code: 'BracketRight',\r\n    },\r\n    {\r\n        small: '\\\\',\r\n        shift: '|',\r\n        code: 'Backslash',\r\n    },\r\n    {\r\n        small: 'DEL',\r\n        shift: 'null',\r\n        code: 'Delete',\r\n    },\r\n    {\r\n        small: 'Capslock',\r\n        shift: 'null',\r\n        code: 'CapsLock',\r\n    },\r\n    {\r\n        small: 'a',\r\n        shift: 'A',\r\n        code: 'KeyA',\r\n    },\r\n    {\r\n        small: 's',\r\n        shift: 'S',\r\n        code: 'KeyS',\r\n    },\r\n    {\r\n        small: 'd',\r\n        shift: 'D',\r\n        code: 'KeyD',\r\n    },\r\n    {\r\n        small: 'f',\r\n        shift: 'F',\r\n        code: 'KeyF',\r\n    },\r\n    {\r\n        small: 'g',\r\n        shift: 'G',\r\n        code: 'KeyG',\r\n    },\r\n    {\r\n        small: 'h',\r\n        shift: 'H',\r\n        code: 'KeyH',\r\n    },\r\n    {\r\n        small: 'j',\r\n        shift: 'J',\r\n        code: 'KeyJ',\r\n    },\r\n    {\r\n        small: 'k',\r\n        shift: 'K',\r\n        code: 'KeyK',\r\n    },\r\n    {\r\n        small: 'l',\r\n        shift: 'L',\r\n        code: 'KeyL',\r\n    },\r\n    {\r\n        small: ';',\r\n        shift: ':',\r\n        code: 'Semicolon',\r\n    },\r\n    {\r\n        small: \"'\",\r\n        shift: '\"',\r\n        code: 'Quote',\r\n    },\r\n    {\r\n        small: 'ENTER',\r\n        shift: 'null',\r\n        code: 'Enter',\r\n    },\r\n    {\r\n        small: 'Shift',\r\n        shift: 'null',\r\n        code: 'ShiftLeft',\r\n    },\r\n    {\r\n        small: '\\\\',\r\n        shift: 'null',\r\n        code: 'IntlSlash',\r\n    },\r\n    {\r\n        small: 'z',\r\n        shift: 'Z',\r\n        code: 'KeyZ',\r\n    },\r\n    {\r\n        small: 'x',\r\n        shift: 'X',\r\n        code: 'KeyX',\r\n    },\r\n    {\r\n        small: 'c',\r\n        shift: 'C',\r\n        code: 'KeyC',\r\n    },\r\n    {\r\n        small: 'v',\r\n        shift: 'V',\r\n        code: 'KeyV',\r\n    },\r\n    {\r\n        small: 'b',\r\n        shift: 'B',\r\n        code: 'KeyB',\r\n    },\r\n    {\r\n        small: 'n',\r\n        shift: 'N',\r\n        code: 'KeyN',\r\n    },\r\n    {\r\n        small: 'm',\r\n        shift: 'M',\r\n        code: 'KeyM',\r\n    },\r\n    {\r\n        small: ',',\r\n        shift: '<',\r\n        code: 'Comma',\r\n    },\r\n    {\r\n        small: '.',\r\n        shift: '>',\r\n        code: 'Period',\r\n    },\r\n    {\r\n        small: '/',\r\n        shift: '?',\r\n        code: 'Slash',\r\n    },\r\n    {\r\n        small: 'Shift',\r\n        shift: 'null',\r\n        code: 'ShiftRight',\r\n    },\r\n    {\r\n        small: 'Ctrl',\r\n        shift: 'null',\r\n        code: 'ControlLeft',\r\n    },\r\n    {\r\n        small: 'Win',\r\n        shift: 'null',\r\n        code: 'OSLeft',\r\n    },\r\n    {\r\n        small: 'Alt',\r\n        shift: 'null',\r\n        code: 'AltLeft altKey',\r\n    },\r\n    {\r\n        small: ' ',\r\n        shift: 'null',\r\n        code: 'Space',\r\n    },\r\n    {\r\n        small: 'Alt',\r\n        shift: 'null',\r\n        code: 'AltRight altKey',\r\n    },\r\n    {\r\n        small: 'Ctrl',\r\n        shift: 'null',\r\n        code: 'ControlRight',\r\n    },\r\n    {\r\n        small: 'Left',\r\n        shift: 'null',\r\n        code: 'ArrowLeft',\r\n    },\r\n    {\r\n        small: 'Up',\r\n        shift: 'null',\r\n        code: 'ArrowUp',\r\n    },\r\n    {\r\n        small: 'Down',\r\n        shift: 'null',\r\n        code: 'ArrowDown',\r\n    },\r\n    {\r\n        small: 'Right',\r\n        shift: 'null',\r\n        code: 'ArrowRight',\r\n    },\r\n]);\n\n//# sourceURL=webpack://virtual-keyboard/./src/langs/eng.js?");

/***/ }),

/***/ "./src/langs/langs.js":
/*!****************************!*\
  !*** ./src/langs/langs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _eng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eng */ \"./src/langs/eng.js\");\n/* harmony import */ var _ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ru */ \"./src/langs/ru.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({eng: _eng__WEBPACK_IMPORTED_MODULE_0__[\"default\"], ru: _ru__WEBPACK_IMPORTED_MODULE_1__[\"default\"]});\n\n//# sourceURL=webpack://virtual-keyboard/./src/langs/langs.js?");

/***/ }),

/***/ "./src/langs/ru.js":
/*!*************************!*\
  !*** ./src/langs/ru.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n        small: 'ё',\r\n        shift: 'Ё',\r\n        code: 'Backquote',\r\n    },\r\n    {\r\n        small: '1',\r\n        shift: '!',\r\n        code: 'Digit1',\r\n    },\r\n    {\r\n        small: '2',\r\n        shift: '\"',\r\n        code: 'Digit2',\r\n    },\r\n    {\r\n        small: '3',\r\n        shift: '№',\r\n        code: 'Digit3',\r\n    },\r\n    {\r\n        small: '4',\r\n        shift: ';',\r\n        code: 'Digit4',\r\n    },\r\n    {\r\n        small: '5',\r\n        shift: '%',\r\n        code: 'Digit5',\r\n    },\r\n    {\r\n        small: '6',\r\n        shift: ':',\r\n        code: 'Digit6',\r\n    },\r\n    {\r\n        small: '7',\r\n        shift: '?',\r\n        code: 'Digit7',\r\n    },\r\n    {\r\n        small: '8',\r\n        shift: '*',\r\n        code: 'Digit8',\r\n    },\r\n    {\r\n        small: '9',\r\n        shift: '(',\r\n        code: 'Digit9',\r\n    },\r\n    {\r\n        small: '0',\r\n        shift: ')',\r\n        code: 'Digit0',\r\n    },\r\n    {\r\n        small: '-',\r\n        shift: '_',\r\n        code: 'Minus',\r\n    },\r\n    {\r\n        small: '=',\r\n        shift: '+',\r\n        code: 'Equal',\r\n    },\r\n    {\r\n        small: 'Backspace',\r\n        shift: '',\r\n        code: 'Backspace',\r\n    },\r\n    {\r\n        small: 'Tab',\r\n        shift: 'null',\r\n        code: 'Tab',\r\n    },\r\n    {\r\n        small: 'й',\r\n        shift: 'Й',\r\n        code: 'KeyQ',\r\n    },\r\n    {\r\n        small: 'ц',\r\n        shift: 'Ц',\r\n        code: 'KeyW',\r\n    },\r\n    {\r\n        small: 'у',\r\n        shift: 'У',\r\n        code: 'KeyE',\r\n    },\r\n    {\r\n        small: 'к',\r\n        shift: 'К',\r\n        code: 'KeyR',\r\n    },\r\n    {\r\n        small: 'е',\r\n        shift: 'Е',\r\n        code: 'KeyT',\r\n    },\r\n    {\r\n        small: 'н',\r\n        shift: 'Н',\r\n        code: 'KeyY',\r\n    },\r\n    {\r\n        small: 'г',\r\n        shift: 'Г',\r\n        code: 'KeyU',\r\n    },\r\n    {\r\n        small: 'ш',\r\n        shift: 'Ш',\r\n        code: 'KeyI',\r\n    },\r\n    {\r\n        small: 'щ',\r\n        shift: 'Щ',\r\n        code: 'KeyO',\r\n    },\r\n    {\r\n        small: 'з',\r\n        shift: 'З',\r\n        code: 'KeyP',\r\n    },\r\n    {\r\n        small: 'х',\r\n        shift: 'Х',\r\n        code: 'BracketLeft',\r\n    },\r\n    {\r\n        small: 'ъ',\r\n        shift: 'Ъ',\r\n        code: 'BracketRight',\r\n    },\r\n    {\r\n        small: '\\\\',\r\n        shift: '/',\r\n        code: 'Backslash',\r\n    },\r\n    {\r\n        small: 'Capslock',\r\n        shift: 'null',\r\n        code: 'Capslock',\r\n    },\r\n    {\r\n        small: 'ф',\r\n        shift: 'Ф',\r\n        code: 'KeyA',\r\n    },\r\n    {\r\n        small: 'ы',\r\n        shift: 'Ы',\r\n        code: 'KeyS',\r\n    },\r\n    {\r\n        small: 'в',\r\n        shift: 'В',\r\n        code: 'KeyD',\r\n    },\r\n    {\r\n        small: 'а',\r\n        shift: 'А',\r\n        code: 'KeyF',\r\n    },\r\n    {\r\n        small: 'п',\r\n        shift: 'П',\r\n        code: 'KeyG',\r\n    },\r\n    {\r\n        small: 'р',\r\n        shift: 'Р',\r\n        code: 'KeyH',\r\n    },\r\n    {\r\n        small: 'о',\r\n        shift: 'О',\r\n        code: 'KeyJ',\r\n    },\r\n    {\r\n        small: 'л',\r\n        shift: 'Л',\r\n        code: 'KeyK',\r\n    },\r\n    {\r\n        small: 'д',\r\n        shift: 'Д',\r\n        code: 'KeyL',\r\n    },\r\n    {\r\n        small: 'ж',\r\n        shift: 'Ж',\r\n        code: 'Semicolon',\r\n    },\r\n    {\r\n        small: 'э',\r\n        shift: 'Э',\r\n        code: 'Quote',\r\n    },\r\n    {\r\n        small: '',\r\n        shift: '',\r\n        code: '',\r\n    },\r\n    {\r\n        small: 'Enter',\r\n        shift: 'null',\r\n        code: 'Enter',\r\n    },\r\n    {\r\n        small: 'Shift',\r\n        shift: 'null',\r\n        code: 'ShiftLeft shiftKey',\r\n    },\r\n    {\r\n        small: 'я',\r\n        shift: 'Я',\r\n        code: 'KeyZ',\r\n    },\r\n    {\r\n        small: 'ч',\r\n        shift: 'Ч',\r\n        code: 'KeyX',\r\n    },\r\n    {\r\n        small: 'с',\r\n        shift: 'С',\r\n        code: 'KeyC',\r\n    },\r\n    {\r\n        small: 'м',\r\n        shift: 'М',\r\n        code: 'KeyV',\r\n    },\r\n    {\r\n        small: 'и',\r\n        shift: 'И',\r\n        code: 'KeyB',\r\n    },\r\n    {\r\n        small: 'т',\r\n        shift: 'Т',\r\n        code: 'KeyN',\r\n    },\r\n    {\r\n        small: 'ь',\r\n        shift: 'Ь',\r\n        code: 'KeyM',\r\n    },\r\n    {\r\n        small: 'б',\r\n        shift: 'Б',\r\n        code: 'Comma',\r\n    },\r\n    {\r\n        small: 'ю',\r\n        shift: 'Ю',\r\n        code: 'Period',\r\n    },\r\n    {\r\n        small: '.',\r\n        shift: ',',\r\n        code: 'Slash',\r\n    },\r\n    {\r\n        small: 'Shift',\r\n        shift: 'null',\r\n        code: 'ShiftRight shiftKey',\r\n    },\r\n    {\r\n        small: 'Ctrl',\r\n        shift: 'hull',\r\n        code: 'ControlLeft ctrlKey',\r\n    },\r\n    {\r\n        small: 'Win',\r\n        shift: 'null',\r\n        code: 'MetaLeft metaKey',\r\n    },\r\n    {\r\n        small: 'Alt',\r\n        shift: 'null',\r\n        code: 'AltLeft altKey',\r\n    },\r\n    {\r\n        small: 'Space',\r\n        shift: 'null',\r\n        code: 'Space',\r\n    },\r\n    {\r\n        small: 'Alt',\r\n        shift: 'null',\r\n        code: 'AltRight altKey',\r\n    },\r\n    {\r\n        small: 'Ctrl',\r\n        shift: 'null',\r\n        code: 'ControlRight ctrlKey',\r\n    },\r\n    {\r\n        small: 'ArrowLeft',\r\n        shift: 'null',\r\n        code: 'ArrowLeft',\r\n    },\r\n    {\r\n        small: 'ArrowUp',\r\n        shift: 'null',\r\n        code: 'ArrowUp',\r\n    },\r\n    {\r\n        small: 'ArrowDown',\r\n        shift: 'null',\r\n        code: 'ArrowDown',\r\n    },\r\n    {\r\n        small: 'ArrowRight',\r\n        shift: 'null',\r\n        code: 'ArrowRight',\r\n    },\r\n]);\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/langs/ru.js?");

/***/ }),

/***/ "./src/utils/key.js":
/*!**************************!*\
  !*** ./src/utils/key.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Key)\n/* harmony export */ });\nclass Key {\r\n    constructor(low, up, code) {\r\n        this.code = code\r\n        this.low = low\r\n        this.up = up\r\n    }\r\n    create(){\r\n        return 'aboba'\r\n    }\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/utils/key.js?");

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render(elem, classList, child, parent, ...attributes) {\r\n    const element = document.createElement(elem)\r\n    classList.forEach((item)=>{\r\n        element.classList.add(item)\r\n    })\r\n    if (typeof child === \"object\") {\r\n        child.forEach((item)=>{\r\n            element.appendChild(item)\r\n        })\r\n    } else {\r\n        element.innerHTML = child\r\n    }\r\n    console.log(parent)\r\n    if (parent) parent.appendChild(element)\r\n    attributes.forEach((item)=>{\r\n        if (item[0].match(/id|value|placeholder|cols|rows|autocorrect|spellcheck/)) {\r\n            element.setAttribute(item[0], item[1])\r\n        } else {\r\n            element.dataset[item[0]] = item[1]\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/utils/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;