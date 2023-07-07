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

/***/ "./src/components/header/header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/header.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\n__webpack_require__(/*! ../../styles/app.scss */ \"./src/styles/app.scss\");\nconst react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nconst free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.js\");\nconst free_solid_svg_icons_2 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.js\");\nconst Buttons_1 = __webpack_require__(/*! ../ui-elements/Buttons */ \"./src/components/ui-elements/Buttons.tsx\");\nconst Header = () => {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_2.Flex, { className: \"header\", px: \"2vw\", py: \"2vh\", justify: \"space-between\", align: \"center\" },\n            react_1.default.createElement(react_2.Flex, { width: \"40vw\", justify: \"space-between\", align: \"center\" },\n                react_1.default.createElement(SmallLogo, null),\n                react_1.default.createElement(Nav, null)),\n            react_1.default.createElement(react_2.Flex, { justify: \"space-between\", width: \"35vw\", align: \"center\" },\n                react_1.default.createElement(SearchForm, null),\n                react_1.default.createElement(ProfileHeader, null)))));\n};\nconst Nav = () => {\n    return (react_1.default.createElement(react_2.Flex, { justify: \"space-between\", align: \"center\" },\n        react_1.default.createElement(react_2.chakra.h3, { px: \"5px\" }, \"DevChallenges Board\"),\n        react_1.default.createElement(react_2.chakra.div, { className: \"w-px h-10 bg-gray-300 m-3.5\", width: \"1px\", height: \"1.8rem\", bg: \"gray.200\", mx: \"1.5rem\" }),\n        react_1.default.createElement(Buttons_1.SecondaryButton, null,\n            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faGripVertical }),\n            react_1.default.createElement(react_2.chakra.small, null, \"All boards\"))));\n};\nconst SmallLogo = () => {\n    return (react_1.default.createElement(react_2.Flex, { justify: \"space-between\", align: \"center\", p: \"2px\" },\n        react_1.default.createElement(\"svg\", { width: \"32\", height: \"29\", viewBox: \"0 0 32 29\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n            react_1.default.createElement(\"path\", { d: \"M0 4C0 1.79086 1.79086 0 4 0H10C12.2091 0 14 1.79086 14 4V25C14 27.2091 12.2091 29 10 29H4C1.79086 29 0 27.2091 0 25V4Z\", fill: \"#2F80ED\" }),\n            react_1.default.createElement(\"path\", { d: \"M18 4C18 1.79086 19.7909 0 22 0H28C30.2091 0 32 1.79086 32 4V14C32 16.2091 30.2091 18 28 18H22C19.7909 18 18 16.2091 18 14V4Z\", fill: \"#2F80ED\" })),\n        react_1.default.createElement(react_2.chakra.h3, { fontSize: \"1.2rem\", fontWeight: \"bold\", px: \"5px\" }, \"Thello\")));\n};\nconst ProfileHeader = () => {\n    return (react_1.default.createElement(react_2.HStack, { spacing: 3, color: 'gray.600' },\n        react_1.default.createElement(react_2.Avatar, { size: 'sm', borderRadius: 'md', src: \"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60\" }),\n        react_1.default.createElement(react_2.chakra.small, { color: \"gray.600\", mx: \"10px\" }, \"Javier lima\"),\n        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_2.faCaretDown })));\n};\nconst SearchForm = () => {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_2.chakra.form, { display: \"flex\", justifyContent: \"space-between\", alignItems: \"center\", border: \"0\", rounded: \"md\", bg: \"white\", color: \"gray.300\", w: \"20vw\", h: '6vh', px: \"4px\", boxShadow: 'base' },\n            react_1.default.createElement(react_2.chakra.input, { type: \"text\", className: \"bg-transparent border-0 outline-none w-3/5 px-30\", opacity: \"1\", px: \"2px\", py: \"2px\", w: \"3/5\", border: \"0\", fontSize: \"xs\", outline: \"none\", value: \"keywords ...\" }),\n            react_1.default.createElement(Buttons_1.PrimaryButton, { width: \"6vw\", height: \"5vh\" },\n                react_1.default.createElement(react_2.chakra.small, null, \"Search\")))));\n};\nexports[\"default\"] = Header;\n\n\n//# sourceURL=webpack://client/./src/components/header/header.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a430206d6bee325a96f0")
/******/ })();
/******/ 
/******/ }
);