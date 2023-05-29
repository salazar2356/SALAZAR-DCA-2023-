/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Strore/actions.ts":
/*!*******************************!*\
  !*** ./src/Strore/actions.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navigate\": () => (/* binding */ navigate),\n/* harmony export */   \"saveproduct\": () => (/* binding */ saveproduct)\n/* harmony export */ });\nconst navigate = (screen) => {\n    return {\n        type: \"NAVIGATE\",\n        payload: screen,\n    };\n};\nconst saveproduct = (products) => {\n    return {\n        action: \"\",\n        payload: products\n    };\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/Strore/actions.ts?");

/***/ }),

/***/ "./src/Strore/index.ts":
/*!*****************************!*\
  !*** ./src/Strore/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _Types_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/types */ \"./src/Types/types.ts\");\n/* harmony import */ var _Strore_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Strore/reducer */ \"./src/Strore/reducer.ts\");\n// import { reducer } from \"./reducer\";\n\n\nvar products;\n(function (products) {\n    products[\"SAVEPRODUCT\"] = \"SAVEPRODUCT\";\n})(products || (products = {}));\nconst emptyState = {\n    screen: _Types_types__WEBPACK_IMPORTED_MODULE_0__.Screens.LOGIN,\n};\nlet appState = emptyState;\nlet observers = [];\nconst notifyObservers = () => observers.forEach((o) => o.render());\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    const newState = (0,_Strore_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer)(action, clone);\n    appState = newState;\n    notifyObservers();\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/Strore/index.ts?");

/***/ }),

/***/ "./src/Strore/reducer.ts":
/*!*******************************!*\
  !*** ./src/Strore/reducer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\nconst reducer = (action, prevState) => {\n    switch (action.type) {\n        case \"NAVIGATE\":\n            prevState.screen = action.payload;\n            break;\n    }\n    return prevState;\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/Strore/reducer.ts?");

/***/ }),

/***/ "./src/Types/types.ts":
/*!****************************!*\
  !*** ./src/Types/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Screens\": () => (/* binding */ Screens)\n/* harmony export */ });\nvar Screens;\n(function (Screens) {\n    Screens[\"HOME\"] = \"HOME\";\n    Screens[\"REGISTER\"] = \"REGISTER\";\n    Screens[\"LOGIN\"] = \"LOGIN\";\n    Screens[\"ADD\"] = \"ADD\";\n})(Screens || (Screens = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/Types/types.ts?");

/***/ }),

/***/ "./src/components/Button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/Button/button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _Strore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Strore */ \"./src/Strore/index.ts\");\n/* harmony import */ var _Strore_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Strore/actions */ \"./src/Strore/actions.ts\");\n\n\nconst interInputs = {\n    product: \"\",\n    price: \"\",\n};\nclass Button extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    handleSavebutton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore__WEBPACK_IMPORTED_MODULE_0__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_1__.saveproduct)(interInputs.price));\n        console.log('Click handle button to save');\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        \r\n        <button class=\"button\">Añadir</button>\r\n        `;\n        const savebutton = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(\".button\");\n        console.log(savebutton);\n        savebutton === null || savebutton === void 0 ? void 0 : savebutton.addEventListener(\"click\", this.handleSavebutton);\n    }\n}\ncustomElements.define(\"my-button\", Button);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Button/button.ts?");

/***/ }),

