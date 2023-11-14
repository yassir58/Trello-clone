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

/***/ "./src/components/AddChecklist.tsx":
/*!*****************************************!*\
  !*** ./src/components/AddChecklist.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst ContextScheme_1 = __webpack_require__(/*! ../context/ContextScheme */ \"./src/context/ContextScheme.tsx\");\nconst AddChecklist = () => {\n    const { onClose } = (0, react_1.useContext)(ContextScheme_1.popOverContext);\n    return (react_1.default.createElement(react_2.Stack, { spacing: 5, py: 6 },\n        react_1.default.createElement(react_2.Heading, { fontSize: \"12px\", fontStyle: \"semi-bold\" }, \"Checklist\"),\n        react_1.default.createElement(react_2.FormControl, null,\n            react_1.default.createElement(react_2.Stack, { spacing: 2 },\n                react_1.default.createElement(react_2.Text, { fontSize: \"12px\", color: \"gray\" }, \"Add a checklist title\"),\n                react_1.default.createElement(react_2.Input, { variant: \"outline\", w: \"228px\", h: \"34px\", placeholder: \"Checklist title\" }))),\n        react_1.default.createElement(react_2.HStack, { spacing: 4 },\n            react_1.default.createElement(react_2.Button, { variant: \"primary\", w: \"74px\", h: \"30px\", fontSize: \"10px\" }, \"Add\"),\n            react_1.default.createElement(react_2.Button, { variant: 'ghost', onClick: onClose }, \"cancel\"))));\n};\nexports[\"default\"] = AddChecklist;\n\n\n//# sourceURL=webpack://client/./src/components/AddChecklist.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("73d9fd00f9fea33fe37e")
/******/ })();
/******/ 
/******/ }
);