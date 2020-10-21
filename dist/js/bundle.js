/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("console.log(\"js\");\r\n\r\nconst elements = {\r\n    themeImage: document.querySelector('.theme-image'),\r\n    mainPageContent: document.querySelector('.content-cover'),\r\n    navigationMenu: document.querySelector('.navigation-menu'),\r\n    header: document.querySelector('.header'),\r\n}\r\n\r\nconst slideFromLeft = (el, el_margin=0) =>{\r\n    el.style.marginLeft = el_margin;\r\n}\r\n\r\nconst slideFromRight = (el, el_margin=0) =>{\r\n    el.style.marginRight = el_margin;\r\n}\r\n\r\nconst appear = el => {\r\n    el.style.opacity = \"1\";\r\n}\r\n\r\nconst displayThemeImage = el => {\r\n    slideFromLeft(elements.themeImage);\r\n}\r\n\r\nconst displayMainPageContent = () => {\r\n    slideFromRight(elements.mainPageContent);\r\n    appear(elements.navigationMenu);\r\n    slideFromRight(elements.header);\r\n}\r\nconst init = () => {\r\n    console.log('init');\r\n    displayThemeImage();\r\n    displayMainPageContent();\r\n}\r\n\r\ninit();\r\n\r\n\n\n//# sourceURL=webpack://code-breaker/./src/js/index.js?");
/******/ })()
;