/***/ "./src/components/Inputs/inputs.ts":
/*!*****************************************!*\
  !*** ./src/components/Inputs/inputs.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Inputs)\n/* harmony export */ });\nconst interInputs = {\n    product: \"\",\n    price: \"0\",\n};\nclass Inputs extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n        <input type=\"text\" placeholder=\"Producto\" class=\"product\">\n        <input type=\"number\" placeholder=\"Precio\" class=\"price\">\n        `;\n        const product = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.product');\n        console.log(product);\n        product === null || product === void 0 ? void 0 : product.addEventListener(\"change\", (event) => {\n            console.log(interInputs);\n        });\n        const price = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.precio');\n        console.log(price);\n        price === null || price === void 0 ? void 0 : price.addEventListener(\"change\", (event) => {\n            console.log(interInputs);\n        });\n    }\n}\ncustomElements.define(\"my-inputs\", Inputs);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Inputs/inputs.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* reexport safe */ _Button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Inputs\": () => (/* reexport safe */ _Inputs_inputs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Inputs_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inputs/inputs */ \"./src/components/Inputs/inputs.ts\");\n/* harmony import */ var _Button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button/button */ \"./src/components/Button/button.ts\");\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/export */ \"./src/screens/export.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _Strore_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Strore/index */ \"./src/Strore/index.ts\");\n/* harmony import */ var _Types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Types/types */ \"./src/Types/types.ts\");\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_2__.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (!this.shadowRoot)\n            return;\n        switch (_Strore_index__WEBPACK_IMPORTED_MODULE_2__.appState.screen) {\n            case _Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.LOGIN:\n                this.shadowRoot.innerHTML = `<my-login></my-login>`;\n                break;\n            case _Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.REGISTER:\n                this.shadowRoot.innerHTML = `<my-register></my-register>`;\n                break;\n            case _Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.HOME:\n                this.shadowRoot.innerHTML = `<my-home></my-home>`;\n                break;\n            case _Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.ADD:\n                this.shadowRoot.innerHTML = `<my-add></my-add>`;\n                break;\n            default:\n                break;\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/add.ts":
/*!****************************!*\
  !*** ./src/screens/add.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Add)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n\nclass Add extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n        \n        <link rel=\"stylesheet\" href=\"../src/screens/add.css\">\n        <h2>Aquí Puedes Subir Tus Favoritos</h2>        \n        <my-inputs></my-inputs>\n        <my-button></my-button>\n        `;\n    }\n}\ncustomElements.define(\"my-add\", Add);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/add.ts?");

/***/ }),

/***/ "./src/screens/export.ts":
/*!*******************************!*\
  !*** ./src/screens/export.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Add\": () => (/* reexport safe */ _add__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"Home\": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Login\": () => (/* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Register\": () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/screens/home.ts\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ \"./src/screens/login.ts\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./src/screens/register.ts\");\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add */ \"./src/screens/add.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/export.ts?");

/***/ }),

/***/ "./src/screens/home.ts":
/*!*****************************!*\
  !*** ./src/screens/home.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _Strore_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Strore/index */ \"./src/Strore/index.ts\");\n/* harmony import */ var _Strore_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Strore/actions */ \"./src/Strore/actions.ts\");\n/* harmony import */ var _Types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Types/types */ \"./src/Types/types.ts\");\n\n\n\n\nclass Home extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    handleAddbutton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.ADD));\n        console.log('Click handle button to add');\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n        \n        <link rel=\"stylesheet\" href=\"../src/screens/home.css\">\n        <div class=\"top\">\n        <h2>My Home</h2>\n        </div>\n\n        <button class =\"toadd\">Añadir Producto</button>\n\n        `;\n        const addbutton = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(\".toadd\");\n        console.log(addbutton);\n        addbutton === null || addbutton === void 0 ? void 0 : addbutton.addEventListener(\"click\", this.handleAddbutton);\n    }\n}\ncustomElements.define(\"my-home\", Home);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/home.ts?");

/***/ }),

