"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/uikit/fields/ui-field-select.jsx":
/*!*****************************************************!*\
  !*** ./components/uikit/fields/ui-field-select.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UiFieldSelect: function() { return /* binding */ UiFieldSelect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Listbox,ListboxButton,ListboxOption,ListboxOptions!=!@headlessui/react */ \"__barrel_optimize__?names=Listbox,ListboxButton,ListboxOption,ListboxOptions!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst people = [\n    {\n        id: 1,\n        name: \"Durward Reynolds\"\n    },\n    {\n        id: 2,\n        name: \"Kenton Towne\"\n    },\n    {\n        id: 3,\n        name: \"Therese Wunsch\"\n    },\n    {\n        id: 4,\n        name: \"Benedict Kessler\"\n    },\n    {\n        id: 5,\n        name: \"Katelyn Rohan\"\n    }\n];\nfunction UiFieldSelect() {\n    _s();\n    const [selectedPerson, setSelectedPerson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(people[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {\n        value: selectedPerson,\n        onChange: setSelectedPerson,\n        as: div,\n        className: \"relative border rounded-md shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.ListboxButton, {\n                children: selectedPerson.name\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\uikit\\\\fields\\\\ui-field-select.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.ListboxOptions, {\n                anchor: \"bottom\",\n                children: people.map((person)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Listbox_ListboxButton_ListboxOption_ListboxOptions_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.ListboxOption, {\n                        value: person,\n                        className: \"data-[focus]:bg-teal-600 data-[focus]:text-white\",\n                        children: person.name\n                    }, person.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\uikit\\\\fields\\\\ui-field-select.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\uikit\\\\fields\\\\ui-field-select.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\uikit\\\\fields\\\\ui-field-select.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(UiFieldSelect, \"rMe2/RCubxcOcZ60BonwcXdX5IA=\");\n_c = UiFieldSelect;\nvar _c;\n$RefreshReg$(_c, \"UiFieldSelect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Vpa2l0L2ZpZWxkcy91aS1maWVsZC1zZWxlY3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdGO0FBQy9DO0FBRXpDLE1BQU1NLFNBQVM7SUFDYjtRQUFFQyxJQUFJO1FBQUdDLE1BQU07SUFBbUI7SUFDbEM7UUFBRUQsSUFBSTtRQUFHQyxNQUFNO0lBQWU7SUFDOUI7UUFBRUQsSUFBSTtRQUFHQyxNQUFNO0lBQWlCO0lBQ2hDO1FBQUVELElBQUk7UUFBR0MsTUFBTTtJQUFtQjtJQUNsQztRQUFFRCxJQUFJO1FBQUdDLE1BQU07SUFBZ0I7Q0FDaEM7QUFFTSxTQUFTQzs7SUFDZCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdOLCtDQUFRQSxDQUFDQyxNQUFNLENBQUMsRUFBRTtJQUU5RCxxQkFDRSw4REFBQ04sK0hBQU9BO1FBQUNZLE9BQU9GO1FBQWdCRyxVQUFVRjtRQUFtQkcsSUFBSUM7UUFBS0MsV0FBVTs7MEJBQzlFLDhEQUFDZixxSUFBYUE7MEJBQUVTLGVBQWVGLElBQUk7Ozs7OzswQkFDbkMsOERBQUNMLHNJQUFjQTtnQkFBQ2MsUUFBTzswQkFDcEJYLE9BQU9ZLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWCw4REFBQ2pCLHFJQUFhQTt3QkFBaUJVLE9BQU9PO3dCQUFRSCxXQUFVO2tDQUNyREcsT0FBT1gsSUFBSTt1QkFETVcsT0FBT1osRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU92QztHQWZnQkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aWtpdC9maWVsZHMvdWktZmllbGQtc2VsZWN0LmpzeD9mNDVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlzdGJveCwgTGlzdGJveEJ1dHRvbiwgTGlzdGJveE9wdGlvbiwgTGlzdGJveE9wdGlvbnN9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHtGcmFnbWVudCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBwZW9wbGUgPSBbXG4gIHsgaWQ6IDEsIG5hbWU6ICdEdXJ3YXJkIFJleW5vbGRzJyB9LFxuICB7IGlkOiAyLCBuYW1lOiAnS2VudG9uIFRvd25lJyB9LFxuICB7IGlkOiAzLCBuYW1lOiAnVGhlcmVzZSBXdW5zY2gnIH0sXG4gIHsgaWQ6IDQsIG5hbWU6ICdCZW5lZGljdCBLZXNzbGVyJyB9LFxuICB7IGlkOiA1LCBuYW1lOiAnS2F0ZWx5biBSb2hhbicgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBVaUZpZWxkU2VsZWN0KCl7XG4gIGNvbnN0IFtzZWxlY3RlZFBlcnNvbiwgc2V0U2VsZWN0ZWRQZXJzb25dID0gdXNlU3RhdGUocGVvcGxlWzBdKTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0Ym94IHZhbHVlPXtzZWxlY3RlZFBlcnNvbn0gb25DaGFuZ2U9e3NldFNlbGVjdGVkUGVyc29ufSBhcz17ZGl2fSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBib3JkZXIgcm91bmRlZC1tZCBzaGFkb3ctc21cIj5cbiAgICAgIDxMaXN0Ym94QnV0dG9uPntzZWxlY3RlZFBlcnNvbi5uYW1lfTwvTGlzdGJveEJ1dHRvbj5cbiAgICAgIDxMaXN0Ym94T3B0aW9ucyBhbmNob3I9XCJib3R0b21cIj5cbiAgICAgICAge3Blb3BsZS5tYXAoKHBlcnNvbikgPT4gKFxuICAgICAgICAgIDxMaXN0Ym94T3B0aW9uIGtleT17cGVyc29uLmlkfSB2YWx1ZT17cGVyc29ufSBjbGFzc05hbWU9XCJkYXRhLVtmb2N1c106YmctdGVhbC02MDAgZGF0YS1bZm9jdXNdOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIHtwZXJzb24ubmFtZX1cbiAgICAgICAgICA8L0xpc3Rib3hPcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0Ym94T3B0aW9ucz5cbiAgICA8L0xpc3Rib3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGlzdGJveCIsIkxpc3Rib3hCdXR0b24iLCJMaXN0Ym94T3B0aW9uIiwiTGlzdGJveE9wdGlvbnMiLCJGcmFnbWVudCIsInVzZVN0YXRlIiwicGVvcGxlIiwiaWQiLCJuYW1lIiwiVWlGaWVsZFNlbGVjdCIsInNlbGVjdGVkUGVyc29uIiwic2V0U2VsZWN0ZWRQZXJzb24iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiYXMiLCJkaXYiLCJjbGFzc05hbWUiLCJhbmNob3IiLCJtYXAiLCJwZXJzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/uikit/fields/ui-field-select.jsx\n"));

/***/ })

});