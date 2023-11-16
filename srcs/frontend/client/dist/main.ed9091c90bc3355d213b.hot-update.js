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

/***/ "./src/components/AttachmentCard.tsx":
/*!*******************************************!*\
  !*** ./src/components/AttachmentCard.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AttachementCard = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst AttachementCard = ({ attachement }) => {\n    const attachementPath = \"http://localhost:5002/attachement\";\n    return (react_1.default.createElement(react_2.HStack, { spacing: 5 },\n        react_1.default.createElement(react_2.Avatar, { borderRadius: '12px', size: 'md', src: `${attachementPath}/${attachement.path}`, name: attachement.path.split('.')[1] }),\n        react_1.default.createElement(react_2.Stack, { flex: 1, spacing: 5 },\n            react_1.default.createElement(react_2.Stack, { spacing: 3 },\n                react_1.default.createElement(react_2.Text, null, attachement.createAt),\n                react_1.default.createElement(react_2.Heading, null, attachement.title)),\n            react_1.default.createElement(react_2.HStack, null,\n                react_1.default.createElement(react_2.Button, { variant: 'outline' }, \"download\"),\n                react_1.default.createElement(react_2.Button, { variant: 'outline' }, \"delete\")))));\n};\nexports.AttachementCard = AttachementCard;\n\n\n//# sourceURL=webpack://client/./src/components/AttachmentCard.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c9946d26e515f5d6eaa")
/******/ })();
/******/ 
/******/ }
);