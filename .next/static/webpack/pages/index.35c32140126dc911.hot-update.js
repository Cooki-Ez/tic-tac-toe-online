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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uikit/ui-button */ \"./components/game/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TURN_ORDER = [\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n];\nfunction getNextTurn(currentTurn) {\n    const nextTurnIndex = TURN_ORDER.indexOf(currentTurn) + 1;\n    var _TURN_ORDER_nextTurnIndex;\n    return (_TURN_ORDER_nextTurnIndex = TURN_ORDER[nextTurnIndex]) !== null && _TURN_ORDER_nextTurnIndex !== void 0 ? _TURN_ORDER_nextTurnIndex : TURN_ORDER[0];\n}\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>new Array(19 * 19).fill(null));\n    const [currentTurn, setCurrentTurn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO);\n    const nextTurn = getNextTurn(currentTurn);\n    const handleCellClick = (index)=>{\n        setCurrentTurn((lastCurrentTurn)=>getNextTurn(lastCurrentTurn));\n    };\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Tie\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_2__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Forfeit\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentTurn: currentTurn,\n                nextTurn: nextTurn\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(index);\n                        }\n                    }, index, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"GelGZcZZdKLW11uNmTsfpMlctPM=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions, currentTurn, nextTurn } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Turn: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: currentTurn,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Next: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                                symbol: nextTurn,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRzL2dhbWUvZ2FtZS1maWVsZC5qc3g/YzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHtVaUJ1dHRvbn0gZnJvbSBcIi4vdWlraXQvdWktYnV0dG9uXCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7R0FNRV9TWU1CT0xTfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7R2FtZVN5bWJvbH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcblxuY29uc3QgVFVSTl9PUkRFUiA9IFtcbiAgR0FNRV9TWU1CT0xTLkNST1NTLFxuICBHQU1FX1NZTUJPTFMuWkVSTyxcbiAgR0FNRV9TWU1CT0xTLlRSSUFOR0xFLFxuICBHQU1FX1NZTUJPTFMuU1FVQVJFXG5dXG5cbmZ1bmN0aW9uIGdldE5leHRUdXJuKGN1cnJlbnRUdXJuKXtcbiAgY29uc3QgbmV4dFR1cm5JbmRleCA9IFRVUk5fT1JERVIuaW5kZXhPZihjdXJyZW50VHVybikgKyAxO1xuICByZXR1cm4gVFVSTl9PUkRFUltuZXh0VHVybkluZGV4XSA/PyBUVVJOX09SREVSWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUZpZWxkKHtjbGFzc05hbWV9KSB7XG5cbiAgY29uc3QgW2NlbGxzLCBzZXRDZWxsc10gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSApO1xuICBjb25zdCBbY3VycmVudFR1cm4sIHNldEN1cnJlbnRUdXJuXSA9IHVzZVN0YXRlKEdBTUVfU1lNQk9MUy5aRVJPKTtcbiAgY29uc3QgbmV4dFR1cm4gPSBnZXROZXh0VHVybihjdXJyZW50VHVybik7XG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0Q3VycmVudFR1cm4obGFzdEN1cnJlbnRUdXJuID0+IGdldE5leHRUdXJuKGxhc3RDdXJyZW50VHVybikpO1xuICB9XG5cbiAgY29uc3QgYWN0aW9ucyA9IChcbiAgICA8PlxuICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgIFRpZVxuICAgICAgPC9VaUJ1dHRvbj5cbiAgICAgIDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICBGb3JmZWl0XG4gICAgICA8L1VpQnV0dG9uPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8R2FtZU1vdmVJbmZvIGFjdGlvbnM9e2FjdGlvbnN9IGN1cnJlbnRUdXJuPXtjdXJyZW50VHVybn0gbmV4dFR1cm49e25leHRUdXJufSAvPlxuICAgICAgPEdhbWVHcmlkPlxuICAgICAgICB7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEdhbWVDZWxsIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZUNlbGxDbGljayhpbmRleCk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L0dhbWVDZWxsPlxuICAgICAgICApKX1cbiAgICAgIDwvR2FtZUdyaWQ+XG4gICAgPC9HYW1lRmllbGRMYXlvdXQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVDZWxsKHtjaGlsZHJlbiwgb25DbGlja30pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuXG5mdW5jdGlvbiBHYW1lRmllbGRMYXlvdXQoe2NoaWxkcmVuLCBjbGFzc05hbWV9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03XCJcbiAgICAgICl9XG4gICAgPntjaGlsZHJlbn08L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHthY3Rpb25zLCBjdXJyZW50VHVybiwgbmV4dFR1cm59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2h0IGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICBUdXJuOiA8R2FtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRUdXJufSBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyB0ZXh0LXNsYXRlLTQwMFwiPlxuICAgICAgICAgIE5leHQ6IDxHYW1lU3ltYm9sIHN5bWJvbD17bmV4dFR1cm59IGNsYXNzTmFtZT1cInctMyBoLTNcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7YWN0aW9uc31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gR2FtZUdyaWQoe2NoaWxkcmVufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIGdyaWQtcm93cy1bcmVwZWF0KDE5LF8zMHB4KV0gcGwtcHggcHQtcHggbXQtM1wiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJVaUJ1dHRvbiIsInVzZVN0YXRlIiwiR0FNRV9TWU1CT0xTIiwiR2FtZVN5bWJvbCIsIlRVUk5fT1JERVIiLCJDUk9TUyIsIlpFUk8iLCJUUklBTkdMRSIsIlNRVUFSRSIsImdldE5leHRUdXJuIiwiY3VycmVudFR1cm4iLCJuZXh0VHVybkluZGV4IiwiaW5kZXhPZiIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsImNlbGxzIiwic2V0Q2VsbHMiLCJBcnJheSIsImZpbGwiLCJzZXRDdXJyZW50VHVybiIsIm5leHRUdXJuIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0Q3VycmVudFR1cm4iLCJhY3Rpb25zIiwic2l6ZSIsInZhcmlhbnQiLCJHYW1lRmllbGRMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJHYW1lR3JpZCIsIm1hcCIsInN5bWJvbCIsIkdhbWVDZWxsIiwib25DbGljayIsImNoaWxkcmVuIiwiYnV0dG9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});