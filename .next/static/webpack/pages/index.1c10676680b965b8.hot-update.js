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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _model_use_game_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/use-game-state */ \"./components/game-new/model/use-game-state.js\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_over_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/game-over-model */ \"./components/game-new/ui/game-over-model.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 2;\nfunction Game() {\n    _s();\n    const { cells, currentTurn, nextTurn, winnerSequence, winnerSymbol, dispatch } = (0,_model_use_game_state__WEBPACK_IMPORTED_MODULE_8__.useGameState)(PLAYERS_COUNT);\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 19\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 16\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 min to turn\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 19\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, void 0)),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentTurn: currentTurn,\n                    nextTurn: nextTurn\n                }, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 23\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_9__.GameCell, {\n                        disabled: !!winnerSymbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        onClick: ()=>{\n                            dispatch({\n                                type: _model_use_game_state__WEBPACK_IMPORTED_MODULE_8__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index\n                            });\n                        },\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_model__WEBPACK_IMPORTED_MODULE_10__.GameOverModel, {\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 66\n                    }, void 0)),\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"qFEj2ZXBv+v8UVZSxtxQKTywfIw=\", false, function() {\n    return [\n        _model_use_game_state__WEBPACK_IMPORTED_MODULE_8__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ0U7QUFDRjtBQUNKO0FBQ1E7QUFDSztBQUN1QjtBQUNoQztBQUNXO0FBRW5ELE1BQU1XLGdCQUFnQjtBQUVmLFNBQVNDOztJQUVkLE1BQU0sRUFDSkMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsY0FBYyxFQUNkQyxZQUFZLEVBQ1pDLFFBQVEsRUFDVCxHQUFHVixtRUFBWUEsQ0FBQ0c7SUFFakIsTUFBTVEsZUFBZWYsK0NBQU9BLENBQUNnQixJQUFJLENBQUNDLENBQUFBLFNBQVVBLE9BQU9DLE1BQU0sS0FBS0w7SUFFOUQscUJBQ0U7OzBCQUNFLDhEQUFDakIsdURBQVVBO2dCQUNUdUIsd0JBQVUsOERBQUN0QixtREFBUUE7Ozs7O2dCQUNuQnVCLHFCQUFPLDhEQUFDdEIscURBQVNBOzs7OztnQkFDakJ1Qix3QkFBVSw4REFBQ3RCLG1EQUFRQTtvQkFBQ3VCLFlBQVk7b0JBQUNDLGNBQWM7b0JBQUdDLFVBQVU7Ozs7OztnQkFDNURDLGFBQ0V6QiwrQ0FBT0EsQ0FBQzBCLEtBQUssQ0FBQyxHQUFHbkIsZUFBZW9CLEdBQUcsQ0FBQyxDQUFDVixRQUFRVyxzQkFDM0MsOERBQUMzQix1REFBVUE7d0JBRVQ0QixRQUFRWixPQUFPWSxNQUFNO3dCQUNyQkMsTUFBTWIsT0FBT2EsSUFBSTt3QkFDakJDLFFBQVFkLE9BQU9jLE1BQU07d0JBQ3JCQyxTQUFTO3dCQUNUZCxRQUFRRCxPQUFPQyxNQUFNO3dCQUNyQmUsU0FBU0wsUUFBUSxNQUFNO3VCQU5sQlgsT0FBT2lCLEVBQUU7Ozs7O2dCQVVwQkMsNEJBQWMsOERBQUNqQyw0REFBWUE7b0JBQUNRLGFBQWFBO29CQUFhQyxVQUFVQTs7Ozs7O2dCQUNoRXlCLFdBQVczQixNQUFNa0IsR0FBRyxDQUFDLENBQUNVLE1BQU1ULHNCQUMxQiw4REFBQ3ZCLG1EQUFRQTt3QkFFUGlDLFVBQVUsQ0FBQyxDQUFDekI7d0JBQ1owQixRQUFRLEVBQUUzQiwyQkFBQUEscUNBQUFBLGVBQWdCNEIsUUFBUSxDQUFDWjt3QkFDbkNhLFNBQVM7NEJBQ1AzQixTQUFTO2dDQUNQNEIsTUFBTXZDLHFFQUFrQkEsQ0FBQ3dDLFVBQVU7Z0NBQ25DZjs0QkFDRjt3QkFDRjt3QkFDQVYsUUFBUW1CO3VCQVRIVDs7Ozs7Ozs7OzswQkFhWCw4REFBQ3RCLCtEQUFhQTtnQkFDWnNDLFNBQ0U1QywrQ0FBT0EsQ0FBQzBCLEtBQUssQ0FBQyxHQUFHbkIsZUFBZW9CLEdBQUcsQ0FBQyxDQUFDVixRQUFRVyxzQkFBVSw4REFBQzNCLHVEQUFVQTt3QkFFOUQ0QixRQUFRWixPQUFPWSxNQUFNO3dCQUNyQkMsTUFBTWIsT0FBT2EsSUFBSTt3QkFDakJDLFFBQVFkLE9BQU9jLE1BQU07d0JBQ3JCQyxTQUFTO3dCQUNUZCxRQUFRRCxPQUFPQyxNQUFNO3dCQUNyQmUsU0FBU0wsUUFBUSxNQUFNO3VCQU5sQlgsT0FBT2lCLEVBQUU7Ozs7O2dCQVVwQlcsVUFBVSxFQUFFOUIseUJBQUFBLG1DQUFBQSxhQUFjZSxJQUFJOzs7Ozs7OztBQUd0QztHQWhFZ0J0Qjs7UUFTVkosK0RBQVlBOzs7S0FURkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9nYW1lLmpzeD9lNDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZUxheW91dH0gZnJvbSBcIi4vdWkvZ2FtZS1sYXlvdXRcIjtcbmltcG9ydCB7QmFja0xpbmt9IGZyb20gXCIuL3VpL2JhY2stbGlua1wiO1xuaW1wb3J0IHtHYW1lVGl0bGV9IGZyb20gXCIuL3VpL2dhbWUtdGl0bGVcIjtcbmltcG9ydCB7R2FtZUluZm99IGZyb20gXCIuL3VpL2dhbWUtaW5mb1wiO1xuaW1wb3J0IHtQTEFZRVJTfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7UGxheWVySW5mb30gZnJvbSBcIi4vdWkvcGxheWVyLWluZm9cIjtcbmltcG9ydCB7R2FtZU1vdmVJbmZvfSBmcm9tIFwiLi91aS9nYW1lLW1vdmUtaW5mb1wiO1xuaW1wb3J0IHtHQU1FX1NUQVRFX0FDVElPTlMsIHVzZUdhbWVTdGF0ZX0gZnJvbSBcIi4vbW9kZWwvdXNlLWdhbWUtc3RhdGVcIjtcbmltcG9ydCB7R2FtZUNlbGx9IGZyb20gXCIuL3VpL2dhbWUtY2VsbFwiO1xuaW1wb3J0IHtHYW1lT3Zlck1vZGVsfSBmcm9tIFwiLi91aS9nYW1lLW92ZXItbW9kZWxcIjtcblxuY29uc3QgUExBWUVSU19DT1VOVCA9IDI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xuXG4gIGNvbnN0IHtcbiAgICBjZWxscyxcbiAgICBjdXJyZW50VHVybixcbiAgICBuZXh0VHVybixcbiAgICB3aW5uZXJTZXF1ZW5jZSxcbiAgICB3aW5uZXJTeW1ib2wsXG4gICAgZGlzcGF0Y2hcbiAgfSA9IHVzZUdhbWVTdGF0ZShQTEFZRVJTX0NPVU5UKTtcblxuICBjb25zdCB3aW5uZXJQbGF5ZXIgPSBQTEFZRVJTLmZpbmQocGxheWVyID0+IHBsYXllci5zeW1ib2wgPT09IHdpbm5lclN5bWJvbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdhbWVMYXlvdXRcbiAgICAgICAgYmFja0xpbms9ezxCYWNrTGluay8+fVxuICAgICAgICB0aXRsZT17PEdhbWVUaXRsZS8+fVxuICAgICAgICBnYW1lSW5mbz17PEdhbWVJbmZvIGlzUmF0aW5nR2FtZSBwbGF5ZXJzQ291bnQ9ezR9IHRpbWVNb2RlPXtcIjEgbWluIHRvIHR1cm5cIn0vPn1cbiAgICAgICAgcGxheWVyc0xpc3Q9e1xuICAgICAgICAgIFBMQVlFUlMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PlxuICAgICAgICAgICAgPFBsYXllckluZm9cbiAgICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XG4gICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cbiAgICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XG4gICAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cbiAgICAgICAgICAgICAgc2Vjb25kcz17NjB9XG4gICAgICAgICAgICAgIHN5bWJvbD17cGxheWVyLnN5bWJvbH1cbiAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZ2FtZU1vdmVJbmZvPXs8R2FtZU1vdmVJbmZvIGN1cnJlbnRUdXJuPXtjdXJyZW50VHVybn0gbmV4dFR1cm49e25leHRUdXJufS8+fVxuICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R2FtZUNlbGxcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBkaXNhYmxlZD17ISF3aW5uZXJTeW1ib2x9XG4gICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzeW1ib2w9e2NlbGx9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAvPlxuICAgICAgPEdhbWVPdmVyTW9kZWxcbiAgICAgICAgcGxheWVycz17XG4gICAgICAgICAgUExBWUVSUy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+IDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XG4gICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxuICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XG4gICAgICAgICAgICAgIHNlY29uZHM9ezYwfVxuICAgICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XG4gICAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHdpbm5lck5hbWU9e3dpbm5lclBsYXllcj8ubmFtZX0vPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkdhbWVMYXlvdXQiLCJCYWNrTGluayIsIkdhbWVUaXRsZSIsIkdhbWVJbmZvIiwiUExBWUVSUyIsIlBsYXllckluZm8iLCJHYW1lTW92ZUluZm8iLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJ1c2VHYW1lU3RhdGUiLCJHYW1lQ2VsbCIsIkdhbWVPdmVyTW9kZWwiLCJQTEFZRVJTX0NPVU5UIiwiR2FtZSIsImNlbGxzIiwiY3VycmVudFR1cm4iLCJuZXh0VHVybiIsIndpbm5lclNlcXVlbmNlIiwid2lubmVyU3ltYm9sIiwiZGlzcGF0Y2giLCJ3aW5uZXJQbGF5ZXIiLCJmaW5kIiwicGxheWVyIiwic3ltYm9sIiwiYmFja0xpbmsiLCJ0aXRsZSIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwicGxheWVyc0NvdW50IiwidGltZU1vZGUiLCJwbGF5ZXJzTGlzdCIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJhdmF0YXIiLCJuYW1lIiwicmF0aW5nIiwic2Vjb25kcyIsImlzUmlnaHQiLCJpZCIsImdhbWVNb3ZlSW5mbyIsImdhbWVDZWxscyIsImNlbGwiLCJkaXNhYmxlZCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJvbkNsaWNrIiwidHlwZSIsIkNFTExfQ0xJQ0siLCJwbGF5ZXJzIiwid2lubmVyTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ }),

