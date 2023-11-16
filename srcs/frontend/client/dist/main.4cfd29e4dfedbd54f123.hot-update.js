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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AddAttachement = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst ContextScheme_1 = __webpack_require__(/*! ../context/ContextScheme */ \"./src/context/ContextScheme.tsx\");\nconst react_3 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useAttachementsUploader_1 = __webpack_require__(/*! ../hooks/useAttachementsUploader */ \"./src/hooks/useAttachementsUploader.ts\");\nconst AddAttachement = ({ card }) => {\n    const { onClose } = (0, react_2.useContext)(ContextScheme_1.popOverContext);\n    const fileInputRef = (0, react_1.useRef)(null);\n    const [imageData] = (0, react_1.useState)(\"\");\n    const { handleSubmit, SendFormData, register } = (0, useAttachementsUploader_1.useAttachementsUploader)(card === null || card === void 0 ? void 0 : card.id);\n    // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {\n    //     const selectedFile = e.target.files?.[0];\n    //     if (selectedFile) {\n    //       const fileReader = new FileReader();\n    //       fileReader.onloadend = () => {\n    //         setImageData(fileReader.result as string);\n    //       };\n    //       fileReader.readAsDataURL(selectedFile);\n    //     }\n    //   };\n    return (react_1.default.createElement(react_3.Stack, { spacing: 5, minW: '250px', alignItems: 'center', justifyContent: 'flex-start' },\n        react_1.default.createElement(react_3.Stack, { spacing: 3 },\n            react_1.default.createElement(react_3.Heading, null, \"Attachements\"),\n            react_1.default.createElement(react_3.Text, null, \"Attach a file from your computer\")),\n        react_1.default.createElement(\"form\", { onSubmit: handleSubmit(SendFormData) },\n            react_1.default.createElement(react_3.FormLabel, { visibility: \"hidden\", ref: fileInputRef, htmlFor: \"attachement\" }),\n            react_1.default.createElement(react_3.Input, Object.assign({ type: \"input\", variant: 'default', placeholder: \"attachement title\" }, register(\"title\"))),\n            react_1.default.createElement(react_3.Input, Object.assign({ type: \"file\", visibility: 'hidden', id: 'attachement' }, register(\"attachement\"))),\n            react_1.default.createElement(react_3.Button, { variant: \"ghost\", onClick: () => { var _a; return (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); } }, \"chose file\"),\n            react_1.default.createElement(react_3.HStack, { spacing: 4 },\n                react_1.default.createElement(react_3.Button, { type: 'submit', variant: \"primary\", onClick: () => {\n                        onClose();\n                    } }, \"add\"),\n                react_1.default.createElement(react_3.Button, { variant: \"ghost\", onClick: () => {\n                        onClose();\n                    } }, \"cancel\"))),\n        imageData && imageData.length && react_1.default.createElement(react_3.Avatar, { src: imageData, name: imageData.split('.')[1], boxSize: 200, borderRadius: 8 })));\n};\nexports.AddAttachement = AddAttachement;\n\n\n//# sourceURL=webpack://client/./src/components/AddAttachement.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("521743446b1c44b5ef08")
/******/ })();
/******/ 
/******/ }
);