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

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AddAttachement = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst ContextScheme_1 = __webpack_require__(/*! ../context/ContextScheme */ \"./src/context/ContextScheme.tsx\");\nconst react_3 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useAttachementsUploader_1 = __webpack_require__(/*! ../hooks/useAttachementsUploader */ \"./src/hooks/useAttachementsUploader.ts\");\nconst AddAttachement = ({ card }) => {\n    const { onClose } = (0, react_2.useContext)(ContextScheme_1.popOverContext);\n    const fileInputRef = (0, react_1.useRef)(null);\n    const { handleSubmit, SendFormData, register, fileData } = (0, useAttachementsUploader_1.useAttachementsUploader)(card === null || card === void 0 ? void 0 : card.id);\n    return (react_1.default.createElement(react_3.Stack, { spacing: 5, minW: '250px', alignItems: 'flex-start', justifyContent: 'center' },\n        react_1.default.createElement(react_3.Stack, { spacing: 3 },\n            react_1.default.createElement(react_3.Heading, null, \"Attachements\"),\n            react_1.default.createElement(react_3.Text, null, \"Attach a file from your computer\")),\n        react_1.default.createElement(\"form\", { method: \"POST\", encType: \"multipart/form-data\", onSubmit: handleSubmit(SendFormData) },\n            react_1.default.createElement(react_3.FormLabel, { visibility: \"hidden\", ref: fileInputRef, htmlFor: \"attachement\" }),\n            react_1.default.createElement(react_3.Input, Object.assign({ type: \"input\", variant: 'default', placeholder: \"attachement title\" }, register(\"title\"))),\n            react_1.default.createElement(react_3.Input, Object.assign({ type: \"file\", visibility: 'hidden', id: 'attachement' }, register(\"attachement\"))),\n            react_1.default.createElement(react_3.Button, { variant: \"ghost\", onClick: () => { var _a; return (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); } }, \"chose file\"),\n            react_1.default.createElement(react_3.HStack, { spacing: 4 },\n                react_1.default.createElement(react_3.Button, { type: 'submit', variant: \"primary\", onClick: () => {\n                        onClose();\n                    } }, \"add\"),\n                react_1.default.createElement(react_3.Button, { variant: \"ghost\", onClick: () => {\n                        onClose();\n                    } }, \"cancel\"))),\n        fileData && fileData.length && react_1.default.createElement(react_3.Avatar, { src: fileData, name: fileData.split('.')[1], boxSize: 200, borderRadius: 8 })));\n};\nexports.AddAttachement = AddAttachement;\n\n\n//# sourceURL=webpack://client/./src/components/AddAttachement.tsx?");

/***/ }),

/***/ "./src/hooks/useAttachementsUploader.ts":
/*!**********************************************!*\
  !*** ./src/hooks/useAttachementsUploader.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useAttachementsUploader = exports.newAttachementSchema = void 0;\nconst zod_1 = __webpack_require__(/*! @hookform/resolvers/zod */ \"./node_modules/@hookform/resolvers/zod/dist/zod.js\");\nconst react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.cjs.js\");\nconst zod_2 = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.js\");\nconst react_query_1 = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.js\");\nconst react_1 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_query_2 = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.js\");\nconst useAlerts_1 = __webpack_require__(/*! ./useAlerts */ \"./src/hooks/useAlerts.ts\");\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\"));\nconst react_2 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst ACCEPTED_FILE_TYPES = [\"image/jpeg\", \"image/jpg\", \"image/png\", \"application/pdf\"];\nexports.newAttachementSchema = zod_2.z.object({\n    title: zod_2.z.string().min(6, { message: \"Display name must be over 6 characters long\" }).max(50),\n    attachement: zod_2.z\n        .any()\n        .refine((files) => (files === null || files === void 0 ? void 0 : files.length) == 1, \"Image is required.\")\n        .refine((files) => { var _a; return ACCEPTED_FILE_TYPES.includes((_a = files === null || files === void 0 ? void 0 : files[0]) === null || _a === void 0 ? void 0 : _a.type); }, \".jpeg, .png and .pdf files are accepted.\"),\n});\nconst useCreateAttachement = () => {\n    const { handleSubmit, reset, register, formState: { errors }, } = (0, react_hook_form_1.useForm)({\n        resolver: (0, zod_1.zodResolver)(exports.newAttachementSchema),\n    });\n    return { handleSubmit, reset, register, errors };\n};\nexports[\"default\"] = useCreateAttachement;\nconst useAttachementsUploader = (cardId) => {\n    const queryClient = (0, react_query_1.useQueryClient)();\n    const { handleSubmit, reset, register, errors } = useCreateAttachement();\n    const [fileData, setFileData] = (0, react_2.useState)('');\n    const toast = (0, react_1.useToast)();\n    const uploadMutation = (0, react_query_2.useMutation)({\n        mutationFn: (formData) => __awaiter(void 0, void 0, void 0, function* () {\n            return yield axios_1.default\n                .post(\"http://localhost:5002/api/v1/attachements\", formData, {\n                withCredentials: true,\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\",\n                },\n            });\n        }),\n        onSuccess: () => {\n            toast((0, useAlerts_1.useSuccess)(\"File uploaded successfully\"));\n            queryClient.invalidateQueries(['attachements', cardId]);\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to upload file'))\n    });\n    const handleFileUpload = (selectedFile) => {\n        if (selectedFile) {\n            const fileReader = new FileReader();\n            fileReader.onloadend = () => {\n                setFileData(fileReader.result);\n            };\n            fileReader.readAsDataURL(selectedFile);\n        }\n    };\n    const SendFormData = (data) => {\n        const formData = new FormData();\n        formData.append(\"cardId\", cardId);\n        formData.append(\"title\", data.title);\n        formData.append(\"attachement\", data.attachement[0]);\n        handleFileUpload(data.attachement[0]);\n        uploadMutation.mutate(formData);\n    };\n    return { handleSubmit, reset, register, errors, SendFormData, fileData };\n};\nexports.useAttachementsUploader = useAttachementsUploader;\n\n\n//# sourceURL=webpack://client/./src/hooks/useAttachementsUploader.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cad8f5a3fa6c4fe084bc")
/******/ })();
/******/ 
/******/ }
);