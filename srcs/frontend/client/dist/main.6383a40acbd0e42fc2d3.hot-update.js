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

/***/ "./src/components/ui-elements/PopOver.tsx":
/*!************************************************!*\
  !*** ./src/components/ui-elements/PopOver.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.PopOverWrapper = exports.PopOver = void 0;\nconst react_1 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_2 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst ContextScheme_1 = __webpack_require__(/*! ../../context/ContextScheme */ \"./src/context/ContextScheme.tsx\");\nconst PopOver = ({ children, size = \"xs\", triggerValue, triggerVariant, header, placement = \"bottom\", }) => {\n    const { isOpen } = (0, react_2.useContext)(ContextScheme_1.popOverContext);\n    const PopOverHeader = () => {\n        return (react_2.default.createElement(\"div\", null,\n            react_2.default.createElement(react_1.PopoverHeader, { fontWeight: \"semibold\" }, header),\n            react_2.default.createElement(react_1.PopoverCloseButton, null)));\n    };\n    return (react_2.default.createElement(\"div\", null,\n        react_2.default.createElement(react_1.Popover, { placement: placement, isOpen: isOpen },\n            react_2.default.createElement(react_1.PopoverTrigger, null,\n                react_2.default.createElement(react_1.Button, { variant: triggerVariant }, triggerValue)),\n            react_2.default.createElement(react_1.PopoverContent, { width: size, mx: \"10px\" },\n                header && react_2.default.createElement(PopOverHeader, null),\n                react_2.default.createElement(react_1.PopoverBody, null, children)))));\n};\nexports.PopOver = PopOver;\nconst PopOverWrapper = ({ children, size = \"xs\", triggerVariant, header, placement = \"bottom\", icon, value, }) => {\n    const { isOpen, onClose, onOpen } = (0, react_1.useDisclosure)();\n    const trigger = () => {\n        return (react_2.default.createElement(react_1.HStack, { spacing: 1 },\n            icon,\n            \" \",\n            react_2.default.createElement(react_1.Text, { fontSize: \"sm\" }, value)));\n    };\n    return (react_2.default.createElement(ContextScheme_1.popOverContext.Provider, { value: { isOpen, onClose, onOpen } },\n        react_2.default.createElement(exports.PopOver, { size: size, placement: placement, header: header, triggerValue: trigger(), triggerVariant: triggerVariant }, children)));\n};\nexports.PopOverWrapper = PopOverWrapper;\n\n\n//# sourceURL=webpack://client/./src/components/ui-elements/PopOver.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3245eaf2d5b41dd9ddd5")
/******/ })();
/******/ 
/******/ }
);