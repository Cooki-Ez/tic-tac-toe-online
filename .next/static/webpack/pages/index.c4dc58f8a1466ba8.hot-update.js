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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _get_next_turn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var _compute_winner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compute-winner */ \"./components/game-new/model/compute-winner.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(gameStateReducer, {\n        playersCount\n    }, initGameState);\n    const winnerSequence = (0,_compute_winner__WEBPACK_IMPORTED_MODULE_3__.computeWinner)(gameState.cells);\n    const nextTurn = (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_2__.getNextTurn)(gameState.currentTurn, playersCount);\n    const winnerSymbol = nextTurn === gameState.currentTurn ? gameState.currentTurn : gameState.cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    return {\n        cells: gameState.cells,\n        currentTurn: gameState.currentTurn,\n        nextTurn,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n} /*\nconst [{cells,\n  currentTurn,\n  playersTimeOver},\n  setGameState] = useState(() => (\n  {\n    cells: new Array(19 * 19).fill(null),\n    currentTurn: GAME_SYMBOLS.CROSS,\n    playersTimeOver : [],\n  }\n));\n\nconst winnerSequence = computeWinner(cells);\nconst nextTurn = getNextTurn(currentTurn, playersCount, playersTimeOver);\n\nconst winnerSymbol =\n  nextTurn === currentTurn ? currentTurn : cells[winnerSequence?.[0]];\n\nconst handleCellClick = (index) => {\n  setGameState((lastGameState) => {\n    if (lastGameState.cells[index])\n      return lastGameState;\n\n    return {\n      ...lastGameState,\n      currentTurn: getNextTurn(\n        lastGameState.currentTurn,\n        playersCount,\n        lastGameState.playersTimeOver),\n      cells: lastGameState.cells.map((cell, i) =>\n        i === index ? lastGameState.currentTurn : cell\n      ),\n    };\n  });\n};\n\nconst handlePlayerTimeOver = (symbol) => {\n  setGameState((lastGameState) => {\n    return {\n      ...lastGameState,\n      playersTimeOver: [...lastGameState.playersTimeOver, symbol],\n      currentTurn: getNextTurn(lastGameState.currentTurn, playersCount, lastGameState.playersTimeOver),\n    };\n  });\n};\n\n */ \n_s(useGameState, \"K4BiU2yFJxkZph4Rpz/ufJZVhb8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFDVDtBQUNXO0FBQ0c7QUFFeEMsU0FBU0ksYUFBYUMsWUFBWTs7SUFFdkMsTUFBTSxDQUFDQyxXQUFXQyxTQUFTLEdBQUdOLGlEQUFVQSxDQUFDTyxrQkFDdkM7UUFBQ0g7SUFBWSxHQUNiSTtJQUdGLE1BQU1DLGlCQUFpQlAsOERBQWFBLENBQUNHLFVBQVVLLEtBQUs7SUFDcEQsTUFBTUMsV0FBV1YsMkRBQVdBLENBQUNJLFVBQVVPLFdBQVcsRUFBRVI7SUFFcEQsTUFBTVMsZUFDSkYsYUFBYU4sVUFBVU8sV0FBVyxHQUFHUCxVQUFVTyxXQUFXLEdBQUdQLFVBQVVLLEtBQUssQ0FBQ0QsMkJBQUFBLHFDQUFBQSxjQUFnQixDQUFDLEVBQUUsQ0FBQztJQUVuRyxPQUFPO1FBQ0xDLE9BQU9MLFVBQVVLLEtBQUs7UUFDdEJFLGFBQWFQLFVBQVVPLFdBQVc7UUFDbENEO1FBQ0FGO1FBQ0FJO1FBQ0FQO0lBQ0Y7QUFDRixFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBOENDO0dBckVlSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzPzJkMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHQU1FX1NZTUJPTFN9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7dXNlUmVkdWNlcn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldE5leHRUdXJufSBmcm9tIFwiLi9nZXQtbmV4dC10dXJuXCI7XG5pbXBvcnQge2NvbXB1dGVXaW5uZXJ9IGZyb20gXCIuL2NvbXB1dGUtd2lubmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KSB7XG5cbiAgY29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihnYW1lU3RhdGVSZWR1Y2VyLFxuICAgIHtwbGF5ZXJzQ291bnR9LFxuICAgIGluaXRHYW1lU3RhdGVcbiAgKTtcblxuICBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVXaW5uZXIoZ2FtZVN0YXRlLmNlbGxzKTtcbiAgY29uc3QgbmV4dFR1cm4gPSBnZXROZXh0VHVybihnYW1lU3RhdGUuY3VycmVudFR1cm4sIHBsYXllcnNDb3VudCk7XG5cbiAgY29uc3Qgd2lubmVyU3ltYm9sID1cbiAgICBuZXh0VHVybiA9PT0gZ2FtZVN0YXRlLmN1cnJlbnRUdXJuID8gZ2FtZVN0YXRlLmN1cnJlbnRUdXJuIDogZ2FtZVN0YXRlLmNlbGxzW3dpbm5lclNlcXVlbmNlPy5bMF1dO1xuXG4gIHJldHVybiB7XG4gICAgY2VsbHM6IGdhbWVTdGF0ZS5jZWxscyxcbiAgICBjdXJyZW50VHVybjogZ2FtZVN0YXRlLmN1cnJlbnRUdXJuLFxuICAgIG5leHRUdXJuLFxuICAgIHdpbm5lclNlcXVlbmNlLFxuICAgIHdpbm5lclN5bWJvbCxcbiAgICBkaXNwYXRjaFxuICB9O1xufVxuXG4vKlxuY29uc3QgW3tjZWxscyxcbiAgY3VycmVudFR1cm4sXG4gIHBsYXllcnNUaW1lT3Zlcn0sXG4gIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoXG4gIHtcbiAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gICAgY3VycmVudFR1cm46IEdBTUVfU1lNQk9MUy5DUk9TUyxcbiAgICBwbGF5ZXJzVGltZU92ZXIgOiBbXSxcbiAgfVxuKSk7XG5cbmNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZVdpbm5lcihjZWxscyk7XG5jb25zdCBuZXh0VHVybiA9IGdldE5leHRUdXJuKGN1cnJlbnRUdXJuLCBwbGF5ZXJzQ291bnQsIHBsYXllcnNUaW1lT3Zlcik7XG5cbmNvbnN0IHdpbm5lclN5bWJvbCA9XG4gIG5leHRUdXJuID09PSBjdXJyZW50VHVybiA/IGN1cnJlbnRUdXJuIDogY2VsbHNbd2lubmVyU2VxdWVuY2U/LlswXV07XG5cbmNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xuICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcbiAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pXG4gICAgICByZXR1cm4gbGFzdEdhbWVTdGF0ZTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgY3VycmVudFR1cm46IGdldE5leHRUdXJuKFxuICAgICAgICBsYXN0R2FtZVN0YXRlLmN1cnJlbnRUdXJuLFxuICAgICAgICBwbGF5ZXJzQ291bnQsXG4gICAgICAgIGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyKSxcbiAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cbiAgICAgICAgaSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRUdXJuIDogY2VsbFxuICAgICAgKSxcbiAgICB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVBsYXllclRpbWVPdmVyID0gKHN5bWJvbCkgPT4ge1xuICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgIHBsYXllcnNUaW1lT3ZlcjogWy4uLmxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyLCBzeW1ib2xdLFxuICAgICAgY3VycmVudFR1cm46IGdldE5leHRUdXJuKGxhc3RHYW1lU3RhdGUuY3VycmVudFR1cm4sIHBsYXllcnNDb3VudCwgbGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIpLFxuICAgIH07XG4gIH0pO1xufTtcblxuICovXG4iXSwibmFtZXMiOlsiR0FNRV9TWU1CT0xTIiwidXNlUmVkdWNlciIsImdldE5leHRUdXJuIiwiY29tcHV0ZVdpbm5lciIsInVzZUdhbWVTdGF0ZSIsInBsYXllcnNDb3VudCIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwiZ2FtZVN0YXRlUmVkdWNlciIsImluaXRHYW1lU3RhdGUiLCJ3aW5uZXJTZXF1ZW5jZSIsImNlbGxzIiwibmV4dFR1cm4iLCJjdXJyZW50VHVybiIsIndpbm5lclN5bWJvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});