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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calendar\": () => (/* binding */ calendar)\n/* harmony export */ });\n\r\nconst calendar = (function () {\r\n  const date = new Date();\r\n\r\n  const renderCalendar = function() {\r\n    date.setDate(1);\r\n\r\n    const monthDays = document.querySelector(\".days\");\r\n    const daysArr = document.getElementsByClassName('c-cal__day');  \r\n    const lastDay = new Date(\r\n      date.getFullYear(),\r\n      date.getMonth() + 1,\r\n      0\r\n    ).getDate();\r\n\r\n    const prevLastDay = new Date(\r\n      date.getFullYear(),\r\n      date.getMonth(),\r\n      0\r\n    ).getDate();\r\n\r\n    const firstDayIndex = date.getDay();\r\n\r\n    const lastDayIndex = new Date(\r\n      date.getFullYear(),\r\n      date.getMonth() + 1,\r\n      0\r\n    ).getDay();\r\n\r\n    const nextDays = 7 - lastDayIndex - 1;\r\n\r\n    const months = [\r\n      \"January\",\r\n      \"February\",\r\n      \"March\",\r\n      \"April\",\r\n      \"May\",\r\n      \"June\",\r\n      \"July\",\r\n      \"August\",\r\n      \"September\",\r\n      \"October\",\r\n      \"November\",\r\n      \"December\",\r\n    ];\r\n    const monthIndex = date.getMonth();\r\n    const displayedYear = date.getFullYear();\r\n    \r\n    document.querySelector(\".date h1\").innerHTML = months[monthIndex] + \", \" + displayedYear;\r\n\r\n    document.querySelector(\".date p\").innerHTML = new Date().toDateString();\r\n\r\n    let days = \"\";\r\n\r\n    for (let x = firstDayIndex; x > 0; x--) {\r\n      days += `<div class=\"prev-date\">${prevLastDay - x + 1}</div>`;\r\n    }\r\n\r\n    for (let i = 1; i <= lastDay; i++) {   \r\n      days += `<div class=\"c-cal__day\">${i}</div>`;    \r\n    }\r\n\r\n    for (let j = 1; j <= nextDays; j++) {\r\n      days += `<div class=\"next-date\">${j}</div>`;    \r\n    }\r\n    monthDays.innerHTML = days;    \r\n    return { days: daysArr };\r\n  };\r\n  const switchMonth = function(e) {\r\n    if (e.target.classList.contains('prev')) {\r\n      date.setMonth(date.getMonth() - 1);\r\n      renderCalendar();      \r\n    } else if (e.target.classList.contains('next')) {\r\n      date.setMonth(date.getMonth() + 1);\r\n      renderCalendar();      \r\n    }\r\n  }\r\n  renderCalendar();\r\n  \r\n  return {\r\n    date: date,\r\n    days: renderCalendar().days,\r\n    switchMonth: switchMonth\r\n  };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://SalidasTracker/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;