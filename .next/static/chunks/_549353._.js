(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_549353._.js", {

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
(()=>{
    const e = new Error("Cannot find module '@/translations'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const Nav = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { locale, switchLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = translations[locale].nav;
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
                                lineNumber: 25,
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
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation/Nav.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/connect",
                                className: "hidden md:block relative z-10 backdrop-blur-xl bg-white/20 text-black font-medium px-6 py-3 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105",
                                children: t.connect
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation/Nav.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navigation/Nav.jsx",
                        lineNumber: 23,
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
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "uppercase font-semibold",
                                        children: locale
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navigation/Nav.jsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navigation/Nav.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "backdrop-blur-xl bg-white/25 text-black font-medium px-6 py-3 rounded-2xl shadow-[0_8px_35px_rgba(0,0,0,0.35)] hover:bg-white/35 hover:shadow-[0_8px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-105",
                                children: t.contact
                            }, void 0, false, {
                                fileName: "[project]/components/Navigation/Nav.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navigation/Nav.jsx",
                        lineNumber: 51,
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
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navigation/Nav.jsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation/Nav.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navigation/Nav.jsx",
                lineNumber: 21,
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
                        lineNumber: 103,
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
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: t.switchTo
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navigation/Nav.jsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/connect",
                                    onClick: ()=>setIsOpen(false),
                                    className: "backdrop-blur-xl bg-white/20 text-black font-medium px-6 py-4 rounded-2xl shadow-lg hover:bg-white/30 transition-all duration-300 text-center",
                                    children: t.connect
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    onClick: ()=>setIsOpen(false),
                                    className: "backdrop-blur-xl bg-white/25 text-black font-medium px-6 py-4 rounded-2xl shadow-lg hover:bg-white/35 transition-all duration-300 text-center",
                                    children: t.contact
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/buy",
                                    onClick: ()=>setIsOpen(false),
                                    className: "backdrop-blur-2xl bg-white/40 text-black font-semibold px-6 py-4 rounded-2xl shadow-lg hover:bg-white/50 transition-all duration-300 text-center",
                                    children: t.buyNow
                                }, void 0, false, {
                                    fileName: "[project]/components/Navigation/Nav.jsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navigation/Nav.jsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navigation/Nav.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navigation/Nav.jsx",
                lineNumber: 97,
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
"[project]/components/landingpage/landingPageText_en.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// landingPageText.js
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const landingPageText = {
    headline: {
        line1: "Breathe better.",
        line2: "Live smarter."
    },
    description: {
        p1: "A modern humidifier that balances comfort and intelligence. Monitors humidity and temperature in real time while adapting to your space with ambient lighting.",
        p2: "Designed for both performance and aesthetics."
    },
    buttons: {
        connect: "Connect",
        learnMore: "Learn More"
    },
    squares: [
        {
            title: "Real-Time",
            subtitle: "Monitor room humidity and temperature instantly with built-in sensors"
        },
        {
            title: "Smart Modes",
            subtitle: "Switch between auto-adjust or manual settings for perfect comfort"
        },
        {
            title: "Ambient Glow",
            subtitle: "Customizable LED lighting to match your mood or decor"
        },
        {
            title: "Silent",
            subtitle: "Ultra-quiet operation ideal for bedrooms and workspaces"
        },
        {
            title: "Modular Design",
            subtitle: "Easily switch tops or refill water for convenience and style"
        },
        {
            title: "Eco-Friendly",
            subtitle: "Made from recyclable materials for a sustainable choice"
        },
        {
            title: "Connected",
            subtitle: "Control settings remotely via web app anytime, anywhere"
        },
        {
            title: "Timed Comfort",
            subtitle: "Set schedules or timers for automated humidity control"
        },
        {
            title: "Future-Proof",
            subtitle: "Receive OTA updates and enjoy locally-manufactured quality"
        }
    ],
    newContent: {
        headline: "Experience Pure Comfort",
        p1: "Keep your home healthy and comfortable. Proper humidity helps reduce dry skin, irritated eyes, and respiratory discomfort while supporting better sleep.",
        p2: "A well-humidified room also protects wood furniture, flooring, and electronics from cracking or static buildup, preserving your space."
    },
    stats_title: {
        headline: "Performance at a Glance"
    },
    stats: [
        {
            label: "Runtime per Refill",
            value: "24-48h"
        },
        {
            label: "Average Power",
            value: "30W"
        },
        {
            label: "Room Coverage",
            value: "30-50 m²"
        },
        {
            label: "Tank Capacity",
            value: "1.5-2L"
        }
    ]
};
const __TURBOPACK__default__export__ = landingPageText;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/landingpage/landingPageText_lv.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const landingPageText = {
    headline: {
        line1: "Elpojiet labāk.",
        line2: "Dzīvojiet gudrāk."
    },
    description: {
        p1: "Mūsdienīgs mitrinātājs, kas apvieno komfortu un inteliģenci. Uzrauga telpas mitrumu un temperatūru tiešajā laikā, vienlaikus pielāgojoties jūsu videi ar apkārtējo apgaismojumu.",
        p2: "Dizains, kas apvieno gan veiktspēju, gan estētiku."
    },
    buttons: {
        connect: "Savienot",
        learnMore: "Uzzināt vairāk"
    },
    squares: [
        {
            title: "Reāllaikā",
            subtitle: "Sekojiet telpas mitrumam un temperatūrai reāllaikā ar iebūvētajiem sensoriem"
        },
        {
            title: "Gudri režīmi",
            subtitle: "Izvēlieties automātisko vai manuālo režīmu, lai nodrošinātu optimālu komfortu"
        },
        {
            title: "Gaismas noskaņa",
            subtitle: "Pielāgojams LED apgaismojums, kas pieskaņojas jūsu noskaņojumam vai interjeram"
        },
        {
            title: "Īpaši kluss",
            subtitle: "Ļoti klusa darbība — ideāli piemērota guļamistabām un darba telpām"
        },
        {
            title: "Modulārs dizains",
            subtitle: "Viegli nomaināma augšdaļa un paplašināma ūdens tvertne ērtībai un stilam"
        },
        {
            title: "Videi draudzīgs",
            subtitle: "Izgatavots no pārstrādājamiem materiāliem ilgtspējīgākai izvēlei"
        },
        {
            title: "Savienots ar jums",
            subtitle: "Pārvaldiet iestatījumus attālināti ar tīmekļa lietotni jebkurā laikā"
        },
        {
            title: "Komforts laikā",
            subtitle: "Iestatiet grafikus un taimerus automātiskai mitruma regulēšanai"
        },
        {
            title: "Gatavs nākotnei",
            subtitle: "Saņemiet OTA atjauninājumus un izbaudiet lokāli ražotas kvalitātes priekšrocības"
        }
    ],
    newContent: {
        headline: "Izbaudiet tīru komfortu",
        p1: "Uzturiet mājokli veselīgu un patīkamu ikdienai. Optimāls gaisa mitrums palīdz mazināt sausu ādu, acu kairinājumu un elpošanas diskomfortu, kā arī veicina kvalitatīvāku miegu.",
        p2: "Pareizi mitrināts gaiss aizsargā arī koka mēbeles, grīdas segumus un elektroniku no izžūšanas, plaisāšanas un statiskās elektrības, saglabājot jūsu vidi ilgtermiņā."
    },
    stats_title: {
        headline: "Veiktspējas pārskats"
    },
    stats: [
        {
            label: "Gaisa mitruma regulēšana",
            value: "30–75%"
        },
        {
            label: "Vidējā jauda",
            value: "30W"
        },
        {
            label: "Telpas pārklājums",
            value: "30–50 m²"
        },
        {
            label: "Tvertnes tilpums",
            value: "500 ml"
        }
    ]
};
const __TURBOPACK__default__export__ = landingPageText;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/landingpage/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// /data/index.js
__turbopack_esm__({
    "getLandingPageText": (()=>getLandingPageText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landingpage$2f$landingPageText_en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/landingpage/landingPageText_en.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landingpage$2f$landingPageText_lv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/landingpage/landingPageText_lv.js [app-client] (ecmascript)");
;
;
const texts = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landingpage$2f$landingPageText_en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    lv: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landingpage$2f$landingPageText_lv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
function getLandingPageText(locale = "en") {
    console.log('Requesting locale:', locale);
    console.log('Available texts:', Object.keys(texts));
    console.log('Selected text:', texts[locale]);
    // Ensure we always return valid data, defaulting to English
    const selectedText = texts[locale] || texts.en;
    // Extra safety check - ensure the object has the expected structure
    if (!selectedText || !selectedText.headline) {
        console.error(`Invalid text structure for locale: ${locale}`, selectedText);
        return texts.en; // Fallback to English
    }
    return selectedText;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/landingpage/LandingPage.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2f$Nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Navigation/Nav.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landingpage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/landingpage/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/battery.js [app-client] (ecmascript) <export default as Battery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
const LandingPage = ()=>{
    _s();
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fade, setFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const touchStartY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastTouchY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landingpage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLandingPageText"])("en")); // Default to 'en' on first render
    // Update text when locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            const newText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landingpage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLandingPageText"])(locale);
            if (newText) {
                setText(newText);
            }
        }
    }["LandingPage.useEffect"], [
        locale
    ]);
    const images = [
        "images/mainroom1.png",
        "images/bedroom1.png",
        "images/livingroom1.png"
    ];
    const scrollToProgress = (target, duration = 500)=>{
        const start = scrollProgress;
        const change = target - start;
        const startTime = performance.now();
        const animate = (currentTime)=>{
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setScrollProgress(start + change * easeInOutQuad(progress));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    };
    const easeInOutQuad = (t)=>t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            const interval = setInterval({
                "LandingPage.useEffect.interval": ()=>{
                    setFade(false);
                    setTimeout({
                        "LandingPage.useEffect.interval": ()=>{
                            setCurrentImageIndex({
                                "LandingPage.useEffect.interval": (prevIndex)=>(prevIndex + 1) % images.length
                            }["LandingPage.useEffect.interval"]);
                            setFade(true);
                        }
                    }["LandingPage.useEffect.interval"], 500);
                }
            }["LandingPage.useEffect.interval"], 5000);
            return ({
                "LandingPage.useEffect": ()=>clearInterval(interval)
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], []);
    // Check if mobile on mount and resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            const checkMobile = {
                "LandingPage.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 640);
                }
            }["LandingPage.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "LandingPage.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], []);
    // Humidifier positions and sizes - responsive
    const humidifierStyles = [
        {
            bottom: "120px",
            right: "490px",
            width: 220,
            mobileBottom: "80px",
            mobileRight: "50%",
            mobileWidth: 200
        },
        {
            bottom: "170px",
            left: "57%",
            width: 180,
            mobileBottom: "100px",
            mobileRight: "50%",
            mobileWidth: 140
        },
        {
            bottom: "80px",
            right: "520px",
            width: 210,
            mobileBottom: "70px",
            mobileRight: "50%",
            mobileWidth: 160
        }
    ];
    // Split headline into two lines
    const line1 = text.headline.line1;
    const line2 = text.headline.line2;
    // Character split helper
    const splitChars = (text)=>text.split("").map((char, index)=>({
                char,
                index
            }));
    // Scroll-based tracking with mouse wheel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            const handleScroll = {
                "LandingPage.useEffect.handleScroll": (e)=>{
                    e.preventDefault();
                    const delta = e.deltaY;
                    setScrollProgress({
                        "LandingPage.useEffect.handleScroll": (prev)=>{
                            const newProgress = prev + delta * 0.5;
                            return Math.max(0, Math.min(3250, newProgress));
                        }
                    }["LandingPage.useEffect.handleScroll"]);
                }
            }["LandingPage.useEffect.handleScroll"];
            window.addEventListener("wheel", handleScroll, {
                passive: false
            });
            return ({
                "LandingPage.useEffect": ()=>window.removeEventListener("wheel", handleScroll)
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], []);
    // Touch support for mobile - fixed to prevent pull-to-refresh
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            const handleTouchStart = {
                "LandingPage.useEffect.handleTouchStart": (e)=>{
                    touchStartY.current = e.touches[0].clientY;
                    lastTouchY.current = e.touches[0].clientY;
                }
            }["LandingPage.useEffect.handleTouchStart"];
            const handleTouchMove = {
                "LandingPage.useEffect.handleTouchMove": (e)=>{
                    const touchY = e.touches[0].clientY;
                    const delta = lastTouchY.current - touchY;
                    // Only prevent default if we're not at the top and trying to scroll up
                    // or if we're scrolling down
                    if (scrollProgress > 0 || delta > 0) {
                        e.preventDefault();
                    }
                    setScrollProgress({
                        "LandingPage.useEffect.handleTouchMove": (prev)=>{
                            const newProgress = prev + delta * 2;
                            return Math.max(0, Math.min(3250, newProgress));
                        }
                    }["LandingPage.useEffect.handleTouchMove"]);
                    lastTouchY.current = touchY;
                }
            }["LandingPage.useEffect.handleTouchMove"];
            const handleTouchEnd = {
                "LandingPage.useEffect.handleTouchEnd": ()=>{
                    touchStartY.current = 0;
                    lastTouchY.current = 0;
                }
            }["LandingPage.useEffect.handleTouchEnd"];
            // Use touchstart and touchend as passive, but touchmove needs to prevent default conditionally
            window.addEventListener("touchstart", handleTouchStart, {
                passive: true
            });
            window.addEventListener("touchmove", handleTouchMove, {
                passive: false
            });
            window.addEventListener("touchend", handleTouchEnd, {
                passive: true
            });
            return ({
                "LandingPage.useEffect": ()=>{
                    window.removeEventListener("touchstart", handleTouchStart);
                    window.removeEventListener("touchmove", handleTouchMove);
                    window.removeEventListener("touchend", handleTouchEnd);
                }
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], [
        scrollProgress
    ]);
    // Calculate overlay darkness (0 to 1 for complete coverage)
    const overlayDarkness = Math.min(1, scrollProgress / 1000);
    // Nav opacity and slide animation
    const getNavStyle = ()=>{
        let opacity = 1;
        let translateY = 0;
        if (scrollProgress <= 300) {
            opacity = 1 - scrollProgress / 300;
            translateY = 0;
        } else if (scrollProgress > 300 && scrollProgress < 1750) {
            opacity = 0;
            translateY = -100;
        } else if (scrollProgress >= 1750 && scrollProgress <= 2250) {
            opacity = 1;
            translateY = -100 + (scrollProgress - 1750) / 500 * 100;
        } else if (scrollProgress > 2250) {
            opacity = 1;
            translateY = 0;
        }
        return {
            opacity,
            transform: `translateY(${translateY}px)`,
            transition: "opacity 0.3s, transform 0.3s"
        };
    };
    // Grid squares animation - smooth staggered appearance
    const getSquareScale = (index)=>{
        const startPoint = index * 80;
        const animationLength = 200;
        if (scrollProgress >= startPoint + animationLength) return 1;
        if (scrollProgress >= startPoint) {
            return (scrollProgress - startPoint) / animationLength;
        }
        return 0;
    };
    // Border radius animation (1000-1250: rounded to square)
    const getBorderRadius = ()=>{
        if (scrollProgress < 1000) return 24;
        if (scrollProgress >= 1250) return 0;
        return 24 - (scrollProgress - 1000) / 250 * 24;
    };
    // Gap animation (1250-1500: connect squares)
    const getGap = ()=>{
        if (scrollProgress < 1250) return 20;
        if (scrollProgress >= 1500) return 0;
        return 20 - (scrollProgress - 1250) / 250 * 20;
    };
    // Expand to full screen (1250-1500, then 1500-1750)
    const getGridExpansion = ()=>{
        if (scrollProgress < 1250) return 1;
        if (scrollProgress < 1500) return 1 + (scrollProgress - 1250) / 250 * 0.5;
        if (scrollProgress >= 1750) return 2.5;
        return 1.5 + (scrollProgress - 1500) / 250 * 1.0;
    };
    // Text opacity in squares (1250-1500: fade out)
    const getTextOpacity = ()=>{
        if (scrollProgress < 1250) return 1;
        if (scrollProgress >= 1500) return 0;
        return 1 - (scrollProgress - 1250) / 250;
    };
    // New content slide up animation (1750-2250)
    const getNewContentTranslateY = ()=>{
        if (scrollProgress < 1750) return 100;
        if (scrollProgress >= 3250) return -100;
        return 100 - (scrollProgress - 1750) / 1250 * 125;
    };
    const getNewContentOpacity = ()=>{
        if (scrollProgress < 1750) return 0;
        if (scrollProgress > 1750 && scrollProgress < 3000) return 1;
        if (scrollProgress >= 3250) return 0;
        return 1 - (scrollProgress - 3000) / 250;
    };
    // Slide up animation for stats
    const getStatsTranslateY = ()=>{
        if (scrollProgress < 2750) return 100;
        if (scrollProgress >= 3250) return 0;
        return 100 - (scrollProgress - 2750) / 1000 * 100;
    };
    const getStatsOpacity = ()=>{
        if (scrollProgress < 2250) return 0;
        if (scrollProgress >= 2750) return 1;
        return (scrollProgress - 1750) / 1000;
    };
    const icons = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__["Battery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    ];
    const colors = [
        "bg-blue-500",
        "bg-purple-500",
        "bg-yellow-500",
        "bg-green-500",
        "bg-cyan-500",
        "bg-emerald-500",
        "bg-orange-500",
        "bg-pink-500",
        "bg-indigo-500"
    ];
    const squares = text.squares.map((square, index)=>({
            title: square.title,
            subtitle: square.subtitle,
            icon: icons[index],
            color: colors[index]
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen overflow-hidden relative bg-[rgb(21,21,21)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 right-0 z-50",
                style: getNavStyle(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navigation$2f$Nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/landingpage/LandingPage.jsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col justify-between",
                style: {
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 1s ease-in-out"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0)_80%)]"
                    }, void 0, false, {
                        fileName: "[project]/components/landingpage/LandingPage.jsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 transition-opacity duration-200 pointer-events-none z-30",
                        style: {
                            opacity: overlayDarkness,
                            backgroundColor: 'rgb(21, 21, 21)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/landingpage/LandingPage.jsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-center md:justify-start w-full max-w-7xl px-5 mx-auto md:pt-[8vh] flex-grow relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-1/2 text-center md:text-left",
                            style: {
                                transform: `translateX(${Math.max(-400, -400 * (scrollProgress / 1000))}px)`,
                                transition: "transform 0.3s ease-in-out"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg flex justify-center md:justify-start font-aeonik whitespace-nowrap overflow-visible",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex",
                                        children: splitChars(line1).map(({ char, index })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: "inline-block",
                                                initial: {
                                                    opacity: 0,
                                                    x: -20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: index * 0.03
                                                },
                                                children: char === " " ? "\u00A0" : char
                                            }, index, false, {
                                                fileName: "[project]/components/landingpage/LandingPage.jsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/landingpage/LandingPage.jsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 300,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg flex justify-center md:justify-start mt-2 font-aeonik whitespace-nowrap overflow-visible pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex",
                                        children: splitChars(line2).map(({ char, index })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: "inline-block",
                                                initial: {
                                                    opacity: 0,
                                                    x: -20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: 0.4 + index * 0.03
                                                },
                                                children: char === " " ? "\u00A0" : char
                                            }, index, false, {
                                                fileName: "[project]/components/landingpage/LandingPage.jsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/landingpage/LandingPage.jsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 316,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "text-md md:text-lg mt-3 text-gray-200",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 1.0
                                    },
                                    children: text.description.p1
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "text-sm mt-2 text-gray-300",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 1.2
                                    },
                                    children: text.description.p2
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex flex-col sm:flex-row gap-4 mt-6",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 1.5,
                                        type: "spring",
                                        stiffness: 120
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/connect",
                                            className: "backdrop-blur-2xl bg-white/20 text-white font-semibold px-7 py-3 rounded-2xl shadow-[0_10px_45px_rgba(0,0,0,0.45)] hover:bg-white/50 hover:shadow-[0_10px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:scale-110",
                                            children: text.buttons.connect
                                        }, void 0, false, {
                                            fileName: "[project]/components/landingpage/LandingPage.jsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToProgress(1000, 400),
                                            className: "backdrop-blur-xl bg-white/15 text-white font-medium px-6 py-3 rounded-2xl shadow-[0_8px_35px_rgba(0,0,0,0.35)] hover:bg-white/25 hover:shadow-[0_8px_45px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-105",
                                            children: text.buttons.learnMore
                                        }, void 0, false, {
                                            fileName: "[project]/components/landingpage/LandingPage.jsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/landingpage/LandingPage.jsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/landingpage/LandingPage.jsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/landingpage/LandingPage.jsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center pointer-events-none z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 w-full px-4 transition-all duration-300",
                    style: {
                        gap: `${getGap()}px`,
                        transform: `scale(${getGridExpansion()})`,
                        maxWidth: '750px'
                    },
                    children: squares.slice(0, isMobile ? 6 : 9).map((square, index)=>{
                        const IconComponent = square.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-square flex flex-col items-center justify-center p-3 sm:p-6 transition-all duration-300",
                            style: {
                                transform: `scale(${getSquareScale(index)})`,
                                opacity: getSquareScale(index),
                                borderRadius: `${getBorderRadius()}px`,
                                backgroundColor: "rgba(50, 50, 50, 0.9)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3",
                                    style: {
                                        backgroundColor: "rgba(70, 70, 70, 0.8)",
                                        opacity: getTextOpacity()
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                        className: "w-5 h-5 sm:w-7 sm:h-7 text-white",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/components/landingpage/LandingPage.jsx",
                                        lineNumber: 407,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 400,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm sm:text-lg font-bold text-white text-center mb-1",
                                    style: {
                                        opacity: getTextOpacity()
                                    },
                                    children: square.title
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 409,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] sm:text-xs text-gray-300 text-center font-medium leading-tight",
                                    style: {
                                        opacity: getTextOpacity()
                                    },
                                    children: square.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 412,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/landingpage/LandingPage.jsx",
                            lineNumber: 390,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/landingpage/LandingPage.jsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4",
                style: {
                    transform: `translateY(${getNewContentTranslateY()}vh)`,
                    opacity: getNewContentOpacity(),
                    transition: "transform 0.1s ease-out, opacity 0.1s ease-out"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl w-full px-4 sm:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-white text-center md:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6",
                                    children: text.newContent.headline
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 md:mb-4",
                                    children: text.newContent.p1
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base md:text-lg text-gray-400 mb-4",
                                    children: text.newContent.p2
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/landingpage/LandingPage.jsx",
                            lineNumber: 432,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-xs sm:max-w-sm md:max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/humidifier.png",
                                    width: 400,
                                    height: 400,
                                    alt: "Smart Humidifier Detail",
                                    className: "drop-shadow-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                                    lineNumber: 447,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/landingpage/LandingPage.jsx",
                                lineNumber: 446,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/landingpage/LandingPage.jsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                    lineNumber: 430,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/landingpage/LandingPage.jsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4",
                style: {
                    transform: `translateY(${getStatsTranslateY()}vh)`,
                    opacity: getStatsOpacity(),
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 bg-white/90 rounded-2xl sm:rounded-3xl shadow-[0_12px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-start justify-center text-left w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6",
                                children: text.stats_title.headline
                            }, void 0, false, {
                                fileName: "[project]/components/landingpage/LandingPage.jsx",
                                lineNumber: 472,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full",
                                children: text.stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start justify-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 tracking-tight",
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/landingpage/LandingPage.jsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs sm:text-sm md:text-base text-gray-500 font-medium",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/landingpage/LandingPage.jsx",
                                                lineNumber: 483,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/components/landingpage/LandingPage.jsx",
                                        lineNumber: 476,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/landingpage/LandingPage.jsx",
                                lineNumber: 474,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/landingpage/LandingPage.jsx",
                        lineNumber: 471,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/landingpage/LandingPage.jsx",
                    lineNumber: 468,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/landingpage/LandingPage.jsx",
                lineNumber: 460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/landingpage/LandingPage.jsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
};
_s(LandingPage, "1LjYpHjU6uLPUuMElU+Z3z5l45Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LandingPage;
const __TURBOPACK__default__export__ = LandingPage;
var _c;
__turbopack_refresh__.register(_c, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landingpage$2f$LandingPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/landingpage/LandingPage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/context/LanguageContext.js [app-client] (ecmascript)");
'use client';
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landingpage$2f$LandingPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 10,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_549353._.js.map