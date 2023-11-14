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

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CheckLists = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst useChecklists_1 = __webpack_require__(/*! ../hooks/useChecklists */ \"./src/hooks/useChecklists.ts\");\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst Checklist_1 = __importDefault(__webpack_require__(/*! ./Checklist */ \"./src/components/Checklist.tsx\"));\nconst CheckLists = ({ card }) => {\n    const { data } = (0, useChecklists_1.useChecklists)(card === null || card === void 0 ? void 0 : card.id);\n    return (react_1.default.createElement(react_2.Stack, { spacing: 4 }, data && data.count > 0 && data.checklists.map((item) => {\n        return react_1.default.createElement(Checklist_1.default, { checklist: item });\n    })));\n};\nexports.CheckLists = CheckLists;\n\n\n//# sourceURL=webpack://client/./src/components/CheckLists.tsx?");

/***/ }),

/***/ "./src/components/Checklist.tsx":
/*!**************************************!*\
  !*** ./src/components/Checklist.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst md_1 = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\nconst ProgressBar_1 = __importDefault(__webpack_require__(/*! ./ProgressBar */ \"./src/components/ProgressBar.tsx\"));\nconst PromptField_1 = __importDefault(__webpack_require__(/*! ./PromptField */ \"./src/components/PromptField.tsx\"));\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst useTasks_1 = __webpack_require__(/*! ../hooks/useTasks */ \"./src/hooks/useTasks.tsx\");\nconst useChecklists_1 = __webpack_require__(/*! ../hooks/useChecklists */ \"./src/hooks/useChecklists.ts\");\nconst icons_1 = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.js\");\nconst Checklist = ({ checklist }) => {\n    const { data, editeTaskMutation, isLoading, deleteTaskMutation } = (0, useTasks_1.useTasks)(checklist);\n    const { deleteChecklistMutation } = (0, useChecklists_1.useChecklists)(checklist.cardId);\n    const [checkedCount, setCheckedCount] = (0, react_3.useState)(0);\n    const [count, setCount] = (0, react_3.useState)(0);\n    const handleCheckboxChange = (task) => {\n        editeTaskMutation.mutate(task);\n    };\n    (0, react_1.useEffect)(() => {\n        if (data) {\n            setCount(data.count);\n            const len = data.tasks.filter((item) => item.resolved).length;\n            setCheckedCount(len);\n        }\n    }, [data]);\n    if (isLoading)\n        return react_1.default.createElement(react_2.Text, null, \"loading\");\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(react_2.Card, { p: \"40px\" },\n            react_1.default.createElement(react_2.CardHeader, { mx: 0, px: 0, my: 0, py: 0 },\n                react_1.default.createElement(react_2.Wrap, { spacingX: \"356px\", align: \"center\" },\n                    react_1.default.createElement(react_2.Wrap, null,\n                        react_1.default.createElement(md_1.MdChecklist, null),\n                        react_1.default.createElement(react_2.Text, { fontSize: \"12px\", as: \"b\" }, checklist.name)),\n                    react_1.default.createElement(react_2.Button, { onClick: () => deleteChecklistMutation.mutate(checklist.id), fontSize: \"15px\", variant: \"ghost\" }, \"Delete\"))),\n            react_1.default.createElement(react_2.CardBody, { mx: 0, px: 0, my: \"27px\", py: 0 },\n                react_1.default.createElement(react_2.Stack, { spacing: \"28px\" },\n                    react_1.default.createElement(ProgressBar_1.default, { base: count, marked: checkedCount }),\n                    react_1.default.createElement(react_2.Stack, { spacing: \"18px\" }, data &&\n                        data.count > 0 &&\n                        data.tasks.map((element, index) => (react_1.default.createElement(react_2.HStack, { key: index, justifyContent: 'space-between', w: '100%' },\n                            react_1.default.createElement(react_2.Checkbox, { onChange: () => handleCheckboxChange(element) }, element.content),\n                            react_1.default.createElement(react_2.Icon, { as: icons_1.DeleteIcon, onClick: () => deleteTaskMutation.mutate(element.id) }))))),\n                    react_1.default.createElement(PromptField_1.default, { checklist: checklist }))))));\n};\nexports[\"default\"] = Checklist;\n\n\n//# sourceURL=webpack://client/./src/components/Checklist.tsx?");

/***/ }),

