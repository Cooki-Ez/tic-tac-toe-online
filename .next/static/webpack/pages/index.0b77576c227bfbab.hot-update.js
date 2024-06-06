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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _model_use_game_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/use-game-state */ \"./components/game-new/model/use-game-state.js\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 4;\nfunction Game() {\n    _s();\n    const { cells, currentTurn, nextTurn, winnerSequence, winnerSymbol, handleCellClick } = (0,_model_use_game_state__WEBPACK_IMPORTED_MODULE_8__.useGameState)(PLAYERS_COUNT);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n        backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 24,\n            columnNumber: 17\n        }, void 0),\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 25,\n            columnNumber: 14\n        }, void 0),\n        gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n            isRatingGame: true,\n            playersCount: 4,\n            timeMode: \"1 min to turn\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 26,\n            columnNumber: 17\n        }, void 0),\n        playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                avatar: player.avatar,\n                name: player.name,\n                rating: player.rating,\n                seconds: 60,\n                symbol: player.symbol,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 28,\n                columnNumber: 40\n            }, void 0)),\n        gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n            currentTurn: currentTurn,\n            nextTurn: nextTurn\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 39,\n            columnNumber: 21\n        }, void 0),\n        gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_9__.GameCell, {\n                disabled: !!winnerSymbol,\n                isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                onClick: ()=>{\n                    handleCellClick(index);\n                },\n                symbol: cell\n            }, index, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, void 0))\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Game, \"gghR9cunsRZXuhWfcVytWiqD9BQ=\", false, function() {\n    return [\n        _model_use_game_state__WEBPACK_IMPORTED_MODULE_8__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDRTtBQUNGO0FBQ0o7QUFDUTtBQUNLO0FBQ0c7QUFDWjtBQUV4QyxNQUFNUyxnQkFBZ0I7QUFFZixTQUFTQzs7SUFFZCxNQUFNLEVBQUNDLEtBQUssRUFDVkMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLGNBQWMsRUFDZEMsWUFBWSxFQUNaQyxlQUFlLEVBQUMsR0FBR1QsbUVBQVlBLENBQUNFO0lBRWxDLHFCQUNFLDhEQUFDVCx1REFBVUE7UUFDVGlCLHdCQUFVLDhEQUFDaEIsbURBQVFBOzs7OztRQUNuQmlCLHFCQUFPLDhEQUFDaEIscURBQVNBOzs7OztRQUNqQmlCLHdCQUFVLDhEQUFDaEIsbURBQVFBO1lBQUNpQixZQUFZO1lBQUNDLGNBQWM7WUFBR0MsVUFBVTs7Ozs7O1FBQzVEQyxhQUNFbkIsK0NBQU9BLENBQUNvQixHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQVUsOERBQUNyQix1REFBVUE7Z0JBRXRDc0IsUUFBUUYsT0FBT0UsTUFBTTtnQkFDckJDLE1BQU1ILE9BQU9HLElBQUk7Z0JBQ2pCQyxRQUFRSixPQUFPSSxNQUFNO2dCQUNyQkMsU0FBUztnQkFDVEMsUUFBUU4sT0FBT00sTUFBTTtnQkFDckJDLFNBQVNOLFFBQVEsTUFBTTtlQU5sQkQsT0FBT1EsRUFBRTs7Ozs7UUFVcEJDLDRCQUFjLDhEQUFDNUIsNERBQVlBO1lBQUNNLGFBQWFBO1lBQWFDLFVBQVVBOzs7Ozs7UUFDaEVzQixXQUFXeEIsTUFBTWEsR0FBRyxDQUFDLENBQUNZLE1BQU1WLHNCQUMxQiw4REFBQ2xCLG1EQUFRQTtnQkFFUDZCLFVBQVUsQ0FBQyxDQUFDdEI7Z0JBQ1p1QixRQUFRLEVBQUV4QiwyQkFBQUEscUNBQUFBLGVBQWdCeUIsUUFBUSxDQUFDYjtnQkFDbkNjLFNBQVM7b0JBQ1B4QixnQkFBZ0JVO2dCQUNsQjtnQkFDQUssUUFBUUs7ZUFOSFY7Ozs7Ozs7Ozs7QUFXZjtHQXhDZ0JoQjs7UUFPT0gsK0RBQVlBOzs7S0FQbkJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvZ2FtZS5qc3g/ZTQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dhbWVMYXlvdXR9IGZyb20gXCIuL3VpL2dhbWUtbGF5b3V0XCI7XG5pbXBvcnQge0JhY2tMaW5rfSBmcm9tIFwiLi91aS9iYWNrLWxpbmtcIjtcbmltcG9ydCB7R2FtZVRpdGxlfSBmcm9tIFwiLi91aS9nYW1lLXRpdGxlXCI7XG5pbXBvcnQge0dhbWVJbmZvfSBmcm9tIFwiLi91aS9nYW1lLWluZm9cIjtcbmltcG9ydCB7UExBWUVSU30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge1BsYXllckluZm99IGZyb20gXCIuL3VpL3BsYXllci1pbmZvXCI7XG5pbXBvcnQge0dhbWVNb3ZlSW5mb30gZnJvbSBcIi4vdWkvZ2FtZS1tb3ZlLWluZm9cIjtcbmltcG9ydCB7dXNlR2FtZVN0YXRlfSBmcm9tIFwiLi9tb2RlbC91c2UtZ2FtZS1zdGF0ZVwiO1xuaW1wb3J0IHtHYW1lQ2VsbH0gZnJvbSBcIi4vdWkvZ2FtZS1jZWxsXCI7XG5cbmNvbnN0IFBMQVlFUlNfQ09VTlQgPSA0XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xuXG4gIGNvbnN0IHtjZWxscyxcbiAgICBjdXJyZW50VHVybixcbiAgICBuZXh0VHVybixcbiAgICB3aW5uZXJTZXF1ZW5jZSxcbiAgICB3aW5uZXJTeW1ib2wsXG4gICAgaGFuZGxlQ2VsbENsaWNrfSA9IHVzZUdhbWVTdGF0ZShQTEFZRVJTX0NPVU5UKTtcblxuICByZXR1cm4gKFxuICAgIDxHYW1lTGF5b3V0XG4gICAgICBiYWNrTGluaz17PEJhY2tMaW5rLz59XG4gICAgICB0aXRsZT17PEdhbWVUaXRsZS8+fVxuICAgICAgZ2FtZUluZm89ezxHYW1lSW5mbyBpc1JhdGluZ0dhbWUgcGxheWVyc0NvdW50PXs0fSB0aW1lTW9kZT17XCIxIG1pbiB0byB0dXJuXCJ9Lz59XG4gICAgICBwbGF5ZXJzTGlzdD17XG4gICAgICAgIFBMQVlFUlMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiA8UGxheWVySW5mb1xuICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XG4gICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XG4gICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cbiAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cbiAgICAgICAgICAgIHNlY29uZHM9ezYwfVxuICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxuICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGdhbWVNb3ZlSW5mbz17PEdhbWVNb3ZlSW5mbyBjdXJyZW50VHVybj17Y3VycmVudFR1cm59IG5leHRUdXJuPXtuZXh0VHVybn0gLz59XG4gICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+IChcbiAgICAgICAgPEdhbWVDZWxsXG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBkaXNhYmxlZD17ISF3aW5uZXJTeW1ib2x9XG4gICAgICAgICAgaXNXaW5uZXI9e3dpbm5lclNlcXVlbmNlPy5pbmNsdWRlcyhpbmRleCl9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlQ2VsbENsaWNrKGluZGV4KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHN5bWJvbD17Y2VsbH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR2FtZUxheW91dCIsIkJhY2tMaW5rIiwiR2FtZVRpdGxlIiwiR2FtZUluZm8iLCJQTEFZRVJTIiwiUGxheWVySW5mbyIsIkdhbWVNb3ZlSW5mbyIsInVzZUdhbWVTdGF0ZSIsIkdhbWVDZWxsIiwiUExBWUVSU19DT1VOVCIsIkdhbWUiLCJjZWxscyIsImN1cnJlbnRUdXJuIiwibmV4dFR1cm4iLCJ3aW5uZXJTZXF1ZW5jZSIsIndpbm5lclN5bWJvbCIsImhhbmRsZUNlbGxDbGljayIsImJhY2tMaW5rIiwidGl0bGUiLCJnYW1lSW5mbyIsImlzUmF0aW5nR2FtZSIsInBsYXllcnNDb3VudCIsInRpbWVNb2RlIiwicGxheWVyc0xpc3QiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsImF2YXRhciIsIm5hbWUiLCJyYXRpbmciLCJzZWNvbmRzIiwic3ltYm9sIiwiaXNSaWdodCIsImlkIiwiZ2FtZU1vdmVJbmZvIiwiZ2FtZUNlbGxzIiwiY2VsbCIsImRpc2FibGVkIiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});