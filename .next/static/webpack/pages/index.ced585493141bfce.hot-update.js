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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\nfunction getNextTurn(currentTurn, playersCount) {\n    const slicedTurnOrder = _constants__WEBPACK_IMPORTED_MODULE_0__.TURN_ORDER.slice(0, playersCount);\n    const nextTurnIndex = slicedTurnOrder.indexOf(currentTurn) + 1;\n    var _slicedTurnOrder_nextTurnIndex;\n    return (_slicedTurnOrder_nextTurnIndex = slicedTurnOrder[nextTurnIndex]) !== null && _slicedTurnOrder_nextTurnIndex !== void 0 ? _slicedTurnOrder_nextTurnIndex : slicedTurnOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            [] // |\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            compareElements(getSequenceIndexes(i));\n        }\n    }\n}\nfunction useGameState(playersCount) {\n    _s();\n    const [{ cells, currentTurn }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentTurn: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS\n        }));\n    console.log(computeWinner(cells));\n    const nextTurn = getNextTurn(currentTurn, playersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) return lastGameState;\n            return {\n                ...lastGameState,\n                currentTurn: getNextTurn(lastGameState.currentTurn, playersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentTurn : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentTurn,\n        nextTurn,\n        handleCellClick\n    };\n}\n_s(useGameState, \"at0kREQll9tyRV9sYBoVHoTwLSc=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ0wzQjtRQUNBUDtRQUNBNkI7UUFDQUM7SUFDRjtBQUNGO0dBakNnQlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL3VzZS1nYW1lLXN0YXRlLmpzPzExMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHQU1FX1NZTUJPTFMsIFRVUk5fT1JERVJ9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIGdldE5leHRUdXJuKGN1cnJlbnRUdXJuLCBwbGF5ZXJzQ291bnQpIHtcblxuICBjb25zdCBzbGljZWRUdXJuT3JkZXIgPSBUVVJOX09SREVSLnNsaWNlKDAsIHBsYXllcnNDb3VudCk7XG5cbiAgY29uc3QgbmV4dFR1cm5JbmRleCA9IHNsaWNlZFR1cm5PcmRlci5pbmRleE9mKGN1cnJlbnRUdXJuKSArIDE7XG4gIHJldHVybiBzbGljZWRUdXJuT3JkZXJbbmV4dFR1cm5JbmRleF0gPz8gc2xpY2VkVHVybk9yZGVyWzBdO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlV2lubmVyKGNlbGxzLCBzZXF1ZW5jZVNpemUgPSA1LCBmaWVsZFNpemUgPSAxOSl7XG4gIGNvbnN0IGdhcCA9IE1hdGguZmxvb3Ioc2VxdWVuY2VTaXplIC8gMik7XG5cbiAgZnVuY3Rpb24gY29tcGFyZUVsZW1lbnRzKGluZGV4ZXMpe1xuICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHJlc3VsdCAmJj0gISFjZWxsc1tpbmRleGVzW2ldXTtcbiAgICAgIHJlc3VsdCAmJj0gY2VsbHNbaW5kZXhlc1tpXV0gPT09IGNlbGxzW2luZGV4ZXNbaS0xXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlcXVlbmNlSW5kZXhlcyhpKXtcbiAgICBjb25zdCByZXMgPSBbXG4gICAgICBbXSwgLy8gLVxuICAgICAgW10sIC8vIFxcXG4gICAgICBbXSwgLy8gL1xuICAgICAgW10gLy8gfFxuICAgIF1cblxuICAgIGZvcihsZXQgaiA9IDA7IGogPCBzZXF1ZW5jZVNpemU7IGorKyl7XG4gICAgICByZXNbMF0ucHVzaChqIC0gZ2FwICsgaSk7XG4gICAgICByZXNbMV0ucHVzaChmaWVsZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKTtcbiAgICAgIHJlc1syXS5wdXNoKC1maWVsZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKTtcbiAgICAgIHJlc1szXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIGkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYoY2VsbHNbaV0pe1xuICAgICAgICBjb21wYXJlRWxlbWVudHMoZ2V0U2VxdWVuY2VJbmRleGVzKGkpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpIHtcbiAgY29uc3QgW3tjZWxscywgY3VycmVudFR1cm59LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4gKFxuICAgIHtcbiAgICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcbiAgICAgIGN1cnJlbnRUdXJuOiBHQU1FX1NZTUJPTFMuQ1JPU1NcbiAgICB9XG4gICkpO1xuXG4gIGNvbnNvbGUubG9nKGNvbXB1dGVXaW5uZXIoY2VsbHMpKTtcblxuICBjb25zdCBuZXh0VHVybiA9IGdldE5leHRUdXJuKGN1cnJlbnRUdXJuLCBwbGF5ZXJzQ291bnQpO1xuXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xuICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4ge1xuICAgICAgaWYgKGxhc3RHYW1lU3RhdGUuY2VsbHNbaW5kZXhdKVxuICAgICAgICByZXR1cm4gbGFzdEdhbWVTdGF0ZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcbiAgICAgICAgY3VycmVudFR1cm46IGdldE5leHRUdXJuKGxhc3RHYW1lU3RhdGUuY3VycmVudFR1cm4sIHBsYXllcnNDb3VudCksXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cbiAgICAgICAgICBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudFR1cm4gOiBjZWxsXG4gICAgICAgICksXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2VsbHMsXG4gICAgY3VycmVudFR1cm4sXG4gICAgbmV4dFR1cm4sXG4gICAgaGFuZGxlQ2VsbENsaWNrXG4gIH07XG59XG4iXSwibmFtZXMiOlsiR0FNRV9TWU1CT0xTIiwiVFVSTl9PUkRFUiIsInVzZVN0YXRlIiwiZ2V0TmV4dFR1cm4iLCJjdXJyZW50VHVybiIsInBsYXllcnNDb3VudCIsInNsaWNlZFR1cm5PcmRlciIsInNsaWNlIiwibmV4dFR1cm5JbmRleCIsImluZGV4T2YiLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJzZXF1ZW5jZVNpemUiLCJmaWVsZFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJjb21wYXJlRWxlbWVudHMiLCJpbmRleGVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImdldFNlcXVlbmNlSW5kZXhlcyIsInJlcyIsImoiLCJwdXNoIiwidXNlR2FtZVN0YXRlIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiQ1JPU1MiLCJjb25zb2xlIiwibG9nIiwibmV4dFR1cm4iLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});