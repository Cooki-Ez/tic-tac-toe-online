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

/***/ "./components/game-new/game.jsx":
/*!**************************************!*\
  !*** ./components/game-new/game.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n\n\n\n\n\n\n\nfunction Game() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n        backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 11,\n            columnNumber: 17\n        }, void 0),\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 12,\n            columnNumber: 14\n        }, void 0),\n        gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n            isRatingGame: true,\n            playersCount: 4,\n            timeMode: \"1 min to turn\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 13,\n            columnNumber: 17\n        }, void 0),\n        playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                avatar: player.avatar,\n                name: player.name,\n                rating: player.rating,\n                seconds: 60,\n                symbol: player.symbol,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 15,\n                columnNumber: 40\n            }, void 0))\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNFO0FBQ0Y7QUFDSjtBQUNRO0FBRXJDLFNBQVNNO0lBQ2QscUJBQ0UsOERBQUNOLHVEQUFVQTtRQUNUTyx3QkFBVSw4REFBQ04sbURBQVFBOzs7OztRQUNuQk8scUJBQU8sOERBQUNOLHFEQUFTQTs7Ozs7UUFDakJPLHdCQUFVLDhEQUFDTixtREFBUUE7WUFBQ08sWUFBWTtZQUFDQyxjQUFjO1lBQUdDLFVBQVU7Ozs7OztRQUM1REMsYUFDRVQsK0NBQU9BLENBQUNVLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFBVSw4REFBQ1gsdURBQVVBO2dCQUV0Q1ksUUFBUUYsT0FBT0UsTUFBTTtnQkFDckJDLE1BQU1ILE9BQU9HLElBQUk7Z0JBQ2pCQyxRQUFRSixPQUFPSSxNQUFNO2dCQUNyQkMsU0FBUztnQkFDVEMsUUFBUU4sT0FBT00sTUFBTTtnQkFDckJDLFNBQVNOLFFBQVEsTUFBTTtlQU5sQkQsT0FBT1EsRUFBRTs7Ozs7Ozs7OztBQVkxQjtLQXBCZ0JqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4P2U0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHYW1lTGF5b3V0fSBmcm9tIFwiLi91aS9nYW1lLWxheW91dFwiO1xuaW1wb3J0IHtCYWNrTGlua30gZnJvbSBcIi4vdWkvYmFjay1saW5rXCI7XG5pbXBvcnQge0dhbWVUaXRsZX0gZnJvbSBcIi4vdWkvZ2FtZS10aXRsZVwiO1xuaW1wb3J0IHtHYW1lSW5mb30gZnJvbSBcIi4vdWkvZ2FtZS1pbmZvXCI7XG5pbXBvcnQge1BMQVlFUlN9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtQbGF5ZXJJbmZvfSBmcm9tIFwiLi91aS9wbGF5ZXItaW5mb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8R2FtZUxheW91dFxuICAgICAgYmFja0xpbms9ezxCYWNrTGluay8+fVxuICAgICAgdGl0bGU9ezxHYW1lVGl0bGUvPn1cbiAgICAgIGdhbWVJbmZvPXs8R2FtZUluZm8gaXNSYXRpbmdHYW1lIHBsYXllcnNDb3VudD17NH0gdGltZU1vZGU9e1wiMSBtaW4gdG8gdHVyblwifS8+fVxuICAgICAgcGxheWVyc0xpc3Q9e1xuICAgICAgICBQTEFZRVJTLm1hcCgocGxheWVyLCBpbmRleCkgPT4gPFBsYXllckluZm9cbiAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgICAgYXZhdGFyPXtwbGF5ZXIuYXZhdGFyfVxuICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XG4gICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XG4gICAgICAgICAgICBzZWNvbmRzPXs2MH1cbiAgICAgICAgICAgIHN5bWJvbD17cGxheWVyLnN5bWJvbH1cbiAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHYW1lTGF5b3V0IiwiQmFja0xpbmsiLCJHYW1lVGl0bGUiLCJHYW1lSW5mbyIsIlBMQVlFUlMiLCJQbGF5ZXJJbmZvIiwiR2FtZSIsImJhY2tMaW5rIiwidGl0bGUiLCJnYW1lSW5mbyIsImlzUmF0aW5nR2FtZSIsInBsYXllcnNDb3VudCIsInRpbWVNb2RlIiwicGxheWVyc0xpc3QiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsImF2YXRhciIsIm5hbWUiLCJyYXRpbmciLCJzZWNvbmRzIiwic3ltYm9sIiwiaXNSaWdodCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ }),

/***/ "./components/game-new/ui/player-info.jsx":
/*!************************************************!*\
  !*** ./components/game-new/ui/player-info.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _game_game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game/game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction PlayerInfo(param) {\n    let { isRight, name, rating, avatar, symbol, isTimerRunning, seconds } = param;\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isEdge = seconds < 10;\n    const getTimerColor = ()=>{\n        if (isTimerRunning) return isEdge ? \"text-orange-600\" : \"text-slate-900\";\n        return \"text-slate-300\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2 text-start text-teal-600\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                className: \"rounded-3xl w-12\",\n                                src: avatar,\n                                alt: \"avatar\",\n                                unoptimized: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg leading-tight truncate\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-slate-400 text-xs leading-tight\",\n                                        children: [\n                                            \"Rating: \",\n                                            rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_game_symbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\ui\\\\player-info.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL3BsYXllci1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QjtBQUMwQjtBQUNuQjtBQUV4QixTQUFTRyxXQUFXLEtBT1U7UUFQVixFQUNFQyxPQUFPLEVBQ1BDLElBQUksRUFDSkMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLE1BQU0sRUFDTkMsY0FBYyxFQUNkQyxPQUFPLEVBQUMsR0FQVjtJQVF6QixNQUFNQyxnQkFBZ0JDLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0osVUFBVSxLQUFLSyxRQUFRLENBQUMsR0FBRztJQUNuRSxNQUFNQyxnQkFBZ0JKLE9BQU9GLFVBQVUsSUFBSUssUUFBUSxDQUFDLEdBQUc7SUFFdkQsTUFBTUUsU0FBU1AsVUFBVTtJQUV6QixNQUFNUSxnQkFBZ0I7UUFDcEIsSUFBR1QsZ0JBQ0QsT0FBT1EsU0FBUyxvQkFBb0I7UUFDdEMsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBV3BCLGdEQUFJQSxDQUFDLFlBQVlJLFdBQVc7O2tDQUMxQyw4REFBQ2U7d0JBQ0NDLFdBQVU7OzBDQUVWLDhEQUFDbEIsbURBQUtBO2dDQUFDa0IsV0FBVTtnQ0FDVkMsS0FBS2Q7Z0NBQ0xlLEtBQUk7Z0NBQ0pDLFdBQVc7Ozs7OzswQ0FFbEIsOERBQUNKO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQWtDZjs7Ozs7O2tEQUNqRCw4REFBQ2M7d0NBQUlDLFdBQVU7OzRDQUF1Qzs0Q0FBU2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR25FLDhEQUFDYTt3QkFDQ0MsV0FBVTtrQ0FDViw0RUFBQ25CLHlEQUFVQTs0QkFBQ08sUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ1c7Z0JBQUlDLFdBQVdwQixnREFBSUEsQ0FBQyx5QkFBeUJJLFdBQVc7Ozs7OzswQkFDekQsOERBQUNlO2dCQUNDQyxXQUFXcEIsZ0RBQUlBLENBQ2Isa0NBQ0FJLFdBQVcsV0FDWGM7O29CQUdEUDtvQkFBYztvQkFBRUs7Ozs7Ozs7Ozs7Ozs7QUFJekI7S0FwRGdCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL3BsYXllci1pbmZvLmpzeD9mMmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQge0dhbWVTeW1ib2x9IGZyb20gXCIuLi8uLi9nYW1lL2dhbWUtc3ltYm9sXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1RpbWVyUnVubmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kc30pe1xuICBjb25zdCBtaW51dGVzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3Qgc2Vjb25kc1N0cmluZyA9IFN0cmluZyhzZWNvbmRzICUgNjApLnBhZFN0YXJ0KDIsICcwJyk7XG5cbiAgY29uc3QgaXNFZGdlID0gc2Vjb25kcyA8IDEwO1xuXG4gIGNvbnN0IGdldFRpbWVyQ29sb3IgPSAoKSA9PiB7XG4gICAgaWYoaXNUaW1lclJ1bm5pbmcpXG4gICAgICByZXR1cm4gaXNFZGdlID8gJ3RleHQtb3JhbmdlLTYwMCcgOiAndGV4dC1zbGF0ZS05MDAnO1xuICAgIHJldHVybiBcInRleHQtc2xhdGUtMzAwXCJcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJyZWxhdGl2ZVwiLCBpc1JpZ2h0ICYmIFwib3JkZXItM1wiKX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXN0YXJ0IHRleHQtdGVhbC02MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIHctMTJcIlxuICAgICAgICAgICAgICAgICBzcmM9e2F2YXRhcn1cbiAgICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy10aWdodCB0cnVuY2F0ZVwiPntuYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMCB0ZXh0LXhzIGxlYWRpbmctdGlnaHRcIj5SYXRpbmc6IHtyYXRpbmd9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93IGFic29sdXRlIC1sZWZ0LTEgLXRvcC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXtzeW1ib2x9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwiaC02IHctcHggYmctc2xhdGUtMjAwXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0yXCIpfS8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICBcInRleHQtbGcgZm9udC1zZW1pYm9sZCB3LVs2MHB4XVwiLFxuICAgICAgICAgIGlzUmlnaHQgJiYgXCJvcmRlci0xXCIsXG4gICAgICAgICAgZ2V0VGltZXJDb2xvcigpXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHttaW51dGVzU3RyaW5nfTp7c2Vjb25kc1N0cmluZ31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJHYW1lU3ltYm9sIiwiSW1hZ2UiLCJQbGF5ZXJJbmZvIiwiaXNSaWdodCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJpc1RpbWVyUnVubmluZyIsInNlY29uZHMiLCJtaW51dGVzU3RyaW5nIiwiU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaXNFZGdlIiwiZ2V0VGltZXJDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInVub3B0aW1pemVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/ui/player-info.jsx\n"));

/***/ })

});