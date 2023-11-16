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

/***/ "./src/components/ButtonStack.tsx":
/*!****************************************!*\
  !*** ./src/components/ButtonStack.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst ButtonStack = (props) => {\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(react_2.Stack, { spacing: props.spaceBetween, mx: 0, px: 0 }, props.buttons.map((button, index) => (react_1.default.createElement(react_2.Button, { onClick: props.onClick[index], variant: props.style, w: props.width, h: props.height === undefined ? \"auto\" : props.height, textAlign: \"center\" },\n            react_1.default.createElement(react_2.Flex, { alignItems: \"center\", justifyContent: \"center\" },\n                react_1.default.createElement(react_2.Wrap, { align: \"center\", spacingX: \"11px\" },\n                    !(props.Icons === undefined) && props.Icons[index],\n                    react_1.default.createElement(react_2.Text, { fontSize: \"12px\" }, button)))))))));\n};\nexports[\"default\"] = ButtonStack;\n\n\n//# sourceURL=webpack://client/./src/components/ButtonStack.tsx?");

/***/ }),

/***/ "./src/components/InviteToBoard.tsx":
/*!******************************************!*\
  !*** ./src/components/InviteToBoard.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst bi_1 = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\nconst ButtonStack_1 = __importDefault(__webpack_require__(/*! ./ButtonStack */ \"./src/components/ButtonStack.tsx\"));\nconst SearchInput_1 = __webpack_require__(/*! ./ui-elements/SearchInput */ \"./src/components/ui-elements/SearchInput.tsx\");\nconst InviteToBoard = () => {\n    const [search, setSearch] = react_1.default.useState(\"\");\n    return (react_1.default.createElement(react_2.Stack, { justify: 'center', alignItems: 'center' },\n        react_1.default.createElement(react_2.Stack, { py: \"10px\", spacing: 1 },\n            react_1.default.createElement(react_2.Text, { fontSize: \"12px\" }, \"Invite to Board\"),\n            react_1.default.createElement(react_2.Text, { fontSize: \"12px\", color: \"gray\" }, \"Search for people you want to invite\")),\n        react_1.default.createElement(SearchInput_1.SearchInput, { state: search, stateSetter: setSearch }),\n        react_1.default.createElement(react_2.Stack, { borderColor: \"lightgray\", borderWidth: \"1px\", borderRadius: \"8px\", shadow: \"md\", p: \"12px\" },\n            react_1.default.createElement(ButtonStack_1.default, { onClick: [() => { }], buttons: [\"User\", \"User\", \"User\"], style: \"ghost\", width: \"228px\", height: \"45px\", spaceBetween: \"15px\", Icons: [react_1.default.createElement(bi_1.BiSolidUser, null), react_1.default.createElement(bi_1.BiSolidUser, null), react_1.default.createElement(bi_1.BiSolidUser, null)] })),\n        react_1.default.createElement(react_2.Button, { mx: \"auto\", w: \"74px\", h: \"30px\", variant: \"primary\", fontSize: \"10px\" }, \"Invite\")));\n};\nexports[\"default\"] = InviteToBoard;\n\n\n//# sourceURL=webpack://client/./src/components/InviteToBoard.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2fd315128227814224fd")
/******/ })();
/******/ 
/******/ }
);