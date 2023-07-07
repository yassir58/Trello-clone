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

/***/ "./src/components/ui-elements/Buttons.tsx":
/*!************************************************!*\
  !*** ./src/components/ui-elements/Buttons.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Label = exports.LargeButton = exports.LighButton = exports.SecondaryButton = exports.PrimaryButton = void 0;\nconst react_1 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_2 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_3 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst PrimaryButton = ({ children, width = '0px', height = '0px', spacing = '15px' }) => {\n    return (react_2.default.createElement(\"div\", null,\n        react_2.default.createElement(react_1.Button, { bg: \"blue.500\", color: \"white\", w: width, h: height, p: spacing, mx: \"2px\", rounded: \"md\", fontSize: \"xs\", _hover: { bg: \"blue.600\" }, outline: \"none\" },\n            react_2.default.createElement(react_3.HStack, { spacing: 4 }, children))));\n};\nexports.PrimaryButton = PrimaryButton;\nconst SecondaryButton = ({ children, }) => {\n    return (react_2.default.createElement(\"div\", null,\n        react_2.default.createElement(react_1.Button, { h: \"5vh\", mx: \"2px\", bg: \"gray.100\", border: \"0\", outline: \"none\", color: \"gray.500\", rounded: \"md\", _hover: { bg: \"gray.200\" }, fontSize: \"sm\" },\n            react_2.default.createElement(react_3.HStack, { spacing: 4 }, children))));\n};\nexports.SecondaryButton = SecondaryButton;\nconst LighButton = () => {\n    return react_2.default.createElement(\"div\", null);\n};\nexports.LighButton = LighButton;\nconst LargeButton = ({ children }) => {\n    return (react_2.default.createElement(\"div\", null,\n        react_2.default.createElement(react_1.Button, { w: \"19vw\", bg: \"blue.100\", color: \"blue.500\", rounded: \"md\", p: \"2px\", h: \"5vh\", _hover: { bg: \"blue.200\" } },\n            react_2.default.createElement(react_3.HStack, { spacing: '6vw' }, children))));\n};\nexports.LargeButton = LargeButton;\nconst Label = ({ color, children }) => {\n    return (react_2.default.createElement(react_3.Tag, { bg: `${color}.100`, color: `${color}.600`, h: \"4vh\", mx: \"2px\", px: \"8px\", rounded: \"xl\", fontSize: \"xs\", outline: \"none\" }, children));\n};\nexports.Label = Label;\n\n\n//# sourceURL=webpack://client/./src/components/ui-elements/Buttons.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("49c35ec30a9e7995217a")
/******/ })();
/******/ 
/******/ }
);