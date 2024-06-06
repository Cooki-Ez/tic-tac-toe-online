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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../game */ \"./components/game/index.js\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 4;\nfunction Game() {\n    _s();\n    const { cells } = (0,_game__WEBPACK_IMPORTED_MODULE_8__.useGameState)(PLAYERS_COUNT);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n        backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 19,\n            columnNumber: 17\n        }, void 0),\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 20,\n            columnNumber: 14\n        }, void 0),\n        gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n            isRatingGame: true,\n            playersCount: 4,\n            timeMode: \"1 min to turn\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 21,\n            columnNumber: 17\n        }, void 0),\n        playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                avatar: player.avatar,\n                name: player.name,\n                rating: player.rating,\n                seconds: 60,\n                symbol: player.symbol,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 23,\n                columnNumber: 40\n            }, void 0)),\n        gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 34,\n            columnNumber: 21\n        }, void 0),\n        gameCells: cells.map((cell, index)=>{\n            var _winnerSequence;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_9__.GameCell, {\n                disabled: !!winnerSymbol,\n                isWinner: (_winnerSequence = winnerSequence) === null || _winnerSequence === void 0 ? void 0 : _winnerSequence.includes(index),\n                onClick: ()=>{\n                    handleCellClick(index);\n                },\n                symbol: cell\n            }, index, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, void 0);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Game, \"HcUlnI/iM2fTgZcYyOr4JiKBUQo=\", false, function() {\n    return [\n        _game__WEBPACK_IMPORTED_MODULE_8__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDRTtBQUNGO0FBQ0o7QUFDUTtBQUNLO0FBQ1o7QUFDRztBQUV4QyxNQUFNUyxnQkFBZ0I7QUFFZixTQUFTQzs7SUFFZCxNQUFNLEVBQUNDLEtBQUssRUFBQyxHQUFHSixtREFBWUEsQ0FBQ0U7SUFFN0IscUJBQ0UsOERBQUNULHVEQUFVQTtRQUNUWSx3QkFBVSw4REFBQ1gsbURBQVFBOzs7OztRQUNuQlkscUJBQU8sOERBQUNYLHFEQUFTQTs7Ozs7UUFDakJZLHdCQUFVLDhEQUFDWCxtREFBUUE7WUFBQ1ksWUFBWTtZQUFDQyxjQUFjO1lBQUdDLFVBQVU7Ozs7OztRQUM1REMsYUFDRWQsK0NBQU9BLENBQUNlLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFBVSw4REFBQ2hCLHVEQUFVQTtnQkFFdENpQixRQUFRRixPQUFPRSxNQUFNO2dCQUNyQkMsTUFBTUgsT0FBT0csSUFBSTtnQkFDakJDLFFBQVFKLE9BQU9JLE1BQU07Z0JBQ3JCQyxTQUFTO2dCQUNUQyxRQUFRTixPQUFPTSxNQUFNO2dCQUNyQkMsU0FBU04sUUFBUSxNQUFNO2VBTmxCRCxPQUFPUSxFQUFFOzs7OztRQVVwQkMsNEJBQWMsOERBQUN2Qiw0REFBWUE7Ozs7O1FBQzNCd0IsV0FBV25CLE1BQU1RLEdBQUcsQ0FBQyxDQUFDWSxNQUFNVjtnQkFJZFc7aUNBSFosOERBQUN4QixtREFBUUE7Z0JBRVB5QixVQUFVLENBQUMsQ0FBQ0M7Z0JBQ1pDLFFBQVEsR0FBRUgsa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCSSxRQUFRLENBQUNmO2dCQUNuQ2dCLFNBQVM7b0JBQ1BDLGdCQUFnQmpCO2dCQUNsQjtnQkFDQUssUUFBUUs7ZUFOSFY7Ozs7Ozs7Ozs7O0FBV2Y7R0FuQ2dCWDs7UUFFRUgsK0NBQVlBOzs7S0FGZEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9nYW1lLmpzeD9lNDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZUxheW91dH0gZnJvbSBcIi4vdWkvZ2FtZS1sYXlvdXRcIjtcbmltcG9ydCB7QmFja0xpbmt9IGZyb20gXCIuL3VpL2JhY2stbGlua1wiO1xuaW1wb3J0IHtHYW1lVGl0bGV9IGZyb20gXCIuL3VpL2dhbWUtdGl0bGVcIjtcbmltcG9ydCB7R2FtZUluZm99IGZyb20gXCIuL3VpL2dhbWUtaW5mb1wiO1xuaW1wb3J0IHtQTEFZRVJTfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7UGxheWVySW5mb30gZnJvbSBcIi4vdWkvcGxheWVyLWluZm9cIjtcbmltcG9ydCB7R2FtZU1vdmVJbmZvfSBmcm9tIFwiLi91aS9nYW1lLW1vdmUtaW5mb1wiO1xuaW1wb3J0IHt1c2VHYW1lU3RhdGV9IGZyb20gXCIuLi9nYW1lXCI7XG5pbXBvcnQge0dhbWVDZWxsfSBmcm9tIFwiLi91aS9nYW1lLWNlbGxcIjtcblxuY29uc3QgUExBWUVSU19DT1VOVCA9IDRcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWUoKSB7XG5cbiAgY29uc3Qge2NlbGxzfSA9IHVzZUdhbWVTdGF0ZShQTEFZRVJTX0NPVU5UKTtcblxuICByZXR1cm4gKFxuICAgIDxHYW1lTGF5b3V0XG4gICAgICBiYWNrTGluaz17PEJhY2tMaW5rLz59XG4gICAgICB0aXRsZT17PEdhbWVUaXRsZS8+fVxuICAgICAgZ2FtZUluZm89ezxHYW1lSW5mbyBpc1JhdGluZ0dhbWUgcGxheWVyc0NvdW50PXs0fSB0aW1lTW9kZT17XCIxIG1pbiB0byB0dXJuXCJ9Lz59XG4gICAgICBwbGF5ZXJzTGlzdD17XG4gICAgICAgIFBMQVlFUlMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiA8UGxheWVySW5mb1xuICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XG4gICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XG4gICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cbiAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cbiAgICAgICAgICAgIHNlY29uZHM9ezYwfVxuICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxuICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGdhbWVNb3ZlSW5mbz17PEdhbWVNb3ZlSW5mbyAvPn1cbiAgICAgIGdhbWVDZWxscz17Y2VsbHMubWFwKChjZWxsLCBpbmRleCkgPT4gKFxuICAgICAgICA8R2FtZUNlbGxcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGRpc2FibGVkPXshIXdpbm5lclN5bWJvbH1cbiAgICAgICAgICBpc1dpbm5lcj17d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVDZWxsQ2xpY2soaW5kZXgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgc3ltYm9sPXtjZWxsfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHYW1lTGF5b3V0IiwiQmFja0xpbmsiLCJHYW1lVGl0bGUiLCJHYW1lSW5mbyIsIlBMQVlFUlMiLCJQbGF5ZXJJbmZvIiwiR2FtZU1vdmVJbmZvIiwidXNlR2FtZVN0YXRlIiwiR2FtZUNlbGwiLCJQTEFZRVJTX0NPVU5UIiwiR2FtZSIsImNlbGxzIiwiYmFja0xpbmsiLCJ0aXRsZSIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwicGxheWVyc0NvdW50IiwidGltZU1vZGUiLCJwbGF5ZXJzTGlzdCIsIm1hcCIsInBsYXllciIsImluZGV4IiwiYXZhdGFyIiwibmFtZSIsInJhdGluZyIsInNlY29uZHMiLCJzeW1ib2wiLCJpc1JpZ2h0IiwiaWQiLCJnYW1lTW92ZUluZm8iLCJnYW1lQ2VsbHMiLCJjZWxsIiwid2lubmVyU2VxdWVuY2UiLCJkaXNhYmxlZCIsIndpbm5lclN5bWJvbCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJvbkNsaWNrIiwiaGFuZGxlQ2VsbENsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});