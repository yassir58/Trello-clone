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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AddAttachement = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst ContextScheme_1 = __webpack_require__(/*! ../context/ContextScheme */ \"./src/context/ContextScheme.tsx\");\nconst react_3 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_query_1 = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.js\");\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\"));\nconst useAlerts_1 = __webpack_require__(/*! ../hooks/useAlerts */ \"./src/hooks/useAlerts.ts\");\nconst AddAttachement = ({}) => {\n    const { onClose } = (0, react_2.useContext)(ContextScheme_1.popOverContext);\n    const fileInputRef = (0, react_1.useRef)(null);\n    const [imageData, setImageData] = (0, react_1.useState)(\"\");\n    const toast = (0, react_3.useToast)();\n    const uploadMutation = (0, react_query_1.useMutation)({\n        mutationFn: (formData) => __awaiter(void 0, void 0, void 0, function* () {\n            return yield axios_1.default\n                .post(\"http://localhost:5002/attachements\", formData, {\n                withCredentials: true,\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\",\n                },\n            });\n        }),\n        onSuccess: () => {\n            toast((0, useAlerts_1.useSuccess)(\"File uploaded successfully\"));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to upload file'))\n    });\n    const handleFileUpload = (e) => {\n        var _a;\n        const selectedFile = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];\n        if (selectedFile) {\n            const fileReader = new FileReader();\n            fileReader.onloadend = () => {\n                setImageData(fileReader.result);\n            };\n            fileReader.readAsDataURL(selectedFile);\n            const formData = new FormData();\n            formData.append('file', imageData);\n            uploadMutation.mutate(formData);\n            toast({ title: 'Uploading file ...',\n                status: 'info',\n                duration: 1000,\n                isClosable: false, });\n        }\n    };\n    return (react_1.default.createElement(react_3.Stack, { spacing: 5 },\n        react_1.default.createElement(react_3.Stack, { spacing: 3 },\n            react_1.default.createElement(react_3.Heading, null, \"Attachements\"),\n            react_1.default.createElement(react_3.Text, null, \"Attach a file from your computer\")),\n        react_1.default.createElement(react_3.FormControl, null,\n            react_1.default.createElement(react_3.FormLabel, { visibility: \"hidden\", ref: fileInputRef, htmlFor: \"attachement\" }),\n            react_1.default.createElement(react_3.Input, { type: \"file\", visibility: 'hidden', id: 'attachement', onChange: handleFileUpload }),\n            react_1.default.createElement(react_3.Button, { variant: \"ghost\", onClick: () => { var _a; return (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); } }, \"chose file\")),\n        react_1.default.createElement(react_3.Image, { src: imageData, boxSize: 200, borderRadius: 8 }),\n        react_1.default.createElement(react_3.HStack, { spacing: 4 },\n            react_1.default.createElement(react_3.Button, { variant: \"primary\", onClick: () => {\n                    onClose();\n                } }, \"add\"),\n            react_1.default.createElement(react_3.Button, { variant: \"ghost\", onClick: () => {\n                    onClose();\n                } }, \"cancel\"))));\n};\nexports.AddAttachement = AddAttachement;\n\n\n//# sourceURL=webpack://client/./src/components/AddAttachement.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ca2c45a5bd4d752f053")
/******/ })();
/******/ 
/******/ }
);