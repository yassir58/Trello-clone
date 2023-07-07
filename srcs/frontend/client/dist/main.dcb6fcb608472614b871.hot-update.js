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

/***/ "./src/components/Board.tsx":
/*!**********************************!*\
  !*** ./src/components/Board.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Board = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst Buttons_1 = __webpack_require__(/*! ./ui-elements/Buttons */ \"./src/components/ui-elements/Buttons.tsx\");\nconst react_fontawesome_1 = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nconst free_solid_svg_icons_1 = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.js\");\nconst Containers_1 = __webpack_require__(/*! ./ui-elements/Containers */ \"./src/components/ui-elements/Containers.tsx\");\nconst Media_1 = __webpack_require__(/*! ./ui-elements/Media */ \"./src/components/ui-elements/Media.tsx\");\nconst Board = ({ visibilty, members }) => {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_2.Flex, { justify: \"space-between\", align: \"center\", w: \"98vw\", h: \"auto\", mx: \"1vw\", mt: \"5vh\", mb: \"4vh\" },\n            react_1.default.createElement(react_2.HStack, { spacing: 3 },\n                react_1.default.createElement(Buttons_1.SecondaryButton, null,\n                    visibilty ? (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faGlobe })) : (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faLock })),\n                    react_1.default.createElement(react_2.chakra.small, null, visibilty ? \"Public\" : \"Private\")),\n                members.map((member) => {\n                    return react_1.default.createElement(react_2.Avatar, { size: 'sm', rounded: \"md\", borderRadius: 'md', src: member });\n                }),\n                react_1.default.createElement(react_2.IconButton, { colorScheme: 'blue', size: 'sm', \"aria-label\": 'Search database', icon: react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlus, size: \"lg\" }) })),\n            react_1.default.createElement(Buttons_1.SecondaryButton, null,\n                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEllipsis }),\n                react_1.default.createElement(react_2.chakra.small, null, \" Menu \"))),\n        react_1.default.createElement(Containers_1.FlexContainer, { width: \"98vw\" },\n            react_1.default.createElement(Containers_1.ColumnContainer, null,\n                react_1.default.createElement(react_2.Flex, { w: \"20vw\", justify: \"space-between\", align: \"center\", p: \"6px\" },\n                    react_1.default.createElement(react_2.Heading, { size: \"sm\", fontWeight: 'normal' }, \"This is list title\"),\n                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEllipsis })),\n                react_1.default.createElement(Containers_1.ColumnContainer, null,\n                    react_1.default.createElement(Media_1.CardCp, { imgSrc: \"https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60\", cardTitle: \"this is card title\" },\n                        react_1.default.createElement(react_2.HStack, { spacing: 2 },\n                            react_1.default.createElement(Buttons_1.Label, { color: \"orange\" },\n                                react_1.default.createElement(react_2.chakra.small, null, \"Technologie\")),\n                            react_1.default.createElement(Buttons_1.Label, { color: \"blue\" },\n                                react_1.default.createElement(react_2.chakra.small, null, \"value\"))),\n                        react_1.default.createElement(react_2.Flex, { justify: \"space-between\", width: \"100%\", align: \"center\" },\n                            react_1.default.createElement(react_2.HStack, { spacing: 2 },\n                                react_1.default.createElement(react_2.Avatar, { size: 'xs', src: members[0], borderRadius: 'lg' }),\n                                react_1.default.createElement(react_2.Avatar, { size: 'xs', src: members[1], borderRadius: 'lg' }),\n                                react_1.default.createElement(react_2.IconButton, { colorScheme: 'blue', size: 'xs', \"aria-label\": 'Search database', icon: react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlus, size: \"lg\" }) })),\n                            react_1.default.createElement(react_2.HStack, { spacing: 2 },\n                                react_1.default.createElement(Media_1.CardInfo, { icon: free_solid_svg_icons_1.faComment, value: \"1\" }),\n                                react_1.default.createElement(Media_1.CardInfo, { icon: free_solid_svg_icons_1.faPaperclip, value: \"5\" }))))),\n                react_1.default.createElement(Buttons_1.LargeButton, null,\n                    react_1.default.createElement(react_2.chakra.small, null, \"Add another list\"),\n                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlus }))),\n            react_1.default.createElement(Containers_1.ColumnContainer, null,\n                react_1.default.createElement(Buttons_1.LargeButton, null,\n                    react_1.default.createElement(react_2.chakra.small, null, \"Add another list\"),\n                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlus }))))));\n};\nexports.Board = Board;\n\n\n//# sourceURL=webpack://client/./src/components/Board.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("177ebb4e1d335e59f4b3")
/******/ })();
/******/ 
/******/ }
);