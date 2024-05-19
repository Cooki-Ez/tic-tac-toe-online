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

/***/ "./components/game/game-info.jsx":
/*!***************************************!*\
  !*** ./components/game/game-info.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _images_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/avatar-1.jpg */ \"./components/game/images/avatar-1.jpg\");\n/* harmony import */ var _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar-2.png */ \"./components/game/images/avatar-2.png\");\n/* harmony import */ var _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar-3.png */ \"./components/game/images/avatar-3.png\");\n/* harmony import */ var _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar-4.png */ \"./components/game/images/avatar-4.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"RUINER333\",\n        rating: \"1337\",\n        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {\n            src: _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            alt: \"avatar1\",\n            w: \"44\",\n            unoptimized: true\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined),\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"Alesha222\",\n        rating: \"228\",\n        avatar: _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"VanyaPubertat\",\n        rating: \"322\",\n        avatar: _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"VOVAN\",\n        rating: \"1230\",\n        avatar: _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3\"),\n        children: players.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player\n            }, player.id, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-6 w-px bg-slate-200\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-slate-900 text-lg font-semibold\",\n                children: \"1:08\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNXO0FBQ007QUFDQTtBQUVNO0FBQ0E7QUFDQTtBQUNBO0FBQ2hCO0FBRS9CLE1BQU1TLFVBQVU7SUFDZDtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxzQkFBUSw4REFBQ0wsbURBQUtBO1lBQUNNLEtBQUtULDREQUFVQTtZQUFFVSxLQUFJO1lBQVVDLEdBQUU7WUFBS0MsV0FBVzs7Ozs7O1FBQ2hFQyxRQUFRZixvREFBWUEsQ0FBQ2dCLEtBQUs7SUFDNUI7SUFDQTtRQUNFVCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRUiw0REFBVUE7UUFDbEJhLFFBQVFmLG9EQUFZQSxDQUFDaUIsSUFBSTtJQUMzQjtJQUNBO1FBQ0VWLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFQLDREQUFVQTtRQUNsQlksUUFBUWYsb0RBQVlBLENBQUNrQixRQUFRO0lBQy9CO0lBQ0E7UUFDRVgsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUU4sNERBQVVBO1FBQ2xCVyxRQUFRZixvREFBWUEsQ0FBQ21CLE1BQU07SUFDN0I7Q0FDRDtBQUVNLFNBQVNDLFNBQVMsS0FBVztRQUFYLEVBQUNDLFNBQVMsRUFBQyxHQUFYO0lBQ3ZCLHFCQUNFLDhEQUFDQztRQUNDRCxXQUFXeEIsZ0RBQUlBLENBQ2J3QixXQUNBO2tCQUdEZixRQUFRaUIsR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDQztnQkFBMkJDLFlBQVlGO2VBQXZCQSxPQUFPakIsRUFBRTs7Ozs7Ozs7OztBQUtsQztLQWRnQmE7QUFpQmhCLFNBQVNLLFdBQVcsS0FBWTtRQUFaLEVBQUNDLFVBQVUsRUFBQyxHQUFaO0lBQ2xCLHFCQUNFLDhEQUFDSjtRQUFJRCxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDdkIsNkNBQU9BO3dCQUNOdUIsV0FBVTt3QkFDVmIsTUFBTWtCLFdBQVdsQixJQUFJO3dCQUNyQkMsUUFBUWlCLFdBQVdqQixNQUFNO3dCQUN6QkMsUUFBUWdCLFdBQVdoQixNQUFNOzs7Ozs7a0NBRTNCLDhEQUFDWTt3QkFDQ0QsV0FBVTtrQ0FDViw0RUFBQ3RCLG9EQUFVQTs0QkFBQ2dCLFFBQVFXLFdBQVdYLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6Qyw4REFBQ087Z0JBQUlELFdBQVU7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQXVDOzs7Ozs7Ozs7Ozs7QUFHNUQ7TUFuQlNJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWluZm8uanN4P2QwNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7UHJvZmlsZX0gZnJvbSBcIi4uL3Byb2ZpbGVcIjtcbmltcG9ydCB7R2FtZVN5bWJvbH0gZnJvbSBcIi4vZ2FtZS1zeW1ib2xcIjtcbmltcG9ydCB7R0FNRV9TWU1CT0xTfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IGF2YXRhclNyYzEgZnJvbSBcIi4vaW1hZ2VzL2F2YXRhci0xLmpwZ1wiO1xuaW1wb3J0IGF2YXRhclNyYzIgZnJvbSBcIi4vaW1hZ2VzL2F2YXRhci0yLnBuZ1wiO1xuaW1wb3J0IGF2YXRhclNyYzMgZnJvbSBcIi4vaW1hZ2VzL2F2YXRhci0zLnBuZ1wiO1xuaW1wb3J0IGF2YXRhclNyYzQgZnJvbSBcIi4vaW1hZ2VzL2F2YXRhci00LnBuZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IHBsYXllcnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIlJVSU5FUjMzM1wiLFxuICAgIHJhdGluZzogXCIxMzM3XCIsXG4gICAgYXZhdGFyOiA8SW1hZ2Ugc3JjPXthdmF0YXJTcmMyfSBhbHQ9XCJhdmF0YXIxXCIgdz1cIjQ0XCIgdW5vcHRpbWl6ZWQgLz4sXG4gICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkFsZXNoYTIyMlwiLFxuICAgIHJhdGluZzogXCIyMjhcIixcbiAgICBhdmF0YXI6IGF2YXRhclNyYzIsXG4gICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuWkVSTyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwiVmFueWFQdWJlcnRhdFwiLFxuICAgIHJhdGluZzogXCIzMjJcIixcbiAgICBhdmF0YXI6IGF2YXRhclNyYzMsXG4gICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuVFJJQU5HTEUsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcIlZPVkFOXCIsXG4gICAgcmF0aW5nOiBcIjEyMzBcIixcbiAgICBhdmF0YXI6IGF2YXRhclNyYzQsXG4gICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuU1FVQVJFLFxuICB9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUluZm8oe2NsYXNzTmFtZX0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgXCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBweS00IGp1c3RpZnktYmV0d2VlbiBncmlkIGdyaWQtY29scy0yIGdhcC0zXCJcbiAgICAgICl9XG4gICAgPlxuICAgICAge3BsYXllcnMubWFwKChwbGF5ZXIpID0+IChcbiAgICAgICAgPFBsYXllckluZm8ga2V5PXtwbGF5ZXIuaWR9IHBsYXllckluZm89e3BsYXllcn0gLz5cbiAgICAgICkpfVxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuZnVuY3Rpb24gUGxheWVySW5mbyh7cGxheWVySW5mb30pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxQcm9maWxlXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy00NFwiXG4gICAgICAgICAgbmFtZT17cGxheWVySW5mby5uYW1lfVxuICAgICAgICAgIHJhdGluZz17cGxheWVySW5mby5yYXRpbmd9XG4gICAgICAgICAgYXZhdGFyPXtwbGF5ZXJJbmZvLmF2YXRhcn1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdyBhYnNvbHV0ZSAtbGVmdC0xIC10b3AtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxHYW1lU3ltYm9sIHN5bWJvbD17cGxheWVySW5mby5zeW1ib2x9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02IHctcHggYmctc2xhdGUtMjAwXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtOTAwIHRleHQtbGcgZm9udC1zZW1pYm9sZFwiPjE6MDg8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwiUHJvZmlsZSIsIkdhbWVTeW1ib2wiLCJHQU1FX1NZTUJPTFMiLCJhdmF0YXJTcmMxIiwiYXZhdGFyU3JjMiIsImF2YXRhclNyYzMiLCJhdmF0YXJTcmM0IiwiSW1hZ2UiLCJwbGF5ZXJzIiwiaWQiLCJuYW1lIiwicmF0aW5nIiwiYXZhdGFyIiwic3JjIiwiYWx0IiwidyIsInVub3B0aW1pemVkIiwic3ltYm9sIiwiQ1JPU1MiLCJaRVJPIiwiVFJJQU5HTEUiLCJTUVVBUkUiLCJHYW1lSW5mbyIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsInBsYXllciIsIlBsYXllckluZm8iLCJwbGF5ZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});