/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Person.js":
/*!***********************!*\
  !*** ./src/Person.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Person; }\n/* harmony export */ });\nclass Person {\n  name;\n  age;\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  getName() {\n    return this.name;\n  }\n  getAge() {\n    return this.age;\n  }\n  setAge(age) {\n    this.age = age;\n  }\n}\n\n//# sourceURL=webpack://webpack-example/./src/Person.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Person */ \"./src/Person.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ \"./src/lib.js\");\n\n\nlet p = new _Person__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Emma\", 32);\nconsole.log(p.getName(), p.getAge());\nvar products = [{\n  \"id\": 34,\n  \"name\": \"iPhone 15\",\n  \"price\": 89000.00,\n  \"category\": \"mobile\"\n}, {\n  \"id\": 88,\n  \"name\": \"Sony Bravia\",\n  \"price\": 289000.00,\n  \"category\": \"tv\"\n}, {\n  \"id\": 65,\n  \"name\": \"Samsung Fold\",\n  \"price\": 310000.00,\n  \"category\": \"mobile\"\n}, {\n  \"id\": 23,\n  \"name\": \"Onida KY Thunder\",\n  \"price\": 3000.00,\n  \"category\": \"tv\"\n}, {\n  \"id\": 87,\n  \"name\": \"Wacom\",\n  \"price\": 6000.00,\n  \"category\": \"computer\"\n}, {\n  \"id\": 33,\n  \"name\": \"SanDisk\",\n  \"price\": 500.00,\n  \"category\": \"computer\"\n}];\nvar numbers = [45, 12, 11, 17, 2, 3];\nvar evens = (0,_lib__WEBPACK_IMPORTED_MODULE_1__.filter)(numbers, e => e % 2 === 0);\nvar mobiles = (0,_lib__WEBPACK_IMPORTED_MODULE_1__.filter)(products, p => p.category === 'mobile');\nconsole.log(evens);\nconsole.log(mobiles);\n\n//# sourceURL=webpack://webpack-example/./src/index.js?");

/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ add; },\n/* harmony export */   filter: function() { return /* binding */ filter; }\n/* harmony export */ });\nfunction add(x, y) {\n  return x + y;\n}\nfunction filter(elems, predicate) {\n  var results = [];\n  elems.forEach(e => {\n    if (predicate(e)) {\n      results.push(e);\n    }\n  });\n  return results;\n}\nfunction map(elems, transformFn) {\n  var results = [];\n  elems.forEach(e => {\n    results.push(transformFn(e));\n  });\n  return results;\n}\n\n//# sourceURL=webpack://webpack-example/./src/lib.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
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