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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index */ \"./components/index.js\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/context */ \"./context/context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Internal Import\n\n\nconst index = ()=>{\n    _s();\n    const { TRADING_BOT } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_4__.CONTEXT);\n    // State Variable\n    const [activeComponent, setActiveComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Home\");\n    const [membershipType, setMembershipType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Premium\");\n    const [authBackEndID, setAuthBackEndID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Networks, setNetworks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [networkName, setNetworkName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // Notification\n    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(msg, {\n            duration: 2000\n        });\n    const notifySuccess = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(msg, {\n            duration: 2000\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.MovingSubmenu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\Crypto-Bot\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Preloader, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\Crypto-Bot\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            activeComponent == \"Signup\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Signup, {\n                axios: axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                setActiveComponent: setActiveComponent,\n                notifyError: notifyError,\n                notifySuccess: notifySuccess\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\Crypto-Bot\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, undefined) : // Home\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"techwave_fn_wrapper\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"techwave_fn_wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Search, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\Crypto-Bot\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                            networkName: networkName,\n                            setActiveComponent: setActiveComponent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\Crypto-Bot\\\\pages\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.SideBar, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\Crypto-Bot\\\\pages\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\Crypto-Bot\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\Crypto-Bot\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined),\n            activeComponent == \"Login\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Login, {\n                setActiveComponent: setActiveComponent,\n                axios: axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                notifyError: notifyError,\n                notifySuccess: notifySuccess\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\Crypto-Bot\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\Crypto-Bot\\\\pages\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"qFrcCoMY5rVg+w4x7VHlxAPdSyc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUNJO0FBQ007QUFFcEMsa0JBQWtCO0FBRThGO0FBQ3RFO0FBRTFDLE1BQU0yQixRQUFROztJQUNaLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUd6QixpREFBVUEsQ0FBQ3VCLHFEQUFPQTtJQUUxQyxpQkFBaUI7SUFDakIsTUFBSyxDQUFDRyxpQkFBZ0JDLG1CQUFtQixHQUFHN0IsK0NBQVFBLENBQUM7SUFDckQsTUFBSyxDQUFDOEIsZ0JBQWVDLGtCQUFrQixHQUFHL0IsK0NBQVFBLENBQUM7SUFDbkQsTUFBSyxDQUFDZ0MsZUFBY0MsaUJBQWlCLEdBQUdqQywrQ0FBUUEsQ0FBQztJQUNqRCxNQUFLLENBQUNlLFVBQVNtQixZQUFZLEdBQUdsQywrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3hDLE1BQUssQ0FBQ21DLGFBQVlDLGVBQWUsR0FBR3BDLCtDQUFRQTtJQUU1QyxlQUFlO0lBQ2YsTUFBTXFDLGNBQWMsQ0FBQ0MsTUFBUWpDLDZEQUFXLENBQUNpQyxLQUFJO1lBQUNFLFVBQVM7UUFBSTtJQUMzRCxNQUFNQyxnQkFBZ0IsQ0FBQ0gsTUFBT2pDLCtEQUFhLENBQUNpQyxLQUFJO1lBQUNFLFVBQVM7UUFBSTtJQUM5RCxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDbEMsNERBQWFBOzs7OzswQkFDZCw4REFBQ0Msd0RBQVNBOzs7OztZQUVSa0IsbUJBQW1CLHlCQUNqQiw4REFBQ1QscURBQU1BO2dCQUFDaEIsT0FBUUEsNkNBQUtBO2dCQUFFMEIsb0JBQW9CQTtnQkFDM0NRLGFBQWFBO2dCQUFhSSxlQUFlQTs7Ozs7NEJBRXpDLE9BQU87MEJBQ1AsOERBQUNFO2dCQUFJQyxXQUFVOzBCQUNmLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNwQyxxREFBTUE7Ozs7O3NDQUNQLDhEQUFDRixxREFBTUE7NEJBQ1A2QixhQUFhQTs0QkFDYk4sb0JBQW9CQTs7Ozs7O3NDQUVwQiw4REFBQ2xCLHNEQUFPQTs7Ozs7Ozs7Ozs7Ozs7OztZQU1aaUIsbUJBQWlCLHdCQUNmLDhEQUFDVixvREFBS0E7Z0JBQUNXLG9CQUFvQkE7Z0JBQW9CMUIsT0FBU0EsNkNBQUtBO2dCQUMzRGtDLGFBQWFBO2dCQUFhSSxlQUFlQTs7Ozs7NEJBRTNDOzs7Ozs7O0FBS1Y7R0E3Q01mO0FBK0NOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtldGhlcnN9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbi8vIEludGVybmFsIEltcG9ydFxyXG5pbXBvcnQge0hlYWRlcixGb290ZXIsU2VhcmNoLE1vdmluZ1N1Ym1lbnUsUHJlbG9hZGVyLFNpZGVCYXIsSG9tZSxUcmFkZVRva2VucyxUb3BFeGNoYW5nZVRva2Vuc1xyXG4sTmV0d29ya3MsQWRkTmV0d29yayxQcmljZSxMb2dpbixTaWdudXAsUHJvZmlsZSxTZXR0aW5nLEFkZFRva2VuUGFpcixUcmFkaW5nLExvYWRlcix9IGZyb20gXCIuLi9jb21wb25lbnRzL2luZGV4XCJcclxuaW1wb3J0IHtDT05URVhUfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCJcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgVFJBRElOR19CT1QgfSA9IHVzZUNvbnRleHQoQ09OVEVYVClcclxuXHJcbiAgLy8gU3RhdGUgVmFyaWFibGVcclxuICBjb25zdFthY3RpdmVDb21wb25lbnQsc2V0QWN0aXZlQ29tcG9uZW50XSA9IHVzZVN0YXRlKFwiSG9tZVwiKVxyXG4gIGNvbnN0W21lbWJlcnNoaXBUeXBlLHNldE1lbWJlcnNoaXBUeXBlXSA9IHVzZVN0YXRlKFwiUHJlbWl1bVwiKVxyXG4gIGNvbnN0W2F1dGhCYWNrRW5kSUQsc2V0QXV0aEJhY2tFbmRJRF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0W05ldHdvcmtzLHNldE5ldHdvcmtzXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0W25ldHdvcmtOYW1lLHNldE5ldHdvcmtOYW1lXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgLy8gTm90aWZpY2F0aW9uXHJcbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2cse2R1cmF0aW9uOjIwMDB9KTtcclxuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKG1zZykgPT50b2FzdC5zdWNjZXNzKG1zZyx7ZHVyYXRpb246MjAwMH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW92aW5nU3VibWVudS8+XHJcbiAgICAgIDxQcmVsb2FkZXIvPlxyXG4gICAgICB7XHJcbiAgICAgICAgYWN0aXZlQ29tcG9uZW50ID09IFwiU2lnbnVwXCIgPyAoXHJcbiAgICAgICAgICA8U2lnbnVwIGF4aW9zID17YXhpb3N9IHNldEFjdGl2ZUNvbXBvbmVudD17c2V0QWN0aXZlQ29tcG9uZW50fSBcclxuICAgICAgICAgIG5vdGlmeUVycm9yPXtub3RpZnlFcnJvcn0gbm90aWZ5U3VjY2Vzcz17bm90aWZ5U3VjY2Vzc30gLz5cclxuICAgICAgICApOihcclxuICAgICAgICAgIC8vIEhvbWVcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaHdhdmVfZm5fd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNod2F2ZV9mbl93cmFwXCI+XHJcbiAgICAgICAgICAgIDxTZWFyY2gvPlxyXG4gICAgICAgICAgICA8SGVhZGVyXHJcbiAgICAgICAgICAgIG5ldHdvcmtOYW1lPXtuZXR3b3JrTmFtZX1cclxuICAgICAgICAgICAgc2V0QWN0aXZlQ29tcG9uZW50PXtzZXRBY3RpdmVDb21wb25lbnR9Lz5cclxuXHJcbiAgICAgICAgICAgIDxTaWRlQmFyLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICB7XHJcbiAgICAgICAgYWN0aXZlQ29tcG9uZW50PT1cIkxvZ2luXCI/KFxyXG4gICAgICAgICAgPExvZ2luIHNldEFjdGl2ZUNvbXBvbmVudD17c2V0QWN0aXZlQ29tcG9uZW50fSBheGlvcyA9IHtheGlvc30gXHJcbiAgICAgICAgICAgIG5vdGlmeUVycm9yPXtub3RpZnlFcnJvcn0gbm90aWZ5U3VjY2Vzcz17bm90aWZ5U3VjY2Vzc30vPlxyXG4gICAgICAgICk6KFxyXG4gICAgICAgICAgXCJcIlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsImF4aW9zIiwiZXRoZXJzIiwidG9hc3QiLCJIZWFkZXIiLCJGb290ZXIiLCJTZWFyY2giLCJNb3ZpbmdTdWJtZW51IiwiUHJlbG9hZGVyIiwiU2lkZUJhciIsIkhvbWUiLCJUcmFkZVRva2VucyIsIlRvcEV4Y2hhbmdlVG9rZW5zIiwiTmV0d29ya3MiLCJBZGROZXR3b3JrIiwiUHJpY2UiLCJMb2dpbiIsIlNpZ251cCIsIlByb2ZpbGUiLCJTZXR0aW5nIiwiQWRkVG9rZW5QYWlyIiwiVHJhZGluZyIsIkxvYWRlciIsIkNPTlRFWFQiLCJpbmRleCIsIlRSQURJTkdfQk9UIiwiYWN0aXZlQ29tcG9uZW50Iiwic2V0QWN0aXZlQ29tcG9uZW50IiwibWVtYmVyc2hpcFR5cGUiLCJzZXRNZW1iZXJzaGlwVHlwZSIsImF1dGhCYWNrRW5kSUQiLCJzZXRBdXRoQmFja0VuZElEIiwic2V0TmV0d29ya3MiLCJuZXR3b3JrTmFtZSIsInNldE5ldHdvcmtOYW1lIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});