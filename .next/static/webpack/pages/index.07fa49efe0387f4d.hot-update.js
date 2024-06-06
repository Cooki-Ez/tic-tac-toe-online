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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _ui_player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/player-info */ \"./components/game-new/ui/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _model_use_game_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/use-game-state */ \"./components/game-new/model/use-game-state.js\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 4;\nfunction Game() {\n    _s();\n    const { cells, currentTurn, nex } = (0,_model_use_game_state__WEBPACK_IMPORTED_MODULE_8__.useGameState)(PLAYERS_COUNT);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n        backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 19,\n            columnNumber: 17\n        }, void 0),\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 20,\n            columnNumber: 14\n        }, void 0),\n        gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n            isRatingGame: true,\n            playersCount: 4,\n            timeMode: \"1 min to turn\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 21,\n            columnNumber: 17\n        }, void 0),\n        playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                avatar: player.avatar,\n                name: player.name,\n                rating: player.rating,\n                seconds: 60,\n                symbol: player.symbol,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 23,\n                columnNumber: 40\n            }, void 0)),\n        gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {}, void 0, false, {\n            fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 34,\n            columnNumber: 21\n        }, void 0),\n        gameCells: cells.map((cell, index)=>{\n            var _winnerSequence;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_9__.GameCell, {\n                disabled: !!winnerSymbol,\n                isWinner: (_winnerSequence = winnerSequence) === null || _winnerSequence === void 0 ? void 0 : _winnerSequence.includes(index),\n                onClick: ()=>{\n                    handleCellClick(index);\n                },\n                symbol: cell\n            }, index, false, {\n                fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, void 0);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Education\\\\Front Projects\\\\react-projects\\\\tik-tak-toe-online\\\\components\\\\game-new\\\\game.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Game, \"jJKLoEdIkGuuASWhQKjyK6Tv4JY=\", false, function() {\n    return [\n        _model_use_game_state__WEBPACK_IMPORTED_MODULE_8__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0o7QUFDRTtBQUNGO0FBQ0o7QUFDUTtBQUNLO0FBQ0c7QUFDWjtBQUV4QyxNQUFNUyxnQkFBZ0I7QUFFZixTQUFTQzs7SUFFZCxNQUFNLEVBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxHQUFHLEVBQUMsR0FBR04sbUVBQVlBLENBQUNFO0lBRS9DLHFCQUNFLDhEQUFDVCx1REFBVUE7UUFDVGMsd0JBQVUsOERBQUNiLG1EQUFRQTs7Ozs7UUFDbkJjLHFCQUFPLDhEQUFDYixxREFBU0E7Ozs7O1FBQ2pCYyx3QkFBVSw4REFBQ2IsbURBQVFBO1lBQUNjLFlBQVk7WUFBQ0MsY0FBYztZQUFHQyxVQUFVOzs7Ozs7UUFDNURDLGFBQ0VoQiwrQ0FBT0EsQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFBVSw4REFBQ2xCLHVEQUFVQTtnQkFFdENtQixRQUFRRixPQUFPRSxNQUFNO2dCQUNyQkMsTUFBTUgsT0FBT0csSUFBSTtnQkFDakJDLFFBQVFKLE9BQU9JLE1BQU07Z0JBQ3JCQyxTQUFTO2dCQUNUQyxRQUFRTixPQUFPTSxNQUFNO2dCQUNyQkMsU0FBU04sUUFBUSxNQUFNO2VBTmxCRCxPQUFPUSxFQUFFOzs7OztRQVVwQkMsNEJBQWMsOERBQUN6Qiw0REFBWUE7Ozs7O1FBQzNCMEIsV0FBV3JCLE1BQU1VLEdBQUcsQ0FBQyxDQUFDWSxNQUFNVjtnQkFJZFc7aUNBSFosOERBQUMxQixtREFBUUE7Z0JBRVAyQixVQUFVLENBQUMsQ0FBQ0M7Z0JBQ1pDLFFBQVEsR0FBRUgsa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCSSxRQUFRLENBQUNmO2dCQUNuQ2dCLFNBQVM7b0JBQ1BDLGdCQUFnQmpCO2dCQUNsQjtnQkFDQUssUUFBUUs7ZUFOSFY7Ozs7Ozs7Ozs7O0FBV2Y7R0FuQ2dCYjs7UUFFb0JILCtEQUFZQTs7O0tBRmhDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4P2U0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHYW1lTGF5b3V0fSBmcm9tIFwiLi91aS9nYW1lLWxheW91dFwiO1xuaW1wb3J0IHtCYWNrTGlua30gZnJvbSBcIi4vdWkvYmFjay1saW5rXCI7XG5pbXBvcnQge0dhbWVUaXRsZX0gZnJvbSBcIi4vdWkvZ2FtZS10aXRsZVwiO1xuaW1wb3J0IHtHYW1lSW5mb30gZnJvbSBcIi4vdWkvZ2FtZS1pbmZvXCI7XG5pbXBvcnQge1BMQVlFUlN9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtQbGF5ZXJJbmZvfSBmcm9tIFwiLi91aS9wbGF5ZXItaW5mb1wiO1xuaW1wb3J0IHtHYW1lTW92ZUluZm99IGZyb20gXCIuL3VpL2dhbWUtbW92ZS1pbmZvXCI7XG5pbXBvcnQge3VzZUdhbWVTdGF0ZX0gZnJvbSBcIi4vbW9kZWwvdXNlLWdhbWUtc3RhdGVcIjtcbmltcG9ydCB7R2FtZUNlbGx9IGZyb20gXCIuL3VpL2dhbWUtY2VsbFwiO1xuXG5jb25zdCBQTEFZRVJTX0NPVU5UID0gNFxuXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcblxuICBjb25zdCB7Y2VsbHMsIGN1cnJlbnRUdXJuLCBuZXh9ID0gdXNlR2FtZVN0YXRlKFBMQVlFUlNfQ09VTlQpO1xuXG4gIHJldHVybiAoXG4gICAgPEdhbWVMYXlvdXRcbiAgICAgIGJhY2tMaW5rPXs8QmFja0xpbmsvPn1cbiAgICAgIHRpdGxlPXs8R2FtZVRpdGxlLz59XG4gICAgICBnYW1lSW5mbz17PEdhbWVJbmZvIGlzUmF0aW5nR2FtZSBwbGF5ZXJzQ291bnQ9ezR9IHRpbWVNb2RlPXtcIjEgbWluIHRvIHR1cm5cIn0vPn1cbiAgICAgIHBsYXllcnNMaXN0PXtcbiAgICAgICAgUExBWUVSUy5tYXAoKHBsYXllciwgaW5kZXgpID0+IDxQbGF5ZXJJbmZvXG4gICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cbiAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cbiAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxuICAgICAgICAgICAgcmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxuICAgICAgICAgICAgc2Vjb25kcz17NjB9XG4gICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XG4gICAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZ2FtZU1vdmVJbmZvPXs8R2FtZU1vdmVJbmZvIC8+fVxuICAgICAgZ2FtZUNlbGxzPXtjZWxscy5tYXAoKGNlbGwsIGluZGV4KSA9PiAoXG4gICAgICAgIDxHYW1lQ2VsbFxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgZGlzYWJsZWQ9eyEhd2lubmVyU3ltYm9sfVxuICAgICAgICAgIGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZUNlbGxDbGljayhpbmRleCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBzeW1ib2w9e2NlbGx9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkdhbWVMYXlvdXQiLCJCYWNrTGluayIsIkdhbWVUaXRsZSIsIkdhbWVJbmZvIiwiUExBWUVSUyIsIlBsYXllckluZm8iLCJHYW1lTW92ZUluZm8iLCJ1c2VHYW1lU3RhdGUiLCJHYW1lQ2VsbCIsIlBMQVlFUlNfQ09VTlQiLCJHYW1lIiwiY2VsbHMiLCJjdXJyZW50VHVybiIsIm5leCIsImJhY2tMaW5rIiwidGl0bGUiLCJnYW1lSW5mbyIsImlzUmF0aW5nR2FtZSIsInBsYXllcnNDb3VudCIsInRpbWVNb2RlIiwicGxheWVyc0xpc3QiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsImF2YXRhciIsIm5hbWUiLCJyYXRpbmciLCJzZWNvbmRzIiwic3ltYm9sIiwiaXNSaWdodCIsImlkIiwiZ2FtZU1vdmVJbmZvIiwiZ2FtZUNlbGxzIiwiY2VsbCIsIndpbm5lclNlcXVlbmNlIiwiZGlzYWJsZWQiLCJ3aW5uZXJTeW1ib2wiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwib25DbGljayIsImhhbmRsZUNlbGxDbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});