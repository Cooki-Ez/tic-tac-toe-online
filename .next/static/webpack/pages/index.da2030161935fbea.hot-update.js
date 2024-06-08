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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_over_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-over-model */ \"./components/game-new/ui/game-over-model.jsx\");\n/* harmony import */ var _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/game-state-reducer */ \"./components/game-new/model/game-state-reducer.js\");\n/* harmony import */ var _model_compute_winner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/compute-winner */ \"./components/game-new/model/compute-winner.js\");\n/* harmony import */ var _model_get_next_turn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/compute-winner-symbol */ \"./components/game-new/model/compute-winner-symbol.js\");\n/* harmony import */ var _model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model/compute-player-timer */ \"./components/game-new/model/compute-player-timer.js\");\n/* harmony import */ var _lib_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/timers */ \"./components/lib/timers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 2;\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useReducer)(_model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.gameStateReducer, {\n        playersCount: PLAYERS_COUNT,\n        defaultTimer: 60000,\n        currentTurnStart: Date.now()\n    }, _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.initGameState);\n    (0,_lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval)(100, !!gameState.currentTurnStart, (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(()=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.GAME_STATE_ACTIONS.TICK,\n            now: Date.now()\n        });\n    }, []));\n    const winnerSequence = (0,react__WEBPACK_IMPORTED_MODULE_13__.useMemo)(()=>(0,_model_compute_winner__WEBPACK_IMPORTED_MODULE_11__.computeWinner)(gameState), [\n        gameState\n    ]);\n    const nextTurn = (0,_model_get_next_turn__WEBPACK_IMPORTED_MODULE_12__.getNextTurn)(gameState);\n    const winnerSymbol = (0,_model_compute_winner_symbol__WEBPACK_IMPORTED_MODULE_14__.ComputeWinnerSymbol)(gameState, {\n        winnerSequence,\n        nextTurn\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    const { cells, currentTurn } = gameState;\n    const handleCellClick = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)((index)=>{\n        dispatch({\n            type: _model_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.GAME_STATE_ACTIONS.CELL_CLICK,\n            index,\n            now: Date.now()\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 19\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 16\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 min to turn\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>{\n                    const { timer, timerStartAt } = (0,_model_compute_player_timer__WEBPACK_IMPORTED_MODULE_15__.computePlayerTimer)(gameState, player.symbol, player.currentTurn);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1,\n                        timer: timer,\n                        timerStartAt: timerStartAt\n                    }, player.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, void 0);\n                }),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentTurn: currentTurn,\n                    nextTurn: nextTurn\n                }, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                        index: index,\n                        disabled: !!winnerSymbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        onClick: handleCellClick,\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_model__WEBPACK_IMPORTED_MODULE_9__.GameOverModel, {\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        timer: gameState.timers[player.symbol],\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 13\n                    }, void 0)),\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"FKUsGGtAkG8InZnQodXMXmo+1YE=\", false, function() {\n    return [\n        _lib_timers__WEBPACK_IMPORTED_MODULE_16__.useInterval\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2QsUUFBUUssc0JBQzNDLDhEQUFDcEMsdURBQVVBO3dCQUVUZ0QsUUFBUWpCLE9BQU9pQixNQUFNO3dCQUNyQkMsTUFBTWxCLE9BQU9rQixJQUFJO3dCQUNqQkMsUUFBUW5CLE9BQU9tQixNQUFNO3dCQUNyQkosT0FBTzdCLFVBQVU0QyxNQUFNLENBQUM5QixPQUFPQyxNQUFNLENBQUM7d0JBQ3RDQSxRQUFRRCxPQUFPQyxNQUFNO3dCQUNyQm1CLFNBQVNmLFFBQVEsTUFBTTt1QkFObEJMLE9BQU9xQixFQUFFOzs7OztnQkFVcEJVLFVBQVUsRUFBRWpDLHlCQUFBQSxtQ0FBQUEsYUFBY29CLElBQUk7Ozs7Ozs7O0FBR3RDO0dBMUdnQmpDOztRQVdkRixxREFBV0E7OztLQVhHRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4P2U0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHYW1lTGF5b3V0fSBmcm9tIFwiLi91aS9nYW1lLWxheW91dFwiO1xuaW1wb3J0IHtCYWNrTGlua30gZnJvbSBcIi4vdWkvYmFjay1saW5rXCI7XG5pbXBvcnQge0dhbWVUaXRsZX0gZnJvbSBcIi4vdWkvZ2FtZS10aXRsZVwiO1xuaW1wb3J0IHtHYW1lSW5mb30gZnJvbSBcIi4vdWkvZ2FtZS1pbmZvXCI7XG5pbXBvcnQge1BMQVlFUlN9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtQbGF5ZXJJbmZvfSBmcm9tIFwiLi91aS9wbGF5ZXItaW5mb1wiO1xuaW1wb3J0IHtHYW1lTW92ZUluZm99IGZyb20gXCIuL3VpL2dhbWUtbW92ZS1pbmZvXCI7XG5pbXBvcnQge0dhbWVDZWxsfSBmcm9tIFwiLi91aS9nYW1lLWNlbGxcIjtcbmltcG9ydCB7R2FtZU92ZXJNb2RlbH0gZnJvbSBcIi4vdWkvZ2FtZS1vdmVyLW1vZGVsXCI7XG5pbXBvcnQge0dBTUVfU1RBVEVfQUNUSU9OUywgZ2FtZVN0YXRlUmVkdWNlciwgaW5pdEdhbWVTdGF0ZX0gZnJvbSBcIi4vbW9kZWwvZ2FtZS1zdGF0ZS1yZWR1Y2VyXCI7XG5pbXBvcnQge2NvbXB1dGVXaW5uZXJ9IGZyb20gXCIuL21vZGVsL2NvbXB1dGUtd2lubmVyXCI7XG5pbXBvcnQge2dldE5leHRUdXJufSBmcm9tIFwiLi9tb2RlbC9nZXQtbmV4dC10dXJuXCI7XG5pbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWR1Y2VyfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Q29tcHV0ZVdpbm5lclN5bWJvbH0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS13aW5uZXItc3ltYm9sXCI7XG5pbXBvcnQge2NvbXB1dGVQbGF5ZXJUaW1lcn0gZnJvbSBcIi4vbW9kZWwvY29tcHV0ZS1wbGF5ZXItdGltZXJcIjtcbmltcG9ydCB7dXNlSW50ZXJ2YWx9IGZyb20gXCIuLi9saWIvdGltZXJzXCI7XG5cbmNvbnN0IFBMQVlFUlNfQ09VTlQgPSAyO1xuXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICBnYW1lU3RhdGVSZWR1Y2VyLFxuICAgIHtcbiAgICAgIHBsYXllcnNDb3VudDogUExBWUVSU19DT1VOVCxcbiAgICAgIGRlZmF1bHRUaW1lcjogNjBfMDAwLFxuICAgICAgY3VycmVudFR1cm5TdGFydDogRGF0ZS5ub3coKVxuICAgIH0sXG4gICAgaW5pdEdhbWVTdGF0ZVxuICApO1xuXG4gIHVzZUludGVydmFsKDEwMCwgISFnYW1lU3RhdGUuY3VycmVudFR1cm5TdGFydCxcbiAgICB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5USUNLLFxuICAgICAgICBub3c6IERhdGUubm93KCksXG4gICAgICB9KTtcbiAgICB9LCBbXSlcbiAgKTtcblxuICBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IHVzZU1lbW8oKCkgPT4gY29tcHV0ZVdpbm5lcihnYW1lU3RhdGUpLCBbZ2FtZVN0YXRlXSk7XG4gIGNvbnN0IG5leHRUdXJuID0gZ2V0TmV4dFR1cm4oZ2FtZVN0YXRlKTtcbiAgY29uc3Qgd2lubmVyU3ltYm9sID0gQ29tcHV0ZVdpbm5lclN5bWJvbChcbiAgICBnYW1lU3RhdGUsXG4gICAge1xuICAgICAgd2lubmVyU2VxdWVuY2UsXG4gICAgICBuZXh0VHVyblxuICAgIH0pO1xuXG4gIGNvbnN0IHdpbm5lclBsYXllciA9IFBMQVlFUlMuZmluZChwbGF5ZXIgPT4gcGxheWVyLnN5bWJvbCA9PT0gd2lubmVyU3ltYm9sKTtcblxuICBjb25zdCB7Y2VsbHMsIGN1cnJlbnRUdXJufSA9IGdhbWVTdGF0ZTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSyxcbiAgICAgIGluZGV4LFxuICAgICAgbm93OiBEYXRlLm5vdygpLFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2FtZUxheW91dFxuICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rLz59XG4gICAgICAgIHRpdGxlPXs8R2FtZVRpdGxlLz59XG4gICAgICAgIGdhbWVJbmZvPXtcbiAgICAgICAgICA8R2FtZUluZm8gaXNSYXRpbmdHYW1lIHBsYXllcnNDb3VudD17NH0gdGltZU1vZGU9e1wiMSBtaW4gdG8gdHVyblwifS8+XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyc0xpc3Q9e1xuICAgICAgICAgIFBMQVlFUlMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHt0aW1lciwgdGltZXJTdGFydEF0fSA9IGNvbXB1dGVQbGF5ZXJUaW1lcihcbiAgICAgICAgICAgICAgICBnYW1lU3RhdGUsXG4gICAgICAgICAgICAgICAgcGxheWVyLnN5bWJvbCxcbiAgICAgICAgICAgICAgICBwbGF5ZXIuY3VycmVudFR1cm5cbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgcmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxuICAgICAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgICAgICAgICAgdGltZXI9e3RpbWVyfVxuICAgICAgICAgICAgICAgICAgdGltZXJTdGFydEF0PXt0aW1lclN0YXJ0QXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZ2FtZU1vdmVJbmZvPXtcbiAgICAgICAgICA8R2FtZU1vdmVJbmZvXG4gICAgICAgICAgICBjdXJyZW50VHVybj17Y3VycmVudFR1cm59XG4gICAgICAgICAgICBuZXh0VHVybj17bmV4dFR1cm59XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8R2FtZUNlbGxcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICBkaXNhYmxlZD17ISF3aW5uZXJTeW1ib2x9XG4gICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNlbGxDbGlja31cbiAgICAgICAgICAgIHN5bWJvbD17Y2VsbH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIC8+XG4gICAgICA8R2FtZU92ZXJNb2RlbFxuICAgICAgICBwbGF5ZXJzPXtcbiAgICAgICAgICBQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxuICAgICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XG4gICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxuICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XG4gICAgICAgICAgICAgIHRpbWVyPXtnYW1lU3RhdGUudGltZXJzW3BsYXllci5zeW1ib2xdfVxuICAgICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XG4gICAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHdpbm5lck5hbWU9e3dpbm5lclBsYXllcj8ubmFtZX0vPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkdhbWVMYXlvdXQiLCJCYWNrTGluayIsIkdhbWVUaXRsZSIsIkdhbWVJbmZvIiwiUExBWUVSUyIsIlBsYXllckluZm8iLCJHYW1lTW92ZUluZm8iLCJHYW1lQ2VsbCIsIkdhbWVPdmVyTW9kZWwiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJnYW1lU3RhdGVSZWR1Y2VyIiwiaW5pdEdhbWVTdGF0ZSIsImNvbXB1dGVXaW5uZXIiLCJnZXROZXh0VHVybiIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJDb21wdXRlV2lubmVyU3ltYm9sIiwiY29tcHV0ZVBsYXllclRpbWVyIiwidXNlSW50ZXJ2YWwiLCJQTEFZRVJTX0NPVU5UIiwiR2FtZSIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwicGxheWVyc0NvdW50IiwiZGVmYXVsdFRpbWVyIiwiY3VycmVudFR1cm5TdGFydCIsIkRhdGUiLCJub3ciLCJ0eXBlIiwiVElDSyIsIndpbm5lclNlcXVlbmNlIiwibmV4dFR1cm4iLCJ3aW5uZXJTeW1ib2wiLCJ3aW5uZXJQbGF5ZXIiLCJmaW5kIiwicGxheWVyIiwic3ltYm9sIiwiY2VsbHMiLCJjdXJyZW50VHVybiIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwiQ0VMTF9DTElDSyIsImJhY2tMaW5rIiwidGl0bGUiLCJnYW1lSW5mbyIsImlzUmF0aW5nR2FtZSIsInRpbWVNb2RlIiwicGxheWVyc0xpc3QiLCJzbGljZSIsIm1hcCIsInRpbWVyIiwidGltZXJTdGFydEF0IiwiYXZhdGFyIiwibmFtZSIsInJhdGluZyIsImlzUmlnaHQiLCJpZCIsImdhbWVNb3ZlSW5mbyIsImdhbWVDZWxscyIsImNlbGwiLCJkaXNhYmxlZCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJvbkNsaWNrIiwicGxheWVycyIsInRpbWVycyIsIndpbm5lck5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});