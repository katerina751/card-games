/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/easy-page-component.js":
/*!***********************************************!*\
  !*** ./src/components/easy-page-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderEasyPageComponent: () => (/* binding */ renderEasyPageComponent)
/* harmony export */ });
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ "./src/routes.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../script.js */ "./src/script.js");



function renderEasyPageComponent({ appEl }) {
    const cards = [
        '6spades',
        '7spades',
        '8spades',
        '9spades',
        '10spades',
        'Jspades',
        'Qspades',
        'Kspades',
        'Aspades',
        '6clubs',
        '7clubs',
        '8clubs',
        '9clubs',
        '10clubs',
        'Jclubs',
        'Qclubs',
        'Kclubs',
        'Aclubs',
        '6hearts',
        '7hearts',
        '8hearts',
        '9hearts',
        '10hearts',
        'Jhearts',
        'Qhearts',
        'Khearts',
        'Ahearts',
        '6diamonds',
        '7diamonds',
        '8diamonds',
        '9diamonds',
        '10diamonds',
        'Jdiamonds',
        'Qdiamonds',
        'Kdiamonds',
        'Adiamonds',
    ];

    let gameCards = cards
        .sort(() => Math.random() - 0.5)
        .slice(-3)
        .join(' ')
        .concat(' ')
        .repeat(2)
        .slice(0, -1)
        .split(' ')
        .sort(() => Math.random() - 0.5);
    console.log(gameCards);

    const cardHTML = gameCards
        .map((card, index) => {
            return `
                <img class="game__card" data-index=${index} src="./img/${card}.svg" alt="рубашка" />
                `;
        })
        .join('');

    const windowHtml = `
            <div class="game-header">
                <div class="game-header__timer">
                    <div class="game-header__timer_header">
                        <p class="game-header__timer_header-item">min</p>
                        <p class="game-header__timer_header-item">sec</p>
                    </div>
                    <div class="game-header__timer_time" id="countdown">00:00</div>
                </div>
                <div class="game-header__restart">
                    <button class="restart__button">Начать заново</button>
                </div>
            </div>
            <div class="game__field">
                ${cardHTML}
            </div>`;

    appEl.innerHTML = windowHtml;

    let time = 0;
    const countDownElement = document.getElementById('countdown');
    setInterval(updateCountdown, 1000);
    function updateCountdown() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDownElement.innerHTML = `${minutes}:${seconds}`;
        time++;
    }

    const buttonRestartGame = document.querySelector('.restart__button');
    buttonRestartGame.addEventListener('click', () => {
        (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.START_PAGE);
    });

    const cardOpeningUser = () => {
        const buttonCardElements = document.querySelectorAll('.game__card');
        for (let buttonCardElement of buttonCardElements) {
            buttonCardElement.addEventListener('click', (event) => {
                event.stopPropagation();
                const index = buttonCardElement.dataset.index;
                console.log(gameCards[index]);
                buttonCardElement.src = `./img/${gameCards[index]}.svg`;
            });
        }
    };

    cardOpeningUser();
}


/***/ }),

/***/ "./src/components/hard-page-component.js":
/*!***********************************************!*\
  !*** ./src/components/hard-page-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHardPageComponent: () => (/* binding */ renderHardPageComponent)
/* harmony export */ });
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ "./src/routes.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../script.js */ "./src/script.js");



function renderHardPageComponent({ appEl }) {
    const cards = [
        '6spades',
        '7spades',
        '8spades',
        '9spades',
        '10spades',
        'Jspades',
        'Qspades',
        'Kspades',
        'Aspades',
        '6clubs',
        '7clubs',
        '8clubs',
        '9clubs',
        '10clubs',
        'Jclubs',
        'Qclubs',
        'Kclubs',
        'Aclubs',
        '6hearts',
        '7hearts',
        '8hearts',
        '9hearts',
        '10hearts',
        'Jhearts',
        'Qhearts',
        'Khearts',
        'Ahearts',
        '6diamonds',
        '7diamonds',
        '8diamonds',
        '9diamonds',
        '10diamonds',
        'Jdiamonds',
        'Qdiamonds',
        'Kdiamonds',
        'Adiamonds',
    ];

    let gameCards = cards
        .sort(() => Math.random() - 0.5)
        .slice(-9)
        .join(' ')
        .concat(' ')
        .repeat(2)
        .slice(0, -1)
        .split(' ')
        .sort(() => Math.random() - 0.5);
    console.log(gameCards);

    const cardHTML = gameCards
        .map((card, index) => {
            console.log(`img src="./${card}.svg"/`);
            return `
                <img class="game__card" data-index=${index} src="./img/shirt.svg" alt="рубашка" />
                `;
        })
        .join('');

    const windowHtml = `
            <div class="game-header">
                <div class="game-header__timer">
                    <div class="game-header__timer_header">
                        <p class="game-header__timer_header-item">min</p>
                        <p class="game-header__timer_header-item">sec</p>
                    </div>
                    <div class="game-header__timer_time" id="countdown">00:00</div>
                </div>
                <div class="game-header__restart">
                    <button class="restart__button">Начать заново</button>
                </div>
            </div>
            <div class="game__field">
                ${cardHTML}
            </div>`;

    appEl.innerHTML = windowHtml;

    let time = 0;
    const countDownElement = document.getElementById('countdown');
    setInterval(updateCountdown, 1000);
    function updateCountdown() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDownElement.innerHTML = `${minutes}:${seconds}`;
        time++;
    }

    const buttonRestartGame = document.querySelector('.restart__button');
    buttonRestartGame.addEventListener('click', () => {
        (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.START_PAGE);
    });

    const cardOpeningUser = () => {
        const buttonCardElements = document.querySelectorAll('.game__card');
        for (let buttonCardElement of buttonCardElements) {
            buttonCardElement.addEventListener('click', (event) => {
                event.stopPropagation();
                const index = buttonCardElement.dataset.index;
                console.log(gameCards[index]);
                buttonCardElement.src = `./img/${gameCards[index]}.svg`;
            });
        }
    };

    cardOpeningUser();
}


