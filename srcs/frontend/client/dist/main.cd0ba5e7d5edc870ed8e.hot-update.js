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

/***/ "./src/components/CheckLists.tsx":
/*!***************************************!*\
  !*** ./src/components/CheckLists.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CheckLists = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useTasks_1 = __webpack_require__(/*! ../hooks/useTasks */ \"./src/hooks/useTasks.tsx\");\nconst CheckLists = ({ card }) => {\n    const { newTaskMutation } = (0, useTasks_1.useTasks)(card === null || card === void 0 ? void 0 : card.id);\n    const ref = (0, react_1.useRef)(null);\n    const [task, setTask] = (0, react_1.useState)('');\n    const newTask = () => {\n        newTaskMutation.mutate(task);\n        setTask('');\n    };\n    const handleEnter = (event) => {\n        if (event.key === 'Enter')\n            newTask();\n    };\n    return (react_1.default.createElement(react_2.Stack, { spacing: 4 },\n        react_1.default.createElement(react_2.Heading, null, \"Checklist\"),\n        react_1.default.createElement(react_2.InputGroup, { size: 'md' },\n            react_1.default.createElement(react_2.Input, { onKeyDown: handleEnter, placeholder: 'task title', ref: ref, onChange: (e) => setTask(e.target.value), type: 'text', px: 4 }),\n            react_1.default.createElement(react_2.InputRightElement, null,\n                react_1.default.createElement(react_2.Button, { colorScheme: 'green', onClick: newTask }, \"add\")))));\n};\nexports.CheckLists = CheckLists;\n\n\n//# sourceURL=webpack://client/./src/components/CheckLists.tsx?");

/***/ }),

/***/ "./src/hooks/useTasks.tsx":
/*!********************************!*\
  !*** ./src/hooks/useTasks.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useTasks = void 0;\nconst react_query_1 = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.js\");\nconst apiClient_1 = __importDefault(__webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\"));\nconst useAlerts_1 = __webpack_require__(/*! ./useAlerts */ \"./src/hooks/useAlerts.ts\");\nconst react_1 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useTasks = (cardId) => {\n    const tasksClient = new apiClient_1.default('http://localhost:5002/api/v1/tasks');\n    const taskById = (taskId) => new apiClient_1.default(`http://localhost:5002/api/v1/tasks/${taskId}`);\n    const toast = (0, react_1.useToast)();\n    const queryClient = (0, react_query_1.useQueryClient)();\n    const { isLoading, isError, data } = (0, react_query_1.useQuery)({\n        queryKey: ['tasks'],\n        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return tasksClient.getData().then(res => res.data); }),\n    });\n    const newTaskMutation = (0, react_query_1.useMutation)({\n        mutationFn: (content) => __awaiter(void 0, void 0, void 0, function* () {\n            return tasksClient.postData({\n                \"content\": content,\n                \"cardId\": cardId\n            });\n        }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['tasks']);\n            toast((0, useAlerts_1.useSuccess)(\"Task create successfully\"));\n        },\n        onError: () => toast((0, useAlerts_1.useSuccess)(\"Failed to create task\"))\n    });\n    const deleteTaskMutation = (0, react_query_1.useMutation)({\n        mutationFn: (taskId) => __awaiter(void 0, void 0, void 0, function* () { return taskById(taskId).deleteData(); }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['tasks']);\n            toast((0, useAlerts_1.useSuccess)('Task deleted successfully'));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to delete task'))\n    });\n    const editeTaskMutation = (0, react_query_1.useMutation)({\n        mutationFn: (task) => __awaiter(void 0, void 0, void 0, function* () {\n            return taskById(task.id).updateData({\n                \"resolved\": !task.resolved\n            }, null);\n        }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['tasks']);\n            toast((0, useAlerts_1.useSuccess)('Task edited successfully'));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to edit task'))\n    });\n    return { isLoading, isError, data, newTaskMutation, deleteTaskMutation, editeTaskMutation };\n};\nexports.useTasks = useTasks;\n\n\n//# sourceURL=webpack://client/./src/hooks/useTasks.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3d357dadf3676e94da43")
/******/ })();
/******/ 
/******/ }
);