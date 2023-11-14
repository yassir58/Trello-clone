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

/***/ "./src/components/CommentList.tsx":
/*!****************************************!*\
  !*** ./src/components/CommentList.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CommentList = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useComments_1 = __webpack_require__(/*! ../hooks/useComments */ \"./src/hooks/useComments.ts\");\nconst CommentCard_1 = __webpack_require__(/*! ./CommentCard */ \"./src/components/CommentCard.tsx\");\nconst CommentList = ({ card }) => {\n    const { data, isLoading } = (0, useComments_1.useComments)(card.id);\n    if (isLoading)\n        return react_1.default.createElement(react_2.Text, null, \"Loading ...\");\n    return (react_1.default.createElement(react_2.Stack, { spacing: 8, py: 10 }, data && data.count > 0 && data.comments.map((item, index) => {\n        return react_1.default.createElement(CommentCard_1.CommentCard, { key: index, comment: item });\n    })));\n};\nexports.CommentList = CommentList;\n\n\n//# sourceURL=webpack://client/./src/components/CommentList.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f68ee9524835056415b2")
/******/ })();
/******/ 
/******/ }
);