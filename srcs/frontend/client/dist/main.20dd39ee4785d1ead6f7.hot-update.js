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

/***/ "./src/hooks/useLogin.ts":
/*!*******************************!*\
  !*** ./src/hooks/useLogin.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst zod_1 = __webpack_require__(/*! @hookform/resolvers/zod */ \"./node_modules/@hookform/resolvers/zod/dist/zod.js\");\nconst authSchema_1 = __webpack_require__(/*! ../utils/authSchema */ \"./src/utils/authSchema.ts\");\nconst react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.cjs.js\");\nconst useLogin = () => {\n    const { handleSubmit, reset, register, formState: { errors }, } = (0, react_hook_form_1.useForm)({\n        resolver: (0, zod_1.zodResolver)(authSchema_1.loginSchema),\n    });\n    return { handleSubmit, reset, register, errors };\n};\nexports[\"default\"] = useLogin;\n\n\n//# sourceURL=webpack://client/./src/hooks/useLogin.ts?");

/***/ }),

/***/ "./src/pages/Login.tsx":
/*!*****************************!*\
  !*** ./src/pages/Login.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nconst react_2 = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.js\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst react_router_dom_2 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nconst apiClient_1 = __importDefault(__webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\"));\nconst useLogin_1 = __importDefault(__webpack_require__(/*! ../hooks/useLogin */ \"./src/hooks/useLogin.ts\"));\nconst FormContainer_1 = __importDefault(__webpack_require__(/*! ../components/Forms/FormContainer */ \"./src/components/Forms/FormContainer.tsx\"));\nconst FormElement_1 = __importDefault(__webpack_require__(/*! ../components/Forms/FormElement */ \"./src/components/Forms/FormElement.tsx\"));\nconst FormReminder_1 = __importDefault(__webpack_require__(/*! ../components/Forms/FormReminder */ \"./src/components/Forms/FormReminder.tsx\"));\nconst PasswordInput_1 = __importDefault(__webpack_require__(/*! ../components/Forms/PasswordInput */ \"./src/components/Forms/PasswordInput.tsx\"));\nconst useAuth_1 = __importDefault(__webpack_require__(/*! ../hooks/useAuth */ \"./src/hooks/useAuth.ts\"));\nconst LoginForm = () => {\n    const loginClient = new apiClient_1.default(\"/users/login\");\n    const toast = (0, react_2.useToast)();\n    const redirect = (0, react_router_dom_2.useNavigate)();\n    const { auth, setAuth } = (0, useAuth_1.default)();\n    const { reset, errors, register, handleSubmit } = (0, useLogin_1.default)();\n    if (auth.loggedIn)\n        return react_1.default.createElement(react_router_dom_2.Navigate, { to: \"/\" });\n    const sendLoginData = (data) => {\n        loginClient\n            .postData(data)\n            .then((res) => {\n            toast({\n                position: \"top-right\",\n                duration: 1000,\n                description: `Welcome back ${res.data.user.fullname}`,\n                status: \"success\",\n                onCloseComplete() {\n                    redirect(\"/\");\n                    localStorage.setItem(\"jwtToken\", res.data.token);\n                    setAuth({ loggedIn: true, token: res.data.token, user: res.data.user });\n                },\n            });\n        })\n            .catch((err) => {\n            var _a, _b;\n            toast({ position: \"top-right\", description: ((_b = (_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || err.message, status: \"error\" });\n        });\n        reset();\n    };\n    return (react_1.default.createElement(react_1.default.Fragment, null,\n        react_1.default.createElement(react_2.VStack, { paddingTop: 30 },\n            react_1.default.createElement(FormContainer_1.default, { title: \"Sign in to Thullo\", submitForm: handleSubmit(sendLoginData) },\n                react_1.default.createElement(FormElement_1.default, { label: \"Email:\", error: errors.email },\n                    react_1.default.createElement(react_2.Input, Object.assign({ variant: \"outline\", type: \"email\", placeholder: \"eg.johndoe@mail.com\" }, register(\"email\")))),\n                react_1.default.createElement(FormElement_1.default, { label: \"Password:\", error: errors.password },\n                    react_1.default.createElement(PasswordInput_1.default, { variant: \"outline\", placeholder: \"Minimum of 6 characters.\", register: register(\"password\") }),\n                    react_1.default.createElement(react_router_dom_1.Link, { to: \"/forgotpassword\", className: \"link link--right\" }, \"Forgot password ?\")),\n                react_1.default.createElement(react_2.Button, { type: \"submit\", variant: \"primary\", width: \"100%\" }, \"Sign in\")),\n            react_1.default.createElement(FormReminder_1.default, { reminderText: \"First time here ?\", callToAction: \"Create an account\", linkToAction: \"/signup\" }))));\n};\nexports[\"default\"] = LoginForm;\n\n\n//# sourceURL=webpack://client/./src/pages/Login.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1e7fad9538f6a6699f96")
/******/ })();
/******/ 
/******/ }
);