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

/***/ "./src/components/Checklist.tsx":
/*!**************************************!*\
  !*** ./src/components/Checklist.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst md_1 = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\nconst ProgressBar_1 = __importDefault(__webpack_require__(/*! ./ProgressBar */ \"./src/components/ProgressBar.tsx\"));\nconst PromptField_1 = __importDefault(__webpack_require__(/*! ./PromptField */ \"./src/components/PromptField.tsx\"));\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst useTasks_1 = __webpack_require__(/*! ../hooks/useTasks */ \"./src/hooks/useTasks.tsx\");\nconst Checklist = ({ checklist }) => {\n    const { data } = (0, useTasks_1.useTasks)(checklist);\n    const [checkedCount, setCheckedCount] = (0, react_3.useState)(0);\n    const [count] = (0, react_3.useState)(0);\n    const handleCheckboxChange = (event) => {\n        const isChecked = event.target.checked;\n        setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));\n    };\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(react_2.Card, { p: \"40px\" },\n            react_1.default.createElement(react_2.CardHeader, { mx: 0, px: 0, my: 0, py: 0 },\n                react_1.default.createElement(react_2.Wrap, { spacingX: \"356px\", align: \"center\" },\n                    react_1.default.createElement(react_2.Wrap, null,\n                        react_1.default.createElement(md_1.MdChecklist, null),\n                        react_1.default.createElement(react_2.Text, { fontSize: \"12px\", as: \"b\" }, checklist.name)),\n                    react_1.default.createElement(react_2.Button, { fontSize: \"10px\", variant: \"unstyled\" }, \"Delete\"))),\n            react_1.default.createElement(react_2.CardBody, { mx: 0, px: 0, my: \"27px\", py: 0 },\n                react_1.default.createElement(react_2.Stack, { spacing: \"28px\" },\n                    react_1.default.createElement(ProgressBar_1.default, { base: count, marked: checkedCount }),\n                    react_1.default.createElement(react_2.Stack, { spacing: \"18px\" }, data && data.count > 0 && data.tasks.map((element, index) => (react_1.default.createElement(react_2.Checkbox, { key: index, onChange: handleCheckboxChange }, element)))),\n                    react_1.default.createElement(PromptField_1.default, { checklist: checklist }))))));\n};\nexports[\"default\"] = Checklist;\n\n\n//# sourceURL=webpack://client/./src/components/Checklist.tsx?");

/***/ }),

/***/ "./src/components/ProgressBar.tsx":
/*!****************************************!*\
  !*** ./src/components/ProgressBar.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst ProgressBar = (props) => {\n    const percent = Math.floor((props.marked / props.base) * 100);\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(react_2.Wrap, { spacing: \"8px\", align: \"center\" },\n            react_1.default.createElement(react_2.Text, null, (percent).toString()),\n            react_1.default.createElement(react_2.Progress, { w: \"400px\", value: percent, colorScheme: \"blue\" }))));\n};\nexports[\"default\"] = ProgressBar;\n\n\n//# sourceURL=webpack://client/./src/components/ProgressBar.tsx?");

/***/ }),

/***/ "./src/components/PromptField.tsx":
/*!****************************************!*\
  !*** ./src/components/PromptField.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst PromptWrap_1 = __importDefault(__webpack_require__(/*! ./PromptWrap */ \"./src/components/PromptWrap.tsx\"));\nconst PromptField = ({ checklist }) => {\n    const [state, setState] = (0, react_3.useState)(1);\n    function handleClick() {\n        !state ? setState(1) : setState(0);\n    }\n    if (state) {\n        return (react_1.default.createElement(react_2.Button, { variant: \"primary\", w: \"60px\", h: \"30px\", fontSize: \"12px\", onClick: handleClick }, \"Add\"));\n    }\n    return (react_1.default.createElement(PromptWrap_1.default, { checklist: checklist, cancelClick: handleClick }));\n};\nexports[\"default\"] = PromptField;\n\n\n//# sourceURL=webpack://client/./src/components/PromptField.tsx?");

/***/ }),

