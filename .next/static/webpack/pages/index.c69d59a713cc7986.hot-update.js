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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_over_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-over-model */ \"./components/game-new/ui/game-over-model.jsx\");\n/* harmony import */ var _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/game-state-reducer */ \"./components/game-new/model/game-state-reducer.js\");\n/* harmony import */ var _model_compute_winner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/compute-winner */ \"./components/game-new/model/compute-winner.js\");\n/* harmony import */ var _model_get_next_turn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/compute-winner-symbol */ \"./components/game-new/model/compute-winner-symbol.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 2;\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useReducer)(_model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.gameStateReducer, {\n        playersCount: PLAYERS_COUNT\n    }, _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.initGameState);\n    const winnerSequence = (0,_model_compute_winner__WEBPACK_IMPORTED_MODULE_11__.computeWinner)(gameState.cells);\n    const nextTurn = (0,_model_get_next_turn__WEBPACK_IMPORTED_MODULE_12__.getNextTurn)(gameState);\n    const winnerSymbol = (0,_model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__.ComputeWinnerSymbol)(gameState, {\n        winnerSequence,\n        nextTurn\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 19\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 16\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 min to turn\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 19\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, void 0)),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentTurn: gameState.currentTurn,\n                    nextTurn: nextTurn\n                }, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 23\n                }, void 0),\n                gameCells: gameState.cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                        disabled: !!winnerSymbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        onClick: ()=>{\n                            dispatch({\n                                type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index\n                            });\n                        },\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_model__WEBPACK_IMPORTED_MODULE_9__.GameOverModel, {\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 66\n                    }, void 0)),\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"hjOiclnsfqrQwVD5srQmTue05c4=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDRTtBQUNGO0FBQ0o7QUFDUTtBQUNLO0FBQ1Q7QUFDVztBQUM0QztBQUMxQztBQUNIO0FBQ2pCO0FBQ2lDO0FBRWxFLE1BQU1nQixnQkFBZ0I7QUFFZixTQUFTQzs7SUFDZCxNQUFNLENBQUNDLFdBQVdDLFNBQVMsR0FBR0wsa0RBQVVBLENBQ3RDSix3RUFBZ0JBLEVBQ2hCO1FBQUNVLGNBQWNKO0lBQWEsR0FDNUJMLHFFQUFhQTtJQUdmLE1BQU1VLGlCQUFpQlQscUVBQWFBLENBQUNNLFVBQVVJLEtBQUs7SUFDcEQsTUFBTUMsV0FBV1Ysa0VBQVdBLENBQUNLO0lBQzdCLE1BQU1NLGVBQWVULGtGQUFtQkEsQ0FBQ0csV0FDdkM7UUFBQ0c7UUFDQ0U7SUFDRjtJQUVGLE1BQU1FLGVBQWVyQiwrQ0FBT0EsQ0FBQ3NCLElBQUksQ0FBQ0MsQ0FBQUEsU0FBVUEsT0FBT0MsTUFBTSxLQUFLSjtJQUc5RCxxQkFDRTs7MEJBQ0UsOERBQUN4Qix1REFBVUE7Z0JBQ1Q2Qix3QkFBVSw4REFBQzVCLG1EQUFRQTs7Ozs7Z0JBQ25CNkIscUJBQU8sOERBQUM1QixxREFBU0E7Ozs7O2dCQUNqQjZCLHdCQUFVLDhEQUFDNUIsbURBQVFBO29CQUFDNkIsWUFBWTtvQkFBQ1osY0FBYztvQkFBR2EsVUFBVTs7Ozs7O2dCQUM1REMsYUFDRTlCLCtDQUFPQSxDQUFDK0IsS0FBSyxDQUFDLEdBQUduQixlQUFlb0IsR0FBRyxDQUFDLENBQUNULFFBQVFVLHNCQUMzQyw4REFBQ2hDLHVEQUFVQTt3QkFFVGlDLFFBQVFYLE9BQU9XLE1BQU07d0JBQ3JCQyxNQUFNWixPQUFPWSxJQUFJO3dCQUNqQkMsUUFBUWIsT0FBT2EsTUFBTTt3QkFDckJDLFNBQVM7d0JBQ1RiLFFBQVFELE9BQU9DLE1BQU07d0JBQ3JCYyxTQUFTTCxRQUFRLE1BQU07dUJBTmxCVixPQUFPZ0IsRUFBRTs7Ozs7Z0JBVXBCQyw0QkFBYyw4REFBQ3RDLDREQUFZQTtvQkFBQ3VDLGFBQWEzQixVQUFVMkIsV0FBVztvQkFBRXRCLFVBQVVBOzs7Ozs7Z0JBQzFFdUIsV0FBVzVCLFVBQVVJLEtBQUssQ0FBQ2MsR0FBRyxDQUFDLENBQUNXLE1BQU1WLHNCQUNwQyw4REFBQzlCLG1EQUFRQTt3QkFFUHlDLFVBQVUsQ0FBQyxDQUFDeEI7d0JBQ1p5QixRQUFRLEVBQUU1QiwyQkFBQUEscUNBQUFBLGVBQWdCNkIsUUFBUSxDQUFDYjt3QkFDbkNjLFNBQVM7NEJBQ1BoQyxTQUFTO2dDQUNQaUMsTUFBTTNDLDBFQUFrQkEsQ0FBQzRDLFVBQVU7Z0NBQ25DaEI7NEJBQ0Y7d0JBQ0Y7d0JBQ0FULFFBQVFtQjt1QkFUSFY7Ozs7Ozs7Ozs7MEJBYVgsOERBQUM3Qiw4REFBYUE7Z0JBQ1o4QyxTQUNFbEQsK0NBQU9BLENBQUMrQixLQUFLLENBQUMsR0FBR25CLGVBQWVvQixHQUFHLENBQUMsQ0FBQ1QsUUFBUVUsc0JBQVUsOERBQUNoQyx1REFBVUE7d0JBRTlEaUMsUUFBUVgsT0FBT1csTUFBTTt3QkFDckJDLE1BQU1aLE9BQU9ZLElBQUk7d0JBQ2pCQyxRQUFRYixPQUFPYSxNQUFNO3dCQUNyQkMsU0FBUzt3QkFDVGIsUUFBUUQsT0FBT0MsTUFBTTt3QkFDckJjLFNBQVNMLFFBQVEsTUFBTTt1QkFObEJWLE9BQU9nQixFQUFFOzs7OztnQkFVcEJZLFVBQVUsRUFBRTlCLHlCQUFBQSxtQ0FBQUEsYUFBY2MsSUFBSTs7Ozs7Ozs7QUFHdEM7R0FwRWdCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9nYW1lLmpzeD9lNDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZUxheW91dH0gZnJvbSBcIi4vdWkvZ2FtZS1sYXlvdXRcIjtcbmltcG9ydCB7QmFja0xpbmt9IGZyb20gXCIuL3VpL2JhY2stbGlua1wiO1xuaW1wb3J0IHtHYW1lVGl0bGV9IGZyb20gXCIuL3VpL2dhbWUtdGl0bGVcIjtcbmltcG9ydCB7R2FtZUluZm99IGZyb20gXCIuL3VpL2dhbWUtaW5mb1wiO1xuaW1wb3J0IHtQTEFZRVJTfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7UGxheWVySW5mb30gZnJvbSBcIi4vdWkvcGxheWVyLWluZm9cIjtcbmltcG9ydCB7R2FtZU1vdmVJbmZvfSBmcm9tIFwiLi91aS9nYW1lLW1vdmUtaW5mb1wiO1xuaW1wb3J0IHtHYW1lQ2VsbH0gZnJvbSBcIi4vdWkvZ2FtZS1jZWxsXCI7XG5pbXBvcnQge0dhbWVPdmVyTW9kZWx9IGZyb20gXCIuL3VpL2dhbWUtb3Zlci1tb2RlbFwiO1xuaW1wb3J0IHtHQU1FX1NUQVRFX0FDVElPTlMsIGdhbWVTdGF0ZVJlZHVjZXIsIGluaXRHYW1lU3RhdGV9IGZyb20gXCIuL21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlclwiO1xuaW1wb3J0IHtjb21wdXRlV2lubmVyfSBmcm9tIFwiLi9tb2RlbC9jb21wdXRlLXdpbm5lclwiO1xuaW1wb3J0IHtnZXROZXh0VHVybn0gZnJvbSBcIi4vbW9kZWwvZ2V0LW5leHQtdHVyblwiO1xuaW1wb3J0IHt1c2VSZWR1Y2VyfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29tcHV0ZVdpbm5lclN5bWJvbH0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS13aW5uZXItc3ltYm9sXCI7XG5cbmNvbnN0IFBMQVlFUlNfQ09VTlQgPSAyO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICBnYW1lU3RhdGVSZWR1Y2VyLFxuICAgIHtwbGF5ZXJzQ291bnQ6IFBMQVlFUlNfQ09VTlR9LFxuICAgIGluaXRHYW1lU3RhdGVcbiAgKTtcblxuICBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVXaW5uZXIoZ2FtZVN0YXRlLmNlbGxzKTtcbiAgY29uc3QgbmV4dFR1cm4gPSBnZXROZXh0VHVybihnYW1lU3RhdGUpO1xuICBjb25zdCB3aW5uZXJTeW1ib2wgPSBDb21wdXRlV2lubmVyU3ltYm9sKGdhbWVTdGF0ZSxcbiAgICB7d2lubmVyU2VxdWVuY2UsXG4gICAgICBuZXh0VHVyblxuICAgIH0pO1xuXG4gIGNvbnN0IHdpbm5lclBsYXllciA9IFBMQVlFUlMuZmluZChwbGF5ZXIgPT4gcGxheWVyLnN5bWJvbCA9PT0gd2lubmVyU3ltYm9sKTtcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHYW1lTGF5b3V0XG4gICAgICAgIGJhY2tMaW5rPXs8QmFja0xpbmsvPn1cbiAgICAgICAgdGl0bGU9ezxHYW1lVGl0bGUvPn1cbiAgICAgICAgZ2FtZUluZm89ezxHYW1lSW5mbyBpc1JhdGluZ0dhbWUgcGxheWVyc0NvdW50PXs0fSB0aW1lTW9kZT17XCIxIG1pbiB0byB0dXJuXCJ9Lz59XG4gICAgICAgIHBsYXllcnNMaXN0PXtcbiAgICAgICAgICBQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XG4gICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxuICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XG4gICAgICAgICAgICAgIHNlY29uZHM9ezYwfVxuICAgICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XG4gICAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGdhbWVNb3ZlSW5mbz17PEdhbWVNb3ZlSW5mbyBjdXJyZW50VHVybj17Z2FtZVN0YXRlLmN1cnJlbnRUdXJufSBuZXh0VHVybj17bmV4dFR1cm59Lz59XG4gICAgICAgIGdhbWVDZWxscz17Z2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R2FtZUNlbGxcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBkaXNhYmxlZD17ISF3aW5uZXJTeW1ib2x9XG4gICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzeW1ib2w9e2NlbGx9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAvPlxuICAgICAgPEdhbWVPdmVyTW9kZWxcbiAgICAgICAgcGxheWVycz17XG4gICAgICAgICAgUExBWUVSUy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+IDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XG4gICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxuICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XG4gICAgICAgICAgICAgIHNlY29uZHM9ezYwfVxuICAgICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XG4gICAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHdpbm5lck5hbWU9e3dpbm5lclBsYXllcj8ubmFtZX0vPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkdhbWVMYXlvdXQiLCJCYWNrTGluayIsIkdhbWVUaXRsZSIsIkdhbWVJbmZvIiwiUExBWUVSUyIsIlBsYXllckluZm8iLCJHYW1lTW92ZUluZm8iLCJHYW1lQ2VsbCIsIkdhbWVPdmVyTW9kZWwiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJnYW1lU3RhdGVSZWR1Y2VyIiwiaW5pdEdhbWVTdGF0ZSIsImNvbXB1dGVXaW5uZXIiLCJnZXROZXh0VHVybiIsInVzZVJlZHVjZXIiLCJDb21wdXRlV2lubmVyU3ltYm9sIiwiUExBWUVSU19DT1VOVCIsIkdhbWUiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCIsInBsYXllcnNDb3VudCIsIndpbm5lclNlcXVlbmNlIiwiY2VsbHMiLCJuZXh0VHVybiIsIndpbm5lclN5bWJvbCIsIndpbm5lclBsYXllciIsImZpbmQiLCJwbGF5ZXIiLCJzeW1ib2wiLCJiYWNrTGluayIsInRpdGxlIiwiZ2FtZUluZm8iLCJpc1JhdGluZ0dhbWUiLCJ0aW1lTW9kZSIsInBsYXllcnNMaXN0Iiwic2xpY2UiLCJtYXAiLCJpbmRleCIsImF2YXRhciIsIm5hbWUiLCJyYXRpbmciLCJzZWNvbmRzIiwiaXNSaWdodCIsImlkIiwiZ2FtZU1vdmVJbmZvIiwiY3VycmVudFR1cm4iLCJnYW1lQ2VsbHMiLCJjZWxsIiwiZGlzYWJsZWQiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwib25DbGljayIsInR5cGUiLCJDRUxMX0NMSUNLIiwicGxheWVycyIsIndpbm5lck5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ }),