/***/ }),

/***/ "./src/components/medium-page-component.js":
/*!*************************************************!*\
  !*** ./src/components/medium-page-component.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMediumPageComponent: () => (/* binding */ renderMediumPageComponent)
/* harmony export */ });
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ "./src/routes.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../script.js */ "./src/script.js");



function renderMediumPageComponent({ appEl }) {
    const cards = [
        '6spades',
        '7spades',
        '8spades',
        '9spades',
        '10spades',
        'Jspades',
        'Qspades',
        'Kspades',
        'Aspades',
        '6clubs',
        '7clubs',
        '8clubs',
        '9clubs',
        '10clubs',
        'Jclubs',
        'Qclubs',
        'Kclubs',
        'Aclubs',
        '6hearts',
        '7hearts',
        '8hearts',
        '9hearts',
        '10hearts',
        'Jhearts',
        'Qhearts',
        'Khearts',
        'Ahearts',
        '6diamonds',
        '7diamonds',
        '8diamonds',
        '9diamonds',
        '10diamonds',
        'Jdiamonds',
        'Qdiamonds',
        'Kdiamonds',
        'Adiamonds',
    ];

    let gameCards = cards
        .sort(() => Math.random() - 0.5)
        .slice(-6)
        .join(' ')
        .concat(' ')
        .repeat(2)
        .slice(0, -1)
        .split(' ')
        .sort(() => Math.random() - 0.5);
    console.log(gameCards);

    const cardHTML = gameCards
        .map((card, index) => {
            console.log(`img src="./${card}.svg"/`);
            return `
                <img class="game__card" data-index=${index} src="./img/shirt.svg" alt="рубашка" />
                `;
        })
        .join('');

    const windowHtml = `
            <div class="game-header">
                <div class="game-header__timer">
                    <div class="game-header__timer_header">
                        <p class="game-header__timer_header-item">min</p>
                        <p class="game-header__timer_header-item">sec</p>
                    </div>
                    <div class="game-header__timer_time" id="countdown">00:00</div>
                </div>
                <div class="game-header__restart">
                    <button class="restart__button">Начать заново</button>
                </div>
            </div>
            <div class="game__field">
                ${cardHTML}
            </div>`;

    appEl.innerHTML = windowHtml;

    let time = 0;
    const countDownElement = document.getElementById('countdown');
    setInterval(updateCountdown, 1000);
    function updateCountdown() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDownElement.innerHTML = `${minutes}:${seconds}`;
        time++;
    }

    const buttonRestartGame = document.querySelector('.restart__button');
    buttonRestartGame.addEventListener('click', () => {
        (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.START_PAGE);
    });

    const cardOpeningUser = () => {
        const buttonCardElements = document.querySelectorAll('.game__card');
        for (let buttonCardElement of buttonCardElements) {
            buttonCardElement.addEventListener('click', (event) => {
                event.stopPropagation();
                const index = buttonCardElement.dataset.index;
                console.log(gameCards[index]);
                buttonCardElement.src = `./img/${gameCards[index]}.svg`;
            });
        }
    };

    cardOpeningUser();
}


/***/ }),

/***/ "./src/components/start-page-component.js":
/*!************************************************!*\
  !*** ./src/components/start-page-component.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderStartPageComponent: () => (/* binding */ renderStartPageComponent)
/* harmony export */ });
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ "./src/routes.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../script.js */ "./src/script.js");
// const levels = [
//     {
//         name: 1,
//         active: false,
//     },
//     {
//         name: 2,
//         active: false,
//     },
//     {
//         name: 3,
//         active: false,
//     },
// ];




