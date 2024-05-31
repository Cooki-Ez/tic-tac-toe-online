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

/***/ "./components/game/use-game-state.js":
/*!*******************************************!*\
  !*** ./components/game/use-game-state.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nfunction useGameState(playersCount) {\n    _s();\n    const [{ cells, currentTurn }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentTurn: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS\n        }));\n    console.log(computeWinner(cells));\n    const nextTurn = getNextTurn(currentTurn, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentTurn: getNextTurn(lastGameState.currentTurn, playersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentTurn : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentTurn,\n        nextTurn,\n        handleCellClick\n    };\n}\n_s(useGameState, \"at0kREQll9tyRV9sYBoVHoTwLSc=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDdEI7QUFFeEIsU0FBU0csYUFBYUMsWUFBWTs7SUFDdkMsTUFBTSxDQUFDLEVBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFDLEVBQUVDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsSUFDcEQ7WUFDRUcsT0FBTyxJQUFJRyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1lBQy9CSCxhQUFhTixvREFBWUEsQ0FBQ1UsS0FBSztRQUNqQztJQUdGQyxRQUFRQyxHQUFHLENBQUNDLGNBQWNSO0lBRTFCLE1BQU1TLFdBQVdDLFlBQVlULGFBQWFGO0lBRTFDLE1BQU1ZLGtCQUFrQixDQUFDQztRQUN2QlYsYUFBYSxDQUFDVztZQUNaLElBQUlBLGNBQWNiLEtBQUssQ0FBQ1ksTUFBTSxFQUM1QixPQUFPQztZQUVULE9BQU87Z0JBQ0wsR0FBR0EsYUFBYTtnQkFDaEJaLGFBQWFTLFlBQVlHLGNBQWNaLFdBQVcsRUFBRUY7Z0JBQ3BEQyxPQUFPYSxjQUFjYixLQUFLLENBQUNjLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUNwQ0EsTUFBTUosUUFBUUMsY0FBY1osV0FBVyxHQUFHYztZQUU5QztRQUNGO0lBQ0Y7SUFFQSxPQUFPO1FBQ0xmO1FBQ0FDO1FBQ0FRO1FBQ0FFO0lBQ0Y7QUFDRjtHQWpDZ0JiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS1zdGF0ZS5qcz8xMTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R0FNRV9TWU1CT0xTLCBUVVJOX09SREVSfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCkge1xuICBjb25zdCBbe2NlbGxzLCBjdXJyZW50VHVybn0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoXG4gICAge1xuICAgICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgICAgY3VycmVudFR1cm46IEdBTUVfU1lNQk9MUy5DUk9TU1xuICAgIH1cbiAgKSk7XG5cbiAgY29uc29sZS5sb2coY29tcHV0ZVdpbm5lcihjZWxscykpO1xuXG4gIGNvbnN0IG5leHRUdXJuID0gZ2V0TmV4dFR1cm4oY3VycmVudFR1cm4sIHBsYXllcnNDb3VudCk7XG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XG4gICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pXG4gICAgICAgIHJldHVybiBsYXN0R2FtZVN0YXRlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50VHVybjogZ2V0TmV4dFR1cm4obGFzdEdhbWVTdGF0ZS5jdXJyZW50VHVybiwgcGxheWVyc0NvdW50KSxcbiAgICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxuICAgICAgICAgIGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50VHVybiA6IGNlbGxcbiAgICAgICAgKSxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjZWxscyxcbiAgICBjdXJyZW50VHVybixcbiAgICBuZXh0VHVybixcbiAgICBoYW5kbGVDZWxsQ2xpY2tcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJHQU1FX1NZTUJPTFMiLCJUVVJOX09SREVSIiwidXNlU3RhdGUiLCJ1c2VHYW1lU3RhdGUiLCJwbGF5ZXJzQ291bnQiLCJjZWxscyIsImN1cnJlbnRUdXJuIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiQ1JPU1MiLCJjb25zb2xlIiwibG9nIiwiY29tcHV0ZVdpbm5lciIsIm5leHRUdXJuIiwiZ2V0TmV4dFR1cm4iLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});