/***/ "./src/components/CommentSection.tsx":
/*!*******************************************!*\
  !*** ./src/components/CommentSection.tsx ***!
  \*******************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/ts-loader/index.js):\\nError: TypeScript emitted no output for /home/yassir/Documents/DEV/Trello-clone/srcs/frontend/client/src/components/CommentSection.tsx.\\n    at makeSourceMapAndFinish (/home/yassir/Documents/DEV/Trello-clone/srcs/frontend/client/node_modules/ts-loader/dist/index.js:52:18)\\n    at successLoader (/home/yassir/Documents/DEV/Trello-clone/srcs/frontend/client/node_modules/ts-loader/dist/index.js:39:5)\\n    at Object.loader (/home/yassir/Documents/DEV/Trello-clone/srcs/frontend/client/node_modules/ts-loader/dist/index.js:22:5)\");\n\n//# sourceURL=webpack://client/./src/components/CommentSection.tsx?");

/***/ }),

/***/ "./src/components/Functionality/EditCard.tsx":
/*!***************************************************!*\
  !*** ./src/components/Functionality/EditCard.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EditCard = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst CloseButton_1 = __webpack_require__(/*! ./CloseButton */ \"./src/components/Functionality/CloseButton.tsx\");\nconst Media_1 = __webpack_require__(/*! ../ui-elements/Media */ \"./src/components/ui-elements/Media.tsx\");\nconst EditCardCover_1 = __webpack_require__(/*! ../ui-elements/EditCardCover */ \"./src/components/ui-elements/EditCardCover.tsx\");\nconst fa6_1 = __webpack_require__(/*! react-icons/fa6 */ \"./node_modules/react-icons/fa6/index.esm.js\");\nconst bi_1 = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\nconst Menu_1 = __webpack_require__(/*! ../Menu */ \"./src/components/Menu.tsx\");\nconst Popover_1 = __webpack_require__(/*! ../Popover */ \"./src/components/Popover.tsx\");\nconst LabelsProvider_1 = __webpack_require__(/*! ../../providers/LabelsProvider */ \"./src/providers/LabelsProvider.tsx\");\nconst LabelList_1 = __webpack_require__(/*! ../Lists/LabelList */ \"./src/components/Lists/LabelList.tsx\");\nconst CheckLists_1 = __webpack_require__(/*! ../CheckLists */ \"./src/components/CheckLists.tsx\");\nconst CommentSection_1 = __importDefault(__webpack_require__(/*! ../CommentSection */ \"./src/components/CommentSection.tsx\"));\nconst EditCard = ({ card, onClose, deleteMutation, updateMutation }) => {\n    const { labels, createLabel, deleteLabel } = (0, react_1.useContext)(LabelsProvider_1.LabelsContext);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_2.Stack, { spacing: 4 }, card && (react_1.default.createElement(react_1.default.Fragment, null,\n            react_1.default.createElement(CloseButton_1.CloseButton, { onClose: onClose }),\n            card.coverImage && react_1.default.createElement(EditCardCover_1.EditCardCover, { image: card.coverImage }),\n            react_1.default.createElement(react_2.HStack, { justify: \"space-between\", flexWrap: 'wrap', mx: \"auto\", w: '100%', px: 3, py: 2, alignItems: \"flex-start\" },\n                react_1.default.createElement(react_2.Stack, { w: '400px' },\n                    react_1.default.createElement(Menu_1.EditableTitle, { defaultValue: card.title, action: (value) => {\n                            const newCard = { title: value };\n                            updateMutation.mutate({ id: card.id, card: newCard });\n                        } }),\n                    react_1.default.createElement(react_2.Text, { fontSize: \"xs\", fontWeight: \"normal\", color: \"#828282\" },\n                        \"In list\",\n                        react_1.default.createElement(react_2.chakra.small, { px: 1, color: \"black\", fontWeight: \"bold\" }, \"In Progress\")),\n                    react_1.default.createElement(Menu_1.MyEditableTextarea, { defaultValue: card.description, action: (value) => {\n                            const newCard = { description: value };\n                            updateMutation.mutate({ id: card.id, card: newCard });\n                        } }),\n                    react_1.default.createElement(CheckLists_1.CheckLists, { card: card }),\n                    react_1.default.createElement(CommentSection_1.default, null),\n                    react_1.default.createElement(LabelList_1.LabelList, { labels: labels, deleteLabel: deleteLabel })),\n                react_1.default.createElement(react_2.Stack, { spacing: 3, py: 4 },\n                    react_1.default.createElement(Media_1.CardInfo, { icon: react_1.default.createElement(bi_1.BiSolidUserCircle, null), value: \"Actions\" }),\n                    react_1.default.createElement(Popover_1.LabelPopOver, { card: card, addLabelAction: createLabel }),\n                    react_1.default.createElement(Popover_1.CheckListPopOver, { card: card }),\n                    react_1.default.createElement(Popover_1.CoverPopOver, { card: card, action: (value) => {\n                            const newCard = { coverImage: value };\n                            updateMutation.mutate({ id: card.id, card: newCard });\n                        } }),\n                    react_1.default.createElement(react_2.Button, { variant: \"outlineRed\", onClick: () => {\n                            deleteMutation.mutate(card);\n                            onClose();\n                        } },\n                        react_1.default.createElement(react_2.HStack, { spacing: 3 },\n                            react_1.default.createElement(fa6_1.FaTrash, null),\n                            react_1.default.createElement(react_2.Text, { fontSize: \"sm\" }, \" Delete Card \"))))))))));\n};\nexports.EditCard = EditCard;\n\n\n//# sourceURL=webpack://client/./src/components/Functionality/EditCard.tsx?");