function renderStartPageComponent({ appEl }) {
    const startWindowHtml = `
        <div class="window center">
            <div class="window__title">Выбери сложность</div>
            <div class="window__level">
                <div class="window__level-button">
                    <input id="radio-1" type="radio" name="radio" value="1" checked>
                    <label for="radio-1">1</label>
                </div>
                <div class="window__level-button">
                    <input id="radio-2" type="radio" name="radio" value="2">
                    <label for="radio-2">2</label>
                </div>
                <div class="window__level-button">
                    <input id="radio-3" type="radio" name="radio" value="3">
                    <label for="radio-3">3</label>
                </div>
            </div>
            <div>
                <button id="game__button" class="game__button">Старт</button>
            </div>
        </div>`;

    appEl.innerHTML = startWindowHtml;

    // Выбираем сложность уровня

    function levelSelection() {
        const buttonElement = document.getElementById('game__button');

        buttonElement.addEventListener('click', () => {
            function levels() {
                let level = document.getElementsByName('radio');
                for (var i = 0; i < level.length; i++) {
                    if (level[i].checked) {
                        console.log('Выбран ' + Number(i + 1) + ' уровень');
                        if (i === 0) {
                            (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.EASY_PAGE);
                        } else if (i === 1) {
                            (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.MEDIUM_PAGE);
                        } else if (i === 2) {
                            (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.HARD_PAGE);
                        }
                    }
                }
            }

            levels();
        });
    }

    levelSelection();
}


/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EASY_PAGE: () => (/* binding */ EASY_PAGE),
/* harmony export */   END_PAGE: () => (/* binding */ END_PAGE),
/* harmony export */   HARD_PAGE: () => (/* binding */ HARD_PAGE),
/* harmony export */   MEDIUM_PAGE: () => (/* binding */ MEDIUM_PAGE),
/* harmony export */   START_PAGE: () => (/* binding */ START_PAGE)
/* harmony export */ });
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/styles.css */ "./src/styles.css");
// Файл со списком страниц приложения
const EASY_PAGE = 'easy';
const MEDIUM_PAGE = 'medium';
const HARD_PAGE = 'hard';
const START_PAGE = 'start';
const END_PAGE = 'end';



/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goToPage: () => (/* binding */ goToPage),
/* harmony export */   page: () => (/* binding */ page)
/* harmony export */ });
/* harmony import */ var _components_easy_page_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/easy-page-component.js */ "./src/components/easy-page-component.js");
/* harmony import */ var _components_hard_page_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/hard-page-component.js */ "./src/components/hard-page-component.js");
/* harmony import */ var _components_medium_page_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/medium-page-component.js */ "./src/components/medium-page-component.js");
/* harmony import */ var _components_start_page_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/start-page-component.js */ "./src/components/start-page-component.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes.js */ "./src/routes.js");







let page = null;

/**
 * Включает страницу приложения
 * с нее начинается работа приложения
 */
const goToPage = (newPage) => {
    if (
        [_routes_js__WEBPACK_IMPORTED_MODULE_4__.START_PAGE, _routes_js__WEBPACK_IMPORTED_MODULE_4__.END_PAGE, _routes_js__WEBPACK_IMPORTED_MODULE_4__.EASY_PAGE, _routes_js__WEBPACK_IMPORTED_MODULE_4__.MEDIUM_PAGE, _routes_js__WEBPACK_IMPORTED_MODULE_4__.HARD_PAGE].includes(
            newPage
        )
    ) {
        if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_4__.START_PAGE) {
            renderApp();
        }

        page = newPage;
        renderApp();

        return;
    }

    throw new Error('страницы не существует');
};

// отрисовывает посты
const renderApp = () => {
    const appEl = document.getElementById('app');

    if (page === _routes_js__WEBPACK_IMPORTED_MODULE_4__.START_PAGE) {
        return (0,_components_start_page_component_js__WEBPACK_IMPORTED_MODULE_3__.renderStartPageComponent)({
            appEl,
        });
    }

    if (page === _routes_js__WEBPACK_IMPORTED_MODULE_4__.EASY_PAGE) {
        return (0,_components_easy_page_component_js__WEBPACK_IMPORTED_MODULE_0__.renderEasyPageComponent)({
            appEl,
        });
    }

    if (page === _routes_js__WEBPACK_IMPORTED_MODULE_4__.MEDIUM_PAGE) {
        return (0,_components_medium_page_component_js__WEBPACK_IMPORTED_MODULE_2__.renderMediumPageComponent)({
            appEl,
        });
    }

    if (page === _routes_js__WEBPACK_IMPORTED_MODULE_4__.HARD_PAGE) {
        return (0,_components_hard_page_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHardPageComponent)({
            appEl,
        });
    }
};

// вызов-функция
goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_4__.START_PAGE);

console.log('It works!');


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
//# sourceMappingURL=main.js.map