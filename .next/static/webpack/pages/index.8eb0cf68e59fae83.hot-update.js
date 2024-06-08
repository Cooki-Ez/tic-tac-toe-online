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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   gameStateReducer: function() { return /* binding */ gameStateReducer; },\n/* harmony export */   initGameState: function() { return /* binding */ initGameState; }\n/* harmony export */ });\n/* harmony import */ var _get_next_turn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst initGameState = (param)=>{\n    let { playersCount, defaultTimer, currentTurnStart } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentTurn: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS,\n        currentTurnStart,\n        playersCount,\n        timers: _constants__WEBPACK_IMPORTED_MODULE_1__.TURN_ORDER.reduce((timers, symbol, index)=>{\n            if (index < playersCount) timers[symbol] = defaultTimer;\n            return timers;\n        }, {})\n    };\n};\nconst gameStateReducer = (state, action)=>{\n    console.log(action);\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index, now } = action;\n                if (state.cells[index]) return state;\n                return {\n                    ...state,\n                    timers: updateTimers(state, now),\n                    currentTurn: (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_0__.getNextTurn)(state),\n                    currentTurnStart: now,\n                    cells: updateCell(state, index)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\nfunction updateTimers(gameState, now) {\n    const diff = now - gameState.currentTurnStart;\n    const timer = gameState.timers[gameState.currentTurn];\n    return {\n        ...gameState.timers,\n        [gameState.currentTurn]: timer - diff\n    };\n}\nfunction updateCell(gameState, index) {\n    return gameState.cells.map((cell, i)=>i === index ? gameState.currentTurn : cell);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNVO0FBRS9DLE1BQU1HLHFCQUFxQjtJQUNoQ0MsWUFBWTtBQUNkLEVBQUM7QUFFTSxNQUFNQyxnQkFBZ0I7UUFBQyxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCLEVBQUM7V0FBTTtRQUNqRkMsT0FBTyxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CQyxhQUFhWCxvREFBWUEsQ0FBQ1ksS0FBSztRQUMvQkw7UUFDQUY7UUFDQVEsUUFBUVosa0RBQVVBLENBQUNhLE1BQU0sQ0FBQyxDQUFDRCxRQUFRRSxRQUFRQztZQUN6QyxJQUFHQSxRQUFRWCxjQUNUUSxNQUFNLENBQUNFLE9BQU8sR0FBR1Q7WUFFbkIsT0FBT087UUFDVCxHQUFHLENBQUM7SUFDTjtFQUFFO0FBR0ssTUFBTUksbUJBQW1CLENBQUNDLE9BQU9DO0lBQ3RDQyxRQUFRQyxHQUFHLENBQUNGO0lBRVosT0FBUUEsT0FBT0csSUFBSTtRQUNqQixLQUFLcEIsbUJBQW1CQyxVQUFVO1lBQUU7Z0JBQ2xDLE1BQU0sRUFBQ2EsS0FBSyxFQUFFTyxHQUFHLEVBQUMsR0FBR0o7Z0JBQ3JCLElBQUlELE1BQU1WLEtBQUssQ0FBQ1EsTUFBTSxFQUNwQixPQUFPRTtnQkFFVCxPQUFPO29CQUNMLEdBQUdBLEtBQUs7b0JBQ1JMLFFBQVFXLGFBQWFOLE9BQU9LO29CQUM1QlosYUFBYVosMkRBQVdBLENBQUNtQjtvQkFDekJYLGtCQUFrQmdCO29CQUNsQmYsT0FBT2lCLFdBQVdQLE9BQU9GO2dCQUMzQjtZQUNGO1FBQ0E7WUFBUztnQkFDUCxPQUFPRTtZQUNUO0lBQ0Y7QUFDRixFQUFDO0FBR0QsU0FBU00sYUFBYUUsU0FBUyxFQUFFSCxHQUFHO0lBQ2xDLE1BQU1JLE9BQU9KLE1BQU1HLFVBQVVuQixnQkFBZ0I7SUFDN0MsTUFBTXFCLFFBQVFGLFVBQVViLE1BQU0sQ0FBQ2EsVUFBVWYsV0FBVyxDQUFDO0lBRXJELE9BQU87UUFDTCxHQUFHZSxVQUFVYixNQUFNO1FBQ25CLENBQUNhLFVBQVVmLFdBQVcsQ0FBQyxFQUFFaUIsUUFBUUQ7SUFDbkM7QUFDRjtBQUNBLFNBQVNGLFdBQVdDLFNBQVMsRUFBRVYsS0FBSztJQUNsQyxPQUFPVSxVQUFVbEIsS0FBSyxDQUFDcUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQzlCQSxNQUFNZixRQUFRVSxVQUFVZixXQUFXLEdBQUdtQjtBQUU1QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcz9hMzUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0TmV4dFR1cm59IGZyb20gXCIuL2dldC1uZXh0LXR1cm5cIjtcbmltcG9ydCB7R0FNRV9TWU1CT0xTLCBUVVJOX09SREVSfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBHQU1FX1NUQVRFX0FDVElPTlMgPSB7XG4gIENFTExfQ0xJQ0s6IFwiY2VsbC1jbGlja1wiXG59XG5cbmV4cG9ydCBjb25zdCBpbml0R2FtZVN0YXRlID0gKHsgcGxheWVyc0NvdW50LCBkZWZhdWx0VGltZXIsIGN1cnJlbnRUdXJuU3RhcnR9KSA9PiAoe1xuICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gIGN1cnJlbnRUdXJuOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXG4gIGN1cnJlbnRUdXJuU3RhcnQsXG4gIHBsYXllcnNDb3VudCxcbiAgdGltZXJzOiBUVVJOX09SREVSLnJlZHVjZSgodGltZXJzLCBzeW1ib2wsIGluZGV4KSA9PiB7XG4gICAgaWYoaW5kZXggPCBwbGF5ZXJzQ291bnQpXG4gICAgICB0aW1lcnNbc3ltYm9sXSA9IGRlZmF1bHRUaW1lcjtcblxuICAgIHJldHVybiB0aW1lcnM7XG4gIH0sIHt9KVxufSlcblxuXG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0s6IHtcbiAgICAgIGNvbnN0IHtpbmRleCwgbm93fSA9IGFjdGlvbjtcbiAgICAgIGlmIChzdGF0ZS5jZWxsc1tpbmRleF0pXG4gICAgICAgIHJldHVybiBzdGF0ZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRpbWVyczogdXBkYXRlVGltZXJzKHN0YXRlLCBub3cpLFxuICAgICAgICBjdXJyZW50VHVybjogZ2V0TmV4dFR1cm4oc3RhdGUpLFxuICAgICAgICBjdXJyZW50VHVyblN0YXJ0OiBub3csXG4gICAgICAgIGNlbGxzOiB1cGRhdGVDZWxsKHN0YXRlLCBpbmRleCksXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlVGltZXJzKGdhbWVTdGF0ZSwgbm93KXtcbiAgY29uc3QgZGlmZiA9IG5vdyAtIGdhbWVTdGF0ZS5jdXJyZW50VHVyblN0YXJ0O1xuICBjb25zdCB0aW1lciA9IGdhbWVTdGF0ZS50aW1lcnNbZ2FtZVN0YXRlLmN1cnJlbnRUdXJuXTtcblxuICByZXR1cm4ge1xuICAgIC4uLmdhbWVTdGF0ZS50aW1lcnMsXG4gICAgW2dhbWVTdGF0ZS5jdXJyZW50VHVybl06IHRpbWVyIC0gZGlmZixcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlQ2VsbChnYW1lU3RhdGUsIGluZGV4KXtcbiAgcmV0dXJuIGdhbWVTdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XG4gICAgICBpID09PSBpbmRleCA/IGdhbWVTdGF0ZS5jdXJyZW50VHVybiA6IGNlbGxcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXROZXh0VHVybiIsIkdBTUVfU1lNQk9MUyIsIlRVUk5fT1JERVIiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJDRUxMX0NMSUNLIiwiaW5pdEdhbWVTdGF0ZSIsInBsYXllcnNDb3VudCIsImRlZmF1bHRUaW1lciIsImN1cnJlbnRUdXJuU3RhcnQiLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsImN1cnJlbnRUdXJuIiwiQ1JPU1MiLCJ0aW1lcnMiLCJyZWR1Y2UiLCJzeW1ib2wiLCJpbmRleCIsImdhbWVTdGF0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwibm93IiwidXBkYXRlVGltZXJzIiwidXBkYXRlQ2VsbCIsImdhbWVTdGF0ZSIsImRpZmYiLCJ0aW1lciIsIm1hcCIsImNlbGwiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/model/game-state-reducer.js\n"));

/***/ })

});