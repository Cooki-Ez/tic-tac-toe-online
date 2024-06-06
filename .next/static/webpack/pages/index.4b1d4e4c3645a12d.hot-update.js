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

/***/ "./components/game-new/model/compute-winner.js":
/*!*****************************************************!*\
  !*** ./components/game-new/model/compute-winner.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computeWinner: function() { return /* binding */ computeWinner; }\n/* harmony export */ });\nfunction computeWinner(gameState) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const cells = gameState.cells;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            [] // |\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        const x = i % fieldSize;\n        if (x < gap || x >= fieldSize - gap) {\n            res.shift();\n            res.shift();\n            res.shift();\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            const indexRows = getSequenceIndexes(i);\n            const winnerIndexes = indexRows.find((row)=>compareElements(row));\n            if (winnerIndexes) return winnerIndexes;\n        }\n    }\n    return undefined;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2NvbXB1dGUtd2lubmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxjQUNkQyxTQUFTO1FBQ1RDLGVBQUFBLGlFQUFlLEdBQ2ZDLFlBQUFBLGlFQUFZO0lBRVosTUFBTUMsUUFBUUgsVUFBVUcsS0FBSztJQUM3QixNQUFNQyxNQUFNQyxLQUFLQyxLQUFLLENBQUNMLGVBQWU7SUFFdEMsU0FBU00sZ0JBQWdCQyxPQUFPO1FBQzlCLElBQUlDLFNBQVM7UUFDYixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsUUFBUUcsTUFBTSxFQUFFRCxJQUFLO1lBQ3ZDRCxXQUFBQSxTQUFXLENBQUMsQ0FBQ04sS0FBSyxDQUFDSyxPQUFPLENBQUNFLEVBQUUsQ0FBQztZQUM5QkQsV0FBQUEsU0FBV04sS0FBSyxDQUFDSyxPQUFPLENBQUNFLEVBQUUsQ0FBQyxLQUFLUCxLQUFLLENBQUNLLE9BQU8sQ0FBQ0UsSUFBSSxFQUFFLENBQUM7UUFDeEQ7UUFFQSxPQUFPRDtJQUNUO0lBRUEsU0FBU0csbUJBQW1CRixDQUFDO1FBQzNCLE1BQU1HLE1BQU07WUFDVixFQUFFO1lBQ0YsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFLENBQUMsSUFBSTtTQUNSO1FBRUQsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUliLGNBQWNhLElBQUs7WUFDckNELEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ0QsSUFBSVYsTUFBTU07WUFDdEJHLEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ2IsWUFBYVksQ0FBQUEsSUFBSVYsR0FBRSxJQUFNVSxDQUFBQSxJQUFJVixHQUFFLElBQUtNO1lBQ2hERyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUMsQ0FBQ2IsWUFBYVksQ0FBQUEsSUFBSVYsR0FBRSxJQUFNVSxDQUFBQSxJQUFJVixHQUFFLElBQUtNO1lBQ2pERyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNiLFlBQWFZLENBQUFBLElBQUlWLEdBQUUsSUFBS007UUFDdEM7UUFFQSxNQUFNTSxJQUFJTixJQUFJUjtRQUNkLElBQUljLElBQUlaLE9BQU9ZLEtBQUtkLFlBQVlFLEtBQUs7WUFDbkNTLElBQUlJLEtBQUs7WUFDVEosSUFBSUksS0FBSztZQUNUSixJQUFJSSxLQUFLO1FBQ1g7UUFFQSxPQUFPSjtJQUNUO0lBRUEsSUFBSyxJQUFJSCxJQUFJLEdBQUdBLElBQUlQLE1BQU1RLE1BQU0sRUFBRUQsSUFBSztRQUNyQyxJQUFJUCxLQUFLLENBQUNPLEVBQUUsRUFBRTtZQUNaLE1BQU1RLFlBQVlOLG1CQUFtQkY7WUFFckMsTUFBTVMsZ0JBQWdCRCxVQUFVRSxJQUFJLENBQUNDLENBQUFBLE1BQU9kLGdCQUFnQmM7WUFFNUQsSUFBSUYsZUFDRixPQUFPQTtRQUNYO0lBQ0Y7SUFDQSxPQUFPRztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvbW9kZWwvY29tcHV0ZS13aW5uZXIuanM/Y2MyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29tcHV0ZVdpbm5lcihcbiAgZ2FtZVN0YXRlLFxuICBzZXF1ZW5jZVNpemUgPSA1LFxuICBmaWVsZFNpemUgPSAxOVxuKSB7XG4gIGNvbnN0IGNlbGxzID0gZ2FtZVN0YXRlLmNlbGxzO1xuICBjb25zdCBnYXAgPSBNYXRoLmZsb29yKHNlcXVlbmNlU2l6ZSAvIDIpO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVFbGVtZW50cyhpbmRleGVzKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgJiY9ICEhY2VsbHNbaW5kZXhlc1tpXV07XG4gICAgICByZXN1bHQgJiY9IGNlbGxzW2luZGV4ZXNbaV1dID09PSBjZWxsc1tpbmRleGVzW2kgLSAxXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlcXVlbmNlSW5kZXhlcyhpKSB7XG4gICAgY29uc3QgcmVzID0gW1xuICAgICAgW10sIC8vIC1cbiAgICAgIFtdLCAvLyBcXFxuICAgICAgW10sIC8vIC9cbiAgICAgIFtdIC8vIHxcbiAgICBdXG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlcXVlbmNlU2l6ZTsgaisrKSB7XG4gICAgICByZXNbMF0ucHVzaChqIC0gZ2FwICsgaSk7XG4gICAgICByZXNbMV0ucHVzaChmaWVsZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKTtcbiAgICAgIHJlc1syXS5wdXNoKC1maWVsZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKTtcbiAgICAgIHJlc1szXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIGkpO1xuICAgIH1cblxuICAgIGNvbnN0IHggPSBpICUgZmllbGRTaXplO1xuICAgIGlmICh4IDwgZ2FwIHx8IHggPj0gZmllbGRTaXplIC0gZ2FwKSB7XG4gICAgICByZXMuc2hpZnQoKTtcbiAgICAgIHJlcy5zaGlmdCgpO1xuICAgICAgcmVzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoY2VsbHNbaV0pIHtcbiAgICAgIGNvbnN0IGluZGV4Um93cyA9IGdldFNlcXVlbmNlSW5kZXhlcyhpKTtcblxuICAgICAgY29uc3Qgd2lubmVySW5kZXhlcyA9IGluZGV4Um93cy5maW5kKHJvdyA9PiBjb21wYXJlRWxlbWVudHMocm93KSlcblxuICAgICAgaWYgKHdpbm5lckluZGV4ZXMpXG4gICAgICAgIHJldHVybiB3aW5uZXJJbmRleGVzO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbImNvbXB1dGVXaW5uZXIiLCJnYW1lU3RhdGUiLCJzZXF1ZW5jZVNpemUiLCJmaWVsZFNpemUiLCJjZWxscyIsImdhcCIsIk1hdGgiLCJmbG9vciIsImNvbXBhcmVFbGVtZW50cyIsImluZGV4ZXMiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiZ2V0U2VxdWVuY2VJbmRleGVzIiwicmVzIiwiaiIsInB1c2giLCJ4Iiwic2hpZnQiLCJpbmRleFJvd3MiLCJ3aW5uZXJJbmRleGVzIiwiZmluZCIsInJvdyIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/compute-winner.js\n"));

/***/ })

});