/***/ }),

/***/ "./src/components/Lists/LabelList.tsx":
/*!********************************************!*\
  !*** ./src/components/Lists/LabelList.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LabelList = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst Label_1 = __webpack_require__(/*! ../ui-elements/Label */ \"./src/components/ui-elements/Label.tsx\");\nconst Media_1 = __webpack_require__(/*! ../ui-elements/Media */ \"./src/components/ui-elements/Media.tsx\");\nconst md_1 = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\nconst LabelList = ({ labels, deleteLabel }) => {\n    return (react_1.default.createElement(react_2.Stack, { spacing: 3 },\n        react_1.default.createElement(Media_1.CardInfo, { icon: react_1.default.createElement(md_1.MdLabel, null), value: \"Labels\" }),\n        react_1.default.createElement(react_2.HStack, { spacing: 2, px: 4, py: 2 }, labels === null || labels === void 0 ? void 0 : labels.map((item) => {\n            return (react_1.default.createElement(Label_1.Label, { color: item.color, action: () => {\n                    deleteLabel && deleteLabel((item === null || item === void 0 ? void 0 : item.id) || \"\");\n                } }, item.tag));\n        }))));\n};\nexports.LabelList = LabelList;\n\n\n//# sourceURL=webpack://client/./src/components/Lists/LabelList.tsx?");

/***/ }),

/***/ "./src/components/ProgressBar.tsx":
/*!****************************************!*\
  !*** ./src/components/ProgressBar.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst ProgressBar = (props) => {\n    const percent = Math.floor((props.marked / props.base) * 100);\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(react_2.Wrap, { spacing: \"8px\", align: \"center\" },\n            react_1.default.createElement(react_2.Text, null, (percent).toString()),\n            react_1.default.createElement(react_2.Progress, { w: \"400px\", value: percent, colorScheme: \"blue\" }))));\n};\nexports[\"default\"] = ProgressBar;\n\n\n//# sourceURL=webpack://client/./src/components/ProgressBar.tsx?");

/***/ }),

/***/ "./src/components/PromptField.tsx":
/*!****************************************!*\
  !*** ./src/components/PromptField.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst PromptWrap_1 = __importDefault(__webpack_require__(/*! ./PromptWrap */ \"./src/components/PromptWrap.tsx\"));\nconst PromptField = ({ checklist }) => {\n    const [state, setState] = (0, react_3.useState)(1);\n    function handleClick() {\n        !state ? setState(1) : setState(0);\n    }\n    if (state) {\n        return (react_1.default.createElement(react_2.Button, { variant: \"primary\", w: \"60px\", h: \"30px\", fontSize: \"12px\", onClick: handleClick }, \"Add\"));\n    }\n    return (react_1.default.createElement(PromptWrap_1.default, { checklist: checklist, cancelClick: handleClick }));\n};\nexports[\"default\"] = PromptField;\n\n\n//# sourceURL=webpack://client/./src/components/PromptField.tsx?");

/***/ }),

