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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _get_next_turn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var _compute_winner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compute-winner */ \"./components/game-new/model/compute-winner.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst gameStateReducer = (state, action)=>{\n    console.log(action);\n    return state;\n};\nconst initGameState = (param)=>{\n    let {} = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentTurn: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS\n    };\n};\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(gameStateReducer, {}, initGameState);\n    const winnerSequence = (0,_compute_winner__WEBPACK_IMPORTED_MODULE_3__.computeWinner)(gameState.cells);\n    const nextTurn = (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_2__.getNextTurn)(gameState.currentTurn, playersCount);\n    const winnerSymbol = nextTurn === gameState.currentTurn ? gameState.currentTurn : gameState.cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    return {\n        cells: gameState.cells,\n        currentTurn: gameState.currentTurn,\n        nextTurn,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n} /*\n  const [{cells,\n    currentTurn,\n    playersTimeOver},\n    setGameState] = useState(() => (\n    {\n      cells: new Array(19 * 19).fill(null),\n      currentTurn: GAME_SYMBOLS.CROSS,\n      playersTimeOver : [],\n    }\n  ));\n\n  const winnerSequence = computeWinner(cells);\n  const nextTurn = getNextTurn(currentTurn, playersCount, playersTimeOver);\n\n  const winnerSymbol =\n    nextTurn === currentTurn ? currentTurn : cells[winnerSequence?.[0]];\n\n  const handleCellClick = (index) => {\n    setGameState((lastGameState) => {\n      if (lastGameState.cells[index])\n        return lastGameState;\n\n      return {\n        ...lastGameState,\n        currentTurn: getNextTurn(\n          lastGameState.currentTurn,\n          playersCount,\n          lastGameState.playersTimeOver),\n        cells: lastGameState.cells.map((cell, i) =>\n          i === index ? lastGameState.currentTurn : cell\n        ),\n      };\n    });\n  };\n\n  const handlePlayerTimeOver = (symbol) => {\n    setGameState((lastGameState) => {\n      return {\n        ...lastGameState,\n        playersTimeOver: [...lastGameState.playersTimeOver, symbol],\n        currentTurn: getNextTurn(lastGameState.currentTurn, playersCount, lastGameState.playersTimeOver),\n      };\n    });\n  };\n\n   */ \n_s(useGameState, \"j2Lc7qLkPsIkuOKspfGyGEqTTbo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1g7QUFDQztBQUNHO0FBRXhDLE1BQU1NLHFCQUFxQjtJQUNoQ0MsWUFBWTtBQUNkLEVBQUM7QUFFRCxNQUFNQyxtQkFBbUIsQ0FBQ0MsT0FBT0M7SUFDL0JDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixPQUFPRDtBQUNUO0FBRUEsTUFBTUksZ0JBQWdCO1FBQUMsRUFBRTtXQUFNO1FBQzdCQyxPQUFPLElBQUlDLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7UUFDL0JDLGFBQWFqQixvREFBWUEsQ0FBQ2tCLEtBQUs7SUFDakM7O0FBRU8sU0FBU0MsYUFBYUMsWUFBWTs7SUFFdkMsTUFBTSxDQUFDQyxXQUFXQyxTQUFTLEdBQUdwQixpREFBVUEsQ0FBQ00sa0JBQWtCLENBQUMsR0FBR0s7SUFFL0QsTUFBTVUsaUJBQWlCbEIsOERBQWFBLENBQUNnQixVQUFVUCxLQUFLO0lBQ3BELE1BQU1VLFdBQVdwQiwyREFBV0EsQ0FBQ2lCLFVBQVVKLFdBQVcsRUFBRUc7SUFFcEQsTUFBTUssZUFDSkQsYUFBYUgsVUFBVUosV0FBVyxHQUFHSSxVQUFVSixXQUFXLEdBQUVJLFVBQVVQLEtBQUssQ0FBQ1MsMkJBQUFBLHFDQUFBQSxjQUFnQixDQUFDLEVBQUUsQ0FBQztJQUVsRyxPQUFPO1FBQ0xULE9BQU9PLFVBQVVQLEtBQUs7UUFDdEJHLGFBQWFJLFVBQVVKLFdBQVc7UUFDbENPO1FBQ0FEO1FBQ0FFO1FBQ0FIO0lBQ0Y7QUFDRixFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOENDO0dBakVhSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzPzJkMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHQU1FX1NZTUJPTFMsIFRVUk5fT1JERVJ9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7dXNlUmVkdWNlciwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXROZXh0VHVybn0gZnJvbSBcIi4vZ2V0LW5leHQtdHVyblwiO1xuaW1wb3J0IHtjb21wdXRlV2lubmVyfSBmcm9tIFwiLi9jb21wdXRlLXdpbm5lclwiO1xuXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURV9BQ1RJT05TID0ge1xuICBDRUxMX0NMSUNLOiBcImNlbGwtY2xpY2tcIlxufVxuXG5jb25zdCBnYW1lU3RhdGVSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5jb25zdCBpbml0R2FtZVN0YXRlID0gKHt9KSA9PiAoe1xuICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gIGN1cnJlbnRUdXJuOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCkge1xuXG4gIGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZ2FtZVN0YXRlUmVkdWNlciwge30sIGluaXRHYW1lU3RhdGUpO1xuXG4gIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZVdpbm5lcihnYW1lU3RhdGUuY2VsbHMpO1xuICBjb25zdCBuZXh0VHVybiA9IGdldE5leHRUdXJuKGdhbWVTdGF0ZS5jdXJyZW50VHVybiwgcGxheWVyc0NvdW50KTtcblxuICBjb25zdCB3aW5uZXJTeW1ib2wgPVxuICAgIG5leHRUdXJuID09PSBnYW1lU3RhdGUuY3VycmVudFR1cm4gPyBnYW1lU3RhdGUuY3VycmVudFR1cm4gOmdhbWVTdGF0ZS5jZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdXTtcblxuICByZXR1cm4ge1xuICAgIGNlbGxzOiBnYW1lU3RhdGUuY2VsbHMsXG4gICAgY3VycmVudFR1cm46IGdhbWVTdGF0ZS5jdXJyZW50VHVybixcbiAgICBuZXh0VHVybixcbiAgICB3aW5uZXJTZXF1ZW5jZSxcbiAgICB3aW5uZXJTeW1ib2wsXG4gICAgZGlzcGF0Y2hcbiAgfTtcbn1cbiAgLypcbiAgY29uc3QgW3tjZWxscyxcbiAgICBjdXJyZW50VHVybixcbiAgICBwbGF5ZXJzVGltZU92ZXJ9LFxuICAgIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoXG4gICAge1xuICAgICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgICAgY3VycmVudFR1cm46IEdBTUVfU1lNQk9MUy5DUk9TUyxcbiAgICAgIHBsYXllcnNUaW1lT3ZlciA6IFtdLFxuICAgIH1cbiAgKSk7XG5cbiAgY29uc3Qgd2lubmVyU2VxdWVuY2UgPSBjb21wdXRlV2lubmVyKGNlbGxzKTtcbiAgY29uc3QgbmV4dFR1cm4gPSBnZXROZXh0VHVybihjdXJyZW50VHVybiwgcGxheWVyc0NvdW50LCBwbGF5ZXJzVGltZU92ZXIpO1xuXG4gIGNvbnN0IHdpbm5lclN5bWJvbCA9XG4gICAgbmV4dFR1cm4gPT09IGN1cnJlbnRUdXJuID8gY3VycmVudFR1cm4gOiBjZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdXTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcbiAgICAgIGlmIChsYXN0R2FtZVN0YXRlLmNlbGxzW2luZGV4XSlcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICAgIGN1cnJlbnRUdXJuOiBnZXROZXh0VHVybihcbiAgICAgICAgICBsYXN0R2FtZVN0YXRlLmN1cnJlbnRUdXJuLFxuICAgICAgICAgIHBsYXllcnNDb3VudCxcbiAgICAgICAgICBsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlciksXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cbiAgICAgICAgICBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudFR1cm4gOiBjZWxsXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBsYXllclRpbWVPdmVyID0gKHN5bWJvbCkgPT4ge1xuICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgICAgcGxheWVyc1RpbWVPdmVyOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIsIHN5bWJvbF0sXG4gICAgICAgIGN1cnJlbnRUdXJuOiBnZXROZXh0VHVybihsYXN0R2FtZVN0YXRlLmN1cnJlbnRUdXJuLCBwbGF5ZXJzQ291bnQsIGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgICovXG4iXSwibmFtZXMiOlsiR0FNRV9TWU1CT0xTIiwiVFVSTl9PUkRFUiIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsImdldE5leHRUdXJuIiwiY29tcHV0ZVdpbm5lciIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsIkNFTExfQ0xJQ0siLCJnYW1lU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiaW5pdEdhbWVTdGF0ZSIsImNlbGxzIiwiQXJyYXkiLCJmaWxsIiwiY3VycmVudFR1cm4iLCJDUk9TUyIsInVzZUdhbWVTdGF0ZSIsInBsYXllcnNDb3VudCIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwid2lubmVyU2VxdWVuY2UiLCJuZXh0VHVybiIsIndpbm5lclN5bWJvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});