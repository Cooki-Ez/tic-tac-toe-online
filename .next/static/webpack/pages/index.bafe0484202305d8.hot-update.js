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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_game_game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/game/game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _components_game_uikit_ui_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/game/uikit/ui-model */ \"./components/game/uikit/ui-model.jsx\");\n/* harmony import */ var _components_game_uikit_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/game/uikit/ui-button */ \"./components/game/uikit/ui-button.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(4);\n    const { cells, currentTurn, nextTurn, handleCellClick, winnerSequence, handlePlayerTimeOver, winnerSymbol } = (0,_components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState)(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto max-w-max\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameTitle, {\n                        playersCount: playersCount\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                        playersCount: playersCount,\n                        currentTurn: currentTurn,\n                        isWinner: !!winnerSymbol,\n                        onPlayerTimeOver: handlePlayerTimeOver,\n                        className: \"mt-4\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    winnerSymbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: winnerSymbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_uikit_ui_model__WEBPACK_IMPORTED_MODULE_5__.UiModel, {\n                        isOpen: winnerSymbol,\n                        onClose: ()=>console.log(\"Closed\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_uikit_ui_model__WEBPACK_IMPORTED_MODULE_5__.UiModel.Header, {\n                                children: \"Game over!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_uikit_ui_model__WEBPACK_IMPORTED_MODULE_5__.UiModel.Body, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm\",\n                                    children: [\n                                        \"Winner: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-teal-600\",\n                                            children: \"RUINER1337\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 23\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_uikit_ui_model__WEBPACK_IMPORTED_MODULE_5__.UiModel.Footer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_uikit_ui_button__WEBPACK_IMPORTED_MODULE_6__.UiButton, {\n                                        size: \"md\",\n                                        variant: \"outline\",\n                                        children: \"Go back\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_uikit_ui_button__WEBPACK_IMPORTED_MODULE_6__.UiButton, {\n                                        size: \"md\",\n                                        variant: \"primary\",\n                                        children: \"Play again\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__.GameField, {\n                        playersCount: playersCount,\n                        cells: cells,\n                        currentTurn: currentTurn,\n                        nextTurn: nextTurn,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence,\n                        winnerSymbol: winnerSymbol,\n                        className: \"mt-6\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\pages\\\\index.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"O7RleBhQYz6J3OjmPL/P8+Kz+jQ=\", false, function() {\n    return [\n        _components_game__WEBPACK_IMPORTED_MODULE_2__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ29DO0FBQ2pEO0FBQzJCO0FBQ0E7QUFDRTtBQUU3QyxTQUFTUzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU0sRUFDSk0sS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsZUFBZSxFQUNmQyxjQUFjLEVBQ2RDLG9CQUFvQixFQUNwQkMsWUFBWSxFQUNiLEdBQUdiLDhEQUFZQSxDQUFDTTtJQUVqQixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNuQixzREFBTUE7Ozs7OzBCQUNQLDhEQUFDb0I7Z0JBQUtELFdBQVU7O2tDQUNkLDhEQUFDaEIsdURBQVNBO3dCQUFDTyxjQUFjQTs7Ozs7O2tDQUN6Qiw4REFBQ1Isc0RBQVFBO3dCQUFDUSxjQUFjQTt3QkFDZEUsYUFBYUE7d0JBQ2JTLFVBQVUsQ0FBQyxDQUFDSjt3QkFDWkssa0JBQWtCTjt3QkFDbEJHLFdBQVU7Ozs7OztvQkFFbkJGLDhCQUNDLDhEQUFDQzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2Isb0VBQVVBOzRCQUFDaUIsUUFBUU47Ozs7Ozs7Ozs7O2tDQUd4Qiw4REFBQ1Ysb0VBQU9BO3dCQUFDaUIsUUFBUVA7d0JBQWNRLFNBQVMsSUFBTUMsUUFBUUMsR0FBRyxDQUFDOzswQ0FDeEQsOERBQUNwQixvRUFBT0EsQ0FBQ1AsTUFBTTswQ0FBQzs7Ozs7OzBDQUNoQiw4REFBQ08sb0VBQU9BLENBQUNxQixJQUFJOzBDQUNYLDRFQUFDVjtvQ0FBSUMsV0FBVTs7d0NBQVU7c0RBQ2YsOERBQUNVOzRDQUFLVixXQUFVO3NEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRzVDLDhEQUFDWixvRUFBT0EsQ0FBQ3VCLE1BQU07O2tEQUNiLDhEQUFDdEIsc0VBQVFBO3dDQUFDdUIsTUFBSzt3Q0FBS0MsU0FBUTtrREFBVTs7Ozs7O2tEQUd0Qyw4REFBQ3hCLHNFQUFRQTt3Q0FBQ3VCLE1BQUs7d0NBQUtDLFNBQVE7a0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLMUMsOERBQUMvQix1REFBU0E7d0JBQUNTLGNBQWNBO3dCQUNkQyxPQUFPQTt3QkFDUEMsYUFBYUE7d0JBQ2JDLFVBQVVBO3dCQUNWQyxpQkFBaUJBO3dCQUNqQkMsZ0JBQWdCQTt3QkFDaEJFLGNBQWNBO3dCQUNkRSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0I7R0F4RHdCVjs7UUFVbEJMLDBEQUFZQTs7O0tBVk1LIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SGVhZGVyfSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCB7R2FtZUZpZWxkLCBHYW1lSW5mbywgR2FtZVRpdGxlLCB1c2VHYW1lU3RhdGV9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWVcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtHYW1lU3ltYm9sfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nYW1lL2dhbWUtc3ltYm9sXCI7XG5pbXBvcnQge1VpTW9kZWx9IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWUvdWlraXQvdWktbW9kZWxcIjtcbmltcG9ydCB7VWlCdXR0b259IGZyb20gXCIuLi9jb21wb25lbnRzL2dhbWUvdWlraXQvdWktYnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbcGxheWVyc0NvdW50XSA9IHVzZVN0YXRlKDQpO1xuICBjb25zdCB7XG4gICAgY2VsbHMsXG4gICAgY3VycmVudFR1cm4sXG4gICAgbmV4dFR1cm4sXG4gICAgaGFuZGxlQ2VsbENsaWNrLFxuICAgIHdpbm5lclNlcXVlbmNlLFxuICAgIGhhbmRsZVBsYXllclRpbWVPdmVyLFxuICAgIHdpbm5lclN5bWJvbCxcbiAgfSA9IHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS01MCBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHQtNiBteC1hdXRvIG1heC13LW1heFwiPlxuICAgICAgICA8R2FtZVRpdGxlIHBsYXllcnNDb3VudD17cGxheWVyc0NvdW50fS8+XG4gICAgICAgIDxHYW1lSW5mbyBwbGF5ZXJzQ291bnQ9e3BsYXllcnNDb3VudH1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRUdXJuPXtjdXJyZW50VHVybn1cbiAgICAgICAgICAgICAgICAgIGlzV2lubmVyPXshIXdpbm5lclN5bWJvbH1cbiAgICAgICAgICAgICAgICAgIG9uUGxheWVyVGltZU92ZXI9e2hhbmRsZVBsYXllclRpbWVPdmVyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNFwiXG4gICAgICAgIC8+XG4gICAgICAgIHt3aW5uZXJTeW1ib2wgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNFwiPlxuICAgICAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXt3aW5uZXJTeW1ib2x9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPFVpTW9kZWwgaXNPcGVuPXt3aW5uZXJTeW1ib2x9IG9uQ2xvc2U9eygpID0+IGNvbnNvbGUubG9nKFwiQ2xvc2VkXCIpfT5cbiAgICAgICAgICA8VWlNb2RlbC5IZWFkZXI+R2FtZSBvdmVyITwvVWlNb2RlbC5IZWFkZXI+XG4gICAgICAgICAgPFVpTW9kZWwuQm9keT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICBXaW5uZXI6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGVhbC02MDBcIj5SVUlORVIxMzM3PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9VaU1vZGVsLkJvZHk+XG4gICAgICAgICAgPFVpTW9kZWwuRm9vdGVyPlxuICAgICAgICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIEdvIGJhY2tcbiAgICAgICAgICAgIDwvVWlCdXR0b24+XG4gICAgICAgICAgICA8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgUGxheSBhZ2FpblxuICAgICAgICAgICAgPC9VaUJ1dHRvbj5cbiAgICAgICAgICA8L1VpTW9kZWwuRm9vdGVyPlxuICAgICAgICA8L1VpTW9kZWw+XG4gICAgICAgIDxHYW1lRmllbGQgcGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9XG4gICAgICAgICAgICAgICAgICAgY2VsbHM9e2NlbGxzfVxuICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUdXJuPXtjdXJyZW50VHVybn1cbiAgICAgICAgICAgICAgICAgICBuZXh0VHVybj17bmV4dFR1cm59XG4gICAgICAgICAgICAgICAgICAgaGFuZGxlQ2VsbENsaWNrPXtoYW5kbGVDZWxsQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgd2lubmVyU2VxdWVuY2U9e3dpbm5lclNlcXVlbmNlfVxuICAgICAgICAgICAgICAgICAgIHdpbm5lclN5bWJvbD17d2lubmVyU3ltYm9sfVxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTZcIlxuICAgICAgICAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkdhbWVGaWVsZCIsIkdhbWVJbmZvIiwiR2FtZVRpdGxlIiwidXNlR2FtZVN0YXRlIiwidXNlU3RhdGUiLCJHYW1lU3ltYm9sIiwiVWlNb2RlbCIsIlVpQnV0dG9uIiwiSG9tZVBhZ2UiLCJwbGF5ZXJzQ291bnQiLCJjZWxscyIsImN1cnJlbnRUdXJuIiwibmV4dFR1cm4iLCJoYW5kbGVDZWxsQ2xpY2siLCJ3aW5uZXJTZXF1ZW5jZSIsImhhbmRsZVBsYXllclRpbWVPdmVyIiwid2lubmVyU3ltYm9sIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImlzV2lubmVyIiwib25QbGF5ZXJUaW1lT3ZlciIsInN5bWJvbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJjb25zb2xlIiwibG9nIiwiQm9keSIsInNwYW4iLCJGb290ZXIiLCJzaXplIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});