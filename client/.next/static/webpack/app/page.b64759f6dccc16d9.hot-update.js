"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/AssetUpload.tsx":
/*!****************************************!*\
  !*** ./src/components/AssetUpload.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AssetUpload = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    if (!isMounted) {\n        return null;\n    }\n    const handleFileChange = (event)=>{\n        if (event.target.files) {\n            setFile(event.target.files[0]);\n            setSize(event.target.files[0].size);\n        }\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (!file) {\n            alert(\"Please select a file\");\n            return;\n        }\n        const formData = new FormData();\n        formData.append(\"name\", name);\n        formData.append(\"type\", type);\n        formData.append(\"size\", size.toString());\n        formData.append(\"file\", file);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/assets\", formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            alert(\"Asset uploaded successfully\");\n        } catch (error) {\n            console.error(\"Error uploading asset:\", error);\n            alert(\"Failed to upload asset\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-semibold\",\n                children: \"Upload New Asset\"\n            }, void 0, false, {\n                fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block text-sm font-medium text-white\",\n                                children: \"Name:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                className: \"mt-1 block w-full border border-gray-500 bg-black text-white rounded-md shadow-sm p-2\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"type\",\n                                className: \"block text-sm font-medium text-white\",\n                                children: \"Type:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"type\",\n                                value: type,\n                                onChange: (e)=>setType(e.target.value),\n                                className: \"mt-1 block w-full border border-gray-500 bg-black text-white rounded-md shadow-sm p-2\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"file\",\n                                className: \"block text-sm font-medium text-white\",\n                                children: \"File:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                id: \"file\",\n                                onChange: handleFileChange,\n                                className: \"mt-1 block w-full border border-gray-500 bg-black text-white rounded-md shadow-sm p-2\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600\",\n                        children: \"Upload\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Chris/Sites/game-dev-tools/client/src/components/AssetUpload.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AssetUpload, \"8nhLFlKGxNDJKGorzLuM+1BqKs0=\");\n_c = AssetUpload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetUpload);\nvar _c;\n$RefreshReg$(_c, \"AssetUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Fzc2V0VXBsb2FkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTRDO0FBQ2xCO0FBRTFCLE1BQU1HLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBYztJQUM5QyxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ1JZLGFBQWE7SUFDZixHQUFHLEVBQUU7SUFFTCxJQUFJLENBQUNELFdBQVc7UUFDZCxPQUFPO0lBQ1Q7SUFFQSxNQUFNRSxtQkFBbUIsQ0FBQ0M7UUFDeEIsSUFBSUEsTUFBTUMsTUFBTSxDQUFDQyxLQUFLLEVBQUU7WUFDdEJOLFFBQVFJLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7WUFDN0JSLFFBQVFNLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQ1QsSUFBSTtRQUNwQztJQUNGO0lBRUEsTUFBTVUsZUFBZSxPQUFPSDtRQUMxQkEsTUFBTUksY0FBYztRQUNwQixJQUFJLENBQUNULE1BQU07WUFDVFUsTUFBTTtZQUNOO1FBQ0Y7UUFFQSxNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUW5CO1FBQ3hCaUIsU0FBU0UsTUFBTSxDQUFDLFFBQVFqQjtRQUN4QmUsU0FBU0UsTUFBTSxDQUFDLFFBQVFmLEtBQUtnQixRQUFRO1FBQ3JDSCxTQUFTRSxNQUFNLENBQUMsUUFBUWI7UUFFeEIsSUFBSTtZQUNGLE1BQU1SLDZDQUFLQSxDQUFDdUIsSUFBSSxDQUFDLFdBQVdKLFVBQVU7Z0JBQ3BDSyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUNBTixNQUFNO1FBQ1IsRUFBRSxPQUFPTyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1lBQ3hDUCxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXdCOzs7Ozs7MEJBQ3RDLDhEQUFDRTtnQkFBS0MsVUFBVWY7Z0JBQWNZLFdBQVU7O2tDQUN0Qyw4REFBQ0Q7OzBDQUNDLDhEQUFDSztnQ0FDQ0MsU0FBUTtnQ0FDUkwsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDTTtnQ0FDQzlCLE1BQUs7Z0NBQ0wrQixJQUFHO2dDQUNIQyxPQUFPbEM7Z0NBQ1BtQyxVQUFVLENBQUNDLElBQU1uQyxRQUFRbUMsRUFBRXhCLE1BQU0sQ0FBQ3NCLEtBQUs7Z0NBQ3ZDUixXQUFVO2dDQUNWVyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNaOzswQ0FDQyw4REFBQ0s7Z0NBQ0NDLFNBQVE7Z0NBQ1JMLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ007Z0NBQ0M5QixNQUFLO2dDQUNMK0IsSUFBRztnQ0FDSEMsT0FBT2hDO2dDQUNQaUMsVUFBVSxDQUFDQyxJQUFNakMsUUFBUWlDLEVBQUV4QixNQUFNLENBQUNzQixLQUFLO2dDQUN2Q1IsV0FBVTtnQ0FDVlcsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDWjs7MENBQ0MsOERBQUNLO2dDQUNDQyxTQUFRO2dDQUNSTCxXQUFVOzBDQUNYOzs7Ozs7MENBR0QsOERBQUNNO2dDQUNDOUIsTUFBSztnQ0FDTCtCLElBQUc7Z0NBQ0hFLFVBQVV6QjtnQ0FDVmdCLFdBQVU7Z0NBQ1ZXLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ0M7d0JBQ0NwQyxNQUFLO3dCQUNMd0IsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0E1R00zQjtLQUFBQTtBQThHTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Bc3NldFVwbG9hZC50c3g/YTIxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBBc3NldFVwbG9hZCA9ICgpID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFpc01vdW50ZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcykge1xuICAgICAgc2V0RmlsZShldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgc2V0U2l6ZShldmVudC50YXJnZXQuZmlsZXNbMF0uc2l6ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIGZpbGVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJuYW1lXCIsIG5hbWUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInR5cGVcIiwgdHlwZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwic2l6ZVwiLCBzaXplLnRvU3RyaW5nKCkpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChcIi9hc3NldHNcIiwgZm9ybURhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBhbGVydChcIkFzc2V0IHVwbG9hZGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwbG9hZGluZyBhc3NldDpcIiwgZXJyb3IpO1xuICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gdXBsb2FkIGFzc2V0XCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHRleHQtd2hpdGVcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5VcGxvYWQgTmV3IEFzc2V0PC9oMj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBOYW1lOlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCBiZy1ibGFjayB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LXNtIHAtMlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cInR5cGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBUeXBlOlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cInR5cGVcIlxuICAgICAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFR5cGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCBiZy1ibGFjayB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LXNtIHAtMlwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj1cImZpbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBGaWxlOlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBpZD1cImZpbGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIGJnLWJsYWNrIHRleHQtd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctc20gcC0yXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTIgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgc2hhZG93LXNtIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgVXBsb2FkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRVcGxvYWQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkFzc2V0VXBsb2FkIiwibmFtZSIsInNldE5hbWUiLCJ0eXBlIiwic2V0VHlwZSIsInNpemUiLCJzZXRTaXplIiwiZmlsZSIsInNldEZpbGUiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9TdHJpbmciLCJwb3N0IiwiaGVhZGVycyIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AssetUpload.tsx\n"));

/***/ })

});