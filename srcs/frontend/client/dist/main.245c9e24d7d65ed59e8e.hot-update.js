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

/***/ "./src/components/AddAttachement.tsx":
/*!*******************************************!*\
  !*** ./src/components/AddAttachement.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AddAttachement = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst ContextScheme_1 = __webpack_require__(/*! ../context/ContextScheme */ \"./src/context/ContextScheme.tsx\");\nconst react_3 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst AddAttachement = ({}) => {\n    const { onClose } = (0, react_2.useContext)(ContextScheme_1.popOverContext);\n    const fileInputRef = (0, react_1.useRef)(null);\n    const [imageData, setImageData] = (0, react_1.useState)(\"\");\n    const handleFileUpload = (e) => {\n        var _a;\n        const selectedFile = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];\n        if (selectedFile) {\n            const fileReader = new FileReader();\n            fileReader.onloadend = () => {\n                setImageData(fileReader.result);\n            };\n            fileReader.readAsDataURL(selectedFile);\n        }\n    };\n    return (react_1.default.createElement(react_3.Stack, { spacing: 5 },\n        react_1.default.createElement(react_3.Stack, { spacing: 3 },\n            react_1.default.createElement(react_3.Heading, null, \"Attachements\"),\n            react_1.default.createElement(react_3.Text, null, \"Attach a file from your computer\")),\n        react_1.default.createElement(react_3.FormControl, null,\n            react_1.default.createElement(react_3.FormLabel, { visibility: \"hidden\", ref: fileInputRef, htmlFor: \"attachement\" }),\n            react_1.default.createElement(react_3.Input, { type: \"file\", visibility: 'hidden', id: 'attachement', onChange: handleFileUpload }),\n            react_1.default.createElement(react_3.Button, { variant: \"ghost\", onClick: () => { var _a; return (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); } }, \"chose file\")),\n        react_1.default.createElement(react_3.Image, { src: imageData, boxSize: 200, borderRadius: 8 }),\n        react_1.default.createElement(react_3.HStack, { spacing: 4 },\n            react_1.default.createElement(react_3.Button, { variant: \"primary\", onClick: () => {\n                    onClose();\n                } }, \"add\"),\n            react_1.default.createElement(react_3.Button, { variant: \"ghost\", onClick: () => {\n                    onClose();\n                } }, \"cancel\"))));\n};\nexports.AddAttachement = AddAttachement;\n\n\n//# sourceURL=webpack://client/./src/components/AddAttachement.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a5dd1c3b9e34dae5ccf")
/******/ })();
/******/ 
/******/ }
);