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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hashmap(key) {\n  let buckets = {};\n  console.log(\"bucket below\");\n  console.log(buckets);\n\n  function hash(key) {\n    let hashCode = 0;\n    const primeNumber = 31;\n    for (let i = 0; i < key.length; i++) {\n      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 10000;\n    }\n    return hashCode.toString();\n  }\n\n  function set(key, value) {\n    const hashedKey = hash(key);\n\n    if (!buckets[hashedKey]) {\n      buckets[hashedKey] = [];\n    }\n\n    let found = false;\n    for (let i = 0; i < buckets[hashedKey].length; i++) {\n      if (buckets[hashedKey][i].key === key) {\n        buckets[hashedKey][i].value = value;\n        found = true;\n        break;\n      }\n    }\n\n    if (!found) {\n      buckets[hashedKey].push({ key, value });\n    }\n  }\n\n  function get(key) {\n    const hashedKey = hash(key).toString();\n    if (buckets[hashedKey]) {\n      for (let i = 0; i < buckets[hashedKey].length; i++) {\n        if (buckets[hashedKey][i].key === key) {\n          return buckets[hashedKey][i].value;\n        }\n      }\n      return null;\n    } else {\n      return null;\n    }\n  }\n\n  function has(key) {\n    const hashedKey = hash(key).toString();\n    if (buckets[hashedKey]) {\n      for (let i = 0; i < buckets[hashedKey].length; i++) {\n        if (buckets[hashedKey][i].key === key) {\n          return true;\n        }\n      }\n      return false;\n    } else {\n      return false;\n    }\n  }\n\n  function remove(key) {\n    const hashedKey = hash(key).toString();\n    if (buckets[hashedKey]) {\n      for (let i = 0; i < buckets[hashedKey].length; i++) {\n        if (buckets[hashedKey][i].key === key) {\n          buckets[hashedKey].splice(i, 1);\n          return true;\n        }\n      }\n      return false;\n    } else {\n      return false;\n    }\n  }\n\n  function length() {\n    let count = 0;\n\n    Object.keys(buckets).forEach(function (bucketKey) {\n      count += buckets[bucketKey].length;\n    });\n\n    return count;\n  }\n\n  function clear() {\n    buckets = {};\n  }\n\n  function keys() {\n    let newArray = [];\n\n    for (const property in buckets) {\n      for (let i = 0; i < buckets[property].length; i++) {\n        newArray.push(buckets[property][i].key);\n      }\n    }\n\n    return newArray;\n  }\n\n  function values() {\n    let newArray = [];\n\n    for (const property in buckets) {\n      for (let i = 0; i < buckets[property].length; i++) {\n        newArray.push(buckets[property][i].value);\n      }\n    }\n\n    return newArray;\n  }\n\n  function entries() {\n    let newArray = [];\n\n    for (const property in buckets) {\n      for (let i = 0; i < buckets[property].length; i++) {\n        newArray.push(buckets[property][i]);\n      }\n    }\n\n    return newArray;\n  }\n\n  return {\n    set,\n    get,\n    has,\n    remove,\n    length,\n    clear,\n    keys,\n    values,\n    entries,\n    buckets,\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hashmap);\n\n\n//# sourceURL=webpack://hashmapproject/./src/hashmap.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hashmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashmap */ \"./src/hashmap.js\");\n\n\n// Initialize the hashmap\nconst map = (0,_hashmap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconsole.log(\"--- Testing set and get ---\");\nmap.set(\"name\", \"John\");\nconsole.log(\"Expected: John, Actual:\", map.get(\"name\")); // Should log \"John\"\n\nconsole.log(\"--- Testing has ---\");\nconsole.log(\"Expected: true, Actual:\", map.has(\"name\")); // Should log true\nconsole.log(\"Expected: false, Actual:\", map.has(\"nonexistent\")); // Should log false\n\nconsole.log(\"--- Testing remove ---\");\nmap.remove(\"name\");\nconsole.log(\"Expected: false, Actual:\", map.has(\"name\")); // Should log false\n\nconsole.log(\"--- Testing length ---\");\nmap.set(\"newKey\", \"newValue\");\nconsole.log(\"Expected: 1, Actual:\", map.length()); // Should log 1\n\nconsole.log(\"--- Testing values ---\");\n// Correct usage of values\nconst valuesBeforeClear = map.values(); // Should return [\"newValue\"]\nconsole.log(\n  \"Expected: ['newValue'], Actual:\",\n  JSON.stringify(valuesBeforeClear)\n); // Using JSON.stringify for array comparison\n\nconsole.log(\"--- Testing clear ---\");\nmap.clear();\nconsole.log(\"Expected: 0, Actual:\", map.length()); // Should log 0\n\n// Additional tests for keys and updated values method\nconsole.log(\"--- Testing keys and updated values method ---\");\nmap.set(\"key1\", \"value1\");\nmap.set(\"key2\", \"value2\");\nconsole.log(\n  \"Expected keys: ['key1', 'key2'], Actual:\",\n  JSON.stringify(map.keys())\n); // Should log ['key1', 'key2']\nconsole.log(\n  \"Expected values: ['value1', 'value2'], Actual:\",\n  JSON.stringify(map.values())\n); // Should log ['value1', 'value2']\n\nfunction assert(condition, message) {\n  if (!condition) {\n    console.error(\"Assertion failed:\", message);\n  } else {\n    console.log(\"Assertion passed:\", message);\n  }\n}\n\nassert(\n  map.get(\"key1\") === \"value1\",\n  \"get method returns correct value for 'key1'\"\n);\nassert(\n  map.get(\"key2\") === \"value2\",\n  \"get method returns correct value for 'key2'\"\n);\nassert(\n  map.get(\"nonexistent\") === null,\n  \"get method returns null for non-existent key\"\n);\n\nconsole.log(\"--- Testing entries() with no elements ---\");\nlet entries = map.entries();\nconsole.log(entries); // Expected: []\n\nconsole.log(\"--- Adding elements ---\");\nmap.set(\"name\", \"John\");\nmap.set(\"age\", \"30\");\nmap.set(\"city\", \"New York\");\n\nconsole.log(\"--- Testing entries() with elements ---\");\nentries = map.entries();\nconsole.log(entries); // Expected: [[\"name\", \"John\"], [\"age\", \"30\"], [\"city\", \"New York\"]]\n\nconsole.log(\"--- Testing removal of an element ---\");\nmap.remove(\"age\");\nentries = map.entries();\nconsole.log(entries); // Expected: [[\"name\", \"John\"], [\"city\", \"New York\"]]\n\nconsole.log(\"--- Testing clear ---\");\nmap.clear();\nentries = map.entries();\nconsole.log(entries); // Expected: []\n\n\n//# sourceURL=webpack://hashmapproject/./src/index.js?");

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