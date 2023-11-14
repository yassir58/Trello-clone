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

/***/ "./src/components/Popover.tsx":
/*!************************************!*\
  !*** ./src/components/Popover.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CoverPopOver = exports.CheckListPopOver = exports.LabelPopOver = exports.MembersPopOver = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst fa6_1 = __webpack_require__(/*! react-icons/fa6 */ \"./node_modules/react-icons/fa6/index.esm.js\");\nconst fa6_2 = __webpack_require__(/*! react-icons/fa6 */ \"./node_modules/react-icons/fa6/index.esm.js\");\nconst md_1 = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\nconst AddLable_1 = __webpack_require__(/*! ./Functionality/AddLable */ \"./src/components/Functionality/AddLable.tsx\");\nconst InviteToBoard_1 = __importDefault(__webpack_require__(/*! ./InviteToBoard */ \"./src/components/InviteToBoard.tsx\"));\nconst ChangeCover_1 = __webpack_require__(/*! ./Functionality/ChangeCover */ \"./src/components/Functionality/ChangeCover.tsx\");\nconst PopOver_1 = __webpack_require__(/*! ./ui-elements/PopOver */ \"./src/components/ui-elements/PopOver.tsx\");\nconst PhotosProvider_1 = __webpack_require__(/*! ../providers/PhotosProvider */ \"./src/providers/PhotosProvider.tsx\");\nconst AddChecklist_1 = __importDefault(__webpack_require__(/*! ./AddChecklist */ \"./src/components/AddChecklist.tsx\"));\nconst MembersPopOver = () => {\n    return (react_1.default.createElement(PopOver_1.PopOverWrapper, { value: \"Members\", icon: react_1.default.createElement(fa6_2.FaUserGroup, null), triggerVariant: \"largeSecondary\", size: \"xs\", placement: \"left\" },\n        react_1.default.createElement(InviteToBoard_1.default, null)));\n};\nexports.MembersPopOver = MembersPopOver;\nconst LabelPopOver = ({ card, addLabelAction }) => {\n    return (react_1.default.createElement(PopOver_1.PopOverWrapper, { value: \"Labels\", icon: react_1.default.createElement(md_1.MdLabel, null), triggerVariant: \"largeSecondary\", size: \"xs\", placement: \"left\" },\n        react_1.default.createElement(AddLable_1.AddLable, { card: card, action: addLabelAction })));\n};\nexports.LabelPopOver = LabelPopOver;\nconst CheckListPopOver = ({}) => {\n    return (react_1.default.createElement(PopOver_1.PopOverWrapper, { value: \"Checklists\", icon: react_1.default.createElement(md_1.MdCheckBox, null), triggerVariant: \"largeSecondary\", size: \"2xs\", placement: \"left\" },\n        react_1.default.createElement(AddChecklist_1.default, null)));\n};\nexports.CheckListPopOver = CheckListPopOver;\nconst CoverPopOver = ({ action }) => {\n    return (react_1.default.createElement(PopOver_1.PopOverWrapper, { value: \"Cover\", icon: react_1.default.createElement(fa6_1.FaImage, null), triggerVariant: \"largeSecondary\", size: \"2xs\", placement: \"left\" },\n        react_1.default.createElement(PhotosProvider_1.PhotosProvider, null,\n            react_1.default.createElement(ChangeCover_1.ChangeCover, { action: action }))));\n};\nexports.CoverPopOver = CoverPopOver;\n\n\n//# sourceURL=webpack://client/./src/components/Popover.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("acd28cc51921efc08f0e")
/******/ })();
/******/ 
/******/ }
);