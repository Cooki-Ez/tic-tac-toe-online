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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _images_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/avatar-1.jpg */ \"./components/game/images/avatar-1.jpg\");\n/* harmony import */ var _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar-2.png */ \"./components/game/images/avatar-2.png\");\n/* harmony import */ var _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar-3.png */ \"./components/game/images/avatar-3.png\");\n/* harmony import */ var _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar-4.png */ \"./components/game/images/avatar-4.png\");\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"RUINER333\",\n        rating: \"1337\",\n        avatar: _images_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"AleshaEnchantress\",\n        rating: \"228\",\n        avatar: _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"VanyaPubertat\",\n        rating: \"322\",\n        avatar: _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"VOVAN\",\n        rating: \"1230\",\n        avatar: _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_4__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3\"),\n        children: players.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player\n            }, player.id, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_3__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-6 w-px bg-slate-200\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-slate-900 text-lg font-semibold\", isRight && \"\"),\n                children: \"1:08\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDVztBQUNNO0FBQ0E7QUFFTTtBQUNBO0FBQ0E7QUFDQTtBQUUvQyxNQUFNUSxVQUFVO0lBQ2Q7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUVIsNERBQVVBO1FBQ2xCUyxRQUFRVixvREFBWUEsQ0FBQ1csS0FBSztJQUM1QjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFQLDREQUFVQTtRQUNsQlEsUUFBUVYsb0RBQVlBLENBQUNZLElBQUk7SUFDM0I7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRTiw0REFBVUE7UUFDbEJPLFFBQVFWLG9EQUFZQSxDQUFDYSxRQUFRO0lBQy9CO0lBQ0E7UUFDRVAsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUUwsNERBQVVBO1FBQ2xCTSxRQUFRVixvREFBWUEsQ0FBQ2MsTUFBTTtJQUM3QjtDQUNEO0FBRU0sU0FBU0MsU0FBUyxLQUFXO1FBQVgsRUFBQ0MsU0FBUyxFQUFDLEdBQVg7SUFDdkIscUJBQ0UsOERBQUNDO1FBQ0NELFdBQVduQixnREFBSUEsQ0FDYm1CLFdBQ0E7a0JBR0RYLFFBQVFhLEdBQUcsQ0FBQyxDQUFDQyx1QkFDWiw4REFBQ0M7Z0JBQTJCQyxZQUFZRjtlQUF2QkEsT0FBT2IsRUFBRTs7Ozs7Ozs7OztBQUtsQztLQWRnQlM7QUFpQmhCLFNBQVNLLFdBQVcsS0FBcUI7UUFBckIsRUFBQ0MsVUFBVSxFQUFFQyxPQUFPLEVBQUMsR0FBckI7SUFDbEIscUJBQ0UsOERBQUNMO1FBQUlELFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBSUQsV0FBWW5CLGdEQUFJQSxDQUFDLFlBQVl5QixXQUFXOztrQ0FDM0MsOERBQUN4Qiw2Q0FBT0E7d0JBQ05rQixXQUFVO3dCQUNWVCxNQUFNYyxXQUFXZCxJQUFJO3dCQUNyQkMsUUFBUWEsV0FBV2IsTUFBTTt3QkFDekJDLFFBQVFZLFdBQVdaLE1BQU07Ozs7OztrQ0FFM0IsOERBQUNRO3dCQUNDRCxXQUFVO2tDQUNWLDRFQUFDakIsb0RBQVVBOzRCQUFDVyxRQUFRVyxXQUFXWCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHekMsOERBQUNPO2dCQUFJRCxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNDO2dCQUFJRCxXQUFXbkIsZ0RBQUlBLENBQUMsd0NBQXdDeUIsV0FBVzswQkFBTzs7Ozs7Ozs7Ozs7O0FBR3JGO01BbkJTRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeD9kMDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQge1Byb2ZpbGV9IGZyb20gXCIuLi9wcm9maWxlXCI7XG5pbXBvcnQge0dhbWVTeW1ib2x9IGZyb20gXCIuL2dhbWUtc3ltYm9sXCI7XG5pbXBvcnQge0dBTUVfU1lNQk9MU30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmltcG9ydCBhdmF0YXJTcmMxIGZyb20gXCIuL2ltYWdlcy9hdmF0YXItMS5qcGdcIjtcbmltcG9ydCBhdmF0YXJTcmMyIGZyb20gXCIuL2ltYWdlcy9hdmF0YXItMi5wbmdcIjtcbmltcG9ydCBhdmF0YXJTcmMzIGZyb20gXCIuL2ltYWdlcy9hdmF0YXItMy5wbmdcIjtcbmltcG9ydCBhdmF0YXJTcmM0IGZyb20gXCIuL2ltYWdlcy9hdmF0YXItNC5wbmdcIjtcblxuY29uc3QgcGxheWVycyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiUlVJTkVSMzMzXCIsXG4gICAgcmF0aW5nOiBcIjEzMzdcIixcbiAgICBhdmF0YXI6IGF2YXRhclNyYzEsXG4gICAgc3ltYm9sOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkFsZXNoYUVuY2hhbnRyZXNzXCIsXG4gICAgcmF0aW5nOiBcIjIyOFwiLFxuICAgIGF2YXRhcjogYXZhdGFyU3JjMixcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5aRVJPLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCJWYW55YVB1YmVydGF0XCIsXG4gICAgcmF0aW5nOiBcIjMyMlwiLFxuICAgIGF2YXRhcjogYXZhdGFyU3JjMyxcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5UUklBTkdMRSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwiVk9WQU5cIixcbiAgICByYXRpbmc6IFwiMTIzMFwiLFxuICAgIGF2YXRhcjogYXZhdGFyU3JjNCxcbiAgICBzeW1ib2w6IEdBTUVfU1lNQk9MUy5TUVVBUkUsXG4gIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lSW5mbyh7Y2xhc3NOYW1lfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB5LTQganVzdGlmeS1iZXR3ZWVuIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIlxuICAgICAgKX1cbiAgICA+XG4gICAgICB7cGxheWVycy5tYXAoKHBsYXllcikgPT4gKFxuICAgICAgICA8UGxheWVySW5mbyBrZXk9e3BsYXllci5pZH0gcGxheWVySW5mbz17cGxheWVyfSAvPlxuICAgICAgKSl9XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5mdW5jdGlvbiBQbGF5ZXJJbmZvKHtwbGF5ZXJJbmZvLCBpc1JpZ2h0fSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSB7Y2xzeChcInJlbGF0aXZlXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0zXCIpfT5cbiAgICAgICAgPFByb2ZpbGVcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQ0XCJcbiAgICAgICAgICBuYW1lPXtwbGF5ZXJJbmZvLm5hbWV9XG4gICAgICAgICAgcmF0aW5nPXtwbGF5ZXJJbmZvLnJhdGluZ31cbiAgICAgICAgICBhdmF0YXI9e3BsYXllckluZm8uYXZhdGFyfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93IGFic29sdXRlIC1sZWZ0LTEgLXRvcC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXtwbGF5ZXJJbmZvLnN5bWJvbH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTYgdy1weCBiZy1zbGF0ZS0yMDBcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwidGV4dC1zbGF0ZS05MDAgdGV4dC1sZyBmb250LXNlbWlib2xkXCIsIGlzUmlnaHQgJiYgXCJcIil9ICA+MTowODwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJQcm9maWxlIiwiR2FtZVN5bWJvbCIsIkdBTUVfU1lNQk9MUyIsImF2YXRhclNyYzEiLCJhdmF0YXJTcmMyIiwiYXZhdGFyU3JjMyIsImF2YXRhclNyYzQiLCJwbGF5ZXJzIiwiaWQiLCJuYW1lIiwicmF0aW5nIiwiYXZhdGFyIiwic3ltYm9sIiwiQ1JPU1MiLCJaRVJPIiwiVFJJQU5HTEUiLCJTUVVBUkUiLCJHYW1lSW5mbyIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsInBsYXllciIsIlBsYXllckluZm8iLCJwbGF5ZXJJbmZvIiwiaXNSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ }),

