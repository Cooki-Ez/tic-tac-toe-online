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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_over_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-over-model */ \"./components/game-new/ui/game-over-model.jsx\");\n/* harmony import */ var _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/game-state-reducer */ \"./components/game-new/model/game-state-reducer.js\");\n/* harmony import */ var _model_compute_winner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/compute-winner */ \"./components/game-new/model/compute-winner.js\");\n/* harmony import */ var _model_get_next_turn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/compute-winner-symbol */ \"./components/game-new/model/compute-winner-symbol.js\");\n/* harmony import */ var _model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model/compute-player-timer */ \"./components/game-new/model/compute-player-timer.js\");\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/timers */ \"./components/lib/timers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 2;\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useReducer)(_model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.gameStateReducer, {\n        playersCount: PLAYERS_COUNT,\n        defaultTimer: 10000,\n        currentTurnStart: Date.now()\n    }, _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.initGameState);\n    (0,_lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval)(1000, gameState.currentTurnStart, ()=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.GAME_STATE_ACTIONS.TICK,\n            now: Date.now()\n        });\n    });\n    const winnerSequence = (0,_model_compute_winner__WEBPACK_IMPORTED_MODULE_11__.computeWinner)(gameState);\n    const nextTurn = (0,_model_get_next_turn__WEBPACK_IMPORTED_MODULE_12__.getNextTurn)(gameState);\n    const winnerSymbol = (0,_model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__.ComputeWinnerSymbol)(gameState, {\n        winnerSequence,\n        nextTurn\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    const { cells, currentTurn } = gameState;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 19\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 16\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 min to turn\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>{\n                    const { timer, timerStartAt } = (0,_model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__.computePlayerTimer)(gameState, player.symbol, player.currentTurn);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1,\n                        timer: timer,\n                        timerStartAt: timerStartAt\n                    }, player.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, void 0);\n                }),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentTurn: currentTurn,\n                    nextTurn: nextTurn\n                }, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                        disabled: !!winnerSymbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        onClick: ()=>{\n                            dispatch({\n                                type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index,\n                                now: Date.now()\n                            });\n                        },\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_model__WEBPACK_IMPORTED_MODULE_9__.GameOverModel, {\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        timer: gameState.timers[player.symbol],\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, void 0)),\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"MvZeyiwj4lbrkAom0EJpgLAZ1sA=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8zQixVQUFVMkMsTUFBTSxDQUFDN0IsT0FBT0MsTUFBTSxDQUFDO3dCQUN0Q0EsUUFBUUQsT0FBT0MsTUFBTTt3QkFDckJpQixTQUFTTixRQUFRLE1BQU07dUJBTmxCWixPQUFPbUIsRUFBRTs7Ozs7Z0JBVXBCVyxVQUFVLEVBQUVoQyx5QkFBQUEsbUNBQUFBLGFBQWNrQixJQUFJOzs7Ozs7OztBQUd0QztHQXJHZ0IvQjs7UUFXZEYscURBQVdBOzs7S0FYR0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9nYW1lLmpzeD9lNDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZUxheW91dH0gZnJvbSBcIi4vdWkvZ2FtZS1sYXlvdXRcIjtcbmltcG9ydCB7QmFja0xpbmt9IGZyb20gXCIuL3VpL2JhY2stbGlua1wiO1xuaW1wb3J0IHtHYW1lVGl0bGV9IGZyb20gXCIuL3VpL2dhbWUtdGl0bGVcIjtcbmltcG9ydCB7R2FtZUluZm99IGZyb20gXCIuL3VpL2dhbWUtaW5mb1wiO1xuaW1wb3J0IHtQTEFZRVJTfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7UGxheWVySW5mb30gZnJvbSBcIi4vdWkvcGxheWVyLWluZm9cIjtcbmltcG9ydCB7R2FtZU1vdmVJbmZvfSBmcm9tIFwiLi91aS9nYW1lLW1vdmUtaW5mb1wiO1xuaW1wb3J0IHtHYW1lQ2VsbH0gZnJvbSBcIi4vdWkvZ2FtZS1jZWxsXCI7XG5pbXBvcnQge0dhbWVPdmVyTW9kZWx9IGZyb20gXCIuL3VpL2dhbWUtb3Zlci1tb2RlbFwiO1xuaW1wb3J0IHtHQU1FX1NUQVRFX0FDVElPTlMsIGdhbWVTdGF0ZVJlZHVjZXIsIGluaXRHYW1lU3RhdGV9IGZyb20gXCIuL21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlclwiO1xuaW1wb3J0IHtjb21wdXRlV2lubmVyfSBmcm9tIFwiLi9tb2RlbC9jb21wdXRlLXdpbm5lclwiO1xuaW1wb3J0IHtnZXROZXh0VHVybn0gZnJvbSBcIi4vbW9kZWwvZ2V0LW5leHQtdHVyblwiO1xuaW1wb3J0IHt1c2VSZWR1Y2VyfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29tcHV0ZVdpbm5lclN5bWJvbH0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS13aW5uZXItc3ltYm9sXCI7XG5pbXBvcnQge2NvbXB1dGVQbGF5ZXJUaW1lcn0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS1wbGF5ZXItdGltZXJcIjtcbmltcG9ydCB7dXNlSW50ZXJ2YWx9IGZyb20gXCIuLi9saWIvdGltZXJzXCI7XG5cbmNvbnN0IFBMQVlFUlNfQ09VTlQgPSAyO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICBnYW1lU3RhdGVSZWR1Y2VyLFxuICAgIHtcbiAgICAgIHBsYXllcnNDb3VudDogUExBWUVSU19DT1VOVCxcbiAgICAgIGRlZmF1bHRUaW1lcjogMTBfMDAwLFxuICAgICAgY3VycmVudFR1cm5TdGFydDogRGF0ZS5ub3coKVxuICAgIH0sXG4gICAgaW5pdEdhbWVTdGF0ZVxuICApO1xuXG4gIHVzZUludGVydmFsKDEwMDAsIGdhbWVTdGF0ZS5jdXJyZW50VHVyblN0YXJ0LCAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogR0FNRV9TVEFURV9BQ1RJT05TLlRJQ0ssXG4gICAgICBub3c6IERhdGUubm93KCksXG4gICAgfSk7XG4gIH0pXG5cbiAgY29uc3Qgd2lubmVyU2VxdWVuY2UgPSBjb21wdXRlV2lubmVyKGdhbWVTdGF0ZSk7XG4gIGNvbnN0IG5leHRUdXJuID0gZ2V0TmV4dFR1cm4oZ2FtZVN0YXRlKTtcbiAgY29uc3Qgd2lubmVyU3ltYm9sID0gQ29tcHV0ZVdpbm5lclN5bWJvbChcbiAgICBnYW1lU3RhdGUsXG4gICAge1xuICAgICAgd2lubmVyU2VxdWVuY2UsXG4gICAgICBuZXh0VHVyblxuICAgIH0pO1xuXG4gIGNvbnN0IHdpbm5lclBsYXllciA9IFBMQVlFUlMuZmluZChwbGF5ZXIgPT4gcGxheWVyLnN5bWJvbCA9PT0gd2lubmVyU3ltYm9sKTtcblxuICBjb25zdCB7Y2VsbHMsIGN1cnJlbnRUdXJufSA9IGdhbWVTdGF0ZTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2FtZUxheW91dFxuICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rLz59XG4gICAgICAgIHRpdGxlPXs8R2FtZVRpdGxlLz59XG4gICAgICAgIGdhbWVJbmZvPXtcbiAgICAgICAgICA8R2FtZUluZm8gaXNSYXRpbmdHYW1lIHBsYXllcnNDb3VudD17NH0gdGltZU1vZGU9e1wiMSBtaW4gdG8gdHVyblwifS8+XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyc0xpc3Q9e1xuICAgICAgICAgIFBMQVlFUlMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHt0aW1lciwgdGltZXJTdGFydEF0fSA9IGNvbXB1dGVQbGF5ZXJUaW1lcihcbiAgICAgICAgICAgICAgICBnYW1lU3RhdGUsXG4gICAgICAgICAgICAgICAgcGxheWVyLnN5bWJvbCxcbiAgICAgICAgICAgICAgICBwbGF5ZXIuY3VycmVudFR1cm5cbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgcmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgICAgICAgICAgdGltZXI9e3RpbWVyfVxuICAgICAgICAgICAgICAgICAgdGltZXJTdGFydEF0PXt0aW1lclN0YXJ0QXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZ2FtZU1vdmVJbmZvPXtcbiAgICAgICAgICA8R2FtZU1vdmVJbmZvXG4gICAgICAgICAgICBjdXJyZW50VHVybj17Y3VycmVudFR1cm59XG4gICAgICAgICAgICBuZXh0VHVybj17bmV4dFR1cm59XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R2FtZUNlbGxcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBkaXNhYmxlZD17ISF3aW5uZXJTeW1ib2x9XG4gICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxuICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgIG5vdzogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3ltYm9sPXtjZWxsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgLz5cbiAgICAgIDxHYW1lT3Zlck1vZGVsXG4gICAgICAgIHBsYXllcnM9e1xuICAgICAgICAgIFBMQVlFUlMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PlxuICAgICAgICAgICAgPFBsYXllckluZm9cbiAgICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XG4gICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cbiAgICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XG4gICAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cbiAgICAgICAgICAgICAgdGltZXI9e2dhbWVTdGF0ZS50aW1lcnNbcGxheWVyLnN5bWJvbF19XG4gICAgICAgICAgICAgIHN5bWJvbD17cGxheWVyLnN5bWJvbH1cbiAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgd2lubmVyTmFtZT17d2lubmVyUGxheWVyPy5uYW1lfS8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR2FtZUxheW91dCIsIkJhY2tMaW5rIiwiR2FtZVRpdGxlIiwiR2FtZUluZm8iLCJQTEFZRVJTIiwiUGxheWVySW5mbyIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVDZWxsIiwiR2FtZU92ZXJNb2RlbCIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsImdhbWVTdGF0ZVJlZHVjZXIiLCJpbml0R2FtZVN0YXRlIiwiY29tcHV0ZVdpbm5lciIsImdldE5leHRUdXJuIiwidXNlUmVkdWNlciIsIkNvbXB1dGVXaW5uZXJTeW1ib2wiLCJjb21wdXRlUGxheWVyVGltZXIiLCJ1c2VJbnRlcnZhbCIsIlBMQVlFUlNfQ09VTlQiLCJHYW1lIiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJwbGF5ZXJzQ291bnQiLCJkZWZhdWx0VGltZXIiLCJjdXJyZW50VHVyblN0YXJ0IiwiRGF0ZSIsIm5vdyIsInR5cGUiLCJUSUNLIiwid2lubmVyU2VxdWVuY2UiLCJuZXh0VHVybiIsIndpbm5lclN5bWJvbCIsIndpbm5lclBsYXllciIsImZpbmQiLCJwbGF5ZXIiLCJzeW1ib2wiLCJjZWxscyIsImN1cnJlbnRUdXJuIiwiYmFja0xpbmsiLCJ0aXRsZSIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwidGltZU1vZGUiLCJwbGF5ZXJzTGlzdCIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJ0aW1lciIsInRpbWVyU3RhcnRBdCIsImF2YXRhciIsIm5hbWUiLCJyYXRpbmciLCJpc1JpZ2h0IiwiaWQiLCJnYW1lTW92ZUluZm8iLCJnYW1lQ2VsbHMiLCJjZWxsIiwiZGlzYWJsZWQiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwib25DbGljayIsIkNFTExfQ0xJQ0siLCJwbGF5ZXJzIiwidGltZXJzIiwid2lubmVyTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});