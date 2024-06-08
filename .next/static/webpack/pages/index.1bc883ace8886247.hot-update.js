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

/***/ "./components/game-new/ui/game-cell.jsx":
/*!**********************************************!*\
  !*** ./components/game-new/ui/game-cell.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameCell: function() { return /* binding */ GameCell; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-symbol */ \"./components/game-new/ui/game-symbol.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst GameCell = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = function GameCell(param) {\n    let { onClick, isWinner, disabled, symbol } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        disabled: disabled,\n        onClick: onClick,\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"border border-slate-200 -ml-px -mt-px flex items-center justify-center\", isWinner && \"bg-orange-600/10\"),\n        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n            symbol: symbol,\n            className: \"w-5 h-5\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-cell.jsx\",\n            lineNumber: 18,\n            columnNumber: 18\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\game-cell.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n});\n_c1 = GameCell;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameCell$memo\");\n$RefreshReg$(_c1, \"GameCell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL2dhbWUtY2VsbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFDaUI7QUFDZDtBQUVwQixNQUFNRyx5QkFBV0QsMkNBQUlBLE1BQUMsU0FBU0MsU0FBUyxLQUlVO1FBSlYsRUFDR0MsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLFFBQVEsRUFDUkMsTUFBTSxFQUFDLEdBSlY7SUFLN0MscUJBQ0UsOERBQUNDO1FBQU9GLFVBQVVBO1FBQ1ZGLFNBQVNBO1FBQ1RLLFdBQVdULGdEQUFJQSxDQUNiLDBFQUNBSyxZQUFZO2tCQUduQkUsd0JBQVUsOERBQUNOLG9EQUFVQTtZQUFDTSxRQUFRQTtZQUFRRSxXQUFVOzs7Ozs7Ozs7OztBQUd2RCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvdWkvZ2FtZS1jZWxsLmpzeD9mNWVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQge0dhbWVTeW1ib2x9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XG5pbXBvcnQge21lbW99IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgR2FtZUNlbGwgPSBtZW1vKGZ1bmN0aW9uIEdhbWVDZWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNXaW5uZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2x9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICBcImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgICAgICAgaXNXaW5uZXIgJiYgXCJiZy1vcmFuZ2UtNjAwLzEwXCJcbiAgICAgICAgICAgICl9XG4gICAgPlxuICAgICAge3N5bWJvbCAmJiA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gY2xhc3NOYW1lPVwidy01IGgtNVwiLz59XG4gICAgPC9idXR0b24+XG4gICk7XG59KTtcbiJdLCJuYW1lcyI6WyJjbHN4IiwiR2FtZVN5bWJvbCIsIm1lbW8iLCJHYW1lQ2VsbCIsIm9uQ2xpY2siLCJpc1dpbm5lciIsImRpc2FibGVkIiwic3ltYm9sIiwiYnV0dG9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/ui/game-cell.jsx\n"));

/***/ })

});