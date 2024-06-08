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

/***/ "./components/game-new/ui/player-info.jsx":
/*!************************************************!*\
  !*** ./components/game-new/ui/player-info.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-symbol */ \"./components/game-new/ui/game-symbol.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/timers */ \"./components/lib/timers.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PlayerInfo(param) {\n    let { isRight, name, rating, avatar, symbol, timer, timerStartAt } = param;\n    _s();\n    const now = (0,_lib_timers__WEBPACK_IMPORTED_MODULE_4__.useNow)(1000, timerStartAt);\n    const mills = Math.max(now ? timer - (now - timerStartAt) : timer, 0);\n    const seconds = Math.ceil(mills / 1000);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isEdge = seconds < 10;\n    const getTimerColor = ()=>{\n        if (timerStartAt) return isEdge ? \"text-orange-600\" : \"text-slate-900\";\n        return \"text-slate-300\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2 text-start text-teal-600 w-44\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: \"rounded-3xl w-12\",\n                                src: avatar,\n                                alt: \"avatar\",\n                                unoptimized: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg leading-tight truncate\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-slate-400 text-xs leading-tight\",\n                                        children: [\n                                            \"Rating: \",\n                                            rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(PlayerInfo, \"t70lBptlS54ZF8dxX2pScDbDMW0=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_4__.useNow\n    ];\n});\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL3BsYXllci1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDaUI7QUFDVjtBQUNTO0FBQ2I7QUFFcEIsU0FBU0ssV0FBVyxLQVFDO1FBUkQsRUFDRUMsT0FBTyxFQUNQQyxJQUFJLEVBQ0pDLE1BQU0sRUFDTkMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsWUFBWSxFQUNiLEdBUkQ7O0lBVXpCLE1BQU1DLE1BQU1WLG1EQUFNQSxDQUFDLE1BQU1TO0lBQ3pCLE1BQU1FLFFBQVFDLEtBQUtDLEdBQUcsQ0FBQ0gsTUFBTUYsUUFBU0UsQ0FBQUEsTUFBTUQsWUFBVyxJQUFLRCxPQUFPO0lBRW5FLE1BQU1NLFVBQVVGLEtBQUtHLElBQUksQ0FBQ0osUUFBUTtJQUVsQyxNQUFNSyxnQkFBZ0JDLE9BQU9MLEtBQUtNLEtBQUssQ0FBQ0osVUFBVSxLQUFLSyxRQUFRLENBQUMsR0FBRztJQUNuRSxNQUFNQyxnQkFBZ0JILE9BQU9ILFVBQVUsSUFBSUssUUFBUSxDQUFDLEdBQUc7SUFFdkQsTUFBTUUsU0FBU1AsVUFBVTtJQUV6QixNQUFNUSxnQkFBZ0I7UUFDcEIsSUFBSWIsY0FDRixPQUFPWSxTQUFTLG9CQUFvQjtRQUN0QyxPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFXM0IsZ0RBQUlBLENBQUMsWUFBWU0sV0FBVzs7a0NBQzFDLDhEQUFDb0I7d0JBQ0NDLFdBQVU7OzBDQUVWLDhEQUFDekIsbURBQUtBO2dDQUFDeUIsV0FBVTtnQ0FDVkMsS0FBS25CO2dDQUNMb0IsS0FBSTtnQ0FDSkMsV0FBVzs7Ozs7OzBDQUVsQiw4REFBQ0o7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFBa0NwQjs7Ozs7O2tEQUNqRCw4REFBQ21CO3dDQUFJQyxXQUFVOzs0Q0FBdUM7NENBQVNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbkUsOERBQUNrQjt3QkFDQ0MsV0FBVTtrQ0FDViw0RUFBQzFCLG9EQUFVQTs0QkFBQ1MsUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ2dCO2dCQUFJQyxXQUFXM0IsZ0RBQUlBLENBQUMseUJBQXlCTSxXQUFXOzs7Ozs7MEJBQ3pELDhEQUFDb0I7Z0JBQ0NDLFdBQVczQixnREFBSUEsQ0FDYixrQ0FDQU0sV0FBVyxXQUNYbUI7O29CQUdETjtvQkFBYztvQkFBRUk7Ozs7Ozs7Ozs7Ozs7QUFJekI7R0EzRGdCbEI7O1FBVUZGLCtDQUFNQTs7O0tBVkpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvdWkvcGxheWVyLWluZm8uanN4P2YyYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7R2FtZVN5bWJvbH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHt1c2VOb3d9IGZyb20gXCIuLi8uLi9saWIvdGltZXJzXCI7XG5pbXBvcnQge21lbW99IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVySW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lclN0YXJ0QXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB7XG5cbiAgY29uc3Qgbm93ID0gdXNlTm93KDEwMDAsIHRpbWVyU3RhcnRBdCk7XG4gIGNvbnN0IG1pbGxzID0gTWF0aC5tYXgobm93ID8gdGltZXIgLSAobm93IC0gdGltZXJTdGFydEF0KSA6IHRpbWVyLCAwKSA7XG5cbiAgY29uc3Qgc2Vjb25kcyA9IE1hdGguY2VpbChtaWxscyAvIDEwMDApO1xuXG4gIGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBzZWNvbmRzU3RyaW5nID0gU3RyaW5nKHNlY29uZHMgJSA2MCkucGFkU3RhcnQoMiwgJzAnKTtcblxuICBjb25zdCBpc0VkZ2UgPSBzZWNvbmRzIDwgMTA7XG5cbiAgY29uc3QgZ2V0VGltZXJDb2xvciA9ICgpID0+IHtcbiAgICBpZiAodGltZXJTdGFydEF0KVxuICAgICAgcmV0dXJuIGlzRWRnZSA/ICd0ZXh0LW9yYW5nZS02MDAnIDogJ3RleHQtc2xhdGUtOTAwJztcbiAgICByZXR1cm4gXCJ0ZXh0LXNsYXRlLTMwMFwiXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXIgbXgtYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJyZWxhdGl2ZVwiLCBpc1JpZ2h0ICYmIFwib3JkZXItM1wiKX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXN0YXJ0IHRleHQtdGVhbC02MDAgdy00NFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwicm91bmRlZC0zeGwgdy0xMlwiXG4gICAgICAgICAgICAgICAgIHNyYz17YXZhdGFyfVxuICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICB1bm9wdGltaXplZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLXRpZ2h0IHRydW5jYXRlXCI+e25hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIHRleHQteHMgbGVhZGluZy10aWdodFwiPlJhdGluZzoge3JhdGluZ308L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaGFkb3cgYWJzb2x1dGUgLWxlZnQtMSAtdG9wLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJoLTYgdy1weCBiZy1zbGF0ZS0yMDBcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTJcIil9Lz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIFwidGV4dC1sZyBmb250LXNlbWlib2xkIHctWzYwcHhdXCIsXG4gICAgICAgICAgaXNSaWdodCAmJiBcIm9yZGVyLTFcIixcbiAgICAgICAgICBnZXRUaW1lckNvbG9yKClcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge21pbnV0ZXNTdHJpbmd9OntzZWNvbmRzU3RyaW5nfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY2xzeCIsIkdhbWVTeW1ib2wiLCJJbWFnZSIsInVzZU5vdyIsIm1lbW8iLCJQbGF5ZXJJbmZvIiwiaXNSaWdodCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJ0aW1lciIsInRpbWVyU3RhcnRBdCIsIm5vdyIsIm1pbGxzIiwiTWF0aCIsIm1heCIsInNlY29uZHMiLCJjZWlsIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaXNFZGdlIiwiZ2V0VGltZXJDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInVub3B0aW1pemVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/ui/player-info.jsx\n"));

/***/ })

});