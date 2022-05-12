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

/***/ "./src/utils/key.js":
/*!**************************!*\
  !*** ./src/utils/key.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Key)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/utils/render.js\");\n\r\n\r\nclass Key {\r\n    constructor(low, up, code) {\r\n        this.code = code\r\n        this.low = low\r\n        if (up === 'null') this.up = low\r\n        else this.up = up\r\n        this.isCapsable = !code.match(/^Key[A-Z\\d]$/);\r\n        this.isFunc = !code.match(/^Key[A-Z]|BracketLeft|Backquote|Slash|Period|Comma|Quote|Semicolon|Backslash|BracketRight|^Digit\\d|Equal|Minus$/);\r\n        if (this.low.match(/^[а-я]$/)) this.isCapsable = false\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/utils/key.js?");

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\nfunction render(elem, classList, child, parent, ...attributes) {\r\n    const element = document.createElement(elem);\r\n    classList.forEach((item) => {\r\n        element.classList.add(item);\r\n    });\r\n    if (typeof child === 'object' && child !== null) {\r\n        child.forEach((item) => {\r\n            element.appendChild(item);\r\n        });\r\n    } else {\r\n        element.innerHTML = child;\r\n    }\r\n    if (parent) parent.appendChild(element);\r\n    attributes.forEach((item) => {\r\n        if (item[0].match(/id|value|placeholder|cols|rows|autocorrect|spellcheck/)) {\r\n            element.setAttribute(item[0], item[1]);\r\n        } else {\r\n            [element.dataset[item[0]]] = item;\r\n        }\r\n    });\r\n    return element;\r\n}\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/utils/render.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils/key.js");
/******/ 	
/******/ })()
;