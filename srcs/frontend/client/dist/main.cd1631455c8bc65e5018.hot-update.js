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

/***/ "./src/components/CommentSection.tsx":
/*!*******************************************!*\
  !*** ./src/components/CommentSection.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_3 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction CommentSection() {\n    const [comment, setComment] = (0, react_3.useState)(\"\");\n    const handleCommentChange = (event) => {\n        setComment(event.target.value);\n    };\n    const handleSubmit = () => { };\n    return (react_1.default.createElement(react_2.Wrap, { position: \"relative\" },\n        react_1.default.createElement(react_2.Textarea, { resize: \"none\", w: \"450px\", h: \"104px\", placeholder: \"Write a comment...\", value: comment, onChange: handleCommentChange }),\n        react_1.default.createElement(react_2.Button, { position: \"absolute\", top: 2, right: 2, zIndex: \"1\", fontSize: \"10px\", variant: \"primary\", w: \"72px\", h: \"24px\", onClick: handleSubmit }, \"Comment\")));\n}\nexports[\"default\"] = CommentSection;\n\n\n//# sourceURL=webpack://client/./src/components/CommentSection.tsx?");

/***/ }),

/***/ "./src/components/Functionality/EditCard.tsx":
/*!***************************************************!*\
  !*** ./src/components/Functionality/EditCard.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EditCard = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst CloseButton_1 = __webpack_require__(/*! ./CloseButton */ \"./src/components/Functionality/CloseButton.tsx\");\nconst Media_1 = __webpack_require__(/*! ../ui-elements/Media */ \"./src/components/ui-elements/Media.tsx\");\nconst EditCardCover_1 = __webpack_require__(/*! ../ui-elements/EditCardCover */ \"./src/components/ui-elements/EditCardCover.tsx\");\nconst fa6_1 = __webpack_require__(/*! react-icons/fa6 */ \"./node_modules/react-icons/fa6/index.esm.js\");\nconst bi_1 = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\nconst Menu_1 = __webpack_require__(/*! ../Menu */ \"./src/components/Menu.tsx\");\nconst Popover_1 = __webpack_require__(/*! ../Popover */ \"./src/components/Popover.tsx\");\nconst LabelsProvider_1 = __webpack_require__(/*! ../../providers/LabelsProvider */ \"./src/providers/LabelsProvider.tsx\");\nconst LabelList_1 = __webpack_require__(/*! ../Lists/LabelList */ \"./src/components/Lists/LabelList.tsx\");\nconst CheckLists_1 = __webpack_require__(/*! ../CheckLists */ \"./src/components/CheckLists.tsx\");\nconst CommentSection_1 = __importDefault(__webpack_require__(/*! ../CommentSection */ \"./src/components/CommentSection.tsx\"));\nconst EditCard = ({ card, onClose, deleteMutation, updateMutation }) => {\n    const { labels, createLabel, deleteLabel } = (0, react_1.useContext)(LabelsProvider_1.LabelsContext);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_2.Stack, { spacing: 4 }, card && (react_1.default.createElement(react_1.default.Fragment, null,\n            react_1.default.createElement(CloseButton_1.CloseButton, { onClose: onClose }),\n            card.coverImage && react_1.default.createElement(EditCardCover_1.EditCardCover, { image: card.coverImage }),\n            react_1.default.createElement(react_2.HStack, { justify: \"space-between\", flexWrap: 'wrap', mx: \"auto\", w: '100%', px: 3, py: 2, alignItems: \"flex-start\" },\n                react_1.default.createElement(react_2.Stack, { w: '400px' },\n                    react_1.default.createElement(Menu_1.EditableTitle, { defaultValue: card.title, action: (value) => {\n                            const newCard = { title: value };\n                            updateMutation.mutate({ id: card.id, card: newCard });\n                        } }),\n                    react_1.default.createElement(react_2.Text, { fontSize: \"xs\", fontWeight: \"normal\", color: \"#828282\" },\n                        \"In list\",\n                        react_1.default.createElement(react_2.chakra.small, { px: 1, color: \"black\", fontWeight: \"bold\" }, \"In Progress\")),\n                    react_1.default.createElement(Menu_1.MyEditableTextarea, { defaultValue: card.description, action: (value) => {\n                            const newCard = { description: value };\n                            updateMutation.mutate({ id: card.id, card: newCard });\n                        } }),\n                    react_1.default.createElement(CheckLists_1.CheckLists, { card: card }),\n                    react_1.default.createElement(CommentSection_1.default, null),\n                    react_1.default.createElement(LabelList_1.LabelList, { labels: labels, deleteLabel: deleteLabel })),\n                react_1.default.createElement(react_2.Stack, { spacing: 3, py: 4 },\n                    react_1.default.createElement(Media_1.CardInfo, { icon: react_1.default.createElement(bi_1.BiSolidUserCircle, null), value: \"Actions\" }),\n                    react_1.default.createElement(Popover_1.LabelPopOver, { card: card, addLabelAction: createLabel }),\n                    react_1.default.createElement(Popover_1.CheckListPopOver, { card: card }),\n                    react_1.default.createElement(Popover_1.CoverPopOver, { card: card, action: (value) => {\n                            const newCard = { coverImage: value };\n                            updateMutation.mutate({ id: card.id, card: newCard });\n                        } }),\n                    react_1.default.createElement(react_2.Button, { variant: \"outlineRed\", onClick: () => {\n                            deleteMutation.mutate(card);\n                            onClose();\n                        } },\n                        react_1.default.createElement(react_2.HStack, { spacing: 3 },\n                            react_1.default.createElement(fa6_1.FaTrash, null),\n                            react_1.default.createElement(react_2.Text, { fontSize: \"sm\" }, \" Delete Card \"))))))))));\n};\nexports.EditCard = EditCard;\n\n\n//# sourceURL=webpack://client/./src/components/Functionality/EditCard.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("448bec8698413fba7492")
/******/ })();
/******/ 
/******/ }
);