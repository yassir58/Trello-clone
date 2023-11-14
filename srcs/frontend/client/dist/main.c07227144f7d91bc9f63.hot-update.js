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

/***/ "./src/hooks/useChecklists.ts":
/*!************************************!*\
  !*** ./src/hooks/useChecklists.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useChecklists = void 0;\nconst react_query_1 = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.js\");\nconst apiClient_1 = __importDefault(__webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\"));\nconst react_1 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useAlerts_1 = __webpack_require__(/*! ./useAlerts */ \"./src/hooks/useAlerts.ts\");\nconst useChecklists = (cardId) => {\n    const checklistsClient = (cardId) => new apiClient_1.default(`http://localhost:5002/api/v1/cards/${cardId}/checklists/`);\n    const newChecklistClient = new apiClient_1.default(\"http://localhost:5002/api/v1/checklists\");\n    const editChecklistsClient = (checkListId) => new apiClient_1.default(`http://localhost:5002/api/v1/checklists/${checkListId}`);\n    const toast = (0, react_1.useToast)();\n    const queryClient = (0, react_query_1.useQueryClient)();\n    const { isError, isLoading, data } = (0, react_query_1.useQuery)({\n        queryKey: [\"checklists\"],\n        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return checklistsClient(cardId).getData().then(res => res.data); }),\n        onSuccess: (data) => console.log(data),\n        onError: (error) => console.log(error)\n    });\n    const newChecklistMutation = (0, react_query_1.useMutation)({\n        mutationFn: (args) => __awaiter(void 0, void 0, void 0, function* () {\n            return newChecklistClient.postData({\n                \"name\": args.checklistName,\n                \"cardId\": args.cardId\n            });\n        }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['']);\n            toast((0, useAlerts_1.useSuccess)(\"Checklist created successfully\"));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to create checklist'))\n    });\n    const editChecklistMutation = (0, react_query_1.useMutation)({\n        mutationFn: (checklist) => __awaiter(void 0, void 0, void 0, function* () { return editChecklistsClient(checklist.checklistId).updateData({ \"name\": checklist.checklistName }, null); }),\n        onSuccess: (data) => console.log(data),\n        onError: (err) => console.log(err)\n    });\n    const deleteChecklistMutation = (0, react_query_1.useMutation)({\n        mutationFn: (checklistId) => __awaiter(void 0, void 0, void 0, function* () { return editChecklistsClient(checklistId).deleteData(); }),\n        onSuccess: () => toast((0, useAlerts_1.useSuccess)(\"Checklist deleted successfully\")),\n        onError: () => toast((0, useAlerts_1.useFailure)(\"Failed to delete checklist\"))\n    });\n    return { isError, isLoading, newChecklistMutation, editChecklistMutation, deleteChecklistMutation, data };\n};\nexports.useChecklists = useChecklists;\n\n\n//# sourceURL=webpack://client/./src/hooks/useChecklists.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ebd0e8724aca09de09e")
/******/ })();
/******/ 
/******/ }
);