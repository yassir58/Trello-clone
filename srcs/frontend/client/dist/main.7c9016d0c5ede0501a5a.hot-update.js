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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst md_1 = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\nconst ProgressBar_1 = __importDefault(__webpack_require__(/*! ./ProgressBar */ \"./src/components/ProgressBar.tsx\"));\nconst PromptField_1 = __importDefault(__webpack_require__(/*! ./PromptField */ \"./src/components/PromptField.tsx\"));\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst useTasks_1 = __webpack_require__(/*! ../hooks/useTasks */ \"./src/hooks/useTasks.tsx\");\nconst Checklist = ({ checklist }) => {\n    const { data } = (0, useTasks_1.useTasks)(checklist);\n    const [checkedCount, setCheckedCount] = (0, react_3.useState)(0);\n    const [count] = (0, react_3.useState)(0);\n    const handleCheckboxChange = (event) => {\n        const isChecked = event.target.checked;\n        setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));\n    };\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(react_2.Card, { p: \"40px\" },\n            react_1.default.createElement(react_2.CardHeader, { mx: 0, px: 0, my: 0, py: 0 },\n                react_1.default.createElement(react_2.Wrap, { spacingX: \"356px\", align: \"center\" },\n                    react_1.default.createElement(react_2.Wrap, null,\n                        react_1.default.createElement(md_1.MdChecklist, null),\n                        react_1.default.createElement(react_2.Text, { fontSize: \"12px\", as: \"b\" }, checklist.name)),\n                    react_1.default.createElement(react_2.Button, { fontSize: \"10px\", variant: \"unstyled\" }, \"Delete\"))),\n            react_1.default.createElement(react_2.CardBody, { mx: 0, px: 0, my: \"27px\", py: 0 },\n                react_1.default.createElement(react_2.Stack, { spacing: \"28px\" },\n                    react_1.default.createElement(ProgressBar_1.default, { base: count, marked: checkedCount }),\n                    react_1.default.createElement(react_2.Stack, { spacing: \"18px\" }, data && data.count > 0 && data.tasks.map((element, index) => (react_1.default.createElement(react_2.Checkbox, { key: index, onChange: handleCheckboxChange }, element.content)))),\n                    react_1.default.createElement(PromptField_1.default, { checklist: checklist }))))));\n};\nexports[\"default\"] = Checklist;\n\n\n//# sourceURL=webpack://client/./src/components/Checklist.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f68e842c97b9374d2ee8")
/******/ })();
/******/ 
/******/ }
);