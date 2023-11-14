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

/***/ "./src/components/PromptWrap.tsx":
/*!***************************************!*\
  !*** ./src/components/PromptWrap.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst useTasks_1 = __webpack_require__(/*! ../hooks/useTasks */ \"./src/hooks/useTasks.tsx\");\nconst PromptWrap = ({ cancelClick, checklist }) => {\n    const [input, setInput] = (0, react_3.useState)(\"\");\n    const { newTaskMutation } = (0, useTasks_1.useTasks)(checklist);\n    const handleAddchecklist = (event) => {\n        setInput(event.target.value);\n    };\n    const addTask = () => {\n        newTaskMutation.mutate(input);\n        setInput(\"\");\n    };\n    return (react_1.default.createElement(react_2.Wrap, { spacingX: \"20px\", alignItems: \"center\" },\n        react_1.default.createElement(react_2.Input, { variant: \"outline\", w: \"269px\", h: \"30px\", placeholder: \"Add an item\", onChange: handleAddchecklist }),\n        react_1.default.createElement(react_2.Button, { variant: \"primary\", w: \"60px\", h: \"30px\", fontSize: \"12px\", onClick: addTask }, \"Add\"),\n        react_1.default.createElement(react_2.Button, { variant: \"unstyled\", fontSize: \"12px\", w: \"60px\", h: \"30px\", onClick: cancelClick }, \"cancel\")));\n};\nexports[\"default\"] = PromptWrap;\n\n\n//# sourceURL=webpack://client/./src/components/PromptWrap.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cb03dd897226b513f552")
/******/ })();
/******/ 
/******/ }
);