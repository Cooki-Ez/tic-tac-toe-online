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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nfunction getNextTurn(currentTurn, playersCount) {\n    const slicedTurnOrder = _constants__WEBPACK_IMPORTED_MODULE_0__.TURN_ORDER.slice(0, playersCount);\n    const nextTurnIndex = slicedTurnOrder.indexOf(currentTurn) + 1;\n    var _slicedTurnOrder_nextTurnIndex;\n    return (_slicedTurnOrder_nextTurnIndex = slicedTurnOrder[nextTurnIndex]) !== null && _slicedTurnOrder_nextTurnIndex !== void 0 ? _slicedTurnOrder_nextTurnIndex : slicedTurnOrder[0];\n}\nfunction useGameState(param) {\n    let { playersCount } = param;\n    _s();\n    const [{ cells, currentTurn }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentTurn: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS\n        }));\n    const nextTurn = getNextTurn(currentTurn, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentTurn: getNextTurn(lastGameState.currentTurn),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentTurn : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentTurn,\n        nextTurn,\n        handleCellClick\n    };\n}\n_s(useGameState, \"at0kREQll9tyRV9sYBoVHoTwLSc=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDdEI7QUFFL0IsU0FBU0csWUFBWUMsV0FBVyxFQUFFQyxZQUFZO0lBRTVDLE1BQU1DLGtCQUFrQkwsa0RBQVVBLENBQUNNLEtBQUssQ0FBQyxHQUFHRjtJQUU1QyxNQUFNRyxnQkFBZ0JGLGdCQUFnQkcsT0FBTyxDQUFDTCxlQUFlO1FBQ3RERTtJQUFQLE9BQU9BLENBQUFBLGlDQUFBQSxlQUFlLENBQUNFLGNBQWMsY0FBOUJGLDRDQUFBQSxpQ0FBa0NBLGVBQWUsQ0FBQyxFQUFFO0FBQzdEO0FBRU8sU0FBU0ksYUFBYSxLQUFjO1FBQWQsRUFBQ0wsWUFBWSxFQUFDLEdBQWQ7O0lBQzNCLE1BQU0sQ0FBQyxFQUFDTSxLQUFLLEVBQUVQLFdBQVcsRUFBQyxFQUFFUSxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDLElBQ3BEO1lBQ0VTLE9BQU8sSUFBSUUsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztZQUMvQlYsYUFBYUosb0RBQVlBLENBQUNlLEtBQUs7UUFDakM7SUFFRixNQUFNQyxXQUFXYixZQUFZQyxhQUFhQztJQUUxQyxNQUFNWSxrQkFBa0IsQ0FBQ0M7UUFDdkJOLGFBQWEsQ0FBQ087WUFDWixJQUFJQSxjQUFjUixLQUFLLENBQUNPLE1BQU0sRUFDNUIsT0FBT0M7WUFFVCxPQUFPO2dCQUNMLEdBQUdBLGFBQWE7Z0JBQ2hCZixhQUFhRCxZQUFZZ0IsY0FBY2YsV0FBVztnQkFDbERPLE9BQU9RLGNBQWNSLEtBQUssQ0FBQ1MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQ3BDQSxNQUFNSixRQUFRQyxjQUFjZixXQUFXLEdBQUdpQjtZQUU5QztRQUNGO0lBQ0Y7SUFFQSxPQUFPO1FBQ0xWO1FBQ0FQO1FBQ0FZO1FBQ0FDO0lBQ0Y7QUFDRjtHQTlCZ0JQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS1zdGF0ZS5qcz8xMTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R0FNRV9TWU1CT0xTLCBUVVJOX09SREVSfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBnZXROZXh0VHVybihjdXJyZW50VHVybiwgcGxheWVyc0NvdW50KSB7XG5cbiAgY29uc3Qgc2xpY2VkVHVybk9yZGVyID0gVFVSTl9PUkRFUi5zbGljZSgwLCBwbGF5ZXJzQ291bnQpO1xuXG4gIGNvbnN0IG5leHRUdXJuSW5kZXggPSBzbGljZWRUdXJuT3JkZXIuaW5kZXhPZihjdXJyZW50VHVybikgKyAxO1xuICByZXR1cm4gc2xpY2VkVHVybk9yZGVyW25leHRUdXJuSW5kZXhdID8/IHNsaWNlZFR1cm5PcmRlclswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZSh7cGxheWVyc0NvdW50fSkge1xuICBjb25zdCBbe2NlbGxzLCBjdXJyZW50VHVybn0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoXG4gICAge1xuICAgICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgICAgY3VycmVudFR1cm46IEdBTUVfU1lNQk9MUy5DUk9TU1xuICAgIH1cbiAgKSk7XG4gIGNvbnN0IG5leHRUdXJuID0gZ2V0TmV4dFR1cm4oY3VycmVudFR1cm4sIHBsYXllcnNDb3VudCk7XG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XG4gICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pXG4gICAgICAgIHJldHVybiBsYXN0R2FtZVN0YXRlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50VHVybjogZ2V0TmV4dFR1cm4obGFzdEdhbWVTdGF0ZS5jdXJyZW50VHVybiksXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cbiAgICAgICAgICBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudFR1cm4gOiBjZWxsXG4gICAgICAgICksXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2VsbHMsXG4gICAgY3VycmVudFR1cm4sXG4gICAgbmV4dFR1cm4sXG4gICAgaGFuZGxlQ2VsbENsaWNrXG4gIH07XG59XG4iXSwibmFtZXMiOlsiR0FNRV9TWU1CT0xTIiwiVFVSTl9PUkRFUiIsInVzZVN0YXRlIiwiZ2V0TmV4dFR1cm4iLCJjdXJyZW50VHVybiIsInBsYXllcnNDb3VudCIsInNsaWNlZFR1cm5PcmRlciIsInNsaWNlIiwibmV4dFR1cm5JbmRleCIsImluZGV4T2YiLCJ1c2VHYW1lU3RhdGUiLCJjZWxscyIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIkNST1NTIiwibmV4dFR1cm4iLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});