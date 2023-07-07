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

/***/ "./src/components/ui-elements/Containers.tsx":
/*!***************************************************!*\
  !*** ./src/components/ui-elements/Containers.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PlaceholderContainer = exports.ColumnContainer = exports.FlexContainer = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst FlexContainer = ({ children, width }) => {\n    const backgroundColor = (0, react_2.useColorModeValue)(\"rgba(236, 242, 255 1)\", \"rgba(236, 242, 255, 1)\");\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_2.Flex, { w: width, justify: \"start\", justifySelf: 'center', mx: 'auto', align: \"start\", flexDir: 'row', rounded: 'md', bg: backgroundColor, p: '2vw', h: 'auto', border: 'none', gap: '1vw' }, children)));\n};\nexports.FlexContainer = FlexContainer;\nconst ColumnContainer = ({ children, width = '20vw' }) => {\n    return (react_1.default.createElement(react_2.Flex, { w: width, gap: '2vh', flexDir: 'column', h: 'auto', justify: 'start', align: 'center' }, children));\n};\nexports.ColumnContainer = ColumnContainer;\nconst PlaceholderContainer = ({ width, height }) => {\n    return (react_1.default.createElement(react_2.Box, { w: width, h: height, bg: 'blue.100', borderStyle: \"dashed\", rounded: 'md', border: '2px solid blue.500' }));\n};\nexports.PlaceholderContainer = PlaceholderContainer;\n\n\n//# sourceURL=webpack://client/./src/components/ui-elements/Containers.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("605cb110c3b7d31afc5f")
/******/ })();
/******/ 
/******/ }
);