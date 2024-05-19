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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _images_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/avatar-1.jpg */ \"./components/game/images/avatar-1.jpg\");\n/* harmony import */ var _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar-2.png */ \"./components/game/images/avatar-2.png\");\n/* harmony import */ var _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar-3.png */ \"./components/game/images/avatar-3.png\");\n/* harmony import */ var _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar-4.png */ \"./components/game/images/avatar-4.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"RUINER333\",\n        rating: \"1337\",\n        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {\n            src: _images_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            alt: \"avatar1\",\n            className: \"w-12\",\n            unoptimized: true\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined),\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"Alesha222\",\n        rating: \"228\",\n        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {\n            src: _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            alt: \"avatar2\",\n            className: \"w-12\",\n            unoptimized: true\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, undefined),\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"VanyaPubertat\",\n        rating: \"322\",\n        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {\n            src: _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            alt: \"avatar3\",\n            className: \"w-12\",\n            unoptimized: true\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, undefined),\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"VOVAN\",\n        rating: \"1230\",\n        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {\n            src: _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            alt: \"avatar4\",\n            className: \"w-12\",\n            unoptimized: true\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, undefined),\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3\"),\n        children: players.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player\n            }, player.id, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-6 w-px bg-slate-200\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-slate-900 text-lg font-semibold\",\n                children: \"1:08\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNXO0FBQ007QUFDQTtBQUVNO0FBQ0E7QUFDQTtBQUNBO0FBQ2hCO0FBRS9CLE1BQU1TLFVBQVU7SUFDZDtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxzQkFBUSw4REFBQ0wsbURBQUtBO1lBQUNNLEtBQUtWLDREQUFVQTtZQUFFVyxLQUFJO1lBQVVDLFdBQVU7WUFBT0MsV0FBVzs7Ozs7O1FBQzFFQyxRQUFRZixvREFBWUEsQ0FBQ2dCLEtBQUs7SUFDNUI7SUFDQTtRQUNFVCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxzQkFBUSw4REFBQ0wsbURBQUtBO1lBQUNNLEtBQUtULDREQUFVQTtZQUFFVSxLQUFJO1lBQVVDLFdBQVU7WUFBT0MsV0FBVzs7Ozs7O1FBQzFFQyxRQUFRZixvREFBWUEsQ0FBQ2lCLElBQUk7SUFDM0I7SUFDQTtRQUNFVixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxzQkFBUSw4REFBQ0wsbURBQUtBO1lBQUNNLEtBQUtSLDREQUFVQTtZQUFFUyxLQUFJO1lBQVVDLFdBQVU7WUFBT0MsV0FBVzs7Ozs7O1FBQzFFQyxRQUFRZixvREFBWUEsQ0FBQ2tCLFFBQVE7SUFDL0I7SUFDQTtRQUNFWCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxzQkFBUSw4REFBQ0wsbURBQUtBO1lBQUNNLEtBQUtQLDREQUFVQTtZQUFFUSxLQUFJO1lBQVVDLFdBQVU7WUFBT0MsV0FBVzs7Ozs7O1FBQzFFQyxRQUFRZixvREFBWUEsQ0FBQ21CLE1BQU07SUFDN0I7Q0FDRDtBQUVNLFNBQVNDLFNBQVMsS0FBVztRQUFYLEVBQUNQLFNBQVMsRUFBQyxHQUFYO0lBQ3ZCLHFCQUNFLDhEQUFDUTtRQUNDUixXQUFXaEIsZ0RBQUlBLENBQ2JnQixXQUNBO2tCQUdEUCxRQUFRZ0IsR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDQztnQkFBMkJDLFlBQVlGO2VBQXZCQSxPQUFPaEIsRUFBRTs7Ozs7Ozs7OztBQUtsQztLQWRnQmE7QUFpQmhCLFNBQVNJLFdBQVcsS0FBWTtRQUFaLEVBQUNDLFVBQVUsRUFBQyxHQUFaO0lBQ2xCLHFCQUNFLDhEQUFDSjtRQUFJUixXQUFVOzswQkFDYiw4REFBQ1E7Z0JBQUlSLFdBQVU7O2tDQUNiLDhEQUFDZiw2Q0FBT0E7d0JBQ05lLFdBQVU7d0JBQ1ZMLE1BQU1pQixXQUFXakIsSUFBSTt3QkFDckJDLFFBQVFnQixXQUFXaEIsTUFBTTt3QkFDekJDLFFBQVFlLFdBQVdmLE1BQU07Ozs7OztrQ0FFM0IsOERBQUNXO3dCQUNDUixXQUFVO2tDQUNWLDRFQUFDZCxvREFBVUE7NEJBQUNnQixRQUFRVSxXQUFXVixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHekMsOERBQUNNO2dCQUFJUixXQUFVOzs7Ozs7MEJBQ2YsOERBQUNRO2dCQUFJUixXQUFVOzBCQUF1Qzs7Ozs7Ozs7Ozs7O0FBRzVEO01BbkJTVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeD9kMDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQge1Byb2ZpbGV9IGZyb20gXCIuLi9wcm9maWxlXCI7XG5pbXBvcnQge0dhbWVTeW1ib2x9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XG5pbXBvcnQge0dBTUVfU1lNQk9MU30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmltcG9ydCBhdmF0YXJTcmMxIGZyb20gXCIuL2ltYWdlcy9hdmF0YXItMS5qcGdcIjtcbmltcG9ydCBhdmF0YXJTcmMyIGZyb20gXCIuL2ltYWdlcy9hdmF0YXItMi5wbmdcIjtcbmltcG9ydCBhdmF0YXJTcmMzIGZyb20gXCIuL2ltYWdlcy9hdmF0YXItMy5wbmdcIjtcbmltcG9ydCBhdmF0YXJTcmM0IGZyb20gXCIuL2ltYWdlcy9hdmF0YXItNC5wbmdcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBwbGF5ZXJzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJSVUlORVIzMzNcIixcbiAgICByYXRpbmc6IFwiMTMzN1wiLFxuICAgIGF2YXRhcjogPEltYWdlIHNyYz17YXZhdGFyU3JjMX0gYWx0PVwiYXZhdGFyMVwiIGNsYXNzTmFtZT1cInctMTJcIiB1bm9wdGltaXplZCAvPixcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5DUk9TUyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiQWxlc2hhMjIyXCIsXG4gICAgcmF0aW5nOiBcIjIyOFwiLFxuICAgIGF2YXRhcjogPEltYWdlIHNyYz17YXZhdGFyU3JjMn0gYWx0PVwiYXZhdGFyMlwiIGNsYXNzTmFtZT1cInctMTJcIiB1bm9wdGltaXplZCAvPixcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5aRVJPLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCJWYW55YVB1YmVydGF0XCIsXG4gICAgcmF0aW5nOiBcIjMyMlwiLFxuICAgIGF2YXRhcjogPEltYWdlIHNyYz17YXZhdGFyU3JjM30gYWx0PVwiYXZhdGFyM1wiIGNsYXNzTmFtZT1cInctMTJcIiB1bm9wdGltaXplZCAvPixcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5UUklBTkdMRSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwiVk9WQU5cIixcbiAgICByYXRpbmc6IFwiMTIzMFwiLFxuICAgIGF2YXRhcjogPEltYWdlIHNyYz17YXZhdGFyU3JjNH0gYWx0PVwiYXZhdGFyNFwiIGNsYXNzTmFtZT1cInctMTJcIiB1bm9wdGltaXplZCAvPixcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5TUVVBUkUsXG4gIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lSW5mbyh7Y2xhc3NOYW1lfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB5LTQganVzdGlmeS1iZXR3ZWVuIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIlxuICAgICAgKX1cbiAgICA+XG4gICAgICB7cGxheWVycy5tYXAoKHBsYXllcikgPT4gKFxuICAgICAgICA8UGxheWVySW5mbyBrZXk9e3BsYXllci5pZH0gcGxheWVySW5mbz17cGxheWVyfSAvPlxuICAgICAgKSl9XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5mdW5jdGlvbiBQbGF5ZXJJbmZvKHtwbGF5ZXJJbmZvfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPFByb2ZpbGVcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQ0XCJcbiAgICAgICAgICBuYW1lPXtwbGF5ZXJJbmZvLm5hbWV9XG4gICAgICAgICAgcmF0aW5nPXtwbGF5ZXJJbmZvLnJhdGluZ31cbiAgICAgICAgICBhdmF0YXI9e3BsYXllckluZm8uYXZhdGFyfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93IGFic29sdXRlIC1sZWZ0LTEgLXRvcC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXtwbGF5ZXJJbmZvLnN5bWJvbH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTYgdy1weCBiZy1zbGF0ZS0yMDBcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS05MDAgdGV4dC1sZyBmb250LXNlbWlib2xkXCI+MTowODwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJQcm9maWxlIiwiR2FtZVN5bWJvbCIsIkdBTUVfU1lNQk9MUyIsImF2YXRhclNyYzEiLCJhdmF0YXJTcmMyIiwiYXZhdGFyU3JjMyIsImF2YXRhclNyYzQiLCJJbWFnZSIsInBsYXllcnMiLCJpZCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzcmMiLCJhbHQiLCJjbGFzc05hbWUiLCJ1bm9wdGltaXplZCIsInN5bWJvbCIsIkNST1NTIiwiWkVSTyIsIlRSSUFOR0xFIiwiU1FVQVJFIiwiR2FtZUluZm8iLCJkaXYiLCJtYXAiLCJwbGF5ZXIiLCJQbGF5ZXJJbmZvIiwicGxheWVySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});