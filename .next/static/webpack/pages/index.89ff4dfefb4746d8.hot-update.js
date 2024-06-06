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

/***/ "./components/game-new/ui/game-over-model.jsx":
/*!****************************************************!*\
  !*** ./components/game-new/ui/game-over-model.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameOverModel: function() { return /* binding */ GameOverModel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_uikit_ui_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game/uikit/ui-model */ \"./components/game/uikit/ui-model.jsx\");\n/* harmony import */ var _game_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game/uikit/ui-button */ \"./components/game/uikit/ui-button.jsx\");\n\n\n\nfunction GameOverModel(param) {\n    let { winnerName, players } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_uikit_ui_model__WEBPACK_IMPORTED_MODULE_1__.UiModel, {\n        width: \"md\",\n        isOpen: winnerName,\n        onClose: ()=>console.log(\"Closed\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_uikit_ui_model__WEBPACK_IMPORTED_MODULE_1__.UiModel.Header, {\n                children: \"Game over!\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-over-model.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_uikit_ui_model__WEBPACK_IMPORTED_MODULE_1__.UiModel.Body, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-sm\",\n                    children: [\n                        \"Winner: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-teal-600\",\n                            children: winnerName\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-over-model.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-over-model.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-over-model.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-between grid grid-cols-2 gap-3 mt-2 mx-auto\",\n                children: players\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-over-model.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_uikit_ui_model__WEBPACK_IMPORTED_MODULE_1__.UiModel.Footer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                        size: \"md\",\n                        variant: \"outline\",\n                        children: \"Go back\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-over-model.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                        size: \"md\",\n                        variant: \"primary\",\n                        children: \"Play again\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-over-model.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-over-model.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-over-model.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = GameOverModel;\nvar _c;\n$RefreshReg$(_c, \"GameOverModel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL2dhbWUtb3Zlci1tb2RlbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ0U7QUFFN0MsU0FBU0UsY0FBYyxLQUFxQjtRQUFyQixFQUFDQyxVQUFVLEVBQUVDLE9BQU8sRUFBQyxHQUFyQjtJQUM1QixxQkFDRSw4REFBQ0oseURBQU9BO1FBQ05LLE9BQU07UUFDTkMsUUFBUUg7UUFDUkksU0FBUyxJQUFNQyxRQUFRQyxHQUFHLENBQUM7OzBCQUUzQiw4REFBQ1QseURBQU9BLENBQUNVLE1BQU07MEJBQUM7Ozs7OzswQkFFaEIsOERBQUNWLHlEQUFPQSxDQUFDVyxJQUFJOzBCQUNYLDRFQUFDQztvQkFBSUMsV0FBVTs7d0JBQVU7c0NBQ2YsOERBQUNDOzRCQUFLRCxXQUFVO3NDQUFpQlY7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUk3Qyw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ1pUOzs7Ozs7MEJBR0gsOERBQUNKLHlEQUFPQSxDQUFDZSxNQUFNOztrQ0FDYiw4REFBQ2QsMkRBQVFBO3dCQUFDZSxNQUFLO3dCQUFLQyxTQUFRO2tDQUFVOzs7Ozs7a0NBSXRDLDhEQUFDaEIsMkRBQVFBO3dCQUFDZSxNQUFLO3dCQUFLQyxTQUFRO2tDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUM7S0E5QmdCZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL2dhbWUtb3Zlci1tb2RlbC5qc3g/ZmUzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VpTW9kZWx9IGZyb20gXCIuLi8uLi9nYW1lL3Vpa2l0L3VpLW1vZGVsXCI7XG5pbXBvcnQge1VpQnV0dG9ufSBmcm9tIFwiLi4vLi4vZ2FtZS91aWtpdC91aS1idXR0b25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVPdmVyTW9kZWwoe3dpbm5lck5hbWUsIHBsYXllcnN9KSB7XG4gIHJldHVybiAoXG4gICAgPFVpTW9kZWxcbiAgICAgIHdpZHRoPVwibWRcIlxuICAgICAgaXNPcGVuPXt3aW5uZXJOYW1lfVxuICAgICAgb25DbG9zZT17KCkgPT4gY29uc29sZS5sb2coXCJDbG9zZWRcIil9XG4gICAgPlxuICAgICAgPFVpTW9kZWwuSGVhZGVyPkdhbWUgb3ZlciE8L1VpTW9kZWwuSGVhZGVyPlxuXG4gICAgICA8VWlNb2RlbC5Cb2R5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICBXaW5uZXI6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGVhbC02MDBcIj57d2lubmVyTmFtZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9VaU1vZGVsLkJvZHk+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1iZXR3ZWVuIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTMgbXQtMiBteC1hdXRvXCI+XG4gICAgICAgIHtwbGF5ZXJzfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxVaU1vZGVsLkZvb3Rlcj5cbiAgICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgR28gYmFja1xuICAgICAgICA8L1VpQnV0dG9uPlxuXG4gICAgICAgIDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgIFBsYXkgYWdhaW5cbiAgICAgICAgPC9VaUJ1dHRvbj5cbiAgICAgIDwvVWlNb2RlbC5Gb290ZXI+XG4gICAgPC9VaU1vZGVsPlxuICApO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJVaU1vZGVsIiwiVWlCdXR0b24iLCJHYW1lT3Zlck1vZGVsIiwid2lubmVyTmFtZSIsInBsYXllcnMiLCJ3aWR0aCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJjb25zb2xlIiwibG9nIiwiSGVhZGVyIiwiQm9keSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJGb290ZXIiLCJzaXplIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/ui/game-over-model.jsx\n"));

/***/ })

});