/***/ "./components/game-new/model/game-state-reducer.js":
/*!*********************************************************!*\
  !*** ./components/game-new/model/game-state-reducer.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   gameStateReducer: function() { return /* binding */ gameStateReducer; },\n/* harmony export */   initGameState: function() { return /* binding */ initGameState; }\n/* harmony export */ });\n/* harmony import */ var _get_next_turn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst initGameState = (param)=>{\n    let { playersCount } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentTurn: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS,\n        playersCount\n    };\n};\nconst gameStateReducer = (state, action)=>{\n    console.log(action);\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index } = action;\n                if (state.cells[index]) return state;\n                return {\n                    ...state,\n                    currentTurn: (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_0__.getNextTurn)(state),\n                    cells: state.cells.map((cell, i)=>i === index ? state.currentTurn : cell)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNGO0FBRW5DLE1BQU1FLHFCQUFxQjtJQUNoQ0MsWUFBWTtBQUNkLEVBQUM7QUFFTSxNQUFNQyxnQkFBZ0I7UUFBQyxFQUFFQyxZQUFZLEVBQUU7V0FBTTtRQUNsREMsT0FBTyxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CQyxhQUFhUixvREFBWUEsQ0FBQ1MsS0FBSztRQUMvQkw7SUFDRjtFQUFFO0FBR0ssTUFBTU0sbUJBQW1CLENBQUNDLE9BQU9DO0lBQ3RDQyxRQUFRQyxHQUFHLENBQUNGO0lBRVosT0FBUUEsT0FBT0csSUFBSTtRQUNqQixLQUFLZCxtQkFBbUJDLFVBQVU7WUFBRTtnQkFDbEMsTUFBTSxFQUFDYyxLQUFLLEVBQUMsR0FBR0o7Z0JBQ2hCLElBQUlELE1BQU1OLEtBQUssQ0FBQ1csTUFBTSxFQUNwQixPQUFPTDtnQkFFVCxPQUFPO29CQUNMLEdBQUdBLEtBQUs7b0JBQ1JILGFBQWFULDJEQUFXQSxDQUFDWTtvQkFDekJOLE9BQU9NLE1BQU1OLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQzVCQSxNQUFNSCxRQUFRTCxNQUFNSCxXQUFXLEdBQUdVO2dCQUV0QztZQUNGO1FBQ0E7WUFBUztnQkFDUCxPQUFPUDtZQUNUO0lBQ0Y7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvbW9kZWwvZ2FtZS1zdGF0ZS1yZWR1Y2VyLmpzP2EzNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXROZXh0VHVybn0gZnJvbSBcIi4vZ2V0LW5leHQtdHVyblwiO1xuaW1wb3J0IHtHQU1FX1NZTUJPTFN9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEVfQUNUSU9OUyA9IHtcbiAgQ0VMTF9DTElDSzogXCJjZWxsLWNsaWNrXCJcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRHYW1lU3RhdGUgPSAoeyBwbGF5ZXJzQ291bnQgfSkgPT4gKHtcbiAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICBjdXJyZW50VHVybjogR0FNRV9TWU1CT0xTLkNST1NTLFxuICBwbGF5ZXJzQ291bnQsXG59KVxuXG5cbmV4cG9ydCBjb25zdCBnYW1lU3RhdGVSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSzoge1xuICAgICAgY29uc3Qge2luZGV4fSA9IGFjdGlvbjtcbiAgICAgIGlmIChzdGF0ZS5jZWxsc1tpbmRleF0pXG4gICAgICAgIHJldHVybiBzdGF0ZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRUdXJuOiBnZXROZXh0VHVybihzdGF0ZSksXG4gICAgICAgIGNlbGxzOiBzdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XG4gICAgICAgICAgaSA9PT0gaW5kZXggPyBzdGF0ZS5jdXJyZW50VHVybiA6IGNlbGxcbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXROZXh0VHVybiIsIkdBTUVfU1lNQk9MUyIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsIkNFTExfQ0xJQ0siLCJpbml0R2FtZVN0YXRlIiwicGxheWVyc0NvdW50IiwiY2VsbHMiLCJBcnJheSIsImZpbGwiLCJjdXJyZW50VHVybiIsIkNST1NTIiwiZ2FtZVN0YXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJpbmRleCIsIm1hcCIsImNlbGwiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/game-state-reducer.js\n"));

/***/ })

});