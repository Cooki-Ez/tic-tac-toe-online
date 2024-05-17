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

/***/ "./components/game/game-field.jsx":
/*!****************************************!*\
  !*** ./components/game/game-field.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uikit/ui-button */ \"./components/game/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TURN_ORDER = [\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n];\nfunction getNextTurn(currentTurn) {\n    const nextTurnIndex = TURN_ORDER.indexOf(currentTurn) + 1;\n    var _TURN_ORDER_nextTurnIndex;\n    return (_TURN_ORDER_nextTurnIndex = TURN_ORDER[nextTurnIndex]) !== null && _TURN_ORDER_nextTurnIndex !== void 0 ? _TURN_ORDER_nextTurnIndex : TURN_ORDER[0];\n}\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    const [{ cells, currentTurn }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentTurn: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n        }));\n    const nextTurn = getNextTurn(currentTurn);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentTurn: getNextTurn(lastGameState.currentTurn),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentTurn : cell)\n            }));\n    };\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Tie\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Forfeit\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentTurn: currentTurn,\n                nextTurn: nextTurn\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(index);\n                        },\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 24\n                        }, this)\n                    }, index, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"bFVmIJ/Xiuhczhitfz4NVG0+qQ4=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentTurn, nextTurn } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Turn: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: currentTurn,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Next: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: nextTurn,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQUM2QixRQUFRYjtnQ0FBVUwsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR2pEWTs7Ozs7OztBQUdQO01BZFNJO0FBZ0JULFNBQVNDLFNBQVMsS0FBVTtRQUFWLEVBQUNJLFFBQVEsRUFBQyxHQUFWO0lBQ2hCLHFCQUNFLDhEQUFDRTtRQUFJdkIsV0FBVTtrQkFDWnFCOzs7Ozs7QUFHUDtNQU5TSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3g/YzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHtVaUJ1dHRvbn0gZnJvbSBcIi4vdWlraXQvdWktYnV0dG9uXCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7R0FNRV9TWU1CT0xTfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7R2FtZVN5bWJvbH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcblxuY29uc3QgVFVSTl9PUkRFUiA9IFtcbiAgR0FNRV9TWU1CT0xTLkNST1NTLFxuICBHQU1FX1NZTUJPTFMuWkVSTyxcbiAgR0FNRV9TWU1CT0xTLlRSSUFOR0xFLFxuICBHQU1FX1NZTUJPTFMuU1FVQVJFXG5dXG5cbmZ1bmN0aW9uIGdldE5leHRUdXJuKGN1cnJlbnRUdXJuKSB7XG4gIGNvbnN0IG5leHRUdXJuSW5kZXggPSBUVVJOX09SREVSLmluZGV4T2YoY3VycmVudFR1cm4pICsgMTtcbiAgcmV0dXJuIFRVUk5fT1JERVJbbmV4dFR1cm5JbmRleF0gPz8gVFVSTl9PUkRFUlswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7Y2xhc3NOYW1lfSkge1xuICBjb25zdCBbe2NlbGxzLCBjdXJyZW50VHVybn0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xuICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgICBjdXJyZW50VHVybjogR0FNRV9TWU1CT0xTLkNST1NTXG4gIH0pKTtcblxuICBjb25zdCBuZXh0VHVybiA9IGdldE5leHRUdXJuKGN1cnJlbnRUdXJuKTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+ICh7XG4gICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgY3VycmVudFR1cm46IGdldE5leHRUdXJuKGxhc3RHYW1lU3RhdGUuY3VycmVudFR1cm4pLFxuICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxuICAgICAgICBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudFR1cm4gOiBjZWxsXG4gICAgICApLFxuICAgIH0pKTtcbiAgfVxuXG4gIGNvbnN0IGFjdGlvbnMgPSAoXG4gICAgPD5cbiAgICAgIDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICBUaWVcbiAgICAgIDwvVWlCdXR0b24+XG4gICAgICA8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgRm9yZmVpdFxuICAgICAgPC9VaUJ1dHRvbj5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxHYW1lRmllbGRMYXlvdXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPEdhbWVNb3ZlSW5mbyBhY3Rpb25zPXthY3Rpb25zfSBjdXJyZW50VHVybj17Y3VycmVudFR1cm59IG5leHRUdXJuPXtuZXh0VHVybn0vPlxuICAgICAgPEdhbWVHcmlkPlxuICAgICAgICB7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEdhbWVDZWxsIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZUNlbGxDbGljayhpbmRleCk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICB7c3ltYm9sICYmIDxHYW1lU3ltYm9sIHN5bWJvbD17c3ltYm9sfSBjbGFzc05hbWU9XCJ3LTUgaC01XCIvPn1cbiAgICAgICAgICA8L0dhbWVDZWxsPlxuICAgICAgICApKX1cbiAgICAgIDwvR2FtZUdyaWQ+XG4gICAgPC9HYW1lRmllbGRMYXlvdXQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVDZWxsKHtjaGlsZHJlbiwgb25DbGlja30pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuXG5mdW5jdGlvbiBHYW1lRmllbGRMYXlvdXQoe2NoaWxkcmVuLCBjbGFzc05hbWV9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03XCJcbiAgICAgICl9XG4gICAgPntjaGlsZHJlbn08L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHthY3Rpb25zLCBjdXJyZW50VHVybiwgbmV4dFR1cm59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2h0IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBUdXJuOiA8R2FtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRUdXJufSBjbGFzc05hbWU9XCJ3LTUgaC01XCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgTmV4dDogPEdhbWVTeW1ib2wgc3ltYm9sPXtuZXh0VHVybn0gY2xhc3NOYW1lPVwidy0zIGgtM1wiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthY3Rpb25zfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBHYW1lR3JpZCh7Y2hpbGRyZW59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXSBwbC1weCBwdC1weCBtdC0zXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY2xzeCIsIlVpQnV0dG9uIiwidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiVFVSTl9PUkRFUiIsIkNST1NTIiwiWkVSTyIsIlRSSUFOR0xFIiwiU1FVQVJFIiwiZ2V0TmV4dFR1cm4iLCJjdXJyZW50VHVybiIsIm5leHRUdXJuSW5kZXgiLCJpbmRleE9mIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiY2VsbHMiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJuZXh0VHVybiIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiLCJpIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiR2FtZUdyaWQiLCJzeW1ib2wiLCJHYW1lQ2VsbCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImJ1dHRvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});