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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst md_1 = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\nconst ProgressBar_1 = __importDefault(__webpack_require__(/*! ./ProgressBar */ \"./src/components/ProgressBar.tsx\"));\nconst PromptField_1 = __importDefault(__webpack_require__(/*! ./PromptField */ \"./src/components/PromptField.tsx\"));\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst Checklist = ({ checklist }) => {\n    const [tasks, updateChecklist] = (0, react_3.useState)([\"chi haja\"]);\n    const [checkedCount, setCheckedCount] = (0, react_3.useState)(0);\n    const handleCheckboxChange = (event) => {\n        const isChecked = event.target.checked;\n        setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));\n    };\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(react_2.Card, { p: \"40px\" },\n            react_1.default.createElement(react_2.CardHeader, { mx: 0, px: 0, my: 0, py: 0 },\n                react_1.default.createElement(react_2.Wrap, { spacingX: \"356px\", align: \"center\" },\n                    react_1.default.createElement(react_2.Wrap, null,\n                        react_1.default.createElement(md_1.MdChecklist, null),\n                        react_1.default.createElement(react_2.Text, { fontSize: \"12px\", as: \"b\" }, checklist.name)),\n                    react_1.default.createElement(react_2.Button, { fontSize: \"10px\", variant: \"unstyled\" }, \"Delete\"))),\n            react_1.default.createElement(react_2.CardBody, { mx: 0, px: 0, my: \"27px\", py: 0 },\n                react_1.default.createElement(react_2.Stack, { spacing: \"28px\" },\n                    react_1.default.createElement(ProgressBar_1.default, { base: tasks.length, marked: checkedCount }),\n                    react_1.default.createElement(react_2.Stack, { spacing: \"18px\" }, tasks.map((element) => (react_1.default.createElement(react_2.Checkbox, { onChange: handleCheckboxChange }, element)))),\n                    react_1.default.createElement(PromptField_1.default, { checklists: tasks, addClick: updateChecklist }))))));\n};\nexports[\"default\"] = Checklist;\n\n\n//# sourceURL=webpack://client/./src/components/Checklist.tsx?");

/***/ }),

/***/ "./src/components/ProgressBar.tsx":
/*!****************************************!*\
  !*** ./src/components/ProgressBar.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst ProgressBar = (props) => {\n    const percent = Math.floor((props.marked / props.base) * 100);\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(react_2.Wrap, { spacing: \"8px\", align: \"center\" },\n            react_1.default.createElement(react_2.Text, null, (percent).toString()),\n            react_1.default.createElement(react_2.Progress, { w: \"400px\", value: percent, colorScheme: \"blue\" }))));\n};\nexports[\"default\"] = ProgressBar;\n\n\n//# sourceURL=webpack://client/./src/components/ProgressBar.tsx?");

/***/ }),

/***/ "./src/components/PromptField.tsx":
/*!****************************************!*\
  !*** ./src/components/PromptField.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst PromptWrap_1 = __importDefault(__webpack_require__(/*! ./PromptWrap */ \"./src/components/PromptWrap.tsx\"));\nconst PromptField = ({ checklists, addClick }) => {\n    const [state, setState] = (0, react_3.useState)(1);\n    function handleClick() {\n        !state ? setState(1) : setState(0);\n    }\n    if (state) {\n        return (react_1.default.createElement(react_2.Button, { variant: \"primary\", w: \"60px\", h: \"30px\", fontSize: \"12px\", onClick: handleClick }, \"Add\"));\n    }\n    return (react_1.default.createElement(PromptWrap_1.default, { checklists: checklists, cancelClick: handleClick, addClick: addClick }));\n};\nexports[\"default\"] = PromptField;\n\n\n//# sourceURL=webpack://client/./src/components/PromptField.tsx?");

/***/ }),

/***/ "./src/components/PromptWrap.tsx":
/*!***************************************!*\
  !*** ./src/components/PromptWrap.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst PromptWrap = ({ checklists, cancelClick, addClick }) => {\n    const [input, setInput] = (0, react_3.useState)(\"\");\n    const handleAddchecklist = (event) => {\n        setInput(event.target.value);\n    };\n    console.log(checklists);\n    const handleAddClick = () => {\n        addClick((checklists) => [...checklists, input]);\n    };\n    return (react_1.default.createElement(react_2.Wrap, { spacingX: \"20px\", alignItems: \"center\" },\n        react_1.default.createElement(react_2.Input, { variant: \"outline\", w: \"269px\", h: \"30px\", placeholder: \"Add an item\", onChange: handleAddchecklist }),\n        react_1.default.createElement(react_2.Button, { variant: \"primary\", w: \"60px\", h: \"30px\", fontSize: \"12px\", onClick: handleAddClick }, \"Add\"),\n        react_1.default.createElement(react_2.Button, { variant: \"unstyled\", fontSize: \"12px\", w: \"60px\", h: \"30px\", onClick: cancelClick }, \"cancel\")));\n};\nexports[\"default\"] = PromptWrap;\n\n\n//# sourceURL=webpack://client/./src/components/PromptWrap.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5de2bb4891d8bacbab63")
/******/ })();
/******/ 
/******/ }
);