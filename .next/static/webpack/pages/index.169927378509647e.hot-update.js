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

/***/ "./components/game-new/model/use-game-state.js":
/*!*****************************************************!*\
  !*** ./components/game-new/model/use-game-state.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _get_next_turn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var _compute_winner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compute-winner */ \"./components/game-new/model/compute-winner.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst gameStateReducer = (state, action)=>{\n    console.log(action);\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index } = action;\n                if (state.cells[index]) return state;\n                return {\n                    ...state,\n                    currentTurn: (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_2__.getNextTurn)(state.currentTurn, playersCount, state.playersTimeOver),\n                    cells: state.cells.map((cell, i)=>i === index ? state.currentTurn : cell)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\nconst initGameState = (param)=>{\n    let { playersCount: playersCount1 } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentTurn: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS,\n        playersCount: playersCount1\n    };\n};\nfunction useGameState(playersCount1) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(gameStateReducer, {\n        playersCount: playersCount1\n    }, initGameState);\n    const winnerSequence = (0,_compute_winner__WEBPACK_IMPORTED_MODULE_3__.computeWinner)(gameState.cells);\n    const nextTurn = (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_2__.getNextTurn)(gameState.currentTurn, playersCount1);\n    const winnerSymbol = nextTurn === gameState.currentTurn ? gameState.currentTurn : gameState.cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    return {\n        cells: gameState.cells,\n        currentTurn: gameState.currentTurn,\n        nextTurn,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n} /*\nconst [{cells,\n  currentTurn,\n  playersTimeOver},\n  setGameState] = useState(() => (\n  {\n    cells: new Array(19 * 19).fill(null),\n    currentTurn: GAME_SYMBOLS.CROSS,\n    playersTimeOver : [],\n  }\n));\n\nconst winnerSequence = computeWinner(cells);\nconst nextTurn = getNextTurn(currentTurn, playersCount, playersTimeOver);\n\nconst winnerSymbol =\n  nextTurn === currentTurn ? currentTurn : cells[winnerSequence?.[0]];\n\nconst handleCellClick = (index) => {\n  setGameState((lastGameState) => {\n    if (lastGameState.cells[index])\n      return lastGameState;\n\n    return {\n      ...lastGameState,\n      currentTurn: getNextTurn(\n        lastGameState.currentTurn,\n        playersCount,\n        lastGameState.playersTimeOver),\n      cells: lastGameState.cells.map((cell, i) =>\n        i === index ? lastGameState.currentTurn : cell\n      ),\n    };\n  });\n};\n\nconst handlePlayerTimeOver = (symbol) => {\n  setGameState((lastGameState) => {\n    return {\n      ...lastGameState,\n      playersTimeOver: [...lastGameState.playersTimeOver, symbol],\n      currentTurn: getNextTurn(lastGameState.currentTurn, playersCount, lastGameState.playersTimeOver),\n    };\n  });\n};\n\n */ \n_s(useGameState, \"K4BiU2yFJxkZph4Rpz/ufJZVhb8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ1Q7QUFDVztBQUNHO0FBRXhDLE1BQU1JLHFCQUFxQjtJQUNoQ0MsWUFBWTtBQUNkLEVBQUM7QUFFRCxNQUFNQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7SUFDL0JDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixPQUFRQSxPQUFPRyxJQUFJO1FBQ2pCLEtBQUtQLG1CQUFtQkMsVUFBVTtZQUFFO2dCQUNsQyxNQUFNLEVBQUNPLEtBQUssRUFBQyxHQUFHSjtnQkFDaEIsSUFBSUQsTUFBTU0sS0FBSyxDQUFDRCxNQUFNLEVBQ3BCLE9BQU9MO2dCQUVULE9BQU87b0JBQ0wsR0FBR0EsS0FBSztvQkFDUk8sYUFBYVosMkRBQVdBLENBQ3RCSyxNQUFNTyxXQUFXLEVBQ2pCQyxjQUNBUixNQUFNUyxlQUFlO29CQUV2QkgsT0FBT04sTUFBTU0sS0FBSyxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsSUFDNUJBLE1BQU1QLFFBQVFMLE1BQU1PLFdBQVcsR0FBR0k7Z0JBRXRDO1lBQ0Y7UUFDQTtZQUFTO2dCQUNQLE9BQU9YO1lBQ1Q7SUFDRjtBQUNGO0FBRUEsTUFBTWEsZ0JBQWdCO1FBQUMsRUFBRUwsY0FBQUEsYUFBWSxFQUFFO1dBQU07UUFDM0NGLE9BQU8sSUFBSVEsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztRQUMvQlIsYUFBYWQsb0RBQVlBLENBQUN1QixLQUFLO1FBQy9CUixjQUFBQTtJQUNGOztBQUVPLFNBQVNTLGFBQWFULGFBQVk7O0lBRXZDLE1BQU0sQ0FBQ1UsV0FBV0MsU0FBUyxHQUFHekIsaURBQVVBLENBQUNLLGtCQUN2QztRQUFDUyxjQUFBQTtJQUFZLEdBQ2JLO0lBR0YsTUFBTU8saUJBQWlCeEIsOERBQWFBLENBQUNzQixVQUFVWixLQUFLO0lBQ3BELE1BQU1lLFdBQVcxQiwyREFBV0EsQ0FBQ3VCLFVBQVVYLFdBQVcsRUFBRUM7SUFFcEQsTUFBTWMsZUFDSkQsYUFBYUgsVUFBVVgsV0FBVyxHQUFHVyxVQUFVWCxXQUFXLEdBQUdXLFVBQVVaLEtBQUssQ0FBQ2MsMkJBQUFBLHFDQUFBQSxjQUFnQixDQUFDLEVBQUUsQ0FBQztJQUVuRyxPQUFPO1FBQ0xkLE9BQU9ZLFVBQVVaLEtBQUs7UUFDdEJDLGFBQWFXLFVBQVVYLFdBQVc7UUFDbENjO1FBQ0FEO1FBQ0FFO1FBQ0FIO0lBQ0Y7QUFDRixFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBOENDO0dBckVlRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzPzJkMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHQU1FX1NZTUJPTFN9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7dXNlUmVkdWNlcn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldE5leHRUdXJufSBmcm9tIFwiLi9nZXQtbmV4dC10dXJuXCI7XG5pbXBvcnQge2NvbXB1dGVXaW5uZXJ9IGZyb20gXCIuL2NvbXB1dGUtd2lubmVyXCI7XG5cbmV4cG9ydCBjb25zdCBHQU1FX1NUQVRFX0FDVElPTlMgPSB7XG4gIENFTExfQ0xJQ0s6IFwiY2VsbC1jbGlja1wiXG59XG5cbmNvbnN0IGdhbWVTdGF0ZVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLOiB7XG4gICAgICBjb25zdCB7aW5kZXh9ID0gYWN0aW9uO1xuICAgICAgaWYgKHN0YXRlLmNlbGxzW2luZGV4XSlcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudFR1cm46IGdldE5leHRUdXJuKFxuICAgICAgICAgIHN0YXRlLmN1cnJlbnRUdXJuLFxuICAgICAgICAgIHBsYXllcnNDb3VudCxcbiAgICAgICAgICBzdGF0ZS5wbGF5ZXJzVGltZU92ZXJcbiAgICAgICAgKSxcbiAgICAgICAgY2VsbHM6IHN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cbiAgICAgICAgICBpID09PSBpbmRleCA/IHN0YXRlLmN1cnJlbnRUdXJuIDogY2VsbFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBpbml0R2FtZVN0YXRlID0gKHsgcGxheWVyc0NvdW50IH0pID0+ICh7XG4gIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgY3VycmVudFR1cm46IEdBTUVfU1lNQk9MUy5DUk9TUyxcbiAgcGxheWVyc0NvdW50LFxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcblxuICBjb25zdCBbZ2FtZVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGdhbWVTdGF0ZVJlZHVjZXIsXG4gICAge3BsYXllcnNDb3VudH0sXG4gICAgaW5pdEdhbWVTdGF0ZVxuICApO1xuXG4gIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZVdpbm5lcihnYW1lU3RhdGUuY2VsbHMpO1xuICBjb25zdCBuZXh0VHVybiA9IGdldE5leHRUdXJuKGdhbWVTdGF0ZS5jdXJyZW50VHVybiwgcGxheWVyc0NvdW50KTtcblxuICBjb25zdCB3aW5uZXJTeW1ib2wgPVxuICAgIG5leHRUdXJuID09PSBnYW1lU3RhdGUuY3VycmVudFR1cm4gPyBnYW1lU3RhdGUuY3VycmVudFR1cm4gOiBnYW1lU3RhdGUuY2VsbHNbd2lubmVyU2VxdWVuY2U/LlswXV07XG5cbiAgcmV0dXJuIHtcbiAgICBjZWxsczogZ2FtZVN0YXRlLmNlbGxzLFxuICAgIGN1cnJlbnRUdXJuOiBnYW1lU3RhdGUuY3VycmVudFR1cm4sXG4gICAgbmV4dFR1cm4sXG4gICAgd2lubmVyU2VxdWVuY2UsXG4gICAgd2lubmVyU3ltYm9sLFxuICAgIGRpc3BhdGNoXG4gIH07XG59XG5cbi8qXG5jb25zdCBbe2NlbGxzLFxuICBjdXJyZW50VHVybixcbiAgcGxheWVyc1RpbWVPdmVyfSxcbiAgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+IChcbiAge1xuICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgICBjdXJyZW50VHVybjogR0FNRV9TWU1CT0xTLkNST1NTLFxuICAgIHBsYXllcnNUaW1lT3ZlciA6IFtdLFxuICB9XG4pKTtcblxuY29uc3Qgd2lubmVyU2VxdWVuY2UgPSBjb21wdXRlV2lubmVyKGNlbGxzKTtcbmNvbnN0IG5leHRUdXJuID0gZ2V0TmV4dFR1cm4oY3VycmVudFR1cm4sIHBsYXllcnNDb3VudCwgcGxheWVyc1RpbWVPdmVyKTtcblxuY29uc3Qgd2lubmVyU3ltYm9sID1cbiAgbmV4dFR1cm4gPT09IGN1cnJlbnRUdXJuID8gY3VycmVudFR1cm4gOiBjZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdXTtcblxuY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XG4gIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4ge1xuICAgIGlmIChsYXN0R2FtZVN0YXRlLmNlbGxzW2luZGV4XSlcbiAgICAgIHJldHVybiBsYXN0R2FtZVN0YXRlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICBjdXJyZW50VHVybjogZ2V0TmV4dFR1cm4oXG4gICAgICAgIGxhc3RHYW1lU3RhdGUuY3VycmVudFR1cm4sXG4gICAgICAgIHBsYXllcnNDb3VudCxcbiAgICAgICAgbGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIpLFxuICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxuICAgICAgICBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudFR1cm4gOiBjZWxsXG4gICAgICApLFxuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUGxheWVyVGltZU92ZXIgPSAoc3ltYm9sKSA9PiB7XG4gIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgcGxheWVyc1RpbWVPdmVyOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIsIHN5bWJvbF0sXG4gICAgICBjdXJyZW50VHVybjogZ2V0TmV4dFR1cm4obGFzdEdhbWVTdGF0ZS5jdXJyZW50VHVybiwgcGxheWVyc0NvdW50LCBsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlciksXG4gICAgfTtcbiAgfSk7XG59O1xuXG4gKi9cbiJdLCJuYW1lcyI6WyJHQU1FX1NZTUJPTFMiLCJ1c2VSZWR1Y2VyIiwiZ2V0TmV4dFR1cm4iLCJjb21wdXRlV2lubmVyIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiQ0VMTF9DTElDSyIsImdhbWVTdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiaW5kZXgiLCJjZWxscyIsImN1cnJlbnRUdXJuIiwicGxheWVyc0NvdW50IiwicGxheWVyc1RpbWVPdmVyIiwibWFwIiwiY2VsbCIsImkiLCJpbml0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiQ1JPU1MiLCJ1c2VHYW1lU3RhdGUiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCIsIndpbm5lclNlcXVlbmNlIiwibmV4dFR1cm4iLCJ3aW5uZXJTeW1ib2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});