/***/ "./components/profile/profile.jsx":
/*!****************************************!*\
  !*** ./components/profile/profile.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Profile: function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_images_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/images/avatar-1.jpg */ \"./components/game/images/avatar-1.jpg\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n\n\n\n\nfunction Profile(param) {\n    let { className, name, rating, avatar = _game_images_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"] } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"flex items-center gap-2 text-start text-teal-600\", className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"rounded-3xl w-12\",\n                src: avatar,\n                alt: \"avatar\",\n                unoptimized: true\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\profile\\\\profile.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-lg leading-tight truncate\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\profile\\\\profile.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-slate-400 text-xs leading-tight\",\n                        children: [\n                            \"Rating: \",\n                            rating\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\profile\\\\profile.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\profile\\\\profile.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\profile\\\\profile.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDcUI7QUFDNUI7QUFHakIsU0FBU0csUUFBUSxLQUE4QztRQUE5QyxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxTQUFTTixpRUFBUyxFQUFDLEdBQTlDO0lBQ3RCLHFCQUNFLDhEQUFDTztRQUNDSixXQUFXRixnREFBSUEsQ0FDYixvREFDQUU7OzBCQUdGLDhEQUFDSixtREFBS0E7Z0JBQUNJLFdBQVU7Z0JBQ1ZLLEtBQUtGO2dCQUNMRyxLQUFJO2dCQUNKQyxXQUFXOzs7Ozs7MEJBRWxCLDhEQUFDSDtnQkFBSUosV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUFJSixXQUFVO2tDQUFrQ0M7Ozs7OztrQ0FDakQsOERBQUNHO3dCQUFJSixXQUFVOzs0QkFBdUM7NEJBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZFO0tBbkJnQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuanN4Pzc0ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYXZhdGFyU3JjIGZyb20gXCIuLi9nYW1lL2ltYWdlcy9hdmF0YXItMS5qcGdcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2ZpbGUoeyBjbGFzc05hbWUsIG5hbWUsIHJhdGluZywgYXZhdGFyID0gYXZhdGFyU3JjfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXN0YXJ0IHRleHQtdGVhbC02MDBcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgID5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCB3LTEyXCJcbiAgICAgICAgICAgICBzcmM9e2F2YXRhcn1cbiAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgIHVub3B0aW1pemVkXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctdGlnaHQgdHJ1bmNhdGVcIj57bmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTQwMCB0ZXh0LXhzIGxlYWRpbmctdGlnaHRcIj5SYXRpbmc6IHtyYXRpbmd9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImF2YXRhclNyYyIsImNsc3giLCJQcm9maWxlIiwiY2xhc3NOYW1lIiwibmFtZSIsInJhdGluZyIsImF2YXRhciIsImRpdiIsInNyYyIsImFsdCIsInVub3B0aW1pemVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/profile.jsx\n"));

/***/ })

});