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

/***/ "./src/components/easy-page-component.js":
/*!***********************************************!*\
  !*** ./src/components/easy-page-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderEasyPageComponent: () => (/* binding */ renderEasyPageComponent)\n/* harmony export */ });\nfunction renderEasyPageComponent({ appEl }) {\n    const easyWindowHtml = `\n        <div class=\"window center\">\n            11111\n        </div>`;\n\n    appEl.innerHTML = easyWindowHtml;\n}\n\n\n//# sourceURL=webpack://card-games/./src/components/easy-page-component.js?");

/***/ }),

/***/ "./src/components/hard-page-component.js":
/*!***********************************************!*\
  !*** ./src/components/hard-page-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHardPageComponent: () => (/* binding */ renderHardPageComponent)\n/* harmony export */ });\nfunction renderHardPageComponent({ appEl }) {\n    const hardWindowHtml = `\n        <div class=\"window center\">\n            33333\n        </div>`;\n\n    appEl.innerHTML = hardWindowHtml;\n}\n\n\n//# sourceURL=webpack://card-games/./src/components/hard-page-component.js?");

/***/ }),

/***/ "./src/components/medium-page-component.js":
/*!*************************************************!*\
  !*** ./src/components/medium-page-component.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMediumPageComponent: () => (/* binding */ renderMediumPageComponent)\n/* harmony export */ });\nfunction renderMediumPageComponent({ appEl }) {\n    const mediumWindowHtml = `\n        <div class=\"window center\">\n            22222\n        </div>`;\n\n    appEl.innerHTML = mediumWindowHtml;\n}\n\n\n//# sourceURL=webpack://card-games/./src/components/medium-page-component.js?");

/***/ }),

