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

/***/ "./src/hooks/useComments.ts":
/*!**********************************!*\
  !*** ./src/hooks/useComments.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useComments = void 0;\nconst react_query_1 = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.js\");\nconst apiClient_1 = __importDefault(__webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\"));\nconst react_1 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useAlerts_1 = __webpack_require__(/*! ./useAlerts */ \"./src/hooks/useAlerts.ts\");\nconst useComments = (cardId) => {\n    const newCommentClient = new apiClient_1.default(\"http://localhost:5002/api/v1/comments\");\n    const allCommentsClient = new apiClient_1.default(`http://localhost:5002/api/v1/cards/${cardId}/comments`);\n    const deleteCommentClient = (comment) => new apiClient_1.default(`http://localhost:5002/api/v1/cards/${cardId}/comments/${comment}`);\n    const toast = (0, react_1.useToast)();\n    const queryClient = (0, react_query_1.useQueryClient)();\n    const { isError, isLoading, data } = (0, react_query_1.useQuery)({\n        queryKey: ['comments', cardId],\n        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return allCommentsClient.getData().then(res => res.data); }),\n        onSuccess: (data) => console.log(data),\n        onError: (err) => console.log(err)\n    });\n    const newCommentMutation = (0, react_query_1.useMutation)({\n        mutationFn: (content) => __awaiter(void 0, void 0, void 0, function* () {\n            return newCommentClient.postData({\n                \"content\": content,\n                \"cardId\": cardId\n            });\n        }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['comments', cardId]);\n            toast((0, useAlerts_1.useSuccess)(\"Comment created succesfully\"));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)(\"Failed to create comment\"))\n    });\n    const deleteCommentMutation = (0, react_query_1.useMutation)({\n        mutationFn: (comment) => __awaiter(void 0, void 0, void 0, function* () { return deleteCommentClient(comment).deleteData(); }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['comments', cardId]);\n            toast((0, useAlerts_1.useSuccess)('Comment deleted successfully'));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to delete comment'))\n    });\n    const updateCommentMutation = (0, react_query_1.useMutation)({\n        mutationFn: (args) => __awaiter(void 0, void 0, void 0, function* () {\n            return deleteCommentClient(args.comment).updateData({\n                \"content\": args.content,\n            }, null);\n        }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['comments', cardId]);\n            toast((0, useAlerts_1.useSuccess)('Comment updated successfully'));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to update comment'))\n    });\n    return { isError, isLoading, newCommentMutation, deleteCommentMutation, updateCommentMutation, data };\n};\nexports.useComments = useComments;\n\n\n//# sourceURL=webpack://client/./src/hooks/useComments.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e2a350c0abaa86f9c1ee")
/******/ })();
/******/ 
/******/ }
);