/***/ "./src/screens/login.ts":
/*!******************************!*\
  !*** ./src/screens/login.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _Strore_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Strore/index */ \"./src/Strore/index.ts\");\n/* harmony import */ var _Strore_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Strore/actions */ \"./src/Strore/actions.ts\");\n/* harmony import */ var _Types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Types/types */ \"./src/Types/types.ts\");\n\n\n\n\nclass Login extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    handleLoginButton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.HOME));\n        console.log('Click handle button');\n    }\n    handletoRegisterButton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.REGISTER));\n        console.log('Click button to Register');\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n        <link rel=\"stylesheet\" href=\"../src/screens/login.css\">\n        <section>\n        \n                <div class=\"form-box\">\n                    <div class=\"form-value\">\n                        <form action=\"\">\n                            <h2>Log In</h2>\n                            \n                            <div class=\"inputbox\">\n                               <input type=\"email\" required>\n                               <label for=\"\">Email</label>\n                            </div>\n        \n                            <div class=\"inputbox\">\n                               <input type=\"password\" required>\n                               <label for=\"\">Password</label>\n                            </div>\n        \n\n                            <div class=\"forget\">\n                               <label for=\"\">\n                               <a href=\"#\">Did You Forget Your Password</a>\n                            </div>\n                            <div class=\"registered\">\n                               <label for=\"\">\n                               <a class=\"registro\">¿No tienes una cuenta? Registrate</a>\n                            </div>\n                            <button class=\"home\">Continue</button>\n                        </form>\n                    </div>\n                </div>\n        </section>\n        \n        `;\n        const button = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.home');\n        console.log(button);\n        button === null || button === void 0 ? void 0 : button.addEventListener(\"click\", this.handleLoginButton);\n        const buttontoregister = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.registro');\n        console.log(button);\n        buttontoregister === null || buttontoregister === void 0 ? void 0 : buttontoregister.addEventListener(\"click\", this.handletoRegisterButton);\n    }\n}\ncustomElements.define(\"my-login\", Login);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/login.ts?");

/***/ }),

/***/ "./src/screens/register.ts":
/*!*********************************!*\
  !*** ./src/screens/register.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _Strore_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Strore/index */ \"./src/Strore/index.ts\");\n/* harmony import */ var _Strore_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Strore/actions */ \"./src/Strore/actions.ts\");\n/* harmony import */ var _Types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Types/types */ \"./src/Types/types.ts\");\n\n\n\n\nclass Register extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    handleRegisterButton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.HOME));\n        console.log('Click handle button');\n    }\n    //const btn = this.shadowRoot?.querySelector(\"button\");\n    //btn?.addEventListener(\"click\", ()=> {\n    //const event = \n    //new CustomEvent(\"user-registered\", {\n    //   composed: true\n    //});\n    //this.dispatchEvent(event);\n    //alert(\"User-created\");\n    //console.log(\"Se registró con exito\");\n    //})\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n        <link rel=\"stylesheet\" href=\"../src/screens/register.css\">\n<section>\n\n        <div class=\"form-box\">\n            <div class=\"form-value\">\n                <form action=\"\">\n                    <h2>Register</h2>\n                    \n                    <div class=\"inputbox\">\n                       <input type=\"email\" required>\n                       <label for=\"\">Email</label>\n                    </div>\n\n                    <div class=\"inputbox\">\n                       <input type=\"text\" required>\n                       <label for=\"\">Name</label>\n                    </div>\n\n                    <div class=\"inputbox\">\n                       <input type=\"password\" required>\n                       <label for=\"\">Password</label>\n                    </div>\n\n                    <div class=\"inputbox\">\n                       <input type=\"password\" required>\n                       <label for=\"\">Confirme Password</label>\n                    </div>\n\n\n                    <div class=\"forget\">\n                       <label for=\"\"><input type=\"checkbox\">\n                       <a href=\"#\">I agree</a>\n                    </div>\n                    <button class=\"toregister\">Continue</button>\n                    \n\n                </form>\n            </div>\n\n        </div>\n</section>\n\n        `;\n        const button = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.toregister');\n        console.log(button);\n        button === null || button === void 0 ? void 0 : button.addEventListener(\"click\", this.handleRegisterButton);\n    }\n}\ncustomElements.define(\"my-register\", Register);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/register.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;