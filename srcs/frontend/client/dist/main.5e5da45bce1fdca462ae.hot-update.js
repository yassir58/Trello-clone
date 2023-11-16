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

/***/ "./src/components/AttachmentCard.tsx":
/*!*******************************************!*\
  !*** ./src/components/AttachmentCard.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AttachementCard = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useAttachements_1 = __importDefault(__webpack_require__(/*! ../hooks/useAttachements */ \"./src/hooks/useAttachements.ts\"));\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\"));\nconst AttachementCard = ({ attachement }) => {\n    const attachementPath = \"http://localhost:5002/attachement\";\n    const { deleteAttachementMutation } = (0, useAttachements_1.default)(attachement.cardId);\n    const toast = (0, react_2.useToast)();\n    const anchorRef = (0, react_1.useRef)(null);\n    const handleDownload = () => __awaiter(void 0, void 0, void 0, function* () {\n        try {\n            const response = yield axios_1.default\n                .get(`${attachementPath}/${attachement.path}`, {\n                responseType: \"blob\", // Specify the response type as 'blob' to handle binary data\n            });\n            const contentDisposition = response.headers['content-disposition'];\n            const filenameMatch = contentDisposition && contentDisposition.match(/filename=\"(.+)\"/);\n            const filename = filenameMatch ? filenameMatch[1] : 'downloaded_file';\n            toast({\n                title: 'Downloading file ....',\n                status: 'info',\n                duration: 1000,\n                isClosable: false\n            });\n            // Create a download link\n            const url = window.URL.createObjectURL(new Blob([response.data]));\n            anchorRef.current.href = url;\n            anchorRef.current.download = filename;\n            // Simulate a click on the anchor to start the download\n            anchorRef.current.click();\n            // Clean up the created elements\n            window.URL.revokeObjectURL(url);\n        }\n        catch (error) {\n            console.error('Error during file download:', error);\n        }\n    });\n    return (react_1.default.createElement(react_2.HStack, { spacing: 5 },\n        react_1.default.createElement(react_2.Avatar, { borderRadius: \"12px\", size: \"xl\", src: `${attachementPath}/${attachement.path}`, name: attachement.path.split(\".\")[1] }),\n        react_1.default.createElement(react_2.Stack, { flex: 1, spacing: 5 },\n            react_1.default.createElement(react_2.Stack, { spacing: 3 },\n                react_1.default.createElement(react_2.Text, null, attachement.createAt),\n                react_1.default.createElement(react_2.Heading, null, attachement.title)),\n            react_1.default.createElement(react_2.HStack, null,\n                react_1.default.createElement(react_2.Button, { variant: \"outline\", onClick: handleDownload }, \"download\"),\n                react_1.default.createElement(react_2.Button, { variant: \"outline\", onClick: () => deleteAttachementMutation.mutate(attachement.id) }, \"delete\")))));\n};\nexports.AttachementCard = AttachementCard;\n\n\n//# sourceURL=webpack://client/./src/components/AttachmentCard.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6dabd59ff9833571bd4c")
/******/ })();
/******/ 
/******/ }
);