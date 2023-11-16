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

/***/ "./src/components/Checklist.tsx":
/*!**************************************!*\
  !*** ./src/components/Checklist.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Checklist = void 0;\nconst react_1 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_2 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst useTasks_1 = __webpack_require__(/*! ../hooks/useTasks */ \"./src/hooks/useTasks.tsx\");\nconst icons_1 = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.js\");\nconst Task = ({ task }) => {\n    const { deleteTaskMutation, editeTaskMutation } = (0, useTasks_1.useTasks)(task.cardId);\n    const handleCheck = () => {\n        editeTaskMutation.mutate(task);\n    };\n    return react_2.default.createElement(react_1.HStack, { justifyContent: 'space-between', alignItems: 'center' },\n        react_2.default.createElement(react_1.HStack, { spacing: 3 },\n            react_2.default.createElement(react_1.Checkbox, { checked: task.resolved, onChange: handleCheck }),\n            react_2.default.createElement(react_1.Text, null, task.content)),\n        react_2.default.createElement(react_1.IconButton, { \"aria-label\": \"\", color: 'grey.800', icon: react_2.default.createElement(icons_1.DeleteIcon, null), onClick: () => deleteTaskMutation.mutate(task.id) }));\n};\nconst Checklist = ({ card }) => {\n    const { data, isLoading } = (0, useTasks_1.useTasks)(card.id);\n    if (isLoading)\n        return react_2.default.createElement(react_1.Text, null, \"is loading ..\");\n    return (react_2.default.createElement(react_1.Stack, { spacing: 4, py: 6 }, data && (data === null || data === void 0 ? void 0 : data.count) && (data === null || data === void 0 ? void 0 : data.tasks.map((item, index) => {\n        return react_2.default.createElement(Task, { task: item, key: index });\n    }))));\n};\nexports.Checklist = Checklist;\n\n\n//# sourceURL=webpack://client/./src/components/Checklist.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3f6a6702a4f0e9bacfe8")
/******/ })();
/******/ 
/******/ }
);