/***/ "./src/components/PromptWrap.tsx":
/*!***************************************!*\
  !*** ./src/components/PromptWrap.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst useTasks_1 = __webpack_require__(/*! ../hooks/useTasks */ \"./src/hooks/useTasks.tsx\");\nconst PromptWrap = ({ cancelClick, checklist }) => {\n    const [input, setInput] = (0, react_3.useState)(\"\");\n    const { newTaskMutation } = (0, useTasks_1.useTasks)(checklist);\n    const handleAddchecklist = (event) => {\n        setInput(event.target.value);\n    };\n    const addTask = () => {\n        newTaskMutation.mutate(input);\n        setInput(\"\");\n        cancelClick();\n    };\n    return (react_1.default.createElement(react_2.Wrap, { spacingX: \"20px\", alignItems: \"center\" },\n        react_1.default.createElement(react_2.Input, { variant: \"outline\", w: \"269px\", h: \"30px\", placeholder: \"Add an item\", onChange: handleAddchecklist }),\n        react_1.default.createElement(react_2.Button, { variant: \"primary\", w: \"60px\", h: \"30px\", fontSize: \"12px\", onClick: addTask }, \"Add\"),\n        react_1.default.createElement(react_2.Button, { variant: \"unstyled\", fontSize: \"12px\", w: \"60px\", h: \"30px\", onClick: cancelClick }, \"cancel\")));\n};\nexports[\"default\"] = PromptWrap;\n\n\n//# sourceURL=webpack://client/./src/components/PromptWrap.tsx?");

/***/ }),

/***/ "./src/hooks/useTasks.tsx":
/*!********************************!*\
  !*** ./src/hooks/useTasks.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useTasks = void 0;\nconst react_query_1 = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.js\");\nconst apiClient_1 = __importDefault(__webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\"));\nconst useAlerts_1 = __webpack_require__(/*! ./useAlerts */ \"./src/hooks/useAlerts.ts\");\nconst react_1 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst useTasks = (checklist) => {\n    const tasksClient = new apiClient_1.default('http://localhost:5002/api/v1/tasks');\n    const taskById = (taskId) => new apiClient_1.default(`http://localhost:5002/api/v1/tasks/${taskId}`);\n    const tasksByChecklists = new apiClient_1.default(`http://localhost:5002/api/v1/checklists/${checklist.id}/tasks`);\n    const toast = (0, react_1.useToast)();\n    const queryClient = (0, react_query_1.useQueryClient)();\n    const { isLoading, isError, data } = (0, react_query_1.useQuery)({\n        queryKey: ['tasks', checklist.id],\n        queryFn: () => __awaiter(void 0, void 0, void 0, function* () { return tasksByChecklists.getData().then(res => res.data); }),\n    });\n    const newTaskMutation = (0, react_query_1.useMutation)({\n        mutationFn: (content) => __awaiter(void 0, void 0, void 0, function* () {\n            return tasksClient.postData({\n                \"content\": content,\n                \"checkListId\": checklist.id\n            });\n        }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['tasks', checklist.id]);\n            toast((0, useAlerts_1.useSuccess)(\"Task create successfully\"));\n        },\n        onError: () => toast((0, useAlerts_1.useSuccess)(\"Failed to create task\"))\n    });\n    const deleteTaskMutation = (0, react_query_1.useMutation)({\n        mutationFn: (taskId) => __awaiter(void 0, void 0, void 0, function* () { return taskById(taskId).deleteData(); }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['tasks', checklist.id]);\n            toast((0, useAlerts_1.useSuccess)('Task deleted successfully'));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to delete task'))\n    });\n    const editeTaskMutation = (0, react_query_1.useMutation)({\n        mutationFn: (task) => __awaiter(void 0, void 0, void 0, function* () {\n            return taskById(task.id).updateData({\n                \"resolved\": !task.resolved\n            }, null);\n        }),\n        onSuccess: () => {\n            queryClient.invalidateQueries(['tasks', checklist.id]);\n            toast((0, useAlerts_1.useSuccess)('Task edited successfully'));\n        },\n        onError: () => toast((0, useAlerts_1.useFailure)('Failed to edit task'))\n    });\n    return { isLoading, isError, data, newTaskMutation, deleteTaskMutation, editeTaskMutation };\n};\nexports.useTasks = useTasks;\n\n\n//# sourceURL=webpack://client/./src/hooks/useTasks.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2949a738bfb08774f4cb")
/******/ })();
/******/ 
/******/ }
);