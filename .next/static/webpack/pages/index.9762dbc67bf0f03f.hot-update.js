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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nfunction getNextTurn(currentTurn, playersCount) {\n    const slicedTurnOrder = _constants__WEBPACK_IMPORTED_MODULE_0__.TURN_ORDER.slice(0, playersCount);\n    const nextTurnIndex = slicedTurnOrder.indexOf(currentTurn) + 1;\n    var _slicedTurnOrder_nextTurnIndex;\n    return (_slicedTurnOrder_nextTurnIndex = slicedTurnOrder[nextTurnIndex]) !== null && _slicedTurnOrder_nextTurnIndex !== void 0 ? _slicedTurnOrder_nextTurnIndex : slicedTurnOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            [] // |\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(i - gap + j);\n            res[1].push(i - fieldSize * gap + j);\n            res[2].push();\n            res[3].push();\n        }\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {}\n    }\n}\nfunction useGameState(playersCount) {\n    _s();\n    const [{ cells, currentTurn }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentTurn: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS\n        }));\n    const nextTurn = getNextTurn(currentTurn, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentTurn: getNextTurn(lastGameState.currentTurn, playersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentTurn : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentTurn,\n        nextTurn,\n        handleCellClick\n    };\n}\n_s(useGameState, \"at0kREQll9tyRV9sYBoVHoTwLSc=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDdEI7QUFFL0IsU0FBU0csWUFBWUMsV0FBVyxFQUFFQyxZQUFZO0lBRTVDLE1BQU1DLGtCQUFrQkwsa0RBQVVBLENBQUNNLEtBQUssQ0FBQyxHQUFHRjtJQUU1QyxNQUFNRyxnQkFBZ0JGLGdCQUFnQkcsT0FBTyxDQUFDTCxlQUFlO1FBQ3RERTtJQUFQLE9BQU9BLENBQUFBLGlDQUFBQSxlQUFlLENBQUNFLGNBQWMsY0FBOUJGLDRDQUFBQSxpQ0FBa0NBLGVBQWUsQ0FBQyxFQUFFO0FBQzdEO0FBRUEsU0FBU0ksY0FBY0MsS0FBSztRQUFFQyxlQUFBQSxpRUFBZSxHQUFHQyxZQUFBQSxpRUFBWTtJQUMxRCxNQUFNQyxNQUFNQyxLQUFLQyxLQUFLLENBQUNKLGVBQWU7SUFFdEMsU0FBU0ssbUJBQW1CQyxDQUFDO1FBQzNCLE1BQU1DLE1BQU07WUFDVixFQUFFO1lBQ0YsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFLENBQUMsSUFBSTtTQUNSO1FBRUQsSUFBSSxJQUFJQyxJQUFJLEdBQUdBLElBQUlSLGNBQWNRLElBQUk7WUFDbkNELEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ0gsSUFBSUosTUFBTU07WUFDdEJELEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ0gsSUFBSUwsWUFBWUMsTUFBTU07WUFDbENELEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUk7WUFDWEYsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSTtRQUNiO0lBQ0Y7SUFFQSxJQUFLLElBQUlILElBQUksR0FBR0EsSUFBSVAsTUFBTVcsTUFBTSxFQUFFSixJQUFLO1FBQ3JDLElBQUdQLEtBQUssQ0FBQ08sRUFBRSxFQUFDLENBRVo7SUFDRjtBQUNGO0FBRU8sU0FBU0ssYUFBYWxCLFlBQVk7O0lBQ3ZDLE1BQU0sQ0FBQyxFQUFDTSxLQUFLLEVBQUVQLFdBQVcsRUFBQyxFQUFFb0IsYUFBYSxHQUFHdEIsK0NBQVFBLENBQUMsSUFDcEQ7WUFDRVMsT0FBTyxJQUFJYyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1lBQy9CdEIsYUFBYUosb0RBQVlBLENBQUMyQixLQUFLO1FBQ2pDO0lBRUYsTUFBTUMsV0FBV3pCLFlBQVlDLGFBQWFDO0lBRTFDLE1BQU13QixrQkFBa0IsQ0FBQ0M7UUFDdkJOLGFBQWEsQ0FBQ087WUFDWixJQUFJQSxjQUFjcEIsS0FBSyxDQUFDbUIsTUFBTSxFQUM1QixPQUFPQztZQUVULE9BQU87Z0JBQ0wsR0FBR0EsYUFBYTtnQkFDaEIzQixhQUFhRCxZQUFZNEIsY0FBYzNCLFdBQVcsRUFBRUM7Z0JBQ3BETSxPQUFPb0IsY0FBY3BCLEtBQUssQ0FBQ3FCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNZixJQUNwQ0EsTUFBTVksUUFBUUMsY0FBYzNCLFdBQVcsR0FBRzZCO1lBRTlDO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFDTHRCO1FBQ0FQO1FBQ0F3QjtRQUNBQztJQUNGO0FBQ0Y7R0E5QmdCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanM/MTEwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dBTUVfU1lNQk9MUywgVFVSTl9PUkRFUn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gZ2V0TmV4dFR1cm4oY3VycmVudFR1cm4sIHBsYXllcnNDb3VudCkge1xuXG4gIGNvbnN0IHNsaWNlZFR1cm5PcmRlciA9IFRVUk5fT1JERVIuc2xpY2UoMCwgcGxheWVyc0NvdW50KTtcblxuICBjb25zdCBuZXh0VHVybkluZGV4ID0gc2xpY2VkVHVybk9yZGVyLmluZGV4T2YoY3VycmVudFR1cm4pICsgMTtcbiAgcmV0dXJuIHNsaWNlZFR1cm5PcmRlcltuZXh0VHVybkluZGV4XSA/PyBzbGljZWRUdXJuT3JkZXJbMF07XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVXaW5uZXIoY2VsbHMsIHNlcXVlbmNlU2l6ZSA9IDUsIGZpZWxkU2l6ZSA9IDE5KXtcbiAgY29uc3QgZ2FwID0gTWF0aC5mbG9vcihzZXF1ZW5jZVNpemUgLyAyKTtcblxuICBmdW5jdGlvbiBnZXRTZXF1ZW5jZUluZGV4ZXMoaSl7XG4gICAgY29uc3QgcmVzID0gW1xuICAgICAgW10sIC8vIC1cbiAgICAgIFtdLCAvLyBcXFxuICAgICAgW10sIC8vIC9cbiAgICAgIFtdIC8vIHxcbiAgICBdXG5cbiAgICBmb3IobGV0IGogPSAwOyBqIDwgc2VxdWVuY2VTaXplOyBqKyspe1xuICAgICAgcmVzWzBdLnB1c2goaSAtIGdhcCArIGopO1xuICAgICAgcmVzWzFdLnB1c2goaSAtIGZpZWxkU2l6ZSAqIGdhcCArIGopO1xuICAgICAgcmVzWzJdLnB1c2goKTtcbiAgICAgIHJlc1szXS5wdXNoKCk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgIGlmKGNlbGxzW2ldKXtcblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCkge1xuICBjb25zdCBbe2NlbGxzLCBjdXJyZW50VHVybn0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoXG4gICAge1xuICAgICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuICAgICAgY3VycmVudFR1cm46IEdBTUVfU1lNQk9MUy5DUk9TU1xuICAgIH1cbiAgKSk7XG4gIGNvbnN0IG5leHRUdXJuID0gZ2V0TmV4dFR1cm4oY3VycmVudFR1cm4sIHBsYXllcnNDb3VudCk7XG5cbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XG4gICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pXG4gICAgICAgIHJldHVybiBsYXN0R2FtZVN0YXRlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxuICAgICAgICBjdXJyZW50VHVybjogZ2V0TmV4dFR1cm4obGFzdEdhbWVTdGF0ZS5jdXJyZW50VHVybiwgcGxheWVyc0NvdW50KSxcbiAgICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxuICAgICAgICAgIGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50VHVybiA6IGNlbGxcbiAgICAgICAgKSxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjZWxscyxcbiAgICBjdXJyZW50VHVybixcbiAgICBuZXh0VHVybixcbiAgICBoYW5kbGVDZWxsQ2xpY2tcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJHQU1FX1NZTUJPTFMiLCJUVVJOX09SREVSIiwidXNlU3RhdGUiLCJnZXROZXh0VHVybiIsImN1cnJlbnRUdXJuIiwicGxheWVyc0NvdW50Iiwic2xpY2VkVHVybk9yZGVyIiwic2xpY2UiLCJuZXh0VHVybkluZGV4IiwiaW5kZXhPZiIsImNvbXB1dGVXaW5uZXIiLCJjZWxscyIsInNlcXVlbmNlU2l6ZSIsImZpZWxkU2l6ZSIsImdhcCIsIk1hdGgiLCJmbG9vciIsImdldFNlcXVlbmNlSW5kZXhlcyIsImkiLCJyZXMiLCJqIiwicHVzaCIsImxlbmd0aCIsInVzZUdhbWVTdGF0ZSIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIkNST1NTIiwibmV4dFR1cm4iLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});