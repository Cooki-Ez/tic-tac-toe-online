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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uikit/ui-button */ \"./components/game/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    const [cells, setCells] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(()=>new Array(19 * 19).fill(null));\n    const [currentTurn, setCurrentTurn] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n            lineNumber: 10,\n            columnNumber: 62\n        }, this));\n    setTurn = function() {};\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Draw\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Forfeit\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, index, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(GameField, \"vAoBBFHrftE2Kq7MPQNa7uy9rkQ=\");\n_c = GameField;\nfunction GameCell(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_c1 = GameCell;\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_c2 = GameFieldLayout;\nfunction GameMoveInfo(param) {\n    let { actions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight font-semibold\",\n                        children: [\n                            \"Turn: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs text-slate-400\",\n                        children: [\n                            \"Next: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {\n                                className: \"w-2 h-2\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_c3 = GameMoveInfo;\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDbUI7QUFDRTtBQUNGO0FBQ2pCO0FBRW5CLFNBQVNLLFVBQVUsS0FBVztRQUFYLEVBQUNDLFNBQVMsRUFBQyxHQUFYOztJQUV4QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0oscURBQWMsQ0FBQyxJQUFLLElBQUlNLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7SUFDdEUsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdULHFEQUFjLENBQUMsa0JBQU0sOERBQUNILHNEQUFRQTs7Ozs7SUFFcEVhLFVBQVUsWUFFVjtJQUVBLE1BQU1DLHdCQUNKOzswQkFDRSw4REFBQ1osc0RBQVFBO2dCQUFDYSxNQUFLO2dCQUFLQyxTQUFROzBCQUFVOzs7Ozs7MEJBR3RDLDhEQUFDZCxzREFBUUE7Z0JBQUNhLE1BQUs7Z0JBQUtDLFNBQVE7MEJBQVU7Ozs7Ozs7O0lBTTFDLHFCQUNFLDhEQUFDQztRQUFnQlosV0FBV0E7OzBCQUMxQiw4REFBQ2E7Z0JBQWFKLFNBQVNBOzs7Ozs7MEJBQ3ZCLDhEQUFDSzswQkFDRWIsTUFBTWMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLHNCQUNiLDhEQUFDQyxjQUFjRDs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQTlCZ0JsQjtLQUFBQTtBQWdDaEIsU0FBU21CLFNBQVMsS0FBVTtRQUFWLEVBQUNDLFFBQVEsRUFBQyxHQUFWO0lBQ2hCLHFCQUNFLDhEQUFDQztRQUFPcEIsV0FBVTtrQkFDZm1COzs7Ozs7QUFHUDtNQU5TRDtBQVNULFNBQVNOLGdCQUFnQixLQUFxQjtRQUFyQixFQUFDTyxRQUFRLEVBQUVuQixTQUFTLEVBQUMsR0FBckI7SUFDdkIscUJBQ0UsOERBQUNxQjtRQUNDckIsV0FBV04sZ0RBQUlBLENBQ2JNLFdBQ0E7a0JBRUZtQjs7Ozs7O0FBRU47TUFUU1A7QUFXVCxTQUFTQyxhQUFhLEtBQVM7UUFBVCxFQUFDSixPQUFPLEVBQUMsR0FBVDtJQUNwQixxQkFDRSw4REFBQ1k7UUFBSXJCLFdBQVU7OzBCQUNiLDhEQUFDcUI7Z0JBQUlyQixXQUFVOztrQ0FDYiw4REFBQ3FCO3dCQUFJckIsV0FBVTs7NEJBQThEOzBDQUNyRSw4REFBQ0wsc0RBQVFBO2dDQUFDSyxXQUFVOzs7Ozs7Ozs7Ozs7a0NBRTVCLDhEQUFDcUI7d0JBQUlyQixXQUFVOzs0QkFBaUQ7MENBQ3hELDhEQUFDSix3REFBU0E7Z0NBQUNJLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUc5QlM7Ozs7Ozs7QUFHUDtNQWRTSTtBQWdCVCxTQUFTQyxTQUFTLEtBQVU7UUFBVixFQUFDSyxRQUFRLEVBQUMsR0FBVjtJQUNoQixxQkFDRSw4REFBQ0U7UUFBSXJCLFdBQVU7a0JBQ1ptQjs7Ozs7O0FBR1A7TUFOU0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7WmVyb0ljb259IGZyb20gXCIuL2ljb25zL3plcm8taWNvblwiO1xuaW1wb3J0IHtDcm9zc0ljb259IGZyb20gXCIuL2ljb25zL2Nyb3NzLWljb25cIjtcbmltcG9ydCB7VWlCdXR0b259IGZyb20gXCIuL3Vpa2l0L3VpLWJ1dHRvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUZpZWxkKHtjbGFzc05hbWV9KSB7XG5cbiAgY29uc3QgW2NlbGxzLCBzZXRDZWxsc10gPSBSZWFjdC51c2VTdGF0ZSgoKSA9Pm5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpICk7XG4gIGNvbnN0IFtjdXJyZW50VHVybiwgc2V0Q3VycmVudFR1cm5dID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gPFplcm9JY29uIC8+KTtcblxuICBzZXRUdXJuID0gZnVuY3Rpb24gKCl7XG5cbiAgfVxuXG4gIGNvbnN0IGFjdGlvbnMgPSAoXG4gICAgPD5cbiAgICAgIDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICBEcmF3XG4gICAgICA8L1VpQnV0dG9uPlxuICAgICAgPFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgIEZvcmZlaXRcbiAgICAgIDwvVWlCdXR0b24+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxHYW1lTW92ZUluZm8gYWN0aW9ucz17YWN0aW9uc30gLz5cbiAgICAgIDxHYW1lR3JpZD5cbiAgICAgICAge2NlbGxzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICA8R2FtZUNlbGwga2V5PXtpbmRleH0+PC9HYW1lQ2VsbD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dhbWVHcmlkPlxuICAgIDwvR2FtZUZpZWxkTGF5b3V0PlxuICApO1xufVxuXG5mdW5jdGlvbiBHYW1lQ2VsbCh7Y2hpbGRyZW59KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCAtbWwtcHggLW10LXB4IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cblxuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHtjaGlsZHJlbiwgY2xhc3NOYW1lfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItN1wiXG4gICAgICApfVxuICAgID57Y2hpbGRyZW59PC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7YWN0aW9uc30pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHQgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIFR1cm46IDxaZXJvSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgTmV4dDogPENyb3NzSWNvbiBjbGFzc05hbWU9XCJ3LTIgaC0yXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2FjdGlvbnN9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEdhbWVHcmlkKHtjaGlsZHJlbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMTksXzMwcHgpXSBncmlkLXJvd3MtW3JlcGVhdCgxOSxfMzBweCldIHBsLXB4IHB0LXB4IG10LTNcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwiWmVyb0ljb24iLCJDcm9zc0ljb24iLCJVaUJ1dHRvbiIsIlJlYWN0IiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiY2VsbHMiLCJzZXRDZWxscyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiY3VycmVudFR1cm4iLCJzZXRDdXJyZW50VHVybiIsInNldFR1cm4iLCJhY3Rpb25zIiwic2l6ZSIsInZhcmlhbnQiLCJHYW1lRmllbGRMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJHYW1lR3JpZCIsIm1hcCIsIl8iLCJpbmRleCIsIkdhbWVDZWxsIiwiY2hpbGRyZW4iLCJidXR0b24iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});