/***/ "./components/game-new/model/use-game-state.js":
/*!*****************************************************!*\
  !*** ./components/game-new/model/use-game-state.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _get_next_turn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var _compute_winner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compute-winner */ \"./components/game-new/model/compute-winner.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst gameStateReducer = (state, action)=>{\n    return state;\n};\nconst initGameState = (param)=>{\n    let {} = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentTurn: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS\n    };\n};\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(gameStateReducer, {}, initGameState);\n    return {\n        cells: gameState.cells,\n        currentTurn: gameState.currentTurn,\n        nextTurn,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n} /*\n  const [{cells,\n    currentTurn,\n    playersTimeOver},\n    setGameState] = useState(() => (\n    {\n      cells: new Array(19 * 19).fill(null),\n      currentTurn: GAME_SYMBOLS.CROSS,\n      playersTimeOver : [],\n    }\n  ));\n\n  const winnerSequence = computeWinner(cells);\n  const nextTurn = getNextTurn(currentTurn, playersCount, playersTimeOver);\n\n  const winnerSymbol =\n    nextTurn === currentTurn ? currentTurn : cells[winnerSequence?.[0]];\n\n  const handleCellClick = (index) => {\n    setGameState((lastGameState) => {\n      if (lastGameState.cells[index])\n        return lastGameState;\n\n      return {\n        ...lastGameState,\n        currentTurn: getNextTurn(\n          lastGameState.currentTurn,\n          playersCount,\n          lastGameState.playersTimeOver),\n        cells: lastGameState.cells.map((cell, i) =>\n          i === index ? lastGameState.currentTurn : cell\n        ),\n      };\n    });\n  };\n\n  const handlePlayerTimeOver = (symbol) => {\n    setGameState((lastGameState) => {\n      return {\n        ...lastGameState,\n        playersTimeOver: [...lastGameState.playersTimeOver, symbol],\n        currentTurn: getNextTurn(lastGameState.currentTurn, playersCount, lastGameState.playersTimeOver),\n      };\n    });\n  };\n\n   */ \n_s(useGameState, \"j2Lc7qLkPsIkuOKspfGyGEqTTbo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1g7QUFDQztBQUNHO0FBRXhDLE1BQU1NLHFCQUFxQjtJQUNoQ0MsWUFBWTtBQUNkLEVBQUM7QUFFRCxNQUFNQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7SUFDL0IsT0FBT0Q7QUFDVDtBQUVBLE1BQU1FLGdCQUFnQjtRQUFDLEVBQUU7V0FBTTtRQUM3QkMsT0FBTyxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CQyxhQUFhZixvREFBWUEsQ0FBQ2dCLEtBQUs7SUFDakM7O0FBRU8sU0FBU0MsYUFBYUMsWUFBWTs7SUFFdkMsTUFBTSxDQUFDQyxXQUFXQyxTQUFTLEdBQUdsQixpREFBVUEsQ0FBQ00sa0JBQWtCLENBQUMsR0FBR0c7SUFFL0QsT0FBTztRQUNMQyxPQUFPTyxVQUFVUCxLQUFLO1FBQ3RCRyxhQUFhSSxVQUFVSixXQUFXO1FBQ2xDTTtRQUNBQztRQUNBQztRQUNBSDtJQUNGO0FBQ0YsRUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThDQztHQTNEYUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9tb2RlbC91c2UtZ2FtZS1zdGF0ZS5qcz8yZDFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R0FNRV9TWU1CT0xTLCBUVVJOX09SREVSfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge3VzZVJlZHVjZXIsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0TmV4dFR1cm59IGZyb20gXCIuL2dldC1uZXh0LXR1cm5cIjtcbmltcG9ydCB7Y29tcHV0ZVdpbm5lcn0gZnJvbSBcIi4vY29tcHV0ZS13aW5uZXJcIjtcblxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEVfQUNUSU9OUyA9IHtcbiAgQ0VMTF9DTElDSzogXCJjZWxsLWNsaWNrXCJcbn1cblxuY29uc3QgZ2FtZVN0YXRlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuY29uc3QgaW5pdEdhbWVTdGF0ZSA9ICh7fSkgPT4gKHtcbiAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICBjdXJyZW50VHVybjogR0FNRV9TWU1CT0xTLkNST1NTLFxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcblxuICBjb25zdCBbZ2FtZVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGdhbWVTdGF0ZVJlZHVjZXIsIHt9LCBpbml0R2FtZVN0YXRlKTtcblxuICByZXR1cm4ge1xuICAgIGNlbGxzOiBnYW1lU3RhdGUuY2VsbHMsXG4gICAgY3VycmVudFR1cm46IGdhbWVTdGF0ZS5jdXJyZW50VHVybixcbiAgICBuZXh0VHVybixcbiAgICB3aW5uZXJTZXF1ZW5jZSxcbiAgICB3aW5uZXJTeW1ib2wsXG4gICAgZGlzcGF0Y2hcbiAgfTtcbn1cbiAgLypcbiAgY29uc3QgW3tjZWxscyxcbiAgICBjdXJyZW50VHVybixcbiAgICBwbGF5ZXJzVGltZU92ZXJ9LFxuICAgIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoXG4gICAge1xuICAgICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgICAgY3VycmVudFR1cm46IEdBTUVfU1lNQk9MUy5DUk9TUyxcbiAgICAgIHBsYXllcnNUaW1lT3ZlciA6IFtdLFxuICAgIH1cbiAgKSk7XG5cbiAgY29uc3Qgd2lubmVyU2VxdWVuY2UgPSBjb21wdXRlV2lubmVyKGNlbGxzKTtcbiAgY29uc3QgbmV4dFR1cm4gPSBnZXROZXh0VHVybihjdXJyZW50VHVybiwgcGxheWVyc0NvdW50LCBwbGF5ZXJzVGltZU92ZXIpO1xuXG4gIGNvbnN0IHdpbm5lclN5bWJvbCA9XG4gICAgbmV4dFR1cm4gPT09IGN1cnJlbnRUdXJuID8gY3VycmVudFR1cm4gOiBjZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdXTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcbiAgICAgIGlmIChsYXN0R2FtZVN0YXRlLmNlbGxzW2luZGV4XSlcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICAgIGN1cnJlbnRUdXJuOiBnZXROZXh0VHVybihcbiAgICAgICAgICBsYXN0R2FtZVN0YXRlLmN1cnJlbnRUdXJuLFxuICAgICAgICAgIHBsYXllcnNDb3VudCxcbiAgICAgICAgICBsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlciksXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cbiAgICAgICAgICBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudFR1cm4gOiBjZWxsXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBsYXllclRpbWVPdmVyID0gKHN5bWJvbCkgPT4ge1xuICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgICAgcGxheWVyc1RpbWVPdmVyOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIsIHN5bWJvbF0sXG4gICAgICAgIGN1cnJlbnRUdXJuOiBnZXROZXh0VHVybihsYXN0R2FtZVN0YXRlLmN1cnJlbnRUdXJuLCBwbGF5ZXJzQ291bnQsIGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgICovXG4iXSwibmFtZXMiOlsiR0FNRV9TWU1CT0xTIiwiVFVSTl9PUkRFUiIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsImdldE5leHRUdXJuIiwiY29tcHV0ZVdpbm5lciIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsIkNFTExfQ0xJQ0siLCJnYW1lU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJpbml0R2FtZVN0YXRlIiwiY2VsbHMiLCJBcnJheSIsImZpbGwiLCJjdXJyZW50VHVybiIsIkNST1NTIiwidXNlR2FtZVN0YXRlIiwicGxheWVyc0NvdW50IiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJuZXh0VHVybiIsIndpbm5lclNlcXVlbmNlIiwid2lubmVyU3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});