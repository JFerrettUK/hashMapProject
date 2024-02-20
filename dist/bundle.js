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

/***/ "./src/hashmap.js":
/*!************************!*\
  !*** ./src/hashmap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hashmap(key) {\n  let buckets = {};\n  console.log(\"bucket below\");\n  console.log(buckets);\n\n  function hash(key) {\n    let hashCode = 0;\n    const primeNumber = 31;\n    for (let i = 0; i < key.length; i++) {\n      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 10000;\n    }\n    return hashCode.toString();\n  }\n\n  function set(key, value) {\n    const hashedKey = hash(key);\n\n    if (!buckets[hashedKey]) {\n      buckets[hashedKey] = [];\n    }\n\n    let found = false;\n    for (let i = 0; i < buckets[hashedKey].length; i++) {\n      if (buckets[hashedKey][i].key === key) {\n        buckets[hashedKey][i].value = value;\n        found = true;\n        break;\n      }\n    }\n\n    if (!found) {\n      buckets[hashedKey].push({ key, value });\n    }\n  }\n\n  function get(key) {\n    const hashedKey = hash(key).toString();\n    if (buckets[hashedKey]) {\n      for (let i = 0; i < buckets[hashedKey].length; i++) {\n        if (buckets[hashedKey][i].key === key) {\n          return buckets[hashedKey][i].value;\n        }\n      }\n      return null;\n    } else {\n      return null;\n    }\n  }\n\n  function has(key) {\n    const hashedKey = hash(key).toString();\n    if (buckets[hashedKey]) {\n      for (let i = 0; i < buckets[hashedKey].length; i++) {\n        if (buckets[hashedKey][i].key === key) {\n          return true;\n        }\n      }\n      return false;\n    } else {\n      return false;\n    }\n  }\n\n  function remove(key) {\n    const hashedKey = hash(key).toString();\n    if (buckets[hashedKey]) {\n      for (let i = 0; i < buckets[hashedKey].length; i++) {\n        if (buckets[hashedKey][i].key === key) {\n          buckets[hashedKey].splice(i, 1);\n          return true;\n        }\n      }\n      return false;\n    } else {\n      return false;\n    }\n  }\n\n  function length() {\n    let count = 0;\n\n    Object.keys(buckets).forEach(function (bucketKey) {\n      count += buckets[bucketKey].length;\n    });\n\n    return count;\n  }\n\n  function clear() {\n    buckets = {};\n  }\n\n  function keys() {\n    let newArray = [];\n\n    for (const property in buckets) {\n      for (let i = 0; i < buckets[property].length; i++) {\n        newArray.push(buckets[property][i].key);\n      }\n    }\n\n    return newArray;\n  }\n\n  return { set, get, has, remove, length, clear, keys, buckets };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashmap);\n\n\n//# sourceURL=webpack://hashmapproject/./src/hashmap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hashmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashmap */ \"./src/hashmap.js\");\n\n\n(0,_hashmap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst map = (0,_hashmap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconsole.log(\"--- Testing set ---\");\nmap.set(\"name\", \"John\");\nconsole.log(map.buckets);\n\nconsole.log(\"--- Testing get ---\");\nconsole.log(map.get(\"name\"));\n\nconsole.log(\"--- Testing has ---\");\nconsole.log(map.has(\"name\"));\nconsole.log(map.has(\"nonexistent\"));\n\nconsole.log(\"--- Testing remove ---\");\nmap.remove(\"name\");\nconsole.log(map.has(\"name\"));\n\nconsole.log(\"--- Testing length ---\");\nmap.set(\"newKey\", \"newValue\");\nconsole.log(map.length());\n\nconsole.log(\"--- Testing clear ---\");\nmap.clear();\nconsole.log(map.length());\n\n\n//# sourceURL=webpack://hashmapproject/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;