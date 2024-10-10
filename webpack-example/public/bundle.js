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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Person; }\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Person = /*#__PURE__*/function () {\n  function Person(name, age) {\n    _classCallCheck(this, Person);\n    _defineProperty(this, \"name\", void 0);\n    _defineProperty(this, \"age\", void 0);\n    this.name = name;\n    this.age = age;\n  }\n  return _createClass(Person, [{\n    key: \"getName\",\n    value: function getName() {\n      return this.name;\n    }\n  }, {\n    key: \"getAge\",\n    value: function getAge() {\n      return this.age;\n    }\n  }, {\n    key: \"setAge\",\n    value: function setAge(age) {\n      this.age = age;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://webpack-example/./src/Person.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Person */ \"./src/Person.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ \"./src/lib.js\");\n\n\nvar p = new _Person__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Emma\", 32);\nconsole.log(p.getName(), p.getAge());\nvar products = [{\n  \"id\": 34,\n  \"name\": \"iPhone 15\",\n  \"price\": 89000.00,\n  \"category\": \"mobile\"\n}, {\n  \"id\": 88,\n  \"name\": \"Sony Bravia\",\n  \"price\": 289000.00,\n  \"category\": \"tv\"\n}, {\n  \"id\": 65,\n  \"name\": \"Samsung Fold\",\n  \"price\": 310000.00,\n  \"category\": \"mobile\"\n}, {\n  \"id\": 23,\n  \"name\": \"Onida KY Thunder\",\n  \"price\": 3000.00,\n  \"category\": \"tv\"\n}, {\n  \"id\": 87,\n  \"name\": \"Wacom\",\n  \"price\": 6000.00,\n  \"category\": \"computer\"\n}, {\n  \"id\": 33,\n  \"name\": \"SanDisk\",\n  \"price\": 500.00,\n  \"category\": \"computer\"\n}];\nvar numbers = [45, 12, 11, 17, 2, 3];\nvar evens = (0,_lib__WEBPACK_IMPORTED_MODULE_1__.filter)(numbers, function (e) {\n  return e % 2 === 0;\n});\nvar mobiles = (0,_lib__WEBPACK_IMPORTED_MODULE_1__.filter)(products, function (p) {\n  return p.category === 'mobile';\n});\nconsole.log(evens);\nconsole.log(mobiles);\n\n//# sourceURL=webpack://webpack-example/./src/index.js?");

/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filter: function() { return /* binding */ filter; }\n/* harmony export */ });\nvar add = function add(x, y) {\n  return x + y;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (add);\nfunction filter(elems, predicate) {\n  var results = [];\n  elems.forEach(function (e) {\n    if (predicate(e)) {\n      results.push(e);\n    }\n  });\n  return results;\n}\nfunction map(elems, transformFn) {\n  var results = [];\n  elems.forEach(function (e) {\n    results.push(transformFn(e));\n  });\n  return results;\n}\n\n//# sourceURL=webpack://webpack-example/./src/lib.js?");

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