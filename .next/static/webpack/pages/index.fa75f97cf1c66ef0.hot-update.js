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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   gameStateReducer: function() { return /* binding */ gameStateReducer; },\n/* harmony export */   initGameState: function() { return /* binding */ initGameState; }\n/* harmony export */ });\n/* harmony import */ var _get_next_turn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-next-turn */ \"./components/game-new/model/get-next-turn.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\nconst initGameState = (param)=>{\n    let { playersCount } = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentTurn: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS,\n        playersCount,\n        timers: _constants__WEBPACK_IMPORTED_MODULE_1__.TURN_ORDER.reduce((timers, symobl, index)=>{\n            if (index < playersCount) {}\n        })\n    };\n};\nconst gameStateReducer = (state, action)=>{\n    console.log(action);\n    switch(action.type){\n        case GAME_STATE_ACTIONS.CELL_CLICK:\n            {\n                const { index } = action;\n                if (state.cells[index]) return state;\n                return {\n                    ...state,\n                    currentTurn: (0,_get_next_turn__WEBPACK_IMPORTED_MODULE_0__.getNextTurn)(state),\n                    cells: state.cells.map((cell, i)=>i === index ? state.currentTurn : cell)\n                };\n            }\n        default:\n            {\n                return state;\n            }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL2dhbWUtc3RhdGUtcmVkdWNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNVO0FBRS9DLE1BQU1HLHFCQUFxQjtJQUNoQ0MsWUFBWTtBQUNkLEVBQUM7QUFFTSxNQUFNQyxnQkFBZ0I7UUFBQyxFQUFFQyxZQUFZLEVBQUU7V0FBTTtRQUNsREMsT0FBTyxJQUFJQyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1FBQy9CQyxhQUFhVCxvREFBWUEsQ0FBQ1UsS0FBSztRQUMvQkw7UUFDQU0sUUFBUVYsa0RBQVVBLENBQUNXLE1BQU0sQ0FBQyxDQUFDRCxRQUFRRSxRQUFRQztZQUN6QyxJQUFHQSxRQUFRVCxjQUFjLENBQUM7UUFDNUI7SUFDRjtFQUFFO0FBR0ssTUFBTVUsbUJBQW1CLENBQUNDLE9BQU9DO0lBQ3RDQyxRQUFRQyxHQUFHLENBQUNGO0lBRVosT0FBUUEsT0FBT0csSUFBSTtRQUNqQixLQUFLbEIsbUJBQW1CQyxVQUFVO1lBQUU7Z0JBQ2xDLE1BQU0sRUFBQ1csS0FBSyxFQUFDLEdBQUdHO2dCQUNoQixJQUFJRCxNQUFNVixLQUFLLENBQUNRLE1BQU0sRUFDcEIsT0FBT0U7Z0JBRVQsT0FBTztvQkFDTCxHQUFHQSxLQUFLO29CQUNSUCxhQUFhViwyREFBV0EsQ0FBQ2lCO29CQUN6QlYsT0FBT1UsTUFBTVYsS0FBSyxDQUFDZSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsSUFDNUJBLE1BQU1ULFFBQVFFLE1BQU1QLFdBQVcsR0FBR2E7Z0JBRXRDO1lBQ0Y7UUFDQTtZQUFTO2dCQUNQLE9BQU9OO1lBQ1Q7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9tb2RlbC9nYW1lLXN0YXRlLXJlZHVjZXIuanM/YTM1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldE5leHRUdXJufSBmcm9tIFwiLi9nZXQtbmV4dC10dXJuXCI7XG5pbXBvcnQge0dBTUVfU1lNQk9MUywgVFVSTl9PUkRFUn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURV9BQ1RJT05TID0ge1xuICBDRUxMX0NMSUNLOiBcImNlbGwtY2xpY2tcIlxufVxuXG5leHBvcnQgY29uc3QgaW5pdEdhbWVTdGF0ZSA9ICh7IHBsYXllcnNDb3VudCB9KSA9PiAoe1xuICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG4gIGN1cnJlbnRUdXJuOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXG4gIHBsYXllcnNDb3VudCxcbiAgdGltZXJzOiBUVVJOX09SREVSLnJlZHVjZSgodGltZXJzLCBzeW1vYmwsIGluZGV4KSA9PiB7XG4gICAgaWYoaW5kZXggPCBwbGF5ZXJzQ291bnQpIHt9XG4gIH0pXG59KVxuXG5cbmV4cG9ydCBjb25zdCBnYW1lU3RhdGVSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSzoge1xuICAgICAgY29uc3Qge2luZGV4fSA9IGFjdGlvbjtcbiAgICAgIGlmIChzdGF0ZS5jZWxsc1tpbmRleF0pXG4gICAgICAgIHJldHVybiBzdGF0ZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRUdXJuOiBnZXROZXh0VHVybihzdGF0ZSksXG4gICAgICAgIGNlbGxzOiBzdGF0ZS5jZWxscy5tYXAoKGNlbGwsIGkpID0+XG4gICAgICAgICAgaSA9PT0gaW5kZXggPyBzdGF0ZS5jdXJyZW50VHVybiA6IGNlbGxcbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXROZXh0VHVybiIsIkdBTUVfU1lNQk9MUyIsIlRVUk5fT1JERVIiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJDRUxMX0NMSUNLIiwiaW5pdEdhbWVTdGF0ZSIsInBsYXllcnNDb3VudCIsImNlbGxzIiwiQXJyYXkiLCJmaWxsIiwiY3VycmVudFR1cm4iLCJDUk9TUyIsInRpbWVycyIsInJlZHVjZSIsInN5bW9ibCIsImluZGV4IiwiZ2FtZVN0YXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJtYXAiLCJjZWxsIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/game-state-reducer.js\n"));

/***/ })

});