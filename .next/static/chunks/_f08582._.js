(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_f08582._.js", {

"[project]/components/Navigation/Nav.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const Nav = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { locale, switchLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const toggleLanguage = ()=>{
        switchLanguage(locale === 'en' ? 'lv' : 'en');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-6 left-0 w-full px-4 sm:px-10 z-50 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -left-10 -top-6 w-[320px] h-[90px] bg-gradient-to-r from-black/20 via-black/10 to-transparent rounded-3xl blur-3xl pointer-events-none hidden md:block"
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation/Nav.jsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "relative z-10 backdrop-blur-2xl bg-black/20 rounded-2xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)] hover:bg-black/25 transition-all duration-300 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.png",
                                    alt: "Logo",
                                    width: 52,
                                    height: 52,
                                    className: "hover:scale-105 transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation/Nav.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/connect",
                                className: "hidden md:block relative z-10 backdrop-blur-xl bg-white/20 text-black font-medium px-6 py-3 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105",
                                children: "Connect"
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation/Nav.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navigation/Nav.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleLanguage,
                                className: "backdrop-blur-xl bg-white/20 text-black font-medium px-4 py-3 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2",
                                "aria-label": "Switch language",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navigation/Nav.jsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "uppercase font-semibold",
                                        children: locale
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navigation/Nav.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navigation/Nav.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "backdrop-blur-xl bg-white/25 text-black font-medium px-6 py-3 rounded-2xl shadow-[0_8px_35px_rgba(0,0,0,0.35)] hover:bg-white/35 hover:shadow-[0_8px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-105",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation/Nav.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/buy",
                                className: "backdrop-blur-2xl bg-white/40 text-black font-semibold px-7 py-3 rounded-2xl shadow-[0_10px_45px_rgba(0,0,0,0.45)] hover:bg-white/50 hover:shadow-[0_10px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:scale-110",
                                children: "Buy Now"
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation/Nav.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navigation/Nav.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "md:hidden relative z-50 backdrop-blur-xl bg-white/25 text-black p-3 rounded-2xl shadow-[0_10px_45px_rgba(0,0,0,0.45)] hover:bg-white/35 hover:shadow-[0_10px_60px_rgba(0,0,0,0.55)] transition-all duration-300",
                        "aria-label": "Toggle menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-5 flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navigation/Nav.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation/Nav.jsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navigation/Nav.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `md:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 backdrop-blur-2xl bg-black/60",
                        onClick: ()=>setIsOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation/Nav.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-28 right-4 left-4 backdrop-blur-2xl bg-white/15 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6 transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        toggleLanguage();
                                        setIsOpen(false);
                                    },
                                    className: "backdrop-blur-xl bg-white/20 text-black font-medium px-6 py-4 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navigation/Nav.jsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "uppercase font-semibold",
                                            children: locale === 'en' ? 'Switch to LV' : 'Switch to EN'
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navigation/Nav.jsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/connect",
                                    onClick: ()=>setIsOpen(false),
                                    className: "backdrop-blur-xl bg-white/20 text-black font-medium px-6 py-4 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 text-center",
                                    children: "Connect"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    onClick: ()=>setIsOpen(false),
                                    className: "backdrop-blur-xl bg-white/25 text-black font-medium px-6 py-4 rounded-2xl shadow-lg hover:bg-white/35 transition-all duration-300 text-center",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/buy",
                                    onClick: ()=>setIsOpen(false),
                                    className: "backdrop-blur-2xl bg-white/40 text-black font-semibold px-6 py-4 rounded-2xl shadow-lg hover:bg-white/50 transition-all duration-300 text-center",
                                    children: "Buy Now"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navigation/Nav.jsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation/Nav.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navigation/Nav.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(Nav, "x/xexlAFVwy1S8kdTpjRtc8MxTQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Nav;
const __TURBOPACK__default__export__ = Nav;
var _c;
__turbopack_refresh__.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/connectPageText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Connect Page Text Translations
__turbopack_esm__({
    "getConnectPageText": (()=>getConnectPageText)
});
const connectPageText = {
    en: {
        pageTitle: "Device Connection",
        addDeviceButton: "Add Device",
        viewGuideButton: "View Guide",
        // Add Device Modal
        modalTitle: "Add New Device",
        modalPlaceholder: "Enter Device ID",
        modalCancel: "Cancel",
        modalAdd: "Add Device",
        modalAdding: "Adding...",
        // Error Messages
        errorEmpty: "Device ID cannot be empty.",
        errorExists: "This device has already been added.",
        errorInvalid: "Device ID does not exist or is invalid.",
        errorFetch: "There was an error checking the device ID. Please try again later.",
        // Confirm Remove Modal
        confirmTitle: "Confirm Removal",
        confirmMessage: "Are you sure you want to remove the device with ID:",
        confirmCancel: "Cancel",
        confirmRemove: "Remove",
        // Device Card
        addNameButton: "+ Add Device Name",
        deviceIdLabel: "ID:",
        // Empty State
        emptyTitle: "No devices connected",
        emptySubtitle: "Click the \"Add Device\" button above to connect a device"
    },
    lv: {
        pageTitle: "Ierīces Savienojums",
        addDeviceButton: "Pievienot Ierīci",
        viewGuideButton: "Skatīt Ceļvedi",
        // Add Device Modal
        modalTitle: "Pievienot Jaunu Ierīci",
        modalPlaceholder: "Ievadiet Ierīces ID",
        modalCancel: "Atcelt",
        modalAdd: "Pievienot Ierīci",
        modalAdding: "Pievieno...",
        // Error Messages
        errorEmpty: "Ierīces ID nevar būt tukšs.",
        errorExists: "Šī ierīce jau ir pievienota.",
        errorInvalid: "Ierīces ID neeksistē vai nav derīgs.",
        errorFetch: "Radās kļūda, pārbaudot ierīces ID. Lūdzu, mēģiniet vēlreiz vēlāk.",
        // Confirm Remove Modal
        confirmTitle: "Apstiprināt Noņemšanu",
        confirmMessage: "Vai tiešām vēlaties noņemt ierīci ar ID:",
        confirmCancel: "Atcelt",
        confirmRemove: "Noņemt",
        // Device Card
        addNameButton: "+ Pievienot Ierīces Nosaukumu",
        deviceIdLabel: "ID:",
        // Empty State
        emptyTitle: "Nav pievienotu ierīču",
        emptySubtitle: "Noklikšķiniet uz pogas \"Pievienot Ierīci\", lai pievienotu ierīci"
    }
};
const getConnectPageText = (locale)=>{
    return connectPageText[locale] || connectPageText.en;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/GuidePopup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
;
const GuidePopup = ({ isOpen, onClose, text })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/GuidePopup.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex justify-center items-center z-50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-t-2xl flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfoCircle"], {
                                            className: "text-3xl"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GuidePopup.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold",
                                            children: "Device Connection Guide"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GuidePopup.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GuidePopup.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                                        className: "text-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GuidePopup.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/GuidePopup.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GuidePopup.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 text-lg leading-relaxed",
                                        children: "Welcome to the device connection guide. Follow these simple steps to connect your device and start monitoring it remotely."
                                    }, void 0, false, {
                                        fileName: "[project]/components/GuidePopup.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/GuidePopup.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GuidePopup.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlug"], {
                                                                className: "text-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 52,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Locate Your Device ID"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed mb-3",
                                                        children: "Your device ID is a unique identifier printed on your device. It typically consists of alphanumeric characters and can be found:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-inside text-gray-700 space-y-2 ml-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "On a label on the back or bottom of the device"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 59,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: 'In the device\'s settings menu under "Device Information"'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 60,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "On the original packaging or user manual"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 61,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 p-3 bg-white rounded-lg border border-blue-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Example:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/GuidePopup.tsx",
                                                                    lineNumber: 65,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    className: "bg-gray-100 px-2 py-1 rounded",
                                                                    children: "ABC123XYZ456"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/GuidePopup.tsx",
                                                                    lineNumber: 65,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/GuidePopup.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/GuidePopup.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GuidePopup.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/GuidePopup.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 bg-green-50 rounded-xl p-6 border-l-4 border-green-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GuidePopup.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWifi"], {
                                                                className: "text-green-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Connect Your Device to WiFi"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed mb-3",
                                                        children: "Ensure your device is connected to the internet via WiFi:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-disc list-inside text-gray-700 space-y-2 ml-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Power on your device"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Navigate to WiFi settings on the device"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Select your WiFi network and enter the password"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Verify the connection is stable (look for a WiFi indicator light)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-amber-800",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Note:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/GuidePopup.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " Your device must be online to appear in this dashboard."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/GuidePopup.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/GuidePopup.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GuidePopup.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/GuidePopup.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1",
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GuidePopup.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                                                                className: "text-purple-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 109,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Add Device to Dashboard"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 leading-relaxed mb-3",
                                                        children: "Once you have your Device ID:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "list-decimal list-inside text-gray-700 space-y-2 ml-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "Click the ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: '"Add Device"'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                                        lineNumber: 116,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    " button in the top-right corner"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Enter your Device ID in the popup window"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "Click ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: '"Add"'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                                        lineNumber: 118,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    " to verify and add the device"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Your device will appear in the device list"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Click on the device card to view its details and data"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/GuidePopup.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 p-3 bg-white rounded-lg border border-purple-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Tip:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/GuidePopup.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ' You can add a custom name to your device by clicking the "Add name" button on the device card.'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/GuidePopup.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/GuidePopup.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/GuidePopup.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GuidePopup.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/GuidePopup.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 rounded-xl p-6 border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-800 mb-4",
                                            children: "Troubleshooting"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GuidePopup.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-gray-800",
                                                            children: "Device ID not recognized?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/GuidePopup.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: "Double-check that you've entered the ID correctly. IDs are case-sensitive."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/GuidePopup.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/GuidePopup.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-gray-800",
                                                            children: "Device already exists?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/GuidePopup.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: "This device has already been added to your dashboard. Check your device list."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/GuidePopup.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/GuidePopup.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-gray-800",
                                                            children: "Connection issues?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/GuidePopup.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: "Ensure your device is powered on and connected to WiFi with a stable internet connection."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/GuidePopup.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/GuidePopup.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/GuidePopup.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GuidePopup.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold mb-2",
                                            children: "Need Help?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/GuidePopup.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-blue-50",
                                            children: "If you're still having trouble connecting your device, please contact our support team for assistance."
                                        }, void 0, false, {
                                            fileName: "[project]/components/GuidePopup.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/GuidePopup.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GuidePopup.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky bottom-0 bg-gray-50 p-6 rounded-b-2xl border-t border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg",
                                children: "Got it!"
                            }, void 0, false, {
                                fileName: "[project]/components/GuidePopup.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/GuidePopup.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/GuidePopup.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GuidePopup.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = GuidePopup;
const __TURBOPACK__default__export__ = GuidePopup;
var _c;
__turbopack_refresh__.register(_c, "GuidePopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Connect.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2f$Nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Navigation/Nav.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$connectPageText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/connectPageText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GuidePopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/GuidePopup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const Connect = ({ setActiveDevice, refreshOnReturn })=>{
    _s();
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newDeviceId, setNewDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmRemove, setShowConfirmRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deviceToRemove, setDeviceToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingDeviceId, setEditingDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editName, setEditName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showGuide, setShowGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$connectPageText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectPageText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Connect.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$connectPageText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConnectPageText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["Connect.useEffect"], [
        locale
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Connect.useEffect": ()=>{
            const savedDevices = localStorage.getItem('savedDevices');
            if (savedDevices) {
                setDevices(JSON.parse(savedDevices));
            }
        }
    }["Connect.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Connect.useEffect": ()=>{
            if (devices.length > 0) {
                localStorage.setItem('savedDevices', JSON.stringify(devices));
            }
        }
    }["Connect.useEffect"], [
        devices
    ]);
    const selectDevice = (id)=>{
        // Don't select device if we're in editing mode
        if (editingDeviceId) return;
        setActiveDevice(id);
    };
    const addDevice = async ()=>{
        if (!newDeviceId) {
            setError(text.errorEmpty);
            return;
        }
        // Check if device already exists in the array
        if (devices.some((device)=>device.id === newDeviceId)) {
            setError(text.errorExists);
            return;
        }
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`https://simple-api.mistify.lv/api/device/exist?id=${newDeviceId}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText} (${response.status})`);
            }
            const data = await response.text();
            if (data === 'true') {
                const newDevice = {
                    id: newDeviceId,
                    name: ''
                };
                const updatedDevices = [
                    ...devices,
                    newDevice
                ];
                setDevices(updatedDevices);
                // Save to localStorage
                localStorage.setItem('savedDevices', JSON.stringify(updatedDevices));
                setNewDeviceId('');
                setShowModal(false);
            } else {
                setError(text.errorInvalid);
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setError(text.errorFetch);
        } finally{
            setLoading(false);
        }
    };
    const confirmRemoveDevice = (id)=>{
        setDeviceToRemove(id);
        setShowConfirmRemove(true);
    };
    const removeDevice = ()=>{
        const updatedDevices = devices.filter((device)=>device.id !== deviceToRemove);
        setDevices(updatedDevices);
        // Save updated devices list to localStorage
        localStorage.setItem('savedDevices', JSON.stringify(updatedDevices));
        setShowConfirmRemove(false);
        setDeviceToRemove(null);
    };
    const startEditing = (id, currentName)=>{
        setEditingDeviceId(id);
        setEditName(currentName || '');
    };
    const cancelEditing = ()=>{
        setEditingDeviceId(null);
        setEditName('');
    };
    const saveDeviceName = (id)=>{
        const updatedDevices = devices.map((device)=>device.id === id ? {
                ...device,
                name: editName
            } : device);
        setDevices(updatedDevices);
        // Save updated devices with new name to localStorage
        localStorage.setItem('savedDevices', JSON.stringify(updatedDevices));
        setEditingDeviceId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2f$Nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Connect.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-12 bg-gray-200 mt-[110px] h-[calc(100vh-110px)] relative text-gray-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold",
                                children: text.pageTitle
                            }, void 0, false, {
                                fileName: "[project]/components/Connect.jsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowGuide(true),
                                        className: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuestionCircle"], {}, void 0, false, {
                                                fileName: "[project]/components/Connect.jsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            " View Guide"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Connect.jsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowModal(true),
                                        className: "flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {}, void 0, false, {
                                                fileName: "[project]/components/Connect.jsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            text.addDeviceButton
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Connect.jsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Connect.jsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Connect.jsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GuidePopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: showGuide,
                        onClose: ()=>setShowGuide(false),
                        text: text
                    }, void 0, false, {
                        fileName: "[project]/components/Connect.jsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-[rgba(0, 0, 0, 0.7)] z-10",
                        onClick: ()=>setShowModal(false)
                    }, void 0, false, {
                        fileName: "[project]/components/Connect.jsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 flex justify-center items-center z-20 bg-[rgba(0,0,0,0.7)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-8 rounded-xl shadow-xl w-96 max-w-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-semibold text-gray-800 mb-6",
                                    children: text.modalTitle
                                }, void 0, false, {
                                    fileName: "[project]/components/Connect.jsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mb-4",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/components/Connect.jsx",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: newDeviceId,
                                    onChange: (e)=>setNewDeviceId(e.target.value),
                                    className: "w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: text.modalPlaceholder
                                }, void 0, false, {
                                    fileName: "[project]/components/Connect.jsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowModal(false),
                                            className: "px-6 py-2 bg-gray-300 rounded-lg",
                                            children: text.modalCancel
                                        }, void 0, false, {
                                            fileName: "[project]/components/Connect.jsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addDevice,
                                            className: "px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out",
                                            disabled: loading,
                                            children: loading ? text.modalAdding : text.modalAdd
                                        }, void 0, false, {
                                            fileName: "[project]/components/Connect.jsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Connect.jsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Connect.jsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Connect.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    showConfirmRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 flex justify-center items-center z-30 bg-[rgba(0,0,0,0.7)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-6 rounded-xl shadow-xl w-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4",
                                    children: text.confirmTitle
                                }, void 0, false, {
                                    fileName: "[project]/components/Connect.jsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4",
                                    children: [
                                        text.confirmMessage,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: deviceToRemove
                                        }, void 0, false, {
                                            fileName: "[project]/components/Connect.jsx",
                                            lineNumber: 196,
                                            columnNumber: 57
                                        }, this),
                                        "?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Connect.jsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowConfirmRemove(false),
                                            className: "px-6 py-2 bg-gray-300 rounded-lg",
                                            children: text.confirmCancel
                                        }, void 0, false, {
                                            fileName: "[project]/components/Connect.jsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: removeDevice,
                                            className: "px-6 py-2 bg-red-500 text-white rounded-lg",
                                            children: text.confirmRemove
                                        }, void 0, false, {
                                            fileName: "[project]/components/Connect.jsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Connect.jsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Connect.jsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Connect.jsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    devices.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",
                        children: devices.map((device)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 bg-white rounded-lg shadow-md flex flex-col items-start transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer relative",
                                onClick: ()=>selectDevice(device.id),
                                style: {
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                                },
                                children: [
                                    editingDeviceId === device.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full mb-4",
                                        onClick: (e)=>e.stopPropagation(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: editName,
                                                onChange: (e)=>setEditName(e.target.value),
                                                className: "w-full p-2 border border-gray-300 rounded mb-2",
                                                placeholder: "Device name",
                                                autoFocus: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/Connect.jsx",
                                                lineNumber: 218,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>cancelEditing(),
                                                        className: "p-1 bg-gray-200 rounded hover:bg-gray-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                                                            className: "text-gray-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Connect.jsx",
                                                            lineNumber: 231,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Connect.jsx",
                                                        lineNumber: 227,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>saveDeviceName(device.id),
                                                        className: "p-1 bg-green-500 rounded hover:bg-green-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSave"], {
                                                            className: "text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Connect.jsx",
                                                            lineNumber: 237,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Connect.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Connect.jsx",
                                                lineNumber: 226,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Connect.jsx",
                                        lineNumber: 217,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center w-full mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: device.name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold mr-2",
                                                        children: device.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Connect.jsx",
                                                        lineNumber: 246,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            startEditing(device.id, device.name);
                                                        },
                                                        className: "text-blue-500 hover:text-blue-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPencilAlt"], {}, void 0, false, {
                                                            fileName: "[project]/components/Connect.jsx",
                                                            lineNumber: 254,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Connect.jsx",
                                                        lineNumber: 247,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    startEditing(device.id, '');
                                                },
                                                className: "px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 text-sm",
                                                children: text.addNameButton
                                            }, void 0, false, {
                                                fileName: "[project]/components/Connect.jsx",
                                                lineNumber: 258,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Connect.jsx",
                                            lineNumber: 243,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Connect.jsx",
                                        lineNumber: 242,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500 mb-4",
                                        children: [
                                            text.deviceIdLabel,
                                            " ",
                                            device.id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Connect.jsx",
                                        lineNumber: 271,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            confirmRemoveDevice(device.id);
                                        },
                                        className: "absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors duration-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTrash"], {}, void 0, false, {
                                            fileName: "[project]/components/Connect.jsx",
                                            lineNumber: 279,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Connect.jsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, device.id, true, {
                                fileName: "[project]/components/Connect.jsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Connect.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center h-64 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-gray-600 mb-4",
                                children: text.emptyTitle
                            }, void 0, false, {
                                fileName: "[project]/components/Connect.jsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: text.emptySubtitle
                            }, void 0, false, {
                                fileName: "[project]/components/Connect.jsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Connect.jsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Connect.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Connect.jsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
};
_s(Connect, "kndvZcvH6p7RwHmkIj2MroY+Wco=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Connect;
const __TURBOPACK__default__export__ = Connect;
var _c;
__turbopack_refresh__.register(_c, "Connect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/context/DeviceContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DeviceManagerConnection": (()=>DeviceManagerConnection),
    "DeviceProvider": (()=>DeviceProvider),
    "useDevice": (()=>useDevice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature();
;
const DeviceContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const DeviceProvider = ({ children })=>{
    _s();
    const [deviceData, setDeviceData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        humidity: 56.6,
        temperature: 16.8,
        status: 'Off',
        targetHumidity: 50,
        timer: null,
        timerActive: false,
        brightness: 127,
        color: '255, 255, 0',
        controlMode: 'auto',
        mode: 'Off',
        lidStatus: "Unknown",
        speed: 20,
        divRef: null,
        isConnected: false
    });
    const [ws, setWs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentDeviceId, setCurrentDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const autoReconnectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const pingIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heartbeatTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const connectionAttemptRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasReceivedServerDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isInitialLoadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const skipNextChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prevDeviceDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(deviceData);
    const timerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        status: null,
        targetHumidity: null,
        timer: null,
        brightness: null,
        colorMode: null
    });
    const DEBOUNCE_DELAY = 2000;
    const PING_INTERVAL = 20000; // 20 seconds
    const HEARTBEAT_TIMEOUT = 30000; // 30 seconds to wait for response
    const RECONNECT_DELAYS = [
        500,
        1000,
        2000,
        5000,
        10000,
        15000
    ]; // Faster initial reconnect
    const errorCache = {}; // Used to throttle repeat errors
    const REPORT_INTERVAL = 30000;
    function reportError(errorCode, errorMessage, context, severity, varName, varValue) {
        const now = Date.now();
        let key = errorCode;
        if (varName) key += `_${varName}`;
        // Throttle duplicate errors (same key & value within interval)
        const meta = errorCache[key];
        if (meta && now - meta.lastReportTime < REPORT_INTERVAL && meta.lastValue === varValue) {
            console.log("Duplicate error suppressed:", key);
            return;
        }
        // Construct error payload
        const doc = {
            type: "error_report",
            currentDeviceId,
            error_code: errorCode,
            timestamp: Math.floor(now / 1000),
            severity
        };
        if (errorMessage && errorMessage.length < 50) {
            doc.error_message = errorMessage;
        }
        if (varName) {
            doc.variable = {
                name: varName,
                value: varValue
            };
        }
        if (context && typeof context === "object") {
            doc.context = context;
        }
        const payload = JSON.stringify(doc);
        const message = `ERROR_REPORT:${currentDeviceId}:${payload}`;
        // Send with debounce to prevent rapid fire
        debouncedSendCommand("error_report", ()=>message, errorCode);
        console.log("Error reported:", payload);
        // Update cache
        errorCache[key] = {
            lastReportTime: now,
            lastValue: varValue
        };
    }
    const resetHeartbeat = ()=>{
        try {
            if (heartbeatTimeoutRef.current) {
                clearTimeout(heartbeatTimeoutRef.current);
            }
            heartbeatTimeoutRef.current = setTimeout(()=>{
                console.warn("Heartbeat timeout - connection seems dead, forcing reconnect");
                reportError("HEARTBEAT_TIMEOUT", "No heartbeat received in expected time", {
                    context: "heartbeat_monitor"
                }, "warning", "connection_status", "timeout");
                if (ws) {
                    ws.close(); // triggers reconnect logic elsewhere
                }
            }, HEARTBEAT_TIMEOUT);
        } catch (err) {
            reportError("HEARTBEAT_RESET_FAIL", err.message || "Failed to reset heartbeat", {
                function: "resetHeartbeat"
            }, "error", null, "");
        }
    };
    const startPingInterval = ()=>{
        try {
            if (pingIntervalRef.current) {
                clearInterval(pingIntervalRef.current);
            }
            pingIntervalRef.current = setInterval(()=>{
                try {
                    if (ws && ws.readyState === WebSocket.OPEN && currentDeviceId) {
                        const pingMessage = `PING:${currentDeviceId}`;
                        console.log("Sending ping:", pingMessage);
                        ws.send(pingMessage);
                        resetHeartbeat();
                    } else if (!currentDeviceId) {
                        reportError("PING_NO_DEVICE_ID", "Cannot send ping: currentDeviceId missing", {
                            function: "startPingInterval"
                        }, "error", "currentDeviceId", "undefined");
                    }
                } catch (sendErr) {
                    if (ws && ws.readyState === WebSocket.OPEN) {
                        reportError("PING_SEND_FAIL", sendErr.message || "Failed to send ping", {
                            function: "startPingInterval"
                        }, "error", "ping_send", "failed");
                    }
                }
            }, PING_INTERVAL);
            if (ws && ws.readyState === WebSocket.OPEN && currentDeviceId) {
                setTimeout(()=>{
                    try {
                        const pingMessage = `PING:${currentDeviceId}`;
                        ws.send(pingMessage);
                        resetHeartbeat();
                    } catch (err) {
                        reportError("PING_INITIAL_FAIL", err.message || "Failed to send initial ping", {
                            function: "startPingInterval"
                        }, "error", "ping_initial", "failed");
                    }
                }, 1000);
            }
        } catch (err) {
            reportError("PING_INTERVAL_FAIL", err.message || "Failed to start ping interval", {
                function: "startPingInterval"
            }, "error", null, "");
        }
    };
    const stopPingInterval = ()=>{
        try {
            if (pingIntervalRef.current) {
                clearInterval(pingIntervalRef.current);
                pingIntervalRef.current = null;
            }
            if (heartbeatTimeoutRef.current) {
                clearTimeout(heartbeatTimeoutRef.current);
                heartbeatTimeoutRef.current = null;
            }
        } catch (err) {
            reportError("STOP_PING_FAIL", err.message || "Failed to stop ping or heartbeat", {
                function: "stopPingInterval"
            }, "warning", null, "");
        }
    };
    const handleReconnect = (deviceId)=>{
        try {
            if (!autoReconnectRef.current) return;
            if (document.visibilityState !== "visible") {
                console.log("Tab not visible, skipping reconnect. Will reconnect when tab becomes active.");
                reportError("RECONNECT_SKIPPED_INACTIVE_TAB", "Reconnect postponed because tab is not visible", {
                    function: "handleReconnect"
                }, "info", "visibility_state", document.visibilityState);
                return;
            }
            const delay = RECONNECT_DELAYS[Math.min(connectionAttemptRef.current, RECONNECT_DELAYS.length - 1)];
            console.log(`Attempting reconnect in ${delay}ms (attempt ${connectionAttemptRef.current + 1})`);
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
            }
            reconnectTimeoutRef.current = setTimeout(()=>{
                try {
                    connectionAttemptRef.current++;
                    connectToDevice(deviceId);
                } catch (err) {
                    reportError("RECONNECT_FAIL", err.message || "Failed during reconnect attempt", {
                        function: "handleReconnect"
                    }, "error", "attempt_number", String(connectionAttemptRef.current));
                }
            }, delay);
        } catch (err) {
            reportError("RECONNECT_HANDLER_FAIL", err.message || "Unexpected error in handleReconnect", {
                function: "handleReconnect"
            }, "error", null, "");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeviceProvider.useEffect": ()=>{
            const handleVisibilityChange = {
                "DeviceProvider.useEffect.handleVisibilityChange": ()=>{
                    console.log("Page visibility changed:", document.visibilityState);
                    try {
                        if (document.visibilityState === "visible" && currentDeviceId) {
                            // Page became visible - reconnect or test connection
                            if (!ws || ws.readyState !== WebSocket.OPEN) {
                                console.log("Tab became active and WebSocket not connected, reconnecting immediately");
                                connectionAttemptRef.current = 0;
                                connectToDevice(currentDeviceId);
                            } else {
                                try {
                                    const pingMessage = `PING:${currentDeviceId}`;
                                    ws.send(pingMessage);
                                    resetHeartbeat();
                                } catch (sendErr) {
                                    if (ws && ws.readyState === WebSocket.OPEN) {
                                        reportError("PING_ON_VISIBILITY_FAIL", sendErr.message || "Failed to send ping on visibility change", {
                                            function: "handleVisibilityChange"
                                        }, "error", "visibility_state", document.visibilityState);
                                    }
                                }
                            }
                        } else if (document.visibilityState === "hidden") {
                            console.log("Tab became hidden, stopping pings to save resources");
                            try {
                                stopPingInterval();
                            } catch (err) {
                                reportError("STOP_PING_ON_HIDE_FAIL", err.message || "Failed to stop pings when tab hidden", {
                                    function: "handleVisibilityChange"
                                }, "warning", "visibility_state", "hidden");
                            }
                        }
                    } catch (err) {
                        reportError("VISIBILITY_HANDLER_FAIL", err.message || "Unexpected error in handleVisibilityChange", {
                            function: "handleVisibilityChange"
                        }, "error", "visibility_state", document.visibilityState);
                    }
                }
            }["DeviceProvider.useEffect.handleVisibilityChange"];
            const handleFocus = {
                "DeviceProvider.useEffect.handleFocus": ()=>{
                    try {
                        if (currentDeviceId && (!ws || ws.readyState !== WebSocket.OPEN)) {
                            console.log("Window focused and WebSocket not connected, reconnecting immediately");
                            connectionAttemptRef.current = 0;
                            connectToDevice(currentDeviceId);
                        }
                    } catch (err) {
                        reportError("FOCUS_HANDLER_FAIL", err.message || "Error in handleFocus", {
                            function: "handleFocus"
                        }, "error", null, "");
                    }
                }
            }["DeviceProvider.useEffect.handleFocus"];
            const handleBlur = {
                "DeviceProvider.useEffect.handleBlur": ()=>{
                    try {
                        console.log("Window lost focus");
                    // No action required
                    } catch (err) {
                        reportError("BLUR_HANDLER_FAIL", err.message || "Error in handleBlur", {
                            function: "handleBlur"
                        }, "warning", null, "");
                    }
                }
            }["DeviceProvider.useEffect.handleBlur"];
            document.addEventListener("visibilitychange", handleVisibilityChange);
            window.addEventListener("focus", handleFocus);
            window.addEventListener("blur", handleBlur);
            return ({
                "DeviceProvider.useEffect": ()=>{
                    try {
                        document.removeEventListener("visibilitychange", handleVisibilityChange);
                        window.removeEventListener("focus", handleFocus);
                        window.removeEventListener("blur", handleBlur);
                    } catch (cleanupErr) {
                        reportError("VISIBILITY_CLEANUP_FAIL", cleanupErr.message || "Failed to remove event listeners", {
                            function: "useEffect cleanup"
                        }, "warning", null, "");
                    }
                }
            })["DeviceProvider.useEffect"];
        }
    }["DeviceProvider.useEffect"], [
        currentDeviceId,
        ws
    ]);
    const processColorInfo = (colorString)=>{
        try {
            let mode = "";
            let colorValue = "";
            if (colorString && colorString.includes("-")) {
                if (colorString.includes("color-")) {
                    mode = "Color";
                    colorValue = colorString.substring(6, 15);
                } else if (colorString.includes("gradient-")) {
                    mode = "Gradient";
                    colorValue = colorString.substring(9, 18);
                } else if (colorString.includes("fade-")) {
                    mode = "Fade";
                    colorValue = colorString.substring(5, 14);
                } else if (colorString.includes("pulsating-")) {
                    mode = "Pulsating";
                    colorValue = colorString.substring(10, 19);
                } else if (colorString.includes("twinkle-")) {
                    mode = "Soft Twinkle";
                    colorValue = colorString.substring(8, 17);
                } else {
                    reportError("UNKNOWN_COLOR_FORMAT", "Unrecognized color format pattern", {
                        input: colorString
                    }, "warning", "colorString", colorString);
                }
            } else {
                switch(colorString){
                    case "Color Wave":
                    case "Rainbow":
                    case "Warm Sunset":
                    case "Off":
                        mode = colorString;
                        colorValue = deviceData?.color;
                        break;
                    default:
                        if (!colorString) {
                            reportError("EMPTY_COLOR_STRING", "Color string was empty or undefined", {
                                input: colorString
                            }, "warning", "colorString", "empty");
                        }
                        mode = colorString || deviceData?.mode;
                        colorValue = deviceData?.color;
                }
            }
            // Validate colorValue before parsing
            if (!colorValue || typeof colorValue !== "string") {
                reportError("INVALID_COLOR_VALUE", "Color value missing or invalid", {
                    function: "processColorInfo",
                    input: colorString
                }, "error", "colorValue", String(colorValue));
                colorValue = "#000000"; // fallback to black
            }
            // Try deformatRGB safely
            let result;
            try {
                result = deformatRGB(colorValue);
            } catch (rgbErr) {
                reportError("RGB_PARSE_FAIL", rgbErr.message || "Failed to parse RGB value", {
                    function: "processColorInfo",
                    colorValue
                }, "error", "colorValue", colorValue);
                result = {
                    r: 0,
                    g: 0,
                    b: 0
                };
            }
            return {
                mode,
                color: result
            };
        } catch (err) {
            reportError("COLOR_INFO_FAIL", err.message || "Unexpected error processing color info", {
                function: "processColorInfo"
            }, "error", "input", colorString);
            return {
                mode: "Unknown",
                color: {
                    r: 0,
                    g: 0,
                    b: 0
                }
            };
        }
    };
    const parseRgb = (rgbStr)=>{
        try {
            if (typeof rgbStr !== "string") {
                reportError("PARSE_RGB_INVALID_TYPE", "RGB input is not a string", {
                    input: rgbStr
                }, "error", "rgbStr", String(rgbStr));
                return {
                    r: 255,
                    g: 0,
                    b: 0
                };
            }
            const match = rgbStr.match(/(\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
                return {
                    r: parseInt(match[1]),
                    g: parseInt(match[2]),
                    b: parseInt(match[3])
                };
            } else {
                reportError("PARSE_RGB_NO_MATCH", "RGB string did not match expected format", {
                    input: rgbStr
                }, "warning", "rgbStr", rgbStr);
                return {
                    r: 255,
                    g: 0,
                    b: 0
                };
            }
        } catch (err) {
            reportError("PARSE_RGB_FAIL", err.message || "Failed to parse RGB string", {
                function: "parseRgb",
                input: rgbStr
            }, "error", "rgbStr", rgbStr);
            return {
                r: 255,
                g: 0,
                b: 0
            };
        }
    };
    function deformatRGB(paddedRGBString) {
        try {
            if (typeof paddedRGBString !== "string" || !/^\d{9}$/.test(paddedRGBString)) {
                reportError("DEFORMAT_RGB_INVALID_INPUT", "Input must be a 9-digit string consisting only of digits", {
                    input: paddedRGBString
                }, "error", "paddedRGBString", String(paddedRGBString));
                throw new Error("Invalid padded RGB string");
            }
            const r = parseInt(paddedRGBString.slice(0, 3), 10);
            const g = parseInt(paddedRGBString.slice(3, 6), 10);
            const b = parseInt(paddedRGBString.slice(6, 9), 10);
            return `rgb(${r}, ${g}, ${b})`;
        } catch (err) {
            reportError("DEFORMAT_RGB_FAIL", err.message || "Failed to deformat RGB", {
                function: "deformatRGB",
                input: paddedRGBString
            }, "error", "paddedRGBString", String(paddedRGBString));
            return "rgb(0, 0, 0)";
        }
    }
    const getComplementaryColor = (rgbStr)=>{
        try {
            const { r, g, b } = parseRgb(rgbStr);
            if (typeof r !== "number" || typeof g !== "number" || typeof b !== "number" || [
                r,
                g,
                b
            ].some((v)=>v < 0 || v > 255)) {
                reportError("COMPLEMENTARY_RGB_INVALID", "Invalid RGB values detected", {
                    input: rgbStr
                }, "warning", "rgbStr", rgbStr);
                return "rgb(255, 255, 255)";
            }
            return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
        } catch (err) {
            reportError("COMPLEMENTARY_FAIL", err.message || "Failed to compute complementary color", {
                function: "getComplementaryColor",
                input: rgbStr
            }, "error", "rgbStr", rgbStr);
            return "rgb(255, 255, 255)";
        }
    };
    function formatRGB(rgbString) {
        try {
            if (typeof rgbString !== "string") {
                reportError("FORMAT_RGB_INVALID_TYPE", "RGB input is not a string", {
                    input: rgbString
                }, "error", "rgbString", String(rgbString));
                return "000000000";
            }
            const match = rgbString.match(/\d+/g);
            if (!match || match.length < 3) {
                reportError("FORMAT_RGB_NO_MATCH", "RGB string missing numeric components", {
                    input: rgbString
                }, "error", "rgbString", rgbString);
                return "000000000";
            }
            const [r, g, b] = match.map(Number);
            const formatted = [
                r,
                g,
                b
            ].map((n)=>n.toString().padStart(3, "0")).join("");
            return formatted;
        } catch (err) {
            reportError("FORMAT_RGB_FAIL", err.message || "Failed to format RGB string", {
                function: "formatRGB",
                input: rgbString
            }, "error", "rgbString", rgbString);
            return "000000000";
        }
    }
    const debouncedSendCommand = (commandType, commandFunc, valueToCheck)=>{
        if (timerRefs.current[commandType]) {
            clearTimeout(timerRefs.current[commandType]);
        }
        timerRefs.current[commandType] = setTimeout(()=>{
            if (ws && ws.readyState === WebSocket.OPEN) {
                try {
                    const command = commandFunc();
                    ws.send(command);
                } catch (err) {
                    reportError("DEBOUNCED_COMMAND_FAIL", err.message || "Failed to send debounced command", {
                        function: "debouncedSendCommand",
                        commandType
                    }, "error", "commandType", commandType);
                }
            } else {
                console.log("WebSocket is not open, cannot send command");
            }
            timerRefs.current[commandType] = null;
        }, DEBOUNCE_DELAY);
    };
    const sanitizeBrightness = (value)=>{
        try {
            let num = parseInt(String(value).replace(/\D/g, ""), 10);
            if (isNaN(num)) {
                reportError("BRIGHTNESS_INVALID", "Brightness value was not numeric", {
                    input: value
                }, "warning", "brightness", String(value));
                num = 1;
            }
            return Math.min(Math.max(num, 1), 255);
        } catch (err) {
            reportError("BRIGHTNESS_SANITIZE_FAIL", err.message || "Failed to sanitize brightness", {
                input: value
            }, "error", "brightness", String(value));
            return 1;
        }
    };
    const sanitizeTarget = (value)=>{
        try {
            let num = parseFloat(String(value).replace(/[^\d.]/g, ""));
            if (isNaN(num)) {
                reportError("TARGET_INVALID", "Target value was not numeric", {
                    input: value
                }, "warning", "target", String(value));
                num = 25;
            }
            return Math.min(Math.max(num, 25), 80);
        } catch (err) {
            reportError("TARGET_SANITIZE_FAIL", err.message || "Failed to sanitize target", {
                input: value
            }, "error", "target", String(value));
            return 25;
        }
    };
    const logDeviceDataChanges = (newData, oldData)=>{
        try {
            console.log("Device data change detected");
            if (isInitialLoadRef.current) return;
            if (!hasReceivedServerDataRef.current) return;
            if (skipNextChangeRef.current) {
                skipNextChangeRef.current = false;
                return;
            }
            console.log("Processing device data changes");
            console.log("Old data:", oldData);
            console.log("New data:", newData);
            Object.keys(newData).forEach((key)=>{
                try {
                    if (JSON.stringify(newData[key]) !== JSON.stringify(oldData[key])) {
                        switch(key){
                            case "status":
                                {
                                    try {
                                        const newStatus = newData.status?.toLowerCase?.();
                                        if (!newStatus) {
                                            reportError("STATUS_INVALID", "Status value is missing or invalid", {
                                                newData,
                                                key
                                            }, "warning", "status", String(newData.status));
                                            return;
                                        }
                                        debouncedSendCommand("status", ()=>"UPDATE_STATUS:" + currentDeviceId + ":" + newStatus, newStatus);
                                    } catch (err) {
                                        reportError("STATUS_UPDATE_FAIL", err.message || "Failed to update device status", {
                                            function: "logDeviceDataChanges",
                                            key
                                        }, "error", "status", String(newData.status));
                                    }
                                    break;
                                }
                            case "targetHumidity":
                                {
                                    try {
                                        const targetHumidity = sanitizeTarget(newData.targetHumidity);
                                        debouncedSendCommand("targetHumidity", ()=>"UPDATE_TARGET:" + currentDeviceId + ":" + targetHumidity, targetHumidity);
                                    } catch (err) {
                                        reportError("TARGET_HUMIDITY_FAIL", err.message || "Failed to update target humidity", {
                                            key,
                                            newData
                                        }, "error", "targetHumidity", String(newData.targetHumidity));
                                    }
                                    break;
                                }
                            case "controlMode":
                                {
                                    try {
                                        const controlMode = newData.controlMode;
                                        if (!controlMode) {
                                            reportError("CONTROL_MODE_INVALID", "Control mode value missing or invalid", {
                                                newData
                                            }, "warning", "controlMode", String(controlMode));
                                            return;
                                        }
                                        debouncedSendCommand("controlMode", ()=>"UPDATE_CONTROL_MODE:" + currentDeviceId + ":" + controlMode, controlMode);
                                    } catch (err) {
                                        reportError("CONTROL_MODE_FAIL", err.message || "Failed to update control mode", {
                                            key,
                                            newData
                                        }, "error", "controlMode", String(newData.controlMode));
                                    }
                                    break;
                                }
                            case "timerActive":
                                {
                                    try {
                                        if (newData.timerActive === true) {
                                            const totalTime = newData.timer * 1000;
                                            if (isNaN(totalTime) || totalTime <= 0) {
                                                reportError("TIMER_INVALID", "Invalid timer value", {
                                                    newData
                                                }, "warning", "timer", String(newData.timer));
                                                return;
                                            }
                                            debouncedSendCommand("timer", ()=>"UPDATE_TIMER:" + currentDeviceId + ":" + totalTime, totalTime);
                                        } else {
                                            debouncedSendCommand("timer", ()=>"UPDATE_TIMER:" + currentDeviceId + ":cancel", "cancel");
                                        }
                                    } catch (err) {
                                        reportError("TIMER_UPDATE_FAIL", err.message || "Failed to update timer state", {
                                            key,
                                            newData
                                        }, "error", "timerActive", String(newData.timerActive));
                                    }
                                    break;
                                }
                            case "brightness":
                                {
                                    try {
                                        const brightness = sanitizeBrightness(newData.brightness);
                                        debouncedSendCommand("brightness", ()=>"UPDATE_BRIGHTNESS:" + currentDeviceId + ":" + brightness, brightness);
                                    } catch (err) {
                                        reportError("BRIGHTNESS_UPDATE_FAIL", err.message || "Failed to update brightness", {
                                            key,
                                            newData
                                        }, "error", "brightness", String(newData.brightness));
                                    }
                                    break;
                                }
                            case "mode":
                            case "color":
                                {
                                    try {
                                        let modeColorKey;
                                        let command;
                                        if ([
                                            "Color",
                                            "Fade",
                                            "Soft Twinkle",
                                            "Pulsating"
                                        ].includes(newData.mode)) {
                                            modeColorKey = `${newData.mode}-${newData.color}`;
                                            const formatted = formatRGB(newData.color);
                                            switch(newData.mode){
                                                case "Color":
                                                    command = "UPDATE_COLOR:" + currentDeviceId + ":color-" + formatted;
                                                    break;
                                                case "Fade":
                                                    command = "UPDATE_COLOR:" + currentDeviceId + ":fade-" + formatted;
                                                    break;
                                                case "Soft Twinkle":
                                                    command = "UPDATE_COLOR:" + currentDeviceId + ":twinkle-" + formatted;
                                                    break;
                                                case "Pulsating":
                                                    command = "UPDATE_COLOR:" + currentDeviceId + ":pulsating-" + formatted;
                                                    break;
                                                default:
                                                    reportError("UNKNOWN_COLOR_MODE", "Unsupported color mode", {
                                                        newData
                                                    }, "warning", "mode", newData.mode);
                                                    return;
                                            }
                                        } else if (newData.mode === "Glowing Gradient") {
                                            const formatted = formatRGB(newData.color);
                                            const comp = formatRGB(getComplementaryColor(newData.color));
                                            modeColorKey = `Gradient-${newData.color}`;
                                            command = "UPDATE_COLOR:" + currentDeviceId + ":gradient-" + formatted + "-" + comp;
                                        } else {
                                            modeColorKey = newData.mode;
                                            command = "UPDATE_COLOR:" + currentDeviceId + ":" + newData.mode;
                                        }
                                        debouncedSendCommand("colorMode", ()=>command, modeColorKey);
                                    } catch (err) {
                                        reportError("COLOR_MODE_FAIL", err.message || "Failed to update color/mode", {
                                            newData
                                        }, "error", "mode", newData.mode);
                                    }
                                    break;
                                }
                            default:
                                break;
                        }
                    }
                } catch (keyErr) {
                    reportError("DATA_CHANGE_KEY_FAIL", keyErr.message || "Error processing specific device key", {
                        key,
                        newData
                    }, "error", "key", key);
                }
            });
        } catch (err) {
            reportError("DEVICE_DATA_CHANGE_FAIL", err.message || "Unexpected failure while processing device data changes", {
                newData,
                oldData
            }, "error", "deviceData", "");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeviceProvider.useEffect": ()=>{
            try {
                logDeviceDataChanges(deviceData, prevDeviceDataRef.current);
                console.log("Current device data:", deviceData);
                prevDeviceDataRef.current = {
                    ...deviceData
                };
            } catch (err) {
                reportError("DEVICE_DATA_EFFECT_FAIL", err.message || "Error running device data effect", {
                    deviceData
                }, "error", "deviceData", "");
            }
        }
    }["DeviceProvider.useEffect"], [
        deviceData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeviceProvider.useEffect": ()=>{
            return ({
                "DeviceProvider.useEffect": ()=>{
                    try {
                        Object.values(timerRefs.current).forEach({
                            "DeviceProvider.useEffect": (timer)=>{
                                if (timer) clearTimeout(timer);
                            }
                        }["DeviceProvider.useEffect"]);
                        stopPingInterval();
                        if (reconnectTimeoutRef.current) {
                            clearTimeout(reconnectTimeoutRef.current);
                        }
                    } catch (err) {
                        reportError("DEVICE_EFFECT_CLEANUP_FAIL", err.message || "Failed during cleanup of device effect", {}, "warning", null, "");
                    }
                }
            })["DeviceProvider.useEffect"];
        }
    }["DeviceProvider.useEffect"], []);
    const connectToDevice = (deviceId)=>{
        try {
            autoReconnectRef.current = true;
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
                reconnectTimeoutRef.current = null;
            }
            if (ws) {
                ws.close();
            }
            stopPingInterval();
            isInitialLoadRef.current = true;
            hasReceivedServerDataRef.current = false;
            skipNextChangeRef.current = false;
            Object.keys(timerRefs.current).forEach((key)=>{
                if (timerRefs.current[key]) {
                    clearTimeout(timerRefs.current[key]);
                    timerRefs.current[key] = null;
                }
            });
            if (!deviceId) {
                reportError("DEVICE_ID_MISSING", "Attempted to connect without valid deviceId", {}, "error", "deviceId", String(deviceId));
                return;
            }
            setCurrentDeviceId(deviceId);
            console.log(`Connecting to device ${deviceId} (attempt ${connectionAttemptRef.current + 1})`);
            const socketUrl = `wss://simple-api.mistify.lv/ws/app?deviceId=${deviceId}`;
            let socket;
            try {
                socket = new WebSocket(socketUrl);
            } catch (err) {
                reportError("WS_INIT_FAIL", err.message || "Failed to initialize WebSocket", {
                    socketUrl
                }, "error", "deviceId", String(deviceId));
                return;
            }
            socket.onopen = ()=>{
                try {
                    console.log("WebSocket connected successfully");
                    connectionAttemptRef.current = 0;
                    setDeviceData((prev)=>({
                            ...prev,
                            isConnected: true
                        }));
                    if (document.visibilityState === "visible") startPingInterval();
                } catch (err) {
                    reportError("WS_ONOPEN_FAIL", err.message || "Error during onopen handler", {
                        deviceId
                    }, "error", "deviceId", String(deviceId));
                }
            };
            socket.onmessage = (event)=>{
                try {
                    const message = event.data;
                    if (!message || typeof message !== "string") {
                        reportError("WS_INVALID_MESSAGE", "Received empty or invalid message", {
                            event
                        }, "warning", "message", String(message));
                        return;
                    }
                    if (message.startsWith("PONG:")) {
                        if (heartbeatTimeoutRef.current) {
                            clearTimeout(heartbeatTimeoutRef.current);
                            heartbeatTimeoutRef.current = null;
                        }
                        return;
                    }
                    if (heartbeatTimeoutRef.current) {
                        clearTimeout(heartbeatTimeoutRef.current);
                        heartbeatTimeoutRef.current = null;
                    }
                    if (!hasReceivedServerDataRef.current) {
                        hasReceivedServerDataRef.current = true;
                        isInitialLoadRef.current = false;
                        skipNextChangeRef.current = true;
                        console.log("First server data received, enabling change tracking after next update");
                    }
                    if (message.startsWith("UPDATE_TEMPERATURE:")) {
                        const parts = message.split(":");
                        if (parts.length === 3 && parts[1] === deviceId) {
                            const temperature = parseFloat(parts[2]);
                            if (isNaN(temperature)) {
                                reportError("TEMP_PARSE_FAIL", "Invalid temperature format in message", {
                                    message
                                }, "warning", "temperature", parts[2]);
                                return;
                            }
                            setDeviceData((prev)=>({
                                    ...prev,
                                    temperature
                                }));
                        }
                    } else if (message.startsWith("UPDATE_HUMIDITY:")) {
                        const parts = message.split(":");
                        if (parts.length === 3 && parts[1] === deviceId) {
                            const humidity = parseFloat(parts[2]);
                            if (isNaN(humidity)) {
                                reportError("HUMIDITY_PARSE_FAIL", "Invalid humidity value in message", {
                                    message
                                }, "warning", "humidity", parts[2]);
                                return;
                            }
                            setDeviceData((prev)=>({
                                    ...prev,
                                    humidity
                                }));
                        }
                    } else if (message.startsWith("LID_STATUS:")) {
                        const parts = message.split(":");
                        if (parts.length === 3 && parts[1] === deviceId) {
                            const lidStatus = parts[2];
                            setDeviceData((prev)=>({
                                    ...prev,
                                    lidStatus
                                }));
                        }
                    } else if (message.startsWith("TIMER:")) {
                        const parts = message.split(":");
                        if (parts.length === 3 && parts[1] === deviceId) {
                            const status = parts[2] === "on" ? "On" : "Off";
                            setDeviceData((prev)=>({
                                    ...prev,
                                    status
                                }));
                        }
                    } else if (message.startsWith("{")) {
                        let deviceInfo;
                        try {
                            deviceInfo = JSON.parse(message);
                        } catch (err) {
                            reportError("JSON_PARSE_FAIL", err.message || "Failed to parse JSON from device", {
                                message
                            }, "error", "message", message.slice(0, 50));
                            return;
                        }
                        const colorInfo = processColorInfo(deviceInfo.color || "");
                        const newStatus = deviceInfo.status === "on" || deviceInfo.status === "On" ? "On" : "Off";
                        let serverTime = null;
                        let expiryTime = null;
                        if (typeof deviceInfo.timer === "string" && deviceInfo.timer.includes(",")) {
                            const parts = deviceInfo.timer.split(",").map((t)=>parseInt(t.trim(), 10));
                            if (parts.length === 2 && parts.every((n)=>!isNaN(n))) {
                                [serverTime, expiryTime] = parts;
                            } else {
                                reportError("TIMER_PARSE_FAIL", "Invalid timer format from device", {
                                    timer: deviceInfo.timer
                                }, "warning", "timer", deviceInfo.timer);
                            }
                        }
                        const remainingMs = expiryTime !== null && serverTime !== null ? Math.round((expiryTime - serverTime) / 1000) : null;
                        setDeviceData((prev)=>({
                                ...prev,
                                id: deviceInfo.id || prev.id,
                                name: deviceInfo.name || prev.name,
                                status: newStatus,
                                brightness: typeof deviceInfo.brightness === "number" ? deviceInfo.brightness : prev.brightness,
                                temperature: typeof deviceInfo.temperature === "number" ? deviceInfo.temperature : prev.temperature,
                                humidity: typeof deviceInfo.humidity === "number" ? deviceInfo.humidity : prev.humidity,
                                targetHumidity: typeof deviceInfo.target === "number" ? deviceInfo.target : prev.targetHumidity,
                                controlMode: deviceInfo.control_mode || prev.mode,
                                lidStatus: deviceInfo.lidStatus || prev.lidStatus,
                                mode: colorInfo.mode || prev.mode,
                                color: colorInfo.color || prev.color,
                                vicinity: deviceInfo.vicinity || prev.vicinity,
                                timer: remainingMs || prev.timer
                            }));
                    } else {
                        reportError("UNKNOWN_MESSAGE_TYPE", "Received unknown message format", {
                            message
                        }, "info", "message", message.slice(0, 50));
                    }
                } catch (err) {
                    reportError("MESSAGE_PROCESS_FAIL", err.message || "Unhandled error while processing message", {
                        data: event.data
                    }, "error", "message", String(event.data).slice(0, 50));
                }
            };
            socket.onerror = (error)=>{
                console.error("WebSocket Error:", error);
                stopPingInterval();
                setDeviceData((prev)=>({
                        ...prev,
                        isConnected: false
                    }));
                if (autoReconnectRef.current) handleReconnect(deviceId);
            };
            socket.onclose = (event)=>{
                console.log(`WebSocket Close: Code ${event.code}, Reason: ${event.reason || "Unknown"}`);
                stopPingInterval();
                setDeviceData((prev)=>({
                        ...prev,
                        isConnected: false
                    }));
                if (autoReconnectRef.current && [
                    1006,
                    1000,
                    1001,
                    1005
                ].includes(event.code)) {
                    handleReconnect(deviceId);
                }
            };
            setWs(socket);
        } catch (err) {
            reportError("DEVICE_CONNECT_FAIL", err.message || "Unhandled failure in connectToDevice", {
                deviceId
            }, "error", "deviceId", String(deviceId));
        }
    };
    const sendCommand = (command, data = {})=>{
        try {
            if (ws && deviceData.isConnected && currentDeviceId) {
                const message = JSON.stringify({
                    command,
                    deviceId: currentDeviceId,
                    ...data
                });
                ws.send(message);
            } else {
                console.error("Cannot send command - WebSocket not connected");
                reportError("COMMAND_SEND_BLOCKED", "Attempted to send command while not connected", {
                    command,
                    data
                }, "warning", "command", command);
            }
        } catch (err) {
            reportError("COMMAND_SEND_FAIL", err.message || "Failed to send command", {
                command,
                data
            }, "error", "command", command);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeviceProvider.useEffect": ()=>{
            try {
                let interval = null;
                if (isActive && timeLeft > 0) {
                    interval = setInterval({
                        "DeviceProvider.useEffect": ()=>{
                            setTimeLeft({
                                "DeviceProvider.useEffect": (timeLeft)=>{
                                    try {
                                        const newTime = timeLeft - 1;
                                        if (newTime <= 0) {
                                            showGlobalToast("Timer finished!");
                                            setIsActive(false);
                                            return 0;
                                        }
                                        return newTime;
                                    } catch (err) {
                                        reportError("TIMER_INTERVAL_FAIL", err.message || "Error updating countdown timer", {}, "error", "timeLeft", String(timeLeft));
                                        return timeLeft;
                                    }
                                }
                            }["DeviceProvider.useEffect"]);
                        }
                    }["DeviceProvider.useEffect"], 1000);
                } else if (!isActive) {
                    clearInterval(interval);
                }
                return ({
                    "DeviceProvider.useEffect": ()=>clearInterval(interval)
                })["DeviceProvider.useEffect"];
            } catch (err) {
                reportError("TIMER_EFFECT_FAIL", err.message || "Timer useEffect encountered an error", {}, "error", "timer", "");
            }
        }
    }["DeviceProvider.useEffect"], [
        isActive,
        timeLeft,
        setDeviceData
    ]);
    const disconnect = ()=>{
        try {
            console.log("Manually disconnecting WebSocket");
            autoReconnectRef.current = false;
            connectionAttemptRef.current = 0;
            stopPingInterval();
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
                reconnectTimeoutRef.current = null;
            }
            Object.keys(timerRefs.current).forEach((key)=>{
                if (timerRefs.current[key]) {
                    clearTimeout(timerRefs.current[key]);
                    timerRefs.current[key] = null;
                }
            });
            if (ws) {
                ws.close();
                setWs(null);
                setDeviceData((prev)=>({
                        ...prev,
                        isConnected: false
                    }));
                setCurrentDeviceId(null);
            } else {
                reportError("DISCONNECT_NO_SOCKET", "Attempted to disconnect but WebSocket is not initialized", {}, "warning", "ws", "null");
            }
        } catch (err) {
            reportError("DISCONNECT_FAIL", err.message || "Unexpected failure during manual disconnect", {}, "error", "ws", "disconnect");
        }
    };
    const forceReconnect = ()=>{
        try {
            if (currentDeviceId) {
                console.log("Force reconnecting...");
                connectionAttemptRef.current = 0;
                connectToDevice(currentDeviceId);
            } else {
                reportError("FORCE_RECONNECT_NO_DEVICE", "Cannot force reconnect without currentDeviceId", {}, "warning", "deviceId", "");
            }
        } catch (err) {
            reportError("FORCE_RECONNECT_FAIL", err.message || "Error during force reconnect attempt", {}, "error", "deviceId", String(currentDeviceId));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeviceContext.Provider, {
        value: {
            deviceData,
            setDeviceData,
            connectToDevice,
            sendCommand,
            disconnect,
            forceReconnect,
            currentDeviceId,
            timeLeft,
            setTimeLeft,
            isActive,
            setIsActive
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/context/DeviceContext.js",
        lineNumber: 1495,
        columnNumber: 5
    }, this);
};
_s(DeviceProvider, "o4WAqj3n1FNQAaPN6tblkTw5TYc=");
_c = DeviceProvider;
const useDevice = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DeviceContext);
};
_s1(useDevice, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const DeviceManagerConnection = ({ deviceId })=>{
    _s2();
    const { connectToDevice, currentDeviceId } = useDevice();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeviceManagerConnection.useEffect": ()=>{
            if (deviceId && deviceId !== currentDeviceId) {
                connectToDevice(deviceId);
            }
        }
    }["DeviceManagerConnection.useEffect"], [
        deviceId,
        currentDeviceId,
        connectToDevice
    ]);
    return null;
};
_s2(DeviceManagerConnection, "Xp5wM4X22El5YmWxhVDlsWxV0c8=", false, function() {
    return [
        useDevice
    ];
});
_c1 = DeviceManagerConnection;
var _c, _c1;
__turbopack_refresh__.register(_c, "DeviceProvider");
__turbopack_refresh__.register(_c1, "DeviceManagerConnection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/devicePanelsText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Device Panels Text Translations
__turbopack_esm__({
    "getDevicePanelsText": (()=>getDevicePanelsText)
});
const devicePanelsText = {
    en: {
        // ColorSelector
        colorSelector: {
            title: "Light Color"
        },
        // BrightnessSelector
        brightnessSelector: {
            title: "Brightness",
            currentMode: "Current Mode:",
            modeOff: "Off"
        },
        // ControlModeSelector
        controlModeSelector: {
            title: "Control Mode",
            autoMode: "Auto Mode",
            manualMode: "Manual Mode",
            manual: "Manual",
            auto: "Auto"
        },
        // HumidityDisplay
        humidityDisplay: {
            title: "Current Humidity",
            target: "Target:",
            increasing: "Increasing",
            decreasing: "Decreasing",
            optimal: "Optimal"
        },
        // TemperatureDisplay
        temperatureDisplay: {
            title: "Temperature",
            celsius: "°C",
            fahrenheit: "°F"
        },
        // PowerControl
        powerControl: {
            title: "Power Control",
            on: "On",
            off: "Off",
            running: "Running",
            standby: "Standby"
        },
        // TimerControl
        timerControl: {
            title: "Timer",
            timerRunning: "Timer Running",
            setTimer: "Set Timer",
            hours: "Hours",
            minutes: "Minutes",
            timeRemaining: "Time Remaining",
            cancelTimer: "Cancel Timer",
            setTimerButton: "Set Timer",
            timerSetMessage: "Timer set for",
            timerCancelledMessage: "Timer cancelled"
        },
        // TargetHumidityControl
        targetHumidityControl: {
            title: "Target Humidity",
            off: "OFF",
            targetDisabled: "TARGET DISABLED",
            low: "Low",
            med: "Med",
            high: "High",
            targetOff: "Target Off",
            targetOn: "Target On",
            recommendedNote: "Recommended: 50-60% for optimal health."
        },
        // ModeSelector
        modeSelector: {
            title: "Lighting Mode",
            color: "Color",
            fade: "Fade",
            colorWave: "Color Wave",
            rainbow: "Rainbow",
            glowingGradient: "Glowing Gradient",
            softTwinkle: "Soft Twinkle",
            warmSunset: "Warm Sunset",
            pulsating: "Pulsating",
            off: "Off",
            solidColor: "Solid Color",
            turnOff: "Turn Off"
        },
        // ModeEffectPreview
        modeEffectPreview: {
            title: "Effect Preview",
            currentMode: "Current Mode:"
        }
    },
    lv: {
        // ColorSelector
        colorSelector: {
            title: "Gaismas Krāsa"
        },
        // BrightnessSelector
        brightnessSelector: {
            title: "Spilgtums",
            currentMode: "Pašreizējais Režīms:",
            modeOff: "Izslēgts"
        },
        // ControlModeSelector
        controlModeSelector: {
            title: "Vadības Režīms",
            autoMode: "Automātiskais Režīms",
            manualMode: "Manuālais Režīms",
            manual: "Manuāls",
            auto: "Automātisks"
        },
        // HumidityDisplay
        humidityDisplay: {
            title: "Pašreizējais Mitrums",
            target: "Mērķis:",
            increasing: "Palielinās",
            decreasing: "Samazinās",
            optimal: "Optimāls"
        },
        // TemperatureDisplay
        temperatureDisplay: {
            title: "Temperatūra",
            celsius: "°C",
            fahrenheit: "°F"
        },
        // PowerControl
        powerControl: {
            title: "Barošanas Vadība",
            on: "Ieslēgts",
            off: "Izslēgts",
            running: "Darbojas",
            standby: "Gaidīšanas Režīms"
        },
        // TimerControl
        timerControl: {
            title: "Taimeris",
            timerRunning: "Taimeris Darbojas",
            setTimer: "Iestatīt Taimeri",
            hours: "Stundas",
            minutes: "Minūtes",
            timeRemaining: "Atlikušais Laiks",
            cancelTimer: "Atcelt Taimeri",
            setTimerButton: "Iestatīt Taimeri",
            timerSetMessage: "Taimeris iestatīts uz",
            timerCancelledMessage: "Taimeris atcelts"
        },
        // TargetHumidityControl
        targetHumidityControl: {
            title: "Mērķa Mitrums",
            off: "IZSLĒGTS",
            targetDisabled: "MĒRĶIS ATSPĒJOTS",
            low: "Zems",
            med: "Vidējs",
            high: "Augsts",
            targetOff: "Mērķis Izslēgts",
            targetOn: "Mērķis Ieslēgts",
            recommendedNote: "Ieteicams: 50-60% optimālai veselībai."
        },
        // ModeSelector
        modeSelector: {
            title: "Apgaismojuma Režīms",
            color: "Krāsa",
            fade: "Blāvums",
            colorWave: "Krāsu Vilnis",
            rainbow: "Varavīksne",
            glowingGradient: "Spīdošs Gradients",
            softTwinkle: "Mīksta Mirdzēšana",
            warmSunset: "Silts Saulriets",
            pulsating: "Pulsējošs",
            off: "Izslēgts",
            solidColor: "Viendabīga Krāsa",
            turnOff: "Izslēgt"
        },
        // ModeEffectPreview
        modeEffectPreview: {
            title: "Efekta Priekšskatījums",
            currentMode: "Pašreizējais Režīms:"
        }
    }
};
const getDevicePanelsText = (locale)=>{
    return devicePanelsText[locale] || devicePanelsText.en;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/panels/BrightnessSelector.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/devicePanelsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const BrightnessSelector = ()=>{
    _s();
    const { deviceData, setDeviceData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrightnessSelector.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["BrightnessSelector.useEffect"], [
        locale
    ]);
    const hexToRgba = (hex, alpha = 1)=>{
        let c = hex.replace('#', '');
        if (c.length === 3) {
            c = c.split('').map((x)=>x + x).join('');
        }
        const bigint = parseInt(c, 16);
        const r = bigint >> 16 & 255;
        const g = bigint >> 8 & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    const color = deviceData.color && deviceData.color !== 'none' ? deviceData.color : '#FFD700';
    const setBrightness = (value)=>{
        const brightness = Math.min(Math.max(parseInt(value), 1), 255);
        setDeviceData((prev)=>({
                ...prev,
                brightness
            }));
    };
    const isOff = deviceData.mode?.trim().toLowerCase() === "off";
    if (isOff) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-yellow-400/10 to-indigo-600/20 rounded-xl flex-grow text-white inline-flex items-center justify-center p-4 font-semibold text-lg",
            children: [
                text.brightnessSelector.currentMode,
                " ",
                text.brightnessSelector.modeOff
            ]
        }, void 0, true, {
            fileName: "[project]/components/panels/BrightnessSelector.jsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    // If not off, show brightness selector
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex'
        },
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "348ad8d984baf73f",
                [
                    color,
                    color
                ]
            ]
        ]) + " " + "bg-gradient-to-br from-yellow-400/10 to-indigo-600/20 rounded-xl p-3 relative flex flex-col flex-grow overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "348ad8d984baf73f",
                        [
                            color,
                            color
                        ]
                    ]
                ]) + " " + "relative z-10 flex flex-col flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "348ad8d984baf73f",
                                [
                                    color,
                                    color
                                ]
                            ]
                        ]) + " " + "flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "348ad8d984baf73f",
                                        [
                                            color,
                                            color
                                        ]
                                    ]
                                ]) + " " + "text-gray-400 text-sm",
                                children: text.brightnessSelector.title
                            }, void 0, false, {
                                fileName: "[project]/components/panels/BrightnessSelector.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "348ad8d984baf73f",
                                        [
                                            color,
                                            color
                                        ]
                                    ]
                                ]) + " " + "text-sm font-medium",
                                children: [
                                    Math.round(deviceData.brightness / 255 * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/panels/BrightnessSelector.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/BrightnessSelector.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "348ad8d984baf73f",
                                [
                                    color,
                                    color
                                ]
                            ]
                        ]) + " " + "relative w-full h-[84px] mb-3 rounded-md overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: `linear-gradient(to right, ${hexToRgba(color, 0)}, ${color})`
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "348ad8d984baf73f",
                                        [
                                            color,
                                            color
                                        ]
                                    ]
                                ]) + " " + "absolute inset-0 opacity-70 z-0 rounded-md"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/BrightnessSelector.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "1",
                                max: "255",
                                value: deviceData.brightness,
                                onChange: (e)=>setBrightness(e.target.value),
                                style: {
                                    accentColor: color
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "348ad8d984baf73f",
                                        [
                                            color,
                                            color
                                        ]
                                    ]
                                ]) + " " + "relative w-full h-[84px] z-10 appearance-none bg-transparent cursor-pointer custom-range-thumb"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/BrightnessSelector.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/BrightnessSelector.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/BrightnessSelector.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "348ad8d984baf73f",
                dynamic: [
                    color,
                    color
                ],
                children: `input[type=range].custom-range-thumb.__jsx-style-dynamic-selector::-webkit-slider-thumb{appearance:none;width:6px;height:84px;box-shadow:0 0 4px ${color};background:#fff;border-radius:2px;margin-top:0}input[type=range].custom-range-thumb.__jsx-style-dynamic-selector::-moz-range-thumb{width:6px;height:84px;box-shadow:0 0 4px ${color};background:#fff;border:none;border-radius:2px}input[type=range].custom-range-thumb.__jsx-style-dynamic-selector::-webkit-slider-runnable-track{background:0 0;height:84px}input[type=range].custom-range-thumb.__jsx-style-dynamic-selector::-moz-range-track{background:0 0;height:84px}`
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/panels/BrightnessSelector.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
_s(BrightnessSelector, "tkF00G7iyl2h+YcrleFQvkUNIpw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = BrightnessSelector;
const __TURBOPACK__default__export__ = BrightnessSelector;
var _c;
__turbopack_refresh__.register(_c, "BrightnessSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/panels/ColorSelector.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ColorSelector": (()=>ColorSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$color$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-color/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/devicePanelsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$color$2f$es$2f$components$2f$sketch$2f$Sketch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SketchPicker$3e$__ = __turbopack_import__("[project]/node_modules/react-color/es/components/sketch/Sketch.js [app-client] (ecmascript) <export default as SketchPicker>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const ColorSelector = ()=>{
    _s();
    const { deviceData, setDeviceData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [popupPosition, setPopupPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 80,
        left: 80
    });
    const popupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastCloseTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColorSelector.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["ColorSelector.useEffect"], [
        locale
    ]);
    const handleClickOutside = (event)=>{
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsOpen(false);
            lastCloseTimeRef.current = Date.now();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColorSelector.useEffect": ()=>{
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "ColorSelector.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["ColorSelector.useEffect"];
        }
    }["ColorSelector.useEffect"], []);
    const rgbToHex = (rgb)=>{
        const rgbMatch = rgb.match(/^(\d+),\s*(\d+),\s*(\d+)$/);
        if (!rgbMatch) return rgb;
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);
        return `${r}, ${g}, ${b}`;
    };
    const rgbToString = (rgb)=>{
        if (typeof rgb === "object" && rgb.r !== undefined && rgb.g !== undefined && rgb.b !== undefined) {
            return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        }
        return "rgb(0, 0, 0)";
    };
    const setColor = (color)=>{
        setDeviceData((prev)=>({
                ...prev,
                color
            }));
    };
    const displayColorInHex = rgbToHex(deviceData.color);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e5ad69b809542bdd" + " " + "bg-gray-800 rounded-xl p-4 relative flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e5ad69b809542bdd" + " " + "flex justify-between items-center mb-6 z-10 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e5ad69b809542bdd" + " " + "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        className: "jsx-e5ad69b809542bdd" + " " + "h-6 w-6 text-purple-400 mr-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                                            className: "jsx-e5ad69b809542bdd"
                                        }, void 0, false, {
                                            fileName: "[project]/components/panels/ColorSelector.jsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/ColorSelector.jsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-e5ad69b809542bdd" + " " + "text-gray-200 text-lg font-medium",
                                        children: text.colorSelector.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/ColorSelector.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/panels/ColorSelector.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: deviceData.color
                                },
                                className: "jsx-e5ad69b809542bdd" + " " + "w-8 h-8 rounded-full border-2 border-white shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/ColorSelector.jsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/ColorSelector.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e5ad69b809542bdd" + " " + "z-10 relative space-y-6 mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e5ad69b809542bdd" + " " + "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: "0",
                                    max: "100",
                                    onChange: (e)=>{
                                        const val = e.target.value;
                                        let newColor;
                                        if (val < 20) {
                                            newColor = `rgb(255, ${Math.floor(val * 12.75)}, 0)`; // red to yellow
                                        } else if (val < 40) {
                                            newColor = `rgb(${Math.floor(255 - (val - 20) * 12.75)}, 255, 0)`; // yellow to green
                                        } else if (val < 60) {
                                            newColor = `rgb(0, 255, ${Math.floor((val - 40) * 12.75)})`; // green to cyan
                                        } else if (val < 80) {
                                            newColor = `rgb(0, ${Math.floor(255 - (val - 60) * 12.75)}, 255)`; // cyan to blue
                                        } else {
                                            newColor = `rgb(${Math.floor((val - 80) * 12.75)}, 0, 255)`; // blue to magenta
                                        }
                                        setColor(newColor);
                                    },
                                    style: {
                                        background: 'linear-gradient(to right, red, yellow, green, cyan, blue, magenta)'
                                    },
                                    className: "jsx-e5ad69b809542bdd" + " " + "color-slider"
                                }, void 0, false, {
                                    fileName: "[project]/components/panels/ColorSelector.jsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    ref: buttonRef,
                                    style: {
                                        backgroundColor: displayColorInHex
                                    },
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        e.stopPropagation();
                                        const timeSinceClose = Date.now() - lastCloseTimeRef.current;
                                        if (timeSinceClose < 100) {
                                            return; // Grace period - don't open if just closed
                                        }
                                        if (!isOpen && buttonRef.current) {
                                            const rect = buttonRef.current.getBoundingClientRect();
                                            setPopupPosition({
                                                top: rect.bottom + 8,
                                                left: rect.left - 200 // Offset to the left of the button
                                            });
                                        }
                                        setIsOpen(!isOpen);
                                    },
                                    className: "jsx-e5ad69b809542bdd" + " " + "w-8 h-8 rounded-full border-2 border-white shadow-lg"
                                }, void 0, false, {
                                    fileName: "[project]/components/panels/ColorSelector.jsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/panels/ColorSelector.jsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/panels/ColorSelector.jsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e5ad69b809542bdd" + " " + "absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/15"
                    }, void 0, false, {
                        fileName: "[project]/components/panels/ColorSelector.jsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "e5ad69b809542bdd",
                        children: "input[type=range].color-slider.jsx-e5ad69b809542bdd{appearance:none;cursor:pointer;background:0 0;border-radius:6px;width:100%;height:24px}input[type=range].color-slider.jsx-e5ad69b809542bdd::-webkit-slider-thumb{appearance:none;cursor:pointer;background:#fff;border-radius:2px;width:6px;height:24px;margin-top:0;box-shadow:0 0 3px #ffffffb3}input[type=range].color-slider.jsx-e5ad69b809542bdd::-webkit-slider-runnable-track{background:0 0;border-radius:6px;height:24px}input[type=range].color-slider.jsx-e5ad69b809542bdd::-moz-range-thumb{cursor:pointer;background:#fff;border:none;border-radius:2px;width:6px;height:24px;box-shadow:0 0 3px #ffffffb3}input[type=range].color-slider.jsx-e5ad69b809542bdd::-moz-range-track{background:0 0;border-radius:6px;height:24px}"
                    }, void 0, false, void 0, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/ColorSelector.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: popupRef,
                className: "fixed bg-gray-900 p-4 border border-gray-500 rounded-lg shadow-xl z-[9999]",
                style: {
                    top: `${popupPosition.top}px`,
                    left: `${popupPosition.left}px`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$color$2f$es$2f$components$2f$sketch$2f$Sketch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SketchPicker$3e$__["SketchPicker"], {
                    color: displayColorInHex,
                    onChange: (updatedColor)=>setColor(rgbToString(updatedColor.rgb)),
                    disableAlpha: true,
                    presetColors: []
                }, void 0, false, {
                    fileName: "[project]/components/panels/ColorSelector.jsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/ColorSelector.jsx",
                lineNumber: 191,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(ColorSelector, "TMesEu0KACKcxP8gT31Ph3t7LpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ColorSelector;
var _c;
__turbopack_refresh__.register(_c, "ColorSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/panels/ModeEffectPreview.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ModeEffectPreview": (()=>ModeEffectPreview)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/devicePanelsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const ModeEffectPreview = ()=>{
    _s();
    const { deviceData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        hue: 0,
        fadeAngle: 0,
        waveAngle: 0,
        twinkles: null,
        sunsetStep: 0,
        sunsetIndex: 0,
        gradientProgress: 0
    });
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModeEffectPreview.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["ModeEffectPreview.useEffect"], [
        locale
    ]);
    const hsvToRgb = (h, s, v)=>{
        h = h % 360;
        s = s / 100;
        v = v / 100;
        let c = v * s;
        let x = c * (1 - Math.abs(h / 60 % 2 - 1));
        let m = v - c;
        let r, g, b;
        if (h < 60) [r, g, b] = [
            c,
            x,
            0
        ];
        else if (h < 120) [r, g, b] = [
            x,
            c,
            0
        ];
        else if (h < 180) [r, g, b] = [
            0,
            c,
            x
        ];
        else if (h < 240) [r, g, b] = [
            0,
            x,
            c
        ];
        else if (h < 300) [r, g, b] = [
            x,
            0,
            c
        ];
        else [r, g, b] = [
            c,
            0,
            x
        ];
        return {
            r: Math.round((r + m) * 255),
            g: Math.round((g + m) * 255),
            b: Math.round((b + m) * 255)
        };
    };
    const parseRgb = (rgbStr)=>{
        const match = rgbStr.match(/(\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
            return {
                r: parseInt(match[1]),
                g: parseInt(match[2]),
                b: parseInt(match[3])
            };
        }
        return {
            r: 255,
            g: 0,
            b: 0
        };
    };
    const getComplementaryColor = (rgbStr)=>{
        const { r, g, b } = parseRgb(rgbStr);
        return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    };
    const updateAnimation = ()=>{
        if (!divRef.current) return;
        const state = animationStateRef.current;
        const { r, g, b } = parseRgb(deviceData.color);
        switch(deviceData.mode){
            case 'Color':
                divRef.current.style.background = deviceData.color;
                break;
            case 'Off':
                divRef.current.style.background = 'rgb(0, 0, 0, 0)';
                break;
            case 'Fade':
            case 'Pulsating':
                {
                    const speed = deviceData.mode === 'Fade' ? 0.01 : 0.03;
                    state.fadeAngle = (state.fadeAngle + speed) % (2 * Math.PI);
                    const intensity = 0.2 + 0.8 * Math.abs(Math.sin(state.fadeAngle)); // avoid going full black
                    divRef.current.style.background = `rgb(${Math.floor(r * intensity)}, ${Math.floor(g * intensity)}, ${Math.floor(b * intensity)})`;
                    break;
                }
            case 'Rainbow':
                {
                    state.hue = (state.hue + 1) % 360;
                    const rainbow = hsvToRgb(state.hue, 100, 100);
                    divRef.current.style.background = `rgb(${rainbow.r}, ${rainbow.g}, ${rainbow.b})`;
                    break;
                }
            case 'Color Wave':
                {
                    state.hue = (state.hue + 1) % 360;
                    state.waveAngle = (state.waveAngle + 0.05) % (2 * Math.PI);
                    const brightness = 50 + 50 * Math.sin(state.waveAngle);
                    const wave = hsvToRgb(state.hue, 100, brightness);
                    divRef.current.style.background = `rgb(${wave.r}, ${wave.g}, ${wave.b})`;
                    break;
                }
            case 'Soft Twinkle':
                {
                    if (!state.twinkles) {
                        state.twinkles = Array.from({
                            length: 10
                        }, ()=>({
                                opacity: Math.random(),
                                speed: 0.02 + Math.random() * 0.03,
                                direction: Math.random() > 0.5 ? 1 : -1
                            }));
                    }
                    let avgOpacity = 0;
                    for (let t of state.twinkles){
                        t.opacity += t.speed * t.direction;
                        if (t.opacity >= 1) {
                            t.opacity = 1;
                            t.direction = -1;
                        } else if (t.opacity <= 0.3) {
                            t.opacity = 0.3;
                            t.direction = 1;
                        }
                        avgOpacity += t.opacity;
                    }
                    avgOpacity /= state.twinkles.length;
                    divRef.current.style.background = `rgb(${Math.floor(r * avgOpacity)}, ${Math.floor(g * avgOpacity)}, ${Math.floor(b * avgOpacity)})`;
                    break;
                }
            case 'Warm Sunset':
                {
                    const sunset = [
                        parseRgb('rgb(255, 100, 0)'),
                        parseRgb('rgb(255, 50, 50)'),
                        parseRgb('rgb(255, 0, 100)')
                    ];
                    const curr = sunset[state.sunsetIndex];
                    const next = sunset[(state.sunsetIndex + 1) % sunset.length];
                    const t = 0.5 * (1 - Math.cos(Math.PI * state.sunsetStep));
                    const blend = {
                        r: Math.floor(curr.r * (1 - t) + next.r * t),
                        g: Math.floor(curr.g * (1 - t) + next.g * t),
                        b: Math.floor(curr.b * (1 - t) + next.b * t)
                    };
                    divRef.current.style.background = `rgb(${blend.r}, ${blend.g}, ${blend.b})`;
                    state.sunsetStep += 0.005;
                    if (state.sunsetStep >= 1) {
                        state.sunsetStep = 0;
                        state.sunsetIndex = (state.sunsetIndex + 1) % sunset.length;
                    }
                    break;
                }
            case 'Glowing Gradient':
                {
                    const comp = getComplementaryColor(deviceData.color);
                    const baseColor = parseRgb(deviceData.color);
                    const compColor = parseRgb(comp);
                    const t = 0.5 * (1 + Math.sin(state.gradientProgress / 50));
                    state.gradientProgress += 1;
                    const glow = {
                        r: Math.floor(baseColor.r * (1 - t) + compColor.r * t),
                        g: Math.floor(baseColor.g * (1 - t) + compColor.g * t),
                        b: Math.floor(baseColor.b * (1 - t) + compColor.b * t)
                    };
                    divRef.current.style.background = `rgb(${glow.r}, ${glow.g}, ${glow.b})`;
                    break;
                }
            default:
                divRef.current.style.background = deviceData.color;
        }
        animationRef.current = requestAnimationFrame(updateAnimation);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModeEffectPreview.useEffect": ()=>{
            animationStateRef.current = {
                hue: 0,
                fadeAngle: 0,
                waveAngle: 0,
                twinkles: null,
                sunsetStep: 0,
                sunsetIndex: 0,
                gradientProgress: 0
            };
            if (divRef.current) {
                divRef.current.style.background = deviceData.color;
            }
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            animationRef.current = requestAnimationFrame(updateAnimation);
            return ({
                "ModeEffectPreview.useEffect": ()=>{
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["ModeEffectPreview.useEffect"];
        }
    }["ModeEffectPreview.useEffect"], [
        deviceData.mode,
        deviceData.color
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-xl p-2 relative overflow-hidden flex flex-col justify-around",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-2 z-10 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-7 w-7 text-purple-400 mr-3",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/ModeEffectPreview.jsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/panels/ModeEffectPreview.jsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-gray-300 text-xl font-medium",
                            children: text.modeEffectPreview.title
                        }, void 0, false, {
                            fileName: "[project]/components/panels/ModeEffectPreview.jsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/panels/ModeEffectPreview.jsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/ModeEffectPreview.jsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-center mb-2 text-gray-300 font-medium",
                        children: [
                            text.modeEffectPreview.currentMode,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-400",
                                children: deviceData.mode
                            }, void 0, false, {
                                fileName: "[project]/components/panels/ModeEffectPreview.jsx",
                                lineNumber: 220,
                                columnNumber: 114
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/ModeEffectPreview.jsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: divRef,
                        className: "h-24 rounded-lg border border-gray-600 relative shadow-lg",
                        style: {
                            background: deviceData.color,
                            opacity: deviceData.brightness / 255
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/panels/ModeEffectPreview.jsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/ModeEffectPreview.jsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-purple-500/10 to-amber-600/20 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/panels/ModeEffectPreview.jsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/panels/ModeEffectPreview.jsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
};
_s(ModeEffectPreview, "4UZFvLU+K0HHqJDDgq5hOP/vmEA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ModeEffectPreview;
var _c;
__turbopack_refresh__.register(_c, "ModeEffectPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/panels/ModeSelector.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ModeSelector": (()=>ModeSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/devicePanelsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const ModeSelector = ()=>{
    _s();
    const { deviceData, setDeviceData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModeSelector.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["ModeSelector.useEffect"], [
        locale
    ]);
    // Available lighting modes - these are the actual values stored
    const lightingModes = [
        "Color",
        "Fade",
        "Color Wave",
        "Rainbow",
        "Glowing Gradient",
        "Soft Twinkle",
        "Warm Sunset",
        "Pulsating",
        "Off"
    ];
    // Function to get translated mode name
    const getModeName = (mode)=>{
        const modeMap = {
            "Color": text.modeSelector.color,
            "Fade": text.modeSelector.fade,
            "Color Wave": text.modeSelector.colorWave,
            "Rainbow": text.modeSelector.rainbow,
            "Glowing Gradient": text.modeSelector.glowingGradient,
            "Soft Twinkle": text.modeSelector.softTwinkle,
            "Warm Sunset": text.modeSelector.warmSunset,
            "Pulsating": text.modeSelector.pulsating,
            "Off": text.modeSelector.off
        };
        return modeMap[mode] || mode;
    };
    const setLightingMode = (mode)=>{
        setDeviceData((prev)=>({
                ...prev,
                mode
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-xl p-4 relative overflow-hidden flex-grow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-3 z-10 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 text-amber-400 mr-2",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/ModeSelector.jsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/panels/ModeSelector.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-gray-300 text-base font-medium",
                            children: text.modeSelector.title
                        }, void 0, false, {
                            fileName: "[project]/components/panels/ModeSelector.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/panels/ModeSelector.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/ModeSelector.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: deviceData.mode,
                        onChange: (e)=>setLightingMode(e.target.value),
                        className: "w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white mb-3",
                        children: lightingModes.map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: mode,
                                children: getModeName(mode)
                            }, mode, false, {
                                fileName: "[project]/components/panels/ModeSelector.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/panels/ModeSelector.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-cols-4 gap-2 mt-1 hidden sm:grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLightingMode('Color'),
                                className: `py-1 px-2 rounded-md text-xs font-medium text-center ${deviceData.mode === 'Color' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`,
                                children: text.modeSelector.solidColor
                            }, void 0, false, {
                                fileName: "[project]/components/panels/ModeSelector.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLightingMode('Warm Sunset'),
                                className: `py-1 px-2 rounded-md text-xs font-medium text-center ${deviceData.mode === 'Warm Sunset' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`,
                                children: text.modeSelector.warmSunset
                            }, void 0, false, {
                                fileName: "[project]/components/panels/ModeSelector.jsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLightingMode('Rainbow'),
                                className: `py-1 px-2 rounded-md text-xs font-medium text-center ${deviceData.mode === 'Rainbow' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`,
                                children: text.modeSelector.rainbow
                            }, void 0, false, {
                                fileName: "[project]/components/panels/ModeSelector.jsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLightingMode('Off'),
                                className: `py-1 px-2 rounded-md text-xs font-medium text-center ${deviceData.mode === 'Off' ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300'}`,
                                children: text.modeSelector.turnOff
                            }, void 0, false, {
                                fileName: "[project]/components/panels/ModeSelector.jsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/ModeSelector.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/ModeSelector.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-amber-500/5 to-amber-600/10"
            }, void 0, false, {
                fileName: "[project]/components/panels/ModeSelector.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/panels/ModeSelector.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
_s(ModeSelector, "tkF00G7iyl2h+YcrleFQvkUNIpw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ModeSelector;
var _c;
__turbopack_refresh__.register(_c, "ModeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/panels/TargetHumidityControl.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/devicePanelsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const TargetHumidityControl = ()=>{
    _s();
    const { deviceData, setDeviceData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TargetHumidityControl.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["TargetHumidityControl.useEffect"], [
        locale
    ]);
    const setTargetHumidity = (value)=>{
        const humidity = Math.min(Math.max(parseInt(value), 30), 75);
        setDeviceData((prev)=>({
                ...prev,
                targetHumidity: humidity
            }));
    };
    const toggleTargetOff = ()=>{
        if (deviceData.targetHumidity > 75) {
            setDeviceData((prev)=>({
                    ...prev,
                    targetHumidity: 50
                }));
        } else {
            setDeviceData((prev)=>({
                    ...prev,
                    targetHumidity: 80
                }));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-xl p-2 relative overflow-hidden flex flex-col justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-5 z-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-7 w-7 text-blue-400 mr-3",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                }, void 0, false, {
                                    fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-gray-300 text-xl font-medium",
                                children: text.targetHumidityControl.title
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "items-center hidden xl:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bold text-blue-400",
                                children: deviceData.targetHumidity > 75 ? text.targetHumidityControl.off : `${deviceData.targetHumidity}%`
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-2 relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full border-4 border-gray-700 flex items-center justify-center overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute bottom-0 left-0 right-0 transition-all duration-500 ${deviceData.targetHumidity > 75 ? 'bg-red-500' : 'bg-blue-500'}`,
                                            style: {
                                                height: `${deviceData.targetHumidity > 75 ? 0 : Math.min(deviceData.targetHumidity, 75)}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-6 w-6 text-blue-400 z-10",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19.5V14m6 0v5.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col z-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: "30",
                        max: "75",
                        value: deviceData.targetHumidity > 75 ? 75 : deviceData.targetHumidity,
                        onChange: (e)=>setTargetHumidity(e.target.value),
                        disabled: deviceData.targetHumidity > 75,
                        className: `w-full h-3 rounded-lg appearance-none cursor-pointer mb-3 ${deviceData.targetHumidity > 75 ? 'bg-red-900 cursor-not-allowed opacity-50 [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none' : 'bg-gray-700 accent-blue-500'}`
                    }, void 0, false, {
                        fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex justify-between text-sm mb-2 ${deviceData.targetHumidity > 75 ? 'text-red-400 opacity-50' : 'text-gray-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "30%"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `font-medium ${deviceData.targetHumidity > 75 ? 'text-red-400' : 'text-blue-400'}`,
                                children: deviceData.targetHumidity > 75 ? text.targetHumidityControl.targetDisabled : '50%'
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "75%"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 gap-3 mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTargetHumidity(40),
                                disabled: deviceData.targetHumidity > 75,
                                className: `py-3 px-3 rounded-lg text-sm font-medium text-center transition-all ${deviceData.targetHumidity > 75 ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50' : deviceData.targetHumidity === 40 ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        text.targetHumidityControl.low,
                                        " (40%)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTargetHumidity(50),
                                disabled: deviceData.targetHumidity > 75,
                                className: `py-3 px-3 rounded-lg text-sm font-medium text-center transition-all ${deviceData.targetHumidity > 75 ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50' : deviceData.targetHumidity === 50 ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        text.targetHumidityControl.med,
                                        " (50%)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTargetHumidity(60),
                                disabled: deviceData.targetHumidity > 75,
                                className: `py-3 px-3 rounded-lg text-sm font-medium text-center transition-all ${deviceData.targetHumidity > 75 ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50' : deviceData.targetHumidity === 60 ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        text.targetHumidityControl.high,
                                        " (60%)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleTargetOff,
                                className: `py-3 px-3 rounded-lg text-sm font-medium text-center transition-all ${deviceData.targetHumidity > 75 ? 'bg-red-500 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: deviceData.targetHumidity > 75 ? text.targetHumidityControl.targetOn : text.targetHumidityControl.targetOff
                                }, void 0, false, {
                                    fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-700/50 p-2 rounded-lg mt-2 z-10 relative hidden xl:inline",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6 text-yellow-400 mr-2 flex-shrink-0",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-300",
                            children: text.targetHumidityControl.recommendedNote
                        }, void 0, false, {
                            fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/20"
            }, void 0, false, {
                fileName: "[project]/components/panels/TargetHumidityControl.jsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/panels/TargetHumidityControl.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_s(TargetHumidityControl, "tkF00G7iyl2h+YcrleFQvkUNIpw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = TargetHumidityControl;
const __TURBOPACK__default__export__ = TargetHumidityControl;
var _c;
__turbopack_refresh__.register(_c, "TargetHumidityControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/panels/TemperatureDisplay.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/devicePanelsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const TemperatureDisplay = ()=>{
    _s();
    const { deviceData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TemperatureDisplay.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["TemperatureDisplay.useEffect"], [
        locale
    ]);
    const value = deviceData.temperature;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-xl p-4 flex items-center justify-between relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-gray-400 text-sm mb-3",
                        children: text.temperatureDisplay.title
                    }, void 0, false, {
                        fileName: "[project]/components/panels/TemperatureDisplay.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl font-bold",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TemperatureDisplay.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl ml-1",
                                children: text.temperatureDisplay.celsius
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TemperatureDisplay.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/TemperatureDisplay.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/TemperatureDisplay.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 rounded-full border-4 flex items-center justify-center z-10 border-red-500 bg-red-500/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-8 w-8 text-red-500",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    }, void 0, false, {
                        fileName: "[project]/components/panels/TemperatureDisplay.jsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/panels/TemperatureDisplay.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/TemperatureDisplay.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/20"
            }, void 0, false, {
                fileName: "[project]/components/panels/TemperatureDisplay.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/panels/TemperatureDisplay.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_s(TemperatureDisplay, "K86YImtaLU80x8MWlHy1p2OnXy0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = TemperatureDisplay;
const __TURBOPACK__default__export__ = TemperatureDisplay;
var _c;
__turbopack_refresh__.register(_c, "TemperatureDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/panels/HumidityDisplay.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/devicePanelsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const HumidityDisplay = ()=>{
    _s();
    const { deviceData, setDeviceData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HumidityDisplay.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["HumidityDisplay.useEffect"], [
        locale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-xl p-4 flex items-center justify-between relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-gray-400 text-sm",
                        children: text.humidityDisplay.title
                    }, void 0, false, {
                        fileName: "[project]/components/panels/HumidityDisplay.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end mt-1 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl font-bold",
                                children: deviceData.humidity
                            }, void 0, false, {
                                fileName: "[project]/components/panels/HumidityDisplay.jsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl ml-1",
                                children: "%"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/HumidityDisplay.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/HumidityDisplay.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs py-0.5 rounded-full h-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${deviceData.controlMode === "manual" || deviceData.targetHumidity === 80 ? "hidden" : "inline"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400",
                                        children: text.humidityDisplay.target
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/HumidityDisplay.jsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm ml-1 font-medium mr-2",
                                        children: [
                                            deviceData.targetHumidity,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/panels/HumidityDisplay.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/panels/HumidityDisplay.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            deviceData.humidity < deviceData.targetHumidity || deviceData.controlMode === "manual" && deviceData.status === "On" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full",
                                children: text.humidityDisplay.increasing
                            }, void 0, false, {
                                fileName: "[project]/components/panels/HumidityDisplay.jsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this) : deviceData.humidity > deviceData.targetHumidity || deviceData.controlMode === "manual" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full",
                                children: text.humidityDisplay.decreasing
                            }, void 0, false, {
                                fileName: "[project]/components/panels/HumidityDisplay.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full",
                                children: text.humidityDisplay.optimal
                            }, void 0, false, {
                                fileName: "[project]/components/panels/HumidityDisplay.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/HumidityDisplay.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/HumidityDisplay.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center bg-blue-500/10 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-8 w-8 text-blue-500",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    }, void 0, false, {
                        fileName: "[project]/components/panels/HumidityDisplay.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/panels/HumidityDisplay.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/HumidityDisplay.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/20"
            }, void 0, false, {
                fileName: "[project]/components/panels/HumidityDisplay.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            deviceData.status === 'On' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-1 bg-blue-500 animate-pulse"
            }, void 0, false, {
                fileName: "[project]/components/panels/HumidityDisplay.jsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/panels/HumidityDisplay.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_s(HumidityDisplay, "tkF00G7iyl2h+YcrleFQvkUNIpw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = HumidityDisplay;
const __TURBOPACK__default__export__ = HumidityDisplay;
var _c;
__turbopack_refresh__.register(_c, "HumidityDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/panels/ControlModeSelector.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/devicePanelsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const ControlModeSelector = ()=>{
    _s();
    const { deviceData, setDeviceData, setTimeLeft, setIsActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ControlModeSelector.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["ControlModeSelector.useEffect"], [
        locale
    ]);
    const isAuto = deviceData.controlMode === 'auto';
    const toggleControlMode = ()=>{
        const newMode = isAuto ? 'manual' : 'auto';
        setDeviceData((prev)=>({
                ...prev,
                controlMode: newMode
            }));
        if (newMode === 'auto') {
            setIsActive(false);
            setTimeLeft(0);
            setDeviceData((prev)=>({
                    ...prev,
                    timer: null,
                    timerActive: false
                }));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-xl p-4 relative overflow-hidden flex flex-col justify-evenly flex-1 w-full h-full flex-grow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-9 z-10 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-7 w-7 text-yellow-400 mr-3",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 12h6m-3-3v6m7.5 0A7.5 7.5 0 1112 4.5 7.5 7.5 0 0121.5 12z"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/ControlModeSelector.jsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/panels/ControlModeSelector.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-gray-300 text-xl font-medium",
                            children: text.controlModeSelector.title
                        }, void 0, false, {
                            fileName: "[project]/components/panels/ControlModeSelector.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/panels/ControlModeSelector.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/ControlModeSelector.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center z-10 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-2xl font-bold ${isAuto ? 'text-yellow-400' : 'text-blue-400'}`,
                                children: isAuto ? text.controlModeSelector.autoMode : text.controlModeSelector.manualMode
                            }, void 0, false, {
                                fileName: "[project]/components/panels/ControlModeSelector.jsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/panels/ControlModeSelector.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "relative inline-flex cursor-pointer select-none items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: isAuto,
                                        onChange: toggleControlMode,
                                        className: "sr-only"
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/ControlModeSelector.jsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label flex items-center text-xl font-medium text-blue-400",
                                        children: text.controlModeSelector.manual
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/ControlModeSelector.jsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `slider mx-6 flex h-14 w-[120px] items-center rounded-full p-2 duration-200 ${isAuto ? 'bg-yellow-400' : 'bg-blue-500'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `dot h-10 w-10 rounded-full bg-white duration-200 ${isAuto ? 'translate-x-[72px]' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/panels/ControlModeSelector.jsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/ControlModeSelector.jsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label flex items-center text-xl font-medium text-yellow-300",
                                        children: text.controlModeSelector.auto
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/ControlModeSelector.jsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/panels/ControlModeSelector.jsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/panels/ControlModeSelector.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/panels/ControlModeSelector.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/ControlModeSelector.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-indigo-600/20"
            }, void 0, false, {
                fileName: "[project]/components/panels/ControlModeSelector.jsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-0 right-0 h-1.5 ${isAuto ? 'bg-yellow-400' : 'bg-blue-500'}`
            }, void 0, false, {
                fileName: "[project]/components/panels/ControlModeSelector.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/panels/ControlModeSelector.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
_s(ControlModeSelector, "z5yx7Bj5ZcdR5uNeRpHqc2s2yt0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = ControlModeSelector;
const __TURBOPACK__default__export__ = ControlModeSelector;
var _c;
__turbopack_refresh__.register(_c, "ControlModeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/panels/PowerControl.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/devicePanelsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const PowerControl = ()=>{
    _s();
    const { deviceData, setDeviceData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PowerControl.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["PowerControl.useEffect"], [
        locale
    ]);
    const togglePower = ()=>{
        const newStatus = deviceData.status === 'On' ? 'Off' : 'On';
        setDeviceData((prev)=>({
                ...prev,
                status: newStatus
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-xl p-4 relative overflow-hidden flex flex-col justify-evenly",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-5 z-10 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-7 w-7 text-blue-400 mr-3",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/PowerControl.jsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/panels/PowerControl.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-gray-300 text-xl font-medium",
                            children: text.powerControl.title
                        }, void 0, false, {
                            fileName: "[project]/components/panels/PowerControl.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/panels/PowerControl.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/PowerControl.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center z-10 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-2xl font-bold ${deviceData.status === 'On' ? 'text-green-400' : 'text-gray-400'}`,
                                    children: deviceData.status === 'On' ? text.powerControl.running : text.powerControl.standby
                                }, void 0, false, {
                                    fileName: "[project]/components/panels/PowerControl.jsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mt-2 h-2",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `animate-pulse flex space-x-1 ${deviceData.status === 'On' ? 'opacity-100' : 'opacity-0'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-2 h-2 ${deviceData.status === 'On' ? 'bg-green-400' : 'bg-gray-400'} rounded-full`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/panels/PowerControl.jsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-2 h-2 ${deviceData.status === 'On' ? 'bg-green-400' : 'bg-gray-400'} rounded-full`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/panels/PowerControl.jsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-2 h-2 ${deviceData.status === 'On' ? 'bg-green-400' : 'bg-gray-400'} rounded-full`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/panels/PowerControl.jsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/panels/PowerControl.jsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/panels/PowerControl.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/panels/PowerControl.jsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "relative inline-flex cursor-pointer select-none items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: deviceData.status === 'On',
                                        onChange: togglePower,
                                        className: "sr-only"
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/PowerControl.jsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label flex items-center text-xl font-medium text-gray-400",
                                        children: text.powerControl.off
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/PowerControl.jsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `slider mx-6 flex h-14 w-[120px] items-center rounded-full p-2 duration-200 ${deviceData.status === 'On' ? 'bg-blue-500' : 'bg-gray-600'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `dot h-10 w-10 rounded-full bg-white duration-200 ${deviceData.status === 'On' ? 'translate-x-[72px]' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/panels/PowerControl.jsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/PowerControl.jsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "label flex items-center text-xl font-medium text-green-400",
                                        children: text.powerControl.on
                                    }, void 0, false, {
                                        fileName: "[project]/components/panels/PowerControl.jsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/panels/PowerControl.jsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/panels/PowerControl.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/panels/PowerControl.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/PowerControl.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/20"
            }, void 0, false, {
                fileName: "[project]/components/panels/PowerControl.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            deviceData.status === 'On' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-1.5 bg-blue-500"
            }, void 0, false, {
                fileName: "[project]/components/panels/PowerControl.jsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/panels/PowerControl.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_s(PowerControl, "tkF00G7iyl2h+YcrleFQvkUNIpw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = PowerControl;
const __TURBOPACK__default__export__ = PowerControl;
var _c;
__turbopack_refresh__.register(_c, "PowerControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/panels/TimerControl.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/devicePanelsText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const showGlobalToast = (message)=>{
    const event = new CustomEvent('showToast', {
        detail: {
            message
        }
    });
    window.dispatchEvent(event);
};
const TimerControl = ()=>{
    _s();
    const { deviceData, setDeviceData, isActive, timeLeft, setTimeLeft, setIsActive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    const [hours, setHours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [minutes, setMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimerControl.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$devicePanelsText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePanelsText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["TimerControl.useEffect"], [
        locale
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimerControl.useEffect": ()=>{
            const remainingMs = deviceData.timer * 1000;
            if (remainingMs > 0) {
                setTimeLeft(deviceData.timer);
                setIsActive(true);
                setDeviceData({
                    "TimerControl.useEffect": (prev)=>({
                            ...prev,
                            timerActive: true
                        })
                }["TimerControl.useEffect"]);
            } else {
                setIsActive(false);
                setTimeLeft(0);
            }
        }
    }["TimerControl.useEffect"], [
        deviceData.timer,
        deviceData.timerActive,
        setDeviceData
    ]);
    const handleSetTimer = ()=>{
        const totalMinutes = hours * 60 + minutes;
        if (totalMinutes > 0) {
            const totalSeconds = totalMinutes * 60;
            setTimeLeft(totalSeconds);
            setIsActive(true);
            setDeviceData((prev)=>({
                    ...prev,
                    timer: totalSeconds,
                    timerActive: true
                }));
            showGlobalToast(`${text.timerControl.timerSetMessage} ${hours}h ${minutes}m`);
            setHours(0);
            setMinutes(0);
        }
    };
    const handleCancelTimer = ()=>{
        setIsActive(false);
        setTimeLeft(0);
        setDeviceData((prev)=>({
                ...prev,
                timer: null,
                timerActive: false
            }));
        showGlobalToast(text.timerControl.timerCancelledMessage);
    };
    const formatTime = (seconds)=>{
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor(seconds % 3600 / 60);
        const secs = seconds % 60;
        if (hrs > 0) {
            return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl p-4 relative overflow-hidden flex flex-col justify-between bg-gradient-to-br from-gray-500/10 to-gray-600/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-3 z-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-7 w-7 text-blue-400 mr-3",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        }, void 0, false, {
                            fileName: "[project]/components/panels/TimerControl.jsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/panels/TimerControl.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-gray-300 text-xl font-medium",
                        children: isActive ? text.timerControl.timerRunning : text.timerControl.setTimer
                    }, void 0, false, {
                        fileName: "[project]/components/panels/TimerControl.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/TimerControl.jsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            isActive ? // Timer display when active
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-4xl font-mono font-bold text-blue-400 mb-2",
                        children: formatTime(timeLeft)
                    }, void 0, false, {
                        fileName: "[project]/components/panels/TimerControl.jsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-400",
                        children: text.timerControl.timeRemaining
                    }, void 0, false, {
                        fileName: "[project]/components/panels/TimerControl.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/TimerControl.jsx",
                lineNumber: 103,
                columnNumber: 9
            }, this) : // Timer setup when inactive
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-700 rounded-lg p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm text-gray-400 mb-2",
                                children: text.timerControl.hours
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TimerControl.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: hours,
                                onChange: (e)=>setHours(parseInt(e.target.value)),
                                className: "w-full bg-gray-600 border-none rounded-lg text-lg py-2 px-3 text-white",
                                children: Array.from({
                                    length: 13
                                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: i,
                                        children: i
                                    }, i, false, {
                                        fileName: "[project]/components/panels/TimerControl.jsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TimerControl.jsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/TimerControl.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-700 rounded-lg p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm text-gray-400 mb-2",
                                children: text.timerControl.minutes
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TimerControl.jsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: minutes,
                                onChange: (e)=>setMinutes(parseInt(e.target.value)),
                                className: "w-full bg-gray-600 border-none rounded-lg text-lg py-2 px-3 text-white",
                                children: Array.from({
                                    length: 12
                                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: i * 5,
                                        children: i * 5
                                    }, i * 5, false, {
                                        fileName: "[project]/components/panels/TimerControl.jsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TimerControl.jsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/panels/TimerControl.jsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/panels/TimerControl.jsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 relative",
                children: isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCancelTimer,
                    className: "w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl flex items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 mr-2",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TimerControl.jsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/panels/TimerControl.jsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        text.timerControl.cancelTimer
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/panels/TimerControl.jsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSetTimer,
                    className: "w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl flex items-center justify-center",
                    disabled: hours === 0 && minutes === 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5 mr-2",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            }, void 0, false, {
                                fileName: "[project]/components/panels/TimerControl.jsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/panels/TimerControl.jsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this),
                        text.timerControl.setTimerButton
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/panels/TimerControl.jsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/panels/TimerControl.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/panels/TimerControl.jsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
};
_s(TimerControl, "iMfiXDBDddXiCFUf2C0KXKLqaaY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = TimerControl;
const __TURBOPACK__default__export__ = TimerControl;
var _c;
__turbopack_refresh__.register(_c, "TimerControl");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/deviceManagerText.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// DeviceManager Page Text Translations
__turbopack_esm__({
    "getDeviceManagerText": (()=>getDeviceManagerText)
});
const deviceManagerText = {
    en: {
        // Header
        backButton: "Back",
        title: "Mistify Humidifier",
        connected: "Connected",
        disconnected: "Disconnected",
        deviceIdLabel: "Device ID:",
        // Lid Disconnected Warning
        lidWarning: {
            title: "TOP DISCONNECTED",
            message: "The humidifier top has been disconnected. Please securely reconnect the top before continuing operation.",
            safetyNote: "Device controls are disabled for safety",
            waiting: "Waiting for top connection..."
        },
        // Toast messages (can be used by child components too)
        toastMessages: {
            success: "Success",
            error: "Error",
            updated: "Settings updated successfully"
        }
    },
    lv: {
        // Header
        backButton: "Atpakaļ",
        title: "Mistify Mitrinātājs",
        connected: "Savienots",
        disconnected: "Atvienots",
        deviceIdLabel: "Ierīces ID:",
        // Lid Disconnected Warning
        lidWarning: {
            title: "AUGŠDAĻA ATVIENOTA",
            message: "Mitrinātāja augšdaļa ir atvienota. Lūdzu, droši pievienojiet augšdaļu, pirms turpināt darbību.",
            safetyNote: "Ierīces vadīklas ir atspējotas drošības nolūkos",
            waiting: "Gaida augšdaļas savienojumu..."
        },
        // Toast messages (can be used by child components too)
        toastMessages: {
            success: "Veiksmīgi",
            error: "Kļūda",
            updated: "Iestatījumi veiksmīgi atjaunināti"
        }
    }
};
const getDeviceManagerText = (locale)=>{
    return deviceManagerText[locale] || deviceManagerText.en;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/DeviceManager.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$BrightnessSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/panels/BrightnessSelector.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$ColorSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/panels/ColorSelector.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$ModeEffectPreview$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/panels/ModeEffectPreview.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$ModeSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/panels/ModeSelector.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$TargetHumidityControl$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/panels/TargetHumidityControl.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$TemperatureDisplay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/panels/TemperatureDisplay.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$HumidityDisplay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/panels/HumidityDisplay.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$ControlModeSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/panels/ControlModeSelector.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$PowerControl$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/panels/PowerControl.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$TimerControl$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/panels/TimerControl.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$deviceManagerText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/deviceManagerText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const DeviceManager = ({ deviceId, onBack })=>{
    _s();
    const { deviceData, disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        message: ''
    });
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Language system
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$deviceManagerText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceManagerText"])("en"));
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeviceManager.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$deviceManagerText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDeviceManagerText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["DeviceManager.useEffect"], [
        locale
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DeviceManager.useEffect": ()=>{
            const handleToast = {
                "DeviceManager.useEffect.handleToast": (event)=>{
                    // Clear any existing timeout
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                    setToast({
                        show: true,
                        message: event.detail.message
                    });
                    // Set new timeout and store the reference
                    timeoutRef.current = setTimeout({
                        "DeviceManager.useEffect.handleToast": ()=>{
                            setToast({
                                show: false,
                                message: ''
                            });
                        }
                    }["DeviceManager.useEffect.handleToast"], 3000);
                }
            }["DeviceManager.useEffect.handleToast"];
            window.addEventListener('showToast', handleToast);
            return ({
                "DeviceManager.useEffect": ()=>{
                    window.removeEventListener('showToast', handleToast);
                    // Clean up timeout on unmount
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }
            })["DeviceManager.useEffect"];
        }
    }["DeviceManager.useEffect"], []);
    const handleBack = ()=>{
        disconnect();
        onBack();
    };
    // Check if lid is disconnected
    const isLidDisconnected = deviceData.lidStatus === "disconnected";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full md:min-h-[calc(100vh)] bg-gray-900 text-white shadow-2xl overflow-hidden flex flex-col relative",
        children: [
            isLidDisconnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-[76px] inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-600 border-2 border-red-400 rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-16 w-16 text-red-200 mx-auto mb-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
                                }, void 0, false, {
                                    fileName: "[project]/components/DeviceManager.jsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DeviceManager.jsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DeviceManager.jsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-white mb-4",
                            children: text.lidWarning.title
                        }, void 0, false, {
                            fileName: "[project]/components/DeviceManager.jsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-100 text-lg mb-6 leading-relaxed",
                            children: text.lidWarning.message
                        }, void 0, false, {
                            fileName: "[project]/components/DeviceManager.jsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-700 rounded-lg p-4 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-100 text-sm font-medium",
                                children: text.lidWarning.safetyNote
                            }, void 0, false, {
                                fileName: "[project]/components/DeviceManager.jsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DeviceManager.jsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center text-red-200 text-sm",
                            children: text.lidWarning.waiting
                        }, void 0, false, {
                            fileName: "[project]/components/DeviceManager.jsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DeviceManager.jsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DeviceManager.jsx",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            toast.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-x-0 top-16 mx-auto z-50 flex justify-center animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6 mr-3 flex-shrink-0",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7"
                            }, void 0, false, {
                                fileName: "[project]/components/DeviceManager.jsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DeviceManager.jsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-medium text-lg",
                            children: toast.message
                        }, void 0, false, {
                            fileName: "[project]/components/DeviceManager.jsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DeviceManager.jsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DeviceManager.jsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeviceManagerConnection"], {
                deviceId: deviceId
            }, void 0, false, {
                fileName: "[project]/components/DeviceManager.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 bg-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBack,
                                className: "flex items-center text-blue-400 hover:text-blue-300 transition-colors mr-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DeviceManager.jsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/DeviceManager.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 hidden sm:inline",
                                        children: text.backButton
                                    }, void 0, false, {
                                        fileName: "[project]/components/DeviceManager.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DeviceManager.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Mistify Logo",
                                className: "h-8"
                            }, void 0, false, {
                                fileName: "[project]/components/DeviceManager.jsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold hidden sm:inline",
                                children: text.title
                            }, void 0, false, {
                                fileName: "[project]/components/DeviceManager.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DeviceManager.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-2 h-2 rounded-full mr-2 ${deviceData.isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-500'}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/DeviceManager.jsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: deviceData.isConnected ? text.connected : text.disconnected
                                    }, void 0, false, {
                                        fileName: "[project]/components/DeviceManager.jsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DeviceManager.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-gray-700 rounded-full px-3 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-4 w-4 text-blue-400 mr-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DeviceManager.jsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/DeviceManager.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: [
                                                    text.deviceIdLabel,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/DeviceManager.jsx",
                                                lineNumber: 136,
                                                columnNumber: 39
                                            }, this),
                                            deviceId || 'MH-2023X'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DeviceManager.jsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DeviceManager.jsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DeviceManager.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DeviceManager.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 px-4 sm:px-[15vw] flex-grow flex flex-col space-y-2 bg-gray-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-gray-800 rounded-xl shadow-lg p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$TemperatureDisplay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/DeviceManager.jsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$HumidityDisplay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/DeviceManager.jsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DeviceManager.jsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DeviceManager.jsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-gray-800 rounded-xl shadow-lg p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$ModeSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeSelector"], {}, void 0, false, {
                                    fileName: "[project]/components/DeviceManager.jsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$BrightnessSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/DeviceManager.jsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$ColorSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorSelector"], {}, void 0, false, {
                                    fileName: "[project]/components/DeviceManager.jsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$ModeEffectPreview$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModeEffectPreview"], {}, void 0, false, {
                                    fileName: "[project]/components/DeviceManager.jsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DeviceManager.jsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DeviceManager.jsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-gray-800 rounded-xl shadow-lg p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$ControlModeSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/DeviceManager.jsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                deviceData.controlMode === 'manual' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$PowerControl$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/components/DeviceManager.jsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$TimerControl$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/components/DeviceManager.jsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$panels$2f$TargetHumidityControl$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/DeviceManager.jsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/DeviceManager.jsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DeviceManager.jsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DeviceManager.jsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DeviceManager.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DeviceManager.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
};
_s(DeviceManager, "yzmoh9gpkKDxT0ch5dXdpDaVVE4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = DeviceManager;
const __TURBOPACK__default__export__ = DeviceManager;
var _c;
__turbopack_refresh__.register(_c, "DeviceManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/connect/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ConnectPage),
    "dynamic": (()=>dynamic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Connect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Connect.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DeviceManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/DeviceManager.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/DeviceContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
const dynamic = "force-dynamic";
;
;
;
;
function ConnectPage() {
    _s();
    const [activeDevice, setActiveDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deviceStatuses, setDeviceStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [checkDeviceStatus, setCheckDeviceStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectPage.useEffect": ()=>{
            if (!activeDevice && checkDeviceStatus) {
                checkDeviceStatus();
            }
        }
    }["ConnectPage.useEffect"], [
        activeDevice,
        checkDeviceStatus
    ]);
    const updateDeviceStatuses = (newStatuses)=>{
        setDeviceStatuses(newStatuses);
    };
    const handleBackToConnect = ()=>{
        setActiveDevice(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$DeviceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeviceProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: activeDevice ? "hidden" : "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Connect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    setActiveDevice: setActiveDevice,
                    deviceStatuses: deviceStatuses,
                    updateDeviceStatuses: updateDeviceStatuses,
                    refreshOnReturn: activeDevice !== null,
                    setCheckDeviceStatusFunction: setCheckDeviceStatus
                }, void 0, false, {
                    fileName: "[project]/app/connect/page.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/connect/page.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: activeDevice ? "" : "hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DeviceManager$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    deviceId: activeDevice,
                    onBack: handleBackToConnect
                }, void 0, false, {
                    fileName: "[project]/app/connect/page.js",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/connect/page.js",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/connect/page.js",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(ConnectPage, "9idrW9XQEbVl6N0J0b0hn2Na80E=");
_c = ConnectPage;
var _c;
__turbopack_refresh__.register(_c, "ConnectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/connect/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_f08582._.js.map