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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _ui_game_over_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-over-model */ \"./components/game-new/ui/game-over-model.jsx\");\n/* harmony import */ var _model_use_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/use-game-state-reducer */ \"./components/game-new/model/use-game-state-reducer.js\");\n/* harmony import */ var _model_compute_winner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/compute-winner */ \"./components/game-new/model/compute-winner.js\");\n/* harmony import */ var _model_get_next_turn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 2;\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useReducer)(_model_use_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.gameStateReducer, {\n        playersCount: PLAYERS_COUNT\n    }, _model_use_game_state_reducer__WEBPACK_IMPORTED_MODULE_10__.initGameState);\n    const winnerSequence = (0,_model_compute_winner__WEBPACK_IMPORTED_MODULE_11__.computeWinner)(gameState.cells);\n    const nextTurn = (0,_model_get_next_turn__WEBPACK_IMPORTED_MODULE_12__.getNextTurn)(gameState.currentTurn, PLAYERS_COUNT);\n    const winnerSymbol = computeWinnerSymbol(gameState, {\n        winnerSequence\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 19\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 16\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 min to turn\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 19\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, void 0)),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentTurn: currentTurn,\n                    nextTurn: nextTurn\n                }, void 0, false, {\n                    fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 23\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                        disabled: !!winnerSymbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        onClick: ()=>{\n                            dispatch({\n                                type: GAME_STATE_ACTIONS.CELL_CLICK,\n                                index\n                            });\n                        },\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_model__WEBPACK_IMPORTED_MODULE_9__.GameOverModel, {\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        name: player.name,\n                        rating: player.rating,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 66\n                    }, void 0)),\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name\n            }, void 0, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"hjOiclnsfqrQwVD5srQmTue05c4=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNFO0FBQ0Y7QUFDSjtBQUNRO0FBQ0s7QUFDVDtBQUNXO0FBQzRCO0FBQzFCO0FBQ0g7QUFDakI7QUFFakMsTUFBTWMsZ0JBQWdCO0FBRWYsU0FBU0M7O0lBQ2QsTUFBTSxDQUFDQyxXQUFXQyxTQUFTLEdBQUdKLGtEQUFVQSxDQUN0Q0osNEVBQWdCQSxFQUNoQjtRQUFDUyxjQUFjSjtJQUFhLEdBQzVCSix5RUFBYUE7SUFHZixNQUFNUyxpQkFBaUJSLHFFQUFhQSxDQUFDSyxVQUFVSSxLQUFLO0lBQ3BELE1BQU1DLFdBQVdULGtFQUFXQSxDQUFDSSxVQUFVTSxXQUFXLEVBQUVSO0lBQ3BELE1BQU1TLGVBQWVDLG9CQUFvQlIsV0FBVztRQUFDRztJQUFjO0lBRW5FLE1BQU1NLGVBQWVyQiwrQ0FBT0EsQ0FBQ3NCLElBQUksQ0FBQ0MsQ0FBQUEsU0FBVUEsT0FBT0MsTUFBTSxLQUFLTDtJQUc5RCxxQkFDRTs7MEJBQ0UsOERBQUN2Qix1REFBVUE7Z0JBQ1Q2Qix3QkFBVSw4REFBQzVCLG1EQUFRQTs7Ozs7Z0JBQ25CNkIscUJBQU8sOERBQUM1QixxREFBU0E7Ozs7O2dCQUNqQjZCLHdCQUFVLDhEQUFDNUIsbURBQVFBO29CQUFDNkIsWUFBWTtvQkFBQ2QsY0FBYztvQkFBR2UsVUFBVTs7Ozs7O2dCQUM1REMsYUFDRTlCLCtDQUFPQSxDQUFDK0IsS0FBSyxDQUFDLEdBQUdyQixlQUFlc0IsR0FBRyxDQUFDLENBQUNULFFBQVFVLHNCQUMzQyw4REFBQ2hDLHVEQUFVQTt3QkFFVGlDLFFBQVFYLE9BQU9XLE1BQU07d0JBQ3JCQyxNQUFNWixPQUFPWSxJQUFJO3dCQUNqQkMsUUFBUWIsT0FBT2EsTUFBTTt3QkFDckJDLFNBQVM7d0JBQ1RiLFFBQVFELE9BQU9DLE1BQU07d0JBQ3JCYyxTQUFTTCxRQUFRLE1BQU07dUJBTmxCVixPQUFPZ0IsRUFBRTs7Ozs7Z0JBVXBCQyw0QkFBYyw4REFBQ3RDLDREQUFZQTtvQkFBQ2dCLGFBQWFBO29CQUFhRCxVQUFVQTs7Ozs7O2dCQUNoRXdCLFdBQVd6QixNQUFNZ0IsR0FBRyxDQUFDLENBQUNVLE1BQU1ULHNCQUMxQiw4REFBQzlCLG1EQUFRQTt3QkFFUHdDLFVBQVUsQ0FBQyxDQUFDeEI7d0JBQ1p5QixRQUFRLEVBQUU3QiwyQkFBQUEscUNBQUFBLGVBQWdCOEIsUUFBUSxDQUFDWjt3QkFDbkNhLFNBQVM7NEJBQ1BqQyxTQUFTO2dDQUNQa0MsTUFBTUMsbUJBQW1CQyxVQUFVO2dDQUNuQ2hCOzRCQUNGO3dCQUNGO3dCQUNBVCxRQUFRa0I7dUJBVEhUOzs7Ozs7Ozs7OzBCQWFYLDhEQUFDN0IsOERBQWFBO2dCQUNaOEMsU0FDRWxELCtDQUFPQSxDQUFDK0IsS0FBSyxDQUFDLEdBQUdyQixlQUFlc0IsR0FBRyxDQUFDLENBQUNULFFBQVFVLHNCQUFVLDhEQUFDaEMsdURBQVVBO3dCQUU5RGlDLFFBQVFYLE9BQU9XLE1BQU07d0JBQ3JCQyxNQUFNWixPQUFPWSxJQUFJO3dCQUNqQkMsUUFBUWIsT0FBT2EsTUFBTTt3QkFDckJDLFNBQVM7d0JBQ1RiLFFBQVFELE9BQU9DLE1BQU07d0JBQ3JCYyxTQUFTTCxRQUFRLE1BQU07dUJBTmxCVixPQUFPZ0IsRUFBRTs7Ozs7Z0JBVXBCWSxVQUFVLEVBQUU5Qix5QkFBQUEsbUNBQUFBLGFBQWNjLElBQUk7Ozs7Ozs7O0FBR3RDO0dBakVnQnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvZ2FtZS5qc3g/ZTQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dhbWVMYXlvdXR9IGZyb20gXCIuL3VpL2dhbWUtbGF5b3V0XCI7XG5pbXBvcnQge0JhY2tMaW5rfSBmcm9tIFwiLi91aS9iYWNrLWxpbmtcIjtcbmltcG9ydCB7R2FtZVRpdGxlfSBmcm9tIFwiLi91aS9nYW1lLXRpdGxlXCI7XG5pbXBvcnQge0dhbWVJbmZvfSBmcm9tIFwiLi91aS9nYW1lLWluZm9cIjtcbmltcG9ydCB7UExBWUVSU30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge1BsYXllckluZm99IGZyb20gXCIuL3VpL3BsYXllci1pbmZvXCI7XG5pbXBvcnQge0dhbWVNb3ZlSW5mb30gZnJvbSBcIi4vdWkvZ2FtZS1tb3ZlLWluZm9cIjtcbmltcG9ydCB7R2FtZUNlbGx9IGZyb20gXCIuL3VpL2dhbWUtY2VsbFwiO1xuaW1wb3J0IHtHYW1lT3Zlck1vZGVsfSBmcm9tIFwiLi91aS9nYW1lLW92ZXItbW9kZWxcIjtcbmltcG9ydCB7Z2FtZVN0YXRlUmVkdWNlciwgaW5pdEdhbWVTdGF0ZX0gZnJvbSBcIi4vbW9kZWwvdXNlLWdhbWUtc3RhdGUtcmVkdWNlclwiO1xuaW1wb3J0IHtjb21wdXRlV2lubmVyfSBmcm9tIFwiLi9tb2RlbC9jb21wdXRlLXdpbm5lclwiO1xuaW1wb3J0IHtnZXROZXh0VHVybn0gZnJvbSBcIi4vbW9kZWwvZ2V0LW5leHQtdHVyblwiO1xuaW1wb3J0IHt1c2VSZWR1Y2VyfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUExBWUVSU19DT1VOVCA9IDI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xuICBjb25zdCBbZ2FtZVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIGdhbWVTdGF0ZVJlZHVjZXIsXG4gICAge3BsYXllcnNDb3VudDogUExBWUVSU19DT1VOVH0sXG4gICAgaW5pdEdhbWVTdGF0ZVxuICApO1xuXG4gIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZVdpbm5lcihnYW1lU3RhdGUuY2VsbHMpO1xuICBjb25zdCBuZXh0VHVybiA9IGdldE5leHRUdXJuKGdhbWVTdGF0ZS5jdXJyZW50VHVybiwgUExBWUVSU19DT1VOVCk7XG4gIGNvbnN0IHdpbm5lclN5bWJvbCA9IGNvbXB1dGVXaW5uZXJTeW1ib2woZ2FtZVN0YXRlLCB7d2lubmVyU2VxdWVuY2V9KTtcblxuICBjb25zdCB3aW5uZXJQbGF5ZXIgPSBQTEFZRVJTLmZpbmQocGxheWVyID0+IHBsYXllci5zeW1ib2wgPT09IHdpbm5lclN5bWJvbCk7XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2FtZUxheW91dFxuICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rLz59XG4gICAgICAgIHRpdGxlPXs8R2FtZVRpdGxlLz59XG4gICAgICAgIGdhbWVJbmZvPXs8R2FtZUluZm8gaXNSYXRpbmdHYW1lIHBsYXllcnNDb3VudD17NH0gdGltZU1vZGU9e1wiMSBtaW4gdG8gdHVyblwifS8+fVxuICAgICAgICBwbGF5ZXJzTGlzdD17XG4gICAgICAgICAgUExBWUVSUy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+XG4gICAgICAgICAgICA8UGxheWVySW5mb1xuICAgICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cbiAgICAgICAgICAgICAgYXZhdGFyPXtwbGF5ZXIuYXZhdGFyfVxuICAgICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cbiAgICAgICAgICAgICAgcmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxuICAgICAgICAgICAgICBzZWNvbmRzPXs2MH1cbiAgICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxuICAgICAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBnYW1lTW92ZUluZm89ezxHYW1lTW92ZUluZm8gY3VycmVudFR1cm49e2N1cnJlbnRUdXJufSBuZXh0VHVybj17bmV4dFR1cm59Lz59XG4gICAgICAgIGdhbWVDZWxscz17Y2VsbHMubWFwKChjZWxsLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxHYW1lQ2VsbFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGRpc2FibGVkPXshIXdpbm5lclN5bWJvbH1cbiAgICAgICAgICAgIGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0ssXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN5bWJvbD17Y2VsbH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIC8+XG4gICAgICA8R2FtZU92ZXJNb2RlbFxuICAgICAgICBwbGF5ZXJzPXtcbiAgICAgICAgICBQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4gPFBsYXllckluZm9cbiAgICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XG4gICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cbiAgICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XG4gICAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cbiAgICAgICAgICAgICAgc2Vjb25kcz17NjB9XG4gICAgICAgICAgICAgIHN5bWJvbD17cGxheWVyLnN5bWJvbH1cbiAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgd2lubmVyTmFtZT17d2lubmVyUGxheWVyPy5uYW1lfS8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR2FtZUxheW91dCIsIkJhY2tMaW5rIiwiR2FtZVRpdGxlIiwiR2FtZUluZm8iLCJQTEFZRVJTIiwiUGxheWVySW5mbyIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVDZWxsIiwiR2FtZU92ZXJNb2RlbCIsImdhbWVTdGF0ZVJlZHVjZXIiLCJpbml0R2FtZVN0YXRlIiwiY29tcHV0ZVdpbm5lciIsImdldE5leHRUdXJuIiwidXNlUmVkdWNlciIsIlBMQVlFUlNfQ09VTlQiLCJHYW1lIiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJwbGF5ZXJzQ291bnQiLCJ3aW5uZXJTZXF1ZW5jZSIsImNlbGxzIiwibmV4dFR1cm4iLCJjdXJyZW50VHVybiIsIndpbm5lclN5bWJvbCIsImNvbXB1dGVXaW5uZXJTeW1ib2wiLCJ3aW5uZXJQbGF5ZXIiLCJmaW5kIiwicGxheWVyIiwic3ltYm9sIiwiYmFja0xpbmsiLCJ0aXRsZSIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwidGltZU1vZGUiLCJwbGF5ZXJzTGlzdCIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJhdmF0YXIiLCJuYW1lIiwicmF0aW5nIiwic2Vjb25kcyIsImlzUmlnaHQiLCJpZCIsImdhbWVNb3ZlSW5mbyIsImdhbWVDZWxscyIsImNlbGwiLCJkaXNhYmxlZCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJvbkNsaWNrIiwidHlwZSIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsIkNFTExfQ0xJQ0siLCJwbGF5ZXJzIiwid2lubmVyTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});