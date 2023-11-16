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

/***/ "./src/hooks/useAttachements.ts":
/*!**************************************!*\
  !*** ./src/hooks/useAttachements.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst apiClient_1 = __importDefault(__webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\"));\nconst react_query_1 = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.js\");\nconst useAttachements = (cardId) => {\n    const attachementsClient = new apiClient_1.default('http://localhost:5002/api/v1/attachements');\n    const { isError, isLoading, data } = (0, react_query_1.useQuery)({\n        queryKey: ['attachements', cardId],\n        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return attachementsClient.getData().then(res => res.data); }),\n        onSuccess: (data) => console.log(data),\n        onError: (error) => console.log(error)\n    });\n    const newAttachementsMutation = (0, react_query_1.useMutation)({\n        mutationFn: (args) => __awaiter(void 0, void 0, void 0, function* () {\n            return attachementsClient.postData({\n                \"cardId\": cardId,\n                \"title\": args.title,\n                \"path\": args.path\n            });\n        })\n    });\n    return { isError, isLoading, newAttachementsMutation, data };\n};\nexports[\"default\"] = useAttachements;\n\n\n//# sourceURL=webpack://client/./src/hooks/useAttachements.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e21575490e4f1ae9dae0")
/******/ })();
/******/ 
/******/ }
);