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

/***/ "./src/components/CommentCard.tsx":
/*!****************************************!*\
  !*** ./src/components/CommentCard.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CommentCard = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useComments_1 = __webpack_require__(/*! ../hooks/useComments */ \"./src/hooks/useComments.ts\");\nconst CommentCard = ({ comment }) => {\n    const { deleteCommentMutation, updateCommentMutation } = (0, useComments_1.useComments)(comment.cardId);\n    const [editeMode, setEditeMode] = (0, react_1.useState)(false);\n    const [value, setValue] = (0, react_1.useState)(comment.content);\n    const handleEdite = () => {\n        updateCommentMutation.mutate({ content: value, comment: comment.id });\n        setValue('');\n        setEditeMode(false);\n    };\n    const handleEnter = (event) => {\n        if (event.key === 'Enter')\n            handleEdite();\n    };\n    return (react_1.default.createElement(react_2.Stack, { spacing: 4 },\n        react_1.default.createElement(react_2.HStack, { w: \"100%\", justifyContent: \"space-between\" },\n            react_1.default.createElement(react_2.Stack, null,\n                react_1.default.createElement(react_2.Text, null, comment.createdAt)),\n            react_1.default.createElement(react_2.HStack, { spacing: 3 },\n                react_1.default.createElement(react_2.Button, { variant: \"ghost\", onClick: () => setEditeMode(true) }, \"edite\"),\n                react_1.default.createElement(react_2.Button, { variant: \"ghost\", onClick: () => deleteCommentMutation.mutate(comment.id) }, \"delete\"))),\n        editeMode ? react_1.default.createElement(react_2.InputGroup, { size: 'md' },\n            react_1.default.createElement(react_2.Input, { type: 'text', value: value, onKeyDown: handleEnter, onChange: (e) => setValue(e.target.value) }),\n            react_1.default.createElement(react_2.InputRightElement, null,\n                react_1.default.createElement(react_2.Button, { colorScheme: \"green\", onClick: handleEdite }, \"done\"),\n                react_1.default.createElement(react_2.Button, { variant: 'ghost', onClick: () => setEditeMode(false) }, \"cancel\"))) : react_1.default.createElement(react_2.Text, null, comment.content)));\n};\nexports.CommentCard = CommentCard;\n\n\n//# sourceURL=webpack://client/./src/components/CommentCard.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ce6f6188d456454031a6")
/******/ })();
/******/ 
/******/ }
);