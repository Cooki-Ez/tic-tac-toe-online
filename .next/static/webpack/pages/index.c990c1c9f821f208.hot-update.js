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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _get_next_turn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var _compute_winner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compute-winner */ \"./components/game-new/model/compute-winner.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useGameState(playersCount) {\n    _s();\n    const [{ cells, currentTurn, playersTimeOver }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentTurn: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS,\n            playersTimeOver: []\n        }));\n    const winnerSequence = (0,_compute_winner__WEBPACK_IMPORTED_MODULE_3__.computeWinner)(cells);\n    const nextTurn = (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_2__.getNextTurn)(currentTurn, playersCount, playersTimeOver);\n    const winnerSymbol = nextTurn === currentTurn ? currentTurn : cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentTurn: (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_2__.getNextTurn)(lastGameState.currentTurn, playersCount, lastGameState.playersTimeOver),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentTurn : cell)\n            };\n        });\n    };\n    const handlePlayerTimeOver = (symbol)=>{\n        setGameState((lastGameState)=>{\n            return {\n                ...lastGameState,\n                playersTimeOver: [\n                    ...lastGameState.playersTimeOver,\n                    symbol\n                ],\n                currentTurn: (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_2__.getNextTurn)(lastGameState.currentTurn, playersCount, lastGameState.playersTimeOver)\n            };\n        });\n    };\n    return {\n        cells,\n        currentTurn,\n        nextTurn,\n        handleCellClick,\n        handlePlayerTimeOver,\n        winnerSequence,\n        winnerSymbol\n    };\n}\n_s(useGameState, \"Rk8xdq4wRgu3KZKCi3EWrxopTJo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0Q7QUFDdkI7QUFDYTtBQUNHO0FBRXhDLFNBQVNLLGFBQWFDLFlBQVk7O0lBQ3ZDLE1BQU0sQ0FBQyxFQUFDQyxLQUFLLEVBQ1hDLFdBQVcsRUFDWEMsZUFBZSxFQUFDLEVBQ2hCQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDLElBQ3pCO1lBQ0VLLE9BQU8sSUFBSUksTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztZQUMvQkosYUFBYVIsb0RBQVlBLENBQUNhLEtBQUs7WUFDL0JKLGlCQUFrQixFQUFFO1FBQ3RCO0lBR0YsTUFBTUssaUJBQWlCViw4REFBYUEsQ0FBQ0c7SUFDckMsTUFBTVEsV0FBV1osMkRBQVdBLENBQUNLLGFBQWFGLGNBQWNHO0lBRXhELE1BQU1PLGVBQ0pELGFBQWFQLGNBQWNBLGNBQWNELEtBQUssQ0FBQ08sMkJBQUFBLHFDQUFBQSxjQUFnQixDQUFDLEVBQUUsQ0FBQztJQUVyRSxNQUFNRyxrQkFBa0IsQ0FBQ0M7UUFDdkJSLGFBQWEsQ0FBQ1M7WUFDWixJQUFJQSxjQUFjWixLQUFLLENBQUNXLE1BQU0sRUFDNUIsT0FBT0M7WUFFVCxPQUFPO2dCQUNMLEdBQUdBLGFBQWE7Z0JBQ2hCWCxhQUFhTCwyREFBV0EsQ0FDdEJnQixjQUFjWCxXQUFXLEVBQ3pCRixjQUNBYSxjQUFjVixlQUFlO2dCQUMvQkYsT0FBT1ksY0FBY1osS0FBSyxDQUFDYSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsSUFDcENBLE1BQU1KLFFBQVFDLGNBQWNYLFdBQVcsR0FBR2E7WUFFOUM7UUFDRjtJQUNGO0lBRUEsTUFBTUUsdUJBQXVCLENBQUNDO1FBQzVCZCxhQUFhLENBQUNTO1lBQ1osT0FBTztnQkFDTCxHQUFHQSxhQUFhO2dCQUNoQlYsaUJBQWlCO3VCQUFJVSxjQUFjVixlQUFlO29CQUFFZTtpQkFBTztnQkFDM0RoQixhQUFhTCwyREFBV0EsQ0FBQ2dCLGNBQWNYLFdBQVcsRUFBRUYsY0FBY2EsY0FBY1YsZUFBZTtZQUNqRztRQUNGO0lBQ0Y7SUFFQSxPQUFPO1FBQ0xGO1FBQ0FDO1FBQ0FPO1FBQ0FFO1FBQ0FNO1FBQ0FUO1FBQ0FFO0lBQ0Y7QUFDRjtHQXZEZ0JYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvbW9kZWwvdXNlLWdhbWUtc3RhdGUuanM/MmQxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dBTUVfU1lNQk9MUywgVFVSTl9PUkRFUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldE5leHRUdXJufSBmcm9tIFwiLi9nZXQtbmV4dC10dXJuXCI7XG5pbXBvcnQge2NvbXB1dGVXaW5uZXJ9IGZyb20gXCIuL2NvbXB1dGUtd2lubmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KSB7XG4gIGNvbnN0IFt7Y2VsbHMsXG4gICAgY3VycmVudFR1cm4sXG4gICAgcGxheWVyc1RpbWVPdmVyfSxcbiAgICBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4gKFxuICAgIHtcbiAgICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgICAgIGN1cnJlbnRUdXJuOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXG4gICAgICBwbGF5ZXJzVGltZU92ZXIgOiBbXSxcbiAgICB9XG4gICkpO1xuXG4gIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZVdpbm5lcihjZWxscyk7XG4gIGNvbnN0IG5leHRUdXJuID0gZ2V0TmV4dFR1cm4oY3VycmVudFR1cm4sIHBsYXllcnNDb3VudCwgcGxheWVyc1RpbWVPdmVyKTtcblxuICBjb25zdCB3aW5uZXJTeW1ib2wgPVxuICAgIG5leHRUdXJuID09PSBjdXJyZW50VHVybiA/IGN1cnJlbnRUdXJuIDogY2VsbHNbd2lubmVyU2VxdWVuY2U/LlswXV07XG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XG4gICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pXG4gICAgICAgIHJldHVybiBsYXN0R2FtZVN0YXRlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50VHVybjogZ2V0TmV4dFR1cm4oXG4gICAgICAgICAgbGFzdEdhbWVTdGF0ZS5jdXJyZW50VHVybixcbiAgICAgICAgICBwbGF5ZXJzQ291bnQsXG4gICAgICAgICAgbGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIpLFxuICAgICAgICBjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XG4gICAgICAgICAgaSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRUdXJuIDogY2VsbFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQbGF5ZXJUaW1lT3ZlciA9IChzeW1ib2wpID0+IHtcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXG4gICAgICAgIHBsYXllcnNUaW1lT3ZlcjogWy4uLmxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyLCBzeW1ib2xdLFxuICAgICAgICBjdXJyZW50VHVybjogZ2V0TmV4dFR1cm4obGFzdEdhbWVTdGF0ZS5jdXJyZW50VHVybiwgcGxheWVyc0NvdW50LCBsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlciksXG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2VsbHMsXG4gICAgY3VycmVudFR1cm4sXG4gICAgbmV4dFR1cm4sXG4gICAgaGFuZGxlQ2VsbENsaWNrLFxuICAgIGhhbmRsZVBsYXllclRpbWVPdmVyLFxuICAgIHdpbm5lclNlcXVlbmNlLFxuICAgIHdpbm5lclN5bWJvbCxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJHQU1FX1NZTUJPTFMiLCJUVVJOX09SREVSIiwidXNlU3RhdGUiLCJnZXROZXh0VHVybiIsImNvbXB1dGVXaW5uZXIiLCJ1c2VHYW1lU3RhdGUiLCJwbGF5ZXJzQ291bnQiLCJjZWxscyIsImN1cnJlbnRUdXJuIiwicGxheWVyc1RpbWVPdmVyIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiQ1JPU1MiLCJ3aW5uZXJTZXF1ZW5jZSIsIm5leHRUdXJuIiwid2lubmVyU3ltYm9sIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImkiLCJoYW5kbGVQbGF5ZXJUaW1lT3ZlciIsInN5bWJvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});