/***/ "./src/components/PromptWrap.tsx":
/*!***************************************!*\
  !*** ./src/components/PromptWrap.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst useTasks_1 = __webpack_require__(/*! ../hooks/useTasks */ \"./src/hooks/useTasks.tsx\");\nconst PromptWrap = ({ cancelClick, checklist }) => {\n    const [input, setInput] = (0, react_3.useState)(\"\");\n    const { newTaskMutation } = (0, useTasks_1.useTasks)(checklist);\n    const handleAddchecklist = (event) => {\n        setInput(event.target.value);\n    };\n    const addTask = () => {\n        newTaskMutation.mutate(input);\n    };\n    return (react_1.default.createElement(react_2.Wrap, { spacingX: \"20px\", alignItems: \"center\" },\n        react_1.default.createElement(react_2.Input, { variant: \"outline\", w: \"269px\", h: \"30px\", placeholder: \"Add an item\", onChange: handleAddchecklist }),\n        react_1.default.createElement(react_2.Button, { variant: \"primary\", w: \"60px\", h: \"30px\", fontSize: \"12px\", onClick: addTask }, \"Add\"),\n        react_1.default.createElement(react_2.Button, { variant: \"unstyled\", fontSize: \"12px\", w: \"60px\", h: \"30px\", onClick: cancelClick }, \"cancel\")));\n};\nexports[\"default\"] = PromptWrap;\n\n\n//# sourceURL=webpack://client/./src/components/PromptWrap.tsx?");

/***/ }),

/***/ "./src/hooks/useTasks.tsx":
/*!********************************!*\
  !*** ./src/hooks/useTasks.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useTasks = void 0;\nconst react_query_1 = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.js\");\nconst apiClient_1 = __importDefault(__webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\"));\nconst useAlerts_1 = __webpack_require__(/*! ./useAlerts */ \"./src/hooks/useAlerts.ts\");\nconst react_1 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useTasks = (checklist) => {\n    const tasksClient = new apiClient_1.default('http://localhost:5002/api/v1/tasks');\n    const taskById = (taskId) => new apiClient_1.default(`http://localhost:5002/api/v1/tasks/${taskId}`);\n    const tasksByChecklists = new apiClient_1.default(`http://localhost:5002/api/v1/checklists/${checklist.id}/tasks`);\n    const toast = (0, react_1.useToast)();\n    const queryClient = (0, react_query_1.useQueryClient)();\n    const { isLoading, isError, data } = (0, react_query_1.useQuery)({\n        queryKey: ['tasks', checklist.id],\n        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return tasksByChecklists.getData().then(res => res.data); }),\n    });\n    const newTaskMutation = (0, react_query_1.useMutation)({\n        mutationFn: (content) => __awaiter(void 0, void 0, void 0, function* () {\n            return tasksClient.postData({\n                \"content\": content,\n                \"checkListId\": checklist.id\n            });\n        }),\n        onSuccess: () => toast((0, useAlerts_1.useSuccess)(\"Task create successfully\")),\n        onError: () => toast((0, useAlerts_1.useSuccess)(\"Failed to create task\"))\n    });\n    const deleteTaskMutation = (0, react_query_1.useMutation)({\n        mutationFn: (taskId) => __awaiter(void 0, void 0, void 0, function* () { return taskById(taskId).deleteData(); }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['tasks', checklist.id]);\n            toast((0, useAlerts_1.useSuccess)('Task deleted successfully'));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to delete task'))\n    });\n    const editeTaskMutation = (0, react_query_1.useMutation)({\n        mutationFn: (task) => __awaiter(void 0, void 0, void 0, function* () {\n            return taskById(task.id).updateData({\n                \"resolved\": !task.resolved\n            }, null);\n        }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['tasks', checklist.id]);\n            toast((0, useAlerts_1.useSuccess)('Task edited successfully'));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to edit task'))\n    });\n    return { isLoading, isError, data, newTaskMutation, deleteTaskMutation, editeTaskMutation };\n};\nexports.useTasks = useTasks;\n\n\n//# sourceURL=webpack://client/./src/hooks/useTasks.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c9016d0c5ede0501a5a")
/******/ })();
/******/ 
/******/ }
);