/***/ "./src/components/start-page-component.js":
/*!************************************************!*\
  !*** ./src/components/start-page-component.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderStartPageComponent: () => (/* binding */ renderStartPageComponent)\n/* harmony export */ });\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ \"./src/routes.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../script.js */ \"./src/script.js\");\n// const levels = [\n//     {\n//         name: 1,\n//         active: false,\n//     },\n//     {\n//         name: 2,\n//         active: false,\n//     },\n//     {\n//         name: 3,\n//         active: false,\n//     },\n// ];\n\n\n\n\nfunction renderStartPageComponent({ appEl }) {\n    const startWindowHtml = `\n        <div class=\"window center\">\n            <div class=\"window__title\">Выбери сложность</div>\n            <div class=\"window__level\">\n                <div class=\"window__level-button\">\n                    <input id=\"radio-1\" type=\"radio\" name=\"radio\" value=\"1\" checked>\n                    <label for=\"radio-1\">1</label>\n                </div>\n                <div class=\"window__level-button\">\n                    <input id=\"radio-2\" type=\"radio\" name=\"radio\" value=\"2\">\n                    <label for=\"radio-2\">2</label>\n                </div>\n                <div class=\"window__level-button\">\n                    <input id=\"radio-3\" type=\"radio\" name=\"radio\" value=\"3\">\n                    <label for=\"radio-3\">3</label>\n                </div>\n            </div>\n            <div>\n                <button id=\"game__button\" class=\"game__button\">Старт</button>\n            </div>\n        </div>`;\n\n    appEl.innerHTML = startWindowHtml;\n\n    // Выбираем сложность уровня\n\n    function levelSelection() {\n        const buttonElement = document.getElementById('game__button');\n\n        buttonElement.addEventListener('click', () => {\n            function levels() {\n                let level = document.getElementsByName('radio');\n                for (var i = 0; i < level.length; i++) {\n                    if (level[i].checked) {\n                        console.log('Выбран ' + Number(i + 1) + ' уровень');\n                        if (i === 0) {\n                            (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.EASY_PAGE);\n                        } else if (i === 1) {\n                            (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.MEDIUM_PAGE);\n                        } else if (i === 2) {\n                            (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.HARD_PAGE);\n                        }\n                    }\n                }\n            }\n\n            levels();\n        });\n    }\n\n    levelSelection();\n}\n\n\n//# sourceURL=webpack://card-games/./src/components/start-page-component.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EASY_PAGE: () => (/* binding */ EASY_PAGE),\n/* harmony export */   END_PAGE: () => (/* binding */ END_PAGE),\n/* harmony export */   HARD_PAGE: () => (/* binding */ HARD_PAGE),\n/* harmony export */   MEDIUM_PAGE: () => (/* binding */ MEDIUM_PAGE),\n/* harmony export */   START_PAGE: () => (/* binding */ START_PAGE)\n/* harmony export */ });\n// Файл со списком страниц приложения\nconst EASY_PAGE = 'easy';\nconst MEDIUM_PAGE = 'medium';\nconst HARD_PAGE = 'hard';\nconst START_PAGE = 'start';\nconst END_PAGE = 'end';\n\n\n//# sourceURL=webpack://card-games/./src/routes.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   goToPage: () => (/* binding */ goToPage),\n/* harmony export */   page: () => (/* binding */ page)\n/* harmony export */ });\n/* harmony import */ var _components_easy_page_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/easy-page-component.js */ \"./src/components/easy-page-component.js\");\n/* harmony import */ var _components_hard_page_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hard-page-component.js */ \"./src/components/hard-page-component.js\");\n/* harmony import */ var _components_medium_page_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/medium-page-component.js */ \"./src/components/medium-page-component.js\");\n/* harmony import */ var _components_start_page_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/start-page-component.js */ \"./src/components/start-page-component.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes.js */ \"./src/routes.js\");\n\n\n\n\n\n\nlet page = null;\n\n/**\n * Включает страницу приложения\n * с нее начинается работа приложения\n */\nconst goToPage = (newPage) => {\n    if (\n        [_routes_js__WEBPACK_IMPORTED_MODULE_4__.START_PAGE, _routes_js__WEBPACK_IMPORTED_MODULE_4__.END_PAGE, _routes_js__WEBPACK_IMPORTED_MODULE_4__.EASY_PAGE, _routes_js__WEBPACK_IMPORTED_MODULE_4__.MEDIUM_PAGE, _routes_js__WEBPACK_IMPORTED_MODULE_4__.HARD_PAGE].includes(\n            newPage\n        )\n    ) {\n        if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_4__.START_PAGE) {\n            renderApp();\n        }\n\n        page = newPage;\n        renderApp();\n\n        return;\n    }\n\n    throw new Error('страницы не существует');\n};\n\n// отрисовывает посты\nconst renderApp = () => {\n    const appEl = document.getElementById('app');\n\n    if (page === _routes_js__WEBPACK_IMPORTED_MODULE_4__.START_PAGE) {\n        return (0,_components_start_page_component_js__WEBPACK_IMPORTED_MODULE_3__.renderStartPageComponent)({\n            appEl,\n        });\n    }\n\n    if (page === _routes_js__WEBPACK_IMPORTED_MODULE_4__.EASY_PAGE) {\n        return (0,_components_easy_page_component_js__WEBPACK_IMPORTED_MODULE_0__.renderEasyPageComponent)({\n            appEl,\n        });\n    }\n\n    if (page === _routes_js__WEBPACK_IMPORTED_MODULE_4__.MEDIUM_PAGE) {\n        return (0,_components_medium_page_component_js__WEBPACK_IMPORTED_MODULE_2__.renderMediumPageComponent)({\n            appEl,\n        });\n    }\n\n    if (page === _routes_js__WEBPACK_IMPORTED_MODULE_4__.HARD_PAGE) {\n        return (0,_components_hard_page_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHardPageComponent)({\n            appEl,\n        });\n    }\n};\n\n// вызов-функция\ngoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_4__.START_PAGE);\n\nconsole.log('It works!');\n\n\n//# sourceURL=webpack://card-games/./src/script.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;