"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclient"]("main",{

/***/ "./src/components/ui-elements/Media.tsx":
/*!**********************************************!*\
  !*** ./src/components/ui-elements/Media.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CardInfo = exports.CardCp = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nconst CardCp = ({ imgSrc, cardTitle, children }) => {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_2.Card, { maxW: \"sm\", w: '98%', rounded: 'md' },\n            react_1.default.createElement(react_2.CardBody, null,\n                react_1.default.createElement(react_2.Image, { src: imgSrc, alt: cardTitle, borderRadius: \"lg\" }),\n                react_1.default.createElement(react_2.Stack, { mt: \"6\", spacing: \"3\" },\n                    react_1.default.createElement(react_2.Heading, { size: \"md\" }, cardTitle),\n                    children)))));\n};\nexports.CardCp = CardCp;\nconst CardInfo = ({ value, icon }) => {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_2.HStack, { spacing: 2, color: 'gray.200' },\n            react_1.default.createElement(react_2.chakra.small, null,\n                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: icon })),\n            react_1.default.createElement(react_2.chakra.small, { color: 'gray.200', fontSize: 'xs' }, value))));\n};\nexports.CardInfo = CardInfo;\n\n\n//# sourceURL=webpack://client/./src/components/ui-elements/Media.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b2ed4207b54584fd990")
/******/ })();
/******/ 
/******/ }
);