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

/***/ "./src/components/Functionality/AddLable.tsx":
/*!***************************************************!*\
  !*** ./src/components/Functionality/AddLable.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AddLable = void 0;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst ContextScheme_1 = __webpack_require__(/*! ../../context/ContextScheme */ \"./src/context/ContextScheme.tsx\");\nconst controlledForm_1 = __webpack_require__(/*! ../Forms/controlledForm */ \"./src/components/Forms/controlledForm.tsx\");\nconst AddLable = ({ \n// card,\naction, }) => {\n    const [labels, setLabels] = (0, react_1.useState)([]);\n    const [tag, setValue] = (0, react_1.useState)(\"\");\n    const [color, setColor] = (0, react_1.useState)(\"gray\");\n    const onChange = (event) => {\n        setValue(event.target.value);\n    };\n    const addLabel = () => {\n        let temp = labels.slice();\n        temp.push({ tag, color });\n        setLabels(temp);\n        setValue(\"\");\n        action && action({ tag, color });\n    };\n    const colors = [\n        \"gray\",\n        \"red\",\n        \"orange\",\n        \"yellow\",\n        \"green\",\n        \"teal\",\n        \"blue\",\n        \"cyan\",\n        \"purple\",\n        \"pink\",\n        \"white\",\n        \"black\",\n    ];\n    const { onClose } = (0, react_1.useContext)(ContextScheme_1.popOverContext);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(react_2.Stack, { spacing: 2, px: 4, py: 2, justifyContent: \"center\", alignItems: 'center', w: '100%' },\n            react_1.default.createElement(react_2.Heading, { size: \"sm\" }, \"Lable\"),\n            react_1.default.createElement(react_2.chakra.small, { color: \"#BDBDBD\", fontSize: \"xs\" }, \"Select a name and a color\"),\n            react_1.default.createElement(controlledForm_1.ControlledForm, { placeholder: \"Label...\", value: tag, action: addLabel, handleOnchange: onChange }),\n            react_1.default.createElement(react_2.HStack, { flexWrap: \"wrap\", justify: \"center\", w: \"100%\" }, colors.map((color) => {\n                return (react_1.default.createElement(react_2.Button, { bg: `${color}.400`, borderRadius: \"lg\", w: \"55px\", h: \"35px\", sx: {\n                        _hover: {\n                            opacity: 0.8,\n                        },\n                        _focus: {\n                            outline: \"1px solid #2A9AF3\",\n                            boxShadow: \"0 0 0 3px rgba(66, 153, 225, 0.6)\",\n                        },\n                    }, onClick: () => setColor(color) }));\n            })),\n            react_1.default.createElement(react_2.HStack, { w: '100%', border: '1px', borderColor: 'red' },\n                react_1.default.createElement(react_2.Button, { size: \"md\", colorScheme: 'blue', mx: \"auto\", onClick: () => {\n                        addLabel();\n                        onClose();\n                        // createNewLabel (cards!, setCards!, card!.id || '', value, color)\n                    } }, \"Add\"),\n                react_1.default.createElement(react_2.Button, { variant: 'ghost', onClick: onClose }, \"cancel\")))));\n};\nexports.AddLable = AddLable;\n\n\n//# sourceURL=webpack://client/./src/components/Functionality/AddLable.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bca18e8401bb5a1f9779")
/******/ })();
/******/ 
/******/ }
);