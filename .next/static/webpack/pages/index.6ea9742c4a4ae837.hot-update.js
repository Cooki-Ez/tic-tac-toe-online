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

/***/ "./components/game-new/model/game-state-reducer.js":
/*!*********************************************************!*\
  !*** ./components/game-new/model/game-state-reducer.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   gameStateReducer: function() { return /* binding */ gameStateReducer; },\n/* harmony export */   initGameState: function() { return /* binding */ initGameState; }\n/* harmony export */ });\n/* harmony import */ var _get_next_turn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst initGameState = (param)=>{\n    let { playersCount, defaultTimer } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentTurn: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS,\n        playersCount,\n        timers: _constants__WEBPACK_IMPORTED_MODULE_1__.TURN_ORDER.reduce((timers, symbol, index)=>{\n            if (index < playersCount) timers[symbol] = defaultTimer;\n            return timers;\n        }, {})\n    };\n};\nconst gameStateReducer = (state, action)=>{\n    console.log(action);\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index } = action;\n                if (state.cells[index]) return state;\n                return {\n                    ...state,\n                    currentTurn: (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_0__.getNextTurn)(state),\n                    cells: state.cells.map((cell, i)=>i === index ? state.currentTurn : cell)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNVO0FBRS9DLE1BQU1HLHFCQUFxQjtJQUNoQ0MsWUFBWTtBQUNkLEVBQUM7QUFFTSxNQUFNQyxnQkFBZ0I7UUFBQyxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBQztXQUFNO1FBQy9EQyxPQUFPLElBQUlDLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7UUFDL0JDLGFBQWFWLG9EQUFZQSxDQUFDVyxLQUFLO1FBQy9CTjtRQUNBTyxRQUFRWCxrREFBVUEsQ0FBQ1ksTUFBTSxDQUFDLENBQUNELFFBQVFFLFFBQVFDO1lBQ3pDLElBQUdBLFFBQVFWLGNBQ1RPLE1BQU0sQ0FBQ0UsT0FBTyxHQUFHUjtZQUVuQixPQUFPTTtRQUNULEdBQUcsQ0FBQztJQUNOO0VBQUU7QUFHSyxNQUFNSSxtQkFBbUIsQ0FBQ0MsT0FBT0M7SUFDdENDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixPQUFRQSxPQUFPRyxJQUFJO1FBQ2pCLEtBQUtuQixtQkFBbUJDLFVBQVU7WUFBRTtnQkFDbEMsTUFBTSxFQUFDWSxLQUFLLEVBQUMsR0FBR0c7Z0JBQ2hCLElBQUlELE1BQU1WLEtBQUssQ0FBQ1EsTUFBTSxFQUNwQixPQUFPRTtnQkFFVCxPQUFPO29CQUNMLEdBQUdBLEtBQUs7b0JBQ1JQLGFBQWFYLDJEQUFXQSxDQUFDa0I7b0JBQ3pCVixPQUFPVSxNQUFNVixLQUFLLENBQUNlLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUM1QkEsTUFBTVQsUUFBUUUsTUFBTVAsV0FBVyxHQUFHYTtnQkFFdEM7WUFDRjtRQUNBO1lBQVM7Z0JBQ1AsT0FBT047WUFDVDtJQUNGO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcz9hMzUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0TmV4dFR1cm59IGZyb20gXCIuL2dldC1uZXh0LXR1cm5cIjtcbmltcG9ydCB7R0FNRV9TWU1CT0xTLCBUVVJOX09SREVSfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBHQU1FX1NUQVRFX0FDVElPTlMgPSB7XG4gIENFTExfQ0xJQ0s6IFwiY2VsbC1jbGlja1wiXG59XG5cbmV4cG9ydCBjb25zdCBpbml0R2FtZVN0YXRlID0gKHsgcGxheWVyc0NvdW50LCBkZWZhdWx0VGltZXJ9KSA9PiAoe1xuICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gIGN1cnJlbnRUdXJuOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXG4gIHBsYXllcnNDb3VudCxcbiAgdGltZXJzOiBUVVJOX09SREVSLnJlZHVjZSgodGltZXJzLCBzeW1ib2wsIGluZGV4KSA9PiB7XG4gICAgaWYoaW5kZXggPCBwbGF5ZXJzQ291bnQpXG4gICAgICB0aW1lcnNbc3ltYm9sXSA9IGRlZmF1bHRUaW1lcjtcblxuICAgIHJldHVybiB0aW1lcnM7XG4gIH0sIHt9KVxufSlcblxuXG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0s6IHtcbiAgICAgIGNvbnN0IHtpbmRleH0gPSBhY3Rpb247XG4gICAgICBpZiAoc3RhdGUuY2VsbHNbaW5kZXhdKVxuICAgICAgICByZXR1cm4gc3RhdGU7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50VHVybjogZ2V0TmV4dFR1cm4oc3RhdGUpLFxuICAgICAgICBjZWxsczogc3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxuICAgICAgICAgIGkgPT09IGluZGV4ID8gc3RhdGUuY3VycmVudFR1cm4gOiBjZWxsXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0TmV4dFR1cm4iLCJHQU1FX1NZTUJPTFMiLCJUVVJOX09SREVSIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwiQ0VMTF9DTElDSyIsImluaXRHYW1lU3RhdGUiLCJwbGF5ZXJzQ291bnQiLCJkZWZhdWx0VGltZXIiLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRUdXJuIiwiQ1JPU1MiLCJ0aW1lcnMiLCJyZWR1Y2UiLCJzeW1ib2wiLCJpbmRleCIsImdhbWVTdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwibWFwIiwiY2VsbCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/model/game-state-reducer.js\n"));

/***/ })

});